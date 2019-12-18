/** 
 *
 * @desc Generiere eine Navigation auf Basis eines Datenobjekts
 *
 * @package Transfer
 * @module Autark
 * @author Helmut <helmut.hauff@autark.com>
 * @version v1.0.0
 * @since 2019-12-18
 * @see i.e. inspired by Michael <michael.reichart@gfu.net>
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2019 Helmut Hauff, Baunatal
 */


window.onload = function () {
    'use strict';

    let navArray = [{
            "text": "Home",
            "link": "index.html"
        },
        {
            "text": "Work",
            "link": "work.html"
        },
        {
            "text": "Contact",
            "link": "contact.html"
        },
        {
            "text": "Imprint",
            "link": "imprint.html"
        }
    ]

    window.tools.addNavigation(navArray);
};