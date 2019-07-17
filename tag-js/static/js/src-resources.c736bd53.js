(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
  {
    './src/resources.mdx': function(e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, 'default', function() {
          return u;
        });
      var a = n('./node_modules/react/index.js'),
        o = n.n(a),
        r = n('./node_modules/@mdx-js/tag/dist/index.js');
      function c(e) {
        return (c =
          'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  'function' === typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              })(e);
      }
      function p(e, t) {
        if (null == e) return {};
        var n,
          a,
          o = (function(e, t) {
            if (null == e) return {};
            var n,
              a,
              o = {},
              r = Object.keys(e);
            for (a = 0; a < r.length; a++)
              (n = r[a]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          for (a = 0; a < r.length; a++)
            (n = r[a]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (o[n] = e[n]));
        }
        return o;
      }
      function m(e, t) {
        for (var n = 0; n < t.length; n++) {
          var a = t[n];
          (a.enumerable = a.enumerable || !1),
            (a.configurable = !0),
            'value' in a && (a.writable = !0),
            Object.defineProperty(e, a.key, a);
        }
      }
      function l(e, t) {
        return !t || ('object' !== c(t) && 'function' !== typeof t)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function s(e) {
        return (s = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function i(e, t) {
        return (i =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var u = (function(e) {
        function t(e) {
          var n;
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, t),
            ((n = l(this, s(t).call(this, e))).layout = null),
            n
          );
        }
        var n, a, c;
        return (
          (function(e, t) {
            if ('function' !== typeof t && null !== t)
              throw new TypeError(
                'Super expression must either be null or a function'
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && i(e, t);
          })(t, o.a.Component),
          (n = t),
          (a = [
            {
              key: 'render',
              value: function() {
                var e = this.props,
                  t = e.components;
                p(e, ['components']);
                return o.a.createElement(
                  r.MDXTag,
                  { name: 'wrapper', components: t },
                  o.a.createElement(
                    r.MDXTag,
                    {
                      name: 'h1',
                      components: t,
                      props: { id: 'learning-resources' },
                    },
                    'Learning Resources'
                  ),
                  o.a.createElement(
                    r.MDXTag,
                    { name: 'h2', components: t, props: { id: 'javascript' } },
                    'JavaScript'
                  ),
                  o.a.createElement(
                    r.MDXTag,
                    { name: 'ul', components: t },
                    o.a.createElement(
                      r.MDXTag,
                      { name: 'li', components: t, parentName: 'ul' },
                      o.a.createElement(
                        r.MDXTag,
                        {
                          name: 'a',
                          components: t,
                          parentName: 'li',
                          props: {
                            href: 'https://developer.mozilla.org/en-US/',
                          },
                        },
                        'Mozilla Developer Network'
                      )
                    ),
                    o.a.createElement(
                      r.MDXTag,
                      { name: 'li', components: t, parentName: 'ul' },
                      o.a.createElement(
                        r.MDXTag,
                        {
                          name: 'a',
                          components: t,
                          parentName: 'li',
                          props: {
                            href:
                              'https://developer.mozilla.org/en-US/docs/Learn/JavaScript',
                          },
                        },
                        'Mozilla JS (dynamic client side scripting)'
                      )
                    ),
                    o.a.createElement(
                      r.MDXTag,
                      { name: 'li', components: t, parentName: 'ul' },
                      o.a.createElement(
                        r.MDXTag,
                        {
                          name: 'a',
                          components: t,
                          parentName: 'li',
                          props: { href: 'https://javascript30.com/' },
                        },
                        'Wes Bos JS30'
                      )
                    ),
                    o.a.createElement(
                      r.MDXTag,
                      { name: 'li', components: t, parentName: 'ul' },
                      o.a.createElement(
                        r.MDXTag,
                        {
                          name: 'a',
                          components: t,
                          parentName: 'li',
                          props: {
                            href: 'https://github.com/getify/You-Dont-Know-JS',
                          },
                        },
                        'You Dont Know JS'
                      )
                    ),
                    o.a.createElement(
                      r.MDXTag,
                      { name: 'li', components: t, parentName: 'ul' },
                      o.a.createElement(
                        r.MDXTag,
                        {
                          name: 'a',
                          components: t,
                          parentName: 'li',
                          props: { href: 'http://eloquentjavascript.net/' },
                        },
                        'Eloquent JavaScript'
                      )
                    )
                  ),
                  o.a.createElement(
                    r.MDXTag,
                    { name: 'h2', components: t, props: { id: 'react' } },
                    'React'
                  ),
                  o.a.createElement(
                    r.MDXTag,
                    { name: 'ul', components: t },
                    o.a.createElement(
                      r.MDXTag,
                      { name: 'li', components: t, parentName: 'ul' },
                      o.a.createElement(
                        r.MDXTag,
                        {
                          name: 'a',
                          components: t,
                          parentName: 'li',
                          props: {
                            href:
                              'https://reactjs.org/docs/getting-started.html',
                          },
                        },
                        'React Documentation'
                      )
                    ),
                    o.a.createElement(
                      r.MDXTag,
                      { name: 'li', components: t, parentName: 'ul' },
                      o.a.createElement(
                        r.MDXTag,
                        {
                          name: 'a',
                          components: t,
                          parentName: 'li',
                          props: {
                            href:
                              'https://egghead.io/courses/the-beginner-s-guide-to-react',
                          },
                        },
                        'Kent C Dodds React beginners guide'
                      )
                    ),
                    o.a.createElement(
                      r.MDXTag,
                      { name: 'li', components: t, parentName: 'ul' },
                      o.a.createElement(
                        r.MDXTag,
                        {
                          name: 'a',
                          components: t,
                          parentName: 'li',
                          props: {
                            href:
                              'https://medium.freecodecamp.org/all-the-fundamental-react-js-concepts-jammed-into-this-single-medium-article-c83f9b53eac2',
                          },
                        },
                        'React fundamental concepts'
                      )
                    )
                  ),
                  o.a.createElement(
                    r.MDXTag,
                    { name: 'h2', components: t, props: { id: 'gatsby' } },
                    'Gatsby'
                  ),
                  o.a.createElement(
                    r.MDXTag,
                    { name: 'ul', components: t },
                    o.a.createElement(
                      r.MDXTag,
                      { name: 'li', components: t, parentName: 'ul' },
                      o.a.createElement(
                        r.MDXTag,
                        {
                          name: 'a',
                          components: t,
                          parentName: 'li',
                          props: { href: 'https://www.gatsbyjs.org/docs/' },
                        },
                        'Gatsby Documentation'
                      )
                    )
                  )
                );
              },
            },
          ]) && m(n.prototype, a),
          c && m(n, c),
          t
        );
      })();
      u.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'MDXContent',
      };
    },
  },
]);
//# sourceMappingURL=src-resources.e710d2d12d5b47a452a9.js.map
