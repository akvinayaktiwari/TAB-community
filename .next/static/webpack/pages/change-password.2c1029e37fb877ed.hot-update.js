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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Form */ \"./node_modules/react-bootstrap/esm/Form.js\");\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Button */ \"./node_modules/react-bootstrap/esm/Button.js\");\n/* harmony import */ var _components_ImageLoader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ImageLoader */ \"./components/ImageLoader.js\");\n/* harmony import */ var _components_PasswordToggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/PasswordToggle */ \"./components/PasswordToggle.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nconst SignInModalLight = (param)=>{\n    let { onSwap , pillButtons , ...props } = param;\n    _s();\n    // Form validation\n    const [isSent, setIsSent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [confirmPassword, setConfirmPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [otpEntered, setOtpEntered] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [validated, setValidated] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleSubmit = async (event)=>{\n        event.preventDefault();\n        const form = event.currentTarget;\n        if (form.checkValidity() === false || password !== confirmPassword) {\n            event.stopPropagation();\n            setPasswordsMatch(password === confirmPassword);\n            alert(\"Password changed\");\n        } else {}\n        setValidated(true);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" mx-auto mt-4 mb-4 shadow rounded-4\",\n        style: {\n            border: \"1px black\",\n            width: \"50%\",\n            height: \"100%\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"mx-0 align-items-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-4\",\n                    style: {\n                        maxWidth: \"fit-content\",\n                        marginLeft: \"auto\",\n                        marginRight: \"auto\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ImageLoader__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        src: \"/images/Frame 2.jpg\",\n                        width: 180,\n                        height: 84,\n                        alt: \"Illustration\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\change-password.js\",\n                        lineNumber: 46,\n                        columnNumber: 7\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\change-password.js\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \" px-4 pt-2 pb-4 px-sm-5 pb-sm-5 pt-md-5\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Enter your New Password.\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\change-password.js\",\n                            lineNumber: 55,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            noValidate: true,\n                            validated: validated,\n                            onSubmit: handleSubmit,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Group, {\n                                    className: \"mb-4\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"d-flex align-items-center justify-content-between mb-2\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Label, {\n                                                htmlFor: \"si-password\",\n                                                className: \"mb-0\",\n                                                children: \"Password\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\change-password.js\",\n                                                lineNumber: 60,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\change-password.js\",\n                                            lineNumber: 59,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PasswordToggle__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                            id: \"si-password\",\n                                            placeholder: \"Enter password\",\n                                            required: true,\n                                            value: password,\n                                            onChange: (e)=>setPassword(e.target.value)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\change-password.js\",\n                                            lineNumber: 62,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\change-password.js\",\n                                    lineNumber: 58,\n                                    columnNumber: 11\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Group, {\n                                    className: \"mb-4\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"d-flex align-items-center justify-content-between mb-2\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Label, {\n                                                htmlFor: \"si-password\",\n                                                className: \"mb-0\",\n                                                children: \"Password\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\change-password.js\",\n                                                lineNumber: 67,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\change-password.js\",\n                                            lineNumber: 66,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PasswordToggle__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                            id: \"si-password\",\n                                            placeholder: \"Enter password\",\n                                            required: true,\n                                            value: password,\n                                            onChange: (e)=>setConfirmPassword(e.target.value)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\change-password.js\",\n                                            lineNumber: 69,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\change-password.js\",\n                                    lineNumber: 65,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                    type: \"submit\",\n                                    size: \"lg\",\n                                    variant: \"primary \".concat(pillButtons ? \"rounded-pill\" : \"\", \" w-100\"),\n                                    children: \"Submit\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\change-password.js\",\n                                    lineNumber: 72,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\change-password.js\",\n                            lineNumber: 57,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mt-4 mt-sm-5\",\n                            children: [\n                                \"Don't have an account? \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"./sign-up\",\n                                    onClick: onSwap,\n                                    children: \"Sign up here\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\change-password.js\",\n                                    lineNumber: 77,\n                                    columnNumber: 41\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\change-password.js\",\n                            lineNumber: 76,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\change-password.js\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\change-password.js\",\n            lineNumber: 43,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\change-password.js\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SignInModalLight, \"yFsi7mFstDkeUybnuWRJ1sHHuMk=\");\n_c = SignInModalLight;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SignInModalLight);\nvar _c;\n$RefreshReg$(_c, \"SignInModalLight\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OERBQUMwQjtvQ0FBRUMsTUFBSztvQ0FBWUMsU0FBU3JEOzhDQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU83RTtHQXZFTUQ7S0FBQUE7QUF5RU4sK0RBQWVBLGdCQUFnQkEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jaGFuZ2UtcGFzc3dvcmQuanM/ZjAwYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IFJvdyBmcm9tICdyZWFjdC1ib290c3RyYXAvUm93J1xyXG5pbXBvcnQgQ29sIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Db2wnXHJcbmltcG9ydCBNb2RhbCBmcm9tICdyZWFjdC1ib290c3RyYXAvTW9kYWwnXHJcbmltcG9ydCBGb3JtIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Gb3JtJ1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9CdXR0b24nXHJcbmltcG9ydCBDbG9zZUJ1dHRvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvQ2xvc2VCdXR0b24nXHJcbmltcG9ydCBJbWFnZUxvYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0ltYWdlTG9hZGVyJ1xyXG5pbXBvcnQgUGFzc3dvcmRUb2dnbGUgZnJvbSAnLi4vY29tcG9uZW50cy9QYXNzd29yZFRvZ2dsZSdcclxuXHJcbmNvbnN0IFNpZ25Jbk1vZGFsTGlnaHQgPSAoeyBvblN3YXAsIHBpbGxCdXR0b25zLCAuLi5wcm9wcyB9KSA9PiB7XHJcblxyXG4gIC8vIEZvcm0gdmFsaWRhdGlvblxyXG4gIGNvbnN0IFtpc1NlbnQsIHNldElzU2VudF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2NvbmZpcm1QYXNzd29yZCwgc2V0Q29uZmlybVBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbb3RwRW50ZXJlZCwgc2V0T3RwRW50ZXJlZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3ZhbGlkYXRlZCwgc2V0VmFsaWRhdGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGZvcm0gPSBldmVudC5jdXJyZW50VGFyZ2V0O1xyXG4gICAgaWYgKGZvcm0uY2hlY2tWYWxpZGl0eSgpID09PSBmYWxzZSB8fCBwYXNzd29yZCAhPT0gY29uZmlybVBhc3N3b3JkKSB7XHJcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICBzZXRQYXNzd29yZHNNYXRjaChwYXNzd29yZCA9PT0gY29uZmlybVBhc3N3b3JkKTtcclxuICAgICAgYWxlcnQoXCJQYXNzd29yZCBjaGFuZ2VkXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgIH1cclxuICAgIHNldFZhbGlkYXRlZCh0cnVlKTtcclxuICB9O1xyXG4gIFxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgXHJcbiAgICBcclxuICAgIFxyXG4gIFxyXG4gICAgPGRpdiBjbGFzc05hbWU9JyBteC1hdXRvIG10LTQgbWItNCBzaGFkb3cgcm91bmRlZC00JyBzdHlsZT17eyBib3JkZXI6IFwiMXB4IGJsYWNrXCIsIHdpZHRoOiBcIjUwJVwiLCBoZWlnaHQ6XCIxMDAlXCJ9fT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J214LTAgYWxpZ24taXRlbXMtY2VudGVyJz5cclxuICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtdC00JyBzdHlsZT17e21heFdpZHRoOiBcImZpdC1jb250ZW50XCIsIG1hcmdpbkxlZnQ6IFwiYXV0b1wiLCBtYXJnaW5SaWdodDogXCJhdXRvXCJ9fT5cclxuICAgICAgPEltYWdlTG9hZGVyXHJcbiAgICAgICAgc3JjPScvaW1hZ2VzL0ZyYW1lIDIuanBnJ1xyXG4gICAgICAgIHdpZHRoPXsxODB9XHJcbiAgICAgICAgaGVpZ2h0PXs4NH1cclxuICAgICAgICBhbHQ9J0lsbHVzdHJhdGlvbidcclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPScgcHgtNCBwdC0yIHBiLTQgcHgtc20tNSBwYi1zbS01IHB0LW1kLTUnPlxyXG4gICAgICAgXHJcbiAgICAgICAgICAgIDxwPkVudGVyIHlvdXIgTmV3IFBhc3N3b3JkLjwvcD5cclxuXHJcbiAgICAgICAgICA8Rm9ybSBub1ZhbGlkYXRlIHZhbGlkYXRlZD17dmFsaWRhdGVkfSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgIDxGb3JtLkdyb3VwIGNsYXNzTmFtZT0nbWItNCc+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2QtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWJldHdlZW4gbWItMic+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBodG1sRm9yPSdzaS1wYXNzd29yZCcgY2xhc3NOYW1lPSdtYi0wJz5QYXNzd29yZDwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8UGFzc3dvcmRUb2dnbGUgaWQ9J3NpLXBhc3N3b3JkJyBwbGFjZWhvbGRlcj0nRW50ZXIgcGFzc3dvcmQnIHJlcXVpcmVkIHZhbHVlPXtwYXNzd29yZH0gb25DaGFuZ2U9eyhlKT0+c2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfS8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuXHJcbiAgICAgICAgICAgIDxGb3JtLkdyb3VwIGNsYXNzTmFtZT0nbWItNCc+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2QtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWJldHdlZW4gbWItMic+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBodG1sRm9yPSdzaS1wYXNzd29yZCcgY2xhc3NOYW1lPSdtYi0wJz5QYXNzd29yZDwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8UGFzc3dvcmRUb2dnbGUgaWQ9J3NpLXBhc3N3b3JkJyBwbGFjZWhvbGRlcj0nRW50ZXIgcGFzc3dvcmQnIHJlcXVpcmVkIHZhbHVlPXtwYXNzd29yZH0gb25DaGFuZ2U9eyhlKT0+c2V0Q29uZmlybVBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX0vPlxyXG4gICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgXHJcbiAgICAgICAgICAgIDxCdXR0b24gdHlwZT0nc3VibWl0JyBzaXplPSdsZycgdmFyaWFudD17YHByaW1hcnkgJHtwaWxsQnV0dG9ucyA/ICdyb3VuZGVkLXBpbGwnIDogJyd9IHctMTAwYH0+XHJcbiAgICAgICAgICAgICAgU3VibWl0XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J210LTQgbXQtc20tNSc+XHJcbiAgICAgICAgICAgIERvbiZhcG9zO3QgaGF2ZSBhbiBhY2NvdW50PyA8YSBocmVmPScuL3NpZ24tdXAnIG9uQ2xpY2s9e29uU3dhcH0+U2lnbiB1cCBoZXJlPC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgXHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWduSW5Nb2RhbExpZ2h0XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsImF4aW9zIiwiTGluayIsIlJvdyIsIkNvbCIsIk1vZGFsIiwiRm9ybSIsIkJ1dHRvbiIsIkNsb3NlQnV0dG9uIiwiSW1hZ2VMb2FkZXIiLCJQYXNzd29yZFRvZ2dsZSIsIlNpZ25Jbk1vZGFsTGlnaHQiLCJvblN3YXAiLCJwaWxsQnV0dG9ucyIsInByb3BzIiwiaXNTZW50Iiwic2V0SXNTZW50IiwiY29uZmlybVBhc3N3b3JkIiwic2V0Q29uZmlybVBhc3N3b3JkIiwib3RwRW50ZXJlZCIsInNldE90cEVudGVyZWQiLCJlbWFpbCIsInNldEVtYWlsIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsInZhbGlkYXRlZCIsInNldFZhbGlkYXRlZCIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJmb3JtIiwiY3VycmVudFRhcmdldCIsImNoZWNrVmFsaWRpdHkiLCJzdG9wUHJvcGFnYXRpb24iLCJzZXRQYXNzd29yZHNNYXRjaCIsImFsZXJ0IiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJib3JkZXIiLCJ3aWR0aCIsImhlaWdodCIsIm1heFdpZHRoIiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0Iiwic3JjIiwiYWx0IiwicCIsIm5vVmFsaWRhdGUiLCJvblN1Ym1pdCIsIkdyb3VwIiwiTGFiZWwiLCJodG1sRm9yIiwiaWQiLCJwbGFjZWhvbGRlciIsInJlcXVpcmVkIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ0eXBlIiwic2l6ZSIsInZhcmlhbnQiLCJhIiwiaHJlZiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/change-password.js\n"));

/***/ })

});