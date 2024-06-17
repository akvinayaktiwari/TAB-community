"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/change-password",{

/***/ "./pages/change-password.js":
/*!**********************************!*\
  !*** ./pages/change-password.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Form */ \"./node_modules/react-bootstrap/esm/Form.js\");\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Button */ \"./node_modules/react-bootstrap/esm/Button.js\");\n/* harmony import */ var _components_ImageLoader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ImageLoader */ \"./components/ImageLoader.js\");\n/* harmony import */ var _components_PasswordToggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/PasswordToggle */ \"./components/PasswordToggle.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nconst SignInModalLight = (param)=>{\n    let { onSwap , pillButtons , ...props } = param;\n    _s();\n    // Form validation\n    const Router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    const [isSent, setIsSent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [confirmPassword, setConfirmPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [passwordsMatch, setPasswordsMatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [otpEntered, setOtpEntered] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [validated, setValidated] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleSubmit = async (event)=>{\n        event.preventDefault();\n        const form = event.currentTarget;\n        if (form.checkValidity() === false || password !== confirmPassword) {\n            event.stopPropagation();\n            setPasswordsMatch(password === confirmPassword);\n            alert(\"The password and confirm password fields do not match.\");\n        } else {\n            alert(\"Password changed\");\n            Router.push(\"/sign-in\");\n        }\n        setValidated(true);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" mx-auto mt-4 mb-4 shadow rounded-4\",\n        style: {\n            border: \"1px black\",\n            width: \"50%\",\n            height: \"100%\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"mx-0 align-items-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-4\",\n                    style: {\n                        maxWidth: \"fit-content\",\n                        marginLeft: \"auto\",\n                        marginRight: \"auto\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ImageLoader__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        src: \"/images/Frame 2.jpg\",\n                        width: 180,\n                        height: 84,\n                        alt: \"Illustration\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\change-password.js\",\n                        lineNumber: 52,\n                        columnNumber: 7\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\change-password.js\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \" px-4 pt-2 pb-4 px-sm-5 pb-sm-5 pt-md-5\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Enter your New Password.\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\change-password.js\",\n                            lineNumber: 61,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            noValidate: true,\n                            validated: validated,\n                            onSubmit: handleSubmit,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Group, {\n                                    className: \"mb-4\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"d-flex align-items-center justify-content-between mb-2\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Label, {\n                                                htmlFor: \"si-password\",\n                                                className: \"mb-0\",\n                                                children: \"Password\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\change-password.js\",\n                                                lineNumber: 66,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\change-password.js\",\n                                            lineNumber: 65,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PasswordToggle__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                            id: \"si-password\",\n                                            placeholder: \"Enter password\",\n                                            required: true,\n                                            value: password,\n                                            onChange: (e)=>setPassword(e.target.value)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\change-password.js\",\n                                            lineNumber: 68,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\change-password.js\",\n                                    lineNumber: 64,\n                                    columnNumber: 11\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Group, {\n                                    className: \"mb-4\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"d-flex align-items-center justify-content-between mb-2\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Label, {\n                                                htmlFor: \"si-password\",\n                                                className: \"mb-0\",\n                                                children: \"Confirm Password\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\change-password.js\",\n                                                lineNumber: 73,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\change-password.js\",\n                                            lineNumber: 72,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PasswordToggle__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                            id: \"si-password\",\n                                            placeholder: \"Enter password\",\n                                            required: true,\n                                            value: confirmPassword,\n                                            onChange: (e)=>setConfirmPassword(e.target.value)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\change-password.js\",\n                                            lineNumber: 75,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\change-password.js\",\n                                    lineNumber: 71,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                    type: \"submit\",\n                                    size: \"lg\",\n                                    variant: \"primary \".concat(pillButtons ? \"rounded-pill\" : \"\", \" w-100\"),\n                                    children: \"Submit\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\change-password.js\",\n                                    lineNumber: 78,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\change-password.js\",\n                            lineNumber: 63,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mt-4 mt-sm-5\",\n                            children: [\n                                \"Don't have an account? \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"./sign-up\",\n                                    onClick: onSwap,\n                                    children: \"Sign up here\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\change-password.js\",\n                                    lineNumber: 83,\n                                    columnNumber: 41\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\change-password.js\",\n                            lineNumber: 82,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\change-password.js\",\n                    lineNumber: 59,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\change-password.js\",\n            lineNumber: 49,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\change-password.js\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SignInModalLight, \"Iad7rxl4CR/S0tLqWSKmK/Y8+BI=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = SignInModalLight;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SignInModalLight);\nvar _c;\n$RefreshReg$(_c, \"SignInModalLight\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jaGFuZ2UtcGFzc3dvcmQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOztBQUFnQztBQUNQO0FBQ0c7QUFDUztBQUNBO0FBQ0k7QUFDRjtBQUNJO0FBQ1U7QUFDRjtBQUNNO0FBQ2xCO0FBRXZDLE1BQU1ZLG1CQUFtQixTQUF1QztRQUF0QyxFQUFFQyxPQUFNLEVBQUVDLFlBQVcsRUFBRSxHQUFHQyxPQUFPOztJQUV6RCxrQkFBa0I7SUFDbEIsTUFBTUMsU0FBU0wsc0RBQVNBO0lBQ3hCLE1BQU0sQ0FBQ00sUUFBUUMsVUFBVSxHQUFHbEIsK0NBQVFBLENBQUMsS0FBSztJQUMxQyxNQUFNLENBQUNtQixpQkFBaUJDLG1CQUFtQixHQUFHcEIsK0NBQVFBLENBQUM7SUFDdkQsTUFBTSxDQUFDcUIsZ0JBQWdCQyxrQkFBa0IsR0FBR3RCLCtDQUFRQSxDQUFDLEtBQUs7SUFDMUQsTUFBTSxDQUFDdUIsWUFBWUMsY0FBYyxHQUFHeEIsK0NBQVFBLENBQUM7SUFDN0MsTUFBTSxDQUFDeUIsT0FBT0MsU0FBUyxHQUFHMUIsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDMkIsVUFBVUMsWUFBWSxHQUFHNUIsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDNkIsV0FBV0MsYUFBYSxHQUFHOUIsK0NBQVFBLENBQUMsS0FBSztJQUdoRCxNQUFNK0IsZUFBZSxPQUFPQyxRQUFVO1FBQ3BDQSxNQUFNQyxjQUFjO1FBQ3BCLE1BQU1DLE9BQU9GLE1BQU1HLGFBQWE7UUFDaEMsSUFBSUQsS0FBS0UsYUFBYSxPQUFPLEtBQUssSUFBSVQsYUFBYVIsaUJBQWlCO1lBQ2xFYSxNQUFNSyxlQUFlO1lBQ3JCZixrQkFBa0JLLGFBQWFSO1lBQy9CbUIsTUFBTTtRQUVSLE9BQU87WUFDTEEsTUFBTTtZQUNOdEIsT0FBT3VCLElBQUksQ0FBQztRQUNkLENBQUM7UUFDRFQsYUFBYSxJQUFJO0lBQ25CO0lBR0EscUJBS0UsOERBQUNVO1FBQUlDLFdBQVU7UUFBc0NDLE9BQU87WUFBRUMsUUFBUTtZQUFhQyxPQUFPO1lBQU9DLFFBQU87UUFBTTtrQkFDNUcsNEVBQUNMO1lBQUlDLFdBQVU7OzhCQUViLDhEQUFDRDtvQkFBSUMsV0FBVTtvQkFBT0MsT0FBTzt3QkFBQ0ksVUFBVTt3QkFBZUMsWUFBWTt3QkFBUUMsYUFBYTtvQkFBTTs4QkFDaEcsNEVBQUN2QywrREFBV0E7d0JBQ1Z3QyxLQUFJO3dCQUNKTCxPQUFPO3dCQUNQQyxRQUFRO3dCQUNSSyxLQUFJOzs7Ozs7Ozs7Ozs4QkFHSiw4REFBQ1Y7b0JBQUlDLFdBQVU7O3NDQUVYLDhEQUFDVTtzQ0FBRTs7Ozs7O3NDQUVMLDhEQUFDN0MsNERBQUlBOzRCQUFDOEMsVUFBVTs0QkFBQ3ZCLFdBQVdBOzRCQUFXd0IsVUFBVXRCOzs4Q0FDakQsOERBQUN6QixrRUFBVTtvQ0FBQ21DLFdBQVU7O3NEQUNsQiw4REFBQ0Q7NENBQUlDLFdBQVU7c0RBQ2IsNEVBQUNuQyxrRUFBVTtnREFBQ2tELFNBQVE7Z0RBQWNmLFdBQVU7MERBQU87Ozs7Ozs7Ozs7O3NEQUVyRCw4REFBQy9CLGtFQUFjQTs0Q0FBQytDLElBQUc7NENBQWNDLGFBQVk7NENBQWlCQyxRQUFROzRDQUFDQyxPQUFPakM7NENBQVVrQyxVQUFVLENBQUNDLElBQUlsQyxZQUFZa0MsRUFBRUMsTUFBTSxDQUFDSCxLQUFLOzs7Ozs7Ozs7Ozs7OENBR25JLDhEQUFDdEQsa0VBQVU7b0NBQUNtQyxXQUFVOztzREFDcEIsOERBQUNEOzRDQUFJQyxXQUFVO3NEQUNiLDRFQUFDbkMsa0VBQVU7Z0RBQUNrRCxTQUFRO2dEQUFjZixXQUFVOzBEQUFPOzs7Ozs7Ozs7OztzREFFckQsOERBQUMvQixrRUFBY0E7NENBQUMrQyxJQUFHOzRDQUFjQyxhQUFZOzRDQUFpQkMsUUFBUTs0Q0FBQ0MsT0FBT3pDOzRDQUFpQjBDLFVBQVUsQ0FBQ0MsSUFBSTFDLG1CQUFtQjBDLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzs7Ozs7Ozs7Ozs7OzhDQUdqSiw4REFBQ3JELDhEQUFNQTtvQ0FBQ3lELE1BQUs7b0NBQVNDLE1BQUs7b0NBQUtDLFNBQVMsV0FBNkMsT0FBbENwRCxjQUFjLGlCQUFpQixFQUFFLEVBQUM7OENBQVM7Ozs7Ozs7Ozs7OztzQ0FJakcsOERBQUMwQjs0QkFBSUMsV0FBVTs7Z0NBQWU7OENBQ0EsOERBQUMwQjtvQ0FBRUMsTUFBSztvQ0FBWUMsU0FBU3hEOzhDQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU83RTtHQTVFTUQ7O1FBR1dELGtEQUFTQTs7O0tBSHBCQztBQThFTiwrREFBZUEsZ0JBQWdCQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NoYW5nZS1wYXNzd29yZC5qcz9mMDBiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgUm93IGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Sb3cnXHJcbmltcG9ydCBDb2wgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NvbCdcclxuaW1wb3J0IE1vZGFsIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Nb2RhbCdcclxuaW1wb3J0IEZvcm0gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0Zvcm0nXHJcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0J1dHRvbidcclxuaW1wb3J0IENsb3NlQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9DbG9zZUJ1dHRvbidcclxuaW1wb3J0IEltYWdlTG9hZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSW1hZ2VMb2FkZXInXHJcbmltcG9ydCBQYXNzd29yZFRvZ2dsZSBmcm9tICcuLi9jb21wb25lbnRzL1Bhc3N3b3JkVG9nZ2xlJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmNvbnN0IFNpZ25Jbk1vZGFsTGlnaHQgPSAoeyBvblN3YXAsIHBpbGxCdXR0b25zLCAuLi5wcm9wcyB9KSA9PiB7XHJcblxyXG4gIC8vIEZvcm0gdmFsaWRhdGlvblxyXG4gIGNvbnN0IFJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IFtpc1NlbnQsIHNldElzU2VudF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2NvbmZpcm1QYXNzd29yZCwgc2V0Q29uZmlybVBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbcGFzc3dvcmRzTWF0Y2gsIHNldFBhc3N3b3Jkc01hdGNoXSA9IHVzZVN0YXRlKGZhbHNlKTsgIFxyXG4gIGNvbnN0IFtvdHBFbnRlcmVkLCBzZXRPdHBFbnRlcmVkXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbdmFsaWRhdGVkLCBzZXRWYWxpZGF0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgZm9ybSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XHJcbiAgICBpZiAoZm9ybS5jaGVja1ZhbGlkaXR5KCkgPT09IGZhbHNlIHx8IHBhc3N3b3JkICE9PSBjb25maXJtUGFzc3dvcmQpIHtcclxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIHNldFBhc3N3b3Jkc01hdGNoKHBhc3N3b3JkID09PSBjb25maXJtUGFzc3dvcmQpO1xyXG4gICAgICBhbGVydChcIlRoZSBwYXNzd29yZCBhbmQgY29uZmlybSBwYXNzd29yZCBmaWVsZHMgZG8gbm90IG1hdGNoLlwiKTtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhbGVydChcIlBhc3N3b3JkIGNoYW5nZWRcIik7XHJcbiAgICAgIFJvdXRlci5wdXNoKFwiL3NpZ24taW5cIilcclxuICAgIH1cclxuICAgIHNldFZhbGlkYXRlZCh0cnVlKTtcclxuICB9O1xyXG4gIFxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgXHJcbiAgICBcclxuICAgIFxyXG4gIFxyXG4gICAgPGRpdiBjbGFzc05hbWU9JyBteC1hdXRvIG10LTQgbWItNCBzaGFkb3cgcm91bmRlZC00JyBzdHlsZT17eyBib3JkZXI6IFwiMXB4IGJsYWNrXCIsIHdpZHRoOiBcIjUwJVwiLCBoZWlnaHQ6XCIxMDAlXCJ9fT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J214LTAgYWxpZ24taXRlbXMtY2VudGVyJz5cclxuICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtdC00JyBzdHlsZT17e21heFdpZHRoOiBcImZpdC1jb250ZW50XCIsIG1hcmdpbkxlZnQ6IFwiYXV0b1wiLCBtYXJnaW5SaWdodDogXCJhdXRvXCJ9fT5cclxuICAgICAgPEltYWdlTG9hZGVyXHJcbiAgICAgICAgc3JjPScvaW1hZ2VzL0ZyYW1lIDIuanBnJ1xyXG4gICAgICAgIHdpZHRoPXsxODB9XHJcbiAgICAgICAgaGVpZ2h0PXs4NH1cclxuICAgICAgICBhbHQ9J0lsbHVzdHJhdGlvbidcclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPScgcHgtNCBwdC0yIHBiLTQgcHgtc20tNSBwYi1zbS01IHB0LW1kLTUnPlxyXG4gICAgICAgXHJcbiAgICAgICAgICAgIDxwPkVudGVyIHlvdXIgTmV3IFBhc3N3b3JkLjwvcD5cclxuXHJcbiAgICAgICAgICA8Rm9ybSBub1ZhbGlkYXRlIHZhbGlkYXRlZD17dmFsaWRhdGVkfSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgIDxGb3JtLkdyb3VwIGNsYXNzTmFtZT0nbWItNCc+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2QtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWJldHdlZW4gbWItMic+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBodG1sRm9yPSdzaS1wYXNzd29yZCcgY2xhc3NOYW1lPSdtYi0wJz5QYXNzd29yZDwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8UGFzc3dvcmRUb2dnbGUgaWQ9J3NpLXBhc3N3b3JkJyBwbGFjZWhvbGRlcj0nRW50ZXIgcGFzc3dvcmQnIHJlcXVpcmVkIHZhbHVlPXtwYXNzd29yZH0gb25DaGFuZ2U9eyhlKT0+c2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfS8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuXHJcbiAgICAgICAgICAgIDxGb3JtLkdyb3VwIGNsYXNzTmFtZT0nbWItNCc+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2QtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWJldHdlZW4gbWItMic+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBodG1sRm9yPSdzaS1wYXNzd29yZCcgY2xhc3NOYW1lPSdtYi0wJz5Db25maXJtIFBhc3N3b3JkPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxQYXNzd29yZFRvZ2dsZSBpZD0nc2ktcGFzc3dvcmQnIHBsYWNlaG9sZGVyPSdFbnRlciBwYXNzd29yZCcgcmVxdWlyZWQgdmFsdWU9e2NvbmZpcm1QYXNzd29yZH0gb25DaGFuZ2U9eyhlKT0+c2V0Q29uZmlybVBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX0vPlxyXG4gICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgXHJcbiAgICAgICAgICAgIDxCdXR0b24gdHlwZT0nc3VibWl0JyBzaXplPSdsZycgdmFyaWFudD17YHByaW1hcnkgJHtwaWxsQnV0dG9ucyA/ICdyb3VuZGVkLXBpbGwnIDogJyd9IHctMTAwYH0+XHJcbiAgICAgICAgICAgICAgU3VibWl0XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J210LTQgbXQtc20tNSc+XHJcbiAgICAgICAgICAgIERvbiZhcG9zO3QgaGF2ZSBhbiBhY2NvdW50PyA8YSBocmVmPScuL3NpZ24tdXAnIG9uQ2xpY2s9e29uU3dhcH0+U2lnbiB1cCBoZXJlPC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgXHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWduSW5Nb2RhbExpZ2h0XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsImF4aW9zIiwiTGluayIsIlJvdyIsIkNvbCIsIk1vZGFsIiwiRm9ybSIsIkJ1dHRvbiIsIkNsb3NlQnV0dG9uIiwiSW1hZ2VMb2FkZXIiLCJQYXNzd29yZFRvZ2dsZSIsInVzZVJvdXRlciIsIlNpZ25Jbk1vZGFsTGlnaHQiLCJvblN3YXAiLCJwaWxsQnV0dG9ucyIsInByb3BzIiwiUm91dGVyIiwiaXNTZW50Iiwic2V0SXNTZW50IiwiY29uZmlybVBhc3N3b3JkIiwic2V0Q29uZmlybVBhc3N3b3JkIiwicGFzc3dvcmRzTWF0Y2giLCJzZXRQYXNzd29yZHNNYXRjaCIsIm90cEVudGVyZWQiLCJzZXRPdHBFbnRlcmVkIiwiZW1haWwiLCJzZXRFbWFpbCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJ2YWxpZGF0ZWQiLCJzZXRWYWxpZGF0ZWQiLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZm9ybSIsImN1cnJlbnRUYXJnZXQiLCJjaGVja1ZhbGlkaXR5Iiwic3RvcFByb3BhZ2F0aW9uIiwiYWxlcnQiLCJwdXNoIiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJib3JkZXIiLCJ3aWR0aCIsImhlaWdodCIsIm1heFdpZHRoIiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0Iiwic3JjIiwiYWx0IiwicCIsIm5vVmFsaWRhdGUiLCJvblN1Ym1pdCIsIkdyb3VwIiwiTGFiZWwiLCJodG1sRm9yIiwiaWQiLCJwbGFjZWhvbGRlciIsInJlcXVpcmVkIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ0eXBlIiwic2l6ZSIsInZhcmlhbnQiLCJhIiwiaHJlZiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/change-password.js\n"));

/***/ })

});