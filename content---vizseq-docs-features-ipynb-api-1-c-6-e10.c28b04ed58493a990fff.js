(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{152:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return l}));n(59),n(32),n(23),n(24),n(60),n(0);var a=n(175),r=n(176);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var s={id:"ipynb_api",title:"Jupyter Notebook APIs",sidebar_label:"Jupyter Notebook APIs"},o=[{value:"vizseq.* or vizseq.ipynb.*",id:"vizseq-or-vizseqipynb",children:[{value:"view_stats()",id:"view_stats",children:[]},{value:"available_scorers()",id:"available_scorers",children:[]},{value:"view_scores()",id:"view_scores",children:[]},{value:"view_examples()",id:"view_examples",children:[]},{value:"view_n_grams()",id:"view_n_grams",children:[]}]},{value:"<a href={useBaseUrl('docs/features/fairseq_api')}>Fairseq Integration APIs</a>",id:"a-hrefusebaseurldocsfeaturesfairseq_apifairseq-integration-apisa",children:[]}],c={rightToc:o},b="wrapper";function l(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(a.b)(b,i({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"vizseq-or-vizseqipynb"},Object(a.b)("inlineCode",{parentName:"h2"},"vizseq.*")," or ",Object(a.b)("inlineCode",{parentName:"h2"},"vizseq.ipynb.*")),Object(a.b)("h3",{id:"view_stats"},Object(a.b)("inlineCode",{parentName:"h3"},"view_stats()")),Object(a.b)("p",null,"Showing the dataset statistics, including examples count, tokens count, sentence length distribution, etc.\nIt contains Matplotlib figures and you need to add ",Object(a.b)("inlineCode",{parentName:"p"},"%matplotlib inline")," before use."),Object(a.b)("h4",{id:"arguments"},"Arguments"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"strong"},"sources"),": Union[str, List","[str]",", Dict[str, List","[str]","]]"),":\nSource-side data source. Can be a path, paths or lists of sentences. Refer to the ",Object(a.b)("a",{href:Object(r.a)("docs/features/data")},"data")," section\nfor more details."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"strong"},"references"),": Union[str, List","[str]",", Dict[str, List","[str]","]]"),":\nTarget-side data source. Can be a path, paths or lists of sentences. Refer to the ",Object(a.b)("a",{href:Object(r.a)("docs/features/data")},"data")," section\nfor more details."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"strong"},"tags"),": Optional[Union[str, List","[str]",", Dict[str, List","[str]","]]] = None"),": Per-example tags for example grouping.\nDefault to ",Object(a.b)("inlineCode",{parentName:"li"},"None"),".")),Object(a.b)("h3",{id:"available_scorers"},Object(a.b)("inlineCode",{parentName:"h3"},"available_scorers()")),Object(a.b)("p",null,"Showing the IDs of built-in scorers, which can be used in ",Object(a.b)("a",i({parentName:"p"},{href:"#view_scores"}),Object(a.b)("inlineCode",{parentName:"a"},"view_scores()"))," and\n",Object(a.b)("a",i({parentName:"p"},{href:"#vizseqview_examples"}),Object(a.b)("inlineCode",{parentName:"a"},"view_examples()")),"."),Object(a.b)("h3",{id:"view_scores"},Object(a.b)("inlineCode",{parentName:"h3"},"view_scores()")),Object(a.b)("h4",{id:"arguments-1"},"Arguments"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"strong"},"references"),": Union[str, List","[str]",", Dict[str, List","[str]","]]"),":\nTarget-side data source. Can be a path, paths or lists of sentences. Refer to the ",Object(a.b)("a",{href:Object(r.a)("docs/features/data")},"data")," section\nfor more details."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"strong"},"hypothesis"),": Optional[Union[str, List","[str]",", Dict[str, List","[str]","]]] = None"),":\nModel prediction data source. Can be a path, paths or lists of sentences. Refer to the ",Object(a.b)("a",{href:Object(r.a)("docs/features/data")},"data")," section\nfor more details. Default to ",Object(a.b)("inlineCode",{parentName:"li"},"None"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"strong"},"metrics"),": List","[str]"),": List of scorer IDs. Use ",Object(a.b)("a",i({parentName:"li"},{href:"#available_scorers"}),Object(a.b)("inlineCode",{parentName:"a"},"available_scorers()"))," to check all the\navailable ones."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"strong"},"tags"),": Optional[Union[str, List","[str]",", Dict[str, List","[str]","]]] = None"),": Per-example tags for example grouping.\nDefault to ",Object(a.b)("inlineCode",{parentName:"li"},"None"),".")),Object(a.b)("h3",{id:"view_examples"},Object(a.b)("inlineCode",{parentName:"h3"},"view_examples()")),Object(a.b)("p",null,"Showing examples with model predictions in pages with specified metrics, keyword, sorting, etc."),Object(a.b)("h4",{id:"arguments-2"},"Arguments"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"strong"},"sources"),": Union[str, List","[str]",", Dict[str, List","[str]","]]"),":\nSource-side data source. Can be a path, paths or lists of sentences. Refer to the ",Object(a.b)("a",{href:Object(r.a)("docs/features/data")},"data")," section\nfor more details."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"strong"},"references"),": Union[str, List","[str]",", Dict[str, List","[str]","]]"),":\nTarget-side data source. Can be a path, paths or lists of sentences. Refer to the ",Object(a.b)("a",{href:Object(r.a)("docs/features/data")},"data")," section\nfor more details."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"strong"},"hypothesis"),": Optional[Union[str, List","[str]",", Dict[str, List","[str]","]]] = None"),":\nModel prediction data source. Can be a path, paths or lists of sentences. Refer to the ",Object(a.b)("a",{href:Object(r.a)("docs/features/data")},"data")," section\nfor more details. Default to ",Object(a.b)("inlineCode",{parentName:"li"},"None"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"strong"},"metrics"),": Optional[List","[str]","] = None"),": List of scorer IDs. Default to ",Object(a.b)("inlineCode",{parentName:"li"},"None"),". Use\n",Object(a.b)("a",i({parentName:"li"},{href:"#available_scorers"}),Object(a.b)("inlineCode",{parentName:"a"},"available_scorers()"))," to check all the available ones."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"strong"},"query"),": str = ''"),": The keyword(s) for example filtering. Default to ",Object(a.b)("inlineCode",{parentName:"li"},"''"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"strong"},"page_sz"),": int = 10"),": Page size. Default to ",Object(a.b)("inlineCode",{parentName:"li"},"10"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"strong"},"page_no"),": int = 1"),": Page number. Default to ",Object(a.b)("inlineCode",{parentName:"li"},"1"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"strong"},"sorting"),": VizSeqSortingType = VizSeqSortingType.original")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"strong"},"need_g_translate"),": bool = False"),":\nTo show Google Translate results or not. Default to ",Object(a.b)("inlineCode",{parentName:"li"},"False"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"strong"},"disable_alignment"),": bool = False"),":\nNot to show source-reference and reference-hypothesis alignments for rendering speedup. Default to ",Object(a.b)("inlineCode",{parentName:"li"},"False"),".")),Object(a.b)("h3",{id:"view_n_grams"},Object(a.b)("inlineCode",{parentName:"h3"},"view_n_grams()")),Object(a.b)("p",null,"Showing the n-grams (n=1,2,3,4) in the input data (sources, references, etc.)."),Object(a.b)("h4",{id:"arguments-3"},"Arguments"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"strong"},"data"),": Union[str, List","[str]",", Dict[str, List","[str]","]]"),":\nThe data source. Can be a path, paths or lists of sentences. Refer to the ",Object(a.b)("a",{href:Object(r.a)("docs/features/data")},"data")," section\nfor more details."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"strong"},"k"),": int = 64"),":\nNumber of n-grams to be shown. Default to ",Object(a.b)("inlineCode",{parentName:"li"},"64"),".")),Object(a.b)("h2",{id:"a-hrefusebaseurldocsfeaturesfairseq_apifairseq-integration-apisa"},Object(a.b)("a",{href:Object(r.a)("docs/features/fairseq_api")},"Fairseq Integration APIs")))}l.isMDXComponent=!0},174:function(e,t,n){"use strict";var a=n(0),r=n(61);t.a=function(){return Object(a.useContext)(r.a)}},175:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return p}));var a=n(0),r=n.n(a),i=r.a.createContext({}),s=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},o=function(e){var t=s(e.components);return r.a.createElement(i.Provider,{value:t},e.children)};var c="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},l=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),l=s(n),p=a,d=l[o+"."+p]||l[p]||b[p]||i;return n?r.a.createElement(d,Object.assign({},{ref:t},c,{components:n})):r.a.createElement(d,Object.assign({},{ref:t},c))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=l;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o[c]="string"==typeof e?e:a,s[1]=o;for(var p=2;p<i;p++)s[p]=n[p];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}l.displayName="MDXCreateElement"},176:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n(177);var a=n(174);function r(e){var t=(Object(a.a)().siteConfig||{}).baseUrl,n=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}},177:function(e,t,n){"use strict";var a=n(9),r=n(25),i=n(94),s="".startsWith;a(a.P+a.F*n(95)("startsWith"),"String",{startsWith:function(e){var t=i(this,e,"startsWith"),n=r(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),a=String(e);return s?s.call(t,a,n):t.slice(n,n+a.length)===a}})}}]);