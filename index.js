"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterNaNfromNumber = exports.generateCleanNumber = void 0;
var generateCleanNumber = function (num) {
    return typeof num !== "string" || isNaN(Number(num))
        ? parseFloat(num.toString().replace(/[^0-9,.]/g, ""))
        : parseFloat(num);
};
exports.generateCleanNumber = generateCleanNumber;
var filterNaNfromNumber = function (num) {
    if (typeof num === "number")
        return num;
    var numArray = num.split("");
    var filteredNumArray = numArray.filter(function (char) { return !isNaN(parseInt(char, 10)) || char === "."; });
    var filteredNumString = filteredNumArray.join("");
    return parseFloat(filteredNumString);
};
exports.filterNaNfromNumber = filterNaNfromNumber;
