define("ghost/routes/forgotten", 
  ["ghost/mixins/style-body","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var styleBody = __dependency1__["default"];

    var ForgottenRoute = Ember.Route.extend(styleBody, {
        classNames: ['ghost-forgotten']
    });

    __exports__["default"] = ForgottenRoute;
  });