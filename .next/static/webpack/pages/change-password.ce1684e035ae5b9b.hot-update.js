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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Form */ \"./node_modules/react-bootstrap/esm/Form.js\");\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Button */ \"./node_modules/react-bootstrap/esm/Button.js\");\n/* harmony import */ var _components_ImageLoader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ImageLoader */ \"./components/ImageLoader.js\");\n/* harmony import */ var _components_PasswordToggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/PasswordToggle */ \"./components/PasswordToggle.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nconst SignInModalLight = (param)=>{\n    let { onSwap , pillButtons , ...props } = param;\n    _s();\n    // Form validation\n    const [isSent, setIsSent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [confirmPassword, setConfirmPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [passwordsMatch, setPasswordsMatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [otpEntered, setOtpEntered] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [validated, setValidated] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleSubmit = async (event)=>{\n        event.preventDefault();\n        const form = event.currentTarget;\n        if (form.checkValidity() === false || password !== confirmPassword) {\n            event.stopPropagation();\n            setPasswordsMatch(password === confirmPassword);\n            alert(\"Password changed\");\n        } else {}\n        setValidated(true);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" mx-auto mt-4 mb-4 shadow rounded-4\",\n        style: {\n            border: \"1px black\",\n            width: \"50%\",\n            height: \"100%\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"mx-0 align-items-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-4\",\n                    style: {\n                        maxWidth: \"fit-content\",\n                        marginLeft: \"auto\",\n                        marginRight: \"auto\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ImageLoader__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        src: \"/images/Frame 2.jpg\",\n                        width: 180,\n                        height: 84,\n                        alt: \"Illustration\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\change-password.js\",\n                        lineNumber: 47,\n                        columnNumber: 7\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\change-password.js\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \" px-4 pt-2 pb-4 px-sm-5 pb-sm-5 pt-md-5\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Enter your New Password.\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\change-password.js\",\n                            lineNumber: 56,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            noValidate: true,\n                            validated: validated,\n                            onSubmit: handleSubmit,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Group, {\n                                    className: \"mb-4\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"d-flex align-items-center justify-content-between mb-2\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Label, {\n                                                htmlFor: \"si-password\",\n                                                className: \"mb-0\",\n                                                children: \"Password\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\change-password.js\",\n                                                lineNumber: 61,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\change-password.js\",\n                                            lineNumber: 60,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PasswordToggle__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                            id: \"si-password\",\n                                            placeholder: \"Enter password\",\n                                            required: true,\n                                            value: password,\n                                            onChange: (e)=>setPassword(e.target.value)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\change-password.js\",\n                                            lineNumber: 63,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\change-password.js\",\n                                    lineNumber: 59,\n                                    columnNumber: 11\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Group, {\n                                    className: \"mb-4\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"d-flex align-items-center justify-content-between mb-2\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Label, {\n                                                htmlFor: \"si-password\",\n                                                className: \"mb-0\",\n                                                children: \"Confirm Password\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\change-password.js\",\n                                                lineNumber: 68,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\change-password.js\",\n                                            lineNumber: 67,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PasswordToggle__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                            id: \"si-password\",\n                                            placeholder: \"Enter password\",\n                                            required: true,\n                                            value: confirmPassword,\n                                            onChange: (e)=>setConfirmPassword(e.target.value)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\change-password.js\",\n                                            lineNumber: 70,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\change-password.js\",\n                                    lineNumber: 66,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                    type: \"submit\",\n                                    size: \"lg\",\n                                    variant: \"primary \".concat(pillButtons ? \"rounded-pill\" : \"\", \" w-100\"),\n                                    children: \"Submit\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\change-password.js\",\n                                    lineNumber: 73,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\change-password.js\",\n                            lineNumber: 58,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mt-4 mt-sm-5\",\n                            children: [\n                                \"Don't have an account? \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"./sign-up\",\n                                    onClick: onSwap,\n                                    children: \"Sign up here\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\change-password.js\",\n                                    lineNumber: 78,\n                                    columnNumber: 41\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\change-password.js\",\n                            lineNumber: 77,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\change-password.js\",\n                    lineNumber: 54,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\change-password.js\",\n            lineNumber: 44,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\change-password.js\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SignInModalLight, \"JSYS8dahpSaLAH1+3VpT9+/qhHQ=\");\n_c = SignInModalLight;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SignInModalLight);\nvar _c;\n$RefreshReg$(_c, \"SignInModalLight\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OzhDQUFTOzs7Ozs7Ozs7Ozs7c0NBSWpHLDhEQUFDd0I7NEJBQUlDLFdBQVU7O2dDQUFlOzhDQUNBLDhEQUFDMEI7b0NBQUVDLE1BQUs7b0NBQVlDLFNBQVN0RDs4Q0FBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPN0U7R0F4RU1EO0tBQUFBO0FBMEVOLCtEQUFlQSxnQkFBZ0JBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2hhbmdlLXBhc3N3b3JkLmpzP2YwMGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBSb3cgZnJvbSAncmVhY3QtYm9vdHN0cmFwL1JvdydcclxuaW1wb3J0IENvbCBmcm9tICdyZWFjdC1ib290c3RyYXAvQ29sJ1xyXG5pbXBvcnQgTW9kYWwgZnJvbSAncmVhY3QtYm9vdHN0cmFwL01vZGFsJ1xyXG5pbXBvcnQgRm9ybSBmcm9tICdyZWFjdC1ib290c3RyYXAvRm9ybSdcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvQnV0dG9uJ1xyXG5pbXBvcnQgQ2xvc2VCdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0Nsb3NlQnV0dG9uJ1xyXG5pbXBvcnQgSW1hZ2VMb2FkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9JbWFnZUxvYWRlcidcclxuaW1wb3J0IFBhc3N3b3JkVG9nZ2xlIGZyb20gJy4uL2NvbXBvbmVudHMvUGFzc3dvcmRUb2dnbGUnXHJcblxyXG5jb25zdCBTaWduSW5Nb2RhbExpZ2h0ID0gKHsgb25Td2FwLCBwaWxsQnV0dG9ucywgLi4ucHJvcHMgfSkgPT4ge1xyXG5cclxuICAvLyBGb3JtIHZhbGlkYXRpb25cclxuICBjb25zdCBbaXNTZW50LCBzZXRJc1NlbnRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtjb25maXJtUGFzc3dvcmQsIHNldENvbmZpcm1QYXNzd29yZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3Bhc3N3b3Jkc01hdGNoLCBzZXRQYXNzd29yZHNNYXRjaF0gPSB1c2VTdGF0ZShmYWxzZSk7ICBcclxuICBjb25zdCBbb3RwRW50ZXJlZCwgc2V0T3RwRW50ZXJlZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3ZhbGlkYXRlZCwgc2V0VmFsaWRhdGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGZvcm0gPSBldmVudC5jdXJyZW50VGFyZ2V0O1xyXG4gICAgaWYgKGZvcm0uY2hlY2tWYWxpZGl0eSgpID09PSBmYWxzZSB8fCBwYXNzd29yZCAhPT0gY29uZmlybVBhc3N3b3JkKSB7XHJcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICBzZXRQYXNzd29yZHNNYXRjaChwYXNzd29yZCA9PT0gY29uZmlybVBhc3N3b3JkKTtcclxuICAgICAgYWxlcnQoXCJQYXNzd29yZCBjaGFuZ2VkXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgIH1cclxuICAgIHNldFZhbGlkYXRlZCh0cnVlKTtcclxuICB9O1xyXG4gIFxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgXHJcbiAgICBcclxuICAgIFxyXG4gIFxyXG4gICAgPGRpdiBjbGFzc05hbWU9JyBteC1hdXRvIG10LTQgbWItNCBzaGFkb3cgcm91bmRlZC00JyBzdHlsZT17eyBib3JkZXI6IFwiMXB4IGJsYWNrXCIsIHdpZHRoOiBcIjUwJVwiLCBoZWlnaHQ6XCIxMDAlXCJ9fT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J214LTAgYWxpZ24taXRlbXMtY2VudGVyJz5cclxuICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtdC00JyBzdHlsZT17e21heFdpZHRoOiBcImZpdC1jb250ZW50XCIsIG1hcmdpbkxlZnQ6IFwiYXV0b1wiLCBtYXJnaW5SaWdodDogXCJhdXRvXCJ9fT5cclxuICAgICAgPEltYWdlTG9hZGVyXHJcbiAgICAgICAgc3JjPScvaW1hZ2VzL0ZyYW1lIDIuanBnJ1xyXG4gICAgICAgIHdpZHRoPXsxODB9XHJcbiAgICAgICAgaGVpZ2h0PXs4NH1cclxuICAgICAgICBhbHQ9J0lsbHVzdHJhdGlvbidcclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPScgcHgtNCBwdC0yIHBiLTQgcHgtc20tNSBwYi1zbS01IHB0LW1kLTUnPlxyXG4gICAgICAgXHJcbiAgICAgICAgICAgIDxwPkVudGVyIHlvdXIgTmV3IFBhc3N3b3JkLjwvcD5cclxuXHJcbiAgICAgICAgICA8Rm9ybSBub1ZhbGlkYXRlIHZhbGlkYXRlZD17dmFsaWRhdGVkfSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgIDxGb3JtLkdyb3VwIGNsYXNzTmFtZT0nbWItNCc+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2QtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWJldHdlZW4gbWItMic+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBodG1sRm9yPSdzaS1wYXNzd29yZCcgY2xhc3NOYW1lPSdtYi0wJz5QYXNzd29yZDwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8UGFzc3dvcmRUb2dnbGUgaWQ9J3NpLXBhc3N3b3JkJyBwbGFjZWhvbGRlcj0nRW50ZXIgcGFzc3dvcmQnIHJlcXVpcmVkIHZhbHVlPXtwYXNzd29yZH0gb25DaGFuZ2U9eyhlKT0+c2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfS8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuXHJcbiAgICAgICAgICAgIDxGb3JtLkdyb3VwIGNsYXNzTmFtZT0nbWItNCc+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2QtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWJldHdlZW4gbWItMic+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBodG1sRm9yPSdzaS1wYXNzd29yZCcgY2xhc3NOYW1lPSdtYi0wJz5Db25maXJtIFBhc3N3b3JkPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxQYXNzd29yZFRvZ2dsZSBpZD0nc2ktcGFzc3dvcmQnIHBsYWNlaG9sZGVyPSdFbnRlciBwYXNzd29yZCcgcmVxdWlyZWQgdmFsdWU9e2NvbmZpcm1QYXNzd29yZH0gb25DaGFuZ2U9eyhlKT0+c2V0Q29uZmlybVBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX0vPlxyXG4gICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgXHJcbiAgICAgICAgICAgIDxCdXR0b24gdHlwZT0nc3VibWl0JyBzaXplPSdsZycgdmFyaWFudD17YHByaW1hcnkgJHtwaWxsQnV0dG9ucyA/ICdyb3VuZGVkLXBpbGwnIDogJyd9IHctMTAwYH0+XHJcbiAgICAgICAgICAgICAgU3VibWl0XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J210LTQgbXQtc20tNSc+XHJcbiAgICAgICAgICAgIERvbiZhcG9zO3QgaGF2ZSBhbiBhY2NvdW50PyA8YSBocmVmPScuL3NpZ24tdXAnIG9uQ2xpY2s9e29uU3dhcH0+U2lnbiB1cCBoZXJlPC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgXHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWduSW5Nb2RhbExpZ2h0XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsImF4aW9zIiwiTGluayIsIlJvdyIsIkNvbCIsIk1vZGFsIiwiRm9ybSIsIkJ1dHRvbiIsIkNsb3NlQnV0dG9uIiwiSW1hZ2VMb2FkZXIiLCJQYXNzd29yZFRvZ2dsZSIsIlNpZ25Jbk1vZGFsTGlnaHQiLCJvblN3YXAiLCJwaWxsQnV0dG9ucyIsInByb3BzIiwiaXNTZW50Iiwic2V0SXNTZW50IiwiY29uZmlybVBhc3N3b3JkIiwic2V0Q29uZmlybVBhc3N3b3JkIiwicGFzc3dvcmRzTWF0Y2giLCJzZXRQYXNzd29yZHNNYXRjaCIsIm90cEVudGVyZWQiLCJzZXRPdHBFbnRlcmVkIiwiZW1haWwiLCJzZXRFbWFpbCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJ2YWxpZGF0ZWQiLCJzZXRWYWxpZGF0ZWQiLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZm9ybSIsImN1cnJlbnRUYXJnZXQiLCJjaGVja1ZhbGlkaXR5Iiwic3RvcFByb3BhZ2F0aW9uIiwiYWxlcnQiLCJkaXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsImJvcmRlciIsIndpZHRoIiwiaGVpZ2h0IiwibWF4V2lkdGgiLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJzcmMiLCJhbHQiLCJwIiwibm9WYWxpZGF0ZSIsIm9uU3VibWl0IiwiR3JvdXAiLCJMYWJlbCIsImh0bWxGb3IiLCJpZCIsInBsYWNlaG9sZGVyIiwicmVxdWlyZWQiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInR5cGUiLCJzaXplIiwidmFyaWFudCIsImEiLCJocmVmIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/change-password.js\n"));

/***/ })

});