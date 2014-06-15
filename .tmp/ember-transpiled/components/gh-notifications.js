define("ghost/components/gh-notifications", 
  ["exports"],
  function(__exports__) {
    "use strict";
    var NotificationsComponent = Ember.Component.extend({
        tagName: 'aside',
        classNames: 'notifications',
        messages: Ember.computed.alias('notifications')
    });

    __exports__["default"] = NotificationsComponent;
  });