define("ghost/initializers/csrf", 
  ["exports"],
  function(__exports__) {
    "use strict";
    var CSRFInitializer = {
        name: 'csrf',

        initialize: function (container) {
            container.register('csrf:current', $('meta[name="csrf-param"]').attr('content'), { instantiate: false });

            container.injection('route', 'csrf', 'csrf:current');
            container.injection('controller', 'csrf', 'csrf:current');
        }
    };

    __exports__["default"] = CSRFInitializer;
  });