define("ghost/initializers/ghost-paths", 
  ["ghost/utils/ghost-paths","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var ghostPaths = __dependency1__["default"];

    var ghostPathsInitializer = {
        name: 'ghost-paths',
        after: 'store',

        initialize: function (container) {
            container.register('ghost:paths', ghostPaths(), {instantiate: false});

            container.injection('route', 'ghostPaths', 'ghost:paths');
            container.injection('model', 'ghostPaths', 'ghost:paths');
            container.injection('controller', 'ghostPaths', 'ghost:paths');
        }
    };

    __exports__["default"] = ghostPathsInitializer;
  });