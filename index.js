"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateCleanNumber = function (num) {
    return isNaN(num)
        ? parseInt(num.toString().replace(/[^0-9]/g, ''), 10)
        : num;
};
exports.filterNaNfromNumber = function (num) {
    if (typeof num === 'number')
        return num;
    var numArray = num.split('');
    var filteredNumArray = numArray.filter(function (char) { return !isNaN(char); });
    var filteredNumString = filteredNumArray.join('');
    return parseInt(filteredNumString, 10);
};
//# sourceMappingURL=index.js.map