"use strict";(self.webpackChunkrestel_docs=self.webpackChunkrestel_docs||[]).push([[369],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return c}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=r.createContext({}),s=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(a),c=n,h=m["".concat(d,".").concat(c)]||m[c]||u[c]||l;return a?r.createElement(h,i(i({ref:t},p),{},{components:a})):r.createElement(h,i({ref:t},p))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},575:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return c},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return u}});var r=a(7462),n=a(3366),l=(a(7294),a(3905)),i=["components"],o={title:"Middleware",sidebar_position:4},d=void 0,s={unversionedId:"concepts-components/middleware",id:"concepts-components/middleware",title:"Middleware",description:"Middleware",source:"@site/docs/concepts-components/middleware.md",sourceDirName:"concepts-components",slug:"/concepts-components/middleware",permalink:"/docs/concepts-components/middleware",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/concepts-components/middleware.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Middleware",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Variables & Context",permalink:"/docs/concepts-components/variables_and_context"},next:{title:"Assertion",permalink:"/docs/concepts-components/assertion"}},p={},u=[{value:"Middleware",id:"middleware",level:2},{value:"How to use middleware feature?",id:"how-to-use-middleware-feature",level:3},{value:"Request Middleware",id:"request-middleware",level:3},{value:"BasicAuth Middleware",id:"basicauth-middleware",level:3},{value:"OAuth2 Client Credential Middleware",id:"oauth2-client-credential-middleware",level:3},{value:"OAuth2 Resource Owner Password Middleware",id:"oauth2-resource-owner-password-middleware",level:3},{value:"Response Middleware",id:"response-middleware",level:3},{value:"Response Writer Middleware",id:"response-writer-middleware",level:3}],m={toc:u};function c(e){var t=e.components,a=(0,n.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"middleware"},"Middleware"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Restel"),", can help you solve more woes with the help of middleware. Restel middleware provides us an opportunity to add pre or post processor to the requests and response. "),(0,l.kt)("h3",{id:"how-to-use-middleware-feature"},"How to use middleware feature?"),(0,l.kt)("p",null,"In test definition sheet two columns are earmarked for middleware as follows:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"request_pre_call_hook")," "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"request_post_call_hook"))),(0,l.kt)("p",null,"as the name suggests former one is used for pre processing and the later is used in post processing. Wondering what kind of processing would require while testing? We often bump into the requirements of storing the response into a file for debugging or for comparisons and the most important aspect in today's context is authentication & authorization. "),(0,l.kt)("h3",{id:"request-middleware"},"Request Middleware"),(0,l.kt)("p",null,"At this moment we Restel supports three request middleware:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"BasicAuth Middleware "),(0,l.kt)("li",{parentName:"ul"},"Oauth2 Client credential Middleware"),(0,l.kt)("li",{parentName:"ul"},"Oauth2 Resource Owner Password Middleware")),(0,l.kt)("h3",{id:"basicauth-middleware"},"BasicAuth Middleware"),(0,l.kt)("p",null,"If you're dealing with APIs that supports BasicAuth then you should probably use this middleware it adds Authorization header to the request headers with the given username and password. Header Key : Authorization , Value : Basic ","<","token",">"," . Where token is the Base64 encoding of username:password "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{\n  "Authorization": {\n    "basic_auth": {\n    "username": "&ltusername&gt",\n        "password": "&ltpassword&gt"\n    }\n  }\n}\n')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Mandatory/Optional"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Format"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"username"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Mandatory"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Billy")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"password"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Mandatory"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"ThisIsACrazyPassword")))),(0,l.kt)("h3",{id:"oauth2-client-credential-middleware"},"OAuth2 Client Credential Middleware"),(0,l.kt)("p",null,"OAuth based authentication has become a de facto standard for most of the application these days and if your application is relying on OAuth2 with client credentials then use this middleware it adds Authorization header to the request headers which make calls to the authorization server to fetch accessToken which has Oauth2 authentication with grant type client credentials.. Header Key : Authorization , Value : Bearer ","<","accesstoken",">"," . Where accesstoken is a token generated by the Authorization Server. "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{\n  "Authorization": {\n    "oauth2": {\n    "client_credentials": {\n        "authUrl": "&ltauth_url&gt",\n        "clientId": "&ltclient_id&gt",\n        "clientSecret": "&ltclientSecret&gt",\n        "scope": "&ltScopes&gt"\n    }\n    }\n  }\n}\n\n')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Mandatory/Optional"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Format"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"authUrl"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Mandatory"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://authserver.com/v1/token"},"https://authserver.com/v1/token"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"clientSecret"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Mandatory"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"8A6eAB8hUjOb9w5hWCT6CndX5FY0gFomfRMvv65jDON'TEXPOSEYOURSECERETSANYWHERE"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"clientId"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Mandatory"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"YOURCLIENTIDLIKE0oa10nhj6gkhyPLXb4x9"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"scope"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Optional"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Space separated String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"emailId personal groups")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"password"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Mandatory"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"ThisIsACrazyPassword")))),(0,l.kt)("h3",{id:"oauth2-resource-owner-password-middleware"},"OAuth2 Resource Owner Password Middleware"),(0,l.kt)("p",null,"If you're using resource owner password while invoking the application then use this middleware it adds Authorization header to the request headers which make calls to the authorization server to fetch accessToken which has Oauth2 authentication with grant type password.. Header Key : Authorization , Value : Bearer ","<","accesstoken",">"," . Where accesstoken is a token generated by the Authorization Server."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{\n  "Authorization": {\n    "oauth2": {\n    "password": {\n        "username": "&ltusername&gt",\n        "password": "&ltpassword&gt",\n"authUrl": "&ltauth_url&gt",\n        "clientId": "&ltclient_id&gt",\n        "clientSecret": "&ltclientSecret&gt",\n        "scope": "&ltScopes&gt"\n    }\n    }\n  }\n}\n')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Mandatory/Optional"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Format"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"username"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Mandatory"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Billy")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"password"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Mandatory"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"ThisIsACrazyPassword")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"authUrl"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Mandatory"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://authserver.com/v1/token"},"https://authserver.com/v1/token"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"clientSecret"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Mandatory"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"8A6eAB8hUjOb9w5hWCT6CndX5FY0gFomfRMvv65jDON'TEXPOSEYOURSECERETSANYWHERE"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"clientId"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Mandatory"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"YOURCLIENTIDLIKE0oa10nhj6gkhyPLXb4x9"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"scope"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Optional"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Space separated String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"emailId personal groups")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"password"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Mandatory"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"ThisIsACrazyPassword")))),(0,l.kt)("h3",{id:"response-middleware"},"Response Middleware"),(0,l.kt)("h3",{id:"response-writer-middleware"},"Response Writer Middleware"),(0,l.kt)("p",null,"If you want required to record the response in a file then use this middleware it will write the response payload to the local file. Should provide the path to where the response has to be written."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{\n  "write": \u201c&ltfilePath&gt\u201d\n}\n')))}c.isMDXComponent=!0}}]);