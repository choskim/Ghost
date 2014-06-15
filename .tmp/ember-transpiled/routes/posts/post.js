define("ghost/routes/posts/post", 
  ["ghost/routes/authenticated","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var AuthenticatedRoute = __dependency1__["default"];

    var PostsPostRoute = AuthenticatedRoute.extend({
        model: function (params) {
            var post = this.modelFor('posts').findBy('id', params.post_id);

            if (!post) {
                this.transitionTo('posts.index');
            }

            return post;
        }
    });

    __exports__["default"] = PostsPostRoute;
  });