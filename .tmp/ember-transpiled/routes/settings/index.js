define("ghost/routes/settings/index", 
  ["ghost/routes/authenticated","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var AuthenticatedRoute = __dependency1__["default"];

    var SettingsIndexRoute = AuthenticatedRoute.extend({
        // redirect to general tab
        redirect: function () {
            this.transitionTo('settings.general');
        }
    });

    __exports__["default"] = SettingsIndexRoute;
  });