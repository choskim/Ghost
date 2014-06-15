define("ghost/routes/signout", 
  ["ghost/utils/ajax","ghost/mixins/style-body","ghost/routes/authenticated","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __exports__) {
    "use strict";
    var ajax = __dependency1__["default"];
    var styleBody = __dependency2__["default"];
    var AuthenticatedRoute = __dependency3__["default"];

    var SignoutRoute = AuthenticatedRoute.extend(styleBody, {
        classNames: ['ghost-signout'],

        beforeModel: function () {
            var self = this;

            ajax({
                url: this.get('ghostPaths').adminUrl('signout'),
                type: 'POST',
                headers: {
                    'X-CSRF-Token': this.get('csrf')
                }
            }).then(function () {

                // @TODO: new CSRF token to enable logging back in w/o refreshing - see issue #2861 for details
                self.transitionTo('signin');
            }, function (resp) {
                self.notifications.showAPIError(resp, 'There was a problem logging out, please try again.');
                self.transitionTo('posts');
            });
        }
    });

    __exports__["default"] = SignoutRoute;
  });