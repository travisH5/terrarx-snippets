window.addEventListener('DOMContentLoaded', function () {
  var query = window.location.search;
  if (query.length < 2) return;

  document.querySelectorAll('a[href*="intake.terrahealthrx.com"]').forEach(function(el) {
    var href = el.getAttribute('href');
    if (!href.includes('submissionId') && !href.includes('affid')) {
      var separator = href.indexOf('?') !== -1 ? '&' : '?';
      var newHref = href + separator + query.slice(1);
      el.setAttribute('href', newHref);
    }
  });
});
