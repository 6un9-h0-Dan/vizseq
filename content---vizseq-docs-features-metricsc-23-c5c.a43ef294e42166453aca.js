(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{154:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return b}));a(59),a(32),a(23),a(24),a(60),a(0);var r=a(175),n=a(176);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}var c={id:"metrics",title:"Built-In Metrics",sidebar_label:"Built-In Metrics"},o=[{value:"N-gram-based",id:"n-gram-based",children:[]},{value:"Embedding-based",id:"embedding-based",children:[]},{value:"User-defined Metrics",id:"user-defined-metrics",children:[]}],l={rightToc:o},p="wrapper";function b(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,["components"]);return Object(r.b)(p,i({},l,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Here is the list of VizSeq built-in metrics. They are all accelerated with multi-processing/multi-threading."),Object(r.b)("h3",{id:"n-gram-based"},"N-gram-based"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"BLEU (",Object(r.b)("a",i({parentName:"li"},{href:"https://www.aclweb.org/anthology/P02-1040"}),"Papineni et al., 2002"),"): ",Object(r.b)("a",i({parentName:"li"},{href:"https://github.com/mjpost/sacreBLEU"}),"sacreBLEU")," implementation"),Object(r.b)("li",{parentName:"ul"},"NIST (",Object(r.b)("a",i({parentName:"li"},{href:"http://www.mt-archive.info/HLT-2002-Doddington.pdf"}),"Doddington, 2002"),"): ",Object(r.b)("a",i({parentName:"li"},{href:"https://github.com/nltk/nltk"}),"NLTK")," implementation"),Object(r.b)("li",{parentName:"ul"},"METEOR (",Object(r.b)("a",i({parentName:"li"},{href:"https://www.aclweb.org/anthology/W05-0909"}),"Banerjee et al., 2005"),"): ",Object(r.b)("a",i({parentName:"li"},{href:"https://github.com/nltk/nltk"}),"NLTK")," implementation"),Object(r.b)("li",{parentName:"ul"},"TER (",Object(r.b)("a",i({parentName:"li"},{href:"http://mt-archive.info/AMTA-2006-Snover.pdf"}),"Snover et al., 2006"),"): VizSeq implementation"),Object(r.b)("li",{parentName:"ul"},"RIBES (",Object(r.b)("a",i({parentName:"li"},{href:"https://www.aclweb.org/anthology/D10-1092"}),"Isozaki et al., 2010"),"): ",Object(r.b)("a",i({parentName:"li"},{href:"https://github.com/nltk/nltk"}),"NLTK")," implementation"),Object(r.b)("li",{parentName:"ul"},"chrF (",Object(r.b)("a",i({parentName:"li"},{href:"https://www.aclweb.org/anthology/W15-3049"}),"Popovi\u0107 et al., 2015"),"): ",Object(r.b)("a",i({parentName:"li"},{href:"https://github.com/mjpost/sacreBLEU"}),"sacreBLEU")," implementation"),Object(r.b)("li",{parentName:"ul"},"GLEU (",Object(r.b)("a",i({parentName:"li"},{href:"https://arxiv.org/pdf/1609.08144.pdf"}),"Wu et al., 2016"),"): ",Object(r.b)("a",i({parentName:"li"},{href:"https://github.com/nltk/nltk"}),"NLTK")," implementation"),Object(r.b)("li",{parentName:"ul"},"ROUGE (",Object(r.b)("a",i({parentName:"li"},{href:"https://www.aclweb.org/anthology/W04-1013"}),"Lin, 2004"),"): ",Object(r.b)("a",i({parentName:"li"},{href:"https://github.com/Diego999/py-rouge"}),"py-rouge")," implementation"),Object(r.b)("li",{parentName:"ul"},"CIDEr (",Object(r.b)("a",i({parentName:"li"},{href:"https://www.cv-foundation.org/openaccess/content_cvpr_2015/papers/Vedantam_CIDEr_Consensus-Based_Image_2015_CVPR_paper.pdf"}),"Vedantam et al., 2015"),"): ",Object(r.b)("a",i({parentName:"li"},{href:"https://github.com/tylin/coco-caption/tree/master/pycocoevalcap/cider"}),"pycocoevalcap")," implementation"),Object(r.b)("li",{parentName:"ul"},"WER (",Object(r.b)("a",i({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Word_error_rate%3E"}),"Word Error Rate"),"): VizSeq implementation")),Object(r.b)("h3",{id:"embedding-based"},"Embedding-based"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"LASER (",Object(r.b)("a",i({parentName:"li"},{href:"https://arxiv.org/pdf/1812.10464.pdf"}),"Artetxe and Schwenk, 2018"),"): official ",Object(r.b)("a",i({parentName:"li"},{href:"https://github.com/facebookresearch/LASER"}),"LASER")," implementation"),Object(r.b)("li",{parentName:"ul"},"BERTScore (",Object(r.b)("a",i({parentName:"li"},{href:"https://arxiv.org/pdf/1904.09675.pdf"}),"Zhang et al., 2019"),"): official ",Object(r.b)("a",i({parentName:"li"},{href:"https://github.com/Tiiiger/bert_score"}),"BERTScore")," implementation")),Object(r.b)("h3",{id:"user-defined-metrics"},"User-defined Metrics"),Object(r.b)("p",null,"VizSeq opens the API for user-defined metrics. Refer to the ",Object(r.b)("a",{href:Object(n.a)("docs/new_metric")},"adding new metrics")," section\nfor more details."))}b.isMDXComponent=!0},174:function(e,t,a){"use strict";var r=a(0),n=a(61);t.a=function(){return Object(r.useContext)(n.a)}},175:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return s}));var r=a(0),n=a.n(r),i=n.a.createContext({}),c=function(e){var t=n.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):Object.assign({},t,e)),a},o=function(e){var t=c(e.components);return n.a.createElement(i.Provider,{value:t},e.children)};var l="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(a[r]=e[r]);return a}(e,["components","mdxType","originalType","parentName"]),b=c(a),s=r,m=b[o+"."+s]||b[s]||p[s]||i;return a?n.a.createElement(m,Object.assign({},{ref:t},l,{components:a})):n.a.createElement(m,Object.assign({},{ref:t},l))}));function s(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,c=new Array(i);c[0]=b;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[l]="string"==typeof e?e:r,c[1]=o;for(var s=2;s<i;s++)c[s]=a[s];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},176:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));a(177);var r=a(174);function n(e){var t=(Object(r.a)().siteConfig||{}).baseUrl,a=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?a+e.slice(1):a+e}},177:function(e,t,a){"use strict";var r=a(9),n=a(25),i=a(94),c="".startsWith;r(r.P+r.F*a(95)("startsWith"),"String",{startsWith:function(e){var t=i(this,e,"startsWith"),a=n(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),r=String(e);return c?c.call(t,r,a):t.slice(a,a+r.length)===r}})}}]);