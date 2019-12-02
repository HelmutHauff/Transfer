/** 
 *
 * @desc Variablen und Scopes erforschen
 *
 * @package Transfer
 * @module scopes_and_types
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
  var myString = "Hello Autark";
  var myNumber = 23;
  var myBoolean = false;
  var myObject = {};
  var myFunction = function () {};

  // FUNCTION
  function _log(name, obj) {
    console.log(name + ' {' + typeof (obj) + '}: ' + obj);
  }

  function _main() {
    window.Autark = {} || window.Autark;
    window.Autark.log = _log;
  }

  // CONTROL
  _main();

}());

!(function () {
  'use strict';

  var myString = "Hello Autark";
  var myNumber = 23;
  var myBoolean = false;
  var myObject = {};
  var myFunction = function () {};

  window.Autark.log("myString", myString);
  window.Autark.log("mynumber", myNumber);
  window.Autark.log("myBoolean", myBoolean);
  window.Autark.log("myObject", myObject);
  window.Autark.log("myFunction", myFunction);

})();