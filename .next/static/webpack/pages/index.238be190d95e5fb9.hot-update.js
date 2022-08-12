"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./hooks/useUserIdentity.ts":
/*!**********************************!*\
  !*** ./hooks/useUserIdentity.ts ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _livechat_accounts_sdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @livechat/accounts-sdk */ \"./node_modules/@livechat/accounts-sdk/dist/index.esm.js\");\n/* harmony import */ var lib_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lib/config */ \"./lib/config.ts\");\n\n\n\n\nvar accountsSDK = new _livechat_accounts_sdk__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n    client_id: lib_config__WEBPACK_IMPORTED_MODULE_3__.Config.lcClientId,\n    server_url: lib_config__WEBPACK_IMPORTED_MODULE_3__.Config.lcAccountsURL\n});\nfunction useUserIdentity() {\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null), userIdentity = ref[0], setUserIdentity = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false), loading = ref1[0], setLoading = ref1[1];\n    var asPath = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)().asPath;\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function() {\n        if (asPath !== '' && asPath !== '/') {\n            asPath.replace('/#', '').split('&').forEach(function(item) {\n                console.log(item);\n            });\n        }\n    }, [\n        asPath\n    ]);\n    var authorize = function() {\n        try {\n            setLoading(true);\n            accountsSDK.redirect().authorize();\n            var urlIdentity = {\n                account_id: '',\n                access_token: '',\n                expires_in: 0,\n                organization_id: '',\n                scope: '',\n                token_type: 'Bearer'\n            };\n            var TOKEN_KEY = 'access_token';\n            /* asPath\n        .replace('/#', '')\n        .split('&')\n        .forEach((item) => {\n          // const key = item.split('=')[0]\n          // const value: any = (item.split('=')[1]\n          //  (urlIdentity as any)[key] = value\n        })*/ setLoading(false);\n        } catch (error) {\n            console.error(error);\n        }\n    };\n    var logout = function() {\n        if (userIdentity) {\n            fetch(\"\".concat(lib_config__WEBPACK_IMPORTED_MODULE_3__.Config.lcAccountsURL, \"/v2/sessions\"), {\n                method: 'DELETE',\n                body: '{}',\n                headers: {\n                    'Content-Type': 'application/json',\n                    Authorization: \"\".concat(userIdentity.token_type, \" \").concat(userIdentity.access_token)\n                }\n            }).then(function(response) {\n                setUserIdentity(null);\n                return response.json();\n            });\n        }\n    };\n    return {\n        userIdentity: userIdentity,\n        authorize: authorize,\n        logout: logout,\n        loading: loading\n    };\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (useUserIdentity);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE1BQU07UUFBRXBCLE9BQU8sRUFBUEEsT0FBTztJQUFDLENBQUM7QUFDckQsQ0FBQztBQUVELCtEQUFlSCxlQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2hvb2tzL3VzZVVzZXJJZGVudGl0eS50cz80ZGEzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IEFjY291bnRzU0RLIGZyb20gJ0BsaXZlY2hhdC9hY2NvdW50cy1zZGsnXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICdsaWIvY29uZmlnJ1xuXG50eXBlIFVzZXJJZGVudGl0eSA9IHtcbiAgYWNjb3VudF9pZDogc3RyaW5nXG4gIGFjY2Vzc190b2tlbjogc3RyaW5nXG4gIGV4cGlyZXNfaW46IG51bWJlclxuICBvcmdhbml6YXRpb25faWQ6IHN0cmluZ1xuICBzY29wZTogc3RyaW5nXG4gIHRva2VuX3R5cGU6ICdCZWFyZXInXG59XG5cbmNvbnN0IGFjY291bnRzU0RLID0gbmV3IEFjY291bnRzU0RLKHtcbiAgY2xpZW50X2lkOiBDb25maWcubGNDbGllbnRJZCxcbiAgc2VydmVyX3VybDogQ29uZmlnLmxjQWNjb3VudHNVUkwsXG59KVxuXG5mdW5jdGlvbiB1c2VVc2VySWRlbnRpdHkoKSB7XG4gIGNvbnN0IFt1c2VySWRlbnRpdHksIHNldFVzZXJJZGVudGl0eV0gPSB1c2VTdGF0ZTxVc2VySWRlbnRpdHkgfCBudWxsPihudWxsKVxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSlcbiAgY29uc3QgeyBhc1BhdGggfSA9IHVzZVJvdXRlcigpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoYXNQYXRoICE9PSAnJyAmJiBhc1BhdGggIT09ICcvJykge1xuICAgICAgYXNQYXRoXG4gICAgICAgIC5yZXBsYWNlKCcvIycsICcnKVxuICAgICAgICAuc3BsaXQoJyYnKVxuICAgICAgICAuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGl0ZW0pXG4gICAgICAgIH0pXG4gICAgfVxuICB9LCBbYXNQYXRoXSlcblxuICBjb25zdCBhdXRob3JpemUgPSAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIHNldExvYWRpbmcodHJ1ZSlcbiAgICAgIGFjY291bnRzU0RLLnJlZGlyZWN0KCkuYXV0aG9yaXplKClcblxuICAgICAgbGV0IHVybElkZW50aXR5OiBVc2VySWRlbnRpdHkgPSB7XG4gICAgICAgIGFjY291bnRfaWQ6ICcnLFxuICAgICAgICBhY2Nlc3NfdG9rZW46ICcnLFxuICAgICAgICBleHBpcmVzX2luOiAwLFxuICAgICAgICBvcmdhbml6YXRpb25faWQ6ICcnLFxuICAgICAgICBzY29wZTogJycsXG4gICAgICAgIHRva2VuX3R5cGU6ICdCZWFyZXInLFxuICAgICAgfVxuXG4gICAgICBjb25zdCBUT0tFTl9LRVkgPSAnYWNjZXNzX3Rva2VuJ1xuXG4gICAgICAvKiBhc1BhdGhcbiAgICAgICAgLnJlcGxhY2UoJy8jJywgJycpXG4gICAgICAgIC5zcGxpdCgnJicpXG4gICAgICAgIC5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgLy8gY29uc3Qga2V5ID0gaXRlbS5zcGxpdCgnPScpWzBdXG4gICAgICAgICAgLy8gY29uc3QgdmFsdWU6IGFueSA9IChpdGVtLnNwbGl0KCc9JylbMV1cbiAgICAgICAgICAvLyAgKHVybElkZW50aXR5IGFzIGFueSlba2V5XSA9IHZhbHVlXG4gICAgICAgIH0pKi9cblxuICAgICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcilcbiAgICB9XG4gIH1cblxuICBjb25zdCBsb2dvdXQgPSAoKSA9PiB7XG4gICAgaWYgKHVzZXJJZGVudGl0eSkge1xuICAgICAgZmV0Y2goYCR7Q29uZmlnLmxjQWNjb3VudHNVUkx9L3YyL3Nlc3Npb25zYCwge1xuICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgICAgICBib2R5OiAne30nLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiBgJHt1c2VySWRlbnRpdHkudG9rZW5fdHlwZX0gJHt1c2VySWRlbnRpdHkuYWNjZXNzX3Rva2VufWAsXG4gICAgICAgIH0sXG4gICAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBzZXRVc2VySWRlbnRpdHkobnVsbClcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4geyB1c2VySWRlbnRpdHksIGF1dGhvcml6ZSwgbG9nb3V0LCBsb2FkaW5nIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlVXNlcklkZW50aXR5XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJBY2NvdW50c1NESyIsIkNvbmZpZyIsImFjY291bnRzU0RLIiwiY2xpZW50X2lkIiwibGNDbGllbnRJZCIsInNlcnZlcl91cmwiLCJsY0FjY291bnRzVVJMIiwidXNlVXNlcklkZW50aXR5IiwidXNlcklkZW50aXR5Iiwic2V0VXNlcklkZW50aXR5IiwibG9hZGluZyIsInNldExvYWRpbmciLCJhc1BhdGgiLCJyZXBsYWNlIiwic3BsaXQiLCJmb3JFYWNoIiwiaXRlbSIsImNvbnNvbGUiLCJsb2ciLCJhdXRob3JpemUiLCJyZWRpcmVjdCIsInVybElkZW50aXR5IiwiYWNjb3VudF9pZCIsImFjY2Vzc190b2tlbiIsImV4cGlyZXNfaW4iLCJvcmdhbml6YXRpb25faWQiLCJzY29wZSIsInRva2VuX3R5cGUiLCJUT0tFTl9LRVkiLCJlcnJvciIsImxvZ291dCIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./hooks/useUserIdentity.ts\n");

/***/ })

});