(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{279:function(t,e,o){"use strict";e.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}},745:function(t,e,o){"use strict";o.r(e);var a=o(0),n=o(53),r=(o(86),o(20),o(34),o(279)),i=o(1),s=(i.default.config.optionMergeStrategies,{VueRemarkRoot:r.a}),c=function(t){var e=t.options.components=t.options.components||{},o=t.options.computed=t.options.computed||{};Object.keys(s).forEach((function(t){"object"===Object(n.a)(s[t])&&"function"==typeof s[t].render?e[t]=s[t]:o[t]=function(){return s[t]}}))},h=i.default.config.optionMergeStrategies,u="__vueRemarkFrontMatter",f={excerpt:null,title:"Current state of the protocol"};var p=function(t){t.options[u]&&(t.options[u]=f),i.default.util.defineReactive(t.options,u,f),t.options.computed=h.computed({$frontmatter:function(){return t.options[u]}},t.options.computed)},l=Object(a.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("VueRemarkRoot",[o("h1",{attrs:{id:"current-state-of-the-protocol"}},[o("a",{attrs:{href:"#current-state-of-the-protocol","aria-hidden":"true"}},[t._v("#")]),t._v("Current state of the protocol")]),o("p",[t._v("The latest updates, how Rchain`s proof of stake protocol is working, is availabe on "),o("a",{attrs:{href:"https://www.youtube.com/watch?v=9xkt2wyutis",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("https://www.youtube.com/watch?v=9xkt2wyutis")])]),o("h1",{attrs:{id:"casper-cbc"}},[o("a",{attrs:{href:"#casper-cbc","aria-hidden":"true"}},[t._v("#")]),t._v("Casper CBC")]),o("p",[t._v("In the context of blockchain technologies, the consensus algorithm is what allows everyone on the network to confidently know the current state of things and that when they engage in transactions which change the state others will recognize the change too.")]),o("p",[t._v("For the specific case of cryptocurrencies, this means that if I accept a payment from another user that I can be confident they actually have the amount they are offering me, and that others will recognize that I have that amount post-transaction and will accept it from me in future transactions.")]),o("h2",{attrs:{id:"proof-of-work-pow"}},[o("a",{attrs:{href:"#proof-of-work-pow","aria-hidden":"true"}},[t._v("#")]),t._v("Proof-of-work (PoW)")]),o("p",[t._v("Proof-of-work (PoW) consensus algorithms (one famously used by BitCoin) accomplish this by making it computationally expensive to process transactions, thus making it unprofitable to attempt to scam the network (e.g. through a double spend). This has the serious drawback of consuming a great deal of energy even though the goal of providing security through making dishonest behaviour unprofitable could be accomplished in other ways. This is the main idea behind proof-of-stake (PoS); provide the same guarantees as PoW through other economic means than the expense of computational hardware. One central idea is that dishonest behaviour can be identified and punished such that it is less profitable than behaving honestly.")]),o("h2",{attrs:{id:"correct-by-construction-cbc"}},[o("a",{attrs:{href:"#correct-by-construction-cbc","aria-hidden":"true"}},[t._v("#")]),t._v("Correct-by-construction (CBC)")]),o("p",[t._v("Casper is a particular family of proof-of-stake algorithms with strong mathematical foundations first described by an Ethereum research group. Such foundations mean that properties of CBC Casper algorithms are provable and therefore provide the highest degree of certainty that they provide exactly what is needed for a secure and efficient network.")])])}),[],!1,null,null,null);"function"==typeof c&&c(l),"function"==typeof p&&p(l);e.default=l.exports}}]);