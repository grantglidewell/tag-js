(window.webpackJsonp = window.webpackJsonp || []).push([
  [6],
  {
    './src/standards.mdx': function(e, n, t) {
      'use strict';
      t.r(n),
        t.d(n, 'default', function() {
          return u;
        });
      var a = t('./node_modules/react/index.js'),
        o = t.n(a),
        r = t('./node_modules/@mdx-js/tag/dist/index.js');
      function s(e) {
        return (s =
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
      function i(e, n) {
        if (null == e) return {};
        var t,
          a,
          o = (function(e, n) {
            if (null == e) return {};
            var t,
              a,
              o = {},
              r = Object.keys(e);
            for (a = 0; a < r.length; a++)
              (t = r[a]), n.indexOf(t) >= 0 || (o[t] = e[t]);
            return o;
          })(e, n);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          for (a = 0; a < r.length; a++)
            (t = r[a]),
              n.indexOf(t) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, t) &&
                  (o[t] = e[t]));
        }
        return o;
      }
      function c(e, n) {
        for (var t = 0; t < n.length; t++) {
          var a = n[t];
          (a.enumerable = a.enumerable || !1),
            (a.configurable = !0),
            'value' in a && (a.writable = !0),
            Object.defineProperty(e, a.key, a);
        }
      }
      function m(e, n) {
        return !n || ('object' !== s(n) && 'function' !== typeof n)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : n;
      }
      function p(e) {
        return (p = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function l(e, n) {
        return (l =
          Object.setPrototypeOf ||
          function(e, n) {
            return (e.__proto__ = n), e;
          })(e, n);
      }
      var u = (function(e) {
        function n(e) {
          var t;
          return (
            (function(e, n) {
              if (!(e instanceof n))
                throw new TypeError('Cannot call a class as a function');
            })(this, n),
            ((t = m(this, p(n).call(this, e))).layout = null),
            t
          );
        }
        var t, a, s;
        return (
          (function(e, n) {
            if ('function' !== typeof n && null !== n)
              throw new TypeError(
                'Super expression must either be null or a function'
              );
            (e.prototype = Object.create(n && n.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              n && l(e, n);
          })(n, o.a.Component),
          (t = n),
          (a = [
            {
              key: 'render',
              value: function() {
                var e = this.props,
                  n = e.components;
                i(e, ['components']);
                return o.a.createElement(
                  r.MDXTag,
                  { name: 'wrapper', components: n },
                  o.a.createElement(
                    r.MDXTag,
                    {
                      name: 'h1',
                      components: n,
                      props: { id: 'javascript-standards' },
                    },
                    'JavaScript standards'
                  ),
                  o.a.createElement(
                    r.MDXTag,
                    { name: 'h2', components: n, props: { id: 'javascript' } },
                    'JavaScript'
                  ),
                  o.a.createElement(
                    r.MDXTag,
                    { name: 'p', components: n },
                    'The best available style guide is the ',
                    o.a.createElement(
                      r.MDXTag,
                      {
                        name: 'a',
                        components: n,
                        parentName: 'p',
                        props: { href: 'https://github.com/airbnb/javascript' },
                      },
                      'Airbnb JavaScript Style Guide'
                    ),
                    '. Use it for reference.'
                  ),
                  o.a.createElement(
                    r.MDXTag,
                    { name: 'h2', components: n, props: { id: 'linting' } },
                    'Linting'
                  ),
                  o.a.createElement(
                    r.MDXTag,
                    { name: 'p', components: n },
                    o.a.createElement(
                      r.MDXTag,
                      {
                        name: 'a',
                        components: n,
                        parentName: 'p',
                        props: { href: 'https://github.com/eslint/eslint' },
                      },
                      'ESlint'
                    ),
                    ' is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code. In many ways, it is similar to JSLint and JSHint with a few exceptions:'
                  ),
                  o.a.createElement(
                    r.MDXTag,
                    { name: 'p', components: n },
                    o.a.createElement(
                      r.MDXTag,
                      {
                        name: 'a',
                        components: n,
                        parentName: 'p',
                        props: {
                          href:
                            'https://www.npmjs.com/package/eslint-config-airbnb',
                        },
                      },
                      'eslint-config-airbnb'
                    ),
                    ' will enforce the use of the airbnb best practices laid out in their style guide.'
                  ),
                  o.a.createElement(
                    r.MDXTag,
                    { name: 'p', components: n },
                    o.a.createElement(
                      r.MDXTag,
                      {
                        name: 'a',
                        components: n,
                        parentName: 'p',
                        props: {
                          href:
                            'https://github.com/evcohen/eslint-plugin-jsx-a11y',
                        },
                      },
                      'eslint-plugin-jsx-a11y'
                    ),
                    ' is a static AST checker for accessibility rules on JSX elements.'
                  ),
                  o.a.createElement(
                    r.MDXTag,
                    { name: 'h2', components: n, props: { id: 'prettier' } },
                    'Prettier'
                  ),
                  o.a.createElement(
                    r.MDXTag,
                    { name: 'p', components: n },
                    'Tabs or spaces? Prettier will handle all of this and more. Out of the box gatsby makes some assumptions about the prettier config that need to be changed. That is simple enough to do, if youre using the ',
                    o.a.createElement(
                      r.MDXTag,
                      { name: 'inlineCode', components: n, parentName: 'p' },
                      'tag-standards'
                    ),
                    ' package it will handle the configuration for you. Prettier is powerful and removes trivial issues with code style so you can just be productive.'
                  ),
                  o.a.createElement(
                    r.MDXTag,
                    { name: 'p', components: n },
                    'example prettier config:'
                  ),
                  o.a.createElement(
                    r.MDXTag,
                    { name: 'pre', components: n },
                    o.a.createElement(
                      r.MDXTag,
                      {
                        name: 'code',
                        components: n,
                        parentName: 'pre',
                        props: {},
                      },
                      '{\n  "trailingComma": "es5",\n  "tabWidth": 2,\n  "useTabs": false,\n  "semi": true,\n  "singleQuote": true,\n  "jsxSingleQuote": true,\n  "bracketSpacing": true,\n  "arrowParens": "avoid"\n}\n'
                    )
                  ),
                  o.a.createElement(
                    r.MDXTag,
                    { name: 'h2', components: n, props: { id: 'react' } },
                    'React'
                  ),
                  o.a.createElement(
                    r.MDXTag,
                    { name: 'p', components: n },
                    'In React projects our default standards will use ',
                    o.a.createElement(
                      r.MDXTag,
                      {
                        name: 'a',
                        components: n,
                        parentName: 'p',
                        props: {
                          href:
                            'https://github.com/airbnb/javascript/tree/master/react',
                        },
                      },
                      'eslint-plugin-react'
                    ),
                    '. This will handle many cases of opinion. However it does not address some structural and pattern issues that may occur. Some ideas to guide your decisions.'
                  ),
                  o.a.createElement(
                    r.MDXTag,
                    { name: 'p', components: n },
                    o.a.createElement(
                      r.MDXTag,
                      {
                        name: 'a',
                        components: n,
                        parentName: 'p',
                        props: {
                          href:
                            'https://www.youtube.com/playlist?list=PLWkHD1fleF5QLFxYv_OgkHdqf1Q2fUgpb',
                        },
                      },
                      'React Patterns'
                    ),
                    ' are an important concept to understand when decising on the appropriate abstraction. Simpler is better.'
                  ),
                  o.a.createElement(
                    r.MDXTag,
                    { name: 'p', components: n },
                    'A flat ',
                    o.a.createElement(
                      r.MDXTag,
                      { name: 'inlineCode', components: n, parentName: 'p' },
                      'components'
                    ),
                    ' directory is best to maintain an approachable dev experience. nesting components beyond a single level leads to confusion.'
                  ),
                  o.a.createElement(
                    r.MDXTag,
                    { name: 'h3', components: n, props: { id: 'exports' } },
                    'Exports'
                  ),
                  o.a.createElement(
                    r.MDXTag,
                    { name: 'p', components: n },
                    'Export components as default (this is enforced in our standards package), this way the dont have to be imported as a named import and imports of components can be consistent across the application. One way to accomplish this is following this pattern:'
                  ),
                  o.a.createElement(
                    r.MDXTag,
                    { name: 'pre', components: n },
                    o.a.createElement(
                      r.MDXTag,
                      {
                        name: 'code',
                        components: n,
                        parentName: 'pre',
                        props: {},
                      },
                      'src\n\u251c\u2500\u2500 components\n\u2502  \u2514\u2500\u2500 ContainerComponent\n\u2502     \u251c\u2500\u2500 index.js\n\u2502     \u2514\u2500\u2500 ContainerComponent.js\n'
                    )
                  ),
                  o.a.createElement(
                    r.MDXTag,
                    { name: 'p', components: n },
                    'index.js'
                  ),
                  o.a.createElement(
                    r.MDXTag,
                    { name: 'pre', components: n },
                    o.a.createElement(
                      r.MDXTag,
                      {
                        name: 'code',
                        components: n,
                        parentName: 'pre',
                        props: { className: 'language-javascript' },
                      },
                      "import ContainerComponent from './ContainerComponent';\n\nexport default ContainerComponent;\n"
                    )
                  ),
                  o.a.createElement(
                    r.MDXTag,
                    { name: 'p', components: n },
                    'ContainerComponent.js'
                  ),
                  o.a.createElement(
                    r.MDXTag,
                    { name: 'pre', components: n },
                    o.a.createElement(
                      r.MDXTag,
                      {
                        name: 'code',
                        components: n,
                        parentName: 'pre',
                        props: { className: 'language-javascript' },
                      },
                      "import React from 'react';\n\nexport default () => {\n  return <span>hi</span>;\n};\n"
                    )
                  ),
                  o.a.createElement(
                    r.MDXTag,
                    { name: 'p', components: n },
                    'This allow for two advantages: in your editor your open tabs reflect the component youre working on, and your imports will be consistent (eg. ',
                    o.a.createElement(
                      r.MDXTag,
                      { name: 'inlineCode', components: n, parentName: 'p' },
                      "import Component from '../components/Component'"
                    ),
                    ')'
                  ),
                  o.a.createElement(
                    r.MDXTag,
                    { name: 'p', components: n },
                    'while this is useful for components, utilitues such as Hooks or variables should be named exports. This will make it easier to recognize what is being imported and how they are grouped.'
                  ),
                  o.a.createElement(
                    r.MDXTag,
                    { name: 'pre', components: n },
                    o.a.createElement(
                      r.MDXTag,
                      {
                        name: 'code',
                        components: n,
                        parentName: 'pre',
                        props: { className: 'language-javascript' },
                      },
                      "import { mediaQueries, colors, fonts } from '../../styles';\n"
                    )
                  ),
                  o.a.createElement(
                    r.MDXTag,
                    { name: 'h2', components: n, props: { id: 'routing' } },
                    'Routing'
                  ),
                  o.a.createElement(
                    r.MDXTag,
                    { name: 'p', components: n },
                    'In most cases it is best to compose your routes in the root of the project. Routing in a nested component may create confusion for other developers trying to find said route. Reach router (used in Gatsby by deafult) is flexible and will allow routing at any component level. There may be some extenuating circumstance where routes cannot be composed in this fashion and will be evaluated on a case by case basis.'
                  ),
                  o.a.createElement(
                    r.MDXTag,
                    { name: 'p', components: n },
                    'In a similar manner the folder structure should follow the routing structure in terms of container(smart) components.'
                  ),
                  o.a.createElement(
                    r.MDXTag,
                    { name: 'h2', components: n, props: { id: 'commits' } },
                    'Commits'
                  ),
                  o.a.createElement(
                    r.MDXTag,
                    { name: 'p', components: n },
                    'Ignore node_modules, for the love of all that is holy! commit your yarn.lock file. If there are two lock files in a project, delete package.lock. Yarn is smart about this and warns you, get ahead of the issue by killing the package.lock and allowing the source of truth to be yarn.'
                  ),
                  o.a.createElement(
                    r.MDXTag,
                    { name: 'p', components: n },
                    'If there are ',
                    o.a.createElement(
                      r.MDXTag,
                      { name: 'strong', components: n, parentName: 'p' },
                      'warnings'
                    ),
                    ' in your commit, these are from the automated linting in the tag-standards package. It is advisable to clean these up before submitting a PR. It warns against coding style and error for serious offenses. Usually these are simple issues like unused variables or where to place whitespace. If the issue is more involved you can research the rule in the eslint documentation. Only as a ',
                    o.a.createElement(
                      r.MDXTag,
                      { name: 'strong', components: n, parentName: 'p' },
                      'last resort'
                    ),
                    ' and after confirming with other devs on the project should a rule be disabled, prefer disabling on the line, if needed in the file. If you feel a rule needs to be treated differently in a project please ',
                    o.a.createElement(
                      r.MDXTag,
                      {
                        name: 'a',
                        components: n,
                        parentName: 'p',
                        props: {
                          href:
                            'https://github.com/thirdandgrove/tag-standards/issues',
                        },
                      },
                      'file an issue in the tag-standards repo'
                    ),
                    ' so it can be evaluated across all our projects.'
                  ),
                  o.a.createElement(
                    r.MDXTag,
                    {
                      name: 'h2',
                      components: n,
                      props: { id: 'external-libraries' },
                    },
                    'External Libraries'
                  ),
                  o.a.createElement(
                    r.MDXTag,
                    { name: 'p', components: n },
                    'it is best to avoid importing libraries such a lodash and underscore. While the utilities provided may seem useful, there are likely vanilla JS implementations for the functions you want to use. However in the case that you ',
                    o.a.createElement(
                      r.MDXTag,
                      { name: 'em', components: n, parentName: 'p' },
                      'need'
                    ),
                    ' an external library to accomplish something. Do your due dilligence to ensure the library is not going to be a hindrance down the line.'
                  ),
                  o.a.createElement(
                    r.MDXTag,
                    { name: 'p', components: n },
                    'Make sure:'
                  ),
                  o.a.createElement(
                    r.MDXTag,
                    { name: 'ul', components: n },
                    o.a.createElement(
                      r.MDXTag,
                      { name: 'li', components: n, parentName: 'ul' },
                      'the library is maintained (recent and consistent commits are a good sign)'
                    ),
                    o.a.createElement(
                      r.MDXTag,
                      { name: 'li', components: n, parentName: 'ul' },
                      'well used (weekly downlaods are a reasonable indication)'
                    ),
                    o.a.createElement(
                      r.MDXTag,
                      { name: 'li', components: n, parentName: 'ul' },
                      'well documented (the readme should give you a sense of this)'
                    ),
                    o.a.createElement(
                      r.MDXTag,
                      { name: 'li', components: n, parentName: 'ul' },
                      'does not contain too many dependencies of its own'
                    ),
                    o.a.createElement(
                      r.MDXTag,
                      { name: 'li', components: n, parentName: 'ul' },
                      'follows semver (check the versions tab on npmjs.com)'
                    )
                  )
                );
              },
            },
          ]) && c(t.prototype, a),
          s && c(t, s),
          n
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
//# sourceMappingURL=src-standards.e710d2d12d5b47a452a9.js.map
