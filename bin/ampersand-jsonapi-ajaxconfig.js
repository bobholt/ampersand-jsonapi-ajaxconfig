'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Decorate requests made by the target model/collection with the
 * necessary headers for JSON-API.
 * @module ampersand-jsonapi-ajaxconfig
 */

exports.default = {

  /**
   * Sets auth headers for [JSONAPI](http://jsonapi.org) requests to
   * the api server
   * @memberof module:mixins/http-bearer-auth
   * @instance
   * @returns {Object|null} - The headers to attach to the HTTP request.
   */

  ajaxConfig: function ajaxConfig() {
    return {
      headers: {
        'Content-Type': 'application/vnd.api+json',
        Accept: 'application/vnd.api+json'
      }
    };
  }
};
