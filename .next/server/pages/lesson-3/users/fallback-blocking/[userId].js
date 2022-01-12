"use strict";
(() => {
var exports = {};
exports.id = 315;
exports.ids = [315];
exports.modules = {

/***/ 5374:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function User({ user  }) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("pre", {
        children: JSON.stringify(user)
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);
function getStaticPaths() {
    const paths = Array.from({
        length: 3
    }, (_, idx)=>({
            params: {
                userId: `${idx + 1}`
            }
        })
    );
    return {
        paths,
        fallback: 'blocking'
    };
}
async function getStaticProps({ params  }) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`);
    const user = await res.json();
    return {
        props: {
            user
        }
    };
}


/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(5374));
module.exports = __webpack_exports__;

})();