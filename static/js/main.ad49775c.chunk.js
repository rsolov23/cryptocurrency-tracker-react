(this.webpackJsonpundefined=this.webpackJsonpundefined||[]).push([[0],{120:function(e,t,n){},179:function(e,t,n){},204:function(e,t){},223:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(10),i=n.n(c),s=(n(120),n(253)),o=n(257),l=n(259),d=n(23),u=n.n(d),j=n(29),b=n(15),p=n(30),h=n.n(p),f=n(97),g=n.n(f),m=n(41),O=function(e){return"https://api.coingecko.com/api/v3/coins/markets?vs_currency=".concat(e,"&order=market_cap_desc&per_page=100&page=1&sparkline=false")},x=function(e){return"https://api.coingecko.com/api/v3/coins/".concat(e)},v=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:365,n=arguments.length>2?arguments[2]:void 0;return"https://api.coingecko.com/api/v3/coins/".concat(e,"/market_chart?vs_currency=").concat(n,"&days=").concat(t)},y=function(e){return"https://api.coingecko.com/api/v3/coins/markets?vs_currency=".concat(e,"&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h")},k=n(3),C=Object(a.createContext)(),w=function(e){var t=e.children,n=Object(a.useState)("USD"),r=Object(b.a)(n,2),c=r[0],i=r[1],s=Object(a.useState)("$"),o=Object(b.a)(s,2),l=o[0],d=o[1];return Object(a.useEffect)((function(){"INR"===c?d("\u20b9"):"USD"===c&&d("$")}),[c]),Object(k.jsx)(C.Provider,{value:{currency:c,symbol:l,setCurrency:i},children:t})},_=function(){return Object(a.useContext)(C)},D=n(273),F=n(106),A=n(256),M=n(275),S=n(262),N=n(224),I=n(263),T=n(264),B=n(265),E=n(266),P=n(267),R=n(268),W=n(12);function L(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}function H(){var e,t=Object(a.useState)([]),n=Object(b.a)(t,2),r=n[0],c=n[1],i=Object(a.useState)(!1),d=Object(b.a)(i,2),p=d[0],f=d[1],g=Object(a.useState)(""),m=Object(b.a)(g,2),x=m[0],v=m[1],y=Object(a.useState)(1),C=Object(b.a)(y,2),w=C[0],H=C[1],z=_(),U=z.currency,J=z.symbol,$=Object(s.a)({row:{backgroundColor:"#16171a",cursor:"pointer","&:hover":{backgroundColor:"#131111"},fontFamily:"'Montserrat Alternates', sans-serif"},pagination:{"& .MuiPaginationItem-root":{color:"#D4AF37"}}})(),G=Object(W.e)(),Y=Object(F.a)({palette:{primary:{main:"#fff"},type:"dark"}}),q=function(){var e=Object(j.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f(!0),e.next=3,h.a.get(O(U));case 3:t=e.sent,n=t.data,console.log(n),c(n),f(!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){q()}),[U]);var K=function(){return r.filter((function(e){return e.name.toLowerCase().includes(x)||e.symbol.toLowerCase().includes(x)}))};return Object(k.jsx)(A.a,{theme:Y,children:Object(k.jsxs)(o.a,{style:{textAlign:"center"},children:[Object(k.jsx)(l.a,{variant:"h4",style:{margin:18,fontFamily:"'Montserrat Alternates', sans-serif"},children:"Cryptocurrency Prices by Market Cap"}),Object(k.jsx)(M.a,{label:"Search For a Crypto Currency..",variant:"outlined",style:{marginBottom:20,width:"100%"},onChange:function(e){return v(e.target.value)}}),Object(k.jsx)(S.a,{component:N.a,children:p?Object(k.jsx)(I.a,{style:{backgroundColor:"#D4AF37"}}):Object(k.jsxs)(T.a,{"aria-label":"simple table",children:[Object(k.jsx)(B.a,{style:{backgroundColor:"#EEBC1D"},children:Object(k.jsx)(E.a,{children:["Coin","Price","24h Change","Market Cap"].map((function(e){return Object(k.jsx)(P.a,{style:{color:"black",fontWeight:"700",fontFamily:"'Montserrat Alternates', sans-serif"},align:"Coin"===e?"":"right",children:e},e)}))})}),Object(k.jsx)(R.a,{children:K().slice(10*(w-1),10*(w-1)+10).map((function(e){var t=e.price_change_percentage_24h>0;return Object(k.jsxs)(E.a,{onClick:function(){return G.push("/coins/".concat(e.id))},className:$.row,children:[Object(k.jsxs)(P.a,{component:"th",scope:"row",style:{display:"flex",gap:15},children:[Object(k.jsx)("img",{src:null===e||void 0===e?void 0:e.image,alt:e.name,height:"50",style:{marginBottom:10}}),Object(k.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(k.jsx)("span",{style:{textTransform:"uppercase",fontSize:22},children:e.symbol}),Object(k.jsx)("span",{style:{color:"darkgrey"},children:e.name})]})]}),Object(k.jsxs)(P.a,{align:"right",children:[J," ",L(e.current_price.toFixed(2))]}),Object(k.jsxs)(P.a,{align:"right",style:{color:t>0?"rgb(14, 203, 129)":"red",fontWeight:500},children:[t&&"+",e.price_change_percentage_24h.toFixed(2),"%"]}),Object(k.jsxs)(P.a,{align:"right",children:[J," ",L(e.market_cap.toString().slice(0,-6)),"M"]})]},e.name)}))})]})}),Object(k.jsx)(D.a,{count:((null===(e=K())||void 0===e?void 0:e.length)/10).toFixed(0),style:{padding:20,width:"100%",display:"flex",justifyContent:"center"},classes:{ul:$.pagination},onChange:function(e,t){H(t),window.scroll(0,450)}})]})})}var z=function(){var e=Object(a.useState)([]),t=Object(b.a)(e,2),n=t[0],r=t[1],c=_(),i=c.currency,o=c.symbol,l=function(){var e=Object(j.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get(y(i));case 2:t=e.sent,n=t.data,console.log(n),r(n);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){l()}),[i]);var d=Object(s.a)((function(e){return{carousel:{height:"50%",display:"flex",alignItems:"center"},carouselItem:{display:"flex",flexDirection:"column",alignItems:"center",cursor:"pointer",textTransform:"uppercase",color:"white"}}}))(),p=n.map((function(e){var t,n=(null===e||void 0===e?void 0:e.price_change_percentage_24h)>=0;return Object(k.jsxs)(m.b,{className:d.carouselItem,to:"/coins/".concat(e.id),children:[Object(k.jsx)("img",{src:null===e||void 0===e?void 0:e.image,alt:e.name,height:"80",style:{marginBottom:10}}),Object(k.jsxs)("span",{children:[null===e||void 0===e?void 0:e.symbol,"\xa0",Object(k.jsxs)("span",{style:{color:n>0?"rgb(14, 203, 129)":"red",fontWeight:500},children:[n&&"+",null===e||void 0===e||null===(t=e.price_change_percentage_24h)||void 0===t?void 0:t.toFixed(2),"%"]})]}),Object(k.jsxs)("span",{style:{fontSize:22,fontWeight:500},children:[o," ",L(null===e||void 0===e?void 0:e.current_price.toFixed(2))]})]})}));return Object(k.jsx)("div",{className:d.carousel,children:Object(k.jsx)(g.a,{mouseTracking:!0,infinite:!0,autoPlayInterval:1e3,animationDuration:1500,disableDotsControls:!0,disableButtonsControls:!0,responsive:{0:{items:2},512:{items:4}},items:p,autoPlay:!0})})},U=Object(s.a)((function(e){return{banner:{backgroundImage:"url(./banner.png)"},bannerContent:{height:400,display:"flex",flexDirection:"column",paddingTop:25,justifyContent:"space-around"},tagline:{display:"flex",height:"40%",flexDirection:"column",justifyContent:"center",textAlign:"center"},carousel:{height:"50%",display:"flex",alignItems:"center"}}}));var J=function(){var e=U();return Object(k.jsx)("div",{className:e.banner,children:Object(k.jsxs)(o.a,{className:e.bannerContent,children:[Object(k.jsxs)("div",{className:e.tagline,children:[Object(k.jsx)(l.a,{variant:"h2",style:{fontWeight:"bold",marginBottom:15,fontFamily:"'Montserrat Alternates', sans-serif"},children:"Crypto Tracker"}),Object(k.jsx)(l.a,{variant:"subtitle2",style:{color:"darkgrey",textTransform:"capitalize",fontFamily:"'Montserrat Alternates', sans-serif"},children:"Get all of the current information regarding your favorite Crypto Currency"})]}),Object(k.jsx)(z,{})]})})},$=function(){return Object(k.jsxs)("div",{children:[Object(k.jsx)(J,{}),Object(k.jsx)(H,{})]})},G=(n(179),n(9)),Y=n(105),q=n(269),K=function(e){var t=e.children,n=e.selected,a=e.onClick,r=Object(s.a)({selectbutton:{border:"1px solid #D4AF37",borderRadius:5,padding:10,paddingLeft:20,paddingRight:20,fontFamily:"'Montserrat Alternates', sans-serif",cursor:"pointer",backgroundColor:n?"#D4AF37":"",color:n?"#000000":"",fontWeight:n?700:500,"&:hover":{backgroundColor:"#D4AF37",color:"#000000"},width:"22%"}})();return Object(k.jsx)("span",{onClick:a,className:r.selectbutton,children:t})},Q=[{label:"24 Hours",value:1},{label:"30 Days",value:30},{label:"3 Months",value:90},{label:"1 Year",value:365}],V=function(e){var t=e.coin,n=Object(a.useState)(),r=Object(b.a)(n,2),c=r[0],i=r[1],o=Object(a.useState)(1),l=Object(b.a)(o,2),d=l[0],p=l[1],f=_().currency,g=Object(s.a)((function(e){return{container:Object(G.a)({width:"75%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",marginTop:25,padding:40},e.breakpoints.down("md"),{width:"100%",marginTop:0,padding:20,paddingTop:0})}}))(),m=function(){var e=Object(j.a)(u.a.mark((function e(){var n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get(v(t.id,d,f));case 2:n=e.sent,a=n.data,i(a.prices);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();console.log(t),Object(a.useEffect)((function(){m()}),[d]);var O=Object(F.a)({palette:{primary:{main:"#fff"},type:"dark"}});return Object(k.jsx)(A.a,{theme:O,children:Object(k.jsx)("div",{className:g.container,children:c?Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(Y.a,{data:{labels:c.map((function(e){var t=new Date(e[0]),n=t.getHours()>12?"".concat(t.getHours()-12,":").concat(t.getMinutes()," PM"):"".concat(t.getHours(),":").concat(t.getMinutes()," AM");return 1===d?n:t.toLocaleDateString()})),datasets:[{data:c.map((function(e){return e[1]})),label:"Price ( Past ".concat(d," Days ) in ").concat(f),borderColor:"#EEBC1D"}]},options:{elements:{point:{radius:1}}}}),Object(k.jsx)("div",{style:{display:"flex",marginTop:20,justifyContent:"space-around",width:"100%"},children:Q.map((function(e){return Object(k.jsx)(K,{onClick:function(){return p(e.value)},selected:e.value===d,children:e.label},e.value)}))})]}):Object(k.jsx)(q.a,{style:{color:"#D4AF37"},size:250,thickness:1})})})},X=n(104),Z=n.n(X),ee=function(){var e=Object(W.f)().id,t=Object(a.useState)(),n=Object(b.a)(t,2),r=n[0],c=n[1],i=_(),o=i.currency,d=i.symbol,p=function(){var t=Object(j.a)(u.a.mark((function t(){var n,a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.get(x(e));case 2:n=t.sent,a=n.data,c(a);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();Object(a.useEffect)((function(){p()}),[]);var f=Object(s.a)((function(e){var t,n;return{container:Object(G.a)({display:"flex"},e.breakpoints.down("md"),{flexDirection:"column",alignItems:"center"}),sidebar:(t={width:"30%"},Object(G.a)(t,e.breakpoints.down("md"),{width:"100%"}),Object(G.a)(t,"display","flex"),Object(G.a)(t,"flexDirection","column"),Object(G.a)(t,"alignItems","center"),Object(G.a)(t,"marginTop",25),Object(G.a)(t,"borderRight","2px solid grey"),t),heading:{fontWeight:"bold",marginBottom:20,fontFamily:"'Montserrat Alternates', sans-serif"},description:{width:"100%",fontFamily:"'Montserrat Alternates', sans-serif",padding:25,paddingBottom:15,paddingTop:0,textAlign:"justify"},marketData:(n={alignSelf:"start",padding:25,paddingTop:10,width:"100%"},Object(G.a)(n,e.breakpoints.down("md"),{display:"flex",justifyContent:"space-around"}),Object(G.a)(n,e.breakpoints.down("sm"),{flexDirection:"column",alignItems:"center"}),Object(G.a)(n,e.breakpoints.down("xs"),{alignItems:"start"}),n)}}))();return r?Object(k.jsxs)("div",{className:f.container,children:[Object(k.jsxs)("div",{className:f.sidebar,children:[Object(k.jsx)("img",{src:null===r||void 0===r?void 0:r.image.large,alt:null===r||void 0===r?void 0:r.name,height:"200",style:{marginBottom:20}}),Object(k.jsx)(l.a,{variant:"h3",className:f.heading,children:null===r||void 0===r?void 0:r.name}),Object(k.jsxs)(l.a,{variant:"subtitle1",className:f.description,children:[Z()(null===r||void 0===r?void 0:r.description.en.split(". ")[0]),"."]}),Object(k.jsxs)("div",{className:f.marketData,children:[Object(k.jsxs)("span",{style:{display:"flex"},children:[Object(k.jsx)(l.a,{variant:"h5",className:f.heading,children:"Rank:"}),"\xa0 \xa0",Object(k.jsx)(l.a,{variant:"h5",style:{fontFamily:"'Montserrat Alternates', sans-serif"},children:L(null===r||void 0===r?void 0:r.market_cap_rank)})]}),Object(k.jsxs)("span",{style:{display:"flex"},children:[Object(k.jsx)(l.a,{variant:"h5",className:f.heading,children:"Current Price:"}),"\xa0 \xa0",Object(k.jsxs)(l.a,{variant:"h5",style:{fontFamily:"'Montserrat Alternates', sans-serif"},children:[d," ",L(null===r||void 0===r?void 0:r.market_data.current_price[o.toLowerCase()])]})]}),Object(k.jsxs)("span",{style:{display:"flex"},children:[Object(k.jsx)(l.a,{variant:"h5",className:f.heading,children:"Market Cap:"}),"\xa0 \xa0",Object(k.jsxs)(l.a,{variant:"h5",style:{fontFamily:"'Montserrat Alternates', sans-serif"},children:[d," ",L(null===r||void 0===r?void 0:r.market_data.market_cap[o.toLowerCase()].toString().slice(0,-6)),"M"]})]})]})]}),Object(k.jsx)(V,{coin:r})]}):Object(k.jsx)(I.a,{style:{backgroundColor:"#D4AF37"}})},te=n(270),ne=n(271),ae=n(272),re=n(277),ce=Object(s.a)((function(e){return{title:{flex:1,color:"#D4AF37",fontFamily:"'Montserrat Alternates', sans-serif",fontWeight:"bold",cursor:"pointer"}}})),ie=Object(F.a)({palette:{primary:{main:"#fff"},type:"dark"}});var se=function(){var e=ce(),t=Object(W.e)(),n=_(),a=n.currency,r=n.setCurrency;return console.log(a),Object(k.jsx)(A.a,{theme:ie,children:Object(k.jsx)(te.a,{color:"transparent",position:"static",children:Object(k.jsx)(o.a,{children:Object(k.jsxs)(ne.a,{children:[Object(k.jsx)(l.a,{onClick:function(){return t.push("/")},variant:"h6",className:e.title,children:"Crypto Tracker"}),Object(k.jsxs)(ae.a,{variant:"outlined",style:{width:100,height:40,marginRight:15},value:a,onChange:function(e){return r(e.target.value)},children:[Object(k.jsx)(re.a,{value:"USD",children:"USD"}),Object(k.jsx)(re.a,{value:"INR",children:"INR"})]})]})})})})},oe=Object(s.a)((function(){return{App:{backgroundColor:"#14161a",color:"white",minHeight:"100vh"}}}));var le=function(){var e=oe();return Object(k.jsx)(m.a,{children:Object(k.jsxs)("div",{className:e.App,children:[Object(k.jsx)(se,{}),Object(k.jsx)(W.a,{path:"/",component:$,exact:!0}),Object(k.jsx)(W.a,{path:"/coins/:id",component:ee,exact:!0})]})})};n(222);i.a.render(Object(k.jsx)(r.a.StrictMode,{children:Object(k.jsx)(w,{children:Object(k.jsx)(le,{})})}),document.getElementById("root"))}},[[223,1,2]]]);
//# sourceMappingURL=main.ad49775c.chunk.js.map