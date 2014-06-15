define("ghost/routes/signin", 
  ["ghost/utils/ajax","ghost/mixins/style-body","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var ajax = __dependency1__["default"];
    var styleBody = __dependency2__["default"];

    var isEmpty = Ember.isEmpty;

    var SigninRoute = Ember.Route.extend(styleBody, {
        classNames: ['ghost-login'],

        actions: {
            login: function () {
                var self = this,
                    controller = this.get('controller'),
                    data = controller.getProperties('email', 'password'),
                    //Data to check if user came in somewhere besides index
                    appController = this.controllerFor('application'),
                    loginTransition = appController.get('loginTransition');

                if (!isEmpty(data.email) && !isEmpty(data.password)) {

                    ajax({
                        url: this.get('ghostPaths').adminUrl('signin'),
                        type: 'POST',
                        headers: {'X-CSRF-Token': this.get('csrf')},
                        data: data
                    }).then(function (response) {
                        self.store.pushPayload({users: [response.userData]});
                        return self.store.find('user', response.userData.id);
                    }).then(function (user) {
                        self.send('signedIn', user);
                        self.notifications.clear();
                        if (loginTransition) {
                            appController.set('loginTransition', null);
                            loginTransition.retry();
                        } else {
                            self.transitionTo('posts');
                        }
                    }).catch(function (resp) {
                        self.notifications.showAPIError(resp, 'There was a problem logging in, please try again.');
                    });
                } else {
                    this.notifications.clear();

                    this.notifications.showError('Must enter email + password');
                }
            }
        }
    });

    __exports__["default"] = SigninRoute;
  });