"use strict";(self.webpackChunkevcc_docs=self.webpackChunkevcc_docs||[]).push([[5161],{4144:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>p,frontMatter:()=>c,metadata:()=>d,toc:()=>u});var i=s(5893),r=s(1151),t=s(4866),l=s(5162);const c={sidebar_position:2},a="Debian, Ubuntu, Raspberry Pi",d={id:"installation/linux",title:"Debian, Ubuntu, Raspberry Pi",description:"Erstinstallation",source:"@site/docs/installation/linux.mdx",sourceDirName:"installation",slug:"/installation/linux",permalink:"/docs/installation/linux",draft:!1,unlisted:!1,editUrl:"https://github.com/evcc-io/docs/tree/main/docs/installation/linux.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Erste Schritte",permalink:"/docs/installation/"},next:{title:"macOS",permalink:"/docs/installation/macos"}},o={},u=[{value:"Erstinstallation",id:"erstinstallation",level:2},{value:"Aktualisierung",id:"aktualisierung",level:2},{value:"Downgrade",id:"downgrade",level:2},{value:"Systemdienst",id:"systemdienst",level:2},{value:"Testen",id:"testen",level:2},{value:"Backup und Restore",id:"backup-und-restore",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"debian-ubuntu-raspberry-pi",children:"Debian, Ubuntu, Raspberry Pi"}),"\n",(0,i.jsx)(n.h2,{id:"erstinstallation",children:"Erstinstallation"}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:'W\xe4hrend der Installation wird ein user "evcc" angelegt, deshalb sollte der angemeldete Nutzer nicht den Namen "evcc" haben.'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\xd6ffne ein Terminal/Eingabeaufforderung"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Installiere die ben\xf6tigten Abh\xe4ngigkeiten:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"sudo apt install -y debian-keyring debian-archive-keyring apt-transport-https curl\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"F\xfcge das evcc APT Repository hinzu:"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.Z,{groupId:"release-type",children:[(0,i.jsxs)(l.Z,{value:"Release",label:"Release",default:!0,children:[(0,i.jsx)(n.p,{children:"Die aktuelle stabile Version"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"curl -1sLf \\\n  'https://dl.cloudsmith.io/public/evcc/stable/setup.deb.sh' \\\n  | sudo -E bash\n"})})]}),(0,i.jsxs)(l.Z,{value:"Nightly",label:"Nightly",children:[(0,i.jsx)(n.p,{children:"Die aktuelle Entwicklerversion. T\xe4glich aktualisiert. Kann instabil sein."}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"curl -1sLf \\\n  'https://dl.cloudsmith.io/public/evcc/unstable/setup.deb.sh' \\\n  | sudo -E bash\n"})})]})]}),"\n",(0,i.jsxs)(n.admonition,{type:"note",children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://cloudsmith.com",children:(0,i.jsx)(n.img,{src:"https://img.shields.io/badge/OSS%20hosting%20by-cloudsmith-blue?logo=cloudsmith&style=flat-square",alt:"Hosted By: Cloudsmith"})})}),(0,i.jsxs)(n.p,{children:["Wir bedanken uns bei ",(0,i.jsx)(n.a,{href:"https://cloudsmith.com",children:"Cloudsmith"})," f\xfcr das Hosting!\nCloudsmith ist ein Service, welcher die Entwicklung von Software und Dienstleistungen f\xfcr kostenlose und freie Plattformen erm\xf6glicht."]})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Aktualisiere die Paketliste:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"sudo apt update\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Installiere evcc:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"sudo apt install -y evcc\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Starte den evcc-Server:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"sudo systemctl start evcc\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Pr\xfcfe die Installation und \xf6ffne einen Browser und gib die folgende URL ein: ",(0,i.jsx)(n.code,{children:"http://localhost:7070"}),". Die evcc Oberfl\xe4che sollte im Demo Modus zu sehen sein."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Stoppe den evcc-Server:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"sudo systemctl stop evcc\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Starte die Konfiguration und folge den Anweisungen im Terminal Fenster:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"evcc configure\n"})}),"\n",(0,i.jsx)(n.p,{children:"Sofern alle Ger\xe4te korrekt konfiguriert sind, kannst du mit den n\xe4chsten Schritten fortfahren."}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["Unter Homeassist ist ",(0,i.jsx)(n.code,{children:"configure"})," nicht m\xf6glich. Hier bietet es sich an, evcc auf Windows/Mac zu installieren, dort ",(0,i.jsx)(n.code,{children:"evcc configure"})," auszuf\xfchren und die so erstellte evcc.yaml zu kopieren."]})}),"\n",(0,i.jsxs)(n.admonition,{type:"note",children:[(0,i.jsx)(n.p,{children:"Fortgeschrittene Anwender (z.B. mit evcc Erfahrung oder technischem Know-How) k\xf6nnen auch alternativ folgenden Aufruf verwenden:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"evcc configure --advanced\n"})}),(0,i.jsx)(n.p,{children:"Dieser Modus bietet weitere (technisch fortgeschrittene) Einstellm\xf6glichkeiten."})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Teste, ob die Konfiguration funktioniert"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"evcc -c evcc.yaml\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\xd6ffne einen Browser und gib die folgende URL ein: ",(0,i.jsx)(n.code,{children:"http://localhost:7070"}),". Die evcc Oberfl\xe4che sollte nun mit den eigenen Ger\xe4ten zu sehen sein."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Wenn alles funktioniert, beende evcc durch dr\xfccken der Tastenkombination ",(0,i.jsx)(n.code,{children:"CTRL-C"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Verschiebe die erstellte Konfigurationsdatei in den Zielordner:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"sudo mv evcc.yaml /etc\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Starte evcc neu:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"sudo systemctl start evcc\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Gehe zur\xfcck zum Browser und lade die evcc Seite neu. Die Oberfl\xe4che sollte nun mit deinen konfigurierten Ger\xe4ten zu sehen sein."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"aktualisierung",children:"Aktualisierung"}),"\n",(0,i.jsx)(n.p,{children:"Um auf eine neue Version von evcc zu aktualisieren, f\xfchre folgende Schritte durch:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\xd6ffne ein Terminal/Eingabeaufforderung"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Aktualisiere den Paketbestand:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"sudo apt update\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Installiere evcc:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"sudo apt --only-upgrade install -y evcc\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"downgrade",children:"Downgrade"}),"\n",(0,i.jsx)(n.p,{children:"Mit folgendem Befehl kann man auf eine \xe4ltere Version von evcc wechseln:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"  sudo apt install evcc=x.xxx.x # Versionsnummer\n"})}),"\n",(0,i.jsx)(n.h2,{id:"systemdienst",children:"Systemdienst"}),"\n",(0,i.jsx)(n.p,{children:"evcc l\xe4uft als Systemdienst im Hintergrund. Mit folgenden Befehlen kann dieser Dienst gesteuert werden."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"sudo systemctl status evcc # zeigt den Status\nsudo systemctl start evcc # startet den Dienst\nsudo systemctl stop evcc # stoppt den Dienst\nsudo systemctl restart evcc # startet den Dienst neu\nsudo systemctl enable evcc # aktiviert den Dienst\nsudo systemctl disable evcc # deaktiviert den Dienst\n"})}),"\n",(0,i.jsx)(n.h2,{id:"testen",children:"Testen"}),"\n",(0,i.jsx)(n.p,{children:"Pr\xfcfe die Installation"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Zeige den laufenden evcc Service an:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"sudo systemctl status evcc\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Pr\xfcfe die letzten Log-Ausgaben des evcc Services:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:'sudo journalctl -u evcc --since "yesterday"\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Pr\xfcfe die evcc Meter-Konfiguration:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"sudo evcc -l debug meter\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Pr\xfcfe die evcc Charger-Konfiguration:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"sudo evcc -l debug charger\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Pr\xfcfe die evcc Vehicle-Konfiguration:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"sudo evcc -l debug vehicle\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\xd6ffne einen Browser und gib die folgende URL ein: ",(0,i.jsx)(n.code,{children:"http://127.0.0.1:7070"}),"."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["Ersetze ",(0,i.jsx)(n.code,{children:"127.0.0.1"})," mit der IP Adresse oder dem Hostnamen des Computers, falls der Browser nicht auf dem gleichen Computer ge\xf6ffnet wurde."]})}),"\n",(0,i.jsx)(n.h2,{id:"backup-und-restore",children:"Backup und Restore"}),"\n",(0,i.jsxs)(n.p,{children:['Um nach einer Neuinstallation wieder den "Ursprungszustand" herzustellen zu k\xf6nnen, reicht es die Konfigurationsdatei ',(0,i.jsx)(n.code,{children:"evcc.yaml"})," und die Datenbankdatei ",(0,i.jsx)(n.code,{children:"evcc.db"})," zu sichern. Der Speicherort wird im Logfile beim Programmstart angegeben. \xdcblicherweise liegt die Konfiguration im Ordner ",(0,i.jsx)(n.code,{children:"/etc/"})," und die Datenbank im Ordner ",(0,i.jsx)(n.code,{children:"/var/lib/evcc/"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Beide Dateien k\xf6nnen mit dem Linux-Befehl ",(0,i.jsx)(n.code,{children:"cp"})," kopiert werden."]}),"\n",(0,i.jsx)(n.p,{children:"Beispiel (kopieren vom \xfcblichen Speicherort ins Homelaufwerk):"}),"\n",(0,i.jsxs)(n.p,{children:["yaml kopieren: ",(0,i.jsx)(n.code,{children:"sudo cp /etc/evcc.yaml /home/pi/evcc.yaml.bak"})]}),"\n",(0,i.jsxs)(n.p,{children:["db kopieren: ",(0,i.jsx)(n.code,{children:"sudo cp /var/lib/evcc/evcc.db /home/pi/evcc.db.bak"})]})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},5162:(e,n,s)=>{s.d(n,{Z:()=>l});s(7294);var i=s(512);const r={tabItem:"tabItem_Ymn6"};var t=s(5893);function l(e){let{children:n,hidden:s,className:l}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,i.Z)(r.tabItem,l),hidden:s,children:n})}},4866:(e,n,s)=>{s.d(n,{Z:()=>y});var i=s(7294),r=s(512),t=s(2466),l=s(6550),c=s(469),a=s(1980),d=s(7392),o=s(12);function u(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:s}=e;return(0,i.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:s,attributes:i,default:r}}=e;return{value:n,label:s,attributes:i,default:r}}))}(s);return function(e){const n=(0,d.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function p(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:s}=e;const r=(0,l.k6)(),t=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,a._X)(t),(0,i.useCallback)((e=>{if(!t)return;const n=new URLSearchParams(r.location.search);n.set(t,e),r.replace({...r.location,search:n.toString()})}),[t,r])]}function x(e){const{defaultValue:n,queryString:s=!1,groupId:r}=e,t=h(e),[l,a]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=s.find((e=>e.default))??s[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:t}))),[d,u]=m({queryString:s,groupId:r}),[x,g]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,t]=(0,o.Nk)(s);return[r,(0,i.useCallback)((e=>{s&&t.set(e)}),[s,t])]}({groupId:r}),j=(()=>{const e=d??x;return p({value:e,tabValues:t})?e:null})();(0,c.Z)((()=>{j&&a(j)}),[j]);return{selectedValue:l,selectValue:(0,i.useCallback)((e=>{if(!p({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);a(e),u(e),g(e)}),[u,g,t]),tabValues:t}}var g=s(2389);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=s(5893);function b(e){let{className:n,block:s,selectedValue:i,selectValue:l,tabValues:c}=e;const a=[],{blockElementScrollPositionUntilNextRender:d}=(0,t.o5)(),o=e=>{const n=e.currentTarget,s=a.indexOf(n),r=c[s].value;r!==i&&(d(n),l(r))},u=e=>{let n=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const s=a.indexOf(e.currentTarget)+1;n=a[s]??a[0];break}case"ArrowLeft":{const s=a.indexOf(e.currentTarget)-1;n=a[s]??a[a.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":s},n),children:c.map((e=>{let{value:n,label:s,attributes:t}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>a.push(e),onKeyDown:u,onClick:o,...t,className:(0,r.Z)("tabs__item",j.tabItem,t?.className,{"tabs__item--active":i===n}),children:s??n},n)}))})}function v(e){let{lazy:n,children:s,selectedValue:r}=e;const t=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=t.find((e=>e.props.value===r));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:t.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function k(e){const n=x(e);return(0,f.jsxs)("div",{className:(0,r.Z)("tabs-container",j.tabList),children:[(0,f.jsx)(b,{...e,...n}),(0,f.jsx)(v,{...e,...n})]})}function y(e){const n=(0,g.Z)();return(0,f.jsx)(k,{...e,children:u(e.children)},String(n))}},1151:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>l});var i=s(7294);const r={},t=i.createContext(r);function l(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);