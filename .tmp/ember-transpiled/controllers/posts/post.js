define("ghost/controllers/posts/post", 
  ["exports"],
  function(__exports__) {
    "use strict";
    var PostController = Ember.ObjectController.extend({
        isPublished: Ember.computed.equal('status', 'published'),

        actions: {
            toggleFeatured: function () {
                this.set('featured', !this.get('featured'));

                this.get('model').save();
            }
        }
    });

    __exports__["default"] = PostController;
  });