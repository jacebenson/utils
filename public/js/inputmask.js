!function (k) {
    var a,
    e,
    t,
    r = (e = document.createElement('input'), t = 'onpaste', e.setAttribute(t, ''), ('function' == typeof e[t] ? 'paste' : 'input') + '.mask'),
    n = navigator.userAgent,
    b = /iphone/i.test(n),
    y = /android/i.test(n);
    k.mask = {
      definitions: {
        9: '[0-9]',
        a: '[A-Za-z]',
        '*': '[A-Za-z0-9]'
      },
      dataName: 'rawMaskFn',
      placeholder: '_'
    },
    k.fn.extend({
      caret: function (e, t) {
        var n;
        if (0 !== this.length && !this.is(':hidden')) return 'number' == typeof e ? (t = 'number' == typeof t ? t : e, this.each(function () {
          this.setSelectionRange ? this.setSelectionRange(e, t)  : this.createTextRange && ((n = this.createTextRange()).collapse(!0), n.moveEnd('character', t), n.moveStart('character', e), n.select())
        }))  : (this[0].setSelectionRange ? (e = this[0].selectionStart, t = this[0].selectionEnd)  : document.selection && document.selection.createRange && (n = document.selection.createRange(), e = 0 - n.duplicate().moveStart('character', - 100000), t = e + n.text.length), {
          begin: e,
          end: t
        })
      },
      unmask: function () {
        return this.trigger('unmask')
      },
      mask: function (t, d) {
        var n,
        m,
        p,
        g,
        v;
        return !t && 0 < this.length ? k(this[0]).data(k.mask.dataName) ()  : (d = k.extend({
          placeholder: k.mask.placeholder,
          completed: null
        }, d), n = k.mask.definitions, m = [
        ], p = v = t.length, g = null, k.each(t.split(''), function (e, t) {
          '?' == t ? (v--, p = e)  : n[t] ? (m.push(RegExp(n[t])), null === g && (g = m.length - 1))  : m.push(null)
        }), this.trigger('unmask').each(function () {
          function o(e) {
            for (; v > ++e && !m[e]; );
            return e
          }
          function c(e, t) {
            var n,
            a;
            if (!(e < 0)) {
              for (n = e, a = o(t); n < v; n++) if (m[n]) {
                if (!(a < v && m[n].test(f[a]))) break;
                f[n] = f[a],
                f[a] = d.placeholder,
                a = o(a)
              }
              s(),
              u.caret(Math.max(g, e))
            }
          }
          function l(e, t) {
            var n;
            for (n = e; n < t && n < v; n++) m[n] && (f[n] = d.placeholder)
          }
          function s() {
            u.val(f.join(''))
          }
          function i(e) {
            var t,
            n,
            a = u.val(),
            r = - 1;
            for (t = 0, pos = 0; t < v; t++) if (m[t]) {
              for (f[t] = d.placeholder; pos++ < a.length; ) if (n = a.charAt(pos - 1), m[t].test(n)) {
                f[t] = n,
                r = t;
                break
              }
              if (pos > a.length) break
            } else f[t] === a.charAt(pos) && t !== p && (pos++, r = t);
            return e ? s()  : r + 1 < p ? (u.val(''), l(0, v))  : (s(), u.val(u.val().substring(0, r + 1))),
            p ? t : g
          }
          var u = k(this),
          f = k.map(t.split(''), function (e) {
            return '?' != e ? n[e] ? d.placeholder : e : void 0
          }),
          h = u.val();
          u.data(k.mask.dataName, function () {
            return k.map(f, function (e, t) {
              return m[t] && e != d.placeholder ? e : null
            }).join('')
          }),
          u.attr('readonly') || u.one('unmask', function () {
            u.unbind('.mask').removeData(k.mask.dataName)
          }).bind('focus.mask', function () {
            var e;
            clearTimeout(a),
            h = u.val(),
            e = i(),
            a = setTimeout(function () {
              s(),
              e == t.length ? u.caret(0, e)  : u.caret(e)
            }, 10)
          }).bind('blur.mask', function () {
            i(),
            u.val() != h && u.change()
          }).bind('keydown.mask', function (e) {
            var t,
            n,
            a,
            r = e.which;
            8 === r || 46 === r || b && 127 === r ? (n = (t = u.caret()).begin, 0 == (a = t.end) - n && (n = 46 !== r ? function (e) {
              for (; 0 <= --e && !m[e]; );
              return e
            }(n)  : a = o(n - 1), a = 46 === r ? o(a)  : a), l(n, a), c(n, a - 1), e.preventDefault())  : 27 == r && (u.val(h), u.caret(0, i()), e.preventDefault())
          }).bind('keypress.mask', function (e) {
            var t,
            n,
            a,
            r = e.which,
            i = u.caret();
            e.ctrlKey || e.altKey || e.metaKey || r < 32 || r && (0 != i.end - i.begin && (l(i.begin, i.end), c(i.begin, i.end - 1)), (t = o(i.begin - 1)) < v && (n = String.fromCharCode(r), m[t].test(n) && (function (e) {
              var t,
              n,
              a,
              r;
              for (t = e, n = d.placeholder; t < v; t++) if (m[t]) {
                if (a = o(t), r = f[t], f[t] = n, !(a < v && m[a].test(r))) break;
                n = r
              }
            }(t), f[t] = n, s(), a = o(t), y ? setTimeout(k.proxy(k.fn.caret, u, a), 0)  : u.caret(a), d.completed && v <= a && d.completed.call(u))), e.preventDefault())
          }).bind(r, function () {
            setTimeout(function () {
              var e = i(!0);
              u.caret(e),
              d.completed && e == u.val().length && d.completed.call(u)
            }, 0)
          }),
          i()
        }))
      }
    })
  }(jQuery);
  