"use strict";
exports.__esModule = true;
var Spacecraft = /** @class */ (function () {
    function Spacecraft(propursor) {
        this.propursor = propursor;
    }
    ;
    Spacecraft.prototype.jumpIntoHyperspace = function () {
        console.log("Entering hyperspace with " + this.propursor);
    };
    return Spacecraft;
}());
exports.Spacecraft = Spacecraft;
