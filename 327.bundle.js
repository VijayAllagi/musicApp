"use strict";(self.webpackChunkmusic_library=self.webpackChunkmusic_library||[]).push([[327],{338:(e,r,t)=>{var o=t(486);r.createRoot=o.createRoot,r.hydrateRoot=o.hydrateRoot},327:(e,r,t)=>{var o=t(848),l=t(338),n=t(844),s=t(119),a=(t(853),function(e,r){var t="function"==typeof Symbol&&e[Symbol.iterator];if(!t)return e;var o,l,n=t.call(e),s=[];try{for(;(void 0===r||r-- >0)&&!(o=n.next()).done;)s.push(o.value)}catch(e){l={error:e}}finally{try{o&&!o.done&&(t=n.return)&&t.call(n)}finally{if(l)throw l.error}}return s});const i=function(){var e=a((0,n.useState)(""),2),r=e[0],t=e[1],l=a((0,n.useState)(""),2),i=l[0],u=l[1],c=a((0,n.useState)(""),2),d=c[0],h=c[1],m=s.d.filter((function(e){return e.title.toLowerCase().includes(r.toLowerCase())||e.artist.toLowerCase().includes(r.toLowerCase())||e.album.toLowerCase().includes(r.toLowerCase())})),p=i?m.reduce((function(e,r){var t=r[i];return e[t]=e[t]||[],e[t].push(r),e}),{}):{All:m},x=Object.entries(p).map((function(e){var r=a(e,2),t=r[0],o=r[1];return{group:t,songs:d?o.sort((function(e,r){return e[d].localeCompare(r[d])})):o}}));return(0,o.jsxs)("div",{className:"p-6 bg-gray-100 min-h-screen",children:[(0,o.jsx)("h1",{className:"text-2xl font-bold mb-4",children:"Music Library"}),(0,o.jsx)("input",{type:"text",placeholder:"Search by title, artist, or album...",className:"border border-gray-300 rounded-md px-4 py-2 mb-6 w-full focus:outline-none focus:ring-2 focus:ring-blue-500",value:r,onChange:function(e){return t(e.target.value)}}),(0,o.jsxs)("div",{className:"flex gap-4 mb-4",children:[(0,o.jsx)("label",{htmlFor:"groupBy",className:"sr-only",children:"Group By"}),(0,o.jsxs)("select",{id:"groupBy",className:"border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500",value:i,onChange:function(e){return u(e.target.value)},children:[(0,o.jsx)("option",{value:"",children:"Group By"}),(0,o.jsx)("option",{value:"album",children:"Album"}),(0,o.jsx)("option",{value:"artist",children:"Artist"}),(0,o.jsx)("option",{value:"title",children:"Title"})]}),(0,o.jsx)("label",{htmlFor:"sortBy",className:"sr-only",children:"Sort By"}),(0,o.jsxs)("select",{id:"sortBy",className:"border px-2 py-1",value:d,onChange:function(e){return h(e.target.value)},children:[(0,o.jsx)("option",{value:"",children:"Sort By"}),(0,o.jsx)("option",{value:"album",children:"Album"}),(0,o.jsx)("option",{value:"artist",children:"Artist"}),(0,o.jsx)("option",{value:"title",children:"Title"})]})]}),x.map((function(e){var r=e.group,t=e.songs;return(0,o.jsxs)("div",{className:"mb-6",children:[(0,o.jsx)("h2",{className:"text-xl font-semibold mb-2",children:r}),(0,o.jsx)("ul",{className:"list-disc pl-6",children:t.map((function(e){return(0,o.jsxs)("li",{children:[e.title," - ",e.artist," (",e.album,")"]},e.id)}))})]},r)}))]})};var u=t(704);l.createRoot(document.getElementById("root")).render((0,o.jsx)(u.BrowserRouter,{children:(0,o.jsx)((function(){return(0,o.jsxs)("div",{children:[(0,o.jsx)("h2",{children:"Music Library"}),(0,o.jsx)(i,{})]})}),{})}))}}]);