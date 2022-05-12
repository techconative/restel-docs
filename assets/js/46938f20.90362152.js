"use strict";(self.webpackChunkrestel_docs=self.webpackChunkrestel_docs||[]).push([[448],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9292:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={title:"Variables & Context",sidebar_position:3},l=void 0,p={unversionedId:"concepts-components/variables_and_context",id:"concepts-components/variables_and_context",title:"Variables & Context",description:"Variables:",source:"@site/docs/concepts-components/variables_and_context.md",sourceDirName:"concepts-components",slug:"/concepts-components/variables_and_context",permalink:"/docs/concepts-components/variables_and_context",editUrl:"https://github.com/techconative/restel-docs/blob/main/docs/concepts-components/variables_and_context.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Variables & Context",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Matchers",permalink:"/docs/concepts-components/matchers"},next:{title:"Middleware",permalink:"/docs/concepts-components/middleware"}},c={},u=[{value:"Variables:",id:"variables",level:2},{value:"Params:",id:"params",level:2},{value:"Overriding &amp; Merging of params:",id:"overriding--merging-of-params",level:3},{value:"Context:",id:"context",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"variables"},"Variables:"),(0,i.kt)("p",null,"Restel supports variables, which gives certain amount of dynamicity to the test definition in Restel, like referring to\nthe request/response of some other request."),(0,i.kt)("p",null,"Variables are referred using ",(0,i.kt)("inlineCode",{parentName:"p"},"${<fully_qualified_variable_name>}"),". The variables are supported in almost all the fields\nof test/scenario definitions. The evaluation of the value happens just before the execution of the respective tests."),(0,i.kt)("p",null,"Variables can be used to refer to the values from ",(0,i.kt)("inlineCode",{parentName:"p"},"Restel context map")," and values from environments and system property."),(0,i.kt)("p",null,"The order of resolution for a given key is,"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Restel context"),(0,i.kt)("li",{parentName:"ul"},"Environment"),(0,i.kt)("li",{parentName:"ul"},"JVM System property")),(0,i.kt)("h2",{id:"params"},"Params:"),(0,i.kt)("p",null,"Params are nested maps of arbitrary keys-values that are passed form ",(0,i.kt)("inlineCode",{parentName:"p"},"suite_params")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"scenario_params"),"."),(0,i.kt)("p",null,"This can be used to parameterize values for the API tests and have it passed at the scenario/suite level."),(0,i.kt)("h3",{id:"overriding--merging-of-params"},"Overriding & Merging of params:"),(0,i.kt)("p",null,"When a test api is getting executed, it'll have all the params that are defined from its parent entities(Suite and\nScenario)."),(0,i.kt)("p",null,"As the params are getting merged, the keys defined in the parent params will be overridden by the child keys defined.\ni.e., if the suite params and the scenario params both has the same key defined, the value in the scenario will be\noverridden by the value defined in the suite."),(0,i.kt)("h2",{id:"context"},"Context:"),(0,i.kt)("p",null,"To put simply, context is a map of values maintained by Restel while the test is being executed."),(0,i.kt)("p",null,"During the execution of Test APIs, at a given moment, the context will contain the below values,"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The requests & responses of all the APIs of the scenarios that has been executed the framework so far, which can be\naccessed by variable\n",(0,i.kt)("inlineCode",{parentName:"li"},"${<scenario_unique_name>.<test_api_name>.<request/response>}")),(0,i.kt)("li",{parentName:"ul"},"The params passed from the scenario and the suite level, which can be accessed by variable ",(0,i.kt)("inlineCode",{parentName:"li"},"${<param_key>}")),(0,i.kt)("li",{parentName:"ul"},"The requests & responses of the APIs that has been executed in the current scenario, which can be accessed by variable\n",(0,i.kt)("inlineCode",{parentName:"li"},"${<test_api_name>.<request/response>}")," (note that the scenario name is optional in this case).")),(0,i.kt)("p",null,"For example, say we have an ",(0,i.kt)("inlineCode",{parentName:"p"},"Test Definition")," ",(0,i.kt)("inlineCode",{parentName:"p"},"some_API")," under the ",(0,i.kt)("inlineCode",{parentName:"p"},"Test Scenario")," ",(0,i.kt)("inlineCode",{parentName:"p"},"some_scenario")," and if the response\nof the API call is,"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n    "name" : "name of the user",\n    "groups" : ["g1", "g2" ,"g3"]\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If we want to refer a field 'name' from the response of the api in some other test, we can refer it\nas ",(0,i.kt)("inlineCode",{parentName:"p"},"${some_scenario.some_API.response.name}"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If we want to refer to the first groups in the response, we can do it\nas ",(0,i.kt)("inlineCode",{parentName:"p"},"${some_scenario.some_API.response.groups[0]}"),"."))))}d.isMDXComponent=!0}}]);