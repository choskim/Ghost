define("ghost/routes/settings/general", 
  ["ghost/utils/ajax","ghost/routes/authenticated","ghost/models/settings","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __exports__) {
    "use strict";
    var ajax = __dependency1__["default"];
    var AuthenticatedRoute = __dependency2__["default"];
    var SettingsModel = __dependency3__["default"];

    var SettingsGeneralRoute = AuthenticatedRoute.extend({
        model: function () {
            return ajax('/ghost/api/v0.1/settings/?type=blog,theme,app').then(function (resp) {
                return SettingsModel.create(resp);
            });
        }
    });

    __exports__["default"] = SettingsGeneralRoute;
  });