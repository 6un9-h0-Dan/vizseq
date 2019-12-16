(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{150:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return c}));n(59),n(32),n(23),n(24),n(60),n(0);var a=n(175),r=n(176);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var o={id:"fairseq_api",title:"Fairseq Integration APIs",sidebar_label:"Fairseq Integration APIs"},l=[{value:"vizseq.ipynb.fairseq_viz.*",id:"vizseqipynbfairseq_viz",children:[{value:"view_stats()",id:"view_stats",children:[]},{value:"view_scores()",id:"view_scores",children:[]},{value:"view_examples()",id:"view_examples",children:[]},{value:"view_n_grams()",id:"view_n_grams",children:[]}]}],b={rightToc:l},s="wrapper";function c(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(a.b)(s,i({},b,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"vizseqipynbfairseq_viz"},Object(a.b)("inlineCode",{parentName:"h2"},"vizseq.ipynb.fairseq_viz.*")),Object(a.b)("p",null,"VizSeq can directly import and analyze model predictions generated\nby ",Object(a.b)("a",{href:"https://github.com/pytorch/fairseq/blob/master/generate.py",target:"_blank"},"fairseq-generate")," or ",Object(a.b)("a",{href:"https://github.com/pytorch/fairseq/blob/master/interactive.py",target:"_blank"},"fairseq-interactive")," in\nJupyter Notebook. The APIs are almost the same\nas ",Object(a.b)("a",{href:Object(r.a)("docs/features/ipynb_api")},"the normal Jupyter Notebook APIs"),"."),Object(a.b)("h3",{id:"view_stats"},Object(a.b)("inlineCode",{parentName:"h3"},"view_stats()")),Object(a.b)("h4",{id:"arguments"},"Arguments"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"strong"},"log_path"),": str"),": The path to ",Object(a.b)("inlineCode",{parentName:"li"},"fairseq-generate")," or ",Object(a.b)("inlineCode",{parentName:"li"},"fairseq-interactive")," log file.")),Object(a.b)("h3",{id:"view_scores"},Object(a.b)("inlineCode",{parentName:"h3"},"view_scores()")),Object(a.b)("h4",{id:"arguments-1"},"Arguments"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"strong"},"log_path"),": str"),": The path to ",Object(a.b)("inlineCode",{parentName:"li"},"fairseq-generate")," or ",Object(a.b)("inlineCode",{parentName:"li"},"fairseq-interactive")," log file."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"strong"},"metrics"),": List","[str]"),": List of scorer IDs. Use ",Object(a.b)("a",i({parentName:"li"},{href:"#available_scorers"}),Object(a.b)("inlineCode",{parentName:"a"},"available_scorers()"))," to check all the\navailable ones.")),Object(a.b)("h3",{id:"view_examples"},Object(a.b)("inlineCode",{parentName:"h3"},"view_examples()")),Object(a.b)("h4",{id:"arguments-2"},"Arguments"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"strong"},"log_path"),": str"),": The path to ",Object(a.b)("inlineCode",{parentName:"li"},"fairseq-generate")," or ",Object(a.b)("inlineCode",{parentName:"li"},"fairseq-interactive")," log file."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"strong"},"metrics"),": Optional[List","[str]","] = None"),": List of scorer IDs. Default to ",Object(a.b)("inlineCode",{parentName:"li"},"None"),". Use\n",Object(a.b)("a",i({parentName:"li"},{href:"#available_scorers"}),Object(a.b)("inlineCode",{parentName:"a"},"available_scorers()"))," to check all the available ones."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"strong"},"query"),": str = ''"),": The keyword(s) for example filtering. Default to ",Object(a.b)("inlineCode",{parentName:"li"},"''"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"strong"},"page_sz"),": int = 10"),": Page size. Default to ",Object(a.b)("inlineCode",{parentName:"li"},"10"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"strong"},"page_no"),": int = 1"),": Page number. Default to ",Object(a.b)("inlineCode",{parentName:"li"},"1"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"strong"},"sorting"),": VizSeqSortingType = VizSeqSortingType.original")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"strong"},"need_g_translate"),": bool = False"),":\nTo show Google Translate results or not. Default to ",Object(a.b)("inlineCode",{parentName:"li"},"False"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"strong"},"disable_alignment"),": bool = False"),":\nNot to show source-reference and reference-hypothesis alignments for rendering speedup. Default to ",Object(a.b)("inlineCode",{parentName:"li"},"False"),".")),Object(a.b)("h3",{id:"view_n_grams"},Object(a.b)("inlineCode",{parentName:"h3"},"view_n_grams()")),Object(a.b)("h4",{id:"arguments-3"},"Arguments"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"strong"},"log_path"),": str"),": The path to ",Object(a.b)("inlineCode",{parentName:"li"},"fairseq-generate")," or ",Object(a.b)("inlineCode",{parentName:"li"},"fairseq-interactive")," log file."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"strong"},"k"),": int = 64"),":\nNumber of n-grams to be shown. Default to ",Object(a.b)("inlineCode",{parentName:"li"},"64"),".")))}c.isMDXComponent=!0},174:function(e,t,n){"use strict";var a=n(0),r=n(61);t.a=function(){return Object(a.useContext)(r.a)}},175:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return p}));var a=n(0),r=n.n(a),i=r.a.createContext({}),o=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},l=function(e){var t=o(e.components);return r.a.createElement(i.Provider,{value:t},e.children)};var b="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},c=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,b=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),c=o(n),p=a,m=c[l+"."+p]||c[p]||s[p]||i;return n?r.a.createElement(m,Object.assign({},{ref:t},b,{components:n})):r.a.createElement(m,Object.assign({},{ref:t},b))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[b]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},176:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n(177);var a=n(174);function r(e){var t=(Object(a.a)().siteConfig||{}).baseUrl,n=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}},177:function(e,t,n){"use strict";var a=n(9),r=n(25),i=n(94),o="".startsWith;a(a.P+a.F*n(95)("startsWith"),"String",{startsWith:function(e){var t=i(this,e,"startsWith"),n=r(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),a=String(e);return o?o.call(t,a,n):t.slice(n,n+a.length)===a}})}}]);