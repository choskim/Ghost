define("ghost/routes/editor/new", 
  ["ghost/routes/authenticated","ghost/mixins/style-body","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var AuthenticatedRoute = __dependency1__["default"];
    var styleBody = __dependency2__["default"];

    var EditorNewRoute = AuthenticatedRoute.extend(styleBody, {
        classNames: ['editor'],

        model: function () {
            return this.store.createRecord('post');
        },

        setupController: function (controller, model) {
            this._super(controller, model);
            controller.set('scratch', '');

            // used to check if anything has changed in the editor
            controller.set('previousTagNames', Ember.A());
        },

        actions: {
            willTransition: function (transition) {
                var controller = this.get('controller'),
                    isDirty = controller.get('isDirty'),

                    model = controller.get('model'),
                    isNew = model.get('isNew'),
                    isSaving = model.get('isSaving'),
                    isDeleted = model.get('isDeleted');

                // when `isDeleted && isSaving`, model is in-flight, being saved
                // to the server. in that case  we can probably just transition
                // now and have the server return the record, thereby updating it
                if (!(isDeleted && isSaving) && isDirty) {
                    transition.abort();
                    this.send('openModal', 'leave-editor', [controller, transition]);
                    return;
                }

                if (isNew) {
                    model.deleteRecord();
                }

                // since the transition is now certain to complete..
                window.onbeforeunload = null;
            }
        }
    });

    __exports__["default"] = EditorNewRoute;
  });