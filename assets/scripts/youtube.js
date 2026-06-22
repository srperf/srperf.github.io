(function () {
  var API_KEY = 'AIzaSyDbYBukQw7SeCQEvs8f-TYFQjWqjSMrEgI';
  var MAX_RESULTS = 50;
  var PER_PAGE = 4;

  var channels = [
    { id: 'youtube-eng', handle: '@SrPerfENG' },
    { id: 'youtube-esp', handle: '@SrPerfESP' }
  ];

  function formatDate(isoString) {
    return new Date(isoString).toLocaleDateString('en-US', {
      year: 'numeric', month: 'short', day: 'numeric'
    });
  }

  async function getChannelInfo(handle) {
    var url = 'https://www.googleapis.com/youtube/v3/channels?part=id,contentDetails&forHandle='
      + encodeURIComponent(handle.replace('@', '')) + '&key=' + API_KEY;
    var resp = await fetch(url);
    if (!resp.ok) throw new Error('Failed to resolve channel');
    var data = await resp.json();
    if (!data.items || data.items.length === 0) throw new Error('Channel not found');
    var item = data.items[0];
    return {
      id: item.id,
      uploadPlaylist: item.contentDetails.relatedPlaylists.uploads
    };
  }

  async function fetchVideos(uploadPlaylist) {
    var url = 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId='
      + uploadPlaylist + '&maxResults=' + MAX_RESULTS + '&key=' + API_KEY;
    var resp = await fetch(url);
    if (!resp.ok) throw new Error('Failed to fetch videos');
    var data = await resp.json();
    return (data.items || []).map(function (item) {
      return {
        id: { videoId: item.snippet.resourceId.videoId },
        snippet: item.snippet
      };
    });
  }

  function createChannel(containerId, handle) {
    var allVideos = [];
    var currentPage = 1;
    var container;

    function totalPages() {
      return Math.ceil(allVideos.length / PER_PAGE);
    }

    function renderCards(videos) {
      for (var i = 0; i < videos.length; i++) {
        var video = videos[i];
        var snippet = video.snippet;
        var videoId = video.id.videoId;
        var thumb = snippet.thumbnails.high || snippet.thumbnails.medium || snippet.thumbnails.default;

        var card = document.createElement('a');
        card.href = 'https://www.youtube.com/watch?v=' + videoId;
        card.target = '_blank';
        card.rel = 'noopener noreferrer';
        card.className = 'youtube-card';

        card.innerHTML =
          '<div class="youtube-thumb">'
            + '<img src="' + thumb.url + '" alt="' + snippet.title.replace(/"/g, '&quot;') + '" loading="lazy">'
            + '<div class="youtube-play-overlay">'
              + '<svg viewBox="0 0 68 48" width="68" height="48">'
                + '<path d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="#212121" fill-opacity="0.8"></path>'
                + '<path d="M 45,24 27,14 27,34" fill="#fff"></path>'
              + '</svg>'
            + '</div>'
          + '</div>'
          + '<div class="youtube-body">'
            + '<h3 class="youtube-title">' + snippet.title + '</h3>'
            + '<p class="youtube-date">' + formatDate(snippet.publishedAt) + '</p>'
          + '</div>';

        container.appendChild(card);
      }
    }

    function getPageWindow(tp) {
      if (tp <= 5) {
        var all = [];
        for (var i = 1; i <= tp; i++) all.push(i);
        return all;
      }
      var start = Math.max(1, currentPage - 2);
      var end = Math.min(tp, start + 4);
      if (end - start < 4) {
        start = Math.max(1, end - 4);
      }
      var pages = [];
      for (var i = start; i <= end; i++) pages.push(i);
      return pages;
    }

    function renderPagination() {
      var tp = totalPages();
      if (tp <= 1) return;

      var nav = document.createElement('nav');
      nav.className = 'youtube-pagination';
      nav.setAttribute('aria-label', 'Video pages');

      var prev = document.createElement('button');
      prev.className = 'youtube-page-btn' + (currentPage === 1 ? ' youtube-page-btn--disabled' : '');
      prev.textContent = '\u2190';
      prev.disabled = currentPage === 1;
      if (currentPage > 1) {
        prev.addEventListener('click', function () { goToPage(currentPage - 1); });
      }
      nav.appendChild(prev);

      var pages = getPageWindow(tp);
      for (var i = 0; i < pages.length; i++) {
        (function (page) {
          var pageBtn = document.createElement('button');
          pageBtn.className = 'youtube-page-btn' + (page === currentPage ? ' youtube-page-btn--active' : '');
          pageBtn.textContent = page;
          pageBtn.disabled = page === currentPage;
          pageBtn.addEventListener('click', function () { goToPage(page); });
          nav.appendChild(pageBtn);
        })(pages[i]);
      }

      var next = document.createElement('button');
      next.className = 'youtube-page-btn' + (currentPage === tp ? ' youtube-page-btn--disabled' : '');
      next.textContent = '\u2192';
      next.disabled = currentPage === tp;
      if (currentPage < tp) {
        next.addEventListener('click', function () { goToPage(currentPage + 1); });
      }
      nav.appendChild(next);

      container.appendChild(nav);
    }

    function goToPage(page) {
      currentPage = page;
      var start = (page - 1) * PER_PAGE;
      var end = start + PER_PAGE;
      var pageVideos = allVideos.slice(start, end);

      container.innerHTML = '';
      renderCards(pageVideos);
      renderPagination();
    }

    return {
      init: async function () {
        container = document.getElementById(containerId);
        if (!container) return;

        container.innerHTML = '<p class="youtube-msg">Loading videos...</p>';

        try {
          var info = await getChannelInfo(handle);
          allVideos = await fetchVideos(info.uploadPlaylist);
          if (allVideos.length === 0) {
            container.innerHTML = '<p class="youtube-msg">No videos found.</p>';
            return;
          }
          goToPage(1);
        } catch (err) {
          container.innerHTML = '<p class="youtube-msg youtube-error">Unable to load videos at this time.</p>';
          console.error('YouTube API error for ' + handle + ':', err);
        }
      }
    };
  }

  function initAll() {
    var instances = channels.map(function (ch) {
      return createChannel(ch.id, ch.handle);
    });
    for (var i = 0; i < instances.length; i++) {
      instances[i].init();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAll);
  } else {
    initAll();
  }
})();
