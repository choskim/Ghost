define("ghost/fixtures/settings", 
  ["exports"],
  function(__exports__) {
    "use strict";
    /* jshint ignore:start */
    var settings = {
        "title": "Ghost",
        "description": "Just a blogging platform.",
        "email": "ghost@tryghost.org",
        "logo": "",
        "cover": "",
        "defaultLang": "en_US",
        "postsPerPage": "6",
        "forceI18n": "true",
        "permalinks": "/:slug/",
        "activeTheme": "casper",
        "activeApps": "[]",
        "installedApps": "[]",
        "availableThemes": [
            {
                "name": "casper",
                "package": false,
                "active": true
            }
        ],
        "availableApps": []
    };

    __exports__["default"] = settings;
    /* jshint ignore:end */
  });