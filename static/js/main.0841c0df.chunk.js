(this.webpackJsonpdisney=this.webpackJsonpdisney||[]).push([[0],{54:function(n,e,i){},55:function(n,e,i){},84:function(n,e,i){"use strict";i.r(e);var t,r,c,A,a,s=i(2),o=i.n(s),b=i(33),p=i.n(b),d=(i(54),i(55),i(6)),j=i(37),g=i.n(j),l=i(43),x=i(7),h=i(31),m=h.a.initializeApp({apiKey:"AIzaSyA9BnlX96fMf7XiUVCFRsoQzG8DGERJkeY",authDomain:"disneyplus-clone-a33d5.firebaseapp.com",projectId:"disneyplus-clone-a33d5",storageBucket:"disneyplus-clone-a33d5.appspot.com",messagingSenderId:"37918794208",appId:"1:37918794208:web:dbe9842dfe1dda522a4b85",measurementId:"G-DRVLJKWRWG"}).firestore(),O=h.a.auth(),u=new h.a.auth.GoogleAuthProvider,I=(h.a.storage(),m),E=i(12),f=i.p+"static/media/logo.8205aae8.svg",R=i.p+"static/media/home-icon.b6a11f9b.svg",v=i.p+"static/media/search-icon.46aff20f.svg",w=i.p+"static/media/watchlist-icon.0b5a945b.svg",B=i.p+"static/media/original-icon.d7752d89.svg",k=i.p+"static/media/movie-icon.1a6f6ada.svg",y=i.p+"static/media/series-icon.4d410db6.svg",D=i(28),M=Object(D.b)({name:"movie",initialState:{name:"",email:"",photo:""},reducers:{setUserLogin:function(n,e){n.name=e.payload.name,n.email=e.payload.email,n.photo=e.payload.photo},setSignOut:function(n){n.name=null,n.email=null,n.photo=null}}}),H=M.actions,C=H.setUserLogin,z=H.setSignOut,S=function(n){return n.user.name},K=function(n){return n.user.photo},Q=M.reducer,F=i(20),T=i(3);var q,G,N=x.a.nav(t||(t=Object(d.a)(["\n  background: #090b13;\nheight:70px;\ndisplay:flex;\n\n\n"]))),L=x.a.img(r||(r=Object(d.a)(["\nwidth:80px;\n\npadding:0 36px;//\n"]))),W=x.a.div(c||(c=Object(d.a)(['\n\ndisplay:flex;\nflex:1;\n   align-items:center;\n   margin-left:25px;\n   cursor:pointer;\na{\n    display:flex;\n    padding :0 12px;\n    cursor:pointer;\n \n  \n    img{\n        height:20px;\n    }\n    span{\n        font-size:13px;\n        letter-spacing:1.42;\n        position:relative;\n\n        &:after{\n            content:"";\n            \n            background:white;\n            height:2px;\n            position:absolute;\n         \n            left:0;\n            right:0;\n            bottom:-6px;\n            opacity:0;\n            transform-origin:left center;\n            transition:all 250ms cubic-bezier(0.25,0.46,0.45,0.94)0s;\n            transform:scaleX(0);\n        }\n    }\n    &:hover{\n        span:after{\n            transform:scaleX(1);  \n            opacity:1;\n        }\n    }\n}\n\n']))),V=x.a.img(A||(A=Object(d.a)(["\nheight:48px;\nwidth:48px;\nborder-radius:50%;\ncursor:pointer;\nmargin-top:15px;\nmargin-right:20px;\n\n"]))),U=x.a.div(a||(a=Object(d.a)(["\nborder:1px solid #f9f9f9;\nborder-radius:4px;\nheight:12px;\npadding:14px 16px;\nmargin-top:15px;\nmargin-left:1000px;\nborder-radius:4px;\nletter-spacing:1.5px;\njustify-content:center;\nbackground:rgba(0,0,0.6);\n\n\ncursor:pointer;\n\n&:hover{\n\n    background:#f9f9f9;\n    color:#000;\n    border-color:transparent\n}\n\n"]))),J=function(){var n=Object(E.f)(),e=Object(F.b)(),i=Object(F.c)(S);return Object(F.c)(K),Object(s.useEffect)((function(){O.onAuthStateChanged(function(){var i=Object(l.a)(g.a.mark((function i(t){return g.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:t&&(e(C({name:t.displayName,email:t.email,photo:t.photoURL})),n.push("/"));case 1:case"end":return i.stop()}}),i)})));return function(n){return i.apply(this,arguments)}}())}),[]),Object(T.jsxs)(N,{children:[Object(T.jsx)(L,{src:f}),i&&Object(T.jsxs)(T.Fragment,{children:[Object(T.jsxs)(W,{children:[Object(T.jsxs)("a",{children:[Object(T.jsx)("img",{src:R}),Object(T.jsx)("span",{children:"HOME"})]}),Object(T.jsxs)("a",{children:[Object(T.jsx)("img",{src:v}),Object(T.jsx)("span",{children:"SEARCH"})]}),Object(T.jsxs)("a",{children:[Object(T.jsx)("img",{src:w}),Object(T.jsx)("span",{children:"WATCHLIST"})]}),Object(T.jsxs)("a",{children:[Object(T.jsx)("img",{src:B}),Object(T.jsx)("span",{children:"ORIGINALS"})]}),Object(T.jsxs)("a",{children:[Object(T.jsx)("img",{src:k}),Object(T.jsx)("span",{children:"MOVIES"})]}),Object(T.jsxs)("a",{children:[Object(T.jsx)("img",{src:y}),Object(T.jsx)("span",{children:"SERIES"})]})]}),Object(T.jsx)(V,{onClick:function(){O.signOut().then((function(){e(z()),n.push("/Login")}))},src:"data:image/jpeg;base64,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"})]}),!i&&Object(T.jsx)(U,{onClick:function(){O.signInWithPopup(u).then((function(i){var t=i.user;e(C({name:t.displayName,email:t.email,photo:t.photoURL})),n.push("/")}))},children:"LOGIN"})]})},P=i(30),Z=(i(67),i(68),i(47)),Y=i.n(Z);var X,$,_=function(){return Object(T.jsxs)(nn,Object(P.a)(Object(P.a)({},{centerMode:!0,dots:!0,autoplay:!0,infinite:!0,speed:500,slideToShow:1,slideToScroll:1}),{},{children:[Object(T.jsx)(en,{children:Object(T.jsx)("img",{src:"/Images/Slider-badging.jpg"})}),Object(T.jsx)(en,{children:Object(T.jsx)("img",{src:"/Images/Slider-badag.jpg"})})]}))},nn=Object(x.a)(Y.a)(q||(q=Object(d.a)(["\n   \n\n    .slick-list{\n        overflow:visbile;\n    }\n    .slick-prev {\n  left: 3% !important;\n  z-index: 1;\n}\n.slick-next {\n  right: 3% !important;\n  z-index: 1;\n}\nul li button{\n    &:before{\n        font-size:10px;\n        color:rgb(150,158,171);\n    }\n}\nli.slick-active button::before{\n    color:white;\n}\n\n\n"]))),en=x.a.div(G||(G=Object(d.a)(["\nmargin-top:20px;\ncursor:pointer;\n    img{\n        border: 4px solid transparent;\n        border-radius:4px;\n        height:100%;\n        width:100%;\n        box-shadow:rgb(0 0 0 / 69%) 0px 26px 38px -10px,\n        rgb(0 0 0 / 73%) 0px 16px 10px -10px;\n\n        &:hover{\n            border-color: rgba(249,249,249,0.8);\n        }\n    }\n\n"])));var tn,rn,cn,An=function(){return Object(T.jsxs)(an,{children:[Object(T.jsx)(sn,{children:Object(T.jsx)("img",{src:"/Images/viewers-disney.png"})}),Object(T.jsx)(sn,{children:Object(T.jsx)("img",{src:"/Images/viewers-pixar.png"})}),Object(T.jsx)(sn,{children:Object(T.jsx)("img",{src:"/Images/viewers-marvel.png"})}),Object(T.jsx)(sn,{children:Object(T.jsx)("img",{src:"/Images/viewers-starwars.png"})}),Object(T.jsx)(sn,{children:Object(T.jsx)("img",{src:"/Images/viewers-national.png"})})]})},an=x.a.div(X||(X=Object(d.a)(["\n    margin-top:30px;\n    display:grid;\n    grid-gap: 25px;\n    grid-template-columns:repeat(5,minmax(0,1fr));\n\n\n"]))),sn=x.a.div($||($=Object(d.a)(["\nborder-radius:10px;\nborder: 3px solid rgba(249,249,249,0.1);\nbox-shadow:rgb(0 0 0 / 69%) 0px 26px 30px -10px,\n        rgb(0 0 0 / 73%) 0px 16px 10px -10px;\n      transition:all 250ms cubic-bezier(0.25,0.46,0.45,0.94)0s;\ncursor:pointer;\nimg{\n    \n    height:100%;\n    width:100%;\n    object-fit:cover;\n}\n\n&:hover{\n    box-shadow:rgb(0 0 0 / 80%) 0px 26px 30px -10px,\n        rgb(0 0 0 / 72%) 0px 30px 22px -10px;\n      transition:all 250ms cubic-bezier(0.25,0.46,0.45,0.94)0s;\n      border-color:rgba(249,249,249,0.8);\n}\n"]))),on=i(21),bn=Object(D.b)({name:"movie",initialState:{movies:[]},reducers:{setMovies:function(n,e){n.movies=e.payload}}}),pn=bn.actions.setMovies,dn=function(n){return n.movie.movies},jn=bn.reducer;var gn,ln=function(){var n=Object(F.c)(dn);return console.log("This is movie:",n),Object(T.jsxs)(xn,{children:[Object(T.jsx)("center",{children:Object(T.jsx)("h4",{children:"Recommended For You"})}),Object(T.jsx)(hn,{children:n&&n.map((function(n){return Object(T.jsx)(mn,{children:Object(T.jsx)(on.b,{to:"/details/".concat(n.id),children:Object(T.jsx)("img",{src:n.cardImg})})},n.id)}))})]})},xn=x.a.div(tn||(tn=Object(d.a)(["\n\n\n"]))),hn=x.a.div(rn||(rn=Object(d.a)(["\n margin-top:30px;\n    display:grid;\n    grid-gap: 25px;\n    grid-template-columns:repeat(4,minmax(0,1fr));\n\n"]))),mn=x.a.div(cn||(cn=Object(d.a)(["\noverflow:hidden;\nborder-radius:10px;\nborder: 3px solid rgba(249,249,249,0.1);\nbox-shadow:rgb(0 0 0 / 69%) 0px 26px 30px -10px,\n        rgb(0 0 0 / 73%) 0px 16px 10px -10px;\n      transition:all 250ms cubic-bezier(0.25,0.46,0.45,0.94)0s;\ncursor:pointer;\nimg{\n    \n    height:100%;\n    width:100%;\n    object-fit:cover;\n}\n\n&:hover{\n    box-shadow:rgb(0 0 0 / 80%) 0px 26px 30px -10px,\n        rgb(0 0 0 / 72%) 0px 30px 22px -10px;\n      transition:all 250ms cubic-bezier(0.25,0.46,0.45,0.94)0s;\n      border-color:rgba(249,249,249,0.8);\n}\n"])));var On,un,In,En,fn,Rn,vn=function(){var n=Object(F.b)();return Object(s.useEffect)((function(){I.collection("movies").onSnapshot((function(e){var i=e.docs.map((function(n){return Object(P.a)({id:n.id},n.data())}));console.log(i),n(pn(i))}))}),[]),Object(T.jsxs)(wn,{children:[Object(T.jsx)(_,{}),Object(T.jsx)(An,{}),Object(T.jsx)(ln,{})]})},wn=x.a.main(gn||(gn=Object(d.a)(['\n    padding: 0 calc(3.5vw + 5px);\n    min-height: calc(100vh - 250px);\n    overflow-x: hidden;\n    position: relative;\n    &:before {\n        background: url("/images/home-background.png") center center / cover\n        no-repeat fixed;\n        content: "";\n        position: absolute;\n        top: 0; \n        left: 0;\n        right: 0;\n        bottom: 0;\n        z-index: -1;\n    }\n\n'])));var Bn,kn,yn,Dn,Mn,Hn,Cn,zn,Sn,Kn,Qn=function(){return Object(T.jsx)(Fn,{children:Object(T.jsxs)(Tn,{children:[Object(T.jsx)(qn,{src:"/images/cta-logo-one.svg"}),Object(T.jsx)(Nn,{children:"Get All These"}),Object(T.jsx)(Ln,{children:"Hotstar is a brand of subscription video on-demand streaming services operated by Disney Media and Entertainment Distribution, a division of The Walt Disney Company"}),Object(T.jsx)(Gn,{src:"/images/cta-logo-two.png"})]})})},Fn=x.a.main(On||(On=Object(d.a)(['\n    padding: 0 calc(3.5vw + 5.5px);\n    min-height: calc(100vh);\n    overflow-x: hidden;\n    position: relative;\n    &:before {\n        background: url("/images/home-background.png") center center / cover\n        no-repeat fixed;\n        content: "";\n        position: absolute;\n        top: 0; \n        left: 0;\n        right: 0;\n        bottom: 0;\n        z-index: -1;\n    }\n']))),Tn=x.a.div(un||(un=Object(d.a)(["\n\nmax-width: 650px;\n\nmargin-left:250px;\npadding:80px 40px;\nwidth:  70%;\ndisplay:flex;\nflex-direction:Column;\n\n\n"]))),qn=x.a.img(In||(In=Object(d.a)(["\n\n\n"]))),Gn=x.a.img(En||(En=Object(d.a)(["\n\n\n"]))),Nn=x.a.div(fn||(fn=Object(d.a)(["\n\nwidth:100%;\nbackground-color:#0063e5;\nfont-weight:bold;\npadding:17px 0;\ncolor:#f9f9f9;\nborder-radius:4px;\ntext-align:center;\nfont-size:18px;\ncursor:pointer;\ntransition:all 250ms;\nletter-spacing:;\nmargin-top:8px;\nmargin-bottom:12px;\n\n\n&:hover{\nbackground:#0483ee\n}\n"]))),Ln=x.a.p(Rn||(Rn=Object(d.a)(["\n\nfont-size:11px;\nletter-spacing:1.5;\ntext-align:center;\nline-height:1.5;\n\n\n"]))),Wn=i(49);var Vn,Un,Jn,Pn=function(){var n=Object(E.g)().id,e=Object(s.useState)(),i=Object(Wn.a)(e,2),t=i[0],r=i[1];return Object(s.useEffect)((function(){I.collection("movies").doc(n).get().then((function(n){n.exists&&r(n.data())}))}),[]),console.log("movie id",t),Object(T.jsx)(Zn,{children:t&&Object(T.jsxs)(T.Fragment,{children:[Object(T.jsxs)(Yn,{children:[Object(T.jsx)("img",{src:t.backgroundImg}),";"]}),Object(T.jsx)(Xn,{children:Object(T.jsx)("img",{src:t.titleImg})}),Object(T.jsxs)($n,{children:[Object(T.jsxs)(_n,{children:[Object(T.jsx)(on.b,{to:"/media/",children:Object(T.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAG9QTFRFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAbeq9RgAAACV0Uk5TAFhqMqr/+o0f8eh6DdVnwlSvQpwv94oc5HcJ0knbQN8MTu9gcy+KIuoAAAB/SURBVHic7dO5EoJAFETRQbkuqKCyKS4g8P/fCJRVJlK8DogsOz7BTE+Pc/984i2WpvFhtd4YaEufYLefRLxzCAUE0VFAcDoLCOJEQKRZbiO4XAsbwe0uIB5fpY0gngIqK+FMrzlup/QkNC68nbCC6T3VA7GWKW3cNa39W34yHdTNCNmD8G7+AAAAAElFTkSuQmCC"})}),Object(T.jsx)("span",{children:"PLAY"})]}),Object(T.jsxs)(ne,{children:[Object(T.jsx)(on.b,{to:"/media/",children:Object(T.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAEhQTFRFAAAA////////////////////////////////////////////////////////////////////////////////////////////53h4sAAAABh0Uk5TAHB/IKD/nxDv31+/QK+PMPDA4FCAkLBgyXZ3BwAAAH1JREFUeJztk0cOgDAQA2mG0CG0//8UEIi+eM+IOY8i20kc52fD9XzqBADCiEiYMd67hoU4UUhAmikkIBcb4EghRDtJUwOFJDS4SlODUiHB3JI9SLiN8eBUipNqnsk2tF3V8p06vnjP767mr8AOsrJKQt6N4CXvztDy3/JJRk2aBxl9uYRmAAAAAElFTkSuQmCC"})}),Object(T.jsx)("span",{children:"TRAILER"})]}),Object(T.jsx)(ee,{children:Object(T.jsx)("span",{children:"+"})}),Object(T.jsx)(ie,{children:Object(T.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAEtQTFRFAAAA////////////////////////////////////////////////////////////////////////////////////////////////g5kLBwAAABl0Uk5TAEBfIM//YLDvMK+/f4AQ8FDAkOCgj5/QcDW7ekAAAADmSURBVHic7ZJbEoMgDEVDMVSkgFr62P9KmxA71VDHBbT3Byc53jwA4K9G5mSPENshojuAzsRgv+flh3ChA6vIKobBayb1lIsAuUIjRDZMul3OTQAzn9cEE59GV+PgmRwLMX7pralHySzB2rWnuqXt3Dhuwd9CuHEZ63QxkhuCW1pCvAOMYTjp4WSHDhfNdZJuOx5PjAmubwht/Y4b6EGRh4z4XidX7jaQbMl8oCjmDTRLXFTgqSGz+lm02K7XkPagzXjuO6Qeli9ZQ7k0d8d3ZvNqOv1OPn6TIHneI8TOjE/z5Wp/XS9CsgorDgtVbAAAAABJRU5ErkJggg=="})})]}),Object(T.jsx)(te,{children:t.subTitle}),Object(T.jsx)(re,{children:t.description})]})})},Zn=x.a.div(Bn||(Bn=Object(d.a)(["\nmin-height: calc(100vh-70px);\npadding:0 calc(3.5vw +5px);\nposition:relative;\n"]))),Yn=x.a.div(kn||(kn=Object(d.a)(["\n  position:fixed;\n\n    top:0;\n    left:0;\n    right:0;\n    bottom:0;\n    z-index:-1;\n    opacity:0.8;\n    img{\n            height:100%;\n            width:100%;\n            object-fit:cover;\n    }\n\n    "]))),Xn=x.a.div(yn||(yn=Object(d.a)(["\nheight:30vh;\nwidth:35vw;\nmin-height:170px;\nmin-width:200px;\n img{\n            height:100%;\n            width:100%;\n            object-fit:contain;\n    }\n"]))),$n=x.a.div(Dn||(Dn=Object(d.a)(["\n\ndisplay:flex;\nalign-items:center;\nmargin-left:10px;\n"]))),_n=x.a.button(Mn||(Mn=Object(d.a)(["\n\nborder-radius:4px;\nfont-size:15px;\npadding:0px 24px;\nmargin-right:22px;\ndisplay:flex;\nalign-items:center;\nheight:56px;\nbackground:rgb(249,249,249);\nborder:none;\nletter-spacing:1.8px;\ncursor:pointer;\n\n&:hover{\n\n    background:rgb(198,198,198);\n}\n\n"]))),ne=Object(x.a)(_n)(Hn||(Hn=Object(d.a)(["\n\nbackground:rgba(0,0,0,0.3);\nborder:1px solid rgb(249,249,249);\ncolor:rgb(249,249,249);\n"]))),ee=x.a.button(Cn||(Cn=Object(d.a)(["\n\nheight:44px;\nwidth:44px;\ndisplay:flex;\nalign-items:center;\nmargin-right:16px;\njustify-content:center;\nborder-radius:50%;\nborder: 3px solid white;\nbackground-color :rgba(0,0,0,0.6);\ncursor:pointer;\n\nspan{\n    font-size:30px;\n    color:white;\n}\n\n"]))),ie=Object(x.a)(ee)(zn||(zn=Object(d.a)(["\n\nbackground:rgb(0,0,0,0);\n"]))),te=x.a.div(Sn||(Sn=Object(d.a)(["\n\ncolor:rgb(249,249,249);\nfont-size:15px;\nmin-height:20px;\nmargin-left:10px;\nmargin-top:26px;\n\n"]))),re=x.a.div(Kn||(Kn=Object(d.a)(["\nline-height:1.4;\nfont-size:20px;\nmargin-top:16px;\nmargin-left:10px;\ncolor:rgb(249,249,249);\n\n"]))),ce=i(48);var Ae=function(){return Object(T.jsxs)(ae,{children:[Object(T.jsx)(ce.a,{src:"https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8",autoPlay:!0,controls:!0,width:"100%"}),Object(T.jsx)(oe,{children:"Grahan"}),Object(T.jsx)(se,{children:"2021 \u2022 1 Season \u2022 Science Fiction, Action-Adventure, BuddyIn "}),Object(T.jsx)(oe,{children:"1984 Bokaro, desperate for his late father\u2019s job, Rishi meets union leader Chunnu. In 2016 Ranchi, City SP Amrita Singh is caught in red tape trying to solve a reporter's murder."})]})},ae=x.a.main(Vn||(Vn=Object(d.a)(['\n    padding: 0 calc(3.5vw + 5px);\n    min-height: calc(100vh - 250px);\n    overflow-x: hidden;\n    position: relative;\n    &:before {\n        background: url("/images/home-background.png") center center / cover\n        no-repeat fixed;\n        content: "";\n        position: absolute;\n        top: 0; \n        left: 0;\n        right: 0;\n        bottom: 0;\n        z-index: -1;\n    }\n']))),se=x.a.div(Un||(Un=Object(d.a)(["\n\ncolor:rgb(249,249,249);\nfont-size:15px;\nmin-height:20px;\nmargin-left:25px;\nmargin-top:26px;\n\n"]))),oe=x.a.div(Jn||(Jn=Object(d.a)(["\nline-height:1.4;\nfont-size:20px;\nmargin-top:16px;\nmargin-left:25px;\ncolor:rgb(249,249,249);\n\n"])));var be=function(){return Object(T.jsx)("div",{className:"App",children:Object(T.jsxs)(on.a,{children:[Object(T.jsx)(J,{}),Object(T.jsxs)(E.c,{children:[Object(T.jsx)(E.a,{path:"/login",children:Object(T.jsx)(Qn,{})}),Object(T.jsx)(E.a,{path:"/details/:id",children:Object(T.jsx)(Pn,{})}),Object(T.jsx)(E.a,{path:"/Media",children:Object(T.jsx)(Ae,{})}),Object(T.jsx)(E.a,{path:"/",children:Object(T.jsx)(vn,{})})]})]})})},pe=Object(D.a)({reducer:{movie:jn,user:Q}}),de=function(n){n&&n instanceof Function&&i.e(3).then(i.bind(null,85)).then((function(e){var i=e.getCLS,t=e.getFID,r=e.getFCP,c=e.getLCP,A=e.getTTFB;i(n),t(n),r(n),c(n),A(n)}))};p.a.render(Object(T.jsx)(o.a.StrictMode,{children:Object(T.jsx)(F.a,{store:pe,children:Object(T.jsx)(be,{})})}),document.getElementById("root")),de()}},[[84,1,2]]]);
//# sourceMappingURL=main.0841c0df.chunk.js.map