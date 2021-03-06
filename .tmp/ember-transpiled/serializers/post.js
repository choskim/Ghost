define("ghost/serializers/post", 
  ["ghost/serializers/application","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var ApplicationSerializer = __dependency1__["default"];

    var PostSerializer = ApplicationSerializer.extend({
        serializeHasMany: function (record, json, relationship) {
            var key = relationship.key;

            if (key === 'tags') {
                json[key] = Ember.get(record, key).map(function (tag) {
                    return tag.serialize({ includeId: true });
                });
            } else {
                this._super.apply(this, arguments);
            }
        }
    });

    __exports__["default"] = PostSerializer;
  });