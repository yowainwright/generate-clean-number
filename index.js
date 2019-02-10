"use strict";
var generateCleanNumber = function (num) {
    var newNumber = isNaN(num)
        ? num.toString().replace(/[^0-9]/g, '')
        : num;
    return parseInt(newNumber, 10);
};
//# sourceMappingURL=index.js.map