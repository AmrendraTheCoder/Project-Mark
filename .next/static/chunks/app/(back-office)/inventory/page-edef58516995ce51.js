(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[315],{5754:(e,t,s)=>{Promise.resolve().then(s.bind(s,3987))},3987:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>i});var a=s(5155),r=s(2115);let i=function(){let[e,t]=(0,r.useState)([]),[s,i]=(0,r.useState)(null),[l,n]=(0,r.useState)(!0);return(0,r.useEffect)(()=>{(async()=>{try{n(!0);let e=await fetch("/api/inventory");if(!e.ok)throw Error("Failed to fetch inventory data");let s=await e.json();t(s)}catch(e){i(e.message)}finally{n(!1)}})()},[]),(0,a.jsxs)("div",{className:"container mx-auto p-6",children:[(0,a.jsx)("h1",{className:"text-2xl font-bold mb-4",children:"Inventory Page"}),l&&(0,a.jsx)("p",{className:"text-gray-500",children:"Loading inventory..."}),s&&(0,a.jsxs)("p",{className:"text-red-500",children:["Error loading inventory: ",s]}),!l&&!s&&(0,a.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",children:e.length>0?e.map(e=>(0,a.jsxs)("div",{className:"p-4 border rounded shadow-sm bg-white",children:[(0,a.jsx)("h2",{className:"text-lg font-semibold",children:e.name}),(0,a.jsxs)("p",{className:"text-sm text-gray-700",children:["Quantity: ",e.quantity]}),(0,a.jsxs)("p",{className:"text-sm text-gray-700",children:["Price: $",e.price.toFixed(2)]})]},e.id)):(0,a.jsx)("p",{className:"text-gray-500",children:"No inventory items available."})})]})}}},e=>{var t=t=>e(e.s=t);e.O(0,[441,898,358],()=>t(5754)),_N_E=e.O()}]);