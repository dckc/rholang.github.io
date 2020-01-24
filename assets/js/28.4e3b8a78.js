(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{279:function(e,t,n){"use strict";t.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}},741:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n(53),i=(n(86),n(20),n(34),n(279)),r=n(1),s=(r.default.config.optionMergeStrategies,{VueRemarkRoot:i.a}),c=function(e){var t=e.options.components=e.options.components||{},n=e.options.computed=e.options.computed||{};Object.keys(s).forEach((function(e){"object"===Object(a.a)(s[e])&&"function"==typeof s[e].render?t[e]=s[e]:n[e]=function(){return s[e]}}))},p=r.default.config.optionMergeStrategies,l="__vueRemarkFrontMatter",u={excerpt:null,title:"Iteration"};var h=function(e){e.options[l]&&(e.options[l]=u),r.default.util.defineReactive(e.options,l,u),e.options.computed=p.computed({$frontmatter:function(){return e.options[l]}},e.options.computed)},d=Object(o.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("VueRemarkRoot",[n("h1",{attrs:{id:"iteration"}},[n("a",{attrs:{href:"#iteration","aria-hidden":"true"}},[e._v("#")]),e._v("Iteration")]),n("p",[e._v("In the code below, we show an example of iterating through a list.")]),n("pre",{pre:!0,attrs:{class:"language-javascript{numberLines:"}},[n("code",{pre:!0,attrs:{class:"language-javascript{numberLines:"}},[e._v("  new iterate in {\n    contract iterate(@list, process, done) = {\n      match list {\n        [hd, ...tl] => {\n          new ack in {\n            process!(hd, *ack) |\n            for (_ <- ack) { iterate!(tl, *process, *done) }\n          }\n        }\n        _ => done!(Nil)\n      }\n    } |\n    new process, done in {\n      iterate!([4,5,6], *process, *done) |\n      contract process(@item, ack) = {\n        /* handle processing of item */\n        ack!(Nil)\n      } |\n      for (_ <- done) {\n        /* done! */\n        Nil\n      }\n    }\n  }")])]),n("p",[e._v("3.) The "),n("code",{pre:!0,attrs:{class:"language-text"}},[e._v("match")]),e._v(" construction allows destructuring a variable through pattern matching.")]),n("p",[e._v("4.) List patterns support matching the remainder of a list.  If "),n("code",{pre:!0,attrs:{class:"language-text"}},[e._v("list")]),e._v(" matches the pattern of a head/tail pair then we execute the main body of the loop.")]),n("p",[e._v("5.) We create a channel for the item handler to notify us that it's done with the current item.")]),n("p",[e._v("6.) We invoke the processor on the item and the acknowledgement channel.")]),n("p",[e._v("7.) When we receive acknowledgement, we reinvoke the iterator on the tail.")]),n("p",[e._v("10.) If the list is empty, we signal that the processing is complete.")]),n("p",[e._v("14.) We invoke the iterator.")]),n("p",[e._v("15-18) This "),n("code",{pre:!0,attrs:{class:"language-text"}},[e._v("contract")]),e._v(" gets invoked for each item in the list.  On line 17, we tell the iterator that we're done with this item.")]),n("p",[e._v("19.) This "),n("code",{pre:!0,attrs:{class:"language-text"}},[e._v("for")]),e._v(" contains the code that should be executed when the interaction is complete.")])])}),[],!1,null,null,null);"function"==typeof c&&c(d),"function"==typeof h&&h(d);t.default=d.exports}}]);