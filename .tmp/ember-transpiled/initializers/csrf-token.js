define("ghost/initializers/csrf-token", 
  ["exports"],
  function(__exports__) {
    "use strict";
    var CSRFTokenInitializer = {
        name: 'csrf-token',

        initialize: function (container) {
            container.register('csrf:token', $('meta[name="csrf-param"]').attr('content'), { instantiate: false });

            container.injection('route', 'csrf', 'csrf:token');
            container.injection('model', 'csrf', 'csrf:token');
            container.injection('controller', 'csrf', 'csrf:token');
        }
    };

    __exports__["default"] = CSRFTokenInitializer;
  });