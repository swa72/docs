"use strict";(self.webpackChunkevcc_docs=self.webpackChunkevcc_docs||[]).push([[8520],{5876:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var t=s(5893),r=s(1151),a=s(4866),l=s(5162);const i={sidebar_position:2},c="Linux (Debian, Ubuntu, Raspberry Pi)",o={id:"installation/linux",title:"Linux (Debian, Ubuntu, Raspberry Pi)",description:"This guide is aimed specifically at APT-based distributions. For distributions using other package managers, please install using Docker or Manual Installation.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/installation/linux.mdx",sourceDirName:"installation",slug:"/installation/linux",permalink:"/en/docs/installation/linux",draft:!1,unlisted:!1,editUrl:"https://github.com/evcc-io/docs/tree/main/i18n/en/docusaurus-plugin-content-docs/current/installation/linux.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Installing evcc",permalink:"/en/docs/installation/"},next:{title:"macOS",permalink:"/en/docs/installation/macos"}},d={},u=[{value:"Installation Guide",id:"installation-guide",level:2},{value:"Upgrades",id:"upgrades",level:2},{value:"Downgrade",id:"downgrade",level:2},{value:"Managing the Service",id:"managing-the-service",level:2},{value:"Useful Commands",id:"useful-commands",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"linux-debian-ubuntu-raspberry-pi",children:"Linux (Debian, Ubuntu, Raspberry Pi)"}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsxs)(n.p,{children:["This guide is aimed specifically at APT-based distributions. For distributions using other package managers, please install using ",(0,t.jsx)(n.a,{href:"docker",children:"Docker"})," or ",(0,t.jsx)(n.a,{href:"manual",children:"Manual Installation"}),"."]})}),"\n",(0,t.jsx)(n.h2,{id:"installation-guide",children:"Installation Guide"}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:'The "evcc" user is created during installation - please make sure this user doesn\'t already exist!'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Open a terminal"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Install required dependencies:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"sudo apt install -y debian-keyring debian-archive-keyring apt-transport-https curl\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Add the evcc APT repository:"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(a.Z,{groupId:"release-type",children:[(0,t.jsxs)(l.Z,{value:"Release",label:"Release",default:!0,children:[(0,t.jsx)(n.p,{children:"Current stable release"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"curl -1sLf \\\n  'https://dl.cloudsmith.io/public/evcc/stable/setup.deb.sh' \\\n  | sudo -E bash\n"})})]}),(0,t.jsxs)(l.Z,{value:"Nightly",label:"Nightly",children:[(0,t.jsx)(n.p,{children:"Development release. Updated daily. May be unstable."}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"curl -1sLf \\\n  'https://dl.cloudsmith.io/public/evcc/unstable/setup.deb.sh' \\\n  | sudo -E bash\n"})})]})]}),"\n",(0,t.jsxs)(n.admonition,{type:"note",children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://cloudsmith.com",children:(0,t.jsx)(n.img,{src:"https://img.shields.io/badge/OSS%20hosting%20by-cloudsmith-blue?logo=cloudsmith&style=flat-square",alt:"Hosted By: Cloudsmith"})})}),(0,t.jsxs)(n.p,{children:["We would like to thank ",(0,t.jsx)(n.a,{href:"https://cloudsmith.com",children:"Cloudsmith"})," for hosting the repository!\nCloudsmith provides services to support the development of free software and platforms."]})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Update the package list:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"sudo apt update\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Install evcc:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"sudo apt install -y evcc\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Start the evcc server:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"sudo systemctl start evcc\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Now check the installation by opening a browser to ",(0,t.jsx)(n.code,{children:"http://localhost:7070"}),". You should see the evcc web interface in demo mode."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Stop the server:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"sudo systemctl stop evcc\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"You can now start the configuration wizard - simply follow the prompts in your terminal!"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"evcc configure\n"})}),"\n",(0,t.jsx)(n.p,{children:"Once all devices are configured, you can continue on."}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["The Configuration wizard is not available under the Home Assistant environment.\nYou may find it easier to install evcc on another Windows or Linux system, use ",(0,t.jsx)(n.code,{children:"evcc configure"})," there, and then copy the generated ",(0,t.jsx)(n.em,{children:"evcc.yaml"})," to the desired system."]})}),"\n",(0,t.jsxs)(n.admonition,{type:"note",children:[(0,t.jsx)(n.p,{children:"Advanced users (those with evcc experience & some technical know-how) might want to use the advanced configurator:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"evcc configure --advanced\n"})}),(0,t.jsx)(n.p,{children:"This mode offers some further, more technically-involved options."})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Test to make sure your new configuration works:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"evcc -c evcc.yaml\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Open a browser and head to ",(0,t.jsx)(n.code,{children:"http://localhost:7070"}),": the evcc interface should now show your own devices."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["If everything's working, press ",(0,t.jsx)(n.code,{children:"CTRL+C"})," to stop the server."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Move the generated configuration to its home:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"sudo mv evcc.yaml /etc\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Start evcc:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"sudo systemctl start evcc\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Go back to your browser and refresh to make sure everything's working as it should be!"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"upgrades",children:"Upgrades"}),"\n",(0,t.jsx)(n.p,{children:"To update to the latest version of evcc, follow this guide:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Open a terminal"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Update the package list:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"sudo apt update\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Upgrade evcc:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"sudo apt --only-upgrade install -y evcc\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"downgrade",children:"Downgrade"}),"\n",(0,t.jsx)(n.p,{children:"If you need to go backwards for any reason, you can do so with this command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"  sudo apt install evcc=x.xxx.x # Version Number\n"})}),"\n",(0,t.jsx)(n.h2,{id:"managing-the-service",children:"Managing the Service"}),"\n",(0,t.jsx)(n.p,{children:"evcc runs as a background system service. Here's some useful commands to control it:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"sudo systemctl status evcc # shows status\nsudo systemctl start evcc # start the service, if it isn't already running\nsudo systemctl stop evcc # stops the service\nsudo systemctl restart evcc # restart the service\nsudo systemctl enable evcc # sets the service to run at boot\nsudo systemctl disable evcc # stops the service running at boot\n"})}),"\n",(0,t.jsx)(n.h2,{id:"useful-commands",children:"Useful Commands"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Show the service status:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"sudo systemctl status evcc\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Show all log entries since yesterday:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:'sudo journalctl -u evcc --since "yesterday"\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Validate the meter configuration:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"sudo evcc -l debug meter\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Validate the charger configuration:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"sudo evcc -l debug charger\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Validate the vehicle configuration:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"sudo evcc -l debug vehicle\n"})}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},5162:(e,n,s)=>{s.d(n,{Z:()=>l});s(7294);var t=s(512);const r={tabItem:"tabItem_Ymn6"};var a=s(5893);function l(e){let{children:n,hidden:s,className:l}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,t.Z)(r.tabItem,l),hidden:s,children:n})}},4866:(e,n,s)=>{s.d(n,{Z:()=>w});var t=s(7294),r=s(512),a=s(2466),l=s(6550),i=s(469),c=s(1980),o=s(7392),d=s(12);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:s}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:s,attributes:t,default:r}}=e;return{value:n,label:s,attributes:t,default:r}}))}(s);return function(e){const n=(0,o.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function p(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:s}=e;const r=(0,l.k6)(),a=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,c._X)(a),(0,t.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(r.location.search);n.set(a,e),r.replace({...r.location,search:n.toString()})}),[a,r])]}function x(e){const{defaultValue:n,queryString:s=!1,groupId:r}=e,a=h(e),[l,c]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=s.find((e=>e.default))??s[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:a}))),[o,u]=m({queryString:s,groupId:r}),[x,g]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,a]=(0,d.Nk)(s);return[r,(0,t.useCallback)((e=>{s&&a.set(e)}),[s,a])]}({groupId:r}),j=(()=>{const e=o??x;return p({value:e,tabValues:a})?e:null})();(0,i.Z)((()=>{j&&c(j)}),[j]);return{selectedValue:l,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),g(e)}),[u,g,a]),tabValues:a}}var g=s(2389);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=s(5893);function b(e){let{className:n,block:s,selectedValue:t,selectValue:l,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,a.o5)(),d=e=>{const n=e.currentTarget,s=c.indexOf(n),r=i[s].value;r!==t&&(o(n),l(r))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const s=c.indexOf(e.currentTarget)+1;n=c[s]??c[0];break}case"ArrowLeft":{const s=c.indexOf(e.currentTarget)-1;n=c[s]??c[c.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":s},n),children:i.map((e=>{let{value:n,label:s,attributes:a}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>c.push(e),onKeyDown:u,onClick:d,...a,className:(0,r.Z)("tabs__item",j.tabItem,a?.className,{"tabs__item--active":t===n}),children:s??n},n)}))})}function f(e){let{lazy:n,children:s,selectedValue:r}=e;const a=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===r));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function y(e){const n=x(e);return(0,v.jsxs)("div",{className:(0,r.Z)("tabs-container",j.tabList),children:[(0,v.jsx)(b,{...e,...n}),(0,v.jsx)(f,{...e,...n})]})}function w(e){const n=(0,g.Z)();return(0,v.jsx)(y,{...e,children:u(e.children)},String(n))}},1151:(e,n,s)=>{s.d(n,{Z:()=>i,a:()=>l});var t=s(7294);const r={},a=t.createContext(r);function l(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);