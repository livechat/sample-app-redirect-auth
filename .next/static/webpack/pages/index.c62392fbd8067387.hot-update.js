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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _livechat_accounts_sdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @livechat/accounts-sdk */ \"./node_modules/@livechat/accounts-sdk/dist/index.esm.js\");\n/* harmony import */ var lib_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lib/config */ \"./lib/config.ts\");\n\n\n\n\nvar accountsSDK = new _livechat_accounts_sdk__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n    client_id: lib_config__WEBPACK_IMPORTED_MODULE_3__.Config.lcClientId,\n    server_url: lib_config__WEBPACK_IMPORTED_MODULE_3__.Config.lcAccountsURL\n});\nfunction useUserIdentity() {\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null), userIdentity = ref[0], setUserIdentity = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false), loading = ref1[0], setLoading = ref1[1];\n    var asPath = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)().asPath;\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function() {\n        var urlIdentity = {\n            account_id: '',\n            access_token: '',\n            expires_in: 0,\n            organization_id: '',\n            scope: '',\n            token_type: 'Bearer'\n        };\n        if (asPath !== '' && asPath !== '/') {\n            asPath.replace('/#', '').split('&').forEach(function(item) {\n                var key = item.split('=')[0];\n                var value = item.split('=')[1];\n                console.log(key, value);\n                switch(key){\n                    case 'access_token':\n                        urlIdentity.access_token = value;\n                        break;\n                    case 'expires_in':\n                        urlIdentity.expires_in = value;\n                        break;\n                    case 'scope':\n                        break;\n                    case 'state':\n                        break;\n                    case 'token_type':\n                        break;\n                    default:\n                        break;\n                }\n            });\n        }\n    }, [\n        asPath\n    ]);\n    var authorize = function() {\n        try {\n            setLoading(true);\n            accountsSDK.redirect().authorize();\n            var TOKEN_KEY = 'access_token';\n            setLoading(false);\n        } catch (error) {\n            console.error(error);\n        }\n    };\n    var logout = function() {\n        if (userIdentity) {\n            fetch(\"\".concat(lib_config__WEBPACK_IMPORTED_MODULE_3__.Config.lcAccountsURL, \"/v2/sessions\"), {\n                method: 'DELETE',\n                body: '{}',\n                headers: {\n                    'Content-Type': 'application/json',\n                    Authorization: \"\".concat(userIdentity.token_type, \" \").concat(userIdentity.access_token)\n                }\n            }).then(function(response) {\n                setUserIdentity(null);\n                return response.json();\n            });\n        }\n    };\n    return {\n        userIdentity: userIdentity,\n        authorize: authorize,\n        logout: logout,\n        loading: loading\n    };\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (useUserIdentity);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUUsQ0FBSTtnQkFDVkMsT0FBTyxFQUFFLENBQUM7b0JBQ1IsQ0FBYyxlQUFFLENBQWtCO29CQUNsQ0MsYUFBYSxFQUFHLEdBQTZCN0IsTUFBeUIsQ0FBcERBLFlBQVksQ0FBQ1csVUFBVSxFQUFDLENBQUMsSUFBNEIsT0FBMUJYLFlBQVksQ0FBQ08sWUFBWTtnQkFDeEUsQ0FBQztZQUNILENBQUMsRUFBRXVCLElBQUksQ0FBQyxRQUFRLENBQVBDLFFBQVEsRUFBSyxDQUFDO2dCQUNyQjlCLGVBQWUsQ0FBQyxJQUFJO2dCQUNwQixNQUFNLENBQUM4QixRQUFRLENBQUNDLElBQUk7WUFDdEIsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBRUQsTUFBTSxDQUFDLENBQUM7UUFBQ2hDLFlBQVksRUFBWkEsWUFBWTtRQUFFb0IsU0FBUyxFQUFUQSxTQUFTO1FBQUVJLE1BQU0sRUFBTkEsTUFBTTtRQUFFdEIsT0FBTyxFQUFQQSxPQUFPO0lBQUMsQ0FBQztBQUNyRCxDQUFDO0FBRUQsK0RBQWVILGVBQWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvdXNlVXNlcklkZW50aXR5LnRzPzRkYTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgQWNjb3VudHNTREsgZnJvbSAnQGxpdmVjaGF0L2FjY291bnRzLXNkaydcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJ2xpYi9jb25maWcnXG5cbnR5cGUgVXNlcklkZW50aXR5ID0ge1xuICBhY2NvdW50X2lkOiBzdHJpbmdcbiAgYWNjZXNzX3Rva2VuOiBzdHJpbmdcbiAgZXhwaXJlc19pbjogbnVtYmVyXG4gIG9yZ2FuaXphdGlvbl9pZDogc3RyaW5nXG4gIHNjb3BlOiBzdHJpbmdcbiAgdG9rZW5fdHlwZTogJ0JlYXJlcidcbn1cblxuY29uc3QgYWNjb3VudHNTREsgPSBuZXcgQWNjb3VudHNTREsoe1xuICBjbGllbnRfaWQ6IENvbmZpZy5sY0NsaWVudElkLFxuICBzZXJ2ZXJfdXJsOiBDb25maWcubGNBY2NvdW50c1VSTCxcbn0pXG5cbmZ1bmN0aW9uIHVzZVVzZXJJZGVudGl0eSgpIHtcbiAgY29uc3QgW3VzZXJJZGVudGl0eSwgc2V0VXNlcklkZW50aXR5XSA9IHVzZVN0YXRlPFVzZXJJZGVudGl0eSB8IG51bGw+KG51bGwpXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKVxuICBjb25zdCB7IGFzUGF0aCB9ID0gdXNlUm91dGVyKClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCB1cmxJZGVudGl0eTogVXNlcklkZW50aXR5ID0ge1xuICAgICAgYWNjb3VudF9pZDogJycsXG4gICAgICBhY2Nlc3NfdG9rZW46ICcnLFxuICAgICAgZXhwaXJlc19pbjogMCxcbiAgICAgIG9yZ2FuaXphdGlvbl9pZDogJycsXG4gICAgICBzY29wZTogJycsXG4gICAgICB0b2tlbl90eXBlOiAnQmVhcmVyJyxcbiAgICB9XG5cbiAgICBpZiAoYXNQYXRoICE9PSAnJyAmJiBhc1BhdGggIT09ICcvJykge1xuICAgICAgYXNQYXRoXG4gICAgICAgIC5yZXBsYWNlKCcvIycsICcnKVxuICAgICAgICAuc3BsaXQoJyYnKVxuICAgICAgICAuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGtleSA9IGl0ZW0uc3BsaXQoJz0nKVswXVxuICAgICAgICAgIGNvbnN0IHZhbHVlID0gaXRlbS5zcGxpdCgnPScpWzFdXG5cbiAgICAgICAgICBjb25zb2xlLmxvZyhrZXksIHZhbHVlKVxuXG4gICAgICAgICAgc3dpdGNoIChrZXkpIHtcbiAgICAgICAgICAgIGNhc2UgJ2FjY2Vzc190b2tlbic6XG4gICAgICAgICAgICAgIHVybElkZW50aXR5LmFjY2Vzc190b2tlbiA9IHZhbHVlXG4gICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlICdleHBpcmVzX2luJzpcbiAgICAgICAgICAgICAgdXJsSWRlbnRpdHkuZXhwaXJlc19pbiA9IHZhbHVlXG4gICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlICdzY29wZSc6XG4gICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlICdzdGF0ZSc6XG4gICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlICd0b2tlbl90eXBlJzpcbiAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbiAgfSwgW2FzUGF0aF0pXG5cbiAgY29uc3QgYXV0aG9yaXplID0gKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBzZXRMb2FkaW5nKHRydWUpXG4gICAgICBhY2NvdW50c1NESy5yZWRpcmVjdCgpLmF1dGhvcml6ZSgpXG5cbiAgICAgIGNvbnN0IFRPS0VOX0tFWSA9ICdhY2Nlc3NfdG9rZW4nXG5cbiAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgbG9nb3V0ID0gKCkgPT4ge1xuICAgIGlmICh1c2VySWRlbnRpdHkpIHtcbiAgICAgIGZldGNoKGAke0NvbmZpZy5sY0FjY291bnRzVVJMfS92Mi9zZXNzaW9uc2AsIHtcbiAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcbiAgICAgICAgYm9keTogJ3t9JyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogYCR7dXNlcklkZW50aXR5LnRva2VuX3R5cGV9ICR7dXNlcklkZW50aXR5LmFjY2Vzc190b2tlbn1gLFxuICAgICAgICB9LFxuICAgICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgc2V0VXNlcklkZW50aXR5KG51bGwpXG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKClcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHsgdXNlcklkZW50aXR5LCBhdXRob3JpemUsIGxvZ291dCwgbG9hZGluZyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVVzZXJJZGVudGl0eVxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiQWNjb3VudHNTREsiLCJDb25maWciLCJhY2NvdW50c1NESyIsImNsaWVudF9pZCIsImxjQ2xpZW50SWQiLCJzZXJ2ZXJfdXJsIiwibGNBY2NvdW50c1VSTCIsInVzZVVzZXJJZGVudGl0eSIsInVzZXJJZGVudGl0eSIsInNldFVzZXJJZGVudGl0eSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiYXNQYXRoIiwidXJsSWRlbnRpdHkiLCJhY2NvdW50X2lkIiwiYWNjZXNzX3Rva2VuIiwiZXhwaXJlc19pbiIsIm9yZ2FuaXphdGlvbl9pZCIsInNjb3BlIiwidG9rZW5fdHlwZSIsInJlcGxhY2UiLCJzcGxpdCIsImZvckVhY2giLCJpdGVtIiwia2V5IiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwiYXV0aG9yaXplIiwicmVkaXJlY3QiLCJUT0tFTl9LRVkiLCJlcnJvciIsImxvZ291dCIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./hooks/useUserIdentity.ts\n");

/***/ })

});