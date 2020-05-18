"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateCleanNumber = function (num) {
    return typeof num !== "string" || isNaN(Number(num))
        ? parseFloat(num.toString().replace(/[^0-9,.]/g, ""))
        : parseFloat(num);
};
exports.filterNaNfromNumber = function (num) {
    if (typeof num === "number")
        return num;
    var numArray = num.split("");
    var filteredNumArray = numArray.filter(function (char) { return !isNaN(parseInt(char, 10)) || char === "."; });
    var filteredNumString = filteredNumArray.join("");
    return parseFloat(filteredNumString);
};
//# sourceMappingURL=index.js.map