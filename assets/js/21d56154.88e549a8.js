"use strict";(self.webpackChunkrestel_docs=self.webpackChunkrestel_docs||[]).push([[831],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(n),h=o,m=d["".concat(c,".").concat(h)]||d[h]||u[h]||s;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var l=2;l<s;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6704:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u}});var r=n(7462),o=n(3366),s=(n(7294),n(3905)),a=["components"],i={title:"Concepts & Components",sidebar_position:1},c=void 0,l={unversionedId:"concepts-components/concepts-components",id:"concepts-components/concepts-components",title:"Concepts & Components",description:"The below are the building blocks of Restel.",source:"@site/docs/concepts-components/concepts-components.md",sourceDirName:"concepts-components",slug:"/concepts-components/",permalink:"/docs/concepts-components/",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/concepts-components/concepts-components.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Concepts & Components",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Test modeling sheet structure",permalink:"/docs/input-sheet-structure/"},next:{title:"Matchers",permalink:"/docs/concepts-components/matchers"}},p={},u=[{value:"Test APIs/Cases:",id:"test-apiscases",level:2},{value:"Test Scenarios:",id:"test-scenarios",level:2},{value:"Test Suite:",id:"test-suite",level:2},{value:"Restel Variables:",id:"restel-variables",level:2},{value:"Restel Context Map:",id:"restel-context-map",level:2},{value:"Middlewares:",id:"middlewares",level:2},{value:"Matchers:",id:"matchers",level:2}],d={toc:u};function h(e){var t=e.components,n=(0,o.Z)(e,a);return(0,s.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"The below are the building blocks of Restel."),(0,s.kt)("h2",{id:"test-apiscases"},"Test APIs/Cases:"),(0,s.kt)("p",null,"Represents a single APIs that has to be called (and tested)."),(0,s.kt)("h2",{id:"test-scenarios"},"Test Scenarios:"),(0,s.kt)("p",null,"Scenarios that are to be tested, typically making use of one or more Test APIs."),(0,s.kt)("h2",{id:"test-suite"},"Test Suite:"),(0,s.kt)("p",null,"Logical collection of related Test scenarios."),(0,s.kt)("h2",{id:"restel-variables"},"Restel Variables:"),(0,s.kt)("p",null,"Any valid expression that is understandable and executed by Restel framework, will be in the format of ",(0,s.kt)("inlineCode",{parentName:"p"},"${}"),".\nThis will be resolved by Restel before the execution of the respective API."),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"More details available ",(0,s.kt)("a",{parentName:"p",href:"variables_and_context#variables"},"here"),".")),(0,s.kt)("h2",{id:"restel-context-map"},"Restel Context Map:"),(0,s.kt)("p",null,"In simple terms, this is a map containing the request,responses and other details that Restel keeps tracks of and stores as the API tests are getting executed."),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"More details can be found ",(0,s.kt)("a",{parentName:"p",href:"variables_and_context#context"},"here"),".")),(0,s.kt)("h2",{id:"middlewares"},"Middlewares:"),(0,s.kt)("p",null,"Middlewares are the components that serves the condition of ensuring the pre- and post-conditions when the test happens. For example, the middleware ",(0,s.kt)("inlineCode",{parentName:"p"},"Oauth2ClientCredentialMiddleware")," will take care of authenticating against the configured Oath server when the token has expired."),(0,s.kt)("h2",{id:"matchers"},"Matchers:"),(0,s.kt)("p",null,"Matchers can be considered as predicates that does a check if the API response is matching with expected response based on the matchers chosen. For ex, ",(0,s.kt)("inlineCode",{parentName:"p"},"PARTIAL_MATCHER")," checks if all the key values in the expected response is available in the actual response. Any other attributes in the actual response beyond that will be ignored."))}h.isMDXComponent=!0}}]);