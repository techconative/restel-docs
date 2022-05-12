"use strict";(self.webpackChunkrestel_docs=self.webpackChunkrestel_docs||[]).push([[363],{3905:function(t,e,a){a.d(e,{Zo:function(){return d},kt:function(){return f}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),s=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},d=function(t){var e=s(t.components);return n.createElement(o.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,o=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),k=s(a),f=r,g=k["".concat(o,".").concat(f)]||k[f]||m[f]||i;return a?n.createElement(g,l(l({ref:e},d),{},{components:a})):n.createElement(g,l({ref:e},d))}));function f(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,l=new Array(i);l[0]=k;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:r,l[1]=p;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},1900:function(t,e,a){a.r(e),a.d(e,{assets:function(){return d},contentTitle:function(){return o},default:function(){return f},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return m}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),l=["components"],p={title:"Test modeling sheet structure"},o=void 0,s={unversionedId:"input-sheet-structure/input-sheet-structure",id:"input-sheet-structure/input-sheet-structure",title:"Test modeling sheet structure",description:"The input excel should be structured as following worksheets,",source:"@site/docs/input-sheet-structure/input-sheet-structure.md",sourceDirName:"input-sheet-structure",slug:"/input-sheet-structure/",permalink:"/docs/input-sheet-structure/",editUrl:"https://github.com/techconative/restel-docs/blob/main/docs/input-sheet-structure/input-sheet-structure.md",tags:[],version:"current",frontMatter:{title:"Test modeling sheet structure"},sidebar:"tutorialSidebar",previous:{title:"Demo",permalink:"/docs/Setup/Demo"},next:{title:"Concepts & Components",permalink:"/docs/concepts-components/"}},d={},m=[{value:"Base_Config:",id:"base_config",level:2},{value:"Test_Suite:",id:"test_suite",level:2},{value:"Test_Scenarios:",id:"test_scenarios",level:2},{value:"Test_Api_Wrappers :",id:"test_api_wrappers-",level:2},{value:"Test_Api_Definitions :",id:"test_api_definitions-",level:2}],k={toc:m};function f(t){var e=t.components,a=(0,r.Z)(t,l);return(0,i.kt)("wrapper",(0,n.Z)({},k,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The input excel should be structured as following worksheets,"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Base_Config:"),"  Contains global configs that are required for the test. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Test_Suites:"),"  Logical grouping of similar test scenarios."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Test_Scenarios:")," Contains the actual scenarios to be tested. This could make use of one or more APIs defined in the Test",(0,i.kt)("em",{parentName:"li"},"Api_Definitions"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Test_Api_Wrappers:")," Contains the list of test wrappers for available API definitions. This allows customizing an API definition by passing ",(0,i.kt)("strong",{parentName:"li"},"Restel Variables"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Test_Api_Definitions:")," Contains the list of Services API definitions for the Rest Application which needs to test.")),(0,i.kt)("h2",{id:"base_config"},"Base_Config:"),(0,i.kt)("p",null,"Base_config sheet, should contain the basic necessary information on the Rest Application which needs to be tested .\nIn the sheets the headers are sectioned in Rows . Each Row first Cell will be a header."),(0,i.kt)("p",null,"Below Table shows the list of headers, description, format and examples for better understanding."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"th"},"Header Name")),(0,i.kt)("th",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"th"},"Description")),(0,i.kt)("th",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"th"},"Format")),(0,i.kt)("th",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"th"},"Mandatory")),(0,i.kt)("th",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"th"},"Examples")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"app","_","name")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Name to the Rest Application which needs to be Tested."),(0,i.kt)("td",{parentName:"tr",align:"left"},"String"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Optional"),(0,i.kt)("td",{parentName:"tr",align:"left"},"PetStore Test Application")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"base","_","url")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The URL of the Rest Application which needs to test, should be in the format ","<","protocol",">","://","<","host",">",":","<","port",">","/","<","base","_","path",">"),(0,i.kt)("td",{parentName:"tr",align:"left"},"String"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Mandatory"),(0,i.kt)("td",{parentName:"tr",align:"left"},"<",(0,i.kt)("a",{parentName:"td",href:"https://petstore.swagger.io/v2&gt"},"https://petstore.swagger.io/v2",">"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"default","_","headers")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Default headers which will be added to each of the RestAPI request headers which need to be tested. Should be Json format ."),(0,i.kt)("td",{parentName:"tr",align:"left"},"Json"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Optional"),(0,i.kt)("td",{parentName:"tr",align:"left"},'{"Content-Type":"application/json","Accept":"application/json"}')))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"test_suite"},"Test_Suite:"),(0,i.kt)("p",null,"Represents the list of suites that are part of the test."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"th"},"Header Name")),(0,i.kt)("th",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"th"},"Description")),(0,i.kt)("th",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"th"},"Format")),(0,i.kt)("th",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"th"},"Mandatory")),(0,i.kt)("th",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"th"},"Examples")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"suite","_","unique","_","name")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Name of the Test Suite should be unique. Duplicate names should not exist."),(0,i.kt)("td",{parentName:"tr",align:"left"},"String"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Mandatory"),(0,i.kt)("td",{parentName:"tr",align:"left"},"user","_","service","_","suite")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"suite","_","description")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Description about the Test suite"),(0,i.kt)("td",{parentName:"tr",align:"left"},"String"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Optional"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Suite to evaluate a positive flow of user","_","service.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"depends","_","on")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Sometimes other Test Suite needs to execute first before the current Test Suite. Name of the Test Suite from ",(0,i.kt)("em",{parentName:"td"},"suite","_","unique","_","name")," which it depends on."),(0,i.kt)("td",{parentName:"tr",align:"left"},"Comma Separated String"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Optional"),(0,i.kt)("td",{parentName:"tr",align:"left"},"user","_","registration","_","suite,user","_","validation","_","suite")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"suite","_","params")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Parameters thats need to be passed into the Test Suite APIs"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Json"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Optional"),(0,i.kt)("td",{parentName:"tr",align:"left"},'{"user":"John"}')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"suite","_","enable")),(0,i.kt)("td",{parentName:"tr",align:"left"},"To enable or disable invocations of APIs for the current suite. Default : TRUE."),(0,i.kt)("td",{parentName:"tr",align:"left"},"Boolean"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Optional"),(0,i.kt)("td",{parentName:"tr",align:"left"},"TRUE")))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"test_scenarios"},"Test_Scenarios:"),(0,i.kt)("p",null,"This represents the logical grouping of similar scenarios."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"th"},"Header Name")),(0,i.kt)("th",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"th"},"Description")),(0,i.kt)("th",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"th"},"Format")),(0,i.kt)("th",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"th"},"Mandatory")),(0,i.kt)("th",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"th"},"Examples")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"scenario","_","unique","_","name")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Name of the Test Suite Execution. Should be unique. Duplicate names should not exist."),(0,i.kt)("td",{parentName:"tr",align:"left"},"String"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Mandatory"),(0,i.kt)("td",{parentName:"tr",align:"left"},"get","_","user","_","exec")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"scenario_description")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The ",(0,i.kt)("strong",{parentName:"td"},'"description"')," of the test scenario to communicate the details to the users and to be logged in the report."),(0,i.kt)("td",{parentName:"tr",align:"left"},"String"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Optional"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Scenario to test if the user fetch fails after deletion.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"test","_","suite")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The ",(0,i.kt)("strong",{parentName:"td"},'"suite',"_","unique","_",'name"')," field value read from the Test","_","Suite sheets. Need to define that the test execution belongs to which test suite. Eg: ",(0,i.kt)("em",{parentName:"td"},"user","_","service","_","suite."),"   This test suite execution belongs to a test suite with suite","_","unique","_","name as \u2018user","_","service","_","suite\u2019."),(0,i.kt)("td",{parentName:"tr",align:"left"},"String"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Mandatory"),(0,i.kt)("td",{parentName:"tr",align:"left"},"user","_","service","_","suite")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"test","_","apis")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Comma seperated values of the wrapper/APIs to be executed, in order. ",(0,i.kt)("strong",{parentName:"td"},'"case',"_","unique","_",'name"')," field value from ",(0,i.kt)("em",{parentName:"td"},"test","_","definition")," sheet or ",(0,i.kt)("strong",{parentName:"td"},'"test_api_wrapper_name"')," field from ",(0,i.kt)("em",{parentName:"td"},"Test_Api_Wrappers")," sheet."),(0,i.kt)("td",{parentName:"tr",align:"left"},"String"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Mandatory"),(0,i.kt)("td",{parentName:"tr",align:"left"},"get","_","user")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"depends","_","on")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Sometimes other Test Scenario Execution should be invoked before current Test Suite Execution. Name of the ",(0,i.kt)("em",{parentName:"td"},"case","_","unique","_","name")," which should execute first before executing the current Test Suite Execution."),(0,i.kt)("td",{parentName:"tr",align:"left"},"Comma separated String"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Optional"),(0,i.kt)("td",{parentName:"tr",align:"left"},"create","_","user","_","exec")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"test","_","execution","_","params")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Parameters to be included to the current Test suite execution"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Json"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Optional"),(0,i.kt)("td",{parentName:"tr",align:"left"},'{"user',"_",'name" : "vivek"}')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"test","_","execution","_","enable")),(0,i.kt)("td",{parentName:"tr",align:"left"},"To enable or disable invocations of test suite execution . Default : TRUE."),(0,i.kt)("td",{parentName:"tr",align:"left"},"Boolean"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Optional"),(0,i.kt)("td",{parentName:"tr",align:"left"},"TRUE")))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"test_api_wrappers-"},"Test_Api_Wrappers :"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Optional sheet"),".\nThis represents test wrappers for APIs that can utilise ",(0,i.kt)("em",{parentName:"p"},"Restel variables")," when being called and tested. Intended to pass API specific parameters and avoid duplicating APIs. The columns and the meaning of the columns in the sheet is as below,"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"th"},"Header Name")),(0,i.kt)("th",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"th"},"Description")),(0,i.kt)("th",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"th"},"format")),(0,i.kt)("th",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"th"},"Mandatory")),(0,i.kt)("th",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"th"},"Example")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"test_api_wrapper_name")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Name of the Test Wrapper. Should be unique, duplicates should not exist."),(0,i.kt)("td",{parentName:"tr",align:"left"},"String"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Mandatory"),(0,i.kt)("td",{parentName:"tr",align:"left"},"read_entry_500")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"test_api_wrapper_description")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Description about the test wrapper."),(0,i.kt)("td",{parentName:"tr",align:"left"},"String"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Optional"),(0,i.kt)("td",{parentName:"tr",align:"left"},"User retrieval failed")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"test_api_wrapper_parameters")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Test specific parameters that can be used within the wrapped test."),(0,i.kt)("td",{parentName:"tr",align:"left"},"String"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Optional"),(0,i.kt)("td",{parentName:"tr",align:"left"},'{ "expected_read_status_code": "500", "read_expected_response":{"message":"Cannot read properties of null (reading \'_id\')"} }')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"test_api_name")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Name of the test being wrapped. Must match exactly one test name (",(0,i.kt)("em",{parentName:"td"},"api","_","unique","_","name"),") defined in ",(0,i.kt)("em",{parentName:"td"},"Test_Api_Definitions")," sheet."),(0,i.kt)("td",{parentName:"tr",align:"left"},"String"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Mandatory"),(0,i.kt)("td",{parentName:"tr",align:"left"},"read_entry")))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"test_api_definitions-"},"Test_Api_Definitions :"),(0,i.kt)("p",null,"This represents rudimentary APIs that will be called and tested. The columns and the meaning of the columns in the sheet is as below,"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"th"},"Header Name")),(0,i.kt)("th",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"th"},"Description")),(0,i.kt)("th",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"th"},"format")),(0,i.kt)("th",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"th"},"Mandatory")),(0,i.kt)("th",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"th"},"Example")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"api","_","unique","_","name")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Name of the Test Case Definition. Should be unique, duplicate names should not exist."),(0,i.kt)("td",{parentName:"tr",align:"left"},"String"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Mandatory"),(0,i.kt)("td",{parentName:"tr",align:"left"},"create","_","user")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"depends","_","on")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Sometimes other Test","_","definitions need to be executed before executing the current Test","_","definition. Includes another case","_","unique","_","name which needs to be executed first."),(0,i.kt)("td",{parentName:"tr",align:"left"},"Comma separated strings"),(0,i.kt)("td",{parentName:"tr",align:"left"},"optional"),(0,i.kt)("td",{parentName:"tr",align:"left"},"get","_","user,login","_","user")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"api","_","description")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Description about the Test","_","definition"),(0,i.kt)("td",{parentName:"tr",align:"left"},"String"),(0,i.kt)("td",{parentName:"tr",align:"left"},"optional"),(0,i.kt)("td",{parentName:"tr",align:"left"},"API for fetching the information of all users.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"request","_","url")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Endpoint of the Rest API. Supports Restel variables."),(0,i.kt)("td",{parentName:"tr",align:"left"},"String"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Mandatory"),(0,i.kt)("td",{parentName:"tr",align:"left"},"/user")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"request","_","method")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Endpoint Http Method. Should be one of HTTP Methods"),(0,i.kt)("td",{parentName:"tr",align:"left"},"String"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Mandatory"),(0,i.kt)("td",{parentName:"tr",align:"left"},"POST")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"request","_","headers")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Endpoint Http Request Headers"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Json"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Optional"),(0,i.kt)("td",{parentName:"tr",align:"left"},'{"Content-Type":"application/json","Accept":"application/json"}')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"request","_","query","_","params")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Query parameters for this endpoint"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Json"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Optional"),(0,i.kt)("td",{parentName:"tr",align:"left"},'{"user:"Tom","index":2}')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"request","_","body","_","params")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Endpoint Body parameters. Format can be json or String. Provide the appropriate Content-Type in the request","_","headers. Supports Restel variables."),(0,i.kt)("td",{parentName:"tr",align:"left"},"Json / String"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Optional"),(0,i.kt)("td",{parentName:"tr",align:"left"},'{"id": 1,"email": "',(0,i.kt)("a",{parentName:"td",href:"mailto:noreply@gmail.com"},"noreply@gmail.com"),'","phone": "99999999999"}')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"request","_","pre","_","call","_","hook")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Middlewares on request before api call like authentications, etc."),(0,i.kt)("td",{parentName:"tr",align:"left"},"Json"),(0,i.kt)("td",{parentName:"tr",align:"left"},"optional"),(0,i.kt)("td",{parentName:"tr",align:"left"},"{}")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"request","_","post","_","call","_","hook")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Middlewares on request after api call like writing response to file,etc"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Json"),(0,i.kt)("td",{parentName:"tr",align:"left"},"optional"),(0,i.kt)("td",{parentName:"tr",align:"left"},"{}")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"expected","_","response")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The API call response body to be expected, Will evaluate expected response body with the actual api call response body. Should provide the appropriate response content-type in the response headers. Supports Restel variables."),(0,i.kt)("td",{parentName:"tr",align:"left"},"Json/String"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Optional"),(0,i.kt)("td",{parentName:"tr",align:"left"},'{ "id": 1,"email": "',(0,i.kt)("a",{parentName:"td",href:"mailto:noreply@gmail.com"},"noreply@gmail.com"),'","phone": "99999999999"}')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"expected","_","response","_","matcher")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Evaluation technique names. Will evaluate the api response body with expected","_","response body. Should be one of the enums ","[NOOP","_","MATCHER,EXACT","_","MATCHER,PARTIAL","_","MATCHER]"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Enum of ","[NOOP","_","MATCHER,EXACT","_","MATCHER,PARTIAL","_","MATCHER]"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Mandatory"),(0,i.kt)("td",{parentName:"tr",align:"left"},"EXACT","_","MATCHER")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"expected","_","header")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The API call response headers to be expected.Will evaluate expected response header with the actual api call response header."),(0,i.kt)("td",{parentName:"tr",align:"left"},"Json"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Optional"),(0,i.kt)("td",{parentName:"tr",align:"left"},'{"Content-Type":"application/json","Server":"Jetty"}')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"expected","_","header","_","matcher")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Evaluation technique names.  Will evaluate the api response header with expected","_","response header. should be one of the enums ","[NOOP","_","MATCHER,EXACT","_","MATCHER,PARTIAL","_","MATCHER]"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Enum of ","[NOOP","_","MATCHER,EXACT","_","MATCHER,PARTIAL","_","MATCHER]"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Mandatory"),(0,i.kt)("td",{parentName:"tr",align:"left"},"NOOP","_","MATCHER")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"accepted","_","status","_","code")),(0,i.kt)("td",{parentName:"tr",align:"left"},"To validate/check if the api call status code is within the one of the accepted","_","status","_","code. Should be one or list of status codes. Supports Restel variables."),(0,i.kt)("td",{parentName:"tr",align:"left"},"Comma separated values"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Mandatory"),(0,i.kt)("td",{parentName:"tr",align:"left"},"201")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"Tags")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Can give tags to Test","_","Definition."),(0,i.kt)("td",{parentName:"tr",align:"left"},"Comma separated String"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Optional"),(0,i.kt)("td",{parentName:"tr",align:"left"},"UserService")))),(0,i.kt)("hr",null))}f.isMDXComponent=!0}}]);