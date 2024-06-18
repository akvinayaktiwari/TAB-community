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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/ScrollTopButton.js":
/*!***************************************!*\
  !*** ./components/ScrollTopButton.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-scroll */ \"react-scroll\");\n/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst ScrollTopButton = ({ showOffset , duration , easing , tooltip  })=>{\n    const [show, setShow] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleShow = (e)=>{\n            if (e.currentTarget.pageYOffset > showOffset) {\n                setShow(true);\n            } else {\n                setShow(false);\n            }\n        };\n        window.addEventListener(\"scroll\", handleShow);\n        return ()=>window.removeEventListener(\"scroll\", handleShow);\n    }, [\n        showOffset\n    ]);\n    const scrollToTop = ()=>{\n        react_scroll__WEBPACK_IMPORTED_MODULE_2__.animateScroll.scrollToTop({\n            duration: duration,\n            smooth: easing\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        type: \"btton\",\n        className: `btn-scroll-top${show ? \" show\" : \"\"}`,\n        onClick: scrollToTop,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"btn-scroll-top-tooltip text-muted fs-sm me-2\",\n                children: tooltip\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\alok0\\\\TAB\\\\TAB-community\\\\components\\\\ScrollTopButton.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                className: \"btn-scroll-top-icon fi-chevron-up\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\alok0\\\\TAB\\\\TAB-community\\\\components\\\\ScrollTopButton.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\alok0\\\\TAB\\\\TAB-community\\\\components\\\\ScrollTopButton.js\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScrollTopButton);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Njcm9sbFRvcEJ1dHRvbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBMkM7QUFDVztBQUV0RCxNQUFNSSxrQkFBa0IsQ0FBQyxFQUFFQyxXQUFVLEVBQUVDLFNBQVEsRUFBRUMsT0FBTSxFQUFFQyxRQUFPLEVBQUUsR0FBSztJQUVyRSxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR1YsK0NBQVFBLENBQUMsS0FBSztJQUV0Q0MsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLE1BQU1VLGFBQWEsQ0FBQ0MsSUFBTTtZQUN4QixJQUFJQSxFQUFFQyxhQUFhLENBQUNDLFdBQVcsR0FBR1QsWUFBWTtnQkFDNUNLLFFBQVEsSUFBSTtZQUNkLE9BQU87Z0JBQ0xBLFFBQVEsS0FBSztZQUNmLENBQUM7UUFDSDtRQUVBSyxPQUFPQyxnQkFBZ0IsQ0FBQyxVQUFVTDtRQUNsQyxPQUFPLElBQU1JLE9BQU9FLG1CQUFtQixDQUFDLFVBQVVOO0lBQ3BELEdBQUc7UUFBQ047S0FBVztJQUVmLE1BQU1hLGNBQWMsSUFBTTtRQUN4QmYsbUVBQWtCLENBQUM7WUFDakJHLFVBQVVBO1lBQ1ZhLFFBQVFaO1FBQ1Y7SUFDRjtJQUVBLHFCQUNFLDhEQUFDYTtRQUFPQyxNQUFLO1FBQVFDLFdBQVcsQ0FBQyxjQUFjLEVBQUViLE9BQU8sVUFBVSxFQUFFLENBQUMsQ0FBQztRQUFFYyxTQUFTTDs7MEJBQy9FLDhEQUFDTTtnQkFBS0YsV0FBVTswQkFBZ0RkOzs7Ozs7MEJBQ2hFLDhEQUFDaUI7Z0JBQUVILFdBQVU7Ozs7Ozs7Ozs7OztBQUduQjtBQUVBLGlFQUFlbEIsZUFBZUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2ZpbmRlci1yZWFjdC8uL2NvbXBvbmVudHMvU2Nyb2xsVG9wQnV0dG9uLmpzP2M2ZjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBhbmltYXRlU2Nyb2xsIGFzIHNjcm9sbCB9IGZyb20gJ3JlYWN0LXNjcm9sbCdcclxuXHJcbmNvbnN0IFNjcm9sbFRvcEJ1dHRvbiA9ICh7IHNob3dPZmZzZXQsIGR1cmF0aW9uLCBlYXNpbmcsIHRvb2x0aXAgfSkgPT4ge1xyXG5cclxuICBjb25zdCBbc2hvdywgc2V0U2hvd10gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGhhbmRsZVNob3cgPSAoZSkgPT4ge1xyXG4gICAgICBpZiAoZS5jdXJyZW50VGFyZ2V0LnBhZ2VZT2Zmc2V0ID4gc2hvd09mZnNldCkge1xyXG4gICAgICAgIHNldFNob3codHJ1ZSlcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRTaG93KGZhbHNlKVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNob3cpXHJcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNob3cpXHJcbiAgfSwgW3Nob3dPZmZzZXRdKVxyXG5cclxuICBjb25zdCBzY3JvbGxUb1RvcCA9ICgpID0+IHtcclxuICAgIHNjcm9sbC5zY3JvbGxUb1RvcCh7XHJcbiAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbixcclxuICAgICAgc21vb3RoOiBlYXNpbmdcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGJ1dHRvbiB0eXBlPSdidHRvbicgY2xhc3NOYW1lPXtgYnRuLXNjcm9sbC10b3Ake3Nob3cgPyAnIHNob3cnIDogJyd9YH0gb25DbGljaz17c2Nyb2xsVG9Ub3B9PlxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9J2J0bi1zY3JvbGwtdG9wLXRvb2x0aXAgdGV4dC1tdXRlZCBmcy1zbSBtZS0yJz57dG9vbHRpcH08L3NwYW4+XHJcbiAgICAgIDxpIGNsYXNzTmFtZT0nYnRuLXNjcm9sbC10b3AtaWNvbiBmaS1jaGV2cm9uLXVwJz48L2k+XHJcbiAgICA8L2J1dHRvbj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNjcm9sbFRvcEJ1dHRvblxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJhbmltYXRlU2Nyb2xsIiwic2Nyb2xsIiwiU2Nyb2xsVG9wQnV0dG9uIiwic2hvd09mZnNldCIsImR1cmF0aW9uIiwiZWFzaW5nIiwidG9vbHRpcCIsInNob3ciLCJzZXRTaG93IiwiaGFuZGxlU2hvdyIsImUiLCJjdXJyZW50VGFyZ2V0IiwicGFnZVlPZmZzZXQiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNjcm9sbFRvVG9wIiwic21vb3RoIiwiYnV0dG9uIiwidHlwZSIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJzcGFuIiwiaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ScrollTopButton.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap_SSRProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/SSRProvider */ \"react-bootstrap/SSRProvider\");\n/* harmony import */ var react_bootstrap_SSRProvider__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_SSRProvider__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! nprogress */ \"nprogress\");\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_ScrollTopButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/ScrollTopButton */ \"./components/ScrollTopButton.js\");\n/* harmony import */ var _scss_theme_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../scss/theme.scss */ \"./scss/theme.scss\");\n/* harmony import */ var _scss_theme_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_scss_theme_scss__WEBPACK_IMPORTED_MODULE_7__);\n// pages/_app.js\n\n\n\n\n\n\n\n\nconst Finder = ({ Component , pageProps: { session , ...pageProps }  })=>{\n    // Bind NProgress to Next Router events (Page loading animation)\n    next_router__WEBPACK_IMPORTED_MODULE_3___default().events.on(\"routeChangeStart\", ()=>nprogress__WEBPACK_IMPORTED_MODULE_5___default().start());\n    next_router__WEBPACK_IMPORTED_MODULE_3___default().events.on(\"routeChangeComplete\", ()=>nprogress__WEBPACK_IMPORTED_MODULE_5___default().done());\n    next_router__WEBPACK_IMPORTED_MODULE_3___default().events.on(\"routeChangeError\", ()=>nprogress__WEBPACK_IMPORTED_MODULE_5___default().done());\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_auth_react__WEBPACK_IMPORTED_MODULE_1__.SessionProvider, {\n        session: session,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_SSRProvider__WEBPACK_IMPORTED_MODULE_2___default()), {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                            name: \"viewport\",\n                            content: \"width=device-width, initial-scale=1\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\alok0\\\\TAB\\\\TAB-community\\\\pages\\\\_app.js\",\n                            lineNumber: 20,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                            children: \"TAB Community\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\alok0\\\\TAB\\\\TAB-community\\\\pages\\\\_app.js\",\n                            lineNumber: 21,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                            name: \"description\",\n                            content: \"TAB Community\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\alok0\\\\TAB\\\\TAB-community\\\\pages\\\\_app.js\",\n                            lineNumber: 22,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                            name: \"keywords\",\n                            content: \"\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\alok0\\\\TAB\\\\TAB-community\\\\pages\\\\_app.js\",\n                            lineNumber: 23,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                            name: \"author\",\n                            content: \"Drsyeta Innovations\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\alok0\\\\TAB\\\\TAB-community\\\\pages\\\\_app.js\",\n                            lineNumber: 24,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"apple-touch-icon\",\n                            sizes: \"180x180\",\n                            href: \"https://tabcommunity.com/assets/img/logo_tab.svg\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\alok0\\\\TAB\\\\TAB-community\\\\pages\\\\_app.js\",\n                            lineNumber: 25,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"icon\",\n                            type: \"image/png\",\n                            sizes: \"32x32\",\n                            href: \"https://tabcommunity.com/assets/img/logo_tab.svg\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\alok0\\\\TAB\\\\TAB-community\\\\pages\\\\_app.js\",\n                            lineNumber: 26,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"icon\",\n                            type: \"image/png\",\n                            sizes: \"16x16\",\n                            href: \"https://tabcommunity.com/assets/img/logo_tab.svg\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\alok0\\\\TAB\\\\TAB-community\\\\pages\\\\_app.js\",\n                            lineNumber: 27,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"manifest\",\n                            href: \"/favicon/site.webmanifest\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\alok0\\\\TAB\\\\TAB-community\\\\pages\\\\_app.js\",\n                            lineNumber: 28,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"mask-icon\",\n                            color: \"#5bbad5\",\n                            href: \"/favicon/safari-pinned-tab.svg\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\alok0\\\\TAB\\\\TAB-community\\\\pages\\\\_app.js\",\n                            lineNumber: 29,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                            name: \"msapplication-TileColor\",\n                            content: \"#766df4\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\alok0\\\\TAB\\\\TAB-community\\\\pages\\\\_app.js\",\n                            lineNumber: 30,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                            name: \"theme-color\",\n                            content: \"#ffffff\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\alok0\\\\TAB\\\\TAB-community\\\\pages\\\\_app.js\",\n                            lineNumber: 31,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\alok0\\\\TAB\\\\TAB-community\\\\pages\\\\_app.js\",\n                    lineNumber: 19,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\alok0\\\\TAB\\\\TAB-community\\\\pages\\\\_app.js\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ScrollTopButton__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    showOffset: 600,\n                    duration: 800,\n                    easing: \"easeInOutQuart\",\n                    tooltip: \"Top\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\alok0\\\\TAB\\\\TAB-community\\\\pages\\\\_app.js\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\alok0\\\\TAB\\\\TAB-community\\\\pages\\\\_app.js\",\n            lineNumber: 18,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\alok0\\\\TAB\\\\TAB-community\\\\pages\\\\_app.js\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Finder);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnQkFBZ0I7QUFDaEI7QUFBa0Q7QUFDSTtBQUNyQjtBQUNKO0FBQ0s7QUFDMEI7QUFDaEM7QUFFNUIsTUFBTU0sU0FBUyxDQUFDLEVBQUVDLFVBQVMsRUFBRUMsV0FBVyxFQUFFQyxRQUFPLEVBQUUsR0FBR0QsV0FBVyxHQUFFLEdBQUs7SUFDdEUsZ0VBQWdFO0lBQ2hFTiw0REFBZ0IsQ0FBQyxvQkFBb0IsSUFBTUUsc0RBQWU7SUFDMURGLDREQUFnQixDQUFDLHVCQUF1QixJQUFNRSxxREFBYztJQUM1REYsNERBQWdCLENBQUMsb0JBQW9CLElBQU1FLHFEQUFjO0lBRXpELHFCQUNFLDhEQUFDSiw0REFBZUE7UUFBQ1MsU0FBU0E7a0JBQ3hCLDRFQUFDUixvRUFBV0E7OzhCQUNWLDhEQUFDRSxrREFBSUE7O3NDQUNILDhEQUFDVzs0QkFBS0MsTUFBSzs0QkFBV0MsU0FBUTs7Ozs7O3NDQUM5Qiw4REFBQ0M7c0NBQU07Ozs7OztzQ0FDUCw4REFBQ0g7NEJBQUtDLE1BQUs7NEJBQWNDLFNBQVE7Ozs7OztzQ0FDakMsOERBQUNGOzRCQUFLQyxNQUFLOzRCQUFXQyxTQUFROzs7Ozs7c0NBQzlCLDhEQUFDRjs0QkFBS0MsTUFBSzs0QkFBU0MsU0FBUTs7Ozs7O3NDQUM1Qiw4REFBQ0U7NEJBQUtDLEtBQUk7NEJBQW1CQyxPQUFNOzRCQUFVQyxNQUFLOzs7Ozs7c0NBQ2xELDhEQUFDSDs0QkFBS0MsS0FBSTs0QkFBT0csTUFBSzs0QkFBWUYsT0FBTTs0QkFBUUMsTUFBSzs7Ozs7O3NDQUNyRCw4REFBQ0g7NEJBQUtDLEtBQUk7NEJBQU9HLE1BQUs7NEJBQVlGLE9BQU07NEJBQVFDLE1BQUs7Ozs7OztzQ0FDckQsOERBQUNIOzRCQUFLQyxLQUFJOzRCQUFXRSxNQUFLOzs7Ozs7c0NBQzFCLDhEQUFDSDs0QkFBS0MsS0FBSTs0QkFBWUksT0FBTTs0QkFBVUYsTUFBSzs7Ozs7O3NDQUMzQyw4REFBQ1A7NEJBQUtDLE1BQUs7NEJBQTBCQyxTQUFROzs7Ozs7c0NBQzdDLDhEQUFDRjs0QkFBS0MsTUFBSzs0QkFBY0MsU0FBUTs7Ozs7Ozs7Ozs7OzhCQUduQyw4REFBQ1Q7b0JBQVcsR0FBR0MsU0FBUzs7Ozs7OzhCQUV4Qiw4REFBQ0gsbUVBQWVBO29CQUNkbUIsWUFBWTtvQkFDWkMsVUFBVTtvQkFDVkMsUUFBTztvQkFDUEMsU0FBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLbEI7QUFFQSxpRUFBZXJCLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maW5kZXItcmVhY3QvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcGFnZXMvX2FwcC5qc1xyXG5pbXBvcnQgeyBTZXNzaW9uUHJvdmlkZXIgfSBmcm9tICduZXh0LWF1dGgvcmVhY3QnO1xyXG5pbXBvcnQgU1NSUHJvdmlkZXIgZnJvbSAncmVhY3QtYm9vdHN0cmFwL1NTUlByb3ZpZGVyJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBOUHJvZ3Jlc3MgZnJvbSAnbnByb2dyZXNzJztcclxuaW1wb3J0IFNjcm9sbFRvcEJ1dHRvbiBmcm9tICcuLi9jb21wb25lbnRzL1Njcm9sbFRvcEJ1dHRvbic7XHJcbmltcG9ydCAnLi4vc2Nzcy90aGVtZS5zY3NzJztcclxuXHJcbmNvbnN0IEZpbmRlciA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzOiB7IHNlc3Npb24sIC4uLnBhZ2VQcm9wcyB9IH0pID0+IHtcclxuICAvLyBCaW5kIE5Qcm9ncmVzcyB0byBOZXh0IFJvdXRlciBldmVudHMgKFBhZ2UgbG9hZGluZyBhbmltYXRpb24pXHJcbiAgUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VTdGFydCcsICgpID0+IE5Qcm9ncmVzcy5zdGFydCgpKTtcclxuICBSb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgKCkgPT4gTlByb2dyZXNzLmRvbmUoKSk7XHJcbiAgUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VFcnJvcicsICgpID0+IE5Qcm9ncmVzcy5kb25lKCkpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFNlc3Npb25Qcm92aWRlciBzZXNzaW9uPXtzZXNzaW9ufT5cclxuICAgICAgPFNTUlByb3ZpZGVyPlxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cclxuICAgICAgICAgIDx0aXRsZT5UQUIgQ29tbXVuaXR5PC90aXRsZT5cclxuICAgICAgICAgIDxtZXRhIG5hbWU9J2Rlc2NyaXB0aW9uJyBjb250ZW50PSdUQUIgQ29tbXVuaXR5JyAvPlxyXG4gICAgICAgICAgPG1ldGEgbmFtZT0na2V5d29yZHMnIGNvbnRlbnQ9JycgLz5cclxuICAgICAgICAgIDxtZXRhIG5hbWU9J2F1dGhvcicgY29udGVudD0nRHJzeWV0YSBJbm5vdmF0aW9ucycgLz5cclxuICAgICAgICAgIDxsaW5rIHJlbD0nYXBwbGUtdG91Y2gtaWNvbicgc2l6ZXM9JzE4MHgxODAnIGhyZWY9J2h0dHBzOi8vdGFiY29tbXVuaXR5LmNvbS9hc3NldHMvaW1nL2xvZ29fdGFiLnN2ZycgLz5cclxuICAgICAgICAgIDxsaW5rIHJlbD0naWNvbicgdHlwZT0naW1hZ2UvcG5nJyBzaXplcz0nMzJ4MzInIGhyZWY9J2h0dHBzOi8vdGFiY29tbXVuaXR5LmNvbS9hc3NldHMvaW1nL2xvZ29fdGFiLnN2ZycgLz5cclxuICAgICAgICAgIDxsaW5rIHJlbD0naWNvbicgdHlwZT0naW1hZ2UvcG5nJyBzaXplcz0nMTZ4MTYnIGhyZWY9J2h0dHBzOi8vdGFiY29tbXVuaXR5LmNvbS9hc3NldHMvaW1nL2xvZ29fdGFiLnN2ZycgLz5cclxuICAgICAgICAgIDxsaW5rIHJlbD0nbWFuaWZlc3QnIGhyZWY9Jy9mYXZpY29uL3NpdGUud2VibWFuaWZlc3QnIC8+XHJcbiAgICAgICAgICA8bGluayByZWw9J21hc2staWNvbicgY29sb3I9JyM1YmJhZDUnIGhyZWY9Jy9mYXZpY29uL3NhZmFyaS1waW5uZWQtdGFiLnN2ZycgLz5cclxuICAgICAgICAgIDxtZXRhIG5hbWU9J21zYXBwbGljYXRpb24tVGlsZUNvbG9yJyBjb250ZW50PScjNzY2ZGY0JyAvPlxyXG4gICAgICAgICAgPG1ldGEgbmFtZT0ndGhlbWUtY29sb3InIGNvbnRlbnQ9JyNmZmZmZmYnIC8+XHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgICBcclxuICAgICAgICA8U2Nyb2xsVG9wQnV0dG9uXHJcbiAgICAgICAgICBzaG93T2Zmc2V0PXs2MDB9XHJcbiAgICAgICAgICBkdXJhdGlvbj17ODAwfVxyXG4gICAgICAgICAgZWFzaW5nPSdlYXNlSW5PdXRRdWFydCdcclxuICAgICAgICAgIHRvb2x0aXA9J1RvcCdcclxuICAgICAgICAvPlxyXG4gICAgICA8L1NTUlByb3ZpZGVyPlxyXG4gICAgPC9TZXNzaW9uUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpbmRlcjtcclxuIl0sIm5hbWVzIjpbIlNlc3Npb25Qcm92aWRlciIsIlNTUlByb3ZpZGVyIiwiUm91dGVyIiwiSGVhZCIsIk5Qcm9ncmVzcyIsIlNjcm9sbFRvcEJ1dHRvbiIsIkZpbmRlciIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInNlc3Npb24iLCJldmVudHMiLCJvbiIsInN0YXJ0IiwiZG9uZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsInRpdGxlIiwibGluayIsInJlbCIsInNpemVzIiwiaHJlZiIsInR5cGUiLCJjb2xvciIsInNob3dPZmZzZXQiLCJkdXJhdGlvbiIsImVhc2luZyIsInRvb2x0aXAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./scss/theme.scss":
/*!*************************!*\
  !*** ./scss/theme.scss ***!
  \*************************/
/***/ (() => {



/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "nprogress":
/*!****************************!*\
  !*** external "nprogress" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("nprogress");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-bootstrap/SSRProvider":
/*!**********************************************!*\
  !*** external "react-bootstrap/SSRProvider" ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap/SSRProvider");

/***/ }),

/***/ "react-scroll":
/*!*******************************!*\
  !*** external "react-scroll" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-scroll");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();