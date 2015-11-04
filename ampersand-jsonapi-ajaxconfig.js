/**
 * Decorate requests made by the target model/collection with the
 * necessary headers for JSON-API.
 * @module ampersand-jsonapi-ajaxconfig
 */

export default {

  /**
   * Sets auth headers for [JSONAPI](http://jsonapi.org) requests to
   * the api server
   * @memberof module:mixins/http-bearer-auth
   * @instance
   * @returns {Object|null} - The headers to attach to the HTTP request.
   */
  ajaxConfig() {
    return {
      headers: {
        'Content-Type': 'application/vnd.api+json',
        Accept: 'application/vnd.api+json',
      },
    };
  },
};
