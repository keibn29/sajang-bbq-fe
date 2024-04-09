import {
  R as w,
  _ as c,
  a as D,
  b as B,
  c as F,
  d as y,
  e as b,
  f as X,
  g as A,
  h as O,
  i as me,
  j as xe,
  k as Se,
  l as ye,
  m as be,
  n as we,
  o as ke,
  r as Ce,
  u as Te,
  p as M,
  C as je,
  q as l,
  F as fe,
  B as Ne,
  s as R,
  t as j,
  v as ae,
} from './index-0r2uFt7P.js';
var Le = {
  animating: !1,
  autoplaying: null,
  currentDirection: 0,
  currentLeft: null,
  currentSlide: 0,
  direction: 1,
  dragging: !1,
  edgeDragged: !1,
  initialized: !1,
  lazyLoadedList: [],
  listHeight: null,
  listWidth: null,
  scrolling: !1,
  slideCount: null,
  slideHeight: null,
  slideWidth: null,
  swipeLeft: null,
  swiped: !1,
  swiping: !1,
  touchObject: { startX: 0, startY: 0, curX: 0, curY: 0 },
  trackStyle: {},
  trackWidth: 0,
  targetSlide: 0,
};
function te(d, t, n) {
  return Math.max(t, Math.min(d, n));
}
var I = function (t) {
    var n = ['onTouchStart', 'onTouchMove', 'onWheel'];
    n.includes(t._reactName) || t.preventDefault();
  },
  K = function (t) {
    for (var n = [], s = he(t), e = pe(t), a = s; a < e; a++) t.lazyLoadedList.indexOf(a) < 0 && n.push(a);
    return n;
  },
  he = function (t) {
    return t.currentSlide - Ee(t);
  },
  pe = function (t) {
    return t.currentSlide + Me(t);
  },
  Ee = function (t) {
    return t.centerMode ? Math.floor(t.slidesToShow / 2) + (parseInt(t.centerPadding) > 0 ? 1 : 0) : 0;
  },
  Me = function (t) {
    return t.centerMode
      ? Math.floor((t.slidesToShow - 1) / 2) + 1 + (parseInt(t.centerPadding) > 0 ? 1 : 0)
      : t.slidesToShow;
  },
  ne = function (t) {
    return (t && t.offsetWidth) || 0;
  },
  ie = function (t) {
    return (t && t.offsetHeight) || 0;
  },
  ge = function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
      s,
      e,
      a,
      i;
    return (
      (s = t.startX - t.curX),
      (e = t.startY - t.curY),
      (a = Math.atan2(e, s)),
      (i = Math.round((a * 180) / Math.PI)),
      i < 0 && (i = 360 - Math.abs(i)),
      (i <= 45 && i >= 0) || (i <= 360 && i >= 315)
        ? 'left'
        : i >= 135 && i <= 225
        ? 'right'
        : n === !0
        ? i >= 35 && i <= 135
          ? 'up'
          : 'down'
        : 'vertical'
    );
  },
  Q = function (t) {
    var n = !0;
    return (
      t.infinite ||
        (((t.centerMode && t.currentSlide >= t.slideCount - 1) ||
          t.slideCount <= t.slidesToShow ||
          t.currentSlide >= t.slideCount - t.slidesToShow) &&
          (n = !1)),
      n
    );
  },
  _ = function (t, n) {
    var s = {};
    return (
      n.forEach(function (e) {
        return (s[e] = t[e]);
      }),
      s
    );
  },
  He = function (t) {
    var n = w.Children.count(t.children),
      s = t.listRef,
      e = Math.ceil(ne(s)),
      a = t.trackRef && t.trackRef.node,
      i = Math.ceil(ne(a)),
      r;
    if (t.vertical) r = e;
    else {
      var o = t.centerMode && parseInt(t.centerPadding) * 2;
      typeof t.centerPadding == 'string' && t.centerPadding.slice(-1) === '%' && (o *= e / 100),
        (r = Math.ceil((e - o) / t.slidesToShow));
    }
    var u = s && ie(s.querySelector('[data-index="0"]')),
      p = u * t.slidesToShow,
      f = t.currentSlide === void 0 ? t.initialSlide : t.currentSlide;
    t.rtl && t.currentSlide === void 0 && (f = n - 1 - t.initialSlide);
    var m = t.lazyLoadedList || [],
      C = K(c(c({}, t), {}, { currentSlide: f, lazyLoadedList: m }));
    m = m.concat(C);
    var x = {
      slideCount: n,
      slideWidth: r,
      listWidth: e,
      trackWidth: i,
      currentSlide: f,
      slideHeight: u,
      listHeight: p,
      lazyLoadedList: m,
    };
    return t.autoplaying === null && t.autoplay && (x.autoplaying = 'playing'), x;
  },
  Oe = function (t) {
    var n = t.waitForAnimate,
      s = t.animating,
      e = t.fade,
      a = t.infinite,
      i = t.index,
      r = t.slideCount,
      o = t.lazyLoad,
      u = t.currentSlide,
      p = t.centerMode,
      f = t.slidesToScroll,
      m = t.slidesToShow,
      C = t.useCSS,
      x = t.lazyLoadedList;
    if (n && s) return {};
    var g = i,
      h,
      k,
      v,
      S = {},
      T = {},
      N = a ? i : te(i, 0, r - 1);
    if (e) {
      if (!a && (i < 0 || i >= r)) return {};
      i < 0 ? (g = i + r) : i >= r && (g = i - r),
        o && x.indexOf(g) < 0 && (x = x.concat(g)),
        (S = { animating: !0, currentSlide: g, lazyLoadedList: x, targetSlide: g }),
        (T = { animating: !1, targetSlide: g });
    } else
      (h = g),
        g < 0
          ? ((h = g + r), a ? r % f !== 0 && (h = r - (r % f)) : (h = 0))
          : !Q(t) && g > u
          ? (g = h = u)
          : p && g >= r
          ? ((g = a ? r : r - 1), (h = a ? 0 : r - 1))
          : g >= r && ((h = g - r), a ? r % f !== 0 && (h = 0) : (h = r - m)),
        !a && g + m >= r && (h = r - m),
        (k = Y(c(c({}, t), {}, { slideIndex: g }))),
        (v = Y(c(c({}, t), {}, { slideIndex: h }))),
        a || (k === v && (g = h), (k = v)),
        o && (x = x.concat(K(c(c({}, t), {}, { currentSlide: g })))),
        C
          ? ((S = {
              animating: !0,
              currentSlide: h,
              trackStyle: ve(c(c({}, t), {}, { left: k })),
              lazyLoadedList: x,
              targetSlide: N,
            }),
            (T = {
              animating: !1,
              currentSlide: h,
              trackStyle: G(c(c({}, t), {}, { left: v })),
              swipeLeft: null,
              targetSlide: N,
            }))
          : (S = { currentSlide: h, trackStyle: G(c(c({}, t), {}, { left: v })), lazyLoadedList: x, targetSlide: N });
    return { state: S, nextState: T };
  },
  ze = function (t, n) {
    var s,
      e,
      a,
      i,
      r,
      o = t.slidesToScroll,
      u = t.slidesToShow,
      p = t.slideCount,
      f = t.currentSlide,
      m = t.targetSlide,
      C = t.lazyLoad,
      x = t.infinite;
    if (((i = p % o !== 0), (s = i ? 0 : (p - f) % o), n.message === 'previous'))
      (a = s === 0 ? o : u - s), (r = f - a), C && !x && ((e = f - a), (r = e === -1 ? p - 1 : e)), x || (r = m - o);
    else if (n.message === 'next')
      (a = s === 0 ? o : s), (r = f + a), C && !x && (r = ((f + o) % p) + s), x || (r = m + o);
    else if (n.message === 'dots') r = n.index * n.slidesToScroll;
    else if (n.message === 'children') {
      if (((r = n.index), x)) {
        var g = Be(c(c({}, t), {}, { targetSlide: r }));
        r > n.currentSlide && g === 'left' ? (r = r - p) : r < n.currentSlide && g === 'right' && (r = r + p);
      }
    } else n.message === 'index' && (r = Number(n.index));
    return r;
  },
  Pe = function (t, n, s) {
    return t.target.tagName.match('TEXTAREA|INPUT|SELECT') || !n
      ? ''
      : t.keyCode === 37
      ? s
        ? 'next'
        : 'previous'
      : t.keyCode === 39
      ? s
        ? 'previous'
        : 'next'
      : '';
  },
  We = function (t, n, s) {
    return (
      t.target.tagName === 'IMG' && I(t),
      !n || (!s && t.type.indexOf('mouse') !== -1)
        ? ''
        : {
            dragging: !0,
            touchObject: {
              startX: t.touches ? t.touches[0].pageX : t.clientX,
              startY: t.touches ? t.touches[0].pageY : t.clientY,
              curX: t.touches ? t.touches[0].pageX : t.clientX,
              curY: t.touches ? t.touches[0].pageY : t.clientY,
            },
          }
    );
  },
  Ie = function (t, n) {
    var s = n.scrolling,
      e = n.animating,
      a = n.vertical,
      i = n.swipeToSlide,
      r = n.verticalSwiping,
      o = n.rtl,
      u = n.currentSlide,
      p = n.edgeFriction,
      f = n.edgeDragged,
      m = n.onEdge,
      C = n.swiped,
      x = n.swiping,
      g = n.slideCount,
      h = n.slidesToScroll,
      k = n.infinite,
      v = n.touchObject,
      S = n.swipeEvent,
      T = n.listHeight,
      N = n.listWidth;
    if (!s) {
      if (e) return I(t);
      a && i && r && I(t);
      var L,
        E = {},
        W = Y(n);
      (v.curX = t.touches ? t.touches[0].pageX : t.clientX),
        (v.curY = t.touches ? t.touches[0].pageY : t.clientY),
        (v.swipeLength = Math.round(Math.sqrt(Math.pow(v.curX - v.startX, 2))));
      var $ = Math.round(Math.sqrt(Math.pow(v.curY - v.startY, 2)));
      if (!r && !x && $ > 10) return { scrolling: !0 };
      r && (v.swipeLength = $);
      var P = (o ? -1 : 1) * (v.curX > v.startX ? 1 : -1);
      r && (P = v.curY > v.startY ? 1 : -1);
      var V = Math.ceil(g / h),
        H = ge(n.touchObject, r),
        q = v.swipeLength;
      return (
        k ||
          (((u === 0 && (H === 'right' || H === 'down')) ||
            (u + 1 >= V && (H === 'left' || H === 'up')) ||
            (!Q(n) && (H === 'left' || H === 'up'))) &&
            ((q = v.swipeLength * p), f === !1 && m && (m(H), (E.edgeDragged = !0)))),
        !C && S && (S(H), (E.swiped = !0)),
        a ? (L = W + q * (T / N) * P) : o ? (L = W - q * P) : (L = W + q * P),
        r && (L = W + q * P),
        (E = c(c({}, E), {}, { touchObject: v, swipeLeft: L, trackStyle: G(c(c({}, n), {}, { left: L })) })),
        Math.abs(v.curX - v.startX) < Math.abs(v.curY - v.startY) * 0.8 ||
          (v.swipeLength > 10 && ((E.swiping = !0), I(t))),
        E
      );
    }
  },
  Ae = function (t, n) {
    var s = n.dragging,
      e = n.swipe,
      a = n.touchObject,
      i = n.listWidth,
      r = n.touchThreshold,
      o = n.verticalSwiping,
      u = n.listHeight,
      p = n.swipeToSlide,
      f = n.scrolling,
      m = n.onSwipe,
      C = n.targetSlide,
      x = n.currentSlide,
      g = n.infinite;
    if (!s) return e && I(t), {};
    var h = o ? u / r : i / r,
      k = ge(a, o),
      v = { dragging: !1, edgeDragged: !1, scrolling: !1, swiping: !1, swiped: !1, swipeLeft: null, touchObject: {} };
    if (f || !a.swipeLength) return v;
    if (a.swipeLength > h) {
      I(t), m && m(k);
      var S,
        T,
        N = g ? x : C;
      switch (k) {
        case 'left':
        case 'up':
          (T = N + se(n)), (S = p ? le(n, T) : T), (v.currentDirection = 0);
          break;
        case 'right':
        case 'down':
          (T = N - se(n)), (S = p ? le(n, T) : T), (v.currentDirection = 1);
          break;
        default:
          S = N;
      }
      v.triggerSlideHandler = S;
    } else {
      var L = Y(n);
      v.trackStyle = ve(c(c({}, n), {}, { left: L }));
    }
    return v;
  },
  Re = function (t) {
    for (
      var n = t.infinite ? t.slideCount * 2 : t.slideCount,
        s = t.infinite ? t.slidesToShow * -1 : 0,
        e = t.infinite ? t.slidesToShow * -1 : 0,
        a = [];
      s < n;

    )
      a.push(s), (s = e + t.slidesToScroll), (e += Math.min(t.slidesToScroll, t.slidesToShow));
    return a;
  },
  le = function (t, n) {
    var s = Re(t),
      e = 0;
    if (n > s[s.length - 1]) n = s[s.length - 1];
    else
      for (var a in s) {
        if (n < s[a]) {
          n = e;
          break;
        }
        e = s[a];
      }
    return n;
  },
  se = function (t) {
    var n = t.centerMode ? t.slideWidth * Math.floor(t.slidesToShow / 2) : 0;
    if (t.swipeToSlide) {
      var s,
        e = t.listRef,
        a = (e.querySelectorAll && e.querySelectorAll('.slick-slide')) || [];
      if (
        (Array.from(a).every(function (o) {
          if (t.vertical) {
            if (o.offsetTop + ie(o) / 2 > t.swipeLeft * -1) return (s = o), !1;
          } else if (o.offsetLeft - n + ne(o) / 2 > t.swipeLeft * -1) return (s = o), !1;
          return !0;
        }),
        !s)
      )
        return 0;
      var i = t.rtl === !0 ? t.slideCount - t.currentSlide : t.currentSlide,
        r = Math.abs(s.dataset.index - i) || 1;
      return r;
    } else return t.slidesToScroll;
  },
  re = function (t, n) {
    return n.reduce(function (s, e) {
      return s && t.hasOwnProperty(e);
    }, !0)
      ? null
      : console.error('Keys Missing:', t);
  },
  G = function (t) {
    re(t, ['left', 'variableWidth', 'slideCount', 'slidesToShow', 'slideWidth']);
    var n,
      s,
      e = t.slideCount + 2 * t.slidesToShow;
    t.vertical ? (s = e * t.slideHeight) : (n = De(t) * t.slideWidth);
    var a = { opacity: 1, transition: '', WebkitTransition: '' };
    if (t.useTransform) {
      var i = t.vertical ? 'translate3d(0px, ' + t.left + 'px, 0px)' : 'translate3d(' + t.left + 'px, 0px, 0px)',
        r = t.vertical ? 'translate3d(0px, ' + t.left + 'px, 0px)' : 'translate3d(' + t.left + 'px, 0px, 0px)',
        o = t.vertical ? 'translateY(' + t.left + 'px)' : 'translateX(' + t.left + 'px)';
      a = c(c({}, a), {}, { WebkitTransform: i, transform: r, msTransform: o });
    } else t.vertical ? (a.top = t.left) : (a.left = t.left);
    return (
      t.fade && (a = { opacity: 1 }),
      n && (a.width = n),
      s && (a.height = s),
      window &&
        !window.addEventListener &&
        window.attachEvent &&
        (t.vertical ? (a.marginTop = t.left + 'px') : (a.marginLeft = t.left + 'px')),
      a
    );
  },
  ve = function (t) {
    re(t, ['left', 'variableWidth', 'slideCount', 'slidesToShow', 'slideWidth', 'speed', 'cssEase']);
    var n = G(t);
    return (
      t.useTransform
        ? ((n.WebkitTransition = '-webkit-transform ' + t.speed + 'ms ' + t.cssEase),
          (n.transition = 'transform ' + t.speed + 'ms ' + t.cssEase))
        : t.vertical
        ? (n.transition = 'top ' + t.speed + 'ms ' + t.cssEase)
        : (n.transition = 'left ' + t.speed + 'ms ' + t.cssEase),
      n
    );
  },
  Y = function (t) {
    if (t.unslick) return 0;
    re(t, [
      'slideIndex',
      'trackRef',
      'infinite',
      'centerMode',
      'slideCount',
      'slidesToShow',
      'slidesToScroll',
      'slideWidth',
      'listWidth',
      'variableWidth',
      'slideHeight',
    ]);
    var n = t.slideIndex,
      s = t.trackRef,
      e = t.infinite,
      a = t.centerMode,
      i = t.slideCount,
      r = t.slidesToShow,
      o = t.slidesToScroll,
      u = t.slideWidth,
      p = t.listWidth,
      f = t.variableWidth,
      m = t.slideHeight,
      C = t.fade,
      x = t.vertical,
      g = 0,
      h,
      k,
      v = 0;
    if (C || t.slideCount === 1) return 0;
    var S = 0;
    if (
      (e
        ? ((S = -z(t)), i % o !== 0 && n + o > i && (S = -(n > i ? r - (n - i) : i % o)), a && (S += parseInt(r / 2)))
        : (i % o !== 0 && n + o > i && (S = r - (i % o)), a && (S = parseInt(r / 2))),
      (g = S * u),
      (v = S * m),
      x ? (h = n * m * -1 + v) : (h = n * u * -1 + g),
      f === !0)
    ) {
      var T,
        N = s && s.node;
      if (((T = n + z(t)), (k = N && N.childNodes[T]), (h = k ? k.offsetLeft * -1 : 0), a === !0)) {
        (T = e ? n + z(t) : n), (k = N && N.children[T]), (h = 0);
        for (var L = 0; L < T; L++) h -= N && N.children[L] && N.children[L].offsetWidth;
        (h -= parseInt(t.centerPadding)), (h += k && (p - k.offsetWidth) / 2);
      }
    }
    return h;
  },
  z = function (t) {
    return t.unslick || !t.infinite ? 0 : t.variableWidth ? t.slideCount : t.slidesToShow + (t.centerMode ? 1 : 0);
  },
  U = function (t) {
    return t.unslick || !t.infinite ? 0 : t.slideCount;
  },
  De = function (t) {
    return t.slideCount === 1 ? 1 : z(t) + t.slideCount + U(t);
  },
  Be = function (t) {
    return t.targetSlide > t.currentSlide
      ? t.targetSlide > t.currentSlide + Fe(t)
        ? 'left'
        : 'right'
      : t.targetSlide < t.currentSlide - Xe(t)
      ? 'right'
      : 'left';
  },
  Fe = function (t) {
    var n = t.slidesToShow,
      s = t.centerMode,
      e = t.rtl,
      a = t.centerPadding;
    if (s) {
      var i = (n - 1) / 2 + 1;
      return parseInt(a) > 0 && (i += 1), e && n % 2 === 0 && (i += 1), i;
    }
    return e ? 0 : n - 1;
  },
  Xe = function (t) {
    var n = t.slidesToShow,
      s = t.centerMode,
      e = t.rtl,
      a = t.centerPadding;
    if (s) {
      var i = (n - 1) / 2 + 1;
      return parseInt(a) > 0 && (i += 1), !e && n % 2 === 0 && (i += 1), i;
    }
    return e ? n - 1 : 0;
  },
  oe = function () {
    return !!(typeof window < 'u' && window.document && window.document.createElement);
  },
  J = function (t) {
    var n, s, e, a, i;
    t.rtl ? (i = t.slideCount - 1 - t.index) : (i = t.index),
      (e = i < 0 || i >= t.slideCount),
      t.centerMode
        ? ((a = Math.floor(t.slidesToShow / 2)),
          (s = (i - t.currentSlide) % t.slideCount === 0),
          i > t.currentSlide - a - 1 && i <= t.currentSlide + a && (n = !0))
        : (n = t.currentSlide <= i && i < t.currentSlide + t.slidesToShow);
    var r;
    t.targetSlide < 0
      ? (r = t.targetSlide + t.slideCount)
      : t.targetSlide >= t.slideCount
      ? (r = t.targetSlide - t.slideCount)
      : (r = t.targetSlide);
    var o = i === r;
    return { 'slick-slide': !0, 'slick-active': n, 'slick-center': s, 'slick-cloned': e, 'slick-current': o };
  },
  qe = function (t) {
    var n = {};
    return (
      (t.variableWidth === void 0 || t.variableWidth === !1) && (n.width = t.slideWidth),
      t.fade &&
        ((n.position = 'relative'),
        t.vertical && t.slideHeight
          ? (n.top = -t.index * parseInt(t.slideHeight))
          : (n.left = -t.index * parseInt(t.slideWidth)),
        (n.opacity = t.currentSlide === t.index ? 1 : 0),
        t.useCSS &&
          (n.transition = 'opacity ' + t.speed + 'ms ' + t.cssEase + ', visibility ' + t.speed + 'ms ' + t.cssEase)),
      n
    );
  },
  Z = function (t, n) {
    return t.key + '-' + n;
  },
  Ge = function (t) {
    var n,
      s = [],
      e = [],
      a = [],
      i = w.Children.count(t.children),
      r = he(t),
      o = pe(t);
    return (
      w.Children.forEach(t.children, function (u, p) {
        var f,
          m = { message: 'children', index: p, slidesToScroll: t.slidesToScroll, currentSlide: t.currentSlide };
        !t.lazyLoad || (t.lazyLoad && t.lazyLoadedList.indexOf(p) >= 0) ? (f = u) : (f = w.createElement('div', null));
        var C = qe(c(c({}, t), {}, { index: p })),
          x = f.props.className || '',
          g = J(c(c({}, t), {}, { index: p }));
        if (
          (s.push(
            w.cloneElement(f, {
              key: 'original' + Z(f, p),
              'data-index': p,
              className: O(g, x),
              tabIndex: '-1',
              'aria-hidden': !g['slick-active'],
              style: c(c({ outline: 'none' }, f.props.style || {}), C),
              onClick: function (v) {
                f.props && f.props.onClick && f.props.onClick(v), t.focusOnSelect && t.focusOnSelect(m);
              },
            })
          ),
          t.infinite && t.fade === !1)
        ) {
          var h = i - p;
          h <= z(t) &&
            i !== t.slidesToShow &&
            ((n = -h),
            n >= r && (f = u),
            (g = J(c(c({}, t), {}, { index: n }))),
            e.push(
              w.cloneElement(f, {
                key: 'precloned' + Z(f, n),
                'data-index': n,
                tabIndex: '-1',
                className: O(g, x),
                'aria-hidden': !g['slick-active'],
                style: c(c({}, f.props.style || {}), C),
                onClick: function (v) {
                  f.props && f.props.onClick && f.props.onClick(v), t.focusOnSelect && t.focusOnSelect(m);
                },
              })
            )),
            i !== t.slidesToShow &&
              ((n = i + p),
              n < o && (f = u),
              (g = J(c(c({}, t), {}, { index: n }))),
              a.push(
                w.cloneElement(f, {
                  key: 'postcloned' + Z(f, n),
                  'data-index': n,
                  tabIndex: '-1',
                  className: O(g, x),
                  'aria-hidden': !g['slick-active'],
                  style: c(c({}, f.props.style || {}), C),
                  onClick: function (v) {
                    f.props && f.props.onClick && f.props.onClick(v), t.focusOnSelect && t.focusOnSelect(m);
                  },
                })
              ));
        }
      }),
      t.rtl ? e.concat(s, a).reverse() : e.concat(s, a)
    );
  },
  Ye = (function (d) {
    D(n, d);
    var t = B(n);
    function n() {
      var s;
      F(this, n);
      for (var e = arguments.length, a = new Array(e), i = 0; i < e; i++) a[i] = arguments[i];
      return (
        (s = t.call.apply(t, [this].concat(a))),
        y(b(s), 'node', null),
        y(b(s), 'handleRef', function (r) {
          s.node = r;
        }),
        s
      );
    }
    return (
      X(n, [
        {
          key: 'render',
          value: function () {
            var e = Ge(this.props),
              a = this.props,
              i = a.onMouseEnter,
              r = a.onMouseOver,
              o = a.onMouseLeave,
              u = { onMouseEnter: i, onMouseOver: r, onMouseLeave: o };
            return w.createElement(
              'div',
              A({ ref: this.handleRef, className: 'slick-track', style: this.props.trackStyle }, u),
              e
            );
          },
        },
      ]),
      n
    );
  })(w.PureComponent),
  $e = function (t) {
    var n;
    return (
      t.infinite
        ? (n = Math.ceil(t.slideCount / t.slidesToScroll))
        : (n = Math.ceil((t.slideCount - t.slidesToShow) / t.slidesToScroll) + 1),
      n
    );
  },
  Ue = (function (d) {
    D(n, d);
    var t = B(n);
    function n() {
      return F(this, n), t.apply(this, arguments);
    }
    return (
      X(n, [
        {
          key: 'clickHandler',
          value: function (e, a) {
            a.preventDefault(), this.props.clickHandler(e);
          },
        },
        {
          key: 'render',
          value: function () {
            for (
              var e = this.props,
                a = e.onMouseEnter,
                i = e.onMouseOver,
                r = e.onMouseLeave,
                o = e.infinite,
                u = e.slidesToScroll,
                p = e.slidesToShow,
                f = e.slideCount,
                m = e.currentSlide,
                C = $e({ slideCount: f, slidesToScroll: u, slidesToShow: p, infinite: o }),
                x = { onMouseEnter: a, onMouseOver: i, onMouseLeave: r },
                g = [],
                h = 0;
              h < C;
              h++
            ) {
              var k = (h + 1) * u - 1,
                v = o ? k : te(k, 0, f - 1),
                S = v - (u - 1),
                T = o ? S : te(S, 0, f - 1),
                N = O({ 'slick-active': o ? m >= T && m <= v : m === T }),
                L = { message: 'dots', index: h, slidesToScroll: u, currentSlide: m },
                E = this.clickHandler.bind(this, L);
              g = g.concat(
                w.createElement(
                  'li',
                  { key: h, className: N },
                  w.cloneElement(this.props.customPaging(h), { onClick: E })
                )
              );
            }
            return w.cloneElement(this.props.appendDots(g), c({ className: this.props.dotsClass }, x));
          },
        },
      ]),
      n
    );
  })(w.PureComponent),
  Ke = (function (d) {
    D(n, d);
    var t = B(n);
    function n() {
      return F(this, n), t.apply(this, arguments);
    }
    return (
      X(n, [
        {
          key: 'clickHandler',
          value: function (e, a) {
            a && a.preventDefault(), this.props.clickHandler(e, a);
          },
        },
        {
          key: 'render',
          value: function () {
            var e = { 'slick-arrow': !0, 'slick-prev': !0 },
              a = this.clickHandler.bind(this, { message: 'previous' });
            !this.props.infinite &&
              (this.props.currentSlide === 0 || this.props.slideCount <= this.props.slidesToShow) &&
              ((e['slick-disabled'] = !0), (a = null));
            var i = { key: '0', 'data-role': 'none', className: O(e), style: { display: 'block' }, onClick: a },
              r = { currentSlide: this.props.currentSlide, slideCount: this.props.slideCount },
              o;
            return (
              this.props.prevArrow
                ? (o = w.cloneElement(this.props.prevArrow, c(c({}, i), r)))
                : (o = w.createElement('button', A({ key: '0', type: 'button' }, i), ' ', 'Previous')),
              o
            );
          },
        },
      ]),
      n
    );
  })(w.PureComponent),
  Qe = (function (d) {
    D(n, d);
    var t = B(n);
    function n() {
      return F(this, n), t.apply(this, arguments);
    }
    return (
      X(n, [
        {
          key: 'clickHandler',
          value: function (e, a) {
            a && a.preventDefault(), this.props.clickHandler(e, a);
          },
        },
        {
          key: 'render',
          value: function () {
            var e = { 'slick-arrow': !0, 'slick-next': !0 },
              a = this.clickHandler.bind(this, { message: 'next' });
            Q(this.props) || ((e['slick-disabled'] = !0), (a = null));
            var i = { key: '1', 'data-role': 'none', className: O(e), style: { display: 'block' }, onClick: a },
              r = { currentSlide: this.props.currentSlide, slideCount: this.props.slideCount },
              o;
            return (
              this.props.nextArrow
                ? (o = w.cloneElement(this.props.nextArrow, c(c({}, i), r)))
                : (o = w.createElement('button', A({ key: '1', type: 'button' }, i), ' ', 'Next')),
              o
            );
          },
        },
      ]),
      n
    );
  })(w.PureComponent),
  Ve = ['animating'],
  _e = (function (d) {
    D(n, d);
    var t = B(n);
    function n(s) {
      var e;
      F(this, n),
        (e = t.call(this, s)),
        y(b(e), 'listRefHandler', function (i) {
          return (e.list = i);
        }),
        y(b(e), 'trackRefHandler', function (i) {
          return (e.track = i);
        }),
        y(b(e), 'adaptHeight', function () {
          if (e.props.adaptiveHeight && e.list) {
            var i = e.list.querySelector('[data-index="'.concat(e.state.currentSlide, '"]'));
            e.list.style.height = ie(i) + 'px';
          }
        }),
        y(b(e), 'componentDidMount', function () {
          if ((e.props.onInit && e.props.onInit(), e.props.lazyLoad)) {
            var i = K(c(c({}, e.props), e.state));
            i.length > 0 &&
              (e.setState(function (o) {
                return { lazyLoadedList: o.lazyLoadedList.concat(i) };
              }),
              e.props.onLazyLoad && e.props.onLazyLoad(i));
          }
          var r = c({ listRef: e.list, trackRef: e.track }, e.props);
          e.updateState(r, !0, function () {
            e.adaptHeight(), e.props.autoplay && e.autoPlay('playing');
          }),
            e.props.lazyLoad === 'progressive' && (e.lazyLoadTimer = setInterval(e.progressiveLazyLoad, 1e3)),
            (e.ro = new me(function () {
              e.state.animating
                ? (e.onWindowResized(!1),
                  e.callbackTimers.push(
                    setTimeout(function () {
                      return e.onWindowResized();
                    }, e.props.speed)
                  ))
                : e.onWindowResized();
            })),
            e.ro.observe(e.list),
            document.querySelectorAll &&
              Array.prototype.forEach.call(document.querySelectorAll('.slick-slide'), function (o) {
                (o.onfocus = e.props.pauseOnFocus ? e.onSlideFocus : null),
                  (o.onblur = e.props.pauseOnFocus ? e.onSlideBlur : null);
              }),
            window.addEventListener
              ? window.addEventListener('resize', e.onWindowResized)
              : window.attachEvent('onresize', e.onWindowResized);
        }),
        y(b(e), 'componentWillUnmount', function () {
          e.animationEndCallback && clearTimeout(e.animationEndCallback),
            e.lazyLoadTimer && clearInterval(e.lazyLoadTimer),
            e.callbackTimers.length &&
              (e.callbackTimers.forEach(function (i) {
                return clearTimeout(i);
              }),
              (e.callbackTimers = [])),
            window.addEventListener
              ? window.removeEventListener('resize', e.onWindowResized)
              : window.detachEvent('onresize', e.onWindowResized),
            e.autoplayTimer && clearInterval(e.autoplayTimer),
            e.ro.disconnect();
        }),
        y(b(e), 'componentDidUpdate', function (i) {
          if ((e.checkImagesLoad(), e.props.onReInit && e.props.onReInit(), e.props.lazyLoad)) {
            var r = K(c(c({}, e.props), e.state));
            r.length > 0 &&
              (e.setState(function (p) {
                return { lazyLoadedList: p.lazyLoadedList.concat(r) };
              }),
              e.props.onLazyLoad && e.props.onLazyLoad(r));
          }
          e.adaptHeight();
          var o = c(c({ listRef: e.list, trackRef: e.track }, e.props), e.state),
            u = e.didPropsChange(i);
          u &&
            e.updateState(o, u, function () {
              e.state.currentSlide >= w.Children.count(e.props.children) &&
                e.changeSlide({
                  message: 'index',
                  index: w.Children.count(e.props.children) - e.props.slidesToShow,
                  currentSlide: e.state.currentSlide,
                }),
                (i.autoplay !== e.props.autoplay || i.autoplaySpeed !== e.props.autoplaySpeed) &&
                  (!i.autoplay && e.props.autoplay
                    ? e.autoPlay('playing')
                    : e.props.autoplay
                    ? e.autoPlay('update')
                    : e.pause('paused'));
            });
        }),
        y(b(e), 'onWindowResized', function (i) {
          e.debouncedResize && e.debouncedResize.cancel(),
            (e.debouncedResize = xe(50, function () {
              return e.resizeWindow(i);
            })),
            e.debouncedResize();
        }),
        y(b(e), 'resizeWindow', function () {
          var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0,
            r = !!(e.track && e.track.node);
          if (r) {
            var o = c(c({ listRef: e.list, trackRef: e.track }, e.props), e.state);
            e.updateState(o, i, function () {
              e.props.autoplay ? e.autoPlay('update') : e.pause('paused');
            }),
              e.setState({ animating: !1 }),
              clearTimeout(e.animationEndCallback),
              delete e.animationEndCallback;
          }
        }),
        y(b(e), 'updateState', function (i, r, o) {
          var u = He(i);
          i = c(c(c({}, i), u), {}, { slideIndex: u.currentSlide });
          var p = Y(i);
          i = c(c({}, i), {}, { left: p });
          var f = G(i);
          (r || w.Children.count(e.props.children) !== w.Children.count(i.children)) && (u.trackStyle = f),
            e.setState(u, o);
        }),
        y(b(e), 'ssrInit', function () {
          if (e.props.variableWidth) {
            var i = 0,
              r = 0,
              o = [],
              u = z(c(c(c({}, e.props), e.state), {}, { slideCount: e.props.children.length })),
              p = U(c(c(c({}, e.props), e.state), {}, { slideCount: e.props.children.length }));
            e.props.children.forEach(function (E) {
              o.push(E.props.style.width), (i += E.props.style.width);
            });
            for (var f = 0; f < u; f++) (r += o[o.length - 1 - f]), (i += o[o.length - 1 - f]);
            for (var m = 0; m < p; m++) i += o[m];
            for (var C = 0; C < e.state.currentSlide; C++) r += o[C];
            var x = { width: i + 'px', left: -r + 'px' };
            if (e.props.centerMode) {
              var g = ''.concat(o[e.state.currentSlide], 'px');
              x.left = 'calc('.concat(x.left, ' + (100% - ').concat(g, ') / 2 ) ');
            }
            return { trackStyle: x };
          }
          var h = w.Children.count(e.props.children),
            k = c(c(c({}, e.props), e.state), {}, { slideCount: h }),
            v = z(k) + U(k) + h,
            S = (100 / e.props.slidesToShow) * v,
            T = 100 / v,
            N = (-T * (z(k) + e.state.currentSlide) * S) / 100;
          e.props.centerMode && (N += (100 - (T * S) / 100) / 2);
          var L = { width: S + '%', left: N + '%' };
          return { slideWidth: T + '%', trackStyle: L };
        }),
        y(b(e), 'checkImagesLoad', function () {
          var i = (e.list && e.list.querySelectorAll && e.list.querySelectorAll('.slick-slide img')) || [],
            r = i.length,
            o = 0;
          Array.prototype.forEach.call(i, function (u) {
            var p = function () {
              return ++o && o >= r && e.onWindowResized();
            };
            if (!u.onclick)
              u.onclick = function () {
                return u.parentNode.focus();
              };
            else {
              var f = u.onclick;
              u.onclick = function (m) {
                f(m), u.parentNode.focus();
              };
            }
            u.onload ||
              (e.props.lazyLoad
                ? (u.onload = function () {
                    e.adaptHeight(), e.callbackTimers.push(setTimeout(e.onWindowResized, e.props.speed));
                  })
                : ((u.onload = p),
                  (u.onerror = function () {
                    p(), e.props.onLazyLoadError && e.props.onLazyLoadError();
                  })));
          });
        }),
        y(b(e), 'progressiveLazyLoad', function () {
          for (var i = [], r = c(c({}, e.props), e.state), o = e.state.currentSlide; o < e.state.slideCount + U(r); o++)
            if (e.state.lazyLoadedList.indexOf(o) < 0) {
              i.push(o);
              break;
            }
          for (var u = e.state.currentSlide - 1; u >= -z(r); u--)
            if (e.state.lazyLoadedList.indexOf(u) < 0) {
              i.push(u);
              break;
            }
          i.length > 0
            ? (e.setState(function (p) {
                return { lazyLoadedList: p.lazyLoadedList.concat(i) };
              }),
              e.props.onLazyLoad && e.props.onLazyLoad(i))
            : e.lazyLoadTimer && (clearInterval(e.lazyLoadTimer), delete e.lazyLoadTimer);
        }),
        y(b(e), 'slideHandler', function (i) {
          var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
            o = e.props,
            u = o.asNavFor,
            p = o.beforeChange,
            f = o.onLazyLoad,
            m = o.speed,
            C = o.afterChange,
            x = e.state.currentSlide,
            g = Oe(c(c(c({ index: i }, e.props), e.state), {}, { trackRef: e.track, useCSS: e.props.useCSS && !r })),
            h = g.state,
            k = g.nextState;
          if (h) {
            p && p(x, h.currentSlide);
            var v = h.lazyLoadedList.filter(function (S) {
              return e.state.lazyLoadedList.indexOf(S) < 0;
            });
            f && v.length > 0 && f(v),
              !e.props.waitForAnimate &&
                e.animationEndCallback &&
                (clearTimeout(e.animationEndCallback), C && C(x), delete e.animationEndCallback),
              e.setState(h, function () {
                u && e.asNavForIndex !== i && ((e.asNavForIndex = i), u.innerSlider.slideHandler(i)),
                  k &&
                    (e.animationEndCallback = setTimeout(function () {
                      var S = k.animating,
                        T = Se(k, Ve);
                      e.setState(T, function () {
                        e.callbackTimers.push(
                          setTimeout(function () {
                            return e.setState({ animating: S });
                          }, 10)
                        ),
                          C && C(h.currentSlide),
                          delete e.animationEndCallback;
                      });
                    }, m));
              });
          }
        }),
        y(b(e), 'changeSlide', function (i) {
          var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
            o = c(c({}, e.props), e.state),
            u = ze(o, i);
          if (
            !(u !== 0 && !u) &&
            (r === !0 ? e.slideHandler(u, r) : e.slideHandler(u),
            e.props.autoplay && e.autoPlay('update'),
            e.props.focusOnSelect)
          ) {
            var p = e.list.querySelectorAll('.slick-current');
            p[0] && p[0].focus();
          }
        }),
        y(b(e), 'clickHandler', function (i) {
          e.clickable === !1 && (i.stopPropagation(), i.preventDefault()), (e.clickable = !0);
        }),
        y(b(e), 'keyHandler', function (i) {
          var r = Pe(i, e.props.accessibility, e.props.rtl);
          r !== '' && e.changeSlide({ message: r });
        }),
        y(b(e), 'selectHandler', function (i) {
          e.changeSlide(i);
        }),
        y(b(e), 'disableBodyScroll', function () {
          var i = function (o) {
            (o = o || window.event), o.preventDefault && o.preventDefault(), (o.returnValue = !1);
          };
          window.ontouchmove = i;
        }),
        y(b(e), 'enableBodyScroll', function () {
          window.ontouchmove = null;
        }),
        y(b(e), 'swipeStart', function (i) {
          e.props.verticalSwiping && e.disableBodyScroll();
          var r = We(i, e.props.swipe, e.props.draggable);
          r !== '' && e.setState(r);
        }),
        y(b(e), 'swipeMove', function (i) {
          var r = Ie(
            i,
            c(c(c({}, e.props), e.state), {}, { trackRef: e.track, listRef: e.list, slideIndex: e.state.currentSlide })
          );
          r && (r.swiping && (e.clickable = !1), e.setState(r));
        }),
        y(b(e), 'swipeEnd', function (i) {
          var r = Ae(
            i,
            c(c(c({}, e.props), e.state), {}, { trackRef: e.track, listRef: e.list, slideIndex: e.state.currentSlide })
          );
          if (r) {
            var o = r.triggerSlideHandler;
            delete r.triggerSlideHandler,
              e.setState(r),
              o !== void 0 && (e.slideHandler(o), e.props.verticalSwiping && e.enableBodyScroll());
          }
        }),
        y(b(e), 'touchEnd', function (i) {
          e.swipeEnd(i), (e.clickable = !0);
        }),
        y(b(e), 'slickPrev', function () {
          e.callbackTimers.push(
            setTimeout(function () {
              return e.changeSlide({ message: 'previous' });
            }, 0)
          );
        }),
        y(b(e), 'slickNext', function () {
          e.callbackTimers.push(
            setTimeout(function () {
              return e.changeSlide({ message: 'next' });
            }, 0)
          );
        }),
        y(b(e), 'slickGoTo', function (i) {
          var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
          if (((i = Number(i)), isNaN(i))) return '';
          e.callbackTimers.push(
            setTimeout(function () {
              return e.changeSlide({ message: 'index', index: i, currentSlide: e.state.currentSlide }, r);
            }, 0)
          );
        }),
        y(b(e), 'play', function () {
          var i;
          if (e.props.rtl) i = e.state.currentSlide - e.props.slidesToScroll;
          else if (Q(c(c({}, e.props), e.state))) i = e.state.currentSlide + e.props.slidesToScroll;
          else return !1;
          e.slideHandler(i);
        }),
        y(b(e), 'autoPlay', function (i) {
          e.autoplayTimer && clearInterval(e.autoplayTimer);
          var r = e.state.autoplaying;
          if (i === 'update') {
            if (r === 'hovered' || r === 'focused' || r === 'paused') return;
          } else if (i === 'leave') {
            if (r === 'paused' || r === 'focused') return;
          } else if (i === 'blur' && (r === 'paused' || r === 'hovered')) return;
          (e.autoplayTimer = setInterval(e.play, e.props.autoplaySpeed + 50)), e.setState({ autoplaying: 'playing' });
        }),
        y(b(e), 'pause', function (i) {
          e.autoplayTimer && (clearInterval(e.autoplayTimer), (e.autoplayTimer = null));
          var r = e.state.autoplaying;
          i === 'paused'
            ? e.setState({ autoplaying: 'paused' })
            : i === 'focused'
            ? (r === 'hovered' || r === 'playing') && e.setState({ autoplaying: 'focused' })
            : r === 'playing' && e.setState({ autoplaying: 'hovered' });
        }),
        y(b(e), 'onDotsOver', function () {
          return e.props.autoplay && e.pause('hovered');
        }),
        y(b(e), 'onDotsLeave', function () {
          return e.props.autoplay && e.state.autoplaying === 'hovered' && e.autoPlay('leave');
        }),
        y(b(e), 'onTrackOver', function () {
          return e.props.autoplay && e.pause('hovered');
        }),
        y(b(e), 'onTrackLeave', function () {
          return e.props.autoplay && e.state.autoplaying === 'hovered' && e.autoPlay('leave');
        }),
        y(b(e), 'onSlideFocus', function () {
          return e.props.autoplay && e.pause('focused');
        }),
        y(b(e), 'onSlideBlur', function () {
          return e.props.autoplay && e.state.autoplaying === 'focused' && e.autoPlay('blur');
        }),
        y(b(e), 'render', function () {
          var i = O('slick-slider', e.props.className, { 'slick-vertical': e.props.vertical, 'slick-initialized': !0 }),
            r = c(c({}, e.props), e.state),
            o = _(r, [
              'fade',
              'cssEase',
              'speed',
              'infinite',
              'centerMode',
              'focusOnSelect',
              'currentSlide',
              'lazyLoad',
              'lazyLoadedList',
              'rtl',
              'slideWidth',
              'slideHeight',
              'listHeight',
              'vertical',
              'slidesToShow',
              'slidesToScroll',
              'slideCount',
              'trackStyle',
              'variableWidth',
              'unslick',
              'centerPadding',
              'targetSlide',
              'useCSS',
            ]),
            u = e.props.pauseOnHover;
          o = c(
            c({}, o),
            {},
            {
              onMouseEnter: u ? e.onTrackOver : null,
              onMouseLeave: u ? e.onTrackLeave : null,
              onMouseOver: u ? e.onTrackOver : null,
              focusOnSelect: e.props.focusOnSelect && e.clickable ? e.selectHandler : null,
            }
          );
          var p;
          if (e.props.dots === !0 && e.state.slideCount >= e.props.slidesToShow) {
            var f = _(r, [
                'dotsClass',
                'slideCount',
                'slidesToShow',
                'currentSlide',
                'slidesToScroll',
                'clickHandler',
                'children',
                'customPaging',
                'infinite',
                'appendDots',
              ]),
              m = e.props.pauseOnDotsHover;
            (f = c(
              c({}, f),
              {},
              {
                clickHandler: e.changeSlide,
                onMouseEnter: m ? e.onDotsLeave : null,
                onMouseOver: m ? e.onDotsOver : null,
                onMouseLeave: m ? e.onDotsLeave : null,
              }
            )),
              (p = w.createElement(Ue, f));
          }
          var C,
            x,
            g = _(r, [
              'infinite',
              'centerMode',
              'currentSlide',
              'slideCount',
              'slidesToShow',
              'prevArrow',
              'nextArrow',
            ]);
          (g.clickHandler = e.changeSlide),
            e.props.arrows && ((C = w.createElement(Ke, g)), (x = w.createElement(Qe, g)));
          var h = null;
          e.props.vertical && (h = { height: e.state.listHeight });
          var k = null;
          e.props.vertical === !1
            ? e.props.centerMode === !0 && (k = { padding: '0px ' + e.props.centerPadding })
            : e.props.centerMode === !0 && (k = { padding: e.props.centerPadding + ' 0px' });
          var v = c(c({}, h), k),
            S = e.props.touchMove,
            T = {
              className: 'slick-list',
              style: v,
              onClick: e.clickHandler,
              onMouseDown: S ? e.swipeStart : null,
              onMouseMove: e.state.dragging && S ? e.swipeMove : null,
              onMouseUp: S ? e.swipeEnd : null,
              onMouseLeave: e.state.dragging && S ? e.swipeEnd : null,
              onTouchStart: S ? e.swipeStart : null,
              onTouchMove: e.state.dragging && S ? e.swipeMove : null,
              onTouchEnd: S ? e.touchEnd : null,
              onTouchCancel: e.state.dragging && S ? e.swipeEnd : null,
              onKeyDown: e.props.accessibility ? e.keyHandler : null,
            },
            N = { className: i, dir: 'ltr', style: e.props.style };
          return (
            e.props.unslick && ((T = { className: 'slick-list' }), (N = { className: i, style: e.props.style })),
            w.createElement(
              'div',
              N,
              e.props.unslick ? '' : C,
              w.createElement(
                'div',
                A({ ref: e.listRefHandler }, T),
                w.createElement(Ye, A({ ref: e.trackRefHandler }, o), e.props.children)
              ),
              e.props.unslick ? '' : x,
              e.props.unslick ? '' : p
            )
          );
        }),
        (e.list = null),
        (e.track = null),
        (e.state = c(
          c({}, Le),
          {},
          { currentSlide: e.props.initialSlide, slideCount: w.Children.count(e.props.children) }
        )),
        (e.callbackTimers = []),
        (e.clickable = !0),
        (e.debouncedResize = null);
      var a = e.ssrInit();
      return (e.state = c(c({}, e.state), a)), e;
    }
    return (
      X(n, [
        {
          key: 'didPropsChange',
          value: function (e) {
            for (var a = !1, i = 0, r = Object.keys(this.props); i < r.length; i++) {
              var o = r[i];
              if (!e.hasOwnProperty(o)) {
                a = !0;
                break;
              }
              if (!(ye(e[o]) === 'object' || typeof e[o] == 'function') && e[o] !== this.props[o]) {
                a = !0;
                break;
              }
            }
            return a || w.Children.count(this.props.children) !== w.Children.count(e.children);
          },
        },
      ]),
      n
    );
  })(w.Component),
  Je = function (d) {
    return d
      .replace(/[A-Z]/g, function (t) {
        return '-' + t.toLowerCase();
      })
      .toLowerCase();
  },
  Ze = Je,
  et = Ze,
  tt = function (d) {
    var t = /[height|width]$/;
    return t.test(d);
  },
  de = function (d) {
    var t = '',
      n = Object.keys(d);
    return (
      n.forEach(function (s, e) {
        var a = d[s];
        (s = et(s)),
          tt(s) && typeof a == 'number' && (a = a + 'px'),
          a === !0 ? (t += s) : a === !1 ? (t += 'not ' + s) : (t += '(' + s + ': ' + a + ')'),
          e < n.length - 1 && (t += ' and ');
      }),
      t
    );
  },
  nt = function (d) {
    var t = '';
    return typeof d == 'string'
      ? d
      : d instanceof Array
      ? (d.forEach(function (n, s) {
          (t += de(n)), s < d.length - 1 && (t += ', ');
        }),
        t)
      : de(d);
  },
  it = nt;
const ee = be(it);
var ce = {
    accessibility: !0,
    adaptiveHeight: !1,
    afterChange: null,
    appendDots: function (t) {
      return w.createElement('ul', { style: { display: 'block' } }, t);
    },
    arrows: !0,
    autoplay: !1,
    autoplaySpeed: 3e3,
    beforeChange: null,
    centerMode: !1,
    centerPadding: '50px',
    className: '',
    cssEase: 'ease',
    customPaging: function (t) {
      return w.createElement('button', null, t + 1);
    },
    dots: !1,
    dotsClass: 'slick-dots',
    draggable: !0,
    easing: 'linear',
    edgeFriction: 0.35,
    fade: !1,
    focusOnSelect: !1,
    infinite: !0,
    initialSlide: 0,
    lazyLoad: null,
    nextArrow: null,
    onEdge: null,
    onInit: null,
    onLazyLoadError: null,
    onReInit: null,
    pauseOnDotsHover: !1,
    pauseOnFocus: !1,
    pauseOnHover: !0,
    prevArrow: null,
    responsive: null,
    rows: 1,
    rtl: !1,
    slide: 'div',
    slidesPerRow: 1,
    slidesToScroll: 1,
    slidesToShow: 1,
    speed: 500,
    swipe: !0,
    swipeEvent: null,
    swipeToSlide: !1,
    touchMove: !0,
    touchThreshold: 5,
    useCSS: !0,
    useTransform: !0,
    variableWidth: !1,
    vertical: !1,
    waitForAnimate: !0,
  },
  rt = (function (d) {
    D(n, d);
    var t = B(n);
    function n(s) {
      var e;
      return (
        F(this, n),
        (e = t.call(this, s)),
        y(b(e), 'innerSliderRefHandler', function (a) {
          return (e.innerSlider = a);
        }),
        y(b(e), 'slickPrev', function () {
          return e.innerSlider.slickPrev();
        }),
        y(b(e), 'slickNext', function () {
          return e.innerSlider.slickNext();
        }),
        y(b(e), 'slickGoTo', function (a) {
          var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
          return e.innerSlider.slickGoTo(a, i);
        }),
        y(b(e), 'slickPause', function () {
          return e.innerSlider.pause('paused');
        }),
        y(b(e), 'slickPlay', function () {
          return e.innerSlider.autoPlay('play');
        }),
        (e.state = { breakpoint: null }),
        (e._responsiveMediaHandlers = []),
        e
      );
    }
    return (
      X(n, [
        {
          key: 'media',
          value: function (e, a) {
            var i = window.matchMedia(e),
              r = function (u) {
                var p = u.matches;
                p && a();
              };
            i.addListener(r), r(i), this._responsiveMediaHandlers.push({ mql: i, query: e, listener: r });
          },
        },
        {
          key: 'componentDidMount',
          value: function () {
            var e = this;
            if (this.props.responsive) {
              var a = this.props.responsive.map(function (r) {
                return r.breakpoint;
              });
              a.sort(function (r, o) {
                return r - o;
              }),
                a.forEach(function (r, o) {
                  var u;
                  o === 0 ? (u = ee({ minWidth: 0, maxWidth: r })) : (u = ee({ minWidth: a[o - 1] + 1, maxWidth: r })),
                    oe() &&
                      e.media(u, function () {
                        e.setState({ breakpoint: r });
                      });
                });
              var i = ee({ minWidth: a.slice(-1)[0] });
              oe() &&
                this.media(i, function () {
                  e.setState({ breakpoint: null });
                });
            }
          },
        },
        {
          key: 'componentWillUnmount',
          value: function () {
            this._responsiveMediaHandlers.forEach(function (e) {
              e.mql.removeListener(e.listener);
            });
          },
        },
        {
          key: 'render',
          value: function () {
            var e = this,
              a,
              i;
            this.state.breakpoint
              ? ((i = this.props.responsive.filter(function (h) {
                  return h.breakpoint === e.state.breakpoint;
                })),
                (a = i[0].settings === 'unslick' ? 'unslick' : c(c(c({}, ce), this.props), i[0].settings)))
              : (a = c(c({}, ce), this.props)),
              a.centerMode && (a.slidesToScroll > 1, (a.slidesToScroll = 1)),
              a.fade && (a.slidesToShow > 1, a.slidesToScroll > 1, (a.slidesToShow = 1), (a.slidesToScroll = 1));
            var r = w.Children.toArray(this.props.children);
            (r = r.filter(function (h) {
              return typeof h == 'string' ? !!h.trim() : !!h;
            })),
              a.variableWidth &&
                (a.rows > 1 || a.slidesPerRow > 1) &&
                (console.warn('variableWidth is not supported in case of rows > 1 or slidesPerRow > 1'),
                (a.variableWidth = !1));
            for (var o = [], u = null, p = 0; p < r.length; p += a.rows * a.slidesPerRow) {
              for (var f = [], m = p; m < p + a.rows * a.slidesPerRow; m += a.slidesPerRow) {
                for (
                  var C = [], x = m;
                  x < m + a.slidesPerRow &&
                  (a.variableWidth && r[x].props.style && (u = r[x].props.style.width), !(x >= r.length));
                  x += 1
                )
                  C.push(
                    w.cloneElement(r[x], {
                      key: 100 * p + 10 * m + x,
                      tabIndex: -1,
                      style: { width: ''.concat(100 / a.slidesPerRow, '%'), display: 'inline-block' },
                    })
                  );
                f.push(w.createElement('div', { key: 10 * p + m }, C));
              }
              a.variableWidth
                ? o.push(w.createElement('div', { key: p, style: { width: u } }, f))
                : o.push(w.createElement('div', { key: p }, f));
            }
            if (a === 'unslick') {
              var g = 'regular slider ' + (this.props.className || '');
              return w.createElement('div', { className: g }, r);
            } else o.length <= a.slidesToShow && (a.unslick = !0);
            return w.createElement(_e, A({ style: this.props.style, ref: this.innerSliderRefHandler }, a), o);
          },
        },
      ]),
      n
    );
  })(w.Component);
const at = (d) => {
    const { componentCls: t, antCls: n, carouselArrowSize: s, carouselDotOffset: e, marginXXS: a } = d,
      i = d.calc(s).mul(-1.25).equal(),
      r = a;
    return {
      [t]: Object.assign(Object.assign({}, Ce(d)), {
        '.slick-slider': {
          position: 'relative',
          display: 'block',
          boxSizing: 'border-box',
          touchAction: 'pan-y',
          WebkitTouchCallout: 'none',
          WebkitTapHighlightColor: 'transparent',
          '.slick-track, .slick-list': { transform: 'translate3d(0, 0, 0)', touchAction: 'pan-y' },
        },
        '.slick-list': {
          position: 'relative',
          display: 'block',
          margin: 0,
          padding: 0,
          overflow: 'hidden',
          '&:focus': { outline: 'none' },
          '&.dragging': { cursor: 'pointer' },
          '.slick-slide': {
            pointerEvents: 'none',
            [`input${n}-radio-input, input${n}-checkbox-input`]: { visibility: 'hidden' },
            '&.slick-active': {
              pointerEvents: 'auto',
              [`input${n}-radio-input, input${n}-checkbox-input`]: { visibility: 'visible' },
            },
            '> div > div': { verticalAlign: 'bottom' },
          },
        },
        '.slick-track': {
          position: 'relative',
          top: 0,
          insetInlineStart: 0,
          display: 'block',
          '&::before, &::after': { display: 'table', content: '""' },
          '&::after': { clear: 'both' },
        },
        '.slick-slide': {
          display: 'none',
          float: 'left',
          height: '100%',
          minHeight: 1,
          img: { display: 'block' },
          '&.dragging img': { pointerEvents: 'none' },
        },
        '.slick-initialized .slick-slide': { display: 'block' },
        '.slick-vertical .slick-slide': { display: 'block', height: 'auto' },
        '.slick-arrow.slick-hidden': { display: 'none' },
        '.slick-prev, .slick-next': {
          position: 'absolute',
          top: '50%',
          display: 'block',
          width: s,
          height: s,
          marginTop: d.calc(s).mul(-1).div(2).equal(),
          padding: 0,
          color: 'transparent',
          fontSize: 0,
          lineHeight: 0,
          background: 'transparent',
          border: 0,
          outline: 'none',
          cursor: 'pointer',
          '&:hover, &:focus': {
            color: 'transparent',
            background: 'transparent',
            outline: 'none',
            '&::before': { opacity: 1 },
          },
          '&.slick-disabled::before': { opacity: 0.25 },
        },
        '.slick-prev': { insetInlineStart: i, '&::before': { content: '"←"' } },
        '.slick-next': { insetInlineEnd: i, '&::before': { content: '"→"' } },
        '.slick-dots': {
          position: 'absolute',
          insetInlineEnd: 0,
          bottom: 0,
          insetInlineStart: 0,
          zIndex: 15,
          display: 'flex !important',
          justifyContent: 'center',
          paddingInlineStart: 0,
          margin: 0,
          listStyle: 'none',
          '&-bottom': { bottom: e },
          '&-top': { top: e, bottom: 'auto' },
          li: {
            position: 'relative',
            display: 'inline-block',
            flex: '0 1 auto',
            boxSizing: 'content-box',
            width: d.dotWidth,
            height: d.dotHeight,
            marginInline: r,
            padding: 0,
            textAlign: 'center',
            textIndent: -999,
            verticalAlign: 'top',
            transition: `all ${d.motionDurationSlow}`,
            button: {
              position: 'relative',
              display: 'block',
              width: '100%',
              height: d.dotHeight,
              padding: 0,
              color: 'transparent',
              fontSize: 0,
              background: d.colorBgContainer,
              border: 0,
              borderRadius: d.dotHeight,
              outline: 'none',
              cursor: 'pointer',
              opacity: 0.3,
              transition: `all ${d.motionDurationSlow}`,
              '&: hover, &:focus': { opacity: 0.75 },
              '&::after': { position: 'absolute', inset: d.calc(r).mul(-1).equal(), content: '""' },
            },
            '&.slick-active': {
              width: d.dotActiveWidth,
              '& button': { background: d.colorBgContainer, opacity: 1 },
              '&: hover, &:focus': { opacity: 1 },
            },
          },
        },
      }),
    };
  },
  lt = (d) => {
    const { componentCls: t, carouselDotOffset: n, marginXXS: s } = d,
      e = { width: d.dotHeight, height: d.dotWidth };
    return {
      [`${t}-vertical`]: {
        '.slick-dots': {
          top: '50%',
          bottom: 'auto',
          flexDirection: 'column',
          width: d.dotHeight,
          height: 'auto',
          margin: 0,
          transform: 'translateY(-50%)',
          '&-left': { insetInlineEnd: 'auto', insetInlineStart: n },
          '&-right': { insetInlineEnd: n, insetInlineStart: 'auto' },
          li: Object.assign(Object.assign({}, e), {
            margin: `${Te(s)} 0`,
            verticalAlign: 'baseline',
            button: e,
            '&.slick-active': Object.assign(Object.assign({}, e), { button: e }),
          }),
        },
      },
    };
  },
  st = (d) => {
    const { componentCls: t } = d;
    return [
      { [`${t}-rtl`]: { direction: 'rtl', '.slick-dots': { [`${t}-rtl&`]: { flexDirection: 'row-reverse' } } } },
      { [`${t}-vertical`]: { '.slick-dots': { [`${t}-rtl&`]: { flexDirection: 'column' } } } },
    ];
  },
  ot = () => ({ dotWidth: 16, dotHeight: 3, dotWidthActive: 24, dotActiveWidth: 24 }),
  dt = we(
    'Carousel',
    (d) => {
      const { controlHeightLG: t, controlHeightSM: n } = d,
        s = ke(d, { carouselArrowSize: d.calc(t).div(2).equal(), carouselDotOffset: d.calc(n).div(2).equal() });
      return [at(s), lt(s), st(s)];
    },
    ot,
    { deprecatedTokens: [['dotWidthActive', 'dotActiveWidth']] }
  );
var ct = function (d, t) {
  var n = {};
  for (var s in d) Object.prototype.hasOwnProperty.call(d, s) && t.indexOf(s) < 0 && (n[s] = d[s]);
  if (d != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var e = 0, s = Object.getOwnPropertySymbols(d); e < s.length; e++)
      t.indexOf(s[e]) < 0 && Object.prototype.propertyIsEnumerable.call(d, s[e]) && (n[s[e]] = d[s[e]]);
  return n;
};
const ut = M.forwardRef((d, t) => {
    const {
        dots: n = !0,
        arrows: s = !1,
        draggable: e = !1,
        waitForAnimate: a = !1,
        dotPosition: i = 'bottom',
        vertical: r = i === 'left' || i === 'right',
        rootClassName: o,
        className: u,
        style: p,
        id: f,
      } = d,
      m = ct(d, [
        'dots',
        'arrows',
        'draggable',
        'waitForAnimate',
        'dotPosition',
        'vertical',
        'rootClassName',
        'className',
        'style',
        'id',
      ]),
      { getPrefixCls: C, direction: x, carousel: g } = M.useContext(je),
      h = M.useRef(),
      k = function (V) {
        let H = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
        h.current.slickGoTo(V, H);
      };
    M.useImperativeHandle(
      t,
      () => ({
        goTo: k,
        autoPlay: h.current.innerSlider.autoPlay,
        innerSlider: h.current.innerSlider,
        prev: h.current.slickPrev,
        next: h.current.slickNext,
      }),
      [h.current]
    );
    const v = M.useRef(M.Children.count(d.children));
    M.useEffect(() => {
      v.current !== M.Children.count(d.children) &&
        (k(d.initialSlide || 0, !1), (v.current = M.Children.count(d.children)));
    }, [d.children]);
    const S = Object.assign(
      {
        vertical: r,
        className: O(u, g == null ? void 0 : g.className),
        style: Object.assign(Object.assign({}, g == null ? void 0 : g.style), p),
      },
      m
    );
    S.effect === 'fade' && (S.fade = !0);
    const T = C('carousel', S.prefixCls),
      N = 'slick-dots',
      L = !!n,
      E = O(N, `${N}-${i}`, typeof n == 'boolean' ? !1 : n == null ? void 0 : n.className),
      [W, $] = dt(T),
      P = O(T, { [`${T}-rtl`]: x === 'rtl', [`${T}-vertical`]: S.vertical }, $, o);
    return W(
      M.createElement(
        'div',
        { className: P, id: f },
        M.createElement(
          rt,
          Object.assign({ ref: h }, S, {
            dots: L,
            dotsClass: E,
            arrows: s,
            draggable: e,
            verticalSwiping: r,
            waitForAnimate: a,
          })
        )
      )
    );
  }),
  ue = ut,
  ft = () =>
    l.jsx('div', {
      className: 'bg-dark py-[80px]',
      children: l.jsxs('div', {
        className: 'w-[635px] mx-auto text-white text-center',
        children: [
          l.jsx('p', { className: 'text-[45px]', children: 'ĐỊA ĐIỂM' }),
          l.jsx('p', {
            className: 'text-base mt-5',
            children:
              'Toạ lạc trên con đường đẹp nhất Hà Nội với 2 hàng cây rợp bóng 4 mùa, Sajang BBQ hiện hữu với vẻ sang trọng, kết hợp hài hoà phong thái hiện đại và nét kiến trúc Hàn Quốc đầy tinh tế. Đặc biệt, thực khách sẽ được trải nghiệm không gian nghệ thuật đặc sắc tại phòng triển lãm tranh tại tầng 1 của nhà hàng.',
          }),
        ],
      }),
    }),
  ht = () => window.location.pathname.split('/').pop() || 'home',
  pt = () => {
    const d = ht();
    return l.jsx(fe, {
      className: `${d} bg-banner bg-image h-[850px] uppercase`,
      align: 'flex-end',
      children: l.jsxs('div', {
        className: 'max-w-[1425px] mx-auto mb-[200px]',
        children: [
          l.jsx('p', {
            className: 'text-white font-bold text-[65px] bg-[#00000036] px-[20px] w-fit rounded-xl',
            children: 'Buffet trưa xèo xèo thịt nướng',
          }),
          l.jsx(Ne, {
            type: 'primary',
            className: 'mt-[10px] uppercase w-[190px] h-[60px] text-[22px] font-bold',
            children: 'Đặt bàn',
          }),
        ],
      }),
    });
  },
  gt = () =>
    l.jsxs('div', {
      className: 'mt-[50px]',
      children: [
        l.jsx('p', {
          className: 'text-center',
          children: l.jsx('span', { className: 'uppercase text-primary text-[45px] font-bold', children: 'Blog' }),
        }),
        l.jsx(R, {
          gutter: 10,
          className: 'max-w-[1200px] !mx-auto',
          children: [0, 1, 2].map((d) =>
            l.jsx(
              j,
              {
                span: 8,
                className: 'px-3 min-h-[475px]',
                children: l.jsxs('div', {
                  className: 'h-full border-b-solid border-b-[1px] border-b-[#dddddd] pb-2',
                  children: [
                    l.jsx('div', { className: 'w-full h-[250px] bg-image bg-blog1' }),
                    l.jsx('p', {
                      className: 'uppercase text-[#3d2d22] text-lg mt-5',
                      children: 'FESTIVAL FREEFLOW - REFILL ĐỒ UỐNG KHÔNG GIỚI HẠN CHỈ TỪ 89K',
                    }),
                    l.jsx('p', { className: 'text-xs text-[#adadad]', children: 'Tháng Mười Hai 27, 2023' }),
                    l.jsx('p', {
                      className: 'text-[#777777] text-sm mt-3 line-clamp-4',
                      children:
                        'Mùa lễ hội năm nay, Sajang mang đến một không khí đặc biệt vô cùng dành cho thực khách, nổi bật với nhiều món ngon độc đáo trong menu mới và chương trình FREEFLOW chưa từng có tại nhà hàng.',
                    }),
                    l.jsx('p', { className: 'text-primary text-xs font-bold mt-5', children: 'Xem thêm' }),
                  ],
                }),
              },
              d
            )
          ),
        }),
      ],
    }),
  vt = () =>
    l.jsxs(R, {
      className: 'max-w-[1200px] !mx-auto py-[50px]',
      children: [
        l.jsxs(j, {
          span: 12,
          className: 'text-center mt-5 px-5',
          children: [
            l.jsx('p', { className: 'text-primary font-bold text-[45px]', children: 'Concept ẩm thực' }),
            l.jsx('p', {
              className: 'text-base mt-5',
              children:
                'Hương vị chuẩn Hàn - Nhật được đầu bếp dày công nghiên cứu để xây dựng những thực đơn độc đáo nhất. Thịt bò được chứng nhận USDA Choice - đảm bảo tươi ngon và không hề tẩm ướp, giữ trọn sự đậm đà tự nhiên trong từng thớ thịt. Sushi & Sashimi được đích thân bếp trưởng chọn lựa kỹ càng, tươi mới hàng ngày và đa dạng. Thực đơn của Sajang BBQ sẽ mang đến trải nghiệm tuyệt hảo đến quý khách hàng.',
            }),
          ],
        }),
        l.jsx(j, { span: 12, className: 'w-full h-[350px] bg-home-concept bg-image' }),
      ],
    }),
  mt = () =>
    l.jsxs('div', {
      className: 'max-w-[1800px] mx-auto mt-[80px] relative',
      children: [
        l.jsx('iframe', {
          src: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d476648.5058218454!2d105.84497!3d21.040029!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abba4b099afd%3A0x11ef3f804212a080!2zMjMgUC4gUGhhbiDEkMOsbmggUGjDuW5nLCBRdcOhbiBUaMOhbmgsIEJhIMSQw6xuaCwgSMOgIE7hu5lpLCBWaWV0bmFt!5e0!3m2!1sen!2sus!4v1711383078758!5m2!1sen!2sus',
          width: '75% ',
          height: '550',
          loading: 'lazy',
          referrerPolicy: 'no-referrer-when-downgrade',
        }),
        l.jsxs('div', {
          className:
            'absolute top-[10%] right-0 flex flex-col justify-center gap-[10px] py-[40px] w-[525px] bg-[#cb1411] text-white text-center',
          children: [
            l.jsx('p', { className: 'text-[35px] uppercase font-bold', children: 'LIÊN HỆ' }),
            l.jsxs('div', {
              className: 'text-base flex flex-col justify-center gap-[10px]',
              children: [
                l.jsx('p', { className: 'font-bold uppercase', children: 'SAJANG BBQ' }),
                l.jsx('p', { children: 'Địa chỉ: 23 Phan Đình Phùng, Ba Đình, Hà Nội' }),
                l.jsx('p', { children: 'Email: info@sajangbbq.com' }),
                l.jsx('p', { children: 'Tel: 0886 399 099' }),
              ],
            }),
          ],
        }),
      ],
    }),
  xt = () =>
    l.jsxs('div', {
      className: 'text-center',
      children: [
        l.jsx('span', { className: 'text-[45px] text-primary font-bold', children: 'GALLERY' }),
        l.jsxs(R, {
          gutter: [10, 10],
          className: '!mx-[5px]',
          children: [
            l.jsx(j, { span: 6, children: l.jsx('div', { className: 'bg-image h-[375px] bg-gallery1 w-full' }) }),
            l.jsx(j, { span: 6, children: l.jsx('div', { className: 'bg-image h-[375px] bg-gallery2 w-full' }) }),
            l.jsx(j, { span: 6, children: l.jsx('div', { className: 'bg-image h-[375px] bg-gallery3 w-full' }) }),
            l.jsx(j, { span: 6, children: l.jsx('div', { className: 'bg-image h-[375px] bg-gallery4 w-full' }) }),
            l.jsx(j, { span: 6, children: l.jsx('div', { className: 'bg-image h-[375px] bg-gallery2 w-full' }) }),
            l.jsx(j, { span: 6, children: l.jsx('div', { className: 'bg-image h-[375px] bg-gallery1 w-full' }) }),
            l.jsx(j, { span: 6, children: l.jsx('div', { className: 'bg-image h-[375px] bg-gallery4 w-full' }) }),
            l.jsx(j, { span: 6, children: l.jsx('div', { className: 'bg-image h-[375px] bg-gallery3 w-full' }) }),
            l.jsx(j, { span: 6, children: l.jsx('div', { className: 'bg-image h-[375px] bg-gallery1 w-full' }) }),
            l.jsx(j, { span: 6, children: l.jsx('div', { className: 'bg-image h-[375px] bg-gallery2 w-full' }) }),
            l.jsx(j, { span: 6, children: l.jsx('div', { className: 'bg-image h-[375px] bg-gallery3 w-full' }) }),
            l.jsx(j, { span: 6, children: l.jsx('div', { className: 'bg-image h-[375px] bg-gallery4 w-full' }) }),
            l.jsx(j, { span: 6, children: l.jsx('div', { className: 'bg-image h-[375px] bg-gallery2 w-full' }) }),
            l.jsx(j, { span: 6, children: l.jsx('div', { className: 'bg-image h-[375px] bg-gallery1 w-full' }) }),
            l.jsx(j, { span: 6, children: l.jsx('div', { className: 'bg-image h-[375px] bg-gallery4 w-full' }) }),
            l.jsx(j, { span: 6, children: l.jsx('div', { className: 'bg-image h-[375px] bg-gallery3 w-full' }) }),
            l.jsx(j, { span: 6, children: l.jsx('div', { className: 'bg-image h-[375px] bg-gallery1 w-full' }) }),
            l.jsx(j, { span: 6, children: l.jsx('div', { className: 'bg-image h-[375px] bg-gallery2 w-full' }) }),
            l.jsx(j, { span: 6, children: l.jsx('div', { className: 'bg-image h-[375px] bg-gallery3 w-full' }) }),
            l.jsx(j, { span: 6, children: l.jsx('div', { className: 'bg-image h-[375px] bg-gallery4 w-full' }) }),
          ],
        }),
      ],
    }),
  St = () =>
    l.jsxs('div', {
      className: 'text-center w-[550px] mx-auto py-[70px]',
      children: [
        l.jsx('p', {
          className: 'text-[18px] font-bold',
          children:
            '"Nếu như Sajang [사장] là cách người Hàn Quốc gọi CEO của một công ty thì nhà hàng Sajang BBQ là nơi mỗi thực khách đều là thượng đế.',
        }),
        l.jsx('p', {
          className: 'text-[18px] font-bold mt-[40px]',
          children:
            'Nhà hàng Sajang BBQ là nhà hàng lẩu nướng lớn nhất Việt Nam nơi mỗi thực khách đến để trải nghiệm ẩm thực nướng Hàn Quốc với các loại thịt cao cấp tươi ngon không tẩm ướp trong không gian sang trọng và tận hưởng dịch vụ xứng tầm."',
        }),
        l.jsx('p', { className: 'text-[#a31d24] text-[22px] mt-5', children: 'ĐẦU BẾP HÀN QUỐC' }),
        l.jsx('p', { className: 'text-[28px] font-[700] mt-3', children: 'PARK SANG KYUNG' }),
      ],
    }),
  yt = () =>
    l.jsx(fe, {
      justify: 'center',
      children: l.jsxs(R, {
        gutter: 20,
        className: 'w-[1200px]',
        children: [
          l.jsx(j, {
            span: 24,
            className: 'text-center mb-5 px-[50px]',
            children: l.jsx('span', { className: 'text-[40px] text-primary font-bold uppercase', children: 'Menu' }),
          }),
          l.jsxs(j, {
            span: 12,
            children: [
              l.jsxs(ue, {
                className: 'styled-carousel',
                autoplay: !0,
                dots: !0,
                slidesToShow: 1,
                children: [
                  l.jsx('div', { className: 'bg-image bg-menu1 w-full h-[400px]' }),
                  l.jsx('div', { className: 'bg-image bg-menu3 w-full h-[400px]' }),
                ],
              }),
              l.jsx(ae, { className: 'uppercase font-bold mx-auto mt-[45px]', text: 'Xem thêm' }),
            ],
          }),
          l.jsxs(j, {
            span: 12,
            children: [
              l.jsxs(ue, {
                className: 'styled-carousel',
                autoplay: !0,
                dots: !0,
                slidesToShow: 1,
                children: [
                  l.jsx('div', { className: 'bg-image bg-menu4 w-full h-[400px]' }),
                  l.jsx('div', { className: 'bg-image bg-menu2 w-full h-[400px]' }),
                ],
              }),
              l.jsx(ae, { className: 'uppercase font-bold mx-auto mt-[45px]', text: 'Xem thêm' }),
            ],
          }),
        ],
      }),
    }),
  bt = () =>
    l.jsxs('div', {
      className: 'py-[50px]',
      children: [
        l.jsx('div', { className: 'bg-image w-full h-[400px] bg-dark-green' }),
        l.jsx('div', {
          className: 'flex justify-center py-[20px]',
          children: l.jsxs(R, {
            gutter: 20,
            className: 'w-[1200px]',
            children: [
              l.jsxs(j, {
                span: 12,
                className: 'text-center mt-10',
                children: [
                  l.jsx('span', { className: 'text-[22px] text-primary uppercase font-bold', children: 'SAJANG BBQ' }),
                  l.jsxs('div', {
                    className: 'flex flex-col items-center gap-[15px] mt-5 text-base',
                    children: [
                      l.jsx('span', { children: '23 Phan Đình Phùng, Ba Đình, Hà Nội' }),
                      l.jsx('span', { children: '1 PHÒNG TRIỂN LÃM' }),
                      l.jsx('span', { children: '4 TẦNG' }),
                      l.jsx('span', { children: '366 KHÁCH' }),
                      l.jsx('span', { children: 'PHÒNG VIP' }),
                      l.jsx('span', { children: '12 - 48 KHÁCH' }),
                    ],
                  }),
                ],
              }),
              l.jsx(j, {
                span: 12,
                children: l.jsxs(R, {
                  children: [
                    l.jsx(j, { span: 12, className: 'bg-image w-full h-[200px] bg-sale1' }),
                    l.jsx(j, { span: 12, className: 'bg-image w-full h-[200px] bg-sale2' }),
                    l.jsx(j, { span: 12, className: 'bg-image w-full h-[200px] bg-sale3' }),
                    l.jsx(j, { span: 12, className: 'bg-image w-full h-[200px] bg-sale4' }),
                  ],
                }),
              }),
            ],
          }),
        }),
      ],
    }),
  kt = () =>
    l.jsxs('div', {
      className: 'mb-[100px]',
      children: [
        l.jsx(pt, {}),
        l.jsx(St, {}),
        l.jsx(ft, {}),
        l.jsx(vt, {}),
        l.jsx(yt, {}),
        l.jsx(bt, {}),
        l.jsx(xt, {}),
        l.jsx(gt, {}),
        l.jsx(mt, {}),
      ],
    });
export { kt as default };
