"use strict";
(() => {
var exports = {};
exports.id = 3862;
exports.ids = [3862];
exports.modules = {

/***/ 969:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function App({ firstPost , preview , previewData  }) {
    const [posts1, setPosts] = react__WEBPACK_IMPORTED_MODULE_1__.useState([]);
    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(()=>{
        async function fetchRemainingPosts() {
            const responses = await Promise.all([
                1,
                2
            ].map((postId)=>fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            ));
            const posts = await Promise.all(responses.map((response)=>response.json()
            ));
            setPosts(posts);
        }
        fetchRemainingPosts();
    }, []);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            preview ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                children: "Preview mode enabled."
            }) : null,
            previewData ? previewData.map((p, _idx)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                    children: [
                        p.title,
                        " (preview)"
                    ]
                }, p.id)
            ) : null,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                children: firstPost.title
            }),
            posts1.map((p, _idx)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    children: p.title
                }, p.id)
            )
        ]
    }));
}
async function getStaticProps({ preview , previewData  }) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/1`);
    const firstPost = await response.json();
    return {
        props: {
            firstPost,
            preview: preview ?? null,
            previewData: previewData ?? null
        }
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);


/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(969));
module.exports = __webpack_exports__;

})();