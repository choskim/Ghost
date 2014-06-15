define("ghost/controllers/editor/new", 
  ["ghost/mixins/editor-base-controller","ghost/mixins/marker-manager","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var EditorControllerMixin = __dependency1__["default"];
    var MarkerManager = __dependency2__["default"];

    var EditorNewController = Ember.ObjectController.extend(EditorControllerMixin, MarkerManager, {
        init: function () {
            var self = this;

            this._super();

            window.onbeforeunload = function () {
                return self.get('isDirty') ? self.unloadDirtyMessage() : null;
            };
        },

        actions: {
            /**
              * Redirect to editor after the first save
              */
            save: function () {
                var self = this;
                this._super().then(function (model) {
                    if (model.get('id')) {
                        self.transitionTo('editor.edit', model);
                    }
                    return model;
                });
            }
        }
    });

    __exports__["default"] = EditorNewController;
  });