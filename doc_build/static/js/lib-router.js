(self['webpackChunkrspress_doc_template'] = self['webpackChunkrspress_doc_template'] || []).push([["lib-router"], {
"./node_modules/.pnpm/registry.npmmirror.com+react-router-dom@6.16.0_react-dom@18.2.0_react@18.2.0/node_modules/react-router-dom/dist/index.js": function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
'use strict';
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  'AbortedDeferredError': function() { return react_router__WEBPACK_IMPORTED_MODULE_4_.AbortedDeferredError; },
  'Await': function() { return react_router__WEBPACK_IMPORTED_MODULE_4_.Await; },
  'MemoryRouter': function() { return react_router__WEBPACK_IMPORTED_MODULE_4_.MemoryRouter; },
  'Navigate': function() { return react_router__WEBPACK_IMPORTED_MODULE_4_.Navigate; },
  'NavigationType': function() { return react_router__WEBPACK_IMPORTED_MODULE_4_.NavigationType; },
  'Outlet': function() { return react_router__WEBPACK_IMPORTED_MODULE_4_.Outlet; },
  'Route': function() { return react_router__WEBPACK_IMPORTED_MODULE_4_.Route; },
  'Router': function() { return react_router__WEBPACK_IMPORTED_MODULE_4_.Router; },
  'RouterProvider': function() { return react_router__WEBPACK_IMPORTED_MODULE_4_.RouterProvider; },
  'Routes': function() { return react_router__WEBPACK_IMPORTED_MODULE_4_.Routes; },
  'UNSAFE_DataRouterContext': function() { return react_router__WEBPACK_IMPORTED_MODULE_4_.UNSAFE_DataRouterContext; },
  'UNSAFE_DataRouterStateContext': function() { return react_router__WEBPACK_IMPORTED_MODULE_4_.UNSAFE_DataRouterStateContext; },
  'UNSAFE_LocationContext': function() { return react_router__WEBPACK_IMPORTED_MODULE_4_.UNSAFE_LocationContext; },
  'UNSAFE_NavigationContext': function() { return react_router__WEBPACK_IMPORTED_MODULE_4_.UNSAFE_NavigationContext; },
  'UNSAFE_RouteContext': function() { return react_router__WEBPACK_IMPORTED_MODULE_4_.UNSAFE_RouteContext; },
  'UNSAFE_useRouteId': function() { return react_router__WEBPACK_IMPORTED_MODULE_4_.UNSAFE_useRouteId; },
  'createMemoryRouter': function() { return react_router__WEBPACK_IMPORTED_MODULE_4_.createMemoryRouter; },
  'createPath': function() { return react_router__WEBPACK_IMPORTED_MODULE_4_.createPath; },
  'createRoutesFromChildren': function() { return react_router__WEBPACK_IMPORTED_MODULE_4_.createRoutesFromChildren; },
  'createRoutesFromElements': function() { return react_router__WEBPACK_IMPORTED_MODULE_4_.createRoutesFromElements; },
  'defer': function() { return react_router__WEBPACK_IMPORTED_MODULE_4_.defer; },
  'generatePath': function() { return react_router__WEBPACK_IMPORTED_MODULE_4_.generatePath; },
  'isRouteErrorResponse': function() { return react_router__WEBPACK_IMPORTED_MODULE_4_.isRouteErrorResponse; },
  'json': function() { return react_router__WEBPACK_IMPORTED_MODULE_4_.json; },
  'matchPath': function() { return react_router__WEBPACK_IMPORTED_MODULE_4_.matchPath; },
  'matchRoutes': function() { return react_router__WEBPACK_IMPORTED_MODULE_4_.matchRoutes; },
  'parsePath': function() { return react_router__WEBPACK_IMPORTED_MODULE_4_.parsePath; },
  'redirect': function() { return react_router__WEBPACK_IMPORTED_MODULE_4_.redirect; },
  'redirectDocument': function() { return react_router__WEBPACK_IMPORTED_MODULE_4_.redirectDocument; },
  'renderMatches': function() { return react_router__WEBPACK_IMPORTED_MODULE_4_.renderMatches; },
  'resolvePath': function() { return react_router__WEBPACK_IMPORTED_MODULE_4_.resolvePath; },
  'unstable_useBlocker': function() { return react_router__WEBPACK_IMPORTED_MODULE_4_.unstable_useBlocker; },
  'useActionData': function() { return react_router__WEBPACK_IMPORTED_MODULE_4_.useActionData; },
  'useAsyncError': function() { return react_router__WEBPACK_IMPORTED_MODULE_4_.useAsyncError; },
  'useAsyncValue': function() { return react_router__WEBPACK_IMPORTED_MODULE_4_.useAsyncValue; },
  'useHref': function() { return react_router__WEBPACK_IMPORTED_MODULE_4_.useHref; },
  'useInRouterContext': function() { return react_router__WEBPACK_IMPORTED_MODULE_4_.useInRouterContext; },
  'useLoaderData': function() { return react_router__WEBPACK_IMPORTED_MODULE_4_.useLoaderData; },
  'useLocation': function() { return react_router__WEBPACK_IMPORTED_MODULE_4_.useLocation; },
  'useMatch': function() { return react_router__WEBPACK_IMPORTED_MODULE_4_.useMatch; },
  'useMatches': function() { return react_router__WEBPACK_IMPORTED_MODULE_4_.useMatches; },
  'useNavigate': function() { return react_router__WEBPACK_IMPORTED_MODULE_4_.useNavigate; },
  'useNavigation': function() { return react_router__WEBPACK_IMPORTED_MODULE_4_.useNavigation; },
  'useNavigationType': function() { return react_router__WEBPACK_IMPORTED_MODULE_4_.useNavigationType; },
  'useOutlet': function() { return react_router__WEBPACK_IMPORTED_MODULE_4_.useOutlet; },
  'useOutletContext': function() { return react_router__WEBPACK_IMPORTED_MODULE_4_.useOutletContext; },
  'useParams': function() { return react_router__WEBPACK_IMPORTED_MODULE_4_.useParams; },
  'useResolvedPath': function() { return react_router__WEBPACK_IMPORTED_MODULE_4_.useResolvedPath; },
  'useRevalidator': function() { return react_router__WEBPACK_IMPORTED_MODULE_4_.useRevalidator; },
  'useRouteError': function() { return react_router__WEBPACK_IMPORTED_MODULE_4_.useRouteError; },
  'useRouteLoaderData': function() { return react_router__WEBPACK_IMPORTED_MODULE_4_.useRouteLoaderData; },
  'useRoutes': function() { return react_router__WEBPACK_IMPORTED_MODULE_4_.useRoutes; },
  'BrowserRouter': function() { return BrowserRouter; },
  'Form': function() { return Form; },
  'HashRouter': function() { return HashRouter; },
  'Link': function() { return Link; },
  'NavLink': function() { return NavLink; },
  'ScrollRestoration': function() { return ScrollRestoration; },
  'UNSAFE_useScrollRestoration': function() { return useScrollRestoration; },
  'createBrowserRouter': function() { return createBrowserRouter; },
  'createHashRouter': function() { return createHashRouter; },
  'createSearchParams': function() { return createSearchParams; },
  'unstable_HistoryRouter': function() { return HistoryRouter; },
  'unstable_usePrompt': function() { return usePrompt; },
  'useBeforeUnload': function() { return useBeforeUnload; },
  'useFetcher': function() { return useFetcher; },
  'useFetchers': function() { return useFetchers; },
  'useFormAction': function() { return useFormAction; },
  'useLinkClickHandler': function() { return useLinkClickHandler; },
  'useSearchParams': function() { return useSearchParams; },
  'useSubmit': function() { return useSubmit; }
});
/* harmony import */var _swc_helpers_instanceof__WEBPACK_IMPORTED_MODULE_0_ = __webpack_require__(/* @swc/helpers/_/_instanceof */"./node_modules/.pnpm/registry.npmmirror.com+@swc+helpers@0.5.1/node_modules/@swc/helpers/esm/_instanceof.js");
/* harmony import */var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_1_ = __webpack_require__(/* @swc/helpers/_/_sliced_to_array */"./node_modules/.pnpm/registry.npmmirror.com+@swc+helpers@0.5.1/node_modules/@swc/helpers/esm/_sliced_to_array.js");
/* harmony import */var _swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_2_ = __webpack_require__(/* @swc/helpers/_/_to_consumable_array */"./node_modules/.pnpm/registry.npmmirror.com+@swc+helpers@0.5.1/node_modules/@swc/helpers/esm/_to_consumable_array.js");
/* harmony import */var react__WEBPACK_IMPORTED_MODULE_3_ = __webpack_require__(/* react */"./node_modules/.pnpm/registry.npmmirror.com+react@18.2.0/node_modules/react/index.js");
/* harmony import */var react__WEBPACK_IMPORTED_MODULE_3__default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3_);
/* harmony import */var react_router__WEBPACK_IMPORTED_MODULE_4_ = __webpack_require__(/* react-router */"./node_modules/.pnpm/registry.npmmirror.com+react-router@6.16.0_react@18.2.0/node_modules/react-router/dist/index.js");
/* harmony import */var _remix_run_router__WEBPACK_IMPORTED_MODULE_5_ = __webpack_require__(/* @remix-run/router */"./node_modules/.pnpm/registry.npmmirror.com+@remix-run+router@1.9.0/node_modules/@remix-run/router/dist/router.js");
/**
 * React Router DOM v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ 






function _extends() {
    _extends = Object.assign ? Object.assign.bind() : function _extends(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
var defaultMethod = "get";
var defaultEncType = "application/x-www-form-urlencoded";
function isHtmlElement(object) {
    return object != null && typeof object.tagName === "string";
}
function isButtonElement(object) {
    return isHtmlElement(object) && object.tagName.toLowerCase() === "button";
}
function isFormElement(object) {
    return isHtmlElement(object) && object.tagName.toLowerCase() === "form";
}
function isInputElement(object) {
    return isHtmlElement(object) && object.tagName.toLowerCase() === "input";
}
function isModifiedEvent(event) {
    return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}
function shouldProcessLinkClick(event, target) {
    return event.button === 0 && // Ignore everything but left clicks
    (!target || target === "_self") && // Let browser handle "target=_blank" etc.
    !isModifiedEvent(event) // Ignore clicks with modifier keys
    ;
}
/**
 * Creates a URLSearchParams object using the given initializer.
 *
 * This is identical to `new URLSearchParams(init)` except it also
 * supports arrays as values in the object form of the initializer
 * instead of just strings. This is convenient when you need multiple
 * values for a given key, but don't want to use an array initializer.
 *
 * For example, instead of:
 *
 *   let searchParams = new URLSearchParams([
 *     ['sort', 'name'],
 *     ['sort', 'price']
 *   ]);
 *
 * you can do:
 *
 *   let searchParams = createSearchParams({
 *     sort: ['name', 'price']
 *   });
 */ function createSearchParams(init) {
    if (init === void 0) init = "";
    return new URLSearchParams(typeof init === "string" || Array.isArray(init) || (0, _swc_helpers_instanceof__WEBPACK_IMPORTED_MODULE_0_._)(init, URLSearchParams) ? init : Object.keys(init).reduce(function(memo, key) {
        var value = init[key];
        return memo.concat(Array.isArray(value) ? value.map(function(v) {
            return [
                key,
                v
            ];
        }) : [
            [
                key,
                value
            ]
        ]);
    }, []));
}
function getSearchParamsForLocation(locationSearch, defaultSearchParams) {
    var searchParams = createSearchParams(locationSearch);
    if (defaultSearchParams) // Use `defaultSearchParams.forEach(...)` here instead of iterating of
    // `defaultSearchParams.keys()` to work-around a bug in Firefox related to
    // web extensions. Relevant Bugzilla tickets:
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1414602
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1023984
    defaultSearchParams.forEach(function(_, key) {
        if (!searchParams.has(key)) defaultSearchParams.getAll(key).forEach(function(value) {
            searchParams.append(key, value);
        });
    });
    return searchParams;
}
// One-time check for submitter support
var _formDataSupportsSubmitter = null;
function isFormDataSubmitterSupported() {
    if (_formDataSupportsSubmitter === null) try {
        new FormData(document.createElement("form"), // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0);
        _formDataSupportsSubmitter = false;
    } catch (e) {
        _formDataSupportsSubmitter = true;
    }
    return _formDataSupportsSubmitter;
}
var supportedFormEncTypes = new Set([
    "application/x-www-form-urlencoded",
    "multipart/form-data",
    "text/plain"
]);
function getFormEncType(encType) {
    if (encType != null && !supportedFormEncTypes.has(encType)) {
        (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_5_.UNSAFE_warning)(false, "\"" + encType + "\" is not a valid `encType` for `<Form>`/`<fetcher.Form>` " + ("and will default to \"" + defaultEncType + "\""));
        return null;
    }
    return encType;
}
function getFormSubmissionInfo(target, basename) {
    var method;
    var action;
    var encType;
    var formData;
    var body;
    if (isFormElement(target)) {
        // When grabbing the action from the element, it will have had the basename
        // prefixed to ensure non-JS scenarios work, so strip it since we'll
        // re-prefix in the router
        var attr = target.getAttribute("action");
        action = attr ? (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_5_.stripBasename)(attr, basename) : null;
        method = target.getAttribute("method") || defaultMethod;
        encType = getFormEncType(target.getAttribute("enctype")) || defaultEncType;
        formData = new FormData(target);
    } else if (isButtonElement(target) || isInputElement(target) && (target.type === "submit" || target.type === "image")) {
        var form = target.form;
        if (form == null) throw new Error("Cannot submit a <button> or <input type=\"submit\"> without a <form>");
        // <button>/<input type="submit"> may override attributes of <form>
        // When grabbing the action from the element, it will have had the basename
        // prefixed to ensure non-JS scenarios work, so strip it since we'll
        // re-prefix in the router
        var attr1 = target.getAttribute("formaction") || form.getAttribute("action");
        action = attr1 ? (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_5_.stripBasename)(attr1, basename) : null;
        method = target.getAttribute("formmethod") || form.getAttribute("method") || defaultMethod;
        encType = getFormEncType(target.getAttribute("formenctype")) || getFormEncType(form.getAttribute("enctype")) || defaultEncType;
        // Build a FormData object populated from a form and submitter
        formData = new FormData(form, target);
        // If this browser doesn't support the `FormData(el, submitter)` format,
        // then tack on the submitter value at the end.  This is a lightweight
        // solution that is not 100% spec compliant.  For complete support in older
        // browsers, consider using the `formdata-submitter-polyfill` package
        if (!isFormDataSubmitterSupported()) {
            var name = target.name, type = target.type, value = target.value;
            if (type === "image") {
                var prefix = name ? name + "." : "";
                formData.append(prefix + "x", "0");
                formData.append(prefix + "y", "0");
            } else if (name) formData.append(name, value);
        }
    } else if (isHtmlElement(target)) throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
    else {
        method = defaultMethod;
        action = null;
        encType = defaultEncType;
        body = target;
    }
    // Send body for <Form encType="text/plain" so we encode it into text
    if (formData && encType === "text/plain") {
        body = formData;
        formData = undefined;
    }
    return {
        action: action,
        method: method.toLowerCase(),
        encType: encType,
        formData: formData,
        body: body
    };
}
var _excluded = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset"
], _excluded2 = [
    "aria-current",
    "caseSensitive",
    "className",
    "end",
    "style",
    "to",
    "children"
], _excluded3 = [
    "reloadDocument",
    "replace",
    "state",
    "method",
    "action",
    "onSubmit",
    "submit",
    "relative",
    "preventScrollReset"
];
function createBrowserRouter(routes, opts) {
    return (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_5_.createRouter)({
        basename: opts == null ? void 0 : opts.basename,
        future: _extends({}, opts == null ? void 0 : opts.future, {
            v7_prependBasename: true
        }),
        history: (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_5_.createBrowserHistory)({
            window: opts == null ? void 0 : opts.window
        }),
        hydrationData: (opts == null ? void 0 : opts.hydrationData) || parseHydrationData(),
        routes: routes,
        mapRouteProperties: react_router__WEBPACK_IMPORTED_MODULE_4_.UNSAFE_mapRouteProperties
    }).initialize();
}
function createHashRouter(routes, opts) {
    return (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_5_.createRouter)({
        basename: opts == null ? void 0 : opts.basename,
        future: _extends({}, opts == null ? void 0 : opts.future, {
            v7_prependBasename: true
        }),
        history: (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_5_.createHashHistory)({
            window: opts == null ? void 0 : opts.window
        }),
        hydrationData: (opts == null ? void 0 : opts.hydrationData) || parseHydrationData(),
        routes: routes,
        mapRouteProperties: react_router__WEBPACK_IMPORTED_MODULE_4_.UNSAFE_mapRouteProperties
    }).initialize();
}
function parseHydrationData() {
    var _window;
    var state = (_window = window) == null ? void 0 : _window.__staticRouterHydrationData;
    if (state && state.errors) state = _extends({}, state, {
        errors: deserializeErrors(state.errors)
    });
    return state;
}
function deserializeErrors(errors) {
    if (!errors) return null;
    var entries = Object.entries(errors);
    var serialized = {};
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = entries[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var _step_value = (0, _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_1_._)(_step.value, 2), key = _step_value[0], val = _step_value[1];
            // Hey you!  If you change this, please change the corresponding logic in
            // serializeErrors in react-router-dom/server.tsx :)
            if (val && val.__type === "RouteErrorResponse") serialized[key] = new _remix_run_router__WEBPACK_IMPORTED_MODULE_5_.UNSAFE_ErrorResponseImpl(val.status, val.statusText, val.data, val.internal === true);
            else if (val && val.__type === "Error") {
                // Attempt to reconstruct the right type of Error (i.e., ReferenceError)
                if (val.__subType) {
                    var ErrorConstructor = window[val.__subType];
                    if (typeof ErrorConstructor === "function") try {
                        // @ts-expect-error
                        var error = new ErrorConstructor(val.message);
                        // Wipe away the client-side stack trace.  Nothing to fill it in with
                        // because we don't serialize SSR stack traces for security reasons
                        error.stack = "";
                        serialized[key] = error;
                    } catch (e) {
                    // no-op - fall through and create a normal Error
                    }
                }
                if (serialized[key] == null) {
                    var error1 = new Error(val.message);
                    // Wipe away the client-side stack trace.  Nothing to fill it in with
                    // because we don't serialize SSR stack traces for security reasons
                    error1.stack = "";
                    serialized[key] = error1;
                }
            } else serialized[key] = val;
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) _iterator.return();
        } finally{
            if (_didIteratorError) throw _iteratorError;
        }
    }
    return serialized;
}
//#endregion
////////////////////////////////////////////////////////////////////////////////
//#region Components
////////////////////////////////////////////////////////////////////////////////
/**
  Webpack + React 17 fails to compile on any of the following because webpack
  complains that `startTransition` doesn't exist in `React`:
  * import { startTransition } from "react"
  * import * as React from from "react";
    "startTransition" in React ? React.startTransition(() => setState()) : setState()
  * import * as React from from "react";
    "startTransition" in React ? React["startTransition"](() => setState()) : setState()

  Moving it to a constant such as the following solves the Webpack/React 17 issue:
  * import * as React from from "react";
    const START_TRANSITION = "startTransition";
    START_TRANSITION in React ? React[START_TRANSITION](() => setState()) : setState()

  However, that introduces webpack/terser minification issues in production builds
  in React 18 where minification/obfuscation ends up removing the call of
  React.startTransition entirely from the first half of the ternary.  Grabbing
  this exported reference once up front resolves that issue.

  See https://github.com/remix-run/react-router/issues/10579
*/ var START_TRANSITION = "startTransition";
var startTransitionImpl = react__WEBPACK_IMPORTED_MODULE_3_[START_TRANSITION];
/**
 * A `<Router>` for use in web browsers. Provides the cleanest URLs.
 */ function BrowserRouter(_ref) {
    var basename = _ref.basename, children = _ref.children, future = _ref.future, _$window = _ref.window;
    var historyRef = react__WEBPACK_IMPORTED_MODULE_3_.useRef();
    if (historyRef.current == null) historyRef.current = (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_5_.createBrowserHistory)({
        window: _$window,
        v5Compat: true
    });
    var history = historyRef.current;
    var _React_useState = (0, _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_1_._)(react__WEBPACK_IMPORTED_MODULE_3_.useState({
        action: history.action,
        location: history.location
    }), 2), state = _React_useState[0], setStateImpl = _React_useState[1];
    var v7_startTransition = (future || {}).v7_startTransition;
    var setState = react__WEBPACK_IMPORTED_MODULE_3_.useCallback(function(newState) {
        v7_startTransition && startTransitionImpl ? startTransitionImpl(function() {
            return setStateImpl(newState);
        }) : setStateImpl(newState);
    }, [
        setStateImpl,
        v7_startTransition
    ]);
    react__WEBPACK_IMPORTED_MODULE_3_.useLayoutEffect(function() {
        return history.listen(setState);
    }, [
        history,
        setState
    ]);
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_3_.createElement(react_router__WEBPACK_IMPORTED_MODULE_4_.Router, {
        basename: basename,
        children: children,
        location: state.location,
        navigationType: state.action,
        navigator: history
    });
}
/**
 * A `<Router>` for use in web browsers. Stores the location in the hash
 * portion of the URL so it is not sent to the server.
 */ function HashRouter(_ref2) {
    var basename = _ref2.basename, children = _ref2.children, future = _ref2.future, _$window = _ref2.window;
    var historyRef = react__WEBPACK_IMPORTED_MODULE_3_.useRef();
    if (historyRef.current == null) historyRef.current = (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_5_.createHashHistory)({
        window: _$window,
        v5Compat: true
    });
    var history = historyRef.current;
    var _React_useState = (0, _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_1_._)(react__WEBPACK_IMPORTED_MODULE_3_.useState({
        action: history.action,
        location: history.location
    }), 2), state = _React_useState[0], setStateImpl = _React_useState[1];
    var v7_startTransition = (future || {}).v7_startTransition;
    var setState = react__WEBPACK_IMPORTED_MODULE_3_.useCallback(function(newState) {
        v7_startTransition && startTransitionImpl ? startTransitionImpl(function() {
            return setStateImpl(newState);
        }) : setStateImpl(newState);
    }, [
        setStateImpl,
        v7_startTransition
    ]);
    react__WEBPACK_IMPORTED_MODULE_3_.useLayoutEffect(function() {
        return history.listen(setState);
    }, [
        history,
        setState
    ]);
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_3_.createElement(react_router__WEBPACK_IMPORTED_MODULE_4_.Router, {
        basename: basename,
        children: children,
        location: state.location,
        navigationType: state.action,
        navigator: history
    });
}
/**
 * A `<Router>` that accepts a pre-instantiated history object. It's important
 * to note that using your own history object is highly discouraged and may add
 * two versions of the history library to your bundles unless you use the same
 * version of the history library that React Router uses internally.
 */ function HistoryRouter(_ref3) {
    var basename = _ref3.basename, children = _ref3.children, future = _ref3.future, history = _ref3.history;
    var _React_useState = (0, _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_1_._)(react__WEBPACK_IMPORTED_MODULE_3_.useState({
        action: history.action,
        location: history.location
    }), 2), state = _React_useState[0], setStateImpl = _React_useState[1];
    var v7_startTransition = (future || {}).v7_startTransition;
    var setState = react__WEBPACK_IMPORTED_MODULE_3_.useCallback(function(newState) {
        v7_startTransition && startTransitionImpl ? startTransitionImpl(function() {
            return setStateImpl(newState);
        }) : setStateImpl(newState);
    }, [
        setStateImpl,
        v7_startTransition
    ]);
    react__WEBPACK_IMPORTED_MODULE_3_.useLayoutEffect(function() {
        return history.listen(setState);
    }, [
        history,
        setState
    ]);
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_3_.createElement(react_router__WEBPACK_IMPORTED_MODULE_4_.Router, {
        basename: basename,
        children: children,
        location: state.location,
        navigationType: state.action,
        navigator: history
    });
}
HistoryRouter.displayName = "unstable_HistoryRouter";
var isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
var ABSOLUTE_URL_REGEX = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
/**
 * The public API for rendering a history-aware <a>.
 */ var Link = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_3_.forwardRef(function LinkWithRef(_ref4, ref) {
    var handleClick = function handleClick(event) {
        if (onClick) onClick(event);
        if (!event.defaultPrevented) internalOnClick(event);
    };
    var onClick = _ref4.onClick, relative = _ref4.relative, reloadDocument = _ref4.reloadDocument, replace = _ref4.replace, state = _ref4.state, target = _ref4.target, to = _ref4.to, preventScrollReset = _ref4.preventScrollReset, rest = _objectWithoutPropertiesLoose(_ref4, _excluded);
    var basename = react__WEBPACK_IMPORTED_MODULE_3_.useContext(react_router__WEBPACK_IMPORTED_MODULE_4_.UNSAFE_NavigationContext).basename;
    // Rendered into <a href> for absolute URLs
    var absoluteHref;
    var isExternal = false;
    if (typeof to === "string" && ABSOLUTE_URL_REGEX.test(to)) {
        // Render the absolute href server- and client-side
        absoluteHref = to;
        // Only check for external origins client-side
        if (isBrowser) try {
            var currentUrl = new URL(window.location.href);
            var targetUrl = to.startsWith("//") ? new URL(currentUrl.protocol + to) : new URL(to);
            var path = (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_5_.stripBasename)(targetUrl.pathname, basename);
            if (targetUrl.origin === currentUrl.origin && path != null) // Strip the protocol/origin/basename for same-origin absolute URLs
            to = path + targetUrl.search + targetUrl.hash;
            else isExternal = true;
        } catch (e) {
            (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_5_.UNSAFE_warning)(false, "<Link to=\"" + to + "\"> contains an invalid URL which will probably break " + "when clicked - please update to a valid URL path.");
        }
    }
    // Rendered into <a href> for relative URLs
    var href = (0, react_router__WEBPACK_IMPORTED_MODULE_4_.useHref)(to, {
        relative: relative
    });
    var internalOnClick = useLinkClickHandler(to, {
        replace: replace,
        state: state,
        target: target,
        preventScrollReset: preventScrollReset,
        relative: relative
    });
    return(/*#__PURE__*/ // eslint-disable-next-line jsx-a11y/anchor-has-content
    react__WEBPACK_IMPORTED_MODULE_3_.createElement("a", _extends({}, rest, {
        href: absoluteHref || href,
        onClick: isExternal || reloadDocument ? onClick : handleClick,
        ref: ref,
        target: target
    })));
});
Link.displayName = "Link";
/**
 * A <Link> wrapper that knows if it's "active" or not.
 */ var NavLink = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_3_.forwardRef(function NavLinkWithRef(_ref5, ref) {
    var tmp = _ref5["aria-current"], ariaCurrentProp = tmp === void 0 ? "page" : tmp, _ref5_caseSensitive = _ref5.caseSensitive, caseSensitive = _ref5_caseSensitive === void 0 ? false : _ref5_caseSensitive, tmp1 = _ref5.className, classNameProp = tmp1 === void 0 ? "" : tmp1, _ref5_end = _ref5.end, end = _ref5_end === void 0 ? false : _ref5_end, styleProp = _ref5.style, to = _ref5.to, children = _ref5.children, rest = _objectWithoutPropertiesLoose(_ref5, _excluded2);
    var path = (0, react_router__WEBPACK_IMPORTED_MODULE_4_.useResolvedPath)(to, {
        relative: rest.relative
    });
    var location = (0, react_router__WEBPACK_IMPORTED_MODULE_4_.useLocation)();
    var routerState = react__WEBPACK_IMPORTED_MODULE_3_.useContext(react_router__WEBPACK_IMPORTED_MODULE_4_.UNSAFE_DataRouterStateContext);
    var navigator = react__WEBPACK_IMPORTED_MODULE_3_.useContext(react_router__WEBPACK_IMPORTED_MODULE_4_.UNSAFE_NavigationContext).navigator;
    var toPathname = navigator.encodeLocation ? navigator.encodeLocation(path).pathname : path.pathname;
    var locationPathname = location.pathname;
    var nextLocationPathname = routerState && routerState.navigation && routerState.navigation.location ? routerState.navigation.location.pathname : null;
    if (!caseSensitive) {
        locationPathname = locationPathname.toLowerCase();
        nextLocationPathname = nextLocationPathname ? nextLocationPathname.toLowerCase() : null;
        toPathname = toPathname.toLowerCase();
    }
    var isActive = locationPathname === toPathname || !end && locationPathname.startsWith(toPathname) && locationPathname.charAt(toPathname.length) === "/";
    var isPending = nextLocationPathname != null && (nextLocationPathname === toPathname || !end && nextLocationPathname.startsWith(toPathname) && nextLocationPathname.charAt(toPathname.length) === "/");
    var ariaCurrent = isActive ? ariaCurrentProp : undefined;
    var className;
    if (typeof classNameProp === "function") className = classNameProp({
        isActive: isActive,
        isPending: isPending
    });
    else // If the className prop is not a function, we use a default `active`
    // class for <NavLink />s that are active. In v5 `active` was the default
    // value for `activeClassName`, but we are removing that API and can still
    // use the old default behavior for a cleaner upgrade path and keep the
    // simple styling rules working as they currently do.
    className = [
        classNameProp,
        isActive ? "active" : null,
        isPending ? "pending" : null
    ].filter(Boolean).join(" ");
    var style = typeof styleProp === "function" ? styleProp({
        isActive: isActive,
        isPending: isPending
    }) : styleProp;
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_3_.createElement(Link, _extends({}, rest, {
        "aria-current": ariaCurrent,
        className: className,
        ref: ref,
        style: style,
        to: to
    }), typeof children === "function" ? children({
        isActive: isActive,
        isPending: isPending
    }) : children);
});
NavLink.displayName = "NavLink";
/**
 * A `@remix-run/router`-aware `<form>`. It behaves like a normal form except
 * that the interaction with the server is with `fetch` instead of new document
 * requests, allowing components to add nicer UX to the page as the form is
 * submitted and returns with data.
 */ var Form = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_3_.forwardRef(function(props, ref) {
    var submit = useSubmit();
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_3_.createElement(FormImpl, _extends({}, props, {
        submit: submit,
        ref: ref
    }));
});
Form.displayName = "Form";
var FormImpl = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_3_.forwardRef(function(_ref6, forwardedRef) {
    var reloadDocument = _ref6.reloadDocument, replace = _ref6.replace, state = _ref6.state, _ref6_method = _ref6.method, method = _ref6_method === void 0 ? defaultMethod : _ref6_method, action = _ref6.action, onSubmit = _ref6.onSubmit, submit = _ref6.submit, relative = _ref6.relative, preventScrollReset = _ref6.preventScrollReset, props = _objectWithoutPropertiesLoose(_ref6, _excluded3);
    var formMethod = method.toLowerCase() === "get" ? "get" : "post";
    var formAction = useFormAction(action, {
        relative: relative
    });
    var submitHandler = function(event) {
        onSubmit && onSubmit(event);
        if (event.defaultPrevented) return;
        event.preventDefault();
        var submitter = event.nativeEvent.submitter;
        var submitMethod = (submitter == null ? void 0 : submitter.getAttribute("formmethod")) || method;
        submit(submitter || event.currentTarget, {
            method: submitMethod,
            replace: replace,
            state: state,
            relative: relative,
            preventScrollReset: preventScrollReset
        });
    };
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_3_.createElement("form", _extends({
        ref: forwardedRef,
        method: formMethod,
        action: formAction,
        onSubmit: reloadDocument ? onSubmit : submitHandler
    }, props));
});
FormImpl.displayName = "FormImpl";
/**
 * This component will emulate the browser's scroll restoration on location
 * changes.
 */ function ScrollRestoration(_ref7) {
    var getKey = _ref7.getKey, storageKey = _ref7.storageKey;
    useScrollRestoration({
        getKey: getKey,
        storageKey: storageKey
    });
    return null;
}
ScrollRestoration.displayName = "ScrollRestoration";
//#endregion
////////////////////////////////////////////////////////////////////////////////
//#region Hooks
////////////////////////////////////////////////////////////////////////////////
var DataRouterHook;
(function(DataRouterHook) {
    DataRouterHook["UseScrollRestoration"] = "useScrollRestoration";
    DataRouterHook["UseSubmit"] = "useSubmit";
    DataRouterHook["UseSubmitFetcher"] = "useSubmitFetcher";
    DataRouterHook["UseFetcher"] = "useFetcher";
})(DataRouterHook || (DataRouterHook = {}));
var DataRouterStateHook;
(function(DataRouterStateHook) {
    DataRouterStateHook["UseFetchers"] = "useFetchers";
    DataRouterStateHook["UseScrollRestoration"] = "useScrollRestoration";
})(DataRouterStateHook || (DataRouterStateHook = {}));
function getDataRouterConsoleError(hookName) {
    return hookName + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}
function useDataRouterContext(hookName) {
    var ctx = react__WEBPACK_IMPORTED_MODULE_3_.useContext(react_router__WEBPACK_IMPORTED_MODULE_4_.UNSAFE_DataRouterContext);
    !ctx && (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_5_.UNSAFE_invariant)(false, getDataRouterConsoleError(hookName));
    return ctx;
}
function useDataRouterState(hookName) {
    var state = react__WEBPACK_IMPORTED_MODULE_3_.useContext(react_router__WEBPACK_IMPORTED_MODULE_4_.UNSAFE_DataRouterStateContext);
    !state && (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_5_.UNSAFE_invariant)(false, getDataRouterConsoleError(hookName));
    return state;
}
/**
 * Handles the click behavior for router `<Link>` components. This is useful if
 * you need to create custom `<Link>` components with the same click behavior we
 * use in our exported `<Link>`.
 */ function useLinkClickHandler(to, _temp) {
    var _ref = _temp === void 0 ? {} : _temp, target = _ref.target, replaceProp = _ref.replace, state = _ref.state, preventScrollReset = _ref.preventScrollReset, relative = _ref.relative;
    var navigate = (0, react_router__WEBPACK_IMPORTED_MODULE_4_.useNavigate)();
    var location = (0, react_router__WEBPACK_IMPORTED_MODULE_4_.useLocation)();
    var path = (0, react_router__WEBPACK_IMPORTED_MODULE_4_.useResolvedPath)(to, {
        relative: relative
    });
    return react__WEBPACK_IMPORTED_MODULE_3_.useCallback(function(event) {
        if (shouldProcessLinkClick(event, target)) {
            event.preventDefault();
            // If the URL hasn't changed, a regular <a> will do a replace instead of
            // a push, so do the same here unless the replace prop is explicitly set
            var replace = replaceProp !== undefined ? replaceProp : (0, react_router__WEBPACK_IMPORTED_MODULE_4_.createPath)(location) === (0, react_router__WEBPACK_IMPORTED_MODULE_4_.createPath)(path);
            navigate(to, {
                replace: replace,
                state: state,
                preventScrollReset: preventScrollReset,
                relative: relative
            });
        }
    }, [
        location,
        navigate,
        path,
        replaceProp,
        state,
        target,
        to,
        preventScrollReset,
        relative
    ]);
}
/**
 * A convenient wrapper for reading and writing search parameters via the
 * URLSearchParams interface.
 */ function useSearchParams(defaultInit) {
    (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_5_.UNSAFE_warning)(typeof URLSearchParams !== "undefined", "You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params\n\nIf you're unsure how to load polyfills, we recommend you check out https://polyfill.io/v3/ which provides some recommendations about how to load polyfills only for users that need them, instead of for every user.");
    var defaultSearchParamsRef = react__WEBPACK_IMPORTED_MODULE_3_.useRef(createSearchParams(defaultInit));
    var hasSetSearchParamsRef = react__WEBPACK_IMPORTED_MODULE_3_.useRef(false);
    var location = (0, react_router__WEBPACK_IMPORTED_MODULE_4_.useLocation)();
    var searchParams = react__WEBPACK_IMPORTED_MODULE_3_.useMemo(function() {
        return(// Only merge in the defaults if we haven't yet called setSearchParams.
        // Once we call that we want those to take precedence, otherwise you can't
        // remove a param with setSearchParams({}) if it has an initial value
        getSearchParamsForLocation(location.search, hasSetSearchParamsRef.current ? null : defaultSearchParamsRef.current));
    }, [
        location.search
    ]);
    var navigate = (0, react_router__WEBPACK_IMPORTED_MODULE_4_.useNavigate)();
    var setSearchParams = react__WEBPACK_IMPORTED_MODULE_3_.useCallback(function(nextInit, navigateOptions) {
        var newSearchParams = createSearchParams(typeof nextInit === "function" ? nextInit(searchParams) : nextInit);
        hasSetSearchParamsRef.current = true;
        navigate("?" + newSearchParams, navigateOptions);
    }, [
        navigate,
        searchParams
    ]);
    return [
        searchParams,
        setSearchParams
    ];
}
function validateClientSideSubmission() {
    if (typeof document === "undefined") throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.");
}
/**
 * Returns a function that may be used to programmatically submit a form (or
 * some arbitrary data) to the server.
 */ function useSubmit() {
    var router = useDataRouterContext(DataRouterHook.UseSubmit).router;
    var basename = react__WEBPACK_IMPORTED_MODULE_3_.useContext(react_router__WEBPACK_IMPORTED_MODULE_4_.UNSAFE_NavigationContext).basename;
    var currentRouteId = (0, react_router__WEBPACK_IMPORTED_MODULE_4_.UNSAFE_useRouteId)();
    return react__WEBPACK_IMPORTED_MODULE_3_.useCallback(function(target, options) {
        if (options === void 0) options = {};
        validateClientSideSubmission();
        var _getFormSubmissionInfo = getFormSubmissionInfo(target, basename), action = _getFormSubmissionInfo.action, method = _getFormSubmissionInfo.method, encType = _getFormSubmissionInfo.encType, formData = _getFormSubmissionInfo.formData, body = _getFormSubmissionInfo.body;
        router.navigate(options.action || action, {
            preventScrollReset: options.preventScrollReset,
            formData: formData,
            body: body,
            formMethod: options.method || method,
            formEncType: options.encType || encType,
            replace: options.replace,
            state: options.state,
            fromRouteId: currentRouteId
        });
    }, [
        router,
        basename,
        currentRouteId
    ]);
}
/**
 * Returns the implementation for fetcher.submit
 */ function useSubmitFetcher(fetcherKey, fetcherRouteId) {
    var router = useDataRouterContext(DataRouterHook.UseSubmitFetcher).router;
    var basename = react__WEBPACK_IMPORTED_MODULE_3_.useContext(react_router__WEBPACK_IMPORTED_MODULE_4_.UNSAFE_NavigationContext).basename;
    return react__WEBPACK_IMPORTED_MODULE_3_.useCallback(function(target, options) {
        if (options === void 0) options = {};
        validateClientSideSubmission();
        var _getFormSubmissionInfo = getFormSubmissionInfo(target, basename), action = _getFormSubmissionInfo.action, method = _getFormSubmissionInfo.method, encType = _getFormSubmissionInfo.encType, formData = _getFormSubmissionInfo.formData, body = _getFormSubmissionInfo.body;
        !(fetcherRouteId != null) && (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_5_.UNSAFE_invariant)(false, "No routeId available for useFetcher()");
        router.fetch(fetcherKey, fetcherRouteId, options.action || action, {
            preventScrollReset: options.preventScrollReset,
            formData: formData,
            body: body,
            formMethod: options.method || method,
            formEncType: options.encType || encType
        });
    }, [
        router,
        basename,
        fetcherKey,
        fetcherRouteId
    ]);
}
// v7: Eventually we should deprecate this entirely in favor of using the
// router method directly?
function useFormAction(action, _temp2) {
    var relative = (_temp2 === void 0 ? {} : _temp2).relative;
    var basename = react__WEBPACK_IMPORTED_MODULE_3_.useContext(react_router__WEBPACK_IMPORTED_MODULE_4_.UNSAFE_NavigationContext).basename;
    var routeContext = react__WEBPACK_IMPORTED_MODULE_3_.useContext(react_router__WEBPACK_IMPORTED_MODULE_4_.UNSAFE_RouteContext);
    !routeContext && (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_5_.UNSAFE_invariant)(false, "useFormAction must be used inside a RouteContext");
    var _routeContext_matches_slice = (0, _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_1_._)(routeContext.matches.slice(-1), 1), match = _routeContext_matches_slice[0];
    // Shallow clone path so we can modify it below, otherwise we modify the
    // object referenced by useMemo inside useResolvedPath
    var path = _extends({}, (0, react_router__WEBPACK_IMPORTED_MODULE_4_.useResolvedPath)(action ? action : ".", {
        relative: relative
    }));
    // Previously we set the default action to ".". The problem with this is that
    // `useResolvedPath(".")` excludes search params of the resolved URL. This is
    // the intended behavior of when "." is specifically provided as
    // the form action, but inconsistent w/ browsers when the action is omitted.
    // https://github.com/remix-run/remix/issues/927
    var location = (0, react_router__WEBPACK_IMPORTED_MODULE_4_.useLocation)();
    if (action == null) {
        // Safe to write to this directly here since if action was undefined, we
        // would have called useResolvedPath(".") which will never include a search
        path.search = location.search;
        // When grabbing search params from the URL, remove the automatically
        // inserted ?index param so we match the useResolvedPath search behavior
        // which would not include ?index
        if (match.route.index) {
            var params = new URLSearchParams(path.search);
            params.delete("index");
            path.search = params.toString() ? "?" + params.toString() : "";
        }
    }
    if ((!action || action === ".") && match.route.index) path.search = path.search ? path.search.replace(/^\?/, "?index&") : "?index";
    // If we're operating within a basename, prepend it to the pathname prior
    // to creating the form action.  If this is a root navigation, then just use
    // the raw basename which allows the basename to have full control over the
    // presence of a trailing slash on root actions
    if (basename !== "/") path.pathname = path.pathname === "/" ? basename : (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_5_.joinPaths)([
        basename,
        path.pathname
    ]);
    return (0, react_router__WEBPACK_IMPORTED_MODULE_4_.createPath)(path);
}
function createFetcherForm(fetcherKey, routeId) {
    var FetcherForm = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_3_.forwardRef(function(props, ref) {
        var submit = useSubmitFetcher(fetcherKey, routeId);
        return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_3_.createElement(FormImpl, _extends({}, props, {
            ref: ref,
            submit: submit
        }));
    });
    FetcherForm.displayName = "fetcher.Form";
    return FetcherForm;
}
var fetcherId = 0;
// TODO: (v7) Change the useFetcher generic default from `any` to `unknown`
/**
 * Interacts with route loaders and actions without causing a navigation. Great
 * for any interaction that stays on the same page.
 */ function useFetcher() {
    var _route$matches;
    var router = useDataRouterContext(DataRouterHook.UseFetcher).router;
    var route = react__WEBPACK_IMPORTED_MODULE_3_.useContext(react_router__WEBPACK_IMPORTED_MODULE_4_.UNSAFE_RouteContext);
    !route && (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_5_.UNSAFE_invariant)(false, "useFetcher must be used inside a RouteContext");
    var routeId = (_route$matches = route.matches[route.matches.length - 1]) == null ? void 0 : _route$matches.route.id;
    !(routeId != null) && (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_5_.UNSAFE_invariant)(false, "useFetcher can only be used on routes that contain a unique \"id\"");
    var _React_useState = (0, _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_1_._)(react__WEBPACK_IMPORTED_MODULE_3_.useState(function() {
        return String(++fetcherId);
    }), 1), fetcherKey = _React_useState[0];
    var _React_useState1 = (0, _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_1_._)(react__WEBPACK_IMPORTED_MODULE_3_.useState(function() {
        !routeId && (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_5_.UNSAFE_invariant)(false, "No routeId available for fetcher.Form()");
        return createFetcherForm(fetcherKey, routeId);
    }), 1), Form = _React_useState1[0];
    var _React_useState2 = (0, _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_1_._)(react__WEBPACK_IMPORTED_MODULE_3_.useState(function() {
        return function(href) {
            !router && (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_5_.UNSAFE_invariant)(false, "No router available for fetcher.load()");
            !routeId && (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_5_.UNSAFE_invariant)(false, "No routeId available for fetcher.load()");
            router.fetch(fetcherKey, routeId, href);
        };
    }), 1), load = _React_useState2[0];
    var submit = useSubmitFetcher(fetcherKey, routeId);
    var fetcher = router.getFetcher(fetcherKey);
    var fetcherWithComponents = react__WEBPACK_IMPORTED_MODULE_3_.useMemo(function() {
        return _extends({
            Form: Form,
            submit: submit,
            load: load
        }, fetcher);
    }, [
        fetcher,
        Form,
        submit,
        load
    ]);
    react__WEBPACK_IMPORTED_MODULE_3_.useEffect(function() {
        // Is this busted when the React team gets real weird and calls effects
        // twice on mount?  We really just need to garbage collect here when this
        // fetcher is no longer around.
        return function() {
            if (!router) {
                console.warn("No router available to clean up from useFetcher()");
                return;
            }
            router.deleteFetcher(fetcherKey);
        };
    }, [
        router,
        fetcherKey
    ]);
    return fetcherWithComponents;
}
/**
 * Provides all fetchers currently on the page. Useful for layouts and parent
 * routes that need to provide pending/optimistic UI regarding the fetch.
 */ function useFetchers() {
    var state = useDataRouterState(DataRouterStateHook.UseFetchers);
    return (0, _swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_2_._)(state.fetchers.values());
}
var SCROLL_RESTORATION_STORAGE_KEY = "react-router-scroll-positions";
var savedScrollPositions = {};
/**
 * When rendered inside a RouterProvider, will restore scroll positions on navigations
 */ function useScrollRestoration(_temp3) {
    var _ref = _temp3 === void 0 ? {} : _temp3, getKey = _ref.getKey, storageKey = _ref.storageKey;
    var router = useDataRouterContext(DataRouterHook.UseScrollRestoration).router;
    var _useDataRouterState = useDataRouterState(DataRouterStateHook.UseScrollRestoration), restoreScrollPosition = _useDataRouterState.restoreScrollPosition, preventScrollReset = _useDataRouterState.preventScrollReset;
    var basename = react__WEBPACK_IMPORTED_MODULE_3_.useContext(react_router__WEBPACK_IMPORTED_MODULE_4_.UNSAFE_NavigationContext).basename;
    var location = (0, react_router__WEBPACK_IMPORTED_MODULE_4_.useLocation)();
    var matches = (0, react_router__WEBPACK_IMPORTED_MODULE_4_.useMatches)();
    var navigation = (0, react_router__WEBPACK_IMPORTED_MODULE_4_.useNavigation)();
    // Trigger manual scroll restoration while we're active
    react__WEBPACK_IMPORTED_MODULE_3_.useEffect(function() {
        window.history.scrollRestoration = "manual";
        return function() {
            window.history.scrollRestoration = "auto";
        };
    }, []);
    // Save positions on pagehide
    usePageHide(react__WEBPACK_IMPORTED_MODULE_3_.useCallback(function() {
        if (navigation.state === "idle") {
            var key = (getKey ? getKey(location, matches) : null) || location.key;
            savedScrollPositions[key] = window.scrollY;
        }
        sessionStorage.setItem(storageKey || SCROLL_RESTORATION_STORAGE_KEY, JSON.stringify(savedScrollPositions));
        window.history.scrollRestoration = "auto";
    }, [
        storageKey,
        getKey,
        navigation.state,
        location,
        matches
    ]));
    // Read in any saved scroll locations
    if (typeof document !== "undefined") {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        react__WEBPACK_IMPORTED_MODULE_3_.useLayoutEffect(function() {
            try {
                var sessionPositions = sessionStorage.getItem(storageKey || SCROLL_RESTORATION_STORAGE_KEY);
                if (sessionPositions) savedScrollPositions = JSON.parse(sessionPositions);
            } catch (e) {
            // no-op, use default empty object
            }
        }, [
            storageKey
        ]);
        // Enable scroll restoration in the router
        // eslint-disable-next-line react-hooks/rules-of-hooks
        react__WEBPACK_IMPORTED_MODULE_3_.useLayoutEffect(function() {
            var getKeyWithoutBasename = getKey && basename !== "/" ? function(location, matches) {
                return getKey(_extends({}, location, {
                    pathname: (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_5_.stripBasename)(location.pathname, basename) || location.pathname
                }), matches);
            } : getKey;
            var disableScrollRestoration = router == null ? void 0 : router.enableScrollRestoration(savedScrollPositions, function() {
                return window.scrollY;
            }, getKeyWithoutBasename);
            return function() {
                return disableScrollRestoration && disableScrollRestoration();
            };
        }, [
            router,
            basename,
            getKey
        ]);
        // Restore scrolling when state.restoreScrollPosition changes
        // eslint-disable-next-line react-hooks/rules-of-hooks
        react__WEBPACK_IMPORTED_MODULE_3_.useLayoutEffect(function() {
            // Explicit false means don't do anything (used for submissions)
            if (restoreScrollPosition === false) return;
            // been here before, scroll to it
            if (typeof restoreScrollPosition === "number") {
                window.scrollTo(0, restoreScrollPosition);
                return;
            }
            // try to scroll to the hash
            if (location.hash) {
                var el = document.getElementById(decodeURIComponent(location.hash.slice(1)));
                if (el) {
                    el.scrollIntoView();
                    return;
                }
            }
            // Don't reset if this navigation opted out
            if (preventScrollReset === true) return;
            // otherwise go to the top on new locations
            window.scrollTo(0, 0);
        }, [
            location,
            restoreScrollPosition,
            preventScrollReset
        ]);
    }
}
/**
 * Setup a callback to be fired on the window's `beforeunload` event. This is
 * useful for saving some data to `window.localStorage` just before the page
 * refreshes.
 *
 * Note: The `callback` argument should be a function created with
 * `React.useCallback()`.
 */ function useBeforeUnload(callback, options) {
    var capture = (options || {}).capture;
    react__WEBPACK_IMPORTED_MODULE_3_.useEffect(function() {
        var opts = capture != null ? {
            capture: capture
        } : undefined;
        window.addEventListener("beforeunload", callback, opts);
        return function() {
            window.removeEventListener("beforeunload", callback, opts);
        };
    }, [
        callback,
        capture
    ]);
}
/**
 * Setup a callback to be fired on the window's `pagehide` event. This is
 * useful for saving some data to `window.localStorage` just before the page
 * refreshes.  This event is better supported than beforeunload across browsers.
 *
 * Note: The `callback` argument should be a function created with
 * `React.useCallback()`.
 */ function usePageHide(callback, options) {
    var capture = (options || {}).capture;
    react__WEBPACK_IMPORTED_MODULE_3_.useEffect(function() {
        var opts = capture != null ? {
            capture: capture
        } : undefined;
        window.addEventListener("pagehide", callback, opts);
        return function() {
            window.removeEventListener("pagehide", callback, opts);
        };
    }, [
        callback,
        capture
    ]);
}
/**
 * Wrapper around useBlocker to show a window.confirm prompt to users instead
 * of building a custom UI with useBlocker.
 *
 * Warning: This has *a lot of rough edges* and behaves very differently (and
 * very incorrectly in some cases) across browsers if user click addition
 * back/forward navigations while the confirm is open.  Use at your own risk.
 */ function usePrompt(_ref8) {
    var when = _ref8.when, message = _ref8.message;
    var blocker = (0, react_router__WEBPACK_IMPORTED_MODULE_4_.unstable_useBlocker)(when);
    react__WEBPACK_IMPORTED_MODULE_3_.useEffect(function() {
        if (blocker.state === "blocked") {
            var proceed = window.confirm(message);
            if (proceed) // This timeout is needed to avoid a weird "race" on POP navigations
            // between the `window.history` revert navigation and the result of
            // `window.confirm`
            setTimeout(blocker.proceed, 0);
            else blocker.reset();
        }
    }, [
        blocker,
        message
    ]);
    react__WEBPACK_IMPORTED_MODULE_3_.useEffect(function() {
        if (blocker.state === "blocked" && !when) blocker.reset();
    }, [
        blocker,
        when
    ]);
}
//#endregion
 //# sourceMappingURL=index.js.map
},
"./node_modules/.pnpm/registry.npmmirror.com+react-router@6.16.0_react@18.2.0/node_modules/react-router/dist/index.js": function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
'use strict';
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  'AbortedDeferredError': function() { return _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.AbortedDeferredError; },
  'NavigationType': function() { return _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.Action; },
  'createPath': function() { return _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.createPath; },
  'defer': function() { return _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.defer; },
  'generatePath': function() { return _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.generatePath; },
  'isRouteErrorResponse': function() { return _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.isRouteErrorResponse; },
  'json': function() { return _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.json; },
  'matchPath': function() { return _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.matchPath; },
  'matchRoutes': function() { return _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.matchRoutes; },
  'parsePath': function() { return _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.parsePath; },
  'redirect': function() { return _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.redirect; },
  'redirectDocument': function() { return _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.redirectDocument; },
  'resolvePath': function() { return _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.resolvePath; },
  'Await': function() { return Await; },
  'MemoryRouter': function() { return MemoryRouter; },
  'Navigate': function() { return Navigate; },
  'Outlet': function() { return Outlet; },
  'Route': function() { return Route; },
  'Router': function() { return Router; },
  'RouterProvider': function() { return RouterProvider; },
  'Routes': function() { return Routes; },
  'UNSAFE_DataRouterContext': function() { return DataRouterContext; },
  'UNSAFE_DataRouterStateContext': function() { return DataRouterStateContext; },
  'UNSAFE_LocationContext': function() { return LocationContext; },
  'UNSAFE_NavigationContext': function() { return NavigationContext; },
  'UNSAFE_RouteContext': function() { return RouteContext; },
  'UNSAFE_mapRouteProperties': function() { return mapRouteProperties; },
  'UNSAFE_useRouteId': function() { return useRouteId; },
  'UNSAFE_useRoutesImpl': function() { return useRoutesImpl; },
  'createMemoryRouter': function() { return createMemoryRouter; },
  'createRoutesFromChildren': function() { return createRoutesFromChildren; },
  'createRoutesFromElements': function() { return createRoutesFromChildren; },
  'renderMatches': function() { return renderMatches; },
  'unstable_useBlocker': function() { return useBlocker; },
  'useActionData': function() { return useActionData; },
  'useAsyncError': function() { return useAsyncError; },
  'useAsyncValue': function() { return useAsyncValue; },
  'useHref': function() { return useHref; },
  'useInRouterContext': function() { return useInRouterContext; },
  'useLoaderData': function() { return useLoaderData; },
  'useLocation': function() { return useLocation; },
  'useMatch': function() { return useMatch; },
  'useMatches': function() { return useMatches; },
  'useNavigate': function() { return useNavigate; },
  'useNavigation': function() { return useNavigation; },
  'useNavigationType': function() { return useNavigationType; },
  'useOutlet': function() { return useOutlet; },
  'useOutletContext': function() { return useOutletContext; },
  'useParams': function() { return useParams; },
  'useResolvedPath': function() { return useResolvedPath; },
  'useRevalidator': function() { return useRevalidator; },
  'useRouteError': function() { return useRouteError; },
  'useRouteLoaderData': function() { return useRouteLoaderData; },
  'useRoutes': function() { return useRoutes; }
});
/* harmony import */var _swc_helpers_class_call_check__WEBPACK_IMPORTED_MODULE_0_ = __webpack_require__(/* @swc/helpers/_/_class_call_check */"./node_modules/.pnpm/registry.npmmirror.com+@swc+helpers@0.5.1/node_modules/@swc/helpers/esm/_class_call_check.js");
/* harmony import */var _swc_helpers_create_class__WEBPACK_IMPORTED_MODULE_1_ = __webpack_require__(/* @swc/helpers/_/_create_class */"./node_modules/.pnpm/registry.npmmirror.com+@swc+helpers@0.5.1/node_modules/@swc/helpers/esm/_create_class.js");
/* harmony import */var _swc_helpers_inherits__WEBPACK_IMPORTED_MODULE_2_ = __webpack_require__(/* @swc/helpers/_/_inherits */"./node_modules/.pnpm/registry.npmmirror.com+@swc+helpers@0.5.1/node_modules/@swc/helpers/esm/_inherits.js");
/* harmony import */var _swc_helpers_instanceof__WEBPACK_IMPORTED_MODULE_3_ = __webpack_require__(/* @swc/helpers/_/_instanceof */"./node_modules/.pnpm/registry.npmmirror.com+@swc+helpers@0.5.1/node_modules/@swc/helpers/esm/_instanceof.js");
/* harmony import */var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4_ = __webpack_require__(/* @swc/helpers/_/_sliced_to_array */"./node_modules/.pnpm/registry.npmmirror.com+@swc+helpers@0.5.1/node_modules/@swc/helpers/esm/_sliced_to_array.js");
/* harmony import */var _swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_5_ = __webpack_require__(/* @swc/helpers/_/_to_consumable_array */"./node_modules/.pnpm/registry.npmmirror.com+@swc+helpers@0.5.1/node_modules/@swc/helpers/esm/_to_consumable_array.js");
/* harmony import */var _swc_helpers_create_super__WEBPACK_IMPORTED_MODULE_6_ = __webpack_require__(/* @swc/helpers/_/_create_super */"./node_modules/.pnpm/registry.npmmirror.com+@swc+helpers@0.5.1/node_modules/@swc/helpers/esm/_create_super.js");
/* harmony import */var react__WEBPACK_IMPORTED_MODULE_7_ = __webpack_require__(/* react */"./node_modules/.pnpm/registry.npmmirror.com+react@18.2.0/node_modules/react/index.js");
/* harmony import */var react__WEBPACK_IMPORTED_MODULE_7__default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7_);
/* harmony import */var _remix_run_router__WEBPACK_IMPORTED_MODULE_8_ = __webpack_require__(/* @remix-run/router */"./node_modules/.pnpm/registry.npmmirror.com+@remix-run+router@1.9.0/node_modules/@remix-run/router/dist/router.js");
/**
 * React Router v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ 









function _extends() {
    _extends = Object.assign ? Object.assign.bind() : function _extends(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
// Create react-specific types from the agnostic types in @remix-run/router to
// export from react-router
var DataRouterContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7_.createContext(null);
DataRouterContext.displayName = "DataRouter";
var DataRouterStateContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7_.createContext(null);
DataRouterStateContext.displayName = "DataRouterState";
var AwaitContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7_.createContext(null);
AwaitContext.displayName = "Await";
/**
 * A Navigator is a "location changer"; it's how you get to different locations.
 *
 * Every history instance conforms to the Navigator interface, but the
 * distinction is useful primarily when it comes to the low-level <Router> API
 * where both the location and a navigator must be provided separately in order
 * to avoid "tearing" that may occur in a suspense-enabled app if the action
 * and/or location were to be read directly from the history instance.
 */ var NavigationContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7_.createContext(null);
NavigationContext.displayName = "Navigation";
var LocationContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7_.createContext(null);
LocationContext.displayName = "Location";
var RouteContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7_.createContext({
    outlet: null,
    matches: [],
    isDataRoute: false
});
RouteContext.displayName = "Route";
var RouteErrorContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7_.createContext(null);
RouteErrorContext.displayName = "RouteError";
/**
 * Returns the full href for the given "to" value. This is useful for building
 * custom links that are also accessible and preserve right-click behavior.
 *
 * @see https://reactrouter.com/hooks/use-href
 */ function useHref(to, _temp) {
    var relative = (_temp === void 0 ? {} : _temp).relative;
    !useInRouterContext() && (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.UNSAFE_invariant)(false, // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component.");
    var _React_useContext = react__WEBPACK_IMPORTED_MODULE_7_.useContext(NavigationContext), basename = _React_useContext.basename, navigator = _React_useContext.navigator;
    var _useResolvedPath = useResolvedPath(to, {
        relative: relative
    }), hash = _useResolvedPath.hash, pathname = _useResolvedPath.pathname, search = _useResolvedPath.search;
    var joinedPathname = pathname;
    // If we're operating within a basename, prepend it to the pathname prior
    // to creating the href.  If this is a root navigation, then just use the raw
    // basename which allows the basename to have full control over the presence
    // of a trailing slash on root links
    if (basename !== "/") joinedPathname = pathname === "/" ? basename : (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.joinPaths)([
        basename,
        pathname
    ]);
    return navigator.createHref({
        pathname: joinedPathname,
        search: search,
        hash: hash
    });
}
/**
 * Returns true if this component is a descendant of a <Router>.
 *
 * @see https://reactrouter.com/hooks/use-in-router-context
 */ function useInRouterContext() {
    return react__WEBPACK_IMPORTED_MODULE_7_.useContext(LocationContext) != null;
}
/**
 * Returns the current location object, which represents the current URL in web
 * browsers.
 *
 * Note: If you're using this it may mean you're doing some of your own
 * "routing" in your app, and we'd like to know what your use case is. We may
 * be able to provide something higher-level to better suit your needs.
 *
 * @see https://reactrouter.com/hooks/use-location
 */ function useLocation() {
    !useInRouterContext() && (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.UNSAFE_invariant)(false, // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component.");
    return react__WEBPACK_IMPORTED_MODULE_7_.useContext(LocationContext).location;
}
/**
 * Returns the current navigation action which describes how the router came to
 * the current location, either by a pop, push, or replace on the history stack.
 *
 * @see https://reactrouter.com/hooks/use-navigation-type
 */ function useNavigationType() {
    return react__WEBPACK_IMPORTED_MODULE_7_.useContext(LocationContext).navigationType;
}
/**
 * Returns a PathMatch object if the given pattern matches the current URL.
 * This is useful for components that need to know "active" state, e.g.
 * <NavLink>.
 *
 * @see https://reactrouter.com/hooks/use-match
 */ function useMatch(pattern) {
    !useInRouterContext() && (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.UNSAFE_invariant)(false, // router loaded. We can help them understand how to avoid that.
    "useMatch() may be used only in the context of a <Router> component.");
    var pathname = useLocation().pathname;
    return react__WEBPACK_IMPORTED_MODULE_7_.useMemo(function() {
        return (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.matchPath)(pattern, pathname);
    }, [
        pathname,
        pattern
    ]);
}
/**
 * The interface for the navigate() function returned from useNavigate().
 */ var navigateEffectWarning = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
// Mute warnings for calls to useNavigate in SSR environments
function useIsomorphicLayoutEffect(cb) {
    var isStatic = react__WEBPACK_IMPORTED_MODULE_7_.useContext(NavigationContext).static;
    if (!isStatic) // We should be able to get rid of this once react 18.3 is released
    // See: https://github.com/facebook/react/pull/26395
    // eslint-disable-next-line react-hooks/rules-of-hooks
    react__WEBPACK_IMPORTED_MODULE_7_.useLayoutEffect(cb);
}
/**
 * Returns an imperative method for changing the location. Used by <Link>s, but
 * may also be used by other elements to change the location.
 *
 * @see https://reactrouter.com/hooks/use-navigate
 */ function useNavigate() {
    var isDataRoute = react__WEBPACK_IMPORTED_MODULE_7_.useContext(RouteContext).isDataRoute;
    // Conditional usage is OK here because the usage of a data router is static
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return isDataRoute ? useNavigateStable() : useNavigateUnstable();
}
function useNavigateUnstable() {
    !useInRouterContext() && (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.UNSAFE_invariant)(false, // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component.");
    var dataRouterContext = react__WEBPACK_IMPORTED_MODULE_7_.useContext(DataRouterContext);
    var _React_useContext = react__WEBPACK_IMPORTED_MODULE_7_.useContext(NavigationContext), basename = _React_useContext.basename, navigator = _React_useContext.navigator;
    var matches = react__WEBPACK_IMPORTED_MODULE_7_.useContext(RouteContext).matches;
    var _useLocation = useLocation(), locationPathname = _useLocation.pathname;
    var routePathnamesJson = JSON.stringify((0, _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.UNSAFE_getPathContributingMatches)(matches).map(function(match) {
        return match.pathnameBase;
    }));
    var activeRef = react__WEBPACK_IMPORTED_MODULE_7_.useRef(false);
    useIsomorphicLayoutEffect(function() {
        activeRef.current = true;
    });
    var navigate = react__WEBPACK_IMPORTED_MODULE_7_.useCallback(function(to, options) {
        if (options === void 0) options = {};
        (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.UNSAFE_warning)(activeRef.current, navigateEffectWarning);
        // Short circuit here since if this happens on first render the navigate
        // is useless because we haven't wired up our history listener yet
        if (!activeRef.current) return;
        if (typeof to === "number") {
            navigator.go(to);
            return;
        }
        var path = (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.resolveTo)(to, JSON.parse(routePathnamesJson), locationPathname, options.relative === "path");
        // If we're operating within a basename, prepend it to the pathname prior
        // to handing off to history (but only if we're not in a data router,
        // otherwise it'll prepend the basename inside of the router).
        // If this is a root navigation, then we navigate to the raw basename
        // which allows the basename to have full control over the presence of a
        // trailing slash on root links
        if (dataRouterContext == null && basename !== "/") path.pathname = path.pathname === "/" ? basename : (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.joinPaths)([
            basename,
            path.pathname
        ]);
        (!!options.replace ? navigator.replace : navigator.push)(path, options.state, options);
    }, [
        basename,
        navigator,
        routePathnamesJson,
        locationPathname,
        dataRouterContext
    ]);
    return navigate;
}
var OutletContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7_.createContext(null);
/**
 * Returns the context (if provided) for the child route at this level of the route
 * hierarchy.
 * @see https://reactrouter.com/hooks/use-outlet-context
 */ function useOutletContext() {
    return react__WEBPACK_IMPORTED_MODULE_7_.useContext(OutletContext);
}
/**
 * Returns the element for the child route at this level of the route
 * hierarchy. Used internally by <Outlet> to render child routes.
 *
 * @see https://reactrouter.com/hooks/use-outlet
 */ function useOutlet(context) {
    var outlet = react__WEBPACK_IMPORTED_MODULE_7_.useContext(RouteContext).outlet;
    if (outlet) return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7_.createElement(OutletContext.Provider, {
        value: context
    }, outlet);
    return outlet;
}
/**
 * Returns an object of key/value pairs of the dynamic params from the current
 * URL that were matched by the route path.
 *
 * @see https://reactrouter.com/hooks/use-params
 */ function useParams() {
    var matches = react__WEBPACK_IMPORTED_MODULE_7_.useContext(RouteContext).matches;
    var routeMatch = matches[matches.length - 1];
    return routeMatch ? routeMatch.params : {};
}
/**
 * Resolves the pathname of the given `to` value against the current location.
 *
 * @see https://reactrouter.com/hooks/use-resolved-path
 */ function useResolvedPath(to, _temp2) {
    var relative = (_temp2 === void 0 ? {} : _temp2).relative;
    var matches = react__WEBPACK_IMPORTED_MODULE_7_.useContext(RouteContext).matches;
    var _useLocation = useLocation(), locationPathname = _useLocation.pathname;
    var routePathnamesJson = JSON.stringify((0, _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.UNSAFE_getPathContributingMatches)(matches).map(function(match) {
        return match.pathnameBase;
    }));
    return react__WEBPACK_IMPORTED_MODULE_7_.useMemo(function() {
        return (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.resolveTo)(to, JSON.parse(routePathnamesJson), locationPathname, relative === "path");
    }, [
        to,
        routePathnamesJson,
        locationPathname,
        relative
    ]);
}
/**
 * Returns the element of the route that matched the current location, prepared
 * with the correct context to render the remainder of the route tree. Route
 * elements in the tree must render an <Outlet> to render their child route's
 * element.
 *
 * @see https://reactrouter.com/hooks/use-routes
 */ function useRoutes(routes, locationArg) {
    return useRoutesImpl(routes, locationArg);
}
// Internal implementation with accept optional param for RouterProvider usage
function useRoutesImpl(routes, locationArg, dataRouterState) {
    !useInRouterContext() && (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.UNSAFE_invariant)(false, // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component.");
    var navigator = react__WEBPACK_IMPORTED_MODULE_7_.useContext(NavigationContext).navigator;
    var _React_useContext = react__WEBPACK_IMPORTED_MODULE_7_.useContext(RouteContext), parentMatches = _React_useContext.matches;
    var routeMatch = parentMatches[parentMatches.length - 1];
    var parentParams = routeMatch ? routeMatch.params : {};
    var parentPathname = routeMatch ? routeMatch.pathname : "/";
    var parentPathnameBase = routeMatch ? routeMatch.pathnameBase : "/";
    var parentRoute = routeMatch && routeMatch.route;
    // You won't get a warning about 2 different <Routes> under a <Route>
    // without a trailing *, but this is a best-effort warning anyway since we
    // cannot even give the warning unless they land at the parent route.
    //
    // Example:
    //
    // <Routes>
    //   {/* This route path MUST end with /* because otherwise
    //       it will never match /blog/post/123 */}
    //   <Route path="blog" element={<Blog />} />
    //   <Route path="blog/feed" element={<BlogFeed />} />
    // </Routes>
    //
    // function Blog() {
    //   return (
    //     <Routes>
    //       <Route path="post/:id" element={<Post />} />
    //     </Routes>
    //   );
    // }
    var parentPath = parentRoute && parentRoute.path || "";
    warningOnce(parentPathname, !parentRoute || parentPath.endsWith("*"), "You rendered descendant <Routes> (or called `useRoutes()`) at " + ("\"" + parentPathname + "\" (under <Route path=\"" + parentPath + "\">) but the ") + "parent route path has no trailing \"*\". This means if you navigate " + "deeper, the parent won't match anymore and therefore the child " + "routes will never render.\n\n" + ("Please change the parent <Route path=\"" + parentPath + "\"> to <Route ") + ("path=\"" + (parentPath === "/" ? "*" : parentPath + "/*") + "\">."));
    var locationFromContext = useLocation();
    var location;
    if (locationArg) {
        var _parsedLocationArg$pa;
        var parsedLocationArg = typeof locationArg === "string" ? (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.parsePath)(locationArg) : locationArg;
        !(parentPathnameBase === "/" || ((_parsedLocationArg$pa = parsedLocationArg.pathname) == null ? void 0 : _parsedLocationArg$pa.startsWith(parentPathnameBase))) && (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.UNSAFE_invariant)(false, "When overriding the location using `<Routes location>` or `useRoutes(routes, location)`, the location pathname must begin with the portion of the URL pathname that was " + ("matched by all parent routes. The current pathname base is \"" + parentPathnameBase + "\" ") + ("but pathname \"" + parsedLocationArg.pathname + "\" was given in the `location` prop."));
        location = parsedLocationArg;
    } else location = locationFromContext;
    var pathname = location.pathname || "/";
    var remainingPathname = parentPathnameBase === "/" ? pathname : pathname.slice(parentPathnameBase.length) || "/";
    var matches = (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.matchRoutes)(routes, {
        pathname: remainingPathname
    });
    (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.UNSAFE_warning)(parentRoute || matches != null, "No routes matched location \"" + location.pathname + location.search + location.hash + "\" ");
    (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.UNSAFE_warning)(matches == null || matches[matches.length - 1].route.element !== undefined || matches[matches.length - 1].route.Component !== undefined, "Matched leaf route at location \"" + location.pathname + location.search + location.hash + "\" " + "does not have an element or Component. This means it will render an <Outlet /> with a " + "null value by default resulting in an \"empty\" page.");
    var renderedMatches = _renderMatches(matches && matches.map(function(match) {
        return Object.assign({}, match, {
            params: Object.assign({}, parentParams, match.params),
            pathname: (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.joinPaths)([
                parentPathnameBase,
                // Re-encode pathnames that were decoded inside matchRoutes
                navigator.encodeLocation ? navigator.encodeLocation(match.pathname).pathname : match.pathname
            ]),
            pathnameBase: match.pathnameBase === "/" ? parentPathnameBase : (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.joinPaths)([
                parentPathnameBase,
                // Re-encode pathnames that were decoded inside matchRoutes
                navigator.encodeLocation ? navigator.encodeLocation(match.pathnameBase).pathname : match.pathnameBase
            ])
        });
    }), parentMatches, dataRouterState);
    // When a user passes in a `locationArg`, the associated routes need to
    // be wrapped in a new `LocationContext.Provider` in order for `useLocation`
    // to use the scoped location instead of the global location.
    if (locationArg && renderedMatches) return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7_.createElement(LocationContext.Provider, {
        value: {
            location: _extends({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, location),
            navigationType: _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.Action.Pop
        }
    }, renderedMatches);
    return renderedMatches;
}
function DefaultErrorComponent() {
    var error = useRouteError();
    var message = (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.isRouteErrorResponse)(error) ? error.status + " " + error.statusText : (0, _swc_helpers_instanceof__WEBPACK_IMPORTED_MODULE_3_._)(error, Error) ? error.message : JSON.stringify(error);
    var stack = (0, _swc_helpers_instanceof__WEBPACK_IMPORTED_MODULE_3_._)(error, Error) ? error.stack : null;
    var lightgrey = "rgba(200,200,200, 0.5)";
    var preStyles = {
        padding: "0.5rem",
        backgroundColor: lightgrey
    };
    var codeStyles = {
        padding: "2px 4px",
        backgroundColor: lightgrey
    };
    var devInfo = null;
    console.error("Error handled by React Router default ErrorBoundary:", error);
    devInfo = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7_.createElement(react__WEBPACK_IMPORTED_MODULE_7_.Fragment, null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7_.createElement("p", null, "\uD83D\uDCBF Hey developer \uD83D\uDC4B"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7_.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7_.createElement("code", {
        style: codeStyles
    }, "ErrorBoundary"), " or", " ", /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7_.createElement("code", {
        style: codeStyles
    }, "errorElement"), " prop on your route."));
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7_.createElement(react__WEBPACK_IMPORTED_MODULE_7_.Fragment, null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7_.createElement("h2", null, "Unexpected Application Error!"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7_.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, message), stack ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7_.createElement("pre", {
        style: preStyles
    }, stack) : null, devInfo);
}
var defaultErrorElement = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7_.createElement(DefaultErrorComponent, null);
var RenderErrorBoundary = function(_React_Component) {
    "use strict";
    (0, _swc_helpers_inherits__WEBPACK_IMPORTED_MODULE_2_._)(RenderErrorBoundary, _React_Component);
    var _super = (0, _swc_helpers_create_super__WEBPACK_IMPORTED_MODULE_6_._)(RenderErrorBoundary);
    function RenderErrorBoundary(props) {
        (0, _swc_helpers_class_call_check__WEBPACK_IMPORTED_MODULE_0_._)(this, RenderErrorBoundary);
        var _this;
        _this = _super.call(this, props);
        _this.state = {
            location: props.location,
            revalidation: props.revalidation,
            error: props.error
        };
        return _this;
    }
    (0, _swc_helpers_create_class__WEBPACK_IMPORTED_MODULE_1_._)(RenderErrorBoundary, [
        {
            key: "componentDidCatch",
            value: function componentDidCatch(error, errorInfo) {
                console.error("React Router caught the following error during render", error, errorInfo);
            }
        },
        {
            key: "render",
            value: function render() {
                return this.state.error ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7_.createElement(RouteContext.Provider, {
                    value: this.props.routeContext
                }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7_.createElement(RouteErrorContext.Provider, {
                    value: this.state.error,
                    children: this.props.component
                })) : this.props.children;
            }
        }
    ], [
        {
            key: "getDerivedStateFromError",
            value: function getDerivedStateFromError(error) {
                return {
                    error: error
                };
            }
        },
        {
            key: "getDerivedStateFromProps",
            value: function getDerivedStateFromProps(props, state) {
                // When we get into an error state, the user will likely click "back" to the
                // previous page that didn't have an error. Because this wraps the entire
                // application, that will have no effect--the error page continues to display.
                // This gives us a mechanism to recover from the error when the location changes.
                //
                // Whether we're in an error state or not, we update the location in state
                // so that when we are in an error state, it gets reset when a new location
                // comes in and the user recovers from the error.
                if (state.location !== props.location || state.revalidation !== "idle" && props.revalidation === "idle") return {
                    error: props.error,
                    location: props.location,
                    revalidation: props.revalidation
                };
                // If we're not changing locations, preserve the location but still surface
                // any new errors that may come through. We retain the existing error, we do
                // this because the error provided from the app state may be cleared without
                // the location changing.
                return {
                    error: props.error || state.error,
                    location: state.location,
                    revalidation: props.revalidation || state.revalidation
                };
            }
        }
    ]);
    return RenderErrorBoundary;
}(react__WEBPACK_IMPORTED_MODULE_7_.Component);
function RenderedRoute(_ref) {
    var routeContext = _ref.routeContext, match = _ref.match, children = _ref.children;
    var dataRouterContext = react__WEBPACK_IMPORTED_MODULE_7_.useContext(DataRouterContext);
    // Track how deep we got in our render pass to emulate SSR componentDidCatch
    // in a DataStaticRouter
    if (dataRouterContext && dataRouterContext.static && dataRouterContext.staticContext && (match.route.errorElement || match.route.ErrorBoundary)) dataRouterContext.staticContext._deepestRenderedBoundaryId = match.route.id;
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7_.createElement(RouteContext.Provider, {
        value: routeContext
    }, children);
}
function _renderMatches(matches, parentMatches, dataRouterState) {
    var _dataRouterState2;
    if (parentMatches === void 0) parentMatches = [];
    if (dataRouterState === void 0) dataRouterState = null;
    if (matches == null) {
        var _dataRouterState;
        if ((_dataRouterState = dataRouterState) != null && _dataRouterState.errors) // Don't bail if we have data router errors so we can render them in the
        // boundary.  Use the pre-matched (or shimmed) matches
        matches = dataRouterState.matches;
        else return null;
    }
    var renderedMatches = matches;
    // If we have data errors, trim matches to the highest error boundary
    var errors = (_dataRouterState2 = dataRouterState) == null ? void 0 : _dataRouterState2.errors;
    if (errors != null) {
        var errorIndex = renderedMatches.findIndex(function(m) {
            return m.route.id && (errors == null ? void 0 : errors[m.route.id]);
        });
        !(errorIndex >= 0) && (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.UNSAFE_invariant)(false, "Could not find a matching route for errors on route IDs: " + Object.keys(errors).join(","));
        renderedMatches = renderedMatches.slice(0, Math.min(renderedMatches.length, errorIndex + 1));
    }
    return renderedMatches.reduceRight(function(outlet, match, index) {
        var error = match.route.id ? errors == null ? void 0 : errors[match.route.id] : null;
        // Only data routers handle errors
        var errorElement = null;
        if (dataRouterState) errorElement = match.route.errorElement || defaultErrorElement;
        var _$matches = parentMatches.concat(renderedMatches.slice(0, index + 1));
        var getChildren = function() {
            var children;
            if (error) children = errorElement;
            else if (match.route.Component) // Note: This is a de-optimized path since React won't re-use the
            // ReactElement since it's identity changes with each new
            // React.createElement call.  We keep this so folks can use
            // `<Route Component={...}>` in `<Routes>` but generally `Component`
            // usage is only advised in `RouterProvider` when we can convert it to
            // `element` ahead of time.
            children = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7_.createElement(match.route.Component, null);
            else if (match.route.element) children = match.route.element;
            else children = outlet;
            return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7_.createElement(RenderedRoute, {
                match: match,
                routeContext: {
                    outlet: outlet,
                    matches: _$matches,
                    isDataRoute: dataRouterState != null
                },
                children: children
            });
        };
        // Only wrap in an error boundary within data router usages when we have an
        // ErrorBoundary/errorElement on this route.  Otherwise let it bubble up to
        // an ancestor ErrorBoundary/errorElement
        return dataRouterState && (match.route.ErrorBoundary || match.route.errorElement || index === 0) ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7_.createElement(RenderErrorBoundary, {
            location: dataRouterState.location,
            revalidation: dataRouterState.revalidation,
            component: errorElement,
            error: error,
            children: getChildren(),
            routeContext: {
                outlet: null,
                matches: _$matches,
                isDataRoute: true
            }
        }) : getChildren();
    }, null);
}
var DataRouterHook = /*#__PURE__*/ function(DataRouterHook) {
    DataRouterHook["UseBlocker"] = "useBlocker";
    DataRouterHook["UseRevalidator"] = "useRevalidator";
    DataRouterHook["UseNavigateStable"] = "useNavigate";
    return DataRouterHook;
}(DataRouterHook || {});
var DataRouterStateHook = /*#__PURE__*/ function(DataRouterStateHook) {
    DataRouterStateHook["UseBlocker"] = "useBlocker";
    DataRouterStateHook["UseLoaderData"] = "useLoaderData";
    DataRouterStateHook["UseActionData"] = "useActionData";
    DataRouterStateHook["UseRouteError"] = "useRouteError";
    DataRouterStateHook["UseNavigation"] = "useNavigation";
    DataRouterStateHook["UseRouteLoaderData"] = "useRouteLoaderData";
    DataRouterStateHook["UseMatches"] = "useMatches";
    DataRouterStateHook["UseRevalidator"] = "useRevalidator";
    DataRouterStateHook["UseNavigateStable"] = "useNavigate";
    DataRouterStateHook["UseRouteId"] = "useRouteId";
    return DataRouterStateHook;
}(DataRouterStateHook || {});
function getDataRouterConsoleError(hookName) {
    return hookName + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}
function useDataRouterContext(hookName) {
    var ctx = react__WEBPACK_IMPORTED_MODULE_7_.useContext(DataRouterContext);
    !ctx && (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.UNSAFE_invariant)(false, getDataRouterConsoleError(hookName));
    return ctx;
}
function useDataRouterState(hookName) {
    var state = react__WEBPACK_IMPORTED_MODULE_7_.useContext(DataRouterStateContext);
    !state && (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.UNSAFE_invariant)(false, getDataRouterConsoleError(hookName));
    return state;
}
function useRouteContext(hookName) {
    var route = react__WEBPACK_IMPORTED_MODULE_7_.useContext(RouteContext);
    !route && (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.UNSAFE_invariant)(false, getDataRouterConsoleError(hookName));
    return route;
}
// Internal version with hookName-aware debugging
function useCurrentRouteId(hookName) {
    var route = useRouteContext(hookName);
    var thisRoute = route.matches[route.matches.length - 1];
    !thisRoute.route.id && (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.UNSAFE_invariant)(false, hookName + " can only be used on routes that contain a unique \"id\"");
    return thisRoute.route.id;
}
/**
 * Returns the ID for the nearest contextual route
 */ function useRouteId() {
    return useCurrentRouteId(DataRouterStateHook.UseRouteId);
}
/**
 * Returns the current navigation, defaulting to an "idle" navigation when
 * no navigation is in progress
 */ function useNavigation() {
    var state = useDataRouterState(DataRouterStateHook.UseNavigation);
    return state.navigation;
}
/**
 * Returns a revalidate function for manually triggering revalidation, as well
 * as the current state of any manual revalidations
 */ function useRevalidator() {
    var dataRouterContext = useDataRouterContext(DataRouterHook.UseRevalidator);
    var state = useDataRouterState(DataRouterStateHook.UseRevalidator);
    return react__WEBPACK_IMPORTED_MODULE_7_.useMemo(function() {
        return {
            revalidate: dataRouterContext.router.revalidate,
            state: state.revalidation
        };
    }, [
        dataRouterContext.router.revalidate,
        state.revalidation
    ]);
}
/**
 * Returns the active route matches, useful for accessing loaderData for
 * parent/child routes or the route "handle" property
 */ function useMatches() {
    var _useDataRouterState = useDataRouterState(DataRouterStateHook.UseMatches), matches = _useDataRouterState.matches, loaderData = _useDataRouterState.loaderData;
    return react__WEBPACK_IMPORTED_MODULE_7_.useMemo(function() {
        return matches.map(function(m) {
            return (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.UNSAFE_convertRouteMatchToUiMatch)(m, loaderData);
        });
    }, [
        matches,
        loaderData
    ]);
}
/**
 * Returns the loader data for the nearest ancestor Route loader
 */ function useLoaderData() {
    var state = useDataRouterState(DataRouterStateHook.UseLoaderData);
    var routeId = useCurrentRouteId(DataRouterStateHook.UseLoaderData);
    if (state.errors && state.errors[routeId] != null) {
        console.error("You cannot `useLoaderData` in an errorElement (routeId: " + routeId + ")");
        return undefined;
    }
    return state.loaderData[routeId];
}
/**
 * Returns the loaderData for the given routeId
 */ function useRouteLoaderData(routeId) {
    var state = useDataRouterState(DataRouterStateHook.UseRouteLoaderData);
    return state.loaderData[routeId];
}
/**
 * Returns the action data for the nearest ancestor Route action
 */ function useActionData() {
    var state = useDataRouterState(DataRouterStateHook.UseActionData);
    var route = react__WEBPACK_IMPORTED_MODULE_7_.useContext(RouteContext);
    !route && (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.UNSAFE_invariant)(false, "useActionData must be used inside a RouteContext");
    return Object.values((state == null ? void 0 : state.actionData) || {})[0];
}
/**
 * Returns the nearest ancestor Route error, which could be a loader/action
 * error or a render error.  This is intended to be called from your
 * ErrorBoundary/errorElement to display a proper error message.
 */ function useRouteError() {
    var _state$errors;
    var error = react__WEBPACK_IMPORTED_MODULE_7_.useContext(RouteErrorContext);
    var state = useDataRouterState(DataRouterStateHook.UseRouteError);
    var routeId = useCurrentRouteId(DataRouterStateHook.UseRouteError);
    // If this was a render error, we put it in a RouteError context inside
    // of RenderErrorBoundary
    if (error) return error;
    // Otherwise look for errors from our data router state
    return (_state$errors = state.errors) == null ? void 0 : _state$errors[routeId];
}
/**
 * Returns the happy-path data from the nearest ancestor <Await /> value
 */ function useAsyncValue() {
    var value = react__WEBPACK_IMPORTED_MODULE_7_.useContext(AwaitContext);
    return value == null ? void 0 : value._data;
}
/**
 * Returns the error from the nearest ancestor <Await /> value
 */ function useAsyncError() {
    var value = react__WEBPACK_IMPORTED_MODULE_7_.useContext(AwaitContext);
    return value == null ? void 0 : value._error;
}
var blockerId = 0;
/**
 * Allow the application to block navigations within the SPA and present the
 * user a confirmation dialog to confirm the navigation.  Mostly used to avoid
 * using half-filled form data.  This does not handle hard-reloads or
 * cross-origin navigations.
 */ function useBlocker(shouldBlock) {
    var _useDataRouterContext = useDataRouterContext(DataRouterHook.UseBlocker), router = _useDataRouterContext.router, basename = _useDataRouterContext.basename;
    var state = useDataRouterState(DataRouterStateHook.UseBlocker);
    var _React_useState = (0, _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4_._)(react__WEBPACK_IMPORTED_MODULE_7_.useState(""), 2), blockerKey = _React_useState[0], setBlockerKey = _React_useState[1];
    var blockerFunction = react__WEBPACK_IMPORTED_MODULE_7_.useCallback(function(arg) {
        if (typeof shouldBlock !== "function") return !!shouldBlock;
        if (basename === "/") return shouldBlock(arg);
        // If they provided us a function and we've got an active basename, strip
        // it from the locations we expose to the user to match the behavior of
        // useLocation
        var currentLocation = arg.currentLocation, nextLocation = arg.nextLocation, historyAction = arg.historyAction;
        return shouldBlock({
            currentLocation: _extends({}, currentLocation, {
                pathname: (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.stripBasename)(currentLocation.pathname, basename) || currentLocation.pathname
            }),
            nextLocation: _extends({}, nextLocation, {
                pathname: (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.stripBasename)(nextLocation.pathname, basename) || nextLocation.pathname
            }),
            historyAction: historyAction
        });
    }, [
        basename,
        shouldBlock
    ]);
    // This effect is in charge of blocker key assignment and deletion (which is
    // tightly coupled to the key)
    react__WEBPACK_IMPORTED_MODULE_7_.useEffect(function() {
        var key = String(++blockerId);
        setBlockerKey(key);
        return function() {
            return router.deleteBlocker(key);
        };
    }, [
        router
    ]);
    // This effect handles assigning the blockerFunction.  This is to handle
    // unstable blocker function identities, and happens only after the prior
    // effect so we don't get an orphaned blockerFunction in the router with a
    // key of "".  Until then we just have the IDLE_BLOCKER.
    react__WEBPACK_IMPORTED_MODULE_7_.useEffect(function() {
        if (blockerKey !== "") router.getBlocker(blockerKey, blockerFunction);
    }, [
        router,
        blockerKey,
        blockerFunction
    ]);
    // Prefer the blocker from `state` not `router.state` since DataRouterContext
    // is memoized so this ensures we update on blocker state updates
    return blockerKey && state.blockers.has(blockerKey) ? state.blockers.get(blockerKey) : _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.IDLE_BLOCKER;
}
/**
 * Stable version of useNavigate that is used when we are in the context of
 * a RouterProvider.
 */ function useNavigateStable() {
    var router = useDataRouterContext(DataRouterHook.UseNavigateStable).router;
    var id = useCurrentRouteId(DataRouterStateHook.UseNavigateStable);
    var activeRef = react__WEBPACK_IMPORTED_MODULE_7_.useRef(false);
    useIsomorphicLayoutEffect(function() {
        activeRef.current = true;
    });
    var navigate = react__WEBPACK_IMPORTED_MODULE_7_.useCallback(function(to, options) {
        if (options === void 0) options = {};
        (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.UNSAFE_warning)(activeRef.current, navigateEffectWarning);
        // Short circuit here since if this happens on first render the navigate
        // is useless because we haven't wired up our router subscriber yet
        if (!activeRef.current) return;
        if (typeof to === "number") router.navigate(to);
        else router.navigate(to, _extends({
            fromRouteId: id
        }, options));
    }, [
        router,
        id
    ]);
    return navigate;
}
var alreadyWarned = {};
function warningOnce(key, cond, message) {
    if (!cond && !alreadyWarned[key]) {
        alreadyWarned[key] = true;
        (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.UNSAFE_warning)(false, message);
    }
}
/**
  Webpack + React 17 fails to compile on any of the following because webpack
  complains that `startTransition` doesn't exist in `React`:
  * import { startTransition } from "react"
  * import * as React from from "react";
    "startTransition" in React ? React.startTransition(() => setState()) : setState()
  * import * as React from from "react";
    "startTransition" in React ? React["startTransition"](() => setState()) : setState()

  Moving it to a constant such as the following solves the Webpack/React 17 issue:
  * import * as React from from "react";
    const START_TRANSITION = "startTransition";
    START_TRANSITION in React ? React[START_TRANSITION](() => setState()) : setState()

  However, that introduces webpack/terser minification issues in production builds
  in React 18 where minification/obfuscation ends up removing the call of
  React.startTransition entirely from the first half of the ternary.  Grabbing
  this exported reference once up front resolves that issue.

  See https://github.com/remix-run/react-router/issues/10579
*/ var START_TRANSITION = "startTransition";
var startTransitionImpl = react__WEBPACK_IMPORTED_MODULE_7_[START_TRANSITION];
/**
 * Given a Remix Router instance, render the appropriate UI
 */ function RouterProvider(_ref) {
    var fallbackElement = _ref.fallbackElement, router = _ref.router, future = _ref.future;
    // Need to use a layout effect here so we are subscribed early enough to
    // pick up on any render-driven redirects/navigations (useEffect/<Navigate>)
    var _React_useState = (0, _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4_._)(react__WEBPACK_IMPORTED_MODULE_7_.useState(router.state), 2), state = _React_useState[0], setStateImpl = _React_useState[1];
    var v7_startTransition = (future || {}).v7_startTransition;
    var setState = react__WEBPACK_IMPORTED_MODULE_7_.useCallback(function(newState) {
        v7_startTransition && startTransitionImpl ? startTransitionImpl(function() {
            return setStateImpl(newState);
        }) : setStateImpl(newState);
    }, [
        setStateImpl,
        v7_startTransition
    ]);
    react__WEBPACK_IMPORTED_MODULE_7_.useLayoutEffect(function() {
        return router.subscribe(setState);
    }, [
        router,
        setState
    ]);
    var navigator = react__WEBPACK_IMPORTED_MODULE_7_.useMemo(function() {
        return {
            createHref: router.createHref,
            encodeLocation: router.encodeLocation,
            go: function(n) {
                return router.navigate(n);
            },
            push: function(to, state, opts) {
                return router.navigate(to, {
                    state: state,
                    preventScrollReset: opts == null ? void 0 : opts.preventScrollReset
                });
            },
            replace: function(to, state, opts) {
                return router.navigate(to, {
                    replace: true,
                    state: state,
                    preventScrollReset: opts == null ? void 0 : opts.preventScrollReset
                });
            }
        };
    }, [
        router
    ]);
    var basename = router.basename || "/";
    var dataRouterContext = react__WEBPACK_IMPORTED_MODULE_7_.useMemo(function() {
        return {
            router: router,
            navigator: navigator,
            static: false,
            basename: basename
        };
    }, [
        router,
        navigator,
        basename
    ]);
    // The fragment and {null} here are important!  We need them to keep React 18's
    // useId happy when we are server-rendering since we may have a <script> here
    // containing the hydrated server-side staticContext (from StaticRouterProvider).
    // useId relies on the component tree structure to generate deterministic id's
    // so we need to ensure it remains the same on the client even though
    // we don't need the <script> tag
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7_.createElement(react__WEBPACK_IMPORTED_MODULE_7_.Fragment, null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7_.createElement(DataRouterContext.Provider, {
        value: dataRouterContext
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7_.createElement(DataRouterStateContext.Provider, {
        value: state
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7_.createElement(Router, {
        basename: basename,
        location: state.location,
        navigationType: state.historyAction,
        navigator: navigator
    }, state.initialized ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7_.createElement(DataRoutes, {
        routes: router.routes,
        state: state
    }) : fallbackElement))), null);
}
function DataRoutes(_ref2) {
    var routes = _ref2.routes, state = _ref2.state;
    return useRoutesImpl(routes, undefined, state);
}
/**
 * A <Router> that stores all entries in memory.
 *
 * @see https://reactrouter.com/router-components/memory-router
 */ function MemoryRouter(_ref3) {
    var basename = _ref3.basename, children = _ref3.children, initialEntries = _ref3.initialEntries, initialIndex = _ref3.initialIndex, future = _ref3.future;
    var historyRef = react__WEBPACK_IMPORTED_MODULE_7_.useRef();
    if (historyRef.current == null) historyRef.current = (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.createMemoryHistory)({
        initialEntries: initialEntries,
        initialIndex: initialIndex,
        v5Compat: true
    });
    var history = historyRef.current;
    var _React_useState = (0, _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4_._)(react__WEBPACK_IMPORTED_MODULE_7_.useState({
        action: history.action,
        location: history.location
    }), 2), state = _React_useState[0], setStateImpl = _React_useState[1];
    var v7_startTransition = (future || {}).v7_startTransition;
    var setState = react__WEBPACK_IMPORTED_MODULE_7_.useCallback(function(newState) {
        v7_startTransition && startTransitionImpl ? startTransitionImpl(function() {
            return setStateImpl(newState);
        }) : setStateImpl(newState);
    }, [
        setStateImpl,
        v7_startTransition
    ]);
    react__WEBPACK_IMPORTED_MODULE_7_.useLayoutEffect(function() {
        return history.listen(setState);
    }, [
        history,
        setState
    ]);
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7_.createElement(Router, {
        basename: basename,
        children: children,
        location: state.location,
        navigationType: state.action,
        navigator: history
    });
}
/**
 * Changes the current location.
 *
 * Note: This API is mostly useful in React.Component subclasses that are not
 * able to use hooks. In functional components, we recommend you use the
 * `useNavigate` hook instead.
 *
 * @see https://reactrouter.com/components/navigate
 */ function Navigate(_ref4) {
    var to = _ref4.to, replace = _ref4.replace, state = _ref4.state, relative = _ref4.relative;
    !useInRouterContext() && (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.UNSAFE_invariant)(false, // the router loaded. We can help them understand how to avoid that.
    "<Navigate> may be used only in the context of a <Router> component.");
    (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.UNSAFE_warning)(!react__WEBPACK_IMPORTED_MODULE_7_.useContext(NavigationContext).static, "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");
    var matches = react__WEBPACK_IMPORTED_MODULE_7_.useContext(RouteContext).matches;
    var _useLocation = useLocation(), locationPathname = _useLocation.pathname;
    var navigate = useNavigate();
    // Resolve the path outside of the effect so that when effects run twice in
    // StrictMode they navigate to the same place
    var path = (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.resolveTo)(to, (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.UNSAFE_getPathContributingMatches)(matches).map(function(match) {
        return match.pathnameBase;
    }), locationPathname, relative === "path");
    var jsonPath = JSON.stringify(path);
    react__WEBPACK_IMPORTED_MODULE_7_.useEffect(function() {
        return navigate(JSON.parse(jsonPath), {
            replace: replace,
            state: state,
            relative: relative
        });
    }, [
        navigate,
        jsonPath,
        relative,
        replace,
        state
    ]);
    return null;
}
/**
 * Renders the child route's element, if there is one.
 *
 * @see https://reactrouter.com/components/outlet
 */ function Outlet(props) {
    return useOutlet(props.context);
}
/**
 * Declares an element that should be rendered at a certain URL path.
 *
 * @see https://reactrouter.com/components/route
 */ function Route(_props) {
    (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.UNSAFE_invariant)(false, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.");
}
/**
 * Provides location context for the rest of the app.
 *
 * Note: You usually won't render a <Router> directly. Instead, you'll render a
 * router that is more specific to your environment such as a <BrowserRouter>
 * in web browsers or a <StaticRouter> for server rendering.
 *
 * @see https://reactrouter.com/router-components/router
 */ function Router(_ref5) {
    var tmp = _ref5.basename, basenameProp = tmp === void 0 ? "/" : tmp, _ref5_children = _ref5.children, children = _ref5_children === void 0 ? null : _ref5_children, locationProp = _ref5.location, _ref5_navigationType = _ref5.navigationType, navigationType = _ref5_navigationType === void 0 ? _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.Action.Pop : _ref5_navigationType, navigator = _ref5.navigator, tmp1 = _ref5.static, staticProp = tmp1 === void 0 ? false : tmp1;
    !!useInRouterContext() && (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.UNSAFE_invariant)(false, "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");
    // Preserve trailing slashes on basename, so we can let the user control
    // the enforcement of trailing slashes throughout the app
    var basename = basenameProp.replace(/^\/*/, "/");
    var navigationContext = react__WEBPACK_IMPORTED_MODULE_7_.useMemo(function() {
        return {
            basename: basename,
            navigator: navigator,
            static: staticProp
        };
    }, [
        basename,
        navigator,
        staticProp
    ]);
    if (typeof locationProp === "string") locationProp = (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.parsePath)(locationProp);
    var _locationProp_pathname = locationProp.pathname, pathname = _locationProp_pathname === void 0 ? "/" : _locationProp_pathname, _locationProp_search = locationProp.search, search = _locationProp_search === void 0 ? "" : _locationProp_search, _locationProp_hash = locationProp.hash, hash = _locationProp_hash === void 0 ? "" : _locationProp_hash, _locationProp_state = locationProp.state, state = _locationProp_state === void 0 ? null : _locationProp_state, _locationProp_key = locationProp.key, key = _locationProp_key === void 0 ? "default" : _locationProp_key;
    var locationContext = react__WEBPACK_IMPORTED_MODULE_7_.useMemo(function() {
        var trailingPathname = (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.stripBasename)(pathname, basename);
        if (trailingPathname == null) return null;
        return {
            location: {
                pathname: trailingPathname,
                search: search,
                hash: hash,
                state: state,
                key: key
            },
            navigationType: navigationType
        };
    }, [
        basename,
        pathname,
        search,
        hash,
        state,
        key,
        navigationType
    ]);
    (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.UNSAFE_warning)(locationContext != null, "<Router basename=\"" + basename + "\"> is not able to match the URL " + ("\"" + pathname + search + hash + "\" because it does not start with the ") + "basename, so the <Router> won't render anything.");
    if (locationContext == null) return null;
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7_.createElement(NavigationContext.Provider, {
        value: navigationContext
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7_.createElement(LocationContext.Provider, {
        children: children,
        value: locationContext
    }));
}
/**
 * A container for a nested tree of <Route> elements that renders the branch
 * that best matches the current location.
 *
 * @see https://reactrouter.com/components/routes
 */ function Routes(_ref6) {
    var children = _ref6.children, location = _ref6.location;
    return useRoutes(createRoutesFromChildren(children), location);
}
/**
 * Component to use for rendering lazily loaded data from returning defer()
 * in a loader function
 */ function Await(_ref7) {
    var children = _ref7.children, errorElement = _ref7.errorElement, resolve = _ref7.resolve;
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7_.createElement(AwaitErrorBoundary, {
        resolve: resolve,
        errorElement: errorElement
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7_.createElement(ResolveAwait, null, children));
}
var AwaitRenderStatus = /*#__PURE__*/ function(AwaitRenderStatus) {
    AwaitRenderStatus[AwaitRenderStatus["pending"] = 0] = "pending";
    AwaitRenderStatus[AwaitRenderStatus["success"] = 1] = "success";
    AwaitRenderStatus[AwaitRenderStatus["error"] = 2] = "error";
    return AwaitRenderStatus;
}(AwaitRenderStatus || {});
var neverSettledPromise = new Promise(function() {});
var AwaitErrorBoundary = function(_React_Component) {
    "use strict";
    (0, _swc_helpers_inherits__WEBPACK_IMPORTED_MODULE_2_._)(AwaitErrorBoundary, _React_Component);
    var _super = (0, _swc_helpers_create_super__WEBPACK_IMPORTED_MODULE_6_._)(AwaitErrorBoundary);
    function AwaitErrorBoundary(props) {
        (0, _swc_helpers_class_call_check__WEBPACK_IMPORTED_MODULE_0_._)(this, AwaitErrorBoundary);
        var _this;
        _this = _super.call(this, props);
        _this.state = {
            error: null
        };
        return _this;
    }
    (0, _swc_helpers_create_class__WEBPACK_IMPORTED_MODULE_1_._)(AwaitErrorBoundary, [
        {
            key: "componentDidCatch",
            value: function componentDidCatch(error, errorInfo) {
                console.error("<Await> caught the following error during render", error, errorInfo);
            }
        },
        {
            key: "render",
            value: function render() {
                var _this_props = this.props, children = _this_props.children, errorElement = _this_props.errorElement, resolve = _this_props.resolve;
                var promise = null;
                var status = AwaitRenderStatus.pending;
                if (!(0, _swc_helpers_instanceof__WEBPACK_IMPORTED_MODULE_3_._)(resolve, Promise)) {
                    // Didn't get a promise - provide as a resolved promise
                    status = AwaitRenderStatus.success;
                    promise = Promise.resolve();
                    Object.defineProperty(promise, "_tracked", {
                        get: function() {
                            return true;
                        }
                    });
                    Object.defineProperty(promise, "_data", {
                        get: function() {
                            return resolve;
                        }
                    });
                } else if (this.state.error) {
                    // Caught a render error, provide it as a rejected promise
                    status = AwaitRenderStatus.error;
                    var renderError = this.state.error;
                    promise = Promise.reject().catch(function() {}); // Avoid unhandled rejection warnings
                    Object.defineProperty(promise, "_tracked", {
                        get: function() {
                            return true;
                        }
                    });
                    Object.defineProperty(promise, "_error", {
                        get: function() {
                            return renderError;
                        }
                    });
                } else if (resolve._tracked) {
                    // Already tracked promise - check contents
                    promise = resolve;
                    status = promise._error !== undefined ? AwaitRenderStatus.error : promise._data !== undefined ? AwaitRenderStatus.success : AwaitRenderStatus.pending;
                } else {
                    // Raw (untracked) promise - track it
                    status = AwaitRenderStatus.pending;
                    Object.defineProperty(resolve, "_tracked", {
                        get: function() {
                            return true;
                        }
                    });
                    promise = resolve.then(function(data) {
                        return Object.defineProperty(resolve, "_data", {
                            get: function() {
                                return data;
                            }
                        });
                    }, function(error) {
                        return Object.defineProperty(resolve, "_error", {
                            get: function() {
                                return error;
                            }
                        });
                    });
                }
                if (status === AwaitRenderStatus.error && (0, _swc_helpers_instanceof__WEBPACK_IMPORTED_MODULE_3_._)(promise._error, _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.AbortedDeferredError)) // Freeze the UI by throwing a never resolved promise
                throw neverSettledPromise;
                if (status === AwaitRenderStatus.error && !errorElement) // No errorElement, throw to the nearest route-level error boundary
                throw promise._error;
                if (status === AwaitRenderStatus.error) // Render via our errorElement
                return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7_.createElement(AwaitContext.Provider, {
                    value: promise,
                    children: errorElement
                });
                if (status === AwaitRenderStatus.success) // Render children with resolved value
                return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7_.createElement(AwaitContext.Provider, {
                    value: promise,
                    children: children
                });
                // Throw to the suspense boundary
                throw promise;
            }
        }
    ], [
        {
            key: "getDerivedStateFromError",
            value: function getDerivedStateFromError(error) {
                return {
                    error: error
                };
            }
        }
    ]);
    return AwaitErrorBoundary;
}(react__WEBPACK_IMPORTED_MODULE_7_.Component);
/**
 * @private
 * Indirection to leverage useAsyncValue for a render-prop API on <Await>
 */ function ResolveAwait(_ref8) {
    var children = _ref8.children;
    var data = useAsyncValue();
    var toRender = typeof children === "function" ? children(data) : children;
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7_.createElement(react__WEBPACK_IMPORTED_MODULE_7_.Fragment, null, toRender);
}
///////////////////////////////////////////////////////////////////////////////
// UTILS
///////////////////////////////////////////////////////////////////////////////
/**
 * Creates a route config from a React "children" object, which is usually
 * either a `<Route>` element or an array of them. Used internally by
 * `<Routes>` to create a route config from its children.
 *
 * @see https://reactrouter.com/utils/create-routes-from-children
 */ function createRoutesFromChildren(children, parentPath) {
    if (parentPath === void 0) parentPath = [];
    var routes = [];
    react__WEBPACK_IMPORTED_MODULE_7_.Children.forEach(children, function(element, index) {
        if (!/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7_.isValidElement(element)) // Ignore non-elements. This allows people to more easily inline
        // conditionals in their route config.
        return;
        var treePath = (0, _swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_5_._)(parentPath).concat([
            index
        ]);
        if (element.type === react__WEBPACK_IMPORTED_MODULE_7_.Fragment) {
            // Transparently support React.Fragment and its children.
            routes.push.apply(routes, createRoutesFromChildren(element.props.children, treePath));
            return;
        }
        !(element.type === Route) && (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.UNSAFE_invariant)(false, "[" + (typeof element.type === "string" ? element.type : element.type.name) + "] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>");
        !(!element.props.index || !element.props.children) && (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.UNSAFE_invariant)(false, "An index route cannot have child routes.");
        var route = {
            id: element.props.id || treePath.join("-"),
            caseSensitive: element.props.caseSensitive,
            element: element.props.element,
            Component: element.props.Component,
            index: element.props.index,
            path: element.props.path,
            loader: element.props.loader,
            action: element.props.action,
            errorElement: element.props.errorElement,
            ErrorBoundary: element.props.ErrorBoundary,
            hasErrorBoundary: element.props.ErrorBoundary != null || element.props.errorElement != null,
            shouldRevalidate: element.props.shouldRevalidate,
            handle: element.props.handle,
            lazy: element.props.lazy
        };
        if (element.props.children) route.children = createRoutesFromChildren(element.props.children, treePath);
        routes.push(route);
    });
    return routes;
}
/**
 * Renders the result of `matchRoutes()` into a React element.
 */ function renderMatches(matches) {
    return _renderMatches(matches);
}
function mapRouteProperties(route) {
    var updates = {
        // Note: this check also occurs in createRoutesFromChildren so update
        // there if you change this -- please and thank you!
        hasErrorBoundary: route.ErrorBoundary != null || route.errorElement != null
    };
    if (route.Component) {
        if (route.element) (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.UNSAFE_warning)(false, "You should not include both `Component` and `element` on your route - `Component` will be used.");
        Object.assign(updates, {
            element: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7_.createElement(route.Component),
            Component: undefined
        });
    }
    if (route.ErrorBoundary) {
        if (route.errorElement) (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.UNSAFE_warning)(false, "You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used.");
        Object.assign(updates, {
            errorElement: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7_.createElement(route.ErrorBoundary),
            ErrorBoundary: undefined
        });
    }
    return updates;
}
function createMemoryRouter(routes, opts) {
    return (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.createRouter)({
        basename: opts == null ? void 0 : opts.basename,
        future: _extends({}, opts == null ? void 0 : opts.future, {
            v7_prependBasename: true
        }),
        history: (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.createMemoryHistory)({
            initialEntries: opts == null ? void 0 : opts.initialEntries,
            initialIndex: opts == null ? void 0 : opts.initialIndex
        }),
        hydrationData: opts == null ? void 0 : opts.hydrationData,
        routes: routes,
        mapRouteProperties: mapRouteProperties
    }).initialize();
}
 //# sourceMappingURL=index.js.map
},

}]);
//# sourceMappingURL=lib-router.js.map