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
exports.id = "pages/api/signup";
exports.ids = ["pages/api/signup"];
exports.modules = {

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./database/config.js":
/*!****************************!*\
  !*** ./database/config.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Connection = async ()=>{\n    const URL = `mongodb://user:user@ac-mrcno1m-shard-00-00.3klvm7x.mongodb.net:27017,ac-mrcno1m-shard-00-01.3klvm7x.mongodb.net:27017,ac-mrcno1m-shard-00-02.3klvm7x.mongodb.net:27017/?ssl=true&replicaSet=atlas-11waab-shard-0&authSource=admin&retryWrites=true&w=majority`;\n    try {\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(URL, {\n            useNewUrlParser: true\n        });\n        console.log(\"Database connected successfull\");\n    } catch (error) {\n        console.log(\"Error while connection\", error);\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Connection);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9kYXRhYmFzZS9jb25maWcuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBR2hDLE1BQU1DLGFBQVksVUFBUztJQUN2QixNQUFNQyxNQUFJLENBQUMsNlBBQTZQLENBQUM7SUFDelEsSUFBRztRQUNDLE1BQU1GLHVEQUFnQixDQUFDRSxLQUFJO1lBQUNFLGlCQUFnQixJQUFJO1FBQUE7UUFDaERDLFFBQVFDLEdBQUcsQ0FBQztJQUVoQixFQUNBLE9BQU1DLE9BQU07UUFDUkYsUUFBUUMsR0FBRyxDQUFDLDBCQUF5QkM7SUFFekM7QUFDSjtBQUNBLGlFQUFlTixVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmluZGVyLXJlYWN0Ly4vZGF0YWJhc2UvY29uZmlnLmpzPzZjNGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICBtb25nb29zZSBmcm9tICdtb25nb29zZSdcclxuXHJcblxyXG5jb25zdCBDb25uZWN0aW9uPSBhc3luYygpPT57XHJcbiAgICBjb25zdCBVUkw9YG1vbmdvZGI6Ly91c2VyOnVzZXJAYWMtbXJjbm8xbS1zaGFyZC0wMC0wMC4za2x2bTd4Lm1vbmdvZGIubmV0OjI3MDE3LGFjLW1yY25vMW0tc2hhcmQtMDAtMDEuM2tsdm03eC5tb25nb2RiLm5ldDoyNzAxNyxhYy1tcmNubzFtLXNoYXJkLTAwLTAyLjNrbHZtN3gubW9uZ29kYi5uZXQ6MjcwMTcvP3NzbD10cnVlJnJlcGxpY2FTZXQ9YXRsYXMtMTF3YWFiLXNoYXJkLTAmYXV0aFNvdXJjZT1hZG1pbiZyZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHlgXHJcbiAgICB0cnl7XHJcbiAgICAgICAgYXdhaXQgbW9uZ29vc2UuY29ubmVjdChVUkwse3VzZU5ld1VybFBhcnNlcjp0cnVlfSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0RhdGFiYXNlIGNvbm5lY3RlZCBzdWNjZXNzZnVsbCcpXHJcblxyXG4gICAgfVxyXG4gICAgY2F0Y2goZXJyb3Ipe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3Igd2hpbGUgY29ubmVjdGlvblwiLGVycm9yKTtcclxuXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQ29ubmVjdGlvbjsiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJDb25uZWN0aW9uIiwiVVJMIiwiY29ubmVjdCIsInVzZU5ld1VybFBhcnNlciIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./database/config.js\n");

/***/ }),

/***/ "(api)/./modal/user.js":
/*!***********************!*\
  !*** ./modal/user.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst userSchema = mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema({\n    name: {\n        type: String,\n        required: [\n            true,\n            \"Please provide a name\"\n        ]\n    },\n    email: {\n        type: String,\n        required: [\n            true,\n            \"Please provide an email\"\n        ],\n        unique: true\n    },\n    password: {\n        type: String,\n        required: [\n            true,\n            \"Please provide a password\"\n        ]\n    }\n}, {\n    timestamps: true\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.user) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"user\", userSchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RhbC91c2VyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQUloQyxNQUFNQyxhQUFXRCxzREFBZSxDQUFDO0lBQzdCRyxNQUFLO1FBQ0RDLE1BQUtDO1FBQ0xDLFVBQVM7WUFBQyxJQUFJO1lBQUM7U0FBd0I7SUFDM0M7SUFDQUMsT0FBTztRQUNISCxNQUFNQztRQUNOQyxVQUFTO1lBQUMsSUFBSTtZQUFDO1NBQTBCO1FBQ3pDRSxRQUFPLElBQUk7SUFDZjtJQUNBQyxVQUFVO1FBQ05MLE1BQU1DO1FBQ05DLFVBQVU7WUFBQyxJQUFJO1lBQUM7U0FBNEI7SUFDaEQ7QUFDSixHQUFFO0lBQ0VJLFlBQVksSUFBSTtBQUNwQjtBQUVBLGlFQUFlViw2REFBb0IsSUFBSUEscURBQWMsQ0FBQyxRQUFRQyxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmluZGVyLXJlYWN0Ly4vbW9kYWwvdXNlci5qcz82MWZjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcclxuXHJcblxyXG5cclxuY29uc3QgdXNlclNjaGVtYT1tb25nb29zZS5TY2hlbWEoe1xyXG4gICAgbmFtZTp7XHJcbiAgICAgICAgdHlwZTpTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6W3RydWUsXCJQbGVhc2UgcHJvdmlkZSBhIG5hbWVcIl1cclxuICAgIH0sXHJcbiAgICBlbWFpbDoge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDpbdHJ1ZSxcIlBsZWFzZSBwcm92aWRlIGFuIGVtYWlsXCJdLFxyXG4gICAgICAgIHVuaXF1ZTp0cnVlXHJcbiAgICB9LFxyXG4gICAgcGFzc3dvcmQ6IHtcclxuICAgICAgICB0eXBlIDpTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6IFt0cnVlLFwiUGxlYXNlIHByb3ZpZGUgYSBwYXNzd29yZFwiXVxyXG4gICAgfSxcclxufSx7XHJcbiAgICB0aW1lc3RhbXBzOiB0cnVlLFxyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbW9uZ29vc2UubW9kZWxzLnVzZXIgfHwgbW9uZ29vc2UubW9kZWwoJ3VzZXInLCB1c2VyU2NoZW1hKTtcclxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwidXNlclNjaGVtYSIsIlNjaGVtYSIsIm5hbWUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJlbWFpbCIsInVuaXF1ZSIsInBhc3N3b3JkIiwidGltZXN0YW1wcyIsIm1vZGVscyIsInVzZXIiLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./modal/user.js\n");

/***/ }),

/***/ "(api)/./pages/api/signup.js":
/*!*****************************!*\
  !*** ./pages/api/signup.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _database_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../database/config */ \"(api)/./database/config.js\");\n/* harmony import */ var _modal_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modal/user */ \"(api)/./modal/user.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_2__);\n// pages/api/signup.js\n\n\n\nasync function handler(req, res) {\n    const { method  } = req;\n    await (0,_database_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    if (method === \"POST\") {\n        try {\n            const { name , email , password  } = req.body;\n            if (!name || !email || !password) {\n                return res.status(400).json({\n                    success: false,\n                    message: \"Email and password are required.\"\n                });\n            }\n            const salt = await bcryptjs__WEBPACK_IMPORTED_MODULE_2___default().genSalt(10);\n            const hashedPassword = await bcryptjs__WEBPACK_IMPORTED_MODULE_2___default().hash(password, salt);\n            const newUser = await _modal_user__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create({\n                name,\n                email,\n                password: hashedPassword\n            });\n            res.status(201).json({\n                success: true,\n                data: newUser\n            });\n        } catch (error) {\n            res.status(400).json({\n                success: false,\n                message: error.message\n            });\n        }\n    } else {\n        res.status(405).json({\n            success: false,\n            message: \"Method not allowed\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2lnbnVwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsc0JBQXNCO0FBQ3lCO0FBQ1g7QUFDTjtBQUVmLGVBQWVHLFFBQVFDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzVDLE1BQU0sRUFBRUMsT0FBTSxFQUFFLEdBQUdGO0lBRW5CLE1BQU1KLDREQUFVQTtJQUVoQixJQUFJTSxXQUFXLFFBQVE7UUFDbkIsSUFBSTtZQUNBLE1BQU0sRUFBRUMsS0FBSSxFQUFFQyxNQUFLLEVBQUVDLFNBQVEsRUFBRSxHQUFHTCxJQUFJTSxJQUFJO1lBRTFDLElBQUksQ0FBQ0gsUUFBUSxDQUFDQyxTQUFTLENBQUNDLFVBQVU7Z0JBQzlCLE9BQU9KLElBQUlNLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7b0JBQUVDLFNBQVMsS0FBSztvQkFBRUMsU0FBUztnQkFBbUM7WUFDOUYsQ0FBQztZQUVELE1BQU1DLE9BQU8sTUFBTWIsdURBQWMsQ0FBQztZQUNsQyxNQUFNZSxpQkFBaUIsTUFBTWYsb0RBQVcsQ0FBQ08sVUFBVU07WUFFbkQsTUFBTUksVUFBVSxNQUFNbEIsMERBQVcsQ0FBQztnQkFDOUJNO2dCQUNBQztnQkFDQUMsVUFBVVE7WUFDZDtZQUVBWixJQUFJTSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO2dCQUFFQyxTQUFTLElBQUk7Z0JBQUVRLE1BQU1GO1lBQVE7UUFDeEQsRUFBRSxPQUFPRyxPQUFPO1lBQ1pqQixJQUFJTSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO2dCQUFFQyxTQUFTLEtBQUs7Z0JBQUVDLFNBQVNRLE1BQU1SLE9BQU87WUFBQztRQUNsRTtJQUNKLE9BQU87UUFDSFQsSUFBSU0sTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQyxTQUFTLEtBQUs7WUFBRUMsU0FBUztRQUFxQjtJQUN6RSxDQUFDO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2ZpbmRlci1yZWFjdC8uL3BhZ2VzL2FwaS9zaWdudXAuanM/YTg5ZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBwYWdlcy9hcGkvc2lnbnVwLmpzXHJcbmltcG9ydCBDb25uZWN0aW9uIGZyb20gJy4uLy4uL2RhdGFiYXNlL2NvbmZpZyc7XHJcbmltcG9ydCB1c2VyIGZyb20gJy4uLy4uL21vZGFsL3VzZXInO1xyXG5pbXBvcnQgYmNyeXB0IGZyb20gJ2JjcnlwdGpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICAgIGNvbnN0IHsgbWV0aG9kIH0gPSByZXE7XHJcblxyXG4gICAgYXdhaXQgQ29ubmVjdGlvbigpO1xyXG5cclxuICAgIGlmIChtZXRob2QgPT09ICdQT1NUJykge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgbmFtZSwgZW1haWwsIHBhc3N3b3JkIH0gPSByZXEuYm9keTtcclxuXHJcbiAgICAgICAgICAgIGlmICghbmFtZSB8fCAhZW1haWwgfHwgIXBhc3N3b3JkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ0VtYWlsIGFuZCBwYXNzd29yZCBhcmUgcmVxdWlyZWQuJyB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3Qgc2FsdCA9IGF3YWl0IGJjcnlwdC5nZW5TYWx0KDEwKTtcclxuICAgICAgICAgICAgY29uc3QgaGFzaGVkUGFzc3dvcmQgPSBhd2FpdCBiY3J5cHQuaGFzaChwYXNzd29yZCwgc2FsdCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBuZXdVc2VyID0gYXdhaXQgdXNlci5jcmVhdGUoe1xyXG4gICAgICAgICAgICAgICAgbmFtZSxcclxuICAgICAgICAgICAgICAgIGVtYWlsLFxyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6IGhhc2hlZFBhc3N3b3JkLFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogbmV3VXNlciB9KTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBlcnJvci5tZXNzYWdlIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmVzLnN0YXR1cyg0MDUpLmpzb24oeyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ01ldGhvZCBub3QgYWxsb3dlZCcgfSk7XHJcbiAgICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIkNvbm5lY3Rpb24iLCJ1c2VyIiwiYmNyeXB0IiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsIm5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwiYm9keSIsInN0YXR1cyIsImpzb24iLCJzdWNjZXNzIiwibWVzc2FnZSIsInNhbHQiLCJnZW5TYWx0IiwiaGFzaGVkUGFzc3dvcmQiLCJoYXNoIiwibmV3VXNlciIsImNyZWF0ZSIsImRhdGEiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/signup.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/signup.js"));
module.exports = __webpack_exports__;

})();