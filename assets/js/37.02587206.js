(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{279:function(e,t,a){"use strict";t.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}},732:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a(53),r=(a(86),a(20),a(34),a(279)),o=a(1),c=(o.default.config.optionMergeStrategies,{VueRemarkRoot:r.a}),l=function(e){var t=e.options.components=e.options.components||{},a=e.options.computed=e.options.computed||{};Object.keys(c).forEach((function(e){"object"===Object(n.a)(c[e])&&"function"==typeof c[e].render?t[e]=c[e]:a[e]=function(){return c[e]}}))},i=o.default.config.optionMergeStrategies,p="__vueRemarkFrontMatter",v={excerpt:null,title:"Sending and Receiving"};var u=function(e){e.options[p]&&(e.options[p]=v),o.default.util.defineReactive(e.options,p,v),e.options.computed=i.computed({$frontmatter:function(){return e.options[p]}},e.options.computed)},d=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("VueRemarkRoot",[a("h1",{attrs:{id:"sending-and-receiving"}},[a("a",{attrs:{href:"#sending-and-receiving","aria-hidden":"true"}},[e._v("#")]),e._v("Sending and Receiving")]),a("p",[e._v("Sending and receiving is one of the most important things to understand in Rholang. ")]),a("blockquote",[a("p",[e._v("Note")]),a("p",[e._v("Because Rholang is an asynchronous programming langugage, there is no return in a function. That's why you call a function HelloWorld(args) via sending on the functions name HelloWorld. You are sending via the ! syntax.")]),a("p",[e._v("Note")]),a("p",[e._v("Because of the asynchrony you don't know when the function you called via HelloWorld!(args) is sending the processed data back over some other channel, Rholang has the for(args<-channels) syntax for waiting until all the needed arguments are received over the channels.")])]),a("h2",{attrs:{id:"example"}},[a("a",{attrs:{href:"#example","aria-hidden":"true"}},[e._v("#")]),e._v("Example")]),a("pre",{pre:!0,attrs:{class:"language-javascript{numberLines:"}},[a("code",{pre:!0,attrs:{class:"language-javascript{numberLines:"}},[e._v('new HelloWorld, stdout(`rho:io:stdout`) in {\n  HelloWorld!("Hello, world!") |\n  for (@text <- HelloWorld) {\n    stdout!(text)\n  }\n}')])]),a("p",[e._v("1) This line declares a new name-valued variable "),a("code",{pre:!0,attrs:{class:"language-text"}},[e._v("HelloWorld")]),e._v(" and assigns to it a newly-created private name.  ")]),a("p",[e._v("2) Every name is of the form "),a("code",{pre:!0,attrs:{class:"language-text"}},[e._v("@P")]),e._v(", where "),a("code",{pre:!0,attrs:{class:"language-text"}},[e._v("P")]),e._v(" is a rholang process.  The "),a("code",{pre:!0,attrs:{class:"language-text"}},[e._v("!")]),e._v(" production takes a name "),a("code",{pre:!0,attrs:{class:"language-text"}},[e._v("n")]),e._v(" on its left and a process "),a("code",{pre:!0,attrs:{class:"language-text"}},[e._v("P")]),e._v(" on its right, then sends "),a("code",{pre:!0,attrs:{class:"language-text"}},[e._v("@P")]),e._v(" over the channel named "),a("code",{pre:!0,attrs:{class:"language-text"}},[e._v("n")]),e._v(".  Lineforms the name "),a("code",{pre:!0,attrs:{class:"language-text"}},[e._v('@"Hello, world"')]),e._v(" and sends it on the channel whose name is stored in the variable "),a("code",{pre:!0,attrs:{class:"language-text"}},[e._v("HelloWorld")]),e._v(".")]),a("p",[e._v("3) This "),a("code",{pre:!0,attrs:{class:"language-text"}},[e._v("for")]),e._v(" production creates a process that waits for a single message to be sent on the channel whose name is stored in the variable "),a("code",{pre:!0,attrs:{class:"language-text"}},[e._v("HelloWorld")]),e._v(".  The pattern "),a("code",{pre:!0,attrs:{class:"language-text"}},[e._v("@text")]),e._v(" gets matched against the serialized process, binding the process-valued variable "),a("code",{pre:!0,attrs:{class:"language-text"}},[e._v("text")]),e._v(" to the original process that was sent.")]),a("p",[e._v("4) Rholang runtime environments may choose to include built-in processes listening on channels.  In this tutorial, we use new with the urn "),a("code",{pre:!0,attrs:{class:"language-text"}},[e._v("rho:io:stdout")]),e._v(" to request a channel where sent messages get printed to a console.")]),a("blockquote",[a("p",[e._v("Note")]),a("p",[e._v("When you send data over a channel and there is no contract which is listening with for(args<-channels) for that channel, then these data is stored in the tuplespace (like a database), until some contract is starting to listening for it.")])]),a("h3",{attrs:{id:"name-equivalence"}},[a("a",{attrs:{href:"#name-equivalence","aria-hidden":"true"}},[e._v("#")]),e._v("Name Equivalence")]),a("p",[e._v("It is possible to write one single name in several different ways. For example, the two following channels are equivalent:")]),a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",{pre:!0,attrs:{class:"language-javascript"}},[e._v("@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("10")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("+")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("5")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("+")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")])])]),a("p",[e._v("Any message sent over these channels can be received by listening on the channel "),a("code",{pre:!0,attrs:{class:"language-text"}},[e._v("@12")]),e._v(". There are other instances in which a name can be written in two different ways. The guiding principle for this is that if "),a("code",{pre:!0,attrs:{class:"language-text"}},[e._v("P")]),e._v(" and "),a("code",{pre:!0,attrs:{class:"language-text"}},[e._v("Q")]),e._v(" are two equivalent processes, then "),a("code",{pre:!0,attrs:{class:"language-text"}},[e._v("@P")]),e._v(" and "),a("code",{pre:!0,attrs:{class:"language-text"}},[e._v("@Q")]),e._v(" are equivalent names. In particular, all of the following channels are equivalent:")]),a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",{pre:!0,attrs:{class:"language-javascript"}},[e._v("@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("P")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("Q")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("Q")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("P")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("Q")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("P")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" Nil "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")])])]),a("p",[e._v("Before using a channel, Rholang first evaluates expressions and accounts for these "),a("code",{pre:!0,attrs:{class:"language-text"}},[e._v("|")]),e._v(" rules at the top level--but only at the top level. This means that if an arithmetic expression forms part of a pattern within a pattern, it is left untouched. Because of this,")]),a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",{pre:!0,attrs:{class:"language-javascript"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v(" @"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("+")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("5")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v(" @"),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"chan"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("...")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")])])]),a("p",[e._v("will never receive any message on "),a("code",{pre:!0,attrs:{class:"language-text"}},[e._v('@"chan"')]),e._v(" since if we send anything, such as "),a("code",{pre:!0,attrs:{class:"language-text"}},[e._v("10 + 5")]),e._v(", over "),a("code",{pre:!0,attrs:{class:"language-text"}},[e._v('@"chan"')]),e._v(", the arithmetic expression gets evaluated and the name "),a("code",{pre:!0,attrs:{class:"language-text"}},[e._v("@15")]),e._v(" is sent.")]),a("p",[e._v("Finally, channels also respect a change in variable name (alpha equivalence), so the following channels are equivalent:")]),a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",{pre:!0,attrs:{class:"language-javascript"}},[e._v("@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v(" chan "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("...")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v(" z "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v(" chan "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("...")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")])])]),a("h2",{attrs:{id:"replicated-receive"}},[a("a",{attrs:{href:"#replicated-receive","aria-hidden":"true"}},[e._v("#")]),e._v("Replicated receive")]),a("pre",{pre:!0,attrs:{class:"language-javascript{numberLines:"}},[a("code",{pre:!0,attrs:{class:"language-javascript{numberLines:"}},[e._v('new HelloWorld, stdout(`rho:io:stdout`) in {\n  for (@text <= HelloWorld) {\n    stdout!(text)\n  } |\n  HelloWorld!("Hello, world!") |\n  HelloWorld!("Hola, mundo!")\n}')])]),a("p",[e._v("2.) Instead of handling only a single message, a "),a("code",{pre:!0,attrs:{class:"language-text"}},[e._v("for")]),e._v(" using a double arrow "),a("code",{pre:!0,attrs:{class:"language-text"}},[e._v("<=")]),e._v(" will persist, spawning a copy of the body for each message received.")]),a("p",[e._v("5-6) We send the string processes "),a("code",{pre:!0,attrs:{class:"language-text"}},[e._v('"Hello, world!"')]),e._v(" and "),a("code",{pre:!0,attrs:{class:"language-text"}},[e._v('"Hola, mundo!"')]),e._v(" on the channel "),a("code",{pre:!0,attrs:{class:"language-text"}},[e._v("HelloWorld")]),e._v(".  It is non-deterministic which message will be processed first.")]),a("h2",{attrs:{id:"contracts-as-sugar-for-replicated-receive"}},[a("a",{attrs:{href:"#contracts-as-sugar-for-replicated-receive","aria-hidden":"true"}},[e._v("#")]),e._v("Contracts as sugar for replicated receive")]),a("pre",{pre:!0,attrs:{class:"language-javascript{numberLines:"}},[a("code",{pre:!0,attrs:{class:"language-javascript{numberLines:"}},[e._v('new HelloWorld, stdout(`rho:io:stdout`) in {\n  contract HelloWorld(@text) = {\n    stdout!(text)\n  } |\n  HelloWorld!("Hello, world!") |\n  HelloWorld!("Hola, mundo!")\n}')])]),a("p",[e._v("2.) The only difference between this example and the last one is this line.  The "),a("code",{pre:!0,attrs:{class:"language-text"}},[e._v("contract")]),e._v(" production is syntactic sugar.  The process "),a("code",{pre:!0,attrs:{class:"language-text"}},[e._v("contract Name(...formals) = { P }")]),e._v(" means the same as "),a("code",{pre:!0,attrs:{class:"language-text"}},[e._v("for (...formals <= Name) { P }")]),e._v(".")]),a("h2",{attrs:{id:"replicated-send"}},[a("a",{attrs:{href:"#replicated-send","aria-hidden":"true"}},[e._v("#")]),e._v("Replicated send")]),a("pre",{pre:!0,attrs:{class:"language-javascript{numberLines:"}},[a("code",{pre:!0,attrs:{class:"language-javascript{numberLines:"}},[e._v('new HelloWorld, stdout(`rho:io:stdout`), stderr(`rho:io:stderr`) in {\n  HelloWorld!!("Hello, world!") |\n  for (@text <- HelloWorld) {\n    stdout!(text)\n  } |\n  for (@text <- HelloWorld) {\n    stderr!(text)\n  }\n}')])]),a("p",[e._v("2.) The double-bang "),a("code",{pre:!0,attrs:{class:"language-text"}},[e._v("!!")]),e._v(" means that this message will be sent again as soon as it is read.")]),a("p",[e._v("3-4, 6-7) There are two listening processes; each one consumes a single message from the channel and forwards it to either "),a("code",{pre:!0,attrs:{class:"language-text"}},[e._v('"stdout"')]),e._v(" or "),a("code",{pre:!0,attrs:{class:"language-text"}},[e._v('"stderr"')]),e._v(".  The order in which they get forwarded to those channels is nondeterministic.")]),a("h2",{attrs:{id:"sequential-send"}},[a("a",{attrs:{href:"#sequential-send","aria-hidden":"true"}},[e._v("#")]),e._v("Sequential send")]),a("p",[e._v("In order to have one message follow after another is known to have been received, we must use an acknowledgement message.")]),a("pre",{pre:!0,attrs:{class:"language-javascript{numberLines:"}},[a("code",{pre:!0,attrs:{class:"language-javascript{numberLines:"}},[e._v("new chan, ack, stdoutAck(`rho:io:stdoutAck`) in {\n  chan!(0) |\n  for (_ <- ack) {\n    chan!(1)\n  } |\n  for (@num <= chan) {\n    stdoutAck(num, *ack)\n  }\n}")])]),a("p",[e._v("2) We send the message 0 on "),a("code",{pre:!0,attrs:{class:"language-text"}},[e._v("chan")]),e._v(".\n3) We wait for a message on the channel "),a("code",{pre:!0,attrs:{class:"language-text"}},[e._v("ack")]),e._v(", throw it away, and then proceed with the body.\n4) We send the messageon "),a("code",{pre:!0,attrs:{class:"language-text"}},[e._v("chan")]),e._v(".\n6) We listen persistently for messages sent on "),a("code",{pre:!0,attrs:{class:"language-text"}},[e._v("chan")]),e._v(".\n7) We forward each message to the channel "),a("code",{pre:!0,attrs:{class:"language-text"}},[e._v('"stdoutAck"')]),e._v(", which expects both a value to print and a channel on which to send an acknowledgement message that the text has been received and printed.  In this program, we are guaranteed that 0 will be printed before 1.")]),a("h2",{attrs:{id:"sending-and-receiving-multiple-processes"}},[a("a",{attrs:{href:"#sending-and-receiving-multiple-processes","aria-hidden":"true"}},[e._v("#")]),e._v("Sending and receiving multiple processes")]),a("pre",{pre:!0,attrs:{class:"language-javascript{numberLines:"}},[a("code",{pre:!0,attrs:{class:"language-javascript{numberLines:"}},[e._v('new chan, stdout(`rho:io:stdout`) in {\n  chan!(1,2,3) |\n  chan!((4,5,6)) |\n  chan!(7,8) |\n  chan!([9, 10], 11) |\n  chan!(12 | 13) |\n  for (@x, @y, @z <= chan) {\n    stdout!(["three", x, y, z])\n  } |\n  for (@a, @b <= chan) {\n    stdout!(["two", a, b])\n  } |\n  for (@a <= chan) {\n    stdout!(["one", a])\n  }\n}')])]),a("p",[e._v("2) We send three numeric processes on "),a("code",{pre:!0,attrs:{class:"language-text"}},[e._v("chan")]),e._v(".  This send necessarily synchronizes with the "),a("code",{pre:!0,attrs:{class:"language-text"}},[e._v("for")]),e._v(" on line 7.\n3) We send one tuple process on "),a("code",{pre:!0,attrs:{class:"language-text"}},[e._v("chan")]),e._v(".  This send necessarily synchronizes with the "),a("code",{pre:!0,attrs:{class:"language-text"}},[e._v("for")]),e._v(" on line 13.\n4) We send two numeric processes on "),a("code",{pre:!0,attrs:{class:"language-text"}},[e._v("chan")]),e._v(".    This send necessarily synchronizes with the "),a("code",{pre:!0,attrs:{class:"language-text"}},[e._v("for")]),e._v(" on line 10.\n5) We send a list process and a numeric process on "),a("code",{pre:!0,attrs:{class:"language-text"}},[e._v("chan")]),e._v(".    This send necessarily synchronizes with the "),a("code",{pre:!0,attrs:{class:"language-text"}},[e._v("for")]),e._v(" on line 10.\n6) We send a single process that is the par of two numeric expressions on "),a("code",{pre:!0,attrs:{class:"language-text"}},[e._v("chan")]),e._v(".  This send necessarily synchronizes with the "),a("code",{pre:!0,attrs:{class:"language-text"}},[e._v("for")]),e._v(" on line 13.")])])}),[],!1,null,null,null);"function"==typeof l&&l(d),"function"==typeof u&&u(d);t.default=d.exports}}]);