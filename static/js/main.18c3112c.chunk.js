(this.webpackJsonpmovie_app=this.webpackJsonpmovie_app||[]).push([[0],{19:function(e,a,t){e.exports=t(44)},42:function(e,a,t){},43:function(e,a,t){},44:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),r=t(12),i=t.n(r),c=t(2),o=t.n(c),m=t(13),l=t(14),u=t(17),v=t(15),p=t(18),d=t(16),_=t.n(d);t(42);var g=function(e){var a=e.year,t=e.title,n=e.summary,r=e.poster,i=e.genres;return s.a.createElement("div",{className:"movie"},s.a.createElement("img",{src:r,alt:t,title:t}),s.a.createElement("div",{className:"movie___data"},s.a.createElement("h4",{className:"movie__title"},t),s.a.createElement("h5",{className:"movie__year"},a),s.a.createElement("ul",{className:"movie__genres"},"undefined"!==typeof i?i.map((function(e,a){return s.a.createElement("li",{className:"genres__genre",key:a},e)})):s.a.createElement("li",{className:"genres__genre"},"no genres")),s.a.createElement("p",{className:"movie__summary"},n.slice(0,180)," ... ")))},y=(t(43),function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(t=Object(u.a)(this,(e=Object(v.a)(a)).call.apply(e,[this].concat(s)))).state={isLoading:!0,movies:[]},t.getMovies=function(){var e,a;return o.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.a.awrap(_.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating"));case 2:e=n.sent,a=e.data.data.movies,t.setState({movies:a,isLoading:!1});case 5:case"end":return n.stop()}}))},t}return Object(p.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,a=e.isLoading,t=e.movies;return s.a.createElement("section",{className:"container"},a?s.a.createElement("div",{className:"loader"},s.a.createElement("span",{className:"loader__text"},"Loading ...")):s.a.createElement("div",{className:"movies"},t.map((function(e){return s.a.createElement(g,{key:e.id,id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres})}))))}}]),a}(s.a.Component));i.a.render(s.a.createElement(y,null),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.18c3112c.chunk.js.map