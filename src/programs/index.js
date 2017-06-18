window.addEventListener('load', function() {
  document.querySelectorAll("link[rel=import][href$='.svg'").forEach(function(link) {
    link.addEventListener('load', function() {
      var url = new URL(link.href);
      var svg = link.import.querySelector('svg');
      document.querySelectorAll("img[src='" + url.pathname + "']").forEach(function(img) {
        img.replaceWith(svg);
      });
    });
  });
});
