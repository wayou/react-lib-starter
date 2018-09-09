/*
 *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
*****************************************************************************/
'use strict';(function(e,f){"object"===typeof exports&&"undefined"!==typeof module?module.exports=f(require("react")):"function"===typeof define&&define.amd?define(["react"],f):e["react-lib-starter"]=f(e.React)})(this,function(e){function f(b,a){function c(){this.constructor=b}g(b,a);b.prototype=null===a?Object.create(a):(c.prototype=a.prototype,new c)}var g=function(b,a){g=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var c in b)b.hasOwnProperty(c)&&
(a[c]=b[c])};return g(b,a)};(function(b,a){void 0===a&&(a={});a=a.insertAt;if(b&&"undefined"!==typeof document){var c=document.head||document.getElementsByTagName("head")[0],d=document.createElement("style");d.type="text/css";"top"===a?c.firstChild?c.insertBefore(d,c.firstChild):c.appendChild(d):c.appendChild(d);d.styleSheet?d.styleSheet.cssText=b:d.appendChild(document.createTextNode(b))}})("");return function(b){function a(){return null!==b&&b.apply(this,arguments)||this}f(a,b);a.prototype.render=
function(){var a=this.props;return e.createElement("div",{className:a.className},a.message)};a.defaultProps={className:"",message:"Allo!"};return a}(e.Component)});
//# sourceMappingURL=MyComponent.umd.js.map
