define("ghost/models/base", 
  ["ghost/utils/ghost-paths","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var ghostPaths = __dependency1__["default"];

    var BaseModel = Ember.Object.extend({

        fetch: function () {
            return ic.ajax.request(this.url, {
                type: 'GET'
            });
        },

        save: function () {
            return ic.ajax.request(this.url, {
                type: 'PUT',
                dataType: 'json',
                // @TODO: This is passing _oldWillDestory and _willDestroy and should not.
                data: JSON.stringify(this.getProperties(Ember.keys(this)))
            });
        }
    });

    BaseModel.apiRoot = ghostPaths().apiRoot;
    BaseModel.subdir = ghostPaths().subdir;
    BaseModel.adminRoot = ghostPaths().adminRoot;

    __exports__["default"] = BaseModel;
  });