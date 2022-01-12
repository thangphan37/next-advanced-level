"use strict";
(() => {
var exports = {};
exports.id = 7485;
exports.ids = [7485];
exports.modules = {

/***/ 206:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
function createPage(todos) {
    return `<html>
	<head>
		<meta charset=utf-8>
		<title>Todos!</title>
	</head>
	<body>
	<ul>
	<li><a href="/">Home</a></li>
	<li><a href="/page-1">Page1</a></li>
	</ul>
	<hr />
	<ul>
	${todos.map((todo)=>`<li>${todo.title}</li>`
    ).join('\n')}
	</ul>
	</body>
</html>`;
}
async function handler(req, res) {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const todos = await response.json();
    const html = createPage(todos);
    res.end(html);
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(206));
module.exports = __webpack_exports__;

})();