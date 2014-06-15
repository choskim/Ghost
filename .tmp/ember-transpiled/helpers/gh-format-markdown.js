define("ghost/helpers/gh-format-markdown", 
  ["exports"],
  function(__exports__) {
    "use strict";
    /* global Showdown, Handlebars */
    var showdown = new Showdown.converter({extensions: ['ghostimagepreview', 'ghostgfm']});

    var formatMarkdown = Ember.Handlebars.makeBoundHelper(function (markdown) {
        return new Handlebars.SafeString(showdown.makeHtml(markdown || ''));
    });

    __exports__["default"] = formatMarkdown;
  });