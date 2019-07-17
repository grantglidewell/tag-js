(window.webpackJsonp = window.webpackJsonp || []).push([
  [2],
  {
    './src/legacyCodingBestPractices.mdx': function(e, n, t) {
      'use strict';
      t.r(n),
        t.d(n, 'default', function() {
          return d;
        });
      var o = t('./node_modules/react/index.js'),
        a = t.n(o),
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
          o,
          a = (function(e, n) {
            if (null == e) return {};
            var t,
              o,
              a = {},
              r = Object.keys(e);
            for (o = 0; o < r.length; o++)
              (t = r[o]), n.indexOf(t) >= 0 || (a[t] = e[t]);
            return a;
          })(e, n);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          for (o = 0; o < r.length; o++)
            (t = r[o]),
              n.indexOf(t) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, t) &&
                  (a[t] = e[t]));
        }
        return a;
      }
      function c(e, n) {
        for (var t = 0; t < n.length; t++) {
          var o = n[t];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            'value' in o && (o.writable = !0),
            Object.defineProperty(e, o.key, o);
        }
      }
      function l(e, n) {
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
      function m(e) {
        return (m = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function p(e, n) {
        return (p =
          Object.setPrototypeOf ||
          function(e, n) {
            return (e.__proto__ = n), e;
          })(e, n);
      }
      var d = (function(e) {
        function n(e) {
          var t;
          return (
            (function(e, n) {
              if (!(e instanceof n))
                throw new TypeError('Cannot call a class as a function');
            })(this, n),
            ((t = l(this, m(n).call(this, e))).layout = null),
            t
          );
        }
        var t, o, s;
        return (
          (function(e, n) {
            if ('function' !== typeof n && null !== n)
              throw new TypeError(
                'Super expression must either be null or a function'
              );
            (e.prototype = Object.create(n && n.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              n && p(e, n);
          })(n, a.a.Component),
          (t = n),
          (o = [
            {
              key: 'render',
              value: function() {
                var e = this.props,
                  n = e.components;
                i(e, ['components']);
                return a.a.createElement(
                  r.MDXTag,
                  { name: 'wrapper', components: n },
                  a.a.createElement(
                    r.MDXTag,
                    {
                      name: 'h1',
                      components: n,
                      props: { id: 'coding-best-practices' },
                    },
                    'Coding Best Practices'
                  ),
                  a.a.createElement(
                    r.MDXTag,
                    { name: 'p', components: n },
                    'The more uniform our code is across the organization, the easier time we will have maintaining it.'
                  ),
                  a.a.createElement(
                    r.MDXTag,
                    { name: 'p', components: n },
                    'Follow established coding standards\nDrupal, Wordpress and Magento all have their own coding standards documents. Projects in these frameworks should follow their respective standards strictly. Laravel and Symfony projects should follow PSR 1 - 4.'
                  ),
                  a.a.createElement(
                    r.MDXTag,
                    { name: 'p', components: n },
                    'Follow the TAG Front-End Best Practices\nSome of these can be counterintuitive at first (such as avoiding nested SCSS); however, these will help to reduce the maintenance effort for front-end code.'
                  ),
                  a.a.createElement(
                    r.MDXTag,
                    { name: 'p', components: n },
                    'Avoid indentation\nLots of nested code blocks can make code much harder to read. Whenever practical, avoid nesting indented blocks. For instance:'
                  ),
                  a.a.createElement(
                    r.MDXTag,
                    { name: 'pre', components: n },
                    a.a.createElement(
                      r.MDXTag,
                      {
                        name: 'code',
                        components: n,
                        parentName: 'pre',
                        props: {},
                      },
                      'if ($condition) {\n  foreach ($collection as $item) {\n    if ($other_condition) {\ndo_something(\\$item);\n}\n}\n}\n'
                    )
                  ),
                  a.a.createElement(
                    r.MDXTag,
                    { name: 'p', components: n },
                    'should be refactored as:'
                  ),
                  a.a.createElement(
                    r.MDXTag,
                    { name: 'pre', components: n },
                    a.a.createElement(
                      r.MDXTag,
                      {
                        name: 'code',
                        components: n,
                        parentName: 'pre',
                        props: {},
                      },
                      'if (!$condition) {\n  return;\n}\nforeach ($collection as $item) {\n  if (!$other_condition) {\ncontinue;\n}\ndo_something(\\$item);\n}\n'
                    )
                  ),
                  a.a.createElement(
                    r.MDXTag,
                    { name: 'p', components: n },
                    'Avoid elseif\nLong strings of elseifs can be difficult to follow. Prefer switch or the method described in "Avoid indention" whenever practical.'
                  ),
                  a.a.createElement(
                    r.MDXTag,
                    { name: 'p', components: n },
                    'Comments: Answer "Why?", not "What?"\nComments should not summarize what some code is trying to do. Instead, it should explain why the code is necessary. For instance:'
                  ),
                  a.a.createElement(
                    r.MDXTag,
                    { name: 'pre', components: n },
                    a.a.createElement(
                      r.MDXTag,
                      {
                        name: 'code',
                        components: n,
                        parentName: 'pre',
                        props: {},
                      },
                      "// If this is a local environment:\nif (!empty($base_insecure_url) && strpos($base_insecure_url, 'http://local') === 0) {\n// Returns early.\nreturn;\n}\n"
                    )
                  ),
                  a.a.createElement(
                    r.MDXTag,
                    { name: 'p', components: n },
                    'should be refactored as:'
                  ),
                  a.a.createElement(
                    r.MDXTag,
                    { name: 'pre', components: n },
                    a.a.createElement(
                      r.MDXTag,
                      {
                        name: 'code',
                        components: n,
                        parentName: 'pre',
                        props: {},
                      },
                      "if (!empty($base_insecure_url) && strpos($base_insecure_url, 'http://local') === 0) {\n// The rest of this function only applies to non-local environments.\nreturn;\n}\n"
                    )
                  ),
                  a.a.createElement(
                    r.MDXTag,
                    { name: 'h2', components: n, props: { id: 'php' } },
                    'PHP'
                  ),
                  a.a.createElement(
                    r.MDXTag,
                    { name: 'p', components: n },
                    "Don't query the DB inside a loop\nThis is very important for performance and scalability. Consider the following:"
                  ),
                  a.a.createElement(
                    r.MDXTag,
                    { name: 'pre', components: n },
                    a.a.createElement(
                      r.MDXTag,
                      {
                        name: 'code',
                        components: n,
                        parentName: 'pre',
                        props: {},
                      },
                      '$titles = array();\nforeach ($nids as $nid) {\n  $node = node_load($nid);\n  $titles[] = \\$node->title;\n}\n'
                    )
                  ),
                  a.a.createElement(
                    r.MDXTag,
                    { name: 'p', components: n },
                    'This code adds N additional SELECT queries per invocation. This can rapidly become an issue as the number of elements in the \\$nids array grows. This should be refactored as so:'
                  ),
                  a.a.createElement(
                    r.MDXTag,
                    { name: 'pre', components: n },
                    a.a.createElement(
                      r.MDXTag,
                      {
                        name: 'code',
                        components: n,
                        parentName: 'pre',
                        props: {},
                      },
                      '$titles = array();\n$nodes = node_load_multiple($nids);\nforeach ($nodes as $node) {\n  $titles[] = \\$node->title;\n}\n'
                    )
                  ),
                  a.a.createElement(
                    r.MDXTag,
                    { name: 'p', components: n },
                    "Now we're only adding a single query, regardless of the number of records being returned."
                  ),
                  a.a.createElement(
                    r.MDXTag,
                    { name: 'h2', components: n, props: { id: 'drupal' } },
                    'Drupal'
                  ),
                  a.a.createElement(
                    r.MDXTag,
                    { name: 'p', components: n },
                    'Use variables for configuration values'
                  ),
                  a.a.createElement(
                    r.MDXTag,
                    { name: 'p', components: n },
                    'Configuration values such as external API endpoints and keys, client contact info and any other non-content data that may change in the future should be stored as Drupal variables. Do this either with variable_set() in a release script or by adding it as a \\$conf value in settings.php. This is especially true for values which should change based on the environment (dev/test/prod).'
                  ),
                  a.a.createElement(
                    r.MDXTag,
                    { name: 'p', components: n },
                    'Keep your .module file clean'
                  ),
                  a.a.createElement(
                    r.MDXTag,
                    { name: 'p', components: n },
                    "As long as a module is enabled, the .module file is loaded every time Drupal is bootstrapped. It is very important to keep this file as small as practical so that performance isn't impacted. As an extension of this, do not use global includes in your .module files. Instead, do use includes inside of functions. The only functions that belong in a .module file are hook",
                    a.a.createElement(
                      r.MDXTag,
                      { name: 'em', components: n, parentName: 'p' },
                      ' and theme'
                    ),
                    ' implementations. Everything else should be refactored out into separate files and only included when needed.'
                  ),
                  a.a.createElement(
                    r.MDXTag,
                    { name: 'h2', components: n, props: { id: 'git' } },
                    'Git'
                  ),
                  a.a.createElement(
                    r.MDXTag,
                    { name: 'p', components: n },
                    'Give your branches meaningful names'
                  ),
                  a.a.createElement(
                    r.MDXTag,
                    { name: 'p', components: n },
                    'Unless your project lead specifies otherwise, use the following branch naming format: ',
                    a.a.createElement(
                      r.MDXTag,
                      { name: 'inlineCode', components: n, parentName: 'p' },
                      '<base branch>+<ticket number>'
                    ),
                    '. For instance, my branch for JIRA ticket SWS-109, which went into the 4.1.0 release branch, was named v4.1.0+SWS-109.'
                  ),
                  a.a.createElement(
                    r.MDXTag,
                    { name: 'p', components: n },
                    'Use full sentences in your commit messages'
                  ),
                  a.a.createElement(
                    r.MDXTag,
                    { name: 'p', components: n },
                    'Commit messages should be full sentences in the imperative mood. Whenever applicable, include the JIRA ticket number in the comment.'
                  ),
                  a.a.createElement(
                    r.MDXTag,
                    { name: 'p', components: n },
                    'Bad'
                  ),
                  a.a.createElement(
                    r.MDXTag,
                    { name: 'pre', components: n },
                    a.a.createElement(
                      r.MDXTag,
                      {
                        name: 'code',
                        components: n,
                        parentName: 'pre',
                        props: {
                          className: 'language-Code',
                          metastring: 'cleanup.',
                          'cleanup.': !0,
                        },
                      },
                      'Skeleton for new QuickenExport module.\nDownload URL should not be required (GP-97).\nRemoving unnecessary use statement and fixing indentation.\n'
                    )
                  ),
                  a.a.createElement(
                    r.MDXTag,
                    { name: 'p', components: n },
                    'Good'
                  ),
                  a.a.createElement(
                    r.MDXTag,
                    { name: 'pre', components: n },
                    a.a.createElement(
                      r.MDXTag,
                      {
                        name: 'code',
                        components: n,
                        parentName: 'pre',
                        props: {
                          className: 'language-JIRA-123:',
                          metastring: 'Clean up code.',
                          Clean: !0,
                          up: !0,
                          'code.': !0,
                        },
                      },
                      'JIRA-123: Add the skeleton for the new QuickenExport module.\nMake Download URL not required (GP-97).\nJIRA-123: Remove unnecessary use statement and fix indentation.\n'
                    )
                  )
                );
              },
            },
          ]) && c(t.prototype, o),
          s && c(t, s),
          n
        );
      })();
      d.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'MDXContent',
      };
    },
  },
]);
//# sourceMappingURL=src-legacy-coding-best-practices.e710d2d12d5b47a452a9.js.map
