!function () {
    function S(e) {
      var r = '    ';
      if (isNaN(parseInt(e))) r = e;
       else switch (e = parseInt(e)) {
        case 1:
          r = ' ';
          break;
        case 2:
          r = '  ';
          break;
        case 3:
          r = '   ';
          break;
        case 4:
          r = '    ';
          break;
        case 5:
          r = '     ';
          break;
        case 6:
          r = '      ';
          break;
        case 7:
          r = '       ';
          break;
        case 8:
          r = '        ';
          break;
        case 9:
          r = '         ';
          break;
        case 10:
          r = '          ';
          break;
        case 11:
          r = '           ';
          break;
        case 12:
          r = '            '
      }
      var c = [
        '\n'
      ];
      for (ix = 0; ix < 100; ix++) c.push(c[ix] + r);
      return c
    }
    function e() {
      this.step = '\t',
      this.shift = S(this.step)
    }
    e.prototype.xml = function (e, r) {
      var c = e.replace(/>\s{0,}</g, '><').replace(/</g, '~::~<').replace(/\s*xmlns\:/g, '~::~xmlns:').replace(/\s*xmlns\=/g, '~::~xmlns=').split('~::~'),
      a = c.length,
      s = !1,
      p = 0,
      l = '',
      i = 0,
      n = r ? S(r)  : this.shift;
      for (i = 0; i < a; i++) - 1 < c[i].search(/<!/) ? (l += n[p] + c[i], s = !0, ( - 1 < c[i].search(/-->/) || - 1 < c[i].search(/\]>/) || - 1 < c[i].search(/!DOCTYPE/)) && (s = !1))  : - 1 < c[i].search(/-->/) || - 1 < c[i].search(/\]>/) ? (l += c[i], s = !1)  : /^<\w/.exec(c[i - 1]) && /^<\/\w/.exec(c[i]) && /^<[\w:\-\.\,]+/.exec(c[i - 1]) == /^<\/[\w:\-\.\,]+/.exec(c[i]) [0].replace('/', '') ? (l += c[i], s || p--)  : - 1 < c[i].search(/<\w/) && - 1 == c[i].search(/<\//) && - 1 == c[i].search(/\/>/) ? l = l += s ? c[i] : n[p++] + c[i] : - 1 < c[i].search(/<\w/) && - 1 < c[i].search(/<\//) ? l = l += s ? c[i] : n[p] + c[i] : - 1 < c[i].search(/<\//) ? l = l += s ? c[i] : n[--p] + c[i] : - 1 < c[i].search(/\/>/) ? l = l += s ? c[i] : n[p] + c[i] : - 1 < c[i].search(/<\?/) ? l += n[p] + c[i] : - 1 < c[i].search(/xmlns\:/) || - 1 < c[i].search(/xmlns\=/) ? l += n[p] + c[i] : l += c[i];
      return '\n' == l[0] ? l.slice(1)  : l
    },
    e.prototype.json = function (e, r) {
      r = r || this.step;
      return 'undefined' == typeof JSON ? e : 'string' == typeof e ? JSON.stringify(JSON.parse(e), null, r)  : 'object' == typeof e ? JSON.stringify(e, null, r)  : e
    },
    e.prototype.css = function (e, r) {
      var c = e.replace(/\s{1,}/g, ' ').replace(/\{/g, '{~::~').replace(/\}/g, '~::~}~::~').replace(/\;/g, ';~::~').replace(/\/\*/g, '~::~/*').replace(/\*\//g, '*/~::~').replace(/~::~\s{0,}~::~/g, '~::~').split('~::~'),
      a = c.length,
      s = 0,
      p = '',
      l = 0,
      i = r ? S(r)  : this.shift;
      for (l = 0; l < a; l++) /\{/.exec(c[l]) ? p += i[s++] + c[l] : /\}/.exec(c[l]) ? p += i[--s] + c[l] : (/\*\\/.exec(c[l]), p += i[s] + c[l]);
      return p.replace(/^\n{1,}/, '')
    },
    e.prototype.sql = function (e, r) {
      var c,
      a,
      s,
      p = e.replace(/\s{1,}/g, ' ').replace(/\'/gi, '~::~\'').split('~::~'),
      l = p.length,
      i = [
      ],
      n = 0,
      t = this.step,
      g = 0,
      E = '',
      N = 0,
      o = r ? S(r)  : this.shift;
      for (N = 0; N < l; N++) i = N % 2 ? i.concat(p[N])  : i.concat((c = p[N], a = t, c.replace(/\s{1,}/g, ' ').replace(/ AND /gi, '~::~' + a + a + 'AND ').replace(/ BETWEEN /gi, '~::~' + a + 'BETWEEN ').replace(/ CASE /gi, '~::~' + a + 'CASE ').replace(/ ELSE /gi, '~::~' + a + 'ELSE ').replace(/ END /gi, '~::~' + a + 'END ').replace(/ FROM /gi, '~::~FROM ').replace(/ GROUP\s{1,}BY/gi, '~::~GROUP BY ').replace(/ HAVING /gi, '~::~HAVING ').replace(/ IN /gi, ' IN ').replace(/ JOIN /gi, '~::~JOIN ').replace(/ CROSS~::~{1,}JOIN /gi, '~::~CROSS JOIN ').replace(/ INNER~::~{1,}JOIN /gi, '~::~INNER JOIN ').replace(/ LEFT~::~{1,}JOIN /gi, '~::~LEFT JOIN ').replace(/ RIGHT~::~{1,}JOIN /gi, '~::~RIGHT JOIN ').replace(/ ON /gi, '~::~' + a + 'ON ').replace(/ OR /gi, '~::~' + a + a + 'OR ').replace(/ ORDER\s{1,}BY/gi, '~::~ORDER BY ').replace(/ OVER /gi, '~::~' + a + 'OVER ').replace(/\(\s{0,}SELECT /gi, '~::~(SELECT ').replace(/\)\s{0,}SELECT /gi, ')~::~SELECT ').replace(/ THEN /gi, ' THEN~::~' + a).replace(/ UNION /gi, '~::~UNION~::~').replace(/ USING /gi, '~::~USING ').replace(/ WHEN /gi, '~::~' + a + 'WHEN ').replace(/ WHERE /gi, '~::~WHERE ').replace(/ WITH /gi, '~::~WITH ').replace(/ ALL /gi, ' ALL ').replace(/ AS /gi, ' AS ').replace(/ ASC /gi, ' ASC ').replace(/ DESC /gi, ' DESC ').replace(/ DISTINCT /gi, ' DISTINCT ').replace(/ EXISTS /gi, ' EXISTS ').replace(/ NOT /gi, ' NOT ').replace(/ NULL /gi, ' NULL ').replace(/ LIKE /gi, ' LIKE ').replace(/\s{0,}SELECT /gi, 'SELECT ').replace(/\s{0,}UPDATE /gi, 'UPDATE ').replace(/ SET /gi, ' SET ').replace(/~::~{1,}/g, '~::~').split('~::~')));
      for (l = i.length, N = 0; N < l; N++) {
        s = i[N],
        g = g - (s.replace(/\(/g, '').length - s.replace(/\)/g, '').length),
        /\s{0,}\s{0,}SELECT\s{0,}/.exec(i[N]) && (i[N] = i[N].replace(/\,/g, ',\n' + t + t)),
        /\s{0,}\s{0,}SET\s{0,}/.exec(i[N]) && (i[N] = i[N].replace(/\,/g, ',\n' + t + t)),
        /\s{0,}\(\s{0,}SELECT\s{0,}/.exec(i[N]) ? E += o[++n] + i[N] : /\'/.exec(i[N]) ? (g < 1 && n && n--, E += i[N])  : (E += o[n] + i[N], g < 1 && n && n--)
      }
      return E = E.replace(/^\n{1,}/, '').replace(/\n{1,}/g, '\n')
    },
    e.prototype.xmlmin = function (e, r) {
      return (r ? e : e.replace(/\<![ \r\n\t]*(--([^\-]|[\r\n]|-[^\-])*--[ \r\n\t]*)\>/g, '').replace(/[ \r\n\t]{1,}xmlns/g, ' xmlns')).replace(/>\s{0,}</g, '><')
    },
    e.prototype.jsonmin = function (e) {
      return 'undefined' == typeof JSON ? e : JSON.stringify(JSON.parse(e), null, 0)
    },
    e.prototype.cssmin = function (e, r) {
      return (r ? e : e.replace(/\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*+\//g, '')).replace(/\s{1,}/g, ' ').replace(/\{\s{1,}/g, '{').replace(/\}\s{1,}/g, '}').replace(/\;\s{1,}/g, ';').replace(/\/\*\s{1,}/g, '/*').replace(/\*\/\s{1,}/g, '*/')
    },
    e.prototype.sqlmin = function (e) {
      return e.replace(/\s{1,}/g, ' ').replace(/\s{1,}\(/, '(').replace(/\s{1,}\)/, ')')
    },
    window.vkbeautify = new e
  }();
  