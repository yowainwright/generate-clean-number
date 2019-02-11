"use strict";
var generateCleanNumber = function (num) {
    return isNaN(num)
        ? parseInt(num.toString().replace(/[^0-9]/g, ''), 10)
        : num;
};
//# sourceMappingURL=index.js.map