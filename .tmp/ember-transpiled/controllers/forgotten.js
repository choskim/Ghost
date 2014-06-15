define("ghost/controllers/forgotten", 
  ["exports"],
  function(__exports__) {
    "use strict";
    /*global console, alert */
    
    var ForgottenController = Ember.Controller.extend({
        email: '',
        actions: {
            submit: function () {
                var self = this;
                self.user.fetchForgottenPasswordFor(this.email)
                    .then(function () {
                        alert('@TODO Notification: Success');
                        self.transitionToRoute('signin');
                    })
                    .catch(function (response) {
                        alert('@TODO');
                        console.log(response);
                    });
            }
        }
    });
    
    __exports__["default"] = ForgottenController;
  });