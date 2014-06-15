define("ghost/controllers/modals/upload", 
  ["exports"],
  function(__exports__) {
    "use strict";

    var UploadController = Ember.Controller.extend({
        actions: {
            confirmReject: function () {
                return true;
            }
        },

        confirm: {
            reject: {
                buttonClass: true,
                text: 'Cancel' // The reject button text
            }
        }
    });

    __exports__["default"] = UploadController;
  });