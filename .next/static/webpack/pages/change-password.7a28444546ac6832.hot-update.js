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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Form */ \"./node_modules/react-bootstrap/esm/Form.js\");\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Button */ \"./node_modules/react-bootstrap/esm/Button.js\");\n/* harmony import */ var _components_ImageLoader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ImageLoader */ \"./components/ImageLoader.js\");\n/* harmony import */ var _components_PasswordToggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/PasswordToggle */ \"./components/PasswordToggle.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nconst SignInModalLight = (param)=>{\n    let { onSwap , pillButtons , ...props } = param;\n    _s();\n    // Form validation\n    const [isSent, setIsSent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [confirmPassword, setConfirmPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [passwordsMatch, setPasswordsMatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [otpEntered, setOtpEntered] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [validated, setValidated] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleSubmit = async (event)=>{\n        event.preventDefault();\n        const form = event.currentTarget;\n        if (form.checkValidity() === false || password !== confirmPassword) {\n            event.stopPropagation();\n            setPasswordsMatch(password === confirmPassword);\n            alert(\"Password changed\");\n        } else {}\n        setValidated(true);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" mx-auto mt-4 mb-4 shadow rounded-4\",\n        style: {\n            border: \"1px black\",\n            width: \"50%\",\n            height: \"100%\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"mx-0 align-items-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-4\",\n                    style: {\n                        maxWidth: \"fit-content\",\n                        marginLeft: \"auto\",\n                        marginRight: \"auto\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ImageLoader__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        src: \"/images/Frame 2.jpg\",\n                        width: 180,\n                        height: 84,\n                        alt: \"Illustration\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\change-password.js\",\n                        lineNumber: 47,\n                        columnNumber: 7\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\change-password.js\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \" px-4 pt-2 pb-4 px-sm-5 pb-sm-5 pt-md-5\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Enter your New Password.\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\change-password.js\",\n                            lineNumber: 56,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            noValidate: true,\n                            validated: validated,\n                            onSubmit: handleSubmit,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Group, {\n                                    className: \"mb-4\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"d-flex align-items-center justify-content-between mb-2\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Label, {\n                                                htmlFor: \"si-password\",\n                                                className: \"mb-0\",\n                                                children: \"Password\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\change-password.js\",\n                                                lineNumber: 61,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\change-password.js\",\n                                            lineNumber: 60,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PasswordToggle__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                            id: \"si-password\",\n                                            placeholder: \"Enter password\",\n                                            required: true,\n                                            value: password,\n                                            onChange: (e)=>setPassword(e.target.value)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\change-password.js\",\n                                            lineNumber: 63,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\change-password.js\",\n                                    lineNumber: 59,\n                                    columnNumber: 11\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Group, {\n                                    className: \"mb-4\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"d-flex align-items-center justify-content-between mb-2\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Label, {\n                                                htmlFor: \"si-password\",\n                                                className: \"mb-0\",\n                                                children: \"Password\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\change-password.js\",\n                                                lineNumber: 68,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\change-password.js\",\n                                            lineNumber: 67,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PasswordToggle__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                            id: \"si-password\",\n                                            placeholder: \"Enter password\",\n                                            required: true,\n                                            value: password,\n                                            onChange: (e)=>setConfirmPassword(e.target.value)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\change-password.js\",\n                                            lineNumber: 70,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\change-password.js\",\n                                    lineNumber: 66,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                    type: \"submit\",\n                                    size: \"lg\",\n                                    variant: \"primary \".concat(pillButtons ? \"rounded-pill\" : \"\", \" w-100\"),\n                                    children: \"Submit\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\change-password.js\",\n                                    lineNumber: 73,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\change-password.js\",\n                            lineNumber: 58,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mt-4 mt-sm-5\",\n                            children: [\n                                \"Don't have an account? \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"./sign-up\",\n                                    onClick: onSwap,\n                                    children: \"Sign up here\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\change-password.js\",\n                                    lineNumber: 78,\n                                    columnNumber: 41\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\change-password.js\",\n                            lineNumber: 77,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\change-password.js\",\n                    lineNumber: 54,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\change-password.js\",\n            lineNumber: 44,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\change-password.js\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SignInModalLight, \"JSYS8dahpSaLAH1+3VpT9+/qhHQ=\");\n_c = SignInModalLight;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SignInModalLight);\nvar _c;\n$RefreshReg$(_c, \"SignInModalLight\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OENBQVM7Ozs7Ozs7Ozs7OztzQ0FJakcsOERBQUN3Qjs0QkFBSUMsV0FBVTs7Z0NBQWU7OENBQ0EsOERBQUMwQjtvQ0FBRUMsTUFBSztvQ0FBWUMsU0FBU3REOzhDQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU83RTtHQXhFTUQ7S0FBQUE7QUEwRU4sK0RBQWVBLGdCQUFnQkEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jaGFuZ2UtcGFzc3dvcmQuanM/ZjAwYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IFJvdyBmcm9tICdyZWFjdC1ib290c3RyYXAvUm93J1xyXG5pbXBvcnQgQ29sIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Db2wnXHJcbmltcG9ydCBNb2RhbCBmcm9tICdyZWFjdC1ib290c3RyYXAvTW9kYWwnXHJcbmltcG9ydCBGb3JtIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Gb3JtJ1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9CdXR0b24nXHJcbmltcG9ydCBDbG9zZUJ1dHRvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvQ2xvc2VCdXR0b24nXHJcbmltcG9ydCBJbWFnZUxvYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0ltYWdlTG9hZGVyJ1xyXG5pbXBvcnQgUGFzc3dvcmRUb2dnbGUgZnJvbSAnLi4vY29tcG9uZW50cy9QYXNzd29yZFRvZ2dsZSdcclxuXHJcbmNvbnN0IFNpZ25Jbk1vZGFsTGlnaHQgPSAoeyBvblN3YXAsIHBpbGxCdXR0b25zLCAuLi5wcm9wcyB9KSA9PiB7XHJcblxyXG4gIC8vIEZvcm0gdmFsaWRhdGlvblxyXG4gIGNvbnN0IFtpc1NlbnQsIHNldElzU2VudF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2NvbmZpcm1QYXNzd29yZCwgc2V0Q29uZmlybVBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbcGFzc3dvcmRzTWF0Y2gsIHNldFBhc3N3b3Jkc01hdGNoXSA9IHVzZVN0YXRlKGZhbHNlKTsgIFxyXG4gIGNvbnN0IFtvdHBFbnRlcmVkLCBzZXRPdHBFbnRlcmVkXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbdmFsaWRhdGVkLCBzZXRWYWxpZGF0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgZm9ybSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XHJcbiAgICBpZiAoZm9ybS5jaGVja1ZhbGlkaXR5KCkgPT09IGZhbHNlIHx8IHBhc3N3b3JkICE9PSBjb25maXJtUGFzc3dvcmQpIHtcclxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIHNldFBhc3N3b3Jkc01hdGNoKHBhc3N3b3JkID09PSBjb25maXJtUGFzc3dvcmQpO1xyXG4gICAgICBhbGVydChcIlBhc3N3b3JkIGNoYW5nZWRcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgfVxyXG4gICAgc2V0VmFsaWRhdGVkKHRydWUpO1xyXG4gIH07XHJcbiAgXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICBcclxuICAgIFxyXG4gICAgXHJcbiAgXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nIG14LWF1dG8gbXQtNCBtYi00IHNoYWRvdyByb3VuZGVkLTQnIHN0eWxlPXt7IGJvcmRlcjogXCIxcHggYmxhY2tcIiwgd2lkdGg6IFwiNTAlXCIsIGhlaWdodDpcIjEwMCVcIn19PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbXgtMCBhbGlnbi1pdGVtcy1jZW50ZXInPlxyXG4gICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J210LTQnIHN0eWxlPXt7bWF4V2lkdGg6IFwiZml0LWNvbnRlbnRcIiwgbWFyZ2luTGVmdDogXCJhdXRvXCIsIG1hcmdpblJpZ2h0OiBcImF1dG9cIn19PlxyXG4gICAgICA8SW1hZ2VMb2FkZXJcclxuICAgICAgICBzcmM9Jy9pbWFnZXMvRnJhbWUgMi5qcGcnXHJcbiAgICAgICAgd2lkdGg9ezE4MH1cclxuICAgICAgICBoZWlnaHQ9ezg0fVxyXG4gICAgICAgIGFsdD0nSWxsdXN0cmF0aW9uJ1xyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9JyBweC00IHB0LTIgcGItNCBweC1zbS01IHBiLXNtLTUgcHQtbWQtNSc+XHJcbiAgICAgICBcclxuICAgICAgICAgICAgPHA+RW50ZXIgeW91ciBOZXcgUGFzc3dvcmQuPC9wPlxyXG5cclxuICAgICAgICAgIDxGb3JtIG5vVmFsaWRhdGUgdmFsaWRhdGVkPXt2YWxpZGF0ZWR9IG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgPEZvcm0uR3JvdXAgY2xhc3NOYW1lPSdtYi00Jz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBtYi0yJz5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIGh0bWxGb3I9J3NpLXBhc3N3b3JkJyBjbGFzc05hbWU9J21iLTAnPlBhc3N3b3JkPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxQYXNzd29yZFRvZ2dsZSBpZD0nc2ktcGFzc3dvcmQnIHBsYWNlaG9sZGVyPSdFbnRlciBwYXNzd29yZCcgcmVxdWlyZWQgdmFsdWU9e3Bhc3N3b3JkfSBvbkNoYW5nZT17KGUpPT5zZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9Lz5cclxuICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG5cclxuICAgICAgICAgICAgPEZvcm0uR3JvdXAgY2xhc3NOYW1lPSdtYi00Jz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBtYi0yJz5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIGh0bWxGb3I9J3NpLXBhc3N3b3JkJyBjbGFzc05hbWU9J21iLTAnPlBhc3N3b3JkPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxQYXNzd29yZFRvZ2dsZSBpZD0nc2ktcGFzc3dvcmQnIHBsYWNlaG9sZGVyPSdFbnRlciBwYXNzd29yZCcgcmVxdWlyZWQgdmFsdWU9e3Bhc3N3b3JkfSBvbkNoYW5nZT17KGUpPT5zZXRDb25maXJtUGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfS8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICBcclxuICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPSdzdWJtaXQnIHNpemU9J2xnJyB2YXJpYW50PXtgcHJpbWFyeSAke3BpbGxCdXR0b25zID8gJ3JvdW5kZWQtcGlsbCcgOiAnJ30gdy0xMDBgfT5cclxuICAgICAgICAgICAgICBTdWJtaXRcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXQtNCBtdC1zbS01Jz5cclxuICAgICAgICAgICAgRG9uJmFwb3M7dCBoYXZlIGFuIGFjY291bnQ/IDxhIGhyZWY9Jy4vc2lnbi11cCcgb25DbGljaz17b25Td2FwfT5TaWduIHVwIGhlcmU8L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICBcclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZ25Jbk1vZGFsTGlnaHRcclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiYXhpb3MiLCJMaW5rIiwiUm93IiwiQ29sIiwiTW9kYWwiLCJGb3JtIiwiQnV0dG9uIiwiQ2xvc2VCdXR0b24iLCJJbWFnZUxvYWRlciIsIlBhc3N3b3JkVG9nZ2xlIiwiU2lnbkluTW9kYWxMaWdodCIsIm9uU3dhcCIsInBpbGxCdXR0b25zIiwicHJvcHMiLCJpc1NlbnQiLCJzZXRJc1NlbnQiLCJjb25maXJtUGFzc3dvcmQiLCJzZXRDb25maXJtUGFzc3dvcmQiLCJwYXNzd29yZHNNYXRjaCIsInNldFBhc3N3b3Jkc01hdGNoIiwib3RwRW50ZXJlZCIsInNldE90cEVudGVyZWQiLCJlbWFpbCIsInNldEVtYWlsIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsInZhbGlkYXRlZCIsInNldFZhbGlkYXRlZCIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJmb3JtIiwiY3VycmVudFRhcmdldCIsImNoZWNrVmFsaWRpdHkiLCJzdG9wUHJvcGFnYXRpb24iLCJhbGVydCIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwiYm9yZGVyIiwid2lkdGgiLCJoZWlnaHQiLCJtYXhXaWR0aCIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCIsInNyYyIsImFsdCIsInAiLCJub1ZhbGlkYXRlIiwib25TdWJtaXQiLCJHcm91cCIsIkxhYmVsIiwiaHRtbEZvciIsImlkIiwicGxhY2Vob2xkZXIiLCJyZXF1aXJlZCIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidHlwZSIsInNpemUiLCJ2YXJpYW50IiwiYSIsImhyZWYiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/change-password.js\n"));

/***/ })

});