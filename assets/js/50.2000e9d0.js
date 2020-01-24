(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{280:function(t,a,s){"use strict";a.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}},791:function(t,a,s){"use strict";s.r(a);var e=s(0),n=s(54),r=(s(53),s(17),s(28),s(280)),p=s(1),o=(p.default.config.optionMergeStrategies,{VueRemarkRoot:r.a}),c=function(t){var a=t.options.components=t.options.components||{},s=t.options.computed=t.options.computed||{};Object.keys(o).forEach((function(t){"object"===Object(n.a)(o[t])&&"function"==typeof o[t].render?a[t]=o[t]:s[t]=function(){return o[t]}}))},u=p.default.config.optionMergeStrategies,i="__vueRemarkFrontMatter",l={excerpt:null,title:"Dynamic Routing"};var v=function(t){t.options[i]&&(t.options[i]=l),p.default.util.defineReactive(t.options,i,l),t.options.computed=u.computed({$frontmatter:function(){return t.options[i]}},t.options.computed)},_=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("VueRemarkRoot",[s("h1",{attrs:{id:"dynamic-routing"}},[s("a",{attrs:{href:"#dynamic-routing","aria-hidden":"true"}},[t._v("#")]),t._v("Dynamic Routing")]),s("blockquote",[s("p",[t._v("Dynamic routes are useful for pages that only need client-side routing. For example pages that fetch info from an external API in production based on a segment in the URL.")])]),s("h2",{attrs:{id:"file-based-dynamic-routes"}},[s("a",{attrs:{href:"#file-based-dynamic-routes","aria-hidden":"true"}},[t._v("#")]),t._v("File-based dynamic routes")]),s("p",[t._v("Dynamic pages are used for client-side routing. Route parameters can be placed in file and directory names by wrapping the name in square brackets. For example:")]),s("ul",[s("li",[s("code",{pre:!0,attrs:{class:"language-text"}},[t._v("src/pages/user/[id].vue")]),t._v(" becomes "),s("code",{pre:!0,attrs:{class:"language-text"}},[t._v("/user/:id")]),t._v(".")]),s("li",[s("code",{pre:!0,attrs:{class:"language-text"}},[t._v("src/pages/user/[id]/settings.vue")]),t._v(" becomes "),s("code",{pre:!0,attrs:{class:"language-text"}},[t._v("/user/:id/settings")]),t._v(".")])]),s("p",[t._v("At build time, this will generate "),s("code",{pre:!0,attrs:{class:"language-text"}},[t._v("user/_id.html")]),t._v(" and "),s("code",{pre:!0,attrs:{class:"language-text"}},[t._v("user/_id/settings.html")]),t._v(" and you must have rewrite rules to make them work properly.")]),s("p",[t._v("Pages with dynamic routes have lower priority than fixed routes. For example, if you have a "),s("code",{pre:!0,attrs:{class:"language-text"}},[t._v("/user/create")]),t._v(" and a "),s("code",{pre:!0,attrs:{class:"language-text"}},[t._v("/user/:id")]),t._v(" route, the "),s("code",{pre:!0,attrs:{class:"language-text"}},[t._v("/user/create")]),t._v(" route will be prioritized.")]),s("p",[t._v("Here is a basic page component that uses the "),s("code",{pre:!0,attrs:{class:"language-text"}},[t._v("id")]),t._v(" parameter from the route to fetch user information on client-side:")]),s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",{pre:!0,attrs:{class:"language-html"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-if")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{ user.name }}"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mounted")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" id "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$route"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("params\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" response "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fetch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("https://api.example.com/user/")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("user "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("json")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])])]),s("p",[s("em",[t._v("Always use the "),s("code",{pre:!0,attrs:{class:"language-text"}},[t._v("mounted")]),t._v(" hook to fetch client-side data. Fetching data in the "),s("code",{pre:!0,attrs:{class:"language-text"}},[t._v("created")]),t._v(" hook will cause issues because it is executed when generating static HTML.")])]),s("h2",{attrs:{id:"programmatic-dynamic-routes"}},[s("a",{attrs:{href:"#programmatic-dynamic-routes","aria-hidden":"true"}},[t._v("#")]),t._v("Programmatic dynamic routes")]),s("p",[t._v("Create pages with dynamic routes programmatically for more advanced paths. Dynamic parameters are specified by having a "),s("code",{pre:!0,attrs:{class:"language-text"}},[t._v(":")]),t._v(" in front of a segment. And each parameter can have a custom regular expression to match only digits or certain values.")]),s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",{pre:!0,attrs:{class:"language-js"}},[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("exports")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("api")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  api"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createPages")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" createPage "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createPage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/user/:id(\\\\d+)'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      component"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./src/templates/User.vue'")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])])]),s("p",[s("a",{attrs:{href:"/docs/pages-api/"}},[t._v("Read more about the Pages API")])]),s("h2",{attrs:{id:"generating-rewrite-rules"}},[s("a",{attrs:{href:"#generating-rewrite-rules","aria-hidden":"true"}},[t._v("#")]),t._v("Generating rewrite rules")]),s("p",[t._v("Gridsome is not able to generate HTML files for every possible variation of a dynamic route which means the URLs most likely will show a 404 page when visited directly. Instead, Gridsome generates one HTML file which can be used in a rewrite rule. For example, a route like "),s("code",{pre:!0,attrs:{class:"language-text"}},[t._v("/user/:id")]),t._v(" will generate a HTML file located at "),s("code",{pre:!0,attrs:{class:"language-text"}},[t._v("/user/_id.html")]),t._v(". You can have a rewrite rule to map all paths matching "),s("code",{pre:!0,attrs:{class:"language-text"}},[t._v("/user/:id")]),t._v(" to that file.")]),s("p",[t._v("Rewrite rules must be generated manually because every server type has its own syntax. The "),s("code",{pre:!0,attrs:{class:"language-text"}},[t._v("redirects")]),t._v(" array in the "),s("code",{pre:!0,attrs:{class:"language-text"}},[t._v("afterBuild")]),t._v(" hook contains all necessary rewrite rules that should be generated.")]),s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",{pre:!0,attrs:{class:"language-js"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" fs "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fs'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("afterBuild")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" redirects "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" rule "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("of")]),t._v(" redirects"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// rule.from   - The dynamic path")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// rule.to     - The HTML file path")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// rule.status - 200 if rewrite rule")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])])])])}),[],!1,null,null,null);"function"==typeof c&&c(_),"function"==typeof v&&v(_);a.default=_.exports}}]);