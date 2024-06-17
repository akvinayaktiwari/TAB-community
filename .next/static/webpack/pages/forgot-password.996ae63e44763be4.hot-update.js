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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Form */ \"./node_modules/react-bootstrap/esm/Form.js\");\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/Button */ \"./node_modules/react-bootstrap/esm/Button.js\");\n/* harmony import */ var _components_ImageLoader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ImageLoader */ \"./components/ImageLoader.js\");\n/* harmony import */ var _components_PasswordToggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/PasswordToggle */ \"./components/PasswordToggle.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nconst SignInModalLight = (param)=>{\n    let { onSwap , pillButtons , ...props } = param;\n    _s();\n    // Form validation\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    const [isSent, setIsSent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [otpEntered, setOtpEntered] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [validated, setValidated] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleOtpSubmit = async (event)=>{\n        event.preventDefault();\n        const form = event.currentTarget;\n        if (form.checkValidity() === false) {\n            event.stopPropagation();\n        } else {\n            console.log(otp, otpEntered);\n            if (otp !== otpEntered) {\n                alert(\"OTP not verified\");\n            } else {\n                alert(\"OTP Matched\");\n                router.push(\"./change-password\");\n            }\n        }\n    };\n    const handleResetOtp = async (event)=>{\n        event.preventDefault();\n        const form = event.currentTarget;\n        const otp1 = Math.floor(100000 + Math.random() * 900000);\n        setIsSent(true);\n        // API call to sign-in endpoint\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].post(\"https://proket.in/tab_otp.php?email=\".concat(email, \"&otp=\").concat(otp1));\n            console.log(email, otp1);\n            console.log(\"Password Reset Initiated\", response.data);\n        // alert('Sign-in successful!');\n        // You may want to handle navigation or state update here\n        } catch (error) {\n            var _error_response;\n            console.log(\"Password Reset Failed\" + (((_error_response = error.response) === null || _error_response === void 0 ? void 0 : _error_response.data.message) || error.message));\n        }\n    };\n    const handleSubmit = async (event)=>{\n        event.preventDefault();\n        const form = event.currentTarget;\n        if (form.checkValidity() === false) {\n            event.stopPropagation();\n        } else {\n            const otp1 = Math.floor(100000 + Math.random() * 900000);\n            setIsSent(true);\n            // API call to sign-in endpoint\n            try {\n                const response = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].post(\"https://proket.in/tab_otp.php?email=\".concat(email, \"&otp=\").concat(otp1));\n                console.log(email, otp1);\n                console.log(\"Password Reset Initiated\", response.data);\n            // alert('Sign-in successful!');\n            // You may want to handle navigation or state update here\n            } catch (error) {\n                var _error_response;\n                console.log(\"Password Reset Failed\" + (((_error_response = error.response) === null || _error_response === void 0 ? void 0 : _error_response.data.message) || error.message));\n            }\n        }\n        setValidated(true);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" mx-auto mt-4 mb-4 shadow rounded-4\",\n        style: {\n            border: \"1px black\",\n            width: \"50%\",\n            height: \"100%\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"mx-0 align-items-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-4\",\n                    style: {\n                        maxWidth: \"fit-content\",\n                        marginLeft: \"auto\",\n                        marginRight: \"auto\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ImageLoader__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        src: \"/images/Frame 2.jpg\",\n                        width: 180,\n                        height: 84,\n                        alt: \"Illustration\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\forgot-password.js\",\n                        lineNumber: 94,\n                        columnNumber: 7\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\forgot-password.js\",\n                    lineNumber: 93,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \" px-4 pt-2 pb-4 px-sm-5 pb-sm-5 pt-md-5\",\n                    children: [\n                        !isSent ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: \"Enter the email address associated with your account and we'll send you an OTP to verify your account.\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\forgot-password.js\",\n                                    lineNumber: 104,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                    noValidate: true,\n                                    validated: validated,\n                                    onSubmit: handleSubmit,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Group, {\n                                            controlId: \"si-email\",\n                                            className: \"mt-4 mb-4\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Label, {\n                                                    children: \"Email address\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\forgot-password.js\",\n                                                    lineNumber: 109,\n                                                    columnNumber: 13\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Control, {\n                                                    type: \"email\",\n                                                    placeholder: \"Enter your email\",\n                                                    required: true,\n                                                    value: email,\n                                                    onChange: (e)=>setEmail(e.target.value)\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\forgot-password.js\",\n                                                    lineNumber: 110,\n                                                    columnNumber: 13\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\forgot-password.js\",\n                                            lineNumber: 107,\n                                            columnNumber: 13\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                            type: \"submit\",\n                                            size: \"lg\",\n                                            variant: \"primary \".concat(pillButtons ? \"rounded-pill\" : \"\", \" w-100\"),\n                                            children: \"Continue\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\forgot-password.js\",\n                                            lineNumber: 123,\n                                            columnNumber: 13\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\forgot-password.js\",\n                                    lineNumber: 106,\n                                    columnNumber: 11\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\forgot-password.js\",\n                            lineNumber: 103,\n                            columnNumber: 13\n                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: \"Enter the OTP sent to your email address.\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\forgot-password.js\",\n                                    lineNumber: 129,\n                                    columnNumber: 33\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                    noValidate: true,\n                                    validated: validated,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Group, {\n                                            controlId: \"si-email\",\n                                            className: \"mt-4 mb-4\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Label, {\n                                                    children: \"Enter the OTP\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\forgot-password.js\",\n                                                    lineNumber: 135,\n                                                    columnNumber: 1\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Control, {\n                                                    type: \"tel\",\n                                                    placeholder: \"Enter the OTP\",\n                                                    required: true,\n                                                    value: otpEntered,\n                                                    onChange: (e)=>setOtpEntered(e.target.value)\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\forgot-password.js\",\n                                                    lineNumber: 136,\n                                                    columnNumber: 1\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\forgot-password.js\",\n                                            lineNumber: 132,\n                                            columnNumber: 13\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                            onClick: ()=>{\n                                                handleOtpSubmit;\n                                            },\n                                            type: \"submit\",\n                                            size: \"lg\",\n                                            variant: \"primary \".concat(pillButtons ? \"rounded-pill\" : \"\", \" w-100\"),\n                                            children: \"Continue\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\forgot-password.js\",\n                                            lineNumber: 148,\n                                            columnNumber: 13\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\forgot-password.js\",\n                                    lineNumber: 131,\n                                    columnNumber: 22\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \"mt-2 mt-sm-2 mt-md-3\",\n                                    onClick: handleResetOtp,\n                                    style: {\n                                        cursor: \"pointer\",\n                                        display: \"block\"\n                                    },\n                                    children: \"Resend OTP\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\forgot-password.js\",\n                                    lineNumber: 152,\n                                    columnNumber: 11\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\forgot-password.js\",\n                            lineNumber: 128,\n                            columnNumber: 22\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mt-4 mt-sm-5\",\n                            children: [\n                                \"Don't have an account? \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"./sign-up\",\n                                    onClick: onSwap,\n                                    children: \"Sign up here\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\forgot-password.js\",\n                                    lineNumber: 158,\n                                    columnNumber: 41\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\forgot-password.js\",\n                            lineNumber: 157,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\forgot-password.js\",\n                    lineNumber: 101,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\forgot-password.js\",\n            lineNumber: 91,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\alok0\\\\TAB-Comm\\\\TAB-community\\\\pages\\\\forgot-password.js\",\n        lineNumber: 90,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SignInModalLight, \"al8OHiyRBPTLC8IBndaJXZLX9EQ=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = SignInModalLight;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SignInModalLight);\nvar _c;\n$RefreshReg$(_c, \"SignInModalLight\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQ3VELFVBQVU7b0NBQUNwQyxXQUFXQTs7c0RBQ3JDLDhEQUFDbkIsa0VBQVU7NENBQUMwRCxXQUFVOzRDQUFXZCxXQUFVOzs4REFHdkQsOERBQUM1QyxrRUFBVTs4REFBQzs7Ozs7OzhEQUNaLDhEQUFDQSxvRUFBWTtvREFDYjZELE1BQUs7b0RBQ0xDLGFBQVk7b0RBQ1pDLFFBQVE7b0RBQ1JDLE9BQU9uRDtvREFDUG9ELFVBQVUsQ0FBQ0MsSUFBTXBELGNBQWNvRCxFQUFFQyxNQUFNLENBQUNILEtBQUs7Ozs7Ozs7Ozs7OztzREFPakMsOERBQUMvRCw4REFBTUE7NENBQUNxRSxTQUFTLElBQUk7Z0RBQUNqRDs0Q0FBZTs0Q0FBR3dDLE1BQUs7NENBQVNPLE1BQUs7NENBQUtDLFNBQVMsV0FBNkMsT0FBbEM3RCxjQUFjLGlCQUFpQixFQUFFLEVBQUM7c0RBQVM7Ozs7Ozs7Ozs7Ozs4Q0FJakksOERBQUMrRDtvQ0FBRTNCLFdBQVU7b0NBQXVCMEIsU0FBU3JDO29DQUFnQlksT0FBTzt3Q0FBRTJCLFFBQVE7d0NBQVdDLFNBQVM7b0NBQU87OENBQUc7Ozs7Ozs7Ozs7O3FDQUk1RjtzQ0FDaEIsOERBQUM5Qjs0QkFBSUMsV0FBVTs7Z0NBQWU7OENBQ0EsOERBQUMyQjtvQ0FBRUcsTUFBSztvQ0FBWUosU0FBUy9EOzhDQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU83RTtHQXRKTUQ7O1FBR1dELGtEQUFTQTs7O0tBSHBCQztBQXdKTiwrREFBZUEsZ0JBQWdCQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2ZvcmdvdC1wYXNzd29yZC5qcz8xYjI3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgUm93IGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Sb3cnXHJcbmltcG9ydCBDb2wgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NvbCdcclxuaW1wb3J0IE1vZGFsIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Nb2RhbCdcclxuaW1wb3J0IEZvcm0gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0Zvcm0nXHJcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0J1dHRvbidcclxuaW1wb3J0IENsb3NlQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9DbG9zZUJ1dHRvbidcclxuaW1wb3J0IEltYWdlTG9hZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSW1hZ2VMb2FkZXInXHJcbmltcG9ydCBQYXNzd29yZFRvZ2dsZSBmcm9tICcuLi9jb21wb25lbnRzL1Bhc3N3b3JkVG9nZ2xlJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5cclxuY29uc3QgU2lnbkluTW9kYWxMaWdodCA9ICh7IG9uU3dhcCwgcGlsbEJ1dHRvbnMsIC4uLnByb3BzIH0pID0+IHtcclxuXHJcbiAgLy8gRm9ybSB2YWxpZGF0aW9uXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgW2lzU2VudCwgc2V0SXNTZW50XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbb3RwRW50ZXJlZCwgc2V0T3RwRW50ZXJlZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3ZhbGlkYXRlZCwgc2V0VmFsaWRhdGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlT3RwU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgZm9ybSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XHJcbiAgICBpZiAoZm9ybS5jaGVja1ZhbGlkaXR5KCkgPT09IGZhbHNlKSB7XHJcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgICBjb25zb2xlLmxvZyhvdHAsIG90cEVudGVyZWQpXHJcbiAgICAgICAgaWYob3RwICE9PSBvdHBFbnRlcmVkKXtcclxuICAgICAgICAgICAgYWxlcnQoJ09UUCBub3QgdmVyaWZpZWQnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgYWxlcnQoXCJPVFAgTWF0Y2hlZFwiKVxyXG4gICAgICAgICAgICByb3V0ZXIucHVzaCgnLi9jaGFuZ2UtcGFzc3dvcmQnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVSZXNldE90cCA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGZvcm0gPSBldmVudC5jdXJyZW50VGFyZ2V0O1xyXG4gICBcclxuICAgICAgIGNvbnN0IG90cCA9IE1hdGguZmxvb3IoMTAwMDAwICsgTWF0aC5yYW5kb20oKSAqIDkwMDAwMCk7XHJcbiAgICAgICBzZXRJc1NlbnQodHJ1ZSk7XHJcbiAgICAgIC8vIEFQSSBjYWxsIHRvIHNpZ24taW4gZW5kcG9pbnRcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoYGh0dHBzOi8vcHJva2V0LmluL3RhYl9vdHAucGhwP2VtYWlsPSR7ZW1haWx9Jm90cD0ke290cH1gKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhlbWFpbCwgb3RwKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnUGFzc3dvcmQgUmVzZXQgSW5pdGlhdGVkJywgcmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgLy8gYWxlcnQoJ1NpZ24taW4gc3VjY2Vzc2Z1bCEnKTtcclxuICAgICAgICAvLyBZb3UgbWF5IHdhbnQgdG8gaGFuZGxlIG5hdmlnYXRpb24gb3Igc3RhdGUgdXBkYXRlIGhlcmVcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnUGFzc3dvcmQgUmVzZXQgRmFpbGVkJyArIChlcnJvci5yZXNwb25zZT8uZGF0YS5tZXNzYWdlIHx8IGVycm9yLm1lc3NhZ2UpKTtcclxuICAgICAgfVxyXG4gICAgXHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBmb3JtID0gZXZlbnQuY3VycmVudFRhcmdldDtcclxuICAgIGlmIChmb3JtLmNoZWNrVmFsaWRpdHkoKSA9PT0gZmFsc2UpIHtcclxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgY29uc3Qgb3RwID0gTWF0aC5mbG9vcigxMDAwMDAgKyBNYXRoLnJhbmRvbSgpICogOTAwMDAwKTtcclxuICAgICAgIHNldElzU2VudCh0cnVlKTtcclxuICAgICAgLy8gQVBJIGNhbGwgdG8gc2lnbi1pbiBlbmRwb2ludFxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChgaHR0cHM6Ly9wcm9rZXQuaW4vdGFiX290cC5waHA/ZW1haWw9JHtlbWFpbH0mb3RwPSR7b3RwfWApO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVtYWlsLCBvdHApO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdQYXNzd29yZCBSZXNldCBJbml0aWF0ZWQnLCByZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAvLyBhbGVydCgnU2lnbi1pbiBzdWNjZXNzZnVsIScpO1xyXG4gICAgICAgIC8vIFlvdSBtYXkgd2FudCB0byBoYW5kbGUgbmF2aWdhdGlvbiBvciBzdGF0ZSB1cGRhdGUgaGVyZVxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdQYXNzd29yZCBSZXNldCBGYWlsZWQnICsgKGVycm9yLnJlc3BvbnNlPy5kYXRhLm1lc3NhZ2UgfHwgZXJyb3IubWVzc2FnZSkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBzZXRWYWxpZGF0ZWQodHJ1ZSk7XHJcbiAgfTtcclxuICBcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIFxyXG4gICAgXHJcbiAgICBcclxuICBcclxuICAgIDxkaXYgY2xhc3NOYW1lPScgbXgtYXV0byBtdC00IG1iLTQgc2hhZG93IHJvdW5kZWQtNCcgc3R5bGU9e3sgYm9yZGVyOiBcIjFweCBibGFja1wiLCB3aWR0aDogXCI1MCVcIiwgaGVpZ2h0OlwiMTAwJVwifX0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdteC0wIGFsaWduLWl0ZW1zLWNlbnRlcic+XHJcbiAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXQtNCcgc3R5bGU9e3ttYXhXaWR0aDogXCJmaXQtY29udGVudFwiLCBtYXJnaW5MZWZ0OiBcImF1dG9cIiwgbWFyZ2luUmlnaHQ6IFwiYXV0b1wifX0+XHJcbiAgICAgIDxJbWFnZUxvYWRlclxyXG4gICAgICAgIHNyYz0nL2ltYWdlcy9GcmFtZSAyLmpwZydcclxuICAgICAgICB3aWR0aD17MTgwfVxyXG4gICAgICAgIGhlaWdodD17ODR9XHJcbiAgICAgICAgYWx0PSdJbGx1c3RyYXRpb24nXHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nIHB4LTQgcHQtMiBwYi00IHB4LXNtLTUgcGItc20tNSBwdC1tZC01Jz5cclxuICAgICAgICB7IWlzU2VudCA/IChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHA+RW50ZXIgdGhlIGVtYWlsIGFkZHJlc3MgYXNzb2NpYXRlZCB3aXRoIHlvdXIgYWNjb3VudCBhbmQgd2UnbGwgc2VuZCB5b3UgYW4gT1RQIHRvIHZlcmlmeSB5b3VyIGFjY291bnQuPC9wPlxyXG5cclxuICAgICAgICAgIDxGb3JtIG5vVmFsaWRhdGUgdmFsaWRhdGVkPXt2YWxpZGF0ZWR9IG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICA8Rm9ybS5Hcm91cCBjb250cm9sSWQ9J3NpLWVtYWlsJyBjbGFzc05hbWU9J210LTQgbWItNCc+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPEZvcm0uTGFiZWw+RW1haWwgYWRkcmVzczwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgZW1haWxcIlxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICB2YWx1ZT17ZW1haWx9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAvPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxCdXR0b24gdHlwZT0nc3VibWl0JyBzaXplPSdsZycgdmFyaWFudD17YHByaW1hcnkgJHtwaWxsQnV0dG9ucyA/ICdyb3VuZGVkLXBpbGwnIDogJyd9IHctMTAwYH0+XHJcbiAgICAgICAgICAgICAgQ29udGludWVcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApIDogIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+RW50ZXIgdGhlIE9UUCBzZW50IHRvIHlvdXIgZW1haWwgYWRkcmVzcy48L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICA8Rm9ybSBub1ZhbGlkYXRlIHZhbGlkYXRlZD17dmFsaWRhdGVkfT5cclxuICAgICAgICAgICAgPEZvcm0uR3JvdXAgY29udHJvbElkPSdzaS1lbWFpbCcgY2xhc3NOYW1lPSdtdC00IG1iLTQnPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgXHJcbjxGb3JtLkxhYmVsPkVudGVyIHRoZSBPVFA8L0Zvcm0uTGFiZWw+XHJcbjxGb3JtLkNvbnRyb2xcclxudHlwZT1cInRlbFwiXHJcbnBsYWNlaG9sZGVyPVwiRW50ZXIgdGhlIE9UUFwiXHJcbnJlcXVpcmVkXHJcbnZhbHVlPXtvdHBFbnRlcmVkfVxyXG5vbkNoYW5nZT17KGUpID0+IHNldE90cEVudGVyZWQoZS50YXJnZXQudmFsdWUpfVxyXG4vPlxyXG5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcblxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKT0+e2hhbmRsZU90cFN1Ym1pdH19IHR5cGU9J3N1Ym1pdCcgc2l6ZT0nbGcnIHZhcmlhbnQ9e2BwcmltYXJ5ICR7cGlsbEJ1dHRvbnMgPyAncm91bmRlZC1waWxsJyA6ICcnfSB3LTEwMGB9PlxyXG4gICAgICAgICAgICAgIENvbnRpbnVlXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgPGEgY2xhc3NOYW1lPSdtdC0yIG10LXNtLTIgbXQtbWQtMycgb25DbGljaz17aGFuZGxlUmVzZXRPdHB9IHN0eWxlPXt7IGN1cnNvcjogXCJwb2ludGVyXCIsIGRpc3BsYXk6IFwiYmxvY2tcIn19PlxyXG4gIFJlc2VuZCBPVFBcclxuPC9hPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J210LTQgbXQtc20tNSc+XHJcbiAgICAgICAgICAgIERvbiZhcG9zO3QgaGF2ZSBhbiBhY2NvdW50PyA8YSBocmVmPScuL3NpZ24tdXAnIG9uQ2xpY2s9e29uU3dhcH0+U2lnbiB1cCBoZXJlPC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgXHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWduSW5Nb2RhbExpZ2h0XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsImF4aW9zIiwiTGluayIsIlJvdyIsIkNvbCIsIk1vZGFsIiwiRm9ybSIsIkJ1dHRvbiIsIkNsb3NlQnV0dG9uIiwiSW1hZ2VMb2FkZXIiLCJQYXNzd29yZFRvZ2dsZSIsInVzZVJvdXRlciIsIlNpZ25Jbk1vZGFsTGlnaHQiLCJvblN3YXAiLCJwaWxsQnV0dG9ucyIsInByb3BzIiwicm91dGVyIiwiaXNTZW50Iiwic2V0SXNTZW50Iiwib3RwRW50ZXJlZCIsInNldE90cEVudGVyZWQiLCJlbWFpbCIsInNldEVtYWlsIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsInZhbGlkYXRlZCIsInNldFZhbGlkYXRlZCIsImhhbmRsZU90cFN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJmb3JtIiwiY3VycmVudFRhcmdldCIsImNoZWNrVmFsaWRpdHkiLCJzdG9wUHJvcGFnYXRpb24iLCJjb25zb2xlIiwibG9nIiwib3RwIiwiYWxlcnQiLCJwdXNoIiwiaGFuZGxlUmVzZXRPdHAiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJyZXNwb25zZSIsInBvc3QiLCJkYXRhIiwiZXJyb3IiLCJtZXNzYWdlIiwiaGFuZGxlU3VibWl0IiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJib3JkZXIiLCJ3aWR0aCIsImhlaWdodCIsIm1heFdpZHRoIiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0Iiwic3JjIiwiYWx0IiwicCIsIm5vVmFsaWRhdGUiLCJvblN1Ym1pdCIsIkdyb3VwIiwiY29udHJvbElkIiwiTGFiZWwiLCJDb250cm9sIiwidHlwZSIsInBsYWNlaG9sZGVyIiwicmVxdWlyZWQiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInNpemUiLCJ2YXJpYW50Iiwib25DbGljayIsImEiLCJjdXJzb3IiLCJkaXNwbGF5IiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/forgot-password.js\n"));

/***/ })

});