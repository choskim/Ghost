define("ghost/routes/debug", 
  ["ghost/mixins/style-body","ghost/routes/authenticated","ghost/models/settings","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __exports__) {
    "use strict";
    var styleBody = __dependency1__["default"];
    var AuthenticatedRoute = __dependency2__["default"];
    var SettingsModel = __dependency3__["default"];

    __exports__["default"] = AuthenticatedRoute.extend(styleBody, {
        classNames: ['settings'],

        model: function () {
            return SettingsModel.create();
        }
    });
  });