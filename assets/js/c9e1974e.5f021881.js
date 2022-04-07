"use strict";(self.webpackChunkrestel_docs=self.webpackChunkrestel_docs||[]).push([[805],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||s;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<s;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7400:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var n=r(7462),a=r(3366),s=(r(7294),r(3905)),o=["components"],i={},l=void 0,p={unversionedId:"assertion/assertion",id:"assertion/assertion",title:"assertion",description:"The ultimate goal of automation or any testing is to assert the response of the system on various conditions or parameters. Restel's Assertions are defined to validate if the request or response payload has the fields value that we are expecting. For example, If we are passing the payload of one test API to another Test API and want to check if the payload has the fields that we are expecting, in such case restel assertion can be used.",source:"@site/docs/assertion/assertion.md",sourceDirName:"assertion",slug:"/assertion/",permalink:"/docs/assertion/",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/assertion/assertion.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"matchers",permalink:"/docs/matchers/"},next:{title:"Variables and Context",permalink:"/docs/variables-context/Variables and Context"}},c={},u=[],d={toc:u};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"The ultimate goal of automation or any testing is to assert the response of the system on various conditions or parameters. Restel's Assertions are defined to validate if the request or response payload has the fields value that we are expecting. For example, If we are passing the payload of one test API to another Test API and want to check if the payload has the fields that we are expecting, in such case restel assertion can be used."),(0,s.kt)("p",null,"Restel's Assertion can be defined in the ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("em",{parentName:"strong"},"assertion"))," field of the test suite execution sheet. Assertions are validated before invoking the test API call."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'{  \n   "<Assertion_name>": \n   {\n    \u201ccondition\u201d:[\u201cassert_type\u201d\n    "<actual_value>",\n    "<expected_value>"],\n        \u201cmessage\u201d: \u201c\u201d   \n   }\n}\n')),(0,s.kt)("p",null,"The following are assertion type that are supported at this moment:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"EQUAL, "),(0,s.kt)("li",{parentName:"ul"},"GREATER, "),(0,s.kt)("li",{parentName:"ul"},"LESSER, "),(0,s.kt)("li",{parentName:"ul"},"NULL,"),(0,s.kt)("li",{parentName:"ul"},"NOT_NULL, "),(0,s.kt)("li",{parentName:"ul"},"NOT_EQUAL, "),(0,s.kt)("li",{parentName:"ul"},"TRUE, "),(0,s.kt)("li",{parentName:"ul"},"FALSE")),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Assert-Type"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Example"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("em",{parentName:"td"},"EQUAL or NOT","_","EQUAL")),(0,s.kt)("td",{parentName:"tr",align:"left"},'{ "Assert1": {"condition": ["equal","${user',"_","exec.user","_","api.response","[0]",'.name}","Tom"],"message": "Validation success"}}')),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("em",{parentName:"td"},"NULL or NOT","_","NULL")),(0,s.kt)("td",{parentName:"tr",align:"left"},'{ "Assert2": {"condition": ["not',"_",'null","${user',"_","exec.user","_","api.response","[0]",'.id}"],"message": "Validation success"}}')),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("em",{parentName:"td"},"GREATER or LESSER")),(0,s.kt)("td",{parentName:"tr",align:"left"},'{ "Assert1": {"condition": ["greater","${user',"_","exec.user","_","api.response","[0]",'.id}","20"],"message": "Validation success"}}')),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("em",{parentName:"td"},"TRUE or FALSE")),(0,s.kt)("td",{parentName:"tr",align:"left"},'{ "Assert2": {"condition": ["true","${user',"_","exec.user","_","api.response","[0]",'.isAdmin}"],"message": "Validation success"}}')))))}m.isMDXComponent=!0}}]);