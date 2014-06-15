define("ghost/components/gh-blur-input", 
  ["exports"],
  function(__exports__) {
    "use strict";
    var BlurInput = Ember.TextField.extend({
        selectOnClick: false,
        click: function (event) {
            if (this.get('selectOnClick')) {
                event.currentTarget.select();
            }
        },
        focusOut: function () {
            this.sendAction('action', this.get('value'));
        }
    });

    __exports__["default"] = BlurInput;
  });