define("ghost/components/gh-upload-modal", 
  ["ghost/components/gh-modal-dialog","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    /*global console */

    var ModalDialog = __dependency1__["default"];

    var UploadModal = ModalDialog.extend({
        layoutName: 'components/gh-modal-dialog',

        didInsertElement: function () {
            this._super();

            // @TODO: get this real
            console.log('UploadController:afterRender');
            // var filestorage = $('#' + this.options.model.id).data('filestorage');
            // this.$('.js-drop-zone').upload({fileStorage: filestorage});
        },

        actions: {
            closeModal: function () {
                this.sendAction();
            },
            confirm: function (type) {
                var func = this.get('confirm.' + type + '.func');
                if (typeof func === 'function') {
                    func();
                }
                this.sendAction();
            }
        },

    });

    __exports__["default"] = UploadModal;
  });