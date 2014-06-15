define("ghost/routes/posts/index", 
  ["ghost/routes/authenticated","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var AuthenticatedRoute = __dependency1__["default"];

    var PostsIndexRoute = AuthenticatedRoute.extend({
        // redirect to first post subroute
        redirect: function () {
            var firstPost = (this.modelFor('posts') || []).get('firstObject');

            if (firstPost) {
                this.transitionTo('posts.post', firstPost);
            }
        }
    });

    __exports__["default"] = PostsIndexRoute;
  });