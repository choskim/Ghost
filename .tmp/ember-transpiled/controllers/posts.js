define("ghost/controllers/posts", 
  ["ghost/utils/ajax","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var getRequestErrorMessage = __dependency1__.getRequestErrorMessage;

    var PostsController = Ember.ArrayController.extend({
        // set from PostsRoute
        paginationSettings: null,

        // holds the next page to load during infinite scroll
        nextPage: null,

        // indicates whether we're currently loading the next page
        isLoading: null,

        init: function () {
            this._super();

            var metadata = this.store.metadataFor('post');
            this.set('nextPage', metadata.pagination.next);
        },

        /**
         * Takes an ajax response, concatenates any error messages, then generates an error notification.
         * @param {jqXHR} response The jQuery ajax reponse object.
         * @return
         */
        reportLoadError: function (response) {
            var message = 'A problem was encountered while loading more posts';

            if (response) {
                // Get message from response
                message += ': ' + getRequestErrorMessage(response);
            } else {
                message += '.';
            }

            this.notifications.showError(message);
        },

        actions: {
            /**
            * Loads the next paginated page of posts into the ember-data store. Will cause the posts list UI to update.
            * @return
            */
            loadNextPage: function () {
                var self = this,
                    store = this.get('store'),
                    nextPage = this.get('nextPage'),
                    paginationSettings = this.get('paginationSettings');

                if (nextPage) {
                    this.set('isLoading', true);
                    this.set('paginationSettings.page', nextPage);
                    store.find('post', paginationSettings).then(function () {
                        var metadata = store.metadataFor('post');

                        self.set('nextPage', metadata.pagination.next);
                        self.set('isLoading', false);
                    }, function (response) {
                        self.reportLoadError(response);
                    });
                }
            }
        }
    });

    __exports__["default"] = PostsController;
  });