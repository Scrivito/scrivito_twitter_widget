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

(function($, App) {
  'use strict';

  scrivito.on('content', function(content) {
    twttr.ready(function(twttr) {
      load_twitter(twttr);
    });
  });

  var load_twitter = function(twttr) {
    $.each($('.tweet_by_id'), function(index, elem) {
      var id = $(elem).data('id');
      var type = $(elem).data('type');

      $(elem).html('');
      if(type == "timeline") {
        var sourceType = $(elem).data('source-type');

        var options = {
          sourceType: sourceType,
        };

        var key = 'screenName';
        key = sourceType == 'collection' ? 'id' : key
        key = sourceType == 'widget' ? 'widgetId' : key

        options[key] = id;
        twttr.widgets.createTimeline(options,
        elem,
        {
          chrome: $(elem).data('chrome'),
          height: $(elem).data('height'),
          tweetLimit: $(elem).data('limit')
        })
      } else {
        twttr.widgets.createTweet(id, elem, {
          conversation: $(elem).data('conversation'),
          cards: $(elem).data('cards'),
          align: $(elem).data('align'),
          theme: $(elem).data('theme')
        })
      }
    });
  }
})(jQuery, this);
