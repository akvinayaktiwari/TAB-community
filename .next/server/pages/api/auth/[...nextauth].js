"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/google":
/*!*********************************************!*\
  !*** external "next-auth/providers/google" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/google");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__);\n// pages/api/auth/[...nextauth].js\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    providers: [\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: \"449756990440-9jsev05a1567fofdkmedi56mci2f5re1.apps.googleusercontent.com\",\n            clientSecret: \"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\"\n        })\n    ],\n    callbacks: {\n        async signIn ({ user , account , profile , email , credentials  }) {\n            return true;\n        },\n        async redirect ({ url , baseUrl  }) {\n            return baseUrl;\n        },\n        async session ({ session , token , user  }) {\n            return session;\n        },\n        async jwt ({ token , user , account , profile , isNewUser  }) {\n            return token;\n        }\n    }\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsa0NBQWtDO0FBQ0Q7QUFDdUI7QUFFeEQsaUVBQWVBLGdEQUFRQSxDQUFDO0lBQ3RCRSxXQUFXO1FBQ1RELGlFQUFjQSxDQUFDO1lBQ2JFLFVBQVM7WUFDVEMsY0FBYztRQUNoQjtLQUNEO0lBQ0RDLFdBQVc7UUFDVCxNQUFNQyxRQUFPLEVBQUVDLEtBQUksRUFBRUMsUUFBTyxFQUFFQyxRQUFPLEVBQUVDLE1BQUssRUFBRUMsWUFBVyxFQUFFLEVBQUU7WUFDM0QsT0FBTyxJQUFJO1FBQ2I7UUFDQSxNQUFNQyxVQUFTLEVBQUVDLElBQUcsRUFBRUMsUUFBTyxFQUFFLEVBQUU7WUFDL0IsT0FBT0E7UUFDVDtRQUNBLE1BQU1DLFNBQVEsRUFBRUEsUUFBTyxFQUFFQyxNQUFLLEVBQUVULEtBQUksRUFBRSxFQUFFO1lBQ3RDLE9BQU9RO1FBQ1Q7UUFDQSxNQUFNRSxLQUFJLEVBQUVELE1BQUssRUFBRVQsS0FBSSxFQUFFQyxRQUFPLEVBQUVDLFFBQU8sRUFBRVMsVUFBUyxFQUFFLEVBQUU7WUFDdEQsT0FBT0Y7UUFDVDtJQUNGO0FBQ0YsRUFBRSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmluZGVyLXJlYWN0Ly4vcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcz81MjdmIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHBhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0uanNcclxuaW1wb3J0IE5leHRBdXRoIGZyb20gJ25leHQtYXV0aCc7XHJcbmltcG9ydCBHb29nbGVQcm92aWRlciBmcm9tICduZXh0LWF1dGgvcHJvdmlkZXJzL2dvb2dsZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aCh7XHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBHb29nbGVQcm92aWRlcih7XHJcbiAgICAgIGNsaWVudElkOic0NDk3NTY5OTA0NDAtOWpzZXYwNWExNTY3Zm9mZGttZWRpNTZtY2kyZjVyZTEuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20nLFxyXG4gICAgICBjbGllbnRTZWNyZXQ6ICdHT0NTUFgtbk1GYmpMNU9TOVYtYlFHNVhXTVpscW51b0UxUCcsXHJcbiAgICB9KSxcclxuICBdLFxyXG4gIGNhbGxiYWNrczoge1xyXG4gICAgYXN5bmMgc2lnbkluKHsgdXNlciwgYWNjb3VudCwgcHJvZmlsZSwgZW1haWwsIGNyZWRlbnRpYWxzIH0pIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9LFxyXG4gICAgYXN5bmMgcmVkaXJlY3QoeyB1cmwsIGJhc2VVcmwgfSkge1xyXG4gICAgICByZXR1cm4gYmFzZVVybDtcclxuICAgIH0sXHJcbiAgICBhc3luYyBzZXNzaW9uKHsgc2Vzc2lvbiwgdG9rZW4sIHVzZXIgfSkge1xyXG4gICAgICByZXR1cm4gc2Vzc2lvbjtcclxuICAgIH0sXHJcbiAgICBhc3luYyBqd3QoeyB0b2tlbiwgdXNlciwgYWNjb3VudCwgcHJvZmlsZSwgaXNOZXdVc2VyIH0pIHtcclxuICAgICAgcmV0dXJuIHRva2VuO1xyXG4gICAgfSxcclxuICB9LFxyXG59KTsiXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJHb29nbGVQcm92aWRlciIsInByb3ZpZGVycyIsImNsaWVudElkIiwiY2xpZW50U2VjcmV0IiwiY2FsbGJhY2tzIiwic2lnbkluIiwidXNlciIsImFjY291bnQiLCJwcm9maWxlIiwiZW1haWwiLCJjcmVkZW50aWFscyIsInJlZGlyZWN0IiwidXJsIiwiYmFzZVVybCIsInNlc3Npb24iLCJ0b2tlbiIsImp3dCIsImlzTmV3VXNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();