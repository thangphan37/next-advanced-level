"use strict";
(() => {
var exports = {};
exports.id = 9486;
exports.ids = [9486];
exports.modules = {

/***/ 7828:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
function createPage(title) {
    return `<html>
	<head>
		<meta charset=utf-8>
		<title>${title}</title>
	</head>
	<body>
	<ul>
	<li><a href="/">Home</a></li>
	<li><a href="/page-1">Page1</a></li>
	</ul>
	<hr />
	${Array.from({
        length: 20
    }).map(()=>'<div>This is server side rendering!</div>'
    ).join('\n')}
	</body>
</html>`;
}
function handler(req, res) {
    const html = createPage('SSR');
    res.end(html);
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7828));
module.exports = __webpack_exports__;

})();