define("ghost/routes/settings", 
  ["ghost/mixins/style-body","ghost/routes/authenticated","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var styleBody = __dependency1__["default"];
    var AuthenticatedRoute = __dependency2__["default"];

    var SettingsRoute = AuthenticatedRoute.extend(styleBody, {
        classNames: ['settings']
    });

    __exports__["default"] = SettingsRoute;
  });