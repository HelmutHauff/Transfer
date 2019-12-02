/** 
 *
 * @desc Variablen und Scopes erforschen
 *
 * @package Transfer
 * @module Autark
 * @author Helmut <helmut.hauff@autark.com>
 * @version v1.0.0
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
   * Typeermittlung der übergebenen Variable (Arrays werden gesondert ausgewiesen).
   * @param {any} obj - Variable dessen Typ ermittelt werden soll.
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
    return typeof(obj);
  }

  /**
   * Erstellen einer Zeichenkette aus Variablennamen und Variable.
   * @param {string} name - Name der Variable. 
   * @param {any} obj - Variable die protokolliert werden soll.
   * @returns {string} Text zur Variable im Format '<name> {<typ>}: <wert>'.
   * 
   * @example
   * 
   *  var myNumber = 23;
   *  var result = _buildLogStringFromVariable("myNumber", myNumber);
   *  // result = 'mynumber {number}: 23'
   */
  function _buildLogStringFromVariable(name, obj) {
    return name + ' {' + _getType(obj) + '}: ' + obj;
  }

  /**
   * Funktion zum Protokollieren von Variablen (Name, Typ, Wert) auf der Konsole.
   * 
   * @param {string} name - Name der Variable. 
   * @param {any} obj - Variable die protokolliert werden soll.
   * 
   * @example
   * 
   *  var myString = "Hello Autark";
   *  window.Autark.log("myString", myString);
   *  // Ausgabe: 'myString {string}: Hello Autark'
   */
  function _log(name, obj) {
    var logtext = _buildLogStringFromVariable(name, obj);
    console.log(logtext);
  }

  function _main() {
    window.tools = {} || window.tools;
    window.tools.log = _log;
  }

  // CONTROL
  _main();

}());

window.onload = function () {
  'use strict';

  var myString = "Hello Autark";
  var myNumber = 23;
  var myBoolean = false;
  var myArray = [1, 2];
  var myObject = {};
  var myFunction = function () {};

  window.tools.log("myString", myString);
  window.tools.log("mynumber", myNumber);
  window.tools.log("myBoolean", myBoolean);
  window.tools.log("myArray", myArray);
  window.tools.log("myObject", myObject);
  window.tools.log("myFunction", myFunction);

};