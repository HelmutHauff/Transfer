/** 
 *
 * @desc Helper for logging.
 *
 * @package Transfer
 * @module Autark
 * @author Helmut <helmut.hauff@autark.com>
 * @version v1.1.0
 * @since 2019-12-20
 * @see i.e. inspired by Michael <michael.reichart@gfu.net>
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2019 Helmut Hauff, Baunatal
 */

!(function () {
    'use strict';

    // DECLARATION

    // FUNCTION

    /**
     * Function to log a text as error.
     * 
     * @param {string} text - Message to log
     * 
     * @example
     * 
     *  window.tools.logError("something went very wrong");
     *  // Output: 'error: something went very wrong'
     */
    function _logError(text) {
        console.log("error: " + text);
    }

    /**
     * Function to log a text as warning.
     * 
     * @param {string} text - Message to log
     * 
     * @example
     * 
     *  window.tools.logWarn("change operator");
     *  // Output: 'warn: change operator'
     */
    function _logWarn(text) {
        console.log("warn: " + text);
    }

    /**
     * The main aka. module init function.
     * Infrastructure, only used by CONTROL.
     */
    function _main() {
        window.tools = window.tools || {};
        window.tools.logWarn = _logWarn;
        window.tools.logError = _logError;
    }

    // CONTROL
    _main();

}());