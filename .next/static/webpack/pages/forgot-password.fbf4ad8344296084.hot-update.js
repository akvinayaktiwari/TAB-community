"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/forgot-password",{

/***/ "./pages/forgot-password.js":
/*!**********************************!*\
  !*** ./pages/forgot-password.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Form */ \"./node_modules/react-bootstrap/esm/Form.js\");\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/Button */ \"./node_modules/react-bootstrap/esm/Button.js\");\n/* harmony import */ var _components_ImageLoader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ImageLoader */ \"./components/ImageLoader.js\");\n/* harmony import */ var _components_PasswordToggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/PasswordToggle */ \"./components/PasswordToggle.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nconst SignInModalLight = (param)=>{\n    let { onSwap , pillButtons , ...props } = param;\n    _s();\n    // Form validation\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    const [isSent, setIsSent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [otpEntered, setOtpEntered] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [validated, setValidated] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleOtpSubmit = async (event)=>{\n        event.preventDefault();\n        const form = event.currentTarget;\n        if (form.checkValidity() === false) {\n            event.stopPropagation();\n        } else {\n            console.log(otp, otpEntered);\n            if (otp !== otpEntered) {\n                alert(\"OTP not verified\");\n            } else {\n                alert(\"OTP Matched\");\n                router.push(\"./change-password\");\n            }\n        }\n    };\n    const handleResetOtp = async (event)=>{\n        event.preventDefault();\n        const form = event.currentTarget;\n        const otp1 = Math.floor(100000 + Math.random() * 900000);\n        setIsSent(true);\n        // API call to sign-in endpoint\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].post(\"https://proket.in/tab_otp.php?email=\".concat(email, \"&otp=\").concat(otp1));\n            console.log(email, otp1);\n            console.log(\"Password Reset Initiated\", response.data);\n        // alert('Sign-in successful!');\n        // You may want to handle navigation or state update here\n        } catch (error) {\n            var _error_response;\n            console.log(\"Password Reset Failed\" + (((_error_response = error.response) === null || _error_response === void 0 ? void 0 : _error_response.data.message) || error.message));\n        }\n    };\n    const handleSubmit = async (event)=>{\n        event.preventDefault();\n        const form = event.currentTarget;\n        if (form.checkValidity() === false) {\n            event.stopPropagation();\n        } else {\n            const otp1 = Math.floor(100000 + Math.random() * 900000);\n            setIsSent(true);\n            // API call to sign-in endpoint\n            try {\n                const response = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].post(\"https://proket.in/tab_otp.php?email=\".concat(email, \"&otp=\").concat(otp1));\n                console.log(email, otp1);\n                console.log(\"Password Reset Initiated\", response.data);\n            // alert('Sign-in successful!');\n            // You may want to handle navigation or state update here\n            } catch (error) {\n                var _error_response;\n                console.log(\"Password Reset Failed\" + (((_error_response = error.response) === null || _error_response === void 0 ? void 0 : _error_response.data.message) || error.message));\n            }\n        }\n        setValidated(true);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" mx-auto mt-4 mb-4 shadow rounded-4\",\n        style: {\n            border: \"1px black\",\n            width: \"50%\",\n            height: \"100%\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"mx-0 align-items-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-4\",\n                    style: {\n                        maxWidth: \"fit-content\",\n                        marginLeft: \"auto\",\n                        marginRight: \"auto\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ImageLoader__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        src: \"/images/Frame 2.jpg\",\n                        width: 180,\n                        height: 84,\n                        alt: \"Illustration\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\forgot-password.js\",\n                        lineNumber: 94,\n                        columnNumber: 7\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\forgot-password.js\",\n                    lineNumber: 93,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \" px-4 pt-2 pb-4 px-sm-5 pb-sm-5 pt-md-5\",\n                    children: [\n                        !isSent ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: \"Enter the email address associated with your account and we'll send you an OTP to verify your account.\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\forgot-password.js\",\n                                    lineNumber: 104,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                    noValidate: true,\n                                    validated: validated,\n                                    onSubmit: handleSubmit,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Group, {\n                                            controlId: \"si-email\",\n                                            className: \"mt-4 mb-4\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Label, {\n                                                    children: \"Email address\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\forgot-password.js\",\n                                                    lineNumber: 109,\n                                                    columnNumber: 13\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Control, {\n                                                    type: \"email\",\n                                                    placeholder: \"Enter your email\",\n                                                    required: true,\n                                                    value: email,\n                                                    onChange: (e)=>setEmail(e.target.value)\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\forgot-password.js\",\n                                                    lineNumber: 110,\n                                                    columnNumber: 13\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\forgot-password.js\",\n                                            lineNumber: 107,\n                                            columnNumber: 13\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                            type: \"submit\",\n                                            size: \"lg\",\n                                            variant: \"primary \".concat(pillButtons ? \"rounded-pill\" : \"\", \" w-100\"),\n                                            children: \"Continue\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\forgot-password.js\",\n                                            lineNumber: 123,\n                                            columnNumber: 13\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\forgot-password.js\",\n                                    lineNumber: 106,\n                                    columnNumber: 11\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\forgot-password.js\",\n                            lineNumber: 103,\n                            columnNumber: 13\n                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: \"Enter the OTP sent to your email address.\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\forgot-password.js\",\n                                    lineNumber: 129,\n                                    columnNumber: 33\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                    noValidate: true,\n                                    validated: validated,\n                                    onSubmit: handleSubmit,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Group, {\n                                            controlId: \"si-email\",\n                                            className: \"mt-4 mb-4\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Label, {\n                                                    children: \"Enter the OTP\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\forgot-password.js\",\n                                                    lineNumber: 135,\n                                                    columnNumber: 1\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Control, {\n                                                    type: \"tel\",\n                                                    placeholder: \"Enter the OTP\",\n                                                    required: true,\n                                                    value: otpEntered,\n                                                    onChange: (e)=>setOtpEntered(e.target.value)\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\forgot-password.js\",\n                                                    lineNumber: 136,\n                                                    columnNumber: 1\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\forgot-password.js\",\n                                            lineNumber: 132,\n                                            columnNumber: 13\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                            onClick: ()=>{\n                                                handleOtpSubmit;\n                                            },\n                                            type: \"submit\",\n                                            size: \"lg\",\n                                            variant: \"primary \".concat(pillButtons ? \"rounded-pill\" : \"\", \" w-100\"),\n                                            children: \"Continue\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\forgot-password.js\",\n                                            lineNumber: 148,\n                                            columnNumber: 13\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\forgot-password.js\",\n                                    lineNumber: 131,\n                                    columnNumber: 22\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \"mt-2 mt-sm-2 mt-md-3\",\n                                    onClick: handleResetOtp,\n                                    style: {\n                                        cursor: \"pointer\",\n                                        display: \"block\"\n                                    },\n                                    children: \"Resend OTP\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\forgot-password.js\",\n                                    lineNumber: 152,\n                                    columnNumber: 11\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\forgot-password.js\",\n                            lineNumber: 128,\n                            columnNumber: 22\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mt-4 mt-sm-5\",\n                            children: [\n                                \"Don't have an account? \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"./sign-up\",\n                                    onClick: onSwap,\n                                    children: \"Sign up here\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\forgot-password.js\",\n                                    lineNumber: 158,\n                                    columnNumber: 41\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\forgot-password.js\",\n                            lineNumber: 157,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\forgot-password.js\",\n                    lineNumber: 101,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\forgot-password.js\",\n            lineNumber: 91,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\forgot-password.js\",\n        lineNumber: 90,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SignInModalLight, \"al8OHiyRBPTLC8IBndaJXZLX9EQ=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = SignInModalLight;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SignInModalLight);\nvar _c;\n$RefreshReg$(_c, \"SignInModalLight\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQ3VELFVBQVU7b0NBQUNwQyxXQUFXQTtvQ0FBV3FDLFVBQVVkOztzREFDMUQsOERBQUMxQyxrRUFBVTs0Q0FBQzBELFdBQVU7NENBQVdkLFdBQVU7OzhEQUd2RCw4REFBQzVDLGtFQUFVOzhEQUFDOzs7Ozs7OERBQ1osOERBQUNBLG9FQUFZO29EQUNiNkQsTUFBSztvREFDTEMsYUFBWTtvREFDWkMsUUFBUTtvREFDUkMsT0FBT25EO29EQUNQb0QsVUFBVSxDQUFDQyxJQUFNcEQsY0FBY29ELEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzs7Ozs7Ozs7Ozs7O3NEQU9qQyw4REFBQy9ELDhEQUFNQTs0Q0FBQ3FFLFNBQVMsSUFBSTtnREFBQ2pEOzRDQUFlOzRDQUFHd0MsTUFBSzs0Q0FBU08sTUFBSzs0Q0FBS0MsU0FBUyxXQUE2QyxPQUFsQzdELGNBQWMsaUJBQWlCLEVBQUUsRUFBQztzREFBUzs7Ozs7Ozs7Ozs7OzhDQUlqSSw4REFBQytEO29DQUFFM0IsV0FBVTtvQ0FBdUIwQixTQUFTckM7b0NBQWdCWSxPQUFPO3dDQUFFMkIsUUFBUTt3Q0FBV0MsU0FBUztvQ0FBTzs4Q0FBRzs7Ozs7Ozs7Ozs7cUNBSTVGO3NDQUNoQiw4REFBQzlCOzRCQUFJQyxXQUFVOztnQ0FBZTs4Q0FDQSw4REFBQzJCO29DQUFFRyxNQUFLO29DQUFZSixTQUFTL0Q7OENBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTzdFO0dBdEpNRDs7UUFHV0Qsa0RBQVNBOzs7S0FIcEJDO0FBd0pOLCtEQUFlQSxnQkFBZ0JBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZm9yZ290LXBhc3N3b3JkLmpzPzFiMjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBSb3cgZnJvbSAncmVhY3QtYm9vdHN0cmFwL1JvdydcclxuaW1wb3J0IENvbCBmcm9tICdyZWFjdC1ib290c3RyYXAvQ29sJ1xyXG5pbXBvcnQgTW9kYWwgZnJvbSAncmVhY3QtYm9vdHN0cmFwL01vZGFsJ1xyXG5pbXBvcnQgRm9ybSBmcm9tICdyZWFjdC1ib290c3RyYXAvRm9ybSdcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvQnV0dG9uJ1xyXG5pbXBvcnQgQ2xvc2VCdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0Nsb3NlQnV0dG9uJ1xyXG5pbXBvcnQgSW1hZ2VMb2FkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9JbWFnZUxvYWRlcidcclxuaW1wb3J0IFBhc3N3b3JkVG9nZ2xlIGZyb20gJy4uL2NvbXBvbmVudHMvUGFzc3dvcmRUb2dnbGUnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcblxyXG5jb25zdCBTaWduSW5Nb2RhbExpZ2h0ID0gKHsgb25Td2FwLCBwaWxsQnV0dG9ucywgLi4ucHJvcHMgfSkgPT4ge1xyXG5cclxuICAvLyBGb3JtIHZhbGlkYXRpb25cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBbaXNTZW50LCBzZXRJc1NlbnRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtvdHBFbnRlcmVkLCBzZXRPdHBFbnRlcmVkXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbdmFsaWRhdGVkLCBzZXRWYWxpZGF0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVPdHBTdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBmb3JtID0gZXZlbnQuY3VycmVudFRhcmdldDtcclxuICAgIGlmIChmb3JtLmNoZWNrVmFsaWRpdHkoKSA9PT0gZmFsc2UpIHtcclxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG90cCwgb3RwRW50ZXJlZClcclxuICAgICAgICBpZihvdHAgIT09IG90cEVudGVyZWQpe1xyXG4gICAgICAgICAgICBhbGVydCgnT1RQIG5vdCB2ZXJpZmllZCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBhbGVydChcIk9UUCBNYXRjaGVkXCIpXHJcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKCcuL2NoYW5nZS1wYXNzd29yZCcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZVJlc2V0T3RwID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgZm9ybSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XHJcbiAgIFxyXG4gICAgICAgY29uc3Qgb3RwID0gTWF0aC5mbG9vcigxMDAwMDAgKyBNYXRoLnJhbmRvbSgpICogOTAwMDAwKTtcclxuICAgICAgIHNldElzU2VudCh0cnVlKTtcclxuICAgICAgLy8gQVBJIGNhbGwgdG8gc2lnbi1pbiBlbmRwb2ludFxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChgaHR0cHM6Ly9wcm9rZXQuaW4vdGFiX290cC5waHA/ZW1haWw9JHtlbWFpbH0mb3RwPSR7b3RwfWApO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVtYWlsLCBvdHApO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdQYXNzd29yZCBSZXNldCBJbml0aWF0ZWQnLCByZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAvLyBhbGVydCgnU2lnbi1pbiBzdWNjZXNzZnVsIScpO1xyXG4gICAgICAgIC8vIFlvdSBtYXkgd2FudCB0byBoYW5kbGUgbmF2aWdhdGlvbiBvciBzdGF0ZSB1cGRhdGUgaGVyZVxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdQYXNzd29yZCBSZXNldCBGYWlsZWQnICsgKGVycm9yLnJlc3BvbnNlPy5kYXRhLm1lc3NhZ2UgfHwgZXJyb3IubWVzc2FnZSkpO1xyXG4gICAgICB9XHJcbiAgICBcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGZvcm0gPSBldmVudC5jdXJyZW50VGFyZ2V0O1xyXG4gICAgaWYgKGZvcm0uY2hlY2tWYWxpZGl0eSgpID09PSBmYWxzZSkge1xyXG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICBjb25zdCBvdHAgPSBNYXRoLmZsb29yKDEwMDAwMCArIE1hdGgucmFuZG9tKCkgKiA5MDAwMDApO1xyXG4gICAgICAgc2V0SXNTZW50KHRydWUpO1xyXG4gICAgICAvLyBBUEkgY2FsbCB0byBzaWduLWluIGVuZHBvaW50XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KGBodHRwczovL3Byb2tldC5pbi90YWJfb3RwLnBocD9lbWFpbD0ke2VtYWlsfSZvdHA9JHtvdHB9YCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coZW1haWwsIG90cCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1Bhc3N3b3JkIFJlc2V0IEluaXRpYXRlZCcsIHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgIC8vIGFsZXJ0KCdTaWduLWluIHN1Y2Nlc3NmdWwhJyk7XHJcbiAgICAgICAgLy8gWW91IG1heSB3YW50IHRvIGhhbmRsZSBuYXZpZ2F0aW9uIG9yIHN0YXRlIHVwZGF0ZSBoZXJlXHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1Bhc3N3b3JkIFJlc2V0IEZhaWxlZCcgKyAoZXJyb3IucmVzcG9uc2U/LmRhdGEubWVzc2FnZSB8fCBlcnJvci5tZXNzYWdlKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHNldFZhbGlkYXRlZCh0cnVlKTtcclxuICB9O1xyXG4gIFxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgXHJcbiAgICBcclxuICAgIFxyXG4gIFxyXG4gICAgPGRpdiBjbGFzc05hbWU9JyBteC1hdXRvIG10LTQgbWItNCBzaGFkb3cgcm91bmRlZC00JyBzdHlsZT17eyBib3JkZXI6IFwiMXB4IGJsYWNrXCIsIHdpZHRoOiBcIjUwJVwiLCBoZWlnaHQ6XCIxMDAlXCJ9fT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J214LTAgYWxpZ24taXRlbXMtY2VudGVyJz5cclxuICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtdC00JyBzdHlsZT17e21heFdpZHRoOiBcImZpdC1jb250ZW50XCIsIG1hcmdpbkxlZnQ6IFwiYXV0b1wiLCBtYXJnaW5SaWdodDogXCJhdXRvXCJ9fT5cclxuICAgICAgPEltYWdlTG9hZGVyXHJcbiAgICAgICAgc3JjPScvaW1hZ2VzL0ZyYW1lIDIuanBnJ1xyXG4gICAgICAgIHdpZHRoPXsxODB9XHJcbiAgICAgICAgaGVpZ2h0PXs4NH1cclxuICAgICAgICBhbHQ9J0lsbHVzdHJhdGlvbidcclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPScgcHgtNCBwdC0yIHBiLTQgcHgtc20tNSBwYi1zbS01IHB0LW1kLTUnPlxyXG4gICAgICAgIHshaXNTZW50ID8gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8cD5FbnRlciB0aGUgZW1haWwgYWRkcmVzcyBhc3NvY2lhdGVkIHdpdGggeW91ciBhY2NvdW50IGFuZCB3ZSdsbCBzZW5kIHlvdSBhbiBPVFAgdG8gdmVyaWZ5IHlvdXIgYWNjb3VudC48L3A+XHJcblxyXG4gICAgICAgICAgPEZvcm0gbm9WYWxpZGF0ZSB2YWxpZGF0ZWQ9e3ZhbGlkYXRlZH0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgIDxGb3JtLkdyb3VwIGNvbnRyb2xJZD0nc2ktZW1haWwnIGNsYXNzTmFtZT0nbXQtNCBtYi00Jz5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8Rm9ybS5MYWJlbD5FbWFpbCBhZGRyZXNzPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBlbWFpbFwiXHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIC8+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcblxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPSdzdWJtaXQnIHNpemU9J2xnJyB2YXJpYW50PXtgcHJpbWFyeSAke3BpbGxCdXR0b25zID8gJ3JvdW5kZWQtcGlsbCcgOiAnJ30gdy0xMDBgfT5cclxuICAgICAgICAgICAgICBDb250aW51ZVxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICkgOiAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5FbnRlciB0aGUgT1RQIHNlbnQgdG8geW91ciBlbWFpbCBhZGRyZXNzLjwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgIDxGb3JtIG5vVmFsaWRhdGUgdmFsaWRhdGVkPXt2YWxpZGF0ZWR9IG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICA8Rm9ybS5Hcm91cCBjb250cm9sSWQ9J3NpLWVtYWlsJyBjbGFzc05hbWU9J210LTQgbWItNCc+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICBcclxuPEZvcm0uTGFiZWw+RW50ZXIgdGhlIE9UUDwvRm9ybS5MYWJlbD5cclxuPEZvcm0uQ29udHJvbFxyXG50eXBlPVwidGVsXCJcclxucGxhY2Vob2xkZXI9XCJFbnRlciB0aGUgT1RQXCJcclxucmVxdWlyZWRcclxudmFsdWU9e290cEVudGVyZWR9XHJcbm9uQ2hhbmdlPXsoZSkgPT4gc2V0T3RwRW50ZXJlZChlLnRhcmdldC52YWx1ZSl9XHJcbi8+XHJcblxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpPT57aGFuZGxlT3RwU3VibWl0fX0gdHlwZT0nc3VibWl0JyBzaXplPSdsZycgdmFyaWFudD17YHByaW1hcnkgJHtwaWxsQnV0dG9ucyA/ICdyb3VuZGVkLXBpbGwnIDogJyd9IHctMTAwYH0+XHJcbiAgICAgICAgICAgICAgQ29udGludWVcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICA8YSBjbGFzc05hbWU9J210LTIgbXQtc20tMiBtdC1tZC0zJyBvbkNsaWNrPXtoYW5kbGVSZXNldE90cH0gc3R5bGU9e3sgY3Vyc29yOiBcInBvaW50ZXJcIiwgZGlzcGxheTogXCJibG9ja1wifX0+XHJcbiAgUmVzZW5kIE9UUFxyXG48L2E+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiB9XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXQtNCBtdC1zbS01Jz5cclxuICAgICAgICAgICAgRG9uJmFwb3M7dCBoYXZlIGFuIGFjY291bnQ/IDxhIGhyZWY9Jy4vc2lnbi11cCcgb25DbGljaz17b25Td2FwfT5TaWduIHVwIGhlcmU8L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICBcclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZ25Jbk1vZGFsTGlnaHRcclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiYXhpb3MiLCJMaW5rIiwiUm93IiwiQ29sIiwiTW9kYWwiLCJGb3JtIiwiQnV0dG9uIiwiQ2xvc2VCdXR0b24iLCJJbWFnZUxvYWRlciIsIlBhc3N3b3JkVG9nZ2xlIiwidXNlUm91dGVyIiwiU2lnbkluTW9kYWxMaWdodCIsIm9uU3dhcCIsInBpbGxCdXR0b25zIiwicHJvcHMiLCJyb3V0ZXIiLCJpc1NlbnQiLCJzZXRJc1NlbnQiLCJvdHBFbnRlcmVkIiwic2V0T3RwRW50ZXJlZCIsImVtYWlsIiwic2V0RW1haWwiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwidmFsaWRhdGVkIiwic2V0VmFsaWRhdGVkIiwiaGFuZGxlT3RwU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImZvcm0iLCJjdXJyZW50VGFyZ2V0IiwiY2hlY2tWYWxpZGl0eSIsInN0b3BQcm9wYWdhdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJvdHAiLCJhbGVydCIsInB1c2giLCJoYW5kbGVSZXNldE90cCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInJlc3BvbnNlIiwicG9zdCIsImRhdGEiLCJlcnJvciIsIm1lc3NhZ2UiLCJoYW5kbGVTdWJtaXQiLCJkaXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsImJvcmRlciIsIndpZHRoIiwiaGVpZ2h0IiwibWF4V2lkdGgiLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJzcmMiLCJhbHQiLCJwIiwibm9WYWxpZGF0ZSIsIm9uU3VibWl0IiwiR3JvdXAiLCJjb250cm9sSWQiLCJMYWJlbCIsIkNvbnRyb2wiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJyZXF1aXJlZCIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0Iiwic2l6ZSIsInZhcmlhbnQiLCJvbkNsaWNrIiwiYSIsImN1cnNvciIsImRpc3BsYXkiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/forgot-password.js\n"));

/***/ })

});