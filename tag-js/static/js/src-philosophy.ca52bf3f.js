(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    './src/philosophy.mdx': function(e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, 'default', function() {
          return m;
        });
      var o = n('./node_modules/react/index.js'),
        a = n.n(o),
        r = n('./node_modules/@mdx-js/tag/dist/index.js');
      function i(e) {
        return (i =
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
      function c(e, t) {
        if (null == e) return {};
        var n,
          o,
          a = (function(e, t) {
            if (null == e) return {};
            var n,
              o,
              a = {},
              r = Object.keys(e);
            for (o = 0; o < r.length; o++)
              (n = r[o]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          for (o = 0; o < r.length; o++)
            (n = r[o]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      function s(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            'value' in o && (o.writable = !0),
            Object.defineProperty(e, o.key, o);
        }
      }
      function l(e, t) {
        return !t || ('object' !== i(t) && 'function' !== typeof t)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function p(e) {
        return (p = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function u(e, t) {
        return (u =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var m = (function(e) {
        function t(e) {
          var n;
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, t),
            ((n = l(this, p(t).call(this, e))).layout = null),
            n
          );
        }
        var n, o, i;
        return (
          (function(e, t) {
            if ('function' !== typeof t && null !== t)
              throw new TypeError(
                'Super expression must either be null or a function'
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && u(e, t);
          })(t, a.a.Component),
          (n = t),
          (o = [
            {
              key: 'render',
              value: function() {
                var e = this.props,
                  t = e.components;
                c(e, ['components']);
                return a.a.createElement(
                  r.MDXTag,
                  { name: 'wrapper', components: t },
                  a.a.createElement('img', {
                    src: '/public/TAG-Wordmark-Stack-1-Charcoal-RGB.png',
                    alt: 'Third and Grove',
                    height: '250px',
                    width: 'auto',
                    style: { padding: '3rem 0' },
                  }),
                  a.a.createElement(
                    r.MDXTag,
                    {
                      name: 'h3',
                      components: t,
                      props: { id: 'javascript-applications-guidelines' },
                    },
                    'JavaScript Applications Guidelines'
                  ),
                  a.a.createElement(
                    r.MDXTag,
                    { name: 'p', components: t },
                    'Third and Grove plans to progressively adopt JavaScript as a core technology for building client projects. Having a unified set of standards for all of our projects will allow for faster onboarding, more cohesive codebases, and an overall better developer experience. React is a core technology we plan to utilize along with Gatsby. While Gatsby is a React centric framework, they have made some decisions on code style that diverge from TAG standards. When initially seting up a project with Gatsby, following these guidelines should ensure that all contributions have uniformity.'
                  ),
                  a.a.createElement(
                    r.MDXTag,
                    { name: 'ul', components: t },
                    a.a.createElement(
                      r.MDXTag,
                      { name: 'li', components: t, parentName: 'ul' },
                      a.a.createElement(
                        r.MDXTag,
                        {
                          name: 'a',
                          components: t,
                          parentName: 'li',
                          props: { href: '/legacyFrontEndStandards' },
                        },
                        'Front End Best Practices'
                      ),
                      ' (legacy)'
                    ),
                    a.a.createElement(
                      r.MDXTag,
                      { name: 'li', components: t, parentName: 'ul' },
                      a.a.createElement(
                        r.MDXTag,
                        {
                          name: 'a',
                          components: t,
                          parentName: 'li',
                          props: { href: '/legacyCodingBestPractices' },
                        },
                        'Coding Best Practices'
                      ),
                      ' (legacy)'
                    )
                  ),
                  a.a.createElement(
                    r.MDXTag,
                    {
                      name: 'h2',
                      components: t,
                      props: { id: 'standards-npm-package' },
                    },
                    'Standards npm package'
                  ),
                  a.a.createElement(
                    r.MDXTag,
                    { name: 'p', components: t },
                    'install all ',
                    a.a.createElement(
                      r.MDXTag,
                      {
                        name: 'a',
                        components: t,
                        parentName: 'p',
                        props: {
                          href: 'https://www.npmjs.com/package/tag-standards',
                        },
                      },
                      'tag coding style/standards'
                    ),
                    ' configurations into your project'
                  ),
                  a.a.createElement(
                    r.MDXTag,
                    { name: 'p', components: t },
                    'use:\nin project root directory'
                  ),
                  a.a.createElement(
                    r.MDXTag,
                    { name: 'pre', components: t },
                    a.a.createElement(
                      r.MDXTag,
                      {
                        name: 'code',
                        components: t,
                        parentName: 'pre',
                        props: {},
                      },
                      'npx tag-standards\n'
                    )
                  ),
                  a.a.createElement(
                    r.MDXTag,
                    { name: 'p', components: t },
                    'this will install all the dependencies and config files for your project'
                  ),
                  a.a.createElement(
                    r.MDXTag,
                    { name: 'p', components: t },
                    'You will still need to set up your text editor to visually indicate errors and warnings.'
                  )
                );
              },
            },
          ]) && s(n.prototype, o),
          i && s(n, i),
          t
        );
      })();
      m.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'MDXContent',
      };
    },
  },
]);
//# sourceMappingURL=src-philosophy.e710d2d12d5b47a452a9.js.map
