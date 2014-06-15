define("ghost/routes/reset", 
  ["ghost/mixins/style-body","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var styleBody = __dependency1__["default"];

    var ResetRoute = Ember.Route.extend(styleBody, {
        classNames: ['ghost-reset'],
        setupController: function (controller, params) {
            controller.token = params.token;
        }
    });

    __exports__["default"] = ResetRoute;
  });