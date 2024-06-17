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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Form */ \"./node_modules/react-bootstrap/esm/Form.js\");\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Button */ \"./node_modules/react-bootstrap/esm/Button.js\");\n/* harmony import */ var _components_ImageLoader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ImageLoader */ \"./components/ImageLoader.js\");\n/* harmony import */ var _components_PasswordToggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/PasswordToggle */ \"./components/PasswordToggle.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nconst SignInModalLight = (param)=>{\n    let { onSwap , pillButtons , ...props } = param;\n    _s();\n    // Form validation\n    const [isSent, setIsSent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [confirmPassword, setConfirmPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [passwordsMatch, setPasswordsMatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [otpEntered, setOtpEntered] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [validated, setValidated] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleSubmit = async (event)=>{\n        event.preventDefault();\n        const form = event.currentTarget;\n        if (form.checkValidity() === false || password !== confirmPassword) {\n            event.stopPropagation();\n            setPasswordsMatch(password === confirmPassword);\n            alert(\"The password and confirm password fields do not match.\");\n        } else {\n            alert(\"Password changed\");\n        }\n        setValidated(true);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" mx-auto mt-4 mb-4 shadow rounded-4\",\n        style: {\n            border: \"1px black\",\n            width: \"50%\",\n            height: \"100%\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"mx-0 align-items-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-4\",\n                    style: {\n                        maxWidth: \"fit-content\",\n                        marginLeft: \"auto\",\n                        marginRight: \"auto\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ImageLoader__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        src: \"/images/Frame 2.jpg\",\n                        width: 180,\n                        height: 84,\n                        alt: \"Illustration\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\change-password.js\",\n                        lineNumber: 49,\n                        columnNumber: 7\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\change-password.js\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \" px-4 pt-2 pb-4 px-sm-5 pb-sm-5 pt-md-5\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Enter your New Password.\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\change-password.js\",\n                            lineNumber: 58,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            noValidate: true,\n                            validated: validated,\n                            onSubmit: handleSubmit,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Group, {\n                                    className: \"mb-4\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"d-flex align-items-center justify-content-between mb-2\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Label, {\n                                                htmlFor: \"si-password\",\n                                                className: \"mb-0\",\n                                                children: \"Password\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\change-password.js\",\n                                                lineNumber: 63,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\change-password.js\",\n                                            lineNumber: 62,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PasswordToggle__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                            id: \"si-password\",\n                                            placeholder: \"Enter password\",\n                                            required: true,\n                                            value: password,\n                                            onChange: (e)=>setPassword(e.target.value)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\change-password.js\",\n                                            lineNumber: 65,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\change-password.js\",\n                                    lineNumber: 61,\n                                    columnNumber: 11\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Group, {\n                                    className: \"mb-4\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"d-flex align-items-center justify-content-between mb-2\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Label, {\n                                                htmlFor: \"si-password\",\n                                                className: \"mb-0\",\n                                                children: \"Confirm Password\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\change-password.js\",\n                                                lineNumber: 70,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\change-password.js\",\n                                            lineNumber: 69,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PasswordToggle__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                            id: \"si-password\",\n                                            placeholder: \"Enter password\",\n                                            required: true,\n                                            value: confirmPassword,\n                                            onChange: (e)=>setConfirmPassword(e.target.value)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\change-password.js\",\n                                            lineNumber: 72,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\change-password.js\",\n                                    lineNumber: 68,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                    type: \"submit\",\n                                    size: \"lg\",\n                                    variant: \"primary \".concat(pillButtons ? \"rounded-pill\" : \"\", \" w-100\"),\n                                    children: \"Submit\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\change-password.js\",\n                                    lineNumber: 75,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\change-password.js\",\n                            lineNumber: 60,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mt-4 mt-sm-5\",\n                            children: [\n                                \"Don't have an account? \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"./sign-up\",\n                                    onClick: onSwap,\n                                    children: \"Sign up here\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\change-password.js\",\n                                    lineNumber: 80,\n                                    columnNumber: 41\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\change-password.js\",\n                            lineNumber: 79,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\change-password.js\",\n                    lineNumber: 56,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\change-password.js\",\n            lineNumber: 46,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\change-password.js\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SignInModalLight, \"JSYS8dahpSaLAH1+3VpT9+/qhHQ=\");\n_c = SignInModalLight;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SignInModalLight);\nvar _c;\n$RefreshReg$(_c, \"SignInModalLight\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixFQUFFLEVBQUM7OENBQVM7Ozs7Ozs7Ozs7OztzQ0FJakcsOERBQUN3Qjs0QkFBSUMsV0FBVTs7Z0NBQWU7OENBQ0EsOERBQUMwQjtvQ0FBRUMsTUFBSztvQ0FBWUMsU0FBU3REOzhDQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU83RTtHQTFFTUQ7S0FBQUE7QUE0RU4sK0RBQWVBLGdCQUFnQkEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jaGFuZ2UtcGFzc3dvcmQuanM/ZjAwYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IFJvdyBmcm9tICdyZWFjdC1ib290c3RyYXAvUm93J1xyXG5pbXBvcnQgQ29sIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Db2wnXHJcbmltcG9ydCBNb2RhbCBmcm9tICdyZWFjdC1ib290c3RyYXAvTW9kYWwnXHJcbmltcG9ydCBGb3JtIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Gb3JtJ1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9CdXR0b24nXHJcbmltcG9ydCBDbG9zZUJ1dHRvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvQ2xvc2VCdXR0b24nXHJcbmltcG9ydCBJbWFnZUxvYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0ltYWdlTG9hZGVyJ1xyXG5pbXBvcnQgUGFzc3dvcmRUb2dnbGUgZnJvbSAnLi4vY29tcG9uZW50cy9QYXNzd29yZFRvZ2dsZSdcclxuXHJcbmNvbnN0IFNpZ25Jbk1vZGFsTGlnaHQgPSAoeyBvblN3YXAsIHBpbGxCdXR0b25zLCAuLi5wcm9wcyB9KSA9PiB7XHJcblxyXG4gIC8vIEZvcm0gdmFsaWRhdGlvblxyXG4gIGNvbnN0IFtpc1NlbnQsIHNldElzU2VudF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2NvbmZpcm1QYXNzd29yZCwgc2V0Q29uZmlybVBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbcGFzc3dvcmRzTWF0Y2gsIHNldFBhc3N3b3Jkc01hdGNoXSA9IHVzZVN0YXRlKGZhbHNlKTsgIFxyXG4gIGNvbnN0IFtvdHBFbnRlcmVkLCBzZXRPdHBFbnRlcmVkXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbdmFsaWRhdGVkLCBzZXRWYWxpZGF0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgZm9ybSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XHJcbiAgICBpZiAoZm9ybS5jaGVja1ZhbGlkaXR5KCkgPT09IGZhbHNlIHx8IHBhc3N3b3JkICE9PSBjb25maXJtUGFzc3dvcmQpIHtcclxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIHNldFBhc3N3b3Jkc01hdGNoKHBhc3N3b3JkID09PSBjb25maXJtUGFzc3dvcmQpO1xyXG4gICAgICBhbGVydChcIlRoZSBwYXNzd29yZCBhbmQgY29uZmlybSBwYXNzd29yZCBmaWVsZHMgZG8gbm90IG1hdGNoLlwiKTtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhbGVydChcIlBhc3N3b3JkIGNoYW5nZWRcIik7XHJcbiAgICB9XHJcbiAgICBzZXRWYWxpZGF0ZWQodHJ1ZSk7XHJcbiAgfTtcclxuICBcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIFxyXG4gICAgXHJcbiAgICBcclxuICBcclxuICAgIDxkaXYgY2xhc3NOYW1lPScgbXgtYXV0byBtdC00IG1iLTQgc2hhZG93IHJvdW5kZWQtNCcgc3R5bGU9e3sgYm9yZGVyOiBcIjFweCBibGFja1wiLCB3aWR0aDogXCI1MCVcIiwgaGVpZ2h0OlwiMTAwJVwifX0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdteC0wIGFsaWduLWl0ZW1zLWNlbnRlcic+XHJcbiAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXQtNCcgc3R5bGU9e3ttYXhXaWR0aDogXCJmaXQtY29udGVudFwiLCBtYXJnaW5MZWZ0OiBcImF1dG9cIiwgbWFyZ2luUmlnaHQ6IFwiYXV0b1wifX0+XHJcbiAgICAgIDxJbWFnZUxvYWRlclxyXG4gICAgICAgIHNyYz0nL2ltYWdlcy9GcmFtZSAyLmpwZydcclxuICAgICAgICB3aWR0aD17MTgwfVxyXG4gICAgICAgIGhlaWdodD17ODR9XHJcbiAgICAgICAgYWx0PSdJbGx1c3RyYXRpb24nXHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nIHB4LTQgcHQtMiBwYi00IHB4LXNtLTUgcGItc20tNSBwdC1tZC01Jz5cclxuICAgICAgIFxyXG4gICAgICAgICAgICA8cD5FbnRlciB5b3VyIE5ldyBQYXNzd29yZC48L3A+XHJcblxyXG4gICAgICAgICAgPEZvcm0gbm9WYWxpZGF0ZSB2YWxpZGF0ZWQ9e3ZhbGlkYXRlZH0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICA8Rm9ybS5Hcm91cCBjbGFzc05hbWU9J21iLTQnPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1iZXR3ZWVuIG1iLTInPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgaHRtbEZvcj0nc2ktcGFzc3dvcmQnIGNsYXNzTmFtZT0nbWItMCc+UGFzc3dvcmQ8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPFBhc3N3b3JkVG9nZ2xlIGlkPSdzaS1wYXNzd29yZCcgcGxhY2Vob2xkZXI9J0VudGVyIHBhc3N3b3JkJyByZXF1aXJlZCB2YWx1ZT17cGFzc3dvcmR9IG9uQ2hhbmdlPXsoZSk9PnNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX0vPlxyXG4gICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcblxyXG4gICAgICAgICAgICA8Rm9ybS5Hcm91cCBjbGFzc05hbWU9J21iLTQnPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1iZXR3ZWVuIG1iLTInPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgaHRtbEZvcj0nc2ktcGFzc3dvcmQnIGNsYXNzTmFtZT0nbWItMCc+Q29uZmlybSBQYXNzd29yZDwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8UGFzc3dvcmRUb2dnbGUgaWQ9J3NpLXBhc3N3b3JkJyBwbGFjZWhvbGRlcj0nRW50ZXIgcGFzc3dvcmQnIHJlcXVpcmVkIHZhbHVlPXtjb25maXJtUGFzc3dvcmR9IG9uQ2hhbmdlPXsoZSk9PnNldENvbmZpcm1QYXNzd29yZChlLnRhcmdldC52YWx1ZSl9Lz5cclxuICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gIFxyXG4gICAgICAgICAgICA8QnV0dG9uIHR5cGU9J3N1Ym1pdCcgc2l6ZT0nbGcnIHZhcmlhbnQ9e2BwcmltYXJ5ICR7cGlsbEJ1dHRvbnMgPyAncm91bmRlZC1waWxsJyA6ICcnfSB3LTEwMGB9PlxyXG4gICAgICAgICAgICAgIFN1Ym1pdFxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtdC00IG10LXNtLTUnPlxyXG4gICAgICAgICAgICBEb24mYXBvczt0IGhhdmUgYW4gYWNjb3VudD8gPGEgaHJlZj0nLi9zaWduLXVwJyBvbkNsaWNrPXtvblN3YXB9PlNpZ24gdXAgaGVyZTwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIFxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lnbkluTW9kYWxMaWdodFxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJheGlvcyIsIkxpbmsiLCJSb3ciLCJDb2wiLCJNb2RhbCIsIkZvcm0iLCJCdXR0b24iLCJDbG9zZUJ1dHRvbiIsIkltYWdlTG9hZGVyIiwiUGFzc3dvcmRUb2dnbGUiLCJTaWduSW5Nb2RhbExpZ2h0Iiwib25Td2FwIiwicGlsbEJ1dHRvbnMiLCJwcm9wcyIsImlzU2VudCIsInNldElzU2VudCIsImNvbmZpcm1QYXNzd29yZCIsInNldENvbmZpcm1QYXNzd29yZCIsInBhc3N3b3Jkc01hdGNoIiwic2V0UGFzc3dvcmRzTWF0Y2giLCJvdHBFbnRlcmVkIiwic2V0T3RwRW50ZXJlZCIsImVtYWlsIiwic2V0RW1haWwiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwidmFsaWRhdGVkIiwic2V0VmFsaWRhdGVkIiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImZvcm0iLCJjdXJyZW50VGFyZ2V0IiwiY2hlY2tWYWxpZGl0eSIsInN0b3BQcm9wYWdhdGlvbiIsImFsZXJ0IiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJib3JkZXIiLCJ3aWR0aCIsImhlaWdodCIsIm1heFdpZHRoIiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0Iiwic3JjIiwiYWx0IiwicCIsIm5vVmFsaWRhdGUiLCJvblN1Ym1pdCIsIkdyb3VwIiwiTGFiZWwiLCJodG1sRm9yIiwiaWQiLCJwbGFjZWhvbGRlciIsInJlcXVpcmVkIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ0eXBlIiwic2l6ZSIsInZhcmlhbnQiLCJhIiwiaHJlZiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/change-password.js\n"));

/***/ })

});