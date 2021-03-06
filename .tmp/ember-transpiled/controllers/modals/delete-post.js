define("ghost/controllers/modals/delete-post", 
  ["exports"],
  function(__exports__) {
    "use strict";
    var DeletePostController = Ember.Controller.extend({
        actions: {
            confirmAccept: function () {
                var self = this;

                this.get('model').destroyRecord().then(function () {
                    self.get('popover').closePopovers();
                    self.notifications.showSuccess('Your post has been deleted.');
                    self.transitionToRoute('posts.index');
                }, function () {
                    self.notifications.showError('Your post could not be deleted. Please try again.');
                });

            },

            confirmReject: function () {
                return false;
            }
        },
        confirm: {
            accept: {
                text: 'Delete',
                buttonClass: 'button-delete'
            },
            reject: {
                text: 'Cancel',
                buttonClass: 'button'
            }
        }
    });

    __exports__["default"] = DeletePostController;
  });