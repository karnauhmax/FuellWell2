/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@splidejs/splide/dist/js/splide.esm.js":
/*!*************************************************************!*\
  !*** ./node_modules/@splidejs/splide/dist/js/splide.esm.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CLASSES": () => (/* binding */ CLASSES),
/* harmony export */   "CLASS_ACTIVE": () => (/* binding */ CLASS_ACTIVE),
/* harmony export */   "CLASS_ARROW": () => (/* binding */ CLASS_ARROW),
/* harmony export */   "CLASS_ARROWS": () => (/* binding */ CLASS_ARROWS),
/* harmony export */   "CLASS_ARROW_NEXT": () => (/* binding */ CLASS_ARROW_NEXT),
/* harmony export */   "CLASS_ARROW_PREV": () => (/* binding */ CLASS_ARROW_PREV),
/* harmony export */   "CLASS_CLONE": () => (/* binding */ CLASS_CLONE),
/* harmony export */   "CLASS_CONTAINER": () => (/* binding */ CLASS_CONTAINER),
/* harmony export */   "CLASS_FOCUS_IN": () => (/* binding */ CLASS_FOCUS_IN),
/* harmony export */   "CLASS_INITIALIZED": () => (/* binding */ CLASS_INITIALIZED),
/* harmony export */   "CLASS_LIST": () => (/* binding */ CLASS_LIST),
/* harmony export */   "CLASS_LOADING": () => (/* binding */ CLASS_LOADING),
/* harmony export */   "CLASS_NEXT": () => (/* binding */ CLASS_NEXT),
/* harmony export */   "CLASS_PAGINATION": () => (/* binding */ CLASS_PAGINATION),
/* harmony export */   "CLASS_PAGINATION_PAGE": () => (/* binding */ CLASS_PAGINATION_PAGE),
/* harmony export */   "CLASS_PREV": () => (/* binding */ CLASS_PREV),
/* harmony export */   "CLASS_PROGRESS": () => (/* binding */ CLASS_PROGRESS),
/* harmony export */   "CLASS_PROGRESS_BAR": () => (/* binding */ CLASS_PROGRESS_BAR),
/* harmony export */   "CLASS_ROOT": () => (/* binding */ CLASS_ROOT),
/* harmony export */   "CLASS_SLIDE": () => (/* binding */ CLASS_SLIDE),
/* harmony export */   "CLASS_SPINNER": () => (/* binding */ CLASS_SPINNER),
/* harmony export */   "CLASS_SR": () => (/* binding */ CLASS_SR),
/* harmony export */   "CLASS_TOGGLE": () => (/* binding */ CLASS_TOGGLE),
/* harmony export */   "CLASS_TOGGLE_PAUSE": () => (/* binding */ CLASS_TOGGLE_PAUSE),
/* harmony export */   "CLASS_TOGGLE_PLAY": () => (/* binding */ CLASS_TOGGLE_PLAY),
/* harmony export */   "CLASS_TRACK": () => (/* binding */ CLASS_TRACK),
/* harmony export */   "CLASS_VISIBLE": () => (/* binding */ CLASS_VISIBLE),
/* harmony export */   "DEFAULTS": () => (/* binding */ DEFAULTS),
/* harmony export */   "EVENT_ACTIVE": () => (/* binding */ EVENT_ACTIVE),
/* harmony export */   "EVENT_ARROWS_MOUNTED": () => (/* binding */ EVENT_ARROWS_MOUNTED),
/* harmony export */   "EVENT_ARROWS_UPDATED": () => (/* binding */ EVENT_ARROWS_UPDATED),
/* harmony export */   "EVENT_AUTOPLAY_PAUSE": () => (/* binding */ EVENT_AUTOPLAY_PAUSE),
/* harmony export */   "EVENT_AUTOPLAY_PLAY": () => (/* binding */ EVENT_AUTOPLAY_PLAY),
/* harmony export */   "EVENT_AUTOPLAY_PLAYING": () => (/* binding */ EVENT_AUTOPLAY_PLAYING),
/* harmony export */   "EVENT_CLICK": () => (/* binding */ EVENT_CLICK),
/* harmony export */   "EVENT_DESTROY": () => (/* binding */ EVENT_DESTROY),
/* harmony export */   "EVENT_DRAG": () => (/* binding */ EVENT_DRAG),
/* harmony export */   "EVENT_DRAGGED": () => (/* binding */ EVENT_DRAGGED),
/* harmony export */   "EVENT_DRAGGING": () => (/* binding */ EVENT_DRAGGING),
/* harmony export */   "EVENT_HIDDEN": () => (/* binding */ EVENT_HIDDEN),
/* harmony export */   "EVENT_INACTIVE": () => (/* binding */ EVENT_INACTIVE),
/* harmony export */   "EVENT_LAZYLOAD_LOADED": () => (/* binding */ EVENT_LAZYLOAD_LOADED),
/* harmony export */   "EVENT_MOUNTED": () => (/* binding */ EVENT_MOUNTED),
/* harmony export */   "EVENT_MOVE": () => (/* binding */ EVENT_MOVE),
/* harmony export */   "EVENT_MOVED": () => (/* binding */ EVENT_MOVED),
/* harmony export */   "EVENT_NAVIGATION_MOUNTED": () => (/* binding */ EVENT_NAVIGATION_MOUNTED),
/* harmony export */   "EVENT_PAGINATION_MOUNTED": () => (/* binding */ EVENT_PAGINATION_MOUNTED),
/* harmony export */   "EVENT_PAGINATION_UPDATED": () => (/* binding */ EVENT_PAGINATION_UPDATED),
/* harmony export */   "EVENT_READY": () => (/* binding */ EVENT_READY),
/* harmony export */   "EVENT_REFRESH": () => (/* binding */ EVENT_REFRESH),
/* harmony export */   "EVENT_RESIZE": () => (/* binding */ EVENT_RESIZE),
/* harmony export */   "EVENT_RESIZED": () => (/* binding */ EVENT_RESIZED),
/* harmony export */   "EVENT_SCROLL": () => (/* binding */ EVENT_SCROLL),
/* harmony export */   "EVENT_SCROLLED": () => (/* binding */ EVENT_SCROLLED),
/* harmony export */   "EVENT_SHIFTED": () => (/* binding */ EVENT_SHIFTED),
/* harmony export */   "EVENT_SLIDE_KEYDOWN": () => (/* binding */ EVENT_SLIDE_KEYDOWN),
/* harmony export */   "EVENT_UPDATED": () => (/* binding */ EVENT_UPDATED),
/* harmony export */   "EVENT_VISIBLE": () => (/* binding */ EVENT_VISIBLE),
/* harmony export */   "EventBinder": () => (/* binding */ EventBinder),
/* harmony export */   "EventInterface": () => (/* binding */ EventInterface),
/* harmony export */   "FADE": () => (/* binding */ FADE),
/* harmony export */   "LOOP": () => (/* binding */ LOOP),
/* harmony export */   "LTR": () => (/* binding */ LTR),
/* harmony export */   "RTL": () => (/* binding */ RTL),
/* harmony export */   "RequestInterval": () => (/* binding */ RequestInterval),
/* harmony export */   "SLIDE": () => (/* binding */ SLIDE),
/* harmony export */   "STATUS_CLASSES": () => (/* binding */ STATUS_CLASSES),
/* harmony export */   "Splide": () => (/* binding */ Splide),
/* harmony export */   "SplideRenderer": () => (/* binding */ SplideRenderer),
/* harmony export */   "State": () => (/* binding */ State),
/* harmony export */   "TTB": () => (/* binding */ TTB),
/* harmony export */   "Throttle": () => (/* binding */ Throttle),
/* harmony export */   "default": () => (/* binding */ Splide)
/* harmony export */ });
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/*!
 * Splide.js
 * Version  : 4.0.7
 * License  : MIT
 * Copyright: 2022 Naotoshi Fujita
 */
var MEDIA_PREFERS_REDUCED_MOTION = "(prefers-reduced-motion: reduce)";
var CREATED = 1;
var MOUNTED = 2;
var IDLE = 3;
var MOVING = 4;
var SCROLLING = 5;
var DRAGGING = 6;
var DESTROYED = 7;
var STATES = {
  CREATED: CREATED,
  MOUNTED: MOUNTED,
  IDLE: IDLE,
  MOVING: MOVING,
  SCROLLING: SCROLLING,
  DRAGGING: DRAGGING,
  DESTROYED: DESTROYED
};

function empty(array) {
  array.length = 0;
}

function slice(arrayLike, start, end) {
  return Array.prototype.slice.call(arrayLike, start, end);
}

function apply(func) {
  return func.bind.apply(func, [null].concat(slice(arguments, 1)));
}

var nextTick = setTimeout;

var noop = function noop() {};

function raf(func) {
  return requestAnimationFrame(func);
}

function typeOf(type, subject) {
  return typeof subject === type;
}

function isObject(subject) {
  return !isNull(subject) && typeOf("object", subject);
}

var isArray = Array.isArray;
var isFunction = apply(typeOf, "function");
var isString = apply(typeOf, "string");
var isUndefined = apply(typeOf, "undefined");

function isNull(subject) {
  return subject === null;
}

function isHTMLElement(subject) {
  return subject instanceof HTMLElement;
}

function toArray(value) {
  return isArray(value) ? value : [value];
}

function forEach(values, iteratee) {
  toArray(values).forEach(iteratee);
}

function includes(array, value) {
  return array.indexOf(value) > -1;
}

function push(array, items) {
  array.push.apply(array, toArray(items));
  return array;
}

function toggleClass(elm, classes, add) {
  if (elm) {
    forEach(classes, function (name) {
      if (name) {
        elm.classList[add ? "add" : "remove"](name);
      }
    });
  }
}

function addClass(elm, classes) {
  toggleClass(elm, isString(classes) ? classes.split(" ") : classes, true);
}

function append(parent, children) {
  forEach(children, parent.appendChild.bind(parent));
}

function before(nodes, ref) {
  forEach(nodes, function (node) {
    var parent = (ref || node).parentNode;

    if (parent) {
      parent.insertBefore(node, ref);
    }
  });
}

function matches(elm, selector) {
  return isHTMLElement(elm) && (elm["msMatchesSelector"] || elm.matches).call(elm, selector);
}

function children(parent, selector) {
  var children2 = parent ? slice(parent.children) : [];
  return selector ? children2.filter(function (child) {
    return matches(child, selector);
  }) : children2;
}

function child(parent, selector) {
  return selector ? children(parent, selector)[0] : parent.firstElementChild;
}

var ownKeys = Object.keys;

function forOwn(object, iteratee, right) {
  if (object) {
    var keys = ownKeys(object);
    keys = right ? keys.reverse() : keys;

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== "__proto__") {
        if (iteratee(object[key], key) === false) {
          break;
        }
      }
    }
  }

  return object;
}

function assign(object) {
  slice(arguments, 1).forEach(function (source) {
    forOwn(source, function (value, key) {
      object[key] = source[key];
    });
  });
  return object;
}

function merge(object) {
  slice(arguments, 1).forEach(function (source) {
    forOwn(source, function (value, key) {
      if (isArray(value)) {
        object[key] = value.slice();
      } else if (isObject(value)) {
        object[key] = merge({}, isObject(object[key]) ? object[key] : {}, value);
      } else {
        object[key] = value;
      }
    });
  });
  return object;
}

function omit(object, keys) {
  toArray(keys || ownKeys(object)).forEach(function (key) {
    delete object[key];
  });
}

function removeAttribute(elms, attrs) {
  forEach(elms, function (elm) {
    forEach(attrs, function (attr) {
      elm && elm.removeAttribute(attr);
    });
  });
}

function setAttribute(elms, attrs, value) {
  if (isObject(attrs)) {
    forOwn(attrs, function (value2, name) {
      setAttribute(elms, name, value2);
    });
  } else {
    forEach(elms, function (elm) {
      isNull(value) || value === "" ? removeAttribute(elm, attrs) : elm.setAttribute(attrs, String(value));
    });
  }
}

function create(tag, attrs, parent) {
  var elm = document.createElement(tag);

  if (attrs) {
    isString(attrs) ? addClass(elm, attrs) : setAttribute(elm, attrs);
  }

  parent && append(parent, elm);
  return elm;
}

function style(elm, prop, value) {
  if (isUndefined(value)) {
    return getComputedStyle(elm)[prop];
  }

  if (!isNull(value)) {
    elm.style[prop] = "" + value;
  }
}

function display(elm, display2) {
  style(elm, "display", display2);
}

function focus(elm) {
  elm["setActive"] && elm["setActive"]() || elm.focus({
    preventScroll: true
  });
}

function getAttribute(elm, attr) {
  return elm.getAttribute(attr);
}

function hasClass(elm, className) {
  return elm && elm.classList.contains(className);
}

function rect(target) {
  return target.getBoundingClientRect();
}

function remove(nodes) {
  forEach(nodes, function (node) {
    if (node && node.parentNode) {
      node.parentNode.removeChild(node);
    }
  });
}

function parseHtml(html) {
  return child(new DOMParser().parseFromString(html, "text/html").body);
}

function prevent(e, stopPropagation) {
  e.preventDefault();

  if (stopPropagation) {
    e.stopPropagation();
    e.stopImmediatePropagation();
  }
}

function query(parent, selector) {
  return parent && parent.querySelector(selector);
}

function queryAll(parent, selector) {
  return selector ? slice(parent.querySelectorAll(selector)) : [];
}

function removeClass(elm, classes) {
  toggleClass(elm, classes, false);
}

function timeOf(e) {
  return e.timeStamp;
}

function unit(value) {
  return isString(value) ? value : value ? value + "px" : "";
}

var PROJECT_CODE = "splide";
var DATA_ATTRIBUTE = "data-" + PROJECT_CODE;

function assert(condition, message) {
  if (!condition) {
    throw new Error("[" + PROJECT_CODE + "] " + (message || ""));
  }
}

var min = Math.min,
    max = Math.max,
    floor = Math.floor,
    ceil = Math.ceil,
    abs = Math.abs;

function approximatelyEqual(x, y, epsilon) {
  return abs(x - y) < epsilon;
}

function between(number, minOrMax, maxOrMin, exclusive) {
  var minimum = min(minOrMax, maxOrMin);
  var maximum = max(minOrMax, maxOrMin);
  return exclusive ? minimum < number && number < maximum : minimum <= number && number <= maximum;
}

function clamp(number, x, y) {
  var minimum = min(x, y);
  var maximum = max(x, y);
  return min(max(minimum, number), maximum);
}

function sign(x) {
  return +(x > 0) - +(x < 0);
}

function camelToKebab(string) {
  return string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
}

function format(string, replacements) {
  forEach(replacements, function (replacement) {
    string = string.replace("%s", "" + replacement);
  });
  return string;
}

function pad(number) {
  return number < 10 ? "0" + number : "" + number;
}

var ids = {};

function uniqueId(prefix) {
  return "" + prefix + pad(ids[prefix] = (ids[prefix] || 0) + 1);
}

function EventBinder() {
  var listeners = [];

  function bind(targets, events, callback, options) {
    forEachEvent(targets, events, function (target, event, namespace) {
      var isEventTarget = ("addEventListener" in target);
      var remover = isEventTarget ? target.removeEventListener.bind(target, event, callback, options) : target["removeListener"].bind(target, callback);
      isEventTarget ? target.addEventListener(event, callback, options) : target["addListener"](callback);
      listeners.push([target, event, namespace, callback, remover]);
    });
  }

  function unbind(targets, events, callback) {
    forEachEvent(targets, events, function (target, event, namespace) {
      listeners = listeners.filter(function (listener) {
        if (listener[0] === target && listener[1] === event && listener[2] === namespace && (!callback || listener[3] === callback)) {
          listener[4]();
          return false;
        }

        return true;
      });
    });
  }

  function dispatch(target, type, detail) {
    var e;
    var bubbles = true;

    if (typeof CustomEvent === "function") {
      e = new CustomEvent(type, {
        bubbles: bubbles,
        detail: detail
      });
    } else {
      e = document.createEvent("CustomEvent");
      e.initCustomEvent(type, bubbles, false, detail);
    }

    target.dispatchEvent(e);
    return e;
  }

  function forEachEvent(targets, events, iteratee) {
    forEach(targets, function (target) {
      target && forEach(events, function (events2) {
        events2.split(" ").forEach(function (eventNS) {
          var fragment = eventNS.split(".");
          iteratee(target, fragment[0], fragment[1]);
        });
      });
    });
  }

  function destroy() {
    listeners.forEach(function (data) {
      data[4]();
    });
    empty(listeners);
  }

  return {
    bind: bind,
    unbind: unbind,
    dispatch: dispatch,
    destroy: destroy
  };
}

var EVENT_MOUNTED = "mounted";
var EVENT_READY = "ready";
var EVENT_MOVE = "move";
var EVENT_MOVED = "moved";
var EVENT_SHIFTED = "shifted";
var EVENT_CLICK = "click";
var EVENT_ACTIVE = "active";
var EVENT_INACTIVE = "inactive";
var EVENT_VISIBLE = "visible";
var EVENT_HIDDEN = "hidden";
var EVENT_SLIDE_KEYDOWN = "slide:keydown";
var EVENT_REFRESH = "refresh";
var EVENT_UPDATED = "updated";
var EVENT_RESIZE = "resize";
var EVENT_RESIZED = "resized";
var EVENT_DRAG = "drag";
var EVENT_DRAGGING = "dragging";
var EVENT_DRAGGED = "dragged";
var EVENT_SCROLL = "scroll";
var EVENT_SCROLLED = "scrolled";
var EVENT_DESTROY = "destroy";
var EVENT_ARROWS_MOUNTED = "arrows:mounted";
var EVENT_ARROWS_UPDATED = "arrows:updated";
var EVENT_PAGINATION_MOUNTED = "pagination:mounted";
var EVENT_PAGINATION_UPDATED = "pagination:updated";
var EVENT_NAVIGATION_MOUNTED = "navigation:mounted";
var EVENT_AUTOPLAY_PLAY = "autoplay:play";
var EVENT_AUTOPLAY_PLAYING = "autoplay:playing";
var EVENT_AUTOPLAY_PAUSE = "autoplay:pause";
var EVENT_LAZYLOAD_LOADED = "lazyload:loaded";

function EventInterface(Splide2) {
  var bus = Splide2 ? Splide2.event.bus : document.createDocumentFragment();
  var binder = EventBinder();

  function on(events, callback) {
    binder.bind(bus, toArray(events).join(" "), function (e) {
      callback.apply(callback, isArray(e.detail) ? e.detail : []);
    });
  }

  function emit(event) {
    binder.dispatch(bus, event, slice(arguments, 1));
  }

  if (Splide2) {
    Splide2.event.on(EVENT_DESTROY, binder.destroy);
  }

  return assign(binder, {
    bus: bus,
    on: on,
    off: apply(binder.unbind, bus),
    emit: emit
  });
}

function RequestInterval(interval, onInterval, onUpdate, limit) {
  var now = Date.now;
  var startTime;
  var rate = 0;
  var id;
  var paused = true;
  var count = 0;

  function update() {
    if (!paused) {
      rate = interval ? min((now() - startTime) / interval, 1) : 1;
      onUpdate && onUpdate(rate);

      if (rate >= 1) {
        onInterval();
        startTime = now();

        if (limit && ++count >= limit) {
          return pause();
        }
      }

      raf(update);
    }
  }

  function start(resume) {
    !resume && cancel();
    startTime = now() - (resume ? rate * interval : 0);
    paused = false;
    raf(update);
  }

  function pause() {
    paused = true;
  }

  function rewind() {
    startTime = now();
    rate = 0;

    if (onUpdate) {
      onUpdate(rate);
    }
  }

  function cancel() {
    id && cancelAnimationFrame(id);
    rate = 0;
    id = 0;
    paused = true;
  }

  function set(time) {
    interval = time;
  }

  function isPaused() {
    return paused;
  }

  return {
    start: start,
    rewind: rewind,
    pause: pause,
    cancel: cancel,
    set: set,
    isPaused: isPaused
  };
}

function State(initialState) {
  var state = initialState;

  function set(value) {
    state = value;
  }

  function is(states) {
    return includes(toArray(states), state);
  }

  return {
    set: set,
    is: is
  };
}

function Throttle(func, duration) {
  var interval;

  function throttled() {
    if (!interval) {
      interval = RequestInterval(duration || 0, function () {
        func();
        interval = null;
      }, null, 1);
      interval.start();
    }
  }

  return throttled;
}

function Media(Splide2, Components2, options) {
  var state = Splide2.state;
  var breakpoints = options.breakpoints || {};
  var reducedMotion = options.reducedMotion || {};
  var binder = EventBinder();
  var queries = [];

  function setup() {
    var isMin = options.mediaQuery === "min";
    ownKeys(breakpoints).sort(function (n, m) {
      return isMin ? +n - +m : +m - +n;
    }).forEach(function (key) {
      register(breakpoints[key], "(" + (isMin ? "min" : "max") + "-width:" + key + "px)");
    });
    register(reducedMotion, MEDIA_PREFERS_REDUCED_MOTION);
    update();
  }

  function destroy(completely) {
    if (completely) {
      binder.destroy();
    }
  }

  function register(options2, query) {
    var queryList = matchMedia(query);
    binder.bind(queryList, "change", update);
    queries.push([options2, queryList]);
  }

  function update() {
    var destroyed = state.is(DESTROYED);
    var direction = options.direction;
    var merged = queries.reduce(function (merged2, entry) {
      return merge(merged2, entry[1].matches ? entry[0] : {});
    }, {});
    omit(options);
    set(merged);

    if (options.destroy) {
      Splide2.destroy(options.destroy === "completely");
    } else if (destroyed) {
      destroy(true);
      Splide2.mount();
    } else {
      direction !== options.direction && Splide2.refresh();
    }
  }

  function reduce(enable) {
    if (matchMedia(MEDIA_PREFERS_REDUCED_MOTION).matches) {
      enable ? merge(options, reducedMotion) : omit(options, ownKeys(reducedMotion));
    }
  }

  function set(opts, user) {
    merge(options, opts);
    user && merge(Object.getPrototypeOf(options), opts);

    if (!state.is(CREATED)) {
      Splide2.emit(EVENT_UPDATED, options);
    }
  }

  return {
    setup: setup,
    destroy: destroy,
    reduce: reduce,
    set: set
  };
}

var ARROW = "Arrow";
var ARROW_LEFT = ARROW + "Left";
var ARROW_RIGHT = ARROW + "Right";
var ARROW_UP = ARROW + "Up";
var ARROW_DOWN = ARROW + "Down";
var LTR = "ltr";
var RTL = "rtl";
var TTB = "ttb";
var ORIENTATION_MAP = {
  width: ["height"],
  left: ["top", "right"],
  right: ["bottom", "left"],
  x: ["y"],
  X: ["Y"],
  Y: ["X"],
  ArrowLeft: [ARROW_UP, ARROW_RIGHT],
  ArrowRight: [ARROW_DOWN, ARROW_LEFT]
};

function Direction(Splide2, Components2, options) {
  function resolve(prop, axisOnly, direction) {
    direction = direction || options.direction;
    var index = direction === RTL && !axisOnly ? 1 : direction === TTB ? 0 : -1;
    return ORIENTATION_MAP[prop] && ORIENTATION_MAP[prop][index] || prop.replace(/width|left|right/i, function (match, offset) {
      var replacement = ORIENTATION_MAP[match.toLowerCase()][index] || match;
      return offset > 0 ? replacement.charAt(0).toUpperCase() + replacement.slice(1) : replacement;
    });
  }

  function orient(value) {
    return value * (options.direction === RTL ? 1 : -1);
  }

  return {
    resolve: resolve,
    orient: orient
  };
}

var ROLE = "role";
var TAB_INDEX = "tabindex";
var DISABLED = "disabled";
var ARIA_PREFIX = "aria-";
var ARIA_CONTROLS = ARIA_PREFIX + "controls";
var ARIA_CURRENT = ARIA_PREFIX + "current";
var ARIA_SELECTED = ARIA_PREFIX + "selected";
var ARIA_LABEL = ARIA_PREFIX + "label";
var ARIA_LABELLEDBY = ARIA_PREFIX + "labelledby";
var ARIA_HIDDEN = ARIA_PREFIX + "hidden";
var ARIA_ORIENTATION = ARIA_PREFIX + "orientation";
var ARIA_ROLEDESCRIPTION = ARIA_PREFIX + "roledescription";
var ARIA_LIVE = ARIA_PREFIX + "live";
var ARIA_BUSY = ARIA_PREFIX + "busy";
var ARIA_ATOMIC = ARIA_PREFIX + "atomic";
var ALL_ATTRIBUTES = [ROLE, TAB_INDEX, DISABLED, ARIA_CONTROLS, ARIA_CURRENT, ARIA_LABEL, ARIA_LABELLEDBY, ARIA_HIDDEN, ARIA_ORIENTATION, ARIA_ROLEDESCRIPTION];
var CLASS_ROOT = PROJECT_CODE;
var CLASS_TRACK = PROJECT_CODE + "__track";
var CLASS_LIST = PROJECT_CODE + "__list";
var CLASS_SLIDE = PROJECT_CODE + "__slide";
var CLASS_CLONE = CLASS_SLIDE + "--clone";
var CLASS_CONTAINER = CLASS_SLIDE + "__container";
var CLASS_ARROWS = PROJECT_CODE + "__arrows";
var CLASS_ARROW = PROJECT_CODE + "__arrow";
var CLASS_ARROW_PREV = CLASS_ARROW + "--prev";
var CLASS_ARROW_NEXT = CLASS_ARROW + "--next";
var CLASS_PAGINATION = PROJECT_CODE + "__pagination";
var CLASS_PAGINATION_PAGE = CLASS_PAGINATION + "__page";
var CLASS_PROGRESS = PROJECT_CODE + "__progress";
var CLASS_PROGRESS_BAR = CLASS_PROGRESS + "__bar";
var CLASS_TOGGLE = PROJECT_CODE + "__toggle";
var CLASS_TOGGLE_PLAY = CLASS_TOGGLE + "__play";
var CLASS_TOGGLE_PAUSE = CLASS_TOGGLE + "__pause";
var CLASS_SPINNER = PROJECT_CODE + "__spinner";
var CLASS_SR = PROJECT_CODE + "__sr";
var CLASS_INITIALIZED = "is-initialized";
var CLASS_ACTIVE = "is-active";
var CLASS_PREV = "is-prev";
var CLASS_NEXT = "is-next";
var CLASS_VISIBLE = "is-visible";
var CLASS_LOADING = "is-loading";
var CLASS_FOCUS_IN = "is-focus-in";
var STATUS_CLASSES = [CLASS_ACTIVE, CLASS_VISIBLE, CLASS_PREV, CLASS_NEXT, CLASS_LOADING, CLASS_FOCUS_IN];
var CLASSES = {
  slide: CLASS_SLIDE,
  clone: CLASS_CLONE,
  arrows: CLASS_ARROWS,
  arrow: CLASS_ARROW,
  prev: CLASS_ARROW_PREV,
  next: CLASS_ARROW_NEXT,
  pagination: CLASS_PAGINATION,
  page: CLASS_PAGINATION_PAGE,
  spinner: CLASS_SPINNER
};

function closest(from, selector) {
  if (isFunction(from.closest)) {
    return from.closest(selector);
  }

  var elm = from;

  while (elm && elm.nodeType === 1) {
    if (matches(elm, selector)) {
      break;
    }

    elm = elm.parentElement;
  }

  return elm;
}

var FRICTION = 5;
var LOG_INTERVAL = 200;
var POINTER_DOWN_EVENTS = "touchstart mousedown";
var POINTER_MOVE_EVENTS = "touchmove mousemove";
var POINTER_UP_EVENTS = "touchend touchcancel mouseup click";

function Elements(Splide2, Components2, options) {
  var _EventInterface = EventInterface(Splide2),
      on = _EventInterface.on,
      bind = _EventInterface.bind;

  var root = Splide2.root;
  var i18n = options.i18n;
  var elements = {};
  var slides = [];
  var rootClasses = [];
  var trackClasses = [];
  var track;
  var list;
  var isUsingKey;

  function setup() {
    collect();
    init();
    update();
  }

  function mount() {
    on(EVENT_REFRESH, destroy);
    on(EVENT_REFRESH, setup);
    on(EVENT_UPDATED, update);
    bind(document, POINTER_DOWN_EVENTS + " keydown", function (e) {
      isUsingKey = e.type === "keydown";
    }, {
      capture: true
    });
    bind(root, "focusin", function () {
      toggleClass(root, CLASS_FOCUS_IN, !!isUsingKey);
    });
  }

  function destroy(completely) {
    var attrs = ALL_ATTRIBUTES.concat("style");
    empty(slides);
    removeClass(root, rootClasses);
    removeClass(track, trackClasses);
    removeAttribute([track, list], attrs);
    removeAttribute(root, completely ? attrs : ["style", ARIA_ROLEDESCRIPTION]);
  }

  function update() {
    removeClass(root, rootClasses);
    removeClass(track, trackClasses);
    rootClasses = getClasses(CLASS_ROOT);
    trackClasses = getClasses(CLASS_TRACK);
    addClass(root, rootClasses);
    addClass(track, trackClasses);
    setAttribute(root, ARIA_LABEL, options.label);
    setAttribute(root, ARIA_LABELLEDBY, options.labelledby);
  }

  function collect() {
    track = find("." + CLASS_TRACK);
    list = child(track, "." + CLASS_LIST);
    assert(track && list, "A track/list element is missing.");
    push(slides, children(list, "." + CLASS_SLIDE + ":not(." + CLASS_CLONE + ")"));
    forOwn({
      arrows: CLASS_ARROWS,
      pagination: CLASS_PAGINATION,
      prev: CLASS_ARROW_PREV,
      next: CLASS_ARROW_NEXT,
      bar: CLASS_PROGRESS_BAR,
      toggle: CLASS_TOGGLE
    }, function (className, key) {
      elements[key] = find("." + className);
    });
    assign(elements, {
      root: root,
      track: track,
      list: list,
      slides: slides
    });
  }

  function init() {
    var id = root.id || uniqueId(PROJECT_CODE);
    var role = options.role;
    root.id = id;
    track.id = track.id || id + "-track";
    list.id = list.id || id + "-list";

    if (!getAttribute(root, ROLE) && root.tagName !== "SECTION" && role) {
      setAttribute(root, ROLE, role);
    }

    setAttribute(root, ARIA_ROLEDESCRIPTION, i18n.carousel);
    setAttribute(list, ROLE, "presentation");
  }

  function find(selector) {
    var elm = query(root, selector);
    return elm && closest(elm, "." + CLASS_ROOT) === root ? elm : void 0;
  }

  function getClasses(base) {
    return [base + "--" + options.type, base + "--" + options.direction, options.drag && base + "--draggable", options.isNavigation && base + "--nav", base === CLASS_ROOT && CLASS_ACTIVE];
  }

  return assign(elements, {
    setup: setup,
    mount: mount,
    destroy: destroy
  });
}

var SLIDE = "slide";
var LOOP = "loop";
var FADE = "fade";

function Slide$1(Splide2, index, slideIndex, slide) {
  var event = EventInterface(Splide2);
  var on = event.on,
      emit = event.emit,
      bind = event.bind;
  var Components = Splide2.Components,
      root = Splide2.root,
      options = Splide2.options;
  var isNavigation = options.isNavigation,
      updateOnMove = options.updateOnMove,
      i18n = options.i18n,
      pagination = options.pagination,
      slideFocus = options.slideFocus;
  var resolve = Components.Direction.resolve;
  var styles = getAttribute(slide, "style");
  var label = getAttribute(slide, ARIA_LABEL);
  var isClone = slideIndex > -1;
  var container = child(slide, "." + CLASS_CONTAINER);
  var focusableNodes = queryAll(slide, options.focusableNodes || "");
  var destroyed;

  function mount() {
    if (!isClone) {
      slide.id = root.id + "-slide" + pad(index + 1);
      setAttribute(slide, ROLE, pagination ? "tabpanel" : "group");
      setAttribute(slide, ARIA_ROLEDESCRIPTION, i18n.slide);
      setAttribute(slide, ARIA_LABEL, label || format(i18n.slideLabel, [index + 1, Splide2.length]));
    }

    listen();
  }

  function listen() {
    bind(slide, "click", apply(emit, EVENT_CLICK, self));
    bind(slide, "keydown", apply(emit, EVENT_SLIDE_KEYDOWN, self));
    on([EVENT_MOVED, EVENT_SHIFTED, EVENT_SCROLLED], update);
    on(EVENT_NAVIGATION_MOUNTED, initNavigation);

    if (updateOnMove) {
      on(EVENT_MOVE, onMove);
    }
  }

  function destroy() {
    destroyed = true;
    event.destroy();
    removeClass(slide, STATUS_CLASSES);
    removeAttribute(slide, ALL_ATTRIBUTES);
    setAttribute(slide, "style", styles);
    setAttribute(slide, ARIA_LABEL, label || "");
  }

  function initNavigation() {
    var controls = Splide2.splides.map(function (target) {
      var Slide2 = target.splide.Components.Slides.getAt(index);
      return Slide2 ? Slide2.slide.id : "";
    }).join(" ");
    setAttribute(slide, ARIA_LABEL, format(i18n.slideX, (isClone ? slideIndex : index) + 1));
    setAttribute(slide, ARIA_CONTROLS, controls);
    setAttribute(slide, ROLE, slideFocus ? "button" : "");
    slideFocus && removeAttribute(slide, ARIA_ROLEDESCRIPTION);
  }

  function onMove() {
    if (!destroyed) {
      update();
    }
  }

  function update() {
    if (!destroyed) {
      var curr = Splide2.index;
      updateActivity();
      updateVisibility();
      toggleClass(slide, CLASS_PREV, index === curr - 1);
      toggleClass(slide, CLASS_NEXT, index === curr + 1);
    }
  }

  function updateActivity() {
    var active = isActive();

    if (active !== hasClass(slide, CLASS_ACTIVE)) {
      toggleClass(slide, CLASS_ACTIVE, active);
      setAttribute(slide, ARIA_CURRENT, isNavigation && active || "");
      emit(active ? EVENT_ACTIVE : EVENT_INACTIVE, self);
    }
  }

  function updateVisibility() {
    var visible = isVisible();
    var hidden = !visible && (!isActive() || isClone);

    if (!Splide2.state.is([MOVING, SCROLLING])) {
      setAttribute(slide, ARIA_HIDDEN, hidden || "");
    }

    setAttribute(focusableNodes, TAB_INDEX, hidden ? -1 : "");

    if (slideFocus) {
      setAttribute(slide, TAB_INDEX, hidden ? -1 : 0);
    }

    if (visible !== hasClass(slide, CLASS_VISIBLE)) {
      toggleClass(slide, CLASS_VISIBLE, visible);
      emit(visible ? EVENT_VISIBLE : EVENT_HIDDEN, self);
    }

    if (!visible && document.activeElement === slide) {
      var Slide2 = Components.Slides.getAt(Splide2.index);
      Slide2 && focus(Slide2.slide);
    }
  }

  function style$1(prop, value, useContainer) {
    style(useContainer && container || slide, prop, value);
  }

  function isActive() {
    var curr = Splide2.index;
    return curr === index || options.cloneStatus && curr === slideIndex;
  }

  function isVisible() {
    if (Splide2.is(FADE)) {
      return isActive();
    }

    var trackRect = rect(Components.Elements.track);
    var slideRect = rect(slide);
    var left = resolve("left", true);
    var right = resolve("right", true);
    return floor(trackRect[left]) <= ceil(slideRect[left]) && floor(slideRect[right]) <= ceil(trackRect[right]);
  }

  function isWithin(from, distance) {
    var diff = abs(from - index);

    if (!isClone && (options.rewind || Splide2.is(LOOP))) {
      diff = min(diff, Splide2.length - diff);
    }

    return diff <= distance;
  }

  var self = {
    index: index,
    slideIndex: slideIndex,
    slide: slide,
    container: container,
    isClone: isClone,
    mount: mount,
    destroy: destroy,
    update: update,
    style: style$1,
    isWithin: isWithin
  };
  return self;
}

function Slides(Splide2, Components2, options) {
  var _EventInterface2 = EventInterface(Splide2),
      on = _EventInterface2.on,
      emit = _EventInterface2.emit,
      bind = _EventInterface2.bind;

  var _Components2$Elements = Components2.Elements,
      slides = _Components2$Elements.slides,
      list = _Components2$Elements.list;
  var Slides2 = [];

  function mount() {
    init();
    on(EVENT_REFRESH, destroy);
    on(EVENT_REFRESH, init);
    on([EVENT_MOUNTED, EVENT_REFRESH], function () {
      Slides2.sort(function (Slide1, Slide2) {
        return Slide1.index - Slide2.index;
      });
    });
  }

  function init() {
    slides.forEach(function (slide, index) {
      register(slide, index, -1);
    });
  }

  function destroy() {
    forEach$1(function (Slide2) {
      Slide2.destroy();
    });
    empty(Slides2);
  }

  function update() {
    forEach$1(function (Slide2) {
      Slide2.update();
    });
  }

  function register(slide, index, slideIndex) {
    var object = Slide$1(Splide2, index, slideIndex, slide);
    object.mount();
    Slides2.push(object);
  }

  function get(excludeClones) {
    return excludeClones ? filter(function (Slide2) {
      return !Slide2.isClone;
    }) : Slides2;
  }

  function getIn(page) {
    var Controller = Components2.Controller;
    var index = Controller.toIndex(page);
    var max = Controller.hasFocus() ? 1 : options.perPage;
    return filter(function (Slide2) {
      return between(Slide2.index, index, index + max - 1);
    });
  }

  function getAt(index) {
    return filter(index)[0];
  }

  function add(items, index) {
    forEach(items, function (slide) {
      if (isString(slide)) {
        slide = parseHtml(slide);
      }

      if (isHTMLElement(slide)) {
        var ref = slides[index];
        ref ? before(slide, ref) : append(list, slide);
        addClass(slide, options.classes.slide);
        observeImages(slide, apply(emit, EVENT_RESIZE));
      }
    });
    emit(EVENT_REFRESH);
  }

  function remove$1(matcher) {
    remove(filter(matcher).map(function (Slide2) {
      return Slide2.slide;
    }));
    emit(EVENT_REFRESH);
  }

  function forEach$1(iteratee, excludeClones) {
    get(excludeClones).forEach(iteratee);
  }

  function filter(matcher) {
    return Slides2.filter(isFunction(matcher) ? matcher : function (Slide2) {
      return isString(matcher) ? matches(Slide2.slide, matcher) : includes(toArray(matcher), Slide2.index);
    });
  }

  function style(prop, value, useContainer) {
    forEach$1(function (Slide2) {
      Slide2.style(prop, value, useContainer);
    });
  }

  function observeImages(elm, callback) {
    var images = queryAll(elm, "img");
    var length = images.length;

    if (length) {
      images.forEach(function (img) {
        bind(img, "load error", function () {
          if (! --length) {
            callback();
          }
        });
      });
    } else {
      callback();
    }
  }

  function getLength(excludeClones) {
    return excludeClones ? slides.length : Slides2.length;
  }

  function isEnough() {
    return Slides2.length > options.perPage;
  }

  return {
    mount: mount,
    destroy: destroy,
    update: update,
    register: register,
    get: get,
    getIn: getIn,
    getAt: getAt,
    add: add,
    remove: remove$1,
    forEach: forEach$1,
    filter: filter,
    style: style,
    getLength: getLength,
    isEnough: isEnough
  };
}

function Layout(Splide2, Components2, options) {
  var _EventInterface3 = EventInterface(Splide2),
      on = _EventInterface3.on,
      bind = _EventInterface3.bind,
      emit = _EventInterface3.emit;

  var Slides = Components2.Slides;
  var resolve = Components2.Direction.resolve;
  var _Components2$Elements2 = Components2.Elements,
      root = _Components2$Elements2.root,
      track = _Components2$Elements2.track,
      list = _Components2$Elements2.list;
  var getAt = Slides.getAt,
      styleSlides = Slides.style;
  var vertical;
  var rootRect;

  function mount() {
    init();
    bind(window, "resize load", Throttle(apply(emit, EVENT_RESIZE)));
    on([EVENT_UPDATED, EVENT_REFRESH], init);
    on(EVENT_RESIZE, resize);
  }

  function init() {
    rootRect = null;
    vertical = options.direction === TTB;
    style(root, "maxWidth", unit(options.width));
    style(track, resolve("paddingLeft"), cssPadding(false));
    style(track, resolve("paddingRight"), cssPadding(true));
    resize();
  }

  function resize() {
    var newRect = rect(root);

    if (!rootRect || rootRect.width !== newRect.width || rootRect.height !== newRect.height) {
      style(track, "height", cssTrackHeight());
      styleSlides(resolve("marginRight"), unit(options.gap));
      styleSlides("width", cssSlideWidth());
      styleSlides("height", cssSlideHeight(), true);
      rootRect = newRect;
      emit(EVENT_RESIZED);
    }
  }

  function cssPadding(right) {
    var padding = options.padding;
    var prop = resolve(right ? "right" : "left");
    return padding && unit(padding[prop] || (isObject(padding) ? 0 : padding)) || "0px";
  }

  function cssTrackHeight() {
    var height = "";

    if (vertical) {
      height = cssHeight();
      assert(height, "height or heightRatio is missing.");
      height = "calc(" + height + " - " + cssPadding(false) + " - " + cssPadding(true) + ")";
    }

    return height;
  }

  function cssHeight() {
    return unit(options.height || rect(list).width * options.heightRatio);
  }

  function cssSlideWidth() {
    return options.autoWidth ? null : unit(options.fixedWidth) || (vertical ? "" : cssSlideSize());
  }

  function cssSlideHeight() {
    return unit(options.fixedHeight) || (vertical ? options.autoHeight ? null : cssSlideSize() : cssHeight());
  }

  function cssSlideSize() {
    var gap = unit(options.gap);
    return "calc((100%" + (gap && " + " + gap) + ")/" + (options.perPage || 1) + (gap && " - " + gap) + ")";
  }

  function listSize() {
    return rect(list)[resolve("width")];
  }

  function slideSize(index, withoutGap) {
    var Slide = getAt(index || 0);
    return Slide ? rect(Slide.slide)[resolve("width")] + (withoutGap ? 0 : getGap()) : 0;
  }

  function totalSize(index, withoutGap) {
    var Slide = getAt(index);

    if (Slide) {
      var right = rect(Slide.slide)[resolve("right")];
      var left = rect(list)[resolve("left")];
      return abs(right - left) + (withoutGap ? 0 : getGap());
    }

    return 0;
  }

  function sliderSize() {
    return totalSize(Splide2.length - 1, true) - totalSize(-1, true);
  }

  function getGap() {
    var Slide = getAt(0);
    return Slide && parseFloat(style(Slide.slide, resolve("marginRight"))) || 0;
  }

  function getPadding(right) {
    return parseFloat(style(track, resolve("padding" + (right ? "Right" : "Left")))) || 0;
  }

  return {
    mount: mount,
    listSize: listSize,
    slideSize: slideSize,
    sliderSize: sliderSize,
    totalSize: totalSize,
    getPadding: getPadding
  };
}

var MULTIPLIER = 2;

function Clones(Splide2, Components2, options) {
  var _EventInterface4 = EventInterface(Splide2),
      on = _EventInterface4.on,
      emit = _EventInterface4.emit;

  var Elements = Components2.Elements,
      Slides = Components2.Slides;
  var resolve = Components2.Direction.resolve;
  var clones = [];
  var cloneCount;

  function mount() {
    init();
    on(EVENT_REFRESH, destroy);
    on(EVENT_REFRESH, init);
    on([EVENT_UPDATED, EVENT_RESIZE], observe);
  }

  function init() {
    if (cloneCount = computeCloneCount()) {
      generate(cloneCount);
      emit(EVENT_RESIZE);
    }
  }

  function destroy() {
    remove(clones);
    empty(clones);
  }

  function observe() {
    if (cloneCount < computeCloneCount()) {
      emit(EVENT_REFRESH);
    }
  }

  function generate(count) {
    var slides = Slides.get().slice();
    var length = slides.length;

    if (length) {
      while (slides.length < count) {
        push(slides, slides);
      }

      push(slides.slice(-count), slides.slice(0, count)).forEach(function (Slide, index) {
        var isHead = index < count;
        var clone = cloneDeep(Slide.slide, index);
        isHead ? before(clone, slides[0].slide) : append(Elements.list, clone);
        push(clones, clone);
        Slides.register(clone, index - count + (isHead ? 0 : length), Slide.index);
      });
    }
  }

  function cloneDeep(elm, index) {
    var clone = elm.cloneNode(true);
    addClass(clone, options.classes.clone);
    clone.id = Splide2.root.id + "-clone" + pad(index + 1);
    return clone;
  }

  function computeCloneCount() {
    var clones2 = options.clones;

    if (!Splide2.is(LOOP)) {
      clones2 = 0;
    } else if (!clones2) {
      var fixedSize = options[resolve("fixedWidth")] && Components2.Layout.slideSize(0);
      var fixedCount = fixedSize && ceil(rect(Elements.track)[resolve("width")] / fixedSize);
      clones2 = fixedCount || options[resolve("autoWidth")] && Splide2.length || options.perPage * MULTIPLIER;
    }

    return clones2;
  }

  return {
    mount: mount,
    destroy: destroy
  };
}

function Move(Splide2, Components2, options) {
  var _EventInterface5 = EventInterface(Splide2),
      on = _EventInterface5.on,
      emit = _EventInterface5.emit;

  var set = Splide2.state.set;
  var _Components2$Layout = Components2.Layout,
      slideSize = _Components2$Layout.slideSize,
      getPadding = _Components2$Layout.getPadding,
      totalSize = _Components2$Layout.totalSize,
      listSize = _Components2$Layout.listSize,
      sliderSize = _Components2$Layout.sliderSize;
  var _Components2$Directio = Components2.Direction,
      resolve = _Components2$Directio.resolve,
      orient = _Components2$Directio.orient;
  var _Components2$Elements3 = Components2.Elements,
      list = _Components2$Elements3.list,
      track = _Components2$Elements3.track;
  var Transition;

  function mount() {
    Transition = Components2.Transition;
    on([EVENT_MOUNTED, EVENT_RESIZED, EVENT_UPDATED, EVENT_REFRESH], reposition);
  }

  function reposition() {
    if (!Components2.Controller.isBusy()) {
      Components2.Scroll.cancel();
      jump(Splide2.index);
      Components2.Slides.update();
    }
  }

  function move(dest, index, prev, callback) {
    if (dest !== index && canShift(dest > prev)) {
      cancel();
      translate(shift(getPosition(), dest > prev), true);
    }

    set(MOVING);
    emit(EVENT_MOVE, index, prev, dest);
    Transition.start(index, function () {
      set(IDLE);
      emit(EVENT_MOVED, index, prev, dest);
      callback && callback();
    });
  }

  function jump(index) {
    translate(toPosition(index, true));
  }

  function translate(position, preventLoop) {
    if (!Splide2.is(FADE)) {
      var destination = preventLoop ? position : loop(position);
      style(list, "transform", "translate" + resolve("X") + "(" + destination + "px)");
      position !== destination && emit(EVENT_SHIFTED);
    }
  }

  function loop(position) {
    if (Splide2.is(LOOP)) {
      var index = toIndex(position);
      var exceededMax = index > Components2.Controller.getEnd();
      var exceededMin = index < 0;

      if (exceededMin || exceededMax) {
        position = shift(position, exceededMax);
      }
    }

    return position;
  }

  function shift(position, backwards) {
    var excess = position - getLimit(backwards);
    var size = sliderSize();
    position -= orient(size * (ceil(abs(excess) / size) || 1)) * (backwards ? 1 : -1);
    return position;
  }

  function cancel() {
    translate(getPosition());
    Transition.cancel();
  }

  function toIndex(position) {
    var Slides = Components2.Slides.get();
    var index = 0;
    var minDistance = Infinity;

    for (var i = 0; i < Slides.length; i++) {
      var slideIndex = Slides[i].index;
      var distance = abs(toPosition(slideIndex, true) - position);

      if (distance <= minDistance) {
        minDistance = distance;
        index = slideIndex;
      } else {
        break;
      }
    }

    return index;
  }

  function toPosition(index, trimming) {
    var position = orient(totalSize(index - 1) - offset(index));
    return trimming ? trim(position) : position;
  }

  function getPosition() {
    var left = resolve("left");
    return rect(list)[left] - rect(track)[left] + orient(getPadding(false));
  }

  function trim(position) {
    if (options.trimSpace && Splide2.is(SLIDE)) {
      position = clamp(position, 0, orient(sliderSize() - listSize()));
    }

    return position;
  }

  function offset(index) {
    var focus = options.focus;
    return focus === "center" ? (listSize() - slideSize(index, true)) / 2 : +focus * slideSize(index) || 0;
  }

  function getLimit(max) {
    return toPosition(max ? Components2.Controller.getEnd() : 0, !!options.trimSpace);
  }

  function canShift(backwards) {
    var shifted = orient(shift(getPosition(), backwards));
    return backwards ? shifted >= 0 : shifted <= list[resolve("scrollWidth")] - rect(track)[resolve("width")];
  }

  function exceededLimit(max, position) {
    position = isUndefined(position) ? getPosition() : position;
    var exceededMin = max !== true && orient(position) < orient(getLimit(false));
    var exceededMax = max !== false && orient(position) > orient(getLimit(true));
    return exceededMin || exceededMax;
  }

  return {
    mount: mount,
    move: move,
    jump: jump,
    translate: translate,
    shift: shift,
    cancel: cancel,
    toIndex: toIndex,
    toPosition: toPosition,
    getPosition: getPosition,
    getLimit: getLimit,
    exceededLimit: exceededLimit,
    reposition: reposition
  };
}

function Controller(Splide2, Components2, options) {
  var _EventInterface6 = EventInterface(Splide2),
      on = _EventInterface6.on;

  var Move = Components2.Move;
  var getPosition = Move.getPosition,
      getLimit = Move.getLimit,
      toPosition = Move.toPosition;
  var _Components2$Slides = Components2.Slides,
      isEnough = _Components2$Slides.isEnough,
      getLength = _Components2$Slides.getLength;
  var isLoop = Splide2.is(LOOP);
  var isSlide = Splide2.is(SLIDE);
  var getNext = apply(getAdjacent, false);
  var getPrev = apply(getAdjacent, true);
  var currIndex = options.start || 0;
  var prevIndex = currIndex;
  var slideCount;
  var perMove;
  var perPage;

  function mount() {
    init();
    on([EVENT_UPDATED, EVENT_REFRESH], init);
  }

  function init() {
    slideCount = getLength(true);
    perMove = options.perMove;
    perPage = options.perPage;
    var index = clamp(currIndex, 0, slideCount - 1);

    if (index !== currIndex) {
      currIndex = index;
      Move.reposition();
    }
  }

  function go(control, allowSameIndex, callback) {
    if (!isBusy()) {
      var dest = parse(control);
      var index = loop(dest);

      if (index > -1 && (allowSameIndex || index !== currIndex)) {
        setIndex(index);
        Move.move(dest, index, prevIndex, callback);
      }
    }
  }

  function scroll(destination, duration, snap, callback) {
    Components2.Scroll.scroll(destination, duration, snap, function () {
      setIndex(loop(Move.toIndex(getPosition())));
      callback && callback();
    });
  }

  function parse(control) {
    var index = currIndex;

    if (isString(control)) {
      var _ref = control.match(/([+\-<>])(\d+)?/) || [],
          indicator = _ref[1],
          number = _ref[2];

      if (indicator === "+" || indicator === "-") {
        index = computeDestIndex(currIndex + +("" + indicator + (+number || 1)), currIndex);
      } else if (indicator === ">") {
        index = number ? toIndex(+number) : getNext(true);
      } else if (indicator === "<") {
        index = getPrev(true);
      }
    } else {
      index = isLoop ? control : clamp(control, 0, getEnd());
    }

    return index;
  }

  function getAdjacent(prev, destination) {
    var number = perMove || (hasFocus() ? 1 : perPage);
    var dest = computeDestIndex(currIndex + number * (prev ? -1 : 1), currIndex, !(perMove || hasFocus()));

    if (dest === -1 && isSlide) {
      if (!approximatelyEqual(getPosition(), getLimit(!prev), 1)) {
        return prev ? 0 : getEnd();
      }
    }

    return destination ? dest : loop(dest);
  }

  function computeDestIndex(dest, from, snapPage) {
    if (isEnough()) {
      var end = getEnd();
      var index = computeMovableDestIndex(dest);

      if (index !== dest) {
        from = dest;
        dest = index;
        snapPage = false;
      }

      if (dest < 0 || dest > end) {
        if (!perMove && (between(0, dest, from, true) || between(end, from, dest, true))) {
          dest = toIndex(toPage(dest));
        } else {
          if (isLoop) {
            dest = snapPage ? dest < 0 ? -(slideCount % perPage || perPage) : slideCount : dest;
          } else if (options.rewind) {
            dest = dest < 0 ? end : 0;
          } else {
            dest = -1;
          }
        }
      } else {
        if (snapPage && dest !== from) {
          dest = toIndex(toPage(from) + (dest < from ? -1 : 1));
        }
      }
    } else {
      dest = -1;
    }

    return dest;
  }

  function computeMovableDestIndex(dest) {
    if (isSlide && options.trimSpace === "move" && dest !== currIndex) {
      var position = getPosition();

      while (position === toPosition(dest, true) && between(dest, 0, Splide2.length - 1, !options.rewind)) {
        dest < currIndex ? --dest : ++dest;
      }
    }

    return dest;
  }

  function loop(index) {
    return isLoop ? (index + slideCount) % slideCount || 0 : index;
  }

  function getEnd() {
    return max(slideCount - (hasFocus() || isLoop && perMove ? 1 : perPage), 0);
  }

  function toIndex(page) {
    return clamp(hasFocus() ? page : perPage * page, 0, getEnd());
  }

  function toPage(index) {
    return hasFocus() ? index : floor((index >= getEnd() ? slideCount - 1 : index) / perPage);
  }

  function toDest(destination) {
    var closest = Move.toIndex(destination);
    return isSlide ? clamp(closest, 0, getEnd()) : closest;
  }

  function setIndex(index) {
    if (index !== currIndex) {
      prevIndex = currIndex;
      currIndex = index;
    }
  }

  function getIndex(prev) {
    return prev ? prevIndex : currIndex;
  }

  function hasFocus() {
    return !isUndefined(options.focus) || options.isNavigation;
  }

  function isBusy() {
    return Splide2.state.is([MOVING, SCROLLING]) && !!options.waitForTransition;
  }

  return {
    mount: mount,
    go: go,
    scroll: scroll,
    getNext: getNext,
    getPrev: getPrev,
    getAdjacent: getAdjacent,
    getEnd: getEnd,
    setIndex: setIndex,
    getIndex: getIndex,
    toIndex: toIndex,
    toPage: toPage,
    toDest: toDest,
    hasFocus: hasFocus,
    isBusy: isBusy
  };
}

var XML_NAME_SPACE = "http://www.w3.org/2000/svg";
var PATH = "m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z";
var SIZE = 40;

function Arrows(Splide2, Components2, options) {
  var event = EventInterface(Splide2);
  var on = event.on,
      bind = event.bind,
      emit = event.emit;
  var classes = options.classes,
      i18n = options.i18n;
  var Elements = Components2.Elements,
      Controller = Components2.Controller;
  var userArrows = Elements.arrows,
      track = Elements.track;
  var wrapper = userArrows;
  var prev = Elements.prev;
  var next = Elements.next;
  var created;
  var wrapperClasses;
  var arrows = {};

  function mount() {
    init();
    on(EVENT_UPDATED, remount);
  }

  function remount() {
    destroy();
    mount();
  }

  function init() {
    var enabled = options.arrows;

    if (enabled && !(prev && next)) {
      createArrows();
    }

    if (prev && next) {
      assign(arrows, {
        prev: prev,
        next: next
      });
      display(wrapper, enabled ? "" : "none");
      addClass(wrapper, wrapperClasses = CLASS_ARROWS + "--" + options.direction);

      if (enabled) {
        listen();
        update();
        setAttribute([prev, next], ARIA_CONTROLS, track.id);
        emit(EVENT_ARROWS_MOUNTED, prev, next);
      }
    }
  }

  function destroy() {
    event.destroy();
    removeClass(wrapper, wrapperClasses);

    if (created) {
      remove(userArrows ? [prev, next] : wrapper);
      prev = next = null;
    } else {
      removeAttribute([prev, next], ALL_ATTRIBUTES);
    }
  }

  function listen() {
    on([EVENT_MOVED, EVENT_REFRESH, EVENT_SCROLLED], update);
    bind(next, "click", apply(go, ">"));
    bind(prev, "click", apply(go, "<"));
  }

  function go(control) {
    Controller.go(control, true);
  }

  function createArrows() {
    wrapper = userArrows || create("div", classes.arrows);
    prev = createArrow(true);
    next = createArrow(false);
    created = true;
    append(wrapper, [prev, next]);
    !userArrows && before(wrapper, track);
  }

  function createArrow(prev2) {
    var arrow = "<button class=\"" + classes.arrow + " " + (prev2 ? classes.prev : classes.next) + "\" type=\"button\"><svg xmlns=\"" + XML_NAME_SPACE + "\" viewBox=\"0 0 " + SIZE + " " + SIZE + "\" width=\"" + SIZE + "\" height=\"" + SIZE + "\" focusable=\"false\"><path d=\"" + (options.arrowPath || PATH) + "\" />";
    return parseHtml(arrow);
  }

  function update() {
    var index = Splide2.index;
    var prevIndex = Controller.getPrev();
    var nextIndex = Controller.getNext();
    var prevLabel = prevIndex > -1 && index < prevIndex ? i18n.last : i18n.prev;
    var nextLabel = nextIndex > -1 && index > nextIndex ? i18n.first : i18n.next;
    prev.disabled = prevIndex < 0;
    next.disabled = nextIndex < 0;
    setAttribute(prev, ARIA_LABEL, prevLabel);
    setAttribute(next, ARIA_LABEL, nextLabel);
    emit(EVENT_ARROWS_UPDATED, prev, next, prevIndex, nextIndex);
  }

  return {
    arrows: arrows,
    mount: mount,
    destroy: destroy
  };
}

var INTERVAL_DATA_ATTRIBUTE = DATA_ATTRIBUTE + "-interval";

function Autoplay(Splide2, Components2, options) {
  var _EventInterface7 = EventInterface(Splide2),
      on = _EventInterface7.on,
      bind = _EventInterface7.bind,
      emit = _EventInterface7.emit;

  var interval = RequestInterval(options.interval, Splide2.go.bind(Splide2, ">"), onAnimationFrame);
  var isPaused = interval.isPaused;
  var Elements = Components2.Elements,
      _Components2$Elements4 = Components2.Elements,
      root = _Components2$Elements4.root,
      toggle = _Components2$Elements4.toggle;
  var autoplay = options.autoplay;
  var hovered;
  var focused;
  var stopped = autoplay === "pause";

  function mount() {
    if (autoplay) {
      listen();
      toggle && setAttribute(toggle, ARIA_CONTROLS, Elements.track.id);
      stopped || play();
      update();
    }
  }

  function listen() {
    if (options.pauseOnHover) {
      bind(root, "mouseenter mouseleave", function (e) {
        hovered = e.type === "mouseenter";
        autoToggle();
      });
    }

    if (options.pauseOnFocus) {
      bind(root, "focusin focusout", function (e) {
        focused = e.type === "focusin";
        autoToggle();
      });
    }

    if (toggle) {
      bind(toggle, "click", function () {
        stopped ? play() : pause(true);
      });
    }

    on([EVENT_MOVE, EVENT_SCROLL, EVENT_REFRESH], interval.rewind);
    on(EVENT_MOVE, onMove);
  }

  function play() {
    if (isPaused() && Components2.Slides.isEnough()) {
      interval.start(!options.resetProgress);
      focused = hovered = stopped = false;
      update();
      emit(EVENT_AUTOPLAY_PLAY);
    }
  }

  function pause(stop) {
    if (stop === void 0) {
      stop = true;
    }

    stopped = !!stop;
    update();

    if (!isPaused()) {
      interval.pause();
      emit(EVENT_AUTOPLAY_PAUSE);
    }
  }

  function autoToggle() {
    if (!stopped) {
      hovered || focused ? pause(false) : play();
    }
  }

  function update() {
    if (toggle) {
      toggleClass(toggle, CLASS_ACTIVE, !stopped);
      setAttribute(toggle, ARIA_LABEL, options.i18n[stopped ? "play" : "pause"]);
    }
  }

  function onAnimationFrame(rate) {
    var bar = Elements.bar;
    bar && style(bar, "width", rate * 100 + "%");
    emit(EVENT_AUTOPLAY_PLAYING, rate);
  }

  function onMove(index) {
    var Slide = Components2.Slides.getAt(index);
    interval.set(Slide && +getAttribute(Slide.slide, INTERVAL_DATA_ATTRIBUTE) || options.interval);
  }

  return {
    mount: mount,
    destroy: interval.cancel,
    play: play,
    pause: pause,
    isPaused: isPaused
  };
}

function Cover(Splide2, Components2, options) {
  var _EventInterface8 = EventInterface(Splide2),
      on = _EventInterface8.on;

  function mount() {
    if (options.cover) {
      on(EVENT_LAZYLOAD_LOADED, apply(toggle, true));
      on([EVENT_MOUNTED, EVENT_UPDATED, EVENT_REFRESH], apply(cover, true));
    }
  }

  function cover(cover2) {
    Components2.Slides.forEach(function (Slide) {
      var img = child(Slide.container || Slide.slide, "img");

      if (img && img.src) {
        toggle(cover2, img, Slide);
      }
    });
  }

  function toggle(cover2, img, Slide) {
    Slide.style("background", cover2 ? "center/cover no-repeat url(\"" + img.src + "\")" : "", true);
    display(img, cover2 ? "none" : "");
  }

  return {
    mount: mount,
    destroy: apply(cover, false)
  };
}

var BOUNCE_DIFF_THRESHOLD = 10;
var BOUNCE_DURATION = 600;
var FRICTION_FACTOR = 0.6;
var BASE_VELOCITY = 1.5;
var MIN_DURATION = 800;

function Scroll(Splide2, Components2, options) {
  var _EventInterface9 = EventInterface(Splide2),
      on = _EventInterface9.on,
      emit = _EventInterface9.emit;

  var set = Splide2.state.set;
  var Move = Components2.Move;
  var getPosition = Move.getPosition,
      getLimit = Move.getLimit,
      exceededLimit = Move.exceededLimit,
      translate = Move.translate;
  var interval;
  var callback;
  var friction = 1;

  function mount() {
    on(EVENT_MOVE, clear);
    on([EVENT_UPDATED, EVENT_REFRESH], cancel);
  }

  function scroll(destination, duration, snap, onScrolled, noConstrain) {
    var from = getPosition();
    clear();

    if (snap) {
      var size = Components2.Layout.sliderSize();
      var offset = sign(destination) * size * floor(abs(destination) / size) || 0;
      destination = Move.toPosition(Components2.Controller.toDest(destination % size)) + offset;
    }

    var noDistance = approximatelyEqual(from, destination, 1);
    friction = 1;
    duration = noDistance ? 0 : duration || max(abs(destination - from) / BASE_VELOCITY, MIN_DURATION);
    callback = onScrolled;
    interval = RequestInterval(duration, onEnd, apply(update, from, destination, noConstrain), 1);
    set(SCROLLING);
    emit(EVENT_SCROLL);
    interval.start();
  }

  function onEnd() {
    set(IDLE);
    callback && callback();
    emit(EVENT_SCROLLED);
  }

  function update(from, to, noConstrain, rate) {
    var position = getPosition();
    var target = from + (to - from) * easing(rate);
    var diff = (target - position) * friction;
    translate(position + diff);

    if (Splide2.is(SLIDE) && !noConstrain && exceededLimit()) {
      friction *= FRICTION_FACTOR;

      if (abs(diff) < BOUNCE_DIFF_THRESHOLD) {
        scroll(getLimit(exceededLimit(true)), BOUNCE_DURATION, false, callback, true);
      }
    }
  }

  function clear() {
    if (interval) {
      interval.cancel();
    }
  }

  function cancel() {
    if (interval && !interval.isPaused()) {
      clear();
      onEnd();
    }
  }

  function easing(t) {
    var easingFunc = options.easingFunc;
    return easingFunc ? easingFunc(t) : 1 - Math.pow(1 - t, 4);
  }

  return {
    mount: mount,
    destroy: clear,
    scroll: scroll,
    cancel: cancel
  };
}

var SCROLL_LISTENER_OPTIONS = {
  passive: false,
  capture: true
};

function Drag(Splide2, Components2, options) {
  var _EventInterface10 = EventInterface(Splide2),
      on = _EventInterface10.on,
      emit = _EventInterface10.emit,
      bind = _EventInterface10.bind,
      unbind = _EventInterface10.unbind;

  var state = Splide2.state;
  var Move = Components2.Move,
      Scroll = Components2.Scroll,
      Controller = Components2.Controller,
      track = Components2.Elements.track,
      reduce = Components2.Media.reduce;
  var _Components2$Directio2 = Components2.Direction,
      resolve = _Components2$Directio2.resolve,
      orient = _Components2$Directio2.orient;
  var getPosition = Move.getPosition,
      exceededLimit = Move.exceededLimit;
  var basePosition;
  var baseEvent;
  var prevBaseEvent;
  var isFree;
  var dragging;
  var exceeded = false;
  var clickPrevented;
  var disabled;
  var target;

  function mount() {
    bind(track, POINTER_MOVE_EVENTS, noop, SCROLL_LISTENER_OPTIONS);
    bind(track, POINTER_UP_EVENTS, noop, SCROLL_LISTENER_OPTIONS);
    bind(track, POINTER_DOWN_EVENTS, onPointerDown, SCROLL_LISTENER_OPTIONS);
    bind(track, "click", onClick, {
      capture: true
    });
    bind(track, "dragstart", prevent);
    on([EVENT_MOUNTED, EVENT_UPDATED], init);
  }

  function init() {
    var drag = options.drag;
    disable(!drag);
    isFree = drag === "free";
  }

  function onPointerDown(e) {
    clickPrevented = false;

    if (!disabled) {
      var isTouch = isTouchEvent(e);

      if (isDraggable(e.target) && (isTouch || !e.button)) {
        if (!Controller.isBusy()) {
          target = isTouch ? track : window;
          dragging = state.is([MOVING, SCROLLING]);
          prevBaseEvent = null;
          bind(target, POINTER_MOVE_EVENTS, onPointerMove, SCROLL_LISTENER_OPTIONS);
          bind(target, POINTER_UP_EVENTS, onPointerUp, SCROLL_LISTENER_OPTIONS);
          Move.cancel();
          Scroll.cancel();
          save(e);
        } else {
          prevent(e, true);
        }
      }
    }
  }

  function onPointerMove(e) {
    if (!state.is(DRAGGING)) {
      state.set(DRAGGING);
      emit(EVENT_DRAG);
    }

    if (e.cancelable) {
      if (dragging) {
        Move.translate(basePosition + constrain(diffCoord(e)));
        var expired = diffTime(e) > LOG_INTERVAL;
        var hasExceeded = exceeded !== (exceeded = exceededLimit());

        if (expired || hasExceeded) {
          save(e);
        }

        clickPrevented = true;
        emit(EVENT_DRAGGING);
        prevent(e);
      } else if (isSliderDirection(e)) {
        dragging = shouldStart(e);
        prevent(e);
      }
    }
  }

  function onPointerUp(e) {
    if (state.is(DRAGGING)) {
      state.set(IDLE);
      emit(EVENT_DRAGGED);
    }

    if (dragging) {
      move(e);
      prevent(e);
    }

    unbind(target, POINTER_MOVE_EVENTS, onPointerMove);
    unbind(target, POINTER_UP_EVENTS, onPointerUp);
    dragging = false;
  }

  function onClick(e) {
    if (!disabled && clickPrevented) {
      prevent(e, true);
    }
  }

  function save(e) {
    prevBaseEvent = baseEvent;
    baseEvent = e;
    basePosition = getPosition();
  }

  function move(e) {
    var velocity = computeVelocity(e);
    var destination = computeDestination(velocity);
    var rewind = options.rewind && options.rewindByDrag;
    reduce(false);

    if (isFree) {
      Controller.scroll(destination, 0, options.snap);
    } else if (Splide2.is(FADE)) {
      Controller.go(orient(sign(velocity)) < 0 ? rewind ? "<" : "-" : rewind ? ">" : "+");
    } else if (Splide2.is(SLIDE) && exceeded && rewind) {
      Controller.go(exceededLimit(true) ? ">" : "<");
    } else {
      Controller.go(Controller.toDest(destination), true);
    }

    reduce(true);
  }

  function shouldStart(e) {
    var thresholds = options.dragMinThreshold;
    var isObj = isObject(thresholds);
    var mouse = isObj && thresholds.mouse || 0;
    var touch = (isObj ? thresholds.touch : +thresholds) || 10;
    return abs(diffCoord(e)) > (isTouchEvent(e) ? touch : mouse);
  }

  function isSliderDirection(e) {
    return abs(diffCoord(e)) > abs(diffCoord(e, true));
  }

  function computeVelocity(e) {
    if (Splide2.is(LOOP) || !exceeded) {
      var time = diffTime(e);

      if (time && time < LOG_INTERVAL) {
        return diffCoord(e) / time;
      }
    }

    return 0;
  }

  function computeDestination(velocity) {
    return getPosition() + sign(velocity) * min(abs(velocity) * (options.flickPower || 600), isFree ? Infinity : Components2.Layout.listSize() * (options.flickMaxPages || 1));
  }

  function diffCoord(e, orthogonal) {
    return coordOf(e, orthogonal) - coordOf(getBaseEvent(e), orthogonal);
  }

  function diffTime(e) {
    return timeOf(e) - timeOf(getBaseEvent(e));
  }

  function getBaseEvent(e) {
    return baseEvent === e && prevBaseEvent || baseEvent;
  }

  function coordOf(e, orthogonal) {
    return (isTouchEvent(e) ? e.changedTouches[0] : e)["page" + resolve(orthogonal ? "Y" : "X")];
  }

  function constrain(diff) {
    return diff / (exceeded && Splide2.is(SLIDE) ? FRICTION : 1);
  }

  function isDraggable(target2) {
    var noDrag = options.noDrag;
    return !matches(target2, "." + CLASS_PAGINATION_PAGE + ", ." + CLASS_ARROW) && (!noDrag || !matches(target2, noDrag));
  }

  function isTouchEvent(e) {
    return typeof TouchEvent !== "undefined" && e instanceof TouchEvent;
  }

  function isDragging() {
    return dragging;
  }

  function disable(value) {
    disabled = value;
  }

  return {
    mount: mount,
    disable: disable,
    isDragging: isDragging
  };
}

var NORMALIZATION_MAP = {
  Spacebar: " ",
  Right: ARROW_RIGHT,
  Left: ARROW_LEFT,
  Up: ARROW_UP,
  Down: ARROW_DOWN
};

function normalizeKey(key) {
  key = isString(key) ? key : key.key;
  return NORMALIZATION_MAP[key] || key;
}

var KEYBOARD_EVENT = "keydown";

function Keyboard(Splide2, Components2, options) {
  var _EventInterface11 = EventInterface(Splide2),
      on = _EventInterface11.on,
      bind = _EventInterface11.bind,
      unbind = _EventInterface11.unbind;

  var root = Splide2.root;
  var resolve = Components2.Direction.resolve;
  var target;
  var disabled;

  function mount() {
    init();
    on(EVENT_UPDATED, destroy);
    on(EVENT_UPDATED, init);
    on(EVENT_MOVE, onMove);
  }

  function init() {
    var keyboard = options.keyboard;

    if (keyboard) {
      target = keyboard === "global" ? window : root;
      bind(target, KEYBOARD_EVENT, onKeydown);
    }
  }

  function destroy() {
    unbind(target, KEYBOARD_EVENT);
  }

  function disable(value) {
    disabled = value;
  }

  function onMove() {
    var _disabled = disabled;
    disabled = true;
    nextTick(function () {
      disabled = _disabled;
    });
  }

  function onKeydown(e) {
    if (!disabled) {
      var key = normalizeKey(e);

      if (key === resolve(ARROW_LEFT)) {
        Splide2.go("<");
      } else if (key === resolve(ARROW_RIGHT)) {
        Splide2.go(">");
      }
    }
  }

  return {
    mount: mount,
    destroy: destroy,
    disable: disable
  };
}

var SRC_DATA_ATTRIBUTE = DATA_ATTRIBUTE + "-lazy";
var SRCSET_DATA_ATTRIBUTE = SRC_DATA_ATTRIBUTE + "-srcset";
var IMAGE_SELECTOR = "[" + SRC_DATA_ATTRIBUTE + "], [" + SRCSET_DATA_ATTRIBUTE + "]";

function LazyLoad(Splide2, Components2, options) {
  var _EventInterface12 = EventInterface(Splide2),
      on = _EventInterface12.on,
      off = _EventInterface12.off,
      bind = _EventInterface12.bind,
      emit = _EventInterface12.emit;

  var isSequential = options.lazyLoad === "sequential";
  var events = [EVENT_MOUNTED, EVENT_REFRESH, EVENT_MOVED, EVENT_SCROLLED];
  var entries = [];

  function mount() {
    if (options.lazyLoad) {
      init();
      on(EVENT_REFRESH, init);
      isSequential || on(events, observe);
    }
  }

  function init() {
    empty(entries);
    Components2.Slides.forEach(function (Slide) {
      queryAll(Slide.slide, IMAGE_SELECTOR).forEach(function (img) {
        var src = getAttribute(img, SRC_DATA_ATTRIBUTE);
        var srcset = getAttribute(img, SRCSET_DATA_ATTRIBUTE);

        if (src !== img.src || srcset !== img.srcset) {
          var className = options.classes.spinner;
          var parent = img.parentElement;
          var spinner = child(parent, "." + className) || create("span", className, parent);
          entries.push([img, Slide, spinner]);
          img.src || display(img, "none");
        }
      });
    });
    isSequential && loadNext();
  }

  function observe() {
    entries = entries.filter(function (data) {
      var distance = options.perPage * ((options.preloadPages || 1) + 1) - 1;
      return data[1].isWithin(Splide2.index, distance) ? load(data) : true;
    });
    entries.length || off(events);
  }

  function load(data) {
    var img = data[0];
    addClass(data[1].slide, CLASS_LOADING);
    bind(img, "load error", apply(onLoad, data));
    setAttribute(img, "src", getAttribute(img, SRC_DATA_ATTRIBUTE));
    setAttribute(img, "srcset", getAttribute(img, SRCSET_DATA_ATTRIBUTE));
    removeAttribute(img, SRC_DATA_ATTRIBUTE);
    removeAttribute(img, SRCSET_DATA_ATTRIBUTE);
  }

  function onLoad(data, e) {
    var img = data[0],
        Slide = data[1];
    removeClass(Slide.slide, CLASS_LOADING);

    if (e.type !== "error") {
      remove(data[2]);
      display(img, "");
      emit(EVENT_LAZYLOAD_LOADED, img, Slide);
      emit(EVENT_RESIZE);
    }

    isSequential && loadNext();
  }

  function loadNext() {
    entries.length && load(entries.shift());
  }

  return {
    mount: mount,
    destroy: apply(empty, entries)
  };
}

function Pagination(Splide2, Components2, options) {
  var event = EventInterface(Splide2);
  var on = event.on,
      emit = event.emit,
      bind = event.bind;
  var Slides = Components2.Slides,
      Elements = Components2.Elements,
      Controller = Components2.Controller;
  var hasFocus = Controller.hasFocus,
      getIndex = Controller.getIndex,
      go = Controller.go;
  var resolve = Components2.Direction.resolve;
  var items = [];
  var list;
  var paginationClasses;

  function mount() {
    destroy();
    on([EVENT_UPDATED, EVENT_REFRESH], mount);

    if (options.pagination && Slides.isEnough()) {
      on([EVENT_MOVE, EVENT_SCROLL, EVENT_SCROLLED], update);
      createPagination();
      update();
      emit(EVENT_PAGINATION_MOUNTED, {
        list: list,
        items: items
      }, getAt(Splide2.index));
    }
  }

  function destroy() {
    if (list) {
      remove(Elements.pagination ? slice(list.children) : list);
      removeClass(list, paginationClasses);
      empty(items);
      list = null;
    }

    event.destroy();
  }

  function createPagination() {
    var length = Splide2.length;
    var classes = options.classes,
        i18n = options.i18n,
        perPage = options.perPage;
    var max = hasFocus() ? length : ceil(length / perPage);
    list = Elements.pagination || create("ul", classes.pagination, Elements.track.parentElement);
    addClass(list, paginationClasses = CLASS_PAGINATION + "--" + getDirection());
    setAttribute(list, ROLE, "tablist");
    setAttribute(list, ARIA_LABEL, i18n.select);
    setAttribute(list, ARIA_ORIENTATION, getDirection() === TTB ? "vertical" : "");

    for (var i = 0; i < max; i++) {
      var li = create("li", null, list);
      var button = create("button", {
        class: classes.page,
        type: "button"
      }, li);
      var controls = Slides.getIn(i).map(function (Slide) {
        return Slide.slide.id;
      });
      var text = !hasFocus() && perPage > 1 ? i18n.pageX : i18n.slideX;
      bind(button, "click", apply(onClick, i));

      if (options.paginationKeyboard) {
        bind(button, "keydown", apply(onKeydown, i));
      }

      setAttribute(li, ROLE, "presentation");
      setAttribute(button, ROLE, "tab");
      setAttribute(button, ARIA_CONTROLS, controls.join(" "));
      setAttribute(button, ARIA_LABEL, format(text, i + 1));
      setAttribute(button, TAB_INDEX, -1);
      items.push({
        li: li,
        button: button,
        page: i
      });
    }
  }

  function onClick(page) {
    go(">" + page, true);
  }

  function onKeydown(page, e) {
    var length = items.length;
    var key = normalizeKey(e);
    var dir = getDirection();
    var nextPage = -1;

    if (key === resolve(ARROW_RIGHT, false, dir)) {
      nextPage = ++page % length;
    } else if (key === resolve(ARROW_LEFT, false, dir)) {
      nextPage = (--page + length) % length;
    } else if (key === "Home") {
      nextPage = 0;
    } else if (key === "End") {
      nextPage = length - 1;
    }

    var item = items[nextPage];

    if (item) {
      focus(item.button);
      go(">" + nextPage);
      prevent(e, true);
    }
  }

  function getDirection() {
    return options.paginationDirection || options.direction;
  }

  function getAt(index) {
    return items[Controller.toPage(index)];
  }

  function update() {
    var prev = getAt(getIndex(true));
    var curr = getAt(getIndex());

    if (prev) {
      var button = prev.button;
      removeClass(button, CLASS_ACTIVE);
      removeAttribute(button, ARIA_SELECTED);
      setAttribute(button, TAB_INDEX, -1);
    }

    if (curr) {
      var _button = curr.button;
      addClass(_button, CLASS_ACTIVE);
      setAttribute(_button, ARIA_SELECTED, true);
      setAttribute(_button, TAB_INDEX, "");
    }

    emit(EVENT_PAGINATION_UPDATED, {
      list: list,
      items: items
    }, prev, curr);
  }

  return {
    items: items,
    mount: mount,
    destroy: destroy,
    getAt: getAt,
    update: update
  };
}

var TRIGGER_KEYS = [" ", "Enter"];

function Sync(Splide2, Components2, options) {
  var isNavigation = options.isNavigation,
      slideFocus = options.slideFocus;
  var events = [];

  function setup() {
    Splide2.options = {
      slideFocus: isUndefined(slideFocus) ? isNavigation : slideFocus
    };
  }

  function mount() {
    Splide2.splides.forEach(function (target) {
      if (!target.isParent) {
        sync(Splide2, target.splide);
        sync(target.splide, Splide2);
      }
    });

    if (isNavigation) {
      navigate();
    }
  }

  function destroy() {
    events.forEach(function (event) {
      event.destroy();
    });
    empty(events);
  }

  function remount() {
    destroy();
    mount();
  }

  function sync(splide, target) {
    var event = EventInterface(splide);
    event.on(EVENT_MOVE, function (index, prev, dest) {
      target.go(target.is(LOOP) ? dest : index);
    });
    events.push(event);
  }

  function navigate() {
    var event = EventInterface(Splide2);
    var on = event.on;
    on(EVENT_CLICK, onClick);
    on(EVENT_SLIDE_KEYDOWN, onKeydown);
    on([EVENT_MOUNTED, EVENT_UPDATED], update);
    events.push(event);
    event.emit(EVENT_NAVIGATION_MOUNTED, Splide2.splides);
  }

  function update() {
    setAttribute(Components2.Elements.list, ARIA_ORIENTATION, options.direction === TTB ? "vertical" : "");
  }

  function onClick(Slide) {
    Splide2.go(Slide.index);
  }

  function onKeydown(Slide, e) {
    if (includes(TRIGGER_KEYS, normalizeKey(e))) {
      onClick(Slide);
      prevent(e);
    }
  }

  return {
    setup: setup,
    mount: mount,
    destroy: destroy,
    remount: remount
  };
}

function Wheel(Splide2, Components2, options) {
  var _EventInterface13 = EventInterface(Splide2),
      bind = _EventInterface13.bind;

  var lastTime = 0;

  function mount() {
    if (options.wheel) {
      bind(Components2.Elements.track, "wheel", onWheel, SCROLL_LISTENER_OPTIONS);
    }
  }

  function onWheel(e) {
    if (e.cancelable) {
      var deltaY = e.deltaY;
      var backwards = deltaY < 0;
      var timeStamp = timeOf(e);

      var _min = options.wheelMinThreshold || 0;

      var sleep = options.wheelSleep || 0;

      if (abs(deltaY) > _min && timeStamp - lastTime > sleep) {
        Splide2.go(backwards ? "<" : ">");
        lastTime = timeStamp;
      }

      shouldPrevent(backwards) && prevent(e);
    }
  }

  function shouldPrevent(backwards) {
    return !options.releaseWheel || Splide2.state.is(MOVING) || Components2.Controller.getAdjacent(backwards) !== -1;
  }

  return {
    mount: mount
  };
}

var SR_REMOVAL_DELAY = 90;

function Live(Splide2, Components2, options) {
  var _EventInterface14 = EventInterface(Splide2),
      on = _EventInterface14.on;

  var track = Components2.Elements.track;
  var enabled = options.live && !options.isNavigation;
  var sr = create("span", CLASS_SR);
  var interval = RequestInterval(SR_REMOVAL_DELAY, apply(toggle, false));

  function mount() {
    if (enabled) {
      disable(!Components2.Autoplay.isPaused());
      setAttribute(track, ARIA_ATOMIC, true);
      sr.textContent = "\u2026";
      on(EVENT_AUTOPLAY_PLAY, apply(disable, true));
      on(EVENT_AUTOPLAY_PAUSE, apply(disable, false));
      on([EVENT_MOVED, EVENT_SCROLLED], apply(toggle, true));
    }
  }

  function toggle(active) {
    setAttribute(track, ARIA_BUSY, active);

    if (active) {
      append(track, sr);
      interval.start();
    } else {
      remove(sr);
    }
  }

  function destroy() {
    removeAttribute(track, [ARIA_LIVE, ARIA_ATOMIC, ARIA_BUSY]);
    remove(sr);
  }

  function disable(disabled) {
    if (enabled) {
      setAttribute(track, ARIA_LIVE, disabled ? "off" : "polite");
    }
  }

  return {
    mount: mount,
    disable: disable,
    destroy: destroy
  };
}

var ComponentConstructors = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Media: Media,
  Direction: Direction,
  Elements: Elements,
  Slides: Slides,
  Layout: Layout,
  Clones: Clones,
  Move: Move,
  Controller: Controller,
  Arrows: Arrows,
  Autoplay: Autoplay,
  Cover: Cover,
  Scroll: Scroll,
  Drag: Drag,
  Keyboard: Keyboard,
  LazyLoad: LazyLoad,
  Pagination: Pagination,
  Sync: Sync,
  Wheel: Wheel,
  Live: Live
});
var I18N = {
  prev: "Previous slide",
  next: "Next slide",
  first: "Go to first slide",
  last: "Go to last slide",
  slideX: "Go to slide %s",
  pageX: "Go to page %s",
  play: "Start autoplay",
  pause: "Pause autoplay",
  carousel: "carousel",
  slide: "slide",
  select: "Select a slide to show",
  slideLabel: "%s of %s"
};
var DEFAULTS = {
  type: "slide",
  role: "region",
  speed: 400,
  perPage: 1,
  cloneStatus: true,
  arrows: true,
  pagination: true,
  paginationKeyboard: true,
  interval: 5e3,
  pauseOnHover: true,
  pauseOnFocus: true,
  resetProgress: true,
  easing: "cubic-bezier(0.25, 1, 0.5, 1)",
  drag: true,
  direction: "ltr",
  trimSpace: true,
  focusableNodes: "a, button, textarea, input, select, iframe",
  live: true,
  classes: CLASSES,
  i18n: I18N,
  reducedMotion: {
    speed: 0,
    rewindSpeed: 0,
    autoplay: "pause"
  }
};

function Fade(Splide2, Components2, options) {
  var _EventInterface15 = EventInterface(Splide2),
      on = _EventInterface15.on;

  function mount() {
    on([EVENT_MOUNTED, EVENT_REFRESH], function () {
      nextTick(function () {
        Components2.Slides.style("transition", "opacity " + options.speed + "ms " + options.easing);
      });
    });
  }

  function start(index, done) {
    var track = Components2.Elements.track;
    style(track, "height", unit(rect(track).height));
    nextTick(function () {
      done();
      style(track, "height", "");
    });
  }

  return {
    mount: mount,
    start: start,
    cancel: noop
  };
}

function Slide(Splide2, Components2, options) {
  var _EventInterface16 = EventInterface(Splide2),
      bind = _EventInterface16.bind;

  var Move = Components2.Move,
      Controller = Components2.Controller,
      Scroll = Components2.Scroll;
  var list = Components2.Elements.list;
  var transition = apply(style, list, "transition");
  var endCallback;

  function mount() {
    bind(list, "transitionend", function (e) {
      if (e.target === list && endCallback) {
        cancel();
        endCallback();
      }
    });
  }

  function start(index, done) {
    var destination = Move.toPosition(index, true);
    var position = Move.getPosition();
    var speed = getSpeed(index);

    if (abs(destination - position) >= 1 && speed >= 1) {
      if (options.useScroll) {
        Scroll.scroll(destination, speed, false, done);
      } else {
        transition("transform " + speed + "ms " + options.easing);
        Move.translate(destination, true);
        endCallback = done;
      }
    } else {
      Move.jump(index);
      done();
    }
  }

  function cancel() {
    transition("");
    Scroll.cancel();
  }

  function getSpeed(index) {
    var rewindSpeed = options.rewindSpeed;

    if (Splide2.is(SLIDE) && rewindSpeed) {
      var prev = Controller.getIndex(true);
      var end = Controller.getEnd();

      if (prev === 0 && index >= end || prev >= end && index === 0) {
        return rewindSpeed;
      }
    }

    return options.speed;
  }

  return {
    mount: mount,
    start: start,
    cancel: cancel
  };
}

var _Splide = /*#__PURE__*/function () {
  function _Splide(target, options) {
    this.event = EventInterface();
    this.Components = {};
    this.state = State(CREATED);
    this.splides = [];
    this._o = {};
    this._E = {};
    var root = isString(target) ? query(document, target) : target;
    assert(root, root + " is invalid.");
    this.root = root;
    options = merge({
      label: getAttribute(root, ARIA_LABEL) || "",
      labelledby: getAttribute(root, ARIA_LABELLEDBY) || ""
    }, DEFAULTS, _Splide.defaults, options || {});

    try {
      merge(options, JSON.parse(getAttribute(root, DATA_ATTRIBUTE)));
    } catch (e) {
      assert(false, "Invalid JSON");
    }

    this._o = Object.create(merge({}, options));
  }

  var _proto = _Splide.prototype;

  _proto.mount = function mount(Extensions, Transition) {
    var _this = this;

    var state = this.state,
        Components2 = this.Components;
    assert(state.is([CREATED, DESTROYED]), "Already mounted!");
    state.set(CREATED);
    this._C = Components2;
    this._T = Transition || this._T || (this.is(FADE) ? Fade : Slide);
    this._E = Extensions || this._E;
    var Constructors = assign({}, ComponentConstructors, this._E, {
      Transition: this._T
    });
    forOwn(Constructors, function (Component, key) {
      var component = Component(_this, Components2, _this._o);
      Components2[key] = component;
      component.setup && component.setup();
    });
    forOwn(Components2, function (component) {
      component.mount && component.mount();
    });
    this.emit(EVENT_MOUNTED);
    addClass(this.root, CLASS_INITIALIZED);
    state.set(IDLE);
    this.emit(EVENT_READY);
    return this;
  };

  _proto.sync = function sync(splide) {
    this.splides.push({
      splide: splide
    });
    splide.splides.push({
      splide: this,
      isParent: true
    });

    if (this.state.is(IDLE)) {
      this._C.Sync.remount();

      splide.Components.Sync.remount();
    }

    return this;
  };

  _proto.go = function go(control) {
    this._C.Controller.go(control);

    return this;
  };

  _proto.on = function on(events, callback) {
    this.event.on(events, callback);
    return this;
  };

  _proto.off = function off(events) {
    this.event.off(events);
    return this;
  };

  _proto.emit = function emit(event) {
    var _this$event;

    (_this$event = this.event).emit.apply(_this$event, [event].concat(slice(arguments, 1)));

    return this;
  };

  _proto.add = function add(slides, index) {
    this._C.Slides.add(slides, index);

    return this;
  };

  _proto.remove = function remove(matcher) {
    this._C.Slides.remove(matcher);

    return this;
  };

  _proto.is = function is(type) {
    return this._o.type === type;
  };

  _proto.refresh = function refresh() {
    this.emit(EVENT_REFRESH);
    return this;
  };

  _proto.destroy = function destroy(completely) {
    if (completely === void 0) {
      completely = true;
    }

    var event = this.event,
        state = this.state;

    if (state.is(CREATED)) {
      EventInterface(this).on(EVENT_READY, this.destroy.bind(this, completely));
    } else {
      forOwn(this._C, function (component) {
        component.destroy && component.destroy(completely);
      }, true);
      event.emit(EVENT_DESTROY);
      event.destroy();
      completely && empty(this.splides);
      state.set(DESTROYED);
    }

    return this;
  };

  _createClass(_Splide, [{
    key: "options",
    get: function get() {
      return this._o;
    },
    set: function set(options) {
      this._C.Media.set(options, true);
    }
  }, {
    key: "length",
    get: function get() {
      return this._C.Slides.getLength(true);
    }
  }, {
    key: "index",
    get: function get() {
      return this._C.Controller.getIndex();
    }
  }]);

  return _Splide;
}();

var Splide = _Splide;
Splide.defaults = {};
Splide.STATES = STATES;
var CLASS_RENDERED = "is-rendered";
var RENDERER_DEFAULT_CONFIG = {
  listTag: "ul",
  slideTag: "li"
};

var Style = /*#__PURE__*/function () {
  function Style(id, options) {
    this.styles = {};
    this.id = id;
    this.options = options;
  }

  var _proto2 = Style.prototype;

  _proto2.rule = function rule(selector, prop, value, breakpoint) {
    breakpoint = breakpoint || "default";
    var selectors = this.styles[breakpoint] = this.styles[breakpoint] || {};
    var styles = selectors[selector] = selectors[selector] || {};
    styles[prop] = value;
  };

  _proto2.build = function build() {
    var _this2 = this;

    var css = "";

    if (this.styles.default) {
      css += this.buildSelectors(this.styles.default);
    }

    Object.keys(this.styles).sort(function (n, m) {
      return _this2.options.mediaQuery === "min" ? +n - +m : +m - +n;
    }).forEach(function (breakpoint) {
      if (breakpoint !== "default") {
        css += "@media screen and (max-width: " + breakpoint + "px) {";
        css += _this2.buildSelectors(_this2.styles[breakpoint]);
        css += "}";
      }
    });
    return css;
  };

  _proto2.buildSelectors = function buildSelectors(selectors) {
    var _this3 = this;

    var css = "";
    forOwn(selectors, function (styles, selector) {
      selector = ("#" + _this3.id + " " + selector).trim();
      css += selector + " {";
      forOwn(styles, function (value, prop) {
        if (value || value === 0) {
          css += prop + ": " + value + ";";
        }
      });
      css += "}";
    });
    return css;
  };

  return Style;
}();

var SplideRenderer = /*#__PURE__*/function () {
  function SplideRenderer(contents, options, config, defaults) {
    this.slides = [];
    this.options = {};
    this.breakpoints = [];
    merge(DEFAULTS, defaults || {});
    merge(merge(this.options, DEFAULTS), options || {});
    this.contents = contents;
    this.config = assign({}, RENDERER_DEFAULT_CONFIG, config || {});
    this.id = this.config.id || uniqueId("splide");
    this.Style = new Style(this.id, this.options);
    this.Direction = Direction(null, null, this.options);
    assert(this.contents.length, "Provide at least 1 content.");
    this.init();
  }

  SplideRenderer.clean = function clean(splide) {
    var _EventInterface17 = EventInterface(splide),
        on = _EventInterface17.on;

    var root = splide.root;
    var clones = queryAll(root, "." + CLASS_CLONE);
    on(EVENT_MOUNTED, function () {
      remove(child(root, "style"));
    });
    remove(clones);
  };

  var _proto3 = SplideRenderer.prototype;

  _proto3.init = function init() {
    this.parseBreakpoints();
    this.initSlides();
    this.registerRootStyles();
    this.registerTrackStyles();
    this.registerSlideStyles();
    this.registerListStyles();
  };

  _proto3.initSlides = function initSlides() {
    var _this4 = this;

    push(this.slides, this.contents.map(function (content, index) {
      content = isString(content) ? {
        html: content
      } : content;
      content.styles = content.styles || {};
      content.attrs = content.attrs || {};

      _this4.cover(content);

      var classes = _this4.options.classes.slide + " " + (index === 0 ? CLASS_ACTIVE : "");
      assign(content.attrs, {
        class: (classes + " " + (content.attrs.class || "")).trim(),
        style: _this4.buildStyles(content.styles)
      });
      return content;
    }));

    if (this.isLoop()) {
      this.generateClones(this.slides);
    }
  };

  _proto3.registerRootStyles = function registerRootStyles() {
    var _this5 = this;

    this.breakpoints.forEach(function (_ref2) {
      var width = _ref2[0],
          options = _ref2[1];

      _this5.Style.rule(" ", "max-width", unit(options.width), width);
    });
  };

  _proto3.registerTrackStyles = function registerTrackStyles() {
    var _this6 = this;

    var Style2 = this.Style;
    var selector = "." + CLASS_TRACK;
    this.breakpoints.forEach(function (_ref3) {
      var width = _ref3[0],
          options = _ref3[1];
      Style2.rule(selector, _this6.resolve("paddingLeft"), _this6.cssPadding(options, false), width);
      Style2.rule(selector, _this6.resolve("paddingRight"), _this6.cssPadding(options, true), width);
      Style2.rule(selector, "height", _this6.cssTrackHeight(options), width);
    });
  };

  _proto3.registerListStyles = function registerListStyles() {
    var _this7 = this;

    var Style2 = this.Style;
    var selector = "." + CLASS_LIST;
    this.breakpoints.forEach(function (_ref4) {
      var width = _ref4[0],
          options = _ref4[1];
      Style2.rule(selector, "transform", _this7.buildTranslate(options), width);

      if (!_this7.cssSlideHeight(options)) {
        Style2.rule(selector, "aspect-ratio", _this7.cssAspectRatio(options), width);
      }
    });
  };

  _proto3.registerSlideStyles = function registerSlideStyles() {
    var _this8 = this;

    var Style2 = this.Style;
    var selector = "." + CLASS_SLIDE;
    this.breakpoints.forEach(function (_ref5) {
      var width = _ref5[0],
          options = _ref5[1];
      Style2.rule(selector, "width", _this8.cssSlideWidth(options), width);
      Style2.rule(selector, "height", _this8.cssSlideHeight(options) || "100%", width);
      Style2.rule(selector, _this8.resolve("marginRight"), unit(options.gap) || "0px", width);
      Style2.rule(selector + " > img", "display", options.cover ? "none" : "inline", width);
    });
  };

  _proto3.buildTranslate = function buildTranslate(options) {
    var _this$Direction = this.Direction,
        resolve = _this$Direction.resolve,
        orient = _this$Direction.orient;
    var values = [];
    values.push(this.cssOffsetClones(options));
    values.push(this.cssOffsetGaps(options));

    if (this.isCenter(options)) {
      values.push(this.buildCssValue(orient(-50), "%"));
      values.push.apply(values, this.cssOffsetCenter(options));
    }

    return values.filter(Boolean).map(function (value) {
      return "translate" + resolve("X") + "(" + value + ")";
    }).join(" ");
  };

  _proto3.cssOffsetClones = function cssOffsetClones(options) {
    var _this$Direction2 = this.Direction,
        resolve = _this$Direction2.resolve,
        orient = _this$Direction2.orient;
    var cloneCount = this.getCloneCount();

    if (this.isFixedWidth(options)) {
      var _this$parseCssValue = this.parseCssValue(options[resolve("fixedWidth")]),
          value = _this$parseCssValue.value,
          unit2 = _this$parseCssValue.unit;

      return this.buildCssValue(orient(value) * cloneCount, unit2);
    }

    var percent = 100 * cloneCount / options.perPage;
    return orient(percent) + "%";
  };

  _proto3.cssOffsetCenter = function cssOffsetCenter(options) {
    var _this$Direction3 = this.Direction,
        resolve = _this$Direction3.resolve,
        orient = _this$Direction3.orient;

    if (this.isFixedWidth(options)) {
      var _this$parseCssValue2 = this.parseCssValue(options[resolve("fixedWidth")]),
          value = _this$parseCssValue2.value,
          unit2 = _this$parseCssValue2.unit;

      return [this.buildCssValue(orient(value / 2), unit2)];
    }

    var values = [];
    var perPage = options.perPage,
        gap = options.gap;
    values.push(orient(50 / perPage) + "%");

    if (gap) {
      var _this$parseCssValue3 = this.parseCssValue(gap),
          _value = _this$parseCssValue3.value,
          _unit = _this$parseCssValue3.unit;

      var gapOffset = (_value / perPage - _value) / 2;
      values.push(this.buildCssValue(orient(gapOffset), _unit));
    }

    return values;
  };

  _proto3.cssOffsetGaps = function cssOffsetGaps(options) {
    var cloneCount = this.getCloneCount();

    if (cloneCount && options.gap) {
      var orient = this.Direction.orient;

      var _this$parseCssValue4 = this.parseCssValue(options.gap),
          value = _this$parseCssValue4.value,
          unit2 = _this$parseCssValue4.unit;

      if (this.isFixedWidth(options)) {
        return this.buildCssValue(orient(value * cloneCount), unit2);
      }

      var perPage = options.perPage;
      var gaps = cloneCount / perPage;
      return this.buildCssValue(orient(gaps * value), unit2);
    }

    return "";
  };

  _proto3.resolve = function resolve(prop) {
    return camelToKebab(this.Direction.resolve(prop));
  };

  _proto3.cssPadding = function cssPadding(options, right) {
    var padding = options.padding;
    var prop = this.Direction.resolve(right ? "right" : "left", true);
    return padding && unit(padding[prop] || (isObject(padding) ? 0 : padding)) || "0px";
  };

  _proto3.cssTrackHeight = function cssTrackHeight(options) {
    var height = "";

    if (this.isVertical()) {
      height = this.cssHeight(options);
      assert(height, '"height" is missing.');
      height = "calc(" + height + " - " + this.cssPadding(options, false) + " - " + this.cssPadding(options, true) + ")";
    }

    return height;
  };

  _proto3.cssHeight = function cssHeight(options) {
    return unit(options.height);
  };

  _proto3.cssSlideWidth = function cssSlideWidth(options) {
    return options.autoWidth ? "" : unit(options.fixedWidth) || (this.isVertical() ? "" : this.cssSlideSize(options));
  };

  _proto3.cssSlideHeight = function cssSlideHeight(options) {
    return unit(options.fixedHeight) || (this.isVertical() ? options.autoHeight ? "" : this.cssSlideSize(options) : this.cssHeight(options));
  };

  _proto3.cssSlideSize = function cssSlideSize(options) {
    var gap = unit(options.gap);
    return "calc((100%" + (gap && " + " + gap) + ")/" + (options.perPage || 1) + (gap && " - " + gap) + ")";
  };

  _proto3.cssAspectRatio = function cssAspectRatio(options) {
    var heightRatio = options.heightRatio;
    return heightRatio ? "" + 1 / heightRatio : "";
  };

  _proto3.buildCssValue = function buildCssValue(value, unit2) {
    return "" + value + unit2;
  };

  _proto3.parseCssValue = function parseCssValue(value) {
    if (isString(value)) {
      var number = parseFloat(value) || 0;
      var unit2 = value.replace(/\d*(\.\d*)?/, "") || "px";
      return {
        value: number,
        unit: unit2
      };
    }

    return {
      value: value,
      unit: "px"
    };
  };

  _proto3.parseBreakpoints = function parseBreakpoints() {
    var _this9 = this;

    var breakpoints = this.options.breakpoints;
    this.breakpoints.push(["default", this.options]);

    if (breakpoints) {
      forOwn(breakpoints, function (options, width) {
        _this9.breakpoints.push([width, merge(merge({}, _this9.options), options)]);
      });
    }
  };

  _proto3.isFixedWidth = function isFixedWidth(options) {
    return !!options[this.Direction.resolve("fixedWidth")];
  };

  _proto3.isLoop = function isLoop() {
    return this.options.type === LOOP;
  };

  _proto3.isCenter = function isCenter(options) {
    if (options.focus === "center") {
      if (this.isLoop()) {
        return true;
      }

      if (this.options.type === SLIDE) {
        return !this.options.trimSpace;
      }
    }

    return false;
  };

  _proto3.isVertical = function isVertical() {
    return this.options.direction === TTB;
  };

  _proto3.buildClasses = function buildClasses() {
    var options = this.options;
    return [CLASS_ROOT, CLASS_ROOT + "--" + options.type, CLASS_ROOT + "--" + options.direction, options.drag && CLASS_ROOT + "--draggable", options.isNavigation && CLASS_ROOT + "--nav", CLASS_ACTIVE, !this.config.hidden && CLASS_RENDERED].filter(Boolean).join(" ");
  };

  _proto3.buildAttrs = function buildAttrs(attrs) {
    var attr = "";
    forOwn(attrs, function (value, key) {
      attr += value ? " " + camelToKebab(key) + "=\"" + value + "\"" : "";
    });
    return attr.trim();
  };

  _proto3.buildStyles = function buildStyles(styles) {
    var style = "";
    forOwn(styles, function (value, key) {
      style += " " + camelToKebab(key) + ":" + value + ";";
    });
    return style.trim();
  };

  _proto3.renderSlides = function renderSlides() {
    var _this10 = this;

    var tag = this.config.slideTag;
    return this.slides.map(function (content) {
      return "<" + tag + " " + _this10.buildAttrs(content.attrs) + ">" + (content.html || "") + "</" + tag + ">";
    }).join("");
  };

  _proto3.cover = function cover(content) {
    var styles = content.styles,
        _content$html = content.html,
        html = _content$html === void 0 ? "" : _content$html;

    if (this.options.cover && !this.options.lazyLoad) {
      var src = html.match(/<img.*?src\s*=\s*(['"])(.+?)\1.*?>/);

      if (src && src[2]) {
        styles.background = "center/cover no-repeat url('" + src[2] + "')";
      }
    }
  };

  _proto3.generateClones = function generateClones(contents) {
    var classes = this.options.classes;
    var count = this.getCloneCount();
    var slides = contents.slice();

    while (slides.length < count) {
      push(slides, slides);
    }

    push(slides.slice(-count).reverse(), slides.slice(0, count)).forEach(function (content, index) {
      var attrs = assign({}, content.attrs, {
        class: content.attrs.class + " " + classes.clone
      });
      var clone = assign({}, content, {
        attrs: attrs
      });
      index < count ? contents.unshift(clone) : contents.push(clone);
    });
  };

  _proto3.getCloneCount = function getCloneCount() {
    if (this.isLoop()) {
      var options = this.options;

      if (options.clones) {
        return options.clones;
      }

      var perPage = max.apply(void 0, this.breakpoints.map(function (_ref6) {
        var options2 = _ref6[1];
        return options2.perPage;
      }));
      return perPage * ((options.flickMaxPages || 1) + 1);
    }

    return 0;
  };

  _proto3.renderArrows = function renderArrows() {
    var html = "";
    html += "<div class=\"" + this.options.classes.arrows + "\">";
    html += this.renderArrow(true);
    html += this.renderArrow(false);
    html += "</div>";
    return html;
  };

  _proto3.renderArrow = function renderArrow(prev) {
    var _this$options = this.options,
        classes = _this$options.classes,
        i18n = _this$options.i18n;
    var attrs = {
      class: classes.arrow + " " + (prev ? classes.prev : classes.next),
      type: "button",
      ariaLabel: prev ? i18n.prev : i18n.next
    };
    return "<button " + this.buildAttrs(attrs) + "><svg xmlns=\"" + XML_NAME_SPACE + "\" viewBox=\"0 0 " + SIZE + " " + SIZE + "\" width=\"" + SIZE + "\" height=\"" + SIZE + "\"><path d=\"" + (this.options.arrowPath || PATH) + "\" /></svg></button>";
  };

  _proto3.html = function html() {
    var _this$config = this.config,
        rootClass = _this$config.rootClass,
        listTag = _this$config.listTag,
        arrows = _this$config.arrows,
        beforeTrack = _this$config.beforeTrack,
        afterTrack = _this$config.afterTrack,
        slider = _this$config.slider,
        beforeSlider = _this$config.beforeSlider,
        afterSlider = _this$config.afterSlider;
    var html = "";
    html += "<div id=\"" + this.id + "\" class=\"" + this.buildClasses() + " " + (rootClass || "") + "\">";
    html += "<style>" + this.Style.build() + "</style>";

    if (slider) {
      html += beforeSlider || "";
      html += "<div class=\"splide__slider\">";
    }

    html += beforeTrack || "";

    if (arrows) {
      html += this.renderArrows();
    }

    html += "<div class=\"splide__track\">";
    html += "<" + listTag + " class=\"splide__list\">";
    html += this.renderSlides();
    html += "</" + listTag + ">";
    html += "</div>";
    html += afterTrack || "";

    if (slider) {
      html += "</div>";
      html += afterSlider || "";
    }

    html += "</div>";
    return html;
  };

  return SplideRenderer;
}();




/***/ }),

/***/ "./src/js/_vars.js":
/*!*************************!*\
  !*** ./src/js/_vars.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  windowEl: window,
  documentEl: document,
  htmlEl: document.documentElement,
  bodyEl: document.body
});

/***/ }),

/***/ "./src/js/functions/burger.js":
/*!************************************!*\
  !*** ./src/js/functions/burger.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions_disable_scroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/disable-scroll */ "./src/js/functions/disable-scroll.js");
/* harmony import */ var _functions_enable_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions/enable-scroll */ "./src/js/functions/enable-scroll.js");



(function () {
  var _document, _document2, _document3, _document4;

  var burger = (_document = document) === null || _document === void 0 ? void 0 : _document.querySelector('[data-burger]');
  var menu = (_document2 = document) === null || _document2 === void 0 ? void 0 : _document2.querySelector('[data-menu]');
  var menuItems = (_document3 = document) === null || _document3 === void 0 ? void 0 : _document3.querySelectorAll('[data-menu-item]');
  var overlay = (_document4 = document) === null || _document4 === void 0 ? void 0 : _document4.querySelector('[data-menu-overlay]');
  burger === null || burger === void 0 ? void 0 : burger.addEventListener('click', function (e) {
    burger === null || burger === void 0 ? void 0 : burger.classList.toggle('burger--active');
    menu === null || menu === void 0 ? void 0 : menu.classList.toggle('menu--active');

    if (menu !== null && menu !== void 0 && menu.classList.contains('menu--active')) {
      burger === null || burger === void 0 ? void 0 : burger.setAttribute('aria-expanded', 'true');
      burger === null || burger === void 0 ? void 0 : burger.setAttribute('aria-label', 'Закрыть меню');
      (0,_functions_disable_scroll__WEBPACK_IMPORTED_MODULE_0__.disableScroll)();
    } else {
      burger === null || burger === void 0 ? void 0 : burger.setAttribute('aria-expanded', 'false');
      burger === null || burger === void 0 ? void 0 : burger.setAttribute('aria-label', 'Открыть меню');
      (0,_functions_enable_scroll__WEBPACK_IMPORTED_MODULE_1__.enableScroll)();
    }
  });
  overlay === null || overlay === void 0 ? void 0 : overlay.addEventListener('click', function () {
    burger === null || burger === void 0 ? void 0 : burger.setAttribute('aria-expanded', 'false');
    burger === null || burger === void 0 ? void 0 : burger.setAttribute('aria-label', 'Открыть меню');
    burger.classList.remove('burger--active');
    menu.classList.remove('menu--active');
    (0,_functions_enable_scroll__WEBPACK_IMPORTED_MODULE_1__.enableScroll)();
  });
  menuItems === null || menuItems === void 0 ? void 0 : menuItems.forEach(function (el) {
    el.addEventListener('click', function () {
      burger === null || burger === void 0 ? void 0 : burger.setAttribute('aria-expanded', 'false');
      burger === null || burger === void 0 ? void 0 : burger.setAttribute('aria-label', 'Открыть меню');
      burger.classList.remove('burger--active');
      menu.classList.remove('menu--active');
      (0,_functions_enable_scroll__WEBPACK_IMPORTED_MODULE_1__.enableScroll)();
    });
  });
})();

/***/ }),

/***/ "./src/js/functions/disable-scroll.js":
/*!********************************************!*\
  !*** ./src/js/functions/disable-scroll.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "disableScroll": () => (/* binding */ disableScroll)
/* harmony export */ });
/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_vars */ "./src/js/_vars.js");

var disableScroll = function disableScroll() {
  var _document;

  var fixBlocks = (_document = document) === null || _document === void 0 ? void 0 : _document.querySelectorAll('.fixed-block');
  var pagePosition = window.scrollY;
  var paddingOffset = "".concat(window.innerWidth - _vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.offsetWidth, "px");
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].htmlEl.style.scrollBehavior = 'none';
  fixBlocks.forEach(function (el) {
    el.style.paddingRight = paddingOffset;
  });
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.style.paddingRight = paddingOffset;
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.classList.add('dis-scroll');
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.dataset.position = pagePosition;
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.style.top = "-".concat(pagePosition, "px");
};

/***/ }),

/***/ "./src/js/functions/dynamicAdapt.js":
/*!******************************************!*\
  !*** ./src/js/functions/dynamicAdapt.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var DynamicAdapt = /*#__PURE__*/function () {
  function DynamicAdapt(type) {
    _classCallCheck(this, DynamicAdapt);

    this.type = type;
  }

  _createClass(DynamicAdapt, [{
    key: "init",
    value: function init() {
      var _this = this;

      // массив объектов
      this.оbjects = [];
      this.daClassname = "_dynamic_adapt_"; // массив DOM-элементов

      this.nodes = _toConsumableArray(document.querySelectorAll("[data-da]")); // наполнение оbjects объктами

      this.nodes.forEach(function (node) {
        var data = node.dataset.da.trim();
        var dataArray = data.split(",");
        var оbject = {};
        оbject.element = node;
        оbject.parent = node.parentNode;
        оbject.destination = document.querySelector("".concat(dataArray[0].trim()));
        оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
        оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
        оbject.index = _this.indexInParent(оbject.parent, оbject.element);

        _this.оbjects.push(оbject);
      });
      this.arraySort(this.оbjects); // массив уникальных медиа-запросов

      this.mediaQueries = this.оbjects.map(function (_ref) {
        var breakpoint = _ref.breakpoint;
        return "(".concat(_this.type, "-width: ").concat(breakpoint, "px),").concat(breakpoint);
      }).filter(function (item, index, self) {
        return self.indexOf(item) === index;
      }); // навешивание слушателя на медиа-запрос
      // и вызов обработчика при первом запуске

      this.mediaQueries.forEach(function (media) {
        var mediaSplit = media.split(",");
        var matchMedia = window.matchMedia(mediaSplit[0]);
        var mediaBreakpoint = mediaSplit[1]; // массив объектов с подходящим брейкпоинтом

        var оbjectsFilter = _this.оbjects.filter(function (_ref2) {
          var breakpoint = _ref2.breakpoint;
          return breakpoint === mediaBreakpoint;
        });

        matchMedia.addEventListener("change", function () {
          _this.mediaHandler(matchMedia, оbjectsFilter);
        });

        _this.mediaHandler(matchMedia, оbjectsFilter);
      });
    } // Основная функция

  }, {
    key: "mediaHandler",
    value: function mediaHandler(matchMedia, оbjects) {
      var _this2 = this;

      if (matchMedia.matches) {
        оbjects.forEach(function (оbject) {
          оbject.index = _this2.indexInParent(оbject.parent, оbject.element);

          _this2.moveTo(оbject.place, оbject.element, оbject.destination);
        });
      } else {
        оbjects.forEach(function (_ref3) {
          var parent = _ref3.parent,
              element = _ref3.element,
              index = _ref3.index;

          if (element.classList.contains(_this2.daClassname)) {
            _this2.moveBack(parent, element, index);
          }
        });
      }
    } // Функция перемещения

  }, {
    key: "moveTo",
    value: function moveTo(place, element, destination) {
      element.classList.add(this.daClassname);

      if (place === "last" || place >= destination.children.length) {
        destination.append(element);
        return;
      }

      if (place === "first") {
        destination.prepend(element);
        return;
      }

      destination.children[place].before(element);
    } // Функция возврата

  }, {
    key: "moveBack",
    value: function moveBack(parent, element, index) {
      element.classList.remove(this.daClassname);

      if (parent.children[index] !== undefined) {
        parent.children[index].before(element);
      } else {
        parent.append(element);
      }
    } // Функция получения индекса внутри родителя

  }, {
    key: "indexInParent",
    value: function indexInParent(parent, element) {
      return _toConsumableArray(parent.children).indexOf(element);
    } // Функция сортировки массива по breakpoint и place
    // по возрастанию для this.type = min
    // по убыванию для this.type = max

  }, {
    key: "arraySort",
    value: function arraySort(arr) {
      if (this.type === "min") {
        arr.sort(function (a, b) {
          if (a.breakpoint === b.breakpoint) {
            if (a.place === b.place) {
              return 0;
            }

            if (a.place === "first" || b.place === "last") {
              return -1;
            }

            if (a.place === "last" || b.place === "first") {
              return 1;
            }

            return a.place - b.place;
          }

          return a.breakpoint - b.breakpoint;
        });
      } else {
        arr.sort(function (a, b) {
          if (a.breakpoint === b.breakpoint) {
            if (a.place === b.place) {
              return 0;
            }

            if (a.place === "first" || b.place === "last") {
              return 1;
            }

            if (a.place === "last" || b.place === "first") {
              return -1;
            }

            return b.place - a.place;
          }

          return b.breakpoint - a.breakpoint;
        });
        return;
      }
    }
  }]);

  return DynamicAdapt;
}();

var da = new DynamicAdapt("max");
da.init();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DynamicAdapt);

/***/ }),

/***/ "./src/js/functions/enable-scroll.js":
/*!*******************************************!*\
  !*** ./src/js/functions/enable-scroll.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "enableScroll": () => (/* binding */ enableScroll)
/* harmony export */ });
/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_vars */ "./src/js/_vars.js");

var enableScroll = function enableScroll() {
  var _document;

  var fixBlocks = (_document = document) === null || _document === void 0 ? void 0 : _document.querySelectorAll('.fixed-block');
  var body = document.body;
  var pagePosition = parseInt(_vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.dataset.position, 10);
  fixBlocks.forEach(function (el) {
    el.style.paddingRight = '0px';
  });
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.style.paddingRight = '0px';
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.style.top = 'auto';
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.classList.remove('dis-scroll');
  window.scroll({
    top: pagePosition,
    left: 0
  });
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.removeAttribute('data-position');
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].htmlEl.style.scrollBehavior = 'smooth';
};

/***/ }),

/***/ "./src/js/functions/validate-forms.js":
/*!********************************************!*\
  !*** ./src/js/functions/validate-forms.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "validateForms": () => (/* binding */ validateForms)
/* harmony export */ });
/* harmony import */ var just_validate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! just-validate */ "./node_modules/just-validate/dist/just-validate.es.js");
/* harmony import */ var inputmask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! inputmask */ "./node_modules/inputmask/dist/inputmask.js");
/* harmony import */ var inputmask__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(inputmask__WEBPACK_IMPORTED_MODULE_1__);
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



var validateForms = function validateForms(selector, rules, afterSend) {
  var _document;

  var form = (_document = document) === null || _document === void 0 ? void 0 : _document.querySelector(selector);
  var telSelector = form === null || form === void 0 ? void 0 : form.querySelector('input[type="tel"]');

  if (!form) {
    console.error("Нет такого селектора!");
    return false;
  }

  if (!rules) {
    console.error("Вы не передали правила валидации!");
    return false;
  } // if (telSelector) {
  //   const inputMask = new Inputmask('+7 (999) 999-99-99');
  //   inputMask.mask(telSelector);
  //   for (let item of rules) {
  //     if (item.tel) {
  //       item.rules.push({
  //         rule: 'function',
  //         validator: function() {
  //           const phone = telSelector.inputmask.unmaskedvalue();
  //           return phone.length === 10;
  //         },
  //         errorMessage: item.telError
  //       });
  //     }
  //   }
  // }


  var validation = new just_validate__WEBPACK_IMPORTED_MODULE_0__["default"](selector);

  var _iterator = _createForOfIteratorHelper(rules),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var item = _step.value;
      validation.addField(item.ruleSelector, item.rules);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  validation.onSuccess(function (ev) {
    var formData = new FormData(ev.target);
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          if (afterSend) {
            afterSend();
          }

          console.log("Отправлено");
        }
      }
    };

    xhr.open("POST", "mail.php", true);
    xhr.send(formData);
    ev.target.reset();
  });
};

/***/ }),

/***/ "./node_modules/gsap/CSSPlugin.js":
/*!****************************************!*\
  !*** ./node_modules/gsap/CSSPlugin.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CSSPlugin": () => (/* binding */ CSSPlugin),
/* harmony export */   "_createElement": () => (/* binding */ _createElement),
/* harmony export */   "_getBBox": () => (/* binding */ _getBBox),
/* harmony export */   "checkPrefix": () => (/* binding */ _checkPropPrefix),
/* harmony export */   "default": () => (/* binding */ CSSPlugin)
/* harmony export */ });
/* harmony import */ var _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gsap-core.js */ "./node_modules/gsap/gsap-core.js");
/*!
 * CSSPlugin 3.10.4
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/

/* eslint-disable */


var _win,
    _doc,
    _docElement,
    _pluginInitted,
    _tempDiv,
    _tempDivStyler,
    _recentSetterPlugin,
    _windowExists = function _windowExists() {
  return typeof window !== "undefined";
},
    _transformProps = {},
    _RAD2DEG = 180 / Math.PI,
    _DEG2RAD = Math.PI / 180,
    _atan2 = Math.atan2,
    _bigNum = 1e8,
    _capsExp = /([A-Z])/g,
    _horizontalExp = /(left|right|width|margin|padding|x)/i,
    _complexExp = /[\s,\(]\S/,
    _propertyAliases = {
  autoAlpha: "opacity,visibility",
  scale: "scaleX,scaleY",
  alpha: "opacity"
},
    _renderCSSProp = function _renderCSSProp(ratio, data) {
  return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u, data);
},
    _renderPropWithEnd = function _renderPropWithEnd(ratio, data) {
  return data.set(data.t, data.p, ratio === 1 ? data.e : Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u, data);
},
    _renderCSSPropWithBeginning = function _renderCSSPropWithBeginning(ratio, data) {
  return data.set(data.t, data.p, ratio ? Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u : data.b, data);
},
    //if units change, we need a way to render the original unit/value when the tween goes all the way back to the beginning (ratio:0)
_renderRoundedCSSProp = function _renderRoundedCSSProp(ratio, data) {
  var value = data.s + data.c * ratio;
  data.set(data.t, data.p, ~~(value + (value < 0 ? -.5 : .5)) + data.u, data);
},
    _renderNonTweeningValue = function _renderNonTweeningValue(ratio, data) {
  return data.set(data.t, data.p, ratio ? data.e : data.b, data);
},
    _renderNonTweeningValueOnlyAtEnd = function _renderNonTweeningValueOnlyAtEnd(ratio, data) {
  return data.set(data.t, data.p, ratio !== 1 ? data.b : data.e, data);
},
    _setterCSSStyle = function _setterCSSStyle(target, property, value) {
  return target.style[property] = value;
},
    _setterCSSProp = function _setterCSSProp(target, property, value) {
  return target.style.setProperty(property, value);
},
    _setterTransform = function _setterTransform(target, property, value) {
  return target._gsap[property] = value;
},
    _setterScale = function _setterScale(target, property, value) {
  return target._gsap.scaleX = target._gsap.scaleY = value;
},
    _setterScaleWithRender = function _setterScaleWithRender(target, property, value, data, ratio) {
  var cache = target._gsap;
  cache.scaleX = cache.scaleY = value;
  cache.renderTransform(ratio, cache);
},
    _setterTransformWithRender = function _setterTransformWithRender(target, property, value, data, ratio) {
  var cache = target._gsap;
  cache[property] = value;
  cache.renderTransform(ratio, cache);
},
    _transformProp = "transform",
    _transformOriginProp = _transformProp + "Origin",
    _supports3D,
    _createElement = function _createElement(type, ns) {
  var e = _doc.createElementNS ? _doc.createElementNS((ns || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), type) : _doc.createElement(type); //some servers swap in https for http in the namespace which can break things, making "style" inaccessible.

  return e.style ? e : _doc.createElement(type); //some environments won't allow access to the element's style when created with a namespace in which case we default to the standard createElement() to work around the issue. Also note that when GSAP is embedded directly inside an SVG file, createElement() won't allow access to the style object in Firefox (see https://greensock.com/forums/topic/20215-problem-using-tweenmax-in-standalone-self-containing-svg-file-err-cannot-set-property-csstext-of-undefined/).
},
    _getComputedProperty = function _getComputedProperty(target, property, skipPrefixFallback) {
  var cs = getComputedStyle(target);
  return cs[property] || cs.getPropertyValue(property.replace(_capsExp, "-$1").toLowerCase()) || cs.getPropertyValue(property) || !skipPrefixFallback && _getComputedProperty(target, _checkPropPrefix(property) || property, 1) || ""; //css variables may not need caps swapped out for dashes and lowercase.
},
    _prefixes = "O,Moz,ms,Ms,Webkit".split(","),
    _checkPropPrefix = function _checkPropPrefix(property, element, preferPrefix) {
  var e = element || _tempDiv,
      s = e.style,
      i = 5;

  if (property in s && !preferPrefix) {
    return property;
  }

  property = property.charAt(0).toUpperCase() + property.substr(1);

  while (i-- && !(_prefixes[i] + property in s)) {}

  return i < 0 ? null : (i === 3 ? "ms" : i >= 0 ? _prefixes[i] : "") + property;
},
    _initCore = function _initCore() {
  if (_windowExists() && window.document) {
    _win = window;
    _doc = _win.document;
    _docElement = _doc.documentElement;
    _tempDiv = _createElement("div") || {
      style: {}
    };
    _tempDivStyler = _createElement("div");
    _transformProp = _checkPropPrefix(_transformProp);
    _transformOriginProp = _transformProp + "Origin";
    _tempDiv.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0"; //make sure to override certain properties that may contaminate measurements, in case the user has overreaching style sheets.

    _supports3D = !!_checkPropPrefix("perspective");
    _pluginInitted = 1;
  }
},
    _getBBoxHack = function _getBBoxHack(swapIfPossible) {
  //works around issues in some browsers (like Firefox) that don't correctly report getBBox() on SVG elements inside a <defs> element and/or <mask>. We try creating an SVG, adding it to the documentElement and toss the element in there so that it's definitely part of the rendering tree, then grab the bbox and if it works, we actually swap out the original getBBox() method for our own that does these extra steps whenever getBBox is needed. This helps ensure that performance is optimal (only do all these extra steps when absolutely necessary...most elements don't need it).
  var svg = _createElement("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
      oldParent = this.parentNode,
      oldSibling = this.nextSibling,
      oldCSS = this.style.cssText,
      bbox;

  _docElement.appendChild(svg);

  svg.appendChild(this);
  this.style.display = "block";

  if (swapIfPossible) {
    try {
      bbox = this.getBBox();
      this._gsapBBox = this.getBBox; //store the original

      this.getBBox = _getBBoxHack;
    } catch (e) {}
  } else if (this._gsapBBox) {
    bbox = this._gsapBBox();
  }

  if (oldParent) {
    if (oldSibling) {
      oldParent.insertBefore(this, oldSibling);
    } else {
      oldParent.appendChild(this);
    }
  }

  _docElement.removeChild(svg);

  this.style.cssText = oldCSS;
  return bbox;
},
    _getAttributeFallbacks = function _getAttributeFallbacks(target, attributesArray) {
  var i = attributesArray.length;

  while (i--) {
    if (target.hasAttribute(attributesArray[i])) {
      return target.getAttribute(attributesArray[i]);
    }
  }
},
    _getBBox = function _getBBox(target) {
  var bounds;

  try {
    bounds = target.getBBox(); //Firefox throws errors if you try calling getBBox() on an SVG element that's not rendered (like in a <symbol> or <defs>). https://bugzilla.mozilla.org/show_bug.cgi?id=612118
  } catch (error) {
    bounds = _getBBoxHack.call(target, true);
  }

  bounds && (bounds.width || bounds.height) || target.getBBox === _getBBoxHack || (bounds = _getBBoxHack.call(target, true)); //some browsers (like Firefox) misreport the bounds if the element has zero width and height (it just assumes it's at x:0, y:0), thus we need to manually grab the position in that case.

  return bounds && !bounds.width && !bounds.x && !bounds.y ? {
    x: +_getAttributeFallbacks(target, ["x", "cx", "x1"]) || 0,
    y: +_getAttributeFallbacks(target, ["y", "cy", "y1"]) || 0,
    width: 0,
    height: 0
  } : bounds;
},
    _isSVG = function _isSVG(e) {
  return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && _getBBox(e));
},
    //reports if the element is an SVG on which getBBox() actually works
_removeProperty = function _removeProperty(target, property) {
  if (property) {
    var style = target.style;

    if (property in _transformProps && property !== _transformOriginProp) {
      property = _transformProp;
    }

    if (style.removeProperty) {
      if (property.substr(0, 2) === "ms" || property.substr(0, 6) === "webkit") {
        //Microsoft and some Webkit browsers don't conform to the standard of capitalizing the first prefix character, so we adjust so that when we prefix the caps with a dash, it's correct (otherwise it'd be "ms-transform" instead of "-ms-transform" for IE9, for example)
        property = "-" + property;
      }

      style.removeProperty(property.replace(_capsExp, "-$1").toLowerCase());
    } else {
      //note: old versions of IE use "removeAttribute()" instead of "removeProperty()"
      style.removeAttribute(property);
    }
  }
},
    _addNonTweeningPT = function _addNonTweeningPT(plugin, target, property, beginning, end, onlySetAtEnd) {
  var pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(plugin._pt, target, property, 0, 1, onlySetAtEnd ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue);
  plugin._pt = pt;
  pt.b = beginning;
  pt.e = end;

  plugin._props.push(property);

  return pt;
},
    _nonConvertibleUnits = {
  deg: 1,
  rad: 1,
  turn: 1
},
    //takes a single value like 20px and converts it to the unit specified, like "%", returning only the numeric amount.
_convertToUnit = function _convertToUnit(target, property, value, unit) {
  var curValue = parseFloat(value) || 0,
      curUnit = (value + "").trim().substr((curValue + "").length) || "px",
      // some browsers leave extra whitespace at the beginning of CSS variables, hence the need to trim()
  style = _tempDiv.style,
      horizontal = _horizontalExp.test(property),
      isRootSVG = target.tagName.toLowerCase() === "svg",
      measureProperty = (isRootSVG ? "client" : "offset") + (horizontal ? "Width" : "Height"),
      amount = 100,
      toPixels = unit === "px",
      toPercent = unit === "%",
      px,
      parent,
      cache,
      isSVG;

  if (unit === curUnit || !curValue || _nonConvertibleUnits[unit] || _nonConvertibleUnits[curUnit]) {
    return curValue;
  }

  curUnit !== "px" && !toPixels && (curValue = _convertToUnit(target, property, value, "px"));
  isSVG = target.getCTM && _isSVG(target);

  if ((toPercent || curUnit === "%") && (_transformProps[property] || ~property.indexOf("adius"))) {
    px = isSVG ? target.getBBox()[horizontal ? "width" : "height"] : target[measureProperty];
    return (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(toPercent ? curValue / px * amount : curValue / 100 * px);
  }

  style[horizontal ? "width" : "height"] = amount + (toPixels ? curUnit : unit);
  parent = ~property.indexOf("adius") || unit === "em" && target.appendChild && !isRootSVG ? target : target.parentNode;

  if (isSVG) {
    parent = (target.ownerSVGElement || {}).parentNode;
  }

  if (!parent || parent === _doc || !parent.appendChild) {
    parent = _doc.body;
  }

  cache = parent._gsap;

  if (cache && toPercent && cache.width && horizontal && cache.time === _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._ticker.time) {
    return (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(curValue / cache.width * amount);
  } else {
    (toPercent || curUnit === "%") && (style.position = _getComputedProperty(target, "position"));
    parent === target && (style.position = "static"); // like for borderRadius, if it's a % we must have it relative to the target itself but that may not have position: relative or position: absolute in which case it'd go up the chain until it finds its offsetParent (bad). position: static protects against that.

    parent.appendChild(_tempDiv);
    px = _tempDiv[measureProperty];
    parent.removeChild(_tempDiv);
    style.position = "absolute";

    if (horizontal && toPercent) {
      cache = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._getCache)(parent);
      cache.time = _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._ticker.time;
      cache.width = parent[measureProperty];
    }
  }

  return (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(toPixels ? px * curValue / amount : px && curValue ? amount / px * curValue : 0);
},
    _get = function _get(target, property, unit, uncache) {
  var value;
  _pluginInitted || _initCore();

  if (property in _propertyAliases && property !== "transform") {
    property = _propertyAliases[property];

    if (~property.indexOf(",")) {
      property = property.split(",")[0];
    }
  }

  if (_transformProps[property] && property !== "transform") {
    value = _parseTransform(target, uncache);
    value = property !== "transformOrigin" ? value[property] : value.svg ? value.origin : _firstTwoOnly(_getComputedProperty(target, _transformOriginProp)) + " " + value.zOrigin + "px";
  } else {
    value = target.style[property];

    if (!value || value === "auto" || uncache || ~(value + "").indexOf("calc(")) {
      value = _specialProps[property] && _specialProps[property](target, property, unit) || _getComputedProperty(target, property) || (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._getProperty)(target, property) || (property === "opacity" ? 1 : 0); // note: some browsers, like Firefox, don't report borderRadius correctly! Instead, it only reports every corner like  borderTopLeftRadius
    }
  }

  return unit && !~(value + "").trim().indexOf(" ") ? _convertToUnit(target, property, value, unit) + unit : value;
},
    _tweenComplexCSSString = function _tweenComplexCSSString(target, prop, start, end) {
  // note: we call _tweenComplexCSSString.call(pluginInstance...) to ensure that it's scoped properly. We may call it from within a plugin too, thus "this" would refer to the plugin.
  if (!start || start === "none") {
    // some browsers like Safari actually PREFER the prefixed property and mis-report the unprefixed value like clipPath (BUG). In other words, even though clipPath exists in the style ("clipPath" in target.style) and it's set in the CSS properly (along with -webkit-clip-path), Safari reports clipPath as "none" whereas WebkitClipPath reports accurately like "ellipse(100% 0% at 50% 0%)", so in this case we must SWITCH to using the prefixed property instead. See https://greensock.com/forums/topic/18310-clippath-doesnt-work-on-ios/
    var p = _checkPropPrefix(prop, target, 1),
        s = p && _getComputedProperty(target, p, 1);

    if (s && s !== start) {
      prop = p;
      start = s;
    } else if (prop === "borderColor") {
      start = _getComputedProperty(target, "borderTopColor"); // Firefox bug: always reports "borderColor" as "", so we must fall back to borderTopColor. See https://greensock.com/forums/topic/24583-how-to-return-colors-that-i-had-after-reverse/
    }
  }

  var pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(this._pt, target.style, prop, 0, 1, _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._renderComplexString),
      index = 0,
      matchIndex = 0,
      a,
      result,
      startValues,
      startNum,
      color,
      startValue,
      endValue,
      endNum,
      chunk,
      endUnit,
      startUnit,
      endValues;
  pt.b = start;
  pt.e = end;
  start += ""; // ensure values are strings

  end += "";

  if (end === "auto") {
    target.style[prop] = end;
    end = _getComputedProperty(target, prop) || end;
    target.style[prop] = start;
  }

  a = [start, end];

  (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._colorStringFilter)(a); // pass an array with the starting and ending values and let the filter do whatever it needs to the values. If colors are found, it returns true and then we must match where the color shows up order-wise because for things like boxShadow, sometimes the browser provides the computed values with the color FIRST, but the user provides it with the color LAST, so flip them if necessary. Same for drop-shadow().


  start = a[0];
  end = a[1];
  startValues = start.match(_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._numWithUnitExp) || [];
  endValues = end.match(_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._numWithUnitExp) || [];

  if (endValues.length) {
    while (result = _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._numWithUnitExp.exec(end)) {
      endValue = result[0];
      chunk = end.substring(index, result.index);

      if (color) {
        color = (color + 1) % 5;
      } else if (chunk.substr(-5) === "rgba(" || chunk.substr(-5) === "hsla(") {
        color = 1;
      }

      if (endValue !== (startValue = startValues[matchIndex++] || "")) {
        startNum = parseFloat(startValue) || 0;
        startUnit = startValue.substr((startNum + "").length);
        endValue.charAt(1) === "=" && (endValue = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._parseRelative)(startNum, endValue) + startUnit);
        endNum = parseFloat(endValue);
        endUnit = endValue.substr((endNum + "").length);
        index = _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._numWithUnitExp.lastIndex - endUnit.length;

        if (!endUnit) {
          //if something like "perspective:300" is passed in and we must add a unit to the end
          endUnit = endUnit || _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._config.units[prop] || startUnit;

          if (index === end.length) {
            end += endUnit;
            pt.e += endUnit;
          }
        }

        if (startUnit !== endUnit) {
          startNum = _convertToUnit(target, prop, startValue, endUnit) || 0;
        } // these nested PropTweens are handled in a special way - we'll never actually call a render or setter method on them. We'll just loop through them in the parent complex string PropTween's render method.


        pt._pt = {
          _next: pt._pt,
          p: chunk || matchIndex === 1 ? chunk : ",",
          //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
          s: startNum,
          c: endNum - startNum,
          m: color && color < 4 || prop === "zIndex" ? Math.round : 0
        };
      }
    }

    pt.c = index < end.length ? end.substring(index, end.length) : ""; //we use the "c" of the PropTween to store the final part of the string (after the last number)
  } else {
    pt.r = prop === "display" && end === "none" ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue;
  }

  _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._relExp.test(end) && (pt.e = 0); //if the end string contains relative values or dynamic random(...) values, delete the end it so that on the final render we don't actually set it to the string with += or -= characters (forces it to use the calculated value).

  this._pt = pt; //start the linked list with this new PropTween. Remember, we call _tweenComplexCSSString.call(pluginInstance...) to ensure that it's scoped properly. We may call it from within another plugin too, thus "this" would refer to the plugin.

  return pt;
},
    _keywordToPercent = {
  top: "0%",
  bottom: "100%",
  left: "0%",
  right: "100%",
  center: "50%"
},
    _convertKeywordsToPercentages = function _convertKeywordsToPercentages(value) {
  var split = value.split(" "),
      x = split[0],
      y = split[1] || "50%";

  if (x === "top" || x === "bottom" || y === "left" || y === "right") {
    //the user provided them in the wrong order, so flip them
    value = x;
    x = y;
    y = value;
  }

  split[0] = _keywordToPercent[x] || x;
  split[1] = _keywordToPercent[y] || y;
  return split.join(" ");
},
    _renderClearProps = function _renderClearProps(ratio, data) {
  if (data.tween && data.tween._time === data.tween._dur) {
    var target = data.t,
        style = target.style,
        props = data.u,
        cache = target._gsap,
        prop,
        clearTransforms,
        i;

    if (props === "all" || props === true) {
      style.cssText = "";
      clearTransforms = 1;
    } else {
      props = props.split(",");
      i = props.length;

      while (--i > -1) {
        prop = props[i];

        if (_transformProps[prop]) {
          clearTransforms = 1;
          prop = prop === "transformOrigin" ? _transformOriginProp : _transformProp;
        }

        _removeProperty(target, prop);
      }
    }

    if (clearTransforms) {
      _removeProperty(target, _transformProp);

      if (cache) {
        cache.svg && target.removeAttribute("transform");

        _parseTransform(target, 1); // force all the cached values back to "normal"/identity, otherwise if there's another tween that's already set to render transforms on this element, it could display the wrong values.


        cache.uncache = 1;
      }
    }
  }
},
    // note: specialProps should return 1 if (and only if) they have a non-zero priority. It indicates we need to sort the linked list.
_specialProps = {
  clearProps: function clearProps(plugin, target, property, endValue, tween) {
    if (tween.data !== "isFromStart") {
      var pt = plugin._pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(plugin._pt, target, property, 0, 0, _renderClearProps);
      pt.u = endValue;
      pt.pr = -10;
      pt.tween = tween;

      plugin._props.push(property);

      return 1;
    }
  }
  /* className feature (about 0.4kb gzipped).
  , className(plugin, target, property, endValue, tween) {
  	let _renderClassName = (ratio, data) => {
  			data.css.render(ratio, data.css);
  			if (!ratio || ratio === 1) {
  				let inline = data.rmv,
  					target = data.t,
  					p;
  				target.setAttribute("class", ratio ? data.e : data.b);
  				for (p in inline) {
  					_removeProperty(target, p);
  				}
  			}
  		},
  		_getAllStyles = (target) => {
  			let styles = {},
  				computed = getComputedStyle(target),
  				p;
  			for (p in computed) {
  				if (isNaN(p) && p !== "cssText" && p !== "length") {
  					styles[p] = computed[p];
  				}
  			}
  			_setDefaults(styles, _parseTransform(target, 1));
  			return styles;
  		},
  		startClassList = target.getAttribute("class"),
  		style = target.style,
  		cssText = style.cssText,
  		cache = target._gsap,
  		classPT = cache.classPT,
  		inlineToRemoveAtEnd = {},
  		data = {t:target, plugin:plugin, rmv:inlineToRemoveAtEnd, b:startClassList, e:(endValue.charAt(1) !== "=") ? endValue : startClassList.replace(new RegExp("(?:\\s|^)" + endValue.substr(2) + "(?![\\w-])"), "") + ((endValue.charAt(0) === "+") ? " " + endValue.substr(2) : "")},
  		changingVars = {},
  		startVars = _getAllStyles(target),
  		transformRelated = /(transform|perspective)/i,
  		endVars, p;
  	if (classPT) {
  		classPT.r(1, classPT.d);
  		_removeLinkedListItem(classPT.d.plugin, classPT, "_pt");
  	}
  	target.setAttribute("class", data.e);
  	endVars = _getAllStyles(target, true);
  	target.setAttribute("class", startClassList);
  	for (p in endVars) {
  		if (endVars[p] !== startVars[p] && !transformRelated.test(p)) {
  			changingVars[p] = endVars[p];
  			if (!style[p] && style[p] !== "0") {
  				inlineToRemoveAtEnd[p] = 1;
  			}
  		}
  	}
  	cache.classPT = plugin._pt = new PropTween(plugin._pt, target, "className", 0, 0, _renderClassName, data, 0, -11);
  	if (style.cssText !== cssText) { //only apply if things change. Otherwise, in cases like a background-image that's pulled dynamically, it could cause a refresh. See https://greensock.com/forums/topic/20368-possible-gsap-bug-switching-classnames-in-chrome/.
  		style.cssText = cssText; //we recorded cssText before we swapped classes and ran _getAllStyles() because in cases when a className tween is overwritten, we remove all the related tweening properties from that class change (otherwise class-specific stuff can't override properties we've directly set on the target's style object due to specificity).
  	}
  	_parseTransform(target, true); //to clear the caching of transforms
  	data.css = new gsap.plugins.css();
  	data.css.init(target, changingVars, tween);
  	plugin._props.push(...data.css._props);
  	return 1;
  }
  */

},

/*
 * --------------------------------------------------------------------------------------
 * TRANSFORMS
 * --------------------------------------------------------------------------------------
 */
_identity2DMatrix = [1, 0, 0, 1, 0, 0],
    _rotationalProperties = {},
    _isNullTransform = function _isNullTransform(value) {
  return value === "matrix(1, 0, 0, 1, 0, 0)" || value === "none" || !value;
},
    _getComputedTransformMatrixAsArray = function _getComputedTransformMatrixAsArray(target) {
  var matrixString = _getComputedProperty(target, _transformProp);

  return _isNullTransform(matrixString) ? _identity2DMatrix : matrixString.substr(7).match(_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._numExp).map(_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round);
},
    _getMatrix = function _getMatrix(target, force2D) {
  var cache = target._gsap || (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._getCache)(target),
      style = target.style,
      matrix = _getComputedTransformMatrixAsArray(target),
      parent,
      nextSibling,
      temp,
      addedToDOM;

  if (cache.svg && target.getAttribute("transform")) {
    temp = target.transform.baseVal.consolidate().matrix; //ensures that even complex values like "translate(50,60) rotate(135,0,0)" are parsed because it mashes it into a matrix.

    matrix = [temp.a, temp.b, temp.c, temp.d, temp.e, temp.f];
    return matrix.join(",") === "1,0,0,1,0,0" ? _identity2DMatrix : matrix;
  } else if (matrix === _identity2DMatrix && !target.offsetParent && target !== _docElement && !cache.svg) {
    //note: if offsetParent is null, that means the element isn't in the normal document flow, like if it has display:none or one of its ancestors has display:none). Firefox returns null for getComputedStyle() if the element is in an iframe that has display:none. https://bugzilla.mozilla.org/show_bug.cgi?id=548397
    //browsers don't report transforms accurately unless the element is in the DOM and has a display value that's not "none". Firefox and Microsoft browsers have a partial bug where they'll report transforms even if display:none BUT not any percentage-based values like translate(-50%, 8px) will be reported as if it's translate(0, 8px).
    temp = style.display;
    style.display = "block";
    parent = target.parentNode;

    if (!parent || !target.offsetParent) {
      // note: in 3.3.0 we switched target.offsetParent to _doc.body.contains(target) to avoid [sometimes unnecessary] MutationObserver calls but that wasn't adequate because there are edge cases where nested position: fixed elements need to get reparented to accurately sense transforms. See https://github.com/greensock/GSAP/issues/388 and https://github.com/greensock/GSAP/issues/375
      addedToDOM = 1; //flag

      nextSibling = target.nextSibling;

      _docElement.appendChild(target); //we must add it to the DOM in order to get values properly

    }

    matrix = _getComputedTransformMatrixAsArray(target);
    temp ? style.display = temp : _removeProperty(target, "display");

    if (addedToDOM) {
      nextSibling ? parent.insertBefore(target, nextSibling) : parent ? parent.appendChild(target) : _docElement.removeChild(target);
    }
  }

  return force2D && matrix.length > 6 ? [matrix[0], matrix[1], matrix[4], matrix[5], matrix[12], matrix[13]] : matrix;
},
    _applySVGOrigin = function _applySVGOrigin(target, origin, originIsAbsolute, smooth, matrixArray, pluginToAddPropTweensTo) {
  var cache = target._gsap,
      matrix = matrixArray || _getMatrix(target, true),
      xOriginOld = cache.xOrigin || 0,
      yOriginOld = cache.yOrigin || 0,
      xOffsetOld = cache.xOffset || 0,
      yOffsetOld = cache.yOffset || 0,
      a = matrix[0],
      b = matrix[1],
      c = matrix[2],
      d = matrix[3],
      tx = matrix[4],
      ty = matrix[5],
      originSplit = origin.split(" "),
      xOrigin = parseFloat(originSplit[0]) || 0,
      yOrigin = parseFloat(originSplit[1]) || 0,
      bounds,
      determinant,
      x,
      y;

  if (!originIsAbsolute) {
    bounds = _getBBox(target);
    xOrigin = bounds.x + (~originSplit[0].indexOf("%") ? xOrigin / 100 * bounds.width : xOrigin);
    yOrigin = bounds.y + (~(originSplit[1] || originSplit[0]).indexOf("%") ? yOrigin / 100 * bounds.height : yOrigin);
  } else if (matrix !== _identity2DMatrix && (determinant = a * d - b * c)) {
    //if it's zero (like if scaleX and scaleY are zero), skip it to avoid errors with dividing by zero.
    x = xOrigin * (d / determinant) + yOrigin * (-c / determinant) + (c * ty - d * tx) / determinant;
    y = xOrigin * (-b / determinant) + yOrigin * (a / determinant) - (a * ty - b * tx) / determinant;
    xOrigin = x;
    yOrigin = y;
  }

  if (smooth || smooth !== false && cache.smooth) {
    tx = xOrigin - xOriginOld;
    ty = yOrigin - yOriginOld;
    cache.xOffset = xOffsetOld + (tx * a + ty * c) - tx;
    cache.yOffset = yOffsetOld + (tx * b + ty * d) - ty;
  } else {
    cache.xOffset = cache.yOffset = 0;
  }

  cache.xOrigin = xOrigin;
  cache.yOrigin = yOrigin;
  cache.smooth = !!smooth;
  cache.origin = origin;
  cache.originIsAbsolute = !!originIsAbsolute;
  target.style[_transformOriginProp] = "0px 0px"; //otherwise, if someone sets  an origin via CSS, it will likely interfere with the SVG transform attribute ones (because remember, we're baking the origin into the matrix() value).

  if (pluginToAddPropTweensTo) {
    _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOrigin", xOriginOld, xOrigin);

    _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOrigin", yOriginOld, yOrigin);

    _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOffset", xOffsetOld, cache.xOffset);

    _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOffset", yOffsetOld, cache.yOffset);
  }

  target.setAttribute("data-svg-origin", xOrigin + " " + yOrigin);
},
    _parseTransform = function _parseTransform(target, uncache) {
  var cache = target._gsap || new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.GSCache(target);

  if ("x" in cache && !uncache && !cache.uncache) {
    return cache;
  }

  var style = target.style,
      invertedScaleX = cache.scaleX < 0,
      px = "px",
      deg = "deg",
      origin = _getComputedProperty(target, _transformOriginProp) || "0",
      x,
      y,
      z,
      scaleX,
      scaleY,
      rotation,
      rotationX,
      rotationY,
      skewX,
      skewY,
      perspective,
      xOrigin,
      yOrigin,
      matrix,
      angle,
      cos,
      sin,
      a,
      b,
      c,
      d,
      a12,
      a22,
      t1,
      t2,
      t3,
      a13,
      a23,
      a33,
      a42,
      a43,
      a32;
  x = y = z = rotation = rotationX = rotationY = skewX = skewY = perspective = 0;
  scaleX = scaleY = 1;
  cache.svg = !!(target.getCTM && _isSVG(target));
  matrix = _getMatrix(target, cache.svg);

  if (cache.svg) {
    t1 = (!cache.uncache || origin === "0px 0px") && !uncache && target.getAttribute("data-svg-origin"); // if origin is 0,0 and cache.uncache is true, let the recorded data-svg-origin stay. Otherwise, whenever we set cache.uncache to true, we'd need to set element.style.transformOrigin = (cache.xOrigin - bbox.x) + "px " + (cache.yOrigin - bbox.y) + "px". Remember, to work around browser inconsistencies we always force SVG elements' transformOrigin to 0,0 and offset the translation accordingly.

    _applySVGOrigin(target, t1 || origin, !!t1 || cache.originIsAbsolute, cache.smooth !== false, matrix);
  }

  xOrigin = cache.xOrigin || 0;
  yOrigin = cache.yOrigin || 0;

  if (matrix !== _identity2DMatrix) {
    a = matrix[0]; //a11

    b = matrix[1]; //a21

    c = matrix[2]; //a31

    d = matrix[3]; //a41

    x = a12 = matrix[4];
    y = a22 = matrix[5]; //2D matrix

    if (matrix.length === 6) {
      scaleX = Math.sqrt(a * a + b * b);
      scaleY = Math.sqrt(d * d + c * c);
      rotation = a || b ? _atan2(b, a) * _RAD2DEG : 0; //note: if scaleX is 0, we cannot accurately measure rotation. Same for skewX with a scaleY of 0. Therefore, we default to the previously recorded value (or zero if that doesn't exist).

      skewX = c || d ? _atan2(c, d) * _RAD2DEG + rotation : 0;
      skewX && (scaleY *= Math.abs(Math.cos(skewX * _DEG2RAD)));

      if (cache.svg) {
        x -= xOrigin - (xOrigin * a + yOrigin * c);
        y -= yOrigin - (xOrigin * b + yOrigin * d);
      } //3D matrix

    } else {
      a32 = matrix[6];
      a42 = matrix[7];
      a13 = matrix[8];
      a23 = matrix[9];
      a33 = matrix[10];
      a43 = matrix[11];
      x = matrix[12];
      y = matrix[13];
      z = matrix[14];
      angle = _atan2(a32, a33);
      rotationX = angle * _RAD2DEG; //rotationX

      if (angle) {
        cos = Math.cos(-angle);
        sin = Math.sin(-angle);
        t1 = a12 * cos + a13 * sin;
        t2 = a22 * cos + a23 * sin;
        t3 = a32 * cos + a33 * sin;
        a13 = a12 * -sin + a13 * cos;
        a23 = a22 * -sin + a23 * cos;
        a33 = a32 * -sin + a33 * cos;
        a43 = a42 * -sin + a43 * cos;
        a12 = t1;
        a22 = t2;
        a32 = t3;
      } //rotationY


      angle = _atan2(-c, a33);
      rotationY = angle * _RAD2DEG;

      if (angle) {
        cos = Math.cos(-angle);
        sin = Math.sin(-angle);
        t1 = a * cos - a13 * sin;
        t2 = b * cos - a23 * sin;
        t3 = c * cos - a33 * sin;
        a43 = d * sin + a43 * cos;
        a = t1;
        b = t2;
        c = t3;
      } //rotationZ


      angle = _atan2(b, a);
      rotation = angle * _RAD2DEG;

      if (angle) {
        cos = Math.cos(angle);
        sin = Math.sin(angle);
        t1 = a * cos + b * sin;
        t2 = a12 * cos + a22 * sin;
        b = b * cos - a * sin;
        a22 = a22 * cos - a12 * sin;
        a = t1;
        a12 = t2;
      }

      if (rotationX && Math.abs(rotationX) + Math.abs(rotation) > 359.9) {
        //when rotationY is set, it will often be parsed as 180 degrees different than it should be, and rotationX and rotation both being 180 (it looks the same), so we adjust for that here.
        rotationX = rotation = 0;
        rotationY = 180 - rotationY;
      }

      scaleX = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(Math.sqrt(a * a + b * b + c * c));
      scaleY = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(Math.sqrt(a22 * a22 + a32 * a32));
      angle = _atan2(a12, a22);
      skewX = Math.abs(angle) > 0.0002 ? angle * _RAD2DEG : 0;
      perspective = a43 ? 1 / (a43 < 0 ? -a43 : a43) : 0;
    }

    if (cache.svg) {
      //sense if there are CSS transforms applied on an SVG element in which case we must overwrite them when rendering. The transform attribute is more reliable cross-browser, but we can't just remove the CSS ones because they may be applied in a CSS rule somewhere (not just inline).
      t1 = target.getAttribute("transform");
      cache.forceCSS = target.setAttribute("transform", "") || !_isNullTransform(_getComputedProperty(target, _transformProp));
      t1 && target.setAttribute("transform", t1);
    }
  }

  if (Math.abs(skewX) > 90 && Math.abs(skewX) < 270) {
    if (invertedScaleX) {
      scaleX *= -1;
      skewX += rotation <= 0 ? 180 : -180;
      rotation += rotation <= 0 ? 180 : -180;
    } else {
      scaleY *= -1;
      skewX += skewX <= 0 ? 180 : -180;
    }
  }

  uncache = uncache || cache.uncache;
  cache.x = x - ((cache.xPercent = x && (!uncache && cache.xPercent || (Math.round(target.offsetWidth / 2) === Math.round(-x) ? -50 : 0))) ? target.offsetWidth * cache.xPercent / 100 : 0) + px;
  cache.y = y - ((cache.yPercent = y && (!uncache && cache.yPercent || (Math.round(target.offsetHeight / 2) === Math.round(-y) ? -50 : 0))) ? target.offsetHeight * cache.yPercent / 100 : 0) + px;
  cache.z = z + px;
  cache.scaleX = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(scaleX);
  cache.scaleY = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(scaleY);
  cache.rotation = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(rotation) + deg;
  cache.rotationX = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(rotationX) + deg;
  cache.rotationY = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(rotationY) + deg;
  cache.skewX = skewX + deg;
  cache.skewY = skewY + deg;
  cache.transformPerspective = perspective + px;

  if (cache.zOrigin = parseFloat(origin.split(" ")[2]) || 0) {
    style[_transformOriginProp] = _firstTwoOnly(origin);
  }

  cache.xOffset = cache.yOffset = 0;
  cache.force3D = _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._config.force3D;
  cache.renderTransform = cache.svg ? _renderSVGTransforms : _supports3D ? _renderCSSTransforms : _renderNon3DTransforms;
  cache.uncache = 0;
  return cache;
},
    _firstTwoOnly = function _firstTwoOnly(value) {
  return (value = value.split(" "))[0] + " " + value[1];
},
    //for handling transformOrigin values, stripping out the 3rd dimension
_addPxTranslate = function _addPxTranslate(target, start, value) {
  var unit = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(start);
  return (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(parseFloat(start) + parseFloat(_convertToUnit(target, "x", value + "px", unit))) + unit;
},
    _renderNon3DTransforms = function _renderNon3DTransforms(ratio, cache) {
  cache.z = "0px";
  cache.rotationY = cache.rotationX = "0deg";
  cache.force3D = 0;

  _renderCSSTransforms(ratio, cache);
},
    _zeroDeg = "0deg",
    _zeroPx = "0px",
    _endParenthesis = ") ",
    _renderCSSTransforms = function _renderCSSTransforms(ratio, cache) {
  var _ref = cache || this,
      xPercent = _ref.xPercent,
      yPercent = _ref.yPercent,
      x = _ref.x,
      y = _ref.y,
      z = _ref.z,
      rotation = _ref.rotation,
      rotationY = _ref.rotationY,
      rotationX = _ref.rotationX,
      skewX = _ref.skewX,
      skewY = _ref.skewY,
      scaleX = _ref.scaleX,
      scaleY = _ref.scaleY,
      transformPerspective = _ref.transformPerspective,
      force3D = _ref.force3D,
      target = _ref.target,
      zOrigin = _ref.zOrigin,
      transforms = "",
      use3D = force3D === "auto" && ratio && ratio !== 1 || force3D === true; // Safari has a bug that causes it not to render 3D transform-origin values properly, so we force the z origin to 0, record it in the cache, and then do the math here to offset the translate values accordingly (basically do the 3D transform-origin part manually)


  if (zOrigin && (rotationX !== _zeroDeg || rotationY !== _zeroDeg)) {
    var angle = parseFloat(rotationY) * _DEG2RAD,
        a13 = Math.sin(angle),
        a33 = Math.cos(angle),
        cos;

    angle = parseFloat(rotationX) * _DEG2RAD;
    cos = Math.cos(angle);
    x = _addPxTranslate(target, x, a13 * cos * -zOrigin);
    y = _addPxTranslate(target, y, -Math.sin(angle) * -zOrigin);
    z = _addPxTranslate(target, z, a33 * cos * -zOrigin + zOrigin);
  }

  if (transformPerspective !== _zeroPx) {
    transforms += "perspective(" + transformPerspective + _endParenthesis;
  }

  if (xPercent || yPercent) {
    transforms += "translate(" + xPercent + "%, " + yPercent + "%) ";
  }

  if (use3D || x !== _zeroPx || y !== _zeroPx || z !== _zeroPx) {
    transforms += z !== _zeroPx || use3D ? "translate3d(" + x + ", " + y + ", " + z + ") " : "translate(" + x + ", " + y + _endParenthesis;
  }

  if (rotation !== _zeroDeg) {
    transforms += "rotate(" + rotation + _endParenthesis;
  }

  if (rotationY !== _zeroDeg) {
    transforms += "rotateY(" + rotationY + _endParenthesis;
  }

  if (rotationX !== _zeroDeg) {
    transforms += "rotateX(" + rotationX + _endParenthesis;
  }

  if (skewX !== _zeroDeg || skewY !== _zeroDeg) {
    transforms += "skew(" + skewX + ", " + skewY + _endParenthesis;
  }

  if (scaleX !== 1 || scaleY !== 1) {
    transforms += "scale(" + scaleX + ", " + scaleY + _endParenthesis;
  }

  target.style[_transformProp] = transforms || "translate(0, 0)";
},
    _renderSVGTransforms = function _renderSVGTransforms(ratio, cache) {
  var _ref2 = cache || this,
      xPercent = _ref2.xPercent,
      yPercent = _ref2.yPercent,
      x = _ref2.x,
      y = _ref2.y,
      rotation = _ref2.rotation,
      skewX = _ref2.skewX,
      skewY = _ref2.skewY,
      scaleX = _ref2.scaleX,
      scaleY = _ref2.scaleY,
      target = _ref2.target,
      xOrigin = _ref2.xOrigin,
      yOrigin = _ref2.yOrigin,
      xOffset = _ref2.xOffset,
      yOffset = _ref2.yOffset,
      forceCSS = _ref2.forceCSS,
      tx = parseFloat(x),
      ty = parseFloat(y),
      a11,
      a21,
      a12,
      a22,
      temp;

  rotation = parseFloat(rotation);
  skewX = parseFloat(skewX);
  skewY = parseFloat(skewY);

  if (skewY) {
    //for performance reasons, we combine all skewing into the skewX and rotation values. Remember, a skewY of 10 degrees looks the same as a rotation of 10 degrees plus a skewX of 10 degrees.
    skewY = parseFloat(skewY);
    skewX += skewY;
    rotation += skewY;
  }

  if (rotation || skewX) {
    rotation *= _DEG2RAD;
    skewX *= _DEG2RAD;
    a11 = Math.cos(rotation) * scaleX;
    a21 = Math.sin(rotation) * scaleX;
    a12 = Math.sin(rotation - skewX) * -scaleY;
    a22 = Math.cos(rotation - skewX) * scaleY;

    if (skewX) {
      skewY *= _DEG2RAD;
      temp = Math.tan(skewX - skewY);
      temp = Math.sqrt(1 + temp * temp);
      a12 *= temp;
      a22 *= temp;

      if (skewY) {
        temp = Math.tan(skewY);
        temp = Math.sqrt(1 + temp * temp);
        a11 *= temp;
        a21 *= temp;
      }
    }

    a11 = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(a11);
    a21 = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(a21);
    a12 = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(a12);
    a22 = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(a22);
  } else {
    a11 = scaleX;
    a22 = scaleY;
    a21 = a12 = 0;
  }

  if (tx && !~(x + "").indexOf("px") || ty && !~(y + "").indexOf("px")) {
    tx = _convertToUnit(target, "x", x, "px");
    ty = _convertToUnit(target, "y", y, "px");
  }

  if (xOrigin || yOrigin || xOffset || yOffset) {
    tx = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(tx + xOrigin - (xOrigin * a11 + yOrigin * a12) + xOffset);
    ty = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(ty + yOrigin - (xOrigin * a21 + yOrigin * a22) + yOffset);
  }

  if (xPercent || yPercent) {
    //The SVG spec doesn't support percentage-based translation in the "transform" attribute, so we merge it into the translation to simulate it.
    temp = target.getBBox();
    tx = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(tx + xPercent / 100 * temp.width);
    ty = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(ty + yPercent / 100 * temp.height);
  }

  temp = "matrix(" + a11 + "," + a21 + "," + a12 + "," + a22 + "," + tx + "," + ty + ")";
  target.setAttribute("transform", temp);
  forceCSS && (target.style[_transformProp] = temp); //some browsers prioritize CSS transforms over the transform attribute. When we sense that the user has CSS transforms applied, we must overwrite them this way (otherwise some browser simply won't render the  transform attribute changes!)
},
    _addRotationalPropTween = function _addRotationalPropTween(plugin, target, property, startNum, endValue) {
  var cap = 360,
      isString = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._isString)(endValue),
      endNum = parseFloat(endValue) * (isString && ~endValue.indexOf("rad") ? _RAD2DEG : 1),
      change = endNum - startNum,
      finalValue = startNum + change + "deg",
      direction,
      pt;

  if (isString) {
    direction = endValue.split("_")[1];

    if (direction === "short") {
      change %= cap;

      if (change !== change % (cap / 2)) {
        change += change < 0 ? cap : -cap;
      }
    }

    if (direction === "cw" && change < 0) {
      change = (change + cap * _bigNum) % cap - ~~(change / cap) * cap;
    } else if (direction === "ccw" && change > 0) {
      change = (change - cap * _bigNum) % cap - ~~(change / cap) * cap;
    }
  }

  plugin._pt = pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(plugin._pt, target, property, startNum, change, _renderPropWithEnd);
  pt.e = finalValue;
  pt.u = "deg";

  plugin._props.push(property);

  return pt;
},
    _assign = function _assign(target, source) {
  // Internet Explorer doesn't have Object.assign(), so we recreate it here.
  for (var p in source) {
    target[p] = source[p];
  }

  return target;
},
    _addRawTransformPTs = function _addRawTransformPTs(plugin, transforms, target) {
  //for handling cases where someone passes in a whole transform string, like transform: "scale(2, 3) rotate(20deg) translateY(30em)"
  var startCache = _assign({}, target._gsap),
      exclude = "perspective,force3D,transformOrigin,svgOrigin",
      style = target.style,
      endCache,
      p,
      startValue,
      endValue,
      startNum,
      endNum,
      startUnit,
      endUnit;

  if (startCache.svg) {
    startValue = target.getAttribute("transform");
    target.setAttribute("transform", "");
    style[_transformProp] = transforms;
    endCache = _parseTransform(target, 1);

    _removeProperty(target, _transformProp);

    target.setAttribute("transform", startValue);
  } else {
    startValue = getComputedStyle(target)[_transformProp];
    style[_transformProp] = transforms;
    endCache = _parseTransform(target, 1);
    style[_transformProp] = startValue;
  }

  for (p in _transformProps) {
    startValue = startCache[p];
    endValue = endCache[p];

    if (startValue !== endValue && exclude.indexOf(p) < 0) {
      //tweening to no perspective gives very unintuitive results - just keep the same perspective in that case.
      startUnit = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(startValue);
      endUnit = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(endValue);
      startNum = startUnit !== endUnit ? _convertToUnit(target, p, startValue, endUnit) : parseFloat(startValue);
      endNum = parseFloat(endValue);
      plugin._pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(plugin._pt, endCache, p, startNum, endNum - startNum, _renderCSSProp);
      plugin._pt.u = endUnit || 0;

      plugin._props.push(p);
    }
  }

  _assign(endCache, startCache);
}; // handle splitting apart padding, margin, borderWidth, and borderRadius into their 4 components. Firefox, for example, won't report borderRadius correctly - it will only do borderTopLeftRadius and the other corners. We also want to handle paddingTop, marginLeft, borderRightWidth, etc.


(0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._forEachName)("padding,margin,Width,Radius", function (name, index) {
  var t = "Top",
      r = "Right",
      b = "Bottom",
      l = "Left",
      props = (index < 3 ? [t, r, b, l] : [t + l, t + r, b + r, b + l]).map(function (side) {
    return index < 2 ? name + side : "border" + side + name;
  });

  _specialProps[index > 1 ? "border" + name : name] = function (plugin, target, property, endValue, tween) {
    var a, vars;

    if (arguments.length < 4) {
      // getter, passed target, property, and unit (from _get())
      a = props.map(function (prop) {
        return _get(plugin, prop, property);
      });
      vars = a.join(" ");
      return vars.split(a[0]).length === 5 ? a[0] : vars;
    }

    a = (endValue + "").split(" ");
    vars = {};
    props.forEach(function (prop, i) {
      return vars[prop] = a[i] = a[i] || a[(i - 1) / 2 | 0];
    });
    plugin.init(target, vars, tween);
  };
});

var CSSPlugin = {
  name: "css",
  register: _initCore,
  targetTest: function targetTest(target) {
    return target.style && target.nodeType;
  },
  init: function init(target, vars, tween, index, targets) {
    var props = this._props,
        style = target.style,
        startAt = tween.vars.startAt,
        startValue,
        endValue,
        endNum,
        startNum,
        type,
        specialProp,
        p,
        startUnit,
        endUnit,
        relative,
        isTransformRelated,
        transformPropTween,
        cache,
        smooth,
        hasPriority;
    _pluginInitted || _initCore();

    for (p in vars) {
      if (p === "autoRound") {
        continue;
      }

      endValue = vars[p];

      if (_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._plugins[p] && (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._checkPlugin)(p, vars, tween, index, target, targets)) {
        // plugins
        continue;
      }

      type = typeof endValue;
      specialProp = _specialProps[p];

      if (type === "function") {
        endValue = endValue.call(tween, index, target, targets);
        type = typeof endValue;
      }

      if (type === "string" && ~endValue.indexOf("random(")) {
        endValue = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._replaceRandom)(endValue);
      }

      if (specialProp) {
        specialProp(this, target, p, endValue, tween) && (hasPriority = 1);
      } else if (p.substr(0, 2) === "--") {
        //CSS variable
        startValue = (getComputedStyle(target).getPropertyValue(p) + "").trim();
        endValue += "";
        _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._colorExp.lastIndex = 0;

        if (!_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._colorExp.test(startValue)) {
          // colors don't have units
          startUnit = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(startValue);
          endUnit = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(endValue);
        }

        endUnit ? startUnit !== endUnit && (startValue = _convertToUnit(target, p, startValue, endUnit) + endUnit) : startUnit && (endValue += startUnit);
        this.add(style, "setProperty", startValue, endValue, index, targets, 0, 0, p);
        props.push(p);
      } else if (type !== "undefined") {
        if (startAt && p in startAt) {
          // in case someone hard-codes a complex value as the start, like top: "calc(2vh / 2)". Without this, it'd use the computed value (always in px)
          startValue = typeof startAt[p] === "function" ? startAt[p].call(tween, index, target, targets) : startAt[p];
          (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._isString)(startValue) && ~startValue.indexOf("random(") && (startValue = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._replaceRandom)(startValue));
          (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(startValue + "") || (startValue += _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._config.units[p] || (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(_get(target, p)) || ""); // for cases when someone passes in a unitless value like {x: 100}; if we try setting translate(100, 0px) it won't work.

          (startValue + "").charAt(1) === "=" && (startValue = _get(target, p)); // can't work with relative values
        } else {
          startValue = _get(target, p);
        }

        startNum = parseFloat(startValue);
        relative = type === "string" && endValue.charAt(1) === "=" && endValue.substr(0, 2);
        relative && (endValue = endValue.substr(2));
        endNum = parseFloat(endValue);

        if (p in _propertyAliases) {
          if (p === "autoAlpha") {
            //special case where we control the visibility along with opacity. We still allow the opacity value to pass through and get tweened.
            if (startNum === 1 && _get(target, "visibility") === "hidden" && endNum) {
              //if visibility is initially set to "hidden", we should interpret that as intent to make opacity 0 (a convenience)
              startNum = 0;
            }

            _addNonTweeningPT(this, style, "visibility", startNum ? "inherit" : "hidden", endNum ? "inherit" : "hidden", !endNum);
          }

          if (p !== "scale" && p !== "transform") {
            p = _propertyAliases[p];
            ~p.indexOf(",") && (p = p.split(",")[0]);
          }
        }

        isTransformRelated = p in _transformProps; //--- TRANSFORM-RELATED ---

        if (isTransformRelated) {
          if (!transformPropTween) {
            cache = target._gsap;
            cache.renderTransform && !vars.parseTransform || _parseTransform(target, vars.parseTransform); // if, for example, gsap.set(... {transform:"translateX(50vw)"}), the _get() call doesn't parse the transform, thus cache.renderTransform won't be set yet so force the parsing of the transform here.

            smooth = vars.smoothOrigin !== false && cache.smooth;
            transformPropTween = this._pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(this._pt, style, _transformProp, 0, 1, cache.renderTransform, cache, 0, -1); //the first time through, create the rendering PropTween so that it runs LAST (in the linked list, we keep adding to the beginning)

            transformPropTween.dep = 1; //flag it as dependent so that if things get killed/overwritten and this is the only PropTween left, we can safely kill the whole tween.
          }

          if (p === "scale") {
            this._pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(this._pt, cache, "scaleY", cache.scaleY, (relative ? (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._parseRelative)(cache.scaleY, relative + endNum) : endNum) - cache.scaleY || 0);
            props.push("scaleY", p);
            p += "X";
          } else if (p === "transformOrigin") {
            endValue = _convertKeywordsToPercentages(endValue); //in case something like "left top" or "bottom right" is passed in. Convert to percentages.

            if (cache.svg) {
              _applySVGOrigin(target, endValue, 0, smooth, 0, this);
            } else {
              endUnit = parseFloat(endValue.split(" ")[2]) || 0; //handle the zOrigin separately!

              endUnit !== cache.zOrigin && _addNonTweeningPT(this, cache, "zOrigin", cache.zOrigin, endUnit);

              _addNonTweeningPT(this, style, p, _firstTwoOnly(startValue), _firstTwoOnly(endValue));
            }

            continue;
          } else if (p === "svgOrigin") {
            _applySVGOrigin(target, endValue, 1, smooth, 0, this);

            continue;
          } else if (p in _rotationalProperties) {
            _addRotationalPropTween(this, cache, p, startNum, relative ? (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._parseRelative)(startNum, relative + endValue) : endValue);

            continue;
          } else if (p === "smoothOrigin") {
            _addNonTweeningPT(this, cache, "smooth", cache.smooth, endValue);

            continue;
          } else if (p === "force3D") {
            cache[p] = endValue;
            continue;
          } else if (p === "transform") {
            _addRawTransformPTs(this, endValue, target);

            continue;
          }
        } else if (!(p in style)) {
          p = _checkPropPrefix(p) || p;
        }

        if (isTransformRelated || (endNum || endNum === 0) && (startNum || startNum === 0) && !_complexExp.test(endValue) && p in style) {
          startUnit = (startValue + "").substr((startNum + "").length);
          endNum || (endNum = 0); // protect against NaN

          endUnit = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(endValue) || (p in _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._config.units ? _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._config.units[p] : startUnit);
          startUnit !== endUnit && (startNum = _convertToUnit(target, p, startValue, endUnit));
          this._pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(this._pt, isTransformRelated ? cache : style, p, startNum, (relative ? (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._parseRelative)(startNum, relative + endNum) : endNum) - startNum, !isTransformRelated && (endUnit === "px" || p === "zIndex") && vars.autoRound !== false ? _renderRoundedCSSProp : _renderCSSProp);
          this._pt.u = endUnit || 0;

          if (startUnit !== endUnit && endUnit !== "%") {
            //when the tween goes all the way back to the beginning, we need to revert it to the OLD/ORIGINAL value (with those units). We record that as a "b" (beginning) property and point to a render method that handles that. (performance optimization)
            this._pt.b = startValue;
            this._pt.r = _renderCSSPropWithBeginning;
          }
        } else if (!(p in style)) {
          if (p in target) {
            //maybe it's not a style - it could be a property added directly to an element in which case we'll try to animate that.
            this.add(target, p, startValue || target[p], relative ? relative + endValue : endValue, index, targets);
          } else {
            (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._missingPlugin)(p, endValue);

            continue;
          }
        } else {
          _tweenComplexCSSString.call(this, target, p, startValue, relative ? relative + endValue : endValue);
        }

        props.push(p);
      }
    }

    hasPriority && (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._sortPropTweensByPriority)(this);
  },
  get: _get,
  aliases: _propertyAliases,
  getSetter: function getSetter(target, property, plugin) {
    //returns a setter function that accepts target, property, value and applies it accordingly. Remember, properties like "x" aren't as simple as target.style.property = value because they've got to be applied to a proxy object and then merged into a transform string in a renderer.
    var p = _propertyAliases[property];
    p && p.indexOf(",") < 0 && (property = p);
    return property in _transformProps && property !== _transformOriginProp && (target._gsap.x || _get(target, "x")) ? plugin && _recentSetterPlugin === plugin ? property === "scale" ? _setterScale : _setterTransform : (_recentSetterPlugin = plugin || {}) && (property === "scale" ? _setterScaleWithRender : _setterTransformWithRender) : target.style && !(0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._isUndefined)(target.style[property]) ? _setterCSSStyle : ~property.indexOf("-") ? _setterCSSProp : (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._getSetter)(target, property);
  },
  core: {
    _removeProperty: _removeProperty,
    _getMatrix: _getMatrix
  }
};
_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.gsap.utils.checkPrefix = _checkPropPrefix;

(function (positionAndScale, rotation, others, aliases) {
  var all = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._forEachName)(positionAndScale + "," + rotation + "," + others, function (name) {
    _transformProps[name] = 1;
  });

  (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._forEachName)(rotation, function (name) {
    _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._config.units[name] = "deg";
    _rotationalProperties[name] = 1;
  });

  _propertyAliases[all[13]] = positionAndScale + "," + rotation;

  (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._forEachName)(aliases, function (name) {
    var split = name.split(":");
    _propertyAliases[split[1]] = all[split[0]];
  });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");

(0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._forEachName)("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function (name) {
  _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._config.units[name] = "px";
});

_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.gsap.registerPlugin(CSSPlugin);


/***/ }),

/***/ "./node_modules/gsap/Observer.js":
/*!***************************************!*\
  !*** ./node_modules/gsap/Observer.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Observer": () => (/* binding */ Observer),
/* harmony export */   "_getProxyProp": () => (/* binding */ _getProxyProp),
/* harmony export */   "_getScrollFunc": () => (/* binding */ _getScrollFunc),
/* harmony export */   "_getTarget": () => (/* binding */ _getTarget),
/* harmony export */   "_getVelocityProp": () => (/* binding */ _getVelocityProp),
/* harmony export */   "_horizontal": () => (/* binding */ _horizontal),
/* harmony export */   "_isViewport": () => (/* binding */ _isViewport),
/* harmony export */   "_proxies": () => (/* binding */ _proxies),
/* harmony export */   "_scrollers": () => (/* binding */ _scrollers),
/* harmony export */   "_vertical": () => (/* binding */ _vertical),
/* harmony export */   "default": () => (/* binding */ Observer)
/* harmony export */ });
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*!
 * Observer 3.10.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/

/* eslint-disable */
var gsap,
    _coreInitted,
    _clamp,
    _win,
    _doc,
    _docEl,
    _body,
    _isTouch,
    _pointerType,
    ScrollTrigger,
    _root,
    _normalizer,
    _eventTypes,
    _getGSAP = function _getGSAP() {
  return gsap || typeof window !== "undefined" && (gsap = window.gsap) && gsap.registerPlugin && gsap;
},
    _passThrough = function _passThrough(p) {
  return p;
},
    _startup = 1,
    _observers = [],
    _scrollers = [],
    _proxies = [],
    _getTime = Date.now,
    _bridge = function _bridge(name, value) {
  return value;
},
    _integrate = function _integrate() {
  var core = ScrollTrigger.core,
      data = core.bridge || {},
      scrollers = core._scrollers,
      proxies = core._proxies;
  scrollers.push.apply(scrollers, _scrollers);
  proxies.push.apply(proxies, _proxies);
  _scrollers = scrollers;
  _proxies = proxies;

  _bridge = function _bridge(name, value) {
    return data[name](value);
  };
},
    _getProxyProp = function _getProxyProp(element, property) {
  return ~_proxies.indexOf(element) && _proxies[_proxies.indexOf(element) + 1][property];
},
    _isViewport = function _isViewport(el) {
  return !!~_root.indexOf(el);
},
    _addListener = function _addListener(element, type, func, nonPassive, capture) {
  return element.addEventListener(type, func, {
    passive: !nonPassive,
    capture: !!capture
  });
},
    _removeListener = function _removeListener(element, type, func, capture) {
  return element.removeEventListener(type, func, !!capture);
},
    _scrollLeft = "scrollLeft",
    _scrollTop = "scrollTop",
    _onScroll = function _onScroll() {
  return _normalizer && _normalizer.isPressed || _scrollers.cache++;
},
    _scrollCacheFunc = function _scrollCacheFunc(f, doNotCache) {
  var cachingFunc = function cachingFunc(value) {
    // since reading the scrollTop/scrollLeft/pageOffsetY/pageOffsetX can trigger a layout, this function allows us to cache the value so it only gets read fresh after a "scroll" event fires (or while we're refreshing because that can lengthen the page and alter the scroll position). when "soft" is true, that means don't actually set the scroll, but cache the new value instead (useful in ScrollSmoother)
    if (value || value === 0) {
      _startup && (_win.history.scrollRestoration = "manual"); // otherwise the new position will get overwritten by the browser onload.

      var isNormalizing = _normalizer && _normalizer.isPressed;
      value = cachingFunc.v = Math.round(value) || (_normalizer && _normalizer.iOS ? 1 : 0); //TODO: iOS Bug: if you allow it to go to 0, Safari can start to report super strange (wildly inaccurate) touch positions!

      f(value);
      cachingFunc.cacheID = _scrollers.cache;
      isNormalizing && _bridge("ss", value); // set scroll (notify ScrollTrigger so it can dispatch a "scrollStart" event if necessary
    } else if (doNotCache || _scrollers.cache !== cachingFunc.cacheID || _bridge("ref")) {
      cachingFunc.cacheID = _scrollers.cache;
      cachingFunc.v = f();
    }

    return cachingFunc.v + cachingFunc.offset;
  };

  cachingFunc.offset = 0;
  return f && cachingFunc;
},
    _horizontal = {
  s: _scrollLeft,
  p: "left",
  p2: "Left",
  os: "right",
  os2: "Right",
  d: "width",
  d2: "Width",
  a: "x",
  sc: _scrollCacheFunc(function (value) {
    return arguments.length ? _win.scrollTo(value, _vertical.sc()) : _win.pageXOffset || _doc[_scrollLeft] || _docEl[_scrollLeft] || _body[_scrollLeft] || 0;
  })
},
    _vertical = {
  s: _scrollTop,
  p: "top",
  p2: "Top",
  os: "bottom",
  os2: "Bottom",
  d: "height",
  d2: "Height",
  a: "y",
  op: _horizontal,
  sc: _scrollCacheFunc(function (value) {
    return arguments.length ? _win.scrollTo(_horizontal.sc(), value) : _win.pageYOffset || _doc[_scrollTop] || _docEl[_scrollTop] || _body[_scrollTop] || 0;
  })
},
    _getTarget = function _getTarget(t) {
  return gsap.utils.toArray(t)[0] || (typeof t === "string" && gsap.config().nullTargetWarn !== false ? console.warn("Element not found:", t) : null);
},
    _getScrollFunc = function _getScrollFunc(element, _ref) {
  var s = _ref.s,
      sc = _ref.sc;

  // we store the scroller functions in a alternating sequenced Array like [element, verticalScrollFunc, horizontalScrollFunc, ...] so that we can minimize memory, maximize performance, and we also record the last position as a ".rec" property in order to revert to that after refreshing to ensure things don't shift around.
  var i = _scrollers.indexOf(element),
      offset = sc === _vertical.sc ? 1 : 2;

  !~i && (i = _scrollers.push(element) - 1);
  return _scrollers[i + offset] || (_scrollers[i + offset] = _scrollCacheFunc(_getProxyProp(element, s), true) || (_isViewport(element) ? sc : _scrollCacheFunc(function (value) {
    return arguments.length ? element[s] = value : element[s];
  })));
},
    _getVelocityProp = function _getVelocityProp(value, minTimeRefresh, useDelta) {
  var v1 = value,
      v2 = value,
      t1 = _getTime(),
      t2 = t1,
      min = minTimeRefresh || 50,
      dropToZeroTime = Math.max(500, min * 3),
      update = function update(value, force) {
    var t = _getTime();

    if (force || t - t1 > min) {
      v2 = v1;
      v1 = value;
      t2 = t1;
      t1 = t;
    } else if (useDelta) {
      v1 += value;
    } else {
      // not totally necessary, but makes it a bit more accurate by adjusting the v1 value according to the new slope. This way we're not just ignoring the incoming data. Removing for now because it doesn't seem to make much practical difference and it's probably not worth the kb.
      v1 = v2 + (value - v2) / (t - t2) * (t1 - t2);
    }
  },
      reset = function reset() {
    v2 = v1 = useDelta ? 0 : v1;
    t2 = t1 = 0;
  },
      getVelocity = function getVelocity(latestValue) {
    var tOld = t2,
        vOld = v2,
        t = _getTime();

    (latestValue || latestValue === 0) && latestValue !== v1 && update(latestValue);
    return t1 === t2 || t - t2 > dropToZeroTime ? 0 : (v1 + (useDelta ? vOld : -vOld)) / ((useDelta ? t : t1) - tOld) * 1000;
  };

  return {
    update: update,
    reset: reset,
    getVelocity: getVelocity
  };
},
    _getEvent = function _getEvent(e, preventDefault) {
  preventDefault && !e._gsapAllow && e.preventDefault();
  return e.changedTouches ? e.changedTouches[0] : e;
},
    _getAbsoluteMax = function _getAbsoluteMax(a) {
  var max = Math.max.apply(Math, a),
      min = Math.min.apply(Math, a);
  return Math.abs(max) >= Math.abs(min) ? max : min;
},
    _setScrollTrigger = function _setScrollTrigger() {
  ScrollTrigger = gsap.core.globals().ScrollTrigger;
  ScrollTrigger && ScrollTrigger.core && _integrate();
},
    _initCore = function _initCore(core) {
  gsap = core || _getGSAP();

  if (gsap && typeof document !== "undefined" && document.body) {
    _win = window;
    _doc = document;
    _docEl = _doc.documentElement;
    _body = _doc.body;
    _root = [_win, _doc, _docEl, _body];
    _clamp = gsap.utils.clamp;
    _pointerType = "onpointerenter" in _body ? "pointer" : "mouse"; // isTouch is 0 if no touch, 1 if ONLY touch, and 2 if it can accommodate touch but also other types like mouse/pointer.

    _isTouch = Observer.isTouch = _win.matchMedia && _win.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in _win || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0;
    _eventTypes = Observer.eventTypes = ("ontouchstart" in _docEl ? "touchstart,touchmove,touchcancel,touchend" : !("onpointerdown" in _docEl) ? "mousedown,mousemove,mouseup,mouseup" : "pointerdown,pointermove,pointercancel,pointerup").split(",");
    setTimeout(function () {
      return _startup = 0;
    }, 500);

    _setScrollTrigger();

    _coreInitted = 1;
  }

  return _coreInitted;
};

_horizontal.op = _vertical;
_scrollers.cache = 0;
var Observer = /*#__PURE__*/function () {
  function Observer(vars) {
    this.init(vars);
  }

  var _proto = Observer.prototype;

  _proto.init = function init(vars) {
    _coreInitted || _initCore(gsap) || console.warn("Please gsap.registerPlugin(Observer)");
    ScrollTrigger || _setScrollTrigger();
    var tolerance = vars.tolerance,
        dragMinimum = vars.dragMinimum,
        type = vars.type,
        target = vars.target,
        lineHeight = vars.lineHeight,
        debounce = vars.debounce,
        preventDefault = vars.preventDefault,
        onStop = vars.onStop,
        onStopDelay = vars.onStopDelay,
        ignore = vars.ignore,
        wheelSpeed = vars.wheelSpeed,
        event = vars.event,
        onDragStart = vars.onDragStart,
        onDragEnd = vars.onDragEnd,
        onDrag = vars.onDrag,
        onPress = vars.onPress,
        onRelease = vars.onRelease,
        onRight = vars.onRight,
        onLeft = vars.onLeft,
        onUp = vars.onUp,
        onDown = vars.onDown,
        onChangeX = vars.onChangeX,
        onChangeY = vars.onChangeY,
        onChange = vars.onChange,
        onToggleX = vars.onToggleX,
        onToggleY = vars.onToggleY,
        onHover = vars.onHover,
        onHoverEnd = vars.onHoverEnd,
        onMove = vars.onMove,
        ignoreCheck = vars.ignoreCheck,
        isNormalizer = vars.isNormalizer,
        onGestureStart = vars.onGestureStart,
        onGestureEnd = vars.onGestureEnd,
        onWheel = vars.onWheel,
        onEnable = vars.onEnable,
        onDisable = vars.onDisable,
        onClick = vars.onClick,
        scrollSpeed = vars.scrollSpeed,
        capture = vars.capture,
        allowClicks = vars.allowClicks,
        lockAxis = vars.lockAxis,
        onLockAxis = vars.onLockAxis;
    this.target = target = _getTarget(target) || _docEl;
    this.vars = vars;
    ignore && (ignore = gsap.utils.toArray(ignore));
    tolerance = tolerance || 0;
    dragMinimum = dragMinimum || 0;
    wheelSpeed = wheelSpeed || 1;
    scrollSpeed = scrollSpeed || 1;
    type = type || "wheel,touch,pointer";
    debounce = debounce !== false;
    lineHeight || (lineHeight = parseFloat(_win.getComputedStyle(_body).lineHeight) || 22); // note: browser may report "normal", so default to 22.

    var id,
        onStopDelayedCall,
        dragged,
        moved,
        wheeled,
        locked,
        axis,
        self = this,
        prevDeltaX = 0,
        prevDeltaY = 0,
        scrollFuncX = _getScrollFunc(target, _horizontal),
        scrollFuncY = _getScrollFunc(target, _vertical),
        scrollX = scrollFuncX(),
        scrollY = scrollFuncY(),
        limitToTouch = ~type.indexOf("touch") && !~type.indexOf("pointer") && _eventTypes[0] === "pointerdown",
        // for devices that accommodate mouse events and touch events, we need to distinguish.
    isViewport = _isViewport(target),
        ownerDoc = target.ownerDocument || _doc,
        deltaX = [0, 0, 0],
        // wheel, scroll, pointer/touch
    deltaY = [0, 0, 0],
        onClickTime = 0,
        clickCapture = function clickCapture() {
      return onClickTime = _getTime();
    },
        _ignoreCheck = function _ignoreCheck(e, isPointerOrTouch) {
      return (self.event = e) && ignore && ~ignore.indexOf(e.target) || isPointerOrTouch && limitToTouch && e.pointerType !== "touch" || ignoreCheck && ignoreCheck(e, isPointerOrTouch);
    },
        onStopFunc = function onStopFunc() {
      self._vx.reset();

      self._vy.reset();

      onStopDelayedCall.pause();
      onStop && onStop(self);
    },
        update = function update() {
      var dx = self.deltaX = _getAbsoluteMax(deltaX),
          dy = self.deltaY = _getAbsoluteMax(deltaY),
          changedX = Math.abs(dx) >= tolerance,
          changedY = Math.abs(dy) >= tolerance;

      onChange && (changedX || changedY) && onChange(self, dx, dy, deltaX, deltaY); // in ScrollTrigger.normalizeScroll(), we need to know if it was touch/pointer so we need access to the deltaX/deltaY Arrays before we clear them out.

      if (changedX) {
        onRight && self.deltaX > 0 && onRight(self);
        onLeft && self.deltaX < 0 && onLeft(self);
        onChangeX && onChangeX(self);
        onToggleX && self.deltaX < 0 !== prevDeltaX < 0 && onToggleX(self);
        prevDeltaX = self.deltaX;
        deltaX[0] = deltaX[1] = deltaX[2] = 0;
      }

      if (changedY) {
        onDown && self.deltaY > 0 && onDown(self);
        onUp && self.deltaY < 0 && onUp(self);
        onChangeY && onChangeY(self);
        onToggleY && self.deltaY < 0 !== prevDeltaY < 0 && onToggleY(self);
        prevDeltaY = self.deltaY;
        deltaY[0] = deltaY[1] = deltaY[2] = 0;
      }

      if (moved || dragged) {
        onMove && onMove(self);
        onLockAxis && locked && onLockAxis(self);

        if (dragged) {
          onDrag(self);
          dragged = false;
        }

        moved = locked = false;
      }

      if (wheeled) {
        onWheel(self);
        wheeled = false;
      }

      id = 0;
    },
        onDelta = function onDelta(x, y, index) {
      deltaX[index] += x;
      deltaY[index] += y;

      self._vx.update(x);

      self._vy.update(y);

      debounce ? id || (id = requestAnimationFrame(update)) : update();
    },
        onTouchOrPointerDelta = function onTouchOrPointerDelta(x, y) {
      if (axis !== "y") {
        deltaX[2] += x;

        self._vx.update(x, true); // update the velocity as frequently as possible instead of in the debounced function so that very quick touch-scrolls (flicks) feel natural. If it's the mouse/touch/pointer, force it so that we get snappy/accurate momentum scroll.

      }

      if (axis !== "x") {
        deltaY[2] += y;

        self._vy.update(y, true);
      }

      if (lockAxis && !axis) {
        self.axis = axis = Math.abs(x) > Math.abs(y) ? "x" : "y";
        locked = true;
      }

      debounce ? id || (id = requestAnimationFrame(update)) : update();
    },
        _onDrag = function _onDrag(e) {
      if (_ignoreCheck(e, 1)) {
        return;
      }

      e = _getEvent(e, preventDefault);
      var x = e.clientX,
          y = e.clientY,
          dx = x - self.x,
          dy = y - self.y,
          isDragging = self.isDragging;
      self.x = x;
      self.y = y;

      if (isDragging || Math.abs(self.startX - x) >= dragMinimum || Math.abs(self.startY - y) >= dragMinimum) {
        onDrag && (dragged = true);
        isDragging || (self.isDragging = true);
        onTouchOrPointerDelta(dx, dy);
        isDragging || onDragStart && onDragStart(self);
      }
    },
        _onPress = self.onPress = function (e) {
      if (_ignoreCheck(e, 1)) {
        return;
      }

      self.axis = axis = null;
      onStopDelayedCall.pause();
      self.isPressed = true;
      e = _getEvent(e); // note: may need to preventDefault(?) Won't side-scroll on iOS Safari if we do, though.

      prevDeltaX = prevDeltaY = 0;
      self.startX = self.x = e.clientX;
      self.startY = self.y = e.clientY;

      self._vx.reset(); // otherwise the t2 may be stale if the user touches and flicks super fast and releases in less than 2 requestAnimationFrame ticks, causing velocity to be 0.


      self._vy.reset();

      _addListener(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, preventDefault, true);

      self.deltaX = self.deltaY = 0;
      onPress && onPress(self);
    },
        _onRelease = function _onRelease(e) {
      if (_ignoreCheck(e, 1)) {
        return;
      }

      _removeListener(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, true);

      var wasDragging = self.isDragging && (Math.abs(self.x - self.startX) > 3 || Math.abs(self.y - self.startY) > 3),
          // some touch devices need some wiggle room in terms of sensing clicks - the finger may move a few pixels.
      eventData = _getEvent(e);

      if (!wasDragging) {
        self._vx.reset();

        self._vy.reset();

        if (preventDefault && allowClicks) {
          gsap.delayedCall(0.08, function () {
            // some browsers (like Firefox) won't trust script-generated clicks, so if the user tries to click on a video to play it, for example, it simply won't work. Since a regular "click" event will most likely be generated anyway (one that has its isTrusted flag set to true), we must slightly delay our script-generated click so that the "real"/trusted one is prioritized. Remember, when there are duplicate events in quick succession, we suppress all but the first one. Some browsers don't even trigger the "real" one at all, so our synthetic one is a safety valve that ensures that no matter what, a click event does get dispatched.
            if (_getTime() - onClickTime > 300 && !e.defaultPrevented) {
              if (e.target.click) {
                //some browsers (like mobile Safari) don't properly trigger the click event
                e.target.click();
              } else if (ownerDoc.createEvent) {
                var syntheticEvent = ownerDoc.createEvent("MouseEvents");
                syntheticEvent.initMouseEvent("click", true, true, _win, 1, eventData.screenX, eventData.screenY, eventData.clientX, eventData.clientY, false, false, false, false, 0, null);
                e.target.dispatchEvent(syntheticEvent);
              }
            }
          });
        }
      }

      self.isDragging = self.isGesturing = self.isPressed = false;
      onStop && !isNormalizer && onStopDelayedCall.restart(true);
      onDragEnd && wasDragging && onDragEnd(self);
      onRelease && onRelease(self, wasDragging);
    },
        _onGestureStart = function _onGestureStart(e) {
      return e.touches && e.touches.length > 1 && (self.isGesturing = true) && onGestureStart(e, self.isDragging);
    },
        _onGestureEnd = function _onGestureEnd() {
      return (self.isGesturing = false) || onGestureEnd(self);
    },
        onScroll = function onScroll(e) {
      if (_ignoreCheck(e)) {
        return;
      }

      var x = scrollFuncX(),
          y = scrollFuncY();
      onDelta((x - scrollX) * scrollSpeed, (y - scrollY) * scrollSpeed, 1);
      scrollX = x;
      scrollY = y;
      onStop && onStopDelayedCall.restart(true);
    },
        _onWheel = function _onWheel(e) {
      if (_ignoreCheck(e)) {
        return;
      }

      e = _getEvent(e, preventDefault);
      onWheel && (wheeled = true);
      var multiplier = (e.deltaMode === 1 ? lineHeight : e.deltaMode === 2 ? _win.innerHeight : 1) * wheelSpeed;
      onDelta(e.deltaX * multiplier, e.deltaY * multiplier, 0);
      onStop && !isNormalizer && onStopDelayedCall.restart(true);
    },
        _onMove = function _onMove(e) {
      if (_ignoreCheck(e)) {
        return;
      }

      var x = e.clientX,
          y = e.clientY,
          dx = x - self.x,
          dy = y - self.y;
      self.x = x;
      self.y = y;
      moved = true;
      (dx || dy) && onTouchOrPointerDelta(dx, dy);
    },
        _onHover = function _onHover(e) {
      self.event = e;
      onHover(self);
    },
        _onHoverEnd = function _onHoverEnd(e) {
      self.event = e;
      onHoverEnd(self);
    },
        _onClick = function _onClick(e) {
      return _ignoreCheck(e) || _getEvent(e, preventDefault) && onClick(self);
    };

    onStopDelayedCall = self._dc = gsap.delayedCall(onStopDelay || 0.25, onStopFunc).pause();
    self.deltaX = self.deltaY = 0;
    self._vx = _getVelocityProp(0, 50, true);
    self._vy = _getVelocityProp(0, 50, true);
    self.scrollX = scrollFuncX;
    self.scrollY = scrollFuncY;
    self.isDragging = self.isGesturing = self.isPressed = false;

    self.enable = function (e) {
      if (!self.isEnabled) {
        _addListener(isViewport ? ownerDoc : target, "scroll", _onScroll);

        type.indexOf("scroll") >= 0 && _addListener(isViewport ? ownerDoc : target, "scroll", onScroll, preventDefault, capture);
        type.indexOf("wheel") >= 0 && _addListener(target, "wheel", _onWheel, preventDefault, capture);

        if (type.indexOf("touch") >= 0 && _isTouch || type.indexOf("pointer") >= 0) {
          _addListener(target, _eventTypes[0], _onPress, preventDefault, capture);

          _addListener(ownerDoc, _eventTypes[2], _onRelease);

          _addListener(ownerDoc, _eventTypes[3], _onRelease);

          allowClicks && _addListener(target, "click", clickCapture, false, true);
          onClick && _addListener(target, "click", _onClick);
          onGestureStart && _addListener(ownerDoc, "gesturestart", _onGestureStart);
          onGestureEnd && _addListener(ownerDoc, "gestureend", _onGestureEnd);
          onHover && _addListener(target, _pointerType + "enter", _onHover);
          onHoverEnd && _addListener(target, _pointerType + "leave", _onHoverEnd);
          onMove && _addListener(target, _pointerType + "move", _onMove);
        }

        self.isEnabled = true;
        e && e.type && _onPress(e);
        onEnable && onEnable(self);
      }

      return self;
    };

    self.disable = function () {
      if (self.isEnabled) {
        // only remove the _onScroll listener if there aren't any others that rely on the functionality.
        _observers.filter(function (o) {
          return o !== self && _isViewport(o.target);
        }).length || _removeListener(isViewport ? ownerDoc : target, "scroll", _onScroll);

        if (self.isPressed) {
          self._vx.reset();

          self._vy.reset();

          _removeListener(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, true);
        }

        _removeListener(isViewport ? ownerDoc : target, "scroll", onScroll, capture);

        _removeListener(target, "wheel", _onWheel, capture);

        _removeListener(target, _eventTypes[0], _onPress, capture);

        _removeListener(ownerDoc, _eventTypes[2], _onRelease);

        _removeListener(ownerDoc, _eventTypes[3], _onRelease);

        _removeListener(target, "click", clickCapture, true);

        _removeListener(target, "click", _onClick);

        _removeListener(ownerDoc, "gesturestart", _onGestureStart);

        _removeListener(ownerDoc, "gestureend", _onGestureEnd);

        _removeListener(target, _pointerType + "enter", _onHover);

        _removeListener(target, _pointerType + "leave", _onHoverEnd);

        _removeListener(target, _pointerType + "move", _onMove);

        self.isEnabled = self.isPressed = self.isDragging = false;
        onDisable && onDisable(self);
      }
    };

    self.kill = function () {
      self.disable();

      var i = _observers.indexOf(self);

      i >= 0 && _observers.splice(i, 1);
      _normalizer === self && (_normalizer = 0);
    };

    _observers.push(self);

    isNormalizer && _isViewport(target) && (_normalizer = self);
    self.enable(event);
  };

  _createClass(Observer, [{
    key: "velocityX",
    get: function get() {
      return this._vx.getVelocity();
    }
  }, {
    key: "velocityY",
    get: function get() {
      return this._vy.getVelocity();
    }
  }]);

  return Observer;
}();
Observer.version = "3.10.4";

Observer.create = function (vars) {
  return new Observer(vars);
};

Observer.register = _initCore;

Observer.getAll = function () {
  return _observers.slice();
};

Observer.getById = function (id) {
  return _observers.filter(function (o) {
    return o.vars.id === id;
  })[0];
};

_getGSAP() && gsap.registerPlugin(Observer);


/***/ }),

/***/ "./node_modules/gsap/ScrollTrigger.js":
/*!********************************************!*\
  !*** ./node_modules/gsap/ScrollTrigger.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScrollTrigger": () => (/* binding */ ScrollTrigger),
/* harmony export */   "default": () => (/* binding */ ScrollTrigger)
/* harmony export */ });
/* harmony import */ var _Observer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Observer.js */ "./node_modules/gsap/Observer.js");
/*!
 * ScrollTrigger 3.10.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/

/* eslint-disable */


var gsap,
    _coreInitted,
    _win,
    _doc,
    _docEl,
    _body,
    _root,
    _resizeDelay,
    _toArray,
    _clamp,
    _time2,
    _syncInterval,
    _refreshing,
    _pointerIsDown,
    _transformProp,
    _i,
    _prevWidth,
    _prevHeight,
    _autoRefresh,
    _sort,
    _suppressOverwrites,
    _ignoreResize,
    _normalizer,
    _ignoreMobileResize,
    _baseScreenHeight,
    _baseScreenWidth,
    _fixIOSBug,
    _limitCallbacks,
    // if true, we'll only trigger callbacks if the active state toggles, so if you scroll immediately past both the start and end positions of a ScrollTrigger (thus inactive to inactive), neither its onEnter nor onLeave will be called. This is useful during startup.
_startup = 1,
    _getTime = Date.now,
    _time1 = _getTime(),
    _lastScrollTime = 0,
    _enabled = 0,
    _pointerDownHandler = function _pointerDownHandler() {
  return _pointerIsDown = 1;
},
    _pointerUpHandler = function _pointerUpHandler() {
  return _pointerIsDown = 0;
},
    _passThrough = function _passThrough(v) {
  return v;
},
    _round = function _round(value) {
  return Math.round(value * 100000) / 100000 || 0;
},
    _windowExists = function _windowExists() {
  return typeof window !== "undefined";
},
    _getGSAP = function _getGSAP() {
  return gsap || _windowExists() && (gsap = window.gsap) && gsap.registerPlugin && gsap;
},
    _isViewport = function _isViewport(e) {
  return !!~_root.indexOf(e);
},
    _getBoundsFunc = function _getBoundsFunc(element) {
  return (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getProxyProp)(element, "getBoundingClientRect") || (_isViewport(element) ? function () {
    _winOffsets.width = _win.innerWidth;
    _winOffsets.height = _win.innerHeight;
    return _winOffsets;
  } : function () {
    return _getBounds(element);
  });
},
    _getSizeFunc = function _getSizeFunc(scroller, isViewport, _ref) {
  var d = _ref.d,
      d2 = _ref.d2,
      a = _ref.a;
  return (a = (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getProxyProp)(scroller, "getBoundingClientRect")) ? function () {
    return a()[d];
  } : function () {
    return (isViewport ? _win["inner" + d2] : scroller["client" + d2]) || 0;
  };
},
    _getOffsetsFunc = function _getOffsetsFunc(element, isViewport) {
  return !isViewport || ~_Observer_js__WEBPACK_IMPORTED_MODULE_0__._proxies.indexOf(element) ? _getBoundsFunc(element) : function () {
    return _winOffsets;
  };
},
    _maxScroll = function _maxScroll(element, _ref2) {
  var s = _ref2.s,
      d2 = _ref2.d2,
      d = _ref2.d,
      a = _ref2.a;
  return (s = "scroll" + d2) && (a = (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getProxyProp)(element, s)) ? a() - _getBoundsFunc(element)()[d] : _isViewport(element) ? (_docEl[s] || _body[s]) - (_win["inner" + d2] || _docEl["client" + d2] || _body["client" + d2]) : element[s] - element["offset" + d2];
},
    _iterateAutoRefresh = function _iterateAutoRefresh(func, events) {
  for (var i = 0; i < _autoRefresh.length; i += 3) {
    (!events || ~events.indexOf(_autoRefresh[i + 1])) && func(_autoRefresh[i], _autoRefresh[i + 1], _autoRefresh[i + 2]);
  }
},
    _isString = function _isString(value) {
  return typeof value === "string";
},
    _isFunction = function _isFunction(value) {
  return typeof value === "function";
},
    _isNumber = function _isNumber(value) {
  return typeof value === "number";
},
    _isObject = function _isObject(value) {
  return typeof value === "object";
},
    _callIfFunc = function _callIfFunc(value) {
  return _isFunction(value) && value();
},
    _combineFunc = function _combineFunc(f1, f2) {
  return function () {
    var result1 = _callIfFunc(f1),
        result2 = _callIfFunc(f2);

    return function () {
      _callIfFunc(result1);

      _callIfFunc(result2);
    };
  };
},
    _endAnimation = function _endAnimation(animation, reversed, pause) {
  return animation && animation.progress(reversed ? 0 : 1) && pause && animation.pause();
},
    _callback = function _callback(self, func) {
  if (self.enabled) {
    var result = func(self);
    result && result.totalTime && (self.callbackAnimation = result);
  }
},
    _abs = Math.abs,
    _scrollLeft = "scrollLeft",
    _scrollTop = "scrollTop",
    _left = "left",
    _top = "top",
    _right = "right",
    _bottom = "bottom",
    _width = "width",
    _height = "height",
    _Right = "Right",
    _Left = "Left",
    _Top = "Top",
    _Bottom = "Bottom",
    _padding = "padding",
    _margin = "margin",
    _Width = "Width",
    _Height = "Height",
    _px = "px",
    _getComputedStyle = function _getComputedStyle(element) {
  return _win.getComputedStyle(element);
},
    _makePositionable = function _makePositionable(element) {
  // if the element already has position: absolute or fixed, leave that, otherwise make it position: relative
  var position = _getComputedStyle(element).position;

  element.style.position = position === "absolute" || position === "fixed" ? position : "relative";
},
    _setDefaults = function _setDefaults(obj, defaults) {
  for (var p in defaults) {
    p in obj || (obj[p] = defaults[p]);
  }

  return obj;
},
    _getBounds = function _getBounds(element, withoutTransforms) {
  var tween = withoutTransforms && _getComputedStyle(element)[_transformProp] !== "matrix(1, 0, 0, 1, 0, 0)" && gsap.to(element, {
    x: 0,
    y: 0,
    xPercent: 0,
    yPercent: 0,
    rotation: 0,
    rotationX: 0,
    rotationY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0
  }).progress(1),
      bounds = element.getBoundingClientRect();
  tween && tween.progress(0).kill();
  return bounds;
},
    _getSize = function _getSize(element, _ref3) {
  var d2 = _ref3.d2;
  return element["offset" + d2] || element["client" + d2] || 0;
},
    _getLabelRatioArray = function _getLabelRatioArray(timeline) {
  var a = [],
      labels = timeline.labels,
      duration = timeline.duration(),
      p;

  for (p in labels) {
    a.push(labels[p] / duration);
  }

  return a;
},
    _getClosestLabel = function _getClosestLabel(animation) {
  return function (value) {
    return gsap.utils.snap(_getLabelRatioArray(animation), value);
  };
},
    _snapDirectional = function _snapDirectional(snapIncrementOrArray) {
  var snap = gsap.utils.snap(snapIncrementOrArray),
      a = Array.isArray(snapIncrementOrArray) && snapIncrementOrArray.slice(0).sort(function (a, b) {
    return a - b;
  });
  return a ? function (value, direction, threshold) {
    if (threshold === void 0) {
      threshold = 1e-3;
    }

    var i;

    if (!direction) {
      return snap(value);
    }

    if (direction > 0) {
      value -= threshold; // to avoid rounding errors. If we're too strict, it might snap forward, then immediately again, and again.

      for (i = 0; i < a.length; i++) {
        if (a[i] >= value) {
          return a[i];
        }
      }

      return a[i - 1];
    } else {
      i = a.length;
      value += threshold;

      while (i--) {
        if (a[i] <= value) {
          return a[i];
        }
      }
    }

    return a[0];
  } : function (value, direction, threshold) {
    if (threshold === void 0) {
      threshold = 1e-3;
    }

    var snapped = snap(value);
    return !direction || Math.abs(snapped - value) < threshold || snapped - value < 0 === direction < 0 ? snapped : snap(direction < 0 ? value - snapIncrementOrArray : value + snapIncrementOrArray);
  };
},
    _getLabelAtDirection = function _getLabelAtDirection(timeline) {
  return function (value, st) {
    return _snapDirectional(_getLabelRatioArray(timeline))(value, st.direction);
  };
},
    _multiListener = function _multiListener(func, element, types, callback) {
  return types.split(",").forEach(function (type) {
    return func(element, type, callback);
  });
},
    _addListener = function _addListener(element, type, func, nonPassive, capture) {
  return element.addEventListener(type, func, {
    passive: !nonPassive,
    capture: !!capture
  });
},
    _removeListener = function _removeListener(element, type, func, capture) {
  return element.removeEventListener(type, func, !!capture);
},
    _wheelListener = function _wheelListener(func, el, scrollFunc) {
  return scrollFunc && scrollFunc.wheelHandler && func(el, "wheel", scrollFunc);
},
    _markerDefaults = {
  startColor: "green",
  endColor: "red",
  indent: 0,
  fontSize: "16px",
  fontWeight: "normal"
},
    _defaults = {
  toggleActions: "play",
  anticipatePin: 0
},
    _keywords = {
  top: 0,
  left: 0,
  center: 0.5,
  bottom: 1,
  right: 1
},
    _offsetToPx = function _offsetToPx(value, size) {
  if (_isString(value)) {
    var eqIndex = value.indexOf("="),
        relative = ~eqIndex ? +(value.charAt(eqIndex - 1) + 1) * parseFloat(value.substr(eqIndex + 1)) : 0;

    if (~eqIndex) {
      value.indexOf("%") > eqIndex && (relative *= size / 100);
      value = value.substr(0, eqIndex - 1);
    }

    value = relative + (value in _keywords ? _keywords[value] * size : ~value.indexOf("%") ? parseFloat(value) * size / 100 : parseFloat(value) || 0);
  }

  return value;
},
    _createMarker = function _createMarker(type, name, container, direction, _ref4, offset, matchWidthEl, containerAnimation) {
  var startColor = _ref4.startColor,
      endColor = _ref4.endColor,
      fontSize = _ref4.fontSize,
      indent = _ref4.indent,
      fontWeight = _ref4.fontWeight;

  var e = _doc.createElement("div"),
      useFixedPosition = _isViewport(container) || (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getProxyProp)(container, "pinType") === "fixed",
      isScroller = type.indexOf("scroller") !== -1,
      parent = useFixedPosition ? _body : container,
      isStart = type.indexOf("start") !== -1,
      color = isStart ? startColor : endColor,
      css = "border-color:" + color + ";font-size:" + fontSize + ";color:" + color + ";font-weight:" + fontWeight + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";

  css += "position:" + ((isScroller || containerAnimation) && useFixedPosition ? "fixed;" : "absolute;");
  (isScroller || containerAnimation || !useFixedPosition) && (css += (direction === _Observer_js__WEBPACK_IMPORTED_MODULE_0__._vertical ? _right : _bottom) + ":" + (offset + parseFloat(indent)) + "px;");
  matchWidthEl && (css += "box-sizing:border-box;text-align:left;width:" + matchWidthEl.offsetWidth + "px;");
  e._isStart = isStart;
  e.setAttribute("class", "gsap-marker-" + type + (name ? " marker-" + name : ""));
  e.style.cssText = css;
  e.innerText = name || name === 0 ? type + "-" + name : type;
  parent.children[0] ? parent.insertBefore(e, parent.children[0]) : parent.appendChild(e);
  e._offset = e["offset" + direction.op.d2];

  _positionMarker(e, 0, direction, isStart);

  return e;
},
    _positionMarker = function _positionMarker(marker, start, direction, flipped) {
  var vars = {
    display: "block"
  },
      side = direction[flipped ? "os2" : "p2"],
      oppositeSide = direction[flipped ? "p2" : "os2"];
  marker._isFlipped = flipped;
  vars[direction.a + "Percent"] = flipped ? -100 : 0;
  vars[direction.a] = flipped ? "1px" : 0;
  vars["border" + side + _Width] = 1;
  vars["border" + oppositeSide + _Width] = 0;
  vars[direction.p] = start + "px";
  gsap.set(marker, vars);
},
    _triggers = [],
    _ids = {},
    _rafID,
    _sync = function _sync() {
  return _getTime() - _lastScrollTime > 34 && _updateAll();
},
    _onScroll = function _onScroll() {
  // previously, we tried to optimize performance by batching/deferring to the next requestAnimationFrame(), but discovered that Safari has a few bugs that make this unworkable (especially on iOS). See https://codepen.io/GreenSock/pen/16c435b12ef09c38125204818e7b45fc?editors=0010 and https://codepen.io/GreenSock/pen/JjOxYpQ/3dd65ccec5a60f1d862c355d84d14562?editors=0010 and https://codepen.io/GreenSock/pen/ExbrPNa/087cef197dc35445a0951e8935c41503?editors=0010
  if (!_normalizer || !_normalizer.isPressed || _normalizer.startX > _body.clientWidth) {
    // if the user is dragging the scrollbar, allow it.
    _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers.cache++;
    _rafID || (_rafID = requestAnimationFrame(_updateAll));
    _lastScrollTime || _dispatch("scrollStart");
    _lastScrollTime = _getTime();
  }
},
    _setBaseDimensions = function _setBaseDimensions() {
  _baseScreenWidth = _win.innerWidth;
  _baseScreenHeight = _win.innerHeight;
},
    _onResize = function _onResize() {
  _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers.cache++;
  !_refreshing && !_ignoreResize && !_doc.fullscreenElement && !_doc.webkitFullscreenElement && (!_ignoreMobileResize || _baseScreenWidth !== _win.innerWidth || Math.abs(_win.innerHeight - _baseScreenHeight) > _win.innerHeight * 0.25) && _resizeDelay.restart(true);
},
    // ignore resizes triggered by refresh()
_listeners = {},
    _emptyArray = [],
    _media = [],
    _creatingMedia,
    // when ScrollTrigger.matchMedia() is called, we record the current media key here (like "(min-width: 800px)") so that we can assign it to everything that's created during that call. Then we can revert just those when necessary. In the ScrollTrigger's init() call, the _creatingMedia is recorded as a "media" property on the instance.
_lastMediaTick,
    _onMediaChange = function _onMediaChange(e) {
  var tick = gsap.ticker.frame,
      matches = [],
      i = 0,
      index;

  if (_lastMediaTick !== tick || _startup) {
    _revertAll();

    for (; i < _media.length; i += 4) {
      index = _win.matchMedia(_media[i]).matches;

      if (index !== _media[i + 3]) {
        // note: some browsers fire the matchMedia event multiple times, like when going full screen, so we shouldn't call the function multiple times. Check to see if it's already matched.
        _media[i + 3] = index;
        index ? matches.push(i) : _revertAll(1, _media[i]) || _isFunction(_media[i + 2]) && _media[i + 2](); // Firefox doesn't update the "matches" property of the MediaQueryList object correctly - it only does so as it calls its change handler - so we must re-create a media query here to ensure it's accurate.
      }
    }

    _revertRecorded(); // in case killing/reverting any of the animations actually added inline styles back.


    for (i = 0; i < matches.length; i++) {
      index = matches[i];
      _creatingMedia = _media[index];
      _media[index + 2] = _media[index + 1](e);
    }

    _creatingMedia = 0;
    _coreInitted && _refreshAll(0, 1);
    _lastMediaTick = tick;

    _dispatch("matchMedia");
  }
},
    _softRefresh = function _softRefresh() {
  return _removeListener(ScrollTrigger, "scrollEnd", _softRefresh) || _refreshAll(true);
},
    _dispatch = function _dispatch(type) {
  return _listeners[type] && _listeners[type].map(function (f) {
    return f();
  }) || _emptyArray;
},
    _savedStyles = [],
    // when ScrollTrigger.saveStyles() is called, the inline styles are recorded in this Array in a sequential format like [element, cssText, gsCache, media]. This keeps it very memory-efficient and fast to iterate through.
_revertRecorded = function _revertRecorded(media) {
  for (var i = 0; i < _savedStyles.length; i += 5) {
    if (!media || _savedStyles[i + 4] === media) {
      _savedStyles[i].style.cssText = _savedStyles[i + 1];
      _savedStyles[i].getBBox && _savedStyles[i].setAttribute("transform", _savedStyles[i + 2] || "");
      _savedStyles[i + 3].uncache = 1;
    }
  }
},
    _revertAll = function _revertAll(kill, media) {
  var trigger;

  for (_i = 0; _i < _triggers.length; _i++) {
    trigger = _triggers[_i];

    if (!media || trigger.media === media) {
      if (kill) {
        trigger.kill(1);
      } else {
        trigger.revert();
      }
    }
  }

  media && _revertRecorded(media);
  media || _dispatch("revert");
},
    _clearScrollMemory = function _clearScrollMemory() {
  return _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers.cache++ && _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers.forEach(function (obj) {
    return typeof obj === "function" && (obj.rec = 0);
  });
},
    // zero-out all the recorded scroll positions. Don't use _triggers because if, for example, .matchMedia() is used to create some ScrollTriggers and then the user resizes and it removes ALL ScrollTriggers, and then go back to a size where there are ScrollTriggers, it would have kept the position(s) saved from the initial state.
_refreshingAll,
    _refreshID = 0,
    _refreshAll = function _refreshAll(force, skipRevert) {
  if (_lastScrollTime && !force) {
    _addListener(ScrollTrigger, "scrollEnd", _softRefresh);

    return;
  }

  _refreshingAll = true;

  var refreshInits = _dispatch("refreshInit");

  _sort && ScrollTrigger.sort();
  skipRevert || _revertAll();

  _triggers.slice(0).forEach(function (t) {
    return t.refresh();
  }); // don't loop with _i because during a refresh() someone could call ScrollTrigger.update() which would iterate through _i resulting in a skip.


  _triggers.forEach(function (t) {
    return t.vars.end === "max" && t.setPositions(t.start, _maxScroll(t.scroller, t._dir));
  }); // the scroller's max scroll position may change after all the ScrollTriggers refreshed (like pinning could push it down), so we need to loop back and correct any with end: "max".


  refreshInits.forEach(function (result) {
    return result && result.render && result.render(-1);
  }); // if the onRefreshInit() returns an animation (typically a gsap.set()), revert it. This makes it easy to put things in a certain spot before refreshing for measurement purposes, and then put things back.

  _clearScrollMemory();

  _resizeDelay.pause();

  _refreshID++;
  _refreshingAll = false;

  _dispatch("refresh");
},
    _lastScroll = 0,
    _direction = 1,
    _primary,
    _updateAll = function _updateAll() {
  if (!_refreshingAll) {
    ScrollTrigger.isUpdating = true;
    _primary && _primary.update(0); // ScrollSmoother users refreshPriority -9999 to become the primary that gets updated before all others because it affects the scroll position.

    var l = _triggers.length,
        time = _getTime(),
        recordVelocity = time - _time1 >= 50,
        scroll = l && _triggers[0].scroll();

    _direction = _lastScroll > scroll ? -1 : 1;
    _lastScroll = scroll;

    if (recordVelocity) {
      if (_lastScrollTime && !_pointerIsDown && time - _lastScrollTime > 200) {
        _lastScrollTime = 0;

        _dispatch("scrollEnd");
      }

      _time2 = _time1;
      _time1 = time;
    }

    if (_direction < 0) {
      _i = l;

      while (_i-- > 0) {
        _triggers[_i] && _triggers[_i].update(0, recordVelocity);
      }

      _direction = 1;
    } else {
      for (_i = 0; _i < l; _i++) {
        _triggers[_i] && _triggers[_i].update(0, recordVelocity);
      }
    }

    ScrollTrigger.isUpdating = false;
  }

  _rafID = 0;
},
    _propNamesToCopy = [_left, _top, _bottom, _right, _margin + _Bottom, _margin + _Right, _margin + _Top, _margin + _Left, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"],
    _stateProps = _propNamesToCopy.concat([_width, _height, "boxSizing", "max" + _Width, "max" + _Height, "position", _margin, _padding, _padding + _Top, _padding + _Right, _padding + _Bottom, _padding + _Left]),
    _swapPinOut = function _swapPinOut(pin, spacer, state) {
  _setState(state);

  var cache = pin._gsap;

  if (cache.spacerIsNative) {
    _setState(cache.spacerState);
  } else if (pin.parentNode === spacer) {
    var parent = spacer.parentNode;

    if (parent) {
      parent.insertBefore(pin, spacer);
      parent.removeChild(spacer);
    }
  }
},
    _swapPinIn = function _swapPinIn(pin, spacer, cs, spacerState) {
  if (pin.parentNode !== spacer) {
    var i = _propNamesToCopy.length,
        spacerStyle = spacer.style,
        pinStyle = pin.style,
        p;

    while (i--) {
      p = _propNamesToCopy[i];
      spacerStyle[p] = cs[p];
    }

    spacerStyle.position = cs.position === "absolute" ? "absolute" : "relative";
    cs.display === "inline" && (spacerStyle.display = "inline-block");
    pinStyle[_bottom] = pinStyle[_right] = spacerStyle.flexBasis = "auto";
    spacerStyle.overflow = "visible";
    spacerStyle.boxSizing = "border-box";
    spacerStyle[_width] = _getSize(pin, _Observer_js__WEBPACK_IMPORTED_MODULE_0__._horizontal) + _px;
    spacerStyle[_height] = _getSize(pin, _Observer_js__WEBPACK_IMPORTED_MODULE_0__._vertical) + _px;
    spacerStyle[_padding] = pinStyle[_margin] = pinStyle[_top] = pinStyle[_left] = "0";

    _setState(spacerState);

    pinStyle[_width] = pinStyle["max" + _Width] = cs[_width];
    pinStyle[_height] = pinStyle["max" + _Height] = cs[_height];
    pinStyle[_padding] = cs[_padding];
    pin.parentNode.insertBefore(spacer, pin);
    spacer.appendChild(pin);
  }
},
    _capsExp = /([A-Z])/g,
    _setState = function _setState(state) {
  if (state) {
    var style = state.t.style,
        l = state.length,
        i = 0,
        p,
        value;
    (state.t._gsap || gsap.core.getCache(state.t)).uncache = 1; // otherwise transforms may be off

    for (; i < l; i += 2) {
      value = state[i + 1];
      p = state[i];

      if (value) {
        style[p] = value;
      } else if (style[p]) {
        style.removeProperty(p.replace(_capsExp, "-$1").toLowerCase());
      }
    }
  }
},
    _getState = function _getState(element) {
  // returns an Array with alternating values like [property, value, property, value] and a "t" property pointing to the target (element). Makes it fast and cheap.
  var l = _stateProps.length,
      style = element.style,
      state = [],
      i = 0;

  for (; i < l; i++) {
    state.push(_stateProps[i], style[_stateProps[i]]);
  }

  state.t = element;
  return state;
},
    _copyState = function _copyState(state, override, omitOffsets) {
  var result = [],
      l = state.length,
      i = omitOffsets ? 8 : 0,
      // skip top, left, right, bottom if omitOffsets is true
  p;

  for (; i < l; i += 2) {
    p = state[i];
    result.push(p, p in override ? override[p] : state[i + 1]);
  }

  result.t = state.t;
  return result;
},
    _winOffsets = {
  left: 0,
  top: 0
},
    // // potential future feature (?) Allow users to calculate where a trigger hits (scroll position) like getScrollPosition("#id", "top bottom")
// _getScrollPosition = (trigger, position, {scroller, containerAnimation, horizontal}) => {
// 	scroller = _getTarget(scroller || _win);
// 	let direction = horizontal ? _horizontal : _vertical,
// 		isViewport = _isViewport(scroller);
// 	_getSizeFunc(scroller, isViewport, direction);
// 	return _parsePosition(position, _getTarget(trigger), _getSizeFunc(scroller, isViewport, direction)(), direction, _getScrollFunc(scroller, direction)(), 0, 0, 0, _getOffsetsFunc(scroller, isViewport)(), isViewport ? 0 : parseFloat(_getComputedStyle(scroller)["border" + direction.p2 + _Width]) || 0, 0, containerAnimation ? containerAnimation.duration() : _maxScroll(scroller), containerAnimation);
// },
_parsePosition = function _parsePosition(value, trigger, scrollerSize, direction, scroll, marker, markerScroller, self, scrollerBounds, borderWidth, useFixedPosition, scrollerMax, containerAnimation) {
  _isFunction(value) && (value = value(self));

  if (_isString(value) && value.substr(0, 3) === "max") {
    value = scrollerMax + (value.charAt(4) === "=" ? _offsetToPx("0" + value.substr(3), scrollerSize) : 0);
  }

  var time = containerAnimation ? containerAnimation.time() : 0,
      p1,
      p2,
      element;
  containerAnimation && containerAnimation.seek(0);

  if (!_isNumber(value)) {
    _isFunction(trigger) && (trigger = trigger(self));
    var offsets = value.split(" "),
        bounds,
        localOffset,
        globalOffset,
        display;
    element = (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getTarget)(trigger) || _body;
    bounds = _getBounds(element) || {};

    if ((!bounds || !bounds.left && !bounds.top) && _getComputedStyle(element).display === "none") {
      // if display is "none", it won't report getBoundingClientRect() properly
      display = element.style.display;
      element.style.display = "block";
      bounds = _getBounds(element);
      display ? element.style.display = display : element.style.removeProperty("display");
    }

    localOffset = _offsetToPx(offsets[0], bounds[direction.d]);
    globalOffset = _offsetToPx(offsets[1] || "0", scrollerSize);
    value = bounds[direction.p] - scrollerBounds[direction.p] - borderWidth + localOffset + scroll - globalOffset;
    markerScroller && _positionMarker(markerScroller, globalOffset, direction, scrollerSize - globalOffset < 20 || markerScroller._isStart && globalOffset > 20);
    scrollerSize -= scrollerSize - globalOffset; // adjust for the marker
  } else if (markerScroller) {
    _positionMarker(markerScroller, scrollerSize, direction, true);
  }

  if (marker) {
    var position = value + scrollerSize,
        isStart = marker._isStart;
    p1 = "scroll" + direction.d2;

    _positionMarker(marker, position, direction, isStart && position > 20 || !isStart && (useFixedPosition ? Math.max(_body[p1], _docEl[p1]) : marker.parentNode[p1]) <= position + 1);

    if (useFixedPosition) {
      scrollerBounds = _getBounds(markerScroller);
      useFixedPosition && (marker.style[direction.op.p] = scrollerBounds[direction.op.p] - direction.op.m - marker._offset + _px);
    }
  }

  if (containerAnimation && element) {
    p1 = _getBounds(element);
    containerAnimation.seek(scrollerMax);
    p2 = _getBounds(element);
    containerAnimation._caScrollDist = p1[direction.p] - p2[direction.p];
    value = value / containerAnimation._caScrollDist * scrollerMax;
  }

  containerAnimation && containerAnimation.seek(time);
  return containerAnimation ? value : Math.round(value);
},
    _prefixExp = /(webkit|moz|length|cssText|inset)/i,
    _reparent = function _reparent(element, parent, top, left) {
  if (element.parentNode !== parent) {
    var style = element.style,
        p,
        cs;

    if (parent === _body) {
      element._stOrig = style.cssText; // record original inline styles so we can revert them later

      cs = _getComputedStyle(element);

      for (p in cs) {
        // must copy all relevant styles to ensure that nothing changes visually when we reparent to the <body>. Skip the vendor prefixed ones.
        if (!+p && !_prefixExp.test(p) && cs[p] && typeof style[p] === "string" && p !== "0") {
          style[p] = cs[p];
        }
      }

      style.top = top;
      style.left = left;
    } else {
      style.cssText = element._stOrig;
    }

    gsap.core.getCache(element).uncache = 1;
    parent.appendChild(element);
  }
},
    // _mergeAnimations = animations => {
// 	let tl = gsap.timeline({smoothChildTiming: true}).startTime(Math.min(...animations.map(a => a.globalTime(0))));
// 	animations.forEach(a => {let time = a.totalTime(); tl.add(a); a.totalTime(time); });
// 	tl.smoothChildTiming = false;
// 	return tl;
// },
// returns a function that can be used to tween the scroll position in the direction provided, and when doing so it'll add a .tween property to the FUNCTION itself, and remove it when the tween completes or gets killed. This gives us a way to have multiple ScrollTriggers use a central function for any given scroller and see if there's a scroll tween running (which would affect if/how things get updated)
_getTweenCreator = function _getTweenCreator(scroller, direction) {
  var getScroll = (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getScrollFunc)(scroller, direction),
      prop = "_scroll" + direction.p2,
      // add a tweenable property to the scroller that's a getter/setter function, like _scrollTop or _scrollLeft. This way, if someone does gsap.killTweensOf(scroller) it'll kill the scroll tween.
  lastScroll1,
      lastScroll2,
      getTween = function getTween(scrollTo, vars, initialValue, change1, change2) {
    var tween = getTween.tween,
        onComplete = vars.onComplete,
        modifiers = {};
    initialValue = initialValue || getScroll();
    change2 = change1 && change2 || 0; // if change1 is 0, we set that to the difference and ignore change2. Otherwise, there would be a compound effect.

    change1 = change1 || scrollTo - initialValue;
    tween && tween.kill();
    lastScroll1 = Math.round(initialValue);
    vars[prop] = scrollTo;
    vars.modifiers = modifiers;

    modifiers[prop] = function (value) {
      value = _round(getScroll()); // round because in some [very uncommon] Windows environments, it can get reported with decimals even though it was set without.

      if (value !== lastScroll1 && value !== lastScroll2 && Math.abs(value - lastScroll1) > 2 && Math.abs(value - lastScroll2) > 2) {
        // if the user scrolls, kill the tween. iOS Safari intermittently misreports the scroll position, it may be the most recently-set one or the one before that! When Safari is zoomed (CMD-+), it often misreports as 1 pixel off too! So if we set the scroll position to 125, for example, it'll actually report it as 124.
        tween.kill();
        getTween.tween = 0;
      } else {
        value = initialValue + change1 * tween.ratio + change2 * tween.ratio * tween.ratio;
      }

      lastScroll2 = lastScroll1;
      return lastScroll1 = _round(value);
    };

    vars.onComplete = function () {
      getTween.tween = 0;
      onComplete && onComplete.call(tween);
    };

    tween = getTween.tween = gsap.to(scroller, vars);
    return tween;
  };

  scroller[prop] = getScroll;

  getScroll.wheelHandler = function () {
    return getTween.tween && getTween.tween.kill() && (getTween.tween = 0);
  };

  _addListener(scroller, "wheel", getScroll.wheelHandler); // Windows machines handle mousewheel scrolling in chunks (like "3 lines per scroll") meaning the typical strategy for cancelling the scroll isn't as sensitive. It's much more likely to match one of the previous 2 scroll event positions. So we kill any snapping as soon as there's a wheel event.


  return getTween;
};

var ScrollTrigger = /*#__PURE__*/function () {
  function ScrollTrigger(vars, animation) {
    _coreInitted || ScrollTrigger.register(gsap) || console.warn("Please gsap.registerPlugin(ScrollTrigger)");
    this.init(vars, animation);
  }

  var _proto = ScrollTrigger.prototype;

  _proto.init = function init(vars, animation) {
    this.progress = this.start = 0;
    this.vars && this.kill(true, true); // in case it's being initted again

    if (!_enabled) {
      this.update = this.refresh = this.kill = _passThrough;
      return;
    }

    vars = _setDefaults(_isString(vars) || _isNumber(vars) || vars.nodeType ? {
      trigger: vars
    } : vars, _defaults);

    var _vars = vars,
        onUpdate = _vars.onUpdate,
        toggleClass = _vars.toggleClass,
        id = _vars.id,
        onToggle = _vars.onToggle,
        onRefresh = _vars.onRefresh,
        scrub = _vars.scrub,
        trigger = _vars.trigger,
        pin = _vars.pin,
        pinSpacing = _vars.pinSpacing,
        invalidateOnRefresh = _vars.invalidateOnRefresh,
        anticipatePin = _vars.anticipatePin,
        onScrubComplete = _vars.onScrubComplete,
        onSnapComplete = _vars.onSnapComplete,
        once = _vars.once,
        snap = _vars.snap,
        pinReparent = _vars.pinReparent,
        pinSpacer = _vars.pinSpacer,
        containerAnimation = _vars.containerAnimation,
        fastScrollEnd = _vars.fastScrollEnd,
        preventOverlaps = _vars.preventOverlaps,
        direction = vars.horizontal || vars.containerAnimation && vars.horizontal !== false ? _Observer_js__WEBPACK_IMPORTED_MODULE_0__._horizontal : _Observer_js__WEBPACK_IMPORTED_MODULE_0__._vertical,
        isToggle = !scrub && scrub !== 0,
        scroller = (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getTarget)(vars.scroller || _win),
        scrollerCache = gsap.core.getCache(scroller),
        isViewport = _isViewport(scroller),
        useFixedPosition = ("pinType" in vars ? vars.pinType : (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getProxyProp)(scroller, "pinType") || isViewport && "fixed") === "fixed",
        callbacks = [vars.onEnter, vars.onLeave, vars.onEnterBack, vars.onLeaveBack],
        toggleActions = isToggle && vars.toggleActions.split(" "),
        markers = "markers" in vars ? vars.markers : _defaults.markers,
        borderWidth = isViewport ? 0 : parseFloat(_getComputedStyle(scroller)["border" + direction.p2 + _Width]) || 0,
        self = this,
        onRefreshInit = vars.onRefreshInit && function () {
      return vars.onRefreshInit(self);
    },
        getScrollerSize = _getSizeFunc(scroller, isViewport, direction),
        getScrollerOffsets = _getOffsetsFunc(scroller, isViewport),
        lastSnap = 0,
        lastRefresh = 0,
        scrollFunc = (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getScrollFunc)(scroller, direction),
        tweenTo,
        pinCache,
        snapFunc,
        scroll1,
        scroll2,
        start,
        end,
        markerStart,
        markerEnd,
        markerStartTrigger,
        markerEndTrigger,
        markerVars,
        change,
        pinOriginalState,
        pinActiveState,
        pinState,
        spacer,
        offset,
        pinGetter,
        pinSetter,
        pinStart,
        pinChange,
        spacingStart,
        spacerState,
        markerStartSetter,
        markerEndSetter,
        cs,
        snap1,
        snap2,
        scrubTween,
        scrubSmooth,
        snapDurClamp,
        snapDelayedCall,
        prevProgress,
        prevScroll,
        prevAnimProgress,
        caMarkerSetter,
        customRevertReturn;

    self.media = _creatingMedia;
    self._dir = direction;
    anticipatePin *= 45;
    self.scroller = scroller;
    self.scroll = containerAnimation ? containerAnimation.time.bind(containerAnimation) : scrollFunc;
    scroll1 = scrollFunc();
    self.vars = vars;
    animation = animation || vars.animation;

    if ("refreshPriority" in vars) {
      _sort = 1;
      vars.refreshPriority === -9999 && (_primary = self); // used by ScrollSmoother
    }

    scrollerCache.tweenScroll = scrollerCache.tweenScroll || {
      top: _getTweenCreator(scroller, _Observer_js__WEBPACK_IMPORTED_MODULE_0__._vertical),
      left: _getTweenCreator(scroller, _Observer_js__WEBPACK_IMPORTED_MODULE_0__._horizontal)
    };
    self.tweenTo = tweenTo = scrollerCache.tweenScroll[direction.p];

    self.scrubDuration = function (value) {
      scrubSmooth = _isNumber(value) && value;

      if (!scrubSmooth) {
        scrubTween && scrubTween.progress(1).kill();
        scrubTween = 0;
      } else {
        scrubTween ? scrubTween.duration(value) : scrubTween = gsap.to(animation, {
          ease: "expo",
          totalProgress: "+=0.001",
          duration: scrubSmooth,
          paused: true,
          onComplete: function onComplete() {
            return onScrubComplete && onScrubComplete(self);
          }
        });
      }
    };

    if (animation) {
      animation.vars.lazy = false;
      animation._initted || animation.vars.immediateRender !== false && vars.immediateRender !== false && animation.render(0, true, true);
      self.animation = animation.pause();
      animation.scrollTrigger = self;
      self.scrubDuration(scrub);
      snap1 = 0;
      id || (id = animation.vars.id);
    }

    _triggers.push(self);

    if (snap) {
      if (!_isObject(snap) || snap.push) {
        snap = {
          snapTo: snap
        };
      }

      "scrollBehavior" in _body.style && gsap.set(isViewport ? [_body, _docEl] : scroller, {
        scrollBehavior: "auto"
      }); // smooth scrolling doesn't work with snap.

      snapFunc = _isFunction(snap.snapTo) ? snap.snapTo : snap.snapTo === "labels" ? _getClosestLabel(animation) : snap.snapTo === "labelsDirectional" ? _getLabelAtDirection(animation) : snap.directional !== false ? function (value, st) {
        return _snapDirectional(snap.snapTo)(value, _getTime() - lastRefresh < 500 ? 0 : st.direction);
      } : gsap.utils.snap(snap.snapTo);
      snapDurClamp = snap.duration || {
        min: 0.1,
        max: 2
      };
      snapDurClamp = _isObject(snapDurClamp) ? _clamp(snapDurClamp.min, snapDurClamp.max) : _clamp(snapDurClamp, snapDurClamp);
      snapDelayedCall = gsap.delayedCall(snap.delay || scrubSmooth / 2 || 0.1, function () {
        var scroll = scrollFunc(),
            refreshedRecently = _getTime() - lastRefresh < 500,
            tween = tweenTo.tween;

        if ((refreshedRecently || Math.abs(self.getVelocity()) < 10) && !tween && !_pointerIsDown && lastSnap !== scroll) {
          var progress = (scroll - start) / change,
              totalProgress = animation && !isToggle ? animation.totalProgress() : progress,
              velocity = refreshedRecently ? 0 : (totalProgress - snap2) / (_getTime() - _time2) * 1000 || 0,
              change1 = gsap.utils.clamp(-progress, 1 - progress, _abs(velocity / 2) * velocity / 0.185),
              naturalEnd = progress + (snap.inertia === false ? 0 : change1),
              endValue = _clamp(0, 1, snapFunc(naturalEnd, self)),
              endScroll = Math.round(start + endValue * change),
              _snap = snap,
              onStart = _snap.onStart,
              _onInterrupt = _snap.onInterrupt,
              _onComplete = _snap.onComplete;

          if (scroll <= end && scroll >= start && endScroll !== scroll) {
            if (tween && !tween._initted && tween.data <= _abs(endScroll - scroll)) {
              // there's an overlapping snap! So we must figure out which one is closer and let that tween live.
              return;
            }

            if (snap.inertia === false) {
              change1 = endValue - progress;
            }

            tweenTo(endScroll, {
              duration: snapDurClamp(_abs(Math.max(_abs(naturalEnd - totalProgress), _abs(endValue - totalProgress)) * 0.185 / velocity / 0.05 || 0)),
              ease: snap.ease || "power3",
              data: _abs(endScroll - scroll),
              // record the distance so that if another snap tween occurs (conflict) we can prioritize the closest snap.
              onInterrupt: function onInterrupt() {
                return snapDelayedCall.restart(true) && _onInterrupt && _onInterrupt(self);
              },
              onComplete: function onComplete() {
                self.update();
                lastSnap = scrollFunc();
                snap1 = snap2 = animation && !isToggle ? animation.totalProgress() : self.progress;
                onSnapComplete && onSnapComplete(self);
                _onComplete && _onComplete(self);
              }
            }, scroll, change1 * change, endScroll - scroll - change1 * change);
            onStart && onStart(self, tweenTo.tween);
          }
        } else if (self.isActive && lastSnap !== scroll) {
          snapDelayedCall.restart(true);
        }
      }).pause();
    }

    id && (_ids[id] = self);
    trigger = self.trigger = (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getTarget)(trigger || pin); // if a trigger has some kind of scroll-related effect applied that could contaminate the "y" or "x" position (like a ScrollSmoother effect), we needed a way to temporarily revert it, so we use the stRevert property of the gsCache. It can return another function that we'll call at the end so it can return to its normal state.

    customRevertReturn = trigger && trigger._gsap && trigger._gsap.stRevert;
    customRevertReturn && (customRevertReturn = customRevertReturn(self));
    pin = pin === true ? trigger : (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getTarget)(pin);
    _isString(toggleClass) && (toggleClass = {
      targets: trigger,
      className: toggleClass
    });

    if (pin) {
      pinSpacing === false || pinSpacing === _margin || (pinSpacing = !pinSpacing && _getComputedStyle(pin.parentNode).display === "flex" ? false : _padding); // if the parent is display: flex, don't apply pinSpacing by default.

      self.pin = pin;
      vars.force3D !== false && gsap.set(pin, {
        force3D: true
      });
      pinCache = gsap.core.getCache(pin);

      if (!pinCache.spacer) {
        // record the spacer and pinOriginalState on the cache in case someone tries pinning the same element with MULTIPLE ScrollTriggers - we don't want to have multiple spacers or record the "original" pin state after it has already been affected by another ScrollTrigger.
        if (pinSpacer) {
          pinSpacer = (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getTarget)(pinSpacer);
          pinSpacer && !pinSpacer.nodeType && (pinSpacer = pinSpacer.current || pinSpacer.nativeElement); // for React & Angular

          pinCache.spacerIsNative = !!pinSpacer;
          pinSpacer && (pinCache.spacerState = _getState(pinSpacer));
        }

        pinCache.spacer = spacer = pinSpacer || _doc.createElement("div");
        spacer.classList.add("pin-spacer");
        id && spacer.classList.add("pin-spacer-" + id);
        pinCache.pinState = pinOriginalState = _getState(pin);
      } else {
        pinOriginalState = pinCache.pinState;
      }

      self.spacer = spacer = pinCache.spacer;
      cs = _getComputedStyle(pin);
      spacingStart = cs[pinSpacing + direction.os2];
      pinGetter = gsap.getProperty(pin);
      pinSetter = gsap.quickSetter(pin, direction.a, _px); // pin.firstChild && !_maxScroll(pin, direction) && (pin.style.overflow = "hidden"); // protects from collapsing margins, but can have unintended consequences as demonstrated here: https://codepen.io/GreenSock/pen/1e42c7a73bfa409d2cf1e184e7a4248d so it was removed in favor of just telling people to set up their CSS to avoid the collapsing margins (overflow: hidden | auto is just one option. Another is border-top: 1px solid transparent).

      _swapPinIn(pin, spacer, cs);

      pinState = _getState(pin);
    }

    if (markers) {
      markerVars = _isObject(markers) ? _setDefaults(markers, _markerDefaults) : _markerDefaults;
      markerStartTrigger = _createMarker("scroller-start", id, scroller, direction, markerVars, 0);
      markerEndTrigger = _createMarker("scroller-end", id, scroller, direction, markerVars, 0, markerStartTrigger);
      offset = markerStartTrigger["offset" + direction.op.d2];

      var content = (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getTarget)((0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getProxyProp)(scroller, "content") || scroller);

      markerStart = this.markerStart = _createMarker("start", id, content, direction, markerVars, offset, 0, containerAnimation);
      markerEnd = this.markerEnd = _createMarker("end", id, content, direction, markerVars, offset, 0, containerAnimation);
      containerAnimation && (caMarkerSetter = gsap.quickSetter([markerStart, markerEnd], direction.a, _px));

      if (!useFixedPosition && !(_Observer_js__WEBPACK_IMPORTED_MODULE_0__._proxies.length && (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getProxyProp)(scroller, "fixedMarkers") === true)) {
        _makePositionable(isViewport ? _body : scroller);

        gsap.set([markerStartTrigger, markerEndTrigger], {
          force3D: true
        });
        markerStartSetter = gsap.quickSetter(markerStartTrigger, direction.a, _px);
        markerEndSetter = gsap.quickSetter(markerEndTrigger, direction.a, _px);
      }
    }

    if (containerAnimation) {
      var oldOnUpdate = containerAnimation.vars.onUpdate,
          oldParams = containerAnimation.vars.onUpdateParams;
      containerAnimation.eventCallback("onUpdate", function () {
        self.update(0, 0, 1);
        oldOnUpdate && oldOnUpdate.apply(oldParams || []);
      });
    }

    self.previous = function () {
      return _triggers[_triggers.indexOf(self) - 1];
    };

    self.next = function () {
      return _triggers[_triggers.indexOf(self) + 1];
    };

    self.revert = function (revert) {
      var r = revert !== false || !self.enabled,
          prevRefreshing = _refreshing;

      if (r !== self.isReverted) {
        if (r) {
          self.scroll.rec || !_refreshing || !_refreshingAll || (self.scroll.rec = scrollFunc());
          prevScroll = Math.max(scrollFunc(), self.scroll.rec || 0); // record the scroll so we can revert later (repositioning/pinning things can affect scroll position). In the static refresh() method, we first record all the scroll positions as a reference.

          prevProgress = self.progress;
          prevAnimProgress = animation && animation.progress();
        }

        markerStart && [markerStart, markerEnd, markerStartTrigger, markerEndTrigger].forEach(function (m) {
          return m.style.display = r ? "none" : "block";
        });
        r && (_refreshing = 1);
        self.update(r); // make sure the pin is back in its original position so that all the measurements are correct.

        _refreshing = prevRefreshing;
        pin && (r ? _swapPinOut(pin, spacer, pinOriginalState) : (!pinReparent || !self.isActive) && _swapPinIn(pin, spacer, _getComputedStyle(pin), spacerState));
        self.isReverted = r;
      }
    };

    self.refresh = function (soft, force) {
      if ((_refreshing || !self.enabled) && !force) {
        return;
      }

      if (pin && soft && _lastScrollTime) {
        _addListener(ScrollTrigger, "scrollEnd", _softRefresh);

        return;
      }

      !_refreshingAll && onRefreshInit && onRefreshInit(self);
      _refreshing = 1;
      lastRefresh = _getTime();

      if (tweenTo.tween) {
        tweenTo.tween.kill();
        tweenTo.tween = 0;
      }

      scrubTween && scrubTween.pause();
      invalidateOnRefresh && animation && animation.time(-0.01, true).invalidate();
      self.isReverted || self.revert();

      var size = getScrollerSize(),
          scrollerBounds = getScrollerOffsets(),
          max = containerAnimation ? containerAnimation.duration() : _maxScroll(scroller, direction),
          offset = 0,
          otherPinOffset = 0,
          parsedEnd = vars.end,
          parsedEndTrigger = vars.endTrigger || trigger,
          parsedStart = vars.start || (vars.start === 0 || !trigger ? 0 : pin ? "0 0" : "0 100%"),
          pinnedContainer = self.pinnedContainer = vars.pinnedContainer && (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getTarget)(vars.pinnedContainer),
          triggerIndex = trigger && Math.max(0, _triggers.indexOf(self)) || 0,
          i = triggerIndex,
          cs,
          bounds,
          scroll,
          isVertical,
          override,
          curTrigger,
          curPin,
          oppositeScroll,
          initted,
          revertedPins;

      while (i--) {
        // user might try to pin the same element more than once, so we must find any prior triggers with the same pin, revert them, and determine how long they're pinning so that we can offset things appropriately. Make sure we revert from last to first so that things "rewind" properly.
        curTrigger = _triggers[i];
        curTrigger.end || curTrigger.refresh(0, 1) || (_refreshing = 1); // if it's a timeline-based trigger that hasn't been fully initialized yet because it's waiting for 1 tick, just force the refresh() here, otherwise if it contains a pin that's supposed to affect other ScrollTriggers further down the page, they won't be adjusted properly.

        curPin = curTrigger.pin;

        if (curPin && (curPin === trigger || curPin === pin) && !curTrigger.isReverted) {
          revertedPins || (revertedPins = []);
          revertedPins.unshift(curTrigger); // we'll revert from first to last to make sure things reach their end state properly

          curTrigger.revert();
        }

        if (curTrigger !== _triggers[i]) {
          // in case it got removed.
          triggerIndex--;
          i--;
        }
      }

      _isFunction(parsedStart) && (parsedStart = parsedStart(self));
      start = _parsePosition(parsedStart, trigger, size, direction, scrollFunc(), markerStart, markerStartTrigger, self, scrollerBounds, borderWidth, useFixedPosition, max, containerAnimation) || (pin ? -0.001 : 0);
      _isFunction(parsedEnd) && (parsedEnd = parsedEnd(self));

      if (_isString(parsedEnd) && !parsedEnd.indexOf("+=")) {
        if (~parsedEnd.indexOf(" ")) {
          parsedEnd = (_isString(parsedStart) ? parsedStart.split(" ")[0] : "") + parsedEnd;
        } else {
          offset = _offsetToPx(parsedEnd.substr(2), size);
          parsedEnd = _isString(parsedStart) ? parsedStart : start + offset; // _parsePosition won't factor in the offset if the start is a number, so do it here.

          parsedEndTrigger = trigger;
        }
      }

      end = Math.max(start, _parsePosition(parsedEnd || (parsedEndTrigger ? "100% 0" : max), parsedEndTrigger, size, direction, scrollFunc() + offset, markerEnd, markerEndTrigger, self, scrollerBounds, borderWidth, useFixedPosition, max, containerAnimation)) || -0.001;
      change = end - start || (start -= 0.01) && 0.001;
      offset = 0;
      i = triggerIndex;

      while (i--) {
        curTrigger = _triggers[i];
        curPin = curTrigger.pin;

        if (curPin && curTrigger.start - curTrigger._pinPush < start && !containerAnimation && curTrigger.end > 0) {
          cs = curTrigger.end - curTrigger.start;

          if ((curPin === trigger || curPin === pinnedContainer) && !_isNumber(parsedStart)) {
            // numeric start values shouldn't be offset at all - treat them as absolute
            offset += cs * (1 - curTrigger.progress);
          }

          curPin === pin && (otherPinOffset += cs);
        }
      }

      start += offset;
      end += offset;
      self._pinPush = otherPinOffset;

      if (markerStart && offset) {
        // offset the markers if necessary
        cs = {};
        cs[direction.a] = "+=" + offset;
        pinnedContainer && (cs[direction.p] = "-=" + scrollFunc());
        gsap.set([markerStart, markerEnd], cs);
      }

      if (pin) {
        cs = _getComputedStyle(pin);
        isVertical = direction === _Observer_js__WEBPACK_IMPORTED_MODULE_0__._vertical;
        scroll = scrollFunc(); // recalculate because the triggers can affect the scroll

        pinStart = parseFloat(pinGetter(direction.a)) + otherPinOffset;
        !max && end > 1 && ((isViewport ? _body : scroller).style["overflow-" + direction.a] = "scroll"); // makes sure the scroller has a scrollbar, otherwise if something has width: 100%, for example, it would be too big (exclude the scrollbar). See https://greensock.com/forums/topic/25182-scrolltrigger-width-of-page-increase-where-markers-are-set-to-false/

        _swapPinIn(pin, spacer, cs);

        pinState = _getState(pin); // transforms will interfere with the top/left/right/bottom placement, so remove them temporarily. getBoundingClientRect() factors in transforms.

        bounds = _getBounds(pin, true);
        oppositeScroll = useFixedPosition && (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getScrollFunc)(scroller, isVertical ? _Observer_js__WEBPACK_IMPORTED_MODULE_0__._horizontal : _Observer_js__WEBPACK_IMPORTED_MODULE_0__._vertical)();

        if (pinSpacing) {
          spacerState = [pinSpacing + direction.os2, change + otherPinOffset + _px];
          spacerState.t = spacer;
          i = pinSpacing === _padding ? _getSize(pin, direction) + change + otherPinOffset : 0;
          i && spacerState.push(direction.d, i + _px); // for box-sizing: border-box (must include padding).

          _setState(spacerState);

          useFixedPosition && scrollFunc(prevScroll);
        }

        if (useFixedPosition) {
          override = {
            top: bounds.top + (isVertical ? scroll - start : oppositeScroll) + _px,
            left: bounds.left + (isVertical ? oppositeScroll : scroll - start) + _px,
            boxSizing: "border-box",
            position: "fixed"
          };
          override[_width] = override["max" + _Width] = Math.ceil(bounds.width) + _px;
          override[_height] = override["max" + _Height] = Math.ceil(bounds.height) + _px;
          override[_margin] = override[_margin + _Top] = override[_margin + _Right] = override[_margin + _Bottom] = override[_margin + _Left] = "0";
          override[_padding] = cs[_padding];
          override[_padding + _Top] = cs[_padding + _Top];
          override[_padding + _Right] = cs[_padding + _Right];
          override[_padding + _Bottom] = cs[_padding + _Bottom];
          override[_padding + _Left] = cs[_padding + _Left];
          pinActiveState = _copyState(pinOriginalState, override, pinReparent);
        }

        if (animation) {
          // the animation might be affecting the transform, so we must jump to the end, check the value, and compensate accordingly. Otherwise, when it becomes unpinned, the pinSetter() will get set to a value that doesn't include whatever the animation did.
          initted = animation._initted; // if not, we must invalidate() after this step, otherwise it could lock in starting values prematurely.

          _suppressOverwrites(1);

          animation.render(animation.duration(), true, true);
          pinChange = pinGetter(direction.a) - pinStart + change + otherPinOffset;
          change !== pinChange && useFixedPosition && pinActiveState.splice(pinActiveState.length - 2, 2); // transform is the last property/value set in the state Array. Since the animation is controlling that, we should omit it.

          animation.render(0, true, true);
          initted || animation.invalidate();

          _suppressOverwrites(0);
        } else {
          pinChange = change;
        }
      } else if (trigger && scrollFunc() && !containerAnimation) {
        // it may be INSIDE a pinned element, so walk up the tree and look for any elements with _pinOffset to compensate because anything with pinSpacing that's already scrolled would throw off the measurements in getBoundingClientRect()
        bounds = trigger.parentNode;

        while (bounds && bounds !== _body) {
          if (bounds._pinOffset) {
            start -= bounds._pinOffset;
            end -= bounds._pinOffset;
          }

          bounds = bounds.parentNode;
        }
      }

      revertedPins && revertedPins.forEach(function (t) {
        return t.revert(false);
      });
      self.start = start;
      self.end = end;
      scroll1 = scroll2 = scrollFunc(); // reset velocity

      if (!containerAnimation) {
        scroll1 < prevScroll && scrollFunc(prevScroll);
        self.scroll.rec = 0;
      }

      self.revert(false);

      if (snapDelayedCall) {
        lastSnap = -1;
        self.isActive && scrollFunc(start + change * prevProgress); // just so snapping gets re-enabled, clear out any recorded last value

        snapDelayedCall.restart(true);
      }

      _refreshing = 0;
      animation && isToggle && (animation._initted || prevAnimProgress) && animation.progress() !== prevAnimProgress && animation.progress(prevAnimProgress, true).render(animation.time(), true, true); // must force a re-render because if saveStyles() was used on the target(s), the styles could have been wiped out during the refresh().

      if (prevProgress !== self.progress || containerAnimation) {
        // ensures that the direction is set properly (when refreshing, progress is set back to 0 initially, then back again to wherever it needs to be) and that callbacks are triggered.
        animation && !isToggle && animation.totalProgress(prevProgress, true); // to avoid issues where animation callbacks like onStart aren't triggered.

        self.progress = prevProgress;
        self.update(0, 0, 1);
      }

      pin && pinSpacing && (spacer._pinOffset = Math.round(self.progress * pinChange)); //			scrubTween && scrubTween.invalidate();

      onRefresh && onRefresh(self);
    };

    self.getVelocity = function () {
      return (scrollFunc() - scroll2) / (_getTime() - _time2) * 1000 || 0;
    };

    self.endAnimation = function () {
      _endAnimation(self.callbackAnimation);

      if (animation) {
        scrubTween ? scrubTween.progress(1) : !animation.paused() ? _endAnimation(animation, animation.reversed()) : isToggle || _endAnimation(animation, self.direction < 0, 1);
      }
    };

    self.labelToScroll = function (label) {
      return animation && animation.labels && (start || self.refresh() || start) + animation.labels[label] / animation.duration() * change || 0;
    };

    self.getTrailing = function (name) {
      var i = _triggers.indexOf(self),
          a = self.direction > 0 ? _triggers.slice(0, i).reverse() : _triggers.slice(i + 1);

      return (_isString(name) ? a.filter(function (t) {
        return t.vars.preventOverlaps === name;
      }) : a).filter(function (t) {
        return self.direction > 0 ? t.end <= start : t.start >= end;
      });
    };

    self.update = function (reset, recordVelocity, forceFake) {
      if (containerAnimation && !forceFake && !reset) {
        return;
      }

      var scroll = self.scroll(),
          p = reset ? 0 : (scroll - start) / change,
          clipped = p < 0 ? 0 : p > 1 ? 1 : p || 0,
          prevProgress = self.progress,
          isActive,
          wasActive,
          toggleState,
          action,
          stateChanged,
          toggled,
          isAtMax,
          isTakingAction;

      if (recordVelocity) {
        scroll2 = scroll1;
        scroll1 = containerAnimation ? scrollFunc() : scroll;

        if (snap) {
          snap2 = snap1;
          snap1 = animation && !isToggle ? animation.totalProgress() : clipped;
        }
      } // anticipate the pinning a few ticks ahead of time based on velocity to avoid a visual glitch due to the fact that most browsers do scrolling on a separate thread (not synced with requestAnimationFrame).


      anticipatePin && !clipped && pin && !_refreshing && !_startup && _lastScrollTime && start < scroll + (scroll - scroll2) / (_getTime() - _time2) * anticipatePin && (clipped = 0.0001);

      if (clipped !== prevProgress && self.enabled) {
        isActive = self.isActive = !!clipped && clipped < 1;
        wasActive = !!prevProgress && prevProgress < 1;
        toggled = isActive !== wasActive;
        stateChanged = toggled || !!clipped !== !!prevProgress; // could go from start all the way to end, thus it didn't toggle but it did change state in a sense (may need to fire a callback)

        self.direction = clipped > prevProgress ? 1 : -1;
        self.progress = clipped;

        if (stateChanged && !_refreshing) {
          toggleState = clipped && !prevProgress ? 0 : clipped === 1 ? 1 : prevProgress === 1 ? 2 : 3; // 0 = enter, 1 = leave, 2 = enterBack, 3 = leaveBack (we prioritize the FIRST encounter, thus if you scroll really fast past the onEnter and onLeave in one tick, it'd prioritize onEnter.

          if (isToggle) {
            action = !toggled && toggleActions[toggleState + 1] !== "none" && toggleActions[toggleState + 1] || toggleActions[toggleState]; // if it didn't toggle, that means it shot right past and since we prioritize the "enter" action, we should switch to the "leave" in this case (but only if one is defined)

            isTakingAction = animation && (action === "complete" || action === "reset" || action in animation);
          }
        }

        preventOverlaps && (toggled || isTakingAction) && (isTakingAction || scrub || !animation) && (_isFunction(preventOverlaps) ? preventOverlaps(self) : self.getTrailing(preventOverlaps).forEach(function (t) {
          return t.endAnimation();
        }));

        if (!isToggle) {
          if (scrubTween && !_refreshing && !_startup) {
            (containerAnimation || _primary && _primary !== self) && scrubTween.render(scrubTween._dp._time - scrubTween._start); // if there's a scrub on both the container animation and this one (or a ScrollSmoother), the update order would cause this one not to have rendered yet, so it wouldn't make any progress before we .restart() it heading toward the new progress so it'd appear stuck thus we force a render here.

            if (scrubTween.resetTo) {
              scrubTween.resetTo("totalProgress", clipped, animation._tTime / animation._tDur);
            } else {
              // legacy support (courtesy), before 3.10.0
              scrubTween.vars.totalProgress = clipped;
              scrubTween.invalidate().restart();
            }
          } else if (animation) {
            animation.totalProgress(clipped, !!_refreshing);
          }
        }

        if (pin) {
          reset && pinSpacing && (spacer.style[pinSpacing + direction.os2] = spacingStart);

          if (!useFixedPosition) {
            pinSetter(_round(pinStart + pinChange * clipped));
          } else if (stateChanged) {
            isAtMax = !reset && clipped > prevProgress && end + 1 > scroll && scroll + 1 >= _maxScroll(scroller, direction); // if it's at the VERY end of the page, don't switch away from position: fixed because it's pointless and it could cause a brief flash when the user scrolls back up (when it gets pinned again)

            if (pinReparent) {
              if (!reset && (isActive || isAtMax)) {
                var bounds = _getBounds(pin, true),
                    _offset = scroll - start;

                _reparent(pin, _body, bounds.top + (direction === _Observer_js__WEBPACK_IMPORTED_MODULE_0__._vertical ? _offset : 0) + _px, bounds.left + (direction === _Observer_js__WEBPACK_IMPORTED_MODULE_0__._vertical ? 0 : _offset) + _px);
              } else {
                _reparent(pin, spacer);
              }
            }

            _setState(isActive || isAtMax ? pinActiveState : pinState);

            pinChange !== change && clipped < 1 && isActive || pinSetter(pinStart + (clipped === 1 && !isAtMax ? pinChange : 0));
          }
        }

        snap && !tweenTo.tween && !_refreshing && !_startup && snapDelayedCall.restart(true);
        toggleClass && (toggled || once && clipped && (clipped < 1 || !_limitCallbacks)) && _toArray(toggleClass.targets).forEach(function (el) {
          return el.classList[isActive || once ? "add" : "remove"](toggleClass.className);
        }); // classes could affect positioning, so do it even if reset or refreshing is true.

        onUpdate && !isToggle && !reset && onUpdate(self);

        if (stateChanged && !_refreshing) {
          if (isToggle) {
            if (isTakingAction) {
              if (action === "complete") {
                animation.pause().totalProgress(1);
              } else if (action === "reset") {
                animation.restart(true).pause();
              } else if (action === "restart") {
                animation.restart(true);
              } else {
                animation[action]();
              }
            }

            onUpdate && onUpdate(self);
          }

          if (toggled || !_limitCallbacks) {
            // on startup, the page could be scrolled and we don't want to fire callbacks that didn't toggle. For example onEnter shouldn't fire if the ScrollTrigger isn't actually entered.
            onToggle && toggled && _callback(self, onToggle);
            callbacks[toggleState] && _callback(self, callbacks[toggleState]);
            once && (clipped === 1 ? self.kill(false, 1) : callbacks[toggleState] = 0); // a callback shouldn't be called again if once is true.

            if (!toggled) {
              // it's possible to go completely past, like from before the start to after the end (or vice-versa) in which case BOTH callbacks should be fired in that order
              toggleState = clipped === 1 ? 1 : 3;
              callbacks[toggleState] && _callback(self, callbacks[toggleState]);
            }
          }

          if (fastScrollEnd && !isActive && Math.abs(self.getVelocity()) > (_isNumber(fastScrollEnd) ? fastScrollEnd : 2500)) {
            _endAnimation(self.callbackAnimation);

            scrubTween ? scrubTween.progress(1) : _endAnimation(animation, !clipped, 1);
          }
        } else if (isToggle && onUpdate && !_refreshing) {
          onUpdate(self);
        }
      } // update absolutely-positioned markers (only if the scroller isn't the viewport)


      if (markerEndSetter) {
        var n = containerAnimation ? scroll / containerAnimation.duration() * (containerAnimation._caScrollDist || 0) : scroll;
        markerStartSetter(n + (markerStartTrigger._isFlipped ? 1 : 0));
        markerEndSetter(n);
      }

      caMarkerSetter && caMarkerSetter(-scroll / containerAnimation.duration() * (containerAnimation._caScrollDist || 0));
    };

    self.enable = function (reset, refresh) {
      if (!self.enabled) {
        self.enabled = true;

        _addListener(scroller, "resize", _onResize);

        _addListener(isViewport ? _doc : scroller, "scroll", _onScroll);

        onRefreshInit && _addListener(ScrollTrigger, "refreshInit", onRefreshInit);

        if (reset !== false) {
          self.progress = prevProgress = 0;
          scroll1 = scroll2 = lastSnap = scrollFunc();
        }

        refresh !== false && self.refresh();
      }
    };

    self.getTween = function (snap) {
      return snap && tweenTo ? tweenTo.tween : scrubTween;
    };

    self.setPositions = function (newStart, newEnd) {
      // doesn't persist after refresh()! Intended to be a way to override values that were set during refresh(), like you could set it in onRefresh()
      if (pin) {
        pinStart += newStart - start;
        pinChange += newEnd - newStart - change;
      }

      self.start = start = newStart;
      self.end = end = newEnd;
      change = newEnd - newStart;
      self.update();
    };

    self.disable = function (reset, allowAnimation) {
      if (self.enabled) {
        reset !== false && self.revert();
        self.enabled = self.isActive = false;
        allowAnimation || scrubTween && scrubTween.pause();
        prevScroll = 0;
        pinCache && (pinCache.uncache = 1);
        onRefreshInit && _removeListener(ScrollTrigger, "refreshInit", onRefreshInit);

        if (snapDelayedCall) {
          snapDelayedCall.pause();
          tweenTo.tween && tweenTo.tween.kill() && (tweenTo.tween = 0);
        }

        if (!isViewport) {
          var i = _triggers.length;

          while (i--) {
            if (_triggers[i].scroller === scroller && _triggers[i] !== self) {
              return; //don't remove the listeners if there are still other triggers referencing it.
            }
          }

          _removeListener(scroller, "resize", _onResize);

          _removeListener(scroller, "scroll", _onScroll);
        }
      }
    };

    self.kill = function (revert, allowAnimation) {
      self.disable(revert, allowAnimation);
      scrubTween && !allowAnimation && scrubTween.kill();
      id && delete _ids[id];

      var i = _triggers.indexOf(self);

      i >= 0 && _triggers.splice(i, 1);
      i === _i && _direction > 0 && _i--; // if we're in the middle of a refresh() or update(), splicing would cause skips in the index, so adjust...
      // if no other ScrollTrigger instances of the same scroller are found, wipe out any recorded scroll position. Otherwise, in a single page application, for example, it could maintain scroll position when it really shouldn't.

      i = 0;

      _triggers.forEach(function (t) {
        return t.scroller === self.scroller && (i = 1);
      });

      i || (self.scroll.rec = 0);

      if (animation) {
        animation.scrollTrigger = null;
        revert && animation.render(-1);
        allowAnimation || animation.kill();
      }

      markerStart && [markerStart, markerEnd, markerStartTrigger, markerEndTrigger].forEach(function (m) {
        return m.parentNode && m.parentNode.removeChild(m);
      });
      _primary === self && (_primary = 0);

      if (pin) {
        pinCache && (pinCache.uncache = 1);
        i = 0;

        _triggers.forEach(function (t) {
          return t.pin === pin && i++;
        });

        i || (pinCache.spacer = 0); // if there aren't any more ScrollTriggers with the same pin, remove the spacer, otherwise it could be contaminated with old/stale values if the user re-creates a ScrollTrigger for the same element.
      }

      vars.onKill && vars.onKill(self);
    };

    self.enable(false, false);
    customRevertReturn && customRevertReturn(self);
    !animation || !animation.add || change ? self.refresh() : gsap.delayedCall(0.01, function () {
      return start || end || self.refresh();
    }) && (change = 0.01) && (start = end = 0); // if the animation is a timeline, it may not have been populated yet, so it wouldn't render at the proper place on the first refresh(), thus we should schedule one for the next tick. If "change" is defined, we know it must be re-enabling, thus we can refresh() right away.
  };

  ScrollTrigger.register = function register(core) {
    if (!_coreInitted) {
      gsap = core || _getGSAP();
      _windowExists() && window.document && ScrollTrigger.enable();
      _coreInitted = _enabled;
    }

    return _coreInitted;
  };

  ScrollTrigger.defaults = function defaults(config) {
    if (config) {
      for (var p in config) {
        _defaults[p] = config[p];
      }
    }

    return _defaults;
  };

  ScrollTrigger.disable = function disable(reset, kill) {
    _enabled = 0;

    _triggers.forEach(function (trigger) {
      return trigger[kill ? "kill" : "disable"](reset);
    });

    _removeListener(_win, "wheel", _onScroll);

    _removeListener(_doc, "scroll", _onScroll);

    clearInterval(_syncInterval);

    _removeListener(_doc, "touchcancel", _passThrough);

    _removeListener(_body, "touchstart", _passThrough);

    _multiListener(_removeListener, _doc, "pointerdown,touchstart,mousedown", _pointerDownHandler);

    _multiListener(_removeListener, _doc, "pointerup,touchend,mouseup", _pointerUpHandler);

    _resizeDelay.kill();

    _iterateAutoRefresh(_removeListener);

    for (var i = 0; i < _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers.length; i += 3) {
      _wheelListener(_removeListener, _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers[i], _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers[i + 1]);

      _wheelListener(_removeListener, _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers[i], _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers[i + 2]);
    }
  };

  ScrollTrigger.enable = function enable() {
    _win = window;
    _doc = document;
    _docEl = _doc.documentElement;
    _body = _doc.body;

    if (gsap) {
      _toArray = gsap.utils.toArray;
      _clamp = gsap.utils.clamp;
      _suppressOverwrites = gsap.core.suppressOverwrites || _passThrough;
      gsap.core.globals("ScrollTrigger", ScrollTrigger); // must register the global manually because in Internet Explorer, functions (classes) don't have a "name" property.

      if (_body) {
        _enabled = 1;
        _Observer_js__WEBPACK_IMPORTED_MODULE_0__.Observer.register(gsap); // isTouch is 0 if no touch, 1 if ONLY touch, and 2 if it can accommodate touch but also other types like mouse/pointer.

        ScrollTrigger.isTouch = _Observer_js__WEBPACK_IMPORTED_MODULE_0__.Observer.isTouch;
        _fixIOSBug = _Observer_js__WEBPACK_IMPORTED_MODULE_0__.Observer.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent); // since 2017, iOS has had a bug that causes event.clientX/Y to be inaccurate when a scroll occurs, thus we must alternate ignoring every other touchmove event to work around it. See https://bugs.webkit.org/show_bug.cgi?id=181954 and https://codepen.io/GreenSock/pen/ExbrPNa/087cef197dc35445a0951e8935c41503

        _addListener(_win, "wheel", _onScroll); // mostly for 3rd party smooth scrolling libraries.


        _root = [_win, _doc, _docEl, _body];
        ScrollTrigger.matchMedia({
          // when orientation changes, we should take new base measurements for the ignoreMobileResize feature.
          "(orientation: portrait)": function orientationPortrait() {
            _setBaseDimensions();

            return _setBaseDimensions;
          }
        });

        _addListener(_doc, "scroll", _onScroll); // some browsers (like Chrome), the window stops dispatching scroll events on the window if you scroll really fast, but it's consistent on the document!


        var bodyStyle = _body.style,
            border = bodyStyle.borderTopStyle,
            bounds,
            i;
        bodyStyle.borderTopStyle = "solid"; // works around an issue where a margin of a child element could throw off the bounds of the _body, making it seem like there's a margin when there actually isn't. The border ensures that the bounds are accurate.

        bounds = _getBounds(_body);
        _Observer_js__WEBPACK_IMPORTED_MODULE_0__._vertical.m = Math.round(bounds.top + _Observer_js__WEBPACK_IMPORTED_MODULE_0__._vertical.sc()) || 0; // accommodate the offset of the <body> caused by margins and/or padding

        _Observer_js__WEBPACK_IMPORTED_MODULE_0__._horizontal.m = Math.round(bounds.left + _Observer_js__WEBPACK_IMPORTED_MODULE_0__._horizontal.sc()) || 0;
        border ? bodyStyle.borderTopStyle = border : bodyStyle.removeProperty("border-top-style"); // TODO: (?) maybe move to leveraging the velocity mechanism in Observer and skip intervals.

        _syncInterval = setInterval(_sync, 250);
        gsap.delayedCall(0.5, function () {
          return _startup = 0;
        });

        _addListener(_doc, "touchcancel", _passThrough); // some older Android devices intermittently stop dispatching "touchmove" events if we don't listen for "touchcancel" on the document.


        _addListener(_body, "touchstart", _passThrough); //works around Safari bug: https://greensock.com/forums/topic/21450-draggable-in-iframe-on-mobile-is-buggy/


        _multiListener(_addListener, _doc, "pointerdown,touchstart,mousedown", _pointerDownHandler);

        _multiListener(_addListener, _doc, "pointerup,touchend,mouseup", _pointerUpHandler);

        _transformProp = gsap.utils.checkPrefix("transform");

        _stateProps.push(_transformProp);

        _coreInitted = _getTime();
        _resizeDelay = gsap.delayedCall(0.2, _refreshAll).pause();
        _autoRefresh = [_doc, "visibilitychange", function () {
          var w = _win.innerWidth,
              h = _win.innerHeight;

          if (_doc.hidden) {
            _prevWidth = w;
            _prevHeight = h;
          } else if (_prevWidth !== w || _prevHeight !== h) {
            _onResize();
          }
        }, _doc, "DOMContentLoaded", _refreshAll, _win, "load", _refreshAll, _win, "resize", _onResize];

        _iterateAutoRefresh(_addListener);

        _triggers.forEach(function (trigger) {
          return trigger.enable(0, 1);
        });

        for (i = 0; i < _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers.length; i += 3) {
          _wheelListener(_removeListener, _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers[i], _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers[i + 1]);

          _wheelListener(_removeListener, _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers[i], _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers[i + 2]);
        }
      }
    }
  };

  ScrollTrigger.config = function config(vars) {
    "limitCallbacks" in vars && (_limitCallbacks = !!vars.limitCallbacks);
    var ms = vars.syncInterval;
    ms && clearInterval(_syncInterval) || (_syncInterval = ms) && setInterval(_sync, ms);
    "ignoreMobileResize" in vars && (_ignoreMobileResize = ScrollTrigger.isTouch === 1 && vars.ignoreMobileResize);

    if ("autoRefreshEvents" in vars) {
      _iterateAutoRefresh(_removeListener) || _iterateAutoRefresh(_addListener, vars.autoRefreshEvents || "none");
      _ignoreResize = (vars.autoRefreshEvents + "").indexOf("resize") === -1;
    }
  };

  ScrollTrigger.scrollerProxy = function scrollerProxy(target, vars) {
    var t = (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getTarget)(target),
        i = _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers.indexOf(t),
        isViewport = _isViewport(t);

    if (~i) {
      _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers.splice(i, isViewport ? 6 : 2);
    }

    if (vars) {
      isViewport ? _Observer_js__WEBPACK_IMPORTED_MODULE_0__._proxies.unshift(_win, vars, _body, vars, _docEl, vars) : _Observer_js__WEBPACK_IMPORTED_MODULE_0__._proxies.unshift(t, vars);
    }
  };

  ScrollTrigger.matchMedia = function matchMedia(vars) {
    // _media is populated in the following order: mediaQueryString, onMatch, onUnmatch, isMatched. So if there are two media queries, the Array would have a length of 8
    var mq, p, i, func, result;

    for (p in vars) {
      i = _media.indexOf(p);
      func = vars[p];
      _creatingMedia = p;

      if (p === "all") {
        func();
      } else {
        mq = _win.matchMedia(p);

        if (mq) {
          mq.matches && (result = func());

          if (~i) {
            _media[i + 1] = _combineFunc(_media[i + 1], func);
            _media[i + 2] = _combineFunc(_media[i + 2], result);
          } else {
            i = _media.length;

            _media.push(p, func, result);

            mq.addListener ? mq.addListener(_onMediaChange) : mq.addEventListener("change", _onMediaChange);
          }

          _media[i + 3] = mq.matches;
        }
      }

      _creatingMedia = 0;
    }

    return _media;
  };

  ScrollTrigger.clearMatchMedia = function clearMatchMedia(query) {
    query || (_media.length = 0);
    query = _media.indexOf(query);
    query >= 0 && _media.splice(query, 4);
  };

  ScrollTrigger.isInViewport = function isInViewport(element, ratio, horizontal) {
    var bounds = (_isString(element) ? (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getTarget)(element) : element).getBoundingClientRect(),
        offset = bounds[horizontal ? _width : _height] * ratio || 0;
    return horizontal ? bounds.right - offset > 0 && bounds.left + offset < _win.innerWidth : bounds.bottom - offset > 0 && bounds.top + offset < _win.innerHeight;
  };

  ScrollTrigger.positionInViewport = function positionInViewport(element, referencePoint, horizontal) {
    _isString(element) && (element = (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getTarget)(element));
    var bounds = element.getBoundingClientRect(),
        size = bounds[horizontal ? _width : _height],
        offset = referencePoint == null ? size / 2 : referencePoint in _keywords ? _keywords[referencePoint] * size : ~referencePoint.indexOf("%") ? parseFloat(referencePoint) * size / 100 : parseFloat(referencePoint) || 0;
    return horizontal ? (bounds.left + offset) / _win.innerWidth : (bounds.top + offset) / _win.innerHeight;
  };

  return ScrollTrigger;
}();
ScrollTrigger.version = "3.10.4";

ScrollTrigger.saveStyles = function (targets) {
  return targets ? _toArray(targets).forEach(function (target) {
    // saved styles are recorded in a consecutive alternating Array, like [element, cssText, transform attribute, cache, matchMedia, ...]
    if (target && target.style) {
      var i = _savedStyles.indexOf(target);

      i >= 0 && _savedStyles.splice(i, 5);

      _savedStyles.push(target, target.style.cssText, target.getBBox && target.getAttribute("transform"), gsap.core.getCache(target), _creatingMedia);
    }
  }) : _savedStyles;
};

ScrollTrigger.revert = function (soft, media) {
  return _revertAll(!soft, media);
};

ScrollTrigger.create = function (vars, animation) {
  return new ScrollTrigger(vars, animation);
};

ScrollTrigger.refresh = function (safe) {
  return safe ? _onResize() : (_coreInitted || ScrollTrigger.register()) && _refreshAll(true);
};

ScrollTrigger.update = _updateAll;
ScrollTrigger.clearScrollMemory = _clearScrollMemory;

ScrollTrigger.maxScroll = function (element, horizontal) {
  return _maxScroll(element, horizontal ? _Observer_js__WEBPACK_IMPORTED_MODULE_0__._horizontal : _Observer_js__WEBPACK_IMPORTED_MODULE_0__._vertical);
};

ScrollTrigger.getScrollFunc = function (element, horizontal) {
  return (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getScrollFunc)((0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getTarget)(element), horizontal ? _Observer_js__WEBPACK_IMPORTED_MODULE_0__._horizontal : _Observer_js__WEBPACK_IMPORTED_MODULE_0__._vertical);
};

ScrollTrigger.getById = function (id) {
  return _ids[id];
};

ScrollTrigger.getAll = function () {
  return _triggers.filter(function (t) {
    return t.vars.id !== "ScrollSmoother";
  });
}; // it's common for people to ScrollTrigger.getAll(t => t.kill()) on page routes, for example, and we don't want it to ruin smooth scrolling by killing the main ScrollSmoother one.


ScrollTrigger.isScrolling = function () {
  return !!_lastScrollTime;
};

ScrollTrigger.snapDirectional = _snapDirectional;

ScrollTrigger.addEventListener = function (type, callback) {
  var a = _listeners[type] || (_listeners[type] = []);
  ~a.indexOf(callback) || a.push(callback);
};

ScrollTrigger.removeEventListener = function (type, callback) {
  var a = _listeners[type],
      i = a && a.indexOf(callback);
  i >= 0 && a.splice(i, 1);
};

ScrollTrigger.batch = function (targets, vars) {
  var result = [],
      varsCopy = {},
      interval = vars.interval || 0.016,
      batchMax = vars.batchMax || 1e9,
      proxyCallback = function proxyCallback(type, callback) {
    var elements = [],
        triggers = [],
        delay = gsap.delayedCall(interval, function () {
      callback(elements, triggers);
      elements = [];
      triggers = [];
    }).pause();
    return function (self) {
      elements.length || delay.restart(true);
      elements.push(self.trigger);
      triggers.push(self);
      batchMax <= elements.length && delay.progress(1);
    };
  },
      p;

  for (p in vars) {
    varsCopy[p] = p.substr(0, 2) === "on" && _isFunction(vars[p]) && p !== "onRefreshInit" ? proxyCallback(p, vars[p]) : vars[p];
  }

  if (_isFunction(batchMax)) {
    batchMax = batchMax();

    _addListener(ScrollTrigger, "refresh", function () {
      return batchMax = vars.batchMax();
    });
  }

  _toArray(targets).forEach(function (target) {
    var config = {};

    for (p in varsCopy) {
      config[p] = varsCopy[p];
    }

    config.trigger = target;
    result.push(ScrollTrigger.create(config));
  });

  return result;
}; // to reduce file size. clamps the scroll and also returns a duration multiplier so that if the scroll gets chopped shorter, the duration gets curtailed as well (otherwise if you're very close to the top of the page, for example, and swipe up really fast, it'll suddenly slow down and take a long time to reach the top).


var _clampScrollAndGetDurationMultiplier = function _clampScrollAndGetDurationMultiplier(scrollFunc, current, end, max) {
  current > max ? scrollFunc(max) : current < 0 && scrollFunc(0);
  return end > max ? (max - current) / (end - current) : end < 0 ? current / (current - end) : 1;
},
    _allowNativePanning = function _allowNativePanning(target, direction) {
  if (direction === true) {
    target.style.removeProperty("touch-action");
  } else {
    target.style.touchAction = direction === true ? "auto" : direction ? "pan-" + direction + (_Observer_js__WEBPACK_IMPORTED_MODULE_0__.Observer.isTouch ? " pinch-zoom" : "") : "none"; // note: Firefox doesn't support it pinch-zoom properly, at least in addition to a pan-x or pan-y.
  }

  target === _docEl && _allowNativePanning(_body, direction);
},
    _overflow = {
  auto: 1,
  scroll: 1
},
    _nestedScroll = function _nestedScroll(_ref5) {
  var event = _ref5.event,
      target = _ref5.target,
      axis = _ref5.axis;

  var node = (event.changedTouches ? event.changedTouches[0] : event).target,
      cache = node._gsap || gsap.core.getCache(node),
      time = _getTime(),
      cs;

  if (!cache._isScrollT || time - cache._isScrollT > 2000) {
    // cache for 2 seconds to improve performance.
    while (node && node.scrollHeight <= node.clientHeight) {
      node = node.parentNode;
    }

    cache._isScroll = node && !_isViewport(node) && node !== target && (_overflow[(cs = _getComputedStyle(node)).overflowY] || _overflow[cs.overflowX]);
    cache._isScrollT = time;
  }

  (cache._isScroll || axis === "x") && (event._gsapAllow = true);
},
    // capture events on scrollable elements INSIDE the <body> and allow those by calling stopPropagation() when we find a scrollable ancestor
_inputObserver = function _inputObserver(target, type, inputs, nested) {
  return _Observer_js__WEBPACK_IMPORTED_MODULE_0__.Observer.create({
    target: target,
    capture: true,
    debounce: false,
    lockAxis: true,
    type: type,
    onWheel: nested = nested && _nestedScroll,
    onPress: nested,
    onDrag: nested,
    onScroll: nested,
    onEnable: function onEnable() {
      return inputs && _addListener(_doc, _Observer_js__WEBPACK_IMPORTED_MODULE_0__.Observer.eventTypes[0], _captureInputs, false, true);
    },
    onDisable: function onDisable() {
      return _removeListener(_doc, _Observer_js__WEBPACK_IMPORTED_MODULE_0__.Observer.eventTypes[0], _captureInputs, true);
    }
  });
},
    _inputExp = /(input|label|select|textarea)/i,
    _inputIsFocused,
    _captureInputs = function _captureInputs(e) {
  var isInput = _inputExp.test(e.target.tagName);

  if (isInput || _inputIsFocused) {
    e._gsapAllow = true;
    _inputIsFocused = isInput;
  }
},
    _getScrollNormalizer = function _getScrollNormalizer(vars) {
  _isObject(vars) || (vars = {});
  vars.preventDefault = vars.isNormalizer = vars.allowClicks = true;
  vars.type || (vars.type = "wheel,touch");
  vars.debounce = !!vars.debounce;
  vars.id = vars.id || "normalizer";

  var _vars2 = vars,
      normalizeScrollX = _vars2.normalizeScrollX,
      momentum = _vars2.momentum,
      allowNestedScroll = _vars2.allowNestedScroll,
      self,
      maxY,
      target = (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getTarget)(vars.target) || _docEl,
      smoother = gsap.core.globals().ScrollSmoother,
      content = _fixIOSBug && (vars.content && (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getTarget)(vars.content) || smoother && smoother.get() && smoother.get().content()),
      scrollFuncY = (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getScrollFunc)(target, _Observer_js__WEBPACK_IMPORTED_MODULE_0__._vertical),
      scrollFuncX = (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getScrollFunc)(target, _Observer_js__WEBPACK_IMPORTED_MODULE_0__._horizontal),
      scale = 1,
      initialScale = (_Observer_js__WEBPACK_IMPORTED_MODULE_0__.Observer.isTouch && _win.visualViewport ? _win.visualViewport.scale * _win.visualViewport.width : _win.outerWidth) / _win.innerWidth,
      wheelRefresh = 0,
      resolveMomentumDuration = _isFunction(momentum) ? function () {
    return momentum(self);
  } : function () {
    return momentum || 2.8;
  },
      skipTouchMove,
      lastRefreshID,
      inputObserver = _inputObserver(target, vars.type, true, allowNestedScroll),
      resumeTouchMove = function resumeTouchMove() {
    return skipTouchMove = false;
  },
      scrollClampX = _passThrough,
      scrollClampY = _passThrough,
      updateClamps = function updateClamps() {
    maxY = _maxScroll(target, _Observer_js__WEBPACK_IMPORTED_MODULE_0__._vertical);
    scrollClampY = _clamp(_fixIOSBug ? 1 : 0, maxY);
    normalizeScrollX && (scrollClampX = _clamp(0, _maxScroll(target, _Observer_js__WEBPACK_IMPORTED_MODULE_0__._horizontal)));
    lastRefreshID = _refreshID;
  },
      ignoreDrag = function ignoreDrag() {
    if (skipTouchMove) {
      requestAnimationFrame(resumeTouchMove); // we MUST wait for a requestAnimationFrame, otherwise iOS will misreport the value.

      var offset = _round(self.deltaY / 2),
          scroll = scrollClampY(scrollFuncY.v - offset);

      if (content && scroll !== scrollFuncY.v + scrollFuncY.offset) {
        scrollFuncY.offset = scroll - scrollFuncY.v;
        content.style.transform = "translateY(" + -scrollFuncY.offset + "px)";
        content._gsap && (content._gsap.y = -scrollFuncY.offset + "px");
        scrollFuncY.cacheID = _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers.cache;

        _updateAll();
      }

      return true;
    }

    if (content) {
      content.style.transform = "translateY(0px)";
      scrollFuncY.offset = scrollFuncY.cacheID = 0;
      content._gsap && (content._gsap.y = "0px");
    }

    skipTouchMove = true;
  },
      tween,
      startScrollX,
      startScrollY,
      onStopDelayedCall,
      onResize = function onResize() {
    // if the window resizes, like on an iPhone which Apple FORCES the address bar to show/hide even if we event.preventDefault(), it may be scrolling too far now that the address bar is showing, so we must dynamically adjust the momentum tween.
    updateClamps();

    if (tween.isActive() && tween.vars.scrollY > maxY) {
      scrollFuncY() > maxY ? tween.progress(1) && scrollFuncY(maxY) : tween.resetTo("scrollY", maxY);
    }
  };

  vars.ignoreCheck = function (e) {
    return _fixIOSBug && e.type === "touchmove" && ignoreDrag(e) || scale > 1.05 && e.type !== "touchstart" || self.isGesturing || e.touches && e.touches.length > 1;
  };

  vars.onPress = function () {
    var prevScale = scale;
    scale = _round((_win.visualViewport && _win.visualViewport.scale || 1) / initialScale);
    tween.pause();
    prevScale !== scale && _allowNativePanning(target, scale > 1.01 ? true : normalizeScrollX ? false : "x");
    skipTouchMove = false;
    startScrollX = scrollFuncX();
    startScrollY = scrollFuncY();
    updateClamps();
    lastRefreshID = _refreshID;
  };

  vars.onRelease = vars.onGestureStart = function (self, wasDragging) {
    if (content) {
      content.style.transform = "translateY(0px)";
      scrollFuncY.offset = scrollFuncY.cacheID = 0;
      content._gsap && (content._gsap.y = "0px");
    }

    if (!wasDragging) {
      onStopDelayedCall.restart(true);
    } else {
      _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers.cache++; // make sure we're pulling the non-cached value
      // alternate algorithm: durX = Math.min(6, Math.abs(self.velocityX / 800)),	dur = Math.max(durX, Math.min(6, Math.abs(self.velocityY / 800))); dur = dur * (0.4 + (1 - _power4In(dur / 6)) * 0.6)) * (momentumSpeed || 1)

      var dur = resolveMomentumDuration(),
          currentScroll,
          endScroll;

      if (normalizeScrollX) {
        currentScroll = scrollFuncX();
        endScroll = currentScroll + dur * 0.05 * -self.velocityX / 0.227; // the constant .227 is from power4(0.05). velocity is inverted because scrolling goes in the opposite direction.

        dur *= _clampScrollAndGetDurationMultiplier(scrollFuncX, currentScroll, endScroll, _maxScroll(target, _Observer_js__WEBPACK_IMPORTED_MODULE_0__._horizontal));
        tween.vars.scrollX = scrollClampX(endScroll);
      }

      currentScroll = scrollFuncY();
      endScroll = currentScroll + dur * 0.05 * -self.velocityY / 0.227; // the constant .227 is from power4(0.05)

      dur *= _clampScrollAndGetDurationMultiplier(scrollFuncY, currentScroll, endScroll, _maxScroll(target, _Observer_js__WEBPACK_IMPORTED_MODULE_0__._vertical));
      tween.vars.scrollY = scrollClampY(endScroll);
      tween.invalidate().duration(dur).play(0.01);

      if (_fixIOSBug && tween.vars.scrollY >= maxY || currentScroll >= maxY - 1) {
        // iOS bug: it'll show the address bar but NOT fire the window "resize" event until the animation is done but we must protect against overshoot so we leverage an onUpdate to do so.
        gsap.to({}, {
          onUpdate: onResize,
          duration: dur
        });
      }
    }
  };

  vars.onWheel = function () {
    tween._ts && tween.pause();

    if (_getTime() - wheelRefresh > 1000) {
      // after 1 second, refresh the clamps otherwise that'll only happen when ScrollTrigger.refresh() is called or for touch-scrolling.
      lastRefreshID = 0;
      wheelRefresh = _getTime();
    }
  };

  vars.onChange = function (self, dx, dy, xArray, yArray) {
    _refreshID !== lastRefreshID && updateClamps();
    dx && normalizeScrollX && scrollFuncX(scrollClampX(xArray[2] === dx ? startScrollX + (self.startX - self.x) : scrollFuncX() + dx - xArray[1])); // for more precision, we track pointer/touch movement from the start, otherwise it'll drift.

    dy && scrollFuncY(scrollClampY(yArray[2] === dy ? startScrollY + (self.startY - self.y) : scrollFuncY() + dy - yArray[1]));

    _updateAll();
  };

  vars.onEnable = function () {
    _allowNativePanning(target, normalizeScrollX ? false : "x");

    _addListener(_win, "resize", onResize);

    inputObserver.enable();
  };

  vars.onDisable = function () {
    _allowNativePanning(target, true);

    _removeListener(_win, "resize", onResize);

    inputObserver.kill();
  };

  self = new _Observer_js__WEBPACK_IMPORTED_MODULE_0__.Observer(vars);
  self.iOS = _fixIOSBug; // used in the Observer getCachedScroll() function to work around an iOS bug that wreaks havoc with TouchEvent.clientY if we allow scroll to go all the way back to 0.

  _fixIOSBug && !scrollFuncY() && scrollFuncY(1); // iOS bug causes event.clientY values to freak out (wildly inaccurate) if the scroll position is exactly 0.

  onStopDelayedCall = self._dc;
  tween = gsap.to(self, {
    ease: "power4",
    paused: true,
    scrollX: normalizeScrollX ? "+=0.1" : "+=0",
    scrollY: "+=0.1",
    onComplete: onStopDelayedCall.vars.onComplete
  });
  return self;
};

ScrollTrigger.sort = function (func) {
  return _triggers.sort(func || function (a, b) {
    return (a.vars.refreshPriority || 0) * -1e6 + a.start - (b.start + (b.vars.refreshPriority || 0) * -1e6);
  });
};

ScrollTrigger.observe = function (vars) {
  return new _Observer_js__WEBPACK_IMPORTED_MODULE_0__.Observer(vars);
};

ScrollTrigger.normalizeScroll = function (vars) {
  if (typeof vars === "undefined") {
    return _normalizer;
  }

  if (vars === true && _normalizer) {
    return _normalizer.enable();
  }

  if (vars === false) {
    return _normalizer && _normalizer.kill();
  }

  var normalizer = vars instanceof _Observer_js__WEBPACK_IMPORTED_MODULE_0__.Observer ? vars : _getScrollNormalizer(vars);
  _normalizer && _normalizer.target === normalizer.target && _normalizer.kill();
  _isViewport(normalizer.target) && (_normalizer = normalizer);
  return normalizer;
};

ScrollTrigger.core = {
  // smaller file size way to leverage in ScrollSmoother and Observer
  _getVelocityProp: _Observer_js__WEBPACK_IMPORTED_MODULE_0__._getVelocityProp,
  _inputObserver: _inputObserver,
  _scrollers: _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers,
  _proxies: _Observer_js__WEBPACK_IMPORTED_MODULE_0__._proxies,
  bridge: {
    // when normalizeScroll sets the scroll position (ss = setScroll)
    ss: function ss() {
      _lastScrollTime || _dispatch("scrollStart");
      _lastScrollTime = _getTime();
    },
    // a way to get the _refreshing value in Observer
    ref: function ref() {
      return _refreshing;
    }
  }
};
_getGSAP() && gsap.registerPlugin(ScrollTrigger);


/***/ }),

/***/ "./node_modules/gsap/gsap-core.js":
/*!****************************************!*\
  !*** ./node_modules/gsap/gsap-core.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Animation": () => (/* binding */ Animation),
/* harmony export */   "Back": () => (/* binding */ Back),
/* harmony export */   "Bounce": () => (/* binding */ Bounce),
/* harmony export */   "Circ": () => (/* binding */ Circ),
/* harmony export */   "Cubic": () => (/* binding */ Cubic),
/* harmony export */   "Elastic": () => (/* binding */ Elastic),
/* harmony export */   "Expo": () => (/* binding */ Expo),
/* harmony export */   "GSCache": () => (/* binding */ GSCache),
/* harmony export */   "Linear": () => (/* binding */ Linear),
/* harmony export */   "Power0": () => (/* binding */ Power0),
/* harmony export */   "Power1": () => (/* binding */ Power1),
/* harmony export */   "Power2": () => (/* binding */ Power2),
/* harmony export */   "Power3": () => (/* binding */ Power3),
/* harmony export */   "Power4": () => (/* binding */ Power4),
/* harmony export */   "PropTween": () => (/* binding */ PropTween),
/* harmony export */   "Quad": () => (/* binding */ Quad),
/* harmony export */   "Quart": () => (/* binding */ Quart),
/* harmony export */   "Quint": () => (/* binding */ Quint),
/* harmony export */   "Sine": () => (/* binding */ Sine),
/* harmony export */   "SteppedEase": () => (/* binding */ SteppedEase),
/* harmony export */   "Strong": () => (/* binding */ Strong),
/* harmony export */   "Timeline": () => (/* binding */ Timeline),
/* harmony export */   "TimelineLite": () => (/* binding */ Timeline),
/* harmony export */   "TimelineMax": () => (/* binding */ Timeline),
/* harmony export */   "Tween": () => (/* binding */ Tween),
/* harmony export */   "TweenLite": () => (/* binding */ Tween),
/* harmony export */   "TweenMax": () => (/* binding */ Tween),
/* harmony export */   "_checkPlugin": () => (/* binding */ _checkPlugin),
/* harmony export */   "_colorExp": () => (/* binding */ _colorExp),
/* harmony export */   "_colorStringFilter": () => (/* binding */ _colorStringFilter),
/* harmony export */   "_config": () => (/* binding */ _config),
/* harmony export */   "_forEachName": () => (/* binding */ _forEachName),
/* harmony export */   "_getCache": () => (/* binding */ _getCache),
/* harmony export */   "_getProperty": () => (/* binding */ _getProperty),
/* harmony export */   "_getSetter": () => (/* binding */ _getSetter),
/* harmony export */   "_isString": () => (/* binding */ _isString),
/* harmony export */   "_isUndefined": () => (/* binding */ _isUndefined),
/* harmony export */   "_missingPlugin": () => (/* binding */ _missingPlugin),
/* harmony export */   "_numExp": () => (/* binding */ _numExp),
/* harmony export */   "_numWithUnitExp": () => (/* binding */ _numWithUnitExp),
/* harmony export */   "_parseRelative": () => (/* binding */ _parseRelative),
/* harmony export */   "_plugins": () => (/* binding */ _plugins),
/* harmony export */   "_relExp": () => (/* binding */ _relExp),
/* harmony export */   "_removeLinkedListItem": () => (/* binding */ _removeLinkedListItem),
/* harmony export */   "_renderComplexString": () => (/* binding */ _renderComplexString),
/* harmony export */   "_replaceRandom": () => (/* binding */ _replaceRandom),
/* harmony export */   "_round": () => (/* binding */ _round),
/* harmony export */   "_roundModifier": () => (/* binding */ _roundModifier),
/* harmony export */   "_setDefaults": () => (/* binding */ _setDefaults),
/* harmony export */   "_sortPropTweensByPriority": () => (/* binding */ _sortPropTweensByPriority),
/* harmony export */   "_ticker": () => (/* binding */ _ticker),
/* harmony export */   "clamp": () => (/* binding */ clamp),
/* harmony export */   "default": () => (/* binding */ gsap),
/* harmony export */   "distribute": () => (/* binding */ distribute),
/* harmony export */   "getUnit": () => (/* binding */ getUnit),
/* harmony export */   "gsap": () => (/* binding */ gsap),
/* harmony export */   "interpolate": () => (/* binding */ interpolate),
/* harmony export */   "mapRange": () => (/* binding */ mapRange),
/* harmony export */   "normalize": () => (/* binding */ normalize),
/* harmony export */   "pipe": () => (/* binding */ pipe),
/* harmony export */   "random": () => (/* binding */ random),
/* harmony export */   "selector": () => (/* binding */ selector),
/* harmony export */   "shuffle": () => (/* binding */ shuffle),
/* harmony export */   "snap": () => (/* binding */ snap),
/* harmony export */   "splitColor": () => (/* binding */ splitColor),
/* harmony export */   "toArray": () => (/* binding */ toArray),
/* harmony export */   "unitize": () => (/* binding */ unitize),
/* harmony export */   "wrap": () => (/* binding */ wrap),
/* harmony export */   "wrapYoyo": () => (/* binding */ wrapYoyo)
/* harmony export */ });
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

/*!
 * GSAP 3.10.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/

/* eslint-disable */
var _config = {
  autoSleep: 120,
  force3D: "auto",
  nullTargetWarn: 1,
  units: {
    lineHeight: ""
  }
},
    _defaults = {
  duration: .5,
  overwrite: false,
  delay: 0
},
    _suppressOverwrites,
    _bigNum = 1e8,
    _tinyNum = 1 / _bigNum,
    _2PI = Math.PI * 2,
    _HALF_PI = _2PI / 4,
    _gsID = 0,
    _sqrt = Math.sqrt,
    _cos = Math.cos,
    _sin = Math.sin,
    _isString = function _isString(value) {
  return typeof value === "string";
},
    _isFunction = function _isFunction(value) {
  return typeof value === "function";
},
    _isNumber = function _isNumber(value) {
  return typeof value === "number";
},
    _isUndefined = function _isUndefined(value) {
  return typeof value === "undefined";
},
    _isObject = function _isObject(value) {
  return typeof value === "object";
},
    _isNotFalse = function _isNotFalse(value) {
  return value !== false;
},
    _windowExists = function _windowExists() {
  return typeof window !== "undefined";
},
    _isFuncOrString = function _isFuncOrString(value) {
  return _isFunction(value) || _isString(value);
},
    _isTypedArray = typeof ArrayBuffer === "function" && ArrayBuffer.isView || function () {},
    // note: IE10 has ArrayBuffer, but NOT ArrayBuffer.isView().
_isArray = Array.isArray,
    _strictNumExp = /(?:-?\.?\d|\.)+/gi,
    //only numbers (including negatives and decimals) but NOT relative values.
_numExp = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    //finds any numbers, including ones that start with += or -=, negative numbers, and ones in scientific notation like 1e-8.
_numWithUnitExp = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    _complexStringNumExp = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
    //duplicate so that while we're looping through matches from exec(), it doesn't contaminate the lastIndex of _numExp which we use to search for colors too.
_relExp = /[+-]=-?[.\d]+/,
    _delimitedValueExp = /[^,'"\[\]\s]+/gi,
    // previously /[#\-+.]*\b[a-z\d\-=+%.]+/gi but didn't catch special characters.
_unitExp = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
    _globalTimeline,
    _win,
    _coreInitted,
    _doc,
    _globals = {},
    _installScope = {},
    _coreReady,
    _install = function _install(scope) {
  return (_installScope = _merge(scope, _globals)) && gsap;
},
    _missingPlugin = function _missingPlugin(property, value) {
  return console.warn("Invalid property", property, "set to", value, "Missing plugin? gsap.registerPlugin()");
},
    _warn = function _warn(message, suppress) {
  return !suppress && console.warn(message);
},
    _addGlobal = function _addGlobal(name, obj) {
  return name && (_globals[name] = obj) && _installScope && (_installScope[name] = obj) || _globals;
},
    _emptyFunc = function _emptyFunc() {
  return 0;
},
    _reservedProps = {},
    _lazyTweens = [],
    _lazyLookup = {},
    _lastRenderedFrame,
    _plugins = {},
    _effects = {},
    _nextGCFrame = 30,
    _harnessPlugins = [],
    _callbackNames = "",
    _harness = function _harness(targets) {
  var target = targets[0],
      harnessPlugin,
      i;
  _isObject(target) || _isFunction(target) || (targets = [targets]);

  if (!(harnessPlugin = (target._gsap || {}).harness)) {
    // find the first target with a harness. We assume targets passed into an animation will be of similar type, meaning the same kind of harness can be used for them all (performance optimization)
    i = _harnessPlugins.length;

    while (i-- && !_harnessPlugins[i].targetTest(target)) {}

    harnessPlugin = _harnessPlugins[i];
  }

  i = targets.length;

  while (i--) {
    targets[i] && (targets[i]._gsap || (targets[i]._gsap = new GSCache(targets[i], harnessPlugin))) || targets.splice(i, 1);
  }

  return targets;
},
    _getCache = function _getCache(target) {
  return target._gsap || _harness(toArray(target))[0]._gsap;
},
    _getProperty = function _getProperty(target, property, v) {
  return (v = target[property]) && _isFunction(v) ? target[property]() : _isUndefined(v) && target.getAttribute && target.getAttribute(property) || v;
},
    _forEachName = function _forEachName(names, func) {
  return (names = names.split(",")).forEach(func) || names;
},
    //split a comma-delimited list of names into an array, then run a forEach() function and return the split array (this is just a way to consolidate/shorten some code).
_round = function _round(value) {
  return Math.round(value * 100000) / 100000 || 0;
},
    _roundPrecise = function _roundPrecise(value) {
  return Math.round(value * 10000000) / 10000000 || 0;
},
    // increased precision mostly for timing values.
_parseRelative = function _parseRelative(start, value) {
  var operator = value.charAt(0),
      end = parseFloat(value.substr(2));
  start = parseFloat(start);
  return operator === "+" ? start + end : operator === "-" ? start - end : operator === "*" ? start * end : start / end;
},
    _arrayContainsAny = function _arrayContainsAny(toSearch, toFind) {
  //searches one array to find matches for any of the items in the toFind array. As soon as one is found, it returns true. It does NOT return all the matches; it's simply a boolean search.
  var l = toFind.length,
      i = 0;

  for (; toSearch.indexOf(toFind[i]) < 0 && ++i < l;) {}

  return i < l;
},
    _lazyRender = function _lazyRender() {
  var l = _lazyTweens.length,
      a = _lazyTweens.slice(0),
      i,
      tween;

  _lazyLookup = {};
  _lazyTweens.length = 0;

  for (i = 0; i < l; i++) {
    tween = a[i];
    tween && tween._lazy && (tween.render(tween._lazy[0], tween._lazy[1], true)._lazy = 0);
  }
},
    _lazySafeRender = function _lazySafeRender(animation, time, suppressEvents, force) {
  _lazyTweens.length && _lazyRender();
  animation.render(time, suppressEvents, force);
  _lazyTweens.length && _lazyRender(); //in case rendering caused any tweens to lazy-init, we should render them because typically when someone calls seek() or time() or progress(), they expect an immediate render.
},
    _numericIfPossible = function _numericIfPossible(value) {
  var n = parseFloat(value);
  return (n || n === 0) && (value + "").match(_delimitedValueExp).length < 2 ? n : _isString(value) ? value.trim() : value;
},
    _passThrough = function _passThrough(p) {
  return p;
},
    _setDefaults = function _setDefaults(obj, defaults) {
  for (var p in defaults) {
    p in obj || (obj[p] = defaults[p]);
  }

  return obj;
},
    _setKeyframeDefaults = function _setKeyframeDefaults(excludeDuration) {
  return function (obj, defaults) {
    for (var p in defaults) {
      p in obj || p === "duration" && excludeDuration || p === "ease" || (obj[p] = defaults[p]);
    }
  };
},
    _merge = function _merge(base, toMerge) {
  for (var p in toMerge) {
    base[p] = toMerge[p];
  }

  return base;
},
    _mergeDeep = function _mergeDeep(base, toMerge) {
  for (var p in toMerge) {
    p !== "__proto__" && p !== "constructor" && p !== "prototype" && (base[p] = _isObject(toMerge[p]) ? _mergeDeep(base[p] || (base[p] = {}), toMerge[p]) : toMerge[p]);
  }

  return base;
},
    _copyExcluding = function _copyExcluding(obj, excluding) {
  var copy = {},
      p;

  for (p in obj) {
    p in excluding || (copy[p] = obj[p]);
  }

  return copy;
},
    _inheritDefaults = function _inheritDefaults(vars) {
  var parent = vars.parent || _globalTimeline,
      func = vars.keyframes ? _setKeyframeDefaults(_isArray(vars.keyframes)) : _setDefaults;

  if (_isNotFalse(vars.inherit)) {
    while (parent) {
      func(vars, parent.vars.defaults);
      parent = parent.parent || parent._dp;
    }
  }

  return vars;
},
    _arraysMatch = function _arraysMatch(a1, a2) {
  var i = a1.length,
      match = i === a2.length;

  while (match && i-- && a1[i] === a2[i]) {}

  return i < 0;
},
    _addLinkedListItem = function _addLinkedListItem(parent, child, firstProp, lastProp, sortBy) {
  if (firstProp === void 0) {
    firstProp = "_first";
  }

  if (lastProp === void 0) {
    lastProp = "_last";
  }

  var prev = parent[lastProp],
      t;

  if (sortBy) {
    t = child[sortBy];

    while (prev && prev[sortBy] > t) {
      prev = prev._prev;
    }
  }

  if (prev) {
    child._next = prev._next;
    prev._next = child;
  } else {
    child._next = parent[firstProp];
    parent[firstProp] = child;
  }

  if (child._next) {
    child._next._prev = child;
  } else {
    parent[lastProp] = child;
  }

  child._prev = prev;
  child.parent = child._dp = parent;
  return child;
},
    _removeLinkedListItem = function _removeLinkedListItem(parent, child, firstProp, lastProp) {
  if (firstProp === void 0) {
    firstProp = "_first";
  }

  if (lastProp === void 0) {
    lastProp = "_last";
  }

  var prev = child._prev,
      next = child._next;

  if (prev) {
    prev._next = next;
  } else if (parent[firstProp] === child) {
    parent[firstProp] = next;
  }

  if (next) {
    next._prev = prev;
  } else if (parent[lastProp] === child) {
    parent[lastProp] = prev;
  }

  child._next = child._prev = child.parent = null; // don't delete the _dp just so we can revert if necessary. But parent should be null to indicate the item isn't in a linked list.
},
    _removeFromParent = function _removeFromParent(child, onlyIfParentHasAutoRemove) {
  child.parent && (!onlyIfParentHasAutoRemove || child.parent.autoRemoveChildren) && child.parent.remove(child);
  child._act = 0;
},
    _uncache = function _uncache(animation, child) {
  if (animation && (!child || child._end > animation._dur || child._start < 0)) {
    // performance optimization: if a child animation is passed in we should only uncache if that child EXTENDS the animation (its end time is beyond the end)
    var a = animation;

    while (a) {
      a._dirty = 1;
      a = a.parent;
    }
  }

  return animation;
},
    _recacheAncestors = function _recacheAncestors(animation) {
  var parent = animation.parent;

  while (parent && parent.parent) {
    //sometimes we must force a re-sort of all children and update the duration/totalDuration of all ancestor timelines immediately in case, for example, in the middle of a render loop, one tween alters another tween's timeScale which shoves its startTime before 0, forcing the parent timeline to shift around and shiftChildren() which could affect that next tween's render (startTime). Doesn't matter for the root timeline though.
    parent._dirty = 1;
    parent.totalDuration();
    parent = parent.parent;
  }

  return animation;
},
    _hasNoPausedAncestors = function _hasNoPausedAncestors(animation) {
  return !animation || animation._ts && _hasNoPausedAncestors(animation.parent);
},
    _elapsedCycleDuration = function _elapsedCycleDuration(animation) {
  return animation._repeat ? _animationCycle(animation._tTime, animation = animation.duration() + animation._rDelay) * animation : 0;
},
    // feed in the totalTime and cycleDuration and it'll return the cycle (iteration minus 1) and if the playhead is exactly at the very END, it will NOT bump up to the next cycle.
_animationCycle = function _animationCycle(tTime, cycleDuration) {
  var whole = Math.floor(tTime /= cycleDuration);
  return tTime && whole === tTime ? whole - 1 : whole;
},
    _parentToChildTotalTime = function _parentToChildTotalTime(parentTime, child) {
  return (parentTime - child._start) * child._ts + (child._ts >= 0 ? 0 : child._dirty ? child.totalDuration() : child._tDur);
},
    _setEnd = function _setEnd(animation) {
  return animation._end = _roundPrecise(animation._start + (animation._tDur / Math.abs(animation._ts || animation._rts || _tinyNum) || 0));
},
    _alignPlayhead = function _alignPlayhead(animation, totalTime) {
  // adjusts the animation's _start and _end according to the provided totalTime (only if the parent's smoothChildTiming is true and the animation isn't paused). It doesn't do any rendering or forcing things back into parent timelines, etc. - that's what totalTime() is for.
  var parent = animation._dp;

  if (parent && parent.smoothChildTiming && animation._ts) {
    animation._start = _roundPrecise(parent._time - (animation._ts > 0 ? totalTime / animation._ts : ((animation._dirty ? animation.totalDuration() : animation._tDur) - totalTime) / -animation._ts));

    _setEnd(animation);

    parent._dirty || _uncache(parent, animation); //for performance improvement. If the parent's cache is already dirty, it already took care of marking the ancestors as dirty too, so skip the function call here.
  }

  return animation;
},

/*
_totalTimeToTime = (clampedTotalTime, duration, repeat, repeatDelay, yoyo) => {
	let cycleDuration = duration + repeatDelay,
		time = _round(clampedTotalTime % cycleDuration);
	if (time > duration) {
		time = duration;
	}
	return (yoyo && (~~(clampedTotalTime / cycleDuration) & 1)) ? duration - time : time;
},
*/
_postAddChecks = function _postAddChecks(timeline, child) {
  var t;

  if (child._time || child._initted && !child._dur) {
    //in case, for example, the _start is moved on a tween that has already rendered. Imagine it's at its end state, then the startTime is moved WAY later (after the end of this timeline), it should render at its beginning.
    t = _parentToChildTotalTime(timeline.rawTime(), child);

    if (!child._dur || _clamp(0, child.totalDuration(), t) - child._tTime > _tinyNum) {
      child.render(t, true);
    }
  } //if the timeline has already ended but the inserted tween/timeline extends the duration, we should enable this timeline again so that it renders properly. We should also align the playhead with the parent timeline's when appropriate.


  if (_uncache(timeline, child)._dp && timeline._initted && timeline._time >= timeline._dur && timeline._ts) {
    //in case any of the ancestors had completed but should now be enabled...
    if (timeline._dur < timeline.duration()) {
      t = timeline;

      while (t._dp) {
        t.rawTime() >= 0 && t.totalTime(t._tTime); //moves the timeline (shifts its startTime) if necessary, and also enables it. If it's currently zero, though, it may not be scheduled to render until later so there's no need to force it to align with the current playhead position. Only move to catch up with the playhead.

        t = t._dp;
      }
    }

    timeline._zTime = -_tinyNum; // helps ensure that the next render() will be forced (crossingStart = true in render()), even if the duration hasn't changed (we're adding a child which would need to get rendered). Definitely an edge case. Note: we MUST do this AFTER the loop above where the totalTime() might trigger a render() because this _addToTimeline() method gets called from the Animation constructor, BEFORE tweens even record their targets, etc. so we wouldn't want things to get triggered in the wrong order.
  }
},
    _addToTimeline = function _addToTimeline(timeline, child, position, skipChecks) {
  child.parent && _removeFromParent(child);
  child._start = _roundPrecise((_isNumber(position) ? position : position || timeline !== _globalTimeline ? _parsePosition(timeline, position, child) : timeline._time) + child._delay);
  child._end = _roundPrecise(child._start + (child.totalDuration() / Math.abs(child.timeScale()) || 0));

  _addLinkedListItem(timeline, child, "_first", "_last", timeline._sort ? "_start" : 0);

  _isFromOrFromStart(child) || (timeline._recent = child);
  skipChecks || _postAddChecks(timeline, child);
  return timeline;
},
    _scrollTrigger = function _scrollTrigger(animation, trigger) {
  return (_globals.ScrollTrigger || _missingPlugin("scrollTrigger", trigger)) && _globals.ScrollTrigger.create(trigger, animation);
},
    _attemptInitTween = function _attemptInitTween(tween, totalTime, force, suppressEvents) {
  _initTween(tween, totalTime);

  if (!tween._initted) {
    return 1;
  }

  if (!force && tween._pt && (tween._dur && tween.vars.lazy !== false || !tween._dur && tween.vars.lazy) && _lastRenderedFrame !== _ticker.frame) {
    _lazyTweens.push(tween);

    tween._lazy = [totalTime, suppressEvents];
    return 1;
  }
},
    _parentPlayheadIsBeforeStart = function _parentPlayheadIsBeforeStart(_ref) {
  var parent = _ref.parent;
  return parent && parent._ts && parent._initted && !parent._lock && (parent.rawTime() < 0 || _parentPlayheadIsBeforeStart(parent));
},
    // check parent's _lock because when a timeline repeats/yoyos and does its artificial wrapping, we shouldn't force the ratio back to 0
_isFromOrFromStart = function _isFromOrFromStart(_ref2) {
  var data = _ref2.data;
  return data === "isFromStart" || data === "isStart";
},
    _renderZeroDurationTween = function _renderZeroDurationTween(tween, totalTime, suppressEvents, force) {
  var prevRatio = tween.ratio,
      ratio = totalTime < 0 || !totalTime && (!tween._start && _parentPlayheadIsBeforeStart(tween) && !(!tween._initted && _isFromOrFromStart(tween)) || (tween._ts < 0 || tween._dp._ts < 0) && !_isFromOrFromStart(tween)) ? 0 : 1,
      // if the tween or its parent is reversed and the totalTime is 0, we should go to a ratio of 0. Edge case: if a from() or fromTo() stagger tween is placed later in a timeline, the "startAt" zero-duration tween could initially render at a time when the parent timeline's playhead is technically BEFORE where this tween is, so make sure that any "from" and "fromTo" startAt tweens are rendered the first time at a ratio of 1.
  repeatDelay = tween._rDelay,
      tTime = 0,
      pt,
      iteration,
      prevIteration;

  if (repeatDelay && tween._repeat) {
    // in case there's a zero-duration tween that has a repeat with a repeatDelay
    tTime = _clamp(0, tween._tDur, totalTime);
    iteration = _animationCycle(tTime, repeatDelay);
    tween._yoyo && iteration & 1 && (ratio = 1 - ratio);

    if (iteration !== _animationCycle(tween._tTime, repeatDelay)) {
      // if iteration changed
      prevRatio = 1 - ratio;
      tween.vars.repeatRefresh && tween._initted && tween.invalidate();
    }
  }

  if (ratio !== prevRatio || force || tween._zTime === _tinyNum || !totalTime && tween._zTime) {
    if (!tween._initted && _attemptInitTween(tween, totalTime, force, suppressEvents)) {
      // if we render the very beginning (time == 0) of a fromTo(), we must force the render (normal tweens wouldn't need to render at a time of 0 when the prevTime was also 0). This is also mandatory to make sure overwriting kicks in immediately.
      return;
    }

    prevIteration = tween._zTime;
    tween._zTime = totalTime || (suppressEvents ? _tinyNum : 0); // when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect.

    suppressEvents || (suppressEvents = totalTime && !prevIteration); // if it was rendered previously at exactly 0 (_zTime) and now the playhead is moving away, DON'T fire callbacks otherwise they'll seem like duplicates.

    tween.ratio = ratio;
    tween._from && (ratio = 1 - ratio);
    tween._time = 0;
    tween._tTime = tTime;
    pt = tween._pt;

    while (pt) {
      pt.r(ratio, pt.d);
      pt = pt._next;
    }

    tween._startAt && totalTime < 0 && tween._startAt.render(totalTime, true, true);
    tween._onUpdate && !suppressEvents && _callback(tween, "onUpdate");
    tTime && tween._repeat && !suppressEvents && tween.parent && _callback(tween, "onRepeat");

    if ((totalTime >= tween._tDur || totalTime < 0) && tween.ratio === ratio) {
      ratio && _removeFromParent(tween, 1);

      if (!suppressEvents) {
        _callback(tween, ratio ? "onComplete" : "onReverseComplete", true);

        tween._prom && tween._prom();
      }
    }
  } else if (!tween._zTime) {
    tween._zTime = totalTime;
  }
},
    _findNextPauseTween = function _findNextPauseTween(animation, prevTime, time) {
  var child;

  if (time > prevTime) {
    child = animation._first;

    while (child && child._start <= time) {
      if (child.data === "isPause" && child._start > prevTime) {
        return child;
      }

      child = child._next;
    }
  } else {
    child = animation._last;

    while (child && child._start >= time) {
      if (child.data === "isPause" && child._start < prevTime) {
        return child;
      }

      child = child._prev;
    }
  }
},
    _setDuration = function _setDuration(animation, duration, skipUncache, leavePlayhead) {
  var repeat = animation._repeat,
      dur = _roundPrecise(duration) || 0,
      totalProgress = animation._tTime / animation._tDur;
  totalProgress && !leavePlayhead && (animation._time *= dur / animation._dur);
  animation._dur = dur;
  animation._tDur = !repeat ? dur : repeat < 0 ? 1e10 : _roundPrecise(dur * (repeat + 1) + animation._rDelay * repeat);
  totalProgress > 0 && !leavePlayhead ? _alignPlayhead(animation, animation._tTime = animation._tDur * totalProgress) : animation.parent && _setEnd(animation);
  skipUncache || _uncache(animation.parent, animation);
  return animation;
},
    _onUpdateTotalDuration = function _onUpdateTotalDuration(animation) {
  return animation instanceof Timeline ? _uncache(animation) : _setDuration(animation, animation._dur);
},
    _zeroPosition = {
  _start: 0,
  endTime: _emptyFunc,
  totalDuration: _emptyFunc
},
    _parsePosition = function _parsePosition(animation, position, percentAnimation) {
  var labels = animation.labels,
      recent = animation._recent || _zeroPosition,
      clippedDuration = animation.duration() >= _bigNum ? recent.endTime(false) : animation._dur,
      //in case there's a child that infinitely repeats, users almost never intend for the insertion point of a new child to be based on a SUPER long value like that so we clip it and assume the most recently-added child's endTime should be used instead.
  i,
      offset,
      isPercent;

  if (_isString(position) && (isNaN(position) || position in labels)) {
    //if the string is a number like "1", check to see if there's a label with that name, otherwise interpret it as a number (absolute value).
    offset = position.charAt(0);
    isPercent = position.substr(-1) === "%";
    i = position.indexOf("=");

    if (offset === "<" || offset === ">") {
      i >= 0 && (position = position.replace(/=/, ""));
      return (offset === "<" ? recent._start : recent.endTime(recent._repeat >= 0)) + (parseFloat(position.substr(1)) || 0) * (isPercent ? (i < 0 ? recent : percentAnimation).totalDuration() / 100 : 1);
    }

    if (i < 0) {
      position in labels || (labels[position] = clippedDuration);
      return labels[position];
    }

    offset = parseFloat(position.charAt(i - 1) + position.substr(i + 1));

    if (isPercent && percentAnimation) {
      offset = offset / 100 * (_isArray(percentAnimation) ? percentAnimation[0] : percentAnimation).totalDuration();
    }

    return i > 1 ? _parsePosition(animation, position.substr(0, i - 1), percentAnimation) + offset : clippedDuration + offset;
  }

  return position == null ? clippedDuration : +position;
},
    _createTweenType = function _createTweenType(type, params, timeline) {
  var isLegacy = _isNumber(params[1]),
      varsIndex = (isLegacy ? 2 : 1) + (type < 2 ? 0 : 1),
      vars = params[varsIndex],
      irVars,
      parent;

  isLegacy && (vars.duration = params[1]);
  vars.parent = timeline;

  if (type) {
    irVars = vars;
    parent = timeline;

    while (parent && !("immediateRender" in irVars)) {
      // inheritance hasn't happened yet, but someone may have set a default in an ancestor timeline. We could do vars.immediateRender = _isNotFalse(_inheritDefaults(vars).immediateRender) but that'd exact a slight performance penalty because _inheritDefaults() also runs in the Tween constructor. We're paying a small kb price here to gain speed.
      irVars = parent.vars.defaults || {};
      parent = _isNotFalse(parent.vars.inherit) && parent.parent;
    }

    vars.immediateRender = _isNotFalse(irVars.immediateRender);
    type < 2 ? vars.runBackwards = 1 : vars.startAt = params[varsIndex - 1]; // "from" vars
  }

  return new Tween(params[0], vars, params[varsIndex + 1]);
},
    _conditionalReturn = function _conditionalReturn(value, func) {
  return value || value === 0 ? func(value) : func;
},
    _clamp = function _clamp(min, max, value) {
  return value < min ? min : value > max ? max : value;
},
    getUnit = function getUnit(value, v) {
  return !_isString(value) || !(v = _unitExp.exec(value)) ? "" : v[1];
},
    // note: protect against padded numbers as strings, like "100.100". That shouldn't return "00" as the unit. If it's numeric, return no unit.
clamp = function clamp(min, max, value) {
  return _conditionalReturn(value, function (v) {
    return _clamp(min, max, v);
  });
},
    _slice = [].slice,
    _isArrayLike = function _isArrayLike(value, nonEmpty) {
  return value && _isObject(value) && "length" in value && (!nonEmpty && !value.length || value.length - 1 in value && _isObject(value[0])) && !value.nodeType && value !== _win;
},
    _flatten = function _flatten(ar, leaveStrings, accumulator) {
  if (accumulator === void 0) {
    accumulator = [];
  }

  return ar.forEach(function (value) {
    var _accumulator;

    return _isString(value) && !leaveStrings || _isArrayLike(value, 1) ? (_accumulator = accumulator).push.apply(_accumulator, toArray(value)) : accumulator.push(value);
  }) || accumulator;
},
    //takes any value and returns an array. If it's a string (and leaveStrings isn't true), it'll use document.querySelectorAll() and convert that to an array. It'll also accept iterables like jQuery objects.
toArray = function toArray(value, scope, leaveStrings) {
  return _isString(value) && !leaveStrings && (_coreInitted || !_wake()) ? _slice.call((scope || _doc).querySelectorAll(value), 0) : _isArray(value) ? _flatten(value, leaveStrings) : _isArrayLike(value) ? _slice.call(value, 0) : value ? [value] : [];
},
    selector = function selector(value) {
  value = toArray(value)[0] || _warn("Invalid scope") || {};
  return function (v) {
    var el = value.current || value.nativeElement || value;
    return toArray(v, el.querySelectorAll ? el : el === value ? _warn("Invalid scope") || _doc.createElement("div") : value);
  };
},
    shuffle = function shuffle(a) {
  return a.sort(function () {
    return .5 - Math.random();
  });
},
    // alternative that's a bit faster and more reliably diverse but bigger:   for (let j, v, i = a.length; i; j = Math.floor(Math.random() * i), v = a[--i], a[i] = a[j], a[j] = v); return a;
//for distributing values across an array. Can accept a number, a function or (most commonly) a function which can contain the following properties: {base, amount, from, ease, grid, axis, length, each}. Returns a function that expects the following parameters: index, target, array. Recognizes the following
distribute = function distribute(v) {
  if (_isFunction(v)) {
    return v;
  }

  var vars = _isObject(v) ? v : {
    each: v
  },
      //n:1 is just to indicate v was a number; we leverage that later to set v according to the length we get. If a number is passed in, we treat it like the old stagger value where 0.1, for example, would mean that things would be distributed with 0.1 between each element in the array rather than a total "amount" that's chunked out among them all.
  ease = _parseEase(vars.ease),
      from = vars.from || 0,
      base = parseFloat(vars.base) || 0,
      cache = {},
      isDecimal = from > 0 && from < 1,
      ratios = isNaN(from) || isDecimal,
      axis = vars.axis,
      ratioX = from,
      ratioY = from;

  if (_isString(from)) {
    ratioX = ratioY = {
      center: .5,
      edges: .5,
      end: 1
    }[from] || 0;
  } else if (!isDecimal && ratios) {
    ratioX = from[0];
    ratioY = from[1];
  }

  return function (i, target, a) {
    var l = (a || vars).length,
        distances = cache[l],
        originX,
        originY,
        x,
        y,
        d,
        j,
        max,
        min,
        wrapAt;

    if (!distances) {
      wrapAt = vars.grid === "auto" ? 0 : (vars.grid || [1, _bigNum])[1];

      if (!wrapAt) {
        max = -_bigNum;

        while (max < (max = a[wrapAt++].getBoundingClientRect().left) && wrapAt < l) {}

        wrapAt--;
      }

      distances = cache[l] = [];
      originX = ratios ? Math.min(wrapAt, l) * ratioX - .5 : from % wrapAt;
      originY = wrapAt === _bigNum ? 0 : ratios ? l * ratioY / wrapAt - .5 : from / wrapAt | 0;
      max = 0;
      min = _bigNum;

      for (j = 0; j < l; j++) {
        x = j % wrapAt - originX;
        y = originY - (j / wrapAt | 0);
        distances[j] = d = !axis ? _sqrt(x * x + y * y) : Math.abs(axis === "y" ? y : x);
        d > max && (max = d);
        d < min && (min = d);
      }

      from === "random" && shuffle(distances);
      distances.max = max - min;
      distances.min = min;
      distances.v = l = (parseFloat(vars.amount) || parseFloat(vars.each) * (wrapAt > l ? l - 1 : !axis ? Math.max(wrapAt, l / wrapAt) : axis === "y" ? l / wrapAt : wrapAt) || 0) * (from === "edges" ? -1 : 1);
      distances.b = l < 0 ? base - l : base;
      distances.u = getUnit(vars.amount || vars.each) || 0; //unit

      ease = ease && l < 0 ? _invertEase(ease) : ease;
    }

    l = (distances[i] - distances.min) / distances.max || 0;
    return _roundPrecise(distances.b + (ease ? ease(l) : l) * distances.v) + distances.u; //round in order to work around floating point errors
  };
},
    _roundModifier = function _roundModifier(v) {
  //pass in 0.1 get a function that'll round to the nearest tenth, or 5 to round to the closest 5, or 0.001 to the closest 1000th, etc.
  var p = Math.pow(10, ((v + "").split(".")[1] || "").length); //to avoid floating point math errors (like 24 * 0.1 == 2.4000000000000004), we chop off at a specific number of decimal places (much faster than toFixed())

  return function (raw) {
    var n = Math.round(parseFloat(raw) / v) * v * p;
    return (n - n % 1) / p + (_isNumber(raw) ? 0 : getUnit(raw)); // n - n % 1 replaces Math.floor() in order to handle negative values properly. For example, Math.floor(-150.00000000000003) is 151!
  };
},
    snap = function snap(snapTo, value) {
  var isArray = _isArray(snapTo),
      radius,
      is2D;

  if (!isArray && _isObject(snapTo)) {
    radius = isArray = snapTo.radius || _bigNum;

    if (snapTo.values) {
      snapTo = toArray(snapTo.values);

      if (is2D = !_isNumber(snapTo[0])) {
        radius *= radius; //performance optimization so we don't have to Math.sqrt() in the loop.
      }
    } else {
      snapTo = _roundModifier(snapTo.increment);
    }
  }

  return _conditionalReturn(value, !isArray ? _roundModifier(snapTo) : _isFunction(snapTo) ? function (raw) {
    is2D = snapTo(raw);
    return Math.abs(is2D - raw) <= radius ? is2D : raw;
  } : function (raw) {
    var x = parseFloat(is2D ? raw.x : raw),
        y = parseFloat(is2D ? raw.y : 0),
        min = _bigNum,
        closest = 0,
        i = snapTo.length,
        dx,
        dy;

    while (i--) {
      if (is2D) {
        dx = snapTo[i].x - x;
        dy = snapTo[i].y - y;
        dx = dx * dx + dy * dy;
      } else {
        dx = Math.abs(snapTo[i] - x);
      }

      if (dx < min) {
        min = dx;
        closest = i;
      }
    }

    closest = !radius || min <= radius ? snapTo[closest] : raw;
    return is2D || closest === raw || _isNumber(raw) ? closest : closest + getUnit(raw);
  });
},
    random = function random(min, max, roundingIncrement, returnFunction) {
  return _conditionalReturn(_isArray(min) ? !max : roundingIncrement === true ? !!(roundingIncrement = 0) : !returnFunction, function () {
    return _isArray(min) ? min[~~(Math.random() * min.length)] : (roundingIncrement = roundingIncrement || 1e-5) && (returnFunction = roundingIncrement < 1 ? Math.pow(10, (roundingIncrement + "").length - 2) : 1) && Math.floor(Math.round((min - roundingIncrement / 2 + Math.random() * (max - min + roundingIncrement * .99)) / roundingIncrement) * roundingIncrement * returnFunction) / returnFunction;
  });
},
    pipe = function pipe() {
  for (var _len = arguments.length, functions = new Array(_len), _key = 0; _key < _len; _key++) {
    functions[_key] = arguments[_key];
  }

  return function (value) {
    return functions.reduce(function (v, f) {
      return f(v);
    }, value);
  };
},
    unitize = function unitize(func, unit) {
  return function (value) {
    return func(parseFloat(value)) + (unit || getUnit(value));
  };
},
    normalize = function normalize(min, max, value) {
  return mapRange(min, max, 0, 1, value);
},
    _wrapArray = function _wrapArray(a, wrapper, value) {
  return _conditionalReturn(value, function (index) {
    return a[~~wrapper(index)];
  });
},
    wrap = function wrap(min, max, value) {
  // NOTE: wrap() CANNOT be an arrow function! A very odd compiling bug causes problems (unrelated to GSAP).
  var range = max - min;
  return _isArray(min) ? _wrapArray(min, wrap(0, min.length), max) : _conditionalReturn(value, function (value) {
    return (range + (value - min) % range) % range + min;
  });
},
    wrapYoyo = function wrapYoyo(min, max, value) {
  var range = max - min,
      total = range * 2;
  return _isArray(min) ? _wrapArray(min, wrapYoyo(0, min.length - 1), max) : _conditionalReturn(value, function (value) {
    value = (total + (value - min) % total) % total || 0;
    return min + (value > range ? total - value : value);
  });
},
    _replaceRandom = function _replaceRandom(value) {
  //replaces all occurrences of random(...) in a string with the calculated random value. can be a range like random(-100, 100, 5) or an array like random([0, 100, 500])
  var prev = 0,
      s = "",
      i,
      nums,
      end,
      isArray;

  while (~(i = value.indexOf("random(", prev))) {
    end = value.indexOf(")", i);
    isArray = value.charAt(i + 7) === "[";
    nums = value.substr(i + 7, end - i - 7).match(isArray ? _delimitedValueExp : _strictNumExp);
    s += value.substr(prev, i - prev) + random(isArray ? nums : +nums[0], isArray ? 0 : +nums[1], +nums[2] || 1e-5);
    prev = end + 1;
  }

  return s + value.substr(prev, value.length - prev);
},
    mapRange = function mapRange(inMin, inMax, outMin, outMax, value) {
  var inRange = inMax - inMin,
      outRange = outMax - outMin;
  return _conditionalReturn(value, function (value) {
    return outMin + ((value - inMin) / inRange * outRange || 0);
  });
},
    interpolate = function interpolate(start, end, progress, mutate) {
  var func = isNaN(start + end) ? 0 : function (p) {
    return (1 - p) * start + p * end;
  };

  if (!func) {
    var isString = _isString(start),
        master = {},
        p,
        i,
        interpolators,
        l,
        il;

    progress === true && (mutate = 1) && (progress = null);

    if (isString) {
      start = {
        p: start
      };
      end = {
        p: end
      };
    } else if (_isArray(start) && !_isArray(end)) {
      interpolators = [];
      l = start.length;
      il = l - 2;

      for (i = 1; i < l; i++) {
        interpolators.push(interpolate(start[i - 1], start[i])); //build the interpolators up front as a performance optimization so that when the function is called many times, it can just reuse them.
      }

      l--;

      func = function func(p) {
        p *= l;
        var i = Math.min(il, ~~p);
        return interpolators[i](p - i);
      };

      progress = end;
    } else if (!mutate) {
      start = _merge(_isArray(start) ? [] : {}, start);
    }

    if (!interpolators) {
      for (p in end) {
        _addPropTween.call(master, start, p, "get", end[p]);
      }

      func = function func(p) {
        return _renderPropTweens(p, master) || (isString ? start.p : start);
      };
    }
  }

  return _conditionalReturn(progress, func);
},
    _getLabelInDirection = function _getLabelInDirection(timeline, fromTime, backward) {
  //used for nextLabel() and previousLabel()
  var labels = timeline.labels,
      min = _bigNum,
      p,
      distance,
      label;

  for (p in labels) {
    distance = labels[p] - fromTime;

    if (distance < 0 === !!backward && distance && min > (distance = Math.abs(distance))) {
      label = p;
      min = distance;
    }
  }

  return label;
},
    _callback = function _callback(animation, type, executeLazyFirst) {
  var v = animation.vars,
      callback = v[type],
      params,
      scope;

  if (!callback) {
    return;
  }

  params = v[type + "Params"];
  scope = v.callbackScope || animation;
  executeLazyFirst && _lazyTweens.length && _lazyRender(); //in case rendering caused any tweens to lazy-init, we should render them because typically when a timeline finishes, users expect things to have rendered fully. Imagine an onUpdate on a timeline that reports/checks tweened values.

  return params ? callback.apply(scope, params) : callback.call(scope);
},
    _interrupt = function _interrupt(animation) {
  _removeFromParent(animation);

  animation.scrollTrigger && animation.scrollTrigger.kill(false);
  animation.progress() < 1 && _callback(animation, "onInterrupt");
  return animation;
},
    _quickTween,
    _createPlugin = function _createPlugin(config) {
  config = !config.name && config["default"] || config; //UMD packaging wraps things oddly, so for example MotionPathHelper becomes {MotionPathHelper:MotionPathHelper, default:MotionPathHelper}.

  var name = config.name,
      isFunc = _isFunction(config),
      Plugin = name && !isFunc && config.init ? function () {
    this._props = [];
  } : config,
      //in case someone passes in an object that's not a plugin, like CustomEase
  instanceDefaults = {
    init: _emptyFunc,
    render: _renderPropTweens,
    add: _addPropTween,
    kill: _killPropTweensOf,
    modifier: _addPluginModifier,
    rawVars: 0
  },
      statics = {
    targetTest: 0,
    get: 0,
    getSetter: _getSetter,
    aliases: {},
    register: 0
  };

  _wake();

  if (config !== Plugin) {
    if (_plugins[name]) {
      return;
    }

    _setDefaults(Plugin, _setDefaults(_copyExcluding(config, instanceDefaults), statics)); //static methods


    _merge(Plugin.prototype, _merge(instanceDefaults, _copyExcluding(config, statics))); //instance methods


    _plugins[Plugin.prop = name] = Plugin;

    if (config.targetTest) {
      _harnessPlugins.push(Plugin);

      _reservedProps[name] = 1;
    }

    name = (name === "css" ? "CSS" : name.charAt(0).toUpperCase() + name.substr(1)) + "Plugin"; //for the global name. "motionPath" should become MotionPathPlugin
  }

  _addGlobal(name, Plugin);

  config.register && config.register(gsap, Plugin, PropTween);
},

/*
 * --------------------------------------------------------------------------------------
 * COLORS
 * --------------------------------------------------------------------------------------
 */
_255 = 255,
    _colorLookup = {
  aqua: [0, _255, _255],
  lime: [0, _255, 0],
  silver: [192, 192, 192],
  black: [0, 0, 0],
  maroon: [128, 0, 0],
  teal: [0, 128, 128],
  blue: [0, 0, _255],
  navy: [0, 0, 128],
  white: [_255, _255, _255],
  olive: [128, 128, 0],
  yellow: [_255, _255, 0],
  orange: [_255, 165, 0],
  gray: [128, 128, 128],
  purple: [128, 0, 128],
  green: [0, 128, 0],
  red: [_255, 0, 0],
  pink: [_255, 192, 203],
  cyan: [0, _255, _255],
  transparent: [_255, _255, _255, 0]
},
    // possible future idea to replace the hard-coded color name values - put this in the ticker.wake() where we set the _doc:
// let ctx = _doc.createElement("canvas").getContext("2d");
// _forEachName("aqua,lime,silver,black,maroon,teal,blue,navy,white,olive,yellow,orange,gray,purple,green,red,pink,cyan", color => {ctx.fillStyle = color; _colorLookup[color] = splitColor(ctx.fillStyle)});
_hue = function _hue(h, m1, m2) {
  h += h < 0 ? 1 : h > 1 ? -1 : 0;
  return (h * 6 < 1 ? m1 + (m2 - m1) * h * 6 : h < .5 ? m2 : h * 3 < 2 ? m1 + (m2 - m1) * (2 / 3 - h) * 6 : m1) * _255 + .5 | 0;
},
    splitColor = function splitColor(v, toHSL, forceAlpha) {
  var a = !v ? _colorLookup.black : _isNumber(v) ? [v >> 16, v >> 8 & _255, v & _255] : 0,
      r,
      g,
      b,
      h,
      s,
      l,
      max,
      min,
      d,
      wasHSL;

  if (!a) {
    if (v.substr(-1) === ",") {
      //sometimes a trailing comma is included and we should chop it off (typically from a comma-delimited list of values like a textShadow:"2px 2px 2px blue, 5px 5px 5px rgb(255,0,0)" - in this example "blue," has a trailing comma. We could strip it out inside parseComplex() but we'd need to do it to the beginning and ending values plus it wouldn't provide protection from other potential scenarios like if the user passes in a similar value.
      v = v.substr(0, v.length - 1);
    }

    if (_colorLookup[v]) {
      a = _colorLookup[v];
    } else if (v.charAt(0) === "#") {
      if (v.length < 6) {
        //for shorthand like #9F0 or #9F0F (could have alpha)
        r = v.charAt(1);
        g = v.charAt(2);
        b = v.charAt(3);
        v = "#" + r + r + g + g + b + b + (v.length === 5 ? v.charAt(4) + v.charAt(4) : "");
      }

      if (v.length === 9) {
        // hex with alpha, like #fd5e53ff
        a = parseInt(v.substr(1, 6), 16);
        return [a >> 16, a >> 8 & _255, a & _255, parseInt(v.substr(7), 16) / 255];
      }

      v = parseInt(v.substr(1), 16);
      a = [v >> 16, v >> 8 & _255, v & _255];
    } else if (v.substr(0, 3) === "hsl") {
      a = wasHSL = v.match(_strictNumExp);

      if (!toHSL) {
        h = +a[0] % 360 / 360;
        s = +a[1] / 100;
        l = +a[2] / 100;
        g = l <= .5 ? l * (s + 1) : l + s - l * s;
        r = l * 2 - g;
        a.length > 3 && (a[3] *= 1); //cast as number

        a[0] = _hue(h + 1 / 3, r, g);
        a[1] = _hue(h, r, g);
        a[2] = _hue(h - 1 / 3, r, g);
      } else if (~v.indexOf("=")) {
        //if relative values are found, just return the raw strings with the relative prefixes in place.
        a = v.match(_numExp);
        forceAlpha && a.length < 4 && (a[3] = 1);
        return a;
      }
    } else {
      a = v.match(_strictNumExp) || _colorLookup.transparent;
    }

    a = a.map(Number);
  }

  if (toHSL && !wasHSL) {
    r = a[0] / _255;
    g = a[1] / _255;
    b = a[2] / _255;
    max = Math.max(r, g, b);
    min = Math.min(r, g, b);
    l = (max + min) / 2;

    if (max === min) {
      h = s = 0;
    } else {
      d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
      h *= 60;
    }

    a[0] = ~~(h + .5);
    a[1] = ~~(s * 100 + .5);
    a[2] = ~~(l * 100 + .5);
  }

  forceAlpha && a.length < 4 && (a[3] = 1);
  return a;
},
    _colorOrderData = function _colorOrderData(v) {
  // strips out the colors from the string, finds all the numeric slots (with units) and returns an array of those. The Array also has a "c" property which is an Array of the index values where the colors belong. This is to help work around issues where there's a mis-matched order of color/numeric data like drop-shadow(#f00 0px 1px 2px) and drop-shadow(0x 1px 2px #f00). This is basically a helper function used in _formatColors()
  var values = [],
      c = [],
      i = -1;
  v.split(_colorExp).forEach(function (v) {
    var a = v.match(_numWithUnitExp) || [];
    values.push.apply(values, a);
    c.push(i += a.length + 1);
  });
  values.c = c;
  return values;
},
    _formatColors = function _formatColors(s, toHSL, orderMatchData) {
  var result = "",
      colors = (s + result).match(_colorExp),
      type = toHSL ? "hsla(" : "rgba(",
      i = 0,
      c,
      shell,
      d,
      l;

  if (!colors) {
    return s;
  }

  colors = colors.map(function (color) {
    return (color = splitColor(color, toHSL, 1)) && type + (toHSL ? color[0] + "," + color[1] + "%," + color[2] + "%," + color[3] : color.join(",")) + ")";
  });

  if (orderMatchData) {
    d = _colorOrderData(s);
    c = orderMatchData.c;

    if (c.join(result) !== d.c.join(result)) {
      shell = s.replace(_colorExp, "1").split(_numWithUnitExp);
      l = shell.length - 1;

      for (; i < l; i++) {
        result += shell[i] + (~c.indexOf(i) ? colors.shift() || type + "0,0,0,0)" : (d.length ? d : colors.length ? colors : orderMatchData).shift());
      }
    }
  }

  if (!shell) {
    shell = s.split(_colorExp);
    l = shell.length - 1;

    for (; i < l; i++) {
      result += shell[i] + colors[i];
    }
  }

  return result + shell[l];
},
    _colorExp = function () {
  var s = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
      //we'll dynamically build this Regular Expression to conserve file size. After building it, it will be able to find rgb(), rgba(), # (hexadecimal), and named color values like red, blue, purple, etc.,
  p;

  for (p in _colorLookup) {
    s += "|" + p + "\\b";
  }

  return new RegExp(s + ")", "gi");
}(),
    _hslExp = /hsl[a]?\(/,
    _colorStringFilter = function _colorStringFilter(a) {
  var combined = a.join(" "),
      toHSL;
  _colorExp.lastIndex = 0;

  if (_colorExp.test(combined)) {
    toHSL = _hslExp.test(combined);
    a[1] = _formatColors(a[1], toHSL);
    a[0] = _formatColors(a[0], toHSL, _colorOrderData(a[1])); // make sure the order of numbers/colors match with the END value.

    return true;
  }
},

/*
 * --------------------------------------------------------------------------------------
 * TICKER
 * --------------------------------------------------------------------------------------
 */
_tickerActive,
    _ticker = function () {
  var _getTime = Date.now,
      _lagThreshold = 500,
      _adjustedLag = 33,
      _startTime = _getTime(),
      _lastUpdate = _startTime,
      _gap = 1000 / 240,
      _nextTime = _gap,
      _listeners = [],
      _id,
      _req,
      _raf,
      _self,
      _delta,
      _i,
      _tick = function _tick(v) {
    var elapsed = _getTime() - _lastUpdate,
        manual = v === true,
        overlap,
        dispatch,
        time,
        frame;

    elapsed > _lagThreshold && (_startTime += elapsed - _adjustedLag);
    _lastUpdate += elapsed;
    time = _lastUpdate - _startTime;
    overlap = time - _nextTime;

    if (overlap > 0 || manual) {
      frame = ++_self.frame;
      _delta = time - _self.time * 1000;
      _self.time = time = time / 1000;
      _nextTime += overlap + (overlap >= _gap ? 4 : _gap - overlap);
      dispatch = 1;
    }

    manual || (_id = _req(_tick)); //make sure the request is made before we dispatch the "tick" event so that timing is maintained. Otherwise, if processing the "tick" requires a bunch of time (like 15ms) and we're using a setTimeout() that's based on 16.7ms, it'd technically take 31.7ms between frames otherwise.

    if (dispatch) {
      for (_i = 0; _i < _listeners.length; _i++) {
        // use _i and check _listeners.length instead of a variable because a listener could get removed during the loop, and if that happens to an element less than the current index, it'd throw things off in the loop.
        _listeners[_i](time, _delta, frame, v);
      }
    }
  };

  _self = {
    time: 0,
    frame: 0,
    tick: function tick() {
      _tick(true);
    },
    deltaRatio: function deltaRatio(fps) {
      return _delta / (1000 / (fps || 60));
    },
    wake: function wake() {
      if (_coreReady) {
        if (!_coreInitted && _windowExists()) {
          _win = _coreInitted = window;
          _doc = _win.document || {};
          _globals.gsap = gsap;
          (_win.gsapVersions || (_win.gsapVersions = [])).push(gsap.version);

          _install(_installScope || _win.GreenSockGlobals || !_win.gsap && _win || {});

          _raf = _win.requestAnimationFrame;
        }

        _id && _self.sleep();

        _req = _raf || function (f) {
          return setTimeout(f, _nextTime - _self.time * 1000 + 1 | 0);
        };

        _tickerActive = 1;

        _tick(2);
      }
    },
    sleep: function sleep() {
      (_raf ? _win.cancelAnimationFrame : clearTimeout)(_id);
      _tickerActive = 0;
      _req = _emptyFunc;
    },
    lagSmoothing: function lagSmoothing(threshold, adjustedLag) {
      _lagThreshold = threshold || 1 / _tinyNum; //zero should be interpreted as basically unlimited

      _adjustedLag = Math.min(adjustedLag, _lagThreshold, 0);
    },
    fps: function fps(_fps) {
      _gap = 1000 / (_fps || 240);
      _nextTime = _self.time * 1000 + _gap;
    },
    add: function add(callback, once, prioritize) {
      var func = once ? function (t, d, f, v) {
        callback(t, d, f, v);

        _self.remove(func);
      } : callback;

      _self.remove(callback);

      _listeners[prioritize ? "unshift" : "push"](func);

      _wake();

      return func;
    },
    remove: function remove(callback, i) {
      ~(i = _listeners.indexOf(callback)) && _listeners.splice(i, 1) && _i >= i && _i--;
    },
    _listeners: _listeners
  };
  return _self;
}(),
    _wake = function _wake() {
  return !_tickerActive && _ticker.wake();
},
    //also ensures the core classes are initialized.

/*
* -------------------------------------------------
* EASING
* -------------------------------------------------
*/
_easeMap = {},
    _customEaseExp = /^[\d.\-M][\d.\-,\s]/,
    _quotesExp = /["']/g,
    _parseObjectInString = function _parseObjectInString(value) {
  //takes a string like "{wiggles:10, type:anticipate})" and turns it into a real object. Notice it ends in ")" and includes the {} wrappers. This is because we only use this function for parsing ease configs and prioritized optimization rather than reusability.
  var obj = {},
      split = value.substr(1, value.length - 3).split(":"),
      key = split[0],
      i = 1,
      l = split.length,
      index,
      val,
      parsedVal;

  for (; i < l; i++) {
    val = split[i];
    index = i !== l - 1 ? val.lastIndexOf(",") : val.length;
    parsedVal = val.substr(0, index);
    obj[key] = isNaN(parsedVal) ? parsedVal.replace(_quotesExp, "").trim() : +parsedVal;
    key = val.substr(index + 1).trim();
  }

  return obj;
},
    _valueInParentheses = function _valueInParentheses(value) {
  var open = value.indexOf("(") + 1,
      close = value.indexOf(")"),
      nested = value.indexOf("(", open);
  return value.substring(open, ~nested && nested < close ? value.indexOf(")", close + 1) : close);
},
    _configEaseFromString = function _configEaseFromString(name) {
  //name can be a string like "elastic.out(1,0.5)", and pass in _easeMap as obj and it'll parse it out and call the actual function like _easeMap.Elastic.easeOut.config(1,0.5). It will also parse custom ease strings as long as CustomEase is loaded and registered (internally as _easeMap._CE).
  var split = (name + "").split("("),
      ease = _easeMap[split[0]];
  return ease && split.length > 1 && ease.config ? ease.config.apply(null, ~name.indexOf("{") ? [_parseObjectInString(split[1])] : _valueInParentheses(name).split(",").map(_numericIfPossible)) : _easeMap._CE && _customEaseExp.test(name) ? _easeMap._CE("", name) : ease;
},
    _invertEase = function _invertEase(ease) {
  return function (p) {
    return 1 - ease(1 - p);
  };
},
    // allow yoyoEase to be set in children and have those affected when the parent/ancestor timeline yoyos.
_propagateYoyoEase = function _propagateYoyoEase(timeline, isYoyo) {
  var child = timeline._first,
      ease;

  while (child) {
    if (child instanceof Timeline) {
      _propagateYoyoEase(child, isYoyo);
    } else if (child.vars.yoyoEase && (!child._yoyo || !child._repeat) && child._yoyo !== isYoyo) {
      if (child.timeline) {
        _propagateYoyoEase(child.timeline, isYoyo);
      } else {
        ease = child._ease;
        child._ease = child._yEase;
        child._yEase = ease;
        child._yoyo = isYoyo;
      }
    }

    child = child._next;
  }
},
    _parseEase = function _parseEase(ease, defaultEase) {
  return !ease ? defaultEase : (_isFunction(ease) ? ease : _easeMap[ease] || _configEaseFromString(ease)) || defaultEase;
},
    _insertEase = function _insertEase(names, easeIn, easeOut, easeInOut) {
  if (easeOut === void 0) {
    easeOut = function easeOut(p) {
      return 1 - easeIn(1 - p);
    };
  }

  if (easeInOut === void 0) {
    easeInOut = function easeInOut(p) {
      return p < .5 ? easeIn(p * 2) / 2 : 1 - easeIn((1 - p) * 2) / 2;
    };
  }

  var ease = {
    easeIn: easeIn,
    easeOut: easeOut,
    easeInOut: easeInOut
  },
      lowercaseName;

  _forEachName(names, function (name) {
    _easeMap[name] = _globals[name] = ease;
    _easeMap[lowercaseName = name.toLowerCase()] = easeOut;

    for (var p in ease) {
      _easeMap[lowercaseName + (p === "easeIn" ? ".in" : p === "easeOut" ? ".out" : ".inOut")] = _easeMap[name + "." + p] = ease[p];
    }
  });

  return ease;
},
    _easeInOutFromOut = function _easeInOutFromOut(easeOut) {
  return function (p) {
    return p < .5 ? (1 - easeOut(1 - p * 2)) / 2 : .5 + easeOut((p - .5) * 2) / 2;
  };
},
    _configElastic = function _configElastic(type, amplitude, period) {
  var p1 = amplitude >= 1 ? amplitude : 1,
      //note: if amplitude is < 1, we simply adjust the period for a more natural feel. Otherwise the math doesn't work right and the curve starts at 1.
  p2 = (period || (type ? .3 : .45)) / (amplitude < 1 ? amplitude : 1),
      p3 = p2 / _2PI * (Math.asin(1 / p1) || 0),
      easeOut = function easeOut(p) {
    return p === 1 ? 1 : p1 * Math.pow(2, -10 * p) * _sin((p - p3) * p2) + 1;
  },
      ease = type === "out" ? easeOut : type === "in" ? function (p) {
    return 1 - easeOut(1 - p);
  } : _easeInOutFromOut(easeOut);

  p2 = _2PI / p2; //precalculate to optimize

  ease.config = function (amplitude, period) {
    return _configElastic(type, amplitude, period);
  };

  return ease;
},
    _configBack = function _configBack(type, overshoot) {
  if (overshoot === void 0) {
    overshoot = 1.70158;
  }

  var easeOut = function easeOut(p) {
    return p ? --p * p * ((overshoot + 1) * p + overshoot) + 1 : 0;
  },
      ease = type === "out" ? easeOut : type === "in" ? function (p) {
    return 1 - easeOut(1 - p);
  } : _easeInOutFromOut(easeOut);

  ease.config = function (overshoot) {
    return _configBack(type, overshoot);
  };

  return ease;
}; // a cheaper (kb and cpu) but more mild way to get a parameterized weighted ease by feeding in a value between -1 (easeIn) and 1 (easeOut) where 0 is linear.
// _weightedEase = ratio => {
// 	let y = 0.5 + ratio / 2;
// 	return p => (2 * (1 - p) * p * y + p * p);
// },
// a stronger (but more expensive kb/cpu) parameterized weighted ease that lets you feed in a value between -1 (easeIn) and 1 (easeOut) where 0 is linear.
// _weightedEaseStrong = ratio => {
// 	ratio = .5 + ratio / 2;
// 	let o = 1 / 3 * (ratio < .5 ? ratio : 1 - ratio),
// 		b = ratio - o,
// 		c = ratio + o;
// 	return p => p === 1 ? p : 3 * b * (1 - p) * (1 - p) * p + 3 * c * (1 - p) * p * p + p * p * p;
// };


_forEachName("Linear,Quad,Cubic,Quart,Quint,Strong", function (name, i) {
  var power = i < 5 ? i + 1 : i;

  _insertEase(name + ",Power" + (power - 1), i ? function (p) {
    return Math.pow(p, power);
  } : function (p) {
    return p;
  }, function (p) {
    return 1 - Math.pow(1 - p, power);
  }, function (p) {
    return p < .5 ? Math.pow(p * 2, power) / 2 : 1 - Math.pow((1 - p) * 2, power) / 2;
  });
});

_easeMap.Linear.easeNone = _easeMap.none = _easeMap.Linear.easeIn;

_insertEase("Elastic", _configElastic("in"), _configElastic("out"), _configElastic());

(function (n, c) {
  var n1 = 1 / c,
      n2 = 2 * n1,
      n3 = 2.5 * n1,
      easeOut = function easeOut(p) {
    return p < n1 ? n * p * p : p < n2 ? n * Math.pow(p - 1.5 / c, 2) + .75 : p < n3 ? n * (p -= 2.25 / c) * p + .9375 : n * Math.pow(p - 2.625 / c, 2) + .984375;
  };

  _insertEase("Bounce", function (p) {
    return 1 - easeOut(1 - p);
  }, easeOut);
})(7.5625, 2.75);

_insertEase("Expo", function (p) {
  return p ? Math.pow(2, 10 * (p - 1)) : 0;
});

_insertEase("Circ", function (p) {
  return -(_sqrt(1 - p * p) - 1);
});

_insertEase("Sine", function (p) {
  return p === 1 ? 1 : -_cos(p * _HALF_PI) + 1;
});

_insertEase("Back", _configBack("in"), _configBack("out"), _configBack());

_easeMap.SteppedEase = _easeMap.steps = _globals.SteppedEase = {
  config: function config(steps, immediateStart) {
    if (steps === void 0) {
      steps = 1;
    }

    var p1 = 1 / steps,
        p2 = steps + (immediateStart ? 0 : 1),
        p3 = immediateStart ? 1 : 0,
        max = 1 - _tinyNum;
    return function (p) {
      return ((p2 * _clamp(0, max, p) | 0) + p3) * p1;
    };
  }
};
_defaults.ease = _easeMap["quad.out"];

_forEachName("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function (name) {
  return _callbackNames += name + "," + name + "Params,";
});
/*
 * --------------------------------------------------------------------------------------
 * CACHE
 * --------------------------------------------------------------------------------------
 */


var GSCache = function GSCache(target, harness) {
  this.id = _gsID++;
  target._gsap = this;
  this.target = target;
  this.harness = harness;
  this.get = harness ? harness.get : _getProperty;
  this.set = harness ? harness.getSetter : _getSetter;
};
/*
 * --------------------------------------------------------------------------------------
 * ANIMATION
 * --------------------------------------------------------------------------------------
 */

var Animation = /*#__PURE__*/function () {
  function Animation(vars) {
    this.vars = vars;
    this._delay = +vars.delay || 0;

    if (this._repeat = vars.repeat === Infinity ? -2 : vars.repeat || 0) {
      // TODO: repeat: Infinity on a timeline's children must flag that timeline internally and affect its totalDuration, otherwise it'll stop in the negative direction when reaching the start.
      this._rDelay = vars.repeatDelay || 0;
      this._yoyo = !!vars.yoyo || !!vars.yoyoEase;
    }

    this._ts = 1;

    _setDuration(this, +vars.duration, 1, 1);

    this.data = vars.data;
    _tickerActive || _ticker.wake();
  }

  var _proto = Animation.prototype;

  _proto.delay = function delay(value) {
    if (value || value === 0) {
      this.parent && this.parent.smoothChildTiming && this.startTime(this._start + value - this._delay);
      this._delay = value;
      return this;
    }

    return this._delay;
  };

  _proto.duration = function duration(value) {
    return arguments.length ? this.totalDuration(this._repeat > 0 ? value + (value + this._rDelay) * this._repeat : value) : this.totalDuration() && this._dur;
  };

  _proto.totalDuration = function totalDuration(value) {
    if (!arguments.length) {
      return this._tDur;
    }

    this._dirty = 0;
    return _setDuration(this, this._repeat < 0 ? value : (value - this._repeat * this._rDelay) / (this._repeat + 1));
  };

  _proto.totalTime = function totalTime(_totalTime, suppressEvents) {
    _wake();

    if (!arguments.length) {
      return this._tTime;
    }

    var parent = this._dp;

    if (parent && parent.smoothChildTiming && this._ts) {
      _alignPlayhead(this, _totalTime);

      !parent._dp || parent.parent || _postAddChecks(parent, this); // edge case: if this is a child of a timeline that already completed, for example, we must re-activate the parent.
      //in case any of the ancestor timelines had completed but should now be enabled, we should reset their totalTime() which will also ensure that they're lined up properly and enabled. Skip for animations that are on the root (wasteful). Example: a TimelineLite.exportRoot() is performed when there's a paused tween on the root, the export will not complete until that tween is unpaused, but imagine a child gets restarted later, after all [unpaused] tweens have completed. The start of that child would get pushed out, but one of the ancestors may have completed.

      while (parent && parent.parent) {
        if (parent.parent._time !== parent._start + (parent._ts >= 0 ? parent._tTime / parent._ts : (parent.totalDuration() - parent._tTime) / -parent._ts)) {
          parent.totalTime(parent._tTime, true);
        }

        parent = parent.parent;
      }

      if (!this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && _totalTime < this._tDur || this._ts < 0 && _totalTime > 0 || !this._tDur && !_totalTime)) {
        //if the animation doesn't have a parent, put it back into its last parent (recorded as _dp for exactly cases like this). Limit to parents with autoRemoveChildren (like globalTimeline) so that if the user manually removes an animation from a timeline and then alters its playhead, it doesn't get added back in.
        _addToTimeline(this._dp, this, this._start - this._delay);
      }
    }

    if (this._tTime !== _totalTime || !this._dur && !suppressEvents || this._initted && Math.abs(this._zTime) === _tinyNum || !_totalTime && !this._initted && (this.add || this._ptLookup)) {
      // check for _ptLookup on a Tween instance to ensure it has actually finished being instantiated, otherwise if this.reverse() gets called in the Animation constructor, it could trigger a render() here even though the _targets weren't populated, thus when _init() is called there won't be any PropTweens (it'll act like the tween is non-functional)
      this._ts || (this._pTime = _totalTime); // otherwise, if an animation is paused, then the playhead is moved back to zero, then resumed, it'd revert back to the original time at the pause
      //if (!this._lock) { // avoid endless recursion (not sure we need this yet or if it's worth the performance hit)
      //   this._lock = 1;

      _lazySafeRender(this, _totalTime, suppressEvents); //   this._lock = 0;
      //}

    }

    return this;
  };

  _proto.time = function time(value, suppressEvents) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), value + _elapsedCycleDuration(this)) % (this._dur + this._rDelay) || (value ? this._dur : 0), suppressEvents) : this._time; // note: if the modulus results in 0, the playhead could be exactly at the end or the beginning, and we always defer to the END with a non-zero value, otherwise if you set the time() to the very end (duration()), it would render at the START!
  };

  _proto.totalProgress = function totalProgress(value, suppressEvents) {
    return arguments.length ? this.totalTime(this.totalDuration() * value, suppressEvents) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio;
  };

  _proto.progress = function progress(value, suppressEvents) {
    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - value : value) + _elapsedCycleDuration(this), suppressEvents) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio;
  };

  _proto.iteration = function iteration(value, suppressEvents) {
    var cycleDuration = this.duration() + this._rDelay;

    return arguments.length ? this.totalTime(this._time + (value - 1) * cycleDuration, suppressEvents) : this._repeat ? _animationCycle(this._tTime, cycleDuration) + 1 : 1;
  } // potential future addition:
  // isPlayingBackwards() {
  // 	let animation = this,
  // 		orientation = 1; // 1 = forward, -1 = backward
  // 	while (animation) {
  // 		orientation *= animation.reversed() || (animation.repeat() && !(animation.iteration() & 1)) ? -1 : 1;
  // 		animation = animation.parent;
  // 	}
  // 	return orientation < 0;
  // }
  ;

  _proto.timeScale = function timeScale(value) {
    if (!arguments.length) {
      return this._rts === -_tinyNum ? 0 : this._rts; // recorded timeScale. Special case: if someone calls reverse() on an animation with timeScale of 0, we assign it -_tinyNum to remember it's reversed.
    }

    if (this._rts === value) {
      return this;
    }

    var tTime = this.parent && this._ts ? _parentToChildTotalTime(this.parent._time, this) : this._tTime; // make sure to do the parentToChildTotalTime() BEFORE setting the new _ts because the old one must be used in that calculation.
    // future addition? Up side: fast and minimal file size. Down side: only works on this animation; if a timeline is reversed, for example, its childrens' onReverse wouldn't get called.
    //(+value < 0 && this._rts >= 0) && _callback(this, "onReverse", true);
    // prioritize rendering where the parent's playhead lines up instead of this._tTime because there could be a tween that's animating another tween's timeScale in the same rendering loop (same parent), thus if the timeScale tween renders first, it would alter _start BEFORE _tTime was set on that tick (in the rendering loop), effectively freezing it until the timeScale tween finishes.

    this._rts = +value || 0;
    this._ts = this._ps || value === -_tinyNum ? 0 : this._rts; // _ts is the functional timeScale which would be 0 if the animation is paused.

    this.totalTime(_clamp(-this._delay, this._tDur, tTime), true);

    _setEnd(this); // if parent.smoothChildTiming was false, the end time didn't get updated in the _alignPlayhead() method, so do it here.


    return _recacheAncestors(this);
  };

  _proto.paused = function paused(value) {
    if (!arguments.length) {
      return this._ps;
    }

    if (this._ps !== value) {
      this._ps = value;

      if (value) {
        this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()); // if the pause occurs during the delay phase, make sure that's factored in when resuming.

        this._ts = this._act = 0; // _ts is the functional timeScale, so a paused tween would effectively have a timeScale of 0. We record the "real" timeScale as _rts (recorded time scale)
      } else {
        _wake();

        this._ts = this._rts; //only defer to _pTime (pauseTime) if tTime is zero. Remember, someone could pause() an animation, then scrub the playhead and resume(). If the parent doesn't have smoothChildTiming, we render at the rawTime() because the startTime won't get updated.

        this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== _tinyNum && (this._tTime -= _tinyNum)); // edge case: animation.progress(1).pause().play() wouldn't render again because the playhead is already at the end, but the call to totalTime() below will add it back to its parent...and not remove it again (since removing only happens upon rendering at a new time). Offsetting the _tTime slightly is done simply to cause the final render in totalTime() that'll pop it off its timeline (if autoRemoveChildren is true, of course). Check to make sure _zTime isn't -_tinyNum to avoid an edge case where the playhead is pushed to the end but INSIDE a tween/callback, the timeline itself is paused thus halting rendering and leaving a few unrendered. When resuming, it wouldn't render those otherwise.
      }
    }

    return this;
  };

  _proto.startTime = function startTime(value) {
    if (arguments.length) {
      this._start = value;
      var parent = this.parent || this._dp;
      parent && (parent._sort || !this.parent) && _addToTimeline(parent, this, value - this._delay);
      return this;
    }

    return this._start;
  };

  _proto.endTime = function endTime(includeRepeats) {
    return this._start + (_isNotFalse(includeRepeats) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
  };

  _proto.rawTime = function rawTime(wrapRepeats) {
    var parent = this.parent || this._dp; // _dp = detached parent

    return !parent ? this._tTime : wrapRepeats && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : !this._ts ? this._tTime : _parentToChildTotalTime(parent.rawTime(wrapRepeats), this);
  };

  _proto.globalTime = function globalTime(rawTime) {
    var animation = this,
        time = arguments.length ? rawTime : animation.rawTime();

    while (animation) {
      time = animation._start + time / (animation._ts || 1);
      animation = animation._dp;
    }

    return time;
  };

  _proto.repeat = function repeat(value) {
    if (arguments.length) {
      this._repeat = value === Infinity ? -2 : value;
      return _onUpdateTotalDuration(this);
    }

    return this._repeat === -2 ? Infinity : this._repeat;
  };

  _proto.repeatDelay = function repeatDelay(value) {
    if (arguments.length) {
      var time = this._time;
      this._rDelay = value;

      _onUpdateTotalDuration(this);

      return time ? this.time(time) : this;
    }

    return this._rDelay;
  };

  _proto.yoyo = function yoyo(value) {
    if (arguments.length) {
      this._yoyo = value;
      return this;
    }

    return this._yoyo;
  };

  _proto.seek = function seek(position, suppressEvents) {
    return this.totalTime(_parsePosition(this, position), _isNotFalse(suppressEvents));
  };

  _proto.restart = function restart(includeDelay, suppressEvents) {
    return this.play().totalTime(includeDelay ? -this._delay : 0, _isNotFalse(suppressEvents));
  };

  _proto.play = function play(from, suppressEvents) {
    from != null && this.seek(from, suppressEvents);
    return this.reversed(false).paused(false);
  };

  _proto.reverse = function reverse(from, suppressEvents) {
    from != null && this.seek(from || this.totalDuration(), suppressEvents);
    return this.reversed(true).paused(false);
  };

  _proto.pause = function pause(atTime, suppressEvents) {
    atTime != null && this.seek(atTime, suppressEvents);
    return this.paused(true);
  };

  _proto.resume = function resume() {
    return this.paused(false);
  };

  _proto.reversed = function reversed(value) {
    if (arguments.length) {
      !!value !== this.reversed() && this.timeScale(-this._rts || (value ? -_tinyNum : 0)); // in case timeScale is zero, reversing would have no effect so we use _tinyNum.

      return this;
    }

    return this._rts < 0;
  };

  _proto.invalidate = function invalidate() {
    this._initted = this._act = 0;
    this._zTime = -_tinyNum;
    return this;
  };

  _proto.isActive = function isActive() {
    var parent = this.parent || this._dp,
        start = this._start,
        rawTime;
    return !!(!parent || this._ts && this._initted && parent.isActive() && (rawTime = parent.rawTime(true)) >= start && rawTime < this.endTime(true) - _tinyNum);
  };

  _proto.eventCallback = function eventCallback(type, callback, params) {
    var vars = this.vars;

    if (arguments.length > 1) {
      if (!callback) {
        delete vars[type];
      } else {
        vars[type] = callback;
        params && (vars[type + "Params"] = params);
        type === "onUpdate" && (this._onUpdate = callback);
      }

      return this;
    }

    return vars[type];
  };

  _proto.then = function then(onFulfilled) {
    var self = this;
    return new Promise(function (resolve) {
      var f = _isFunction(onFulfilled) ? onFulfilled : _passThrough,
          _resolve = function _resolve() {
        var _then = self.then;
        self.then = null; // temporarily null the then() method to avoid an infinite loop (see https://github.com/greensock/GSAP/issues/322)

        _isFunction(f) && (f = f(self)) && (f.then || f === self) && (self.then = _then);
        resolve(f);
        self.then = _then;
      };

      if (self._initted && self.totalProgress() === 1 && self._ts >= 0 || !self._tTime && self._ts < 0) {
        _resolve();
      } else {
        self._prom = _resolve;
      }
    });
  };

  _proto.kill = function kill() {
    _interrupt(this);
  };

  return Animation;
}();

_setDefaults(Animation.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: false,
  parent: null,
  _initted: false,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -_tinyNum,
  _prom: 0,
  _ps: false,
  _rts: 1
});
/*
 * -------------------------------------------------
 * TIMELINE
 * -------------------------------------------------
 */


var Timeline = /*#__PURE__*/function (_Animation) {
  _inheritsLoose(Timeline, _Animation);

  function Timeline(vars, position) {
    var _this;

    if (vars === void 0) {
      vars = {};
    }

    _this = _Animation.call(this, vars) || this;
    _this.labels = {};
    _this.smoothChildTiming = !!vars.smoothChildTiming;
    _this.autoRemoveChildren = !!vars.autoRemoveChildren;
    _this._sort = _isNotFalse(vars.sortChildren);
    _globalTimeline && _addToTimeline(vars.parent || _globalTimeline, _assertThisInitialized(_this), position);
    vars.reversed && _this.reverse();
    vars.paused && _this.paused(true);
    vars.scrollTrigger && _scrollTrigger(_assertThisInitialized(_this), vars.scrollTrigger);
    return _this;
  }

  var _proto2 = Timeline.prototype;

  _proto2.to = function to(targets, vars, position) {
    _createTweenType(0, arguments, this);

    return this;
  };

  _proto2.from = function from(targets, vars, position) {
    _createTweenType(1, arguments, this);

    return this;
  };

  _proto2.fromTo = function fromTo(targets, fromVars, toVars, position) {
    _createTweenType(2, arguments, this);

    return this;
  };

  _proto2.set = function set(targets, vars, position) {
    vars.duration = 0;
    vars.parent = this;
    _inheritDefaults(vars).repeatDelay || (vars.repeat = 0);
    vars.immediateRender = !!vars.immediateRender;
    new Tween(targets, vars, _parsePosition(this, position), 1);
    return this;
  };

  _proto2.call = function call(callback, params, position) {
    return _addToTimeline(this, Tween.delayedCall(0, callback, params), position);
  } //ONLY for backward compatibility! Maybe delete?
  ;

  _proto2.staggerTo = function staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
    vars.duration = duration;
    vars.stagger = vars.stagger || stagger;
    vars.onComplete = onCompleteAll;
    vars.onCompleteParams = onCompleteAllParams;
    vars.parent = this;
    new Tween(targets, vars, _parsePosition(this, position));
    return this;
  };

  _proto2.staggerFrom = function staggerFrom(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
    vars.runBackwards = 1;
    _inheritDefaults(vars).immediateRender = _isNotFalse(vars.immediateRender);
    return this.staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams);
  };

  _proto2.staggerFromTo = function staggerFromTo(targets, duration, fromVars, toVars, stagger, position, onCompleteAll, onCompleteAllParams) {
    toVars.startAt = fromVars;
    _inheritDefaults(toVars).immediateRender = _isNotFalse(toVars.immediateRender);
    return this.staggerTo(targets, duration, toVars, stagger, position, onCompleteAll, onCompleteAllParams);
  };

  _proto2.render = function render(totalTime, suppressEvents, force) {
    var prevTime = this._time,
        tDur = this._dirty ? this.totalDuration() : this._tDur,
        dur = this._dur,
        tTime = totalTime <= 0 ? 0 : _roundPrecise(totalTime),
        // if a paused timeline is resumed (or its _start is updated for another reason...which rounds it), that could result in the playhead shifting a **tiny** amount and a zero-duration child at that spot may get rendered at a different ratio, like its totalTime in render() may be 1e-17 instead of 0, for example.
    crossingStart = this._zTime < 0 !== totalTime < 0 && (this._initted || !dur),
        time,
        child,
        next,
        iteration,
        cycleDuration,
        prevPaused,
        pauseTween,
        timeScale,
        prevStart,
        prevIteration,
        yoyo,
        isYoyo;
    this !== _globalTimeline && tTime > tDur && totalTime >= 0 && (tTime = tDur);

    if (tTime !== this._tTime || force || crossingStart) {
      if (prevTime !== this._time && dur) {
        //if totalDuration() finds a child with a negative startTime and smoothChildTiming is true, things get shifted around internally so we need to adjust the time accordingly. For example, if a tween starts at -30 we must shift EVERYTHING forward 30 seconds and move this timeline's startTime backward by 30 seconds so that things align with the playhead (no jump).
        tTime += this._time - prevTime;
        totalTime += this._time - prevTime;
      }

      time = tTime;
      prevStart = this._start;
      timeScale = this._ts;
      prevPaused = !timeScale;

      if (crossingStart) {
        dur || (prevTime = this._zTime); //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration timeline, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect.

        (totalTime || !suppressEvents) && (this._zTime = totalTime);
      }

      if (this._repeat) {
        //adjust the time for repeats and yoyos
        yoyo = this._yoyo;
        cycleDuration = dur + this._rDelay;

        if (this._repeat < -1 && totalTime < 0) {
          return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
        }

        time = _roundPrecise(tTime % cycleDuration); //round to avoid floating point errors. (4 % 0.8 should be 0 but some browsers report it as 0.79999999!)

        if (tTime === tDur) {
          // the tDur === tTime is for edge cases where there's a lengthy decimal on the duration and it may reach the very end but the time is rendered as not-quite-there (remember, tDur is rounded to 4 decimals whereas dur isn't)
          iteration = this._repeat;
          time = dur;
        } else {
          iteration = ~~(tTime / cycleDuration);

          if (iteration && iteration === tTime / cycleDuration) {
            time = dur;
            iteration--;
          }

          time > dur && (time = dur);
        }

        prevIteration = _animationCycle(this._tTime, cycleDuration);
        !prevTime && this._tTime && prevIteration !== iteration && (prevIteration = iteration); // edge case - if someone does addPause() at the very beginning of a repeating timeline, that pause is technically at the same spot as the end which causes this._time to get set to 0 when the totalTime would normally place the playhead at the end. See https://greensock.com/forums/topic/23823-closing-nav-animation-not-working-on-ie-and-iphone-6-maybe-other-older-browser/?tab=comments#comment-113005

        if (yoyo && iteration & 1) {
          time = dur - time;
          isYoyo = 1;
        }
        /*
        make sure children at the end/beginning of the timeline are rendered properly. If, for example,
        a 3-second long timeline rendered at 2.9 seconds previously, and now renders at 3.2 seconds (which
        would get translated to 2.8 seconds if the timeline yoyos or 0.2 seconds if it just repeats), there
        could be a callback or a short tween that's at 2.95 or 3 seconds in which wouldn't render. So
        we need to push the timeline to the end (and/or beginning depending on its yoyo value). Also we must
        ensure that zero-duration tweens at the very beginning or end of the Timeline work.
        */


        if (iteration !== prevIteration && !this._lock) {
          var rewinding = yoyo && prevIteration & 1,
              doesWrap = rewinding === (yoyo && iteration & 1);
          iteration < prevIteration && (rewinding = !rewinding);
          prevTime = rewinding ? 0 : dur;
          this._lock = 1;
          this.render(prevTime || (isYoyo ? 0 : _roundPrecise(iteration * cycleDuration)), suppressEvents, !dur)._lock = 0;
          this._tTime = tTime; // if a user gets the iteration() inside the onRepeat, for example, it should be accurate.

          !suppressEvents && this.parent && _callback(this, "onRepeat");
          this.vars.repeatRefresh && !isYoyo && (this.invalidate()._lock = 1);

          if (prevTime && prevTime !== this._time || prevPaused !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) {
            // if prevTime is 0 and we render at the very end, _time will be the end, thus won't match. So in this edge case, prevTime won't match _time but that's okay. If it gets killed in the onRepeat, eject as well.
            return this;
          }

          dur = this._dur; // in case the duration changed in the onRepeat

          tDur = this._tDur;

          if (doesWrap) {
            this._lock = 2;
            prevTime = rewinding ? dur : -0.0001;
            this.render(prevTime, true);
            this.vars.repeatRefresh && !isYoyo && this.invalidate();
          }

          this._lock = 0;

          if (!this._ts && !prevPaused) {
            return this;
          } //in order for yoyoEase to work properly when there's a stagger, we must swap out the ease in each sub-tween.


          _propagateYoyoEase(this, isYoyo);
        }
      }

      if (this._hasPause && !this._forcing && this._lock < 2) {
        pauseTween = _findNextPauseTween(this, _roundPrecise(prevTime), _roundPrecise(time));

        if (pauseTween) {
          tTime -= time - (time = pauseTween._start);
        }
      }

      this._tTime = tTime;
      this._time = time;
      this._act = !timeScale; //as long as it's not paused, force it to be active so that if the user renders independent of the parent timeline, it'll be forced to re-render on the next tick.

      if (!this._initted) {
        this._onUpdate = this.vars.onUpdate;
        this._initted = 1;
        this._zTime = totalTime;
        prevTime = 0; // upon init, the playhead should always go forward; someone could invalidate() a completed timeline and then if they restart(), that would make child tweens render in reverse order which could lock in the wrong starting values if they build on each other, like tl.to(obj, {x: 100}).to(obj, {x: 0}).
      }

      if (!prevTime && time && !suppressEvents) {
        _callback(this, "onStart");

        if (this._tTime !== tTime) {
          // in case the onStart triggered a render at a different spot, eject. Like if someone did animation.pause(0.5) or something inside the onStart.
          return this;
        }
      }

      if (time >= prevTime && totalTime >= 0) {
        child = this._first;

        while (child) {
          next = child._next;

          if ((child._act || time >= child._start) && child._ts && pauseTween !== child) {
            if (child.parent !== this) {
              // an extreme edge case - the child's render could do something like kill() the "next" one in the linked list, or reparent it. In that case we must re-initiate the whole render to be safe.
              return this.render(totalTime, suppressEvents, force);
            }

            child.render(child._ts > 0 ? (time - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (time - child._start) * child._ts, suppressEvents, force);

            if (time !== this._time || !this._ts && !prevPaused) {
              //in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
              pauseTween = 0;
              next && (tTime += this._zTime = -_tinyNum); // it didn't finish rendering, so flag zTime as negative so that so that the next time render() is called it'll be forced (to render any remaining children)

              break;
            }
          }

          child = next;
        }
      } else {
        child = this._last;
        var adjustedTime = totalTime < 0 ? totalTime : time; //when the playhead goes backward beyond the start of this timeline, we must pass that information down to the child animations so that zero-duration tweens know whether to render their starting or ending values.

        while (child) {
          next = child._prev;

          if ((child._act || adjustedTime <= child._end) && child._ts && pauseTween !== child) {
            if (child.parent !== this) {
              // an extreme edge case - the child's render could do something like kill() the "next" one in the linked list, or reparent it. In that case we must re-initiate the whole render to be safe.
              return this.render(totalTime, suppressEvents, force);
            }

            child.render(child._ts > 0 ? (adjustedTime - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (adjustedTime - child._start) * child._ts, suppressEvents, force);

            if (time !== this._time || !this._ts && !prevPaused) {
              //in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
              pauseTween = 0;
              next && (tTime += this._zTime = adjustedTime ? -_tinyNum : _tinyNum); // it didn't finish rendering, so adjust zTime so that so that the next time render() is called it'll be forced (to render any remaining children)

              break;
            }
          }

          child = next;
        }
      }

      if (pauseTween && !suppressEvents) {
        this.pause();
        pauseTween.render(time >= prevTime ? 0 : -_tinyNum)._zTime = time >= prevTime ? 1 : -1;

        if (this._ts) {
          //the callback resumed playback! So since we may have held back the playhead due to where the pause is positioned, go ahead and jump to where it's SUPPOSED to be (if no pause happened).
          this._start = prevStart; //if the pause was at an earlier time and the user resumed in the callback, it could reposition the timeline (changing its startTime), throwing things off slightly, so we make sure the _start doesn't shift.

          _setEnd(this);

          return this.render(totalTime, suppressEvents, force);
        }
      }

      this._onUpdate && !suppressEvents && _callback(this, "onUpdate", true);
      if (tTime === tDur && this._tTime >= this.totalDuration() || !tTime && prevTime) if (prevStart === this._start || Math.abs(timeScale) !== Math.abs(this._ts)) if (!this._lock) {
        // remember, a child's callback may alter this timeline's playhead or timeScale which is why we need to add some of these checks.
        (totalTime || !dur) && (tTime === tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1); // don't remove if the timeline is reversed and the playhead isn't at 0, otherwise tl.progress(1).reverse() won't work. Only remove if the playhead is at the end and timeScale is positive, or if the playhead is at 0 and the timeScale is negative.

        if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime || !tDur)) {
          _callback(this, tTime === tDur && totalTime >= 0 ? "onComplete" : "onReverseComplete", true);

          this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
        }
      }
    }

    return this;
  };

  _proto2.add = function add(child, position) {
    var _this2 = this;

    _isNumber(position) || (position = _parsePosition(this, position, child));

    if (!(child instanceof Animation)) {
      if (_isArray(child)) {
        child.forEach(function (obj) {
          return _this2.add(obj, position);
        });
        return this;
      }

      if (_isString(child)) {
        return this.addLabel(child, position);
      }

      if (_isFunction(child)) {
        child = Tween.delayedCall(0, child);
      } else {
        return this;
      }
    }

    return this !== child ? _addToTimeline(this, child, position) : this; //don't allow a timeline to be added to itself as a child!
  };

  _proto2.getChildren = function getChildren(nested, tweens, timelines, ignoreBeforeTime) {
    if (nested === void 0) {
      nested = true;
    }

    if (tweens === void 0) {
      tweens = true;
    }

    if (timelines === void 0) {
      timelines = true;
    }

    if (ignoreBeforeTime === void 0) {
      ignoreBeforeTime = -_bigNum;
    }

    var a = [],
        child = this._first;

    while (child) {
      if (child._start >= ignoreBeforeTime) {
        if (child instanceof Tween) {
          tweens && a.push(child);
        } else {
          timelines && a.push(child);
          nested && a.push.apply(a, child.getChildren(true, tweens, timelines));
        }
      }

      child = child._next;
    }

    return a;
  };

  _proto2.getById = function getById(id) {
    var animations = this.getChildren(1, 1, 1),
        i = animations.length;

    while (i--) {
      if (animations[i].vars.id === id) {
        return animations[i];
      }
    }
  };

  _proto2.remove = function remove(child) {
    if (_isString(child)) {
      return this.removeLabel(child);
    }

    if (_isFunction(child)) {
      return this.killTweensOf(child);
    }

    _removeLinkedListItem(this, child);

    if (child === this._recent) {
      this._recent = this._last;
    }

    return _uncache(this);
  };

  _proto2.totalTime = function totalTime(_totalTime2, suppressEvents) {
    if (!arguments.length) {
      return this._tTime;
    }

    this._forcing = 1;

    if (!this._dp && this._ts) {
      //special case for the global timeline (or any other that has no parent or detached parent).
      this._start = _roundPrecise(_ticker.time - (this._ts > 0 ? _totalTime2 / this._ts : (this.totalDuration() - _totalTime2) / -this._ts));
    }

    _Animation.prototype.totalTime.call(this, _totalTime2, suppressEvents);

    this._forcing = 0;
    return this;
  };

  _proto2.addLabel = function addLabel(label, position) {
    this.labels[label] = _parsePosition(this, position);
    return this;
  };

  _proto2.removeLabel = function removeLabel(label) {
    delete this.labels[label];
    return this;
  };

  _proto2.addPause = function addPause(position, callback, params) {
    var t = Tween.delayedCall(0, callback || _emptyFunc, params);
    t.data = "isPause";
    this._hasPause = 1;
    return _addToTimeline(this, t, _parsePosition(this, position));
  };

  _proto2.removePause = function removePause(position) {
    var child = this._first;
    position = _parsePosition(this, position);

    while (child) {
      if (child._start === position && child.data === "isPause") {
        _removeFromParent(child);
      }

      child = child._next;
    }
  };

  _proto2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
    var tweens = this.getTweensOf(targets, onlyActive),
        i = tweens.length;

    while (i--) {
      _overwritingTween !== tweens[i] && tweens[i].kill(targets, props);
    }

    return this;
  };

  _proto2.getTweensOf = function getTweensOf(targets, onlyActive) {
    var a = [],
        parsedTargets = toArray(targets),
        child = this._first,
        isGlobalTime = _isNumber(onlyActive),
        // a number is interpreted as a global time. If the animation spans
    children;

    while (child) {
      if (child instanceof Tween) {
        if (_arrayContainsAny(child._targets, parsedTargets) && (isGlobalTime ? (!_overwritingTween || child._initted && child._ts) && child.globalTime(0) <= onlyActive && child.globalTime(child.totalDuration()) > onlyActive : !onlyActive || child.isActive())) {
          // note: if this is for overwriting, it should only be for tweens that aren't paused and are initted.
          a.push(child);
        }
      } else if ((children = child.getTweensOf(parsedTargets, onlyActive)).length) {
        a.push.apply(a, children);
      }

      child = child._next;
    }

    return a;
  } // potential future feature - targets() on timelines
  // targets() {
  // 	let result = [];
  // 	this.getChildren(true, true, false).forEach(t => result.push(...t.targets()));
  // 	return result.filter((v, i) => result.indexOf(v) === i);
  // }
  ;

  _proto2.tweenTo = function tweenTo(position, vars) {
    vars = vars || {};

    var tl = this,
        endTime = _parsePosition(tl, position),
        _vars = vars,
        startAt = _vars.startAt,
        _onStart = _vars.onStart,
        onStartParams = _vars.onStartParams,
        immediateRender = _vars.immediateRender,
        initted,
        tween = Tween.to(tl, _setDefaults({
      ease: vars.ease || "none",
      lazy: false,
      immediateRender: false,
      time: endTime,
      overwrite: "auto",
      duration: vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale()) || _tinyNum,
      onStart: function onStart() {
        tl.pause();

        if (!initted) {
          var duration = vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale());
          tween._dur !== duration && _setDuration(tween, duration, 0, 1).render(tween._time, true, true);
          initted = 1;
        }

        _onStart && _onStart.apply(tween, onStartParams || []); //in case the user had an onStart in the vars - we don't want to overwrite it.
      }
    }, vars));

    return immediateRender ? tween.render(0) : tween;
  };

  _proto2.tweenFromTo = function tweenFromTo(fromPosition, toPosition, vars) {
    return this.tweenTo(toPosition, _setDefaults({
      startAt: {
        time: _parsePosition(this, fromPosition)
      }
    }, vars));
  };

  _proto2.recent = function recent() {
    return this._recent;
  };

  _proto2.nextLabel = function nextLabel(afterTime) {
    if (afterTime === void 0) {
      afterTime = this._time;
    }

    return _getLabelInDirection(this, _parsePosition(this, afterTime));
  };

  _proto2.previousLabel = function previousLabel(beforeTime) {
    if (beforeTime === void 0) {
      beforeTime = this._time;
    }

    return _getLabelInDirection(this, _parsePosition(this, beforeTime), 1);
  };

  _proto2.currentLabel = function currentLabel(value) {
    return arguments.length ? this.seek(value, true) : this.previousLabel(this._time + _tinyNum);
  };

  _proto2.shiftChildren = function shiftChildren(amount, adjustLabels, ignoreBeforeTime) {
    if (ignoreBeforeTime === void 0) {
      ignoreBeforeTime = 0;
    }

    var child = this._first,
        labels = this.labels,
        p;

    while (child) {
      if (child._start >= ignoreBeforeTime) {
        child._start += amount;
        child._end += amount;
      }

      child = child._next;
    }

    if (adjustLabels) {
      for (p in labels) {
        if (labels[p] >= ignoreBeforeTime) {
          labels[p] += amount;
        }
      }
    }

    return _uncache(this);
  };

  _proto2.invalidate = function invalidate() {
    var child = this._first;
    this._lock = 0;

    while (child) {
      child.invalidate();
      child = child._next;
    }

    return _Animation.prototype.invalidate.call(this);
  };

  _proto2.clear = function clear(includeLabels) {
    if (includeLabels === void 0) {
      includeLabels = true;
    }

    var child = this._first,
        next;

    while (child) {
      next = child._next;
      this.remove(child);
      child = next;
    }

    this._dp && (this._time = this._tTime = this._pTime = 0);
    includeLabels && (this.labels = {});
    return _uncache(this);
  };

  _proto2.totalDuration = function totalDuration(value) {
    var max = 0,
        self = this,
        child = self._last,
        prevStart = _bigNum,
        prev,
        start,
        parent;

    if (arguments.length) {
      return self.timeScale((self._repeat < 0 ? self.duration() : self.totalDuration()) / (self.reversed() ? -value : value));
    }

    if (self._dirty) {
      parent = self.parent;

      while (child) {
        prev = child._prev; //record it here in case the tween changes position in the sequence...

        child._dirty && child.totalDuration(); //could change the tween._startTime, so make sure the animation's cache is clean before analyzing it.

        start = child._start;

        if (start > prevStart && self._sort && child._ts && !self._lock) {
          //in case one of the tweens shifted out of order, it needs to be re-inserted into the correct position in the sequence
          self._lock = 1; //prevent endless recursive calls - there are methods that get triggered that check duration/totalDuration when we add().

          _addToTimeline(self, child, start - child._delay, 1)._lock = 0;
        } else {
          prevStart = start;
        }

        if (start < 0 && child._ts) {
          //children aren't allowed to have negative startTimes unless smoothChildTiming is true, so adjust here if one is found.
          max -= start;

          if (!parent && !self._dp || parent && parent.smoothChildTiming) {
            self._start += start / self._ts;
            self._time -= start;
            self._tTime -= start;
          }

          self.shiftChildren(-start, false, -1e999);
          prevStart = 0;
        }

        child._end > max && child._ts && (max = child._end);
        child = prev;
      }

      _setDuration(self, self === _globalTimeline && self._time > max ? self._time : max, 1, 1);

      self._dirty = 0;
    }

    return self._tDur;
  };

  Timeline.updateRoot = function updateRoot(time) {
    if (_globalTimeline._ts) {
      _lazySafeRender(_globalTimeline, _parentToChildTotalTime(time, _globalTimeline));

      _lastRenderedFrame = _ticker.frame;
    }

    if (_ticker.frame >= _nextGCFrame) {
      _nextGCFrame += _config.autoSleep || 120;
      var child = _globalTimeline._first;
      if (!child || !child._ts) if (_config.autoSleep && _ticker._listeners.length < 2) {
        while (child && !child._ts) {
          child = child._next;
        }

        child || _ticker.sleep();
      }
    }
  };

  return Timeline;
}(Animation);

_setDefaults(Timeline.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
});

var _addComplexStringPropTween = function _addComplexStringPropTween(target, prop, start, end, setter, stringFilter, funcParam) {
  //note: we call _addComplexStringPropTween.call(tweenInstance...) to ensure that it's scoped properly. We may call it from within a plugin too, thus "this" would refer to the plugin.
  var pt = new PropTween(this._pt, target, prop, 0, 1, _renderComplexString, null, setter),
      index = 0,
      matchIndex = 0,
      result,
      startNums,
      color,
      endNum,
      chunk,
      startNum,
      hasRandom,
      a;
  pt.b = start;
  pt.e = end;
  start += ""; //ensure values are strings

  end += "";

  if (hasRandom = ~end.indexOf("random(")) {
    end = _replaceRandom(end);
  }

  if (stringFilter) {
    a = [start, end];
    stringFilter(a, target, prop); //pass an array with the starting and ending values and let the filter do whatever it needs to the values.

    start = a[0];
    end = a[1];
  }

  startNums = start.match(_complexStringNumExp) || [];

  while (result = _complexStringNumExp.exec(end)) {
    endNum = result[0];
    chunk = end.substring(index, result.index);

    if (color) {
      color = (color + 1) % 5;
    } else if (chunk.substr(-5) === "rgba(") {
      color = 1;
    }

    if (endNum !== startNums[matchIndex++]) {
      startNum = parseFloat(startNums[matchIndex - 1]) || 0; //these nested PropTweens are handled in a special way - we'll never actually call a render or setter method on them. We'll just loop through them in the parent complex string PropTween's render method.

      pt._pt = {
        _next: pt._pt,
        p: chunk || matchIndex === 1 ? chunk : ",",
        //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
        s: startNum,
        c: endNum.charAt(1) === "=" ? _parseRelative(startNum, endNum) - startNum : parseFloat(endNum) - startNum,
        m: color && color < 4 ? Math.round : 0
      };
      index = _complexStringNumExp.lastIndex;
    }
  }

  pt.c = index < end.length ? end.substring(index, end.length) : ""; //we use the "c" of the PropTween to store the final part of the string (after the last number)

  pt.fp = funcParam;

  if (_relExp.test(end) || hasRandom) {
    pt.e = 0; //if the end string contains relative values or dynamic random(...) values, delete the end it so that on the final render we don't actually set it to the string with += or -= characters (forces it to use the calculated value).
  }

  this._pt = pt; //start the linked list with this new PropTween. Remember, we call _addComplexStringPropTween.call(tweenInstance...) to ensure that it's scoped properly. We may call it from within a plugin too, thus "this" would refer to the plugin.

  return pt;
},
    _addPropTween = function _addPropTween(target, prop, start, end, index, targets, modifier, stringFilter, funcParam) {
  _isFunction(end) && (end = end(index || 0, target, targets));
  var currentValue = target[prop],
      parsedStart = start !== "get" ? start : !_isFunction(currentValue) ? currentValue : funcParam ? target[prop.indexOf("set") || !_isFunction(target["get" + prop.substr(3)]) ? prop : "get" + prop.substr(3)](funcParam) : target[prop](),
      setter = !_isFunction(currentValue) ? _setterPlain : funcParam ? _setterFuncWithParam : _setterFunc,
      pt;

  if (_isString(end)) {
    if (~end.indexOf("random(")) {
      end = _replaceRandom(end);
    }

    if (end.charAt(1) === "=") {
      pt = _parseRelative(parsedStart, end) + (getUnit(parsedStart) || 0);

      if (pt || pt === 0) {
        // to avoid isNaN, like if someone passes in a value like "!= whatever"
        end = pt;
      }
    }
  }

  if (parsedStart !== end || _forceAllPropTweens) {
    if (!isNaN(parsedStart * end) && end !== "") {
      // fun fact: any number multiplied by "" is evaluated as the number 0!
      pt = new PropTween(this._pt, target, prop, +parsedStart || 0, end - (parsedStart || 0), typeof currentValue === "boolean" ? _renderBoolean : _renderPlain, 0, setter);
      funcParam && (pt.fp = funcParam);
      modifier && pt.modifier(modifier, this, target);
      return this._pt = pt;
    }

    !currentValue && !(prop in target) && _missingPlugin(prop, end);
    return _addComplexStringPropTween.call(this, target, prop, parsedStart, end, setter, stringFilter || _config.stringFilter, funcParam);
  }
},
    //creates a copy of the vars object and processes any function-based values (putting the resulting values directly into the copy) as well as strings with "random()" in them. It does NOT process relative values.
_processVars = function _processVars(vars, index, target, targets, tween) {
  _isFunction(vars) && (vars = _parseFuncOrString(vars, tween, index, target, targets));

  if (!_isObject(vars) || vars.style && vars.nodeType || _isArray(vars) || _isTypedArray(vars)) {
    return _isString(vars) ? _parseFuncOrString(vars, tween, index, target, targets) : vars;
  }

  var copy = {},
      p;

  for (p in vars) {
    copy[p] = _parseFuncOrString(vars[p], tween, index, target, targets);
  }

  return copy;
},
    _checkPlugin = function _checkPlugin(property, vars, tween, index, target, targets) {
  var plugin, pt, ptLookup, i;

  if (_plugins[property] && (plugin = new _plugins[property]()).init(target, plugin.rawVars ? vars[property] : _processVars(vars[property], index, target, targets, tween), tween, index, targets) !== false) {
    tween._pt = pt = new PropTween(tween._pt, target, property, 0, 1, plugin.render, plugin, 0, plugin.priority);

    if (tween !== _quickTween) {
      ptLookup = tween._ptLookup[tween._targets.indexOf(target)]; //note: we can't use tween._ptLookup[index] because for staggered tweens, the index from the fullTargets array won't match what it is in each individual tween that spawns from the stagger.

      i = plugin._props.length;

      while (i--) {
        ptLookup[plugin._props[i]] = pt;
      }
    }
  }

  return plugin;
},
    _overwritingTween,
    //store a reference temporarily so we can avoid overwriting itself.
_forceAllPropTweens,
    _initTween = function _initTween(tween, time) {
  var vars = tween.vars,
      ease = vars.ease,
      startAt = vars.startAt,
      immediateRender = vars.immediateRender,
      lazy = vars.lazy,
      onUpdate = vars.onUpdate,
      onUpdateParams = vars.onUpdateParams,
      callbackScope = vars.callbackScope,
      runBackwards = vars.runBackwards,
      yoyoEase = vars.yoyoEase,
      keyframes = vars.keyframes,
      autoRevert = vars.autoRevert,
      dur = tween._dur,
      prevStartAt = tween._startAt,
      targets = tween._targets,
      parent = tween.parent,
      fullTargets = parent && parent.data === "nested" ? parent.parent._targets : targets,
      autoOverwrite = tween._overwrite === "auto" && !_suppressOverwrites,
      tl = tween.timeline,
      cleanVars,
      i,
      p,
      pt,
      target,
      hasPriority,
      gsData,
      harness,
      plugin,
      ptLookup,
      index,
      harnessVars,
      overwritten;
  tl && (!keyframes || !ease) && (ease = "none");
  tween._ease = _parseEase(ease, _defaults.ease);
  tween._yEase = yoyoEase ? _invertEase(_parseEase(yoyoEase === true ? ease : yoyoEase, _defaults.ease)) : 0;

  if (yoyoEase && tween._yoyo && !tween._repeat) {
    //there must have been a parent timeline with yoyo:true that is currently in its yoyo phase, so flip the eases.
    yoyoEase = tween._yEase;
    tween._yEase = tween._ease;
    tween._ease = yoyoEase;
  }

  tween._from = !tl && !!vars.runBackwards; //nested timelines should never run backwards - the backwards-ness is in the child tweens.

  if (!tl || keyframes && !vars.stagger) {
    //if there's an internal timeline, skip all the parsing because we passed that task down the chain.
    harness = targets[0] ? _getCache(targets[0]).harness : 0;
    harnessVars = harness && vars[harness.prop]; //someone may need to specify CSS-specific values AND non-CSS values, like if the element has an "x" property plus it's a standard DOM element. We allow people to distinguish by wrapping plugin-specific stuff in a css:{} object for example.

    cleanVars = _copyExcluding(vars, _reservedProps);

    if (prevStartAt) {
      _removeFromParent(prevStartAt.render(-1, true));

      prevStartAt._lazy = 0;
    }

    if (startAt) {
      _removeFromParent(tween._startAt = Tween.set(targets, _setDefaults({
        data: "isStart",
        overwrite: false,
        parent: parent,
        immediateRender: true,
        lazy: _isNotFalse(lazy),
        startAt: null,
        delay: 0,
        onUpdate: onUpdate,
        onUpdateParams: onUpdateParams,
        callbackScope: callbackScope,
        stagger: 0
      }, startAt))); //copy the properties/values into a new object to avoid collisions, like var to = {x:0}, from = {x:500}; timeline.fromTo(e, from, to).fromTo(e, to, from);


      time < 0 && !immediateRender && !autoRevert && tween._startAt.render(-1, true); // rare edge case, like if a render is forced in the negative direction of a non-initted tween.

      if (immediateRender) {
        time > 0 && !autoRevert && (tween._startAt = 0); //tweens that render immediately (like most from() and fromTo() tweens) shouldn't revert when their parent timeline's playhead goes backward past the startTime because the initial render could have happened anytime and it shouldn't be directly correlated to this tween's startTime. Imagine setting up a complex animation where the beginning states of various objects are rendered immediately but the tween doesn't happen for quite some time - if we revert to the starting values as soon as the playhead goes backward past the tween's startTime, it will throw things off visually. Reversion should only happen in Timeline instances where immediateRender was false or when autoRevert is explicitly set to true.

        if (dur && time <= 0) {
          time && (tween._zTime = time);
          return; //we skip initialization here so that overwriting doesn't occur until the tween actually begins. Otherwise, if you create several immediateRender:true tweens of the same target/properties to drop into a Timeline, the last one created would overwrite the first ones because they didn't get placed into the timeline yet before the first render occurs and kicks in overwriting.
        } // if (time > 0) {
        // 	autoRevert || (tween._startAt = 0); //tweens that render immediately (like most from() and fromTo() tweens) shouldn't revert when their parent timeline's playhead goes backward past the startTime because the initial render could have happened anytime and it shouldn't be directly correlated to this tween's startTime. Imagine setting up a complex animation where the beginning states of various objects are rendered immediately but the tween doesn't happen for quite some time - if we revert to the starting values as soon as the playhead goes backward past the tween's startTime, it will throw things off visually. Reversion should only happen in Timeline instances where immediateRender was false or when autoRevert is explicitly set to true.
        // } else if (dur && !(time < 0 && prevStartAt)) {
        // 	time && (tween._zTime = time);
        // 	return; //we skip initialization here so that overwriting doesn't occur until the tween actually begins. Otherwise, if you create several immediateRender:true tweens of the same target/properties to drop into a Timeline, the last one created would overwrite the first ones because they didn't get placed into the timeline yet before the first render occurs and kicks in overwriting.
        // }

      } else if (autoRevert === false) {
        tween._startAt = 0;
      }
    } else if (runBackwards && dur) {
      //from() tweens must be handled uniquely: their beginning values must be rendered but we don't want overwriting to occur yet (when time is still 0). Wait until the tween actually begins before doing all the routines like overwriting. At that time, we should render at the END of the tween to ensure that things initialize correctly (remember, from() tweens go backwards)
      if (prevStartAt) {
        !autoRevert && (tween._startAt = 0);
      } else {
        time && (immediateRender = false); //in rare cases (like if a from() tween runs and then is invalidate()-ed), immediateRender could be true but the initial forced-render gets skipped, so there's no need to force the render in this context when the _time is greater than 0

        p = _setDefaults({
          overwrite: false,
          data: "isFromStart",
          //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
          lazy: immediateRender && _isNotFalse(lazy),
          immediateRender: immediateRender,
          //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
          stagger: 0,
          parent: parent //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y:gsap.utils.wrap([-100,100])})

        }, cleanVars);
        harnessVars && (p[harness.prop] = harnessVars); // in case someone does something like .from(..., {css:{}})

        _removeFromParent(tween._startAt = Tween.set(targets, p));

        time < 0 && tween._startAt.render(-1, true); // rare edge case, like if a render is forced in the negative direction of a non-initted from() tween.

        tween._zTime = time;

        if (!immediateRender) {
          _initTween(tween._startAt, _tinyNum); //ensures that the initial values are recorded

        } else if (!time) {
          return;
        }
      }
    }

    tween._pt = tween._ptCache = 0;
    lazy = dur && _isNotFalse(lazy) || lazy && !dur;

    for (i = 0; i < targets.length; i++) {
      target = targets[i];
      gsData = target._gsap || _harness(targets)[i]._gsap;
      tween._ptLookup[i] = ptLookup = {};
      _lazyLookup[gsData.id] && _lazyTweens.length && _lazyRender(); //if other tweens of the same target have recently initted but haven't rendered yet, we've got to force the render so that the starting values are correct (imagine populating a timeline with a bunch of sequential tweens and then jumping to the end)

      index = fullTargets === targets ? i : fullTargets.indexOf(target);

      if (harness && (plugin = new harness()).init(target, harnessVars || cleanVars, tween, index, fullTargets) !== false) {
        tween._pt = pt = new PropTween(tween._pt, target, plugin.name, 0, 1, plugin.render, plugin, 0, plugin.priority);

        plugin._props.forEach(function (name) {
          ptLookup[name] = pt;
        });

        plugin.priority && (hasPriority = 1);
      }

      if (!harness || harnessVars) {
        for (p in cleanVars) {
          if (_plugins[p] && (plugin = _checkPlugin(p, cleanVars, tween, index, target, fullTargets))) {
            plugin.priority && (hasPriority = 1);
          } else {
            ptLookup[p] = pt = _addPropTween.call(tween, target, p, "get", cleanVars[p], index, fullTargets, 0, vars.stringFilter);
          }
        }
      }

      tween._op && tween._op[i] && tween.kill(target, tween._op[i]);

      if (autoOverwrite && tween._pt) {
        _overwritingTween = tween;

        _globalTimeline.killTweensOf(target, ptLookup, tween.globalTime(time)); // make sure the overwriting doesn't overwrite THIS tween!!!


        overwritten = !tween.parent;
        _overwritingTween = 0;
      }

      tween._pt && lazy && (_lazyLookup[gsData.id] = 1);
    }

    hasPriority && _sortPropTweensByPriority(tween);
    tween._onInit && tween._onInit(tween); //plugins like RoundProps must wait until ALL of the PropTweens are instantiated. In the plugin's init() function, it sets the _onInit on the tween instance. May not be pretty/intuitive, but it's fast and keeps file size down.
  }

  tween._onUpdate = onUpdate;
  tween._initted = (!tween._op || tween._pt) && !overwritten; // if overwrittenProps resulted in the entire tween being killed, do NOT flag it as initted or else it may render for one tick.

  keyframes && time <= 0 && tl.render(_bigNum, true, true); // if there's a 0% keyframe, it'll render in the "before" state for any staggered/delayed animations thus when the following tween initializes, it'll use the "before" state instead of the "after" state as the initial values.
},
    _updatePropTweens = function _updatePropTweens(tween, property, value, start, startIsRelative, ratio, time) {
  var ptCache = (tween._pt && tween._ptCache || (tween._ptCache = {}))[property],
      pt,
      lookup,
      i;

  if (!ptCache) {
    ptCache = tween._ptCache[property] = [];
    lookup = tween._ptLookup;
    i = tween._targets.length;

    while (i--) {
      pt = lookup[i][property];

      if (pt && pt.d && pt.d._pt) {
        // it's a plugin, so find the nested PropTween
        pt = pt.d._pt;

        while (pt && pt.p !== property) {
          pt = pt._next;
        }
      }

      if (!pt) {
        // there is no PropTween associated with that property, so we must FORCE one to be created and ditch out of this
        // if the tween has other properties that already rendered at new positions, we'd normally have to rewind to put them back like tween.render(0, true) before forcing an _initTween(), but that can create another edge case like tweening a timeline's progress would trigger onUpdates to fire which could move other things around. It's better to just inform users that .resetTo() should ONLY be used for tweens that already have that property. For example, you can't gsap.to(...{ y: 0 }) and then tween.restTo("x", 200) for example.
        _forceAllPropTweens = 1; // otherwise, when we _addPropTween() and it finds no change between the start and end values, it skips creating a PropTween (for efficiency...why tween when there's no difference?) but in this case we NEED that PropTween created so we can edit it.

        tween.vars[property] = "+=0";

        _initTween(tween, time);

        _forceAllPropTweens = 0;
        return 1;
      }

      ptCache.push(pt);
    }
  }

  i = ptCache.length;

  while (i--) {
    pt = ptCache[i];
    pt.s = (start || start === 0) && !startIsRelative ? start : pt.s + (start || 0) + ratio * pt.c;
    pt.c = value - pt.s;
    pt.e && (pt.e = _round(value) + getUnit(pt.e)); // mainly for CSSPlugin (end value)

    pt.b && (pt.b = pt.s + getUnit(pt.b)); // (beginning value)
  }
},
    _addAliasesToVars = function _addAliasesToVars(targets, vars) {
  var harness = targets[0] ? _getCache(targets[0]).harness : 0,
      propertyAliases = harness && harness.aliases,
      copy,
      p,
      i,
      aliases;

  if (!propertyAliases) {
    return vars;
  }

  copy = _merge({}, vars);

  for (p in propertyAliases) {
    if (p in copy) {
      aliases = propertyAliases[p].split(",");
      i = aliases.length;

      while (i--) {
        copy[aliases[i]] = copy[p];
      }
    }
  }

  return copy;
},
    // parses multiple formats, like {"0%": {x: 100}, {"50%": {x: -20}} and { x: {"0%": 100, "50%": -20} }, and an "ease" can be set on any object. We populate an "allProps" object with an Array for each property, like {x: [{}, {}], y:[{}, {}]} with data for each property tween. The objects have a "t" (time), "v", (value), and "e" (ease) property. This allows us to piece together a timeline later.
_parseKeyframe = function _parseKeyframe(prop, obj, allProps, easeEach) {
  var ease = obj.ease || easeEach || "power1.inOut",
      p,
      a;

  if (_isArray(obj)) {
    a = allProps[prop] || (allProps[prop] = []); // t = time (out of 100), v = value, e = ease

    obj.forEach(function (value, i) {
      return a.push({
        t: i / (obj.length - 1) * 100,
        v: value,
        e: ease
      });
    });
  } else {
    for (p in obj) {
      a = allProps[p] || (allProps[p] = []);
      p === "ease" || a.push({
        t: parseFloat(prop),
        v: obj[p],
        e: ease
      });
    }
  }
},
    _parseFuncOrString = function _parseFuncOrString(value, tween, i, target, targets) {
  return _isFunction(value) ? value.call(tween, i, target, targets) : _isString(value) && ~value.indexOf("random(") ? _replaceRandom(value) : value;
},
    _staggerTweenProps = _callbackNames + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
    _staggerPropsToSkip = {};

_forEachName(_staggerTweenProps + ",id,stagger,delay,duration,paused,scrollTrigger", function (name) {
  return _staggerPropsToSkip[name] = 1;
});
/*
 * --------------------------------------------------------------------------------------
 * TWEEN
 * --------------------------------------------------------------------------------------
 */


var Tween = /*#__PURE__*/function (_Animation2) {
  _inheritsLoose(Tween, _Animation2);

  function Tween(targets, vars, position, skipInherit) {
    var _this3;

    if (typeof vars === "number") {
      position.duration = vars;
      vars = position;
      position = null;
    }

    _this3 = _Animation2.call(this, skipInherit ? vars : _inheritDefaults(vars)) || this;
    var _this3$vars = _this3.vars,
        duration = _this3$vars.duration,
        delay = _this3$vars.delay,
        immediateRender = _this3$vars.immediateRender,
        stagger = _this3$vars.stagger,
        overwrite = _this3$vars.overwrite,
        keyframes = _this3$vars.keyframes,
        defaults = _this3$vars.defaults,
        scrollTrigger = _this3$vars.scrollTrigger,
        yoyoEase = _this3$vars.yoyoEase,
        parent = vars.parent || _globalTimeline,
        parsedTargets = (_isArray(targets) || _isTypedArray(targets) ? _isNumber(targets[0]) : "length" in vars) ? [targets] : toArray(targets),
        tl,
        i,
        copy,
        l,
        p,
        curTarget,
        staggerFunc,
        staggerVarsToMerge;
    _this3._targets = parsedTargets.length ? _harness(parsedTargets) : _warn("GSAP target " + targets + " not found. https://greensock.com", !_config.nullTargetWarn) || [];
    _this3._ptLookup = []; //PropTween lookup. An array containing an object for each target, having keys for each tweening property

    _this3._overwrite = overwrite;

    if (keyframes || stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
      vars = _this3.vars;
      tl = _this3.timeline = new Timeline({
        data: "nested",
        defaults: defaults || {}
      });
      tl.kill();
      tl.parent = tl._dp = _assertThisInitialized(_this3);
      tl._start = 0;

      if (stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
        l = parsedTargets.length;
        staggerFunc = stagger && distribute(stagger);

        if (_isObject(stagger)) {
          //users can pass in callbacks like onStart/onComplete in the stagger object. These should fire with each individual tween.
          for (p in stagger) {
            if (~_staggerTweenProps.indexOf(p)) {
              staggerVarsToMerge || (staggerVarsToMerge = {});
              staggerVarsToMerge[p] = stagger[p];
            }
          }
        }

        for (i = 0; i < l; i++) {
          copy = _copyExcluding(vars, _staggerPropsToSkip);
          copy.stagger = 0;
          yoyoEase && (copy.yoyoEase = yoyoEase);
          staggerVarsToMerge && _merge(copy, staggerVarsToMerge);
          curTarget = parsedTargets[i]; //don't just copy duration or delay because if they're a string or function, we'd end up in an infinite loop because _isFuncOrString() would evaluate as true in the child tweens, entering this loop, etc. So we parse the value straight from vars and default to 0.

          copy.duration = +_parseFuncOrString(duration, _assertThisInitialized(_this3), i, curTarget, parsedTargets);
          copy.delay = (+_parseFuncOrString(delay, _assertThisInitialized(_this3), i, curTarget, parsedTargets) || 0) - _this3._delay;

          if (!stagger && l === 1 && copy.delay) {
            // if someone does delay:"random(1, 5)", repeat:-1, for example, the delay shouldn't be inside the repeat.
            _this3._delay = delay = copy.delay;
            _this3._start += delay;
            copy.delay = 0;
          }

          tl.to(curTarget, copy, staggerFunc ? staggerFunc(i, curTarget, parsedTargets) : 0);
          tl._ease = _easeMap.none;
        }

        tl.duration() ? duration = delay = 0 : _this3.timeline = 0; // if the timeline's duration is 0, we don't need a timeline internally!
      } else if (keyframes) {
        _inheritDefaults(_setDefaults(tl.vars.defaults, {
          ease: "none"
        }));

        tl._ease = _parseEase(keyframes.ease || vars.ease || "none");
        var time = 0,
            a,
            kf,
            v;

        if (_isArray(keyframes)) {
          keyframes.forEach(function (frame) {
            return tl.to(parsedTargets, frame, ">");
          });
        } else {
          copy = {};

          for (p in keyframes) {
            p === "ease" || p === "easeEach" || _parseKeyframe(p, keyframes[p], copy, keyframes.easeEach);
          }

          for (p in copy) {
            a = copy[p].sort(function (a, b) {
              return a.t - b.t;
            });
            time = 0;

            for (i = 0; i < a.length; i++) {
              kf = a[i];
              v = {
                ease: kf.e,
                duration: (kf.t - (i ? a[i - 1].t : 0)) / 100 * duration
              };
              v[p] = kf.v;
              tl.to(parsedTargets, v, time);
              time += v.duration;
            }
          }

          tl.duration() < duration && tl.to({}, {
            duration: duration - tl.duration()
          }); // in case keyframes didn't go to 100%
        }
      }

      duration || _this3.duration(duration = tl.duration());
    } else {
      _this3.timeline = 0; //speed optimization, faster lookups (no going up the prototype chain)
    }

    if (overwrite === true && !_suppressOverwrites) {
      _overwritingTween = _assertThisInitialized(_this3);

      _globalTimeline.killTweensOf(parsedTargets);

      _overwritingTween = 0;
    }

    _addToTimeline(parent, _assertThisInitialized(_this3), position);

    vars.reversed && _this3.reverse();
    vars.paused && _this3.paused(true);

    if (immediateRender || !duration && !keyframes && _this3._start === _roundPrecise(parent._time) && _isNotFalse(immediateRender) && _hasNoPausedAncestors(_assertThisInitialized(_this3)) && parent.data !== "nested") {
      _this3._tTime = -_tinyNum; //forces a render without having to set the render() "force" parameter to true because we want to allow lazying by default (using the "force" parameter always forces an immediate full render)

      _this3.render(Math.max(0, -delay)); //in case delay is negative

    }

    scrollTrigger && _scrollTrigger(_assertThisInitialized(_this3), scrollTrigger);
    return _this3;
  }

  var _proto3 = Tween.prototype;

  _proto3.render = function render(totalTime, suppressEvents, force) {
    var prevTime = this._time,
        tDur = this._tDur,
        dur = this._dur,
        tTime = totalTime > tDur - _tinyNum && totalTime >= 0 ? tDur : totalTime < _tinyNum ? 0 : totalTime,
        time,
        pt,
        iteration,
        cycleDuration,
        prevIteration,
        isYoyo,
        ratio,
        timeline,
        yoyoEase;

    if (!dur) {
      _renderZeroDurationTween(this, totalTime, suppressEvents, force);
    } else if (tTime !== this._tTime || !totalTime || force || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== totalTime < 0) {
      //this senses if we're crossing over the start time, in which case we must record _zTime and force the render, but we do it in this lengthy conditional way for performance reasons (usually we can skip the calculations): this._initted && (this._zTime < 0) !== (totalTime < 0)
      time = tTime;
      timeline = this.timeline;

      if (this._repeat) {
        //adjust the time for repeats and yoyos
        cycleDuration = dur + this._rDelay;

        if (this._repeat < -1 && totalTime < 0) {
          return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
        }

        time = _roundPrecise(tTime % cycleDuration); //round to avoid floating point errors. (4 % 0.8 should be 0 but some browsers report it as 0.79999999!)

        if (tTime === tDur) {
          // the tDur === tTime is for edge cases where there's a lengthy decimal on the duration and it may reach the very end but the time is rendered as not-quite-there (remember, tDur is rounded to 4 decimals whereas dur isn't)
          iteration = this._repeat;
          time = dur;
        } else {
          iteration = ~~(tTime / cycleDuration);

          if (iteration && iteration === tTime / cycleDuration) {
            time = dur;
            iteration--;
          }

          time > dur && (time = dur);
        }

        isYoyo = this._yoyo && iteration & 1;

        if (isYoyo) {
          yoyoEase = this._yEase;
          time = dur - time;
        }

        prevIteration = _animationCycle(this._tTime, cycleDuration);

        if (time === prevTime && !force && this._initted) {
          //could be during the repeatDelay part. No need to render and fire callbacks.
          this._tTime = tTime;
          return this;
        }

        if (iteration !== prevIteration) {
          timeline && this._yEase && _propagateYoyoEase(timeline, isYoyo); //repeatRefresh functionality

          if (this.vars.repeatRefresh && !isYoyo && !this._lock) {
            this._lock = force = 1; //force, otherwise if lazy is true, the _attemptInitTween() will return and we'll jump out and get caught bouncing on each tick.

            this.render(_roundPrecise(cycleDuration * iteration), true).invalidate()._lock = 0;
          }
        }
      }

      if (!this._initted) {
        if (_attemptInitTween(this, totalTime < 0 ? totalTime : time, force, suppressEvents)) {
          this._tTime = 0; // in constructor if immediateRender is true, we set _tTime to -_tinyNum to have the playhead cross the starting point but we can't leave _tTime as a negative number.

          return this;
        }

        if (prevTime !== this._time) {
          // rare edge case - during initialization, an onUpdate in the _startAt (.fromTo()) might force this tween to render at a different spot in which case we should ditch this render() call so that it doesn't revert the values.
          return this;
        }

        if (dur !== this._dur) {
          // while initting, a plugin like InertiaPlugin might alter the duration, so rerun from the start to ensure everything renders as it should.
          return this.render(totalTime, suppressEvents, force);
        }
      }

      this._tTime = tTime;
      this._time = time;

      if (!this._act && this._ts) {
        this._act = 1; //as long as it's not paused, force it to be active so that if the user renders independent of the parent timeline, it'll be forced to re-render on the next tick.

        this._lazy = 0;
      }

      this.ratio = ratio = (yoyoEase || this._ease)(time / dur);

      if (this._from) {
        this.ratio = ratio = 1 - ratio;
      }

      if (time && !prevTime && !suppressEvents) {
        _callback(this, "onStart");

        if (this._tTime !== tTime) {
          // in case the onStart triggered a render at a different spot, eject. Like if someone did animation.pause(0.5) or something inside the onStart.
          return this;
        }
      }

      pt = this._pt;

      while (pt) {
        pt.r(ratio, pt.d);
        pt = pt._next;
      }

      timeline && timeline.render(totalTime < 0 ? totalTime : !time && isYoyo ? -_tinyNum : timeline._dur * timeline._ease(time / this._dur), suppressEvents, force) || this._startAt && (this._zTime = totalTime);

      if (this._onUpdate && !suppressEvents) {
        totalTime < 0 && this._startAt && this._startAt.render(totalTime, true, force); //note: for performance reasons, we tuck this conditional logic inside less traveled areas (most tweens don't have an onUpdate). We'd just have it at the end before the onComplete, but the values should be updated before any onUpdate is called, so we ALSO put it here and then if it's not called, we do so later near the onComplete.

        _callback(this, "onUpdate");
      }

      this._repeat && iteration !== prevIteration && this.vars.onRepeat && !suppressEvents && this.parent && _callback(this, "onRepeat");

      if ((tTime === this._tDur || !tTime) && this._tTime === tTime) {
        totalTime < 0 && this._startAt && !this._onUpdate && this._startAt.render(totalTime, true, true);
        (totalTime || !dur) && (tTime === this._tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1); // don't remove if we're rendering at exactly a time of 0, as there could be autoRevert values that should get set on the next tick (if the playhead goes backward beyond the startTime, negative totalTime). Don't remove if the timeline is reversed and the playhead isn't at 0, otherwise tl.progress(1).reverse() won't work. Only remove if the playhead is at the end and timeScale is positive, or if the playhead is at 0 and the timeScale is negative.

        if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime)) {
          // if prevTime and tTime are zero, we shouldn't fire the onReverseComplete. This could happen if you gsap.to(... {paused:true}).play();
          _callback(this, tTime === tDur ? "onComplete" : "onReverseComplete", true);

          this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
        }
      }
    }

    return this;
  };

  _proto3.targets = function targets() {
    return this._targets;
  };

  _proto3.invalidate = function invalidate() {
    this._pt = this._op = this._startAt = this._onUpdate = this._lazy = this.ratio = 0;
    this._ptLookup = [];
    this.timeline && this.timeline.invalidate();
    return _Animation2.prototype.invalidate.call(this);
  };

  _proto3.resetTo = function resetTo(property, value, start, startIsRelative) {
    _tickerActive || _ticker.wake();
    this._ts || this.play();
    var time = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
        ratio;
    this._initted || _initTween(this, time);
    ratio = this._ease(time / this._dur); // don't just get tween.ratio because it may not have rendered yet.
    // possible future addition to allow an object with multiple values to update, like tween.resetTo({x: 100, y: 200}); At this point, it doesn't seem worth the added kb given the fact that most users will likely opt for the convenient gsap.quickTo() way of interacting with this method.
    // if (_isObject(property)) { // performance optimization
    // 	for (p in property) {
    // 		if (_updatePropTweens(this, p, property[p], value ? value[p] : null, start, ratio, time)) {
    // 			return this.resetTo(property, value, start, startIsRelative); // if a PropTween wasn't found for the property, it'll get forced with a re-initialization so we need to jump out and start over again.
    // 		}
    // 	}
    // } else {

    if (_updatePropTweens(this, property, value, start, startIsRelative, ratio, time)) {
      return this.resetTo(property, value, start, startIsRelative); // if a PropTween wasn't found for the property, it'll get forced with a re-initialization so we need to jump out and start over again.
    } //}


    _alignPlayhead(this, 0);

    this.parent || _addLinkedListItem(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0);
    return this.render(0);
  };

  _proto3.kill = function kill(targets, vars) {
    if (vars === void 0) {
      vars = "all";
    }

    if (!targets && (!vars || vars === "all")) {
      this._lazy = this._pt = 0;
      return this.parent ? _interrupt(this) : this;
    }

    if (this.timeline) {
      var tDur = this.timeline.totalDuration();
      this.timeline.killTweensOf(targets, vars, _overwritingTween && _overwritingTween.vars.overwrite !== true)._first || _interrupt(this); // if nothing is left tweening, interrupt.

      this.parent && tDur !== this.timeline.totalDuration() && _setDuration(this, this._dur * this.timeline._tDur / tDur, 0, 1); // if a nested tween is killed that changes the duration, it should affect this tween's duration. We must use the ratio, though, because sometimes the internal timeline is stretched like for keyframes where they don't all add up to whatever the parent tween's duration was set to.

      return this;
    }

    var parsedTargets = this._targets,
        killingTargets = targets ? toArray(targets) : parsedTargets,
        propTweenLookup = this._ptLookup,
        firstPT = this._pt,
        overwrittenProps,
        curLookup,
        curOverwriteProps,
        props,
        p,
        pt,
        i;

    if ((!vars || vars === "all") && _arraysMatch(parsedTargets, killingTargets)) {
      vars === "all" && (this._pt = 0);
      return _interrupt(this);
    }

    overwrittenProps = this._op = this._op || [];

    if (vars !== "all") {
      //so people can pass in a comma-delimited list of property names
      if (_isString(vars)) {
        p = {};

        _forEachName(vars, function (name) {
          return p[name] = 1;
        });

        vars = p;
      }

      vars = _addAliasesToVars(parsedTargets, vars);
    }

    i = parsedTargets.length;

    while (i--) {
      if (~killingTargets.indexOf(parsedTargets[i])) {
        curLookup = propTweenLookup[i];

        if (vars === "all") {
          overwrittenProps[i] = vars;
          props = curLookup;
          curOverwriteProps = {};
        } else {
          curOverwriteProps = overwrittenProps[i] = overwrittenProps[i] || {};
          props = vars;
        }

        for (p in props) {
          pt = curLookup && curLookup[p];

          if (pt) {
            if (!("kill" in pt.d) || pt.d.kill(p) === true) {
              _removeLinkedListItem(this, pt, "_pt");
            }

            delete curLookup[p];
          }

          if (curOverwriteProps !== "all") {
            curOverwriteProps[p] = 1;
          }
        }
      }
    }

    this._initted && !this._pt && firstPT && _interrupt(this); //if all tweening properties are killed, kill the tween. Without this line, if there's a tween with multiple targets and then you killTweensOf() each target individually, the tween would technically still remain active and fire its onComplete even though there aren't any more properties tweening.

    return this;
  };

  Tween.to = function to(targets, vars) {
    return new Tween(targets, vars, arguments[2]);
  };

  Tween.from = function from(targets, vars) {
    return _createTweenType(1, arguments);
  };

  Tween.delayedCall = function delayedCall(delay, callback, params, scope) {
    return new Tween(callback, 0, {
      immediateRender: false,
      lazy: false,
      overwrite: false,
      delay: delay,
      onComplete: callback,
      onReverseComplete: callback,
      onCompleteParams: params,
      onReverseCompleteParams: params,
      callbackScope: scope
    });
  };

  Tween.fromTo = function fromTo(targets, fromVars, toVars) {
    return _createTweenType(2, arguments);
  };

  Tween.set = function set(targets, vars) {
    vars.duration = 0;
    vars.repeatDelay || (vars.repeat = 0);
    return new Tween(targets, vars);
  };

  Tween.killTweensOf = function killTweensOf(targets, props, onlyActive) {
    return _globalTimeline.killTweensOf(targets, props, onlyActive);
  };

  return Tween;
}(Animation);

_setDefaults(Tween.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
}); //add the pertinent timeline methods to Tween instances so that users can chain conveniently and create a timeline automatically. (removed due to concerns that it'd ultimately add to more confusion especially for beginners)
// _forEachName("to,from,fromTo,set,call,add,addLabel,addPause", name => {
// 	Tween.prototype[name] = function() {
// 		let tl = new Timeline();
// 		return _addToTimeline(tl, this)[name].apply(tl, toArray(arguments));
// 	}
// });
//for backward compatibility. Leverage the timeline calls.


_forEachName("staggerTo,staggerFrom,staggerFromTo", function (name) {
  Tween[name] = function () {
    var tl = new Timeline(),
        params = _slice.call(arguments, 0);

    params.splice(name === "staggerFromTo" ? 5 : 4, 0, 0);
    return tl[name].apply(tl, params);
  };
});
/*
 * --------------------------------------------------------------------------------------
 * PROPTWEEN
 * --------------------------------------------------------------------------------------
 */


var _setterPlain = function _setterPlain(target, property, value) {
  return target[property] = value;
},
    _setterFunc = function _setterFunc(target, property, value) {
  return target[property](value);
},
    _setterFuncWithParam = function _setterFuncWithParam(target, property, value, data) {
  return target[property](data.fp, value);
},
    _setterAttribute = function _setterAttribute(target, property, value) {
  return target.setAttribute(property, value);
},
    _getSetter = function _getSetter(target, property) {
  return _isFunction(target[property]) ? _setterFunc : _isUndefined(target[property]) && target.setAttribute ? _setterAttribute : _setterPlain;
},
    _renderPlain = function _renderPlain(ratio, data) {
  return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 1000000) / 1000000, data);
},
    _renderBoolean = function _renderBoolean(ratio, data) {
  return data.set(data.t, data.p, !!(data.s + data.c * ratio), data);
},
    _renderComplexString = function _renderComplexString(ratio, data) {
  var pt = data._pt,
      s = "";

  if (!ratio && data.b) {
    //b = beginning string
    s = data.b;
  } else if (ratio === 1 && data.e) {
    //e = ending string
    s = data.e;
  } else {
    while (pt) {
      s = pt.p + (pt.m ? pt.m(pt.s + pt.c * ratio) : Math.round((pt.s + pt.c * ratio) * 10000) / 10000) + s; //we use the "p" property for the text inbetween (like a suffix). And in the context of a complex string, the modifier (m) is typically just Math.round(), like for RGB colors.

      pt = pt._next;
    }

    s += data.c; //we use the "c" of the PropTween to store the final chunk of non-numeric text.
  }

  data.set(data.t, data.p, s, data);
},
    _renderPropTweens = function _renderPropTweens(ratio, data) {
  var pt = data._pt;

  while (pt) {
    pt.r(ratio, pt.d);
    pt = pt._next;
  }
},
    _addPluginModifier = function _addPluginModifier(modifier, tween, target, property) {
  var pt = this._pt,
      next;

  while (pt) {
    next = pt._next;
    pt.p === property && pt.modifier(modifier, tween, target);
    pt = next;
  }
},
    _killPropTweensOf = function _killPropTweensOf(property) {
  var pt = this._pt,
      hasNonDependentRemaining,
      next;

  while (pt) {
    next = pt._next;

    if (pt.p === property && !pt.op || pt.op === property) {
      _removeLinkedListItem(this, pt, "_pt");
    } else if (!pt.dep) {
      hasNonDependentRemaining = 1;
    }

    pt = next;
  }

  return !hasNonDependentRemaining;
},
    _setterWithModifier = function _setterWithModifier(target, property, value, data) {
  data.mSet(target, property, data.m.call(data.tween, value, data.mt), data);
},
    _sortPropTweensByPriority = function _sortPropTweensByPriority(parent) {
  var pt = parent._pt,
      next,
      pt2,
      first,
      last; //sorts the PropTween linked list in order of priority because some plugins need to do their work after ALL of the PropTweens were created (like RoundPropsPlugin and ModifiersPlugin)

  while (pt) {
    next = pt._next;
    pt2 = first;

    while (pt2 && pt2.pr > pt.pr) {
      pt2 = pt2._next;
    }

    if (pt._prev = pt2 ? pt2._prev : last) {
      pt._prev._next = pt;
    } else {
      first = pt;
    }

    if (pt._next = pt2) {
      pt2._prev = pt;
    } else {
      last = pt;
    }

    pt = next;
  }

  parent._pt = first;
}; //PropTween key: t = target, p = prop, r = renderer, d = data, s = start, c = change, op = overwriteProperty (ONLY populated when it's different than p), pr = priority, _next/_prev for the linked list siblings, set = setter, m = modifier, mSet = modifierSetter (the original setter, before a modifier was added)


var PropTween = /*#__PURE__*/function () {
  function PropTween(next, target, prop, start, change, renderer, data, setter, priority) {
    this.t = target;
    this.s = start;
    this.c = change;
    this.p = prop;
    this.r = renderer || _renderPlain;
    this.d = data || this;
    this.set = setter || _setterPlain;
    this.pr = priority || 0;
    this._next = next;

    if (next) {
      next._prev = this;
    }
  }

  var _proto4 = PropTween.prototype;

  _proto4.modifier = function modifier(func, tween, target) {
    this.mSet = this.mSet || this.set; //in case it was already set (a PropTween can only have one modifier)

    this.set = _setterWithModifier;
    this.m = func;
    this.mt = target; //modifier target

    this.tween = tween;
  };

  return PropTween;
}(); //Initialization tasks

_forEachName(_callbackNames + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function (name) {
  return _reservedProps[name] = 1;
});

_globals.TweenMax = _globals.TweenLite = Tween;
_globals.TimelineLite = _globals.TimelineMax = Timeline;
_globalTimeline = new Timeline({
  sortChildren: false,
  defaults: _defaults,
  autoRemoveChildren: true,
  id: "root",
  smoothChildTiming: true
});
_config.stringFilter = _colorStringFilter;
/*
 * --------------------------------------------------------------------------------------
 * GSAP
 * --------------------------------------------------------------------------------------
 */

var _gsap = {
  registerPlugin: function registerPlugin() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    args.forEach(function (config) {
      return _createPlugin(config);
    });
  },
  timeline: function timeline(vars) {
    return new Timeline(vars);
  },
  getTweensOf: function getTweensOf(targets, onlyActive) {
    return _globalTimeline.getTweensOf(targets, onlyActive);
  },
  getProperty: function getProperty(target, property, unit, uncache) {
    _isString(target) && (target = toArray(target)[0]); //in case selector text or an array is passed in

    var getter = _getCache(target || {}).get,
        format = unit ? _passThrough : _numericIfPossible;

    unit === "native" && (unit = "");
    return !target ? target : !property ? function (property, unit, uncache) {
      return format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
    } : format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
  },
  quickSetter: function quickSetter(target, property, unit) {
    target = toArray(target);

    if (target.length > 1) {
      var setters = target.map(function (t) {
        return gsap.quickSetter(t, property, unit);
      }),
          l = setters.length;
      return function (value) {
        var i = l;

        while (i--) {
          setters[i](value);
        }
      };
    }

    target = target[0] || {};

    var Plugin = _plugins[property],
        cache = _getCache(target),
        p = cache.harness && (cache.harness.aliases || {})[property] || property,
        // in case it's an alias, like "rotate" for "rotation".
    setter = Plugin ? function (value) {
      var p = new Plugin();
      _quickTween._pt = 0;
      p.init(target, unit ? value + unit : value, _quickTween, 0, [target]);
      p.render(1, p);
      _quickTween._pt && _renderPropTweens(1, _quickTween);
    } : cache.set(target, p);

    return Plugin ? setter : function (value) {
      return setter(target, p, unit ? value + unit : value, cache, 1);
    };
  },
  quickTo: function quickTo(target, property, vars) {
    var _merge2;

    var tween = gsap.to(target, _merge((_merge2 = {}, _merge2[property] = "+=0.1", _merge2.paused = true, _merge2), vars || {})),
        func = function func(value, start, startIsRelative) {
      return tween.resetTo(property, value, start, startIsRelative);
    };

    func.tween = tween;
    return func;
  },
  isTweening: function isTweening(targets) {
    return _globalTimeline.getTweensOf(targets, true).length > 0;
  },
  defaults: function defaults(value) {
    value && value.ease && (value.ease = _parseEase(value.ease, _defaults.ease));
    return _mergeDeep(_defaults, value || {});
  },
  config: function config(value) {
    return _mergeDeep(_config, value || {});
  },
  registerEffect: function registerEffect(_ref3) {
    var name = _ref3.name,
        effect = _ref3.effect,
        plugins = _ref3.plugins,
        defaults = _ref3.defaults,
        extendTimeline = _ref3.extendTimeline;
    (plugins || "").split(",").forEach(function (pluginName) {
      return pluginName && !_plugins[pluginName] && !_globals[pluginName] && _warn(name + " effect requires " + pluginName + " plugin.");
    });

    _effects[name] = function (targets, vars, tl) {
      return effect(toArray(targets), _setDefaults(vars || {}, defaults), tl);
    };

    if (extendTimeline) {
      Timeline.prototype[name] = function (targets, vars, position) {
        return this.add(_effects[name](targets, _isObject(vars) ? vars : (position = vars) && {}, this), position);
      };
    }
  },
  registerEase: function registerEase(name, ease) {
    _easeMap[name] = _parseEase(ease);
  },
  parseEase: function parseEase(ease, defaultEase) {
    return arguments.length ? _parseEase(ease, defaultEase) : _easeMap;
  },
  getById: function getById(id) {
    return _globalTimeline.getById(id);
  },
  exportRoot: function exportRoot(vars, includeDelayedCalls) {
    if (vars === void 0) {
      vars = {};
    }

    var tl = new Timeline(vars),
        child,
        next;
    tl.smoothChildTiming = _isNotFalse(vars.smoothChildTiming);

    _globalTimeline.remove(tl);

    tl._dp = 0; //otherwise it'll get re-activated when adding children and be re-introduced into _globalTimeline's linked list (then added to itself).

    tl._time = tl._tTime = _globalTimeline._time;
    child = _globalTimeline._first;

    while (child) {
      next = child._next;

      if (includeDelayedCalls || !(!child._dur && child instanceof Tween && child.vars.onComplete === child._targets[0])) {
        _addToTimeline(tl, child, child._start - child._delay);
      }

      child = next;
    }

    _addToTimeline(_globalTimeline, tl, 0);

    return tl;
  },
  utils: {
    wrap: wrap,
    wrapYoyo: wrapYoyo,
    distribute: distribute,
    random: random,
    snap: snap,
    normalize: normalize,
    getUnit: getUnit,
    clamp: clamp,
    splitColor: splitColor,
    toArray: toArray,
    selector: selector,
    mapRange: mapRange,
    pipe: pipe,
    unitize: unitize,
    interpolate: interpolate,
    shuffle: shuffle
  },
  install: _install,
  effects: _effects,
  ticker: _ticker,
  updateRoot: Timeline.updateRoot,
  plugins: _plugins,
  globalTimeline: _globalTimeline,
  core: {
    PropTween: PropTween,
    globals: _addGlobal,
    Tween: Tween,
    Timeline: Timeline,
    Animation: Animation,
    getCache: _getCache,
    _removeLinkedListItem: _removeLinkedListItem,
    suppressOverwrites: function suppressOverwrites(value) {
      return _suppressOverwrites = value;
    }
  }
};

_forEachName("to,from,fromTo,delayedCall,set,killTweensOf", function (name) {
  return _gsap[name] = Tween[name];
});

_ticker.add(Timeline.updateRoot);

_quickTween = _gsap.to({}, {
  duration: 0
}); // ---- EXTRA PLUGINS --------------------------------------------------------

var _getPluginPropTween = function _getPluginPropTween(plugin, prop) {
  var pt = plugin._pt;

  while (pt && pt.p !== prop && pt.op !== prop && pt.fp !== prop) {
    pt = pt._next;
  }

  return pt;
},
    _addModifiers = function _addModifiers(tween, modifiers) {
  var targets = tween._targets,
      p,
      i,
      pt;

  for (p in modifiers) {
    i = targets.length;

    while (i--) {
      pt = tween._ptLookup[i][p];

      if (pt && (pt = pt.d)) {
        if (pt._pt) {
          // is a plugin
          pt = _getPluginPropTween(pt, p);
        }

        pt && pt.modifier && pt.modifier(modifiers[p], tween, targets[i], p);
      }
    }
  }
},
    _buildModifierPlugin = function _buildModifierPlugin(name, modifier) {
  return {
    name: name,
    rawVars: 1,
    //don't pre-process function-based values or "random()" strings.
    init: function init(target, vars, tween) {
      tween._onInit = function (tween) {
        var temp, p;

        if (_isString(vars)) {
          temp = {};

          _forEachName(vars, function (name) {
            return temp[name] = 1;
          }); //if the user passes in a comma-delimited list of property names to roundProps, like "x,y", we round to whole numbers.


          vars = temp;
        }

        if (modifier) {
          temp = {};

          for (p in vars) {
            temp[p] = modifier(vars[p]);
          }

          vars = temp;
        }

        _addModifiers(tween, vars);
      };
    }
  };
}; //register core plugins


var gsap = _gsap.registerPlugin({
  name: "attr",
  init: function init(target, vars, tween, index, targets) {
    var p, pt;

    for (p in vars) {
      pt = this.add(target, "setAttribute", (target.getAttribute(p) || 0) + "", vars[p], index, targets, 0, 0, p);
      pt && (pt.op = p);

      this._props.push(p);
    }
  }
}, {
  name: "endArray",
  init: function init(target, value) {
    var i = value.length;

    while (i--) {
      this.add(target, i, target[i] || 0, value[i]);
    }
  }
}, _buildModifierPlugin("roundProps", _roundModifier), _buildModifierPlugin("modifiers"), _buildModifierPlugin("snap", snap)) || _gsap; //to prevent the core plugins from being dropped via aggressive tree shaking, we must include them in the variable declaration in this way.

Tween.version = Timeline.version = gsap.version = "3.10.4";
_coreReady = 1;
_windowExists() && _wake();
var Power0 = _easeMap.Power0,
    Power1 = _easeMap.Power1,
    Power2 = _easeMap.Power2,
    Power3 = _easeMap.Power3,
    Power4 = _easeMap.Power4,
    Linear = _easeMap.Linear,
    Quad = _easeMap.Quad,
    Cubic = _easeMap.Cubic,
    Quart = _easeMap.Quart,
    Quint = _easeMap.Quint,
    Strong = _easeMap.Strong,
    Elastic = _easeMap.Elastic,
    Back = _easeMap.Back,
    SteppedEase = _easeMap.SteppedEase,
    Bounce = _easeMap.Bounce,
    Sine = _easeMap.Sine,
    Expo = _easeMap.Expo,
    Circ = _easeMap.Circ;

 //export some internal methods/orojects for use in CSSPlugin so that we can externalize that file and allow custom builds that exclude it.



/***/ }),

/***/ "./node_modules/gsap/index.js":
/*!************************************!*\
  !*** ./node_modules/gsap/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Back": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Back),
/* harmony export */   "Bounce": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Bounce),
/* harmony export */   "CSSPlugin": () => (/* reexport safe */ _CSSPlugin_js__WEBPACK_IMPORTED_MODULE_1__.CSSPlugin),
/* harmony export */   "Circ": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Circ),
/* harmony export */   "Cubic": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Cubic),
/* harmony export */   "Elastic": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Elastic),
/* harmony export */   "Expo": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Expo),
/* harmony export */   "Linear": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Linear),
/* harmony export */   "Power0": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Power0),
/* harmony export */   "Power1": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Power1),
/* harmony export */   "Power2": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Power2),
/* harmony export */   "Power3": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Power3),
/* harmony export */   "Power4": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Power4),
/* harmony export */   "Quad": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Quad),
/* harmony export */   "Quart": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Quart),
/* harmony export */   "Quint": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Quint),
/* harmony export */   "Sine": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Sine),
/* harmony export */   "SteppedEase": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.SteppedEase),
/* harmony export */   "Strong": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Strong),
/* harmony export */   "TimelineLite": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.TimelineLite),
/* harmony export */   "TimelineMax": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.TimelineMax),
/* harmony export */   "TweenLite": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.TweenLite),
/* harmony export */   "TweenMax": () => (/* binding */ TweenMaxWithCSS),
/* harmony export */   "default": () => (/* binding */ gsapWithCSS),
/* harmony export */   "gsap": () => (/* binding */ gsapWithCSS)
/* harmony export */ });
/* harmony import */ var _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gsap-core.js */ "./node_modules/gsap/gsap-core.js");
/* harmony import */ var _CSSPlugin_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CSSPlugin.js */ "./node_modules/gsap/CSSPlugin.js");


var gsapWithCSS = _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.gsap.registerPlugin(_CSSPlugin_js__WEBPACK_IMPORTED_MODULE_1__.CSSPlugin) || _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.gsap,
    // to protect from tree shaking
TweenMaxWithCSS = gsapWithCSS.core.Tween;


/***/ }),

/***/ "./node_modules/inputmask/dist/inputmask.js":
/*!**************************************************!*\
  !*** ./node_modules/inputmask/dist/inputmask.js ***!
  \**************************************************/
/***/ ((module) => {

/*!
 * dist/inputmask
 * https://github.com/RobinHerbots/Inputmask
 * Copyright (c) 2010 - 2021 Robin Herbots
 * Licensed under the MIT license
 * Version: 5.0.7
 */
!function(e, t) {
    if (true) module.exports = t(); else { var a, i; }
}(self, (function() {
    return function() {
        "use strict";
        var e = {
            8741: function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                var i = !("undefined" == typeof window || !window.document || !window.document.createElement);
                t.default = i;
            },
            3976: function(e, t, i) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                var a, n = (a = i(5581)) && a.__esModule ? a : {
                    default: a
                };
                var r = {
                    _maxTestPos: 500,
                    placeholder: "_",
                    optionalmarker: [ "[", "]" ],
                    quantifiermarker: [ "{", "}" ],
                    groupmarker: [ "(", ")" ],
                    alternatormarker: "|",
                    escapeChar: "\\",
                    mask: null,
                    regex: null,
                    oncomplete: function() {},
                    onincomplete: function() {},
                    oncleared: function() {},
                    repeat: 0,
                    greedy: !1,
                    autoUnmask: !1,
                    removeMaskOnSubmit: !1,
                    clearMaskOnLostFocus: !0,
                    insertMode: !0,
                    insertModeVisual: !0,
                    clearIncomplete: !1,
                    alias: null,
                    onKeyDown: function() {},
                    onBeforeMask: null,
                    onBeforePaste: function(e, t) {
                        return "function" == typeof t.onBeforeMask ? t.onBeforeMask.call(this, e, t) : e;
                    },
                    onBeforeWrite: null,
                    onUnMask: null,
                    showMaskOnFocus: !0,
                    showMaskOnHover: !0,
                    onKeyValidation: function() {},
                    skipOptionalPartCharacter: " ",
                    numericInput: !1,
                    rightAlign: !1,
                    undoOnEscape: !0,
                    radixPoint: "",
                    _radixDance: !1,
                    groupSeparator: "",
                    keepStatic: null,
                    positionCaretOnTab: !0,
                    tabThrough: !1,
                    supportsInputType: [ "text", "tel", "url", "password", "search" ],
                    ignorables: [ n.default.BACKSPACE, n.default.TAB, n.default["PAUSE/BREAK"], n.default.ESCAPE, n.default.PAGE_UP, n.default.PAGE_DOWN, n.default.END, n.default.HOME, n.default.LEFT, n.default.UP, n.default.RIGHT, n.default.DOWN, n.default.INSERT, n.default.DELETE, 93, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 0, 229 ],
                    isComplete: null,
                    preValidation: null,
                    postValidation: null,
                    staticDefinitionSymbol: void 0,
                    jitMasking: !1,
                    nullable: !0,
                    inputEventOnly: !1,
                    noValuePatching: !1,
                    positionCaretOnClick: "lvp",
                    casing: null,
                    inputmode: "text",
                    importDataAttributes: !0,
                    shiftPositions: !0,
                    usePrototypeDefinitions: !0,
                    validationEventTimeOut: 3e3,
                    substitutes: {}
                };
                t.default = r;
            },
            7392: function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                t.default = {
                    9: {
                        validator: "[0-9\uff10-\uff19]",
                        definitionSymbol: "*"
                    },
                    a: {
                        validator: "[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",
                        definitionSymbol: "*"
                    },
                    "*": {
                        validator: "[0-9\uff10-\uff19A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]"
                    }
                };
            },
            253: function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = function(e, t, i) {
                    if (void 0 === i) return e.__data ? e.__data[t] : null;
                    e.__data = e.__data || {}, e.__data[t] = i;
                };
            },
            3776: function(e, t, i) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.Event = void 0, t.off = function(e, t) {
                    var i, a;
                    function n(e, t, n) {
                        if (e in i == !0) if (a.removeEventListener ? a.removeEventListener(e, n, !1) : a.detachEvent && a.detachEvent("on" + e, n), 
                        "global" === t) for (var r in i[e]) i[e][r].splice(i[e][r].indexOf(n), 1); else i[e][t].splice(i[e][t].indexOf(n), 1);
                    }
                    function r(e, a) {
                        var n, r, o = [];
                        if (e.length > 0) if (void 0 === t) for (n = 0, r = i[e][a].length; n < r; n++) o.push({
                            ev: e,
                            namespace: a && a.length > 0 ? a : "global",
                            handler: i[e][a][n]
                        }); else o.push({
                            ev: e,
                            namespace: a && a.length > 0 ? a : "global",
                            handler: t
                        }); else if (a.length > 0) for (var l in i) for (var s in i[l]) if (s === a) if (void 0 === t) for (n = 0, 
                        r = i[l][s].length; n < r; n++) o.push({
                            ev: l,
                            namespace: s,
                            handler: i[l][s][n]
                        }); else o.push({
                            ev: l,
                            namespace: s,
                            handler: t
                        });
                        return o;
                    }
                    if (u(this[0]) && e) {
                        i = this[0].eventRegistry, a = this[0];
                        for (var o = e.split(" "), l = 0; l < o.length; l++) for (var s = o[l].split("."), c = r(s[0], s[1]), f = 0, d = c.length; f < d; f++) n(c[f].ev, c[f].namespace, c[f].handler);
                    }
                    return this;
                }, t.on = function(e, t) {
                    function i(e, i) {
                        n.addEventListener ? n.addEventListener(e, t, !1) : n.attachEvent && n.attachEvent("on" + e, t), 
                        a[e] = a[e] || {}, a[e][i] = a[e][i] || [], a[e][i].push(t);
                    }
                    if (u(this[0])) for (var a = this[0].eventRegistry, n = this[0], r = e.split(" "), o = 0; o < r.length; o++) {
                        var l = r[o].split("."), s = l[0], c = l[1] || "global";
                        i(s, c);
                    }
                    return this;
                }, t.trigger = function(e) {
                    if (u(this[0])) for (var t = this[0].eventRegistry, i = this[0], a = "string" == typeof e ? e.split(" ") : [ e.type ], r = 0; r < a.length; r++) {
                        var l = a[r].split("."), s = l[0], c = l[1] || "global";
                        if (void 0 !== document && "global" === c) {
                            var f, d, p = {
                                bubbles: !0,
                                cancelable: !0,
                                detail: arguments[1]
                            };
                            if (document.createEvent) {
                                try {
                                    if ("input" === s) p.inputType = "insertText", f = new InputEvent(s, p); else f = new CustomEvent(s, p);
                                } catch (e) {
                                    (f = document.createEvent("CustomEvent")).initCustomEvent(s, p.bubbles, p.cancelable, p.detail);
                                }
                                e.type && (0, n.default)(f, e), i.dispatchEvent(f);
                            } else (f = document.createEventObject()).eventType = s, f.detail = arguments[1], 
                            e.type && (0, n.default)(f, e), i.fireEvent("on" + f.eventType, f);
                        } else if (void 0 !== t[s]) if (arguments[0] = arguments[0].type ? arguments[0] : o.default.Event(arguments[0]), 
                        arguments[0].detail = arguments.slice(1), "global" === c) for (var h in t[s]) for (d = 0; d < t[s][h].length; d++) t[s][h][d].apply(i, arguments); else for (d = 0; d < t[s][c].length; d++) t[s][c][d].apply(i, arguments);
                    }
                    return this;
                };
                var a, n = s(i(600)), r = s(i(9380)), o = s(i(4963)), l = s(i(8741));
                function s(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                }
                function u(e) {
                    return e instanceof Element;
                }
                t.Event = a, "function" == typeof r.default.CustomEvent ? t.Event = a = r.default.CustomEvent : l.default && (t.Event = a = function(e, t) {
                    t = t || {
                        bubbles: !1,
                        cancelable: !1,
                        detail: void 0
                    };
                    var i = document.createEvent("CustomEvent");
                    return i.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), i;
                }, a.prototype = r.default.Event.prototype);
            },
            600: function(e, t) {
                function i(e) {
                    return i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e;
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                    }, i(e);
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = function e() {
                    var t, a, n, r, o, l, s = arguments[0] || {}, u = 1, c = arguments.length, f = !1;
                    "boolean" == typeof s && (f = s, s = arguments[u] || {}, u++);
                    "object" !== i(s) && "function" != typeof s && (s = {});
                    for (;u < c; u++) if (null != (t = arguments[u])) for (a in t) n = s[a], r = t[a], 
                    s !== r && (f && r && ("[object Object]" === Object.prototype.toString.call(r) || (o = Array.isArray(r))) ? (o ? (o = !1, 
                    l = n && Array.isArray(n) ? n : []) : l = n && "[object Object]" === Object.prototype.toString.call(n) ? n : {}, 
                    s[a] = e(f, l, r)) : void 0 !== r && (s[a] = r));
                    return s;
                };
            },
            4963: function(e, t, i) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                var a = l(i(600)), n = l(i(9380)), r = l(i(253)), o = i(3776);
                function l(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                }
                var s = n.default.document;
                function u(e) {
                    return e instanceof u ? e : this instanceof u ? void (null != e && e !== n.default && (this[0] = e.nodeName ? e : void 0 !== e[0] && e[0].nodeName ? e[0] : s.querySelector(e), 
                    void 0 !== this[0] && null !== this[0] && (this[0].eventRegistry = this[0].eventRegistry || {}))) : new u(e);
                }
                u.prototype = {
                    on: o.on,
                    off: o.off,
                    trigger: o.trigger
                }, u.extend = a.default, u.data = r.default, u.Event = o.Event;
                var c = u;
                t.default = c;
            },
            9845: function(e, t, i) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.ua = t.mobile = t.iphone = t.iemobile = t.ie = void 0;
                var a, n = (a = i(9380)) && a.__esModule ? a : {
                    default: a
                };
                var r = n.default.navigator && n.default.navigator.userAgent || "", o = r.indexOf("MSIE ") > 0 || r.indexOf("Trident/") > 0, l = "ontouchstart" in n.default, s = /iemobile/i.test(r), u = /iphone/i.test(r) && !s;
                t.iphone = u, t.iemobile = s, t.mobile = l, t.ie = o, t.ua = r;
            },
            7184: function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = function(e) {
                    return e.replace(i, "\\$1");
                };
                var i = new RegExp("(\\" + [ "/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^" ].join("|\\") + ")", "gim");
            },
            6030: function(e, t, i) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.EventHandlers = void 0;
                var a, n = i(8711), r = (a = i(5581)) && a.__esModule ? a : {
                    default: a
                }, o = i(9845), l = i(7215), s = i(7760), u = i(4713);
                function c(e, t) {
                    var i = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (!i) {
                        if (Array.isArray(e) || (i = function(e, t) {
                            if (!e) return;
                            if ("string" == typeof e) return f(e, t);
                            var i = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === i && e.constructor && (i = e.constructor.name);
                            if ("Map" === i || "Set" === i) return Array.from(e);
                            if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return f(e, t);
                        }(e)) || t && e && "number" == typeof e.length) {
                            i && (e = i);
                            var a = 0, n = function() {};
                            return {
                                s: n,
                                n: function() {
                                    return a >= e.length ? {
                                        done: !0
                                    } : {
                                        done: !1,
                                        value: e[a++]
                                    };
                                },
                                e: function(e) {
                                    throw e;
                                },
                                f: n
                            };
                        }
                        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    }
                    var r, o = !0, l = !1;
                    return {
                        s: function() {
                            i = i.call(e);
                        },
                        n: function() {
                            var e = i.next();
                            return o = e.done, e;
                        },
                        e: function(e) {
                            l = !0, r = e;
                        },
                        f: function() {
                            try {
                                o || null == i.return || i.return();
                            } finally {
                                if (l) throw r;
                            }
                        }
                    };
                }
                function f(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var i = 0, a = new Array(t); i < t; i++) a[i] = e[i];
                    return a;
                }
                var d = {
                    keydownEvent: function(e) {
                        var t = this.inputmask, i = t.opts, a = t.dependencyLib, c = t.maskset, f = this, d = a(f), p = e.keyCode, h = n.caret.call(t, f), v = i.onKeyDown.call(this, e, n.getBuffer.call(t), h, i);
                        if (void 0 !== v) return v;
                        if (p === r.default.BACKSPACE || p === r.default.DELETE || o.iphone && p === r.default.BACKSPACE_SAFARI || e.ctrlKey && p === r.default.X && !("oncut" in f)) e.preventDefault(), 
                        l.handleRemove.call(t, f, p, h), (0, s.writeBuffer)(f, n.getBuffer.call(t, !0), c.p, e, f.inputmask._valueGet() !== n.getBuffer.call(t).join("")); else if (p === r.default.END || p === r.default.PAGE_DOWN) {
                            e.preventDefault();
                            var m = n.seekNext.call(t, n.getLastValidPosition.call(t));
                            n.caret.call(t, f, e.shiftKey ? h.begin : m, m, !0);
                        } else p === r.default.HOME && !e.shiftKey || p === r.default.PAGE_UP ? (e.preventDefault(), 
                        n.caret.call(t, f, 0, e.shiftKey ? h.begin : 0, !0)) : i.undoOnEscape && p === r.default.ESCAPE && !0 !== e.altKey ? ((0, 
                        s.checkVal)(f, !0, !1, t.undoValue.split("")), d.trigger("click")) : p !== r.default.INSERT || e.shiftKey || e.ctrlKey || void 0 !== t.userOptions.insertMode ? !0 === i.tabThrough && p === r.default.TAB ? !0 === e.shiftKey ? (h.end = n.seekPrevious.call(t, h.end, !0), 
                        !0 === u.getTest.call(t, h.end - 1).match.static && h.end--, h.begin = n.seekPrevious.call(t, h.end, !0), 
                        h.begin >= 0 && h.end > 0 && (e.preventDefault(), n.caret.call(t, f, h.begin, h.end))) : (h.begin = n.seekNext.call(t, h.begin, !0), 
                        h.end = n.seekNext.call(t, h.begin, !0), h.end < c.maskLength && h.end--, h.begin <= c.maskLength && (e.preventDefault(), 
                        n.caret.call(t, f, h.begin, h.end))) : e.shiftKey || i.insertModeVisual && !1 === i.insertMode && (p === r.default.RIGHT ? setTimeout((function() {
                            var e = n.caret.call(t, f);
                            n.caret.call(t, f, e.begin);
                        }), 0) : p === r.default.LEFT && setTimeout((function() {
                            var e = n.translatePosition.call(t, f.inputmask.caretPos.begin);
                            n.translatePosition.call(t, f.inputmask.caretPos.end);
                            t.isRTL ? n.caret.call(t, f, e + (e === c.maskLength ? 0 : 1)) : n.caret.call(t, f, e - (0 === e ? 0 : 1));
                        }), 0)) : l.isSelection.call(t, h) ? i.insertMode = !i.insertMode : (i.insertMode = !i.insertMode, 
                        n.caret.call(t, f, h.begin, h.begin));
                        t.ignorable = i.ignorables.includes(p);
                    },
                    keypressEvent: function(e, t, i, a, o) {
                        var u = this.inputmask || this, c = u.opts, f = u.dependencyLib, d = u.maskset, p = u.el, h = f(p), v = e.keyCode;
                        if (!(!0 === t || e.ctrlKey && e.altKey) && (e.ctrlKey || e.metaKey || u.ignorable)) return v === r.default.ENTER && u.undoValue !== u._valueGet(!0) && (u.undoValue = u._valueGet(!0), 
                        setTimeout((function() {
                            h.trigger("change");
                        }), 0)), u.skipInputEvent = !0, !0;
                        if (v) {
                            44 !== v && 46 !== v || 3 !== e.location || "" === c.radixPoint || (v = c.radixPoint.charCodeAt(0));
                            var m, g = t ? {
                                begin: o,
                                end: o
                            } : n.caret.call(u, p), k = String.fromCharCode(v);
                            k = c.substitutes[k] || k, d.writeOutBuffer = !0;
                            var y = l.isValid.call(u, g, k, a, void 0, void 0, void 0, t);
                            if (!1 !== y && (n.resetMaskSet.call(u, !0), m = void 0 !== y.caret ? y.caret : n.seekNext.call(u, y.pos.begin ? y.pos.begin : y.pos), 
                            d.p = m), m = c.numericInput && void 0 === y.caret ? n.seekPrevious.call(u, m) : m, 
                            !1 !== i && (setTimeout((function() {
                                c.onKeyValidation.call(p, v, y);
                            }), 0), d.writeOutBuffer && !1 !== y)) {
                                var b = n.getBuffer.call(u);
                                (0, s.writeBuffer)(p, b, m, e, !0 !== t);
                            }
                            if (e.preventDefault(), t) return !1 !== y && (y.forwardPosition = m), y;
                        }
                    },
                    keyupEvent: function(e) {
                        var t = this.inputmask;
                        !t.isComposing || e.keyCode !== r.default.KEY_229 && e.keyCode !== r.default.ENTER || t.$el.trigger("input");
                    },
                    pasteEvent: function(e) {
                        var t, i = this.inputmask, a = i.opts, r = i._valueGet(!0), o = n.caret.call(i, this);
                        i.isRTL && (t = o.end, o.end = n.translatePosition.call(i, o.begin), o.begin = n.translatePosition.call(i, t));
                        var l = r.substr(0, o.begin), u = r.substr(o.end, r.length);
                        if (l == (i.isRTL ? n.getBufferTemplate.call(i).slice().reverse() : n.getBufferTemplate.call(i)).slice(0, o.begin).join("") && (l = ""), 
                        u == (i.isRTL ? n.getBufferTemplate.call(i).slice().reverse() : n.getBufferTemplate.call(i)).slice(o.end).join("") && (u = ""), 
                        window.clipboardData && window.clipboardData.getData) r = l + window.clipboardData.getData("Text") + u; else {
                            if (!e.clipboardData || !e.clipboardData.getData) return !0;
                            r = l + e.clipboardData.getData("text/plain") + u;
                        }
                        var f = r;
                        if (i.isRTL) {
                            f = f.split("");
                            var d, p = c(n.getBufferTemplate.call(i));
                            try {
                                for (p.s(); !(d = p.n()).done; ) {
                                    var h = d.value;
                                    f[0] === h && f.shift();
                                }
                            } catch (e) {
                                p.e(e);
                            } finally {
                                p.f();
                            }
                            f = f.join("");
                        }
                        if ("function" == typeof a.onBeforePaste) {
                            if (!1 === (f = a.onBeforePaste.call(i, f, a))) return !1;
                            f || (f = r);
                        }
                        (0, s.checkVal)(this, !0, !1, f.toString().split(""), e), e.preventDefault();
                    },
                    inputFallBackEvent: function(e) {
                        var t = this.inputmask, i = t.opts, a = t.dependencyLib;
                        var l = this, c = l.inputmask._valueGet(!0), f = (t.isRTL ? n.getBuffer.call(t).slice().reverse() : n.getBuffer.call(t)).join(""), p = n.caret.call(t, l, void 0, void 0, !0);
                        if (f !== c) {
                            c = function(e, i, a) {
                                if (o.iemobile) {
                                    var r = i.replace(n.getBuffer.call(t).join(""), "");
                                    if (1 === r.length) {
                                        var l = i.split("");
                                        l.splice(a.begin, 0, r), i = l.join("");
                                    }
                                }
                                return i;
                            }(0, c, p);
                            var h = function(e, a, r) {
                                for (var o, l, s, c = e.substr(0, r.begin).split(""), f = e.substr(r.begin).split(""), d = a.substr(0, r.begin).split(""), p = a.substr(r.begin).split(""), h = c.length >= d.length ? c.length : d.length, v = f.length >= p.length ? f.length : p.length, m = "", g = [], k = "~"; c.length < h; ) c.push(k);
                                for (;d.length < h; ) d.push(k);
                                for (;f.length < v; ) f.unshift(k);
                                for (;p.length < v; ) p.unshift(k);
                                var y = c.concat(f), b = d.concat(p);
                                for (l = 0, o = y.length; l < o; l++) switch (s = u.getPlaceholder.call(t, n.translatePosition.call(t, l)), 
                                m) {
                                  case "insertText":
                                    b[l - 1] === y[l] && r.begin == y.length - 1 && g.push(y[l]), l = o;
                                    break;

                                  case "insertReplacementText":
                                  case "deleteContentBackward":
                                    y[l] === k ? r.end++ : l = o;
                                    break;

                                  default:
                                    y[l] !== b[l] && (y[l + 1] !== k && y[l + 1] !== s && void 0 !== y[l + 1] || (b[l] !== s || b[l + 1] !== k) && b[l] !== k ? b[l + 1] === k && b[l] === y[l + 1] ? (m = "insertText", 
                                    g.push(y[l]), r.begin--, r.end--) : y[l] !== s && y[l] !== k && (y[l + 1] === k || b[l] !== y[l] && b[l + 1] === y[l + 1]) ? (m = "insertReplacementText", 
                                    g.push(y[l]), r.begin--) : y[l] === k ? (m = "deleteContentBackward", (n.isMask.call(t, n.translatePosition.call(t, l), !0) || b[l] === i.radixPoint) && r.end++) : l = o : (m = "insertText", 
                                    g.push(y[l]), r.begin--, r.end--));
                                }
                                return {
                                    action: m,
                                    data: g,
                                    caret: r
                                };
                            }(c, f, p);
                            switch ((l.inputmask.shadowRoot || l.ownerDocument).activeElement !== l && l.focus(), 
                            (0, s.writeBuffer)(l, n.getBuffer.call(t)), n.caret.call(t, l, p.begin, p.end, !0), 
                            h.action) {
                              case "insertText":
                              case "insertReplacementText":
                                h.data.forEach((function(e, i) {
                                    var n = new a.Event("keypress");
                                    n.keyCode = e.charCodeAt(0), t.ignorable = !1, d.keypressEvent.call(l, n);
                                })), setTimeout((function() {
                                    t.$el.trigger("keyup");
                                }), 0);
                                break;

                              case "deleteContentBackward":
                                var v = new a.Event("keydown");
                                v.keyCode = r.default.BACKSPACE, d.keydownEvent.call(l, v);
                                break;

                              default:
                                (0, s.applyInputValue)(l, c);
                            }
                            e.preventDefault();
                        }
                    },
                    compositionendEvent: function(e) {
                        var t = this.inputmask;
                        t.isComposing = !1, t.$el.trigger("input");
                    },
                    setValueEvent: function(e) {
                        var t = this.inputmask, i = this, a = e && e.detail ? e.detail[0] : arguments[1];
                        void 0 === a && (a = i.inputmask._valueGet(!0)), (0, s.applyInputValue)(i, a), (e.detail && void 0 !== e.detail[1] || void 0 !== arguments[2]) && n.caret.call(t, i, e.detail ? e.detail[1] : arguments[2]);
                    },
                    focusEvent: function(e) {
                        var t = this.inputmask, i = t.opts, a = this, r = a.inputmask._valueGet();
                        i.showMaskOnFocus && r !== n.getBuffer.call(t).join("") && (0, s.writeBuffer)(a, n.getBuffer.call(t), n.seekNext.call(t, n.getLastValidPosition.call(t))), 
                        !0 !== i.positionCaretOnTab || !1 !== t.mouseEnter || l.isComplete.call(t, n.getBuffer.call(t)) && -1 !== n.getLastValidPosition.call(t) || d.clickEvent.apply(a, [ e, !0 ]), 
                        t.undoValue = t._valueGet(!0);
                    },
                    invalidEvent: function(e) {
                        this.inputmask.validationEvent = !0;
                    },
                    mouseleaveEvent: function() {
                        var e = this.inputmask, t = e.opts, i = this;
                        e.mouseEnter = !1, t.clearMaskOnLostFocus && (i.inputmask.shadowRoot || i.ownerDocument).activeElement !== i && (0, 
                        s.HandleNativePlaceholder)(i, e.originalPlaceholder);
                    },
                    clickEvent: function(e, t) {
                        var i = this.inputmask, a = this;
                        if ((a.inputmask.shadowRoot || a.ownerDocument).activeElement === a) {
                            var r = n.determineNewCaretPosition.call(i, n.caret.call(i, a), t);
                            void 0 !== r && n.caret.call(i, a, r);
                        }
                    },
                    cutEvent: function(e) {
                        var t = this.inputmask, i = t.maskset, a = this, o = n.caret.call(t, a), u = t.isRTL ? n.getBuffer.call(t).slice(o.end, o.begin) : n.getBuffer.call(t).slice(o.begin, o.end), c = t.isRTL ? u.reverse().join("") : u.join("");
                        window.navigator.clipboard ? window.navigator.clipboard.writeText(c) : window.clipboardData && window.clipboardData.getData && window.clipboardData.setData("Text", c), 
                        l.handleRemove.call(t, a, r.default.DELETE, o), (0, s.writeBuffer)(a, n.getBuffer.call(t), i.p, e, t.undoValue !== t._valueGet(!0));
                    },
                    blurEvent: function(e) {
                        var t = this.inputmask, i = t.opts, a = (0, t.dependencyLib)(this), r = this;
                        if (r.inputmask) {
                            (0, s.HandleNativePlaceholder)(r, t.originalPlaceholder);
                            var o = r.inputmask._valueGet(), u = n.getBuffer.call(t).slice();
                            "" !== o && (i.clearMaskOnLostFocus && (-1 === n.getLastValidPosition.call(t) && o === n.getBufferTemplate.call(t).join("") ? u = [] : s.clearOptionalTail.call(t, u)), 
                            !1 === l.isComplete.call(t, u) && (setTimeout((function() {
                                a.trigger("incomplete");
                            }), 0), i.clearIncomplete && (n.resetMaskSet.call(t), u = i.clearMaskOnLostFocus ? [] : n.getBufferTemplate.call(t).slice())), 
                            (0, s.writeBuffer)(r, u, void 0, e)), t.undoValue !== t._valueGet(!0) && (t.undoValue = t._valueGet(!0), 
                            a.trigger("change"));
                        }
                    },
                    mouseenterEvent: function() {
                        var e = this.inputmask, t = e.opts, i = this;
                        if (e.mouseEnter = !0, (i.inputmask.shadowRoot || i.ownerDocument).activeElement !== i) {
                            var a = (e.isRTL ? n.getBufferTemplate.call(e).slice().reverse() : n.getBufferTemplate.call(e)).join("");
                            e.placeholder !== a && i.placeholder !== e.originalPlaceholder && (e.originalPlaceholder = i.placeholder), 
                            t.showMaskOnHover && (0, s.HandleNativePlaceholder)(i, a);
                        }
                    },
                    submitEvent: function() {
                        var e = this.inputmask, t = e.opts;
                        e.undoValue !== e._valueGet(!0) && e.$el.trigger("change"), -1 === n.getLastValidPosition.call(e) && e._valueGet && e._valueGet() === n.getBufferTemplate.call(e).join("") && e._valueSet(""), 
                        t.clearIncomplete && !1 === l.isComplete.call(e, n.getBuffer.call(e)) && e._valueSet(""), 
                        t.removeMaskOnSubmit && (e._valueSet(e.unmaskedvalue(), !0), setTimeout((function() {
                            (0, s.writeBuffer)(e.el, n.getBuffer.call(e));
                        }), 0));
                    },
                    resetEvent: function() {
                        var e = this.inputmask;
                        e.refreshValue = !0, setTimeout((function() {
                            (0, s.applyInputValue)(e.el, e._valueGet(!0));
                        }), 0);
                    }
                };
                t.EventHandlers = d;
            },
            9716: function(e, t, i) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.EventRuler = void 0;
                var a = l(i(2394)), n = l(i(5581)), r = i(8711), o = i(7760);
                function l(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                }
                var s = {
                    on: function(e, t, i) {
                        var l = e.inputmask.dependencyLib, s = function(t) {
                            t.originalEvent && (t = t.originalEvent || t, arguments[0] = t);
                            var s, u = this, c = u.inputmask, f = c ? c.opts : void 0;
                            if (void 0 === c && "FORM" !== this.nodeName) {
                                var d = l.data(u, "_inputmask_opts");
                                l(u).off(), d && new a.default(d).mask(u);
                            } else {
                                if ([ "submit", "reset", "setvalue" ].includes(t.type) || "FORM" === this.nodeName || !(u.disabled || u.readOnly && !("keydown" === t.type && t.ctrlKey && 67 === t.keyCode || !1 === f.tabThrough && t.keyCode === n.default.TAB))) {
                                    switch (t.type) {
                                      case "input":
                                        if (!0 === c.skipInputEvent || t.inputType && "insertCompositionText" === t.inputType) return c.skipInputEvent = !1, 
                                        t.preventDefault();
                                        break;

                                      case "keydown":
                                        c.skipKeyPressEvent = !1, c.skipInputEvent = c.isComposing = t.keyCode === n.default.KEY_229;
                                        break;

                                      case "keyup":
                                      case "compositionend":
                                        c.isComposing && (c.skipInputEvent = !1);
                                        break;

                                      case "keypress":
                                        if (!0 === c.skipKeyPressEvent) return t.preventDefault();
                                        c.skipKeyPressEvent = !0;
                                        break;

                                      case "click":
                                      case "focus":
                                        return c.validationEvent ? (c.validationEvent = !1, e.blur(), (0, o.HandleNativePlaceholder)(e, (c.isRTL ? r.getBufferTemplate.call(c).slice().reverse() : r.getBufferTemplate.call(c)).join("")), 
                                        setTimeout((function() {
                                            e.focus();
                                        }), f.validationEventTimeOut), !1) : (s = arguments, setTimeout((function() {
                                            e.inputmask && i.apply(u, s);
                                        }), 0), !1);
                                    }
                                    var p = i.apply(u, arguments);
                                    return !1 === p && (t.preventDefault(), t.stopPropagation()), p;
                                }
                                t.preventDefault();
                            }
                        };
                        [ "submit", "reset" ].includes(t) ? (s = s.bind(e), null !== e.form && l(e.form).on(t, s)) : l(e).on(t, s), 
                        e.inputmask.events[t] = e.inputmask.events[t] || [], e.inputmask.events[t].push(s);
                    },
                    off: function(e, t) {
                        if (e.inputmask && e.inputmask.events) {
                            var i = e.inputmask.dependencyLib, a = e.inputmask.events;
                            for (var n in t && ((a = [])[t] = e.inputmask.events[t]), a) {
                                for (var r = a[n]; r.length > 0; ) {
                                    var o = r.pop();
                                    [ "submit", "reset" ].includes(n) ? null !== e.form && i(e.form).off(n, o) : i(e).off(n, o);
                                }
                                delete e.inputmask.events[n];
                            }
                        }
                    }
                };
                t.EventRuler = s;
            },
            219: function(e, t, i) {
                var a = d(i(2394)), n = d(i(5581)), r = d(i(7184)), o = i(8711), l = i(4713);
                function s(e) {
                    return s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e;
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                    }, s(e);
                }
                function u(e, t) {
                    return function(e) {
                        if (Array.isArray(e)) return e;
                    }(e) || function(e, t) {
                        var i = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                        if (null == i) return;
                        var a, n, r = [], o = !0, l = !1;
                        try {
                            for (i = i.call(e); !(o = (a = i.next()).done) && (r.push(a.value), !t || r.length !== t); o = !0) ;
                        } catch (e) {
                            l = !0, n = e;
                        } finally {
                            try {
                                o || null == i.return || i.return();
                            } finally {
                                if (l) throw n;
                            }
                        }
                        return r;
                    }(e, t) || function(e, t) {
                        if (!e) return;
                        if ("string" == typeof e) return c(e, t);
                        var i = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === i && e.constructor && (i = e.constructor.name);
                        if ("Map" === i || "Set" === i) return Array.from(e);
                        if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return c(e, t);
                    }(e, t) || function() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    }();
                }
                function c(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var i = 0, a = new Array(t); i < t; i++) a[i] = e[i];
                    return a;
                }
                function f(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var a = t[i];
                        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), 
                        Object.defineProperty(e, a.key, a);
                    }
                }
                function d(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                }
                var p = a.default.dependencyLib, h = function() {
                    function e(t, i, a) {
                        !function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                        }(this, e), this.mask = t, this.format = i, this.opts = a, this._date = new Date(1, 0, 1), 
                        this.initDateObject(t, this.opts);
                    }
                    var t, i, a;
                    return t = e, (i = [ {
                        key: "date",
                        get: function() {
                            return void 0 === this._date && (this._date = new Date(1, 0, 1), this.initDateObject(void 0, this.opts)), 
                            this._date;
                        }
                    }, {
                        key: "initDateObject",
                        value: function(e, t) {
                            var i;
                            for (P(t).lastIndex = 0; i = P(t).exec(this.format); ) {
                                var a = new RegExp("\\d+$").exec(i[0]), n = a ? i[0][0] + "x" : i[0], r = void 0;
                                if (void 0 !== e) {
                                    if (a) {
                                        var o = P(t).lastIndex, l = O(i.index, t);
                                        P(t).lastIndex = o, r = e.slice(0, e.indexOf(l.nextMatch[0]));
                                    } else r = e.slice(0, n.length);
                                    e = e.slice(r.length);
                                }
                                Object.prototype.hasOwnProperty.call(g, n) && this.setValue(this, r, n, g[n][2], g[n][1]);
                            }
                        }
                    }, {
                        key: "setValue",
                        value: function(e, t, i, a, n) {
                            if (void 0 !== t && (e[a] = "ampm" === a ? t : t.replace(/[^0-9]/g, "0"), e["raw" + a] = t.replace(/\s/g, "_")), 
                            void 0 !== n) {
                                var r = e[a];
                                ("day" === a && 29 === parseInt(r) || "month" === a && 2 === parseInt(r)) && (29 !== parseInt(e.day) || 2 !== parseInt(e.month) || "" !== e.year && void 0 !== e.year || e._date.setFullYear(2012, 1, 29)), 
                                "day" === a && (m = !0, 0 === parseInt(r) && (r = 1)), "month" === a && (m = !0), 
                                "year" === a && (m = !0, r.length < 4 && (r = _(r, 4, !0))), "" === r || isNaN(r) || n.call(e._date, r), 
                                "ampm" === a && n.call(e._date, r);
                            }
                        }
                    }, {
                        key: "reset",
                        value: function() {
                            this._date = new Date(1, 0, 1);
                        }
                    }, {
                        key: "reInit",
                        value: function() {
                            this._date = void 0, this.date;
                        }
                    } ]) && f(t.prototype, i), a && f(t, a), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), e;
                }(), v = (new Date).getFullYear(), m = !1, g = {
                    d: [ "[1-9]|[12][0-9]|3[01]", Date.prototype.setDate, "day", Date.prototype.getDate ],
                    dd: [ "0[1-9]|[12][0-9]|3[01]", Date.prototype.setDate, "day", function() {
                        return _(Date.prototype.getDate.call(this), 2);
                    } ],
                    ddd: [ "" ],
                    dddd: [ "" ],
                    m: [ "[1-9]|1[012]", function(e) {
                        var t = e ? parseInt(e) : 0;
                        return t > 0 && t--, Date.prototype.setMonth.call(this, t);
                    }, "month", function() {
                        return Date.prototype.getMonth.call(this) + 1;
                    } ],
                    mm: [ "0[1-9]|1[012]", function(e) {
                        var t = e ? parseInt(e) : 0;
                        return t > 0 && t--, Date.prototype.setMonth.call(this, t);
                    }, "month", function() {
                        return _(Date.prototype.getMonth.call(this) + 1, 2);
                    } ],
                    mmm: [ "" ],
                    mmmm: [ "" ],
                    yy: [ "[0-9]{2}", Date.prototype.setFullYear, "year", function() {
                        return _(Date.prototype.getFullYear.call(this), 2);
                    } ],
                    yyyy: [ "[0-9]{4}", Date.prototype.setFullYear, "year", function() {
                        return _(Date.prototype.getFullYear.call(this), 4);
                    } ],
                    h: [ "[1-9]|1[0-2]", Date.prototype.setHours, "hours", Date.prototype.getHours ],
                    hh: [ "0[1-9]|1[0-2]", Date.prototype.setHours, "hours", function() {
                        return _(Date.prototype.getHours.call(this), 2);
                    } ],
                    hx: [ function(e) {
                        return "[0-9]{".concat(e, "}");
                    }, Date.prototype.setHours, "hours", function(e) {
                        return Date.prototype.getHours;
                    } ],
                    H: [ "1?[0-9]|2[0-3]", Date.prototype.setHours, "hours", Date.prototype.getHours ],
                    HH: [ "0[0-9]|1[0-9]|2[0-3]", Date.prototype.setHours, "hours", function() {
                        return _(Date.prototype.getHours.call(this), 2);
                    } ],
                    Hx: [ function(e) {
                        return "[0-9]{".concat(e, "}");
                    }, Date.prototype.setHours, "hours", function(e) {
                        return function() {
                            return _(Date.prototype.getHours.call(this), e);
                        };
                    } ],
                    M: [ "[1-5]?[0-9]", Date.prototype.setMinutes, "minutes", Date.prototype.getMinutes ],
                    MM: [ "0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]", Date.prototype.setMinutes, "minutes", function() {
                        return _(Date.prototype.getMinutes.call(this), 2);
                    } ],
                    s: [ "[1-5]?[0-9]", Date.prototype.setSeconds, "seconds", Date.prototype.getSeconds ],
                    ss: [ "0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]", Date.prototype.setSeconds, "seconds", function() {
                        return _(Date.prototype.getSeconds.call(this), 2);
                    } ],
                    l: [ "[0-9]{3}", Date.prototype.setMilliseconds, "milliseconds", function() {
                        return _(Date.prototype.getMilliseconds.call(this), 3);
                    } ],
                    L: [ "[0-9]{2}", Date.prototype.setMilliseconds, "milliseconds", function() {
                        return _(Date.prototype.getMilliseconds.call(this), 2);
                    } ],
                    t: [ "[ap]", y, "ampm", b, 1 ],
                    tt: [ "[ap]m", y, "ampm", b, 2 ],
                    T: [ "[AP]", y, "ampm", b, 1 ],
                    TT: [ "[AP]M", y, "ampm", b, 2 ],
                    Z: [ ".*", void 0, "Z", function() {
                        var e = this.toString().match(/\((.+)\)/)[1];
                        e.includes(" ") && (e = (e = e.replace("-", " ").toUpperCase()).split(" ").map((function(e) {
                            return u(e, 1)[0];
                        })).join(""));
                        return e;
                    } ],
                    o: [ "" ],
                    S: [ "" ]
                }, k = {
                    isoDate: "yyyy-mm-dd",
                    isoTime: "HH:MM:ss",
                    isoDateTime: "yyyy-mm-dd'T'HH:MM:ss",
                    isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
                };
                function y(e) {
                    var t = this.getHours();
                    e.toLowerCase().includes("p") ? this.setHours(t + 12) : e.toLowerCase().includes("a") && t >= 12 && this.setHours(t - 12);
                }
                function b() {
                    var e = this.getHours();
                    return (e = e || 12) >= 12 ? "PM" : "AM";
                }
                function x(e) {
                    var t = new RegExp("\\d+$").exec(e[0]);
                    if (t && void 0 !== t[0]) {
                        var i = g[e[0][0] + "x"].slice("");
                        return i[0] = i[0](t[0]), i[3] = i[3](t[0]), i;
                    }
                    if (g[e[0]]) return g[e[0]];
                }
                function P(e) {
                    if (!e.tokenizer) {
                        var t = [], i = [];
                        for (var a in g) if (/\.*x$/.test(a)) {
                            var n = a[0] + "\\d+";
                            -1 === i.indexOf(n) && i.push(n);
                        } else -1 === t.indexOf(a[0]) && t.push(a[0]);
                        e.tokenizer = "(" + (i.length > 0 ? i.join("|") + "|" : "") + t.join("+|") + ")+?|.", 
                        e.tokenizer = new RegExp(e.tokenizer, "g");
                    }
                    return e.tokenizer;
                }
                function E(e, t, i) {
                    if (!m) return !0;
                    if (void 0 === e.rawday || !isFinite(e.rawday) && new Date(e.date.getFullYear(), isFinite(e.rawmonth) ? e.month : e.date.getMonth() + 1, 0).getDate() >= e.day || "29" == e.day && (!isFinite(e.rawyear) || void 0 === e.rawyear || "" === e.rawyear) || new Date(e.date.getFullYear(), isFinite(e.rawmonth) ? e.month : e.date.getMonth() + 1, 0).getDate() >= e.day) return t;
                    if ("29" == e.day) {
                        var a = O(t.pos, i);
                        if ("yyyy" === a.targetMatch[0] && t.pos - a.targetMatchIndex == 2) return t.remove = t.pos + 1, 
                        t;
                    } else if ("02" == e.month && "30" == e.day && void 0 !== t.c) return e.day = "03", 
                    e.date.setDate(3), e.date.setMonth(1), t.insert = [ {
                        pos: t.pos,
                        c: "0"
                    }, {
                        pos: t.pos + 1,
                        c: t.c
                    } ], t.caret = o.seekNext.call(this, t.pos + 1), t;
                    return !1;
                }
                function S(e, t, i, a) {
                    var n, o, l = "";
                    for (P(i).lastIndex = 0; n = P(i).exec(e); ) {
                        if (void 0 === t) if (o = x(n)) l += "(" + o[0] + ")"; else switch (n[0]) {
                          case "[":
                            l += "(";
                            break;

                          case "]":
                            l += ")?";
                            break;

                          default:
                            l += (0, r.default)(n[0]);
                        } else if (o = x(n)) if (!0 !== a && o[3]) l += o[3].call(t.date); else o[2] ? l += t["raw" + o[2]] : l += n[0]; else l += n[0];
                    }
                    return l;
                }
                function _(e, t, i) {
                    for (e = String(e), t = t || 2; e.length < t; ) e = i ? e + "0" : "0" + e;
                    return e;
                }
                function w(e, t, i) {
                    return "string" == typeof e ? new h(e, t, i) : e && "object" === s(e) && Object.prototype.hasOwnProperty.call(e, "date") ? e : void 0;
                }
                function M(e, t) {
                    return S(t.inputFormat, {
                        date: e
                    }, t);
                }
                function O(e, t) {
                    var i, a, n = 0, r = 0;
                    for (P(t).lastIndex = 0; a = P(t).exec(t.inputFormat); ) {
                        var o = new RegExp("\\d+$").exec(a[0]);
                        if ((n += r = o ? parseInt(o[0]) : a[0].length) >= e + 1) {
                            i = a, a = P(t).exec(t.inputFormat);
                            break;
                        }
                    }
                    return {
                        targetMatchIndex: n - r,
                        nextMatch: a,
                        targetMatch: i
                    };
                }
                a.default.extendAliases({
                    datetime: {
                        mask: function(e) {
                            return e.numericInput = !1, g.S = e.i18n.ordinalSuffix.join("|"), e.inputFormat = k[e.inputFormat] || e.inputFormat, 
                            e.displayFormat = k[e.displayFormat] || e.displayFormat || e.inputFormat, e.outputFormat = k[e.outputFormat] || e.outputFormat || e.inputFormat, 
                            e.placeholder = "" !== e.placeholder ? e.placeholder : e.inputFormat.replace(/[[\]]/, ""), 
                            e.regex = S(e.inputFormat, void 0, e), e.min = w(e.min, e.inputFormat, e), e.max = w(e.max, e.inputFormat, e), 
                            null;
                        },
                        placeholder: "",
                        inputFormat: "isoDateTime",
                        displayFormat: null,
                        outputFormat: null,
                        min: null,
                        max: null,
                        skipOptionalPartCharacter: "",
                        i18n: {
                            dayNames: [ "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" ],
                            monthNames: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ],
                            ordinalSuffix: [ "st", "nd", "rd", "th" ]
                        },
                        preValidation: function(e, t, i, a, n, r, o, l) {
                            if (l) return !0;
                            if (isNaN(i) && e[t] !== i) {
                                var s = O(t, n);
                                if (s.nextMatch && s.nextMatch[0] === i && s.targetMatch[0].length > 1) {
                                    var u = g[s.targetMatch[0]][0];
                                    if (new RegExp(u).test("0" + e[t - 1])) return e[t] = e[t - 1], e[t - 1] = "0", 
                                    {
                                        fuzzy: !0,
                                        buffer: e,
                                        refreshFromBuffer: {
                                            start: t - 1,
                                            end: t + 1
                                        },
                                        pos: t + 1
                                    };
                                }
                            }
                            return !0;
                        },
                        postValidation: function(e, t, i, a, n, r, o, s) {
                            var u, c;
                            if (o) return !0;
                            if (!1 === a && (((u = O(t + 1, n)).targetMatch && u.targetMatchIndex === t && u.targetMatch[0].length > 1 && void 0 !== g[u.targetMatch[0]] || (u = O(t + 2, n)).targetMatch && u.targetMatchIndex === t + 1 && u.targetMatch[0].length > 1 && void 0 !== g[u.targetMatch[0]]) && (c = g[u.targetMatch[0]][0]), 
                            void 0 !== c && (void 0 !== r.validPositions[t + 1] && new RegExp(c).test(i + "0") ? (e[t] = i, 
                            e[t + 1] = "0", a = {
                                pos: t + 2,
                                caret: t
                            }) : new RegExp(c).test("0" + i) && (e[t] = "0", e[t + 1] = i, a = {
                                pos: t + 2
                            })), !1 === a)) return a;
                            if (a.fuzzy && (e = a.buffer, t = a.pos), (u = O(t, n)).targetMatch && u.targetMatch[0] && void 0 !== g[u.targetMatch[0]]) {
                                var f = g[u.targetMatch[0]];
                                c = f[0];
                                var d = e.slice(u.targetMatchIndex, u.targetMatchIndex + u.targetMatch[0].length);
                                if (!1 === new RegExp(c).test(d.join("")) && 2 === u.targetMatch[0].length && r.validPositions[u.targetMatchIndex] && r.validPositions[u.targetMatchIndex + 1] && (r.validPositions[u.targetMatchIndex + 1].input = "0"), 
                                "year" == f[2]) for (var p = l.getMaskTemplate.call(this, !1, 1, void 0, !0), h = t + 1; h < e.length; h++) e[h] = p[h], 
                                delete r.validPositions[h];
                            }
                            var m = a, k = w(e.join(""), n.inputFormat, n);
                            return m && k.date.getTime() == k.date.getTime() && (n.prefillYear && (m = function(e, t, i) {
                                if (e.year !== e.rawyear) {
                                    var a = v.toString(), n = e.rawyear.replace(/[^0-9]/g, ""), r = a.slice(0, n.length), o = a.slice(n.length);
                                    if (2 === n.length && n === r) {
                                        var l = new Date(v, e.month - 1, e.day);
                                        e.day == l.getDate() && (!i.max || i.max.date.getTime() >= l.getTime()) && (e.date.setFullYear(v), 
                                        e.year = a, t.insert = [ {
                                            pos: t.pos + 1,
                                            c: o[0]
                                        }, {
                                            pos: t.pos + 2,
                                            c: o[1]
                                        } ]);
                                    }
                                }
                                return t;
                            }(k, m, n)), m = function(e, t, i, a, n) {
                                if (!t) return t;
                                if (t && i.min && i.min.date.getTime() == i.min.date.getTime()) {
                                    var r;
                                    for (e.reset(), P(i).lastIndex = 0; r = P(i).exec(i.inputFormat); ) {
                                        var o;
                                        if ((o = x(r)) && o[3]) {
                                            for (var l = o[1], s = e[o[2]], u = i.min[o[2]], c = i.max ? i.max[o[2]] : u, f = [], d = !1, p = 0; p < u.length; p++) void 0 !== a.validPositions[p + r.index] || d ? (f[p] = s[p], 
                                            d = d || s[p] > u[p]) : (f[p] = u[p], "year" === o[2] && s.length - 1 == p && u != c && (f = (parseInt(f.join("")) + 1).toString().split("")), 
                                            "ampm" === o[2] && u != c && i.min.date.getTime() > e.date.getTime() && (f[p] = c[p]));
                                            l.call(e._date, f.join(""));
                                        }
                                    }
                                    t = i.min.date.getTime() <= e.date.getTime(), e.reInit();
                                }
                                return t && i.max && i.max.date.getTime() == i.max.date.getTime() && (t = i.max.date.getTime() >= e.date.getTime()), 
                                t;
                            }(k, m = E.call(this, k, m, n), n, r)), void 0 !== t && m && a.pos !== t ? {
                                buffer: S(n.inputFormat, k, n).split(""),
                                refreshFromBuffer: {
                                    start: t,
                                    end: a.pos
                                },
                                pos: a.caret || a.pos
                            } : m;
                        },
                        onKeyDown: function(e, t, i, a) {
                            e.ctrlKey && e.keyCode === n.default.RIGHT && (this.inputmask._valueSet(M(new Date, a)), 
                            p(this).trigger("setvalue"));
                        },
                        onUnMask: function(e, t, i) {
                            return t ? S(i.outputFormat, w(e, i.inputFormat, i), i, !0) : t;
                        },
                        casing: function(e, t, i, a) {
                            return 0 == t.nativeDef.indexOf("[ap]") ? e.toLowerCase() : 0 == t.nativeDef.indexOf("[AP]") ? e.toUpperCase() : e;
                        },
                        onBeforeMask: function(e, t) {
                            return "[object Date]" === Object.prototype.toString.call(e) && (e = M(e, t)), e;
                        },
                        insertMode: !1,
                        shiftPositions: !1,
                        keepStatic: !1,
                        inputmode: "numeric",
                        prefillYear: !0
                    }
                });
            },
            3851: function(e, t, i) {
                var a, n = (a = i(2394)) && a.__esModule ? a : {
                    default: a
                }, r = i(8711), o = i(4713);
                n.default.extendDefinitions({
                    A: {
                        validator: "[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",
                        casing: "upper"
                    },
                    "&": {
                        validator: "[0-9A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",
                        casing: "upper"
                    },
                    "#": {
                        validator: "[0-9A-Fa-f]",
                        casing: "upper"
                    }
                });
                var l = new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]");
                function s(e, t, i, a, n) {
                    return i - 1 > -1 && "." !== t.buffer[i - 1] ? (e = t.buffer[i - 1] + e, e = i - 2 > -1 && "." !== t.buffer[i - 2] ? t.buffer[i - 2] + e : "0" + e) : e = "00" + e, 
                    l.test(e);
                }
                n.default.extendAliases({
                    cssunit: {
                        regex: "[+-]?[0-9]+\\.?([0-9]+)?(px|em|rem|ex|%|in|cm|mm|pt|pc)"
                    },
                    url: {
                        regex: "(https?|ftp)://.*",
                        autoUnmask: !1,
                        keepStatic: !1,
                        tabThrough: !0
                    },
                    ip: {
                        mask: "i{1,3}.j{1,3}.k{1,3}.l{1,3}",
                        definitions: {
                            i: {
                                validator: s
                            },
                            j: {
                                validator: s
                            },
                            k: {
                                validator: s
                            },
                            l: {
                                validator: s
                            }
                        },
                        onUnMask: function(e, t, i) {
                            return e;
                        },
                        inputmode: "decimal",
                        substitutes: {
                            ",": "."
                        }
                    },
                    email: {
                        mask: function(e) {
                            var t = "*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]", i = t;
                            if (e.separator) for (var a = 0; a < e.quantifier; a++) i += "[".concat(e.separator).concat(t, "]");
                            return i;
                        },
                        greedy: !1,
                        casing: "lower",
                        separator: null,
                        quantifier: 5,
                        skipOptionalPartCharacter: "",
                        onBeforePaste: function(e, t) {
                            return (e = e.toLowerCase()).replace("mailto:", "");
                        },
                        definitions: {
                            "*": {
                                validator: "[0-9\uff11-\uff19A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5!#$%&'*+/=?^_`{|}~-]"
                            },
                            "-": {
                                validator: "[0-9A-Za-z-]"
                            }
                        },
                        onUnMask: function(e, t, i) {
                            return e;
                        },
                        inputmode: "email"
                    },
                    mac: {
                        mask: "##:##:##:##:##:##"
                    },
                    vin: {
                        mask: "V{13}9{4}",
                        definitions: {
                            V: {
                                validator: "[A-HJ-NPR-Za-hj-npr-z\\d]",
                                casing: "upper"
                            }
                        },
                        clearIncomplete: !0,
                        autoUnmask: !0
                    },
                    ssn: {
                        mask: "999-99-9999",
                        postValidation: function(e, t, i, a, n, l, s) {
                            var u = o.getMaskTemplate.call(this, !0, r.getLastValidPosition.call(this), !0, !0);
                            return /^(?!219-09-9999|078-05-1120)(?!666|000|9.{2}).{3}-(?!00).{2}-(?!0{4}).{4}$/.test(u.join(""));
                        }
                    }
                });
            },
            207: function(e, t, i) {
                var a = l(i(2394)), n = l(i(5581)), r = l(i(7184)), o = i(8711);
                function l(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                }
                var s = a.default.dependencyLib;
                function u(e, t) {
                    for (var i = "", n = 0; n < e.length; n++) a.default.prototype.definitions[e.charAt(n)] || t.definitions[e.charAt(n)] || t.optionalmarker[0] === e.charAt(n) || t.optionalmarker[1] === e.charAt(n) || t.quantifiermarker[0] === e.charAt(n) || t.quantifiermarker[1] === e.charAt(n) || t.groupmarker[0] === e.charAt(n) || t.groupmarker[1] === e.charAt(n) || t.alternatormarker === e.charAt(n) ? i += "\\" + e.charAt(n) : i += e.charAt(n);
                    return i;
                }
                function c(e, t, i, a) {
                    if (e.length > 0 && t > 0 && (!i.digitsOptional || a)) {
                        var n = e.indexOf(i.radixPoint), r = !1;
                        i.negationSymbol.back === e[e.length - 1] && (r = !0, e.length--), -1 === n && (e.push(i.radixPoint), 
                        n = e.length - 1);
                        for (var o = 1; o <= t; o++) isFinite(e[n + o]) || (e[n + o] = "0");
                    }
                    return r && e.push(i.negationSymbol.back), e;
                }
                function f(e, t) {
                    var i = 0;
                    if ("+" === e) {
                        for (i in t.validPositions) ;
                        i = o.seekNext.call(this, parseInt(i));
                    }
                    for (var a in t.tests) if ((a = parseInt(a)) >= i) for (var n = 0, r = t.tests[a].length; n < r; n++) if ((void 0 === t.validPositions[a] || "-" === e) && t.tests[a][n].match.def === e) return a + (void 0 !== t.validPositions[a] && "-" !== e ? 1 : 0);
                    return i;
                }
                function d(e, t) {
                    var i = -1;
                    for (var a in t.validPositions) {
                        var n = t.validPositions[a];
                        if (n && n.match.def === e) {
                            i = parseInt(a);
                            break;
                        }
                    }
                    return i;
                }
                function p(e, t, i, a, n) {
                    var r = t.buffer ? t.buffer.indexOf(n.radixPoint) : -1, o = (-1 !== r || a && n.jitMasking) && new RegExp(n.definitions[9].validator).test(e);
                    return n._radixDance && -1 !== r && o && null == t.validPositions[r] ? {
                        insert: {
                            pos: r === i ? r + 1 : r,
                            c: n.radixPoint
                        },
                        pos: i
                    } : o;
                }
                a.default.extendAliases({
                    numeric: {
                        mask: function(e) {
                            e.repeat = 0, e.groupSeparator === e.radixPoint && e.digits && "0" !== e.digits && ("." === e.radixPoint ? e.groupSeparator = "," : "," === e.radixPoint ? e.groupSeparator = "." : e.groupSeparator = ""), 
                            " " === e.groupSeparator && (e.skipOptionalPartCharacter = void 0), e.placeholder.length > 1 && (e.placeholder = e.placeholder.charAt(0)), 
                            "radixFocus" === e.positionCaretOnClick && "" === e.placeholder && (e.positionCaretOnClick = "lvp");
                            var t = "0", i = e.radixPoint;
                            !0 === e.numericInput && void 0 === e.__financeInput ? (t = "1", e.positionCaretOnClick = "radixFocus" === e.positionCaretOnClick ? "lvp" : e.positionCaretOnClick, 
                            e.digitsOptional = !1, isNaN(e.digits) && (e.digits = 2), e._radixDance = !1, i = "," === e.radixPoint ? "?" : "!", 
                            "" !== e.radixPoint && void 0 === e.definitions[i] && (e.definitions[i] = {}, e.definitions[i].validator = "[" + e.radixPoint + "]", 
                            e.definitions[i].placeholder = e.radixPoint, e.definitions[i].static = !0, e.definitions[i].generated = !0)) : (e.__financeInput = !1, 
                            e.numericInput = !0);
                            var a, n = "[+]";
                            if (n += u(e.prefix, e), "" !== e.groupSeparator ? (void 0 === e.definitions[e.groupSeparator] && (e.definitions[e.groupSeparator] = {}, 
                            e.definitions[e.groupSeparator].validator = "[" + e.groupSeparator + "]", e.definitions[e.groupSeparator].placeholder = e.groupSeparator, 
                            e.definitions[e.groupSeparator].static = !0, e.definitions[e.groupSeparator].generated = !0), 
                            n += e._mask(e)) : n += "9{+}", void 0 !== e.digits && 0 !== e.digits) {
                                var o = e.digits.toString().split(",");
                                isFinite(o[0]) && o[1] && isFinite(o[1]) ? n += i + t + "{" + e.digits + "}" : (isNaN(e.digits) || parseInt(e.digits) > 0) && (e.digitsOptional || e.jitMasking ? (a = n + i + t + "{0," + e.digits + "}", 
                                e.keepStatic = !0) : n += i + t + "{" + e.digits + "}");
                            } else e.inputmode = "numeric";
                            return n += u(e.suffix, e), n += "[-]", a && (n = [ a + u(e.suffix, e) + "[-]", n ]), 
                            e.greedy = !1, function(e) {
                                void 0 === e.parseMinMaxOptions && (null !== e.min && (e.min = e.min.toString().replace(new RegExp((0, 
                                r.default)(e.groupSeparator), "g"), ""), "," === e.radixPoint && (e.min = e.min.replace(e.radixPoint, ".")), 
                                e.min = isFinite(e.min) ? parseFloat(e.min) : NaN, isNaN(e.min) && (e.min = Number.MIN_VALUE)), 
                                null !== e.max && (e.max = e.max.toString().replace(new RegExp((0, r.default)(e.groupSeparator), "g"), ""), 
                                "," === e.radixPoint && (e.max = e.max.replace(e.radixPoint, ".")), e.max = isFinite(e.max) ? parseFloat(e.max) : NaN, 
                                isNaN(e.max) && (e.max = Number.MAX_VALUE)), e.parseMinMaxOptions = "done");
                            }(e), "" !== e.radixPoint && (e.substitutes["." == e.radixPoint ? "," : "."] = e.radixPoint), 
                            n;
                        },
                        _mask: function(e) {
                            return "(" + e.groupSeparator + "999){+|1}";
                        },
                        digits: "*",
                        digitsOptional: !0,
                        enforceDigitsOnBlur: !1,
                        radixPoint: ".",
                        positionCaretOnClick: "radixFocus",
                        _radixDance: !0,
                        groupSeparator: "",
                        allowMinus: !0,
                        negationSymbol: {
                            front: "-",
                            back: ""
                        },
                        prefix: "",
                        suffix: "",
                        min: null,
                        max: null,
                        SetMaxOnOverflow: !1,
                        step: 1,
                        inputType: "text",
                        unmaskAsNumber: !1,
                        roundingFN: Math.round,
                        inputmode: "decimal",
                        shortcuts: {
                            k: "1000",
                            m: "1000000"
                        },
                        placeholder: "0",
                        greedy: !1,
                        rightAlign: !0,
                        insertMode: !0,
                        autoUnmask: !1,
                        skipOptionalPartCharacter: "",
                        usePrototypeDefinitions: !1,
                        stripLeadingZeroes: !0,
                        definitions: {
                            0: {
                                validator: p
                            },
                            1: {
                                validator: p,
                                definitionSymbol: "9"
                            },
                            9: {
                                validator: "[0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]",
                                definitionSymbol: "*"
                            },
                            "+": {
                                validator: function(e, t, i, a, n) {
                                    return n.allowMinus && ("-" === e || e === n.negationSymbol.front);
                                }
                            },
                            "-": {
                                validator: function(e, t, i, a, n) {
                                    return n.allowMinus && e === n.negationSymbol.back;
                                }
                            }
                        },
                        preValidation: function(e, t, i, a, n, r, o, l) {
                            if (!1 !== n.__financeInput && i === n.radixPoint) return !1;
                            var s = e.indexOf(n.radixPoint), u = t;
                            if (t = function(e, t, i, a, n) {
                                return n._radixDance && n.numericInput && t !== n.negationSymbol.back && e <= i && (i > 0 || t == n.radixPoint) && (void 0 === a.validPositions[e - 1] || a.validPositions[e - 1].input !== n.negationSymbol.back) && (e -= 1), 
                                e;
                            }(t, i, s, r, n), "-" === i || i === n.negationSymbol.front) {
                                if (!0 !== n.allowMinus) return !1;
                                var c = !1, p = d("+", r), h = d("-", r);
                                return -1 !== p && (c = [ p, h ]), !1 !== c ? {
                                    remove: c,
                                    caret: u - n.negationSymbol.back.length
                                } : {
                                    insert: [ {
                                        pos: f.call(this, "+", r),
                                        c: n.negationSymbol.front,
                                        fromIsValid: !0
                                    }, {
                                        pos: f.call(this, "-", r),
                                        c: n.negationSymbol.back,
                                        fromIsValid: void 0
                                    } ],
                                    caret: u + n.negationSymbol.back.length
                                };
                            }
                            if (i === n.groupSeparator) return {
                                caret: u
                            };
                            if (l) return !0;
                            if (-1 !== s && !0 === n._radixDance && !1 === a && i === n.radixPoint && void 0 !== n.digits && (isNaN(n.digits) || parseInt(n.digits) > 0) && s !== t) return {
                                caret: n._radixDance && t === s - 1 ? s + 1 : s
                            };
                            if (!1 === n.__financeInput) if (a) {
                                if (n.digitsOptional) return {
                                    rewritePosition: o.end
                                };
                                if (!n.digitsOptional) {
                                    if (o.begin > s && o.end <= s) return i === n.radixPoint ? {
                                        insert: {
                                            pos: s + 1,
                                            c: "0",
                                            fromIsValid: !0
                                        },
                                        rewritePosition: s
                                    } : {
                                        rewritePosition: s + 1
                                    };
                                    if (o.begin < s) return {
                                        rewritePosition: o.begin - 1
                                    };
                                }
                            } else if (!n.showMaskOnHover && !n.showMaskOnFocus && !n.digitsOptional && n.digits > 0 && "" === this.__valueGet.call(this.el)) return {
                                rewritePosition: s
                            };
                            return {
                                rewritePosition: t
                            };
                        },
                        postValidation: function(e, t, i, a, n, r, o) {
                            if (!1 === a) return a;
                            if (o) return !0;
                            if (null !== n.min || null !== n.max) {
                                var l = n.onUnMask(e.slice().reverse().join(""), void 0, s.extend({}, n, {
                                    unmaskAsNumber: !0
                                }));
                                if (null !== n.min && l < n.min && (l.toString().length > n.min.toString().length || l < 0)) return !1;
                                if (null !== n.max && l > n.max) return !!n.SetMaxOnOverflow && {
                                    refreshFromBuffer: !0,
                                    buffer: c(n.max.toString().replace(".", n.radixPoint).split(""), n.digits, n).reverse()
                                };
                            }
                            return a;
                        },
                        onUnMask: function(e, t, i) {
                            if ("" === t && !0 === i.nullable) return t;
                            var a = e.replace(i.prefix, "");
                            return a = (a = a.replace(i.suffix, "")).replace(new RegExp((0, r.default)(i.groupSeparator), "g"), ""), 
                            "" !== i.placeholder.charAt(0) && (a = a.replace(new RegExp(i.placeholder.charAt(0), "g"), "0")), 
                            i.unmaskAsNumber ? ("" !== i.radixPoint && -1 !== a.indexOf(i.radixPoint) && (a = a.replace(r.default.call(this, i.radixPoint), ".")), 
                            a = (a = a.replace(new RegExp("^" + (0, r.default)(i.negationSymbol.front)), "-")).replace(new RegExp((0, 
                            r.default)(i.negationSymbol.back) + "$"), ""), Number(a)) : a;
                        },
                        isComplete: function(e, t) {
                            var i = (t.numericInput ? e.slice().reverse() : e).join("");
                            return i = (i = (i = (i = (i = i.replace(new RegExp("^" + (0, r.default)(t.negationSymbol.front)), "-")).replace(new RegExp((0, 
                            r.default)(t.negationSymbol.back) + "$"), "")).replace(t.prefix, "")).replace(t.suffix, "")).replace(new RegExp((0, 
                            r.default)(t.groupSeparator) + "([0-9]{3})", "g"), "$1"), "," === t.radixPoint && (i = i.replace((0, 
                            r.default)(t.radixPoint), ".")), isFinite(i);
                        },
                        onBeforeMask: function(e, t) {
                            var i = t.radixPoint || ",";
                            isFinite(t.digits) && (t.digits = parseInt(t.digits)), "number" != typeof e && "number" !== t.inputType || "" === i || (e = e.toString().replace(".", i));
                            var a = "-" === e.charAt(0) || e.charAt(0) === t.negationSymbol.front, n = e.split(i), o = n[0].replace(/[^\-0-9]/g, ""), l = n.length > 1 ? n[1].replace(/[^0-9]/g, "") : "", s = n.length > 1;
                            e = o + ("" !== l ? i + l : l);
                            var u = 0;
                            if ("" !== i && (u = t.digitsOptional ? t.digits < l.length ? t.digits : l.length : t.digits, 
                            "" !== l || !t.digitsOptional)) {
                                var f = Math.pow(10, u || 1);
                                e = e.replace((0, r.default)(i), "."), isNaN(parseFloat(e)) || (e = (t.roundingFN(parseFloat(e) * f) / f).toFixed(u)), 
                                e = e.toString().replace(".", i);
                            }
                            if (0 === t.digits && -1 !== e.indexOf(i) && (e = e.substring(0, e.indexOf(i))), 
                            null !== t.min || null !== t.max) {
                                var d = e.toString().replace(i, ".");
                                null !== t.min && d < t.min ? e = t.min.toString().replace(".", i) : null !== t.max && d > t.max && (e = t.max.toString().replace(".", i));
                            }
                            return a && "-" !== e.charAt(0) && (e = "-" + e), c(e.toString().split(""), u, t, s).join("");
                        },
                        onBeforeWrite: function(e, t, i, a) {
                            function n(e, t) {
                                if (!1 !== a.__financeInput || t) {
                                    var i = e.indexOf(a.radixPoint);
                                    -1 !== i && e.splice(i, 1);
                                }
                                if ("" !== a.groupSeparator) for (;-1 !== (i = e.indexOf(a.groupSeparator)); ) e.splice(i, 1);
                                return e;
                            }
                            var o, l;
                            if (a.stripLeadingZeroes && (l = function(e, t) {
                                var i = new RegExp("(^" + ("" !== t.negationSymbol.front ? (0, r.default)(t.negationSymbol.front) + "?" : "") + (0, 
                                r.default)(t.prefix) + ")(.*)(" + (0, r.default)(t.suffix) + ("" != t.negationSymbol.back ? (0, 
                                r.default)(t.negationSymbol.back) + "?" : "") + "$)").exec(e.slice().reverse().join("")), a = i ? i[2] : "", n = !1;
                                return a && (a = a.split(t.radixPoint.charAt(0))[0], n = new RegExp("^[0" + t.groupSeparator + "]*").exec(a)), 
                                !(!n || !(n[0].length > 1 || n[0].length > 0 && n[0].length < a.length)) && n;
                            }(t, a))) for (var u = t.join("").lastIndexOf(l[0].split("").reverse().join("")) - (l[0] == l.input ? 0 : 1), f = l[0] == l.input ? 1 : 0, d = l[0].length - f; d > 0; d--) delete this.maskset.validPositions[u + d], 
                            delete t[u + d];
                            if (e) switch (e.type) {
                              case "blur":
                              case "checkval":
                                if (null !== a.min) {
                                    var p = a.onUnMask(t.slice().reverse().join(""), void 0, s.extend({}, a, {
                                        unmaskAsNumber: !0
                                    }));
                                    if (null !== a.min && p < a.min) return {
                                        refreshFromBuffer: !0,
                                        buffer: c(a.min.toString().replace(".", a.radixPoint).split(""), a.digits, a).reverse()
                                    };
                                }
                                if (t[t.length - 1] === a.negationSymbol.front) {
                                    var h = new RegExp("(^" + ("" != a.negationSymbol.front ? (0, r.default)(a.negationSymbol.front) + "?" : "") + (0, 
                                    r.default)(a.prefix) + ")(.*)(" + (0, r.default)(a.suffix) + ("" != a.negationSymbol.back ? (0, 
                                    r.default)(a.negationSymbol.back) + "?" : "") + "$)").exec(n(t.slice(), !0).reverse().join(""));
                                    0 == (h ? h[2] : "") && (o = {
                                        refreshFromBuffer: !0,
                                        buffer: [ 0 ]
                                    });
                                } else if ("" !== a.radixPoint) {
                                    t.indexOf(a.radixPoint) === a.suffix.length && (o && o.buffer ? o.buffer.splice(0, 1 + a.suffix.length) : (t.splice(0, 1 + a.suffix.length), 
                                    o = {
                                        refreshFromBuffer: !0,
                                        buffer: n(t)
                                    }));
                                }
                                if (a.enforceDigitsOnBlur) {
                                    var v = (o = o || {}) && o.buffer || t.slice().reverse();
                                    o.refreshFromBuffer = !0, o.buffer = c(v, a.digits, a, !0).reverse();
                                }
                            }
                            return o;
                        },
                        onKeyDown: function(e, t, i, a) {
                            var r, o, l = s(this), u = String.fromCharCode(e.keyCode).toLowerCase();
                            if ((o = a.shortcuts && a.shortcuts[u]) && o.length > 1) return this.inputmask.__valueSet.call(this, parseFloat(this.inputmask.unmaskedvalue()) * parseInt(o)), 
                            l.trigger("setvalue"), !1;
                            if (e.ctrlKey) switch (e.keyCode) {
                              case n.default.UP:
                                return this.inputmask.__valueSet.call(this, parseFloat(this.inputmask.unmaskedvalue()) + parseInt(a.step)), 
                                l.trigger("setvalue"), !1;

                              case n.default.DOWN:
                                return this.inputmask.__valueSet.call(this, parseFloat(this.inputmask.unmaskedvalue()) - parseInt(a.step)), 
                                l.trigger("setvalue"), !1;
                            }
                            if (!e.shiftKey && (e.keyCode === n.default.DELETE || e.keyCode === n.default.BACKSPACE || e.keyCode === n.default.BACKSPACE_SAFARI) && i.begin !== t.length) {
                                if (t[e.keyCode === n.default.DELETE ? i.begin - 1 : i.end] === a.negationSymbol.front) return r = t.slice().reverse(), 
                                "" !== a.negationSymbol.front && r.shift(), "" !== a.negationSymbol.back && r.pop(), 
                                l.trigger("setvalue", [ r.join(""), i.begin ]), !1;
                                if (!0 === a._radixDance) {
                                    var f = t.indexOf(a.radixPoint);
                                    if (a.digitsOptional) {
                                        if (0 === f) return (r = t.slice().reverse()).pop(), l.trigger("setvalue", [ r.join(""), i.begin >= r.length ? r.length : i.begin ]), 
                                        !1;
                                    } else if (-1 !== f && (i.begin < f || i.end < f || e.keyCode === n.default.DELETE && i.begin === f)) return i.begin !== i.end || e.keyCode !== n.default.BACKSPACE && e.keyCode !== n.default.BACKSPACE_SAFARI || i.begin++, 
                                    (r = t.slice().reverse()).splice(r.length - i.begin, i.begin - i.end + 1), r = c(r, a.digits, a).join(""), 
                                    l.trigger("setvalue", [ r, i.begin >= r.length ? f + 1 : i.begin ]), !1;
                                }
                            }
                        }
                    },
                    currency: {
                        prefix: "",
                        groupSeparator: ",",
                        alias: "numeric",
                        digits: 2,
                        digitsOptional: !1
                    },
                    decimal: {
                        alias: "numeric"
                    },
                    integer: {
                        alias: "numeric",
                        inputmode: "numeric",
                        digits: 0
                    },
                    percentage: {
                        alias: "numeric",
                        min: 0,
                        max: 100,
                        suffix: " %",
                        digits: 0,
                        allowMinus: !1
                    },
                    indianns: {
                        alias: "numeric",
                        _mask: function(e) {
                            return "(" + e.groupSeparator + "99){*|1}(" + e.groupSeparator + "999){1|1}";
                        },
                        groupSeparator: ",",
                        radixPoint: ".",
                        placeholder: "0",
                        digits: 2,
                        digitsOptional: !1
                    }
                });
            },
            9380: function(e, t, i) {
                var a;
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                var n = ((a = i(8741)) && a.__esModule ? a : {
                    default: a
                }).default ? window : {};
                t.default = n;
            },
            7760: function(e, t, i) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.HandleNativePlaceholder = function(e, t) {
                    var i = e ? e.inputmask : this;
                    if (s.ie) {
                        if (e.inputmask._valueGet() !== t && (e.placeholder !== t || "" === e.placeholder)) {
                            var a = o.getBuffer.call(i).slice(), n = e.inputmask._valueGet();
                            if (n !== t) {
                                var r = o.getLastValidPosition.call(i);
                                -1 === r && n === o.getBufferTemplate.call(i).join("") ? a = [] : -1 !== r && f.call(i, a), 
                                p(e, a);
                            }
                        }
                    } else e.placeholder !== t && (e.placeholder = t, "" === e.placeholder && e.removeAttribute("placeholder"));
                }, t.applyInputValue = c, t.checkVal = d, t.clearOptionalTail = f, t.unmaskedvalue = function(e) {
                    var t = e ? e.inputmask : this, i = t.opts, a = t.maskset;
                    if (e) {
                        if (void 0 === e.inputmask) return e.value;
                        e.inputmask && e.inputmask.refreshValue && c(e, e.inputmask._valueGet(!0));
                    }
                    var n = [], r = a.validPositions;
                    for (var l in r) r[l] && r[l].match && (1 != r[l].match.static || Array.isArray(a.metadata) && !0 !== r[l].generatedInput) && n.push(r[l].input);
                    var s = 0 === n.length ? "" : (t.isRTL ? n.reverse() : n).join("");
                    if ("function" == typeof i.onUnMask) {
                        var u = (t.isRTL ? o.getBuffer.call(t).slice().reverse() : o.getBuffer.call(t)).join("");
                        s = i.onUnMask.call(t, u, s, i);
                    }
                    return s;
                }, t.writeBuffer = p;
                var a, n = (a = i(5581)) && a.__esModule ? a : {
                    default: a
                }, r = i(4713), o = i(8711), l = i(7215), s = i(9845), u = i(6030);
                function c(e, t) {
                    var i = e ? e.inputmask : this, a = i.opts;
                    e.inputmask.refreshValue = !1, "function" == typeof a.onBeforeMask && (t = a.onBeforeMask.call(i, t, a) || t), 
                    d(e, !0, !1, t = t.toString().split("")), i.undoValue = i._valueGet(!0), (a.clearMaskOnLostFocus || a.clearIncomplete) && e.inputmask._valueGet() === o.getBufferTemplate.call(i).join("") && -1 === o.getLastValidPosition.call(i) && e.inputmask._valueSet("");
                }
                function f(e) {
                    e.length = 0;
                    for (var t, i = r.getMaskTemplate.call(this, !0, 0, !0, void 0, !0); void 0 !== (t = i.shift()); ) e.push(t);
                    return e;
                }
                function d(e, t, i, a, n) {
                    var s = e ? e.inputmask : this, c = s.maskset, f = s.opts, d = s.dependencyLib, h = a.slice(), v = "", m = -1, g = void 0, k = f.skipOptionalPartCharacter;
                    f.skipOptionalPartCharacter = "", o.resetMaskSet.call(s), c.tests = {}, m = f.radixPoint ? o.determineNewCaretPosition.call(s, {
                        begin: 0,
                        end: 0
                    }, !1, !1 === f.__financeInput ? "radixFocus" : void 0).begin : 0, c.p = m, s.caretPos = {
                        begin: m
                    };
                    var y = [], b = s.caretPos;
                    if (h.forEach((function(e, t) {
                        if (void 0 !== e) {
                            var a = new d.Event("_checkval");
                            a.keyCode = e.toString().charCodeAt(0), v += e;
                            var n = o.getLastValidPosition.call(s, void 0, !0);
                            !function(e, t) {
                                for (var i = r.getMaskTemplate.call(s, !0, 0).slice(e, o.seekNext.call(s, e, !1, !1)).join("").replace(/'/g, ""), a = i.indexOf(t); a > 0 && " " === i[a - 1]; ) a--;
                                var n = 0 === a && !o.isMask.call(s, e) && (r.getTest.call(s, e).match.nativeDef === t.charAt(0) || !0 === r.getTest.call(s, e).match.static && r.getTest.call(s, e).match.nativeDef === "'" + t.charAt(0) || " " === r.getTest.call(s, e).match.nativeDef && (r.getTest.call(s, e + 1).match.nativeDef === t.charAt(0) || !0 === r.getTest.call(s, e + 1).match.static && r.getTest.call(s, e + 1).match.nativeDef === "'" + t.charAt(0)));
                                if (!n && a > 0 && !o.isMask.call(s, e, !1, !0)) {
                                    var l = o.seekNext.call(s, e);
                                    s.caretPos.begin < l && (s.caretPos = {
                                        begin: l
                                    });
                                }
                                return n;
                            }(m, v) ? (g = u.EventHandlers.keypressEvent.call(s, a, !0, !1, i, s.caretPos.begin)) && (m = s.caretPos.begin + 1, 
                            v = "") : g = u.EventHandlers.keypressEvent.call(s, a, !0, !1, i, n + 1), g ? (void 0 !== g.pos && c.validPositions[g.pos] && !0 === c.validPositions[g.pos].match.static && void 0 === c.validPositions[g.pos].alternation && (y.push(g.pos), 
                            s.isRTL || (g.forwardPosition = g.pos + 1)), p.call(s, void 0, o.getBuffer.call(s), g.forwardPosition, a, !1), 
                            s.caretPos = {
                                begin: g.forwardPosition,
                                end: g.forwardPosition
                            }, b = s.caretPos) : void 0 === c.validPositions[t] && h[t] === r.getPlaceholder.call(s, t) && o.isMask.call(s, t, !0) ? s.caretPos.begin++ : s.caretPos = b;
                        }
                    })), y.length > 0) {
                        var x, P, E = o.seekNext.call(s, -1, void 0, !1);
                        if (!l.isComplete.call(s, o.getBuffer.call(s)) && y.length <= E || l.isComplete.call(s, o.getBuffer.call(s)) && y.length > 0 && y.length !== E && 0 === y[0]) for (var S = E; void 0 !== (x = y.shift()); ) {
                            var _ = new d.Event("_checkval");
                            if ((P = c.validPositions[x]).generatedInput = !0, _.keyCode = P.input.charCodeAt(0), 
                            (g = u.EventHandlers.keypressEvent.call(s, _, !0, !1, i, S)) && void 0 !== g.pos && g.pos !== x && c.validPositions[g.pos] && !0 === c.validPositions[g.pos].match.static) y.push(g.pos); else if (!g) break;
                            S++;
                        }
                    }
                    t && p.call(s, e, o.getBuffer.call(s), g ? g.forwardPosition : s.caretPos.begin, n || new d.Event("checkval"), n && ("input" === n.type && s.undoValue !== o.getBuffer.call(s).join("") || "paste" === n.type)), 
                    f.skipOptionalPartCharacter = k;
                }
                function p(e, t, i, a, r) {
                    var s = e ? e.inputmask : this, u = s.opts, c = s.dependencyLib;
                    if (a && "function" == typeof u.onBeforeWrite) {
                        var f = u.onBeforeWrite.call(s, a, t, i, u);
                        if (f) {
                            if (f.refreshFromBuffer) {
                                var d = f.refreshFromBuffer;
                                l.refreshFromBuffer.call(s, !0 === d ? d : d.start, d.end, f.buffer || t), t = o.getBuffer.call(s, !0);
                            }
                            void 0 !== i && (i = void 0 !== f.caret ? f.caret : i);
                        }
                    }
                    if (void 0 !== e && (e.inputmask._valueSet(t.join("")), void 0 === i || void 0 !== a && "blur" === a.type || o.caret.call(s, e, i, void 0, void 0, void 0 !== a && "keydown" === a.type && (a.keyCode === n.default.DELETE || a.keyCode === n.default.BACKSPACE)), 
                    !0 === r)) {
                        var p = c(e), h = e.inputmask._valueGet();
                        e.inputmask.skipInputEvent = !0, p.trigger("input"), setTimeout((function() {
                            h === o.getBufferTemplate.call(s).join("") ? p.trigger("cleared") : !0 === l.isComplete.call(s, t) && p.trigger("complete");
                        }), 0);
                    }
                }
            },
            2394: function(e, t, i) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0, i(7149), i(3194);
                var a = i(157), n = m(i(4963)), r = m(i(9380)), o = i(2391), l = i(4713), s = i(8711), u = i(7215), c = i(7760), f = i(9716), d = m(i(7392)), p = m(i(3976)), h = m(i(8741));
                function v(e) {
                    return v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e;
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                    }, v(e);
                }
                function m(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                }
                var g = r.default.document, k = "_inputmask_opts";
                function y(e, t, i) {
                    if (h.default) {
                        if (!(this instanceof y)) return new y(e, t, i);
                        this.dependencyLib = n.default, this.el = void 0, this.events = {}, this.maskset = void 0, 
                        !0 !== i && ("[object Object]" === Object.prototype.toString.call(e) ? t = e : (t = t || {}, 
                        e && (t.alias = e)), this.opts = n.default.extend(!0, {}, this.defaults, t), this.noMasksCache = t && void 0 !== t.definitions, 
                        this.userOptions = t || {}, b(this.opts.alias, t, this.opts)), this.refreshValue = !1, 
                        this.undoValue = void 0, this.$el = void 0, this.skipKeyPressEvent = !1, this.skipInputEvent = !1, 
                        this.validationEvent = !1, this.ignorable = !1, this.maxLength, this.mouseEnter = !1, 
                        this.originalPlaceholder = void 0, this.isComposing = !1;
                    }
                }
                function b(e, t, i) {
                    var a = y.prototype.aliases[e];
                    return a ? (a.alias && b(a.alias, void 0, i), n.default.extend(!0, i, a), n.default.extend(!0, i, t), 
                    !0) : (null === i.mask && (i.mask = e), !1);
                }
                y.prototype = {
                    dataAttribute: "data-inputmask",
                    defaults: p.default,
                    definitions: d.default,
                    aliases: {},
                    masksCache: {},
                    get isRTL() {
                        return this.opts.isRTL || this.opts.numericInput;
                    },
                    mask: function(e) {
                        var t = this;
                        return "string" == typeof e && (e = g.getElementById(e) || g.querySelectorAll(e)), 
                        (e = e.nodeName ? [ e ] : Array.isArray(e) ? e : Array.from(e)).forEach((function(e, i) {
                            var l = n.default.extend(!0, {}, t.opts);
                            if (function(e, t, i, a) {
                                function o(t, n) {
                                    var o = "" === a ? t : a + "-" + t;
                                    null !== (n = void 0 !== n ? n : e.getAttribute(o)) && ("string" == typeof n && (0 === t.indexOf("on") ? n = r.default[n] : "false" === n ? n = !1 : "true" === n && (n = !0)), 
                                    i[t] = n);
                                }
                                if (!0 === t.importDataAttributes) {
                                    var l, s, u, c, f = e.getAttribute(a);
                                    if (f && "" !== f && (f = f.replace(/'/g, '"'), s = JSON.parse("{" + f + "}")), 
                                    s) for (c in u = void 0, s) if ("alias" === c.toLowerCase()) {
                                        u = s[c];
                                        break;
                                    }
                                    for (l in o("alias", u), i.alias && b(i.alias, i, t), t) {
                                        if (s) for (c in u = void 0, s) if (c.toLowerCase() === l.toLowerCase()) {
                                            u = s[c];
                                            break;
                                        }
                                        o(l, u);
                                    }
                                }
                                n.default.extend(!0, t, i), ("rtl" === e.dir || t.rightAlign) && (e.style.textAlign = "right");
                                ("rtl" === e.dir || t.numericInput) && (e.dir = "ltr", e.removeAttribute("dir"), 
                                t.isRTL = !0);
                                return Object.keys(i).length;
                            }(e, l, n.default.extend(!0, {}, t.userOptions), t.dataAttribute)) {
                                var s = (0, o.generateMaskSet)(l, t.noMasksCache);
                                void 0 !== s && (void 0 !== e.inputmask && (e.inputmask.opts.autoUnmask = !0, e.inputmask.remove()), 
                                e.inputmask = new y(void 0, void 0, !0), e.inputmask.opts = l, e.inputmask.noMasksCache = t.noMasksCache, 
                                e.inputmask.userOptions = n.default.extend(!0, {}, t.userOptions), e.inputmask.el = e, 
                                e.inputmask.$el = (0, n.default)(e), e.inputmask.maskset = s, n.default.data(e, k, t.userOptions), 
                                a.mask.call(e.inputmask));
                            }
                        })), e && e[0] && e[0].inputmask || this;
                    },
                    option: function(e, t) {
                        return "string" == typeof e ? this.opts[e] : "object" === v(e) ? (n.default.extend(this.userOptions, e), 
                        this.el && !0 !== t && this.mask(this.el), this) : void 0;
                    },
                    unmaskedvalue: function(e) {
                        if (this.maskset = this.maskset || (0, o.generateMaskSet)(this.opts, this.noMasksCache), 
                        void 0 === this.el || void 0 !== e) {
                            var t = ("function" == typeof this.opts.onBeforeMask && this.opts.onBeforeMask.call(this, e, this.opts) || e).split("");
                            c.checkVal.call(this, void 0, !1, !1, t), "function" == typeof this.opts.onBeforeWrite && this.opts.onBeforeWrite.call(this, void 0, s.getBuffer.call(this), 0, this.opts);
                        }
                        return c.unmaskedvalue.call(this, this.el);
                    },
                    remove: function() {
                        if (this.el) {
                            n.default.data(this.el, k, null);
                            var e = this.opts.autoUnmask ? (0, c.unmaskedvalue)(this.el) : this._valueGet(this.opts.autoUnmask);
                            e !== s.getBufferTemplate.call(this).join("") ? this._valueSet(e, this.opts.autoUnmask) : this._valueSet(""), 
                            f.EventRuler.off(this.el), Object.getOwnPropertyDescriptor && Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(this.el), "value") && this.__valueGet && Object.defineProperty(this.el, "value", {
                                get: this.__valueGet,
                                set: this.__valueSet,
                                configurable: !0
                            }) : g.__lookupGetter__ && this.el.__lookupGetter__("value") && this.__valueGet && (this.el.__defineGetter__("value", this.__valueGet), 
                            this.el.__defineSetter__("value", this.__valueSet)), this.el.inputmask = void 0;
                        }
                        return this.el;
                    },
                    getemptymask: function() {
                        return this.maskset = this.maskset || (0, o.generateMaskSet)(this.opts, this.noMasksCache), 
                        s.getBufferTemplate.call(this).join("");
                    },
                    hasMaskedValue: function() {
                        return !this.opts.autoUnmask;
                    },
                    isComplete: function() {
                        return this.maskset = this.maskset || (0, o.generateMaskSet)(this.opts, this.noMasksCache), 
                        u.isComplete.call(this, s.getBuffer.call(this));
                    },
                    getmetadata: function() {
                        if (this.maskset = this.maskset || (0, o.generateMaskSet)(this.opts, this.noMasksCache), 
                        Array.isArray(this.maskset.metadata)) {
                            var e = l.getMaskTemplate.call(this, !0, 0, !1).join("");
                            return this.maskset.metadata.forEach((function(t) {
                                return t.mask !== e || (e = t, !1);
                            })), e;
                        }
                        return this.maskset.metadata;
                    },
                    isValid: function(e) {
                        if (this.maskset = this.maskset || (0, o.generateMaskSet)(this.opts, this.noMasksCache), 
                        e) {
                            var t = ("function" == typeof this.opts.onBeforeMask && this.opts.onBeforeMask.call(this, e, this.opts) || e).split("");
                            c.checkVal.call(this, void 0, !0, !1, t);
                        } else e = this.isRTL ? s.getBuffer.call(this).slice().reverse().join("") : s.getBuffer.call(this).join("");
                        for (var i = s.getBuffer.call(this), a = s.determineLastRequiredPosition.call(this), n = i.length - 1; n > a && !s.isMask.call(this, n); n--) ;
                        return i.splice(a, n + 1 - a), u.isComplete.call(this, i) && e === (this.isRTL ? s.getBuffer.call(this).slice().reverse().join("") : s.getBuffer.call(this).join(""));
                    },
                    format: function(e, t) {
                        this.maskset = this.maskset || (0, o.generateMaskSet)(this.opts, this.noMasksCache);
                        var i = ("function" == typeof this.opts.onBeforeMask && this.opts.onBeforeMask.call(this, e, this.opts) || e).split("");
                        c.checkVal.call(this, void 0, !0, !1, i);
                        var a = this.isRTL ? s.getBuffer.call(this).slice().reverse().join("") : s.getBuffer.call(this).join("");
                        return t ? {
                            value: a,
                            metadata: this.getmetadata()
                        } : a;
                    },
                    setValue: function(e) {
                        this.el && (0, n.default)(this.el).trigger("setvalue", [ e ]);
                    },
                    analyseMask: o.analyseMask
                }, y.extendDefaults = function(e) {
                    n.default.extend(!0, y.prototype.defaults, e);
                }, y.extendDefinitions = function(e) {
                    n.default.extend(!0, y.prototype.definitions, e);
                }, y.extendAliases = function(e) {
                    n.default.extend(!0, y.prototype.aliases, e);
                }, y.format = function(e, t, i) {
                    return y(t).format(e, i);
                }, y.unmask = function(e, t) {
                    return y(t).unmaskedvalue(e);
                }, y.isValid = function(e, t) {
                    return y(t).isValid(e);
                }, y.remove = function(e) {
                    "string" == typeof e && (e = g.getElementById(e) || g.querySelectorAll(e)), (e = e.nodeName ? [ e ] : e).forEach((function(e) {
                        e.inputmask && e.inputmask.remove();
                    }));
                }, y.setValue = function(e, t) {
                    "string" == typeof e && (e = g.getElementById(e) || g.querySelectorAll(e)), (e = e.nodeName ? [ e ] : e).forEach((function(e) {
                        e.inputmask ? e.inputmask.setValue(t) : (0, n.default)(e).trigger("setvalue", [ t ]);
                    }));
                }, y.dependencyLib = n.default, r.default.Inputmask = y;
                var x = y;
                t.default = x;
            },
            5296: function(e, t, i) {
                function a(e) {
                    return a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e;
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                    }, a(e);
                }
                var n = h(i(9380)), r = h(i(2394)), o = h(i(8741));
                function l(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var a = t[i];
                        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), 
                        Object.defineProperty(e, a.key, a);
                    }
                }
                function s(e, t) {
                    if (t && ("object" === a(t) || "function" == typeof t)) return t;
                    if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                    return function(e) {
                        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e;
                    }(e);
                }
                function u(e) {
                    var t = "function" == typeof Map ? new Map : void 0;
                    return u = function(e) {
                        if (null === e || (i = e, -1 === Function.toString.call(i).indexOf("[native code]"))) return e;
                        var i;
                        if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
                        if (void 0 !== t) {
                            if (t.has(e)) return t.get(e);
                            t.set(e, a);
                        }
                        function a() {
                            return c(e, arguments, p(this).constructor);
                        }
                        return a.prototype = Object.create(e.prototype, {
                            constructor: {
                                value: a,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), d(a, e);
                    }, u(e);
                }
                function c(e, t, i) {
                    return c = f() ? Reflect.construct : function(e, t, i) {
                        var a = [ null ];
                        a.push.apply(a, t);
                        var n = new (Function.bind.apply(e, a));
                        return i && d(n, i.prototype), n;
                    }, c.apply(null, arguments);
                }
                function f() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), 
                        !0;
                    } catch (e) {
                        return !1;
                    }
                }
                function d(e, t) {
                    return d = Object.setPrototypeOf || function(e, t) {
                        return e.__proto__ = t, e;
                    }, d(e, t);
                }
                function p(e) {
                    return p = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                        return e.__proto__ || Object.getPrototypeOf(e);
                    }, p(e);
                }
                function h(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                }
                var v = n.default.document;
                if (o.default && v && v.head && v.head.attachShadow && n.default.customElements && void 0 === n.default.customElements.get("input-mask")) {
                    var m = function(e) {
                        !function(e, t) {
                            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                            Object.defineProperty(e, "prototype", {
                                value: Object.create(t && t.prototype, {
                                    constructor: {
                                        value: e,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }),
                                writable: !1
                            }), t && d(e, t);
                        }(c, e);
                        var t, i, a, n, o, u = (t = c, i = f(), function() {
                            var e, a = p(t);
                            if (i) {
                                var n = p(this).constructor;
                                e = Reflect.construct(a, arguments, n);
                            } else e = a.apply(this, arguments);
                            return s(this, e);
                        });
                        function c() {
                            var e;
                            !function(e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                            }(this, c);
                            var t = (e = u.call(this)).getAttributeNames(), i = e.attachShadow({
                                mode: "closed"
                            }), a = v.createElement("input");
                            for (var n in a.type = "text", i.appendChild(a), t) Object.prototype.hasOwnProperty.call(t, n) && a.setAttribute(t[n], e.getAttribute(t[n]));
                            var o = new r.default;
                            return o.dataAttribute = "", o.mask(a), a.inputmask.shadowRoot = i, e;
                        }
                        return a = c, n && l(a.prototype, n), o && l(a, o), Object.defineProperty(a, "prototype", {
                            writable: !1
                        }), a;
                    }(u(HTMLElement));
                    n.default.customElements.define("input-mask", m);
                }
            },
            2391: function(e, t, i) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.analyseMask = function(e, t, i) {
                    var a, o, l, s, u, c, f = /(?:[?*+]|\{[0-9+*]+(?:,[0-9+*]*)?(?:\|[0-9+*]*)?\})|[^.?*+^${[]()|\\]+|./g, d = /\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g, p = !1, h = new n.default, v = [], m = [], g = !1;
                    function k(e, a, n) {
                        n = void 0 !== n ? n : e.matches.length;
                        var o = e.matches[n - 1];
                        if (t) 0 === a.indexOf("[") || p && /\\d|\\s|\\w/i.test(a) || "." === a ? e.matches.splice(n++, 0, {
                            fn: new RegExp(a, i.casing ? "i" : ""),
                            static: !1,
                            optionality: !1,
                            newBlockMarker: void 0 === o ? "master" : o.def !== a,
                            casing: null,
                            def: a,
                            placeholder: void 0,
                            nativeDef: a
                        }) : (p && (a = a[a.length - 1]), a.split("").forEach((function(t, a) {
                            o = e.matches[n - 1], e.matches.splice(n++, 0, {
                                fn: /[a-z]/i.test(i.staticDefinitionSymbol || t) ? new RegExp("[" + (i.staticDefinitionSymbol || t) + "]", i.casing ? "i" : "") : null,
                                static: !0,
                                optionality: !1,
                                newBlockMarker: void 0 === o ? "master" : o.def !== t && !0 !== o.static,
                                casing: null,
                                def: i.staticDefinitionSymbol || t,
                                placeholder: void 0 !== i.staticDefinitionSymbol ? t : void 0,
                                nativeDef: (p ? "'" : "") + t
                            });
                        }))), p = !1; else {
                            var l = i.definitions && i.definitions[a] || i.usePrototypeDefinitions && r.default.prototype.definitions[a];
                            l && !p ? e.matches.splice(n++, 0, {
                                fn: l.validator ? "string" == typeof l.validator ? new RegExp(l.validator, i.casing ? "i" : "") : new function() {
                                    this.test = l.validator;
                                } : new RegExp("."),
                                static: l.static || !1,
                                optionality: l.optional || !1,
                                newBlockMarker: void 0 === o || l.optional ? "master" : o.def !== (l.definitionSymbol || a),
                                casing: l.casing,
                                def: l.definitionSymbol || a,
                                placeholder: l.placeholder,
                                nativeDef: a,
                                generated: l.generated
                            }) : (e.matches.splice(n++, 0, {
                                fn: /[a-z]/i.test(i.staticDefinitionSymbol || a) ? new RegExp("[" + (i.staticDefinitionSymbol || a) + "]", i.casing ? "i" : "") : null,
                                static: !0,
                                optionality: !1,
                                newBlockMarker: void 0 === o ? "master" : o.def !== a && !0 !== o.static,
                                casing: null,
                                def: i.staticDefinitionSymbol || a,
                                placeholder: void 0 !== i.staticDefinitionSymbol ? a : void 0,
                                nativeDef: (p ? "'" : "") + a
                            }), p = !1);
                        }
                    }
                    function y() {
                        if (v.length > 0) {
                            if (k(s = v[v.length - 1], o), s.isAlternator) {
                                u = v.pop();
                                for (var e = 0; e < u.matches.length; e++) u.matches[e].isGroup && (u.matches[e].isGroup = !1);
                                v.length > 0 ? (s = v[v.length - 1]).matches.push(u) : h.matches.push(u);
                            }
                        } else k(h, o);
                    }
                    function b(e) {
                        var t = new n.default(!0);
                        return t.openGroup = !1, t.matches = e, t;
                    }
                    function x() {
                        if ((l = v.pop()).openGroup = !1, void 0 !== l) if (v.length > 0) {
                            if ((s = v[v.length - 1]).matches.push(l), s.isAlternator) {
                                for (var e = (u = v.pop()).matches[0].matches ? u.matches[0].matches.length : 1, t = 0; t < u.matches.length; t++) u.matches[t].isGroup = !1, 
                                u.matches[t].alternatorGroup = !1, null === i.keepStatic && e < (u.matches[t].matches ? u.matches[t].matches.length : 1) && (i.keepStatic = !0), 
                                e = u.matches[t].matches ? u.matches[t].matches.length : 1;
                                v.length > 0 ? (s = v[v.length - 1]).matches.push(u) : h.matches.push(u);
                            }
                        } else h.matches.push(l); else y();
                    }
                    function P(e) {
                        var t = e.pop();
                        return t.isQuantifier && (t = b([ e.pop(), t ])), t;
                    }
                    t && (i.optionalmarker[0] = void 0, i.optionalmarker[1] = void 0);
                    for (;a = t ? d.exec(e) : f.exec(e); ) {
                        if (o = a[0], t) {
                            switch (o.charAt(0)) {
                              case "?":
                                o = "{0,1}";
                                break;

                              case "+":
                              case "*":
                                o = "{" + o + "}";
                                break;

                              case "|":
                                if (0 === v.length) {
                                    var E = b(h.matches);
                                    E.openGroup = !0, v.push(E), h.matches = [], g = !0;
                                }
                            }
                            if ("\\d" === o) o = "[0-9]";
                        }
                        if (p) y(); else switch (o.charAt(0)) {
                          case "$":
                          case "^":
                            t || y();
                            break;

                          case i.escapeChar:
                            p = !0, t && y();
                            break;

                          case i.optionalmarker[1]:
                          case i.groupmarker[1]:
                            x();
                            break;

                          case i.optionalmarker[0]:
                            v.push(new n.default(!1, !0));
                            break;

                          case i.groupmarker[0]:
                            v.push(new n.default(!0));
                            break;

                          case i.quantifiermarker[0]:
                            var S = new n.default(!1, !1, !0), _ = (o = o.replace(/[{}?]/g, "")).split("|"), w = _[0].split(","), M = isNaN(w[0]) ? w[0] : parseInt(w[0]), O = 1 === w.length ? M : isNaN(w[1]) ? w[1] : parseInt(w[1]), T = isNaN(_[1]) ? _[1] : parseInt(_[1]);
                            "*" !== M && "+" !== M || (M = "*" === O ? 0 : 1), S.quantifier = {
                                min: M,
                                max: O,
                                jit: T
                            };
                            var C = v.length > 0 ? v[v.length - 1].matches : h.matches;
                            if ((a = C.pop()).isAlternator) {
                                C.push(a), C = a.matches;
                                var A = new n.default(!0), D = C.pop();
                                C.push(A), C = A.matches, a = D;
                            }
                            a.isGroup || (a = b([ a ])), C.push(a), C.push(S);
                            break;

                          case i.alternatormarker:
                            if (v.length > 0) {
                                var j = (s = v[v.length - 1]).matches[s.matches.length - 1];
                                c = s.openGroup && (void 0 === j.matches || !1 === j.isGroup && !1 === j.isAlternator) ? v.pop() : P(s.matches);
                            } else c = P(h.matches);
                            if (c.isAlternator) v.push(c); else if (c.alternatorGroup ? (u = v.pop(), c.alternatorGroup = !1) : u = new n.default(!1, !1, !1, !0), 
                            u.matches.push(c), v.push(u), c.openGroup) {
                                c.openGroup = !1;
                                var B = new n.default(!0);
                                B.alternatorGroup = !0, v.push(B);
                            }
                            break;

                          default:
                            y();
                        }
                    }
                    g && x();
                    for (;v.length > 0; ) l = v.pop(), h.matches.push(l);
                    h.matches.length > 0 && (!function e(a) {
                        a && a.matches && a.matches.forEach((function(n, r) {
                            var o = a.matches[r + 1];
                            (void 0 === o || void 0 === o.matches || !1 === o.isQuantifier) && n && n.isGroup && (n.isGroup = !1, 
                            t || (k(n, i.groupmarker[0], 0), !0 !== n.openGroup && k(n, i.groupmarker[1]))), 
                            e(n);
                        }));
                    }(h), m.push(h));
                    (i.numericInput || i.isRTL) && function e(t) {
                        for (var a in t.matches = t.matches.reverse(), t.matches) if (Object.prototype.hasOwnProperty.call(t.matches, a)) {
                            var n = parseInt(a);
                            if (t.matches[a].isQuantifier && t.matches[n + 1] && t.matches[n + 1].isGroup) {
                                var r = t.matches[a];
                                t.matches.splice(a, 1), t.matches.splice(n + 1, 0, r);
                            }
                            void 0 !== t.matches[a].matches ? t.matches[a] = e(t.matches[a]) : t.matches[a] = ((o = t.matches[a]) === i.optionalmarker[0] ? o = i.optionalmarker[1] : o === i.optionalmarker[1] ? o = i.optionalmarker[0] : o === i.groupmarker[0] ? o = i.groupmarker[1] : o === i.groupmarker[1] && (o = i.groupmarker[0]), 
                            o);
                        }
                        var o;
                        return t;
                    }(m[0]);
                    return m;
                }, t.generateMaskSet = function(e, t) {
                    var i;
                    function n(e, i, n) {
                        var o, l, s = !1;
                        if (null !== e && "" !== e || ((s = null !== n.regex) ? e = (e = n.regex).replace(/^(\^)(.*)(\$)$/, "$2") : (s = !0, 
                        e = ".*")), 1 === e.length && !1 === n.greedy && 0 !== n.repeat && (n.placeholder = ""), 
                        n.repeat > 0 || "*" === n.repeat || "+" === n.repeat) {
                            var u = "*" === n.repeat ? 0 : "+" === n.repeat ? 1 : n.repeat;
                            e = n.groupmarker[0] + e + n.groupmarker[1] + n.quantifiermarker[0] + u + "," + n.repeat + n.quantifiermarker[1];
                        }
                        return l = s ? "regex_" + n.regex : n.numericInput ? e.split("").reverse().join("") : e, 
                        null !== n.keepStatic && (l = "ks_" + n.keepStatic + l), void 0 === r.default.prototype.masksCache[l] || !0 === t ? (o = {
                            mask: e,
                            maskToken: r.default.prototype.analyseMask(e, s, n),
                            validPositions: {},
                            _buffer: void 0,
                            buffer: void 0,
                            tests: {},
                            excludes: {},
                            metadata: i,
                            maskLength: void 0,
                            jitOffset: {}
                        }, !0 !== t && (r.default.prototype.masksCache[l] = o, o = a.default.extend(!0, {}, r.default.prototype.masksCache[l]))) : o = a.default.extend(!0, {}, r.default.prototype.masksCache[l]), 
                        o;
                    }
                    "function" == typeof e.mask && (e.mask = e.mask(e));
                    if (Array.isArray(e.mask)) {
                        if (e.mask.length > 1) {
                            null === e.keepStatic && (e.keepStatic = !0);
                            var o = e.groupmarker[0];
                            return (e.isRTL ? e.mask.reverse() : e.mask).forEach((function(t) {
                                o.length > 1 && (o += e.alternatormarker), void 0 !== t.mask && "function" != typeof t.mask ? o += t.mask : o += t;
                            })), n(o += e.groupmarker[1], e.mask, e);
                        }
                        e.mask = e.mask.pop();
                    }
                    i = e.mask && void 0 !== e.mask.mask && "function" != typeof e.mask.mask ? n(e.mask.mask, e.mask, e) : n(e.mask, e.mask, e);
                    null === e.keepStatic && (e.keepStatic = !1);
                    return i;
                };
                var a = o(i(4963)), n = o(i(9695)), r = o(i(2394));
                function o(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                }
            },
            157: function(e, t, i) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.mask = function() {
                    var e = this, t = this.opts, i = this.el, a = this.dependencyLib;
                    l.EventRuler.off(i);
                    var f = function(t, i) {
                        "textarea" !== t.tagName.toLowerCase() && i.ignorables.push(n.default.ENTER);
                        var s = t.getAttribute("type"), u = "input" === t.tagName.toLowerCase() && i.supportsInputType.includes(s) || t.isContentEditable || "textarea" === t.tagName.toLowerCase();
                        if (!u) if ("input" === t.tagName.toLowerCase()) {
                            var c = document.createElement("input");
                            c.setAttribute("type", s), u = "text" === c.type, c = null;
                        } else u = "partial";
                        return !1 !== u ? function(t) {
                            var n, s;
                            function u() {
                                return this.inputmask ? this.inputmask.opts.autoUnmask ? this.inputmask.unmaskedvalue() : -1 !== r.getLastValidPosition.call(e) || !0 !== i.nullable ? (this.inputmask.shadowRoot || this.ownerDocument).activeElement === this && i.clearMaskOnLostFocus ? (e.isRTL ? o.clearOptionalTail.call(e, r.getBuffer.call(e).slice()).reverse() : o.clearOptionalTail.call(e, r.getBuffer.call(e).slice())).join("") : n.call(this) : "" : n.call(this);
                            }
                            function c(e) {
                                s.call(this, e), this.inputmask && (0, o.applyInputValue)(this, e);
                            }
                            if (!t.inputmask.__valueGet) {
                                if (!0 !== i.noValuePatching) {
                                    if (Object.getOwnPropertyDescriptor) {
                                        var f = Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(t), "value") : void 0;
                                        f && f.get && f.set ? (n = f.get, s = f.set, Object.defineProperty(t, "value", {
                                            get: u,
                                            set: c,
                                            configurable: !0
                                        })) : "input" !== t.tagName.toLowerCase() && (n = function() {
                                            return this.textContent;
                                        }, s = function(e) {
                                            this.textContent = e;
                                        }, Object.defineProperty(t, "value", {
                                            get: u,
                                            set: c,
                                            configurable: !0
                                        }));
                                    } else document.__lookupGetter__ && t.__lookupGetter__("value") && (n = t.__lookupGetter__("value"), 
                                    s = t.__lookupSetter__("value"), t.__defineGetter__("value", u), t.__defineSetter__("value", c));
                                    t.inputmask.__valueGet = n, t.inputmask.__valueSet = s;
                                }
                                t.inputmask._valueGet = function(t) {
                                    return e.isRTL && !0 !== t ? n.call(this.el).split("").reverse().join("") : n.call(this.el);
                                }, t.inputmask._valueSet = function(t, i) {
                                    s.call(this.el, null == t ? "" : !0 !== i && e.isRTL ? t.split("").reverse().join("") : t);
                                }, void 0 === n && (n = function() {
                                    return this.value;
                                }, s = function(e) {
                                    this.value = e;
                                }, function(t) {
                                    if (a.valHooks && (void 0 === a.valHooks[t] || !0 !== a.valHooks[t].inputmaskpatch)) {
                                        var n = a.valHooks[t] && a.valHooks[t].get ? a.valHooks[t].get : function(e) {
                                            return e.value;
                                        }, l = a.valHooks[t] && a.valHooks[t].set ? a.valHooks[t].set : function(e, t) {
                                            return e.value = t, e;
                                        };
                                        a.valHooks[t] = {
                                            get: function(t) {
                                                if (t.inputmask) {
                                                    if (t.inputmask.opts.autoUnmask) return t.inputmask.unmaskedvalue();
                                                    var a = n(t);
                                                    return -1 !== r.getLastValidPosition.call(e, void 0, void 0, t.inputmask.maskset.validPositions) || !0 !== i.nullable ? a : "";
                                                }
                                                return n(t);
                                            },
                                            set: function(e, t) {
                                                var i = l(e, t);
                                                return e.inputmask && (0, o.applyInputValue)(e, t), i;
                                            },
                                            inputmaskpatch: !0
                                        };
                                    }
                                }(t.type), function(t) {
                                    l.EventRuler.on(t, "mouseenter", (function() {
                                        var t = this.inputmask._valueGet(!0);
                                        t !== (e.isRTL ? r.getBuffer.call(e).reverse() : r.getBuffer.call(e)).join("") && (0, 
                                        o.applyInputValue)(this, t);
                                    }));
                                }(t));
                            }
                        }(t) : t.inputmask = void 0, u;
                    }(i, t);
                    if (!1 !== f) {
                        e.originalPlaceholder = i.placeholder, e.maxLength = void 0 !== i ? i.maxLength : void 0, 
                        -1 === e.maxLength && (e.maxLength = void 0), "inputMode" in i && null === i.getAttribute("inputmode") && (i.inputMode = t.inputmode, 
                        i.setAttribute("inputmode", t.inputmode)), !0 === f && (t.showMaskOnFocus = t.showMaskOnFocus && -1 === [ "cc-number", "cc-exp" ].indexOf(i.autocomplete), 
                        s.iphone && (t.insertModeVisual = !1), l.EventRuler.on(i, "submit", c.EventHandlers.submitEvent), 
                        l.EventRuler.on(i, "reset", c.EventHandlers.resetEvent), l.EventRuler.on(i, "blur", c.EventHandlers.blurEvent), 
                        l.EventRuler.on(i, "focus", c.EventHandlers.focusEvent), l.EventRuler.on(i, "invalid", c.EventHandlers.invalidEvent), 
                        l.EventRuler.on(i, "click", c.EventHandlers.clickEvent), l.EventRuler.on(i, "mouseleave", c.EventHandlers.mouseleaveEvent), 
                        l.EventRuler.on(i, "mouseenter", c.EventHandlers.mouseenterEvent), l.EventRuler.on(i, "paste", c.EventHandlers.pasteEvent), 
                        l.EventRuler.on(i, "cut", c.EventHandlers.cutEvent), l.EventRuler.on(i, "complete", t.oncomplete), 
                        l.EventRuler.on(i, "incomplete", t.onincomplete), l.EventRuler.on(i, "cleared", t.oncleared), 
                        !0 !== t.inputEventOnly && (l.EventRuler.on(i, "keydown", c.EventHandlers.keydownEvent), 
                        l.EventRuler.on(i, "keypress", c.EventHandlers.keypressEvent), l.EventRuler.on(i, "keyup", c.EventHandlers.keyupEvent)), 
                        (s.mobile || t.inputEventOnly) && i.removeAttribute("maxLength"), l.EventRuler.on(i, "input", c.EventHandlers.inputFallBackEvent), 
                        l.EventRuler.on(i, "compositionend", c.EventHandlers.compositionendEvent)), l.EventRuler.on(i, "setvalue", c.EventHandlers.setValueEvent), 
                        r.getBufferTemplate.call(e).join(""), e.undoValue = e._valueGet(!0);
                        var d = (i.inputmask.shadowRoot || i.ownerDocument).activeElement;
                        if ("" !== i.inputmask._valueGet(!0) || !1 === t.clearMaskOnLostFocus || d === i) {
                            (0, o.applyInputValue)(i, i.inputmask._valueGet(!0), t);
                            var p = r.getBuffer.call(e).slice();
                            !1 === u.isComplete.call(e, p) && t.clearIncomplete && r.resetMaskSet.call(e), t.clearMaskOnLostFocus && d !== i && (-1 === r.getLastValidPosition.call(e) ? p = [] : o.clearOptionalTail.call(e, p)), 
                            (!1 === t.clearMaskOnLostFocus || t.showMaskOnFocus && d === i || "" !== i.inputmask._valueGet(!0)) && (0, 
                            o.writeBuffer)(i, p), d === i && r.caret.call(e, i, r.seekNext.call(e, r.getLastValidPosition.call(e)));
                        }
                    }
                };
                var a, n = (a = i(5581)) && a.__esModule ? a : {
                    default: a
                }, r = i(8711), o = i(7760), l = i(9716), s = i(9845), u = i(7215), c = i(6030);
            },
            9695: function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = function(e, t, i, a) {
                    this.matches = [], this.openGroup = e || !1, this.alternatorGroup = !1, this.isGroup = e || !1, 
                    this.isOptional = t || !1, this.isQuantifier = i || !1, this.isAlternator = a || !1, 
                    this.quantifier = {
                        min: 1,
                        max: 1
                    };
                };
            },
            3194: function() {
                Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
                    value: function(e, t) {
                        if (null == this) throw new TypeError('"this" is null or not defined');
                        var i = Object(this), a = i.length >>> 0;
                        if (0 === a) return !1;
                        for (var n = 0 | t, r = Math.max(n >= 0 ? n : a - Math.abs(n), 0); r < a; ) {
                            if (i[r] === e) return !0;
                            r++;
                        }
                        return !1;
                    }
                });
            },
            7149: function() {
                function e(t) {
                    return e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e;
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                    }, e(t);
                }
                "function" != typeof Object.getPrototypeOf && (Object.getPrototypeOf = "object" === e("test".__proto__) ? function(e) {
                    return e.__proto__;
                } : function(e) {
                    return e.constructor.prototype;
                });
            },
            8711: function(e, t, i) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.caret = function(e, t, i, a, n) {
                    var r, o = this, l = this.opts;
                    if (void 0 === t) return "selectionStart" in e && "selectionEnd" in e ? (t = e.selectionStart, 
                    i = e.selectionEnd) : window.getSelection ? (r = window.getSelection().getRangeAt(0)).commonAncestorContainer.parentNode !== e && r.commonAncestorContainer !== e || (t = r.startOffset, 
                    i = r.endOffset) : document.selection && document.selection.createRange && (r = document.selection.createRange(), 
                    t = 0 - r.duplicate().moveStart("character", -e.inputmask._valueGet().length), i = t + r.text.length), 
                    {
                        begin: a ? t : u.call(o, t),
                        end: a ? i : u.call(o, i)
                    };
                    if (Array.isArray(t) && (i = o.isRTL ? t[0] : t[1], t = o.isRTL ? t[1] : t[0]), 
                    void 0 !== t.begin && (i = o.isRTL ? t.begin : t.end, t = o.isRTL ? t.end : t.begin), 
                    "number" == typeof t) {
                        t = a ? t : u.call(o, t), i = "number" == typeof (i = a ? i : u.call(o, i)) ? i : t;
                        var s = parseInt(((e.ownerDocument.defaultView || window).getComputedStyle ? (e.ownerDocument.defaultView || window).getComputedStyle(e, null) : e.currentStyle).fontSize) * i;
                        if (e.scrollLeft = s > e.scrollWidth ? s : 0, e.inputmask.caretPos = {
                            begin: t,
                            end: i
                        }, l.insertModeVisual && !1 === l.insertMode && t === i && (n || i++), e === (e.inputmask.shadowRoot || e.ownerDocument).activeElement) if ("setSelectionRange" in e) e.setSelectionRange(t, i); else if (window.getSelection) {
                            if (r = document.createRange(), void 0 === e.firstChild || null === e.firstChild) {
                                var c = document.createTextNode("");
                                e.appendChild(c);
                            }
                            r.setStart(e.firstChild, t < e.inputmask._valueGet().length ? t : e.inputmask._valueGet().length), 
                            r.setEnd(e.firstChild, i < e.inputmask._valueGet().length ? i : e.inputmask._valueGet().length), 
                            r.collapse(!0);
                            var f = window.getSelection();
                            f.removeAllRanges(), f.addRange(r);
                        } else e.createTextRange && ((r = e.createTextRange()).collapse(!0), r.moveEnd("character", i), 
                        r.moveStart("character", t), r.select());
                    }
                }, t.determineLastRequiredPosition = function(e) {
                    var t, i, r = this, l = this.maskset, s = this.dependencyLib, u = a.getMaskTemplate.call(r, !0, o.call(r), !0, !0), c = u.length, f = o.call(r), d = {}, p = l.validPositions[f], h = void 0 !== p ? p.locator.slice() : void 0;
                    for (t = f + 1; t < u.length; t++) i = a.getTestTemplate.call(r, t, h, t - 1), h = i.locator.slice(), 
                    d[t] = s.extend(!0, {}, i);
                    var v = p && void 0 !== p.alternation ? p.locator[p.alternation] : void 0;
                    for (t = c - 1; t > f && (((i = d[t]).match.optionality || i.match.optionalQuantifier && i.match.newBlockMarker || v && (v !== d[t].locator[p.alternation] && 1 != i.match.static || !0 === i.match.static && i.locator[p.alternation] && n.checkAlternationMatch.call(r, i.locator[p.alternation].toString().split(","), v.toString().split(",")) && "" !== a.getTests.call(r, t)[0].def)) && u[t] === a.getPlaceholder.call(r, t, i.match)); t--) c--;
                    return e ? {
                        l: c,
                        def: d[c] ? d[c].match : void 0
                    } : c;
                }, t.determineNewCaretPosition = function(e, t, i) {
                    var n = this, u = this.maskset, c = this.opts;
                    t && (n.isRTL ? e.end = e.begin : e.begin = e.end);
                    if (e.begin === e.end) {
                        switch (i = i || c.positionCaretOnClick) {
                          case "none":
                            break;

                          case "select":
                            e = {
                                begin: 0,
                                end: r.call(n).length
                            };
                            break;

                          case "ignore":
                            e.end = e.begin = s.call(n, o.call(n));
                            break;

                          case "radixFocus":
                            if (function(e) {
                                if ("" !== c.radixPoint && 0 !== c.digits) {
                                    var t = u.validPositions;
                                    if (void 0 === t[e] || t[e].input === a.getPlaceholder.call(n, e)) {
                                        if (e < s.call(n, -1)) return !0;
                                        var i = r.call(n).indexOf(c.radixPoint);
                                        if (-1 !== i) {
                                            for (var o in t) if (t[o] && i < o && t[o].input !== a.getPlaceholder.call(n, o)) return !1;
                                            return !0;
                                        }
                                    }
                                }
                                return !1;
                            }(e.begin)) {
                                var f = r.call(n).join("").indexOf(c.radixPoint);
                                e.end = e.begin = c.numericInput ? s.call(n, f) : f;
                                break;
                            }

                          default:
                            var d = e.begin, p = o.call(n, d, !0), h = s.call(n, -1 !== p || l.call(n, 0) ? p : -1);
                            if (d <= h) e.end = e.begin = l.call(n, d, !1, !0) ? d : s.call(n, d); else {
                                var v = u.validPositions[p], m = a.getTestTemplate.call(n, h, v ? v.match.locator : void 0, v), g = a.getPlaceholder.call(n, h, m.match);
                                if ("" !== g && r.call(n)[h] !== g && !0 !== m.match.optionalQuantifier && !0 !== m.match.newBlockMarker || !l.call(n, h, c.keepStatic, !0) && m.match.def === g) {
                                    var k = s.call(n, h);
                                    (d >= k || d === h) && (h = k);
                                }
                                e.end = e.begin = h;
                            }
                        }
                        return e;
                    }
                }, t.getBuffer = r, t.getBufferTemplate = function() {
                    var e = this.maskset;
                    void 0 === e._buffer && (e._buffer = a.getMaskTemplate.call(this, !1, 1), void 0 === e.buffer && (e.buffer = e._buffer.slice()));
                    return e._buffer;
                }, t.getLastValidPosition = o, t.isMask = l, t.resetMaskSet = function(e) {
                    var t = this.maskset;
                    t.buffer = void 0, !0 !== e && (t.validPositions = {}, t.p = 0);
                }, t.seekNext = s, t.seekPrevious = function(e, t) {
                    var i = this, n = e - 1;
                    if (e <= 0) return 0;
                    for (;n > 0 && (!0 === t && (!0 !== a.getTest.call(i, n).match.newBlockMarker || !l.call(i, n, void 0, !0)) || !0 !== t && !l.call(i, n, void 0, !0)); ) n--;
                    return n;
                }, t.translatePosition = u;
                var a = i(4713), n = i(7215);
                function r(e) {
                    var t = this.maskset;
                    return void 0 !== t.buffer && !0 !== e || (t.buffer = a.getMaskTemplate.call(this, !0, o.call(this), !0), 
                    void 0 === t._buffer && (t._buffer = t.buffer.slice())), t.buffer;
                }
                function o(e, t, i) {
                    var a = this.maskset, n = -1, r = -1, o = i || a.validPositions;
                    for (var l in void 0 === e && (e = -1), o) {
                        var s = parseInt(l);
                        o[s] && (t || !0 !== o[s].generatedInput) && (s <= e && (n = s), s >= e && (r = s));
                    }
                    return -1 === n || n == e ? r : -1 == r || e - n < r - e ? n : r;
                }
                function l(e, t, i) {
                    var n = this, r = this.maskset, o = a.getTestTemplate.call(n, e).match;
                    if ("" === o.def && (o = a.getTest.call(n, e).match), !0 !== o.static) return o.fn;
                    if (!0 === i && void 0 !== r.validPositions[e] && !0 !== r.validPositions[e].generatedInput) return !0;
                    if (!0 !== t && e > -1) {
                        if (i) {
                            var l = a.getTests.call(n, e);
                            return l.length > 1 + ("" === l[l.length - 1].match.def ? 1 : 0);
                        }
                        var s = a.determineTestTemplate.call(n, e, a.getTests.call(n, e)), u = a.getPlaceholder.call(n, e, s.match);
                        return s.match.def !== u;
                    }
                    return !1;
                }
                function s(e, t, i) {
                    var n = this;
                    void 0 === i && (i = !0);
                    for (var r = e + 1; "" !== a.getTest.call(n, r).match.def && (!0 === t && (!0 !== a.getTest.call(n, r).match.newBlockMarker || !l.call(n, r, void 0, !0)) || !0 !== t && !l.call(n, r, void 0, i)); ) r++;
                    return r;
                }
                function u(e) {
                    var t = this.opts, i = this.el;
                    return !this.isRTL || "number" != typeof e || t.greedy && "" === t.placeholder || !i || (e = Math.abs(this._valueGet().length - e)), 
                    e;
                }
            },
            4713: function(e, t, i) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.determineTestTemplate = u, t.getDecisionTaker = o, t.getMaskTemplate = function(e, t, i, a, n) {
                    var r = this, o = this.opts, c = this.maskset, f = o.greedy;
                    n && o.greedy && (o.greedy = !1, r.maskset.tests = {});
                    t = t || 0;
                    var p, h, v, m, g = [], k = 0;
                    do {
                        if (!0 === e && c.validPositions[k]) v = n && c.validPositions[k].match.optionality && void 0 === c.validPositions[k + 1] && (!0 === c.validPositions[k].generatedInput || c.validPositions[k].input == o.skipOptionalPartCharacter && k > 0) ? u.call(r, k, d.call(r, k, p, k - 1)) : c.validPositions[k], 
                        h = v.match, p = v.locator.slice(), g.push(!0 === i ? v.input : !1 === i ? h.nativeDef : l.call(r, k, h)); else {
                            v = s.call(r, k, p, k - 1), h = v.match, p = v.locator.slice();
                            var y = !0 !== a && (!1 !== o.jitMasking ? o.jitMasking : h.jit);
                            (m = (m && h.static && h.def !== o.groupSeparator && null === h.fn || c.validPositions[k - 1] && h.static && h.def !== o.groupSeparator && null === h.fn) && c.tests[k] && 1 === c.tests[k].length) || !1 === y || void 0 === y || "number" == typeof y && isFinite(y) && y > k ? g.push(!1 === i ? h.nativeDef : l.call(r, k, h)) : m = !1;
                        }
                        k++;
                    } while (!0 !== h.static || "" !== h.def || t > k);
                    "" === g[g.length - 1] && g.pop();
                    !1 === i && void 0 !== c.maskLength || (c.maskLength = k - 1);
                    return o.greedy = f, g;
                }, t.getPlaceholder = l, t.getTest = c, t.getTestTemplate = s, t.getTests = d, t.isSubsetOf = f;
                var a, n = (a = i(2394)) && a.__esModule ? a : {
                    default: a
                };
                function r(e, t) {
                    var i = (null != e.alternation ? e.mloc[o(e)] : e.locator).join("");
                    if ("" !== i) for (;i.length < t; ) i += "0";
                    return i;
                }
                function o(e) {
                    var t = e.locator[e.alternation];
                    return "string" == typeof t && t.length > 0 && (t = t.split(",")[0]), void 0 !== t ? t.toString() : "";
                }
                function l(e, t, i) {
                    var a = this.opts, n = this.maskset;
                    if (void 0 !== (t = t || c.call(this, e).match).placeholder || !0 === i) return "function" == typeof t.placeholder ? t.placeholder(a) : t.placeholder;
                    if (!0 === t.static) {
                        if (e > -1 && void 0 === n.validPositions[e]) {
                            var r, o = d.call(this, e), l = [];
                            if (o.length > 1 + ("" === o[o.length - 1].match.def ? 1 : 0)) for (var s = 0; s < o.length; s++) if ("" !== o[s].match.def && !0 !== o[s].match.optionality && !0 !== o[s].match.optionalQuantifier && (!0 === o[s].match.static || void 0 === r || !1 !== o[s].match.fn.test(r.match.def, n, e, !0, a)) && (l.push(o[s]), 
                            !0 === o[s].match.static && (r = o[s]), l.length > 1 && /[0-9a-bA-Z]/.test(l[0].match.def))) return a.placeholder.charAt(e % a.placeholder.length);
                        }
                        return t.def;
                    }
                    return a.placeholder.charAt(e % a.placeholder.length);
                }
                function s(e, t, i) {
                    return this.maskset.validPositions[e] || u.call(this, e, d.call(this, e, t ? t.slice() : t, i));
                }
                function u(e, t) {
                    var i = this.opts, a = function(e, t) {
                        var i = 0, a = !1;
                        t.forEach((function(e) {
                            e.match.optionality && (0 !== i && i !== e.match.optionality && (a = !0), (0 === i || i > e.match.optionality) && (i = e.match.optionality));
                        })), i && (0 == e || 1 == t.length ? i = 0 : a || (i = 0));
                        return i;
                    }(e, t);
                    e = e > 0 ? e - 1 : 0;
                    var n, o, l, s = r(c.call(this, e));
                    i.greedy && t.length > 1 && "" === t[t.length - 1].match.def && t.pop();
                    for (var u = 0; u < t.length; u++) {
                        var f = t[u];
                        n = r(f, s.length);
                        var d = Math.abs(n - s);
                        (void 0 === o || "" !== n && d < o || l && !i.greedy && l.match.optionality && l.match.optionality - a > 0 && "master" === l.match.newBlockMarker && (!f.match.optionality || f.match.optionality - a < 1 || !f.match.newBlockMarker) || l && !i.greedy && l.match.optionalQuantifier && !f.match.optionalQuantifier) && (o = d, 
                        l = f);
                    }
                    return l;
                }
                function c(e, t) {
                    var i = this.maskset;
                    return i.validPositions[e] ? i.validPositions[e] : (t || d.call(this, e))[0];
                }
                function f(e, t, i) {
                    function a(e) {
                        for (var t, i = [], a = -1, n = 0, r = e.length; n < r; n++) if ("-" === e.charAt(n)) for (t = e.charCodeAt(n + 1); ++a < t; ) i.push(String.fromCharCode(a)); else a = e.charCodeAt(n), 
                        i.push(e.charAt(n));
                        return i.join("");
                    }
                    return e.match.def === t.match.nativeDef || !(!(i.regex || e.match.fn instanceof RegExp && t.match.fn instanceof RegExp) || !0 === e.match.static || !0 === t.match.static) && -1 !== a(t.match.fn.toString().replace(/[[\]/]/g, "")).indexOf(a(e.match.fn.toString().replace(/[[\]/]/g, "")));
                }
                function d(e, t, i) {
                    var a, r, o = this, l = this.dependencyLib, s = this.maskset, c = this.opts, d = this.el, p = s.maskToken, h = t ? i : 0, v = t ? t.slice() : [ 0 ], m = [], g = !1, k = t ? t.join("") : "";
                    function y(t, i, r, o) {
                        function l(r, o, u) {
                            function p(e, t) {
                                var i = 0 === t.matches.indexOf(e);
                                return i || t.matches.every((function(a, n) {
                                    return !0 === a.isQuantifier ? i = p(e, t.matches[n - 1]) : Object.prototype.hasOwnProperty.call(a, "matches") && (i = p(e, a)), 
                                    !i;
                                })), i;
                            }
                            function v(e, t, i) {
                                var a, n;
                                if ((s.tests[e] || s.validPositions[e]) && (s.tests[e] || [ s.validPositions[e] ]).every((function(e, r) {
                                    if (e.mloc[t]) return a = e, !1;
                                    var o = void 0 !== i ? i : e.alternation, l = void 0 !== e.locator[o] ? e.locator[o].toString().indexOf(t) : -1;
                                    return (void 0 === n || l < n) && -1 !== l && (a = e, n = l), !0;
                                })), a) {
                                    var r = a.locator[a.alternation];
                                    return (a.mloc[t] || a.mloc[r] || a.locator).slice((void 0 !== i ? i : a.alternation) + 1);
                                }
                                return void 0 !== i ? v(e, t) : void 0;
                            }
                            function b(e, t) {
                                var i = e.alternation, a = void 0 === t || i === t.alternation && -1 === e.locator[i].toString().indexOf(t.locator[i]);
                                if (!a && i > t.alternation) for (var n = t.alternation; n < i; n++) if (e.locator[n] !== t.locator[n]) {
                                    i = n, a = !0;
                                    break;
                                }
                                if (a) {
                                    e.mloc = e.mloc || {};
                                    var r = e.locator[i];
                                    if (void 0 !== r) {
                                        if ("string" == typeof r && (r = r.split(",")[0]), void 0 === e.mloc[r] && (e.mloc[r] = e.locator.slice()), 
                                        void 0 !== t) {
                                            for (var o in t.mloc) "string" == typeof o && (o = o.split(",")[0]), void 0 === e.mloc[o] && (e.mloc[o] = t.mloc[o]);
                                            e.locator[i] = Object.keys(e.mloc).join(",");
                                        }
                                        return !0;
                                    }
                                    e.alternation = void 0;
                                }
                                return !1;
                            }
                            function x(e, t) {
                                if (e.locator.length !== t.locator.length) return !1;
                                for (var i = e.alternation + 1; i < e.locator.length; i++) if (e.locator[i] !== t.locator[i]) return !1;
                                return !0;
                            }
                            if (h > e + c._maxTestPos) throw "Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. " + s.mask;
                            if (h === e && void 0 === r.matches) {
                                if (m.push({
                                    match: r,
                                    locator: o.reverse(),
                                    cd: k,
                                    mloc: {}
                                }), !r.optionality || void 0 !== u || !(c.definitions && c.definitions[r.nativeDef] && c.definitions[r.nativeDef].optional || n.default.prototype.definitions[r.nativeDef] && n.default.prototype.definitions[r.nativeDef].optional)) return !0;
                                g = !0, h = e;
                            } else if (void 0 !== r.matches) {
                                if (r.isGroup && u !== r) {
                                    if (r = l(t.matches[t.matches.indexOf(r) + 1], o, u)) return !0;
                                } else if (r.isOptional) {
                                    var P = r, E = m.length;
                                    if (r = y(r, i, o, u)) {
                                        if (m.forEach((function(e, t) {
                                            t >= E && (e.match.optionality = e.match.optionality ? e.match.optionality + 1 : 1);
                                        })), a = m[m.length - 1].match, void 0 !== u || !p(a, P)) return !0;
                                        g = !0, h = e;
                                    }
                                } else if (r.isAlternator) {
                                    var S, _ = r, w = [], M = m.slice(), O = o.length, T = !1, C = i.length > 0 ? i.shift() : -1;
                                    if (-1 === C || "string" == typeof C) {
                                        var A, D = h, j = i.slice(), B = [];
                                        if ("string" == typeof C) B = C.split(","); else for (A = 0; A < _.matches.length; A++) B.push(A.toString());
                                        if (void 0 !== s.excludes[e]) {
                                            for (var R = B.slice(), L = 0, I = s.excludes[e].length; L < I; L++) {
                                                var F = s.excludes[e][L].toString().split(":");
                                                o.length == F[1] && B.splice(B.indexOf(F[0]), 1);
                                            }
                                            0 === B.length && (delete s.excludes[e], B = R);
                                        }
                                        (!0 === c.keepStatic || isFinite(parseInt(c.keepStatic)) && D >= c.keepStatic) && (B = B.slice(0, 1));
                                        for (var N = 0; N < B.length; N++) {
                                            A = parseInt(B[N]), m = [], i = "string" == typeof C && v(h, A, O) || j.slice();
                                            var V = _.matches[A];
                                            if (V && l(V, [ A ].concat(o), u)) r = !0; else if (0 === N && (T = !0), V && V.matches && V.matches.length > _.matches[0].matches.length) break;
                                            S = m.slice(), h = D, m = [];
                                            for (var G = 0; G < S.length; G++) {
                                                var H = S[G], K = !1;
                                                H.match.jit = H.match.jit || T, H.alternation = H.alternation || O, b(H);
                                                for (var U = 0; U < w.length; U++) {
                                                    var $ = w[U];
                                                    if ("string" != typeof C || void 0 !== H.alternation && B.includes(H.locator[H.alternation].toString())) {
                                                        if (H.match.nativeDef === $.match.nativeDef) {
                                                            K = !0, b($, H);
                                                            break;
                                                        }
                                                        if (f(H, $, c)) {
                                                            b(H, $) && (K = !0, w.splice(w.indexOf($), 0, H));
                                                            break;
                                                        }
                                                        if (f($, H, c)) {
                                                            b($, H);
                                                            break;
                                                        }
                                                        if (Z = $, !0 === (Q = H).match.static && !0 !== Z.match.static && Z.match.fn.test(Q.match.def, s, e, !1, c, !1)) {
                                                            x(H, $) || void 0 !== d.inputmask.userOptions.keepStatic ? b(H, $) && (K = !0, w.splice(w.indexOf($), 0, H)) : c.keepStatic = !0;
                                                            break;
                                                        }
                                                    }
                                                }
                                                K || w.push(H);
                                            }
                                        }
                                        m = M.concat(w), h = e, g = m.length > 0, r = w.length > 0, i = j.slice();
                                    } else r = l(_.matches[C] || t.matches[C], [ C ].concat(o), u);
                                    if (r) return !0;
                                } else if (r.isQuantifier && u !== t.matches[t.matches.indexOf(r) - 1]) for (var q = r, z = i.length > 0 ? i.shift() : 0; z < (isNaN(q.quantifier.max) ? z + 1 : q.quantifier.max) && h <= e; z++) {
                                    var W = t.matches[t.matches.indexOf(q) - 1];
                                    if (r = l(W, [ z ].concat(o), W)) {
                                        if ((a = m[m.length - 1].match).optionalQuantifier = z >= q.quantifier.min, a.jit = (z + 1) * (W.matches.indexOf(a) + 1) > q.quantifier.jit, 
                                        a.optionalQuantifier && p(a, W)) {
                                            g = !0, h = e;
                                            break;
                                        }
                                        return a.jit && (s.jitOffset[e] = W.matches.length - W.matches.indexOf(a)), !0;
                                    }
                                } else if (r = y(r, i, o, u)) return !0;
                            } else h++;
                            var Q, Z;
                        }
                        for (var u = i.length > 0 ? i.shift() : 0; u < t.matches.length; u++) if (!0 !== t.matches[u].isQuantifier) {
                            var p = l(t.matches[u], [ u ].concat(r), o);
                            if (p && h === e) return p;
                            if (h > e) break;
                        }
                    }
                    if (e > -1) {
                        if (void 0 === t) {
                            for (var b, x = e - 1; void 0 === (b = s.validPositions[x] || s.tests[x]) && x > -1; ) x--;
                            void 0 !== b && x > -1 && (v = function(e, t) {
                                var i, a = [];
                                return Array.isArray(t) || (t = [ t ]), t.length > 0 && (void 0 === t[0].alternation || !0 === c.keepStatic ? 0 === (a = u.call(o, e, t.slice()).locator.slice()).length && (a = t[0].locator.slice()) : t.forEach((function(e) {
                                    "" !== e.def && (0 === a.length ? (i = e.alternation, a = e.locator.slice()) : e.locator[i] && -1 === a[i].toString().indexOf(e.locator[i]) && (a[i] += "," + e.locator[i]));
                                }))), a;
                            }(x, b), k = v.join(""), h = x);
                        }
                        if (s.tests[e] && s.tests[e][0].cd === k) return s.tests[e];
                        for (var P = v.shift(); P < p.length; P++) {
                            if (y(p[P], v, [ P ]) && h === e || h > e) break;
                        }
                    }
                    return (0 === m.length || g) && m.push({
                        match: {
                            fn: null,
                            static: !0,
                            optionality: !1,
                            casing: null,
                            def: "",
                            placeholder: ""
                        },
                        locator: [],
                        mloc: {},
                        cd: k
                    }), void 0 !== t && s.tests[e] ? r = l.extend(!0, [], m) : (s.tests[e] = l.extend(!0, [], m), 
                    r = s.tests[e]), m.forEach((function(e) {
                        e.match.optionality = !1;
                    })), r;
                }
            },
            7215: function(e, t, i) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.alternate = s, t.checkAlternationMatch = function(e, t, i) {
                    for (var a, n = this.opts.greedy ? t : t.slice(0, 1), r = !1, o = void 0 !== i ? i.split(",") : [], l = 0; l < o.length; l++) -1 !== (a = e.indexOf(o[l])) && e.splice(a, 1);
                    for (var s = 0; s < e.length; s++) if (n.includes(e[s])) {
                        r = !0;
                        break;
                    }
                    return r;
                }, t.handleRemove = function(e, t, i, a, l) {
                    var u = this, c = this.maskset, f = this.opts;
                    if ((f.numericInput || u.isRTL) && (t === r.default.BACKSPACE ? t = r.default.DELETE : t === r.default.DELETE && (t = r.default.BACKSPACE), 
                    u.isRTL)) {
                        var d = i.end;
                        i.end = i.begin, i.begin = d;
                    }
                    var p, h = o.getLastValidPosition.call(u, void 0, !0);
                    i.end >= o.getBuffer.call(u).length && h >= i.end && (i.end = h + 1);
                    t === r.default.BACKSPACE ? i.end - i.begin < 1 && (i.begin = o.seekPrevious.call(u, i.begin)) : t === r.default.DELETE && i.begin === i.end && (i.end = o.isMask.call(u, i.end, !0, !0) ? i.end + 1 : o.seekNext.call(u, i.end) + 1);
                    if (!1 !== (p = m.call(u, i))) {
                        if (!0 !== a && !1 !== f.keepStatic || null !== f.regex && -1 !== n.getTest.call(u, i.begin).match.def.indexOf("|")) {
                            var v = s.call(u, !0);
                            if (v) {
                                var g = void 0 !== v.caret ? v.caret : v.pos ? o.seekNext.call(u, v.pos.begin ? v.pos.begin : v.pos) : o.getLastValidPosition.call(u, -1, !0);
                                (t !== r.default.DELETE || i.begin > g) && i.begin;
                            }
                        }
                        !0 !== a && (c.p = t === r.default.DELETE ? i.begin + p : i.begin, c.p = o.determineNewCaretPosition.call(u, {
                            begin: c.p,
                            end: c.p
                        }, !1, !1 === f.insertMode && t === r.default.BACKSPACE ? "none" : void 0).begin);
                    }
                }, t.isComplete = c, t.isSelection = f, t.isValid = d, t.refreshFromBuffer = h, 
                t.revalidateMask = m;
                var a, n = i(4713), r = (a = i(5581)) && a.__esModule ? a : {
                    default: a
                }, o = i(8711), l = i(6030);
                function s(e, t, i, a, r, l) {
                    var u, c, f, p, h, v, m, g, k, y, b, x = this, P = this.dependencyLib, E = this.opts, S = x.maskset, _ = P.extend(!0, {}, S.validPositions), w = P.extend(!0, {}, S.tests), M = !1, O = !1, T = void 0 !== r ? r : o.getLastValidPosition.call(x);
                    if (l && (y = l.begin, b = l.end, l.begin > l.end && (y = l.end, b = l.begin)), 
                    -1 === T && void 0 === r) u = 0, c = (p = n.getTest.call(x, u)).alternation; else for (;T >= 0; T--) if ((f = S.validPositions[T]) && void 0 !== f.alternation) {
                        if (p && p.locator[f.alternation] !== f.locator[f.alternation]) break;
                        u = T, c = S.validPositions[u].alternation, p = f;
                    }
                    if (void 0 !== c) {
                        m = parseInt(u), S.excludes[m] = S.excludes[m] || [], !0 !== e && S.excludes[m].push((0, 
                        n.getDecisionTaker)(p) + ":" + p.alternation);
                        var C = [], A = -1;
                        for (h = m; h < o.getLastValidPosition.call(x, void 0, !0) + 1; h++) -1 === A && e <= h && void 0 !== t && (C.push(t), 
                        A = C.length - 1), (v = S.validPositions[h]) && !0 !== v.generatedInput && (void 0 === l || h < y || h >= b) && C.push(v.input), 
                        delete S.validPositions[h];
                        for (-1 === A && void 0 !== t && (C.push(t), A = C.length - 1); void 0 !== S.excludes[m] && S.excludes[m].length < 10; ) {
                            for (S.tests = {}, o.resetMaskSet.call(x, !0), M = !0, h = 0; h < C.length && (g = M.caret || o.getLastValidPosition.call(x, void 0, !0) + 1, 
                            k = C[h], M = d.call(x, g, k, !1, a, !0)); h++) h === A && (O = M), 1 == e && M && (O = {
                                caretPos: h
                            });
                            if (M) break;
                            if (o.resetMaskSet.call(x), p = n.getTest.call(x, m), S.validPositions = P.extend(!0, {}, _), 
                            S.tests = P.extend(!0, {}, w), !S.excludes[m]) {
                                O = s.call(x, e, t, i, a, m - 1, l);
                                break;
                            }
                            var D = (0, n.getDecisionTaker)(p);
                            if (-1 !== S.excludes[m].indexOf(D + ":" + p.alternation)) {
                                O = s.call(x, e, t, i, a, m - 1, l);
                                break;
                            }
                            for (S.excludes[m].push(D + ":" + p.alternation), h = m; h < o.getLastValidPosition.call(x, void 0, !0) + 1; h++) delete S.validPositions[h];
                        }
                    }
                    return O && !1 === E.keepStatic || delete S.excludes[m], O;
                }
                function u(e, t, i) {
                    var a = this.opts, n = this.maskset;
                    switch (a.casing || t.casing) {
                      case "upper":
                        e = e.toUpperCase();
                        break;

                      case "lower":
                        e = e.toLowerCase();
                        break;

                      case "title":
                        var o = n.validPositions[i - 1];
                        e = 0 === i || o && o.input === String.fromCharCode(r.default.SPACE) ? e.toUpperCase() : e.toLowerCase();
                        break;

                      default:
                        if ("function" == typeof a.casing) {
                            var l = Array.prototype.slice.call(arguments);
                            l.push(n.validPositions), e = a.casing.apply(this, l);
                        }
                    }
                    return e;
                }
                function c(e) {
                    var t = this, i = this.opts, a = this.maskset;
                    if ("function" == typeof i.isComplete) return i.isComplete(e, i);
                    if ("*" !== i.repeat) {
                        var r = !1, l = o.determineLastRequiredPosition.call(t, !0), s = o.seekPrevious.call(t, l.l);
                        if (void 0 === l.def || l.def.newBlockMarker || l.def.optionality || l.def.optionalQuantifier) {
                            r = !0;
                            for (var u = 0; u <= s; u++) {
                                var c = n.getTestTemplate.call(t, u).match;
                                if (!0 !== c.static && void 0 === a.validPositions[u] && !0 !== c.optionality && !0 !== c.optionalQuantifier || !0 === c.static && e[u] !== n.getPlaceholder.call(t, u, c)) {
                                    r = !1;
                                    break;
                                }
                            }
                        }
                        return r;
                    }
                }
                function f(e) {
                    var t = this.opts.insertMode ? 0 : 1;
                    return this.isRTL ? e.begin - e.end > t : e.end - e.begin > t;
                }
                function d(e, t, i, a, r, l, p) {
                    var g = this, k = this.dependencyLib, y = this.opts, b = g.maskset;
                    i = !0 === i;
                    var x = e;
                    function P(e) {
                        if (void 0 !== e) {
                            if (void 0 !== e.remove && (Array.isArray(e.remove) || (e.remove = [ e.remove ]), 
                            e.remove.sort((function(e, t) {
                                return t.pos - e.pos;
                            })).forEach((function(e) {
                                m.call(g, {
                                    begin: e,
                                    end: e + 1
                                });
                            })), e.remove = void 0), void 0 !== e.insert && (Array.isArray(e.insert) || (e.insert = [ e.insert ]), 
                            e.insert.sort((function(e, t) {
                                return e.pos - t.pos;
                            })).forEach((function(e) {
                                "" !== e.c && d.call(g, e.pos, e.c, void 0 === e.strict || e.strict, void 0 !== e.fromIsValid ? e.fromIsValid : a);
                            })), e.insert = void 0), e.refreshFromBuffer && e.buffer) {
                                var t = e.refreshFromBuffer;
                                h.call(g, !0 === t ? t : t.start, t.end, e.buffer), e.refreshFromBuffer = void 0;
                            }
                            void 0 !== e.rewritePosition && (x = e.rewritePosition, e = !0);
                        }
                        return e;
                    }
                    function E(t, i, r) {
                        var l = !1;
                        return n.getTests.call(g, t).every((function(s, c) {
                            var d = s.match;
                            if (o.getBuffer.call(g, !0), !1 !== (l = (!d.jit || void 0 !== b.validPositions[o.seekPrevious.call(g, t)]) && (null != d.fn ? d.fn.test(i, b, t, r, y, f.call(g, e)) : (i === d.def || i === y.skipOptionalPartCharacter) && "" !== d.def && {
                                c: n.getPlaceholder.call(g, t, d, !0) || d.def,
                                pos: t
                            }))) {
                                var p = void 0 !== l.c ? l.c : i, h = t;
                                return p = p === y.skipOptionalPartCharacter && !0 === d.static ? n.getPlaceholder.call(g, t, d, !0) || d.def : p, 
                                !0 !== (l = P(l)) && void 0 !== l.pos && l.pos !== t && (h = l.pos), !0 !== l && void 0 === l.pos && void 0 === l.c ? !1 : (!1 === m.call(g, e, k.extend({}, s, {
                                    input: u.call(g, p, d, h)
                                }), a, h) && (l = !1), !1);
                            }
                            return !0;
                        })), l;
                    }
                    void 0 !== e.begin && (x = g.isRTL ? e.end : e.begin);
                    var S = !0, _ = k.extend(!0, {}, b.validPositions);
                    if (!1 === y.keepStatic && void 0 !== b.excludes[x] && !0 !== r && !0 !== a) for (var w = x; w < (g.isRTL ? e.begin : e.end); w++) void 0 !== b.excludes[w] && (b.excludes[w] = void 0, 
                    delete b.tests[w]);
                    if ("function" == typeof y.preValidation && !0 !== a && !0 !== l && (S = P(S = y.preValidation.call(g, o.getBuffer.call(g), x, t, f.call(g, e), y, b, e, i || r))), 
                    !0 === S) {
                        if (S = E(x, t, i), (!i || !0 === a) && !1 === S && !0 !== l) {
                            var M = b.validPositions[x];
                            if (!M || !0 !== M.match.static || M.match.def !== t && t !== y.skipOptionalPartCharacter) {
                                if (y.insertMode || void 0 === b.validPositions[o.seekNext.call(g, x)] || e.end > x) {
                                    var O = !1;
                                    if (b.jitOffset[x] && void 0 === b.validPositions[o.seekNext.call(g, x)] && !1 !== (S = d.call(g, x + b.jitOffset[x], t, !0, !0)) && (!0 !== r && (S.caret = x), 
                                    O = !0), e.end > x && (b.validPositions[x] = void 0), !O && !o.isMask.call(g, x, y.keepStatic && 0 === x)) for (var T = x + 1, C = o.seekNext.call(g, x, !1, 0 !== x); T <= C; T++) if (!1 !== (S = E(T, t, i))) {
                                        S = v.call(g, x, void 0 !== S.pos ? S.pos : T) || S, x = T;
                                        break;
                                    }
                                }
                            } else S = {
                                caret: o.seekNext.call(g, x)
                            };
                        }
                        !1 !== S || !y.keepStatic || !c.call(g, o.getBuffer.call(g)) && 0 !== x || i || !0 === r ? f.call(g, e) && b.tests[x] && b.tests[x].length > 1 && y.keepStatic && !i && !0 !== r && (S = s.call(g, !0)) : S = s.call(g, x, t, i, a, void 0, e), 
                        !0 === S && (S = {
                            pos: x
                        });
                    }
                    if ("function" == typeof y.postValidation && !0 !== a && !0 !== l) {
                        var A = y.postValidation.call(g, o.getBuffer.call(g, !0), void 0 !== e.begin ? g.isRTL ? e.end : e.begin : e, t, S, y, b, i, p);
                        void 0 !== A && (S = !0 === A ? S : A);
                    }
                    S && void 0 === S.pos && (S.pos = x), !1 === S || !0 === l ? (o.resetMaskSet.call(g, !0), 
                    b.validPositions = k.extend(!0, {}, _)) : v.call(g, void 0, x, !0);
                    var D = P(S);
                    void 0 !== g.maxLength && (o.getBuffer.call(g).length > g.maxLength && !a && (o.resetMaskSet.call(g, !0), 
                    b.validPositions = k.extend(!0, {}, _), D = !1));
                    return D;
                }
                function p(e, t, i) {
                    for (var a = this.maskset, r = !1, o = n.getTests.call(this, e), l = 0; l < o.length; l++) {
                        if (o[l].match && (o[l].match.nativeDef === t.match[i.shiftPositions ? "def" : "nativeDef"] && (!i.shiftPositions || !t.match.static) || o[l].match.nativeDef === t.match.nativeDef || i.regex && !o[l].match.static && o[l].match.fn.test(t.input))) {
                            r = !0;
                            break;
                        }
                        if (o[l].match && o[l].match.def === t.match.nativeDef) {
                            r = void 0;
                            break;
                        }
                    }
                    return !1 === r && void 0 !== a.jitOffset[e] && (r = p.call(this, e + a.jitOffset[e], t, i)), 
                    r;
                }
                function h(e, t, i) {
                    var a, n, r = this, s = this.maskset, u = this.opts, c = this.dependencyLib, f = u.skipOptionalPartCharacter, d = r.isRTL ? i.slice().reverse() : i;
                    if (u.skipOptionalPartCharacter = "", !0 === e) o.resetMaskSet.call(r), s.tests = {}, 
                    e = 0, t = i.length, n = o.determineNewCaretPosition.call(r, {
                        begin: 0,
                        end: 0
                    }, !1).begin; else {
                        for (a = e; a < t; a++) delete s.validPositions[a];
                        n = e;
                    }
                    var p = new c.Event("keypress");
                    for (a = e; a < t; a++) {
                        p.keyCode = d[a].toString().charCodeAt(0), r.ignorable = !1;
                        var h = l.EventHandlers.keypressEvent.call(r, p, !0, !1, !1, n);
                        !1 !== h && void 0 !== h && (n = h.forwardPosition);
                    }
                    u.skipOptionalPartCharacter = f;
                }
                function v(e, t, i) {
                    var a = this, r = this.maskset, l = this.dependencyLib;
                    if (void 0 === e) for (e = t - 1; e > 0 && !r.validPositions[e]; e--) ;
                    for (var s = e; s < t; s++) {
                        if (void 0 === r.validPositions[s] && !o.isMask.call(a, s, !1)) if (0 == s ? n.getTest.call(a, s) : r.validPositions[s - 1]) {
                            var u = n.getTests.call(a, s).slice();
                            "" === u[u.length - 1].match.def && u.pop();
                            var c, f = n.determineTestTemplate.call(a, s, u);
                            if (f && (!0 !== f.match.jit || "master" === f.match.newBlockMarker && (c = r.validPositions[s + 1]) && !0 === c.match.optionalQuantifier) && ((f = l.extend({}, f, {
                                input: n.getPlaceholder.call(a, s, f.match, !0) || f.match.def
                            })).generatedInput = !0, m.call(a, s, f, !0), !0 !== i)) {
                                var p = r.validPositions[t].input;
                                return r.validPositions[t] = void 0, d.call(a, t, p, !0, !0);
                            }
                        }
                    }
                }
                function m(e, t, i, a) {
                    var r = this, l = this.maskset, s = this.opts, u = this.dependencyLib;
                    function c(e, t, i) {
                        var a = t[e];
                        if (void 0 !== a && !0 === a.match.static && !0 !== a.match.optionality && (void 0 === t[0] || void 0 === t[0].alternation)) {
                            var n = i.begin <= e - 1 ? t[e - 1] && !0 === t[e - 1].match.static && t[e - 1] : t[e - 1], r = i.end > e + 1 ? t[e + 1] && !0 === t[e + 1].match.static && t[e + 1] : t[e + 1];
                            return n && r;
                        }
                        return !1;
                    }
                    var f = 0, h = void 0 !== e.begin ? e.begin : e, v = void 0 !== e.end ? e.end : e, m = !0;
                    if (e.begin > e.end && (h = e.end, v = e.begin), a = void 0 !== a ? a : h, h !== v || s.insertMode && void 0 !== l.validPositions[a] && void 0 === i || void 0 === t || t.match.optionalQuantifier || t.match.optionality) {
                        var g, k = u.extend(!0, {}, l.validPositions), y = o.getLastValidPosition.call(r, void 0, !0);
                        for (l.p = h, g = y; g >= h; g--) delete l.validPositions[g], void 0 === t && delete l.tests[g + 1];
                        var b, x, P = a, E = P;
                        for (t && (l.validPositions[a] = u.extend(!0, {}, t), E++, P++), g = t ? v : v - 1; g <= y; g++) {
                            if (void 0 !== (b = k[g]) && !0 !== b.generatedInput && (g >= v || g >= h && c(g, k, {
                                begin: h,
                                end: v
                            }))) {
                                for (;"" !== n.getTest.call(r, E).match.def; ) {
                                    if (!1 !== (x = p.call(r, E, b, s)) || "+" === b.match.def) {
                                        "+" === b.match.def && o.getBuffer.call(r, !0);
                                        var S = d.call(r, E, b.input, "+" !== b.match.def, !0);
                                        if (m = !1 !== S, P = (S.pos || E) + 1, !m && x) break;
                                    } else m = !1;
                                    if (m) {
                                        void 0 === t && b.match.static && g === e.begin && f++;
                                        break;
                                    }
                                    if (!m && o.getBuffer.call(r), E > l.maskLength) break;
                                    E++;
                                }
                                "" == n.getTest.call(r, E).match.def && (m = !1), E = P;
                            }
                            if (!m) break;
                        }
                        if (!m) return l.validPositions = u.extend(!0, {}, k), o.resetMaskSet.call(r, !0), 
                        !1;
                    } else t && n.getTest.call(r, a).match.cd === t.match.cd && (l.validPositions[a] = u.extend(!0, {}, t));
                    return o.resetMaskSet.call(r, !0), f;
                }
            },
            5581: function(e) {
                e.exports = JSON.parse('{"BACKSPACE":8,"BACKSPACE_SAFARI":127,"DELETE":46,"DOWN":40,"END":35,"ENTER":13,"ESCAPE":27,"HOME":36,"INSERT":45,"LEFT":37,"PAGE_DOWN":34,"PAGE_UP":33,"RIGHT":39,"SPACE":32,"TAB":9,"UP":38,"X":88,"Z":90,"CONTROL":17,"PAUSE/BREAK":19,"WINDOWS_LEFT":91,"WINDOWS_RIGHT":92,"KEY_229":229}');
            }
        }, t = {};
        function i(a) {
            var n = t[a];
            if (void 0 !== n) return n.exports;
            var r = t[a] = {
                exports: {}
            };
            return e[a](r, r.exports, i), r.exports;
        }
        var a = {};
        return function() {
            var e, t = a;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0, i(3851), i(219), i(207), i(5296);
            var n = ((e = i(2394)) && e.__esModule ? e : {
                default: e
            }).default;
            t.default = n;
        }(), a;
    }();
}));

/***/ }),

/***/ "./node_modules/just-validate/dist/just-validate.es.js":
/*!*************************************************************!*\
  !*** ./node_modules/just-validate/dist/just-validate.es.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ JustValidate)
/* harmony export */ });
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
const EMAIL_REGEXP = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const NUMBER_REGEXP = /^[0-9]+$/;
const PASSWORD_REGEXP = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
const STRONG_PASSWORD_REGEXP = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const isEmpty = (value) => {
  let newVal = value;
  if (typeof value === "string") {
    newVal = value.trim();
  }
  return !newVal;
};
const isEmail = (value) => {
  return EMAIL_REGEXP.test(value);
};
const isLengthMoreThanMax = (value, len) => {
  return value.length > len;
};
const isLengthLessThanMin = (value, len) => {
  return value.length < len;
};
const isNumber = (value) => {
  return NUMBER_REGEXP.test(value);
};
const isPassword = (value) => {
  return PASSWORD_REGEXP.test(value);
};
const isStrongPassword = (value) => {
  return STRONG_PASSWORD_REGEXP.test(value);
};
const isNumberMoreThanMax = (value, len) => {
  return value > len;
};
const isNumberLessThanMin = (value, len) => {
  return value < len;
};
var Rules = /* @__PURE__ */ ((Rules2) => {
  Rules2["Required"] = "required";
  Rules2["Email"] = "email";
  Rules2["MinLength"] = "minLength";
  Rules2["MaxLength"] = "maxLength";
  Rules2["Password"] = "password";
  Rules2["Number"] = "number";
  Rules2["MaxNumber"] = "maxNumber";
  Rules2["MinNumber"] = "minNumber";
  Rules2["StrongPassword"] = "strongPassword";
  Rules2["CustomRegexp"] = "customRegexp";
  Rules2["MinFilesCount"] = "minFilesCount";
  Rules2["MaxFilesCount"] = "maxFilesCount";
  Rules2["Files"] = "files";
  return Rules2;
})(Rules || {});
var GroupRules = /* @__PURE__ */ ((GroupRules2) => {
  GroupRules2["Required"] = "required";
  return GroupRules2;
})(GroupRules || {});
var CustomStyleTagIds = /* @__PURE__ */ ((CustomStyleTagIds2) => {
  CustomStyleTagIds2["Label"] = "label";
  CustomStyleTagIds2["LabelArrow"] = "labelArrow";
  return CustomStyleTagIds2;
})(CustomStyleTagIds || {});
const getDefaultFieldMessage = (rule, ruleValue) => {
  switch (rule) {
    case Rules.Required:
      return "The field is required";
    case Rules.Email:
      return "Email has invalid format";
    case Rules.MaxLength:
      return "The field must contain a maximum of :value characters".replace(":value", String(ruleValue));
    case Rules.MinLength:
      return "The field must contain a minimum of :value characters".replace(":value", String(ruleValue));
    case Rules.Password:
      return "Password must contain minimum eight characters, at least one letter and one number";
    case Rules.Number:
      return "Value should be a number";
    case Rules.StrongPassword:
      return "Password should contain minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character";
    case Rules.MaxNumber:
      return "Number should be less or equal than :value".replace(":value", String(ruleValue));
    case Rules.MinNumber:
      return "Number should be more or equal than :value".replace(":value", String(ruleValue));
    case Rules.MinFilesCount:
      return "Files count should be more or equal than :value".replace(":value", String(ruleValue));
    case Rules.MaxFilesCount:
      return "Files count should be less or equal than :value".replace(":value", String(ruleValue));
    case Rules.Files:
      return "Uploaded files have one or several invalid properties (extension/size/type etc)";
    default:
      return "Value is incorrect";
  }
};
const getDefaultGroupMessage = (rule) => {
  switch (rule) {
    case GroupRules.Required:
      return "The field is required";
    default:
      return "Group is incorrect";
  }
};
const isPromise = (val) => !!val && typeof val.then === "function";
const getNodeParents = (el) => {
  let elem = el;
  const els = [];
  while (elem) {
    els.unshift(elem);
    elem = elem.parentNode;
  }
  return els;
};
const getClosestParent = (groups, parents) => {
  const reversedParents = [...parents].reverse();
  for (let i = 0, len = reversedParents.length; i < len; ++i) {
    const parent = reversedParents[i];
    for (const key in groups) {
      const group = groups[key];
      if (group.groupElem === parent) {
        return [key, group];
      }
    }
  }
  return null;
};
const getClassList = (classList) => {
  if (Array.isArray(classList)) {
    return classList.filter((cls) => cls.length > 0);
  }
  if (typeof classList === "string" && classList.trim()) {
    return [...classList.split(" ").filter((cls) => cls.length > 0)];
  }
  return [];
};
const errorLabelCss = `.just-validate-error-label[data-tooltip=true]{position:fixed;padding:4px 8px;background:#423f3f;color:#fff;white-space:nowrap;z-index:10;border-radius:4px;transform:translateY(-5px)}.just-validate-error-label[data-tooltip=true]:before{content:'';width:0;height:0;border-left:solid 5px transparent;border-right:solid 5px transparent;border-bottom:solid 5px #423f3f;position:absolute;z-index:3;display:block;bottom:-5px;transform:rotate(180deg);left:calc(50% - 5px)}.just-validate-error-label[data-tooltip=true][data-direction=left]{transform:translateX(-5px)}.just-validate-error-label[data-tooltip=true][data-direction=left]:before{right:-7px;bottom:auto;left:auto;top:calc(50% - 2px);transform:rotate(90deg)}.just-validate-error-label[data-tooltip=true][data-direction=right]{transform:translateX(5px)}.just-validate-error-label[data-tooltip=true][data-direction=right]:before{right:auto;bottom:auto;left:-7px;top:calc(50% - 2px);transform:rotate(-90deg)}.just-validate-error-label[data-tooltip=true][data-direction=bottom]{transform:translateY(5px)}.just-validate-error-label[data-tooltip=true][data-direction=bottom]:before{right:auto;bottom:auto;left:calc(50% - 5px);top:-5px;transform:rotate(0)}`;
const TOOLTIP_ARROW_HEIGHT = 5;
const defaultGlobalConfig = {
  errorFieldStyle: {
    color: "#b81111",
    border: "1px solid #B81111"
  },
  errorFieldCssClass: "just-validate-error-field",
  successFieldCssClass: "just-validate-success-field",
  errorLabelStyle: {
    color: "#b81111"
  },
  errorLabelCssClass: "just-validate-error-label",
  successLabelCssClass: "just-validate-success-label",
  focusInvalidField: true,
  lockForm: true,
  testingMode: false
};
class JustValidate {
  constructor(form, globalConfig, dictLocale) {
    __publicField(this, "form", null);
    __publicField(this, "fields", {});
    __publicField(this, "groupFields", {});
    __publicField(this, "errors", {});
    __publicField(this, "isValid", false);
    __publicField(this, "isSubmitted", false);
    __publicField(this, "globalConfig", defaultGlobalConfig);
    __publicField(this, "errorLabels", {});
    __publicField(this, "successLabels", {});
    __publicField(this, "eventListeners", []);
    __publicField(this, "dictLocale", []);
    __publicField(this, "currentLocale");
    __publicField(this, "customStyleTags", {});
    __publicField(this, "onSuccessCallback");
    __publicField(this, "onFailCallback");
    __publicField(this, "tooltips", []);
    __publicField(this, "lastScrollPosition");
    __publicField(this, "isScrollTick");
    __publicField(this, "refreshAllTooltips", () => {
      this.tooltips.forEach((item) => {
        item.refresh();
      });
    });
    __publicField(this, "handleDocumentScroll", () => {
      this.lastScrollPosition = window.scrollY;
      if (!this.isScrollTick) {
        window.requestAnimationFrame(() => {
          this.refreshAllTooltips();
          this.isScrollTick = false;
        });
        this.isScrollTick = true;
      }
    });
    __publicField(this, "formSubmitHandler", (ev) => {
      ev.preventDefault();
      this.isSubmitted = true;
      this.validateHandler(ev);
    });
    __publicField(this, "handleFieldChange", (target) => {
      let currentFieldName;
      for (const fieldName in this.fields) {
        const field = this.fields[fieldName];
        if (field.elem === target) {
          currentFieldName = fieldName;
          break;
        }
      }
      if (!currentFieldName) {
        return;
      }
      this.validateField(currentFieldName, true);
    });
    __publicField(this, "handleGroupChange", (target) => {
      let currentGroup;
      let currentGroupName;
      for (const groupName in this.groupFields) {
        const group = this.groupFields[groupName];
        if (group.elems.find((elem) => elem === target)) {
          currentGroup = group;
          currentGroupName = groupName;
          break;
        }
      }
      if (!currentGroup || !currentGroupName) {
        return;
      }
      this.validateGroup(currentGroupName, currentGroup);
    });
    __publicField(this, "handlerChange", (ev) => {
      if (!ev.target) {
        return;
      }
      this.handleFieldChange(ev.target);
      this.handleGroupChange(ev.target);
      this.renderErrors();
    });
    this.initialize(form, globalConfig, dictLocale);
  }
  initialize(form, globalConfig, dictLocale) {
    this.form = null;
    this.errors = {};
    this.isValid = false;
    this.isSubmitted = false;
    this.globalConfig = defaultGlobalConfig;
    this.errorLabels = {};
    this.successLabels = {};
    this.eventListeners = [];
    this.customStyleTags = {};
    this.tooltips = [];
    if (typeof form === "string") {
      const elem = document.querySelector(form);
      if (!elem) {
        throw Error(`Form with ${form} selector not found! Please check the form selector`);
      }
      this.setForm(elem);
    } else if (form instanceof HTMLFormElement) {
      this.setForm(form);
    } else {
      throw Error(`Form selector is not valid. Please specify a string selector or a DOM element.`);
    }
    this.globalConfig = __spreadValues(__spreadValues({}, defaultGlobalConfig), globalConfig);
    if (dictLocale) {
      this.dictLocale = dictLocale;
    }
    if (this.isTooltip()) {
      const styleTag = document.createElement("style");
      styleTag.textContent = errorLabelCss;
      this.customStyleTags[CustomStyleTagIds.Label] = document.head.appendChild(styleTag);
      this.addListener("scroll", document, this.handleDocumentScroll);
    }
  }
  getLocalisedString(str) {
    var _a;
    if (!this.currentLocale || !this.dictLocale.length) {
      return str;
    }
    const localisedStr = (_a = this.dictLocale.find((item) => item.key === str)) == null ? void 0 : _a.dict[this.currentLocale];
    return localisedStr || str;
  }
  getFieldErrorMessage(fieldRule, elem) {
    const msg = typeof fieldRule.errorMessage === "function" ? fieldRule.errorMessage(this.getElemValue(elem), this.fields) : fieldRule.errorMessage;
    return this.getLocalisedString(msg) || getDefaultFieldMessage(fieldRule.rule, fieldRule.value);
  }
  getFieldSuccessMessage(successMessage, elem) {
    const msg = typeof successMessage === "function" ? successMessage(this.getElemValue(elem), this.fields) : successMessage;
    return this.getLocalisedString(msg);
  }
  getGroupErrorMessage(groupRule) {
    return this.getLocalisedString(groupRule.errorMessage) || getDefaultGroupMessage(groupRule.rule);
  }
  getGroupSuccessMessage(groupRule) {
    return this.getLocalisedString(groupRule.successMessage);
  }
  setFieldInvalid(field, fieldRule) {
    this.fields[field].isValid = false;
    this.fields[field].errorMessage = this.getFieldErrorMessage(fieldRule, this.fields[field].elem);
  }
  setFieldValid(field, successMessage) {
    this.fields[field].isValid = true;
    if (successMessage !== void 0) {
      this.fields[field].successMessage = this.getFieldSuccessMessage(successMessage, this.fields[field].elem);
    }
  }
  setGroupInvalid(groupName, groupRule) {
    this.groupFields[groupName].isValid = false;
    this.groupFields[groupName].errorMessage = this.getGroupErrorMessage(groupRule);
  }
  setGroupValid(groupName, groupRule) {
    this.groupFields[groupName].isValid = true;
    this.groupFields[groupName].successMessage = this.getGroupSuccessMessage(groupRule);
  }
  getElemValue(elem) {
    switch (elem.type) {
      case "checkbox":
        return elem.checked;
      case "file":
        return elem.files;
      default:
        return elem.value;
    }
  }
  validateGroupRule(groupName, elems, groupRule) {
    switch (groupRule.rule) {
      case GroupRules.Required: {
        if (elems.every((elem) => !elem.checked)) {
          this.setGroupInvalid(groupName, groupRule);
        } else {
          this.setGroupValid(groupName, groupRule);
        }
      }
    }
  }
  validateFieldRule(field, elem, fieldRule, afterInputChanged = false) {
    const ruleValue = fieldRule.value;
    const elemValue = this.getElemValue(elem);
    if (fieldRule.plugin) {
      const result = fieldRule.plugin(elemValue, this.fields);
      if (!result) {
        this.setFieldInvalid(field, fieldRule);
      }
      return;
    }
    switch (fieldRule.rule) {
      case Rules.Required: {
        if (isEmpty(elemValue)) {
          this.setFieldInvalid(field, fieldRule);
        }
        break;
      }
      case Rules.Email: {
        if (typeof elemValue !== "string") {
          this.setFieldInvalid(field, fieldRule);
          break;
        }
        if (!isEmail(elemValue)) {
          this.setFieldInvalid(field, fieldRule);
        }
        break;
      }
      case Rules.MaxLength: {
        if (ruleValue === void 0) {
          console.error(`Value for ${fieldRule.rule} rule for [${field}] field is not defined. The field will be always invalid.`);
          this.setFieldInvalid(field, fieldRule);
          break;
        }
        if (typeof ruleValue !== "number") {
          console.error(`Value for ${fieldRule.rule} rule for [${field}] should be a number. The field will be always invalid.`);
          this.setFieldInvalid(field, fieldRule);
          break;
        }
        if (typeof elemValue !== "string") {
          this.setFieldInvalid(field, fieldRule);
          break;
        }
        if (elemValue === "") {
          break;
        }
        if (isLengthMoreThanMax(elemValue, ruleValue)) {
          this.setFieldInvalid(field, fieldRule);
        }
        break;
      }
      case Rules.MinLength: {
        if (ruleValue === void 0) {
          console.error(`Value for ${fieldRule.rule} rule for [${field}] field is not defined. The field will be always invalid.`);
          this.setFieldInvalid(field, fieldRule);
          break;
        }
        if (typeof ruleValue !== "number") {
          console.error(`Value for ${fieldRule.rule} rule for [${field}] should be a number. The field will be always invalid.`);
          this.setFieldInvalid(field, fieldRule);
          break;
        }
        if (typeof elemValue !== "string") {
          this.setFieldInvalid(field, fieldRule);
          break;
        }
        if (elemValue === "") {
          break;
        }
        if (isLengthLessThanMin(elemValue, ruleValue)) {
          this.setFieldInvalid(field, fieldRule);
        }
        break;
      }
      case Rules.Password: {
        if (typeof elemValue !== "string") {
          this.setFieldInvalid(field, fieldRule);
          break;
        }
        if (elemValue === "") {
          break;
        }
        if (!isPassword(elemValue)) {
          this.setFieldInvalid(field, fieldRule);
        }
        break;
      }
      case Rules.StrongPassword: {
        if (typeof elemValue !== "string") {
          this.setFieldInvalid(field, fieldRule);
          break;
        }
        if (elemValue === "") {
          break;
        }
        if (!isStrongPassword(elemValue)) {
          this.setFieldInvalid(field, fieldRule);
        }
        break;
      }
      case Rules.Number: {
        if (typeof elemValue !== "string") {
          this.setFieldInvalid(field, fieldRule);
          break;
        }
        if (elemValue === "") {
          break;
        }
        if (!isNumber(elemValue)) {
          this.setFieldInvalid(field, fieldRule);
        }
        break;
      }
      case Rules.MaxNumber: {
        if (ruleValue === void 0) {
          console.error(`Value for ${fieldRule.rule} rule for [${field}] field is not defined. The field will be always invalid.`);
          this.setFieldInvalid(field, fieldRule);
          break;
        }
        if (typeof ruleValue !== "number") {
          console.error(`Value for ${fieldRule.rule} rule for [${field}] field should be a number. The field will be always invalid.`);
          this.setFieldInvalid(field, fieldRule);
          break;
        }
        if (typeof elemValue !== "string") {
          this.setFieldInvalid(field, fieldRule);
          break;
        }
        if (elemValue === "") {
          break;
        }
        const num = +elemValue;
        if (Number.isNaN(num) || isNumberMoreThanMax(num, ruleValue)) {
          this.setFieldInvalid(field, fieldRule);
        }
        break;
      }
      case Rules.MinNumber: {
        if (ruleValue === void 0) {
          console.error(`Value for ${fieldRule.rule} rule for [${field}] field is not defined. The field will be always invalid.`);
          this.setFieldInvalid(field, fieldRule);
          break;
        }
        if (typeof ruleValue !== "number") {
          console.error(`Value for ${fieldRule.rule} rule for [${field}] field should be a number. The field will be always invalid.`);
          this.setFieldInvalid(field, fieldRule);
          break;
        }
        if (typeof elemValue !== "string") {
          this.setFieldInvalid(field, fieldRule);
          break;
        }
        if (elemValue === "") {
          break;
        }
        const num = +elemValue;
        if (Number.isNaN(num) || isNumberLessThanMin(num, ruleValue)) {
          this.setFieldInvalid(field, fieldRule);
        }
        break;
      }
      case Rules.CustomRegexp: {
        if (ruleValue === void 0) {
          console.error(`Value for ${fieldRule.rule} rule for [${field}] field is not defined. This field will be always invalid.`);
          this.setFieldInvalid(field, fieldRule);
          return;
        }
        let regexp;
        try {
          regexp = new RegExp(ruleValue);
        } catch (e) {
          console.error(`Value for ${fieldRule.rule} rule for [${field}] should be a valid regexp. This field will be always invalid.`);
          this.setFieldInvalid(field, fieldRule);
          break;
        }
        const str = String(elemValue);
        if (str !== "" && !regexp.test(str)) {
          this.setFieldInvalid(field, fieldRule);
        }
        break;
      }
      case Rules.MinFilesCount: {
        if (ruleValue === void 0) {
          console.error(`Value for ${fieldRule.rule} rule for [${field}] field is not defined. This field will be always invalid.`);
          this.setFieldInvalid(field, fieldRule);
          break;
        }
        if (typeof ruleValue !== "number") {
          console.error(`Value for ${fieldRule.rule} rule for [${field}] field should be a number. The field will be always invalid.`);
          this.setFieldInvalid(field, fieldRule);
          break;
        }
        if (Number.isFinite(elemValue == null ? void 0 : elemValue.length) && elemValue.length < ruleValue) {
          this.setFieldInvalid(field, fieldRule);
          break;
        }
        break;
      }
      case Rules.MaxFilesCount: {
        if (ruleValue === void 0) {
          console.error(`Value for ${fieldRule.rule} rule for [${field}] field is not defined. This field will be always invalid.`);
          this.setFieldInvalid(field, fieldRule);
          break;
        }
        if (typeof ruleValue !== "number") {
          console.error(`Value for ${fieldRule.rule} rule for [${field}] field should be a number. The field will be always invalid.`);
          this.setFieldInvalid(field, fieldRule);
          break;
        }
        if (Number.isFinite(elemValue == null ? void 0 : elemValue.length) && elemValue.length > ruleValue) {
          this.setFieldInvalid(field, fieldRule);
          break;
        }
        break;
      }
      case Rules.Files: {
        if (ruleValue === void 0) {
          console.error(`Value for ${fieldRule.rule} rule for [${field}] field is not defined. This field will be always invalid.`);
          this.setFieldInvalid(field, fieldRule);
          return;
        }
        if (typeof ruleValue !== "object") {
          console.error(`Value for ${fieldRule.rule} rule for [${field}] field should be an object. This field will be always invalid.`);
          this.setFieldInvalid(field, fieldRule);
          return;
        }
        const filesConfig = ruleValue.files;
        if (typeof filesConfig !== "object") {
          console.error(`Value for ${fieldRule.rule} rule for [${field}] field should be an object with files array. This field will be always invalid.`);
          this.setFieldInvalid(field, fieldRule);
          return;
        }
        const isFilePropsInvalid = (file, fileConfig) => {
          const minSizeInvalid = Number.isFinite(fileConfig.minSize) && file.size < fileConfig.minSize;
          const maxSizeInvalid = Number.isFinite(fileConfig.maxSize) && file.size > fileConfig.maxSize;
          const nameInvalid = Array.isArray(fileConfig.names) && !fileConfig.names.includes(file.name);
          const extInvalid = Array.isArray(fileConfig.extensions) && !fileConfig.extensions.includes(file.name.split(".")[file.name.split(".").length - 1]);
          const typeInvalid = Array.isArray(fileConfig.types) && !fileConfig.types.includes(file.type);
          return minSizeInvalid || maxSizeInvalid || nameInvalid || extInvalid || typeInvalid;
        };
        if (typeof elemValue === "object" && elemValue !== null) {
          for (let fileIdx = 0, len = elemValue.length; fileIdx < len; ++fileIdx) {
            const file = elemValue.item(fileIdx);
            if (!file) {
              this.setFieldInvalid(field, fieldRule);
              break;
            }
            const filesInvalid = isFilePropsInvalid(file, filesConfig);
            if (filesInvalid) {
              this.setFieldInvalid(field, fieldRule);
              break;
            }
          }
        }
        break;
      }
      default: {
        if (typeof fieldRule.validator !== "function") {
          console.error(`Validator for custom rule for [${field}] field should be a function. This field will be always invalid.`);
          this.setFieldInvalid(field, fieldRule);
          return;
        }
        const result = fieldRule.validator(elemValue, this.fields);
        if (typeof result !== "boolean" && typeof result !== "function") {
          console.error(`Validator return value for [${field}] field should be boolean or function. It will be cast to boolean.`);
        }
        if (typeof result === "function") {
          if (afterInputChanged) {
            this.fields[field].asyncCheckPending = true;
          } else {
            this.fields[field].asyncCheckPending = false;
            const promise = result();
            if (!isPromise(promise)) {
              console.error(`Validator function for custom rule for [${field}] field should return a Promise. This field will be always invalid.`);
              this.setFieldInvalid(field, fieldRule);
              return;
            }
            return promise.then((resp) => {
              if (!resp) {
                this.setFieldInvalid(field, fieldRule);
              }
            }).catch(() => {
              this.setFieldInvalid(field, fieldRule);
            });
          }
        }
        if (!result) {
          this.setFieldInvalid(field, fieldRule);
        }
      }
    }
  }
  validateField(fieldName, afterInputChanged = false) {
    var _a;
    const field = this.fields[fieldName];
    field.isValid = true;
    const promises = [];
    [...field.rules].reverse().forEach((rule) => {
      const res = this.validateFieldRule(fieldName, field.elem, rule, afterInputChanged);
      if (isPromise(res)) {
        promises.push(res);
      }
    });
    if (field.isValid) {
      this.setFieldValid(fieldName, (_a = field.config) == null ? void 0 : _a.successMessage);
    }
    return Promise.allSettled(promises);
  }
  revalidateField(field) {
    if (typeof field !== "string") {
      throw Error(`Field selector is not valid. Please specify a string selector.`);
    }
    if (!this.fields[field]) {
      console.error(`Field not found. Check the field selector.`);
      return Promise.reject();
    }
    return new Promise((resolve) => {
      this.validateField(field, true).finally(() => {
        this.clearFieldStyle(field);
        this.clearFieldLabel(field);
        this.renderFieldError(field);
        resolve(!!this.fields[field].isValid);
      });
    });
  }
  validateGroup(groupName, group) {
    const promises = [];
    [...group.rules].reverse().forEach((rule) => {
      const res = this.validateGroupRule(groupName, group.elems, rule);
      if (isPromise(res)) {
        promises.push(res);
      }
    });
    return Promise.allSettled(promises);
  }
  focusInvalidField() {
    for (const fieldName in this.fields) {
      const field = this.fields[fieldName];
      if (!field.isValid) {
        setTimeout(() => field.elem.focus(), 0);
        break;
      }
    }
  }
  afterSubmitValidation(forceRevalidation = false) {
    this.renderErrors(forceRevalidation);
    if (this.globalConfig.focusInvalidField) {
      this.focusInvalidField();
    }
  }
  validate(forceRevalidation = false) {
    return new Promise((resolve) => {
      const promises = [];
      Object.keys(this.fields).forEach((fieldName) => {
        const promise = this.validateField(fieldName);
        if (isPromise(promise)) {
          promises.push(promise);
        }
      });
      Object.keys(this.groupFields).forEach((groupName) => {
        const group = this.groupFields[groupName];
        const promise = this.validateGroup(groupName, group);
        if (isPromise(promise)) {
          promises.push(promise);
        }
      });
      if (promises.length) {
        Promise.allSettled(promises).then(() => {
          this.afterSubmitValidation(forceRevalidation);
          resolve(true);
        });
      } else {
        this.afterSubmitValidation(forceRevalidation);
        resolve(false);
      }
    });
  }
  revalidate() {
    return new Promise((resolve) => {
      this.validateHandler(void 0, true).finally(() => {
        if (this.globalConfig.focusInvalidField) {
          this.focusInvalidField();
        }
        resolve(this.isValid);
      });
    });
  }
  validateHandler(ev, forceRevalidation = false) {
    if (this.globalConfig.lockForm) {
      this.lockForm();
    }
    return this.validate(forceRevalidation).finally(() => {
      var _a, _b;
      if (this.globalConfig.lockForm) {
        this.unlockForm();
      }
      if (this.isValid) {
        (_a = this.onSuccessCallback) == null ? void 0 : _a.call(this, ev);
      } else {
        (_b = this.onFailCallback) == null ? void 0 : _b.call(this, this.fields, this.groupFields);
      }
    });
  }
  setForm(form) {
    this.form = form;
    this.form.setAttribute("novalidate", "novalidate");
    this.removeListener("submit", this.form, this.formSubmitHandler);
    this.addListener("submit", this.form, this.formSubmitHandler);
  }
  addListener(type, elem, handler) {
    elem.addEventListener(type, handler);
    this.eventListeners.push({ type, elem, func: handler });
  }
  removeListener(type, elem, handler) {
    elem.removeEventListener(type, handler);
    this.eventListeners = this.eventListeners.filter((item) => item.type !== type || item.elem !== elem);
  }
  addField(field, rules, config) {
    if (typeof field !== "string") {
      throw Error(`Field selector is not valid. Please specify a string selector.`);
    }
    const elem = this.form.querySelector(field);
    if (!elem) {
      throw Error(`Field with ${field} selector not found! Please check the field selector.`);
    }
    if (!Array.isArray(rules) || !rules.length) {
      throw Error(`Rules argument for the field [${field}] should be an array and should contain at least 1 element.`);
    }
    rules.forEach((item) => {
      if (!("rule" in item || "validator" in item || "plugin" in item)) {
        throw Error(`Rules argument for the field [${field}] must contain at least one rule or validator property.`);
      }
      if (!item.validator && !item.plugin && (!item.rule || !Object.values(Rules).includes(item.rule))) {
        throw Error(`Rule should be one of these types: ${Object.values(Rules).join(", ")}. Provided value: ${item.rule}`);
      }
    });
    this.fields[field] = {
      elem,
      rules,
      isValid: void 0,
      config
    };
    this.setListeners(elem);
    if (this.isSubmitted) {
      this.validate();
    }
    return this;
  }
  removeField(field) {
    if (typeof field !== "string") {
      throw Error(`Field selector is not valid. Please specify a string selector.`);
    }
    if (!this.fields[field]) {
      console.error(`Field not found. Check the field selector.`);
      return this;
    }
    const type = this.getListenerType(this.fields[field].elem.type);
    this.removeListener(type, this.fields[field].elem, this.handlerChange);
    this.clearErrors();
    delete this.fields[field];
    return this;
  }
  removeGroup(group) {
    if (typeof group !== "string") {
      throw Error(`Group selector is not valid. Please specify a string selector.`);
    }
    if (!this.groupFields[group]) {
      console.error(`Group not found. Check the group selector.`);
      return this;
    }
    this.groupFields[group].elems.forEach((elem) => {
      const type = this.getListenerType(elem.type);
      this.removeListener(type, elem, this.handlerChange);
    });
    this.clearErrors();
    delete this.groupFields[group];
    return this;
  }
  addRequiredGroup(groupField, errorMessage, config, successMessage) {
    if (typeof groupField !== "string") {
      throw Error(`Group selector is not valid. Please specify a string selector.`);
    }
    const elem = this.form.querySelector(groupField);
    if (!elem) {
      throw Error(`Group with ${groupField} selector not found! Please check the group selector.`);
    }
    const inputs = elem.querySelectorAll("input");
    const childrenInputs = Array.from(inputs).filter((input) => {
      const parent = getClosestParent(this.groupFields, getNodeParents(input));
      if (!parent) {
        return true;
      }
      return parent[1].elems.find((elem2) => elem2 !== input);
    });
    this.groupFields[groupField] = {
      rules: [
        {
          rule: GroupRules.Required,
          errorMessage,
          successMessage
        }
      ],
      groupElem: elem,
      elems: childrenInputs,
      isDirty: false,
      isValid: void 0,
      config
    };
    inputs.forEach((input) => {
      this.setListeners(input);
    });
    return this;
  }
  getListenerType(type) {
    switch (type) {
      case "checkbox":
      case "select-one":
      case "file":
      case "radio": {
        return "change";
      }
      default: {
        return "input";
      }
    }
  }
  setListeners(elem) {
    const type = this.getListenerType(elem.type);
    this.removeListener(type, elem, this.handlerChange);
    this.addListener(type, elem, this.handlerChange);
  }
  clearFieldLabel(fieldName) {
    var _a, _b;
    (_a = this.errorLabels[fieldName]) == null ? void 0 : _a.remove();
    (_b = this.successLabels[fieldName]) == null ? void 0 : _b.remove();
  }
  clearFieldStyle(fieldName) {
    var _a, _b, _c, _d;
    const field = this.fields[fieldName];
    const errorStyle = ((_a = field.config) == null ? void 0 : _a.errorFieldStyle) || this.globalConfig.errorFieldStyle;
    Object.keys(errorStyle).forEach((key) => {
      field.elem.style[key] = "";
    });
    const successStyle = ((_b = field.config) == null ? void 0 : _b.successFieldStyle) || this.globalConfig.successFieldStyle || {};
    Object.keys(successStyle).forEach((key) => {
      field.elem.style[key] = "";
    });
    field.elem.classList.remove(...getClassList(((_c = field.config) == null ? void 0 : _c.errorFieldCssClass) || this.globalConfig.errorFieldCssClass), ...getClassList(((_d = field.config) == null ? void 0 : _d.successFieldCssClass) || this.globalConfig.successFieldCssClass));
  }
  clearErrors() {
    var _a, _b;
    Object.keys(this.errorLabels).forEach((key) => this.errorLabels[key].remove());
    Object.keys(this.successLabels).forEach((key) => this.successLabels[key].remove());
    for (const fieldName in this.fields) {
      this.clearFieldStyle(fieldName);
    }
    for (const groupName in this.groupFields) {
      const group = this.groupFields[groupName];
      const errorStyle = ((_a = group.config) == null ? void 0 : _a.errorFieldStyle) || this.globalConfig.errorFieldStyle;
      Object.keys(errorStyle).forEach((key) => {
        group.elems.forEach((elem) => {
          var _a2;
          elem.style[key] = "";
          elem.classList.remove(...getClassList(((_a2 = group.config) == null ? void 0 : _a2.errorFieldCssClass) || this.globalConfig.errorFieldCssClass));
        });
      });
      const successStyle = ((_b = group.config) == null ? void 0 : _b.successFieldStyle) || this.globalConfig.successFieldStyle || {};
      Object.keys(successStyle).forEach((key) => {
        group.elems.forEach((elem) => {
          var _a2;
          elem.style[key] = "";
          elem.classList.remove(...getClassList(((_a2 = group.config) == null ? void 0 : _a2.successFieldCssClass) || this.globalConfig.successFieldCssClass));
        });
      });
    }
    this.tooltips = [];
  }
  isTooltip() {
    return !!this.globalConfig.tooltip;
  }
  lockForm() {
    const elems = this.form.querySelectorAll("input, textarea, button, select");
    for (let i = 0, len = elems.length; i < len; ++i) {
      elems[i].setAttribute("data-just-validate-fallback-disabled", elems[i].disabled ? "true" : "false");
      elems[i].setAttribute("disabled", "disabled");
      elems[i].style.pointerEvents = "none";
      elems[i].style.webkitFilter = "grayscale(100%)";
      elems[i].style.filter = "grayscale(100%)";
    }
  }
  unlockForm() {
    const elems = this.form.querySelectorAll("input, textarea, button, select");
    for (let i = 0, len = elems.length; i < len; ++i) {
      if (elems[i].getAttribute("data-just-validate-fallback-disabled") !== "true") {
        elems[i].removeAttribute("disabled");
      }
      elems[i].style.pointerEvents = "";
      elems[i].style.webkitFilter = "";
      elems[i].style.filter = "";
    }
  }
  renderTooltip(elem, errorLabel, position) {
    var _a;
    const { top, left, width, height } = elem.getBoundingClientRect();
    const errorLabelRect = errorLabel.getBoundingClientRect();
    const pos = position || ((_a = this.globalConfig.tooltip) == null ? void 0 : _a.position);
    switch (pos) {
      case "left": {
        errorLabel.style.top = `${top + height / 2 - errorLabelRect.height / 2}px`;
        errorLabel.style.left = `${left - errorLabelRect.width - TOOLTIP_ARROW_HEIGHT}px`;
        break;
      }
      case "top": {
        errorLabel.style.top = `${top - errorLabelRect.height - TOOLTIP_ARROW_HEIGHT}px`;
        errorLabel.style.left = `${left + width / 2 - errorLabelRect.width / 2}px`;
        break;
      }
      case "right": {
        errorLabel.style.top = `${top + height / 2 - errorLabelRect.height / 2}px`;
        errorLabel.style.left = `${left + width + TOOLTIP_ARROW_HEIGHT}px`;
        break;
      }
      case "bottom": {
        errorLabel.style.top = `${top + height + TOOLTIP_ARROW_HEIGHT}px`;
        errorLabel.style.left = `${left + width / 2 - errorLabelRect.width / 2}px`;
        break;
      }
    }
    errorLabel.dataset.direction = pos;
    const refresh = () => {
      this.renderTooltip(elem, errorLabel, position);
    };
    return {
      refresh
    };
  }
  createErrorLabelElem(name, errorMessage, config) {
    const errorLabel = document.createElement("div");
    errorLabel.innerHTML = errorMessage;
    const customErrorLabelStyle = this.isTooltip() ? config == null ? void 0 : config.errorLabelStyle : (config == null ? void 0 : config.errorLabelStyle) || this.globalConfig.errorLabelStyle;
    Object.assign(errorLabel.style, customErrorLabelStyle);
    errorLabel.classList.add(...getClassList((config == null ? void 0 : config.errorLabelCssClass) || this.globalConfig.errorLabelCssClass), "just-validate-error-label");
    if (this.isTooltip()) {
      errorLabel.dataset.tooltip = "true";
    }
    if (this.globalConfig.testingMode) {
      errorLabel.dataset.testId = `error-label-${name}`;
    }
    this.errorLabels[name] = errorLabel;
    return errorLabel;
  }
  createSuccessLabelElem(name, successMessage, config) {
    if (successMessage === void 0) {
      return null;
    }
    const successLabel = document.createElement("div");
    successLabel.innerHTML = successMessage;
    const customSuccessLabelStyle = (config == null ? void 0 : config.successLabelStyle) || this.globalConfig.successLabelStyle;
    Object.assign(successLabel.style, customSuccessLabelStyle);
    successLabel.classList.add(...getClassList((config == null ? void 0 : config.successLabelCssClass) || this.globalConfig.successLabelCssClass), "just-validate-success-label");
    if (this.globalConfig.testingMode) {
      successLabel.dataset.testId = `success-label-${name}`;
    }
    this.successLabels[name] = successLabel;
    return successLabel;
  }
  renderErrorsContainer(label, errorsContainer) {
    const container = errorsContainer || this.globalConfig.errorsContainer;
    if (typeof container === "string") {
      const elem = this.form.querySelector(container);
      if (elem) {
        elem.appendChild(label);
        return true;
      } else {
        console.error(`Error container with ${container} selector not found. Errors will be rendered as usual`);
      }
    }
    if (container instanceof Element) {
      container.appendChild(label);
      return true;
    }
    if (container !== void 0) {
      console.error(`Error container not found. It should be a string or existing Element. Errors will be rendered as usual`);
    }
    return false;
  }
  renderGroupLabel(elem, label, errorsContainer, isSuccess) {
    if (!isSuccess) {
      const renderedInErrorsContainer = this.renderErrorsContainer(label, errorsContainer);
      if (renderedInErrorsContainer) {
        return;
      }
    }
    elem.appendChild(label);
  }
  renderFieldLabel(elem, label, errorsContainer, isSuccess) {
    var _a, _b, _c, _d, _e, _f, _g;
    if (!isSuccess) {
      const renderedInErrorsContainer = this.renderErrorsContainer(label, errorsContainer);
      if (renderedInErrorsContainer) {
        return;
      }
    }
    if (elem.type === "checkbox" || elem.type === "radio") {
      const labelElem = document.querySelector(`label[for="${elem.getAttribute("id")}"]`);
      if (((_b = (_a = elem.parentElement) == null ? void 0 : _a.tagName) == null ? void 0 : _b.toLowerCase()) === "label") {
        (_d = (_c = elem.parentElement) == null ? void 0 : _c.parentElement) == null ? void 0 : _d.appendChild(label);
      } else if (labelElem) {
        (_e = labelElem.parentElement) == null ? void 0 : _e.appendChild(label);
      } else {
        (_f = elem.parentElement) == null ? void 0 : _f.appendChild(label);
      }
    } else {
      (_g = elem.parentElement) == null ? void 0 : _g.appendChild(label);
    }
  }
  showLabels(fields, isError) {
    Object.keys(fields).forEach((fieldName, i) => {
      const error = fields[fieldName];
      const field = this.fields[fieldName];
      field.isValid = !isError;
      this.clearFieldStyle(fieldName);
      this.clearFieldLabel(fieldName);
      this.renderFieldError(fieldName, error);
      if (i === 0 && this.globalConfig.focusInvalidField) {
        setTimeout(() => field.elem.focus(), 0);
      }
    });
  }
  showErrors(fields) {
    if (typeof fields !== "object") {
      throw Error("[showErrors]: Errors should be an object with key: value format");
    }
    this.showLabels(fields, true);
  }
  showSuccessLabels(fields) {
    if (typeof fields !== "object") {
      throw Error("[showSuccessLabels]: Labels should be an object with key: value format");
    }
    this.showLabels(fields, false);
  }
  renderFieldError(fieldName, message) {
    var _a, _b, _c, _d, _e, _f;
    const field = this.fields[fieldName];
    if (field.isValid) {
      if (!field.asyncCheckPending) {
        const successLabel = this.createSuccessLabelElem(fieldName, message !== void 0 ? message : field.successMessage, field.config);
        if (successLabel) {
          this.renderFieldLabel(field.elem, successLabel, (_a = field.config) == null ? void 0 : _a.errorsContainer, true);
        }
        field.elem.classList.add(...getClassList(((_b = field.config) == null ? void 0 : _b.successFieldCssClass) || this.globalConfig.successFieldCssClass));
      }
      return;
    }
    this.isValid = false;
    field.elem.classList.add(...getClassList(((_c = field.config) == null ? void 0 : _c.errorFieldCssClass) || this.globalConfig.errorFieldCssClass));
    const errorLabel = this.createErrorLabelElem(fieldName, message !== void 0 ? message : field.errorMessage, field.config);
    this.renderFieldLabel(field.elem, errorLabel, (_d = field.config) == null ? void 0 : _d.errorsContainer);
    if (this.isTooltip()) {
      this.tooltips.push(this.renderTooltip(field.elem, errorLabel, (_f = (_e = field.config) == null ? void 0 : _e.tooltip) == null ? void 0 : _f.position));
    }
  }
  renderErrors(forceRevalidation = false) {
    var _a, _b, _c, _d;
    if (!this.isSubmitted && !forceRevalidation) {
      return;
    }
    this.clearErrors();
    this.isValid = true;
    for (const groupName in this.groupFields) {
      const group = this.groupFields[groupName];
      if (group.isValid) {
        group.elems.forEach((elem) => {
          var _a2, _b2;
          Object.assign(elem.style, ((_a2 = group.config) == null ? void 0 : _a2.successFieldStyle) || this.globalConfig.successFieldStyle);
          elem.classList.add(...getClassList(((_b2 = group.config) == null ? void 0 : _b2.successFieldCssClass) || this.globalConfig.successFieldCssClass));
        });
        const successLabel = this.createSuccessLabelElem(groupName, group.successMessage, group.config);
        if (successLabel) {
          this.renderGroupLabel(group.groupElem, successLabel, (_a = group.config) == null ? void 0 : _a.errorsContainer, true);
        }
        continue;
      }
      this.isValid = false;
      group.elems.forEach((elem) => {
        var _a2, _b2;
        Object.assign(elem.style, ((_a2 = group.config) == null ? void 0 : _a2.errorFieldStyle) || this.globalConfig.errorFieldStyle);
        elem.classList.add(...getClassList(((_b2 = group.config) == null ? void 0 : _b2.errorFieldCssClass) || this.globalConfig.errorFieldCssClass));
      });
      const errorLabel = this.createErrorLabelElem(groupName, group.errorMessage, group.config);
      this.renderGroupLabel(group.groupElem, errorLabel, (_b = group.config) == null ? void 0 : _b.errorsContainer);
      if (this.isTooltip()) {
        this.tooltips.push(this.renderTooltip(group.groupElem, errorLabel, (_d = (_c = group.config) == null ? void 0 : _c.tooltip) == null ? void 0 : _d.position));
      }
    }
    for (const fieldName in this.fields) {
      this.renderFieldError(fieldName);
    }
  }
  destroy() {
    this.eventListeners.forEach((event) => {
      this.removeListener(event.type, event.elem, event.func);
    });
    Object.keys(this.customStyleTags).forEach((key) => {
      this.customStyleTags[key].remove();
    });
    this.clearErrors();
    if (this.globalConfig.lockForm) {
      this.unlockForm();
    }
  }
  refresh() {
    this.destroy();
    if (!this.form) {
      console.error("Cannot initialize the library! Form is not defined");
    } else {
      this.initialize(this.form, this.globalConfig);
      Object.keys(this.fields).forEach((key) => {
        this.addField(key, [...this.fields[key].rules], this.fields[key].config);
      });
    }
  }
  setCurrentLocale(locale) {
    if (typeof locale !== "string" && locale !== void 0) {
      console.error("Current locale should be a string");
      return;
    }
    this.currentLocale = locale;
    if (this.isSubmitted) {
      this.validate();
    }
  }
  onSuccess(callback) {
    this.onSuccessCallback = callback;
    return this;
  }
  onFail(callback) {
    this.onFailCallback = callback;
    return this;
  }
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _splidejs_splide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @splidejs/splide */ "./node_modules/@splidejs/splide/dist/js/splide.esm.js");
/* harmony import */ var _functions_dynamicAdapt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions/dynamicAdapt */ "./src/js/functions/dynamicAdapt.js");
/* harmony import */ var _functions_burger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions/burger */ "./src/js/functions/burger.js");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");
/* harmony import */ var _functions_validate_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./functions/validate-forms */ "./src/js/functions/validate-forms.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }







window.addEventListener("DOMContentLoaded", function () {
  //videos
  var Video = /*#__PURE__*/function () {
    function Video(parentName, videoName) {
      _classCallCheck(this, Video);

      this.parent = document.querySelector(parentName);
      this.btn = this.parent.querySelector(".video-btn");
      this.video = this.parent.querySelector(videoName);
      this.misc = this.parent.querySelector(".video-misc");
    }

    _createClass(Video, [{
      key: "render",
      value: function render() {
        var _this = this;

        this.btn.addEventListener("click", function (e) {
          console.log(_this.video);

          if (_this.video.paused == true) {
            _this.video.play();

            _this.video.setAttribute("controls", true);

            _this.btn.classList.add("hide");

            if (_this.misc) {
              _this.misc.classList.add("hide");
            }
          } else {
            _this.video.pause();

            _this.video.setAttribute("controls", false);
          }
        });
      }
    }]);

    return Video;
  }();

  new Video(".scania-video", ".efficiency__video-scania").render();
  new Video(".efficiency__video-item", ".efficiency__video-ford").render();
  new Video(".media__video", ".media__video-item").render(); // sliders

  var efficiencySlider = new _splidejs_splide__WEBPACK_IMPORTED_MODULE_0__["default"](".efficiency__slider", {
    pagination: false,
    perPage: 3,
    perMove: 3,
    gap: 6,
    type: "loop",
    arrowPath: "M40.7071 8.19539C41.0976 7.80486 41.0976 7.1717 40.7071 6.78117L34.3431 0.417213C33.9526 0.0266891 33.3195 0.0266891 32.9289 0.417213C32.5384 0.807738 32.5384 1.4409 32.9289 1.83143L38.5858 7.48828L32.9289 13.1451C32.5384 13.5357 32.5384 14.1688 32.9289 14.5593C33.3195 14.9499 33.9526 14.9499 34.3431 14.5593L40.7071 8.19539ZM0 8.48828L40 8.48828V6.48828L0 6.48828L0 8.48828Z",
    breakpoints: {
      768: {
        perPage: 1.5
      }
    }
  });
  efficiencySlider.mount();
  var faqSlider = new _splidejs_splide__WEBPACK_IMPORTED_MODULE_0__["default"](".faq__slider", {
    pagination: false,
    arrowPath: "M0.292893 6.78117C-0.0976295 7.1717 -0.0976296 7.80486 0.292892 8.19538L6.65685 14.5593C7.04738 14.9499 7.68054 14.9499 8.07107 14.5593C8.46159 14.1688 8.46159 13.5357 8.07107 13.1451L2.41422 7.48828L8.07107 1.83142C8.46159 1.4409 8.46159 0.807735 8.07107 0.417211C7.68054 0.0266861 7.04738 0.0266861 6.65685 0.41721L0.292893 6.78117ZM41 6.48828L1 6.48828L1 8.48828L41 8.48828L41 6.48828Z"
  });
  faqSlider.mount(); // accordeon

  var accordeons = document.querySelectorAll(".faq__item");
  accordeons.forEach(function (el) {
    el.addEventListener("click", function (e) {
      var self = e.currentTarget;
      var content = self.querySelector(".faq__item-content");
      content.classList.toggle("active");
      self.classList.toggle("active");
      content.style.maxHeight = content.scrollHeight + "px";

      if (!content.classList.contains("active")) {
        content.style.maxHeight = null;
      }
    });
  }); // animations

  var master = gsap__WEBPACK_IMPORTED_MODULE_4__.gsap.timeline();
  gsap__WEBPACK_IMPORTED_MODULE_4__.gsap.registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_5__.ScrollTrigger);

  function device() {
    var tl = gsap__WEBPACK_IMPORTED_MODULE_4__.gsap.timeline({
      scrollTrigger: {
        trigger: ".device",
        start: "top 85%"
      }
    });
    tl.from(".device__heading", {
      opacity: 0,
      duration: 0.5
    });
    tl.from(".device__info-head", {
      opacity: 0,
      duration: 0.5
    });
    tl.from(".device__img", {
      opacity: 0,
      duration: 0.5
    });
    tl.from(".device__info-body", {
      opacity: 0,
      duration: 0.5
    });
    return tl;
  }

  function benefits() {
    var tl = gsap__WEBPACK_IMPORTED_MODULE_4__.gsap.timeline({
      scrollTrigger: {
        trigger: ".benefits",
        start: "top 20%"
      }
    });
    tl.from(".benefits__inner", {
      opacity: 0,
      duration: 0.5
    });
    tl.from(".benefits__title", {
      opacity: 0,
      duration: 0.5,
      delay: 0.5
    });
    return tl;
  }

  function additionalBenefits() {
    var tl = gsap__WEBPACK_IMPORTED_MODULE_4__.gsap.timeline({
      scrollTrigger: {
        start: "top bottom",
        trigger: ".benefits__additional"
      }
    });
    tl.from(".benefits__additional-img", {
      opacity: 0,
      duration: 0.5
    });
    tl.from(".benefits__additional-info", {
      opacity: 0,
      duration: 0.5
    });
    tl.from(".benefits__additional-title", {
      opacity: 0,
      duration: 0.7
    });
  }

  function media() {
    var tl = gsap__WEBPACK_IMPORTED_MODULE_4__.gsap.timeline({
      scrollTrigger: {
        start: "top bottom",
        trigger: ".media"
      }
    });
    tl.from(".media__video", {
      opacity: 0,
      duration: 0.5
    });
    tl.from(".media__title", {
      opacity: 0,
      duration: 0.5
    });
  }

  function efficiency() {
    var tl = gsap__WEBPACK_IMPORTED_MODULE_4__.gsap.timeline({
      scrollTrigger: {
        start: "top bottom",
        trigger: ".efficiency"
      }
    });
    tl.from(".efficiency__title", {
      opacity: 0,
      duration: 0.5
    });
    tl.from(".efficiency__slider", {
      opacity: 0,
      duration: 0.5
    });
    tl.from(".efficiency__media", {
      opacity: 0,
      duration: 0.5
    });
    return tl;
  }

  function reports() {
    var tl = gsap__WEBPACK_IMPORTED_MODULE_4__.gsap.timeline({
      scrollTrigger: {
        start: "top 50%",
        trigger: ".reports__inner"
      }
    });
    tl.from(".reports__main-title", {
      opacity: 0,
      duration: 0.5,
      delay: 0.5
    });
    tl.from(".reports__additional", {
      opacity: 0,
      duration: 0.5
    });
    return tl;
  }

  function faq() {
    var tl = gsap__WEBPACK_IMPORTED_MODULE_4__.gsap.timeline({
      scrollTrigger: {
        start: "top 70%",
        trigger: ".faq"
      }
    });
    tl.from(".faq__slider", {
      opacity: 0,
      duration: 1
    });
  }

  function cooperation() {
    var tl = gsap__WEBPACK_IMPORTED_MODULE_4__.gsap.timeline({
      scrollTrigger: {
        start: "top 45%",
        trigger: ".cooperation"
      }
    });
    tl.from(".cooperation__callback", {
      opacity: 0,
      duration: 0.5
    });
    tl.from(".cooperation__inner :nth-child(1)", {
      opacity: 0,
      duration: 1.2
    });
    tl.from(".cooperation__inner :nth-child(2)", {
      opacity: 0,
      duration: 1.2
    });
    tl.from(".cooperation__inner :nth-child(3)", {
      opacity: 0,
      duration: 1.2
    });
    return tl;
  }

  master.add(device).add(benefits).add(additionalBenefits).add(media).add(efficiency).add(reports).add(faq).add(cooperation); //calc

  var form = document.querySelector(".calculator__form");
  var mileage = form.querySelector(".calculator__mileage");
  var consumption = form.querySelector(".calculator__consumption");
  var cost = form.querySelector(".calculator__cost");
  var solution = document.querySelector(".calculator__solution");
  var solutionCost = solution.querySelector(".calculator__solution-cost");
  var solutionHead = solution.querySelector(".calculator__solution .calculator__cost-head");
  var solutionMain = solution.querySelector(".calculator__solution .calculator__cost-main");
  var solutionEmission = solution.querySelector(".calculator__solution-emission");
  var solutionEmissionHead = solution.querySelector(".calculator__solution-head");
  var savings = document.querySelector(".calculator__savings");
  var savingsCost = savings.querySelector(".calculator__savings-cost");
  var savingsEmission = savings.querySelector(".calculator__savings-emission");
  var savingsEmissionHead = savings.querySelector(".calculator__emission-head");
  var regionSelect = form.querySelector(".calculator__region");
  var submitBtn = form.querySelector(".calculator__btn");
  var mileageLabel = document.querySelector(".calculator__mileage-label span");
  var costLabel = document.querySelector(".calculator__cost-label span");
  var consumptionLabel = document.querySelector(".calculator__consumption-label span");
  var currency = document.querySelector(".calculator__currency");
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (mileage.value && cost.value && consumption.value && mileage.value > 0 && cost.value > 0 && consumption.value > 0) {
      calculateResult(regionSelect);
      solution.closest(".calculator__results").classList.add("active");
      submitBtn.classList.add("hide");
    }
  });
  regionSelect.addEventListener("change", function () {
    changemetrics();

    if (solution.closest(".calculator__results").classList.contains("active") && mileage.value && cost.value && consumption.value && mileage.value > 0 && cost.value > 0 && consumption.value > 0) {
      calculateResult(this);
    }
  }); // countries specific calcs

  function calculateResult(regionSelect) {
    var parameters = {
      efficiency: 10,
      co2Efficiency: 15,
      dieselEfficiencies: {
        euro: 2,
        gbr: 20.04,
        usa: 16.69
      }
    };
    var result;
    var co2;
    var economy;
    var co2Economy;

    switch (regionSelect.value) {
      case "EUR":
        result = mileage.value / 100 * consumption.value * cost.value;
        co2 = parameters.dieselEfficiencies.euro * consumption.value * mileage.value / 100;
        break;

      case "GB":
        result = mileage.value / consumption.value * cost.value;
        co2 = parameters.dieselEfficiencies.gbr * (mileage.value / consumption.value);
        break;

      case "US":
        result = mileage.value / consumption.value * cost.value;
        co2 = parameters.dieselEfficiencies.usa * (mileage.value / consumption.value);
        break;
    }

    changemetrics();
    economy = result * parameters.efficiency / 100;
    co2Economy = co2 * parameters.co2Efficiency / 100;
    solutionCost.innerHTML = "".concat(Math.round(result));
    solutionEmission.innerHTML = "".concat(Math.round(co2));
    savingsCost.innerHTML = "".concat(Math.round(economy));
    savingsEmission.innerHTML = "".concat(Math.round(co2Economy));
  } // change metrics


  function changemetrics() {
    switch (regionSelect.value) {
      case "EUR":
        costLabel.innerHTML = "Fuel cost in EUR (per liter)";
        mileageLabel.innerHTML = "Vehicle mileage (km)";
        solutionHead.innerHTML = "cost spent on fuel EUR/1year";
        solutionEmissionHead.innerHTML = "CO2 emission (kg)";
        savingsEmissionHead.innerHTML = "CO2 emission (kg)";
        currency.value = "EUR";
        consumptionLabel.innerHTML = "Fuel consumption L/100km";
        break;

      case "GB":
        costLabel.innerHTML = "Fuel cost in GBP per gallon (GB)";
        mileageLabel.innerHTML = "Vehicle mileage (GB miles)";
        solutionHead.innerHTML = "cost spent on fuel GBP/1year";
        solutionEmissionHead.innerHTML = "CO2 emission (lb)";
        savingsEmissionHead.innerHTML = "CO2 emission (lb)";
        consumptionLabel.innerHTML = "Fuel consumption MPG(GB)";
        currency.value = "GBP";
        break;

      case "US":
        costLabel.innerHTML = "Fuel cost in USD per gallon (US)";
        mileageLabel.innerHTML = "Vehicle mileage (US miles)";
        solutionHead.innerHTML = "cost spent on fuel USD/1year";
        solutionEmissionHead.innerHTML = "CO2 emission (lb)";
        savingsEmissionHead.innerHTML = "CO2 emission (lb)";
        consumptionLabel.innerHTML = "Fuel consumption MPG(US)";
        currency.value = "USD";
        break;
    }
  } // ticker


  var reportsTicker = document.querySelector(".reports__ticker-inner");
  var benefitsTicker = document.querySelector(".benefits__ticker-inner");

  for (var i = 0; i < 20; i++) {
    var tickerItem = document.createElement("div");
    tickerItem.classList.add("ticker__item");
    tickerItem.innerHTML = "\n        <p>FUEL</p>\n        <p>well</p>\n        <p>eco </p>\n    ";
    reportsTicker.append(tickerItem);
  }

  for (var _i = 0; _i < 20; _i++) {
    var _tickerItem = document.createElement("div");

    _tickerItem.classList.add("ticker__item");

    _tickerItem.innerHTML = "\n        <p>FUEL</p>\n        <p>well</p>\n        <p>eco </p>\n    ";
    benefitsTicker.append(_tickerItem);
  } // forms


  var mediaForm = document.querySelector(".media__form");
  var rules1 = [{
    ruleSelector: ".media__mail",
    rules: [{
      rule: "required",
      errorMessage: "Email is required"
    }, {
      rule: "email",
      errorMessage: "Email is invalid"
    }]
  }, {
    ruleSelector: ".media__phone",
    rules: [{
      rule: "minLength",
      value: 8,
      errorMessage: "Phone is invalid",
      colorWrong: "blue"
    }, _defineProperty({
      rule: "required",
      errorMessage: "Заполните имя!"
    }, "errorMessage", "Phone is required")]
  }, {
    ruleSelector: ".media__name",
    rules: [{
      rule: "minLength",
      value: 3,
      errorMessage: "Name is invalid"
    }, {
      rule: "required",
      errorMessage: "Name is required"
    }]
  }, {
    ruleSelector: ".media__company",
    rules: [{
      rule: "minLength",
      value: 3,
      errorMessage: "Company is invalid"
    }, {
      rule: "required",
      errorMessage: "Name is required"
    }]
  }];

  var afterForm = function afterForm() {
    console.log("Произошла отправка, тут можно писать любые действия");
  };

  (0,_functions_validate_forms__WEBPACK_IMPORTED_MODULE_3__.validateForms)(".media__form", rules1, afterForm);
});
})();

/******/ })()
;
//# sourceMappingURL=main.js.map