"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[287],{287:function(t,e,r){r.r(e),r.d(e,{default:function(){return x}});var n,a,c,o,u=r(861),i=r(885),s=r(757),p=r.n(s),l=r(112),v=r(791),h=r(689),f=r(168),d=r(444),w=d.ZP.h3(n||(n=(0,f.Z)(["\n  text-align: center;\n"]))),g=d.ZP.div(a||(a=(0,f.Z)(["\n  padding-left: 20px;\n"]))),m=d.ZP.h2(c||(c=(0,f.Z)(["\n  padding-bottom: 10px;\n"]))),k=d.ZP.p(o||(o=(0,f.Z)(["\n  padding-bottom: 25px;\n"]))),Z=r(184),x=function(){var t=(0,v.useState)(null),e=(0,i.Z)(t,2),r=e[0],n=e[1],a=(0,v.useState)(null),c=(0,i.Z)(a,2),o=c[0],s=c[1],f=(0,h.UO)().id;(0,v.useEffect)((function(){var t=new AbortController;return d(f),function(){t.abort()}}),[f]);var d=function(){var t=(0,u.Z)(p().mark((function t(e,r){var a;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.Z.fetchReviews(e,r);case 3:a=t.sent,n(a),s(null),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),s(t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e,r){return t.apply(this,arguments)}}();return r&&r.length>0?(0,Z.jsxs)(g,{children:[o&&(0,Z.jsx)(w,{children:o}),r.map((function(t){var e=t.id,r=t.author,n=t.content;return(0,Z.jsxs)("div",{children:[(0,Z.jsxs)(m,{children:["Author: ",r]}),(0,Z.jsx)(k,{children:n})]},e)}))]}):"We don't have any reviews for this movie."}},112:function(t,e,r){var n=r(861),a=r(757),c=r.n(a),o=r(44),u="https://api.themoviedb.org/3",i="99c2fb450b803b86448378b118c18b64",s="https://image.tmdb.org/t/p",p="w342",l=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="".concat(u,"/trending/movie/day?api_key=").concat(i),t.prev=1,t.next=4,o.ZP.get(r,{signal:e});case 4:return n=t.sent,t.abrupt("return",n.data.results.map((function(t){var e=t.id,r=t.title,n=t.poster_path;return{id:e,title:r,posterURL:n?"".concat(s,"/").concat(p).concat(n):null}})));case 8:throw t.prev=8,t.t0=t.catch(1),new Error("Backend error");case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=(0,n.Z)(c().mark((function t(e,r){var n,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="".concat(u,"/search/movie?api_key=").concat(i,"&query=").concat(e,"&include_adult=true"),t.prev=1,t.next=4,o.ZP.get(n,{signal:r});case 4:return a=t.sent,t.abrupt("return",a.data.results.map((function(t){var e=t.id,r=t.title,n=t.poster_path;return{id:e,title:r,posterURL:n?"".concat(s,"/").concat(p).concat(n):null}})));case 8:throw t.prev=8,t.t0=t.catch(1),new Error("Backend error");case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e,r){return t.apply(this,arguments)}}(),h=function(){var t=(0,n.Z)(c().mark((function t(e,r){var n,a,l,v,h,f,d,w;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="".concat(u,"/movie/").concat(e,"?api_key=").concat(i,"&language=en-US"),t.prev=1,t.next=4,o.ZP.get(n,{signal:r});case 4:return a=t.sent,l=a.data,v=l.poster_path,h=l.original_title,f=l.vote_average,d=l.overview,w=l.genres,t.abrupt("return",{posterURL:v?"".concat(s,"/").concat(p).concat(v):null,title:h,userScore:10*f,overview:d,genres:w});case 9:throw t.prev=9,t.t0=t.catch(1),new Error("Backend error");case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e,r){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(c().mark((function t(e,r){var n,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="".concat(u,"/movie/").concat(e,"/credits?api_key=").concat(i,"&language=en-US"),t.prev=1,t.next=4,o.ZP.get(n,{signal:r});case 4:return a=t.sent,t.abrupt("return",a.data.cast.map((function(t){var e=t.id,r=t.name,n=t.character,a=t.profile_path;return{id:e,name:r,character:n,profileURL:a?"".concat(s,"/").concat("w154").concat(a):null}})));case 8:throw t.prev=8,t.t0=t.catch(1),new Error("Backend error");case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e,r){return t.apply(this,arguments)}}(),d=function(){var t=(0,n.Z)(c().mark((function t(e,r){var n,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="".concat(u,"/movie/").concat(e,"/reviews?api_key=").concat(i,"&language=en-US"),t.prev=1,t.next=4,o.ZP.get(n,{signal:r});case 4:return a=t.sent,t.abrupt("return",a.data.results.map((function(t){return{id:t.id,author:t.author,content:t.content}})));case 8:throw t.prev=8,t.t0=t.catch(1),new Error("Backend error");case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e,r){return t.apply(this,arguments)}}(),w={fetchTrending:l,fetchMovies:v,fetchDetails:h,fetchCast:f,fetchReviews:d};e.Z=w}}]);
//# sourceMappingURL=287.2c7ba273.chunk.js.map