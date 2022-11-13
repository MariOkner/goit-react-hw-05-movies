"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[653],{112:function(n,e,t){var r=t(861),a=t(757),c=t.n(a),o=t(44),i="https://api.themoviedb.org/3",s="99c2fb450b803b86448378b118c18b64",u="https://image.tmdb.org/t/p",l="w342",p=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(i,"/trending/movie/day?api_key=").concat(s),n.prev=1,n.next=4,o.ZP.get(t,{signal:e});case 4:return r=n.sent,n.abrupt("return",r.data.results.map((function(n){var e=n.id,t=n.title,r=n.poster_path;return{id:e,title:t,posterURL:r?"".concat(u,"/").concat(l).concat(r):null}})));case 8:throw n.prev=8,n.t0=n.catch(1),new Error("Backend error");case 11:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(e,t){var r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="".concat(i,"/search/movie?api_key=").concat(s,"&query=").concat(e,"&include_adult=true"),n.prev=1,n.next=4,o.ZP.get(r,{signal:t});case 4:return a=n.sent,n.abrupt("return",a.data.results.map((function(n){var e=n.id,t=n.title,r=n.poster_path;return{id:e,title:t,posterURL:r?"".concat(u,"/").concat(l).concat(r):null}})));case 8:throw n.prev=8,n.t0=n.catch(1),new Error("Backend error");case 11:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(e,t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(e,t){var r,a,p,d,f,h,v,x;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="".concat(i,"/movie/").concat(e,"?api_key=").concat(s,"&language=en-US"),n.prev=1,n.next=4,o.ZP.get(r,{signal:t});case 4:return a=n.sent,p=a.data,d=p.poster_path,f=p.original_title,h=p.vote_average,v=p.overview,x=p.genres,n.abrupt("return",{posterURL:d?"".concat(u,"/").concat(l).concat(d):null,title:f,userScore:10*h,overview:v,genres:x});case 9:throw n.prev=9,n.t0=n.catch(1),new Error("Backend error");case 12:case"end":return n.stop()}}),n,null,[[1,9]])})));return function(e,t){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(c().mark((function n(e,t){var r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="".concat(i,"/movie/").concat(e,"/credits?api_key=").concat(s,"&language=en-US"),n.prev=1,n.next=4,o.ZP.get(r,{signal:t});case 4:return a=n.sent,n.abrupt("return",a.data.cast.map((function(n){var e=n.id,t=n.name,r=n.character,a=n.profile_path;return{id:e,name:t,character:r,profileURL:a?"".concat(u,"/").concat("w154").concat(a):null}})));case 8:throw n.prev=8,n.t0=n.catch(1),new Error("Backend error");case 11:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(e,t){return n.apply(this,arguments)}}(),v=function(){var n=(0,r.Z)(c().mark((function n(e,t){var r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="".concat(i,"/movie/").concat(e,"/reviews?api_key=").concat(s,"&language=en-US"),n.prev=1,n.next=4,o.ZP.get(r,{signal:t});case 4:return a=n.sent,n.abrupt("return",a.data.results.map((function(n){return{id:n.id,author:n.author,content:n.content}})));case 8:throw n.prev=8,n.t0=n.catch(1),new Error("Backend error");case 11:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(e,t){return n.apply(this,arguments)}}(),x={fetchTrending:p,fetchMovies:d,fetchDetails:f,fetchCast:h,fetchReviews:v};e.Z=x},653:function(n,e,t){t.r(e),t.d(e,{default:function(){return M}});var r,a,c,o,i,s,u,l,p,d,f,h,v,x=t(861),g=t(885),m=t(757),w=t.n(m),Z=t(112),b=t(791),j=t(689),k=t(168),y=t(444),P=t(128),_=t(731),U=(0,y.ZP)(_.rU)(r||(r=(0,k.Z)(["\n  display: inline-flex;\n  /* align-items: center; */\n  /* gap: 4px; */\n  padding: 8px 20px;\n  color: red;\n  text-decoration: none;\n  font-weight: 500;\n  text-transform: uppercase;\n"]))),S=y.ZP.button(a||(a=(0,k.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  padding: 5px 22px;\n  border-radius: 4px;\n  border-bottom: 3px solid #525252;\n  color: #000000;\n  background-color: #ffd180;\n\n  font-size: 18px;\n  font-weight: 500;\n  align-items: center;\n  text-align: center;\n  /* cursor: pointer; */\n\n  :hover {\n    transition: 0.7s;\n    color: orangered;\n    background-color: #ffffff;\n  }\n"]))),R=(0,y.ZP)(P.jTe)(c||(c=(0,k.Z)(["\n  width: 24px;\n  height: 24px;\n  padding-right: 5px;\n"]))),E=t(184),L=function(n){var e=n.to,t=n.children;return(0,E.jsx)(U,{to:e,children:(0,E.jsxs)(S,{children:[(0,E.jsx)(R,{}),t]})})},B=t(536),C=y.ZP.h3(o||(o=(0,k.Z)(["\n  text-align: center;\n"]))),z=y.ZP.div(i||(i=(0,k.Z)(["\n  display: flex;\n  padding: 20px;\n"]))),O=y.ZP.div(s||(s=(0,k.Z)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  margin-left: 20px;\n"]))),T=y.ZP.h3(u||(u=(0,k.Z)(["\n  font-size: 27px;\n"]))),A=y.ZP.b(l||(l=(0,k.Z)(["\n  font-size: 20px;\n"]))),D=y.ZP.p(p||(p=(0,k.Z)(["\n  margin-bottom: 50px;\n  line-height: 1.5;\n"]))),F=y.ZP.ul(d||(d=(0,k.Z)(["\n  border-top: 2px solid black;\n  border-bottom: 2px solid black;\n  /* text-decoration: none; */\n  /* font-size: 20px; */\n"]))),G=y.ZP.h3(f||(f=(0,k.Z)(["\n  padding: 20px 0;\n"]))),q=y.ZP.li(h||(h=(0,k.Z)(["\n  padding-bottom: 10px;\n"]))),H=(0,y.ZP)(_.OL)(v||(v=(0,k.Z)(["\n  color: #004ff9;\n  text-decoration: none;\n\n  :hover {\n    color: orangered;\n  }\n"]))),M=function(){var n,e,t,r,a,c,o=(0,b.useState)(null),i=(0,g.Z)(o,2),s=i[0],u=i[1],l=(0,b.useState)(null),p=(0,g.Z)(l,2),d=p[0],f=p[1],h=(0,j.UO)().id,v=(0,j.TH)(),m=null!==(n=null===(e=v.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/";(0,b.useEffect)((function(){var n=new AbortController;return k(h,n.signal),function(){n.abort()}}),[h]);var k=function(){var n=(0,x.Z)(w().mark((function n(e,t){var r;return w().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Z.Z.fetchDetails(e,t);case 3:r=n.sent,u(r),f(null),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),f(n.t0.message);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e,t){return n.apply(this,arguments)}}();return(0,E.jsxs)("section",{children:[(0,E.jsx)(L,{to:m,children:"Go back"}),d&&(0,E.jsx)(C,{children:d}),s&&(0,E.jsx)(z,{children:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)("img",{src:s.posterURL||B,alt:""}),(0,E.jsxs)(O,{children:[(0,E.jsx)(T,{children:s.title}),(0,E.jsxs)("p",{children:["UserScore: ",s.userScore.toFixed(2),"%"]}),(0,E.jsx)(A,{children:"Overview"}),(0,E.jsx)(D,{children:s.overview}),(0,E.jsx)(A,{children:"Genres"}),(0,E.jsx)("p",{children:s.genres.map((function(n){return n.name})).join(", ")})]})]})}),(0,E.jsxs)(F,{children:[(0,E.jsx)(G,{children:"Additional information"}),(0,E.jsx)(q,{children:(0,E.jsx)(H,{to:"cast",state:{from:null!==(t=null===(r=v.state)||void 0===r?void 0:r.from)&&void 0!==t?t:"/"},children:"Cast"})}),(0,E.jsx)(q,{children:(0,E.jsx)(H,{to:"reviews",state:{from:null!==(a=null===(c=v.state)||void 0===c?void 0:c.from)&&void 0!==a?a:"/"},children:"Reviews"})})]}),(0,E.jsx)(b.Suspense,{fallback:null,children:(0,E.jsx)(j.j3,{})})]})}},536:function(n,e,t){n.exports=t.p+"static/media/no_poster.e1c9f7d877f5eac85cc7.jpg"}}]);
//# sourceMappingURL=653.c1d7f70f.chunk.js.map