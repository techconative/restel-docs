"use strict";(self.webpackChunkrestel_docs=self.webpackChunkrestel_docs||[]).push([[12],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(n),h=i,f=d["".concat(l,".").concat(h)]||d[h]||p[h]||a;return n?r.createElement(f,s(s({ref:t},u),{},{components:n})):r.createElement(f,s({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3033:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),s=["components"],o={},l=void 0,c={unversionedId:"building-blocks/building-blocks",id:"building-blocks/building-blocks",title:"building-blocks",description:"The below are some of terms that defined and used within Restel,",source:"@site/docs/building-blocks/building-blocks.md",sourceDirName:"building-blocks",slug:"/building-blocks/",permalink:"/docs/building-blocks/",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/building-blocks/building-blocks.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Restel",permalink:"/docs/intro"},next:{title:"Test modeling sheet structure",permalink:"/docs/input-sheet-structure/"}},u={},p=[{value:"Test Definition:",id:"test-definition",level:2},{value:"Test Scenarios:",id:"test-scenarios",level:2},{value:"Test Suite:",id:"test-suite",level:2},{value:"Restel Expression:",id:"restel-expression",level:2},{value:"Test Context Map:",id:"test-context-map",level:2},{value:"Variables:",id:"variables",level:2},{value:"Context:",id:"context",level:2},{value:"Middlewares:",id:"middlewares",level:2},{value:"Matchers:",id:"matchers",level:2}],d={toc:p};function h(e){var t=e.components,n=(0,i.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The below are some of terms that defined and used within Restel,"),(0,a.kt)("h2",{id:"test-definition"},"Test Definition:"),(0,a.kt)("p",null,"Represents a single APIs that has to be called (and tested)."),(0,a.kt)("h2",{id:"test-scenarios"},"Test Scenarios:"),(0,a.kt)("p",null,"Scenarios that are to be tested, typically making use of one or more Test Definitions."),(0,a.kt)("h2",{id:"test-suite"},"Test Suite:"),(0,a.kt)("p",null,"Logical collection of Test scenarios."),(0,a.kt)("h2",{id:"restel-expression"},"Restel Expression:"),(0,a.kt)("p",null,"Anything valid expression that is understandable and executed by Restel framework, will be in the format of ",(0,a.kt)("inlineCode",{parentName:"p"},"${}"),"."),(0,a.kt)("h2",{id:"test-context-map"},"Test Context Map:"),(0,a.kt)("p",null,"Restel tracks the request and responses of the tests that has happened as a Map. This can be referred within tests, when we need to refer to values from other tests that has been executed."),(0,a.kt)("h2",{id:"variables"},"Variables:"),(0,a.kt)("p",null,"Restel supports variables, which gives certain amount of dynamicity to the test definition in Restel, like referring to the request/response of some other request."),(0,a.kt)("p",null,"Variables are referred using ",(0,a.kt)("inlineCode",{parentName:"p"},"${<fully_qualified_variable_name>}"),". The variables are supported in almost all the fields of test/scenario definitions. The evaluation of the value happens just before the execution of the respective tests."),(0,a.kt)("h2",{id:"context"},"Context:"),(0,a.kt)("p",null,"Context is a map of values maintained by Restel while the test is being executed,"),(0,a.kt)("p",null,"Restel tracks all the requests and responses within the context."),(0,a.kt)("p",null,"The contexts can be referred using variables by giving the fully qualified name of what we are referring to."),(0,a.kt)("p",null,"For example, say we have an ",(0,a.kt)("inlineCode",{parentName:"p"},"Test Definition")," ",(0,a.kt)("inlineCode",{parentName:"p"},"some_API")," under the ",(0,a.kt)("inlineCode",{parentName:"p"},"Test Scenario")," ",(0,a.kt)("inlineCode",{parentName:"p"},"some_scenario")," and if the response of the API call is,"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n    "name" : "name of the user",\n    "groups" : ["g1", "g2" ,"g3"]\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"If we want to refer a field 'name' from the response of the api in some other test, we can refer it as ",(0,a.kt)("inlineCode",{parentName:"p"},"${some_scenario.some_API.response.name}"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"If we want to refer to the first groups in the response, we can do it as ",(0,a.kt)("inlineCode",{parentName:"p"},"${some_scenario.some_API.response.groups[0]}"),"."))),(0,a.kt)("h2",{id:"middlewares"},"Middlewares:"),(0,a.kt)("p",null,"Middlewares are the components that serves the condition of ensuring the pre- and post-conditions when the test happens. For example, the middleware ",(0,a.kt)("inlineCode",{parentName:"p"},"Oauth2ClientCredentialMiddleware")," will take care of authenticating against the configured Oath server when the token has expired."),(0,a.kt)("h2",{id:"matchers"},"Matchers:"),(0,a.kt)("p",null,"Matchers can be considered as predicates that does a check if the API response is matching with expected response based on the matchers chosen. For ex, ",(0,a.kt)("inlineCode",{parentName:"p"},"PARTIAL_MATCHER")," checks if all the key values in the expected response is available in the actual response. Any other attributes in the actual response beyond that will be ignored."))}h.isMDXComponent=!0}}]);