(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{280:function(t,n,e){"use strict";n.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}},777:function(t,n,e){"use strict";e.r(n);var a=e(0),s=e(54),r=(e(53),e(17),e(28),e(280)),o=e(1),p=(o.default.config.optionMergeStrategies,{VueRemarkRoot:r.a}),v=function(t){var n=t.options.components=t.options.components||{},e=t.options.computed=t.options.computed||{};Object.keys(p).forEach((function(t){"object"===Object(s.a)(p[t])&&"function"==typeof p[t].render?n[t]=p[t]:e[t]=function(){return p[t]}}))},i=o.default.config.optionMergeStrategies,l="__vueRemarkFrontMatter",_={excerpt:null,title:"Filtering data"};var u=function(t){t.options[l]&&(t.options[l]=_),o.default.util.defineReactive(t.options,l,_),t.options.computed=i.computed({$frontmatter:function(){return t.options[l]}},t.options.computed)},c=Object(a.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("VueRemarkRoot",[e("h1",{attrs:{id:"filtering-data"}},[e("a",{attrs:{href:"#filtering-data","aria-hidden":"true"}},[t._v("#")]),t._v("Filtering data")]),e("p",[t._v("Each collection in the GraphQL schema has a "),e("code",{pre:!0,attrs:{class:"language-text"}},[t._v("filter")]),t._v(" argument which can be used to filter the results. You can filter by any custom field. Each field type supports different operators.")]),e("p",[t._v("The syntax for "),e("code",{pre:!0,attrs:{class:"language-text"}},[t._v("filter")]),t._v(" is based on the "),e("a",{attrs:{href:"https://docs.mongodb.com/manual/reference/operator/query/",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("mongodb")]),t._v(" query syntax.")]),e("h2",{attrs:{id:"string-fields"}},[e("a",{attrs:{href:"#string-fields","aria-hidden":"true"}},[t._v("#")]),t._v("String fields")]),e("table",[e("thead",[e("tr",[e("th",[t._v("Operator")]),e("th",[t._v("Description")])])]),e("tbody",[e("tr",[e("td",[e("strong",[t._v("eq")]),e("em",[t._v("(equal)")])]),e("td",[t._v("Find nodes with field of (strict) equality.")])]),e("tr",[e("td",[e("strong",[t._v("ne")]),e("em",[t._v("(not equal)")])]),e("td",[t._v("Find nodes with field not equal to provided value.")])]),e("tr",[e("td",[e("strong",[t._v("in")])]),e("td",[t._v("Find nodes with field matching any of the provided values.")])]),e("tr",[e("td",[e("strong",[t._v("nin")]),e("em",[t._v("(not in)")])]),e("td",[t._v("Find nodes with field not matching any of the provided values.")])]),e("tr",[e("td",[e("strong",[t._v("regex")])]),e("td",[t._v("Filter nodes with property matching provided regular expression.")])]),e("tr",[e("td",[e("strong",[t._v("len")]),e("em",[t._v("(length)")])]),e("td",[t._v("Filter nodes which have a string field of specified length.")])])])]),e("pre",{pre:!0,attrs:{class:"language-graphql"}},[e("code",{pre:!0,attrs:{class:"language-graphql"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("query")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  allPost"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("filter")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("in")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    edges "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      node "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        title\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])])]),e("p",[t._v("This example will query nodes where "),e("code",{pre:!0,attrs:{class:"language-text"}},[t._v("id")]),t._v(" is "),e("strong",[t._v("1")]),t._v(" or "),e("strong",[t._v("2")]),t._v(".")]),e("h2",{attrs:{id:"date-fields"}},[e("a",{attrs:{href:"#date-fields","aria-hidden":"true"}},[t._v("#")]),t._v("Date fields")]),e("table",[e("thead",[e("tr",[e("th",[t._v("Operator")]),e("th",[t._v("Description")])])]),e("tbody",[e("tr",[e("td",[e("strong",[t._v("gt")]),e("em",[t._v("(greater than)")])]),e("td",[t._v("Find nodes with field greater than provided value.")])]),e("tr",[e("td",[e("strong",[t._v("gte")]),e("em",[t._v("(greater or equal)")])]),e("td",[t._v("Find nodes with field greater or equal to provided value.")])]),e("tr",[e("td",[e("strong",[t._v("lt")]),e("em",[t._v("(less than)")])]),e("td",[t._v("Find nodes with field less than provided value.")])]),e("tr",[e("td",[e("strong",[t._v("lte")]),e("em",[t._v("(less than or equal)")])]),e("td",[t._v("Find nodes with field less than or equal to provided value.")])]),e("tr",[e("td",[e("strong",[t._v("dteq")]),e("em",[t._v("(equal dates)")])]),e("td",[t._v("Filter nodes by date property equal to provided date value.")])]),e("tr",[e("td",[e("strong",[t._v("between")])]),e("td",[t._v("Find nodes with field value between provided values.")])])])]),e("pre",{pre:!0,attrs:{class:"language-graphql"}},[e("code",{pre:!0,attrs:{class:"language-graphql"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("query")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  allPost"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("filter")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("date")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("gte")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2017"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    edges "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      node "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        title\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])])]),e("p",[t._v("This example will query only nodes where "),e("code",{pre:!0,attrs:{class:"language-text"}},[t._v("date")]),t._v(" is greater than or equal to "),e("strong",[t._v("2017")]),t._v(".")]),e("h2",{attrs:{id:"boolean-fields"}},[e("a",{attrs:{href:"#boolean-fields","aria-hidden":"true"}},[t._v("#")]),t._v("Boolean fields")]),e("table",[e("thead",[e("tr",[e("th",[t._v("Operator")]),e("th",[t._v("Description")])])]),e("tbody",[e("tr",[e("td",[e("strong",[t._v("eq")]),e("em",[t._v("(equal)")])]),e("td",[t._v("Find nodes with field of (strict) equality.")])]),e("tr",[e("td",[e("strong",[t._v("ne")]),e("em",[t._v("(not equal)")])]),e("td",[t._v("Find nodes with field not equal to provided value.")])]),e("tr",[e("td",[e("strong",[t._v("in")])]),e("td",[t._v("Find nodes with field matching any of the provided values.")])]),e("tr",[e("td",[e("strong",[t._v("nin")]),e("em",[t._v("(not in)")])]),e("td",[t._v("Find nodes with field not matching any of the provided values.")])])])]),e("pre",{pre:!0,attrs:{class:"language-graphql"}},[e("code",{pre:!0,attrs:{class:"language-graphql"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("query")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  allPost"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("filter")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("featured")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("eq")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    edges "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      node "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        title\n        featured\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])])]),e("p",[t._v("This example will query only nodes where "),e("code",{pre:!0,attrs:{class:"language-text"}},[t._v("featured")]),t._v(" is "),e("strong",[t._v("true")]),t._v(".")]),e("h2",{attrs:{id:"number-fields"}},[e("a",{attrs:{href:"#number-fields","aria-hidden":"true"}},[t._v("#")]),t._v("Number fields")]),e("table",[e("thead",[e("tr",[e("th",[t._v("Operator")]),e("th",[t._v("Description")])])]),e("tbody",[e("tr",[e("td",[e("strong",[t._v("eq")]),e("em",[t._v("(equal)")])]),e("td",[t._v("Find nodes with field of (strict) equality.")])]),e("tr",[e("td",[e("strong",[t._v("ne")]),e("em",[t._v("(not equal)")])]),e("td",[t._v("Find nodes with field not equal to provided value.")])]),e("tr",[e("td",[e("strong",[t._v("in")])]),e("td",[t._v("Find nodes with field matching any of the provided values.")])]),e("tr",[e("td",[e("strong",[t._v("nin")]),e("em",[t._v("(not in)")])]),e("td",[t._v("Find nodes with field not matching any of the provided values.")])]),e("tr",[e("td",[e("strong",[t._v("gt")]),e("em",[t._v("(greater than)")])]),e("td",[t._v("Find nodes with field greater than provided value.")])]),e("tr",[e("td",[e("strong",[t._v("gte")]),e("em",[t._v("(greater or equal)")])]),e("td",[t._v("Find nodes with field greater or equal to provided value.")])]),e("tr",[e("td",[e("strong",[t._v("lt")]),e("em",[t._v("(less than)")])]),e("td",[t._v("Find nodes with field less than provided value.")])]),e("tr",[e("td",[e("strong",[t._v("lte")]),e("em",[t._v("(less than or equal)")])]),e("td",[t._v("Find nodes with field less than or equal to provided value.")])]),e("tr",[e("td",[e("strong",[t._v("between")])]),e("td",[t._v("Find nodes with field value between provided values.")])])])]),e("pre",{pre:!0,attrs:{class:"language-graphql"}},[e("code",{pre:!0,attrs:{class:"language-graphql"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("query")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  allProduct"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("filter")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("price")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("between")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("49")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("99")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    edges "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      node "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        title\n        price\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])])]),e("p",[t._v("This example will query only nodes with "),e("code",{pre:!0,attrs:{class:"language-text"}},[t._v("price")]),t._v(" value between "),e("strong",[t._v("49")]),t._v(" and "),e("strong",[t._v("99")]),t._v(".")]),e("h2",{attrs:{id:"array-fields"}},[e("a",{attrs:{href:"#array-fields","aria-hidden":"true"}},[t._v("#")]),t._v("Array fields")]),e("table",[e("thead",[e("tr",[e("th",[t._v("Operator")]),e("th",[t._v("Description")])])]),e("tbody",[e("tr",[e("td",[e("strong",[t._v("size")])]),e("td",[t._v("Filter nodes which have an array property of specified size.")])]),e("tr",[e("td",[e("strong",[t._v("contains")])]),e("td",[t._v("Find nodes with field containing the provided value.")])]),e("tr",[e("td",[e("strong",[t._v("containsAny")])]),e("td",[t._v("Find nodes with field containing any of the provided values.")])]),e("tr",[e("td",[e("strong",[t._v("containsNone")])]),e("td",[t._v("Find nodes with field containing none of the provided values.")])])])]),e("pre",{pre:!0,attrs:{class:"language-graphql"}},[e("code",{pre:!0,attrs:{class:"language-graphql"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("query")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  allPost"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("filter")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("keywords")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("contains")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"gridsome"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    edges "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      node "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        title\n        keywords\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])])]),e("p",[t._v("This example will query only nodes which has the "),e("strong",[t._v("gridsome")]),e("code",{pre:!0,attrs:{class:"language-text"}},[t._v("keyword")]),t._v(".")])])}),[],!1,null,null,null);"function"==typeof v&&v(c),"function"==typeof u&&u(c);n.default=c.exports}}]);