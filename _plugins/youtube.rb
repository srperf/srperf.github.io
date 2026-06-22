require 'net/http'
require 'rexml/document'
require 'time'

module Jekyll
  module Youtube
    CHANNELS = [
      { id: 'youtube-eng', handle: 'SrPerfENG', channel_id: 'UCO-RlGccAUQnMqTaBkvUJhQ' },
      { id: 'youtube-esp', handle: 'SrPerfESP', channel_id: 'UCSd5XYudbkojiPKNNKmma8w' }
    ].freeze

    PER_PAGE = 4
    MAX_VIDEOS = 50
    FEED_URL = 'https://www.youtube.com/feeds/videos.xml?channel_id=%s'

    ATOM_NS = 'http://www.w3.org/2005/Atom'
    YT_NS   = 'http://www.youtube.com/xml/schemas/2015'
    MEDIA_NS = 'http://search.yahoo.com/mrss/'

    NS = { 'atom' => ATOM_NS, 'yt' => YT_NS, 'media' => MEDIA_NS }.freeze

    def self.fetch_videos(channel_id)
      uri = URI(FEED_URL % channel_id)
      resp = Net::HTTP.get_response(uri)
      return [] unless resp.is_a?(Net::HTTPOK)

      doc = REXML::Document.new(resp.body)
      entries = []

      REXML::XPath.each(doc, '//atom:entry', NS) do |entry|
        video_id  = REXML::XPath.first(entry, 'yt:videoId', NS)&.text
        title     = REXML::XPath.first(entry, 'atom:title', NS)&.text
        published = REXML::XPath.first(entry, 'atom:published', NS)&.text
        thumb     = REXML::XPath.first(entry, './/media:thumbnail', NS)&.attribute('url')&.value

        next unless video_id && title

        entries << {
          'video_id'  => video_id,
          'title'     => title,
          'published' => published || '',
          'thumbnail' => thumb || "https://i.ytimg.com/vi/#{video_id}/hqdefault.jpg"
        }
        break if entries.length >= MAX_VIDEOS
      end

      entries
    end

    def self.format_date(iso_string)
      return '' if iso_string.nil? || iso_string.empty?
      Time.parse(iso_string).strftime('%b %d, %Y')
    rescue ArgumentError
      iso_string
    end

    def self.escape_html(str)
      str.to_s.gsub('&', '&amp;').gsub('"', '&quot;').gsub('<', '&lt;').gsub('>', '&gt;')
    end

    def self.build_card(video)
      title_esc = escape_html(video['title'])
      thumb     = video['thumbnail']
      vid       = video['video_id']
      date      = format_date(video['published'])

      <<~CARD
        <a class="youtube-card" href="https://www.youtube.com/watch?v=#{vid}" target="_blank" rel="noopener noreferrer">
          <div class="youtube-thumb">
            <img src="#{thumb}" alt="#{title_esc}" loading="lazy">
            <div class="youtube-play-overlay">
              <svg viewBox="0 0 68 48" width="68" height="48">
                <path d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="#212121" fill-opacity="0.8"/>
                <path d="M 45,24 27,14 27,34" fill="#fff"/>
              </svg>
            </div>
          </div>
          <div class="youtube-body">
            <h3 class="youtube-title">#{title_esc}</h3>
            <p class="youtube-date">#{date}</p>
          </div>
        </a>
      CARD
    end

    def self.build_pagination(total_pages)
      return '' if total_pages <= 1

      html = '<nav class="youtube-pagination" aria-label="Video pages">'
      html += '<button class="youtube-page-btn youtube-page-btn--disabled" data-page="prev" disabled>&larr;</button>'

      (1..total_pages).each do |p|
        active = p == 1 ? ' youtube-page-btn--active' : ''
        dis    = p == 1 ? ' disabled' : ''
        html += "<button class=\"youtube-page-btn#{active}\" data-page=\"#{p}\"#{dis}>#{p}</button>"
      end

      html += '<button class="youtube-page-btn" data-page="next">&rarr;</button>'
      html += '</nav>'
      html
    end

    def self.build_channel(videos, handle)
      return "<div class=\"youtube-grid\"><p class=\"youtube-msg youtube-error\">Unable to load videos for #{escape_html(handle)}.</p></div>" if videos.nil?
      return "<div class=\"youtube-grid\"><p class=\"youtube-msg\">No videos found for #{escape_html(handle)}.</p></div>" if videos.empty?

      total_pages = (videos.length.to_f / PER_PAGE).ceil
      html = '<div class="youtube-grid">'

      videos.each_slice(PER_PAGE).with_index do |page_videos, idx|
        page_num = idx + 1
        style = page_num == 1 ? '' : ' style="display:none"'
        html += "<div class=\"youtube-page\" data-page=\"#{page_num}\"#{style}>"
        page_videos.each { |v| html += build_card(v) }
        html += '</div>'
      end

      html += build_pagination(total_pages)
      html += '</div>'
      html
    end

    def self.build_all
      html = '<div class="youtube-channels">'

      CHANNELS.each do |ch|
        videos = nil
        begin
          videos = fetch_videos(ch[:channel_id])
        rescue StandardError => e
          puts "YouTube plugin error for #{ch[:handle]}: #{e.message}"
          videos = nil
        end

        html += '<div class="youtube-channel">'
        html += "<h2 class=\"youtube-channel-title\">#{escape_html(ch[:handle])}</h2>"
        html += build_channel(videos, ch[:handle])
        html += '</div>'
      end

      html += '</div>'

      html += <<~JS
        <script>
        (function(){var g=document.querySelectorAll('.youtube-grid');g.forEach(function(grid){var p=grid.querySelectorAll('.youtube-page'),b=grid.querySelectorAll('.youtube-page-btn[data-page]'),c=1;function s(n){if(n<1||n>p.length)return;c=n;p.forEach(function(e,i){e.style.display=i+1===n?'':'none'});b.forEach(function(e){var t=e.getAttribute('data-page');if(t==='prev'||t==='next'){e.disabled=(t==='prev'&&n===1)||(t==='next'&&n===p.length);e.className=e.className.replace(/ youtube-page-btn--disabled/g,'');if(e.disabled)e.className+=' youtube-page-btn--disabled'}else{e.className=e.className.replace(/ youtube-page-btn--active/g,'');e.disabled=false;if(parseInt(t)===n){e.className+=' youtube-page-btn--active';e.disabled=true}}});}b.forEach(function(e){e.addEventListener('click',function(){var t=e.getAttribute('data-page');if(t==='prev')s(c-1);else if(t==='next')s(c+1);else s(parseInt(t))})});s(1)});})();
        </script>
      JS

      html
    end
  end

  class YoutubeChannelsTag < Liquid::Tag
    def render(_context)
      Jekyll::Youtube.build_all
    end
  end
end

Liquid::Template.register_tag('youtube_channels', Jekyll::YoutubeChannelsTag)
