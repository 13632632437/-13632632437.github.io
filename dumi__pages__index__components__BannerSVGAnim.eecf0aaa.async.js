(self.webpackChunkgit_home=self.webpackChunkgit_home||[]).push([[4075],{66486:function(p,f,s){"use strict";var D,y=s(64836);D={value:!0},f.Z=void 0;var _=y(s(61596)),E=_.default;f.Z=E},61596:function(p,f,s){"use strict";s.r(f),s.d(f,{default:function(){return m}});var D=s(15671),y=s(43144),_=s(97326),E=s(60136),k=s(18486),P=s(29822),F=s(32229),m=function(A){(0,E.Z)(c,A);var M=(0,k.Z)(c);function c(){var t;(0,D.Z)(this,c);for(var r=arguments.length,a=new Array(r),e=0;e<r;e++)a[e]=arguments[e];return t=M.call.apply(M,[this].concat(a)),t.computedStyle=void 0,t.length=0,t.getAnimStart=function(){var h=(0,_.Z)(t),n=h.target,l=h.startAt,i=h.key;if(n){t.computedStyle||(t.computedStyle=(0,P.Dx)(n));var L=(0,_.Z)(t),u=L.computedStyle,v=n.tagName,g=function(O){return n.getAttribute(O)};switch(v){case"circle":t.length=Math.PI*2*g("r");break;case"line":t.length=t.getLineLength(g("x1"),g("y1"),g("x2"),g("y2"));break;case"polyline":case"polygon":t.length=t.getPolyLength(v);break;case"ellipse":t.length=t.getEllipseLength();break;case"rect":t.length=g("width")*2+g("height")*2;break;case"path":t.length=n.getTotalLength();break;default:throw new Error("The label is not a label in the SVG.")}t.length=parseFloat(t.length.toFixed(3));var o,d;return l[i]||l[i]===0?(o=t.setVars(l[i]),d=-o.start):(o=u.strokeDasharray==="none"||!u.strokeDasharray?"100% 100%":u.strokeDasharray,d=parseFloat(u.strokeDashoffset),o=o.split(" ")[0].replace(/\,/i,""),o=o.indexOf("%")>=0?parseFloat(o)/100*t.length:parseFloat(o),o=t.setVars("".concat(-d," ").concat(o-d))),t.start.strokeDasharray=o,t.start.strokeDashoffset=d,t.value=t.setVars(t.value),t.start}},t.render=function(h){var n=(0,_.Z)(t),l=n.value,i=n.start,L=n.length,u=i.strokeDasharray,v=i.strokeDashoffset,g=u.end-u.start+(l.end-u.end-(l.start-u.start))*h;return{strokeDasharray:"".concat(g,"px, ").concat(L,"px"),strokeDashoffset:-((l.start+v)*h-v)}},t}return(0,y.Z)(c,[{key:"setVars",value:function(r){var a={start:0};if(typeof r=="number")return a.end=r,a;var e=r.split(" ");if(e.length>1)a.start=e[0].indexOf("%")>=0?parseFloat(e[0])/100*this.length:parseFloat(e[0]),a.end=e[1].indexOf("%")>=0?parseFloat(e[1])/100*this.length:parseFloat(e[1]);else if(parseFloat(r))a.end=r.indexOf("%")>=0?parseFloat(r)/100*this.length:parseFloat(r);else throw new Error("SVGDraw data[".concat(r,"] error."));return a}},{key:"getPolyLength",value:function(r){var a=this,e=[];(this.target.getAttribute("points")||"").split(/[\s+|,]/).forEach(function(n,l){var i=e[Math.floor(l/2)]||[];i.push(parseFloat(n)),l%2||e.push(i)}),r==="polygon"&&e.push(e[0]);var h=0;return e.forEach(function(n,l){if(l<e.length-1){var i=e[l+1];h+=a.getLineLength(n[0],n[1],i[0],i[1])}}),h}},{key:"getEllipseLength",value:function(){var r=parseFloat(this.target.getAttribute("rx")),a=parseFloat(this.target.getAttribute("ry"));if(!r||!a)throw new Error("ellipse rx or ry error.");return Math.PI*(3*(r+a)-Math.sqrt((3*r+a)*(3*a+r)))}},{key:"getLineLength",value:function(r,a,e,h){var n=parseFloat(e)-parseFloat(r),l=parseFloat(h)-parseFloat(a);return Math.sqrt(n*n+l*l)}}]),c}(F.Z);m.key="style",m.className="SVGDraw"},64836:function(p){function f(s){return s&&s.__esModule?s:{default:s}}p.exports=f,p.exports.__esModule=!0,p.exports.default=p.exports}}]);
