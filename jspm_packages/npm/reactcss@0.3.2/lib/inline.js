/* */ 
"use strict";
var _,
    checkClassStructure,
    combine;
_ = require("lodash"), checkClassStructure = require("./check-class-structure"), combine = require("./combine"), module.exports = function(s) {
  var e,
      c,
      n,
      r,
      t,
      i,
      o,
      u,
      l;
  if (combine = require("./combine"), c = [], null == this.classes)
    throw console.warn("Define this.classes on `" + this.constructor.name + "`");
  checkClassStructure(this.classes()), e = function(s) {
    return function(e, n) {
      return null != s.classes()[e] ? c.push(s.classes()[e]) : e && (null != n ? n.warn : void 0) === !0 ? console.warn("The `" + e + "` css class does not exist on `" + s.constructor.name + "`") : void 0;
    };
  }(this), e("default"), o = this.props;
  for (i in o)
    l = o[i], _.isObject(l) || (l === !0 ? (e(i), e(i + "-true")) : e(l ? i + "-" + l : i + "-false"));
  for (t in s)
    n = s[t], n === !0 && e(t, {warn: !0});
  return e("public"), r = {}, (null != (u = this.context) ? u.mixins : void 0) && (r = this.context.mixins), combine(c, r);
};
