define("ghost/routes/posts", 
  ["ghost/mixins/style-body","ghost/routes/authenticated","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var styleBody = __dependency1__["default"];
    var AuthenticatedRoute = __dependency2__["default"];

    var paginationSettings = {
        status: 'all',
        staticPages: 'all',
        page: 1,
        limit: 15
    };

    var PostsRoute = AuthenticatedRoute.extend(styleBody, {
        classNames: ['manage'],

        model: function () {
            // using `.filter` allows the template to auto-update when new models are pulled in from the server.
            // we just need to 'return true' to allow all models by default.
            return this.store.filter('post', paginationSettings, function () {
                return true;
            });
        },

        setupController: function (controller, model) {
            this._super(controller, model);
            controller.set('paginationSettings', paginationSettings);
        },

        actions: {
            openEditor: function (post) {
                this.transitionTo('editor', post);
            }
        }
    });

    __exports__["default"] = PostsRoute;
  });