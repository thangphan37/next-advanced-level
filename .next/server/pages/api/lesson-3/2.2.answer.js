"use strict";
(() => {
var exports = {};
exports.id = 5624;
exports.ids = [5624];
exports.modules = {

/***/ 8101:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
const previewData = Array.from({
    length: 10
}, (_, idx)=>({
        id: idx,
        userId: idx + 1,
        title: `Post ${idx}`,
        body: `Post Content ${idx}`
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
var __webpack_exports__ = (__webpack_exec__(8101));
module.exports = __webpack_exports__;

})();