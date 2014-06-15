define("ghost/app", 
  ["ember/resolver","ghost/fixtures/init","ember/load-initializers","ghost/utils/link-view","ghost/utils/text-field","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __dependency5__, __exports__) {
    "use strict";
    var Resolver = __dependency1__["default"];
    var initFixtures = __dependency2__["default"];
    var loadInitializers = __dependency3__["default"];

    Ember.MODEL_FACTORY_INJECTIONS = true;

    var App = Ember.Application.extend({
        /**
         * These are debugging flags, they are useful during development
         */
        LOG_ACTIVE_GENERATION: true,
        LOG_MODULE_RESOLVER: true,
        LOG_TRANSITIONS: true,
        LOG_TRANSITIONS_INTERNAL: true,
        LOG_VIEW_LOOKUPS: true,
        modulePrefix: 'ghost',
        Resolver: Resolver['default']
    });

    initFixtures();

    loadInitializers(App, 'ghost');

    __exports__["default"] = App;
  });