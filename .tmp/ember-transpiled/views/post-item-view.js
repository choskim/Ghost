define("ghost/views/post-item-view", 
  ["ghost/views/item-view","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var itemView = __dependency1__["default"];

    var PostItemView = itemView.extend({
        openEditor: function () {
            this.get('controller').send('openEditor', this.get('controller.model'));  // send action to handle transition to editor route
        }.on('doubleClick')
    });

    __exports__["default"] = PostItemView;
  });