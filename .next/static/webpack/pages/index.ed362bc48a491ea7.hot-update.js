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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _livechat_accounts_sdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @livechat/accounts-sdk */ \"./node_modules/@livechat/accounts-sdk/dist/index.esm.js\");\n/* harmony import */ var lib_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lib/config */ \"./lib/config.ts\");\n\n\n\n\nvar accountsSDK = new _livechat_accounts_sdk__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n    client_id: lib_config__WEBPACK_IMPORTED_MODULE_3__.Config.lcClientId,\n    server_url: lib_config__WEBPACK_IMPORTED_MODULE_3__.Config.lcAccountsURL\n});\nfunction useUserIdentity() {\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null), userIdentity = ref[0], setUserIdentity = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false), loading = ref1[0], setLoading = ref1[1];\n    var asPath = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)().asPath;\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function() {\n        var identity = {\n            account_id: '',\n            access_token: '',\n            expires_in: 0,\n            organization_id: '',\n            scope: '',\n            token_type: 'Bearer'\n        };\n        if (asPath !== '' && asPath !== '/') {\n            asPath.replace('/#', '').split('&').forEach(function(item) {\n                var key = item.split('=')[0];\n                var value = item.split('=')[1];\n                switch(key){\n                    case 'access_token':\n                        urlIdentity.access_token = value;\n                        break;\n                    case 'expires_in':\n                        urlIdentity.expires_in = parseInt(value);\n                        break;\n                    case 'scope':\n                        urlIdentity.scope = value;\n                        break;\n                    default:\n                        break;\n                }\n            });\n            setUserIdentity(urlIdentity);\n        }\n    }, [\n        asPath\n    ]);\n    var authorize = function() {\n        try {\n            setLoading(true);\n            accountsSDK.redirect().authorize();\n            var TOKEN_KEY = 'access_token';\n            setLoading(false);\n        } catch (error) {\n            console.error(error);\n        }\n    };\n    var logout = function() {\n        if (userIdentity) {\n            fetch(\"\".concat(lib_config__WEBPACK_IMPORTED_MODULE_3__.Config.lcAccountsURL, \"/v2/sessions\"), {\n                method: 'DELETE',\n                body: '{}',\n                headers: {\n                    'Content-Type': 'application/json',\n                    Authorization: \"\".concat(userIdentity.token_type, \" \").concat(userIdentity.access_token)\n                }\n            }).then(function(response) {\n                setUserIdentity(null);\n                return response.json();\n            });\n        }\n    };\n    return {\n        userIdentity: userIdentity,\n        authorize: authorize,\n        logout: logout,\n        loading: loading\n    };\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (useUserIdentity);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YyxlQUFFLENBQWtCO29CQUNsQ0MsYUFBYSxFQUFHLEdBQTZCOUIsTUFBeUIsQ0FBcERBLFlBQVksQ0FBQ1csVUFBVSxFQUFDLENBQUMsSUFBNEIsT0FBMUJYLFlBQVksQ0FBQ08sWUFBWTtnQkFDeEUsQ0FBQztZQUNILENBQUMsRUFBRXdCLElBQUksQ0FBQyxRQUFRLENBQVBDLFFBQVEsRUFBSyxDQUFDO2dCQUNyQi9CLGVBQWUsQ0FBQyxJQUFJO2dCQUNwQixNQUFNLENBQUMrQixRQUFRLENBQUNDLElBQUk7WUFDdEIsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBRUQsTUFBTSxDQUFDLENBQUM7UUFBQ2pDLFlBQVksRUFBWkEsWUFBWTtRQUFFb0IsU0FBUyxFQUFUQSxTQUFTO1FBQUVLLE1BQU0sRUFBTkEsTUFBTTtRQUFFdkIsT0FBTyxFQUFQQSxPQUFPO0lBQUMsQ0FBQztBQUNyRCxDQUFDO0FBRUQsK0RBQWVILGVBQWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvdXNlVXNlcklkZW50aXR5LnRzPzRkYTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgQWNjb3VudHNTREsgZnJvbSAnQGxpdmVjaGF0L2FjY291bnRzLXNkaydcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJ2xpYi9jb25maWcnXG5cbnR5cGUgVXNlcklkZW50aXR5ID0ge1xuICBhY2NvdW50X2lkOiBzdHJpbmdcbiAgYWNjZXNzX3Rva2VuOiBzdHJpbmdcbiAgZXhwaXJlc19pbjogbnVtYmVyXG4gIG9yZ2FuaXphdGlvbl9pZDogc3RyaW5nXG4gIHNjb3BlOiBzdHJpbmdcbiAgdG9rZW5fdHlwZTogJ0JlYXJlcidcbn1cblxuY29uc3QgYWNjb3VudHNTREsgPSBuZXcgQWNjb3VudHNTREsoe1xuICBjbGllbnRfaWQ6IENvbmZpZy5sY0NsaWVudElkLFxuICBzZXJ2ZXJfdXJsOiBDb25maWcubGNBY2NvdW50c1VSTCxcbn0pXG5cbmZ1bmN0aW9uIHVzZVVzZXJJZGVudGl0eSgpIHtcbiAgY29uc3QgW3VzZXJJZGVudGl0eSwgc2V0VXNlcklkZW50aXR5XSA9IHVzZVN0YXRlPFVzZXJJZGVudGl0eSB8IG51bGw+KG51bGwpXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKVxuICBjb25zdCB7IGFzUGF0aCB9ID0gdXNlUm91dGVyKClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCBpZGVudGl0eTogVXNlcklkZW50aXR5ID0ge1xuICAgICAgYWNjb3VudF9pZDogJycsXG4gICAgICBhY2Nlc3NfdG9rZW46ICcnLFxuICAgICAgZXhwaXJlc19pbjogMCxcbiAgICAgIG9yZ2FuaXphdGlvbl9pZDogJycsXG4gICAgICBzY29wZTogJycsXG4gICAgICB0b2tlbl90eXBlOiAnQmVhcmVyJyxcbiAgICB9XG5cbiAgICBpZiAoYXNQYXRoICE9PSAnJyAmJiBhc1BhdGggIT09ICcvJykge1xuICAgICAgYXNQYXRoXG4gICAgICAgIC5yZXBsYWNlKCcvIycsICcnKVxuICAgICAgICAuc3BsaXQoJyYnKVxuICAgICAgICAuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGtleSA9IGl0ZW0uc3BsaXQoJz0nKVswXVxuICAgICAgICAgIGNvbnN0IHZhbHVlID0gaXRlbS5zcGxpdCgnPScpWzFdXG5cbiAgICAgICAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgICAgICAgY2FzZSAnYWNjZXNzX3Rva2VuJzpcbiAgICAgICAgICAgICAgdXJsSWRlbnRpdHkuYWNjZXNzX3Rva2VuID0gdmFsdWVcbiAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgJ2V4cGlyZXNfaW4nOlxuICAgICAgICAgICAgICB1cmxJZGVudGl0eS5leHBpcmVzX2luID0gcGFyc2VJbnQodmFsdWUpXG4gICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlICdzY29wZSc6XG4gICAgICAgICAgICAgIHVybElkZW50aXR5LnNjb3BlID0gdmFsdWVcbiAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICBzZXRVc2VySWRlbnRpdHkodXJsSWRlbnRpdHkpXG4gICAgfVxuICB9LCBbYXNQYXRoXSlcblxuICBjb25zdCBhdXRob3JpemUgPSAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIHNldExvYWRpbmcodHJ1ZSlcbiAgICAgIGFjY291bnRzU0RLLnJlZGlyZWN0KCkuYXV0aG9yaXplKClcblxuICAgICAgY29uc3QgVE9LRU5fS0VZID0gJ2FjY2Vzc190b2tlbidcblxuICAgICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcilcbiAgICB9XG4gIH1cblxuICBjb25zdCBsb2dvdXQgPSAoKSA9PiB7XG4gICAgaWYgKHVzZXJJZGVudGl0eSkge1xuICAgICAgZmV0Y2goYCR7Q29uZmlnLmxjQWNjb3VudHNVUkx9L3YyL3Nlc3Npb25zYCwge1xuICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgICAgICBib2R5OiAne30nLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiBgJHt1c2VySWRlbnRpdHkudG9rZW5fdHlwZX0gJHt1c2VySWRlbnRpdHkuYWNjZXNzX3Rva2VufWAsXG4gICAgICAgIH0sXG4gICAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBzZXRVc2VySWRlbnRpdHkobnVsbClcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4geyB1c2VySWRlbnRpdHksIGF1dGhvcml6ZSwgbG9nb3V0LCBsb2FkaW5nIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlVXNlcklkZW50aXR5XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJBY2NvdW50c1NESyIsIkNvbmZpZyIsImFjY291bnRzU0RLIiwiY2xpZW50X2lkIiwibGNDbGllbnRJZCIsInNlcnZlcl91cmwiLCJsY0FjY291bnRzVVJMIiwidXNlVXNlcklkZW50aXR5IiwidXNlcklkZW50aXR5Iiwic2V0VXNlcklkZW50aXR5IiwibG9hZGluZyIsInNldExvYWRpbmciLCJhc1BhdGgiLCJpZGVudGl0eSIsImFjY291bnRfaWQiLCJhY2Nlc3NfdG9rZW4iLCJleHBpcmVzX2luIiwib3JnYW5pemF0aW9uX2lkIiwic2NvcGUiLCJ0b2tlbl90eXBlIiwicmVwbGFjZSIsInNwbGl0IiwiZm9yRWFjaCIsIml0ZW0iLCJrZXkiLCJ2YWx1ZSIsInVybElkZW50aXR5IiwicGFyc2VJbnQiLCJhdXRob3JpemUiLCJyZWRpcmVjdCIsIlRPS0VOX0tFWSIsImVycm9yIiwiY29uc29sZSIsImxvZ291dCIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./hooks/useUserIdentity.ts\n");

/***/ })

});