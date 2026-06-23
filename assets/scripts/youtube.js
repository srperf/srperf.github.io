(function () {
  'use strict';

  var CHANNELS = [
    { id: 'youtube-eng', handle: 'SrPerfENG', channelId: 'UCO-RlGccAUQnMqTaBkvUJhQ' },
    { id: 'youtube-esp', handle: 'SrPerfESP', channelId: 'UCSd5XYudbkojiPKNNKmma8w' }
  ];

  var PER_PAGE = 4;
  var MAX_VIDEOS = 50;
  var RSS2JSON_URL = 'https://api.rss2json.com/v1/api.json?rss_url=';

  function formatDate(str) {
    if (!str) return '';
    try {
      return new Date(str.replace(' ', 'T')).toLocaleDateString('en-US', {
        year: 'numeric', month: 'short', day: 'numeric'
      });
    } catch (_) { return str; }
  }

  function escapeHtml(s) {
    return (typeof s === 'string' ? s : '')
      .replace(/&/g, '&amp;')
      .replace(/"/g, '&quot;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  async function fetchVideos(channelId) {
    var rssUrl = 'https://www.youtube.com/feeds/videos.xml?channel_id=' + channelId;
    var url = RSS2JSON_URL + encodeURIComponent(rssUrl);
    var resp = await fetch(url);
    if (!resp.ok) throw new Error('HTTP ' + resp.status);
    var data = await resp.json();
    if (data.status !== 'ok') throw new Error('rss2json returned ' + data.status);
    var videos = [];
    for (var i = 0; i < data.items.length && videos.length < MAX_VIDEOS; i++) {
      var item = data.items[i];
      var videoId = '';
      if (item.guid) videoId = item.guid.replace('yt:video:', '');
      if (!videoId) {
        var m = item.link.match(/v=([^&]+)/);
        if (m) videoId = m[1];
      }
      if (!videoId) continue;
      videos.push({
        videoId: videoId,
        title: item.title,
        published: item.pubDate || '',
        thumbnail: item.thumbnail || 'https://i.ytimg.com/vi/' + videoId + '/hqdefault.jpg'
      });
    }
    return videos;
  }

  function buildCard(v) {
    return '<a class="youtube-card" href="https://www.youtube.com/watch?v=' + v.videoId
      + '" target="_blank" rel="noopener noreferrer">'
      + '<div class="youtube-thumb">'
      + '<img src="' + v.thumbnail + '" alt="' + escapeHtml(v.title) + '" loading="lazy">'
      + '<div class="youtube-play-overlay">'
      + '<svg viewBox="0 0 68 48" width="68" height="48">'
      + '<path d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="#212121" fill-opacity="0.8"/>'
      + '<path d="M 45,24 27,14 27,34" fill="#fff"/>'
      + '</svg>'
      + '</div>'
      + '</div>'
      + '<div class="youtube-body">'
      + '<h3 class="youtube-title">' + escapeHtml(v.title) + '</h3>'
      + '<p class="youtube-date">' + formatDate(v.published) + '</p>'
      + '</div>'
      + '</a>';
  }

  function getPageWindow(tp, cp) {
    if (tp <= 5) {
      var a = [];
      for (var i = 1; i <= tp; i++) a.push(i);
      return a;
    }
    var start = Math.max(1, cp - 2);
    var end = Math.min(tp, start + 4);
    if (end - start < 4) start = Math.max(1, end - 4);
    var a = [];
    for (var i = start; i <= end; i++) a.push(i);
    return a;
  }

  function buildPagination(tp, cp) {
    if (tp <= 1) return '';
    var pages = getPageWindow(tp, cp);
    var h = '<nav class="youtube-pagination" aria-label="Video pages">';
    h += '<button class="youtube-page-btn' + (cp === 1 ? ' youtube-page-btn--disabled' : '')
      + '" data-page="prev"' + (cp === 1 ? ' disabled' : '') + '>&larr;</button>';
    for (var i = 0; i < pages.length; i++) {
      var p = pages[i];
      h += '<button class="youtube-page-btn' + (p === cp ? ' youtube-page-btn--active' : '')
        + '" data-page="' + p + '"' + (p === cp ? ' disabled' : '') + '>' + p + '</button>';
    }
    h += '<button class="youtube-page-btn' + (cp === tp ? ' youtube-page-btn--disabled' : '')
      + '" data-page="next"' + (cp === tp ? ' disabled' : '') + '>&rarr;</button>';
    h += '</nav>';
    return h;
  }

  function createChannel(containerId, channelId, handle) {
    var container = document.getElementById(containerId);
    if (!container) return;

    var videos = [];
    var currentPage = 1;

    function tp() { return Math.ceil(videos.length / PER_PAGE); }

    function render() {
      var total = tp();
      var start = (currentPage - 1) * PER_PAGE;
      var end = Math.min(start + PER_PAGE, videos.length);
      var html = '';
      for (var i = start; i < end; i++) html += buildCard(videos[i]);
      html += buildPagination(total, currentPage);
      container.innerHTML = html;
    }

    container.addEventListener('click', function (e) {
      var btn = e.target.closest('.youtube-page-btn');
      if (!btn) return;
      var p = btn.getAttribute('data-page');
      if (p === 'prev') currentPage--;
      else if (p === 'next') currentPage++;
      else currentPage = parseInt(p, 10);
      currentPage = Math.max(1, Math.min(currentPage, tp()));
      render();
    });

    async function init() {
      container.innerHTML = '<p class="youtube-msg">Loading videos...</p>';
      try {
        videos = await fetchVideos(channelId);
        if (videos.length === 0) {
          container.innerHTML = '<p class="youtube-msg">No videos found.</p>';
          return;
        }
        render();
      } catch (err) {
        container.innerHTML = '<p class="youtube-msg youtube-error">Unable to load videos for '
          + escapeHtml(handle) + '.</p>';
        console.error('YouTube fetch error:', err);
      }
    }

    init();
  }

  function start() {
    for (var i = 0; i < CHANNELS.length; i++) {
      var ch = CHANNELS[i];
      createChannel(ch.id, ch.channelId, ch.handle);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
