/** 
 *
 * @desc Variablen und Scopes erforschen
 *
 * @package Transfer
 * @module Autark
 * @author Helmut <helmut.hauff@autark.com>
 * @version v1.1.1
 * @since 2019-12-02
 * @see i.e. inspired by Michael <michael.reichart@gfu.net>
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2019 Helmut Hauff, Baunatal
 */

!(function () {
  'use strict';

  // DECLARATION

  // FUNCTION

  /**
   * Get the type of the passed variable (arrays will be marked as 'array')
   * @param {any} obj - Variable that type should be determine.
   * 
   * @example
   *  var myArray = [1, 2];
   *  var result = _getType(myArray));
   *  // result = 'array';
   */
  function _getType(obj) {
    if (Array.isArray(obj) === true) {
      return 'array';
    }
    return typeof (obj);
  }

  /**
   * Creation of a string which contains then name, type and value of the passed variable.
   * @param {string} name - Name of the variable. 
   * @param {any} obj - variable that should logged.
   * @returns {string} Logging text of the variable (Format '<name> {<type>}: <value>').
   * 
   * @example
   * 
   *  var myNumber = 23;
   *  var result = _buildLogStringFromVariable("myNumber", myNumber);
   *  // result = 'mynumber {number}: 23'
   */
  function _buildLogStringFromVariable(name, obj) {
    let
      _message,
      _name = name || undefined,
      _obj = obj || undefined;

    if (_name === undefined) return 'Parameter "name" is undefined';
    if (_obj === undefined) return 'Parameter "obj" is undefined';

    try {
      _message = name + ' {' + _getType(obj) + '}: ' + obj;
      return _message;
    } catch (error) {
      return 'error occured: ' + error;
    }
  }

  /**
   * Function to log a variable (name, type, value) on the console.
   * 
   * @param {string} name - Name of the variable. 
   * @param {any} obj - variable that should logged.
   * 
   * @example
   * 
   *  var myString = "Hello Autark";
   *  window.Autark.log("myString", myString);
   *  // Output: 'myString {string}: Hello Autark'
   */
  function _log(name, obj) {
    var _logtext = _buildLogStringFromVariable(name, obj);
    console.log(_logtext);
  }

  /**
   * The main aka. module init function.
   * Infrastructure, only used by CONTROL.
   */
  function _main() {
    window.tools = {} || window.tools;
    window.tools.log = _log;
  }

  // CONTROL
  _main();

}());

window.onload = function () {
  'use strict';

  let
    myString = "Hello Autark",
    myNumber = 23,
    myBoolean = false,
    myArray = [1, 2],
    myObject = {},
    myFunction = function () {};

  window.tools.log("myString", myString);
  window.tools.log("mynumber", myNumber);
  window.tools.log("myBoolean", myBoolean);
  window.tools.log("myArray", myArray);
  window.tools.log("myObject", myObject);
  window.tools.log("myFunction", myFunction);

};