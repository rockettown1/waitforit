(this.webpackJsonpcountdown=this.webpackJsonpcountdown||[]).push([[0],{16:function(n,e,t){n.exports=t.p+"static/media/Codenation.21daf0eb.png"},17:function(n,e,t){n.exports=t.p+"static/media/wearecodenation.fc2e191c.png"},21:function(n,e,t){n.exports=t(43)},26:function(n,e,t){},27:function(n,e,t){},43:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),o=t(12),i=t.n(o),c=(t(26),t(2)),l=t(4),u=(t(27),t(28),t(5)),s=t(3);function p(){var n=Object(c.a)(["\n  margin: 0;\n  padding: 0;\n  font-size: 15px;\n"]);return p=function(){return n},n}function f(){var n=Object(c.a)(["\n  margin: 0;\n  padding: 0;\n"]);return f=function(){return n},n}function m(){var n=Object(c.a)(["\n  margin: 0 20px;\n  width: 65px;\n"]);return m=function(){return n},n}function d(){var n=Object(c.a)(["\n  display: flex;\n  justify-content: space-between;\n  font-size: 300%;\n\n  color: white;\n"]);return d=function(){return n},n}function b(){var n=Object(c.a)(["\n  position: relative;\n  z-index: 9;\n  display: flex;\n  justify-content: center;\n  margin-top: -10px;\n"]);return b=function(){return n},n}var g=r.a.memo((function(n){var e=n.total;return console.log("I have been called"),r.a.createElement("div",null,r.a.createElement(u.a,{date:Date.now()+e,renderer:function(n){var e=n.hours,t=n.minutes,a=n.seconds;return r.a.createElement(h,null,r.a.createElement(x,null,r.a.createElement(v,null,r.a.createElement(E,null,Object(u.b)(e)),r.a.createElement(j,null,"hours")),r.a.createElement(v,null,r.a.createElement(E,null,Object(u.b)(t)),r.a.createElement(j,null,"Mins")),r.a.createElement(v,null,r.a.createElement(E,null,Object(u.b)(a)),r.a.createElement(j,null,"Secs"))))},key:e}))}),(function(n,e){return n.total===e.total})),h=s.a.div(b()),x=s.a.div(d()),v=s.a.span(m()),E=s.a.p(f()),j=s.a.p(p());function w(){var n=Object(c.a)(["\n  background-color: #f5b32e;\n  height: 30px;\n  border-radius: 5px;\n  position: relative;\n  width: 100% !important;\n  color: black;\n  cursor: pointer;\n  transition: all 0.2s;\n\n  &:focus {\n    outline: none;\n  }\n  &:active {\n    transform: scale(0.95);\n  }\n"]);return w=function(){return n},n}function O(){var n=Object(c.a)(["\n  display: flex;\n  margin-top: 20px;\n  align-items: flex-end;\n"]);return O=function(){return n},n}function k(){var n=Object(c.a)(["\n  background-color: #f5b32e;\n  font-size: 10px;\n  width: 100px;\n  border-radius: 5px;\n  padding: 5px;\n  color: black;\n  cursor: pointer;\n  &:focus {\n    outline: none;\n  }\n  &:active {\n    transform: scale(0.95);\n  }\n"]);return k=function(){return n},n}function S(){var n=Object(c.a)(['\n  display: flex;\n  flex-direction: column;\n  width: 300px;\n  padding: 20px;\n\n  label {\n    text-align: left;\n    min-width: 150px;\n  }\n\n  select {\n    width: 75px;\n    margin-top: 20px;\n    height: 25px;\n  }\n\n  input[type="text"] {\n    width: 300px;\n    margin-top: 10px;\n    margin-bottom: 20px;\n    height: 25px;\n    font-size: 15px;\n    border-radius: 5px;\n  }\n\n  button {\n    width: 75px;\n    margin-top: 20px;\n  }\n']);return S=function(){return n},n}function y(){var n=Object(c.a)(["\n  position: absolute;\n  transition: all 1s;\n  background-color: black;\n  height: 100vh;\n  width: 350px;\n  top: 0;\n  left: 0;\n  z-index: 25;\n  display: flex;\n  flex-direction: column;\n  color: white;\n  transform: ",";\n"]);return y=function(){return n},n}var C=function(n){for(var e=n.grabMin,t=n.grabSec,o=n.setTime,i=n.newMessage,c=n.message,u=n.show,s=n.setShow,p=n.showVid,f=n.setShowVid,m=n.title,d=n.newTitle,b=n.newBackground,g=n.logo,h=n.setLogo,x=n.reset,v=Object(a.useState)(""),E=Object(l.a)(v,2),j=E[0],w=E[1],O=[0,1,2,3,4],k=5;k<=60;k+=5)O.push(k);for(var S=[],y=0;y<60;y+=5)S.push(y);return r.a.createElement(z,{show:u},r.a.createElement(T,{onSubmit:o},r.a.createElement("label",null,"Set a title for the session"),r.a.createElement("input",{type:"text",value:m,placeholder:"Title",onChange:d}),r.a.createElement("label",null,"Set a message for the timer"),r.a.createElement("input",{type:"text",value:c,placeholder:"Message",onChange:i}),r.a.createElement("label",null,"Change the background image ",r.a.createElement("br",null)," ",r.a.createElement("span",{style:{fontSize:"0.9em"}},"(must be a valid image url and must be pasted in - it listens for the paste event.)")),r.a.createElement("input",{type:"text",placeholder:"Paste a url in here",onPaste:function(n){b(n)},onChange:function(n){return w(n.target.value)},contentEditable:"true",value:j}),r.a.createElement(M,{onClick:function(){x(),w("")}},"Reset Default Image"),r.a.createElement("select",{onChange:function(n){return e(n)}},r.a.createElement("option",null,"Set mins:"),O.map((function(n){return r.a.createElement("option",{value:n},n)}))),r.a.createElement("select",{onChange:function(n){return t(n)}},r.a.createElement("option",null,"Set secs"),S.map((function(n){return r.a.createElement("option",{value:n},n)}))),r.a.createElement(B,null,r.a.createElement("label",null,"Load with video"),r.a.createElement("input",{type:"checkbox",onClick:function(){return f(!p)}})),r.a.createElement(B,null,r.a.createElement("label",null,"Go retro"),r.a.createElement("input",{type:"checkbox",onClick:function(){return h(!g)}})),r.a.createElement(D,{onClick:function(){return s(!u)}},"Start Timer")),r.a.createElement(M,{onClick:function(){return s(!u)},style:{position:"absolute",right:0,bottom:0,marginRight:"20px"}},"Close Sidebar"))},z=s.a.div(y(),(function(n){return n.show?"translateX(0)":"translateX(-350px)"})),T=s.a.form(S()),M=s.a.p(k()),B=s.a.div(O()),D=s.a.button(w()),V=t(8),I=t.n(V),L=t(16),J=t.n(L),R=t(17),A=t.n(R),W=t(18);function G(){var n=Object(c.a)(["\n  position: absolute;\n  left: 0;\n  margin-top: 15px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: all 1s;\n  border-radius: 15px;\n  overflow: hidden;\n  width: 700px;\n  height: 380px;\n  margin-left: 50px;\n  z-index: 8;\n"]);return G=function(){return n},n}function H(){var n=["m2WOkT253uk","Bb-0JJKST6M","hj7eHceHjGA","ZD0idqVjYAw"],e=Object(a.useState)(0),t=Object(l.a)(e,2),o=t[0],i=t[1];return r.a.createElement(P,null,r.a.createElement(W.a,{videoId:n[o],opts:{height:"400",width:"700",playerVars:{autoplay:1}},onEnd:function(){i(o<n.length-1?o+1:0)},style:{borderRadius:"10px"}}))}var P=s.a.div(G());function X(){var n=Object(c.a)(["\n  position: relative;\n  z-index: 9;\n  color: white;\n  margin-top: 20px;\n"]);return X=function(){return n},n}function q(){var n=Object(c.a)(["\n  margin-right: 50px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return q=function(){return n},n}function K(){var n=Object(c.a)(["\n  font-size: 90px;\n  width: 70%;\n  text-align: right;\n  margin-right: 50px;\n  color: white;\n  position: absolute;\n  top: 0;\n  right: 0;\n\n  z-index: 9;\n"]);return K=function(){return n},n}function N(){var n=Object(c.a)(["\n  position: absolute;\n  height: 100vh;\n  width: 100vw;\n  background-color: rgba(0, 0, 0, 0.7);\n  pointer-events: none;\n"]);return N=function(){return n},n}function U(){var n=Object(c.a)(["\n  position: absolute;\n  text-align: center;\n  z-index: 20;\n  margin-left: 10px;\n  padding: 10px;\n  border-radius: 5px;\n  top: 0;\n  left: 0%;\n  opacity: 0;\n  transition: all 1s;\n  background-color: white;\n  cursor: pointer;\n  &:hover {\n    opacity: 1;\n  }\n"]);return U=function(){return n},n}function Y(){var n=Object(c.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  justify-content: center;\n  overflow: hidden;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n  height: 100vh;\n"]);return Y=function(){return n},n}function Z(){var n=Object(c.a)(["\n  position: absolute;\n  height: 100px;\n  width: auto;\n  bottom: 0;\n  left: 0;\n  margin-left: 20px;\n  margin-bottom: 20px;\n"]);return Z=function(){return n},n}var $=function(){var n=Object(a.useState)(0),e=Object(l.a)(n,2),t=e[0],o=e[1],i=Object(a.useState)(0),c=Object(l.a)(i,2),u=c[0],s=c[1],p=Object(a.useState)(0),f=Object(l.a)(p,2),m=f[0],d=f[1],b=Object(a.useState)(""),h=Object(l.a)(b,2),x=h[0],v=h[1],E=Object(a.useState)(""),j=Object(l.a)(E,2),w=j[0],O=j[1],k=Object(a.useState)(!1),S=Object(l.a)(k,2),y=S[0],z=S[1],T=Object(a.useState)(!1),M=Object(l.a)(T,2),B=M[0],D=M[1],V=Object(a.useState)(null),L=Object(l.a)(V,2),R=L[0],W=L[1],G=Object(a.useState)(!1),P=Object(l.a)(G,2),X=P[0],q=P[1],K=Object(a.useState)(""),N=Object(l.a)(K,2),U=(N[0],N[1]),Y=function(n){n.preventDefault();var e=60*t*1e3+1e3*u;d(e)};return r.a.createElement(Q,{className:"App",back:R||I.a},r.a.createElement(_,{onClick:function(){return z(!y)}},"Open SideBar"),r.a.createElement(en,null,w),r.a.createElement(nn,null),r.a.createElement(C,{show:y,setShow:z,grabMin:function(n){o(n.target.value)},grabSec:function(n){s(n.target.value)},setTime:Y,newMessage:function(n){return v(n.target.value)},message:x,newTitle:function(n){return O(n.target.value)},title:w,showVid:B,setShowVid:D,background:R,newBackground:function(n){try{W(n.clipboardData.getData("Text"))}catch(e){U(e,"Invalid URL")}},logo:X,reset:function(){return W(I.a)},setLogo:q}),B&&r.a.createElement(H,null),r.a.createElement(tn,null,r.a.createElement(an,null,x),r.a.createElement(g,{total:m,setTime:Y,setCurMin:o,setCurSec:s})),r.a.createElement(F,{src:X?A.a:J.a}))},F=s.a.img(Z()),Q=s.a.div(Y(),(function(n){var e=n.back;return"url(".concat(e,")")})),_=s.a.p(U()),nn=s.a.div(N()),en=s.a.h1(K()),tn=s.a.div(q()),an=s.a.h1(X());Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement($,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))},8:function(n,e,t){n.exports=t.p+"static/media/Leon.f1b11487.jpg"}},[[21,1,2]]]);
//# sourceMappingURL=main.2175a77d.chunk.js.map