'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var GlobalStateContext = react.createContext({});
var GlobalStateProvider = function (_a) {
    var children = _a.children;
    var _b = react.useState({}), globalState = _b[0], setGlobalState = _b[1];
    return (jsxRuntime.jsx(GlobalStateContext.Provider, __assign({ value: {
            globalState: globalState,
            setGlobalState: setGlobalState
        } }, { children: children }), void 0));
};
var useGlobalStateContext = function () {
    var context = react.useContext(GlobalStateContext);
    if (context === undefined) {
        throw new Error('useGlobalStateContext must be used within an GlobalStateContext.Provider');
    }
    return context;
};

var useGlobalState = function () {
    var _a = useGlobalStateContext(), globalState = _a.globalState, setGlobalState = _a.setGlobalState;
    return { globalState: globalState, setGlobalState: setGlobalState };
};

exports.GlobalStateProvider = GlobalStateProvider;
exports.useGlobalState = useGlobalState;
