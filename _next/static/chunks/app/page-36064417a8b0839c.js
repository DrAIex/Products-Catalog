(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{9518:function(e,t,n){Promise.resolve().then(n.bind(n,6911))},6911:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return C}});var i=n(3827),s=n(4090),l=n(5195),r=n(3340),a=n(5996),c=n(9835),o=n(6285),u=n(2046),d=n(4272),m=n(2921),x=n(1848),h=n(9186),f=n(6317),j=n(697),p=n(6910),Z=n(2508),v=n(4073),g=n(5078);let y=[{name:"Мужская одежда",value:"men's clothing"},{name:"Женская одежда",value:"women's clothing"},{name:"Ювелирные изделия",value:"jewelery"},{name:"Электроника",value:"electronics"}];function b(e){let{product:t,addItem:n}=e;return(0,i.jsxs)(l.Z,{sx:{height:"100%",display:"flex",flexDirection:"column"},children:[(0,i.jsx)(r.Z,{component:"img",height:"200",image:t.image,alt:t.title,sx:{objectFit:"contain",p:2}}),(0,i.jsxs)(a.Z,{sx:{display:"flex",flexDirection:"column",flexGrow:1},children:[(0,i.jsx)(c.Z,{gutterBottom:!0,variant:"h6",component:"h2",children:t.title}),(0,i.jsxs)(c.Z,{sx:{mb:2},children:[t.price," ₽"]}),(0,i.jsx)(o.Z,{variant:"contained",color:"primary",onClick:()=>n(t),sx:{mt:"auto"},children:"В корзину"})]})]})}function C(){let[e,t]=(0,s.useState)([]),[n,l]=(0,s.useState)(""),[r,a]=(0,s.useState)(""),[c,o]=(0,s.useState)(!0),C=(0,v.Z)(e=>e.addItem);(0,s.useEffect)(()=>{fetch("https://fakestoreapi.com/products").then(e=>e.json()).then(e=>{t(e),o(!1)})},[]);let w=e.filter(e=>{let t=e.title.toLowerCase().includes(n.toLowerCase()),i=!r||e.category===r;return t&&i});return(0,i.jsxs)("main",{children:[(0,i.jsx)(g.Z,{}),(0,i.jsxs)(u.Z,{sx:{py:4},children:[(0,i.jsxs)(d.Z,{sx:{mb:4,display:"flex",flexDirection:{xs:"column",sm:"row"},gap:2},children:[(0,i.jsx)(m.Z,{fullWidth:!0,label:"Поиск",variant:"outlined",value:n,onChange:e=>l(e.target.value)}),(0,i.jsxs)(x.Z,{sx:{minWidth:{xs:"100%",sm:200}},children:[(0,i.jsx)(h.Z,{children:"Категория"}),(0,i.jsxs)(f.Z,{value:r,label:"Категория",onChange:e=>a(e.target.value),children:[(0,i.jsx)(j.Z,{value:"",children:"Все"}),y.map(e=>(0,i.jsx)(j.Z,{value:e.value,children:e.name},e.value))]})]})]}),c?(0,i.jsx)(d.Z,{sx:{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"400px"},children:(0,i.jsx)(p.Z,{})}):(0,i.jsx)(Z.ZP,{container:!0,spacing:4,children:w.map(e=>(0,i.jsx)(Z.ZP,{item:!0,xs:12,sm:6,md:4,children:(0,i.jsx)(s.Suspense,{fallback:(0,i.jsx)(p.Z,{}),children:(0,i.jsx)(b,{product:e,addItem:C})})},e.id))})]})]})}},5078:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var i=n(3827),s=n(278),l=n(6676),r=n(9835),a=n(6285),c=n(3850),o=n(1293),u=n(8792),d=n(4073);function m(){let e=(0,d.Z)(e=>e.items).reduce((e,t)=>e+t.quantity,0);return(0,i.jsx)(s.Z,{position:"static",children:(0,i.jsxs)(l.Z,{children:[(0,i.jsx)(r.Z,{variant:"h6",component:"div",sx:{flexGrow:1},children:"Каталог товаров"}),(0,i.jsx)(a.Z,{color:"inherit",component:u.default,href:"/",children:"Главная"}),(0,i.jsx)(a.Z,{color:"inherit",component:u.default,href:"/cart",children:(0,i.jsx)(c.Z,{badgeContent:e,color:"secondary",children:(0,i.jsx)(o.Z,{})})})]})})}},4073:function(e,t,n){"use strict";let i=(0,n(2020).Ue)((e,t)=>({items:[],addItem:t=>{e(e=>e.items.find(e=>e.id===t.id)?{items:e.items.map(e=>e.id===t.id?{...e,quantity:e.quantity+1}:e)}:{items:[...e.items,{...t,quantity:1}]})},removeItem:t=>{e(e=>({items:e.items.filter(e=>e.id!==t)}))},updateQuantity:(t,n)=>{e(e=>({items:e.items.map(e=>e.id===t?{...e,quantity:n}:e)}))},clearCart:()=>{e({items:[]})},getTotal:()=>parseFloat(t().items.reduce((e,t)=>e+t.price*t.quantity,0).toFixed(2))}));t.Z=i}},function(e){e.O(0,[776,754,572,971,69,744],function(){return e(e.s=9518)}),_N_E=e.O()}]);