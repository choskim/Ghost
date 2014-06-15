define("ghost/controllers/editor/edit", 
  ["ghost/mixins/editor-base-controller","ghost/mixins/marker-manager","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var EditorControllerMixin = __dependency1__["default"];
    var MarkerManager = __dependency2__["default"];

    var EditorEditController = Ember.ObjectController.extend(EditorControllerMixin, MarkerManager, {
        init: function () {
            var self = this;

            this._super();

            window.onbeforeunload = function () {
                return self.get('isDirty') ? self.unloadDirtyMessage() : null;
            };
        }
    });

    __exports__["default"] = EditorEditController;
  });