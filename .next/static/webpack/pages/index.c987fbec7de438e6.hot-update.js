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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _livechat_accounts_sdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @livechat/accounts-sdk */ \"./node_modules/@livechat/accounts-sdk/dist/index.esm.js\");\n/* harmony import */ var lib_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lib/config */ \"./lib/config.ts\");\n\n\n\n\nvar accountsSDK = new _livechat_accounts_sdk__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n    client_id: lib_config__WEBPACK_IMPORTED_MODULE_3__.Config.lcClientId,\n    server_url: lib_config__WEBPACK_IMPORTED_MODULE_3__.Config.lcAccountsURL\n});\nfunction useUserIdentity() {\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null), userIdentity = ref[0], setUserIdentity = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false), loading = ref1[0], setLoading = ref1[1];\n    var ref2 = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)(), asPath = ref2.asPath, replace = ref2.replace;\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function() {\n        var identity = {\n            account_id: '',\n            access_token: '',\n            expires_in: 0,\n            organization_id: '',\n            scope: '',\n            token_type: 'Bearer'\n        };\n        if (asPath !== '' && asPath !== '/') {\n            asPath.replace('/#', '').split('&').forEach(function(item) {\n                var key = item.split('=')[0];\n                var value = item.split('=')[1];\n                switch(key){\n                    case 'access_token':\n                        identity.access_token = value;\n                        break;\n                    case 'expires_in':\n                        identity.expires_in = parseInt(value);\n                        break;\n                    case 'scope':\n                        identity.scope = value;\n                        break;\n                    default:\n                        break;\n                }\n            });\n            setUserIdentity(identity);\n        }\n    }, [\n        asPath\n    ]);\n    var authorize = function() {\n        try {\n            setLoading(true);\n            accountsSDK.redirect().authorize();\n            setLoading(false);\n        } catch (error) {\n            console.error(error);\n        }\n    };\n    var logout = function() {\n        if (userIdentity) {\n            fetch(\"\".concat(lib_config__WEBPACK_IMPORTED_MODULE_3__.Config.lcAccountsURL, \"/v2/sessions\"), {\n                method: 'DELETE',\n                body: '{}',\n                headers: {\n                    'Content-Type': 'application/json',\n                    Authorization: \"\".concat(userIdentity.token_type, \" \").concat(userIdentity.access_token)\n                }\n            }).then(function(response) {\n                setUserIdentity(null);\n                replace('/', undefined, {\n                    shallow: true\n                });\n                return response.json();\n            });\n        }\n    };\n    return {\n        userIdentity: userIdentity,\n        authorize: authorize,\n        logout: logout,\n        loading: loading\n    };\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (useUserIdentity);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxPQUFPLEVBQUUsQ0FBQztvQkFDUixDQUFjLGVBQUUsQ0FBa0I7b0JBQ2xDQyxhQUFhLEVBQUcsR0FBNkI1QixNQUF5QixDQUFwREEsWUFBWSxDQUFDWSxVQUFVLEVBQUMsQ0FBQyxJQUE0QixPQUExQlosWUFBWSxDQUFDUSxZQUFZO2dCQUN4RSxDQUFDO1lBQ0gsQ0FBQyxFQUFFcUIsSUFBSSxDQUFDLFFBQVEsQ0FBUEMsUUFBUSxFQUFLLENBQUM7Z0JBQ3JCN0IsZUFBZSxDQUFDLElBQUk7Z0JBQ3BCSSxPQUFPLENBQUMsQ0FBRyxJQUFFMEIsU0FBUyxFQUFFLENBQUM7b0JBQUNDLE9BQU8sRUFBRSxJQUFJO2dCQUFDLENBQUM7Z0JBQ3pDLE1BQU0sQ0FBQ0YsUUFBUSxDQUFDRyxJQUFJO1lBQ3RCLENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQUVELE1BQU0sQ0FBQyxDQUFDO1FBQUNqQyxZQUFZLEVBQVpBLFlBQVk7UUFBRW1CLFNBQVMsRUFBVEEsU0FBUztRQUFFSSxNQUFNLEVBQU5BLE1BQU07UUFBRXJCLE9BQU8sRUFBUEEsT0FBTztJQUFDLENBQUM7QUFDckQsQ0FBQztBQUVELCtEQUFlSCxlQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2hvb2tzL3VzZVVzZXJJZGVudGl0eS50cz80ZGEzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IEFjY291bnRzU0RLIGZyb20gJ0BsaXZlY2hhdC9hY2NvdW50cy1zZGsnXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICdsaWIvY29uZmlnJ1xuXG50eXBlIFVzZXJJZGVudGl0eSA9IHtcbiAgYWNjb3VudF9pZDogc3RyaW5nXG4gIGFjY2Vzc190b2tlbjogc3RyaW5nXG4gIGV4cGlyZXNfaW46IG51bWJlclxuICBvcmdhbml6YXRpb25faWQ6IHN0cmluZ1xuICBzY29wZTogc3RyaW5nXG4gIHRva2VuX3R5cGU6ICdCZWFyZXInXG59XG5cbmNvbnN0IGFjY291bnRzU0RLID0gbmV3IEFjY291bnRzU0RLKHtcbiAgY2xpZW50X2lkOiBDb25maWcubGNDbGllbnRJZCxcbiAgc2VydmVyX3VybDogQ29uZmlnLmxjQWNjb3VudHNVUkwsXG59KVxuXG5mdW5jdGlvbiB1c2VVc2VySWRlbnRpdHkoKSB7XG4gIGNvbnN0IFt1c2VySWRlbnRpdHksIHNldFVzZXJJZGVudGl0eV0gPSB1c2VTdGF0ZTxVc2VySWRlbnRpdHkgfCBudWxsPihudWxsKVxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSlcbiAgY29uc3QgeyBhc1BhdGgsIHJlcGxhY2UgfSA9IHVzZVJvdXRlcigpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgaWRlbnRpdHk6IFVzZXJJZGVudGl0eSA9IHtcbiAgICAgIGFjY291bnRfaWQ6ICcnLFxuICAgICAgYWNjZXNzX3Rva2VuOiAnJyxcbiAgICAgIGV4cGlyZXNfaW46IDAsXG4gICAgICBvcmdhbml6YXRpb25faWQ6ICcnLFxuICAgICAgc2NvcGU6ICcnLFxuICAgICAgdG9rZW5fdHlwZTogJ0JlYXJlcicsXG4gICAgfVxuXG4gICAgaWYgKGFzUGF0aCAhPT0gJycgJiYgYXNQYXRoICE9PSAnLycpIHtcbiAgICAgIGFzUGF0aFxuICAgICAgICAucmVwbGFjZSgnLyMnLCAnJylcbiAgICAgICAgLnNwbGl0KCcmJylcbiAgICAgICAgLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICBjb25zdCBrZXkgPSBpdGVtLnNwbGl0KCc9JylbMF1cbiAgICAgICAgICBjb25zdCB2YWx1ZSA9IGl0ZW0uc3BsaXQoJz0nKVsxXVxuXG4gICAgICAgICAgc3dpdGNoIChrZXkpIHtcbiAgICAgICAgICAgIGNhc2UgJ2FjY2Vzc190b2tlbic6XG4gICAgICAgICAgICAgIGlkZW50aXR5LmFjY2Vzc190b2tlbiA9IHZhbHVlXG4gICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlICdleHBpcmVzX2luJzpcbiAgICAgICAgICAgICAgaWRlbnRpdHkuZXhwaXJlc19pbiA9IHBhcnNlSW50KHZhbHVlKVxuICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSAnc2NvcGUnOlxuICAgICAgICAgICAgICBpZGVudGl0eS5zY29wZSA9IHZhbHVlXG4gICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgc2V0VXNlcklkZW50aXR5KGlkZW50aXR5KVxuICAgIH1cbiAgfSwgW2FzUGF0aF0pXG5cbiAgY29uc3QgYXV0aG9yaXplID0gKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBzZXRMb2FkaW5nKHRydWUpXG4gICAgICBhY2NvdW50c1NESy5yZWRpcmVjdCgpLmF1dGhvcml6ZSgpXG5cbiAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgbG9nb3V0ID0gKCkgPT4ge1xuICAgIGlmICh1c2VySWRlbnRpdHkpIHtcbiAgICAgIGZldGNoKGAke0NvbmZpZy5sY0FjY291bnRzVVJMfS92Mi9zZXNzaW9uc2AsIHtcbiAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcbiAgICAgICAgYm9keTogJ3t9JyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogYCR7dXNlcklkZW50aXR5LnRva2VuX3R5cGV9ICR7dXNlcklkZW50aXR5LmFjY2Vzc190b2tlbn1gLFxuICAgICAgICB9LFxuICAgICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgc2V0VXNlcklkZW50aXR5KG51bGwpXG4gICAgICAgIHJlcGxhY2UoJy8nLCB1bmRlZmluZWQsIHsgc2hhbGxvdzogdHJ1ZSB9KVxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7IHVzZXJJZGVudGl0eSwgYXV0aG9yaXplLCBsb2dvdXQsIGxvYWRpbmcgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VVc2VySWRlbnRpdHlcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsIkFjY291bnRzU0RLIiwiQ29uZmlnIiwiYWNjb3VudHNTREsiLCJjbGllbnRfaWQiLCJsY0NsaWVudElkIiwic2VydmVyX3VybCIsImxjQWNjb3VudHNVUkwiLCJ1c2VVc2VySWRlbnRpdHkiLCJ1c2VySWRlbnRpdHkiLCJzZXRVc2VySWRlbnRpdHkiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImFzUGF0aCIsInJlcGxhY2UiLCJpZGVudGl0eSIsImFjY291bnRfaWQiLCJhY2Nlc3NfdG9rZW4iLCJleHBpcmVzX2luIiwib3JnYW5pemF0aW9uX2lkIiwic2NvcGUiLCJ0b2tlbl90eXBlIiwic3BsaXQiLCJmb3JFYWNoIiwiaXRlbSIsImtleSIsInZhbHVlIiwicGFyc2VJbnQiLCJhdXRob3JpemUiLCJyZWRpcmVjdCIsImVycm9yIiwiY29uc29sZSIsImxvZ291dCIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwidGhlbiIsInJlc3BvbnNlIiwidW5kZWZpbmVkIiwic2hhbGxvdyIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./hooks/useUserIdentity.ts\n");

/***/ })

});