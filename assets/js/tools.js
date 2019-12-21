/** 
 *
 * @desc Generiere eine Navigation auf Basis eines Datenobjekts
 *
 * @package Transfer
 * @module Autark
 * @author Helmut <helmut.hauff@autark.com>
 * @version v2.0.0
 * @since 2019-12-18
 * @see i.e. inspired by Michael <michael.reichart@gfu.net>
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2019 Helmut Hauff, Baunatal
 */

!(function () {
    'use strict';

    // DECLARATION

    // FUNCTION

    /**
     * Checks if the passed variable is an object.
     * If the result is false, a warning is written to the log.
     * 
     * @param {any} obj - Variable that is checked
     * @returns {boolean} true if variable an object, otherwise false.
     * 
     * @example
     * 
     *  var myObject = {};
     *  var result = _isParameterObject({myObject});
     *  // result = false
     */
    function _isParameterObject(obj) {
        let _obj = obj || undefined;

        if (_obj === undefined || typeof (_obj) !== 'object') {
            window.tools.logWarn('Parameter of not an object.')
            return false;
        }
        return true;
    }

    /**
     * Checks if the passed variable(s) are defined. IMPORTANT: the 
     * variable(s) must be set in curled braces for the check. More than 
     * one variable to check can be set inside the braces, separated by comma.
     * If the result is false, a warning is written to the log.
     * 
     * @param {object} obj - One or more variables to check as object.
     * @returns {boolean} true if all variables are defined, otherwise false.
     * 
     * @example
     * 
     *  var myNumber = undefined,
     *      myString = '123'
     * 
     *  var result = _isParameterDefined({myNumber,myString});
     *  // result = false
     */
    function _isParameterDefined(obj) {
        if (_isParameterObject(obj) === false) {
            window.tools.logWarn('Parameter of isParameterDefined has no curled braces.')
            return false;
        }
        for (var _key in obj) {
            let _val = obj[_key];
            if (_val === undefined) {
                window.tools.logWarn('Parameter ' + _key + ' is undefined');
                return false;
            }
        }
        return true;
    }

    /**
     * Get element by selector name.
     * @param {string} name - Name of the selector.
     * @returns {HTMLElement} - Element or undefined if no selector was found.
     */
    function _findRootBySelector(name) {
        let _node = document.querySelector(name);
        if (_isParameterDefined({
                _node
            })) {
            return _node;
        } else {
            window.tools.logWarn('can not find root ("' + name + '") as DOM selector');
        }
        return _node;
    }

    /**
     * Get the root element from the given parameter.
     * 
     * @param {HTMLElement|string} root - Root element, or seletor as string
     */
    function _getRootElement(root) {
        if (_isParameterDefined({
                root
            }) === false) return;
        try {
            switch (typeof (root)) {
                case 'HMTLElement':
                    return root;
                    break;
                case 'string':
                    let _node = _findRootBySelector(root);
                    return _node;
                    break;
                default:
                    window.tools.logWarn('root parameter is not correct: ' + root.toString());
                    break;
            }
        } catch (error) {
            window.tools.logError(error);
        }
    }

    /**
     * Creates a list element with a href (<li>...</li>). If anything went
     * wrong, a log is generated and an empty list element will be returned.
     * 
     * @param {string} text - Text of list item (i.e. "Home")
     * @param {string} link - Url of the list item (i.e. "index.html")
     * @returns {object} returns an HTMLLIElement.
     *
     * @example
     * 
     *  var myText = "Home",
     *      myLink = "index.html";
     *  var result = _createListItem(myText, myLink);
     *  // result = <li><a href="index.html">Home</a></li>
     */
    function _createListItem(text, link) {
        let
            _listitem = document.createElement('li');

        if (_isParameterDefined({
                text,
                link
            }) === false) return _listitem;

        try {
            let a = document.createElement('a');
            a.appendChild(document.createTextNode(text));
            a.setAttribute('href', link);
            _listitem.appendChild(a);
            return _listitem;
        } catch (error) {
            window.tools.logError(error);
            return _listitem;
        }
    }

    /**
     * Creates a html navigation element as unordered list.
     * 
     * @param {object} data - Array with names and urls for the navigation
     * @returns {HTMLElement} - Element that contains the navigation or undefined if an error occurs
     */
    function _createNavigation(data) {
        if (_isParameterDefined({
                data
            }) === false) return undefined;

        try {
            let nav = document.createElement('nav');
            let ul = document.createElement('ul');
            nav.appendChild(ul);
            for (var i = 0; i < data.length; i++) {
                ul.appendChild(_createListItem(data[i].text, data[i].link));
            }
            return nav;
        } catch (error) {
            window.tools.logError(error);
            return undefined;
        }
    }

    /**
     * Append a navigation Element as child to the root.
     * 
     * @param {HTMLElement|string} root - Root element, or seletor as string
     * @param {HTMLElement} nav - Element that contains the navigation 
     */
    function _appendNavigation(root, nav) {
        if (_isParameterDefined({
                nav
            }) === false) return;

        try {
            let _node = _getRootElement(root);
            _node.appendChild(nav);
        } catch (error) {
            window.tools.logError(error);
        }
    }

    /**
     * Adds a navigation list to the root.
     * 
     * @param {HTMLElement|string} root - Root element, or seletor as string
     * @param {object} data - Array with Names and Urls of the list items 
     */
    function _addNavigation(root, data) {
        let _nav = _createNavigation(data);
        _appendNavigation(root, _nav);
    }

    /**
     * The main aka. module init function.
     * Infrastructure, only used by CONTROL.
     */
    function _main() {
        window.tools = window.tools || {};
        window.tools.addNavigation = _addNavigation;
    }

    // CONTROL
    _main();

}());