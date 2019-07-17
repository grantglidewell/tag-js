(window.webpackJsonp = window.webpackJsonp || []).push([
  [3],
  {
    './src/legacyFrontEndStandards.mdx': function(e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, 'default', function() {
          return d;
        });
      var o = n('./node_modules/react/index.js'),
        a = n.n(o),
        s = n('./node_modules/@mdx-js/tag/dist/index.js');
      function r(e) {
        return (r =
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
      function i(e, t) {
        if (null == e) return {};
        var n,
          o,
          a = (function(e, t) {
            if (null == e) return {};
            var n,
              o,
              a = {},
              s = Object.keys(e);
            for (o = 0; o < s.length; o++)
              (n = s[o]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(e);
          for (o = 0; o < s.length; o++)
            (n = s[o]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      function c(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            'value' in o && (o.writable = !0),
            Object.defineProperty(e, o.key, o);
        }
      }
      function l(e, t) {
        return !t || ('object' !== r(t) && 'function' !== typeof t)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function m(e) {
        return (m = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function p(e, t) {
        return (p =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var d = (function(e) {
        function t(e) {
          var n;
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, t),
            ((n = l(this, m(t).call(this, e))).layout = null),
            n
          );
        }
        var n, o, r;
        return (
          (function(e, t) {
            if ('function' !== typeof t && null !== t)
              throw new TypeError(
                'Super expression must either be null or a function'
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && p(e, t);
          })(t, a.a.Component),
          (n = t),
          (o = [
            {
              key: 'render',
              value: function() {
                var e = this.props,
                  t = e.components;
                i(e, ['components']);
                return a.a.createElement(
                  s.MDXTag,
                  { name: 'wrapper', components: t },
                  a.a.createElement(
                    s.MDXTag,
                    {
                      name: 'h1',
                      components: t,
                      props: { id: 'front-end-standards' },
                    },
                    'Front End Standards'
                  ),
                  a.a.createElement(
                    s.MDXTag,
                    { name: 'p', components: t },
                    'When creating themes, it is important to keep our code modular, easily scalable, and easily understood by other developers (or even ourselves once our memory of the project has started to fade). This document contains best practices for working with CSS/SCSS, HTML, Javascript, and Drupal.'
                  ),
                  a.a.createElement(
                    s.MDXTag,
                    { name: 'p', components: t },
                    'For back-end best practices, see "Coding best practices."'
                  ),
                  a.a.createElement(
                    s.MDXTag,
                    {
                      name: 'h2',
                      components: t,
                      props: { id: 'responsive-design' },
                    },
                    'Responsive design'
                  ),
                  a.a.createElement(
                    s.MDXTag,
                    { name: 'p', components: t },
                    "Third and Grove follows a strict mobile first approach to responsive design. This allows us to build sites with the lowest common denominator in mind and progressively add styles according to the viewport size. We don't overload small phones with excessive code, and we optimize performance across the board, ensuring that all devices provide the best user experience possible. To this end, we should never use max-width media queries."
                  ),
                  a.a.createElement(
                    s.MDXTag,
                    {
                      name: 'h2',
                      components: t,
                      props: { id: 'viewport-tag' },
                    },
                    'Viewport Tag'
                  ),
                  a.a.createElement(
                    s.MDXTag,
                    { name: 'p', components: t },
                    'In order to create effective designs for mobile devices, we must correctly used the viewport meta tag. The proper viewport meta tag offers the ability to create styles specifically for mobile devices.'
                  ),
                  a.a.createElement(
                    s.MDXTag,
                    { name: 'pre', components: t },
                    a.a.createElement(
                      s.MDXTag,
                      {
                        name: 'code',
                        components: t,
                        parentName: 'pre',
                        props: {},
                      },
                      '<meta name="viewport" content="width=device-width, initial-scale=1.0" />\n'
                    )
                  ),
                  a.a.createElement(
                    s.MDXTag,
                    { name: 'p', components: t },
                    "The first argument sets the viewport width to the width of the user's device (mobile, tablet, desktop, etc.) and the second argument ensures that when loaded, the web page will be rendered at a 1:1 scale and no zooming will be applied out of the box."
                  ),
                  a.a.createElement(
                    s.MDXTag,
                    {
                      name: 'h2',
                      components: t,
                      props: { id: 'creating-a-theme-folder' },
                    },
                    'Creating a theme folder'
                  ),
                  a.a.createElement(
                    s.MDXTag,
                    { name: 'p', components: t },
                    "Third and Grove uses Gulp as a primary SCSS compiler because of its speed and broad support for extensions including but not limited to Autoprefixer, linting, generating icon fonts, Modernizr, and other useful tools. Our latest Gulp starter can be found on GitHub. Consult the repository's README for details on getting started with Gulp."
                  ),
                  a.a.createElement(
                    s.MDXTag,
                    { name: 'h2', components: t, props: { id: 'scss' } },
                    'SCSS'
                  ),
                  a.a.createElement(
                    s.MDXTag,
                    { name: 'p', components: t },
                    'Third and Grove currently uses SCSS because it is syntactically similar to CSS yet offers the power of SASS. Although SCSS offers incredible power, it has some downsides if used improperly. In order to avoid future bugs and overly verbose code, we write our SCSS as close to vanilla CSS as possible.'
                  ),
                  a.a.createElement(
                    s.MDXTag,
                    { name: 'h2', components: t, props: { id: 'partials' } },
                    'Partials'
                  ),
                  a.a.createElement(
                    s.MDXTag,
                    { name: 'p', components: t },
                    'When breaking out SCSS into folders and partials, it is better to have logically broken-out partials than to wind up with fewer but extremely long partials. We use sourcemaps to easily determine from which partial a style originates when debugging in browser.'
                  ),
                  a.a.createElement(
                    s.MDXTag,
                    { name: 'h2', components: t, props: { id: 'tabs' } },
                    'Tabs'
                  ),
                  a.a.createElement(
                    s.MDXTag,
                    { name: 'p', components: t },
                    "In keeping with the Drupal coding standards, we use soft tabs with two spaces; they're the only way to guarantee code renders the same in any environment."
                  ),
                  a.a.createElement(
                    s.MDXTag,
                    { name: 'h2', components: t, props: { id: 'comments' } },
                    'Comments'
                  ),
                  a.a.createElement(
                    s.MDXTag,
                    { name: 'p', components: t },
                    'Comments should use SCSS\'s comment style, "// I am a comment," as opposed to the traditional CSS comment style, "/',
                    a.a.createElement(
                      s.MDXTag,
                      { name: 'em', components: t, parentName: 'p' },
                      ' I am a comment '
                    ),
                    '/," so that they will not appear in the compiled CSS file. We utilize comments to effectively describe different parts of our code, especially at the top of each file. Comments should explain why we\'re doing something, especially when using an obscure CSS property. Read more on "Let\'s Write Beautiful CSS Comments."'
                  ),
                  a.a.createElement(
                    s.MDXTag,
                    { name: 'h2', components: t, props: { id: 'resets' } },
                    'Resets'
                  ),
                  a.a.createElement(
                    s.MDXTag,
                    { name: 'p', components: t },
                    "We use Eric Meyer's reset on all sites. It allows us to start with a fresh slate for all styles, rather than overriding arbitrary Normalize styles. All sites should also use Paul Irish's box-sizing method."
                  ),
                  a.a.createElement(
                    s.MDXTag,
                    {
                      name: 'h2',
                      components: t,
                      props: { id: 'classes-vs-ids' },
                    },
                    'Classes vs IDs'
                  ),
                  a.a.createElement(
                    s.MDXTag,
                    { name: 'p', components: t },
                    'We should almost never use IDs in CSS. IDs are given preference over classes, are difficult to maintain, and create bugs that are hard to track down and correct. IDs should, however, be used whenever possible in Javascript.'
                  ),
                  a.a.createElement(
                    s.MDXTag,
                    {
                      name: 'h2',
                      components: t,
                      props: { id: 'naming-conventions' },
                    },
                    'Naming conventions'
                  ),
                  a.a.createElement(
                    s.MDXTag,
                    { name: 'p', components: t },
                    'Classes, IDs, and images are named with lowercase words separated by a dash. Classes should be named using modular, descriptive words for components, instead of page level names or the name of the theme. To avoid confusion, it is important to avoid using common Drupal terms such as "block," "region," "pane," etc. in custom class names.'
                  ),
                  a.a.createElement(
                    s.MDXTag,
                    { name: 'p', components: t },
                    'Class names should not use descriptors relating to color, number of columns, or anything else that could easily change.'
                  ),
                  a.a.createElement(
                    s.MDXTag,
                    {
                      name: 'h3',
                      components: t,
                      props: { id: 'bad-examples' },
                    },
                    'Bad Examples'
                  ),
                  a.a.createElement(
                    s.MDXTag,
                    { name: 'p', components: t },
                    '.cat-page-header\n.panel-sidebar-menu\n.mag-slider-pane\n.pink-text\n.col-3'
                  ),
                  a.a.createElement(
                    s.MDXTag,
                    {
                      name: 'h3',
                      components: t,
                      props: { id: 'good-examples' },
                    },
                    'Good Examples'
                  ),
                  a.a.createElement(
                    s.MDXTag,
                    { name: 'p', components: t },
                    '.jumbo-header\n.cat-card\n.xl-slider\n.emphasized-text\n.content-aside'
                  ),
                  a.a.createElement(
                    s.MDXTag,
                    {
                      name: 'h2',
                      components: t,
                      props: { id: 'declaration-order' },
                    },
                    'Declaration order'
                  ),
                  a.a.createElement(
                    s.MDXTag,
                    { name: 'p', components: t },
                    'Style declarations should be placed in the following order:'
                  ),
                  a.a.createElement(
                    s.MDXTag,
                    { name: 'p', components: t },
                    "Positioning\nBox model\nTypographic\nVisual\nPositioning comes first because it can remove an element from the normal flow of the document and override box model related styles. The box model comes next as it dictates a component's dimensions and placement."
                  ),
                  a.a.createElement(
                    s.MDXTag,
                    { name: 'p', components: t },
                    'Everything else takes place inside the component or without impacting the previous two sections, and thus they come last.'
                  ),
                  a.a.createElement(
                    s.MDXTag,
                    {
                      name: 'h2',
                      components: t,
                      props: { id: 'single-line-declarations' },
                    },
                    'Single line declarations'
                  ),
                  a.a.createElement(
                    s.MDXTag,
                    { name: 'p', components: t },
                    'Do not use single-line declarations.'
                  ),
                  a.a.createElement(
                    s.MDXTag,
                    {
                      name: 'h2',
                      components: t,
                      props: { id: 'vendor-prefixes' },
                    },
                    'Vendor prefixes'
                  ),
                  a.a.createElement(
                    s.MDXTag,
                    { name: 'p', components: t },
                    'Let Autoprefixer (via Gulp) generate vendor prefixes for you when your SCSS compiles. See ',
                    a.a.createElement(
                      s.MDXTag,
                      {
                        name: 'a',
                        components: t,
                        parentName: 'p',
                        props: {
                          href: 'https://github.com/postcss/autoprefixer',
                        },
                      },
                      'https://github.com/postcss/autoprefixer'
                    ),
                    ' for instructions on how to specify which browsers you wish to support.'
                  ),
                  a.a.createElement(
                    s.MDXTag,
                    { name: 'h2', components: t, props: { id: 'nesting' } },
                    'Nesting'
                  ),
                  a.a.createElement(
                    s.MDXTag,
                    { name: 'p', components: t },
                    'In most cases, we do not nest our SCSS. Nesting selectors within selectors may seem convenient while writing code, but makes it more difficult to read and maintain and often leads to needlessly specific selectors.'
                  ),
                  a.a.createElement(
                    s.MDXTag,
                    { name: 'p', components: t },
                    'However, there are a few scenarios where it is acceptable to nest selectors one layer deep only:'
                  ),
                  a.a.createElement(
                    s.MDXTag,
                    { name: 'ul', components: t },
                    a.a.createElement(
                      s.MDXTag,
                      { name: 'li', components: t, parentName: 'ul' },
                      'When denoting a state such as :hover, :focus, or :active'
                    ),
                    a.a.createElement(
                      s.MDXTag,
                      { name: 'li', components: t, parentName: 'ul' },
                      'When using a pseudo-element (:before, :after)'
                    )
                  ),
                  a.a.createElement(
                    s.MDXTag,
                    {
                      name: 'h2',
                      components: t,
                      props: { id: 'scope-and-specificity' },
                    },
                    'Scope and Specificity'
                  ),
                  a.a.createElement(
                    s.MDXTag,
                    { name: 'p', components: t },
                    'Our goal in writing markup and SCSS should be to nest our selectors as little as possible, by using markup with specifically scoped classes. For instance, something like ".node-blog .field-related h2" is a clunky selector that will be difficult to override. Where possible, it is preferable to have a class directly on the object we wish to style. This keeps our code lean and allows us to create reusable modules with a minimum of overriding.'
                  ),
                  a.a.createElement(
                    s.MDXTag,
                    {
                      name: 'h2',
                      components: t,
                      props: { id: 'mixins-and-extendables' },
                    },
                    'Mixins and Extendables'
                  ),
                  a.a.createElement(
                    s.MDXTag,
                    { name: 'p', components: t },
                    'Use mixins to automate pieces of code, but not to create batch styles. Mixins are fantastic for media queries, including icons, button styling, or other small snippets of code that we may need to write several times. In cases where parameters are not needed and it will not need to be called from within a media query, an extendable can be used instead of a mixin (example: clearfixes).'
                  ),
                  a.a.createElement(
                    s.MDXTag,
                    { name: 'h2', components: t, props: { id: 'units' } },
                    'Units'
                  ),
                  a.a.createElement(
                    s.MDXTag,
                    { name: 'p', components: t },
                    'With the exception of borders, we try to avoid using pixel units for the sake of accessibility and responsiveness. To avoid the confusion of nested elements with ems applied, we use rems. Our Gulp starter includes a function, "px-to-rem()," that accepts an integer (in pixels) and converts it to rems so that we don\'t need to calculate them on the fly.'
                  ),
                  a.a.createElement(
                    s.MDXTag,
                    { name: 'h2', components: t, props: { id: 'frameworks' } },
                    'Frameworks'
                  ),
                  a.a.createElement(
                    s.MDXTag,
                    { name: 'p', components: t },
                    'We do not, under any circumstances, use frameworks such as Bootstrap or Foundation. Frameworks bloat file size incredibly quickly, almost always need to be overridden, and are frankly lazy development. In some cases, we may use only the portion of a framework that generates a custom grid.'
                  ),
                  a.a.createElement(
                    s.MDXTag,
                    { name: 'h2', components: t, props: { id: 'javascript' } },
                    'Javascript'
                  ),
                  a.a.createElement(
                    s.MDXTag,
                    { name: 'p', components: t },
                    'When writing javascript(jQuery), avoid using predefined functions such as "show()" and "hide()." Instead, toggle a CSS class for greater control over the resulting behavior. Choose libraries for interactions such as carousels with care, accounting for file size, quality of maintenance and documentation, and general reputability.'
                  ),
                  a.a.createElement(
                    s.MDXTag,
                    { name: 'p', components: t },
                    'When adding javascript to a Drupal theme or module, be sure to use "Drupal.behaviors" as opposed to "document.ready." For more information, read about the Drupal Javascript API.'
                  ),
                  a.a.createElement(
                    s.MDXTag,
                    { name: 'h2', components: t, props: { id: 'images' } },
                    'Images'
                  ),
                  a.a.createElement(
                    s.MDXTag,
                    { name: 'p', components: t },
                    "We do not use bitmap sprites. The only images that should appear in the theme folder are the theme's logo (which should be in SVG format for best resolution at all sizes and monitor types), any necessary background images, and SVG icons. When dealing with responsive layouts, we only load images appropriate to the user's screen."
                  ),
                  a.a.createElement(
                    s.MDXTag,
                    { name: 'h2', components: t, props: { id: 'fonts' } },
                    'Fonts'
                  ),
                  a.a.createElement(
                    s.MDXTag,
                    { name: 'p', components: t },
                    'Web fonts\nWe generally use web fonts from Google Fonts or Typekit. In Drupal themes, these should be added via a preprocess function.'
                  ),
                  a.a.createElement(
                    s.MDXTag,
                    { name: 'p', components: t },
                    'Font families and weights should be defined as SCSS variables. All font families should use, at a minimum, \'serif\' or \'sans-serif\' as a fallback. Font weights should always use the appropriate number (400, 700, etc.) - never simply "normal" or "bold."'
                  ),
                  a.a.createElement(
                    s.MDXTag,
                    { name: 'h2', components: t, props: { id: 'icon-fonts' } },
                    'Icon fonts'
                  ),
                  a.a.createElement(
                    s.MDXTag,
                    { name: 'p', components: t },
                    'We use Gulp to build custom icon fonts out of SVGs when needed, avoiding the bloat of many common icon fonts that contain hundreds or thousands of extraneous icons. Consult the Gulp starter README for implementation instructions.'
                  ),
                  a.a.createElement(
                    s.MDXTag,
                    { name: 'h2', components: t, props: { id: 'html' } },
                    'HTML'
                  ),
                  a.a.createElement(
                    s.MDXTag,
                    { name: 'p', components: t },
                    'All sites should use HTML5 elements, including content sectioning, for their correct semantic purpose.'
                  ),
                  a.a.createElement(
                    s.MDXTag,
                    {
                      name: 'h2',
                      components: t,
                      props: { id: 'cross-browser-compatibility' },
                    },
                    'Cross-Browser Compatibility'
                  ),
                  a.a.createElement(
                    s.MDXTag,
                    { name: 'p', components: t },
                    "To ensure that our sites work in as many browsers as possible, we should use progressive enhancement to add features only when supported. If needed, we should test whether a specific feature is supported in the user's browser using Modernizr, rather than generalizing based on browser. We should never use conditional statements such as ",
                    a.a.createElement(
                      s.MDXTag,
                      { name: 'inlineCode', components: t, parentName: 'p' },
                      '\x3c!-- [if IE] --\x3e'
                    ),
                    ' in our markup.'
                  ),
                  a.a.createElement(
                    s.MDXTag,
                    {
                      name: 'h2',
                      components: t,
                      props: { id: 'accessibility' },
                    },
                    'Accessibility'
                  ),
                  a.a.createElement(
                    s.MDXTag,
                    { name: 'p', components: t },
                    'Whether officially required by the project or not, we should make every effort to make our sites accessible to at least the standard of WCAG 2.0 AA. This includes, but is by no means limited to, ensuring that the site is keyboard navigable, using appropriate aria roles, including a skip link at the top of every page, and using proper alt tags on images.'
                  ),
                  a.a.createElement(
                    s.MDXTag,
                    { name: 'h2', components: t, props: { id: 'text-editor' } },
                    'Text Editor'
                  ),
                  a.a.createElement(
                    s.MDXTag,
                    { name: 'p', components: t },
                    'While you may use whatever text editor you like, Drupal.org offers some helpful tips on configuring Sublime Text.'
                  ),
                  a.a.createElement(
                    s.MDXTag,
                    {
                      name: 'h2',
                      components: t,
                      props: { id: 'related-resources' },
                    },
                    'Related Resources:'
                  ),
                  a.a.createElement(
                    s.MDXTag,
                    { name: 'p', components: t },
                    "Nicolas Gallagher's Principles of writing consistent, idiomatic CSS\nMark Otto's Code Guide\nJacob Thornton's Medium's CSS is actually pretty f",
                    '*',
                    '*',
                    '*',
                    "ing good.\nZurb's approach to Mobile First\nGoogle's HTML/CSS Style Guide"
                  )
                );
              },
            },
          ]) && c(n.prototype, o),
          r && c(n, r),
          t
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
//# sourceMappingURL=src-legacy-front-end-standards.e710d2d12d5b47a452a9.js.map
