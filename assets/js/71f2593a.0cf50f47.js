"use strict";(self.webpackChunkrestel_docs=self.webpackChunkrestel_docs||[]).push([[373],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(r),d=o,h=m["".concat(s,".").concat(d)]||m[d]||c[d]||l;return r?n.createElement(h,a(a({ref:t},p),{},{components:r})):n.createElement(h,a({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var u=2;u<l;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5171:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return c}});var n=r(7462),o=r(3366),l=(r(7294),r(3905)),a=["components"],i={title:"Demo",sidebar_position:2},s="Quickstart",u={unversionedId:"Setup/Demo",id:"Setup/Demo",title:"Demo",description:"The below steps would help you get a feel of Restel by running a demo server and test it with a pre-written excel file.",source:"@site/docs/Setup/Demo.md",sourceDirName:"Setup",slug:"/Setup/Demo",permalink:"/docs/Setup/Demo",editUrl:"https://github.com/techconative/restel-docs/blob/main/docs/Setup/Demo.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Demo",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Up & Running",permalink:"/docs/Setup/up_and_running"},next:{title:"Test modeling sheet structure",permalink:"/docs/input-sheet-structure/"}},p={},c=[{value:"Cloning the git repository",id:"cloning-the-git-repository",level:2},{value:"Pre-requisite",id:"pre-requisite",level:3},{value:"Steps to follow",id:"steps-to-follow",level:3},{value:"*nix",id:"nix",level:4},{value:"Windows",id:"windows",level:4},{value:"Note",id:"note",level:3},{value:"Downloading the required files from repo (without entire setup)",id:"downloading-the-required-files-from-repo-without-entire-setup",level:2},{value:"Pre-requisite",id:"pre-requisite-1",level:3},{value:"Steps to follow",id:"steps-to-follow-1",level:3},{value:"Note",id:"note-1",level:3}],m={toc:c};function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,l.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"quickstart"},"Quickstart"),(0,l.kt)("p",null,"The below steps would help you get a feel of Restel by running a demo server and test it with a pre-written excel file."),(0,l.kt)("p",null,"You can quick start by either:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#cloning-the-git-repository"},"Cloning the git repository")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#downloading-the-required-files-from-repo-without-entire-setup"},"Downloading the required files from repo (without entire setup)"))),(0,l.kt)("p",null,"You can edit ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/techconative/Restel/blob/main/quickstart/jsonbox_test.xlsx"},"the sample sheet")," to play around with the tests being executed."),(0,l.kt)("h2",{id:"cloning-the-git-repository"},"Cloning the git repository"),(0,l.kt)("h3",{id:"pre-requisite"},"Pre-requisite"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"JDK 11"),(0,l.kt)("li",{parentName:"ul"},"Docker"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/vasanthv/jsonbox"},"JsonBox"))),(0,l.kt)("h3",{id:"steps-to-follow"},"Steps to follow"),(0,l.kt)("h4",{id:"nix"},"*nix"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Go to the root folder of the project and run ",(0,l.kt)("inlineCode",{parentName:"li"},"make setup")," to install the dependencies for reporting in your machine."),(0,l.kt)("li",{parentName:"ol"},"Start ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/vasanthv/jsonbox"},"Jsonbox")," by running ",(0,l.kt)("inlineCode",{parentName:"li"},"docker-compose up"),"."),(0,l.kt)("li",{parentName:"ol"},"To execute the test, go to the home folder and run, ",(0,l.kt)("inlineCode",{parentName:"li"},"make demo-run"),".")),(0,l.kt)("h4",{id:"windows"},"Windows"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Refer ",(0,l.kt)("a",{parentName:"li",href:"up_and_running#for-windows-and-systems-where-the-given-makefile-doesnt-work"},"Setup section")," on steps to manually setup JDK11 and ",(0,l.kt)("a",{parentName:"li",href:"https://docs.qameta.io/allure/#_installing_a_commandline"},"allure"),"."),(0,l.kt)("li",{parentName:"ol"},"Start ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/vasanthv/jsonbox"},"Jsonbox")," by running ",(0,l.kt)("inlineCode",{parentName:"li"},"docker-compose up")),(0,l.kt)("li",{parentName:"ol"},"To execute the test, go to the home directory and run,")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},".\\scripts\\run.bat quickstart\\jsonbox_test.xlsx\n")),(0,l.kt)("h3",{id:"note"},"Note"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"If ",(0,l.kt)("inlineCode",{parentName:"p"},"docker-compose")," is not working for JsonBox, please refer to the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/vasanthv/jsonbox#how-to-run-locally"},"instruction")," in jsonbox to have it up & running.")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"downloading-the-required-files-from-repo-without-entire-setup"},"Downloading the required files from repo (without entire setup)"),(0,l.kt)("h3",{id:"pre-requisite-1"},"Pre-requisite"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"JRE 11"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/techconative/Restel/releases/latest"},"Restel Jar")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/techconative/Restel/blob/main/quickstart/jsonbox_test.xlsx"},"Quickstart spreadsheet")),(0,l.kt)("li",{parentName:"ul"},"Docker + ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/vasanthv/jsonbox"},"JsonBox")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.qameta.io/allure/#_installing_a_commandline"},"Allure CLI"))),(0,l.kt)("h3",{id:"steps-to-follow-1"},"Steps to follow"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Download the Restel JAR and quickstart Excel file into a directory."),(0,l.kt)("li",{parentName:"ol"},"Verify that Jsonbox is running."),(0,l.kt)("li",{parentName:"ol"},"Execute the JAR, passing the test sheet as argument."),(0,l.kt)("li",{parentName:"ol"},"Generate Allure report with the test result"),(0,l.kt)("li",{parentName:"ol"},"View the allure report in browser")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"*nix:"),(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"java -jar restel-0.1-all.jar jsonbox_test.xlsx && \\\nallure generate build/reports/allure-results -o build/reports/allure-report --clean && \\\nallure open -p 37004 build/reports/allure-report\n")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Windows Powershell:"),(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"java -jar .\\restel-0.1-all.jar .\\jsonbox_test.xlsx && `\nallure generate .\\build\\reports\\allure-results\\ -o .\\build\\reports\\allure-report\\ --clean && `\nallure open -p 37004 .\\build\\reports\\allure-report\n"))))),(0,l.kt)("h3",{id:"note-1"},"Note"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Use the appropriate file path separator based on your OS. *nix uses forward slash ",(0,l.kt)("inlineCode",{parentName:"p"},"/")," while Windows uses backward slash ",(0,l.kt)("inlineCode",{parentName:"p"},"\\"),".")))}d.isMDXComponent=!0}}]);