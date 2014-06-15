define("ghost/initializers/trailing-history", 
  ["exports"],
  function(__exports__) {
    "use strict";
    /*global Ember */

    var trailingHistory = Ember.HistoryLocation.extend({
        setURL: function (path) {
            var state = this.getState();
            path = this.formatURL(path);
            path = path.replace(/\/?$/, '/');

            if (state && state.path !== path) {
                this.pushState(path);
            }
        }
    });

    var registerTrailingLocationHistory = {
        name: 'registerTrailingLocationHistory',

        initialize: function (container, application) {
            application.register('location:trailing-history', trailingHistory);
        }
    };

    __exports__["default"] = registerTrailingLocationHistory;
  });