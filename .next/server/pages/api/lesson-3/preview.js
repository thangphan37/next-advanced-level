"use strict";
(() => {
var exports = {};
exports.id = 9110;
exports.ids = [9110];
exports.modules = {

/***/ 2203:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
const previewData = Array.from({
    length: 10
}, (_, idx)=>({
        title: `Post ${idx}`,
        content: `Post Content ${idx}`
    })
);
function handler(req, res) {
    if (req.query.secretToken !== 'MY_SECRET_TOKEN' && !req.query.slug) {
        return res.status(400).json({
            message: 'Invalid Token!'
        });
    }
    res.setPreviewData(previewData);
    res.redirect(req.query.slug);
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2203));
module.exports = __webpack_exports__;

})();