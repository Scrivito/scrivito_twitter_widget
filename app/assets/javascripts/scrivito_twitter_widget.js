window.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);

  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };

  return t;
}(document, "script", "twitter-wjs"));

twttr.ready(function(twttr) {
  scrivito.on('content', function(content) {
    $.each($('.tweet_by_id'), function(index, elem) {
      var id = $(elem).data('id');
      var type = $(elem).data('type');

      $(elem).html('');
      if(type == "video") {
        twttr.widgets.createVideo(id, elem)
      } else if(type == "timeline") {
        twttr.widgets.createTimeline(id, elem)
      } else {
        twttr.widgets.createTweet(id, elem)
      }
    });
  });
});
