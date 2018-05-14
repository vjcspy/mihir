(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.mihir = factory());
}(this, (function () { 'use strict';

  // Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
  // import "core-js/fn/array.find"
  // ...
  var Mihir = /** @class */ (function () {
      function Mihir() {
      }
      Mihir.prototype.boot = function () {
          console.log("hello");
      };
      return Mihir;
  }());

  return Mihir;

})));
