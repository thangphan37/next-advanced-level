"use strict";
(() => {
var exports = {};
exports.id = 7747;
exports.ids = [7747];
exports.modules = {

/***/ 6385:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ login),
  "setCookie": () => (/* binding */ setCookie)
});

;// CONCATENATED MODULE: external "cookie"
const external_cookie_namespaceObject = require("cookie");
;// CONCATENATED MODULE: ./pages/api/lesson-4/login.ts

const setCookie = (res, name, value, options = {
})=>{
    const stringValue = typeof value === 'object' ? 'j:' + JSON.stringify(value) : String(value);
    if (options.maxAge) {
        options.expires = new Date(Date.now() + options.maxAge);
        options.maxAge /= 1000;
    }
    res.setHeader('Set-Cookie', (0,external_cookie_namespaceObject.serialize)(name, stringValue, options));
};
const handler = (req, res)=>{
    setCookie(res, 'token', 'MY_ACCESS_TOKEN', {
        path: '/'
    });
    res.end(res.getHeader('Set-Cookie'));
};
/* harmony default export */ const login = (handler);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(6385));
module.exports = __webpack_exports__;

})();