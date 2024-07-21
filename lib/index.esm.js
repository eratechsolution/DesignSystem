import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import React, { forwardRef, useEffect, useRef, useLayoutEffect, useId, useState, useCallback, useContext, useMemo } from 'react';
import { createPortal } from 'react-dom';

/******************************************************************************
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
/* global Reflect, Promise, SuppressedError, Symbol */


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

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var propTypes = {exports: {}};

var reactIs = {exports: {}};

var reactIs_production_min = {};

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactIs_production_min;

function requireReactIs_production_min () {
	if (hasRequiredReactIs_production_min) return reactIs_production_min;
	hasRequiredReactIs_production_min = 1;
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
	Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
	function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}reactIs_production_min.AsyncMode=l;reactIs_production_min.ConcurrentMode=m;reactIs_production_min.ContextConsumer=k;reactIs_production_min.ContextProvider=h;reactIs_production_min.Element=c;reactIs_production_min.ForwardRef=n;reactIs_production_min.Fragment=e;reactIs_production_min.Lazy=t;reactIs_production_min.Memo=r;reactIs_production_min.Portal=d;
	reactIs_production_min.Profiler=g;reactIs_production_min.StrictMode=f;reactIs_production_min.Suspense=p;reactIs_production_min.isAsyncMode=function(a){return A(a)||z(a)===l};reactIs_production_min.isConcurrentMode=A;reactIs_production_min.isContextConsumer=function(a){return z(a)===k};reactIs_production_min.isContextProvider=function(a){return z(a)===h};reactIs_production_min.isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};reactIs_production_min.isForwardRef=function(a){return z(a)===n};reactIs_production_min.isFragment=function(a){return z(a)===e};reactIs_production_min.isLazy=function(a){return z(a)===t};
	reactIs_production_min.isMemo=function(a){return z(a)===r};reactIs_production_min.isPortal=function(a){return z(a)===d};reactIs_production_min.isProfiler=function(a){return z(a)===g};reactIs_production_min.isStrictMode=function(a){return z(a)===f};reactIs_production_min.isSuspense=function(a){return z(a)===p};
	reactIs_production_min.isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};reactIs_production_min.typeOf=z;
	return reactIs_production_min;
}

var reactIs_development = {};

/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactIs_development;

function requireReactIs_development () {
	if (hasRequiredReactIs_development) return reactIs_development;
	hasRequiredReactIs_development = 1;



	if (process.env.NODE_ENV !== "production") {
	  (function() {

	// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
	// nor polyfill, then a plain number is used for performance.
	var hasSymbol = typeof Symbol === 'function' && Symbol.for;
	var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
	var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
	var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
	var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
	var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
	var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
	var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
	// (unstable) APIs that have been removed. Can we remove the symbols?

	var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
	var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
	var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
	var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
	var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
	var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
	var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
	var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
	var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
	var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
	var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

	function isValidElementType(type) {
	  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
	  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
	}

	function typeOf(object) {
	  if (typeof object === 'object' && object !== null) {
	    var $$typeof = object.$$typeof;

	    switch ($$typeof) {
	      case REACT_ELEMENT_TYPE:
	        var type = object.type;

	        switch (type) {
	          case REACT_ASYNC_MODE_TYPE:
	          case REACT_CONCURRENT_MODE_TYPE:
	          case REACT_FRAGMENT_TYPE:
	          case REACT_PROFILER_TYPE:
	          case REACT_STRICT_MODE_TYPE:
	          case REACT_SUSPENSE_TYPE:
	            return type;

	          default:
	            var $$typeofType = type && type.$$typeof;

	            switch ($$typeofType) {
	              case REACT_CONTEXT_TYPE:
	              case REACT_FORWARD_REF_TYPE:
	              case REACT_LAZY_TYPE:
	              case REACT_MEMO_TYPE:
	              case REACT_PROVIDER_TYPE:
	                return $$typeofType;

	              default:
	                return $$typeof;
	            }

	        }

	      case REACT_PORTAL_TYPE:
	        return $$typeof;
	    }
	  }

	  return undefined;
	} // AsyncMode is deprecated along with isAsyncMode

	var AsyncMode = REACT_ASYNC_MODE_TYPE;
	var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
	var ContextConsumer = REACT_CONTEXT_TYPE;
	var ContextProvider = REACT_PROVIDER_TYPE;
	var Element = REACT_ELEMENT_TYPE;
	var ForwardRef = REACT_FORWARD_REF_TYPE;
	var Fragment = REACT_FRAGMENT_TYPE;
	var Lazy = REACT_LAZY_TYPE;
	var Memo = REACT_MEMO_TYPE;
	var Portal = REACT_PORTAL_TYPE;
	var Profiler = REACT_PROFILER_TYPE;
	var StrictMode = REACT_STRICT_MODE_TYPE;
	var Suspense = REACT_SUSPENSE_TYPE;
	var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

	function isAsyncMode(object) {
	  {
	    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
	      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

	      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
	    }
	  }

	  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
	}
	function isConcurrentMode(object) {
	  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
	}
	function isContextConsumer(object) {
	  return typeOf(object) === REACT_CONTEXT_TYPE;
	}
	function isContextProvider(object) {
	  return typeOf(object) === REACT_PROVIDER_TYPE;
	}
	function isElement(object) {
	  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	}
	function isForwardRef(object) {
	  return typeOf(object) === REACT_FORWARD_REF_TYPE;
	}
	function isFragment(object) {
	  return typeOf(object) === REACT_FRAGMENT_TYPE;
	}
	function isLazy(object) {
	  return typeOf(object) === REACT_LAZY_TYPE;
	}
	function isMemo(object) {
	  return typeOf(object) === REACT_MEMO_TYPE;
	}
	function isPortal(object) {
	  return typeOf(object) === REACT_PORTAL_TYPE;
	}
	function isProfiler(object) {
	  return typeOf(object) === REACT_PROFILER_TYPE;
	}
	function isStrictMode(object) {
	  return typeOf(object) === REACT_STRICT_MODE_TYPE;
	}
	function isSuspense(object) {
	  return typeOf(object) === REACT_SUSPENSE_TYPE;
	}

	reactIs_development.AsyncMode = AsyncMode;
	reactIs_development.ConcurrentMode = ConcurrentMode;
	reactIs_development.ContextConsumer = ContextConsumer;
	reactIs_development.ContextProvider = ContextProvider;
	reactIs_development.Element = Element;
	reactIs_development.ForwardRef = ForwardRef;
	reactIs_development.Fragment = Fragment;
	reactIs_development.Lazy = Lazy;
	reactIs_development.Memo = Memo;
	reactIs_development.Portal = Portal;
	reactIs_development.Profiler = Profiler;
	reactIs_development.StrictMode = StrictMode;
	reactIs_development.Suspense = Suspense;
	reactIs_development.isAsyncMode = isAsyncMode;
	reactIs_development.isConcurrentMode = isConcurrentMode;
	reactIs_development.isContextConsumer = isContextConsumer;
	reactIs_development.isContextProvider = isContextProvider;
	reactIs_development.isElement = isElement;
	reactIs_development.isForwardRef = isForwardRef;
	reactIs_development.isFragment = isFragment;
	reactIs_development.isLazy = isLazy;
	reactIs_development.isMemo = isMemo;
	reactIs_development.isPortal = isPortal;
	reactIs_development.isProfiler = isProfiler;
	reactIs_development.isStrictMode = isStrictMode;
	reactIs_development.isSuspense = isSuspense;
	reactIs_development.isValidElementType = isValidElementType;
	reactIs_development.typeOf = typeOf;
	  })();
	}
	return reactIs_development;
}

var hasRequiredReactIs;

function requireReactIs () {
	if (hasRequiredReactIs) return reactIs.exports;
	hasRequiredReactIs = 1;

	if (process.env.NODE_ENV === 'production') {
	  reactIs.exports = requireReactIs_production_min();
	} else {
	  reactIs.exports = requireReactIs_development();
	}
	return reactIs.exports;
}

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

var objectAssign;
var hasRequiredObjectAssign;

function requireObjectAssign () {
	if (hasRequiredObjectAssign) return objectAssign;
	hasRequiredObjectAssign = 1;
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};
	return objectAssign;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret_1;
var hasRequiredReactPropTypesSecret;

function requireReactPropTypesSecret () {
	if (hasRequiredReactPropTypesSecret) return ReactPropTypesSecret_1;
	hasRequiredReactPropTypesSecret = 1;

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	ReactPropTypesSecret_1 = ReactPropTypesSecret;
	return ReactPropTypesSecret_1;
}

var has;
var hasRequiredHas;

function requireHas () {
	if (hasRequiredHas) return has;
	hasRequiredHas = 1;
	has = Function.call.bind(Object.prototype.hasOwnProperty);
	return has;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var checkPropTypes_1;
var hasRequiredCheckPropTypes;

function requireCheckPropTypes () {
	if (hasRequiredCheckPropTypes) return checkPropTypes_1;
	hasRequiredCheckPropTypes = 1;

	var printWarning = function() {};

	if (process.env.NODE_ENV !== 'production') {
	  var ReactPropTypesSecret = requireReactPropTypesSecret();
	  var loggedTypeFailures = {};
	  var has = requireHas();

	  printWarning = function(text) {
	    var message = 'Warning: ' + text;
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) { /**/ }
	  };
	}

	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?Function} getStack Returns the component stack.
	 * @private
	 */
	function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
	  if (process.env.NODE_ENV !== 'production') {
	    for (var typeSpecName in typeSpecs) {
	      if (has(typeSpecs, typeSpecName)) {
	        var error;
	        // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.
	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          if (typeof typeSpecs[typeSpecName] !== 'function') {
	            var err = Error(
	              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
	              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' +
	              'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
	            );
	            err.name = 'Invariant Violation';
	            throw err;
	          }
	          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
	        } catch (ex) {
	          error = ex;
	        }
	        if (error && !(error instanceof Error)) {
	          printWarning(
	            (componentName || 'React class') + ': type specification of ' +
	            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
	            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
	            'You may have forgotten to pass an argument to the type checker ' +
	            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
	            'shape all require an argument).'
	          );
	        }
	        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error.message] = true;

	          var stack = getStack ? getStack() : '';

	          printWarning(
	            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
	          );
	        }
	      }
	    }
	  }
	}

	/**
	 * Resets warning cache when testing.
	 *
	 * @private
	 */
	checkPropTypes.resetWarningCache = function() {
	  if (process.env.NODE_ENV !== 'production') {
	    loggedTypeFailures = {};
	  }
	};

	checkPropTypes_1 = checkPropTypes;
	return checkPropTypes_1;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var factoryWithTypeCheckers;
var hasRequiredFactoryWithTypeCheckers;

function requireFactoryWithTypeCheckers () {
	if (hasRequiredFactoryWithTypeCheckers) return factoryWithTypeCheckers;
	hasRequiredFactoryWithTypeCheckers = 1;

	var ReactIs = requireReactIs();
	var assign = requireObjectAssign();

	var ReactPropTypesSecret = requireReactPropTypesSecret();
	var has = requireHas();
	var checkPropTypes = requireCheckPropTypes();

	var printWarning = function() {};

	if (process.env.NODE_ENV !== 'production') {
	  printWarning = function(text) {
	    var message = 'Warning: ' + text;
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };
	}

	function emptyFunctionThatReturnsNull() {
	  return null;
	}

	factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
	  /* global Symbol */
	  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

	  /**
	   * Returns the iterator method function contained on the iterable object.
	   *
	   * Be sure to invoke the function with the iterable as context:
	   *
	   *     var iteratorFn = getIteratorFn(myIterable);
	   *     if (iteratorFn) {
	   *       var iterator = iteratorFn.call(myIterable);
	   *       ...
	   *     }
	   *
	   * @param {?object} maybeIterable
	   * @return {?function}
	   */
	  function getIteratorFn(maybeIterable) {
	    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }

	  /**
	   * Collection of methods that allow declaration and validation of props that are
	   * supplied to React components. Example usage:
	   *
	   *   var Props = require('ReactPropTypes');
	   *   var MyArticle = React.createClass({
	   *     propTypes: {
	   *       // An optional string prop named "description".
	   *       description: Props.string,
	   *
	   *       // A required enum prop named "category".
	   *       category: Props.oneOf(['News','Photos']).isRequired,
	   *
	   *       // A prop named "dialog" that requires an instance of Dialog.
	   *       dialog: Props.instanceOf(Dialog).isRequired
	   *     },
	   *     render: function() { ... }
	   *   });
	   *
	   * A more formal specification of how these methods are used:
	   *
	   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	   *   decl := ReactPropTypes.{type}(.isRequired)?
	   *
	   * Each and every declaration produces a function with the same signature. This
	   * allows the creation of custom validation functions. For example:
	   *
	   *  var MyLink = React.createClass({
	   *    propTypes: {
	   *      // An optional string or URI prop named "href".
	   *      href: function(props, propName, componentName) {
	   *        var propValue = props[propName];
	   *        if (propValue != null && typeof propValue !== 'string' &&
	   *            !(propValue instanceof URI)) {
	   *          return new Error(
	   *            'Expected a string or an URI for ' + propName + ' in ' +
	   *            componentName
	   *          );
	   *        }
	   *      }
	   *    },
	   *    render: function() {...}
	   *  });
	   *
	   * @internal
	   */

	  var ANONYMOUS = '<<anonymous>>';

	  // Important!
	  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
	  var ReactPropTypes = {
	    array: createPrimitiveTypeChecker('array'),
	    bigint: createPrimitiveTypeChecker('bigint'),
	    bool: createPrimitiveTypeChecker('boolean'),
	    func: createPrimitiveTypeChecker('function'),
	    number: createPrimitiveTypeChecker('number'),
	    object: createPrimitiveTypeChecker('object'),
	    string: createPrimitiveTypeChecker('string'),
	    symbol: createPrimitiveTypeChecker('symbol'),

	    any: createAnyTypeChecker(),
	    arrayOf: createArrayOfTypeChecker,
	    element: createElementTypeChecker(),
	    elementType: createElementTypeTypeChecker(),
	    instanceOf: createInstanceTypeChecker,
	    node: createNodeChecker(),
	    objectOf: createObjectOfTypeChecker,
	    oneOf: createEnumTypeChecker,
	    oneOfType: createUnionTypeChecker,
	    shape: createShapeTypeChecker,
	    exact: createStrictShapeTypeChecker,
	  };

	  /**
	   * inlined Object.is polyfill to avoid requiring consumers ship their own
	   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	   */
	  /*eslint-disable no-self-compare*/
	  function is(x, y) {
	    // SameValue algorithm
	    if (x === y) {
	      // Steps 1-5, 7-10
	      // Steps 6.b-6.e: +0 != -0
	      return x !== 0 || 1 / x === 1 / y;
	    } else {
	      // Step 6.a: NaN == NaN
	      return x !== x && y !== y;
	    }
	  }
	  /*eslint-enable no-self-compare*/

	  /**
	   * We use an Error-like object for backward compatibility as people may call
	   * PropTypes directly and inspect their output. However, we don't use real
	   * Errors anymore. We don't inspect their stack anyway, and creating them
	   * is prohibitively expensive if they are created too often, such as what
	   * happens in oneOfType() for any type before the one that matched.
	   */
	  function PropTypeError(message, data) {
	    this.message = message;
	    this.data = data && typeof data === 'object' ? data: {};
	    this.stack = '';
	  }
	  // Make `instanceof Error` still work for returned errors.
	  PropTypeError.prototype = Error.prototype;

	  function createChainableTypeChecker(validate) {
	    if (process.env.NODE_ENV !== 'production') {
	      var manualPropTypeCallCache = {};
	      var manualPropTypeWarningCount = 0;
	    }
	    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
	      componentName = componentName || ANONYMOUS;
	      propFullName = propFullName || propName;

	      if (secret !== ReactPropTypesSecret) {
	        if (throwOnDirectAccess) {
	          // New behavior only for users of `prop-types` package
	          var err = new Error(
	            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	            'Use `PropTypes.checkPropTypes()` to call them. ' +
	            'Read more at http://fb.me/use-check-prop-types'
	          );
	          err.name = 'Invariant Violation';
	          throw err;
	        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
	          // Old behavior for people using React.PropTypes
	          var cacheKey = componentName + ':' + propName;
	          if (
	            !manualPropTypeCallCache[cacheKey] &&
	            // Avoid spamming the console because they are often not actionable except for lib authors
	            manualPropTypeWarningCount < 3
	          ) {
	            printWarning(
	              'You are manually calling a React.PropTypes validation ' +
	              'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' +
	              'and will throw in the standalone `prop-types` package. ' +
	              'You may be seeing this warning due to a third-party PropTypes ' +
	              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
	            );
	            manualPropTypeCallCache[cacheKey] = true;
	            manualPropTypeWarningCount++;
	          }
	        }
	      }
	      if (props[propName] == null) {
	        if (isRequired) {
	          if (props[propName] === null) {
	            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
	          }
	          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
	        }
	        return null;
	      } else {
	        return validate(props, propName, componentName, location, propFullName);
	      }
	    }

	    var chainedCheckType = checkType.bind(null, false);
	    chainedCheckType.isRequired = checkType.bind(null, true);

	    return chainedCheckType;
	  }

	  function createPrimitiveTypeChecker(expectedType) {
	    function validate(props, propName, componentName, location, propFullName, secret) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== expectedType) {
	        // `propValue` being instance of, say, date/regexp, pass the 'object'
	        // check, but we can offer a more precise error message here rather than
	        // 'of type `object`'.
	        var preciseType = getPreciseType(propValue);

	        return new PropTypeError(
	          'Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'),
	          {expectedType: expectedType}
	        );
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createAnyTypeChecker() {
	    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
	  }

	  function createArrayOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	      }
	      var propValue = props[propName];
	      if (!Array.isArray(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	      }
	      for (var i = 0; i < propValue.length; i++) {
	        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createElementTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!isValidElement(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createElementTypeTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!ReactIs.isValidElementType(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createInstanceTypeChecker(expectedClass) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!(props[propName] instanceof expectedClass)) {
	        var expectedClassName = expectedClass.name || ANONYMOUS;
	        var actualClassName = getClassName(props[propName]);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createEnumTypeChecker(expectedValues) {
	    if (!Array.isArray(expectedValues)) {
	      if (process.env.NODE_ENV !== 'production') {
	        if (arguments.length > 1) {
	          printWarning(
	            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
	            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
	          );
	        } else {
	          printWarning('Invalid argument supplied to oneOf, expected an array.');
	        }
	      }
	      return emptyFunctionThatReturnsNull;
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      for (var i = 0; i < expectedValues.length; i++) {
	        if (is(propValue, expectedValues[i])) {
	          return null;
	        }
	      }

	      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
	        var type = getPreciseType(value);
	        if (type === 'symbol') {
	          return String(value);
	        }
	        return value;
	      });
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createObjectOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
	      }
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	      }
	      for (var key in propValue) {
	        if (has(propValue, key)) {
	          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	          if (error instanceof Error) {
	            return error;
	          }
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createUnionTypeChecker(arrayOfTypeCheckers) {
	    if (!Array.isArray(arrayOfTypeCheckers)) {
	      process.env.NODE_ENV !== 'production' ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
	      return emptyFunctionThatReturnsNull;
	    }

	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (typeof checker !== 'function') {
	        printWarning(
	          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
	          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
	        );
	        return emptyFunctionThatReturnsNull;
	      }
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      var expectedTypes = [];
	      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	        var checker = arrayOfTypeCheckers[i];
	        var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
	        if (checkerResult == null) {
	          return null;
	        }
	        if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
	          expectedTypes.push(checkerResult.data.expectedType);
	        }
	      }
	      var expectedTypesMessage = (expectedTypes.length > 0) ? ', expected one of type [' + expectedTypes.join(', ') + ']': '';
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createNodeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!isNode(props[propName])) {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function invalidValidatorError(componentName, location, propFullName, key, type) {
	    return new PropTypeError(
	      (componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' +
	      'it must be a function, usually from the `prop-types` package, but received `' + type + '`.'
	    );
	  }

	  function createShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      for (var key in shapeTypes) {
	        var checker = shapeTypes[key];
	        if (typeof checker !== 'function') {
	          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createStrictShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      // We need to check all keys in case some are required but missing from props.
	      var allKeys = assign({}, props[propName], shapeTypes);
	      for (var key in allKeys) {
	        var checker = shapeTypes[key];
	        if (has(shapeTypes, key) && typeof checker !== 'function') {
	          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
	        }
	        if (!checker) {
	          return new PropTypeError(
	            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
	            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
	            '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  ')
	          );
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }

	    return createChainableTypeChecker(validate);
	  }

	  function isNode(propValue) {
	    switch (typeof propValue) {
	      case 'number':
	      case 'string':
	      case 'undefined':
	        return true;
	      case 'boolean':
	        return !propValue;
	      case 'object':
	        if (Array.isArray(propValue)) {
	          return propValue.every(isNode);
	        }
	        if (propValue === null || isValidElement(propValue)) {
	          return true;
	        }

	        var iteratorFn = getIteratorFn(propValue);
	        if (iteratorFn) {
	          var iterator = iteratorFn.call(propValue);
	          var step;
	          if (iteratorFn !== propValue.entries) {
	            while (!(step = iterator.next()).done) {
	              if (!isNode(step.value)) {
	                return false;
	              }
	            }
	          } else {
	            // Iterator will provide entry [k,v] tuples rather than values.
	            while (!(step = iterator.next()).done) {
	              var entry = step.value;
	              if (entry) {
	                if (!isNode(entry[1])) {
	                  return false;
	                }
	              }
	            }
	          }
	        } else {
	          return false;
	        }

	        return true;
	      default:
	        return false;
	    }
	  }

	  function isSymbol(propType, propValue) {
	    // Native Symbol.
	    if (propType === 'symbol') {
	      return true;
	    }

	    // falsy value can't be a Symbol
	    if (!propValue) {
	      return false;
	    }

	    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	    if (propValue['@@toStringTag'] === 'Symbol') {
	      return true;
	    }

	    // Fallback for non-spec compliant Symbols which are polyfilled.
	    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
	      return true;
	    }

	    return false;
	  }

	  // Equivalent of `typeof` but with special handling for array and regexp.
	  function getPropType(propValue) {
	    var propType = typeof propValue;
	    if (Array.isArray(propValue)) {
	      return 'array';
	    }
	    if (propValue instanceof RegExp) {
	      // Old webkits (at least until Android 4.0) return 'function' rather than
	      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	      // passes PropTypes.object.
	      return 'object';
	    }
	    if (isSymbol(propType, propValue)) {
	      return 'symbol';
	    }
	    return propType;
	  }

	  // This handles more types than `getPropType`. Only used for error messages.
	  // See `createPrimitiveTypeChecker`.
	  function getPreciseType(propValue) {
	    if (typeof propValue === 'undefined' || propValue === null) {
	      return '' + propValue;
	    }
	    var propType = getPropType(propValue);
	    if (propType === 'object') {
	      if (propValue instanceof Date) {
	        return 'date';
	      } else if (propValue instanceof RegExp) {
	        return 'regexp';
	      }
	    }
	    return propType;
	  }

	  // Returns a string that is postfixed to a warning about an invalid type.
	  // For example, "undefined" or "of type array"
	  function getPostfixForTypeWarning(value) {
	    var type = getPreciseType(value);
	    switch (type) {
	      case 'array':
	      case 'object':
	        return 'an ' + type;
	      case 'boolean':
	      case 'date':
	      case 'regexp':
	        return 'a ' + type;
	      default:
	        return type;
	    }
	  }

	  // Returns class name of the object, if any.
	  function getClassName(propValue) {
	    if (!propValue.constructor || !propValue.constructor.name) {
	      return ANONYMOUS;
	    }
	    return propValue.constructor.name;
	  }

	  ReactPropTypes.checkPropTypes = checkPropTypes;
	  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};
	return factoryWithTypeCheckers;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var factoryWithThrowingShims;
var hasRequiredFactoryWithThrowingShims;

function requireFactoryWithThrowingShims () {
	if (hasRequiredFactoryWithThrowingShims) return factoryWithThrowingShims;
	hasRequiredFactoryWithThrowingShims = 1;

	var ReactPropTypesSecret = requireReactPropTypesSecret();

	function emptyFunction() {}
	function emptyFunctionWithReset() {}
	emptyFunctionWithReset.resetWarningCache = emptyFunction;

	factoryWithThrowingShims = function() {
	  function shim(props, propName, componentName, location, propFullName, secret) {
	    if (secret === ReactPropTypesSecret) {
	      // It is still safe when called from React.
	      return;
	    }
	    var err = new Error(
	      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	      'Use PropTypes.checkPropTypes() to call them. ' +
	      'Read more at http://fb.me/use-check-prop-types'
	    );
	    err.name = 'Invariant Violation';
	    throw err;
	  }	  shim.isRequired = shim;
	  function getShim() {
	    return shim;
	  }	  // Important!
	  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
	  var ReactPropTypes = {
	    array: shim,
	    bigint: shim,
	    bool: shim,
	    func: shim,
	    number: shim,
	    object: shim,
	    string: shim,
	    symbol: shim,

	    any: shim,
	    arrayOf: getShim,
	    element: shim,
	    elementType: shim,
	    instanceOf: getShim,
	    node: shim,
	    objectOf: getShim,
	    oneOf: getShim,
	    oneOfType: getShim,
	    shape: getShim,
	    exact: getShim,

	    checkPropTypes: emptyFunctionWithReset,
	    resetWarningCache: emptyFunction
	  };

	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};
	return factoryWithThrowingShims;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var ReactIs = requireReactIs();

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  propTypes.exports = requireFactoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  propTypes.exports = requireFactoryWithThrowingShims()();
}

var propTypesExports = propTypes.exports;
var PropTypes = /*@__PURE__*/getDefaultExportFromCjs(propTypesExports);

function _extends$b() { _extends$b = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$b.apply(this, arguments); }

function _objectWithoutProperties$b(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$b(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$b(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var AlertCircle = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$b(_ref, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends$b({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "8",
    x2: "12",
    y2: "12"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "16",
    x2: "12.01",
    y2: "16"
  }));
});
AlertCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
AlertCircle.displayName = 'AlertCircle';
var AlertCircle$1 = AlertCircle;

function _extends$a() { _extends$a = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$a.apply(this, arguments); }

function _objectWithoutProperties$a(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$a(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$a(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Check = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$a(_ref, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends$a({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React.createElement("polyline", {
    points: "20 6 9 17 4 12"
  }));
});
Check.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Check.displayName = 'Check';
var Check$1 = Check;

function _extends$9() { _extends$9 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$9.apply(this, arguments); }

function _objectWithoutProperties$9(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$9(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$9(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var ChevronDown = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$9(_ref, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends$9({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React.createElement("polyline", {
    points: "6 9 12 15 18 9"
  }));
});
ChevronDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
ChevronDown.displayName = 'ChevronDown';
var ChevronDown$1 = ChevronDown;

function _extends$8() { _extends$8 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$8.apply(this, arguments); }

function _objectWithoutProperties$8(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$8(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$8(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var ChevronLeft = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$8(_ref, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends$8({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React.createElement("polyline", {
    points: "15 18 9 12 15 6"
  }));
});
ChevronLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
ChevronLeft.displayName = 'ChevronLeft';
var ChevronLeft$1 = ChevronLeft;

function _extends$7() { _extends$7 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$7.apply(this, arguments); }

function _objectWithoutProperties$7(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$7(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$7(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Clock = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$7(_ref, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends$7({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "12 6 12 12 16 14"
  }));
});
Clock.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Clock.displayName = 'Clock';
var Clock$1 = Clock;

function _extends$6() { _extends$6 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$6.apply(this, arguments); }

function _objectWithoutProperties$6(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$6(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$6(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Copy = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$6(_ref, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends$6({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React.createElement("rect", {
    x: "9",
    y: "9",
    width: "13",
    height: "13",
    rx: "2",
    ry: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
  }));
});
Copy.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Copy.displayName = 'Copy';
var Copy$1 = Copy;

function _extends$5() { _extends$5 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$5.apply(this, arguments); }

function _objectWithoutProperties$5(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$5(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$5(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var ExternalLink = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$5(_ref, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends$5({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React.createElement("path", {
    d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "15 3 21 3 21 9"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "10",
    y1: "14",
    x2: "21",
    y2: "3"
  }));
});
ExternalLink.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
ExternalLink.displayName = 'ExternalLink';
var ExternalLink$1 = ExternalLink;

function _extends$4() { _extends$4 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$4.apply(this, arguments); }

function _objectWithoutProperties$4(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$4(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$4(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var LogOut = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$4(_ref, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends$4({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React.createElement("path", {
    d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "16 17 21 12 16 7"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "21",
    y1: "12",
    x2: "9",
    y2: "12"
  }));
});
LogOut.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
LogOut.displayName = 'LogOut';
var LogOut$1 = LogOut;

function _extends$3() { _extends$3 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3.apply(this, arguments); }

function _objectWithoutProperties$3(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$3(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$3(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var MoreHorizontal = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$3(_ref, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends$3({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "19",
    cy: "12",
    r: "1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "5",
    cy: "12",
    r: "1"
  }));
});
MoreHorizontal.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
MoreHorizontal.displayName = 'MoreHorizontal';
var MoreHorizontal$1 = MoreHorizontal;

function _extends$2() { _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2.apply(this, arguments); }

function _objectWithoutProperties$2(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$2(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$2(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Trash2 = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$2(_ref, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends$2({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React.createElement("polyline", {
    points: "3 6 5 6 21 6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "10",
    y1: "11",
    x2: "10",
    y2: "17"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "14",
    y1: "11",
    x2: "14",
    y2: "17"
  }));
});
Trash2.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Trash2.displayName = 'Trash2';
var Trash2$1 = Trash2;

function _extends$1() { _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1.apply(this, arguments); }

function _objectWithoutProperties$1(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$1(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$1(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var User = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$1(_ref, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends$1({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React.createElement("path", {
    d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "7",
    r: "4"
  }));
});
User.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
User.displayName = 'User';
var User$1 = User;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var X = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties(_ref, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
  }));
});
X.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
X.displayName = 'X';
var X$1 = X;

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$H = ".accordion {\n  border-bottom: 1px solid var(--jiffyui-naturalLight-300);\n}\n\n.accordion-body.collapsed {\n  padding: 0rem;\n  max-height: 0rem;\n  transition: max-height 0.35s cubic-bezier(0, 1, 0, 1);\n}\n\n.accordion-body {\n  overflow: hidden;\n  transition: max-height 0.3s cubic-bezier(1, 0, 1, 0);\n  height: auto;\n  max-height: 9999px;\n}\n\n.accordion-wrapper {\n  margin-bottom: 0.4rem;\n  border-radius: 0.4rem;\n}\n\n.accordion-header {\n  padding: 1rem 0rem;\n  cursor: pointer;\n  font-size: 1.4rem;\n  position: relative;\n}\n\n.accordion-header.accordion-left--icon {\n  display: flex;\n  gap: 1rem;\n  align-items: center;\n}\n\n.accordion-header__title {\n  line-height: 2.5rem;\n  font-size: 1.4rem;\n  font-family: var(--jiffyui-medium-font);\n  color: var(--jiffyui-naturalDark-1300);\n}\n\n.accordion-body_content {\n  padding: 1rem 0rem;\n  font-size: 1.4rem;\n  line-height: 2.2rem;\n  color: var(--jiffyui-naturalDark-900);\n}\n\n.accordion-headaer__icon svg {\n  display: block;\n  color: var(--jiffyui-naturalDark-1300);\n}\n\n.accordion-header > svg {\n  color: var(--jiffyui-naturalDark-1300);\n  position: absolute;\n  right: 0.1rem;\n  top: 50%;\n  transform: translateY(-50%) rotate(0deg);\n  transition: 0.3s all;\n}\n\n.accordion-header.active > svg {\n  transform: translateY(-50%) rotate(180deg);\n}\n\n.icon-align--left .accordion-header {\n  padding-left: 3.5rem;\n}\n\n.accordion-wrapper.icon-align--left .accordion-header svg {\n  left: 1.2rem;\n}";
styleInject(css_248z$H);

var Accordion = function (_a) {
    var accordionHeader = _a.accordionHeader, onClick = _a.onClick, isExpended = _a.isExpended, children = _a.children, icon = _a.icon; __rest(_a, ["accordionHeader", "onClick", "isExpended", "children", "icon"]);
    return (jsxs("div", { className: "accordion", children: [jsxs("div", { className: "accordion-header ".concat(!isExpended ? "" : "active", " ").concat(icon ? "accordion-left--icon" : ""), onClick: onClick, children: [icon &&
                        jsx("div", { className: "accordion-headaer__icon", children: icon }), jsx("h3", { className: "accordion-header__title", children: accordionHeader }), jsx(ChevronDown$1, { size: "16" })] }), jsx("div", { className: "accordion-body ".concat(!isExpended ? "collapsed" : ""), children: jsx("div", { className: "accordion-body_content", children: children }) })] }));
};

var getPositionOfFixedElement = function (parentEle, childEle, direction) {
    var parentDimension = parentEle.getBoundingClientRect();
    var isBottomHaveSpace = window.innerHeight - (parentDimension.bottom + 4) >= childEle.offsetHeight;
    var isLeftHaveSpace = window.innerWidth - parentDimension.left >= childEle.offsetWidth;
    var isRightHaveSpace = parentDimension.right >= childEle.offsetWidth;
    if (isBottomHaveSpace)
        childEle.style.transformOrigin = "top center";
    else
        childEle.style.transformOrigin = "bottom center";
    return {
        top: isBottomHaveSpace
            ? parentDimension.bottom + 4
            : parentDimension.top - childEle.offsetHeight - 4,
        left: direction === "left" && isLeftHaveSpace
            ? parentDimension.left
            : isRightHaveSpace
                ? parentDimension.right - childEle.offsetWidth
                : isLeftHaveSpace
                    ? parentDimension.left
                    : parentDimension.left -
                        (childEle.offsetWidth - parentEle.offsetWidth) / 2,
    };
};
var changePosition = function (parentRef, popoverRef, options) {
    if (options === void 0) { options = {}; }
    var _a = options.direction, direction = _a === void 0 ? "auto" : _a, _b = options.width, width = _b === void 0 ? false : _b;
    return function () {
        if (!popoverRef.current || !parentRef.current)
            return;
        if (width) {
            popoverRef.current.style.width =
                parentRef.current.getBoundingClientRect().width + "px";
        }
        var _a = getPositionOfFixedElement(parentRef.current, popoverRef.current, direction), top = _a.top, left = _a.left;
        popoverRef.current.style.left = "".concat(left / 10, "rem");
        popoverRef.current.style.top = "".concat(top / 10, "rem");
    };
};
// Get matching label of values in case of simple data
var getMatchingLabels = function (options, valueArr) {
    return valueArr.reduce(function (acc, val) {
        var match = options.find(function (option) { return option.value === val; });
        if (match) {
            acc.push(match);
        }
        return acc;
    }, []);
};
function getMatchingGroupLabels(groupOptions, value, isMulti) {
    var valuesToMatch = isMulti ? new Set(value) : new Set([value]);
    var labels = [];
    for (var _i = 0, groupOptions_1 = groupOptions; _i < groupOptions_1.length; _i++) {
        var groupOption = groupOptions_1[_i];
        for (var _a = 0, _b = groupOption.group; _a < _b.length; _a++) {
            var option = _b[_a];
            if (valuesToMatch.has(option.value)) {
                labels.push(option);
            }
        }
    }
    return labels;
}
var classnames = function (classes) {
    return Object.keys(classes)
        .filter(function (className) { return classes[className]; })
        .join(" ");
};

var createPortalContainer = function (id, parent) {
    var container = document.createElement("div");
    container.id = id;
    parent.appendChild(container);
    return container;
};
var Portal = function (_a) {
    var children = _a.children;
    var container = document.getElementById("pixel-portalContainer");
    if (!container) {
        container = createPortalContainer("pixel-portalContainer", document.body);
    }
    useEffect(function () {
        return function () {
            if (!(container === null || container === void 0 ? void 0 : container.hasChildNodes())) {
                container === null || container === void 0 ? void 0 : container.remove();
            }
        };
    }, []);
    return createPortal(children, container);
};

var css_248z$G = ".pixel-dropdown {\n  border: 1px solid rgba(108, 132, 157, 0.1803921569);\n  box-shadow: 0px 8px 24px 0px rgba(25, 40, 57, 0.1215686275);\n  background-color: #ffffff;\n  max-height: 25rem;\n  overflow: auto;\n  border-radius: 4px;\n}";
styleInject(css_248z$G);

var Dropdown = forwardRef(function (props, customRef) {
    var _a;
    var open = props.open, children = props.children, zIndex = props.zIndex, padding = props.padding, direction = props.direction, _b = props.isWidthEqual, isWidthEqual = _b === void 0 ? false : _b, _c = props.resizeDependency, resizeDependency = _c === void 0 ? null : _c;
    var dropdownRef = useRef(null);
    useLayoutEffect(function () {
        if (open)
            isWidthEqual
                ? changePosition(customRef, dropdownRef, { width: true })
                : changePosition(customRef, dropdownRef, { direction: direction })();
    }, [open]);
    useEffect(function () {
        var handleClickOutside = function (event) {
            var _a;
            var container = document.querySelector(".pixel-dropdown");
            if (container && !container.contains(event.target)) {
                (_a = props === null || props === void 0 ? void 0 : props.onOutsideClick) === null || _a === void 0 ? void 0 : _a.call(props, event);
            }
        };
        window.addEventListener("click", handleClickOutside);
        return function () { return window.removeEventListener("click", handleClickOutside); };
    }, []);
    useEffect(function () {
        isWidthEqual && changePosition(customRef, dropdownRef, { width: true })();
        var changePos = isWidthEqual
            ? changePosition(customRef, dropdownRef, { width: true })
            : changePosition(customRef, dropdownRef);
        if (open) {
            window.addEventListener("resize", changePos, true);
            window.addEventListener("scroll", changePos, true);
        }
        return function () {
            window.removeEventListener("scroll", changePos, true);
            window.removeEventListener("resize", changePos, true);
        };
    }, [open, resizeDependency]);
    return open ? (jsx(Portal, { children: jsx("div", { ref: dropdownRef, className: classnames((_a = {
                    "pixel-dropdown": true,
                    "position-fixed": true
                },
                _a["z-index-" + zIndex] = zIndex,
                _a["p-" + padding] = padding,
                _a)), children: children }) })) : null;
});

var css_248z$F = ".jiffyui-actionlist__item:hover {\n  background-color: rgba(108, 132, 157, 0.09);\n  border-radius: 0.4rem;\n  transition: 0.3s all;\n}\n\n.jiffyui-actionlist__title {\n  color: var(--jiffyui-naturalLight-500);\n  font-family: var(--jiffyui-regular-font);\n  display: block;\n  padding: 0;\n  border-bottom: 0.1rem solid var(--jiffyui-naturalLight-300);\n  padding-bottom: 0.4rem;\n  font-size: 1.2rem;\n  margin-bottom: 0.2rem;\n}\n\n.jiffyui-actionlist_item__label {\n  color: var(--jiffyui-naturalDark-1300);\n  /* font-size: 1.4rem; */\n}\n\n.jiffyui-actionlist_item__prefix__suffix {\n  display: flex;\n  gap: 0.8rem;\n  align-items: start;\n}\n\n.jiffyui-actionlist_item_description {\n  color: var(--jiffyui-naturalDark-900);\n  font-size: 1.2rem;\n}\n\n.jiffyui-actionlist_item__prefix--icon svg,\n.jiffyui-actionlist_item__suffix--icon svg {\n  display: block;\n  width: 1.5rem;\n  height: 1.6rem;\n  color: var(--jiffyui-naturalDark-1300);\n}\n\n.jiffyui-actionlist__item--destructive .jiffyui-actionlist_item__prefix--icon svg,\n.jiffyui-actionlist__item--destructive .jiffyui-actionlist_item__label,\n.jiffyui-actionlist__item--destructive .jiffyui-actionlist_item__suffix--icon svg {\n  color: var(--jiffyui-Negative-600);\n}\n\n.jiffyui-actionlist__item--destructive:hover {\n  background-color: var(--jiffyui-Negative-050);\n}\n\n.jiffyui-actionlist__item--disabled {\n  cursor: not-allowed;\n  opacity: 0.5;\n}";
styleInject(css_248z$F);

var Actionlist = forwardRef(function (props, ref) {
    var open = props.open, activator = props.activator, options = props.options, onClose = props.onClose, _a = props.direction, direction = _a === void 0 ? "auto" : _a;
    var actionlistRef = useRef(null);
    var handleClose = function () {
        onClose();
    };
    var rId = useId();
    var handleOutsideClick = function (event) {
        var container = document.getElementById("".concat("pixelActionlist" + rId));
        if (container && !container.contains(event.target)) {
            onClose();
        }
    };
    return (jsxs("div", { ref: actionlistRef, id: "".concat("jiffyui-Actionlist" + rId), className: "pixel-actionlist inline-flex", children: [activator, jsx(Dropdown, { open: open, ref: actionlistRef, padding: 8, direction: direction, onOutsideClick: handleOutsideClick, children: options === null || options === void 0 ? void 0 : options.map(function (items, groupIndex) {
                    var _a;
                    return (jsxs("div", { id: items.id, className: "jiffyui-item__container", children: [items.title && (jsx("span", { className: "jiffyui-actionlist__title line-height-18", children: items.title })), jsx("ul", { children: (_a = items.items) === null || _a === void 0 ? void 0 : _a.map(function (item, index) {
                                    return (jsx("li", { role: "none", className: "jiffyui-actionlist__item c-pointer p-8 ".concat(item.destructive ? "actionlist__item--destructive" : "", " ").concat(item.isDisabled ? "actionlist__item--disabled" : ""), id: item.id, onClick: function () {
                                            if (item.isDisabled)
                                                return;
                                            !item.isDisabled && item.onClick();
                                            handleClose();
                                        }, children: jsxs("div", { className: "jiffyui-actionlist_item__prefix__suffix", children: [item.prefixIcon && jsx("div", { className: "jiffyui-actionlist_item__prefix--icon", children: item.prefixIcon }), jsxs("div", { className: "jiffyui-actionlist_item__label--description", children: [jsx("span", { className: "jiffyui-actionlist_item__label", children: item.content }), item.description && jsx("p", { className: "jiffyui-actionlist_item_description", children: item.description })] }), item.suffixIcon && jsx("div", { className: "jiffyui-actionlist_item__suffix--icon", children: item.suffixIcon })] }) }, index));
                                }) })] }, groupIndex));
                }) })] }));
});

var css_248z$E = ".jiffyui-alert {\n  padding: 1.6rem;\n  border: var(--jiffyui-borderWidth-thin) solid var(--jiffyui-naturalLight-050);\n  border-radius: 0.5rem;\n  background: var(--jiffyui-white);\n  position: relative;\n}\n\n.jiffyui-alert_inner {\n  display: flex;\n  gap: 1rem;\n  align-items: flex-start;\n}\n\n.jiffyui-alert_content {\n  display: flex;\n  flex-direction: column;\n}\n\nh3.jiffyui-alert_tile {\n  margin-top: 0;\n  font-size: 1.6rem;\n  font-family: var(--jiffyui-medium-font);\n  margin-bottom: 0.4rem;\n}\n\np.jiffyui-alert_description {\n  color: var(--jiffyui-naturalDark-1000);\n}\n\n.jiffyui-alert_actions {\n  margin-top: 1.5rem;\n  display: flex;\n  align-items: center;\n  gap: 2rem;\n}\n\n.jiffyui-alert .pixel-textLink a {\n  font-family: var(--jiffyui-medium-font);\n}\n\n.jiffyui-alert--subtile h3.jiffyui-alert_tile {\n  color: var(--jiffyui-naturalDark-1300);\n}\n\n.jiffyui-alert--negative.jiffyui-alert--subtile {\n  border-color: var(--jiffyui-Negative-200);\n  background: var(--jiffyui-Negative-100);\n}\n\n.jiffyui-alert--negative.jiffyui-alert--subtile .jiffyui-alert_icon svg {\n  color: var(--jiffyui-Negative-500);\n}\n\n.jiffyui-alert--negative.jiffyui-alert--subtile .btn.btn--secondry {\n  background: var(--jiffyui-Negative-200);\n  border-color: var(--jiffyui-Negative-500);\n}\n\n.jiffyui-alert--negative.jiffyui-alert--subtile .btn.btn--secondry span {\n  color: var(--jiffyui-Negative-500);\n}\n\n.jiffyui-alert--negative.jiffyui-alert--subtile .pixel-textLink a {\n  color: var(--jiffyui-Negative-500);\n}\n\n.jiffyui-alert--possitive.jiffyui-alert--subtile {\n  border-color: var(--jiffyui-Possitive-200);\n  background: var(--jiffyui-Possitive-100);\n}\n\n.jiffyui-alert--possitive.jiffyui-alert--subtile .jiffyui-alert_icon svg {\n  color: var(--jiffyui-Possitive-500);\n}\n\n.jiffyui-alert--possitive.jiffyui-alert--subtile .btn.btn--secondry {\n  background: var(--jiffyui-Possitive-200);\n  border-color: var(--jiffyui-Possitive-500);\n}\n\n.jiffyui-alert--possitive.jiffyui-alert--subtile .btn.btn--secondry span {\n  color: var(--jiffyui-Possitive-500);\n}\n\n.jiffyui-alert--possitive.jiffyui-alert--subtile .pixel-textLink a {\n  color: var(--jiffyui-Possitive-500);\n}\n\n.jiffyui-alert--waiting.jiffyui-alert--subtile {\n  border-color: var(--jiffyui-Notice-200);\n  background: var(--jiffyui-Notice-100);\n}\n\n.jiffyui-alert--waiting.jiffyui-alert--subtile .jiffyui-alert_icon svg {\n  color: var(--jiffyui-Notice-500);\n}\n\n.jiffyui-alert--waiting.jiffyui-alert--subtile .btn.btn--secondry {\n  background: var(--jiffyui-Notice-100);\n  border-color: var(--jiffyui-Notice-400);\n}\n\n.jiffyui-alert--waiting.jiffyui-alert--subtile .btn.btn--secondry span {\n  color: var(--jiffyui-Notice-500);\n}\n\n.jiffyui-alert--waiting.jiffyui-alert--subtile .pixel-textLink a {\n  color: var(--jiffyui-Notice-400);\n}\n\n.jiffyui-alert--primary.jiffyui-alert--subtile {\n  border-color: var(--jiffyui-Sapphire-200);\n  background: var(--jiffyui-Sapphire-100);\n}\n\n.jiffyui-alert--primary.jiffyui-alert--subtile .jiffyui-alert_icon svg {\n  color: var(--jiffyui-Sapphire-500);\n}\n\n.jiffyui-alert--primary.jiffyui-alert--subtile .btn.btn--secondry {\n  background: var(--jiffyui-Sapphire-100);\n  border-color: var(--jiffyui-Sapphire-500);\n}\n\n.jiffyui-alert--primary.jiffyui-alert--subtile .btn.btn--secondry span {\n  color: var(--jiffyui-Sapphire-500);\n}\n\n.jiffyui-alert--primary.jiffyui-alert--subtile .pixel-textLink a {\n  color: var(--jiffyui-Sapphire-500);\n}\n\n.jiffyui-alert--neutral.jiffyui-alert--subtile {\n  border-color: var(--jiffyui-naturalLight-200);\n  background: var(--jiffyui-naturalLight-100);\n}\n\n.jiffyui-alert--neutral.jiffyui-alert--subtile .jiffyui-alert_icon svg {\n  color: var(--jiffyui-naturalDark-1300);\n}\n\n.jiffyui-alert--neutral.jiffyui-alert--subtile .btn.btn--secondry {\n  background: var(--jiffyui-naturalLight-200);\n  border-color: var(--jiffyui-naturalDark-1300);\n}\n\n.jiffyui-alert--neutral.jiffyui-alert--subtile .btn.btn--secondry span {\n  color: var(--jiffyui-naturalDark-1300);\n}\n\n.jiffyui-alert--neutral.jiffyui-alert--subtile .pixel-textLink a {\n  color: var(--jiffyui-naturalDark-1300);\n}\n\n.jiffyui-alert--primary.jiffyui-alert--intense {\n  background-color: var(--jiffyui-Cerulean-600);\n}\n\n.jiffyui-alert--waiting.jiffyui-alert--intense {\n  background-color: var(--jiffyui-Notice-400);\n}\n\n.jiffyui-alert--negative.jiffyui-alert--intense {\n  background-color: var(--jiffyui-Negative-600);\n}\n\n.jiffyui-alert--possitive.jiffyui-alert--intense {\n  background-color: var(--jiffyui-Possitive-600);\n}\n\n.jiffyui-alert--neutral.jiffyui-alert--intense {\n  background-color: var(--jiffyui-naturalDark-1300);\n}\n\n.jiffyui-alert--intense .jiffyui-alert_icon svg,\n.jiffyui-alert--intense .jiffyui-alert_tile,\n.jiffyui-alert--intense .btn.btn--secondry span,\n.jiffyui-alert--intense .pixel-textLink a {\n  color: var(--jiffyui-white);\n}\n\n.jiffyui-alert--intense .btn.btn--secondry {\n  background-color: transparent;\n  border-color: var(--jiffyui-white);\n}\n\n.jiffyui-alert--intense .jiffyui-alert_description {\n  color: var(--jiffyui-naturalLight-050);\n}\n\n.jiffyui-alert-dismiss {\n  position: absolute;\n  right: 1rem;\n  top: 1rem;\n}\n\n.jiffyui-alert-dismiss .btn.btn--tertiary {\n  padding: 0.3rem;\n  width: 2.5rem;\n  height: 2.5rem;\n  text-align: center;\n  background: transparent;\n  border-color: transparent;\n  opacity: 0.5;\n}\n\n.jiffyui-alert-dismiss .btn.btn--tertiary:hover {\n  background: #d6d6d6;\n  border-color: #d6d6d6;\n  opacity: 1;\n}\n\n.jiffyui-alert-dismiss .btn.btn--tertiary:hover svg {\n  color: var(--jiffyui-black);\n}\n\n.jiffyui-alert-dismiss .btn.btn--tertiary .btn-icon {\n  height: 100%;\n  width: 100%;\n}\n\n.jiffyui-alert--intense .jiffyui-alert-dismiss .btn.btn--tertiary {\n  opacity: 1;\n}\n\n.jiffyui-alert--intense .jiffyui-alert-dismiss .btn.btn--tertiary .btn-icon svg {\n  color: var(--jiffyui-white);\n}\n\n.jiffyui-alert--intense .jiffyui-alert-dismiss .btn.btn--tertiary:hover {\n  background: rgba(0, 0, 0, 0.1);\n  border-color: transparent;\n}";
styleInject(css_248z$E);

var css_248z$D = ".spinner {\n  display: inline-flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.4rem;\n}\n\n.spinner .spinner-circle {\n  -moz-animation: rotation 1s infinite linear;\n  -o-animation: rotation 1s infinite linear;\n  -webkit-animation: rotation 0.75s linear infinite;\n  animation: rotation 0.75s linear infinite;\n  border-radius: 50%;\n  border-left: 0.2rem solid #a3a3a3;\n  border-width: 0.2rem;\n  border-style: solid;\n}\n\nlabel.spinner-label {\n  color: #6a6a6a;\n}\n\n.spinner-large .spinner-circle {\n  width: 2.4rem;\n  height: 2.4rem;\n}\n\n.spinner-medium .spinner-circle {\n  width: 2rem;\n  height: 2rem;\n}\n\n.spinner-small .spinner-circle {\n  width: 1.6rem;\n  height: 1.6rem;\n}\n\nlabel.spinner-label {\n  font-size: 1.4rem;\n  color: #6a6a6a;\n}\n\n.spinner-small .spinner-label {\n  font-size: 1.2rem;\n}\n\n.spinner-medium .spinner-label {\n  font-size: 1.3rem;\n}\n\n.spinner.spinner-small .spinner-circle {\n  border-width: 0.1rem;\n}\n\n.spinner-positive .spinner-circle {\n  border-color: var(--jiffyui-Possitive-800);\n  border-left-color: var(--jiffyui-Possitive-600);\n}\n\n.spinner-negative .spinner-circle {\n  border-color: var(--jiffyui-Negative-800);\n  border-left-color: var(--jiffyui-Negative-400);\n}\n\n.spinner-notice .spinner-circle {\n  border-color: var(--jiffyui-Notice-800);\n  border-left-color: var(--jiffyui-Notice-400);\n}\n\n.spinner-info .spinner-circle {\n  border-color: var(--jiffyui-Sapphire-800);\n  border-left-color: var(--jiffyui-Sapphire-500);\n}\n\n.spinner-neutral .spinner-circle {\n  border-color: var(--jiffyui-Cloud-800);\n  border-left-color: var(--jiffyui-Cloud-400);\n}\n\n.spinner-primary .spinner-circle {\n  border-color: var(--jiffyui-Cerulean-800);\n  border-left-color: var(--jiffyui-Cerulean-500);\n}\n\n.spinner.spinner-labelRight {\n  flex-direction: row;\n  gap: 1rem;\n}\n\n@keyframes rotation {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@-webkit-keyframes rotation {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@-moz-keyframes rotation {\n  to {\n    transform: rotate(360deg);\n  }\n}";
styleInject(css_248z$D);

var Spinner = function (_a) {
    var _b = _a.size, size = _b === void 0 ? "Medium" : _b, _c = _a.color, color = _c === void 0 ? "Neutral" : _c, _d = _a.label, label = _d === void 0 ? "Loading" : _d, _e = _a.labelPosition, labelPosition = _e === void 0 ? "Bottom" : _e; __rest(_a, ["size", "color", "label", "labelPosition"]);
    var getSpinnerSize = function () {
        switch (size) {
            case "Small":
                return "spinner-small";
            case "Medium":
                return "spinner-medium";
            case "Large":
                return "spinner-large";
            default:
                return "spinner-large";
        }
    };
    var getLabelPosition = function () {
        switch (labelPosition) {
            case "Right":
                return "spinner-labelRight";
            case "Bottom":
                return "spinner-labelBottom";
            default:
                return "";
        }
    };
    var getSpinnerColor = function () {
        switch (color) {
            case "Positive":
                return "spinner-positive";
            case "Negative":
                return "spinner-negative";
            case "Notice":
                return "spinner-notice";
            case "Information":
                return "spinner-info";
            case "Neutral":
                return "spinner-neutral";
            case "Primary":
                return "spinner-primary";
            default:
                return "spinner-neutral";
        }
    };
    var spinnerSize = getSpinnerSize();
    var labelPosition1 = getLabelPosition();
    var spinnerColor = getSpinnerColor();
    return (jsxs("div", { className: "spinner ".concat(spinnerSize, " ").concat(labelPosition1, " ").concat(spinnerColor), children: [jsx("div", { className: "spinner-circle" }), label && jsx("label", { className: "spinner-label", children: label })] }));
};

var css_248z$C = ".btn {\n  cursor: pointer;\n  border-radius: var(--jiffyui-borderRadius-medium);\n  font-size: 1.4rem;\n  font-family: \"roboto-Medium\";\n  padding: 1.3rem 2rem;\n  border: var(--jiffyui-borderWidth-thin) solid var(--jiffyui-black);\n  transition: 0.3s all;\n  position: relative;\n}\n\n.btn-icon {\n  min-width: 2rem;\n}\n\n.btn-icon svg {\n  width: 100%;\n  display: block;\n}\n\n.btn.icononly-btn.btn--xsmall {\n  padding: 0;\n  width: 3rem;\n}\n\n.btn.icononly-btn.btn--small {\n  padding: 0;\n  width: 3.4rem;\n}\n\n.btn.icononly-btn.btn--medium {\n  padding: 0;\n  width: 3.8rem;\n}\n\n.btn.icononly-btn.btn--large {\n  padding: 0;\n  width: 4.6rem;\n}\n\n/* Button size */\n.btn--xsmall {\n  padding: 0.5rem 1.6rem;\n  height: 3rem;\n}\n\n.btn--xsmall .btn-text {\n  line-height: 1.8rem;\n  font-size: 1.2rem;\n}\n\n.btn--small {\n  padding: 0.7rem 1.6rem;\n  height: 3.4rem;\n}\n\n.btn--small .btn-text {\n  line-height: 1.8rem;\n  font-size: 1.2rem;\n}\n\n.btn--medium {\n  padding: 0.8rem 1.6rem;\n  height: 3.8rem;\n}\n\n.btn--medium .btn-text {\n  line-height: 2rem;\n  font-size: 1.4rem;\n}\n\n.btn--large {\n  padding: 1.2rem 1.6rem;\n  height: 4.6rem;\n}\n\n.btn--large .btn-text {\n  line-height: 2rem;\n  font-size: 1.6rem;\n}\n\n/* primary btn */\n.btn--primary {\n  background: var(--jiffyui-Cerulean-600);\n  border: var(--jiffyui-borderWidth-thin) solid var(--jiffyui-Cerulean-600);\n  color: var(--jiffyui-white);\n}\n\n.btn--tertiary {\n  border-color: var(--jiffyui-Cerulean-600);\n  background-color: var(--jiffyui-white);\n}\n\n.btn--secondry {\n  background-color: var(--jiffyui-tertiary-color);\n  border-color: var(--jiffyui-tertiary-color);\n}\n\n.btn--secondry .btn-text,\n.btn--link .btn-text,\n.btn--tertiary .btn-text {\n  color: var(--jiffyui-Cerulean-600);\n}\n\n.btn--link {\n  padding: 0 !important;\n  border: none !important;\n  background-color: transparent !important;\n}\n\n/* button color */\n.btn--link.btn--positive__color .btn-text {\n  color: var(--jiffyui-Possitive-600);\n}\n\n.btn--primary.btn--positive__color,\n.btn--secondry.btn--positive__color {\n  background-color: var(--jiffyui-Possitive-600);\n  border-color: var(--jiffyui-Possitive-600);\n}\n\n.btn--tertiary.btn--positive__color {\n  border-color: var(--jiffyui-Possitive-600);\n}\n\n.btn--tertiary.btn--positive__color .btn-text {\n  color: var(--jiffyui-Possitive-600);\n}\n\n.btn--primary.btn--negative__color,\n.btn--secondry.btn--negative__color {\n  background-color: var(--jiffyui-Negative-600);\n  border-color: var(--jiffyui-Negative-600);\n}\n\n.btn--tertiary.btn--negative__color {\n  border-color: var(--jiffyui-Negative-600);\n}\n\n.btn--tertiary.btn--negative__color .btn-text,\n.btn--link.btn--negative__color .btn-text,\n.btn--secondry.btn--negative__color .btn-text {\n  color: var(--jiffyui-Negative-600);\n}\n\n.btn--primary.btn--waiting__color,\n.btn--secondry.btn--waiting__color {\n  background-color: var(--jiffyui-Notice-400);\n  border-color: var(--jiffyui-Notice-400);\n}\n\n.btn--tertiary.btn--waiting__color {\n  border-color: var(--jiffyui-Notice-400);\n}\n\n.btn--tertiary.btn--waiting__color .btn-text {\n  color: var(--jiffyui-Notice-400);\n}\n\n.btn--link.btn--waiting__color .btn-text {\n  color: var(--jiffyui-Notice-400);\n}\n\n.btn--secondry.btn--positive__color,\n.btn--secondry.btn--negative__color,\n.btn--secondry.btn--waiting__color {\n  background-color: var(--jiffyui-tertiary-color);\n  border-color: var(--jiffyui-tertiary-color);\n}\n\n.btn--secondry.btn--positive__color .btn-text {\n  color: var(--jiffyui-Possitive-600);\n}\n\n.btn--secondry.btn--waiting__color .btn-text {\n  color: var(--jiffyui-Notice-400);\n}\n\n.btn--primary.btn--neutral__color {\n  background: var(--jiffyui-naturalDark-1300);\n  border-color: var(--jiffyui-naturalDark-1300);\n}\n\n.btn--tertiary.btn--neutral__color {\n  border-color: var(--jiffyui-naturalLight-300);\n}\n\n.btn--tertiary.btn--neutral__color .btn-text,\n.btn--secondry.btn--neutral__color .btn-text,\n.btn--link.btn--neutral__color .btn-text {\n  color: var(--jiffyui-naturalDark-900);\n}\n\n/* Disabled */\nbutton.btn.btn-disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n/* full width */\n.btn.btn-full {\n  width: 100%;\n}\n\n/* Loading */\nbutton.btn.btn-loading {\n  position: relative;\n}\n\n.btn-loading span.btn-text,\n.btn-loading .btn-icon {\n  opacity: 0;\n}\n\n.btn-loader__overlay {\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.btn.btn-icon {\n  display: flex;\n  gap: 0.8rem;\n  justify-content: center;\n  align-items: center;\n}\n\n.iconAlign-right .btn-icon {\n  order: 2;\n}\n\n.iconAlign-right .btn-text {\n  order: 1;\n}\n\n.btn--primary.btn--neutral__color:hover {\n  background-color: var(--jiffyui-black);\n}\n\n.btn--primary.btn--primary__color:hover {\n  background-color: var(--jiffyui-Cerulean-800);\n  border-color: var(--jiffyui-Cerulean-800);\n}\n\n.btn--primary.btn--negative__color:hover {\n  background-color: var(--jiffyui-Negative-700);\n  border-color: var(--jiffyui-Negative-700);\n}\n\n.btn--primary.btn--waiting__color:hover {\n  background-color: var(--jiffyui-Notice-700);\n  border-color: var(--jiffyui-Notice-700);\n}\n\n.btn--primary.btn--positive__color:hover {\n  background-color: var(--jiffyui-Possitive-700);\n  border-color: var(--jiffyui-Possitive-700);\n}\n\n.btn--secondry.btn--neutral__color:hover .btn-text,\n.btn--tertiary.btn--neutral__color:hover .btn-text,\n.btn--link.btn--neutral__color:hover .btn-text {\n  color: var(--jiffyui-black);\n}\n\n.btn--secondry.btn--primary__color:hover .btn-text,\n.btn--tertiary.btn--primary__color:hover .btn-text,\n.btn--link.btn--primary__color:hover .btn-text {\n  color: var(--jiffyui-Cerulean-800);\n}\n\n.btn--secondry.btn--negative__color:hover .btn-text,\n.btn--tertiary.btn--negative__color:hover .btn-text,\n.btn--link.btn--negative__color:hover .btn-text {\n  color: var(--jiffyui-Negative-700);\n}\n\n.btn--secondry.btn--waiting__color:hover .btn-text,\n.btn--tertiary.btn--waiting__color:hover .btn-text,\n.btn--link.btn--waiting__color:hover .btn-text {\n  color: var(--jiffyui-Notice-700);\n}\n\n.btn--secondry.btn--positive__color:hover .btn-text,\n.btn--tertiary.btn--positive__color:hover .btn-text,\n.btn--link.btn--positive__color:hover .btn-text {\n  color: var(--jiffyui-Possitive-700);\n}";
styleInject(css_248z$C);

var Button = forwardRef(function (_a, ref) {
    var _b = _a.variant, variant = _b === void 0 ? "Primary" : _b, _c = _a.size, size = _c === void 0 ? "Medium" : _c, _d = _a.color, color = _d === void 0 ? "Neutral" : _d, icon = _a.icon, isDisabled = _a.isDisabled, isLoading = _a.isLoading, isFullWidth = _a.isFullWidth; _a.iconOnly; var alignIcon = _a.alignIcon, _e = _a.children, children = _e === void 0 ? "Button" : _e, props = __rest(_a, ["variant", "size", "color", "icon", "isDisabled", "isLoading", "isFullWidth", "iconOnly", "alignIcon", "children"]);
    var checkSize = function () {
        switch (size) {
            case "XSmall":
                return "btn--xsmall";
            case "Small":
                return "btn--small";
            case "Medium":
                return "btn--medium";
            case "Large":
                return "btn--large";
            default:
                return "btn--medium";
        }
    };
    var checkVarients = function () {
        switch (variant) {
            case "Primary":
                return "btn--primary";
            case "Tertiary":
                return "btn--tertiary";
            case "Secondry":
                return "btn--secondry";
            case "Link":
                return "btn--link";
            default:
                return "btn--primary";
        }
    };
    var checkColor = function () {
        switch (color) {
            case "Primary":
                return "btn--primary__color";
            case "Positive":
                return "btn--positive__color";
            case "Negative":
                return "btn--negative__color";
            case "Waiting":
                return "btn--waiting__color";
            case "Neutral":
                return "btn--neutral__color";
            default:
                return "";
        }
    };
    var allowSpinnerSize = function () {
        switch (size) {
            case "XSmall":
                return "Small";
            case "Small":
                return "Small";
            case "Medium":
                return "Medium";
            case "Large":
                return "Large";
            default:
                return "Medium";
        }
    };
    var ButtonVarent = checkVarients();
    var ButtonSize = checkSize();
    var ButtonColor = checkColor();
    var SpinnerSize = allowSpinnerSize();
    return (jsxs("button", { ref: ref, className: "btn ".concat((icon && alignIcon === "Right") ? "iconAlign-right" : "").concat(!children ? "icononly-btn" : "", " ").concat(ButtonVarent, " ").concat(ButtonSize, " ").concat(ButtonColor, " ").concat(icon ? "btn-icon" : "", " ").concat(isDisabled ? "btn-disabled" : "", " ").concat(isLoading ? "btn-loading" : "", " ").concat(isFullWidth ? "btn-full" : ""), onClick: isDisabled ? function () { } : props.onClick, children: [icon && jsx("div", { className: "btn-icon", children: icon }), isLoading && (jsx("div", { className: "btn-loader__overlay", children: jsx(Spinner, { size: SpinnerSize, label: "" }) })), children && jsx("span", { className: "btn-text", children: children })] }));
});

var css_248z$B = ".pixel-textLink {\n    display: inline-block;\n    cursor: pointer;\n}\n\n.pixel-textLink__label {\n    font-size: 1.4rem;\n    transition: 0.3s all;\n    color: var(--jiffyui-link-color);\n    display: flex;\n    align-items: center;\n    gap: 0.4rem\n}\n\n.pixel-textLink__label svg {\n    min-width: 16px;\n    display: inline-block;\n    vertical-align: baseline;\n    align-items: center;\n}\n\n.pixel-textLink__label:hover {\n    color: var(--jiffyui-link-hover-color);\n    text-decoration: underline;\n}\n\n.pixel-textLink__label:active {\n    color: var(--jiffyui-link-hover-color) !important;\n    text-decoration: underline;\n}\n\n/* Danger TextLink */\n.pixel-textLink--negative .pixel-textLink__label {\n    color: var(--jiffyui--negative-color);\n    text-decoration: underline;\n}\n\n.pixel-textLink--negative .pixel-textLink__label:hover {\n    color: var(--jiffyui--negative-hover-color);\n    text-decoration: unset;\n}\n\n.pixel-textLink--negative .pixel-textLink__label:active {\n    color: var(--jiffyui--negative-hover-color) !important;\n    text-decoration: unset;\n}\n\n.pixel--textLink--disabled.pixel-textLink--negative .pixel-textLink__label,\n.pixel--textLink--disabled.pixel-textLink--negative .pixel-textLink__label:hover,\n.pixel--textLink--disabled.pixel-textLink--negative .pixel-textLink__label:active {\n    color: var(--jiffyui--negative-hover-color) !important;\n    text-decoration: unset;\n    opacity: 0.4;\n}\n\n/* Danger TextLink End */\n/* Warning TextLink */\n.pixel-textLink--waiting .pixel-textLink__label {\n    color: var(--jiffyui--warning-color);\n    text-decoration: underline;\n}\n\n.pixel-textLink--waiting .pixel-textLink__label:hover {\n    color: var(--jiffyui--warning-hover-color);\n    text-decoration: unset;\n}\n\n.pixel-textLink--waiting .pixel-textLink__label:active {\n    color: var(--jiffyui--warning-hover-color) !important;\n    text-decoration: unset;\n}\n\n.pixel--textLink--disabled.pixel-textLink--waiting .pixel-textLink__label,\n.pixel--textLink--disabled.pixel-textLink--waiting .pixel-textLink__label:hover,\n.pixel--textLink--disabled.pixel-textLink--waiting .pixel-textLink__label:active {\n    color: var(--jiffyui--warning-hover-color) !important;\n    text-decoration: unset;\n}\n\n\n\n/* Warning TextLink End */\n\n\n/* Successs */\n/* Warning TextLink */\n.pixel-textLink--possitive .pixel-textLink__label {\n    color: var(--jiffyui--success-color);\n    text-decoration: underline;\n}\n\n.pixel-textLink--possitive .pixel-textLink__label:hover {\n    color: var(--jiffyui--success-hover-color);\n    text-decoration: unset;\n}\n\n.pixel-textLink--possitive .pixel-textLink__label:active {\n    color: var(--jiffyui--success-hover-color) !important;\n    text-decoration: unset;\n}\n\n.pixel--textLink--disabled.pixel-textLink--possitive .pixel-textLink__label,\n.pixel--textLink--disabled.pixel-textLink--possitive .pixel-textLink__label:hover,\n.pixel--textLink--disabled.pixel-textLink--possitive .pixel-textLink__label:active {\n    color: var(--jiffyui--success-hover-color) !important;\n    text-decoration: unset;\n    opacity: 0.4;\n}\n\n.pixel--textLink--disabled .pixel-textLink__label,\n.pixel--textLink--disabled .pixel-textLink__label:hover,\n.pixel--textLink--disabled .pixel-textLink__label:active {\n    text-decoration: none;\n    color: var(--jiffyui--success-hover-color) !important;\n    opacity: 0.4;\n}\n\n.pixel-textLink.pixel--textLink--disabled {\n    position: relative\n}\n\n.pixel-textLink.pixel--textLink--disabled::after {\n    content: '';\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    left: 0;\n    top: 0;\n    z-index: 9;\n    cursor: not-allowed;\n}";
styleInject(css_248z$B);

var TextLink = forwardRef(function (_a, ref) {
    var _b = _a.label, label = _b === void 0 ? "Text link" : _b, _c = _a.isDisabled, isDisabled = _c === void 0 ? false : _c, icon = _a.icon, url = _a.url; _a.customClass; var _e = _a.target, target = _e === void 0 ? "_blank" : _e, _f = _a.iconAlign, iconAlign = _f === void 0 ? "Right" : _f, _g = _a.linkType, linkType = _g === void 0 ? "Default" : _g, props = __rest(_a, ["label", "isDisabled", "icon", "url", "customClass", "target", "iconAlign", "linkType"]);
    var checkColor = function () {
        switch (linkType) {
            case "Success":
                return "pixel-textLink--possitive";
            case "Danger":
                return "pixel-textLink--negative";
            case "Warning":
                return "pixel-textLink--waiting";
            case "Default":
                return "pixel-textLink--default";
            default:
                return "";
        }
    };
    var getType = checkColor();
    return (jsx("span", { className: "pixel-textLink ".concat(getType, " ").concat(isDisabled ? "pixel--textLink--disabled" : ""), children: jsx("a", __assign({ className: "pixel-textLink__label" }, (url ? { href: url } : {}), { onClick: url
                ? function () {
                }
                : props.onClick, target: url && target, children: jsxs(Fragment, { children: [iconAlign === "Left" && icon, label, iconAlign === "Right" && icon] }) })) }));
});

var Alert = function (_a) {
    var _b = _a.title, title = _b === void 0 ? "Alert title here" : _b, _c = _a.description, description = _c === void 0 ? "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups." : _c, _d = _a.color, color = _d === void 0 ? "Positive" : _d, _e = _a.emphasis, emphasis = _e === void 0 ? "Subtile" : _e, onDismiss = _a.onDismiss, _f = _a.icon, icon = _f === void 0 ? jsx(AlertCircle$1, { size: 20 }) : _f, secondaryAction = _a.secondaryAction, primaryAction = _a.primaryAction; __rest(_a, ["title", "description", "color", "emphasis", "onDismiss", "icon", "secondaryAction", "primaryAction"]);
    var checkColor = function () {
        switch (color) {
            case "Positive":
                return "jiffyui-alert--possitive";
            case "Negative":
                return "jiffyui-alert--negative";
            case "Waiting":
                return "jiffyui-alert--waiting";
            case "Primary":
                return "jiffyui-alert--primary";
            case "Neutral":
                return "jiffyui-alert--neutral";
            default:
                return "jiffyui-alert--neutral";
        }
    };
    var checkEmphasis = function () {
        switch (emphasis) {
            case "Subtile":
                return "jiffyui-alert--subtile";
            case "Intense":
                return "jiffyui-alert--intense";
            default:
                return "";
        }
    };
    var AlertColor = checkColor();
    var AlertEmphasis = checkEmphasis();
    return (jsxs("div", { className: "jiffyui-alert ".concat(AlertColor, " ").concat(AlertEmphasis, " ").concat(onDismiss ? "hasDismiss" : ""), children: [onDismiss && jsxs("div", { className: "jiffyui-alert-dismiss", children: [" ", jsx(Button, { variant: "Tertiary", icon: jsx(X$1, { size: 16 }), children: "", onClick: function () { return onDismiss === null || onDismiss === void 0 ? void 0 : onDismiss(); } })] }), jsxs("div", { className: "jiffyui-alert_inner", children: [icon && (jsx("div", { className: "jiffyui-alert_icon", children: icon })), jsxs("div", { className: "jiffyui-alert_content", children: [title &&
                                jsx("h3", { className: "jiffyui-alert_tile", children: title }), description &&
                                jsx("p", { className: "jiffyui-alert_description", children: description }), primaryAction || secondaryAction ? (jsxs("div", { className: "jiffyui-alert_actions", children: [primaryAction1(), secondaryAction1()] })) : null] })] })] }));
    function primaryAction1() {
        if (primaryAction) {
            var primaryAction1_1 = primaryAction;
            return (jsx(Button, __assign({ size: primaryAction1_1.size ? primaryAction1_1.size : "Medium", children: primaryAction1_1.children ? primaryAction1_1.children : "Submit" }, primaryAction1_1, { variant: primaryAction1_1.variant ? primaryAction1_1.variant : "Secondry" })));
        }
    }
    function secondaryAction1() {
        if (secondaryAction) {
            var secondaryAction1_1 = secondaryAction;
            return (jsx(TextLink, __assign({ label: secondaryAction1_1.label ? secondaryAction1_1.label : "Medium", icon: secondaryAction1_1.icon ? secondaryAction1_1.icon : jsx(ExternalLink$1, { size: 16 }) }, secondaryAction1_1)));
        }
    }
};

var css_248z$A = ".jiffyui-app_wrapper {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.jiffyui-announcement_wrapper {\n  flex: 0 0 100%;\n}\n\n.jiffyui-sidebar__Wrapper {\n  flex: 0 0 28rem;\n  position: fixed;\n  left: 0;\n  width: 28rem;\n  height: 100vh;\n  transition: 0.3s all;\n}\n\n.jiffyui-footer__wrapper {\n  flex: 0 0 100%;\n}\n\n.jiffyui-main__content {\n  flex-grow: 0;\n  flex-shrink: 0;\n  padding-left: 1.6rem;\n  padding-right: 1.6rem;\n  margin-left: 28rem;\n  width: calc(100% - 28rem);\n}\n\n.jiffyui-topbar__wrapper {\n  position: fixed;\n  top: 0;\n  width: calc(100% - 28rem);\n  right: 0;\n  z-index: 9;\n}\n\n.demo-announcementbar {\n  text-align: center;\n  background: #e4e4e4;\n  padding: 10px 10px;\n  border-radius: 3px;\n}\n\n.demo-sidebar {\n  height: 400px;\n  background: #f1dcdc;\n  text-align: center;\n  line-height: 400px;\n  border-radius: 5px;\n}\n\n.demo-topbar {\n  background: #e1e6fb;\n  padding: 13px;\n  text-align: center;\n  border-radius: 5px;\n}\n\n.jiffyui-content_wrapper {\n  height: calc(100vh - 100px);\n}\n\n@media (max-width: 1279px) {\n  .jiffyui-main__content {\n    margin-left: 0;\n    width: 100%;\n  }\n  .jiffyui-sidebar__Wrapper {\n    left: -100%;\n    z-index: 999;\n  }\n  .jiffyui-topbar__wrapper {\n    width: 100%;\n  }\n  .new-body-class .jiffyui-sidebar__Wrapper {\n    left: 0;\n  }\n  .jiffyui-sidebar_overlay {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background: #000;\n    z-index: 9;\n    opacity: 0;\n    visibility: hidden;\n    transition: 0.3s all;\n  }\n  .new-body-class .jiffyui-sidebar_overlay {\n    opacity: 0.4;\n    visibility: visible;\n  }\n}";
styleInject(css_248z$A);

var AppWrapper = function (_a) {
    var topBar = _a.topBar, sideBar = _a.sideBar, footer = _a.footer, announcementBar = _a.announcementBar, content = _a.content; __rest(_a, ["topBar", "sideBar", "footer", "announcementBar", "content"]);
    return (jsxs("main", { className: 'jiffyui-app_wrapper', children: [jsx("div", { className: "jiffyui-announcement_wrapper", children: announcementBar }), jsx("div", { className: "jiffyui-sidebar__Wrapper", children: sideBar }), jsxs("div", { className: "jiffyui-main__content", children: [jsx("div", { className: "jiffyui-topbar__wrapper", children: topBar }), jsx("div", { className: "jiffyui-content_wrapper", children: content }), jsx("div", { className: "jiffyui-footer__wrapper", children: footer })] })] }));
};

var css_248z$z = ".appBar__connectLeft {\n  display: flex;\n  gap: 1.6rem;\n}\n\n.Pixel-appBar--container {\n  padding: 2rem 2.4rem;\n  background-color: rgb(255, 255, 255);\n  display: flex;\n  align-items: center;\n  width: 100%;\n  justify-content: space-between;\n  box-shadow: 0 0 3px 0px #e4e4e4;\n}\n@media screen and (max-width: 991px) {\n  .Pixel-appBar--container {\n    padding: 1.4rem 2rem;\n  }\n}\n\n.Pixel-appBar--stickyTop {\n  position: sticky;\n  top: 0;\n}\n\n.Pixel-appBar__connectLeft {\n  display: flex;\n  gap: 1.2rem;\n}\n\n.Pixel-appBar__logoSection {\n  display: flex;\n}\n\n.Pixel-appBar__toggleButton {\n  display: none;\n}\n@media screen and (max-width: 991px) {\n  .Pixel-appBar__toggleButton {\n    display: block;\n  }\n}\n\n.jiffyui-mobile_toggle {\n  cursor: pointer;\n}\n\n.jiffyui-mobile_logo,\n.jiffyui-mobile_toggle {\n  display: none;\n}\n\n.jiffyui-mobile_toggle svg {\n  width: 35px;\n  color: #333;\n}\n\n@media (max-width: 1279px) {\n  .jiffyui-mobile_logo,\n  .jiffyui-mobile_toggle {\n    display: block;\n  }\n}";
styleInject(css_248z$z);

var Topbar = function (props) {
    var connectRight = props.connectRight, connectLeft = props.connectLeft; props.connectCenter; var _b = props.mobileLogo, mobileLogo = _b === void 0 ? "" : _b; props.stickyTop;
    var _d = useState(false), scrolled = _d[0], setScrolled = _d[1];
    useEffect(function () {
        var handleScroll = function () {
            if (window.scrollY > 5) {
                setScrolled(true);
            }
            else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return function () {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    var _e = useState(false), isOpenMobileSidebar = _e[0], OpenMobileSideBar = _e[1];
    function manageMobileSidebar() {
        //OpenMobileSideBar(true);
        if (!isOpenMobileSidebar) {
            OpenMobileSideBar(true);
            document.body.classList.add('new-body-class');
        }
        else {
            OpenMobileSideBar(false);
            document.body.classList.remove('new-body-class');
        }
    }
    return (jsxs(Fragment, { children: [jsxs("header", { className: "Pixel-appBar--container ".concat(scrolled ? "header-sticky" : ""), children: [jsxs("div", { className: "appBar__connectLeft", children: [jsx("div", { className: "jiffyui-mobile_toggle", onClick: manageMobileSidebar, children: jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", "stroke-width": "2", stroke: "currentColor", className: "h-6 w-6", children: jsx("path", { "stroke-linecap": "round", "stroke-linejoin": "round", d: "M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5" }) }) }), mobileLogo && jsx("a", { className: "jiffyui-mobile_logo", href: "", children: jsx("img", { src: mobileLogo }) }), connectLeft] }), connectRight && (jsx("div", { className: "Pixel-appBar__connectRight", children: connectRight }))] }), isOpenMobileSidebar && jsx(Portal, { children: jsx("div", { className: "jiffyui-sidebar_overlay", onClick: manageMobileSidebar, children: " " }) })] }));
};

var css_248z$y = ".jiffyui-avatar {\n  background: var(--jiffyui-Sapphire-050);\n  display: inline-flex;\n  border-radius: 0.4rem;\n  border: 1px solid #e4e4e4;\n}\n\n.jiffyui-avatar-icon {\n  width: 100%;\n  height: 100%;\n}\n\n.jiffyui-avatar-icon * {\n  width: 100%;\n  height: 100%;\n}\n\n.jiffyui-avatar.jiffyui-avatar--small {\n  height: 3.2rem;\n  width: 3.2rem;\n}\n.jiffyui-avatar.jiffyui-avatar--medium {\n  width: 3.6rem;\n  height: 3.6rem;\n}\n.jiffyui-avatar.jiffyui-avatar--large {\n  height: 4rem;\n  width: 4rem;\n}\n.jiffyui-avatar.jiffyui-avatar--xLarge {\n  height: 4.4rem;\n  width: 4.4rem;\n}\n.jiffyui-avatar.jiffyui-avatar--circle {\n  border-radius: 100%;\n}\n\n.jiffyui-avatar.jiffyui-avatar--xLarge.jiffyui-avatar--circle,\n.jiffyui-avatar.jiffyui-avatar--xLarge.jiffyui-avatar--squire {\n  padding: 0.8rem;\n}\n\n.jiffyui-avatar.jiffyui-avatar--large.jiffyui-avatar--circle,\n.jiffyui-avatar.jiffyui-avatar--large.jiffyui-avatar--squire {\n  padding: 0.8rem;\n}\n\n.jiffyui-avatar.jiffyui-avatar--medium.jiffyui-avatar--circle,\n.jiffyui-avatar.jiffyui-avatar--medium.jiffyui-avatar--squire {\n  padding: 0.7rem;\n}\n\n.jiffyui-avatar.jiffyui-avatar--small.jiffyui-avatar--circle,\n.jiffyui-avatar.jiffyui-avatar--small.jiffyui-avatar--squire {\n  padding: 0.6rem;\n}\n\n.jiffyui-jiffyui-avatar.jiffyui-has-image-icon {\n  padding: 0 !important;\n  border: var(--jiffyui-borderWidth-thin) solid var(--jiffyui-naturalLight-300);\n}\n\n.jiffyui-avatar.jiffyui-has-image-icon .jiffyui-avatar-icon > img {\n  border-radius: 100%;\n}\n\n.jiffyui-avatar.jiffyui-has-image-icon.jiffyui-avatar--squire .jiffyui-avatar-icon > img {\n  border-radius: 0.4rem;\n}\n\n.jiffyui-avatar.jiffyui-has-action {\n  cursor: pointer;\n}\n\n.jiffyui-avatar.jiffyui-has-action:hover {\n  opacity: 0.8;\n}\n\n.jiffyui-avatar.jiffyui-has-indicator {\n  position: relative;\n}\n\n.jiffyui-avatar-indicator {\n  position: absolute;\n  top: -0.3rem;\n  right: -0.3rem;\n  padding: 0.2rem;\n  background: var(--jiffyui-white);\n  border-radius: 100%;\n  z-index: 1;\n}\n\n.jiffyui-avatar-indicator .jiffyui-indicator,\n.jiffyui-avatar-indicator .jiffyui-indicator-dot {\n  display: block;\n}\n\n.jiffyui-avatar.jiffyui-avatar--xLarge span.jiffyui-indicator-dot {\n  height: 1.1rem;\n  width: 1.1rem;\n}\n\n.jiffyui-avatar.jiffyui-avatar--large span.jiffyui-indicator-dot {\n  width: 0.9rem;\n  height: 0.9rem;\n}\n\n.jiffyui-avatar.jiffyui-avatar--medium span.jiffyui-indicator-dot {\n  height: 0.7rem;\n  width: 0.7rem;\n}\n\n.jiffyui-avatar.jiffyui-avatar--small span.jiffyui-indicator-dot {\n  height: 0.5rem;\n  width: 0.5rem;\n}";
styleInject(css_248z$y);

var Avatar = function (_a) {
    var _b = _a.size, size = _b === void 0 ? "Medium" : _b, _c = _a.shape, shape = _c === void 0 ? "Squire" : _c, _d = _a.label, label = _d === void 0 ? "Label" : _d, _e = _a.icon, icon = _e === void 0 ? jsx(User$1, {}) : _e, _f = _a.srcIco, srcIco = _f === void 0 ? "" : _f, _g = _a.indicator, indicator = _g === void 0 ? "" : _g, onClick = _a.onClick; __rest(_a, ["size", "shape", "label", "icon", "srcIco", "indicator", "onClick"]);
    var checkSize = function () {
        switch (size) {
            case "Small":
                return "jiffyui-avatar--small";
            case "Medium":
                return "jiffyui-avatar--medium";
            case "Large":
                return "jiffyui-avatar--large";
            case "Xlarge":
                return "jiffyui-avatar--xLarge";
            default:
                return "jiffyui-avatar--medium";
        }
    };
    var checkShape = function () {
        switch (shape) {
            case "Circle":
                return "jiffyui-avatar--circle";
            case "Squire":
                return "jiffyui-avatar--squire";
            default:
                return "jiffyui-avatar--squire";
        }
    };
    var avatarSize = checkSize();
    var avatarShape = checkShape();
    return (jsxs("div", { onClick: onClick, className: "jiffyui-avatar ".concat(avatarSize, " ").concat(avatarShape, " ").concat(srcIco ? "jiffyui-has-image-icon" : "", " ").concat(onClick ? "jiffyui-has-action" : "", " ").concat(indicator ? "jiffyui-has-indicator" : ""), children: [indicator ? jsx("div", { className: "jiffyui-avatar-indicator", children: indicator }) : null, jsx("div", { className: "jiffyui-avatar-icon", "data-labe": label, children: srcIco ? (jsx("img", { src: "".concat(srcIco), alt: label ? label : "Avatar" })) : icon })] }));
};

var css_248z$x = ".badge-wrapp {\n  display: inline-block;\n}\n\n.badge {\n  display: flex;\n  padding: 0.1rem 1rem;\n  background: #e4e4e4;\n  border-radius: 25rem;\n  align-items: center;\n}\n\n.badge.badge--small {\n  height: 1.6rem;\n}\n.badge.badge--small label {\n  font-size: 1rem;\n  line-height: 1.6rem;\n}\n\n.badge.badge--medium {\n  height: 2rem;\n}\n.badge.badge--medium label {\n  font-size: 1.2rem;\n  line-height: 2rem;\n}\n\n.badge.badge--large {\n  height: 2.4rem;\n}\n.badge.badge--large label {\n  font-size: 1.4rem;\n  line-height: 2.4rem;\n}\n\n.badge--positive {\n  background-color: var(--jiffyui-Possitive-100);\n}\n.badge--positive .badge-label {\n  color: var(--jiffyui-Possitive-600);\n}\n\n.badge--negative {\n  background-color: var(--jiffyui-Negative-100);\n}\n.badge--negative .badge-label {\n  color: var(--jiffyui-Negative-600);\n}\n\n.badge--notice {\n  background-color: var(--jiffyui-Notice-100);\n}\n.badge--notice .badge-label {\n  color: var(--jiffyui-Notice-600);\n}\n\n.badge--neutral {\n  background-color: var(--jiffyui-Cloud-200);\n}\n.badge--neutral .badge-label {\n  color: var(--jiffyui-naturalDark-1300);\n}\n\n.badge--primary {\n  background-color: var(--jiffyui-Cerulean-100);\n}\n.badge--primary .badge-label {\n  color: var(--jiffyui-Cerulean-600);\n}\n\n.badge--positive.badge--intense {\n  background-color: var(--jiffyui-Possitive-600);\n}\n\n.badge--negative.badge--intense {\n  background-color: var(--jiffyui-Negative-600);\n}\n\n.badge--notice.badge--intense {\n  background-color: var(--jiffyui-Notice-600);\n}\n\n.badge--neutral.badge--intense {\n  background-color: var(--jiffyui-naturalDark-1300);\n}\n\n.badge--primary.badge--intense {\n  background-color: var(--jiffyui-Cerulean-600);\n}\n\n.badge--intense .badge-label {\n  color: #fff;\n}\n\n.badge--positive.badge--outline {\n  background-color: transparent;\n  border: 1px solid var(--jiffyui-Possitive-600);\n}\n\n.badge--negative.badge--outline {\n  background-color: transparent;\n  border: 1px solid var(--jiffyui-Negative-600);\n}\n\n.badge--notice.badge--outline {\n  background-color: transparent;\n  border: 1px solid var(--jiffyui-Notice-600);\n}\n\n.badge--neutral.badge--outline {\n  background-color: transparent;\n  border: 1px solid var(--jiffyui-naturalDark-1300);\n}\n\n.badge--primary.badge--outline {\n  background-color: transparent;\n  border: 1px solid var(--jiffyui-Cerulean-600);\n}\n\n.badge .complete {\n  display: inline-block;\n  margin-right: 0.5rem;\n  border-radius: 100%;\n}\n\n.badge.badge--small .complete {\n  height: 0.6rem;\n  width: 0.6rem;\n}\n\n.badge.badge--medium .complete {\n  height: 0.7rem;\n  width: 0.7rem;\n}\n\n.badge.badge--large .complete {\n  height: 0.8rem;\n  width: 0.8rem;\n}\n\n.badge--type__partial .partial {\n  border-radius: 3rem 3rem 0 0;\n  margin-right: 0.5rem;\n  background-color: #333;\n}\n\n.badge--type__partial.badge--small .partial {\n  height: 0.4rem;\n  width: 0.6rem;\n}\n\n.badge--type__partial.badge--medium .partial {\n  height: 0.5rem;\n  width: 0.7rem;\n}\n\n.badge--type__partial.badge--large .partial {\n  height: 0.6rem;\n  width: 0.8rem;\n}\n\n.badge--type__partial.badge--positive .partial,\n.badge--positive .complete {\n  background-color: var(--jiffyui-Possitive-600);\n}\n\n.badge--type__partial.badge--negative .partial,\n.badge--negative .complete {\n  background-color: var(--jiffyui-Negative-600);\n}\n\n.badge--type__partial.badge--notice .partial,\n.badge--notice .complete {\n  background-color: var(--jiffyui-Notice-600);\n}\n\n.badge--type__partial.badge--neutral .partial,\n.badge--neutral .complete {\n  background-color: var(--jiffyui-Cloud-600);\n}\n\n.badge--type__partial.badge--primary .partial,\n.badge--primary .complete {\n  background-color: var(--jiffyui-Cerulean-600);\n}\n\n.badge--intense .partial,\n.badge--intense .complete {\n  background-color: #e4e4e4 !important;\n}";
styleInject(css_248z$x);

var Badge = function (_a) {
    var _b = _a.size, size = _b === void 0 ? "Large" : _b, _c = _a.color, color = _c === void 0 ? "Positive" : _c, _d = _a.children, children = _d === void 0 ? "children" : _d, _e = _a.type, type = _e === void 0 ? "None" : _e, _f = _a.emphasis, emphasis = _f === void 0 ? "Subtile" : _f; __rest(_a, ["size", "color", "children", "type", "emphasis"]);
    var checkSize = function () {
        switch (size) {
            case "Small":
                return "badge--small";
            case "Medium":
                return "badge--medium";
            case "Large":
                return "badge--large";
            default:
                return "badge--medium";
        }
    };
    var checkColor = function () {
        switch (color) {
            case "Positive":
                return "badge--positive";
            case "Negative":
                return "badge--negative";
            case "Notice":
                return "badge--notice";
            case "Neutral":
                return "badge--neutral";
            case "Primary":
                return "badge--primary";
            default:
                return "badge--positive";
        }
    };
    var checkType = function () {
        switch (type) {
            case "Partial":
                return "badge--type__partial";
            case "Full":
                return "badge--type__full";
            case "None":
                return "badge--type__none";
            default:
                return "badge--type__none";
        }
    };
    var checkEmphasis = function () {
        switch (emphasis) {
            case "Subtile":
                return "badge--subtile";
            case "Intense":
                return "badge--intense";
            case "OutLine":
                return "badge--outline";
            default:
                return "badge--subtile";
        }
    };
    var BadgeSize = checkSize();
    var BadgeColor = checkColor();
    var BadgeType = checkType();
    var BadgeEmphasis = checkEmphasis();
    return (jsx("div", { className: "badge-wrapp", children: jsxs("div", { className: "badge ".concat(BadgeSize, " ").concat(BadgeColor, " ").concat(BadgeType, " ").concat(BadgeEmphasis), children: [type === "Partial" ? jsx("span", { className: "partial" }) : null, type === "Full" ? jsx("span", { className: "complete" }) : null, jsx("label", { className: "badge-label", children: children })] }) }));
};

var useDelay = function (isMounted, delayTime) {
    var _a = useState(false), show = _a[0], setShow = _a[1];
    var timeoutRef = useRef();
    useEffect(function () {
        if (isMounted && !show) {
            setShow(true);
        }
        else if (!isMounted && show) {
            timeoutRef.current = setTimeout(function () { return setShow(false); }, delayTime);
        }
        return function () { return clearTimeout(timeoutRef.current); };
    }, [isMounted, delayTime, show]);
    return show;
};

var css_248z$w = ".bottom-sheet {\n  position: fixed;\n  bottom: -100%;\n  left: 0;\n  right: 0;\n  background-color: white;\n  border-top-left-radius: 16px;\n  border-top-right-radius: 16px;\n}\n.bottom-sheet.open {\n  bottom: 0;\n  transition: bottom 0.3s ease-in-out;\n  z-index: 1111;\n}\n.bottom-sheet.close {\n  bottom: -100%;\n  transition: bottom 0.6s ease-in-out;\n}\n\n.bottom-sheet-content {\n  box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.1);\n}\n\n.bottom-sheet__heading {\n  display: flex;\n  border-bottom: 0.1rem solid rgba(108, 132, 157, 0.18);\n  padding: 2rem;\n  justify-content: space-between;\n  gap: 2rem;\n}\n\n.bottom-sheet-header {\n  display: flex;\n  border-bottom: 0.1rem solid rgba(108, 132, 157, 0.18);\n  padding: 2rem;\n  justify-content: flex-end;\n}\n\n.close-button {\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 16px;\n}\n\n.bottom-sheet-body {\n  padding: 2rem;\n}\n\n.bottom-sheet-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1000;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: background-color 0.3s ease;\n}\n.bottom-sheet-overlay.open {\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.bottom-sheet-overlay.close {\n  transition: background-color 0.3s ease;\n  background-color: rgba(0, 0, 0, 0);\n}";
styleInject(css_248z$w);

function BottomSheet(props) {
    var isOpen = props.isOpen, onDismiss = props.onDismiss, children = props.children, heading = props.heading;
    var open = useDelay(isOpen, 600);
    return open || isOpen ? (jsx(Portal, { children: jsxs("div", { className: "bottom-sheet__wrapper", children: [jsx("div", { className: "bottom-sheet-overlay  ".concat(isOpen && open ? "open" : "close"), onClick: onDismiss, role: "none" }), jsx("div", { className: "bottom-sheet ".concat(isOpen && open ? "open" : "close"), children: jsxs("div", { className: "bottom-sheet-content", children: [jsxs("div", { className: heading ? "bottom-sheet__heading" : "bottom-sheet-header", children: [heading && jsx("h3", { className: "text-size-16 font-weight-600 line-height-24", children: heading }), jsx("button", { className: "close-button", onClick: onDismiss, children: jsx(X$1, { size: 20 }) })] }), jsx("div", { className: "bottom-sheet-body", children: children })] }) })] }) })) : null;
}

var css_248z$v = ".Pixel-item__text {\n  color: rgb(41, 80, 219);\n  font-size: 1.4rem;\n  font-weight: 500;\n  line-height: 2rem;\n}\n\n.Pixel-item__text--active {\n  color: rgb(25, 40, 57);\n  font-size: 1.4rem;\n  font-weight: 500;\n  line-height: 2rem;\n}\n\n.Pixel-breadCrumb__list {\n  display: flex;\n  gap: 0.4rem;\n  align-items: center;\n  flex-wrap: wrap;\n}\n\n.Pixel-breadCrumb :not(:last-child) span:hover {\n  text-decoration: underline;\n  cursor: pointer;\n}";
styleInject(css_248z$v);

var Breadcrumb = function (props) {
    var items = props.items, onClick = props.onClick;
    return (jsx("nav", { className: classnames({
            "Pixel-breadCrumb": true,
        }), "aria-label": "breadCrumb", children: jsx("ul", { className: "Pixel-breadCrumb__list", children: items.map(function (e, i) {
                return (jsx(React.Fragment, { children: i !== 0 ? (jsxs("li", { className: classnames({
                            "Pixel-breadCrumb__item": true,
                            "Pixel-breadCrumb__item--active": i === Object.keys(items).length - 1,
                        }), children: [jsx("span", { className: "Pixel-breadcrumb__separator mr-4", children: "/" }), i === Object.keys(items).length - 1 ? (jsx("span", { className: "Pixel-item__text--active", children: e.label })) : (jsx("span", { role: "none", onClick: function () {
                                    onClick === null || onClick === void 0 ? void 0 : onClick(e.value, e);
                                }, className: "Pixel-item__text", children: e.label }))] })) : (jsx("li", { className: "Pixel-breadCrumb__item", children: jsx("span", { role: "none", onClick: function () {
                                onClick === null || onClick === void 0 ? void 0 : onClick(e.value, e);
                            }, className: "Pixel-item__text", children: e.label }) })) }, i));
            }) }) }));
};

var css_248z$u = ".buttonGroup {\n  display: inline-flex;\n  gap: 0.4rem;\n  flex-wrap: nowrap;\n}\n\n.buttonGroup.btn-segmented {\n  gap: 0;\n}\n\n.buttonGroup.btn-segmented button.btn {\n  border-radius: 0;\n}\n\n.buttonGroup.btn-segmented button.btn:last-child {\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 4px;\n}\n\n.buttonGroup.btn-segmented button.btn:first-child {\n  border-bottom-left-radius: 4px;\n  border-top-left-radius: 4px;\n}\n\n.buttonGroup.btn-segmented button.btn--secondry,\n.buttonGroup.btn-segmented button.btn--tertiary {\n  border-right-width: 0;\n}\n\n.buttonGroup.btn-segmented button.btn--secondry:last-child,\n.buttonGroup.btn-segmented button.btn--tertiary:last-child {\n  border-right-width: 1px;\n}";
styleInject(css_248z$u);

var ButtonGroup = function (_a) {
    var _b = _a.segmented, segmented = _b === void 0 ? true : _b, children = _a.children; __rest(_a, ["segmented", "children"]);
    return (jsx("div", { className: "buttonGroup ".concat(segmented ? "btn-segmented" : null), children: children }));
};

var css_248z$t = ".jiffy-card {\n    box-sizing: border-box;\n    border-radius: var(--jiffyui-borderRadius-medium);\n}\n\n.jiffy-card--title {\n    padding-bottom: 0.2rem !important;\n}\n\nh3.jiffy-cord--title__text,\n.jiffy-card--footer_title__text {\n    margin: 0;\n    font-size: 1.6rem;\n    color: var(--jiffyui-naturalDark-1300);\n}\n\np.jiffy-card--subTitle,\n.jiffy-card--footer_description__text {\n    font-size: 1.4rem;\n    color: var(--jiffyui-naturalDark-900);\n}\n\nh3.jiffy-cord--title__text+.jiffy-card--subTitle,\n.jiffy-card--footer_title__text+.jiffy-card--footer_description__text {\n    margin-top: .3rem;\n}\n\n.jiffy-card-body,\n.jiffy-card--title,\n.jiffy-card-footer {\n    padding: 1.6rem;\n}\n\n.jiffy-card.shadow-card {\n    box-shadow: var(--jiffyui-low-elevation);\n    border: none;\n    background: var(--jiffyui-white);\n}\n\n.jiffy-card.borderd-card {\n    border: 1px solid var(--jiffyui-naturalLight-200);\n}\n\n.jiffy-card.plain-card {\n    background: var(--jiffyui-naturalLight-100);\n}\n\n.jiffy-card.borderWithShadow-card {\n    box-shadow: var(--jiffyui-low-elevation);\n    border: 1px solid var(--jiffyui-naturalLight-100);\n\n    .card.plain-card {\n        border: none;\n    }\n}\n\n.jiffy-card--title__header_action {\n    display: flex;\n    justify-content: space-between;\n    align-items: start;\n}\n\n.jiffy-card-footer {\n    padding-top: 0.2rem;\n}\n\n.jiffy-card-footer {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.jiffy-card-footer.actions--only {\n    justify-content: end;\n}\n\n.jiffy-card-footer.jiffy-title-only {\n    justify-content: start;\n}\n\n.jiffy-card-footer__actions_wrapper {\n    display: flex;\n    gap: .8rem;\n}\n\n.jiffy-card--body__inner {\n    font-size: 1.4rem;\n    color: var(--jiffyui-naturalDark-900);\n    line-height: 2.4rem;\n}";
styleInject(css_248z$t);

var Card = function (_a) {
    var _b = _a.type, type = _b === void 0 ? "Shadow" : _b, primaryAction = _a.primaryAction, _c = _a.headerTitle, headerTitle = _c === void 0 ? "Card title" : _c, headerSubTitle = _a.headerSubTitle, _d = _a.children, children = _d === void 0 ? "Default card description" : _d, footerTitle = _a.footerTitle, footerSubtitle = _a.footerSubtitle, secondaryAction = _a.secondaryAction, headerActions = _a.headerActions; _a.onHeaderAction; __rest(_a, ["type", "primaryAction", "headerTitle", "headerSubTitle", "children", "footerTitle", "footerSubtitle", "secondaryAction", "headerActions", "onHeaderAction"]);
    var getCardType = function () {
        switch (type) {
            case "Plain":
                return "plain-card";
            case "Shadow":
                return "shadow-card";
            case "Borderd":
                return "borderd-card";
            case "BorderWithShadow":
                return "borderWithShadow-card";
            default:
                return "inte-card--default";
        }
    };
    var cardTypeCss = getCardType();
    var _e = useState(false), active = _e[0], setActive = _e[1];
    return (jsx("div", { className: "jiffy-card ".concat(cardTypeCss), children: jsxs("div", { className: "jiffy-card--inner", children: [headerTitle && (jsx(Fragment, { children: (jsxs("div", { className: "jiffy-card--title jiffy-card--title__header_action", children: [jsxs("div", { className: "jiffy-card--title_inner", children: [jsx("h3", { className: "jiffy-cord--title__text", children: headerTitle }), headerSubTitle && (jsx("p", { className: "card--subTitle", children: headerSubTitle }))] }), headerActions1()] }))  })), jsx("div", { className: "jiffy-card-body", children: jsx("div", { className: "jiffy-card--body__inner", children: children }) }), footerTitle && (jsxs("div", { className: "jiffy-card-footer jiffy-title-only", children: [jsx("h4", { className: "jiffy-card--footer_title__text", children: footerTitle }), jsx("p", { className: "jiffy-card--footer_description__text", children: footerSubtitle })] })), primaryAction || secondaryAction ? (jsx("div", { className: "jiffy-card-footer actions--only", children: jsxs("div", { className: "jiffy-card-footer__actions_wrapper", children: [secondaryAction1(), primaryAction1()] }) })) : null, (primaryAction || secondaryAction) && footerTitle ? (jsxs("div", { className: "jiffy-card-footer title-action", children: [jsxs("div", { className: "jiffy-card-footer__title_wrapper", children: [jsx("h4", { className: "jiffy-card--footer_title__text", children: footerTitle }), footerSubtitle && (jsx("p", { className: "jiffy-card--footer_description__text", children: footerSubtitle }))] }), jsxs("div", { className: "jiffy-card-footer__actions_wrapper", children: [primaryAction1(), secondaryAction1()] })] })) : null] }) }));
    function primaryAction1() {
        if (primaryAction) {
            var color = primaryAction.color, icon = primaryAction.icon, isDisabled = primaryAction.isDisabled, isLoading = primaryAction.isLoading, alignIcon = primaryAction.alignIcon, children_1 = primaryAction.children, onClick = primaryAction.onClick;
            return (jsx(Button, __assign({ size: "Medium", variant: "Primary", color: color ? color : "Primary", icon: icon && icon, alignIcon: alignIcon && alignIcon, isDisabled: isDisabled && isDisabled, isLoading: isLoading && isLoading, children: children_1 ? children_1 : "Git it!" }, primaryAction1, { onClick: onClick })));
        }
    }
    function secondaryAction1() {
        if (secondaryAction) {
            var color = secondaryAction.color, icon = secondaryAction.icon, isDisabled = secondaryAction.isDisabled, isLoading = secondaryAction.isLoading, alignIcon = secondaryAction.alignIcon, children_2 = secondaryAction.children, onClick = secondaryAction.onClick;
            return (jsx(Button, __assign({ size: "Medium", variant: "Secondry", color: color ? color : "Primary", icon: icon && icon, alignIcon: alignIcon && alignIcon, isDisabled: isDisabled && isDisabled, isLoading: isLoading && isLoading, children: children_2 ? children_2 : "Git it!" }, secondaryAction1, { onClick: onClick })));
        }
    }
    function headerActions1() {
        if (headerActions) {
            return (jsx(Actionlist, { onClose: function () { return setActive(false); }, activator: jsx(Button, { variant: "Link", onClick: function () { return setActive(!active); }, children: "", icon: jsx(MoreHorizontal$1, { size: 18 }) }), open: active, options: headerActions }));
        }
    }
};

var css_248z$s = ".inte-copyClipboard {\n  display: flex;\n  align-items: center;\n  gap: 1.6rem;\n}\n.inte-copyClip__center {\n  justify-content: center;\n}\n.inte-copyClip__end {\n  justify-content: end;\n}\n.inte-copyClip__fill {\n  justify-content: space-between;\n}\n";
styleInject(css_248z$s);

var css_248z$r = ".pixel-Text--root {\n    margin: 0;\n    padding: 0;\n    line-height: 22px;\n    color: var(--jiffyui-naturalDark-1200);\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nspan,\ndd,\ndt,\nstrong,\nlegend {\n    /* font-size: 1.5rem; */\n    font-weight: normal;\n}\n\np,\nspan,\ndd,\ndt,\nlegend {\n    font-family: var(--jiffyui-regular-font);\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n    font-family: var(--jiffyui-bold-font);\n}\n\nstrong,\nb {\n    font-family: var(--jiffyui-medium-font);\n}\n\n.pixel-Text--2XlHeading {\n    font-size: 3rem;\n    font-family: var(--jiffyui-bold-font);\n}\n\n.pixel-Text--XlHeading {\n    font-size: 2.4rem;\n    font-family: var(--jiffyui-bold-font);\n}\n\n.pixel-Text--LgHeading {\n    font-size: 2rem;\n    font-family: var(--jiffyui-bold-font);\n}\n\n.pixel-Text--MdHeading {\n    font-size: 1.4rem;\n    font-family: var(--jiffyui-bold-font);\n}\n\n.pixel-Text--SmHeading {\n    font-size: 1.3rem;\n    font-family: var(--jiffyui-bold-font);\n}\n\n.pixel-Text--XsHeading {\n    font-size: 1.2rem;\n    font-family: var(--jiffyui-bold-font);\n}\n\n.pixel-Text--LgBody {\n    font-size: 1.4rem;\n}\n\n.pixel-Text--MdBody {\n    font-size: 1.3rem;\n}\n\n.pixel-Text--SmBody {\n    font-size: 1.2rem;\n}\n\n.pixel-Text--xsBody {\n    font-size: 1.1rem;\n}\n\n.pixel-Text-light {\n    font-family: var(--jiffyui-light-font);\n}\n\n.pixel-Text-regular {\n    font-family: var(--jiffyui-regular-font);\n}\n\n.pixel-Text-medium {\n    font-family: var(--jiffyui-medium-font);\n}\n\n.pixel-Text-bold {\n    font-family: var(--jiffyui-bold-font);\n}\n\n.pixel-Text--alignLeft {\n    text-align: left;\n}\n\n.pixel-Text--alignCenter {\n    text-align: center;\n}\n\n.pixel-Text--alignRight {\n    text-align: right;\n}\n\n.pixel-Text--alignJustify {\n    text-align: justify;\n}\n\n.pixel-Text-linethrough {\n    text-decoration: line-through;\n}\n\n.pixel-Text-underline {\n    text-decoration: underline;\n}\n\n.pixel-Text-italic {\n    font-style: italic;\n}\n\n/* text color */\n.pixel-text__dark {\n    color: var(--jiffyui-naturalDark-1300);\n}\n\n.pixel-text__primary {\n    color: var(--jiffyui-Cerulean-600);\n}\n\n.pixel-text__secondary {\n    color: var(--jiffyui-naturalDark-900)\n}\n\n.pixel-text__disabled {\n    color: var(--jiffyui-naturalLight-300);\n}\n\n.pixel-text__possitive {\n    color: var(--jiffyui-Possitive-600);\n}\n\n.pixel-text_negative {\n    color: var(--jiffyui-Negative-600);\n}\n\n.pixel-text__waiting {\n    color: var(--jiffyui-Notice-600);\n}\n\n.pixel-text__invert {\n    color: var(--jiffyui-white);\n}\n\n/* .pixel-Text--success {\n    color: var(--jiffyui--success-color);\n}\n.pixel-Text--critical {\n    color: var(--jiffyui--negative-color);\n}\n.pixel-Text--warning {\n    color: var(--jiffyui--warning-color);\n}\n.pixel-Text--primary {\n    color: var(--jiffyui-primary-color);\n}\n.pixel-Text--secondry {\n    color: var(--jiffyui-secondary-color);\n} */";
styleInject(css_248z$r);

var TextStyle = function (_a) {
    var type = _a.type, as = _a.as, textStyle = _a.textStyle, textDecoration = _a.textDecoration, fontWeight = _a.fontWeight, alignment = _a.alignment, _b = _a.children, children = _b === void 0 ? "Demo text" : _b, textColor = _a.textColor; __rest(_a, ["type", "as", "textStyle", "textDecoration", "fontWeight", "alignment", "children", "textColor"]);
    var getColor = function () {
        switch (textColor) {
            case "Dark":
                return "pixel-text__dark";
            case "Primary":
                return "pixel-text__primary";
            case "Secondary":
                return "pixel-text__secondary";
            case "Disabled":
                return "pixel-text__disabled";
            case "Invert":
                return "pixel-text__invert";
            case "Possitve":
                return "pixel-text__possitive";
            case "Negative":
                return "pixel-text_negative";
            case "Waiting":
                return "pixel-text__waiting";
            default:
                return "";
        }
    };
    var getType = function () {
        switch (type) {
            case "XsHeading":
                return "pixel-Text--XsHeading";
            case "SmHeading":
                return "pixel-Text--SmHeading";
            case "MdHeading":
                return "pixel-Text--MdHeading";
            case "LgHeading":
                return "pixel-Text--LgHeading";
            case "XlHeading":
                return "pixel-Text--XlHeading";
            case "2XlHeading":
                return "pixel-Text--2XlHeading";
            case "XsBody":
                return "pixel-Text--xsBody";
            case "SmBody":
                return "pixel-Text--SmBody";
            case "MdBody":
                return "pixel-Text--MdBody";
            case "LgBody":
                return "pixel-Text--LgBody";
            default:
                return "";
        }
    };
    var getAlignment = function () {
        switch (alignment) {
            case "Start":
                return "pixel-Text--alignLeft";
            case "Center":
                return "pixel-Text--alignCenter";
            case "End":
                return "pixel-Text--alignRight";
            case "Justify":
                return "pixel-Text--alignJustify";
            default:
                return "";
        }
    };
    var getFontWeight = function () {
        switch (fontWeight) {
            case "Light":
                return "pixel-Text-light";
            case "Regular":
                return "pixel-Text-regular";
            case "Medium":
                return "pixel-Text-medium";
            case "Bold":
                return "pixel-Text-bold";
            default:
                return "";
        }
    };
    var getTextStyle = function () {
        switch (textStyle) {
            case "Italic":
                return "pixel-Text-italic";
            default:
                return "";
        }
    };
    var getTextDecoration = function () {
        switch (textDecoration) {
            case "UnderLine":
                return "pixel-Text-underline";
            case "lineThrough":
                return "pixel-Text-linethrough";
            default:
                return "";
        }
    };
    var decoration = getTextDecoration();
    var style = getTextStyle();
    var color = getColor();
    var textAlignment = getAlignment();
    var textType = getType();
    var waight = getFontWeight();
    return (jsx(Fragment, { children: as === "dt" ? (jsx("dt", { className: "pixel-Text--root ".concat(decoration, " ").concat(style, " ").concat(color, " ").concat(textAlignment, " ").concat(textType, " ").concat(waight), children: children })) : as === "dd" ? (jsx("dd", { className: "pixel-Text--root ".concat(decoration, " ").concat(style, " ").concat(color, " ").concat(textAlignment, " ").concat(textType, " ").concat(waight), children: children })) : as === "h1" ? (jsx("h1", { className: "pixel-Text--root ".concat(decoration, " ").concat(style, " ").concat(color, " ").concat(textAlignment, " ").concat(textType, " ").concat(waight), children: children })) : as === "h2" ? (jsx("h2", { className: "pixel-Text--root ".concat(decoration, " ").concat(style, " ").concat(color, " ").concat(textAlignment, " ").concat(textType, " ").concat(waight), children: children })) : as === "h3" ? (jsx("h3", { className: "pixel-Text--root ".concat(decoration, " ").concat(style, " ").concat(color, " ").concat(textAlignment, " ").concat(textType, " ").concat(waight), children: children })) : as === "h4" ? (jsx("h4", { className: "pixel-Text--root ".concat(decoration, " ").concat(style, " ").concat(color, " ").concat(textAlignment, " ").concat(textType, " ").concat(waight), children: children })) : as === "h5" ? (jsx("h5", { className: "pixel-Text--root ".concat(decoration, " ").concat(style, " ").concat(color, " ").concat(textAlignment, " ").concat(textType, " ").concat(waight), children: children })) : as === "h6" ? (jsx("h6", { className: "pixel-Text--root ".concat(decoration, " ").concat(style, " ").concat(color, " ").concat(textAlignment, " ").concat(textType, " ").concat(waight), children: children })) : as === "p" ? (jsx("p", { className: "pixel-Text--root ".concat(decoration, " ").concat(style, " ").concat(color, " ").concat(textAlignment, " ").concat(textType, " ").concat(waight), children: children })) : as === "span" ? (jsx("span", { className: "pixel-Text--root ".concat(decoration, " ").concat(style, " ").concat(decoration, " ").concat(style, " ").concat(color, " ").concat(textAlignment, " ").concat(textType, " ").concat(waight), children: children })) : as === "strong" ? (jsx("strong", { className: "pixel-Text--root ".concat(decoration, " ").concat(style, " ").concat(color, " ").concat(textAlignment, " ").concat(textType, " ").concat(waight), children: children })) : as === "legend" ? (jsx("legend", { className: "pixel-Text--root ".concat(decoration, " ").concat(style, " ").concat(color, " ").concat(textAlignment, " ").concat(textType, " ").concat(waight), children: children })) : (jsx("span", { className: "pixel-Text--root ".concat(decoration, " ").concat(style, " ").concat(color, " ").concat(textAlignment, " ").concat(textType, " ").concat(waight), children: children })) }));
};

var CopyClipboard = function (_a) {
    var _b = _a.value, value = _b === void 0 ? "" : _b, label = _a.label, _c = _a.iconAlign, iconAlign = _c === void 0 ? "right" : _c, _d = _a.timeout, timeout = _d === void 0 ? 3000 : _d, _e = _a.onClick, onClick = _e === void 0 ? function () {
        //
    } : _e; _a.customClass;
    var _g = useState(false), status = _g[0], setstatus = _g[1];
    var _h = useState(false), active = _h[0], setactive = _h[1];
    function copyText() {
        !status
            ? navigator.clipboard.writeText(value)
            : navigator.clipboard.writeText("");
    }
    useEffect(function () {
        setTimeout(function () { return setactive(false); }, timeout);
    }, [timeout]);
    return (jsxs("div", { className: "copy-to__clipboard", onClick: onClick, children: [label && iconAlign === "right" && jsx(TextStyle, { as: "p", children: label }), jsx(Button, { children: "", variant: "Secondry", icon: active ? jsx(Check$1, { color: "#00A251", size: 20 }) : jsx(Copy$1, { size: 20 }), onClick: function () {
                    copyText();
                    setstatus(!status);
                    !status && setactive(!active);
                    setTimeout(function () { return setactive(false); }, timeout);
                } }), label && iconAlign === "left" && jsx(TextStyle, { as: "p", children: label })] }));
};

var css_248z$q = ".jiffyui-divider.jiffyui-divider--vertical {\n  height: auto;\n  min-height: 50px;\n  width: 0px;\n  border-left: none !important;\n  border-top: none !important;\n  border-right: 1px solid var(--jiffyui-naturalLight-200);\n  border-bottom: none !important;\n}\n.jiffyui-divider.jiffyui-divider--horizontal {\n  height: 0;\n  border-left: none !important;\n  border-top: none !important;\n  border-right: none !important;\n  border-bottom: 1px solid var(--jiffyui-naturalLight-200);\n}\n.jiffyui-divider.jiffyui-divider--thinner {\n  border-width: var(--jiffyui-borderWidth-thinner);\n}\n.jiffyui-divider.jiffyui-divider--thin {\n  border-width: var(--jiffyui-borderWidth-thin);\n}\n.jiffyui-divider.jiffyui-divider--thick {\n  border-width: var(--jiffyui-borderWidth-thick);\n}\n.jiffyui-divider.jiffyui-divider--thicker {\n  border-width: var(--jiffyui-borderWidth-thicker);\n}\n.jiffyui-divider.jiffyui-divider--solid {\n  border-style: solid;\n}\n.jiffyui-divider.jiffyui-divider--dashed {\n  border-style: dashed;\n}\n.jiffyui-divider.jiffyui-divider--dotted {\n  border-style: dotted;\n}\n.jiffyui-divider.jiffyui-indicator--normal {\n  border-color: var(--jiffyui-naturalLight-300);\n}\n.jiffyui-divider.jiffyui-indicator--subtile {\n  border-color: var(--jiffyui-naturalLight-200);\n}\n.jiffyui-divider.jiffyui-indicator--muted {\n  border-color: var(--jiffyui-naturalLight-100);\n}";
styleInject(css_248z$q);

var Divider = function (_a) {
    var _b = _a.thickness, thickness = _b === void 0 ? "Thinner" : _b, _c = _a.type, type = _c === void 0 ? "Solid" : _c, _d = _a.color, color = _d === void 0 ? "Normal" : _d, _e = _a.orientation, orientation = _e === void 0 ? "Horizontal" : _e; __rest(_a, ["thickness", "type", "color", "orientation"]);
    var checkThikness = function () {
        switch (thickness) {
            case "Thinner":
                return "jiffyui-divider--thinner";
            case "Thin":
                return "jiffyui-divider--thin";
            case "Thick":
                return "jiffyui-divider--thick";
            case "Thicker":
                return "jiffyui-divider--thicker";
            default:
                return "jiffyui-divider--thinner";
        }
    };
    var checkStyle = function () {
        switch (type) {
            case "Solid":
                return "jiffyui-divider--solid";
            case "Dashed":
                return "jiffyui-divider--dashed";
            case "Dotted":
                return "jiffyui-divider--dotted";
            default:
                return "jiffyui-divider--solid";
        }
    };
    var checkColor = function () {
        switch (color) {
            case "Normal":
                return "jiffyui-indicator--normal";
            case "Subtile":
                return "jiffyui-indicator--subtile";
            case "Muted":
                return "jiffyui-indicator--muted";
            default:
                return "jiffyui-indicator--normal";
        }
    };
    var checkOrientation = function () {
        switch (orientation) {
            case "Vertical":
                return "jiffyui-divider--vertical";
            default:
                return "jiffyui-divider--horizontal";
        }
    };
    var dividertThikness = checkThikness();
    var DividerColor = checkColor();
    var dividerStyle = checkStyle();
    var dividerOrientation = checkOrientation();
    return (jsx("div", { className: "jiffyui-divider ".concat(dividertThikness, " ").concat(DividerColor, " ").concat(dividerStyle, " ").concat(dividerOrientation) }));
};

var FlexItem = function (_a) {
    var _b;
    var itemWidth = _a.itemWidth, children = _a.children, order = _a.order; __rest(_a, ["itemWidth", "children", "order"]);
    var getBlockAlignClass = {
        1: "flex-item-1",
        2: "flex-item-2",
        3: "flex-item-3",
        4: "flex-item-4",
        5: "flex-item-5",
        6: "flex-item-6",
        7: "flex-item-7",
        8: "flex-item-8",
        9: "flex-item-9",
        10: "flex-item-10",
        11: "flex-item-11",
        12: "flex-item-12",
    };
    var getItemOrderClass = {
        1: "item-order-1",
        2: "item-order-2",
        3: "item-order-3",
        4: "item-order-4",
        5: "item-order-5",
        6: "item-order-6",
        7: "item-order-7",
        8: "item-order-8",
        9: "item-order-9",
        10: "item-order-10",
    };
    var makeItemOrderClass = function () {
        if (!order)
            return;
        var res = "";
        if (order.lg) {
            res += "".concat(getItemOrderClass[order.lg], "-lg ");
        }
        if (order.md) {
            res += "".concat(getItemOrderClass[order.md], "-md ");
        }
        if (order.sm) {
            res += "".concat(getItemOrderClass[order.sm], "-sm ");
        }
        if (order.xl) {
            res += "".concat(getItemOrderClass[order.xl], "-xl ");
        }
        if (order.xxl) {
            res += "".concat(getItemOrderClass[order.xxl], "-xxl ");
        }
        return res;
    };
    var makeitemWidthClass = function () {
        if (!itemWidth)
            return;
        var res = "";
        if (itemWidth.lg) {
            res += "".concat(getBlockAlignClass[itemWidth.lg], "-lg ");
        }
        if (itemWidth.md) {
            res += "".concat(getBlockAlignClass[itemWidth.md], "-md ");
        }
        if (itemWidth.sm) {
            res += "".concat(getBlockAlignClass[itemWidth.sm], "-sm ");
        }
        if (itemWidth.xl) {
            res += "".concat(getBlockAlignClass[itemWidth.xl], "-xl ");
        }
        if (itemWidth.xxl) {
            res += "".concat(getBlockAlignClass[itemWidth.xxl], "-xxl ");
        }
        return res;
    };
    return (jsx("div", { className: classnames((_b = {
                "flex-item": true
            },
            _b[makeitemWidthClass()] = itemWidth,
            _b[makeItemOrderClass()] = order,
            _b)), children: children }));
};
FlexItem.defaultProps = {
    __TYPE: "FlexItem",
};

var getClassNames$1 = function (classes) {
    return Object.keys(classes)
        .filter(function (className) { return classes[className]; })
        .join(" ");
};

function useWindowResize(debounceDelay) {
    if (debounceDelay === void 0) { debounceDelay = 200; }
    var _a = useState(window.innerWidth), windowWidth = _a[0], setWindowWidth = _a[1];
    var updateWindowWidth = useCallback(function () {
        setWindowWidth(window.innerWidth);
    }, []);
    var debouncedUpdateWindowWidth = useCallback(function () {
        var timeoutId;
        return function () {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(updateWindowWidth, debounceDelay);
        };
    }, [updateWindowWidth, debounceDelay]);
    useEffect(function () {
        var handleResize = debouncedUpdateWindowWidth();
        window.addEventListener("resize", handleResize);
        return function () {
            window.removeEventListener("resize", handleResize);
        };
    }, [debouncedUpdateWindowWidth]);
    return windowWidth;
}

var Grid = function (props) {
    var _a;
    var _b = props.columns, columns = _b === void 0 ? 2 : _b, gap = props.gap, children = props.children, customClass = props.customClass;
    var width = useWindowResize();
    function getGap() {
        if (!gap || typeof gap === "string")
            return gap;
        if (width > 991 && gap.xl) {
            return gap.xl;
        }
        else if (width > 768 && gap.lg) {
            return gap.lg;
        }
        else if (width > 576 && gap.md) {
            return gap.md;
        }
        else if (width < 576 && gap.sm) {
            return gap.sm;
        }
    }
    function getColumns() {
        if (!columns || typeof columns === "number")
            return columns;
        if (width > 991 && columns.xl) {
            return columns.xl;
        }
        else if (width > 768 && columns.lg) {
            return columns.lg;
        }
        else if (width > 576 && columns.md) {
            return columns.md;
        }
        else if (width < 576 && columns.sm) {
            return columns.sm;
        }
    }
    var gridStyle = {
        display: "grid",
        gridTemplateColumns: "repeat(".concat(getColumns(), ", 1fr)"),
        gap: getGap(),
    };
    return (jsx("div", { className: getClassNames$1((_a = {
                "inte-grid": true
            },
            _a[customClass] = customClass,
            _a)), style: gridStyle, children: children }));
};
var Item$2 = function (props) {
    return jsx(React.Fragment, { children: props.children });
};
Grid.Item = Item$2;

var css_248z$p = ".blockAlign-start {\n  align-items: start;\n}\n\n.blockAlign-center {\n  align-items: center;\n}\n\n.blockAlign-end {\n  align-items: end;\n}\n\n.blockAlign-baseline {\n  align-items: baseline;\n}\n\n.blockAlign-stretch {\n  align-items: stretch;\n}\n\n.custom-flex_item {\n  height: 60px;\n  background: #eeeeff;\n  border: 1px solid #e5e5ff;\n  border-radius: 6px;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 15px;\n}\n\n.height-100 > .flex {\n  height: 100%;\n}\n\n.col .custom-flex_item {\n  height: 100%;\n}\n\n.height-100 {\n  height: 100px;\n}\n\n@media (min-width: 1400px) {\n  .flex-item-1-xxl {\n    flex: 0 0 8.3333333333%;\n  }\n  .flex-item-2-xxl {\n    flex: 0 0 16.6666666667%;\n  }\n  .flex-item-3-xxl {\n    flex: 0 0 25%;\n  }\n  .flex-item-4-xxl {\n    flex: 0 0 33.3333333333%;\n  }\n  .flex-item-5-xxl {\n    flex: 0 0 41.6666666667%;\n  }\n  .flex-item-6-xxl {\n    flex: 0 0 50%;\n  }\n  .flex-item-7-xxl {\n    flex: 0 0 58.3333333333%;\n  }\n  .flex-item-8-xxl {\n    flex: 0 0 66.6666666667%;\n  }\n  .flex-item-9-xxl {\n    flex: 0 0 75%;\n  }\n  .flex-item-10-xxl {\n    flex: 0 0 83.3333333333%;\n  }\n  .flex-item-11-xxl {\n    flex: 0 0 91.6666666667%;\n  }\n  .flex-item-12-xxl {\n    flex: 0 0 100%;\n  }\n  .justify-around-xxl {\n    justify-content: space-around;\n  }\n  .justify-start-xxl {\n    justify-content: start;\n  }\n  .justify-center-xxl {\n    justify-content: center;\n  }\n  .justify-end-xxl {\n    justify-content: end;\n  }\n  .justify-between-xxl {\n    justify-content: space-between;\n  }\n  .justify-evenly-xxl {\n    justify-content: space-evenly;\n  }\n  .blockAlign-start-xxl {\n    align-items: start;\n  }\n  .blockAlign-center-xxl {\n    align-items: center;\n  }\n  .blockAlign-end-xxl {\n    align-items: end;\n  }\n  .blockAlign-baseline-xxl {\n    align-items: baseline;\n  }\n  .blockAlign-stretch-xxl {\n    align-items: stretch;\n  }\n  .item-order-1-xxl {\n    order: 1;\n  }\n  .item-order-2-xxl {\n    order: 2;\n  }\n  .item-order-3-xxl {\n    order: 3;\n  }\n  .item-order-4-xxl {\n    order: 4;\n  }\n  .item-order-5-xxl {\n    order: 5;\n  }\n  .item-order-6-xxl {\n    order: 6;\n  }\n  .item-order-7-xxl {\n    order: 7;\n  }\n  .item-order-8-xxl {\n    order: 8;\n  }\n  .item-order-9-xxl {\n    order: 9;\n  }\n  .item-order-10-xxl {\n    order: 10;\n  }\n}\n@media (min-width: 1200px) {\n  .flex-item-1-xl {\n    flex: 0 0 8.3333333333%;\n  }\n  .flex-item-2-xl {\n    flex: 0 0 16.6666666667%;\n  }\n  .flex-item-3-xl {\n    flex: 0 0 25%;\n  }\n  .flex-item-4-xl {\n    flex: 0 0 33.3333333333%;\n  }\n  .flex-item-5-xl {\n    flex: 0 0 41.6666666667%;\n  }\n  .flex-item-6-xl {\n    flex: 0 0 50%;\n  }\n  .flex-item-7-xl {\n    flex: 0 0 58.3333333333%;\n  }\n  .flex-item-8-xl {\n    flex: 0 0 66.6666666667%;\n  }\n  .flex-item-9-xl {\n    flex: 0 0 75%;\n  }\n  .flex-item-10-xl {\n    flex: 0 0 83.3333333333%;\n  }\n  .flex-item-11-xl {\n    flex: 0 0 91.6666666667%;\n  }\n  .flex-item-12-xl {\n    flex: 0 0 100%;\n  }\n  .justify-around-xl {\n    justify-content: space-around;\n  }\n  .justify-start-xl {\n    justify-content: start;\n  }\n  .justify-center-xl {\n    justify-content: center;\n  }\n  .justify-end-xl {\n    justify-content: end;\n  }\n  .justify-between-xl {\n    justify-content: space-between;\n  }\n  .justify-evenly-xl {\n    justify-content: space-evenly;\n  }\n  .blockAlign-start-xl {\n    align-items: start;\n  }\n  .blockAlign-center-xl {\n    align-items: center;\n  }\n  .blockAlign-end-xl {\n    align-items: end;\n  }\n  .blockAlign-baseline-xl {\n    align-items: baseline;\n  }\n  .blockAlign-stretch-xl {\n    align-items: stretch;\n  }\n  .item-order-1-xl {\n    order: 1;\n  }\n  .item-order-2-xl {\n    order: 2;\n  }\n  .item-order-3-xl {\n    order: 3;\n  }\n  .item-order-4-xl {\n    order: 4;\n  }\n  .item-order-5-xl {\n    order: 5;\n  }\n  .item-order-6-xl {\n    order: 6;\n  }\n  .item-order-7-xl {\n    order: 7;\n  }\n  .item-order-8-xl {\n    order: 8;\n  }\n  .item-order-9-xl {\n    order: 9;\n  }\n  .item-order-10-xl {\n    order: 10;\n  }\n}\n@media (min-width: 992px) {\n  .flex-item-1-lg {\n    flex: 0 0 8.3333333333%;\n  }\n  .flex-item-2-lg {\n    flex: 0 0 16.6666666667%;\n  }\n  .flex-item-3-lg {\n    flex: 0 0 25%;\n  }\n  .flex-item-4-lg {\n    flex: 0 0 33.3333333333%;\n  }\n  .flex-item-5-lg {\n    flex: 0 0 41.6666666667%;\n  }\n  .flex-item-6-lg {\n    flex: 0 0 50%;\n  }\n  .flex-item-7-lg {\n    flex: 0 0 58.3333333333%;\n  }\n  .flex-item-8-lg {\n    flex: 0 0 66.6666666667%;\n  }\n  .flex-item-9-lg {\n    flex: 0 0 75%;\n  }\n  .flex-item-10-lg {\n    flex: 0 0 83.3333333333%;\n  }\n  .flex-item-11-lg {\n    flex: 0 0 91.6666666667%;\n  }\n  .flex-item-12-lg {\n    flex: 0 0 100%;\n  }\n  .justify-around-lg {\n    justify-content: space-around;\n  }\n  .justify-start-lg {\n    justify-content: start;\n  }\n  .justify-center-lg {\n    justify-content: center;\n  }\n  .justify-end-lg {\n    justify-content: end;\n  }\n  .justify-between-lg {\n    justify-content: space-between;\n  }\n  .justify-evenly-lg {\n    justify-content: space-evenly;\n  }\n  .blockAlign-start-lg {\n    align-items: start;\n  }\n  .blockAlign-center-lg {\n    align-items: center;\n  }\n  .blockAlign-end-lg {\n    align-items: end;\n  }\n  .blockAlign-baseline-lg {\n    align-items: baseline;\n  }\n  .blockAlign-stretch-lg {\n    align-items: stretch;\n  }\n  .item-order-1-lg {\n    order: 1;\n  }\n  .item-order-2-lg {\n    order: 2;\n  }\n  .item-order-3-lg {\n    order: 3;\n  }\n  .item-order-4-lg {\n    order: 4;\n  }\n  .item-order-5-lg {\n    order: 5;\n  }\n  .item-order-6-lg {\n    order: 6;\n  }\n  .item-order-7-lg {\n    order: 7;\n  }\n  .item-order-8-lg {\n    order: 8;\n  }\n  .item-order-9-lg {\n    order: 9;\n  }\n  .item-order-10-lg {\n    order: 10;\n  }\n}\n@media (min-width: 768px) {\n  .flex-item-1-md {\n    flex: 0 0 8.3333333333%;\n  }\n  .flex-item-2-md {\n    flex: 0 0 16.6666666667%;\n  }\n  .flex-item-3-md {\n    flex: 0 0 25%;\n  }\n  .flex-item-4-md {\n    flex: 0 0 33.3333333333%;\n  }\n  .flex-item-5-md {\n    flex: 0 0 41.6666666667%;\n  }\n  .flex-item-6-md {\n    flex: 0 0 50%;\n  }\n  .flex-item-7-md {\n    flex: 0 0 58.3333333333%;\n  }\n  .flex-item-8-md {\n    flex: 0 0 66.6666666667%;\n  }\n  .flex-item-9-md {\n    flex: 0 0 75%;\n  }\n  .flex-item-10-md {\n    flex: 0 0 83.3333333333%;\n  }\n  .flex-item-11-md {\n    flex: 0 0 91.6666666667%;\n  }\n  .flex-item-12-md {\n    flex: 0 0 100%;\n  }\n  .justify-around-md {\n    justify-content: space-around;\n  }\n  .justify-start-md {\n    justify-content: start;\n  }\n  .justify-center-md {\n    justify-content: center;\n  }\n  .justify-end-md {\n    justify-content: end;\n  }\n  .justify-between-md {\n    justify-content: space-between;\n  }\n  .justify-evenly-md {\n    justify-content: space-evenly;\n  }\n  .blockAlign-start-md {\n    align-items: start;\n  }\n  .blockAlign-center-md {\n    align-items: center;\n  }\n  .blockAlign-end-md {\n    align-items: end;\n  }\n  .blockAlign-baseline-md {\n    align-items: baseline;\n  }\n  .blockAlign-stretch-md {\n    align-items: stretch;\n  }\n  .item-order-1-md {\n    order: 1;\n  }\n  .item-order-2-md {\n    order: 2;\n  }\n  .item-order-3-md {\n    order: 3;\n  }\n  .item-order-4-md {\n    order: 4;\n  }\n  .item-order-5-md {\n    order: 5;\n  }\n  .item-order-6-md {\n    order: 6;\n  }\n  .item-order-7-md {\n    order: 7;\n  }\n  .item-order-8-md {\n    order: 8;\n  }\n  .item-order-9-md {\n    order: 9;\n  }\n  .item-order-10-md {\n    order: 10;\n  }\n}\n@media (max-width: 767px) {\n  .flex-item-1-sm {\n    flex: 0 0 8.3333333333%;\n  }\n  .flex-item-2-sm {\n    flex: 0 0 16.6666666667%;\n  }\n  .flex-item-3-sm {\n    flex: 0 0 25%;\n  }\n  .flex-item-4-sm {\n    flex: 0 0 33.3333333333%;\n  }\n  .flex-item-5-sm {\n    flex: 0 0 41.6666666667%;\n  }\n  .flex-item-6-sm {\n    flex: 0 0 50%;\n  }\n  .flex-item-7-sm {\n    flex: 0 0 58.3333333333%;\n  }\n  .flex-item-8-sm {\n    flex: 0 0 66.6666666667%;\n  }\n  .flex-item-9-sm {\n    flex: 0 0 75%;\n  }\n  .flex-item-10-sm {\n    flex: 0 0 83.3333333333%;\n  }\n  .flex-item-11-sm {\n    flex: 0 0 91.6666666667%;\n  }\n  .flex-item-12-sm {\n    flex: 0 0 100%;\n  }\n  .justify-around-sm {\n    justify-content: space-around;\n  }\n  .justify-start-sm {\n    justify-content: start;\n  }\n  .justify-center-sm {\n    justify-content: center;\n  }\n  .justify-end-sm {\n    justify-content: end;\n  }\n  .justify-between-sm {\n    justify-content: space-between;\n  }\n  .justify-evenly-sm {\n    justify-content: space-evenly;\n  }\n  .blockAlign-start-sm {\n    align-items: start;\n  }\n  .blockAlign-center-sm {\n    align-items: center;\n  }\n  .blockAlign-end-sm {\n    align-items: end;\n  }\n  .blockAlign-baseline-sm {\n    align-items: baseline;\n  }\n  .blockAlign-stretch-sm {\n    align-items: stretch;\n  }\n  .item-order-1-sm {\n    order: 1;\n  }\n  .item-order-2-sm {\n    order: 2;\n  }\n  .item-order-3-sm {\n    order: 3;\n  }\n  .item-order-4-sm {\n    order: 4;\n  }\n  .item-order-5-sm {\n    order: 5;\n  }\n  .item-order-6-sm {\n    order: 6;\n  }\n  .item-order-7-sm {\n    order: 7;\n  }\n  .item-order-8-sm {\n    order: 8;\n  }\n  .item-order-9-sm {\n    order: 9;\n  }\n  .item-order-10-sm {\n    order: 10;\n  }\n}";
styleInject(css_248z$p);

var HorizontalFlex = function (props) {
    var _a;
    var children = props.children, gap = props.gap, _b = props.wrap, wrap = _b === void 0 ? true : _b, align = props.align, blockAlign = props.blockAlign;
    var getBlockAlignClass = {
        start: "blockAlign-start",
        center: "blockAlign-center",
        end: "blockAlign-end",
        baseline: "blockAlign-baseline",
        stretch: "blockAlign-stretch",
    };
    var getAlignClass = {
        start: "justify-start",
        center: "justify-center",
        end: "justify-end",
        spaceAround: "justify-around",
        spaceBetween: "justify-between",
        spaceEvenly: "justify-evenly",
    };
    var childrens = React.Children.toArray(children);
    var newChildrens = childrens.map(function (children, index) {
        var _a;
        if (children.props && ((_a = children.props) === null || _a === void 0 ? void 0 : _a.__TYPE) === "FlexItem") {
            return children;
        }
        else {
            return jsx(FlexItem, { children: children }, index);
        }
    });
    var makeAlignClass = function () {
        if (!align)
            return;
        var res = "";
        if (align.lg) {
            res += "".concat(getAlignClass[align.lg], "-lg ");
        }
        if (align.md) {
            res += "".concat(getAlignClass[align.md], "-md ");
        }
        if (align.sm) {
            res += "".concat(getAlignClass[align.sm], "-sm ");
        }
        if (align.xl) {
            res += "".concat(getAlignClass[align.xl], "-xl ");
        }
        if (align.xxl) {
            res += "".concat(getAlignClass[align.xxl], "-xxl ");
        }
        return res;
    };
    var makeBlockAlignClass = function () {
        if (!blockAlign)
            return;
        var res = "";
        if (blockAlign.lg) {
            res += "".concat(getBlockAlignClass[blockAlign.lg], "-lg ");
        }
        if (blockAlign.md) {
            res += "".concat(getBlockAlignClass[blockAlign.md], "-md ");
        }
        if (blockAlign.sm) {
            res += "".concat(getBlockAlignClass[blockAlign.sm], "-sm ");
        }
        if (blockAlign.xl) {
            res += "".concat(getBlockAlignClass[blockAlign.xl], "-xl ");
        }
        if (blockAlign.xxl) {
            res += "".concat(getBlockAlignClass[blockAlign.xxl], "-xxl ");
        }
        return res;
    };
    return (jsx("div", { className: classnames((_a = {
                'flex-row': true
            },
            _a["gap-" + gap] = gap,
            _a["flex-wrap"] = wrap,
            _a["flex-noWrap"] = !wrap,
            _a[makeAlignClass()] = align,
            _a[makeBlockAlignClass()] = blockAlign,
            _a)), children: newChildrens }));
};

var css_248z$o = ".jiffyui-indicator {\n  display: inline-flex;\n  align-items: center;\n}\n\nspan.jiffyui-indicator-dot {\n  width: 8px;\n  height: 8px;\n  display: inline-block;\n  background: var(--jiffyui-naturalDark-1300);\n  border-radius: 100%;\n  vertical-align: middle;\n}\n\n.jiffyui-indicator .jiffyui-indicator-label {\n  color: var(--jiffyui-naturalDark-1100);\n  margin-left: 0.5rem;\n}\n\n.jiffyui-indicator--possitive .jiffyui-indicator-dot {\n  background-color: var(--jiffyui-Possitive-600);\n}\n\n.jiffyui-indicator--negative .jiffyui-indicator-dot {\n  background-color: var(--jiffyui-Negative-600);\n}\n\n.jiffyui-indicator--waiting .jiffyui-indicator-dot {\n  background-color: var(--jiffyui-Notice-400);\n}\n\n.jiffyui-indicator--primary .jiffyui-indicator-dot {\n  background-color: var(--jiffyui-Cerulean-600);\n}\n\n.jiffyui-indicator--small .jiffyui-indicator-dot {\n  height: 6px;\n  width: 6px;\n}\n\n.jiffyui-indicator--small .jiffyui-indicator-label {\n  font-size: 10px;\n}\n\n.jiffyui-indicator--medium .jiffyui-indicator-dot {\n  width: 8px;\n  height: 8px;\n}\n\n.jiffyui-indicator--medium .jiffyui-indicator-label {\n  font-size: 12px;\n}\n\n.jiffyui-indicator--large .jiffyui-indicator-dot {\n  width: 10px;\n  height: 10px;\n}\n\n.jiffyui-indicator--large .jiffyui-indicator-label {\n  font-size: 14px;\n}\n\n.jiffyui-indicator.has-string .jiffyui-indicator-dot {\n  width: auto !important;\n  height: auto !important;\n  min-width: 20px !important;\n  min-height: 15px !important;\n  font-size: 12px;\n  text-align: center;\n  color: #fff;\n  padding: 3px;\n  line-height: normal;\n}";
styleInject(css_248z$o);

var Indicator = function (_a) {
    var label = _a.label, _b = _a.color, color = _b === void 0 ? "Positive" : _b, _c = _a.size, size = _c === void 0 ? "Medium" : _c, content = _a.content; __rest(_a, ["label", "color", "size", "content"]);
    var checkColor = function () {
        switch (color) {
            case "Positive":
                return "jiffyui-indicator--possitive";
            case "Negative":
                return "jiffyui-indicator--negative";
            case "Notice":
                return "jiffyui-indicator--waiting";
            case "Information":
                return "jiffyui-indicator--info";
            case "Neutral":
                return "jiffyui-indicator--neutral";
            case "Primary":
                return "jiffyui-indicator--primary";
            default:
                return "jiffyui-indicator--neutral";
        }
    };
    var checkSize = function () {
        switch (size) {
            case "Small":
                return "jiffyui-indicator--small";
            case "Medium":
                return "jiffyui-indicator--medium";
            case "Large":
                return "jiffyui-indicator--large";
            default:
                return "jiffyui-indicator--medium";
        }
    };
    // function checkContent() {
    //     if (content == "") {
    //         return "has-string";
    //     } else {
    //         return "";
    //     }
    // }
    // const contentClass = checkContent();
    var IndicatorColor = checkColor();
    var IndicatorSize = checkSize();
    return (jsxs("div", { className: "jiffyui-indicator ".concat(IndicatorColor, " ").concat(IndicatorSize, " ").concat(content ? "has-string" : ""), children: [jsx("span", { className: "jiffyui-indicator-dot", children: content }), label && (jsx("label", { className: "jiffyui-indicator-label", children: label }))] }));
};

var css_248z$n = ".jiffyui-checkbox {\n  position: relative;\n  min-height: 2rem;\n  min-width: 2rem;\n  display: inline-flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n.jiffyui-checkbox > label {\n  display: inline-flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n.jiffyui-checkbox--fake {\n  position: absolute;\n  height: 2rem;\n  width: 2rem;\n  z-index: 1;\n  cursor: pointer;\n  opacity: 0;\n}\n.jiffyui-checkbox--fake:checked + .jiffyui-checkboxWrap > .Pixel__checkboxEle--fake, .jiffyui-checkbox--fake:indeterminate + .jiffyui-checkboxWrap > .Pixel__checkboxEle--fake {\n  background-color: var(--jiffyui-Cerulean-600);\n  border-color: var(--jiffyui-Cerulean-600);\n}\n.jiffyui-checkbox--fake:hover + .jiffyui-checkboxWrap .Pixel__checkboxEle--fake {\n  border-color: var(--jiffyui-Cerulean-600);\n}\n\n.jiffyui-Group__list {\n  display: flex;\n  flex-direction: column;\n  gap: 0.8rem;\n}\n\n.jiffyui-Group__list.jiffyui-Group__list--horizontal {\n  flex-direction: row;\n  gap: 2.4rem;\n}\n\n.input-group-label {\n  cursor: pointer;\n  color: var(--jiffyui-naturalDark-1300);\n  font-size: 1.4rem;\n  line-height: 2rem;\n  font-family: var(--jiffyui-medium-font);\n  margin-bottom: 0.4rem;\n}\n\n.jiffyui-checkboxWrap {\n  display: inline-flex;\n  justify-content: flex-start;\n  align-items: center;\n  cursor: pointer;\n  gap: 1.2rem;\n}\n.jiffyui-checkboxWrap .jiffyui-checkbox__label {\n  cursor: pointer;\n  color: var(--jiffyui-naturalDark-1300);\n  font-size: 1.4rem;\n  line-height: 2rem;\n  font-family: var(--jiffyui-medium-font);\n}\n.jiffyui-checkboxWrap .Pixel__checkboxEle--fake {\n  height: 2rem;\n  width: 2rem;\n  border-radius: 0.5rem;\n  position: relative;\n  min-width: 2rem;\n  border: 0.15rem solid var(--jiffyui-naturalLight-300);\n  transition: 100ms all linear;\n  background-color: #ffffff;\n}\n\n.jiffyui-checkbox .jiffyui-checkbox--fake + .jiffyui-checkboxWrap > .Pixel__checkboxEle--fake::after {\n  content: \"\";\n  height: 1.2rem;\n  width: 1.2rem;\n  transform: rotate(0deg) scale(0, 0);\n  position: absolute;\n  top: 0.27rem;\n  opacity: 0;\n  visibility: hidden;\n  left: 0.27rem;\n  transition: 100ms linear all;\n  transform-origin: center center;\n  background-image: url(\"data:image/svg+xml;base64,Cjxzdmcgd2lkdGg9IjEyIiBoZWlnaHQ9IjEyIiB2aWV3Qm94PSIwIDAgMTIgMTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xMCAzTDQuNSA4LjVMMiA2IiBzdHJva2U9IiNGQUZBRkIiIHN0cm9rZS13aWR0aD0iMS42IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==\");\n}\n\n.jiffyui-checkbox .jiffyui-checkbox--fake:checked + .jiffyui-checkboxWrap > .Pixel__checkboxEle--fake::after,\n.jiffyui-checkbox .jiffyui-checkbox--fake:indeterminate + .jiffyui-checkboxWrap > .Pixel__checkboxEle--fake::after {\n  transform: rotate(0deg) scale(1);\n  opacity: 1;\n  visibility: visible;\n}\n\n.jiffyui-checkbox .jiffyui-checkbox--fake:indeterminate + .jiffyui-checkboxWrap > .Pixel__checkboxEle--fake::after {\n  background-image: url(\"data:image/svg+xml;base64,Cjxzdmcgd2lkdGg9IjEyIiBoZWlnaHQ9IjEyIiB2aWV3Qm94PSIwIDAgMTIgMTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0yLjUgNkg5LjUiIHN0cm9rZT0iI0ZBRkFGQiIgc3Ryb2tlLXdpZHRoPSIxLjYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K\");\n}\n\n.jiffyui-checkbox.jiffyui-checkbox--disabled .jiffyui-checkboxWrap {\n  cursor: not-allowed;\n}\n.jiffyui-checkbox.jiffyui-checkbox--disabled .jiffyui-checkboxWrap .Pixel__checkboxEle--fake,\n.jiffyui-checkbox.jiffyui-checkbox--disabled .jiffyui-checkboxWrap .jiffyui-checkbox__label {\n  cursor: not-allowed;\n  z-index: 1;\n  border-color: rgb(226, 234, 243);\n  color: rgba(108, 132, 157, 0.32);\n  user-select: none;\n}\n.jiffyui-checkbox.jiffyui-checkbox--disabled .jiffyui-checkbox--fake:checked + .jiffyui-checkboxWrap > .Pixel__checkboxEle--fake,\n.jiffyui-checkbox.jiffyui-checkbox--disabled .jiffyui-checkbox--fake:indeterminate + .jiffyui-checkboxWrap > .Pixel__checkboxEle--fake {\n  background: #cbcbcb;\n  border-color: #cbcbcb;\n}";
styleInject(css_248z$n);

var Checkbox = function (props) {
    var value = props.value, onChange = props.onChange, _a = props.checked, checked = _a === void 0 ? false : _a, isDisabled = props.isDisabled, hasError = props.hasError, name = props.name, label = props.label, required = props.required;
    var rId = useId();
    var handleCheckbox = function (e) {
        e.stopPropagation();
        if (checked === "indeterminate")
            e.target.indeterminate = "true";
        if (!onChange || isDisabled)
            return;
        onChange(!checked, value);
    };
    return (jsx("div", { className: classnames({
            "jiffyui-checkbox": true,
            "jiffyui-checkbox--disabled": isDisabled,
            "jiffyui-checkbox--hasError": hasError,
        }), children: jsxs("label", { htmlFor: "jiffyui-checkbox-".concat(rId), children: [jsx("input", { disabled: isDisabled, "aria-label": "jiffyui-checkbox-".concat(rId), "aria-checked": checked === "indeterminate" ? "mixed" : checked, id: "jiffyui-checkbox-".concat(rId), type: "checkbox", name: name, ref: function (ele) {
                        if (!ele)
                            return;
                        if (checked === "indeterminate")
                            ele.indeterminate = true;
                        else
                            ele.indeterminate = false;
                    }, onChange: handleCheckbox, value: value, onClick: handleCheckbox, checked: !!checked, className: classnames({
                        "jiffyui-checkbox--fake": true,
                    }) }), jsxs("span", { className: "jiffyui-checkboxWrap", children: [jsx("span", { className: "Pixel__checkboxEle--fake" }), label && (jsx("span", { className: "jiffyui-checkbox__label ".concat(required ? "jiffyui--required" : "").trim(), children: label }))] })] }) }));
};

var css_248z$m = ".jiffyui-form__label {\n  margin-bottom: 0.4rem;\n  display: inline-block;\n  word-break: break-word;\n  color: var(--jiffyui-naturalDark-1300);\n  font-size: 1.4rem;\n  line-height: 2rem;\n  font-family: var(--jiffyui-medium-font);\n}\n\n.jiffyui-formElement .jiffyui-formElement__textField,\n.jiffyui-formElement__textArea {\n  border: 1px solid var(--jiffyui-naturalLight-300);\n}\n\n.jiffyui-formGroup {\n  display: flex;\n  flex-direction: column;\n  gap: 0.8rem;\n}\n\n.jiffyui-formGroup .jiffyui-formElement__itemHelp {\n  margin-top: 0;\n}\n\n.jiffyui-formGroup__list {\n  margin-bottom: 0;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.jiffyui-formGroup__list--vertical {\n  gap: 0.8rem;\n  flex-direction: column;\n}\n\n.jiffyui-formGroup__list--horizontal {\n  gap: 1.6rem;\n  flex-direction: row;\n}\n\n.jiffyui-formGroup__listitem--clickable {\n  cursor: pointer;\n}";
styleInject(css_248z$m);

var CheckboxGroup = function (props) {
    var _a;
    var title = props.title, isClickableFullItem = props.isClickableFullItem, name = props.name, _b = props.value, value = _b === void 0 ? [] : _b, onChange = props.onChange, direction = props.direction, options = props.options, helpIcon = props.helpIcon, type = props.type;
    var getcontrolStates = {
        success: "jiffyui-formElement--success",
        warning: "jiffyui-formElement--warning",
        error: "jiffyui-formElement--error",
    };
    var controlStatesVal = type && getcontrolStates[type];
    var _c = useState([]), grpVal = _c[0], setGrpVal = _c[1];
    var handleCheckboxGroupChange = function (state, val) {
        var curr = __spreadArray([], grpVal, true);
        if (state)
            curr = __spreadArray(__spreadArray([], curr, true), [val], false);
        else
            curr = curr.filter(function (i) { return i !== val; });
        onChange === null || onChange === void 0 ? void 0 : onChange(curr);
    };
    useEffect(function () {
        setGrpVal(__spreadArray([], value, true));
    }, [value]);
    return (jsxs("div", { className: classnames((_a = {
                "jiffyui-formGroup": true
            },
            _a[controlStatesVal] = controlStatesVal,
            _a)), children: [title && (jsx("h2", { className: "input-group-label", children: title })), jsx("ul", { className: "jiffyui-Group__list jiffyui-Group__list--".concat(direction), children: options.map(function (item, index) {
                    return (jsx("li", { className: classnames({
                            "jiffyui-Group__listItem": true,
                            "jiffyui-Group__listitem--clickable": isClickableFullItem,
                        }), children: jsx(Checkbox, { isDisabled: item.isDisabled, label: item.label, value: item.value, checked: value.includes(item.value), onChange: handleCheckboxGroupChange, name: name }) }, index));
                }) }), props.helpText && (jsxs("span", { className: classnames({
                    "jiffyui-formElement__itemHelp": true,
                    "jiffyui-formElement__itemHelp--hasHelpIcon": helpIcon,
                }), children: [helpIcon && jsx("span", { style: { display: "flex" }, children: helpIcon }), jsx("span", { children: props.helpText })] }))] }));
};

var Fileprogress = function () {
    return (jsx("div", { "aria-label": "Checking", children: jsx("div", { className: "jiffyui-file--progress", children: jsx("div", { className: "jiffyui-file--progressContainer", children: jsx("div", { className: "jiffyui-file--progressLoadingItem" }) }) }) }));
};

var CheckIcon = function () {
    return (jsxs("svg", { "aria-hidden": "true", height: "16px", viewBox: "0 0 24 24", width: "16px", fill: "none", children: [jsxs("g", { clipPath: "url(#clip0_60_208)", children: [jsx("path", { d: "M4.15845 7.14679C6.74812 4.11688 11.0222 3.1512 14.663 4.77343C15.1675 4.99821 15.7586 4.77147 15.9834 4.267C16.2082 3.76253 15.9815 3.17135 15.477 2.94657C11.0272 0.96385 5.80325 2.14413 2.6381 5.84735C-0.527049 9.55057 -0.879431 14.8946 1.77205 18.9813C4.42353 23.0681 9.44725 24.9241 14.1189 23.5429C18.7905 22.1616 21.9972 17.8716 22 13V12.07C22 11.5177 21.5523 11.07 21 11.07C20.4477 11.07 20 11.5177 20 12.07V12.9994C19.9977 16.9852 17.3741 20.4948 13.5518 21.6249C9.72957 22.7551 5.61926 21.2365 3.44986 17.8928C1.28047 14.5491 1.56878 10.1767 4.15845 7.14679Z", fill: 'var(--jiffyui-Possitive-700)' }), jsx("path", { d: "M22.7071 4.70711C23.0976 4.31658 23.0976 3.68342 22.7071 3.29289C22.3166 2.90237 21.6834 2.90237 21.2929 3.29289L11 13.5858L8.70711 11.2929C8.31658 10.9024 7.68342 10.9024 7.29289 11.2929C6.90237 11.6834 6.90237 12.3166 7.29289 12.7071L10.2929 15.7071C10.6834 16.0976 11.3166 16.0976 11.7071 15.7071L22.7071 4.70711Z", fill: "var(--jiffyui-Possitive-700)" })] }), jsx("defs", { children: jsx("clipPath", { id: "clip0_60_208", children: jsx("rect", { height: "24", width: "24", fill: "white" }) }) })] }));
};
var FileType = function () {
    return (jsxs("svg", { "aria-hidden": "true", height: 39, viewBox: "0 0 38 39", width: 38, fill: "none", children: [jsx("path", { d: "M5.5 31.5801H3L5.5 34.0801V31.5801Z", fill: "var(--jiffyui-Cerulean-600)" }), jsx("path", { d: "M32.7998 31.5801H35.2998L32.7998 34.0801V31.5801Z", fill: "var(--jiffyui-Cerulean-600)" }), jsx("path", { d: "M6.35552 2.71162C6.91384 2.09227 7.66518 1.75 8.44238 1.75H25.9153L32.832 9.42294V33.5872C32.832 34.4743 32.514 35.3206 31.955 35.9408C31.3966 36.5601 30.6453 36.9024 29.8681 36.9024H8.44238C7.66518 36.9024 6.91384 36.5601 6.35552 35.9408C5.79644 35.3206 5.47852 34.4743 5.47852 33.5872V5.06524C5.47852 4.17809 5.79644 3.33184 6.35552 2.71162Z", clipRule: "evenodd", fill: "hsla(201, 92%, 95%, 1)", fillRule: "evenodd", stroke: "var(--jiffyui-Cerulean-600)" }), jsx("path", { d: "M3 19.3262H35.31V31.5817H3V19.3262Z", fill: "var(--jiffyui-Cerulean-600)", strokeWidth: "0.5" })] }));
};

var FileItem = function (_a) {
    var removeImage = _a.removeImage, accept = _a.accept, item = _a.item, sizeAllowed = _a.sizeAllowed, fileUpload = _a.fileUpload;
    var _b = useState(false), isError = _b[0], setIsError = _b[1];
    var _c = useState(""), status = _c[0], setStatus = _c[1];
    var formatBytes = function (bytes) {
        var units = ["B", "KB", "MB"];
        var i = 0;
        for (i; bytes > 1024; i++) {
            bytes /= 1024;
        }
        return bytes.toFixed(1) + " " + units[i];
    };
    var fileExtension = item.data.name.split(".").pop().toLowerCase();
    useEffect(function () {
        var validTypes = new Set(accept);
        var checkType = function () { return validTypes.has(fileExtension); };
        var checkSize = function () { return item.data.size > sizeAllowed; };
        function callTimeout() {
            setStatus("Uploaded");
            setIsError(false);
        }
        var checkValidTypes = function () {
            if (sizeAllowed && !checkSize()) {
                callTimeout();
            }
            else if (!sizeAllowed) {
                callTimeout();
            }
            else {
                setStatus("Size not allowed");
                setIsError(true);
            }
        };
        if (accept && checkType()) {
            checkValidTypes();
        }
        else if (!accept) {
            checkValidTypes();
        }
        else {
            setStatus("unsupported file");
            setIsError(true);
        }
    }, []);
    return (jsxs("div", { className: "jiffyui-fileItem", children: [jsx("div", { className: classnames({
                    "jiffyui-item__wrapper": true,
                    "jiffyui-item--error": isError,
                }), children: jsx("div", { className: "jiffyui-item", children: jsxs("div", { className: "jiffyui-item__container", children: [jsx("div", { className: "jiffyui-item__formatIcon", children: jsxs("div", { className: "jiffyui-item__format", children: [jsx(FileType, {}), jsxs("p", { className: "jiffyui-item__formatName", children: [".", fileExtension] })] }) }), jsxs("div", { className: "jiffyui-item__name", children: [jsxs("div", { className: "jiffyui-item__nameWrapper", children: [jsx("div", { className: "jiffyui-item__fileName", children: jsxs("p", { children: [" ", item.data.name] }) }), fileUpload && jsx(CheckIcon, {})] }), jsxs("p", { className: "jiffyui-item__size", children: [" ", formatBytes(item.data.size), " ", isError && jsxs("span", { children: ["- ", status] })] })] }), jsx("div", { className: "jiffyui-item__clear", children: jsx("button", { type: "button", "aria-label": "Remove File", className: "jiffyui-item__button", onClick: function () { return removeImage(item.id); }, children: jsx(Trash2$1, { height: 16, width: 16 }) }) })] }) }) }), !fileUpload && jsx(Fileprogress, {})] }));
};
var FileItem$1 = React.memo(FileItem);

var css_248z$l = ".jiffyui-fileUpload__dropZone {\n  border-radius: 0.6rem;\n  cursor: pointer;\n  border: 0.1rem dashed rgb(177, 193, 210);\n  background-color: #ffffff;\n  height: 56px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.jiffyui-fileUpload__inputBox {\n  display: none;\n}\n\n.jiffyui-fileUpload__uploadText {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  white-space: pre;\n}\n\n.jiffyui-fileUpload__uploadText span:first-child {\n  margin: 0px;\n  padding: 0px;\n  color: var(--jiffyui-naturalDark-1300);\n  font-size: 1.4rem;\n  line-height: 2rem;\n  font-family: var(--jiffyui-medium-font);\n}\n\n.jiffyui-fileUpload__uploadText span:nth-child(2),\n.jiffyui-fileUpload__fileSize {\n  color: var(--jiffyui-Cerulean-600);\n  font-size: 1.4rem;\n  font-weight: 400;\n  text-decoration: underline;\n  line-height: 1rem;\n  letter-spacing: 0px;\n  margin: 0px;\n  padding: 0px;\n}\n\n/* Helper text */\n.jiffyui-fileUpload__itemHelp {\n  margin-bottom: 1.6rem;\n  display: block;\n  font-weight: 400;\n  font-style: italic;\n  font-size: 1.3rem;\n  line-height: 1.6rem;\n  text-align: left;\n  margin-top: 0.6rem;\n  color: var(--jiffyui-naturalLight-600);\n}\n\n.jiffyui-fileUpload__itemHelp--HasHelpIcon {\n  display: flex;\n  gap: 0.8rem;\n  align-items: flex-start;\n}\n\n.jiffyui-fileUpload__dropZone:not(.jiffyui-fileUpload__dropZone--disabled):hover,\n.jiffyui-fileUpload--dragOver {\n  background-color: rgba(108, 132, 157, 0.18);\n}\n\n/* Helper Text End */\n.jiffyui-item__wrapper.jiffyui-item--error {\n  border: 0.1rem solid #DF5146;\n  background-color: #FFF4F4;\n}\n\n.jiffyui-item__wrapper {\n  border-radius: 0.6rem;\n  position: relative;\n  overflow: hidden;\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  background-color: #f7f7f7;\n  transition-property: background-color;\n  transition-timing-function: cubic-bezier(0.3, 0, 0.2, 1);\n  transition-duration: 70ms;\n  border: 1px solid var(--jiffyui-naturalLight-300);\n  word-break: break-all;\n  padding: 1rem 5px;\n}\n\n.jiffyui-fileUpload__dropZone--disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n\n.jiffyui-fileItem {\n  margin-bottom: 0.8rem;\n}\n\n.jiffyui-item {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n\n.jiffyui-item__container {\n  display: flex;\n  flex-direction: row;\n  margin: 8px;\n}\n\n.jiffyui-item__formatIcon {\n  margin-right: 8px;\n}\n\n.jiffyui-item__name {\n  -webkit-box-flex: 1;\n  flex-grow: 1;\n}\n\n.jiffyui-item__clear {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n\n.jiffyui-item__format {\n  display: flex;\n  justify-content: center;\n  position: relative;\n}\n\n.jiffyui-item__formatName {\n  color: rgb(255, 255, 255);\n  font-size: 1rem;\n  font-weight: 400;\n  font-style: normal;\n  text-decoration-line: none;\n  line-height: 1.4rem;\n  letter-spacing: 0px;\n  margin: 0px;\n  padding: 0px;\n  position: absolute;\n  top: 46%;\n}\n\n.jiffyui-item__nameWrapper {\n  display: flex;\n  align-items: center;\n}\n\n.jiffyui-item__size {\n  color: var(--jiffyui-naturalLight-500);\n  font-size: 1.2rem;\n  font-weight: 400;\n  font-style: normal;\n  text-decoration-line: none;\n  line-height: 1.8rem;\n  letter-spacing: 0px;\n  margin: 0px;\n  padding: 0px;\n}\n\n.jiffyui-item__fileName {\n  display: flex;\n  align-items: center;\n  margin-right: 8px;\n  max-width: 70%;\n}\n\n.jiffyui-item__fileName p {\n  color: var(--jiffyui-naturalDark-900);\n  font-size: 1.4rem;\n  font-weight: 500;\n  font-style: normal;\n  text-decoration-line: none;\n  line-height: 2rem;\n  letter-spacing: 0px;\n  margin: 0px;\n  padding: 0px;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  -webkit-box-orient: vertical;\n  overflow-wrap: break-word;\n}\n\n.jiffyui-item__button {\n  border: none;\n  cursor: pointer;\n  padding: 0px;\n  border-radius: 2px;\n  background: transparent;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--jiffyui-Negative-600);\n  transition-property: color, box-shadow;\n  transition-duration: 150ms;\n  transition-timing-function: cubic-bezier(0.3, 0, 0.2, 1);\n}\n\n.jiffyui-file--progress {\n  overflow: hidden;\n  position: relative;\n  height: 2px;\n  background-color: rgba(108, 132, 157, 0.09);\n}\n\n.jiffyui-file--progressContainer {\n  animation: 900ms linear 0s infinite normal none running loader;\n  position: absolute;\n  width: 4%;\n  height: 100%;\n  background-color: rgb(46, 91, 255);\n}\n\n@keyframes loader {\n  0% {\n    left: -8%;\n    transform: scaleX(1);\n  }\n  50% {\n    left: 50%;\n    transform: scaleX(5);\n  }\n  100% {\n    left: 103%;\n    transform: scaleX(1);\n  }\n}\n.jiffyui-file--progressLoadingItem {\n  position: absolute;\n  width: 2%;\n  height: 100%;\n  opacity: 0;\n  background-color: white;\n  animation: 900ms cubic-bezier(0.5, 0, 0, 1) 3000ms infinite normal none running;\n}";
styleInject(css_248z$l);

var FileUpload = function (props) {
    var isMultiple = props.isMultiple, _a = props.isDragable, isDragable = _a === void 0 ? true : _a, onChange = props.onChange, onRemove = props.onRemove, isDisabled = props.isDisabled, maxCount = props.maxCount, accept = props.accept, helpText = props.helpText, helpIcon = props.helpIcon, maxSize = props.maxSize, onError = props.onError, isFileUploaded = props.isFileUploaded;
    var _b = useState([]), filesData = _b[0], setFilesData = _b[1];
    var _c = useState(false), isDragOver = _c[0], setIsDragOver = _c[1];
    var inputUploadRef = useRef(null);
    var inputWrapperRef = useRef(null);
    var _d = useState([]), items = _d[0], setItems = _d[1];
    var rID = useId();
    // Selecting files by clicking on input box
    var handleInputChange = function (event) {
        var files = event.target.files;
        if (files.length > 0) {
            handleMultipleFiles(files);
        }
    };
    // Handling files by drag and drop
    var handleDragOver = function (e) {
        if (isDisabled || !isDragable || filesData.length === maxCount)
            return;
        e.stopPropagation();
        e.preventDefault();
        setIsDragOver(true);
    };
    var handleDragLeave = function (e) {
        if (isDisabled || !isDragable)
            return;
        e.stopPropagation();
        e.preventDefault();
        setIsDragOver(false);
    };
    var handleDrop = function (e) {
        if (isDisabled || !isDragable)
            return;
        e.stopPropagation();
        e.preventDefault();
        setIsDragOver(false);
        var dt = e.dataTransfer;
        var files = dt.files;
        handleMultipleFiles(files);
    };
    var handleMultipleFiles = function (files) {
        if (!isMultiple) {
            var selectOneFile = [files[0]];
            handleFiles(selectOneFile);
        }
        else {
            handleFiles(files);
        }
    };
    var isValidFileType = function (item) {
        var validTypes = new Set(accept);
        var fileExtension = item.data.name.split(".").pop().toLowerCase();
        return validTypes.has(fileExtension);
    };
    var isFileSizeValid = function (item) {
        return !maxSize || item.data.size <= maxSize;
    };
    var isFileValid = function (item) {
        setItems(item);
        if (accept && maxSize) {
            return isValidFileType(item) && isFileSizeValid(item);
        }
        else if (accept && !maxSize) {
            return isValidFileType(item);
        }
        else if (!accept && maxSize) {
            return isFileSizeValid(item);
        }
        return item;
    };
    var handleFiles = function (e) {
        function appendUniqueId(e) {
            var file = e;
            var files = [];
            var idCounter = 1;
            for (var _i = 0, file_1 = file; _i < file_1.length; _i++) {
                var k = file_1[_i];
                files = __spreadArray(__spreadArray([], files, true), [
                    {
                        data: k,
                        id: "".concat(new Date().getTime().toString()).concat(idCounter),
                    },
                ], false);
                idCounter++;
            }
            return files;
        }
        var files = appendUniqueId(e);
        var totalSelectedFiles = filesData.concat(files);
        var filteredFiles = totalSelectedFiles.filter(isFileValid);
        var singleFiltered = files.filter(isFileValid);
        if (isMultiple) {
            if (maxCount && totalSelectedFiles.length > maxCount) {
                var truncatedFiles = maxCount
                    ? filteredFiles.slice(0, maxCount)
                    : totalSelectedFiles;
                onChange === null || onChange === void 0 ? void 0 : onChange(truncatedFiles, singleFiltered.slice(0, maxCount - filesData.length));
                setFilesData(totalSelectedFiles.slice(0, maxCount));
            }
            else {
                var truncatedFiles = maxCount
                    ? filteredFiles.slice(0, maxCount)
                    : totalSelectedFiles;
                truncatedFiles.length > 0 && (onChange === null || onChange === void 0 ? void 0 : onChange(truncatedFiles, singleFiltered));
                setFilesData(totalSelectedFiles);
            }
        }
        else {
            setFilesData(files);
            singleFiltered.length > 0 && (onChange === null || onChange === void 0 ? void 0 : onChange(singleFiltered, singleFiltered));
        }
        if (inputUploadRef.current) {
            inputUploadRef.current.value = "";
        }
    };
    var removeImage = function (id) {
        var files = filesData.filter(function (item) { return item.id !== id; });
        var removedFile = filesData.filter(function (item) { return item.id === id; });
        var filteredFiles = filesData.filter(isFileValid);
        var isFound = filteredFiles.some(function (ele, ind) {
            if (ele.id === id) {
                return true;
            }
            return false;
        });
        isFound && (onRemove === null || onRemove === void 0 ? void 0 : onRemove(removedFile));
        setFilesData(__spreadArray([], files, true));
    };
    useEffect(function () {
        var _a;
        if (items.length === 0) {
            return;
        }
        if (!maxSize || ((_a = items === null || items === void 0 ? void 0 : items.data) === null || _a === void 0 ? void 0 : _a.size) <= maxSize) {
            return;
        }
        onError === null || onError === void 0 ? void 0 : onError(items, "This size  is not allowed");
    }, [onError, items, maxSize]);
    var dottedArray = accept === null || accept === void 0 ? void 0 : accept.map(function (item) { return "." + item; });
    var acceptValue = dottedArray === null || dottedArray === void 0 ? void 0 : dottedArray.join(", ");
    return (jsxs("div", { className: classnames({
            "jiffyui-fileUpload": true,
        }), children: [jsxs("label", { htmlFor: "jiffyui-fileUpload-".concat(rID), className: classnames({
                    "jiffyui-fileUpload__dropZone": true,
                    "jiffyui-fileUpload--dragOver": isDragOver,
                    "jiffyui-fileUpload__dropZone--disabled": isDisabled || filesData.length === maxCount,
                }), ref: inputWrapperRef, onDrop: function (e) { return handleDrop(e); }, onDragOver: function (e) { return handleDragOver(e); }, onDragLeave: function (e) { return handleDragLeave(e); }, "aria-disabled": isDisabled || filesData.length === maxCount ? "true" : "false", children: [jsx("input", { type: "file", ref: inputUploadRef, id: "jiffyui-fileUpload-".concat(rID), className: "jiffyui-fileUpload__inputBox", onChange: function (e) { return handleInputChange(e); }, multiple: isMultiple, disabled: isDisabled || filesData.length === maxCount, accept: "".concat(acceptValue) }), jsxs("div", { className: "jiffyui-fileUpload__uploadText", children: [jsx("span", { children: "Drag files here or" }), jsx("span", { children: "Upload" })] })] }), helpText && (jsxs("span", { className: classnames({
                    "jiffyui-fileUpload__itemHelp": true,
                    "jiffyui-fileUpload__itemHelp--HasHelpIcon": helpIcon,
                }), children: [helpIcon !== null && helpIcon !== void 0 ? helpIcon : null, jsx("span", { children: helpText })] })), filesData.length !== 0 && (jsx(Fragment, { children: filesData.map(function (i, ind) {
                    return (jsx(FileItem$1, { removeImage: removeImage, accept: accept, item: i, sizeAllowed: maxSize, fileUpload: isFileUploaded[ind] }, i.id));
                }) }))] }));
};

var css_248z$k = ".jiffyui-radio__container {\n  display: flex;\n  flex-direction: column;\n}\n\n.jiffyui-radio__label {\n  display: inline-block;\n  cursor: pointer;\n}\n\n.jiffyui-radio__label:hover .jiffyui-radio__iconWrapper {\n  border-color: var(--jiffyui-Cerulean-600);\n}\n\n.jiffyui-radio__input--error + .jiffyui-radio__iconWrapper {\n  border-color: var(--jiffyui-Negative-600);\n}\n\n.jiffyui-radio__inputWrapper {\n  display: flex;\n  flex-direction: row;\n  -webkit-box-align: center;\n  align-items: center;\n}\n\nlabel.jiffyui-radio__label.disbaled {\n  cursor: not-allowed;\n  opacity: 0.5;\n}\n\n.jiffyui-radio__input {\n  border: 0px;\n  clip: rect(0px, 0px, 0px, 0px);\n  clip-path: inset(50%);\n  height: 1px;\n  margin: 0px -1px -1px 0px;\n  overflow: hidden;\n  padding: 0px;\n  position: absolute;\n  width: 1px;\n  left: -10000px;\n  white-space: nowrap;\n  overflow-wrap: normal;\n}\n\n.jiffyui-radio__iconWrapper {\n  position: relative;\n  display: flex;\n  -webkit-box-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  justify-content: center;\n  width: 2rem;\n  height: 2rem;\n  border-width: 1.5px;\n  border-style: solid;\n  margin: 0.2rem;\n  border-radius: 9999px;\n  background-color: rgba(255, 255, 255, 0);\n  border-color: rgb(177, 193, 210);\n  transition-duration: 150ms;\n  transition-timing-function: cubic-bezier(0.7, 0, 0.5, 1);\n}\n.jiffyui-radio__iconWrapper.jiffyui-radio__checked {\n  background-color: var(--jiffyui-Cerulean-600);\n  border-color: var(--jiffyui-Cerulean-600);\n}\n\n.jiffyui-radio__iconContainer {\n  animation: 150ms cubic-bezier(0, 0, 0.2, 1) 0s 1 normal;\n}\n\n.jiffyui-radio__gap {\n  margin-left: 0.6rem;\n}\n\n.jiffyui-radio__text {\n  color: var(--jiffyui-naturalDark-1300);\n  font-size: 1.4rem;\n  line-height: 2rem;\n  font-family: var(--jiffyui-medium-font);\n}";
styleInject(css_248z$k);

var Radio = function (props) {
    var _a = props.label, label = _a === void 0 ? "Default label" : _a, id = props.id, name = props.name, value = props.value, onChange = props.onChange, checked = props.checked, isDisabled = props.isDisabled, hasError = props.hasError;
    var rId = useId();
    return (jsx("div", { className: "jiffyui-radio", children: jsx("label", { htmlFor: id || "jiffyui-radio-".concat(rId), className: "jiffyui-radio__label ".concat(isDisabled ? "disbaled" : null), children: jsx("div", { className: "jiffyui-radio jiffyui-radio__container", children: jsxs("div", { className: "jiffyui-radio jiffyui-radio__inputWrapper", children: [jsx("input", { type: "radio", id: id || "jiffyui-radio-".concat(rId), name: name, "aria-disabled": "false", "aria-checked": "true", "aria-describedby": "radio-245-helptext-246", className: classnames({
                                "jiffyui-radio__input": true,
                                "jiffyui-radio__input--error": hasError,
                            }), value: value, 
                            // onChange={() => onChange?.(value)}
                            onChange: isDisabled ? function () { } : function () { return onChange === null || onChange === void 0 ? void 0 : onChange(value); }, checked: checked, disabled: isDisabled }), jsx("div", { className: classnames({
                                "jiffyui-radio__iconWrapper": true,
                                "jiffyui-radio__checked": checked,
                            }), children: jsx("div", { className: "jiffyui-radio__iconContainer", style: { position: "absolute", display: "flex" }, children: jsx("svg", { "aria-hidden": "true", height: "20px", viewBox: "0 0 16 16", width: "20px", fill: "none", children: jsx("circle", { cx: "8", cy: "8", r: "3", fill: "hsla(0, 0%, 100%, 1)" }) }) }) }), jsx("div", { className: "jiffyui-radio jiffyui-radio__gap" }), jsx("span", { className: "jiffyui-radio__text", children: label })] }) }) }) }));
};

var RadioGroup = function (props) {
    var _a;
    var title = props.title, name = props.name, value = props.value, onChange = props.onChange, _b = props.direction, direction = _b === void 0 ? "vertical" : _b, options = props.options, helpIcon = props.helpIcon, type = props.type, _c = props.isClickableFullItem, isClickableFullItem = _c === void 0 ? false : _c;
    var rName = useId();
    var getcontrolStates = {
        success: "jiffyui-formElement--success",
        warning: "jiffyui-formElement--warning",
        error: "jiffyui-formElement--error",
    };
    var controlStatesVal = type && getcontrolStates[type];
    return (jsxs("div", { className: classnames((_a = {
                "jiffyui-formGroup": true
            },
            _a[controlStatesVal] = controlStatesVal,
            _a)), children: [title && (jsx("h2", { className: "input-group-label", children: title })), jsx("ul", { className: "jiffyui-formGroup__list jiffyui-formGroup__list--".concat(direction), children: options.map(function (item, index) {
                    return (jsx("li", { className: classnames({
                            "jiffyui-formGroup__listItem": true,
                            "jiffyui-formGroup__listitem--clickable": isClickableFullItem,
                        }), children: jsx(Radio, { isDisabled: item.isDisabled, label: item.label, value: item.value, checked: value === item.value, onChange: onChange, name: name || "radioGroup" + rName }) }, index));
                }) }), props.helpText && (jsxs("span", { className: classnames({
                    "jiffyui-formElement__itemHelp flex gap-8 align-center": true,
                    "jiffyui-formElement__itemHelp--hasHelpIcon": helpIcon,
                }), children: [helpIcon && jsx("span", { style: { display: "flex" }, children: helpIcon }), jsx("span", { children: props.helpText })] }))] }));
};

var css_248z$j = ".tag {\n  justify-content: flex-start;\n  position: relative;\n  display: inline-flex;\n  max-width: 100%;\n  align-items: center;\n  padding: 0.1rem 0.8rem;\n  background-color: var(--jiffyui-naturalLight-200);\n  border-radius: 0.4rem;\n  color: var(--jiffyui-naturalDark-1000);\n}\n.tag .tag-label {\n  display: inline-block;\n  vertical-align: middle;\n}\n.tag .tag-clear {\n  cursor: pointer;\n  border-radius: 0.4rem;\n  transition: 0.3s all;\n  text-align: center;\n  display: block;\n  height: 2rem;\n  width: 2rem;\n  max-height: 100%;\n  max-width: 100%;\n  margin-left: 0.5rem;\n}\n.tag .tag-clear:hover {\n  background-color: var(--jiffyui-naturalLight-300);\n}\n.tag .tag-clear svg {\n  display: block;\n  height: 100%;\n  width: 100%;\n}\n\n.tag.hasDismis {\n  padding-right: 0.4rem;\n}\n\n.tag.tag--small {\n  height: 1.6rem;\n}\n.tag.tag--small span.tag-label {\n  font-size: 1rem;\n  line-height: 1.6rem;\n}\n.tag.tag--small span.tag-clear {\n  height: 1.2rem;\n  width: 1.2rem;\n  padding: 0;\n  border-radius: 0.1rem;\n}\n\n.tag.tag--medium {\n  height: 2rem;\n}\n.tag.tag--medium span.tag-label {\n  font-size: 1.2rem;\n  line-height: 2rem;\n}\n.tag.tag--medium span.tag-clear {\n  height: 1.4rem;\n  width: 1.4rem;\n  padding: 0;\n  border-radius: 0.3rem;\n}\n\n.tag.tag--large {\n  height: 2.4rem;\n}\n.tag.tag--large .tag-label {\n  font-size: 1.4rem;\n  line-height: 2.4rem;\n}\n.tag.tag--large .tag-clear {\n  height: 1.8rem;\n  width: 1.8rem;\n  padding: 0.1rem;\n}";
styleInject(css_248z$j);

var Tag = function (_a) {
    var _b = _a.children, children = _b === void 0 ? "Badge" : _b, _c = _a.size, size = _c === void 0 ? "Large" : _c, onDismis = _a.onDismis; __rest(_a, ["children", "size", "onDismis"]);
    var checkSize = function () {
        switch (size) {
            case "Small":
                return "tag--small";
            case "Medium":
                return "tag--medium";
            case "Large":
                return "tag--large";
            default:
                return "tag--large";
        }
    };
    var TageSize = checkSize();
    return (jsx("div", { className: "tag-wrapp", children: jsxs("div", { className: "tag ".concat(TageSize, " ").concat(onDismis ? "hasDismis" : ""), children: [jsx("span", { className: "tag-label", children: children }), onDismis &&
                    jsx("span", { className: "tag-clear", onClick: function (e) { return onDismis(e); }, role: "none", children: jsx(X$1, { size: 16 }) })] }) }));
};

var css_248z$i = ".pixel-sc__container {\n  border-radius: 0.4rem;\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  position: relative;\n  height: auto;\n  box-shadow: rgb(177, 193, 210) 0px 0px 0px 1px;\n}\n\n.pixel-sc__container input::placeholder {\n  color: #a3b1c2;\n}\n\n.pixel-sc__label {\n  margin-bottom: 0.4rem;\n}\n.pixel-sc__label p {\n  color: rgb(64, 86, 109);\n  font-size: 1.2rem;\n  font-weight: 600;\n  line-height: 1.8rem;\n  letter-spacing: 0px;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n}\n\n.pixel-ac__item {\n  border-width: 4px;\n  border-style: solid;\n  border-color: transparent;\n  text-align: left;\n  background-color: transparent;\n  padding: 8px;\n  border-radius: 4px;\n  text-decoration: none;\n  cursor: pointer;\n  width: 100%;\n}\n\n.pixel-ac__item--group {\n  cursor: auto;\n}\n\n.pixel-ac__item:not(.pixel-ac__item--group):hover {\n  background-color: rgba(108, 132, 157, 0.09);\n}\n\n.pixel-sc__activator {\n  display: flex;\n  overflow: auto hidden;\n  flex: 1 1 0%;\n  flex-wrap: nowrap;\n  padding-left: 12px;\n  min-height: 36px;\n}\n.pixel-sc__activator button, .pixel-sc__activator .pixel-sc__tags {\n  color: rgb(64, 86, 109);\n  font-size: 1.4rem;\n  font-weight: 400;\n  font-style: normal;\n  text-decoration-line: none;\n  line-height: 2rem;\n  letter-spacing: 0px;\n  text-align: left;\n  margin: 0px;\n  background-color: transparent;\n  padding: 8px 8px 8px 0px;\n  min-height: 3.6rem;\n  resize: none;\n  outline: none;\n  border: none;\n  cursor: pointer;\n}\n\n.pixel-sc__icon {\n  display: flex;\n  flex-direction: row;\n  -webkit-box-align: center;\n  align-items: center;\n  align-self: center;\n  padding-right: 12px;\n}\n\n.pixel-sc__item--selected {\n  background-color: rgba(46, 91, 255, 0.09);\n}\n\n.pixel-ac__item.pixel-sc__item--selected:hover {\n  background-color: rgba(46, 91, 255, 0.18);\n}";
styleInject(css_248z$i);

var Select = function (props) {
    var _a;
    var options = props.options, _b = props.value, value = _b === void 0 ? "" : _b, onChange = props.onChange, _c = props.selectionType, selectionType = _c === void 0 ? "single" : _c, label = props.label, placeholder = props.placeholder, helpText = props.helpText, _d = props.type, type = _d === void 0 ? "select" : _d;
    var _e = useState(options), optionsToShow = _e[0], setOptionsToShow = _e[1];
    var selectRef = useRef(null);
    var inputBoxRef = useRef(null);
    var _f = useState(false), isOpen = _f[0], setIsOpen = _f[1];
    var _g = useState(), selectedValue = _g[0], setSelectedValue = _g[1];
    var _h = useState(""), inputText = _h[0], setInputText = _h[1];
    useEffect(function () {
        var _a;
        var val = value;
        type === "autoComplete" && ((_a = inputBoxRef === null || inputBoxRef === void 0 ? void 0 : inputBoxRef.current) === null || _a === void 0 ? void 0 : _a.focus());
        var containsGroupKey = options === null || options === void 0 ? void 0 : options.some(function (opt) {
            return opt.hasOwnProperty("group");
        });
        if (containsGroupKey) {
            var selectedVal = getMatchingGroupLabels(options, val, selectionType === "multiple");
            setSelectedValue(selectedVal);
        }
        else {
            var selectedVal = getMatchingLabels(options, selectionType === "single" ? [val] : val);
            setSelectedValue(selectedVal);
        }
    }, [value]);
    var handleOutsideClick = function (event) {
        var container = document.querySelector(".pixel-sc__container");
        if (container && !container.contains(event.target)) {
            setIsOpen(false);
        }
    };
    var handleFilteroptions = function (text) {
        var filteredArray = JSON.parse(JSON.stringify(options));
        var containsGroupKey = options === null || options === void 0 ? void 0 : options.some(function (opt) {
            return opt.hasOwnProperty("group");
        });
        if (containsGroupKey) {
            filteredArray = filteredArray.filter(function (item) {
                item.group = item.group.filter(function (obj) {
                    return obj.label.toLowerCase().includes(text.toLowerCase());
                });
                return item.group.length > 0;
            });
            setOptionsToShow(filteredArray);
        }
        else {
            var newOpts = options === null || options === void 0 ? void 0 : options.filter(function (item) {
                return item.label.toLowerCase().includes(text.toLowerCase());
            });
            setOptionsToShow(newOpts);
        }
    };
    var handleItemClick = function (item) {
        selectionType === "single"
            ? onChange(item.value)
            : Array.isArray(value) && onChange(__spreadArray(__spreadArray([], value, true), [item.value], false), item.value);
        if (selectionType === "multiple")
            return;
        setIsOpen(false);
    };
    function resizeInputBox(e) {
        setIsOpen(true);
        var elem = e.target;
        var value = e.target.value;
        if (value.length < 2) {
            elem.style.width = "100%";
        }
        else {
            elem.style.width = value.length + 1 + "ch";
        }
    }
    return (jsxs("div", { className: "pixel-sc", children: [label ? (jsx("label", { className: "jiffyui-form__label", children: label })) : null, jsxs("div", { className: "pixel-sc__container", ref: selectRef, children: [jsxs("div", { className: "pixel-sc__activator c-pointer", onClick: function () {
                            var _a;
                            setIsOpen(!isOpen);
                            type === "autoComplete" && ((_a = inputBoxRef === null || inputBoxRef === void 0 ? void 0 : inputBoxRef.current) === null || _a === void 0 ? void 0 : _a.focus());
                        }, role: "none", children: [Array.isArray(value) && value.length > 0 ? (jsx("div", { className: "pixel-sc__tags flex gap-8 align-center", children: selectedValue.map(function (tag, ind) {
                                    return (jsx(Tag, { onDismis: function (e) {
                                            e.stopPropagation();
                                            onChange(value, tag.value);
                                        }, children: tag.label }, ind));
                                }) })) : (jsxs(Fragment, { children: [type === "select" && (jsx("button", { children: (selectedValue === null || selectedValue === void 0 ? void 0 : selectedValue.length) === 0
                                            ? placeholder || "Select"
                                            : (_a = selectedValue === null || selectedValue === void 0 ? void 0 : selectedValue[0]) === null || _a === void 0 ? void 0 : _a.label })), type === "autoComplete" && selectionType === "single" && (jsx("input", { placeholder: placeholder || "Search", ref: inputBoxRef, className: "pixel-autocomplete w-full border-none outline-none bg-transparent font-size-14", value: inputText, onChange: function (e) {
                                            !isOpen && setIsOpen(true);
                                            setInputText(e.target.value);
                                            handleFilteroptions(e.target.value);
                                        } }))] })), type === "autoComplete" && selectionType === "multiple" && (jsx("input", { ref: inputBoxRef, placeholder: placeholder || "Search", className: "pixel-autocomplete w-full border-none outline-none bg-transparent font-size-14", value: inputText, onChange: function (e) {
                                    resizeInputBox(e);
                                    setInputText(e.target.value);
                                    handleFilteroptions(e.target.value);
                                }, style: { minWidth: "0.1rem" } }))] }), jsx("div", { className: "pixel-sc__icon", children: jsx("span", { className: "flex", children: jsx(ChevronDown$1, { height: 16, width: 16 }) }) })] }), jsx(Dropdown, { open: isOpen, ref: selectRef, isWidthEqual: true, resizeDependency: selectedValue, padding: 8, onOutsideClick: handleOutsideClick, children: jsxs("ul", { className: "pixel-ac__container", children: [(type === "select" ? options : optionsToShow).map(function (item, index) {
                            return (jsxs("li", { role: "none", className: classnames({
                                    "pixel-ac__item": true,
                                    "pixel-ac__item--group": item.group,
                                    "pixel-ac__multiItem flex gap-8": selectionType === "multiple" && !item.group,
                                    "pixel-sc__item--selected": selectionType === "single" && item.value === value,
                                    "pixel-sc__item--multiSelected": Array.isArray(value) && value.indexOf(item.value) !== -1,
                                }), onClick: function () {
                                    if (item.group)
                                        return;
                                    selectionType === "single" &&
                                        type === "autoComplete" &&
                                        setInputText(item.label);
                                    handleItemClick(item);
                                }, children: [selectionType === "multiple" && !item.group && (jsx("span", { className: "".concat(Array.isArray(value) && value.indexOf(item.value) !== -1
                                            ? "v-visible"
                                            : "v-hidden"), children: jsx(Check$1, { size: 16, stroke: "rgb(12, 50, 189)" }) })), jsx("div", { children: item.label }), item.group && (jsx("ul", { children: item.group.map(function (child, childIndex) {
                                            return (jsxs("li", { role: "none", className: classnames({
                                                    "pixel-ac__item": true,
                                                    "pixel-sc__item--selected": child.value === value,
                                                    "pixel-ac__multiItem flex gap-8": selectionType === "multiple",
                                                }), onClick: function () {
                                                    selectionType === "single" &&
                                                        type === "autoComplete" &&
                                                        setInputText(child.label);
                                                    handleItemClick(child);
                                                }, children: [selectionType === "multiple" && (jsx("span", { className: "".concat(Array.isArray(value) &&
                                                            value.indexOf(child.value) !== -1
                                                            ? "v-visible"
                                                            : "v-hidden"), children: jsx(Check$1, { size: 16, stroke: "rgb(12, 50, 189)" }) })), jsx("div", { children: child.label })] }, child + childIndex));
                                        }) }))] }, item + index));
                        }), optionsToShow.length === 0 && (jsx("li", { children: jsx("div", { className: "text-center", children: "No search result found" }) }))] }) }), jsx("div", { className: "jiffyui-formElement__itemHelp", children: helpText && jsx("span", { className: "pixel-ac__helpText", children: props.helpText }) })] }));
};

var css_248z$h = ".jiffyui-textArea {\n  display: flex;\n  flex-direction: column;\n}\n\n.jiffyui-formElement_textArea__control {\n  color: var(--jiffyui-Cloud-900);\n  font-size: 1.4rem;\n  font-style: normal;\n  text-decoration-line: none;\n  line-height: 1.5rem;\n  letter-spacing: 0rem;\n  text-align: left;\n  margin: 0px;\n  flex: 1 1 0%;\n  background-color: var(--jiffyui-white);\n  padding: 1.2rem;\n  width: 100%;\n  height: 3.8rem;\n  resize: none;\n  outline: none;\n  border: none;\n  cursor: auto;\n  border-radius: 0.4rem;\n  color: var(--jiffyui-naturalDark-1000);\n}\n\n.jiffyui-formElement_textArea__control::placeholder {\n  color: var(--jiffyui-naturalLight-500);\n}\n\n.jiffyui-formElement__textArea {\n  padding: 8px 8px 8px 12px;\n  background: #fff;\n  border-top: 0;\n  border-left: 0;\n  border-right: 0;\n  border: 1px solid var(--jiffyui-naturalLight-300);\n  border-radius: 4px;\n  transition: 0.3s all;\n}\n.jiffyui-formElement__textArea:hover:not(:focus-visible) {\n  border-color: var(--jiffyui-Cerulean-600) !important;\n}\n.jiffyui-formElement__textArea:focus-visible {\n  border-color: var(--jiffyui-Cerulean-600) !important;\n  outline: none;\n  box-shadow: 0px 0px 8px -4px var(--jiffyui-Cerulean-600) !important;\n  background: rgba(239, 239, 255, 0.3803921569);\n}\n.jiffyui-formElement__textArea:placeholder {\n  color: var(--jiffyui-naturalLight-500);\n}\n\n.jiffyui-formElement__itemHelp {\n  font-size: 1.3rem;\n  line-height: 1.6rem;\n  text-align: left;\n  margin-top: 0.6rem;\n  color: var(--jiffyui-naturalLight-600);\n}\n\n.jiffyui--required:after {\n  content: \"*\";\n  margin-left: 0.5rem;\n  color: #D92D20;\n}\n\n.jiffyui-formElement--error .jiffyui-formElement__textArea {\n  border-color: var(--jiffyui-Negative-300);\n}\n.jiffyui-formElement--error:hover .jiffyui-formElement__textArea {\n  border-color: var(--jiffyui-Negative-400) !important;\n}\n.jiffyui-formElement--error .jiffyui-formElement__textArea:focus,\n.jiffyui-formElement--error .jiffyui-formElement__textArea:active,\n.jiffyui-formElement--error .jiffyui-formElement__textArea:focus-within,\n.jiffyui-formElement--error .jiffyui-formElement__textArea:focus-visible,\n.jiffyui-formElement--error .jiffyui-formElement__textArea:visited {\n  box-shadow: 0px 0px 8px -4px var(--jiffyui-Negative-400) !important;\n  border-color: var(--jiffyui-Negative-400) !important;\n}\n.jiffyui-formElement--error .jiffyui-formElement__itemHelp {\n  color: var(--jiffyui-Negative-600);\n}";
styleInject(css_248z$h);

var TextArea = function (props) {
    var _a = props.placeholder, placeholder = _a === void 0 ? "Type.." : _a, _b = props.value, value = _b === void 0 ? "" : _b, _c = props.resize, resize = _c === void 0 ? "both" : _c, _d = props.required, required = _d === void 0 ? false : _d, helpText = props.helpText, _e = props.onChange, onChange = _e === void 0 ? function () {
        return "";
    } : _e, _f = props.label, label = _f === void 0 ? "" : _f, _g = props.rows, rows = _g === void 0 ? 3 : _g, _h = props.error, error = _h === void 0 ? false : _h, _j = props.readOnly, readOnly = _j === void 0 ? false : _j;
    var rId = useId();
    return (jsxs("div", { className: classnames({
            "jiffyui-textArea": true,
            "jiffyui-formElement--error": error,
        }), children: [label ? (jsx("label", { htmlFor: "jiffyui-textArea-".concat(rId), id: "jiffyui-textArea__label-".concat(rId), className: classnames({
                    "jiffyui-form__label": true,
                    "jiffyui--required": required,
                }), children: label })) : null, jsx("textarea", __assign({ id: "jiffyui-textArea-".concat(rId), className: "jiffyui-formElement_textArea__control jiffyui-formElement__textArea", style: {
                    opacity: readOnly ? "0.6" : "1",
                    width: "100%",
                    resize: resize,
                }, rows: rows, value: value, readOnly: readOnly, onChange: function (e) {
                    onChange(e.target.value);
                }, placeholder: placeholder, "aria-labelledby": "jiffyui-textArea__label-".concat(rId) }, (required ? { "aria-required": "true" } : {}))), helpText ? (jsx("span", { className: "jiffyui-formElement__itemHelp", children: helpText })) : null] }));
};

var css_248z$g = "/* textfiled size */\n.jiffyui-formElement .jiffyui-formElement__textField {\n  height: 4.4rem;\n  transition: 0.2s all;\n  border: 1px solid var(--jiffyui-naturalLight-300);\n}\n\n.jiffyui-formElement__inner:hover .jiffyui-formElement__textField {\n  border-color: var(--jiffyui-Cerulean-600);\n}\n\n.jiffyui-formElement__control::placeholder {\n  color: var(--jiffyui-naturalLight-500);\n}\n\n.jiffyui-formElement__textField:focus,\n.jiffyui-formElement__textField:active,\n.jiffyui-formElement__textField:focus-within,\n.jiffyui-formElement__textField:focus-visible,\n.jiffyui-formElement__textField:visited {\n  box-shadow: 0px 0px 8px -4px var(--jiffyui-Cerulean-600) !important;\n  outline: none;\n  border: 1px solid var(--jiffyui-Cerulean-600);\n}\n\n.jiffyui-formElement--success {\n  .jiffyui-formElement__textField {\n    border-color: var(--jiffyui-Possitive-200);\n  }\n\n  &:hover .jiffyui-formElement__textField {\n    border-color: var(--jiffyui-Possitive-400);\n  }\n\n  .jiffyui-formElement__textField:focus,\n  .jiffyui-formElement__textField:active,\n  .jiffyui-formElement__textField:focus-within,\n  .jiffyui-formElement__textField:focus-visible,\n  .jiffyui-formElement__textField:visited {\n    box-shadow: 0px 0px 8px -4px var(--jiffyui-Possitive-400);\n    border-color: var(--jiffyui-Possitive-400);\n  }\n\n  .jiffyui-formElement__itemHelp>span {\n    color: var(--jiffyui-Possitive-600);\n  }\n}\n\n.jiffyui-formElement--error {\n  .jiffyui-formElement__textField {\n    border-color: var(--jiffyui-Negative-300);\n  }\n\n  &:hover .jiffyui-formElement__textField {\n    border-color: var(--jiffyui-Negative-400);\n  }\n\n  .jiffyui-formElement__textField:focus,\n  .jiffyui-formElement__textField:active,\n  .jiffyui-formElement__textField:focus-within,\n  .jiffyui-formElement__textField:focus-visible,\n  .jiffyui-formElement__textField:visited {\n    box-shadow: 0px 0px 8px -4px var(--jiffyui-Negative-400);\n    border-color: var(--jiffyui-Negative-400);\n  }\n\n  .jiffyui-formElement__itemHelp>span {\n    color: var(--jiffyui-Negative-600);\n  }\n}\n\n.jiffyui-formElement--warning {\n  .jiffyui-formElement__textField {\n    border-color: var(--jiffyui-Notice-200);\n  }\n\n  &:hover .jiffyui-formElement__textField:hover {\n    border-color: var(--jiffyui-Notice-400);\n  }\n\n  .jiffyui-formElement__textField:focus,\n  .jiffyui-formElement__textField:active,\n  .jiffyui-formElement__textField:focus-within,\n  .jiffyui-formElement__textField:focus-visible,\n  .jiffyui-formElement__textField:visited {\n    box-shadow: 0px 0px 8px -4px var(--jiffyui-Notice-400);\n    border-color: var(--jiffyui-Notice-400);\n  }\n\n  .jiffyui-formElement__itemHelp>span {\n    color: var(--jiffyui-Notice-400);\n  }\n}\n\n/* Inner Prefix and Suffix */\n.jiffyui-formElement__itemHelp>span {\n  font-size: 1.3rem;\n  line-height: 1.6rem;\n  text-align: left;\n  color: var(--jiffyui-naturalLight-600);\n}\n\n.jiffyui-formElement--hasPrefix .jiffyui-formElement__prefixIcon,\n.jiffyui-formElement--hasSuffix .jiffyui-formElement__suffixIcon {\n  position: absolute;\n  left: 1.2rem;\n  z-index: 1;\n  top: 50%;\n  transform: translateY(-50%);\n  max-width: 8rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-size: 1.4rem;\n  line-height: 2rem;\n  color: var(--jiffyui-naturalDark-1000);\n  display: inline-flex;\n}\n\n.jiffyui-formElement--hasPrefix .jiffyui-formElement__prefixIcon {\n  padding-right: 0.8rem;\n}\n\n.jiffyui-formElement--hasSuffix .jiffyui-formElement__suffixIcon {\n  left: unset;\n  right: 1.2rem;\n  padding-left: 0.8rem;\n}\n\n.jiffyui-formElement--hasPrefix .jiffyui-formElement__prefixIcon svg,\n.jiffyui-formElement--hasSuffix .jiffyui-formElement__suffixIcon svg {\n  display: flex;\n  width: 18px;\n}\n\n.jiffyui-formElement--disabled {\n  opacity: 0.6;\n  cursor: not-allowed !important;\n}\n\n.jiffyui-formElement--disabled::after {\n  content: '';\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  cursor: not-allowed;\n  top: 0;\n  left: 0;\n  z-index: 99;\n}\n\n.jiffyui-formElement__control {\n  color: var(--jiffyui-Cloud-900);\n  font-size: 1.4rem;\n  font-style: normal;\n  text-decoration-line: none;\n  line-height: 1.5rem;\n  letter-spacing: 0rem;\n  text-align: left;\n  margin: 0px;\n  flex: 1 1 0%;\n  background-color: var(--jiffyui-white);\n  padding: 1.2rem;\n  width: 100%;\n  height: 3.8rem;\n  resize: none;\n  outline: none;\n  border: none;\n  cursor: auto;\n  border-radius: 0.4rem;\n}\n\n.jiffyui-formElement__inner {\n  background-color: var(--jiffyui-white);\n  border-radius: 0.4rem;\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  position: relative;\n  border: 0rem none;\n  transition-duration: 400ms;\n}\n\n/* Helper text */\n.jiffyui-formElement__itemHelp--hasHelpIcon {\n  display: flex;\n  gap: 0.8rem;\n  align-items: flex-start;\n}\n\n.jiffyui-formElement__itemHelp--helpIcon svg {\n  display: block;\n  width: 1.5rem;\n  height: 1.5rem;\n}\n\n/* Clear */\n.jiffyui-formElement__inner .jiffyui-formElement--clear {\n  position: absolute;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  top: 50%;\n  z-index: 99;\n  transform: translateY(-50%);\n  right: 1.2rem;\n  padding: 0.2rem;\n}\n\n.jiffyui-formElement__inner .jiffyui-formElement--clear svg {\n  color: #837373;\n  transition: 0.3s all;\n}\n\n.jiffyui-formElement__inner .jiffyui-formElement--clear:hover svg {\n  color: var(--jiffyui-Cloud-900);\n}\n\n.jiffyui--required:after {\n  content: \"*\";\n  margin-left: 0.5rem;\n  color: var(--jiffyui-Negative-700);\n}\n\n/* size  */\n.jiffyui-formElement--large {\n  .jiffyui-formElement__textField {\n    height: 4.6rem;\n  }\n}\n\n.jiffyui-formElement--medium {\n\n  .jiffyui-formElement__prefixIcon,\n  .jiffyui-formElement__suffixIcon {\n    font-size: 1.2rem;\n  }\n\n  .jiffyui-formElement__prefixIcon svg,\n  .jiffyui-formElement__suffixIcon svg {\n    width: 1.6rem;\n    height: 1.6rem;\n  }\n\n  .jiffyui-formElement__textField {\n    height: 3.8rem;\n    padding-top: 0.8rem;\n    padding-bottom: 0.8rem;\n  }\n}\n\n.jiffyui-formElement--small {\n\n  .jiffyui-formElement__prefixIcon,\n  .jiffyui-formElement__suffixIcon {\n    font-size: 1.2rem;\n  }\n\n  .jiffyui-formElement__prefixIcon svg,\n  .jiffyui-formElement__suffixIcon svg {\n    width: 1.5rem;\n    height: 1.5rem;\n  }\n\n  .jiffyui-formElement__textField {\n    height: 3.4rem;\n    padding-top: 0.6rem;\n    padding-bottom: 0.6rem;\n    font-size: 1.3rem;\n  }\n}\n\n.jiffyui-formElement--xSmall {\n\n  .jiffyui-formElement__prefixIcon,\n  .jiffyui-formElement__suffixIcon {\n    font-size: 1.2rem;\n  }\n\n  .jiffyui-formElement__prefixIcon svg,\n  .jiffyui-formElement__suffixIcon svg {\n    width: 1.4rem;\n    height: 1.4rem;\n  }\n\n  .jiffyui-formElement__textField {\n    height: 30px;\n    padding-top: 0.4rem;\n    padding-bottom: 0.4rem;\n    font-size: 1.2rem;\n  }\n}";
styleInject(css_248z$g);

var TextField = React.forwardRef(function (props, ref) {
    var _a;
    var _b = props.onChange, onChange = _b === void 0 ? function () {
        return "";
    } : _b, _c = props.label, label = _c === void 0 ? "" : _c, prefix = props.prefix, suffix = props.suffix, _d = props.isClearable, isClearable = _d === void 0 ? false : _d, helpIcon = props.helpIcon, _e = props.isDisabled, isDisabled = _e === void 0 ? false : _e, _f = props.isRequired, isRequired = _f === void 0 ? false : _f, variant = props.variant, _g = props.step, step = _g === void 0 ? 1 : _g, size = props.size;
    var rId = useId();
    var inputRef = useRef(null);
    var innerPreref = useRef(null);
    var innerSufrefWidth = useRef(null);
    var _h = useState(0), paddingLeft = _h[0], setPaddingLeft = _h[1];
    var _j = useState(0), paddingRight = _j[0], setPaddingRight = _j[1];
    var getcontrolStates = {
        success: "jiffyui-formElement--success",
        warning: "jiffyui-formElement--warning",
        error: "jiffyui-formElement--error",
    };
    var getsizeStates = {
        XSmall: "jiffyui-formElement--xSmall",
        Small: "jiffyui-formElement--small",
        Medium: "jiffyui-formElement--medium",
        Large: "jiffyui-formElement--large",
    };
    var controlStatesVal = variant && getcontrolStates[variant];
    var sizeVal = size && getsizeStates[size];
    var clearIconWidth = isClearable ? 28 : 0;
    var numberSpinnerwidth = props.type === "number" ? 20 : 0;
    useLayoutEffect(function () {
        var _a, _b;
        setPaddingLeft(prefix ? ((_a = innerPreref === null || innerPreref === void 0 ? void 0 : innerPreref.current) === null || _a === void 0 ? void 0 : _a.offsetWidth) + 16 : null);
        setPaddingRight(suffix ? ((_b = innerSufrefWidth === null || innerSufrefWidth === void 0 ? void 0 : innerSufrefWidth.current) === null || _b === void 0 ? void 0 : _b.offsetWidth) + 22 : 12);
    }, [prefix, suffix]);
    var getInput = function () { return (jsxs(Fragment, { children: [jsx("input", { ref: inputRef, style: {
                    paddingLeft: paddingLeft ? paddingLeft + "px" : "12px",
                    paddingRight: paddingRight + clearIconWidth + "px",
                }, id: "jiffyui-textField-".concat(rId), type: props.type, disabled: isDisabled, value: props.value, readOnly: isDisabled, onChange: function (e) {
                    if (props.type === "password") {
                        onChange(e.target.value);
                        return;
                    }
                    onChange(e.target.value);
                }, autoComplete: "off", onBlur: function () { var _a; return (_a = props === null || props === void 0 ? void 0 : props.onBlur) === null || _a === void 0 ? void 0 : _a.call(props); }, onKeyUp: function () { var _a; return (_a = props === null || props === void 0 ? void 0 : props.onKeyUp) === null || _a === void 0 ? void 0 : _a.call(props); }, onFocus: props.onFocus, min: props.min, max: props.max, step: step, placeholder: props.placeholder, autoFocus: props.autoFocus, className: "jiffyui-formElement__control jiffyui-formElement__textField", maxLength: props.maxlength }), isClearable && props.value ? (jsx("div", { role: "none", className: "jiffyui-formElement--clear", style: {
                    right: numberSpinnerwidth + paddingRight + "px",
                }, onClick: props.onClear, children: jsx(X$1, { size: 16 }) })) : null] })); };
    return (jsxs("div", { className: classnames((_a = {
                "jiffyui-formElement": true,
                "jiffyui-formElement--hasClear": isClearable
            },
            _a[controlStatesVal] = controlStatesVal,
            _a["jiffyui-formElement--hasPrefix"] = prefix,
            _a["jiffyui-formElement--hasSuffix"] = suffix,
            _a["jiffyui-formElement--disabled"] = isDisabled,
            _a[sizeVal] = sizeVal,
            _a)), children: [label ? (jsx("label", { htmlFor: "jiffyui-textField-".concat(rId), id: "jiffyui-textField__label-".concat(rId), className: classnames({
                    "jiffyui-form__label": true,
                    "jiffyui--required": isRequired,
                }), children: label })) : null, jsxs("div", { className: "jiffyui-formElement__inner", ref: ref, children: [getInput(), prefix !== "" ? (jsx("span", { ref: innerPreref, className: "jiffyui-formElement__prefixIcon", children: prefix })) : null, suffix !== "" && props.type !== "number" ? (jsx("span", { ref: innerSufrefWidth, className: "jiffyui-formElement__suffixIcon", children: suffix })) : null] }), props.helpText && (jsxs("span", { id: "jiffyui-textFiled__description-".concat(rId), className: classnames({
                    "jiffyui-formElement__itemHelp": true,
                    "jiffyui-formElement__itemHelp--hasHelpIcon": helpIcon,
                }), children: [helpIcon && jsx("span", { className: "jiffyui-formElement__itemHelp--helpIcon", children: helpIcon }), jsx("span", { children: props.helpText })] }))] }));
});

var css_248z$f = "ol,\nul,\n.jiffyui-list {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n}\n\n.jiffyui-list .jiffyui-list--item {\n  font-size: 1.4rem;\n  line-height: 2.2rem;\n  margin-bottom: 0.8rem;\n  color: var(--jiffyui-naturalDark-900);\n  position: relative;\n  padding-left: 1.6rem;\n}\n\n.jiffyui-olList--decimal__style {\n  --listStyleType: decimal;\n}\n\n.jiffyui-olList--roman__style {\n  --listStyleType: lower-roman;\n}\n\n.jiffyui-olList--alfabet__style {\n  --listStyleType: lower-alpha;\n}\n\nol.jiffyui-list li.jiffyui-list--item::before {\n  margin-right: 1rem;\n  font-family: var(--jiffyui-medium-font);\n  color: var();\n  vertical-align: top;\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n\n.jiffyui-olList--decimal__style .jiffyui-olList--decimal {\n  counter-reset: listStyle;\n  list-style-type: none;\n}\n\n.jiffyui-olList--decimal__style .jiffyui-olList--decimal li {\n  counter-increment: listStyle;\n}\n\n.jiffyui-olList--decimal__style .jiffyui-olList--decimal li::before {\n  content: counter(listStyle, var(--listStyleType)) \".\";\n}\n\n.jiffyui-unList--squire .jiffyui-list--item::before {\n  border: var(--jiffyui-borderWidth-thin) solid var(--jiffyui-naturalLight-700);\n}\n\n.jiffyui-olList--roman__style .jiffyui-olList--roman {\n  counter-reset: listStyle;\n  list-style-type: none;\n}\n\n.jiffyui-olList--roman__style .jiffyui-olList--roman li {\n  counter-increment: listStyle;\n}\n\n.jiffyui-olList--roman__style .jiffyui-olList--roman li::before {\n  content: counter(listStyle, var(--listStyleType)) \".\";\n}\n\n.jiffyui-olList--alfabet__style .jiffyui-olList--alfabet {\n  counter-reset: listStyle;\n  list-style-type: none;\n}\n\n.jiffyui-olList--alfabet__style .jiffyui-olList--alfabet li {\n  counter-increment: listStyle;\n}\n\n.jiffyui-olList--alfabet__style .jiffyui-olList--alfabet li::before {\n  content: counter(listStyle, var(--listStyleType)) \".\";\n}\n\n.jiffyui-list--unordered li.jiffyui-list--item::before {\n  content: \"\";\n  width: 0.7rem;\n  height: 0.7rem;\n  position: absolute;\n  left: 0;\n  top: 0.7rem;\n}\n\n.jiffyui-unList--disc .jiffyui-list--item::before {\n  background: var(--jiffyui-naturalLight-400);\n  border-radius: 100%;\n}\n\n.jiffyui-unList--squire .jiffyui-list--item::before {\n  border-radius: 0;\n  background-color: var(--jiffyui-borderWidth-thin);\n}\n\n.jiffyui-unList--circle .jiffyui-list--item::before {\n  border-radius: 100%;\n  border: var(--jiffyui-borderWidth-thin) solid var(--jiffyui-naturalLight-400);\n}\n\n.jiffyui-list--ordered .jiffyui-list--item {\n  padding-left: 1.8rem;\n}";
styleInject(css_248z$f);

var List = function (_a) {
    var _b = _a.type, type = _b === void 0 ? "ul" : _b, _c = _a.unorderedStyle, unorderedStyle = _c === void 0 ? "Disc" : _c, _d = _a.orderedStyle, orderedStyle = _d === void 0 ? "Decimal" : _d, _e = _a.children, children = _e === void 0 ? "" : _e; __rest(_a, ["type", "unorderedStyle", "orderedStyle", "children"]);
    var checktype = function () {
        switch (type) {
            case "ul":
                return "jiffyui-list--unordered";
            case "ol":
                return "jiffyui-list--ordered";
            default:
                return "jiffyui-list--Unordered";
        }
    };
    var checkOrderedStyle = function () {
        switch (orderedStyle) {
            case "Decimal":
                return "jiffyui-olList--decimal";
            case "Roman":
                return "jiffyui-olList--roman";
            case "Alfabet":
                return "jiffyui-olList--alfabet";
            default:
                return "jiffyui-olList--decimal";
        }
    };
    var checkUnorderedStyle = function () {
        switch (unorderedStyle) {
            case "Disc":
                return "jiffyui-unList--disc";
            case "Squire":
                return "jiffyui-unList--squire";
            case "Circle":
                return "jiffyui-unList--circle";
            default:
                return "jiffyui-unList--disc";
        }
    };
    var listType = checktype();
    var olListStyle = checkOrderedStyle();
    var ulListStyle = checkUnorderedStyle();
    console.log(children);
    return (jsx("div", { className: "".concat(type === "ol" ? olListStyle + '__style' : "", " ").concat(type === "ul" ? ulListStyle + '__style' : ""), children: type === "ul" ? (jsx("ul", { className: "jiffyui-list ".concat(ulListStyle, " ").concat(listType), children: children.map(function (item, index) { return jsx(React.Fragment, { children: item }, index); }) })) : (jsx("ol", { className: "jiffyui-list ".concat(olListStyle, " ").concat(listType), children: children.map(function (item, index) { return jsx(React.Fragment, { children: item }, index); }) })) }));
};
var Item$1 = function (props) {
    var children = props.children;
    return (jsx("li", { className: "jiffyui-list--item", children: children }));
};
List.Item = Item$1;

var css_248z$e = ".jiffyui-mediaCard {\n  padding: 0;\n}\n\n.jiffyui-shadow-mediaCard {\n  box-shadow: var(--jiffyui-low-elevation);\n  border: none;\n}\n\n.jiffyui-borderd-mediaCard {\n  border: 1px solid var(--jiffyui-naturalLight-200);\n  border-radius: 0.4rem;\n}\n\n.jiffyui-borderWithShadow-mediaCard {\n  box-shadow: var(--jiffyui-low-elevation);\n  border: 1px solid var(--jiffyui-naturalLight-100);\n}\n\n.jiffyui-plain-mediaCard {\n  background: var(--jiffyui-naturalLight-100);\n  border-radius: 4px;\n}\n\n.jiffyui-mediaCard-image img {\n  display: block;\n  border-radius: 5px 5px 0px 0px;\n}\n\n@media (min-width: 767px) {\n  .jiffyui-horizontal-mediaCard .jiffyui-mediaCard--inner {\n    display: flex;\n  }\n  .jiffyui-horizontal-mediaCard .jiffyui-mediaCard--body__inner,\n  .jiffyui-horizontal-mediaCard .jiffyui-mediaCard-image {\n    height: 100%;\n  }\n  .jiffyui-horizontal-mediaCard .jiffyui-mediaCard-image img {\n    height: 100%;\n    object-fit: cover;\n  }\n  .jiffyui-horizontal-mediaCard .jiffyui-mediaCard-thumbnail {\n    flex: 0 0 200px;\n  }\n  .jiffyui-horizontal-mediaCard .jiffyui-mediaCard-body {\n    flex: 0 0 calc(100% - 200px);\n  }\n  .jiffyui-horizontal-mediaCard .jiffyui-mediaCard-image img {\n    border-radius: 5px 0px 0px 5px;\n  }\n}\n.jiffyui-mediaCard-body {\n  padding: 1.6rem;\n}\n\n.jiffyui-mediaCard--title_inner {\n  flex: 0 0 calc(100% - 38px);\n}\n\n.jiffyui-mediaCard--title__action {\n  display: flex;\n  align-items: start;\n  flex-wrap: nowrap;\n}\n\n.jiffyui-mediaCard-title__text {\n  margin: 0;\n  font-size: 1.6rem;\n  color: var(--jiffyui-naturalDark-1200);\n}\n\n.jiffyui-mediaCard-description__text {\n  font-size: 1.4rem;\n  color: var(--jiffyui-naturalDark-900);\n  margin-top: 0.4rem;\n}\n\n.jiffyui-mediaCard-actions_wrapper {\n  margin-top: 1.6rem;\n  display: flex;\n  gap: 0.8rem;\n}";
styleInject(css_248z$e);

var MediaCard = function (_a) {
    var _b = _a.type, type = _b === void 0 ? "Borderd" : _b, _c = _a.mediaSrc, mediaSrc = _c === void 0 ? "https://placehold.co/1000x700" : _c, primaryAction = _a.primaryAction, _d = _a.orientation, orientation = _d === void 0 ? "Vertical" : _d, _e = _a.title, title = _e === void 0 ? "Lorem ipsum is placeholder" : _e, _f = _a.subtitle, subtitle = _f === void 0 ? "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries" : _f, secondaryAction = _a.secondaryAction, headerActions = _a.headerActions; __rest(_a, ["type", "mediaSrc", "primaryAction", "orientation", "title", "subtitle", "secondaryAction", "headerActions"]);
    var getCardType = function () {
        switch (type) {
            case "Plain":
                return "jiffyui-plain-mediaCard";
            case "Shadow":
                return "jiffyui-shadow-mediaCard";
            case "Borderd":
                return "jiffyui-borderd-mediaCard";
            case "BorderWithShadow":
                return "jiffyui-borderWithShadow-mediaCard";
            default:
                return "jiffyui-borderd-mediaCard";
        }
    };
    var getOrientation = function () {
        switch (orientation) {
            case "Vertical":
                return "jiffyui-vertical-mediaCard";
            case "Horizontal":
                return "jiffyui-horizontal-mediaCard";
            default:
                return "";
        }
    };
    var cardTypeCss = getCardType();
    var orientation1 = getOrientation();
    var _g = useState(false), active = _g[0], setActive = _g[1];
    return (jsx("div", { className: "jiffyui-mediaCard ".concat(cardTypeCss, " ").concat(orientation1), children: jsxs("div", { className: "jiffyui-mediaCard--inner", children: [jsx("div", { className: "jiffyui-mediaCard-thumbnail", children: jsx("div", { className: "jiffyui-mediaCard-image", children: jsx("img", { alt: "test", src: mediaSrc, style: { width: "100%" } }) }) }), title || subtitle ? (jsxs("div", { className: "jiffyui-mediaCard-body", children: [title && (jsx(Fragment, { children: headerActions ? (jsxs("div", { className: "jiffyui-mediaCard-title_wrapper jiffyui-mediaCard--title__action", children: [jsxs("div", { className: "jiffyui-mediaCard--title_inner", children: [jsx("h4", { className: "jiffyui-mediaCard-title__text", children: title }), subtitle && (jsx("p", { className: "jiffyui-mediaCard-description__text", children: subtitle }))] }), headerActions1()] })) : (jsxs("div", { className: "jiffyui-mediaCard-title_wrapper", children: [jsx("h4", { className: "jiffyui-mediaCard-title__text", children: title }), subtitle && (jsx("p", { className: "jiffyui-mediaCard-description__text", children: subtitle }))] })) })), jsxs("div", { className: "jiffyui-mediaCard-actions_wrapper", children: [secondaryAction1(), primaryAction1()] })] })) : null] }) }));
    function primaryAction1() {
        if (primaryAction) {
            var color = primaryAction.color, icon = primaryAction.icon, isDisabled = primaryAction.isDisabled, isLoading = primaryAction.isLoading, alignIcon = primaryAction.alignIcon, children = primaryAction.children, onClick = primaryAction.onClick;
            return (jsx(Button, __assign({ size: "Medium", variant: "Primary", color: color ? color : "Primary", icon: icon && icon, alignIcon: alignIcon && alignIcon, isDisabled: isDisabled && isDisabled, isLoading: isLoading && isLoading, children: children ? children : "Primary action" }, primaryAction1, { onClick: onClick })));
        }
    }
    function secondaryAction1() {
        if (secondaryAction) {
            var color = secondaryAction.color, icon = secondaryAction.icon, isDisabled = secondaryAction.isDisabled, isLoading = secondaryAction.isLoading, alignIcon = secondaryAction.alignIcon, children = secondaryAction.children, onClick = secondaryAction.onClick;
            return (jsx(Button, __assign({ size: "Medium", variant: "Secondry", color: color ? color : "Primary", icon: icon && icon, alignIcon: alignIcon && alignIcon, isDisabled: isDisabled && isDisabled, isLoading: isLoading && isLoading, children: children ? children : "Secondary Action" }, secondaryAction1, { onClick: onClick })));
        }
    }
    function headerActions1() {
        if (headerActions) {
            return (jsx(Actionlist, { onClose: function () { return setActive(false); }, activator: jsx(Button, { variant: "Link", onClick: function () { return setActive(!active); }, children: "", icon: jsx(MoreHorizontal$1, { size: 18 }) }), open: active, options: headerActions }));
        }
    }
};

var css_248z$d = ".jiffyui-modal {\n  position: fixed;\n  z-index: 9999;\n  background: #fff;\n  transition: 0.8s all;\n  max-width: 600px;\n  left: 50%;\n  transform: translateX(-50%) translateY(-50%) scale(0.95);\n  top: -230%;\n  opacity: 0;\n  border-radius: 5px;\n  visibility: hidden;\n  opacity: 0;\n}\n\n.jiffyui-modal.open {\n  right: 0;\n  top: 50%;\n  opacity: 1;\n  transform: translateX(-50%) translateY(-50%) scale(1);\n  visibility: visible;\n  opacity: 1;\n}\n\n.jiffyui-modal_overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: #000;\n  opacity: 0;\n  z-index: -99;\n  visibility: hidden;\n  transition: 0.4s all;\n}\n\n.jiffyui-modal_overlay.open {\n  opacity: 0.5;\n  z-index: 999;\n  visibility: visible;\n}\n\n.jiffyui-modal-header {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  padding: 1.6rem;\n  border-bottom: 1px solid #e4e4e4;\n  align-items: center;\n}\n\n.jiffyui-modal .jiffyui-close-button {\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  width: 28px;\n  height: 28px;\n  transition: 0.3s all;\n  border-radius: 4px;\n}\n.jiffyui-modal .jiffyui-close-button svg {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n.jiffyui-modal .jiffyui-close-button:hover {\n  background: #e4e4e4;\n}\n\n.jiffyui-modal-body {\n  padding: 1.6rem;\n  color: #646464;\n  overflow-y: auto;\n}\n\n.jiffyui-modal_footer {\n  padding: 1.6rem;\n  border-top: 1px solid #e4e4e4;\n}";
styleInject(css_248z$d);

var Modal = function (_a) {
    var isOpen = _a.isOpen, onDismiss = _a.onDismiss, children = _a.children, _b = _a.title, title = _b === void 0 ? "Lorem ipsum" : _b, footer = _a.footer; __rest(_a, ["isOpen", "onDismiss", "children", "title", "footer"]);
    var open = useDelay(isOpen, 600);
    return (open || isOpen) ? (jsxs(Portal, { children: [jsx("div", { className: "jiffyui-modal_overlay  ".concat((isOpen && open) ? "open" : "close"), onClick: onDismiss, role: "none" }), jsx("div", { className: "jiffyui-modal ".concat((isOpen && open) ? "open" : "close"), children: jsx("div", { className: "jiffyui-modal_inner", children: jsxs("div", { className: "jiffyui-modal-content", children: [jsxs("div", { className: "jiffyui-modal-header", children: [title && (jsx(TextStyle, { as: "h4", type: "MdHeading", textColor: "Dark", children: title })), jsx("button", { className: "jiffyui-close-button", onClick: onDismiss, children: jsx(X$1, { size: 20 }) })] }), jsx("div", { className: "jiffyui-modal-body", children: children }), footer &&
                                jsx("div", { className: "jiffyui-modal_footer", children: footer })] }) }) })] })) : null;
};

var isClickBelow = function (node, popoverRef) {
    var _a;
    var mainContainerChildren = (_a = document.getElementById('inte-portalContainer')) === null || _a === void 0 ? void 0 : _a.children;
    if (!mainContainerChildren)
        return;
    var flag = false;
    for (var i = 0; i < mainContainerChildren.length; i++) {
        if (flag && mainContainerChildren[i].contains(node))
            return true;
        if (mainContainerChildren[i].contains(popoverRef.current))
            flag = true;
    }
    return false;
};
var myHandleClick = function (parentRef, popoverRef, onClose, event) {
    var _a, _b;
    if (!(event.target instanceof Node) ||
        ((_a = parentRef === null || parentRef === void 0 ? void 0 : parentRef.current) === null || _a === void 0 ? void 0 : _a.contains(event.target)) ||
        ((_b = popoverRef === null || popoverRef === void 0 ? void 0 : popoverRef.current) === null || _b === void 0 ? void 0 : _b.contains(event.target)) ||
        isClickBelow(event.target, popoverRef)) {
        return;
    }
    else
        onClose();
};
var handleClickOutside = function (parentRef, popoverRef, onClose) {
    return function (event) {
        myHandleClick(parentRef, popoverRef, onClose, event);
    };
};

var css_248z$c = ".pageTitle {\n  display: flex;\n  justify-content: space-between;\n  align-items: start;\n  gap: 0.8rem;\n  margin-bottom: 31px;\n  margin-top: 10px;\n}\n\n.has-reverseNavigation .rev-title__wrapper {\n  display: flex;\n  gap: 1.6rem;\n  align-items: start;\n}\n\n.pageTitle-back__btn {\n  background: transparent;\n  border: none;\n  height: 3.6rem;\n  width: 3.6rem;\n  border-radius: 0.4rem;\n  cursor: pointer;\n  transition: 0.3s all;\n}\n\n.pageTitle-back__btn:hover {\n  background: #e4e4e4;\n}\n\n.pageTitle-actions {\n  display: flex;\n  gap: 0.8rem;\n}\n\n.pageTitle-title {\n  font-size: 2.2rem;\n  margin-bottom: 1rem;\n  color: #333;\n}\n\n.pageTitle-description {\n  color: #6b6262;\n}\n\n.title-with__badge {\n  display: flex;\n  align-items: center;\n  gap: 0.8rem;\n  margin-bottom: 0.8rem;\n}\n.title-with__badge .pageTitle-title {\n  margin-bottom: 0;\n}\n\n.pageTitle-actions_wrapper {\n  position: relative;\n  display: flex;\n  gap: 0.8rem;\n}\n\n.pageTitle-action_wrapper {\n  position: absolute;\n  top: calc(100% + 50px);\n  left: -100%;\n  border: 1px solid #e4e4e4;\n  border-radius: 4px;\n  background: #fff;\n  z-index: 9;\n  min-width: 15rem;\n  opacity: 0;\n  visibility: hidden;\n  transition: 0.3s all;\n  box-shadow: var(--jiffyui-low-elevation);\n  transform: translateX(15%);\n}\n.pageTitle-action_wrapper.mobile-actions_open {\n  opacity: 1;\n  visibility: visible;\n  top: 100%;\n}\n.pageTitle-action_wrapper button {\n  display: block;\n  width: 100%;\n  background: transparent;\n  border: none;\n  color: #333;\n  text-align: left;\n  padding-left: 1.6rem !important;\n  padding-right: 1.6rem !important;\n}\n.pageTitle-action_wrapper button:hover {\n  background: #f2f4ff !important;\n}\n.pageTitle-action_wrapper button span.btn-text {\n  color: #000;\n}\n\n@media (max-width: 767px) {\n  .pageTitle {\n    flex-wrap: wrap;\n  }\n  .rev-title__wrapper .pageTitle-back__btn {\n    display: none;\n  }\n  .pageTitle-back__btn {\n    order: 1;\n  }\n  .pageTitle-back__btn .btn-text {\n    color: #333;\n  }\n  .pageTitle-actions {\n    order: 2;\n  }\n  .has-reverseNavigation .rev-title__wrapper {\n    flex: 0 0 100%;\n    order: 3;\n    border-top: 1px dashed #e4e4e4;\n    padding-top: 1rem;\n    margin-top: 1rem;\n  }\n}";
styleInject(css_248z$c);

var PageTitle = forwardRef(function (_a, ref) {
    var _b = _a.title, title = _b === void 0 ? "Page title" : _b, description = _a.description, isReverseNavigation = _a.isReverseNavigation, primaryAction = _a.primaryAction, secondaryAction = _a.secondaryAction, tertiaryAction = _a.tertiaryAction; _a.extraClass; var badge = _a.badge, onClick = _a.onClick; __rest(_a, ["title", "description", "isReverseNavigation", "primaryAction", "secondaryAction", "tertiaryAction", "extraClass", "badge", "onClick"]);
    var _c = useState(false), isMobile = _c[0], setIsMobile = _c[1];
    var _d = useState(false), isOpenMobileAction = _d[0], setOpenMobileActions = _d[1];
    var activatorRef = useRef(null);
    var dropdownRef = useRef(null);
    useEffect(function () {
        var sizeChecker = function () {
            if (window.innerWidth <= 768) {
                setIsMobile(true);
            }
            else
                setIsMobile(false);
        };
        sizeChecker();
        window.addEventListener("resize", sizeChecker, true);
        return function () {
            window.removeEventListener("resize", sizeChecker, true);
        };
    }, []);
    useEffect(function () {
        var onClose = function () { return setOpenMobileActions(false); };
        var clickOutside = handleClickOutside(activatorRef, dropdownRef, onClose);
        window.addEventListener("click", clickOutside);
        return function () {
            window.removeEventListener("click", clickOutside);
        };
    }, [isOpenMobileAction]);
    return (jsxs("div", { className: "pageTitle ".concat(isReverseNavigation && "has-reverseNavigation"), children: [isMobile && isReverseNavigation && (jsxs("button", { onClick: onClick, className: "pageTitle-back__btn btn  btn--link btn--medium btn--primary__color btn-icon", children: [jsx("div", { className: "btn-icon", children: jsx(ChevronLeft$1, {}) }), jsx("span", { className: "btn-text", children: "Back" })] })), jsxs("div", { className: "rev-title__wrapper", children: [isReverseNavigation && (jsx("button", { className: "pageTitle-back__btn", onClick: onClick, children: jsx(ChevronLeft$1, {}) })), jsxs("div", { className: "pageTitle-wrapper", children: [title && (jsxs("div", { className: "".concat(badge && "title-with__badge", " "), children: [jsx("h1", { className: "pageTitle-title", children: title }), badge && badge1()] })), description && (jsx("p", { className: "pageTitle-description", children: description }))] })] }), primaryAction || secondaryAction || tertiaryAction ? (jsx("div", { className: "pageTitle-actions", children: isMobile ? (jsxs("div", { className: "pageTitle-actions_wrapper", children: [jsx("span", { ref: activatorRef, children: jsx(Button, { onClick: function () {
                                    setOpenMobileActions(!isOpenMobileAction);
                                }, variant: "Tertiary", children: "", icon: jsx(MoreHorizontal$1, { size: 20 }) }) }), PrimaryAction1(), jsxs("div", { ref: dropdownRef, className: "pageTitle-action_wrapper ".concat(isOpenMobileAction ? "mobile-actions_open" : ""), children: [tertiaryAction1(), secondaryAction1()] })] })) : (jsxs(Fragment, { children: [tertiaryAction1(), secondaryAction1(), PrimaryAction1()] })) })) : null] }));
    function PrimaryAction1() {
        if (primaryAction) {
            var size = primaryAction.size, isDisabled = primaryAction.isDisabled, children = primaryAction.children, variant = primaryAction.variant; primaryAction.icon; primaryAction.alignIcon; primaryAction.isFullWidth; primaryAction.isLoading; primaryAction.onClick; primaryAction.color;
            return (jsx(Button, __assign({ size: size !== null && size !== void 0 ? size : "Medium", children: children !== null && children !== void 0 ? children : "Submit", isDisabled: isDisabled ? true : false }, primaryAction, { variant: variant !== null && variant !== void 0 ? variant : "Primary" })));
        }
    }
    function secondaryAction1() {
        if (secondaryAction) {
            var secondaryAction1_1 = secondaryAction;
            return (jsx(Button, __assign({ size: secondaryAction1_1.size ? secondaryAction1_1.size : "Medium", children: secondaryAction1_1.children ? secondaryAction1_1.children : "Submit" }, secondaryAction1_1, { variant: secondaryAction1_1.variant ? secondaryAction1_1.variant : "Secondry" })));
        }
    }
    function tertiaryAction1() {
        if (tertiaryAction) {
            var tertiaryAction1_1 = tertiaryAction;
            return (jsx(Button, __assign({ size: tertiaryAction1_1.size ? tertiaryAction1_1.size : "Medium", children: tertiaryAction1_1.children ? tertiaryAction1_1.children : "Submit" }, secondaryAction1, { variant: tertiaryAction1_1.variant ? tertiaryAction1_1.variant : "Link" })));
        }
    }
    function badge1() {
        if (badge) {
            var size = badge.size, color = badge.color, type = badge.type, emphasis = badge.emphasis, children = badge.children;
            return (jsx(Badge, { color: color !== null && color !== void 0 ? color : "Positive", children: children !== null && children !== void 0 ? children : "Success", type: type !== null && type !== void 0 ? type : "None", size: size !== null && size !== void 0 ? size : "Medium", emphasis: emphasis !== null && emphasis !== void 0 ? emphasis : "Intense" }));
        }
    }
});

var css_248z$b = ".Pixel-Pagination__label {\n  padding: 0 1.2rem;\n}\n\n.Pixel-Pagination__center {\n  padding: 0.6rem 0.8rem 0.6rem 1.2rem;\n  background-color: #ffffff;\n}";
styleInject(css_248z$b);

var Pagination = function (props) {
    var isNextDisable = props.isNextDisable, isPreviousDisable = props.isPreviousDisable, onNext = props.onNext, onPrevious = props.onPrevious, children = props.children, type = props.type, primaryAction = props.primaryAction;
    return (jsxs("nav", { "aria-label": "Pagination", className: classnames({
            "Pixel-Pagination": true,
            "flex-row justify-between": type === "end",
        }), children: [primaryAction && (jsx("div", { className: "Pixel-Pagination__action", children: primaryAction })), jsxs("div", { className: classnames({
                    "flex-row align-center": true,
                    "Pixel-Pagination__center justify-center": type === "center",
                }), children: [jsx("div", { className: "Pixel-ButtonGroup__Item", children: jsx(Button, { children: "Previous", variant: "Tertiary", isDisabled: isPreviousDisable, onClick: function () { return onPrevious === null || onPrevious === void 0 ? void 0 : onPrevious(); } }) }), children && jsx("div", { className: "Pixel-Pagination__label", children: children }), jsx("div", { className: "Pixel-ButtonGroup__Item", children: jsx(Button, { children: "Next", variant: "Tertiary", isDisabled: isNextDisable, onClick: function () { return onNext === null || onNext === void 0 ? void 0 : onNext(); } }) })] })] }));
};

var css_248z$a = ".progress {\n  background: var(--jiffyui-naturalLight-300);\n  height: 8px;\n  border-radius: 5px;\n  position: relative;\n  margin-top: 3rem;\n}\n\n.progress-inner {\n  background: var(--jiffyui-naturalDark-1300);\n  height: 100%;\n  border-radius: 10px;\n  position: relative;\n  transition: 0.3s all;\n}\n\nlabel.progress-label {\n  position: absolute;\n  bottom: calc(100% + 0.5rem);\n  transition: 0.3s all;\n  display: inline-block;\n  word-break: break-word;\n  color: var(--jiffyui-naturalDark-1300);\n  font-size: 1.4rem;\n  line-height: 2rem;\n  font-family: var(--jiffyui-regular-font);\n  width: max-content;\n}\n\n.progress-val {\n  position: absolute;\n  right: 0;\n  bottom: calc(100% + 5px);\n  font-size: 1.4rem;\n  border-radius: 4px;\n  color: var(--jiffyui-naturalDark-1300);\n  transition: 0.3s all;\n}\n\n.progress--possitive .progress-inner {\n  background: var(--jiffyui-Possitive-600);\n}\n\n.progress--negative .progress-inner {\n  background-color: var(--jiffyui-Negative-600);\n}\n\n.progress--notice .progress-inner {\n  background-color: var(--jiffyui-Notice-400);\n}\n\n.progress--primary .progress-inner {\n  background-color: var(--jiffyui-Cerulean-600);\n}\n\n.progress--neutral .progress-inner {\n  background-color: var(--jiffyui-naturalDark-1300);\n}\n\n.progress.progress--small {\n  height: 0.4rem;\n}\n\n.progress.progress--medium {\n  height: 0.6rem;\n}\n\n.progress.progress--large {\n  height: 0.8rem;\n}";
styleInject(css_248z$a);

var ProgressBar = forwardRef(function (_a, ref) {
    var variant = _a.variant, _b = _a.size, size = _b === void 0 ? "Medium" : _b; _a.showLabel; _a.showPercentage; var label = _a.label, _c = _a.valuePercentage, valuePercentage = _c === void 0 ? 0 : _c, outOf = _a.outOf; __rest(_a, ["variant", "size", "showLabel", "showPercentage", "label", "valuePercentage", "outOf"]);
    if (valuePercentage > 100)
        valuePercentage = 100;
    var checkSize = function () {
        switch (size) {
            case "Small":
                return "progress--small";
            case "Medium":
                return "progress--medium";
            case "Large":
                return "progress--large";
            default:
                return "progress--medium";
        }
    };
    var checkVarients = function () {
        switch (variant) {
            case "Positive":
                return "progress--possitive";
            case "Negative":
                return "progress--negative";
            case "Notice":
                return "progress--notice";
            case "Primary":
                return "progress--primary";
            case "Neutral":
                return "progress--neutral";
            default:
                return "progress--default";
        }
    };
    var progressVarent = checkVarients();
    var progressSize = checkSize();
    return (jsxs("div", { ref: ref, className: "progress ".concat(progressVarent, " ").concat(progressSize), "progress-data": outOf, children: [jsx("div", { className: "progress-inner", style: { 'width': valuePercentage + '%' }, children: jsx("label", { className: "progress-label", children: label }) }), jsx("div", { className: "progress-val", children: valuePercentage + '%' })] }));
});

var initialState = {
    sideBar: [false, function () { }],
    toast: {
        toastItems: [],
        handleToastItems: function () { },
        handleClearToastItems: function () { },
    },
};
var AppContext = React.createContext(initialState);

var checkIndex = function (str, searchStr, ind) {
    var i = 0;
    for (i; i < searchStr.length; i++) {
        if (!str[ind + i] || str[ind + i] !== searchStr[i])
            return false;
    }
    if (str[i + ind] && str[i + ind] !== "/")
        return false;
    return true;
};
var searchWordInString = function (str, searchStr) {
    if (str.length < searchStr.length)
        return false;
    for (var i = 0; i <= str.length - searchStr.length; i++) {
        if (str[i] === searchStr[0]) {
            if (checkIndex(str, searchStr, i))
                return true;
        }
    }
    return false;
};

var css_248z$9 = ".Pixel-sideBar {\n  border-right: 0.1rem solid rgb(229, 231, 235);\n  width: 100%;\n  color: rgb(64, 86, 109);\n  background-color: #ffffff;\n  display: flex;\n  flex-direction: column;\n  transition: transform 0.3s ease-in-out;\n  z-index: 88888;\n  height: 100vh;\n}\n\n.sidebar-header {\n  display: flex;\n  position: relative;\n  border-bottom: 1px solid #e4e4e4;\n  padding-bottom: 18px;\n  padding-top: 17px;\n  padding-left: 1.2rem;\n  padding-right: 1.2rem;\n  align-items: center;\n}\n\n.Pixel-sideBar__logo {\n  flex: 0 0 calc(100% - 30px);\n}\n\n.Pixel-sideBar__logo svg {\n  width: 180px;\n  height: 40px;\n}\n\nimg.sidebar-logo {\n  width: 50%;\n}\n\n.Pixel-sideBar__closeButton {\n  transition: transform 0.3s ease-in-out;\n  border: none;\n  background: transparent;\n  width: 30px;\n  padding: 0;\n  height: 30px;\n  cursor: pointer;\n  padding: 2px;\n  border-radius: 4px;\n  transition: 0.3s all;\n}\n\n.Pixel-sideBar__closeButton:hover {\n  background-color: #e4e4e4;\n}\n\n.Pixel-sideBar__closeButton svg {\n  width: 100%;\n  display: block;\n}\n\n.Pixel-sideBar__ItemList {\n  position: relative;\n  padding-bottom: var(--footerHeight);\n  flex-grow: 1;\n}\n\n.Pixel-sideBar__title {\n  padding: 0rem 1.6rem;\n  font-size: 1.4rem;\n  line-height: 2.4rem;\n  margin-bottom: 0.8rem;\n}\n\n.Pixel-sideBar__itemBody {\n  border-radius: 0.6rem;\n}\n\n.Pixel-sideBar .Pixel-sideBar__ItemList {\n  height: calc(100vh - 140px);\n  overflow-y: auto;\n}\n\n.Pixel-sideBar__list > .Pixel-sideBar__listItem > .Pixel-sideBar__itemBody {\n  padding: 1.3rem 1.6rem;\n  display: flex;\n  justify-content: space-between;\n  gap: 1.2rem;\n  cursor: pointer;\n  align-items: center;\n}\n\n.Pixel-sideBar__label {\n  font-weight: 500;\n  font-size: 1.4rem;\n  line-height: 2.4rem;\n}\n\n.Pixel-sideBar__linkBody,\n.Pixel-sideBar__Icon,\n.Pixel-sideBar__badge,\n.Pixel-sideBar__label {\n  display: flex;\n  align-items: center;\n  gap: 1.2rem;\n}\n\n.Pixel-sideBar__label {\n  color: #000;\n}\n\n.Pixel-sideBar__list,\n.Pixel-sideBar__childList {\n  margin-bottom: 0;\n}\n\n.Pixel-sideBar__childList {\n  max-height: 0;\n  transition: max-height 0.35s cubic-bezier(0, 1, 0, 1);\n  overflow: hidden;\n}\n\n.Pixel-sideBar__listItem--expandable--active .Pixel-sideBar__childList {\n  overflow: hidden;\n  transition: max-height 0.3s cubic-bezier(1, 0, 1, 0);\n  height: auto;\n  max-height: 9999px;\n}\n\nli.Pixel-sideBar__listItem {\n  border-radius: 4px;\n  transition: 0.3s all;\n}\n\n.Pixel-sideBar__listItem:not(.Pixel-sideBar__listItem--expandable):hover,\n.Pixel-sideBar__listItem--expandable .Pixel-sideBar__itemBody:hover {\n  background-color: rgba(46, 91, 255, 0.09);\n}\n\n.Pixel-sideBar__listItem--expandable--active > .Pixel-sideBar__itemBody {\n  background: rgba(46, 91, 255, 0.09);\n}\n\n.Pixel-sideBar__list > .Pixel-sideBar__listItem--active > .Pixel-sideBar__itemBody {\n  position: relative;\n}\n\n.Pixel-sideBar__listItem--expandable--active .Pixel-sideBar__itemBody .Pixel-sideBar__Icon svg {\n  stroke: rgb(46, 91, 255);\n}\n\n.Pixel-sideBar__list > .Pixel-sideBar__listItem--active > .Pixel-sideBar__itemBody .Pixel-sideBar__Icon svg {\n  stroke: rgb(46, 91, 255);\n}\n\n.Pixel-sideBar__expandIcon--active svg {\n  stroke: rgb(46, 91, 255);\n}\n\n.Pixel-sideBar__childList .Pixel-sideBar__listItem--active .Pixel-sideBar__label {\n  color: rgb(46, 91, 255);\n}\n\n.Pixel-sideBar__childList .Pixel-sideBar__listItem--active .Pixel-sideBar__itemBody {\n  background-color: rgba(46, 91, 255, 0.09);\n}\n\n.Pixel-sideBar__expandIcon--active svg:first-child {\n  transform: rotate(180deg);\n  transition: all 0.3s ease-in-out;\n}\n\n.Pixel-sideBar__expandIcon:not(.Pixel-sideBar__expandIcon--active) svg:first-child {\n  transform: rotate(0deg);\n  transition: all 0.3s ease-in-out;\n}\n\n.Pixel-sideBar__expandIcon svg {\n  display: block;\n  width: 100%;\n}\n\n.Pixel-sideBar__listItem--expandable--active > .Pixel-sideBar__itemBody .Pixel-sideBar__label {\n  color: rgb(46, 91, 255);\n}\n\n.Pixel-sideBar__childList .Pixel-sideBar__itemBody {\n  display: flex;\n  justify-content: space-between;\n  gap: 1.2rem;\n  position: relative;\n  padding: 0.8rem 1.6rem;\n  cursor: pointer;\n}\n\n.Pixel-sideBar__Item--footer {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  padding-top: 1.6rem;\n  padding-bottom: 2.4rem;\n}\n\n.Pixel-sideBar__Item:not(.Pixel-sideBar__Item--footer) {\n  padding-bottom: 1.6rem;\n}\n\n.Pixel-sideBar__Item {\n  border-bottom: 1px dashed #e4e4e4;\n}\n\n.Pixel-sideBar__Item:last-child {\n  border-bottom: none;\n  padding-bottom: 0;\n}\n\n.Pixel-sideBar__Item + .Pixel-sideBar__Item:not(.Pixel-sideBar__Item--footer) {\n  padding-top: 1.6rem;\n}\n\n.Pixel-sideBar__listItem--disabled {\n  cursor: not-allowed;\n}\n\n.Pixel-sideBar__listItem--disabled > div {\n  opacity: 0.5;\n  pointer-events: none;\n  user-select: none;\n}\n\n.Pixel-sideBar__listItem.Pixel-sideBar__listItem--expandable::before {\n  content: \"\";\n  height: calc(100% - 75px);\n  width: 1px;\n  background: #d7cccc;\n  position: absolute;\n  top: 50px;\n  left: 23px;\n}\n\n.Pixel-sideBar__listItem.Pixel-sideBar__listItem--expandable .Pixel-sideBar__childList {\n  padding-left: 45px;\n}\n\n.Pixel-sideBar__listItem.Pixel-sideBar__listItem--expandable,\n.Pixel-sideBar__listItem.Pixel-sideBar__listItem--expandable .Pixel-sideBar__childList > .Pixel-sideBar__listItem {\n  position: relative;\n}\n\n.Pixel-sideBar__listItem.Pixel-sideBar__listItem--expandable .Pixel-sideBar__childList > .Pixel-sideBar__listItem::after {\n  content: \"\";\n  width: 14px;\n  height: 15px;\n  position: absolute;\n  border-left: 1px solid #d7cccc;\n  border-bottom: 1px solid #d7cccc;\n  border-bottom-left-radius: 6px;\n  top: 7px;\n  left: -22px;\n}\n\n.sidebar-footer {\n  padding: 1.2rem;\n  border-top: 1px solid #e4e4e4;\n  box-shadow: 0px -1px 6px 0px rgba(0, 0, 0, 0.05);\n}\n\n.Pixel-sideBar--logout__Item {\n  display: flex;\n  align-items: center;\n  gap: 1.2rem;\n  padding: 1.3rem 1.6rem;\n  cursor: pointer;\n  background: var(--jiffyui-Negative-050);\n  border-radius: 0.4rem;\n  color: var(--jiffyui-Negative-050);\n  transition: 0.3s all;\n}\n\n.Pixel-sideBar--logout__Item:hover {\n  background-color: var(--jiffyui-Negative-100);\n}\n\n.Pixel-sideBar--logout__Item svg,\n.Pixel-sideBar--logout__Item .Pixel-sideBar__label {\n  color: var(--jiffyui-Negative-500);\n}";
styleInject(css_248z$9);

var SideBar = function (_a) {
    var _b;
    var onChange = _a.onChange, _c = _a.logo, logo = _c === void 0 ? jsx("img", { src: '', className: "sidebar-logo" }) : _c, children = _a.children, _d = _a.isCloseOnEsc, isCloseOnEsc = _d === void 0 ? true : _d, className = _a.className; _a.isLogoutAction;
    var context = useContext(AppContext);
    var _e = useState({}), expandedItem = _e[0], setExpandedItem = _e[1];
    var expandIconClickHandler = useCallback(function (e, path, flag) {
        var _a;
        e.stopPropagation();
        setExpandedItem((_a = {}, _a[path] = !flag, _a));
    }, []);
    var sideBarRef = useRef(null);
    useEffect(function () {
        var _a;
        setExpandedItem((_a = {}, _a[window.location.pathname] = true, _a));
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        return function () {
            setExpandedItem({});
        };
    }, [window.location.pathname]);
    useEffect(function () {
        var handleEscapeClose = function (e) {
            if (e.key === "Escape") {
                closeSideBar();
            }
        };
        if (isCloseOnEsc) {
            window.addEventListener("keydown", handleEscapeClose, true);
        }
        return function () {
            window.removeEventListener("keydown", handleEscapeClose, true);
        };
    }, [isCloseOnEsc]);
    var closeSideBar = function () {
        context.sideBar[1](false);
    };
    var handelRouteChange = function (newPath) {
        onChange(newPath);
        closeSideBar();
    };
    var footerHeight = useMemo(function () {
        if (sideBarRef.current) {
            var footer = sideBarRef.current.getElementsByClassName("Pixel-sideBar__Item--footer");
            if (footer.length) {
                return footer[0].clientHeight + "px";
            }
        }
        return "0";
    }, [children, sideBarRef.current]);
    var containerStyle = {
        "--footerHeight": footerHeight,
    };
    return (jsx(Fragment, { children: jsxs("aside", { className: classnames((_b = {
                    "Pixel-sideBar": true
                },
                _b[className] = className,
                _b)), style: containerStyle, ref: sideBarRef, children: [jsx("div", { className: "sidebar-header", children: logo && jsx("div", { className: "Pixel-sideBar__logo", children: logo }) }), jsx("div", { className: "Pixel-sideBar__ItemList", children: Array.isArray(children)
                        ? children === null || children === void 0 ? void 0 : children.map(function (item, index) {
                            return (jsx(React.Fragment, { children: jsx(Item, __assign({}, item === null || item === void 0 ? void 0 : item.props, { onChange: handelRouteChange, expandedItem: expandedItem, expandIconClickHandler: expandIconClickHandler })) }, index));
                        })
                        : (children === null || children === void 0 ? void 0 : children.props.menu) && (jsx(Item, __assign({}, children === null || children === void 0 ? void 0 : children.props, { onChange: handelRouteChange, expandedItem: expandedItem, expandIconClickHandler: expandIconClickHandler }))) }), jsx("div", { className: "sidebar-footer", children: jsxs("div", { className: "Pixel-sideBar--logout__Item", children: [jsx("div", { className: "Pixel-sideBar__Icon", children: jsx(LogOut$1, { size: 16 }) }), jsx("div", { className: "Pixel-sideBar__label", children: "Logout" })] }) })] }) }));
};
var Item = function (_a) {
    var title = _a.title, menu = _a.menu, _b = _a.onChange, onChange = _b === void 0 ? function () { } : _b, type = _a.type, expandedItem = _a.expandedItem, _c = _a.expandIconClickHandler, expandIconClickHandler = _c === void 0 ? function () { } : _c;
    var currentPath = window.location.pathname;
    var id = useId();
    var makeMenuList = function (item, parent) {
        if (parent === void 0) { parent = ""; }
        var active = searchWordInString(currentPath, parent + item.path);
        if (currentPath !== "/" && parent + item.path === "/")
            active = false;
        return (jsx("li", { className: classnames({
                "Pixel-sideBar__listItem": true,
                "Pixel-sideBar__listItem--active": active,
                "Pixel-sideBar__listItem--disabled": item.isDisabled,
            }), children: jsxs("div", { role: "none", className: "Pixel-sideBar__itemBody", onClick: function () { return onChange(parent + item.path); }, children: [jsxs("div", { className: "Pixel-sideBar__linkBody", children: [item.icon && (jsx("div", { className: "Pixel-sideBar__Icon", children: item.icon })), jsx("div", { className: "Pixel-sideBar__label", children: item.label })] }), item.badge && (jsx("div", { className: "Pixel-sideBar__badge", children: item.badge }))] }) }, item.id));
    };
    var MakeExpandableItem = function (parentItem) {
        var _a, _b;
        var active = ((_a = Object.keys(expandedItem)[0]) === null || _a === void 0 ? void 0 : _a.includes(parentItem.path)) &&
            Object.values(expandedItem)[0];
        return (jsxs("li", { className: classnames({
                "Pixel-sideBar__listItem": true,
                "Pixel-sideBar__listItem--expandable": true,
                "Pixel-sideBar__listItem--active": searchWordInString(currentPath, parentItem.path),
                "Pixel-sideBar__listItem--expandable--active": active,
                "Pixel-sideBar__listItem--disabled": parentItem.isDisabled,
            }), children: [jsxs("div", { role: "none", className: "Pixel-sideBar__itemBody", onClick: function (e) { return expandIconClickHandler(e, parentItem.path, active); }, children: [jsxs("div", { className: "Pixel-sideBar__linkBody", children: [parentItem.icon && (jsx("div", { className: "Pixel-sideBar__Icon", children: parentItem.icon })), jsx("div", { className: "Pixel-sideBar__label", children: parentItem.label })] }), jsx("div", { className: classnames({
                                "Pixel-sideBar__expandIcon": true,
                                "Pixel-sideBar__expandIcon--active": active,
                            }), children: jsx(ChevronDown$1, { size: "16", color: "rgb(64, 86, 109)" }) })] }), jsx("ul", { className: "Pixel-sideBar__childList", children: (_b = parentItem.children) === null || _b === void 0 ? void 0 : _b.map(function (item) {
                        return makeMenuList(item, parentItem.path);
                    }) })] }, parentItem.id));
    };
    return (jsxs("div", { className: classnames({
            "Pixel-sideBar__Item": true,
            "Pixel-sideBar__Item--footer": type === "footer",
        }), children: [title && jsx("div", { className: "Pixel-sideBar__title", children: title }), jsx("nav", { "aria-label": id, children: jsx("ul", { className: "Pixel-sideBar__list", children: menu.map(function (item) {
                        if (item.children)
                            return MakeExpandableItem(item);
                        return makeMenuList(item);
                    }) }) })] }));
};
SideBar.Item = Item;

var css_248z$8 = ".side-sheet {\n  position: fixed;\n  right: -100%;\n  top: 0;\n  height: 100%;\n  max-width: 40rem;\n  width: 100%;\n  z-index: 9999;\n  background: #fff;\n  transition: 0.4s all;\n  box-shadow: 0rem 1.25rem 1.25rem -0.5rem rgba(26, 26, 26, 0.28);\n}\n\n.side-sheet.open {\n  right: 0;\n}\n\n.side-sheet_overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: #000;\n  opacity: 0;\n  z-index: -99;\n  visibility: hidden;\n  transition: 0.4s all;\n}\n\n.side-sheet_overlay.open {\n  opacity: 0.5;\n  z-index: 999;\n  visibility: visible;\n}\n\n.side-sheet-header {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  padding: 1.6rem;\n  border-bottom: 1px solid #e4e4e4;\n  align-items: center;\n}\n\n.side-sheet .close-button {\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  width: 28px;\n  height: 28px;\n  transition: 0.3s all;\n  border-radius: 4px;\n}\n\n.side-sheet .close-button:hover {\n  background: #e4e4e4;\n}\n\n.side-sheet-body {\n  padding: 1.6rem;\n  color: #646464;\n  height: calc(100vh - 130px);\n  overflow-y: auto;\n}\n\n.side-sheet_footer {\n  padding: 1.6rem;\n  border-top: 1px solid #e4e4e4;\n}";
styleInject(css_248z$8);

var SideSheet = function (_a) {
    var isOpen = _a.isOpen, onDismiss = _a.onDismiss, children = _a.children, _b = _a.title, title = _b === void 0 ? "Lorem ipsum" : _b, footer = _a.footer; __rest(_a, ["isOpen", "onDismiss", "children", "title", "footer"]);
    var open = useDelay(isOpen, 600);
    return (open || isOpen) ? (jsxs(Portal, { children: [jsx("div", { className: "side-sheet_overlay  ".concat((isOpen && open) ? "open" : "close"), onClick: onDismiss, role: "none" }), jsx("div", { className: "side-sheet ".concat((isOpen && open) ? "open" : "close"), children: jsx("div", { className: "side-sheet_inner", children: jsxs("div", { className: "side-sheet-content", children: [jsxs("div", { className: "side-sheet-header", children: [title && (jsx(TextStyle, { as: "h4", type: "MdHeading", textColor: "Dark", children: title })), jsx("button", { className: "close-button", onClick: onDismiss, children: jsx(X$1, { size: 20 }) })] }), jsx("div", { className: "side-sheet-body", children: children }), footer &&
                                jsx("div", { className: "side-sheet_footer", children: footer })] }) }) })] })) : null;
};

var css_248z$7 = ".stepWizard {\n  display: flex;\n  flex-wrap: nowrap;\n  justify-content: center;\n  align-items: center;\n}\n\n.stepWizard__step {\n  text-align: center;\n  position: relative;\n}\n\n.stepWizard__icon {\n  display: block;\n  width: 15px;\n  height: 15px;\n  margin: 0px auto;\n  background: #e4e4e4;\n  border-radius: 100%;\n  text-align: center;\n  padding: 3px;\n  position: relative;\n  z-index: 1;\n  line-height: 18px;\n  color: #333;\n}\n\n.stepWizard__icon svg {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n\n.stepWizard__step::after,\n.stepWizard__step::before {\n  content: '';\n  width: calc(50% - 17px);\n  height: 1.5px;\n  background: #d3d3d3;\n  position: absolute;\n  top: 11px;\n}\n\n.stepWizard__step::before {\n  left: 0;\n}\n\n.stepWizard__step::after {\n  right: 0;\n}\n\n.stepWizard .stepWizard__step:first-child::before,\n.stepWizard .stepWizard__step:last-child::after {\n  display: none;\n}\n\n.stepWizard__step--process .stepWizard__icon,\n.stepWizard--mobile .stepWizard__icon {\n  background: #f9e7c5;\n  color: #bb8728;\n}\n\n.stepWizard__step--process .stepWizard__icon svg,\n.stepWizard--mobile .stepWizard__icon svg {\n  color: #bb8728;\n}\n\n.stepWizard__step--finish .stepWizard__icon,\n.stepWizard--mobile .stepWizard__icon.stepWizard__icon--finish  {\n  background: #b7f7dc;\n  color: #1b875a;\n}\n\n.stepWizard__step--finish .stepWizard__icon svg {\n  color: #1b875a;\n}\n\nli.stepWizard__step.stepWizard__step--finish::after {\n  background: linear-gradient(90deg, #1b875a 67%, #d3b52a 100%);\n}\n\nli.stepWizard__step.stepWizard__step--process::before {\n  background: linear-gradient(90deg, #d3b52a 38%, #edb03f 100%);\n}\n\nli.stepWizard__step.stepWizard__step--finish::before {\n  background: linear-gradient(90deg, #d3b52a 0%, #1b875a 34%);\n}\n\n.stepWizard__body .stepWizard__label {\n  color: #333;\n  display: block;\n  margin-top: 5px;\n  font-family: 'roboto-Medium';\n  line-height: 20px;\n}\n\np.stepWizard__description {\n  font-size: 1.2rem;\n  color: #655c5c;\n}\n\n/* mobile */\n.stepWizard--mobile .stepWizard__activeStep {\n  margin-bottom: 8px;\n}\n\nul.stepWizard--mobile__lineList {\n  display: flex;\n  height: 5px;\n  gap: 2px;\n}\n\n.stepWizard--mobile__line {\n  width: 100%;\n  height: 5px;\n  background: #a99e9e;\n  border-radius: 4px;\n}\n\nli.stepWizard--mobile__line.stepWizard--mobile__line--finish {\n  background: #1b875a;\n}\n\nli.stepWizard--mobile__line.stepWizard--mobile__line--process {\n  background: #edb03f;\n}\n\n.stepWizard__activeStep {\n  display: flex;\n  align-items: start;\n  gap: 0.8rem;\n}\n\n.stepWizard--mobile .stepWizard__icon {\n  display: inline-block;\n  margin: unset;\n  width: 24px;\n  height: 24px;\n}\n\n.stepWizard--mobile label.stepWizard__label {\n  margin-top: 0;\n}\n\n/* vertical */\n.stepWizard.stepWizard--vertical {\n  flex-wrap: wrap;\n  justify-content: start;\n  align-items: start;\n}\n\n.stepWizard--vertical .stepWizard__step {\n  text-align: left;\n  display: flex;\n  justify-content: start;\n  gap: 10px;\n  align-items: start;\n  padding-bottom: 20px;\n  padding-top: 20px;\n}\n\n.stepWizard--vertical .stepWizard__icon {\n  margin: unset;\n}\n\n.stepWizard--vertical .stepWizard__body .stepWizard__label {\n  margin-top: 0;\n}\n\n.stepWizard--vertical .stepWizard__step::after,\n.stepWizard--vertical .stepWizard__step::before {\n  width: 1.5px;\n  height: calc(50% - 5px);\n  left: 11px;\n  top: unset;\n  bottom: 0;\n}\n\n.stepWizard--vertical .stepWizard__step::before {\n  top: 0;\n  height: calc(50% - 25px);\n}\n\n.stepWizard--vertical li.stepWizard__step.stepWizard__step--finish::after {\n  background: linear-gradient(180deg, #1b875a 67%, #d3b52a 100%);\n}\n\n.stepWizard--vertical li.stepWizard__step.stepWizard__step--finish::before {\n  background: linear-gradient(180deg, #d3b52a 0%, #1b875a 34%);\n}";
styleInject(css_248z$7);

var getClassNames = function (classes) {
    return Object.keys(classes)
        .filter(function (className) { return classes[className]; })
        .join(" ");
};

var StepWizard = function (_a) {
    var _b;
    var currentStep = _a.currentStep, steps = _a.steps, _c = _a.direction, direction = _c === void 0 ? "horizontal" : _c, _d = _a.type, type = _d === void 0 ? "icon" : _d, customClass = _a.customClass, _e = _a.onChange, onChange = _e === void 0 ? function () { } : _e;
    var _f = useState(false), isMobile = _f[0], setIsMobile = _f[1];
    currentStep =
        currentStep > steps.length
            ? steps.length + 1
            : currentStep < 1
                ? 1
                : currentStep;
    useEffect(function () {
        var sizeChecker = function () {
            if (window.innerWidth <= 768) {
                setIsMobile(true);
            }
            else
                setIsMobile(false);
        };
        sizeChecker();
        window.addEventListener("resize", sizeChecker, true);
        return function () {
            window.removeEventListener("resize", sizeChecker, true);
        };
    }, []);
    var handelStepClick = function (newStep, step) {
        onChange(newStep, step);
    };
    var forDesktop = (jsx("ul", { className: getClassNames((_b = {
                stepWizard: true
            },
            _b["stepWizard--".concat(direction)] = direction,
            _b[customClass !== null && customClass !== void 0 ? customClass : ""] = customClass,
            _b)), children: steps.map(function (item, ind) {
            var t = currentStep === ind + 1
                ? "stepWizard__step--process"
                : currentStep > ind + 1
                    ? "stepWizard__step--finish"
                    : "stepWizard__step--wait";
            return (jsxs("li", { className: "stepWizard__step ".concat(t), style: {
                    flex: direction === "horizontal"
                        ? "0 0 calc(100% / ".concat(steps.length, ")")
                        : "0 0 100%",
                }, onClick: function () { return handelStepClick(ind + 1, item); }, children: [jsxs("div", { style: {
                            minWidth: "2rem",
                            minHeight: "2rem",
                        }, className: "stepWizard__icon", children: [currentStep > ind + 1 && type === "icon" && jsx(Check$1, {}), currentStep === ind + 1 && type === "icon" && jsx(Clock$1, {}), type === "number" && ind + 1] }), jsxs("div", { className: "stepWizard__body", children: [jsx("label", { className: "stepWizard__label", children: item.label }), item.description && (jsx("p", { className: "stepWizard__description", children: item.description }))] })] }, ind));
        }) }));
    var forMobile = function () {
        var cStep = currentStep > steps.length ? steps.length : currentStep;
        return (jsxs("div", { className: "stepWizard--mobile", children: [jsxs("div", { className: "stepWizard__activeStep", children: [jsx("div", { className: getClassNames({
                                stepWizard__icon: true,
                                "stepWizard__icon--finish": currentStep > steps.length,
                            }), children: type === "number" ? (cStep) : currentStep > steps.length ? (jsx(Check$1, {})) : (jsx(Clock$1, {})) }), jsxs("div", { className: "stepWizard__body", children: [jsx("label", { className: "stepWizard__label", children: steps[cStep - 1].label }), steps[cStep - 1].description && (jsx("p", { className: "stepWizard__description", children: steps[cStep - 1].description }))] })] }), jsx("ul", { className: "stepWizard--mobile__lineList", children: steps.map(function (i, ind) { return (jsx("li", { role: "none", onClick: function () { return handelStepClick(ind + 1, i); }, className: "stepWizard--mobile__line ".concat(currentStep - 1 === ind ? "stepWizard--mobile__line--process" : currentStep - 1 > ind ? "stepWizard--mobile__line--finish" : "stepWizard--mobile__line--wait") }, ind)); }) })] }));
    };
    return jsx(Fragment, { children: !isMobile ? forDesktop : forMobile() });
};

var css_248z$6 = ".Pixel-toggle {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  -webkit-tap-highlight-color: transparent;\n  cursor: pointer;\n  height: 2rem;\n  width: 3.8rem;\n  min-width: 3.8rem;\n  border-radius: 9999px;\n  display: inline-block;\n  position: relative;\n  transition: all 0.3s ease;\n  overflow: hidden;\n  margin: 0;\n  background-color: rgb(203, 203, 203);\n}\n\n.Pixel-toggle__wrapper > label {\n  display: inline-flex;\n  justify-content: flex-start;\n  gap: 1.2rem;\n}\n\n.Pixel-toggle__text {\n  font-weight: 400;\n  font-size: 1.6rem;\n  line-height: 2.2rem;\n  position: relative;\n  cursor: pointer;\n}\n\n.Pixel-toggle:after {\n  content: \"\";\n  position: absolute;\n  top: 0.2rem;\n  left: 0.2rem;\n  width: 1.6rem;\n  height: 1.6rem;\n  border-radius: 9999px;\n  background: #ffffff;\n  box-shadow: 0.5px 0.5px 8px rgba(0, 0, 0, 0.25);\n  transition: all 0.2s cubic-bezier(0.5, 0.1, 0.75, 1.35);\n}\n\n.Pixel-toggle[disabled] {\n  cursor: not-allowed;\n  background: #e1e1e1;\n  -webkit-user-select: none;\n  user-select: none;\n}\n\n.Pixel-toggle:checked[disabled] {\n  background: rgb(196, 209, 255);\n  -webkit-user-select: none;\n  user-select: none;\n}\n\n.Pixel-toggle--disabled .Pixel-toggle__text {\n  cursor: not-allowed;\n  -webkit-user-select: none;\n  user-select: none;\n  color: rgb(169, 172, 178);\n}\n\n.Pixel-toggle[disabled]:after {\n  box-shadow: unset !important;\n  -webkit-user-select: none;\n  user-select: none;\n}\n\n.Pixel-toggle:checked {\n  background: rgb(46, 91, 255);\n}\n\n.Pixel-toggle:checked:after {\n  background: rgb(255, 255, 255);\n  transform: translatex(1.8rem);\n  box-shadow: -0.5px 0.5px 8px rgba(0, 0, 0, 0.5);\n}";
styleInject(css_248z$6);

function Switcher(props) {
    var checked = props.checked, onChange = props.onChange, label = props.label, _a = props.isDisabled, isDisabled = _a === void 0 ? false : _a;
    var rId = useId();
    return (jsx("div", { className: classnames({
            "Pixel-toggle__wrapper": true,
            "Pixel-toggle--disabled": isDisabled,
        }), children: jsxs("label", { htmlFor: "Pixel-toggle-".concat(rId), children: [jsx("input", { id: "Pixel-toggle-".concat(rId), disabled: isDisabled, "aria-label": "Pixel-toggle-".concat(rId), type: "checkbox", className: "Pixel-toggle", checked: checked, onChange: function () { return onChange === null || onChange === void 0 ? void 0 : onChange(!checked); } }), label && jsx("span", { className: "Pixel-toggle__text", children: label })] }) }));
}

var css_248z$5 = ".pixel-table__wrapper {\n  overflow-x: auto;\n  overscroll-behavior-x: contain;\n  border-radius: 5px;\n  border: 1px solid rgba(108, 132, 157, 0.18);\n}\n.pixel-table__wrapper .pixel-table {\n  width: 100%;\n  min-width: 100%;\n  border-collapse: collapse;\n}\n.pixel-table__wrapper .pixel-table .pixel-table__cell,\n.pixel-table__wrapper .pixel-table .pixel-table__heading {\n  text-align: left;\n}\n.pixel-table__wrapper .pixel-table .pixel-table__row {\n  border-top: 1px solid rgb(235, 235, 235);\n}\n.pixel-table__wrapper .pixel-table .pixel-table__row:hover {\n  background-color: #f7f7f7;\n}\n.pixel-table__wrapper .pixel-table .pixel-table__row:first-child {\n  border-top: 1px solid rgb(227, 227, 227);\n}\n.pixel-table__wrapper .pixel-table .pixel-table__cell {\n  padding: 1.6rem 1.2rem;\n  font-size: 1.4rem;\n  color: #333;\n}\n.pixel-table__wrapper .pixel-table .pixel-table__heading {\n  padding: 1.2rem;\n  background-color: #f1f1f1;\n}\n.pixel-table__wrapper .pixel-table .pixel-table__heading span {\n  font-size: 12px;\n  font-family: var(--jiffyui-medium-font);\n  letter-spacing: 0.06rem;\n}\n.pixel-table__wrapper .pixel-table .pixel-table__heading.c-pointer:hover {\n  background: #efefef !important;\n}\n.pixel-table__wrapper .pixel-table .pixel-table__headingCheckboxCell {\n  padding: 0.8rem 0.8rem 0.8rem 1.2rem;\n}\n.pixel-table__wrapper .pixel-table .pixel-table__checkboxCell {\n  padding: 0.6rem 0.6rem 0.6rem 1.2rem;\n}\n.pixel-table__wrapper .pixel-table .pixel-table__row--selected {\n  background-color: #f3faff;\n}\n.pixel-table__wrapper .pixel-table .pixel-table__row--selected:hover {\n  background-color: #eef8ff;\n}";
styleInject(css_248z$5);

var Table = function (props) {
    var headings = props.headings, children = props.children, selectable = props.selectable, onRowSelection = props.onRowSelection, sortable = props.sortable, _a = props.sortDirection, sortDirection = _a === void 0 ? "descending" : _a, sortColumnIndex = props.sortColumnIndex, onSort = props.onSort;
    var _b = useState(false), selectAll = _b[0], setSelectAll = _b[1];
    useEffect(function () {
        if (selectable && children && children.length > 0) {
            var isAllSelected = children.every(function (child) { return child.props.selected; });
            isAllSelected ? setSelectAll(true) : handleIndeterminate();
        }
    }, [children]);
    var handleSelectAll = function () {
        if (onRowSelection) {
            if (selectAll) {
                onRowSelection([]);
            }
            else {
                var allIds = React.Children.map(children, function (child) { return child.props.id; });
                onRowSelection(allIds);
            }
            setSelectAll(!selectAll);
        }
    };
    var handleIndeterminate = function () {
        var isIndermonate = children.some(function (child) { return child.props.selected; });
        if (isIndermonate) {
            setSelectAll("indeterminate");
        }
        else {
            setSelectAll(false);
        }
    };
    return (jsx("div", { className: "pixel-table__wrapper", children: jsxs("table", { className: "pixel-table", role: "table", children: [jsx("thead", { children: jsxs("tr", { children: [selectable && (jsx("td", { className: "pixel-table__heading pixel-table__headingCheckboxCell", children: jsx(Checkbox, { onChange: handleSelectAll, checked: selectAll }) })), headings.map(function (ele, ind) {
                                return (jsx("th", { className: classnames({
                                        "pixel-table__heading": true,
                                        "c-pointer": sortable === null || sortable === void 0 ? void 0 : sortable[ind],
                                    }), onClick: function () {
                                        return onSort === null || onSort === void 0 ? void 0 : onSort(ind, sortDirection === "ascending" ? "descending" : "ascending");
                                    }, children: jsxs("div", { className: "flex-row gap-8 justify-between align-center", children: [jsx("span", { children: ele.title }), (sortable === null || sortable === void 0 ? void 0 : sortable[ind]) && (jsx("span", { className: "flex-row pixel-sortable__icon", children: jsxs("svg", { width: "20", height: "20", fill: "none", children: [jsx("path", { fill: sortColumnIndex === ind &&
                                                                sortDirection === "descending"
                                                                ? "hsla(227, 100%, 59%, 1)"
                                                                : "hsla(211, 22%, 56%, 1)", d: "M10.59 2.251a.817.817 0 0 0-1.18 0L5.245 6.537a.875.875 0 0 0 0 1.212.817.817 0 0 0 1.179 0L10 4.069l3.577 3.68a.817.817 0 0 0 1.179 0 .874.874 0 0 0 0-1.212L10.589 2.25Z" }), jsx("path", { fill: sortColumnIndex === ind &&
                                                                sortDirection === "ascending"
                                                                ? "hsla(227, 100%, 59%, 1)"
                                                                : "hsla(211, 22%, 56%, 1)", d: "M9.41 17.749a.817.817 0 0 0 1.18 0l4.166-4.286a.874.874 0 0 0 0-1.212.817.817 0 0 0-1.179 0L10 15.931l-3.577-3.68a.817.817 0 0 0-1.179 0 .874.874 0 0 0 0 1.212l4.167 4.286Z" })] }) }))] }) }, ele.title));
                            })] }) }), jsx("tbody", { children: React.Children.map(children, function (child) {
                        return React.cloneElement(child, {
                            selectable: selectable,
                            onRowSelection: onRowSelection,
                        });
                    }) })] }) }));
};
var Row = function (props) {
    var children = props.children, selectable = props.selectable, id = props.id, onRowSelection = props.onRowSelection, selected = props.selected;
    return (jsxs("tr", { className: classnames({
            "pixel-table__row": true,
            "pixel-table__row--selected": selected,
        }), id: id, children: [selectable && (jsx("td", { className: "pixel-table__cell pixel-table__checkboxCell", children: jsx(Checkbox, { onChange: function () {
                        onRowSelection(id);
                    }, checked: selected }) })), children] }));
};
var Cell = function (props) {
    var children = props.children;
    return jsx("td", { className: "pixel-table__cell", children: children });
};
Table.Row = Row;
Table.Cell = Cell;

var css_248z$4 = ".pixel-tabs__container {\n  overflow: auto hidden;\n}\n\n.pixel-tabs__vertical .pixel-tab__border {\n  order: -1;\n  border-left: 0.1rem solid rgba(108, 132, 157, 0.18);\n}\n.pixel-tabs__vertical .pixel-tabs {\n  gap: 0.8rem;\n}\n.pixel-tabs__vertical .pixel-tabs .pixel-tabs__item {\n  padding: 0.4rem 1.2rem;\n  border-left: 0.1rem solid transparent;\n}\n.pixel-tabs__vertical .pixel-tabs .pixel-tabs__item--active {\n  border-left: 0.1rem solid rgb(46, 91, 255);\n}\n.pixel-tabs__vertical .pixel-tabs__contentBox {\n  margin-left: 1.2rem;\n}\n\n.pixel-tabs {\n  display: flex;\n  gap: 2.4rem;\n}\n.pixel-tabs .pixel-tabs__item {\n  display: flex;\n  gap: 0.8rem;\n  cursor: pointer;\n  padding: 0.8rem 0rem;\n}\n.pixel-tabs .pixel-tabs__item .pixel-tabs__title {\n  font-size: 1.4rem;\n  font-weight: 600;\n  line-height: 2rem;\n}\n\n.pixel-tabs--vertical {\n  flex-direction: column;\n}\n\n.pixel-tabs-filled {\n  justify-content: space-between;\n}\n\n.pixel-tab__border {\n  border-bottom: 0.1rem solid rgba(108, 132, 157, 0.18);\n}\n\n.pixel-tabs__wrapper:not(.pixel-tabs__vertical) .pixel-tabs__item--active {\n  border-bottom: 0.1rem solid rgb(46, 91, 255);\n}\n.pixel-tabs__wrapper:not(.pixel-tabs__vertical) .pixel-tabs__item--active .pixel-tabs__title {\n  color: rgb(46, 91, 255);\n}";
styleInject(css_248z$4);

var Tabs = function (props) {
    var tabs = props.tabs, value = props.value, onChange = props.onChange, _a = props.direction, direction = _a === void 0 ? "horizontal" : _a, filled = props.filled, children = props.children;
    var _b = useState(0); _b[0]; var setKey = _b[1];
    var isVertical = window.innerWidth >= 768 && direction === "vertical";
    useEffect(function () {
        var handleResize = function () {
            setKey(function (prevKey) { return prevKey + 1; });
        };
        window.addEventListener("resize", handleResize);
        return function () {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return (jsxs("div", { className: classnames({
            "pixel-tabs__wrapper": true,
            "pixel-tabs__vertical flex": isVertical,
        }), children: [jsxs("div", { className: classnames({
                    "pixel-tabs__vertical flex": isVertical,
                }), children: [jsx("div", { className: "pixel-tabs__container", children: jsx("ul", { "aria-label": "tablist", className: classnames({
                                "pixel-tabs": true,
                                "pixel-tabs-filled": filled,
                                "pixel-tabs--vertical": isVertical,
                            }), children: tabs.map(function (item) {
                                return (jsxs("li", { role: "none", className: classnames({
                                        "pixel-tabs__item": true,
                                        "pixel-tabs__item--active": value === item.key,
                                        "pixel-tabs__item--disable": item.isDisabled,
                                    }), onClick: function () { return !item.isDisabled && onChange(item.key); }, children: [jsxs("div", { className: "pixel-tabs__body", children: [item.icon && (jsx("span", { className: "pixel-tabs__icon", children: item.icon })), jsx("span", { className: "pixel-tabs__title", children: item.label })] }), item.badge && (jsx("div", { className: "pixel-tabs__badge", children: item.badge }))] }, item.label));
                            }) }) }), jsx("div", { className: "pixel-tab__border" })] }), jsx("div", { className: "pixel-tabs__contentBox", role: "tabpanel", "aria-labelledby": "tab-".concat(value), children: children })] }));
};

var css_248z$3 = ".thumbnail {\n  display: inline-flex;\n  width: 40px;\n  height: 40px;\n  border-radius: 4px;\n}\n\n.thumbnail-img {\n  width: 100%;\n  height: auto;\n  border-radius: 4px;\n}\n\n.thumbnail--extraSmall {\n  height: 32px;\n  width: 32px;\n}\n\n.thumbnail--small {\n  width: 40px;\n  height: 40px;\n}\n\n.thumbnail--medium {\n  width: 50px;\n  height: 50px;\n}\n\n.thumbnail--large {\n  width: 60px;\n  height: 60px;\n}\n\n.thumbnail--cover .thumbnail-img {\n  object-fit: cover;\n}\n\n.thumbnail--contain .thumbnail-img {\n  object-fit: contain;\n}\n\n.thumbnail--fill .thumbnail-img {\n  object-fit: fill;\n}\n\n.thumbnail-click {\n  cursor: pointer;\n  transition: 0.3s all;\n}\n\n.thumbnail-click:hover {\n  opacity: 0.7;\n  transform: scale(1.05);\n}";
styleInject(css_248z$3);

var Thumbnail = function (_a) {
    var _b = _a.size, size = _b === void 0 ? "Large" : _b, _c = _a.source, source = _c === void 0 ? "https://t4.ftcdn.net/jpg/05/18/69/85/360_F_518698520_Xk9tIwoYpyX6kkVsF6GpQ1z7sKXO8YRz.jpg" : _c, _d = _a.alt, alt = _d === void 0 ? "Alt text" : _d, _e = _a.objectFit, objectFit = _e === void 0 ? "Default" : _e, onClick = _a.onClick; __rest(_a, ["size", "source", "alt", "objectFit", "onClick"]);
    var checkSize = function () {
        switch (size) {
            case "ExtraSmall":
                return "thumbnail--extraSmall";
            case "Small":
                return "thumbnail--small";
            case "Medium":
                return "thumbnail--medium";
            case "Large":
                return "thumbnail--large";
            default:
                return "thumbnail--medium";
        }
    };
    var checkObjectFit = function () {
        switch (objectFit) {
            case "Fill":
                return "thumbnail--fill";
            case "Contain":
                return "thumbnail--contain";
            case "Cover":
                return "thumbnail--cover";
            case "Default":
                return "thumbnail--default";
            default:
                return "thumbnail--default";
        }
    };
    var ThumbnailSize = checkSize();
    var imageFit = checkObjectFit();
    return (jsx("div", { className: "thumbnail ".concat(ThumbnailSize, " ").concat(imageFit, " ").concat(onClick && "thumbnail-click"), onClick: onClick, children: jsx("img", { className: "thumbnail-img", src: source, alt: alt }) }));
};

var css_248z$2 = ".Pixel-toolTip {\n  display: inline-flex;\n}\n\n.Pixel-toolTip__pointer {\n  position: absolute;\n  display: inline-flex;\n}\n\n/* ToolTip-pointer  css*/\n.Pixel-toolTip--rightCenter {\n  left: 0.1rem;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.Pixel-toolTip--center {\n  top: 0.1rem;\n  left: 49%;\n  transform: rotate(90deg) translateX(-50%);\n}\n\n.Pixel-toolTip--bottomRight,\n.Pixel-toolTip--bottomLeft {\n  top: 0.1rem;\n  transform: rotate(90deg) translateX(-50%);\n}\n\n.Pixel-toolTip--topCenter {\n  bottom: 0.1rem;\n  left: 49%;\n  transform: rotate(270deg) translateX(-50%);\n}\n\n.Pixel-toolTip--leftCenter {\n  top: 50%;\n  right: 0.1rem;\n  transform: translateY(-50%) rotate(180deg);\n}\n\n.Pixel-toolTip--topRight,\n.Pixel-toolTip--topLeft {\n  bottom: 0.1rem;\n  transform: rotate(270deg) translateX(-50%);\n}\n\n.Pixel-toolTip--leftTop,\n.Pixel-toolTip--leftBottom {\n  right: 0.4rem;\n  transform: rotate(180deg) translateX(-50%);\n}\n\n/* Tooltip Message */\n.Pixel-toolTip__message {\n  background: #1F262D;\n  max-width: 30rem;\n  font-size: 1.4rem;\n  border-radius: 0.6rem;\n  color: #ffffff;\n  line-height: 2.2rem;\n  padding: 1.2rem;\n  text-align: left;\n  word-break: break-word;\n}\n\n/* Animation */\n/* Animation Right */\n.Pixel-toolTip--right {\n  padding-left: 0.7rem;\n}\n.Pixel-toolTip--right.Pixel-toolTip--in {\n  animation: tooltipInRight 0.1s linear forwards;\n  transform-origin: left center;\n}\n.Pixel-toolTip--right.Pixel-toolTip--out {\n  animation: tooltipOutRight 0.1s linear forwards;\n  transform-origin: left center;\n}\n\n/* Animation Left */\n.Pixel-toolTip--left {\n  padding-right: 0.7rem;\n}\n.Pixel-toolTip--left.Pixel-toolTip--in {\n  animation: tooltipInLeft 0.1s linear forwards;\n  transform-origin: right center;\n}\n.Pixel-toolTip--left.Pixel-toolTip--out {\n  animation: tooltipOutLeft 0.1s linear forwards;\n  transform-origin: right center;\n}\n\n/* Animation Top */\n.Pixel-toolTip--top {\n  padding-bottom: 0.7rem;\n}\n.Pixel-toolTip--top.Pixel-toolTip--in {\n  animation: tooltipInTop 0.1s linear forwards;\n  transform-origin: bottom center;\n}\n.Pixel-toolTip--top.Pixel-toolTip--out {\n  animation: tooltipOutTop 0.1s linear forwards;\n  transform-origin: bottom center;\n}\n\n/* Animation Bottom */\n.Pixel-toolTip--bottom {\n  padding-top: 0.7rem;\n}\n.Pixel-toolTip--bottom.Pixel-toolTip--in {\n  animation: tooltipInBottom 0.1s linear forwards;\n  transform-origin: bottom center;\n}\n.Pixel-toolTip--bottom.Pixel-toolTip--out {\n  animation: tooltipOutBottom 0.1s linear forwards;\n  transform-origin: bottom center;\n}\n\n/* Amimation Frames */\n@keyframes tooltipInRight {\n  100% {\n    -webkit-transform: translate3d(0, 0, 0) scale(1);\n    transform: translate3d(0, 0, 0) scale(1);\n    opacity: 1;\n  }\n  0% {\n    -webkit-transform: translate3d(5px, 0, 0) scale(0.98);\n    transform: translate3d(5px, 0, 0) scale(0.98);\n    opacity: 0.8;\n  }\n}\n@keyframes tooltipOutRight {\n  100% {\n    -webkit-transform: translate3d(5px, 0, 0) scale(0.98);\n    transform: translate3d(5px, 0, 0) scale(0.98);\n    opacity: 0;\n  }\n  0% {\n    -webkit-transform: translate3d(0, 0, 0) scale(1);\n    transform: translate3d(0, 0, 0) scale(1);\n    opacity: 1;\n  }\n}\n/* Frames Left */\n@keyframes tooltipInLeft {\n  100% {\n    -webkit-transform: translate3d(0, 0, 0) scale(1);\n    transform: translate3d(0, 0, 0) scale(1);\n    opacity: 1;\n  }\n  0% {\n    -webkit-transform: translate3d(-5px, 0, 0) scale(0.95);\n    transform: translate3d(-5px, 0, 0) scale(0.95);\n    opacity: 0.8;\n  }\n}\n@keyframes tooltipOutLeft {\n  100% {\n    -webkit-transform: translate3d(-5px, 0, 0) scale(0.95);\n    transform: translate3d(-5px, 0, 0) scale(0.95);\n    opacity: 0;\n  }\n  0% {\n    -webkit-transform: translate3d(0, 0, 0) scale(1);\n    transform: translate3d(0, 0, 0) scale(1);\n    opacity: 1;\n  }\n}\n/* Frames Top */\n@keyframes tooltipInTop {\n  100% {\n    -webkit-transform: translate3d(0, 0, 0) scale(1);\n    transform: translate3d(0, 0, 0) scale(1);\n    opacity: 1;\n  }\n  0% {\n    -webkit-transform: translate3d(0, -5px, 0) scale(0.95);\n    transform: translate3d(0, -5px 0) scale(0.95);\n    opacity: 0.8;\n  }\n}\n@keyframes tooltipOutTop {\n  100% {\n    -webkit-transform: translate3d(0, -5px, 0) scale(0.95);\n    transform: translate3d(0, -5px, 0) scale(0.95);\n    opacity: 0;\n  }\n  0% {\n    -webkit-transform: translate3d(0, 0, 0) scale(1);\n    transform: translate3d(0, 0, 0) scale(1);\n    opacity: 1;\n  }\n}\n/* Frames Bottom */\n@keyframes tooltipInBottom {\n  100% {\n    -webkit-transform: translate3d(0, 0, 0) scale(1);\n    transform: translate3d(0, 0, 0) scale(1);\n    opacity: 1;\n  }\n  0% {\n    -webkit-transform: translate3d(0, -5px, 0) scale(0.95);\n    transform: translate3d(0, -5px 0) scale(0.95);\n    opacity: 0.8;\n  }\n}\n@keyframes tooltipOutBottom {\n  100% {\n    -webkit-transform: translate3d(0, -5px, 0) scale(0.95);\n    transform: translate3d(0, -5px, 0) scale(0.95);\n    opacity: 0;\n  }\n  0% {\n    -webkit-transform: translate3d(0, 0, 0) scale(1);\n    transform: translate3d(0, 0, 0) scale(1);\n    opacity: 1;\n  }\n}\n@media (min-width: 768px) {\n  .Pixel-toolTip__footer,\n  .Pixel-toolTip__overlay {\n    display: none;\n  }\n}\n@media (max-width: 767px) {\n  .Pixel-toolTip__pointer {\n    display: none;\n  }\n  .Pixel-toolTip__footer {\n    margin-top: 15px;\n    text-align: center;\n  }\n  .Pixel-toolTip__cancel {\n    border: 1px solid #e4e4e4;\n    display: inline-block;\n    padding: 2px 6px;\n    font-size: 14px;\n    border-radius: 5px;\n    cursor: pointer;\n  }\n  .Pixel-toolTip__message {\n    text-align: center;\n    padding: 1.8rem;\n    max-width: 100%;\n  }\n  .Pixel-toolTip__wrapper {\n    z-index: 999999;\n    left: 50% !important;\n    top: 50% !important;\n    opacity: 0;\n    transform: translate(-50%, -50%) !important;\n    transition: 0.3s all;\n    width: calc(100% - 100px);\n  }\n  .Pixel-toolTip__wrapper.Pixel-toolTip--in {\n    opacity: 1;\n  }\n  .Pixel-toolTip__overlay {\n    position: fixed;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    background: #fff;\n    opacity: 0.8;\n    z-index: 99999;\n    filter: blur(5px);\n  }\n}";
styleInject(css_248z$2);

var Tooltip = function (_a) {
    var children = _a.children, content = _a.content, _b = _a.open, open = _b === void 0 ? false : _b, _c = _a.placement, placement = _c === void 0 ? "top" : _c, zIndex = _a.zIndex, openInMobileUisngAction = _a.openInMobileUisngAction;
    var _d = useState(false), openState = _d[0], setOpenState = _d[1];
    var _e = useState(0), scrollWidth = _e[0], setScrollWidth = _e[1];
    var animateData = useDelay(openState, 100);
    var parentRef = useRef();
    var tooltipRef = useRef();
    var pointerRef = useRef();
    var rId = useId();
    useEffect(function () {
        // setOpenState(open);
    }, [open]);
    useEffect(function () {
        var handleScroll = function () {
            // setOpenState(false);
        };
        window.addEventListener("scroll", handleScroll);
        setScrollWidth(window.innerWidth - document.documentElement.clientWidth);
        return function () {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    useLayoutEffect(function () {
        var scrollWindow = function () {
            if (parentRef.current && tooltipRef.current) {
                var positionObject_1 = parentRef.current.getBoundingClientRect();
                var tooltip_1 = tooltipRef.current.getBoundingClientRect();
                var remainingBottomheight = window.innerHeight - positionObject_1.bottom;
                var windowWidth_1 = window.innerWidth;
                var topLeftCenterRight = function () {
                    var _a;
                    tooltipRef.current.classList.add("Pixel-toolTip--top");
                    if ((tooltip_1.width - positionObject_1.width) / 2 >=
                        positionObject_1.left) {
                        // Open top left
                        pointerRef.current.classList.add("Pixel-toolTip--topLeft");
                        pointerRef.current.style.left = positionObject_1.width / 2 - 3 + "px";
                        tooltipRef.current.style.left = positionObject_1.left + "px";
                        tooltipRef.current.style.top =
                            positionObject_1.top - tooltip_1.height - 7 + "px";
                    }
                    else if (windowWidth_1 >=
                        positionObject_1.right +
                            (tooltip_1.width - positionObject_1.width) / 2 +
                            scrollWidth) {
                        // Open top center
                        (_a = pointerRef === null || pointerRef === void 0 ? void 0 : pointerRef.current) === null || _a === void 0 ? void 0 : _a.classList.add("Pixel-toolTip--topCenter");
                        tooltipRef.current.style.left =
                            positionObject_1.left +
                                positionObject_1.width / 2 -
                                tooltip_1.width / 2 +
                                "px";
                        tooltipRef.current.style.top =
                            positionObject_1.top - tooltip_1.height - 7 + "px";
                    }
                    else {
                        // Open top right
                        pointerRef.current.classList.add("Pixel-toolTip--topRight");
                        pointerRef.current.style.right =
                            positionObject_1.width / 2 - 3 + "px";
                        tooltipRef.current.style.left =
                            positionObject_1.left + positionObject_1.width - tooltip_1.width + "px";
                        tooltipRef.current.style.top =
                            positionObject_1.top - tooltip_1.height - 7 + "px";
                    }
                };
                var rightTopCenterBottom = function () {
                    tooltipRef.current.classList.add("Pixel-toolTip--right");
                    if (0 >=
                        positionObject_1.top - (tooltip_1.height - positionObject_1.height) / 2) {
                        // right top
                        pointerRef.current.style.top = positionObject_1.height / 2 - 6 + "px";
                        pointerRef.current.style.left = 1 + "px";
                        tooltipRef.current.style.left =
                            positionObject_1.left + positionObject_1.width + "px";
                        tooltipRef.current.style.top = positionObject_1.top + "px";
                    }
                    else if (window.innerHeight >=
                        positionObject_1.bottom +
                            (tooltip_1.height - positionObject_1.height) / 2 &&
                        window.innerHeight >= tooltip_1.height) {
                        // right center
                        pointerRef.current.classList.add("Pixel-toolTip--rightCenter");
                        tooltipRef.current.style.left = positionObject_1.right + "px";
                        tooltipRef.current.style.top =
                            positionObject_1.top -
                                (tooltip_1.height - positionObject_1.height) / 2 +
                                "px";
                    }
                    else {
                        // right bottom
                        pointerRef.current.style.bottom =
                            positionObject_1.height / 2 - 6 + "px";
                        pointerRef.current.style.left = 1 + "px";
                        tooltipRef.current.style.left = positionObject_1.right + "px";
                        tooltipRef.current.style.top =
                            positionObject_1.top -
                                tooltip_1.height +
                                positionObject_1.height +
                                "px";
                    }
                };
                var bottomLeftCenterRight = function () {
                    tooltipRef.current.classList.add("Pixel-toolTip--bottom");
                    if ((tooltip_1.width - positionObject_1.width) / 2 >=
                        positionObject_1.left) {
                        // Bottom left
                        pointerRef.current.classList.add("Pixel-toolTip--bottomLeft");
                        pointerRef.current.style.left = positionObject_1.width / 2 - 3 + "px";
                        tooltipRef.current.style.left = positionObject_1.left + "px";
                        tooltipRef.current.style.top =
                            positionObject_1.top + positionObject_1.height + "px";
                    }
                    else if (windowWidth_1 >=
                        positionObject_1.right +
                            (tooltip_1.width - positionObject_1.width) / 2 +
                            scrollWidth) {
                        // Bottom center
                        pointerRef.current.classList.add("Pixel-toolTip--center");
                        tooltipRef.current.style.left =
                            positionObject_1.left +
                                positionObject_1.width / 2 -
                                tooltip_1.width / 2 +
                                "px";
                        tooltipRef.current.style.top =
                            positionObject_1.top + positionObject_1.height + "px";
                    }
                    else {
                        // Bottom Right
                        pointerRef.current.classList.add("Pixel-toolTip--bottomRight");
                        pointerRef.current.style.right =
                            positionObject_1.width / 2 - 3 + "px";
                        tooltipRef.current.style.left =
                            positionObject_1.left + positionObject_1.width - tooltip_1.width + "px";
                        tooltipRef.current.style.top =
                            positionObject_1.top + positionObject_1.height + "px";
                    }
                };
                var leftTopCenterBottom = function () {
                    tooltipRef.current.classList.add("Pixel-toolTip--left");
                    if (0 >=
                        positionObject_1.top -
                            (tooltip_1.height - positionObject_1.height) / 2 ||
                        tooltip_1.height / 2 >= positionObject_1.top + positionObject_1.height / 2) {
                        // Left Bottom
                        pointerRef.current.classList.add("Pixel-toolTip--leftBottom");
                        pointerRef.current.style.top = positionObject_1.height / 2 - 6 + "px";
                        tooltipRef.current.style.left =
                            positionObject_1.left - tooltip_1.width - 7 + "px";
                        tooltipRef.current.style.top = positionObject_1.top + "px";
                    }
                    else if (window.innerHeight >=
                        positionObject_1.bottom + (tooltip_1.height - positionObject_1.height) / 2) {
                        // Left Center
                        pointerRef.current.classList.add("Pixel-toolTip--leftCenter");
                        tooltipRef.current.style.left =
                            positionObject_1.left - tooltip_1.width - 7 + "px";
                        tooltipRef.current.style.top =
                            positionObject_1.top -
                                (tooltip_1.height - positionObject_1.height) / 2 +
                                "px";
                    }
                    else {
                        // Left Top
                        pointerRef.current.classList.add("Pixel-toolTip--leftTop");
                        pointerRef.current.style.bottom =
                            positionObject_1.height / 2 - 6 + "px";
                        tooltipRef.current.style.left =
                            positionObject_1.left - tooltip_1.width - 7 + "px";
                        tooltipRef.current.style.top =
                            positionObject_1.top -
                                tooltip_1.height +
                                positionObject_1.height +
                                "px";
                    }
                };
                if (placement == "top") {
                    if (positionObject_1.top > tooltip_1.height + 7) {
                        topLeftCenterRight();
                    }
                    else {
                        if (windowWidth_1 >= positionObject_1.right + tooltip_1.width + 8) {
                            rightTopCenterBottom();
                        }
                        else if (remainingBottomheight >= tooltip_1.height) {
                            if (remainingBottomheight >= tooltip_1.height + 7) {
                                bottomLeftCenterRight();
                            }
                            else {
                                // left
                                if (windowWidth_1 >= positionObject_1.right + tooltip_1.width) {
                                    tooltipRef.current.style.left =
                                        positionObject_1.left + positionObject_1.width + "px";
                                    tooltipRef.current.style.top =
                                        positionObject_1.top - positionObject_1.width / 2 + "px";
                                }
                                else {
                                    tooltipRef.current.style.left =
                                        positionObject_1.left - tooltip_1.width + "px";
                                    tooltipRef.current.style.top =
                                        positionObject_1.top - positionObject_1.width / 2 + "px";
                                }
                            }
                        }
                        else {
                            leftTopCenterBottom();
                        }
                    }
                }
                else if (placement == "right") {
                    if (windowWidth_1 >= positionObject_1.right + tooltip_1.width + 8 &&
                        remainingBottomheight >= 0) {
                        rightTopCenterBottom();
                    }
                    else if (positionObject_1.top > tooltip_1.height + 8) {
                        tooltipRef.current.classList.add("Pixel-toolTip--top");
                        if (windowWidth_1 >=
                            positionObject_1.right + (tooltip_1.width - positionObject_1.width) / 2) {
                            // Top center
                            pointerRef.current.classList.add("Pixel-toolTip--topCenter");
                            tooltipRef.current.style.left =
                                positionObject_1.left +
                                    positionObject_1.width / 2 -
                                    tooltip_1.width / 2 +
                                    "px";
                            tooltipRef.current.style.top =
                                positionObject_1.top - tooltip_1.height - 7 + "px";
                        }
                        else {
                            //top-right
                            pointerRef.current.classList.add("Pixel-toolTip--topRight");
                            pointerRef.current.style.right =
                                positionObject_1.width / 2 - 3 + "px";
                            tooltipRef.current.style.left =
                                positionObject_1.left +
                                    positionObject_1.width -
                                    tooltip_1.width +
                                    "px";
                            tooltipRef.current.style.top =
                                positionObject_1.top - tooltip_1.height - 7 + "px";
                        }
                    }
                    else if (remainingBottomheight >= tooltip_1.height + 8) {
                        // Tooltip isOpen bottom then case bottom-center and bottom-right
                        tooltipRef.current.classList.add("Pixel-toolTip--bottom");
                        if (windowWidth_1 >=
                            positionObject_1.right + (tooltip_1.width - positionObject_1.width) / 2) {
                            // bottom center
                            pointerRef.current.classList.add("Pixel-toolTip--center");
                            tooltipRef.current.style.left =
                                positionObject_1.left +
                                    positionObject_1.width / 2 -
                                    tooltip_1.width / 2 +
                                    "px";
                            tooltipRef.current.style.top =
                                positionObject_1.top + positionObject_1.height + "px";
                        }
                        else {
                            // bottom right
                            pointerRef.current.classList.add("Pixel-toolTip--bottomRight");
                            pointerRef.current.style.right =
                                positionObject_1.width / 2 - 3 + "px";
                            tooltipRef.current.style.left =
                                positionObject_1.left +
                                    positionObject_1.width -
                                    tooltip_1.width +
                                    "px";
                            tooltipRef.current.style.top =
                                positionObject_1.top + positionObject_1.height + "px";
                        }
                    }
                    else {
                        // Tooltip isOpen Left=> Left-center , Left-Top and Left-Bottom
                        leftTopCenterBottom();
                    }
                }
                else if (placement == "bottom") {
                    if (remainingBottomheight >= tooltip_1.height + 7) {
                        bottomLeftCenterRight();
                    }
                    else {
                        if (positionObject_1.top > tooltip_1.height + 7) {
                            topLeftCenterRight();
                        }
                        else if (windowWidth_1 >= positionObject_1.right + tooltip_1.width + 7 &&
                            remainingBottomheight >= 0) {
                            rightTopCenterBottom();
                        }
                        else {
                            leftTopCenterBottom();
                        }
                    }
                }
                else {
                    // Default direction isOpen Left
                    if (positionObject_1.left >= tooltip_1.width + 7 &&
                        remainingBottomheight >= 0) {
                        leftTopCenterBottom();
                    }
                    else if (positionObject_1.top > tooltip_1.height) {
                        topLeftCenterRight();
                    }
                    else if (windowWidth_1 >= positionObject_1.right + tooltip_1.width + 7) {
                        rightTopCenterBottom();
                    }
                    else {
                        bottomLeftCenterRight();
                    }
                }
            }
        };
        scrollWindow();
        window.addEventListener("resize", scrollWindow, true);
        window.addEventListener("scroll", scrollWindow, true);
        return function () {
            window.removeEventListener("scroll", scrollWindow, true);
            window.removeEventListener("resize", scrollWindow, true);
        };
    }, [animateData, openState]);
    var windowWidth = useWindowResize();
    var desktopCondition = windowWidth > 767 && openInMobileUisngAction;
    var mobileCondition = windowWidth < 767 && openInMobileUisngAction;
    return (jsxs("span", { role: "none", ref: parentRef, className: "Pixel-toolTip", onMouseOver: function () {
            desktopCondition &&
                setOpenState(true);
        }, onMouseLeave: function () {
            desktopCondition &&
                setOpenState(false);
        }, onClick: function () {
            console.log("get abcd");
            mobileCondition &&
                setOpenState(true);
        }, children: [children, animateData && (jsxs(Portal, { children: [jsxs("div", { id: "Pixel-toolTip" + rId, role: "tooltip", ref: tooltipRef, style: {
                            position: "fixed",
                            zIndex: zIndex,
                        }, className: getClassNames$1({
                            "Pixel-toolTip__wrapper": true,
                            "Pixel-toolTip--in": openState,
                            "Pixel-toolTip--out": !openState,
                        }), children: [jsx("span", { ref: pointerRef, className: "Pixel-toolTip__pointer", children: jsx("svg", { width: "6", height: "12", viewBox: "0 0 6 12", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsx("path", { d: "M6 0V12L0 6L6 0Z", fill: "#1c2433" }) }) }), jsxs("div", { className: "Pixel-toolTip__message", children: [content, jsx("div", { className: "Pixel-toolTip__footer", children: jsx("div", { className: "Pixel-toolTip__cancel", onClick: function (e) { e.stopPropagation(); setOpenState(false); }, children: "Ok" }) })] })] }), jsx("div", { className: "Pixel-toolTip__overlay" })] }))] }));
};

var css_248z$1 = ".flex.flex-column {\n  display: flex;\n  flex-direction: column;\n}";
styleInject(css_248z$1);

var VerticalFlex = function (props) {
    var _a;
    var children = props.children, gap = props.gap, align = props.align;
    var getAlignClass = {
        start: "align-start",
        center: "align-center",
        end: "align-end",
        baseline: "align-baseline",
        stretch: "align-stretch",
    };
    var getAlign = align && getAlignClass[align];
    var childrens = React.Children.toArray(children);
    var newChildrens = childrens.map(function (children, index) {
        var _a;
        if (children.props && ((_a = children.props) === null || _a === void 0 ? void 0 : _a.__TYPE) === "FlexItem") {
            return children;
        }
        else {
            return jsx(FlexItem, { children: children }, index);
        }
    });
    return (jsx("div", { className: classnames((_a = {
                flex: true,
                'flex-column': true
            },
            _a["gap-" + gap] = gap,
            _a[getAlign] = align,
            _a)), children: newChildrens }));
};

var css_248z = ".skeletonThumbnail--extraSmall {\n  height: 32px;\n  width: 32px;\n}\n\n.skeletonThumbnail--small {\n  width: 40px;\n  height: 40px;\n}\n\n.skeletonThumbnail--medium {\n  width: 50px;\n  height: 50px;\n}\n\n.skeletonThumbnail--large {\n  width: 60px;\n  height: 60px;\n}\n\n.skeleton-inner {\n  background: #ecedee;\n  overflow: hidden;\n  border-radius: 4px;\n  height: 100%;\n  width: 100%;\n}\n\n.skeleton-inner::after {\n  content: \"\";\n  display: block;\n  height: 100%;\n  width: 100%;\n  animation: loading 1.5s infinite;\n  background: linear-gradient(to right, transparent, #e0e1e3, transparent);\n}\n\n@keyframes loading {\n  0% {\n    transform: translateX(-100%);\n  }\n  100% {\n    transform: translateX(100%);\n  }\n}\n.SkeletonButton {\n  width: 100px;\n}\n\n.SkeletonButton--extraSmall {\n  height: 30px;\n}\n\n.SkeletonButton--small {\n  height: 34px;\n}\n\n.SkeletonButton--medium {\n  height: 38px;\n}\n\n.SkeletonButton--large {\n  height: 48px;\n}\n\n.SkeletonBadge {\n  width: 60px;\n}\n\n.SkeletonBadge--small {\n  height: 1.6rem;\n}\n\n.SkeletonBadge--medium {\n  height: 2rem;\n}\n\n.SkeletonBadge--large {\n  height: 2.4rem;\n}\n\n.SkeletonList {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n}\n\n.SkeletonList-item {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n  flex-wrap: nowrap;\n}\n\n.SkeletonList-item__thumbnail {\n  width: 13px;\n  height: 13px;\n}\n\n.SkeletonList-item__content {\n  flex: 100%;\n  height: 9px;\n}\n\n.SkeletonTabs {\n  display: flex;\n  gap: 2.4rem;\n  border-bottom: 1px solid #e4e4e4;\n  padding-bottom: 1px;\n  overflow-x: auto;\n}\n\n.SkeletonTabs-item {\n  width: 80px;\n  height: 40px;\n  flex: 0 0 80px;\n}\n\n.SkeletonLine {\n  display: flex;\n  flex-direction: column;\n}\n\n.SkeletonLine .SkeletonLine-item:last-child {\n  width: 50%;\n}\n\n.SkeletonLine .SkeletonLine-item:first-child {\n  width: 100%;\n}";
styleInject(css_248z);

var SkeletonBadge = function (_a) {
    var _b = _a.size, size = _b === void 0 ? "Medium" : _b; __rest(_a, ["size"]);
    var checkSize = function () {
        switch (size) {
            case "Small":
                return "SkeletonBadge--small";
            case "Medium":
                return "SkeletonBadge--medium";
            case "Large":
                return "SkeletonBadge--large";
            default:
                return "SkeletonBadge--medium";
        }
    };
    var ThumbnailSize = checkSize();
    return (jsx("div", { className: "skeleton SkeletonBadge ".concat(ThumbnailSize), children: jsx("div", { className: "skeleton-inner" }) }));
};

var SkeletonButton = function (_a) {
    var _b = _a.size, size = _b === void 0 ? "Medium" : _b; __rest(_a, ["size"]);
    var checkSize = function () {
        switch (size) {
            case "XSmall":
                return "SkeletonButton--extraSmall";
            case "Small":
                return "SkeletonButton--small";
            case "Medium":
                return "SkeletonButton--medium";
            case "Large":
                return "SkeletonButton--large";
            default:
                return "SkeletonButton--medium";
        }
    };
    var ThumbnailSize = checkSize();
    return (jsx("div", { className: "skeleton SkeletonButton ".concat(ThumbnailSize), children: jsx("div", { className: "skeleton-inner" }) }));
};

var SkeletonCustom = function (_a) {
    //const ThumbnailSize = checkSize();
    var _b = _a.height, height = _b === void 0 ? 5 : _b, _c = _a.width, width = _c === void 0 ? 5 : _c, _d = _a.radius, radius = _d === void 0 ? 1.4 : _d; __rest(_a, ["height", "width", "radius"]);
    return (jsx("div", { className: "skeleton SkeletonCustom", style: { width: width + 'rem', height: height + "rem" }, children: jsx("div", { className: "skeleton-inner", style: { borderRadius: radius + 'rem' } }) }));
};

var SkeletonLine = function (_a) {
    //const ThumbnailSize = checkSize();
    var _b = _a.numberOfLine, numberOfLine = _b === void 0 ? 5 : _b, _c = _a.lineGap, lineGap = _c === void 0 ? 2 : _c, _d = _a.lineHeight, lineHeight = _d === void 0 ? 1.4 : _d; __rest(_a, ["numberOfLine", "lineGap", "lineHeight"]);
    return (jsx("div", { className: "SkeletonLine", style: { gap: lineGap + 'rem' }, children: Array.from({ length: numberOfLine }, function () { return (jsx("div", { className: "skeleton SkeletonLine-item", style: { height: lineHeight + 'rem' }, children: jsx("div", { className: "skeleton-inner" }) })); }) }));
};

var SkeletonList = function (_a) {
    //const ThumbnailSize = checkSize();
    var _b = _a.numberOfList, numberOfList = _b === void 0 ? 5 : _b; __rest(_a, ["numberOfList"]);
    return (jsx("div", { className: "SkeletonList", children: Array.from({ length: numberOfList }, function () { return (jsxs("div", { className: "SkeletonList-item", children: [jsx("div", { className: "skeleton SkeletonList-item__thumbnail", children: jsx("div", { className: "skeleton-inner" }) }), jsx("div", { className: "skeleton SkeletonList-item__content", children: jsx("div", { className: "skeleton-inner" }) })] })); }) }));
};

var SkeletonTabs = function (_a) {
    //const ThumbnailSize = checkSize();
    var _b = _a.numberOfTabs, numberOfTabs = _b === void 0 ? 5 : _b; __rest(_a, ["numberOfTabs"]);
    return (jsx("div", { className: "SkeletonTabs", children: Array.from({ length: numberOfTabs }, function () { return (jsx("div", { className: "skeleton SkeletonTabs-item", children: jsx("div", { className: "skeleton-inner" }) })); }) }));
};

var SkeletonThumbnail = function (_a) {
    var _b = _a.size, size = _b === void 0 ? "Medium" : _b; __rest(_a, ["size"]);
    var checkSize = function () {
        switch (size) {
            case "ExtraSmall":
                return "skeletonThumbnail--extraSmall";
            case "Small":
                return "skeletonThumbnail--small";
            case "Medium":
                return "skeletonThumbnail--medium";
            case "Large":
                return "skeletonThumbnail--large";
            default:
                return "skeletonThumbnail--medium";
        }
    };
    var ThumbnailSize = checkSize();
    return (jsx("div", { className: "skeleton skeletonThumbnail ".concat(ThumbnailSize), children: jsx("div", { className: "skeleton-inner" }) }));
};

export { Accordion, Actionlist, Alert, AppWrapper, Avatar, Badge, BottomSheet, Breadcrumb, Button, ButtonGroup, Card, Checkbox, CheckboxGroup, CopyClipboard, Divider, Dropdown, FileUpload, FlexItem, Grid, HorizontalFlex, Indicator, List, MediaCard, Modal, PageTitle, Pagination, ProgressBar, Radio, RadioGroup, Select, SideBar, SideSheet, SkeletonBadge, SkeletonButton, SkeletonCustom, SkeletonLine, SkeletonList, SkeletonTabs, SkeletonThumbnail, Spinner, StepWizard, Switcher, Table, Tabs, Tag, TextArea, TextField, TextLink, TextStyle, Thumbnail, Tooltip, Topbar as TopBar, VerticalFlex };
//# sourceMappingURL=index.esm.js.map
