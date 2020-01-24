(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{280:function(t,a,s){"use strict";a.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}},758:function(t,a,s){"use strict";s.r(a);var e=s(0),n=s(54),o=(s(53),s(17),s(28),s(280)),r=s(1),p=(r.default.config.optionMergeStrategies,{VueRemarkRoot:o.a}),c=function(t){var a=t.options.components=t.options.components||{},s=t.options.computed=t.options.computed||{};Object.keys(p).forEach((function(t){"object"===Object(n.a)(p[t])&&"function"==typeof p[t].render?a[t]=p[t]:s[t]=function(){return p[t]}}))},u=r.default.config.optionMergeStrategies,l="__vueRemarkFrontMatter",i={excerpt:null,title:"Global metadata"};var v=function(t){t.options[l]&&(t.options[l]=i),r.default.util.defineReactive(t.options,l,i),t.options.computed=u.computed({$frontmatter:function(){return t.options[l]}},t.options.computed)},_=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("VueRemarkRoot",[s("h1",{attrs:{id:"global-metadata"}},[s("a",{attrs:{href:"#global-metadata","aria-hidden":"true"}},[t._v("#")]),t._v("Global metadata")]),s("p",[t._v("Gridsome lets you add global metadata with the "),s("a",{attrs:{href:"/docs/data-store-api/"}},[t._v("Data store API")]),t._v(". To use the API you need a "),s("code",{pre:!0,attrs:{class:"language-text"}},[t._v("gridsome.server.js")]),t._v(" file in the root folder of your Gridsome project.  Metadata are static and can't be updated or changed from client.")]),s("blockquote",[s("p",[t._v("Adding metadata is great if you have data you want to be globally accessible, but don't need to be in any GraphQL collection.")])]),s("p",[t._v("Here is an example:")]),s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",{pre:!0,attrs:{class:"language-js"}},[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("exports")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("api")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  api"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("loadSource")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("store")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    store"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addMetadata")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'message'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'This is a global text'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])])]),s("p",[t._v("The metadata will be available inside the "),s("strong",[t._v("metadata")]),t._v(" GraphQL root field. Metadata can be "),s("a",{attrs:{href:"/docs/fetching-data/"}},[t._v("fetched")]),t._v(" like any other data.")]),s("p",[t._v("Here is an example on how it could be used in a Vue Component:")]),s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",{pre:!0,attrs:{class:"language-html"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-html")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("$static.metadata.message"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("static-query")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token graphql"}},[t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("query")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  metadata "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    message\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("static-query")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])])])])}),[],!1,null,null,null);"function"==typeof c&&c(_),"function"==typeof v&&v(_);a.default=_.exports}}]);