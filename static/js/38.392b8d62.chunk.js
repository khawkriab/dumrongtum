(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{1071:function(n,t,e){"use strict";e.r(t),e.d(t,"default",function(){return j});var r=e(33),i=e(10),a=e.n(i),o=e(18),u=e(8),c=e(12),d=e(16),f=e(15),l=e(17),p=e(0),s=e.n(p),m=e(166),x=e(237),b=e(175),g=e(171),h=e(167),v=e(22),w=e(235),y=e.n(w),j=function(n){function t(n){var e;return Object(u.a)(this,t),(e=Object(d.a)(this,Object(f.a)(t).call(this,n))).onUpdate=Object(o.a)(a.a.mark(function n(){return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(v.c)("/solution/insert",e.state);case 2:n.sent&&y()({title:"\u0e40\u0e23\u0e35\u0e22\u0e1a\u0e23\u0e49\u0e2d\u0e22",text:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01\u0e41\u0e19\u0e27\u0e17\u0e32\u0e07\u0e41\u0e01\u0e49\u0e17\u0e38\u0e01\u0e02\u0e4c\u0e2a\u0e33\u0e40\u0e23\u0e47\u0e08",icon:"success"}).then(function(){e.props.history.goBack()});case 4:case"end":return n.stop()}},n)})),e._onChangeText=function(n){return e.setState(Object(r.a)({},n.target.name,n.target.value))},e.state={title:"",detail:""},e}return Object(l.a)(t,n),Object(c.a)(t,[{key:"render",value:function(){var n=this;return s.a.createElement(g.c,null,s.a.createElement(h.a,null),s.a.createElement(g.a,null,s.a.createElement(g.b,null,s.a.createElement(h.g,null,s.a.createElement(h.f,{onClick:function(){n.props.history.goBack()},bgAct:"#5DC0EC"},"\u0e01\u0e25\u0e31\u0e1a")),s.a.createElement(h.h,null)),s.a.createElement(g.d,null,s.a.createElement("div",{className:"w-100 px-5"},s.a.createElement(m.b,{title:"\u0e41\u0e19\u0e27\u0e17\u0e32\u0e07\u0e41\u0e01\u0e49\u0e17\u0e38\u0e01\u0e02\u0e4c"}),s.a.createElement(x.a,null,s.a.createElement(b.a,null,s.a.createElement("label",null,"\u0e2b\u0e31\u0e27\u0e02\u0e49\u0e2d\u0e04\u0e33\u0e16\u0e32\u0e21"),s.a.createElement("input",{name:"title",placeholder:"\u0e2b\u0e31\u0e27\u0e02\u0e49\u0e2d\u0e04\u0e33\u0e16\u0e32\u0e21\u0e2b\u0e31\u0e27\u0e02\u0e49\u0e2d\u0e04\u0e33\u0e16\u0e32\u0e21\u0e2b\u0e31\u0e27\u0e02\u0e49\u0e2d\u0e04\u0e33\u0e16\u0e32\u0e21 ?",onChange:this._onChangeText,value:this.state.title,className:"form-control form-group"})),s.a.createElement(b.a,null,s.a.createElement("label",{className:"mt-4"},"\u0e40\u0e19\u0e37\u0e49\u0e2d\u0e2b\u0e32\u0e04\u0e33\u0e15\u0e2d\u0e1a"),s.a.createElement("textarea",{name:"detail",placeholder:"",value:this.state.detail,onChange:this._onChangeText,className:"form-control form-group",style:{minHeight:"250px"}}))),s.a.createElement("div",{className:"row justify-content-center"},s.a.createElement(h.f,{onClick:function(){n.onUpdate()},bgAct:"#5DC0EC",className:"w-10 ml-2"},"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01"))))))}}]),t}(p.Component)},166:function(n,t,e){"use strict";e.d(t,"a",function(){return a});var r=e(0),i=e.n(r);function a(n){var t=n.title,e=n.request;return i.a.createElement("div",{className:"-text-line"},i.a.createElement("p",{style:{color:e?"#29a4db":""}},t))}t.b=function(n){var t=n.title;return i.a.createElement("h2",{className:"Text-Head"},t)}},167:function(n,t,e){"use strict";e.d(t,"g",function(){return E}),e.d(t,"h",function(){return O}),e.d(t,"f",function(){return k}),e.d(t,"a",function(){return z}),e.d(t,"i",function(){return N}),e.d(t,"p",function(){return C}),e.d(t,"o",function(){return H}),e.d(t,"r",function(){return D}),e.d(t,"l",function(){return A}),e.d(t,"q",function(){return P}),e.d(t,"n",function(){return B}),e.d(t,"k",function(){return T}),e.d(t,"m",function(){return _}),e.d(t,"c",function(){return q}),e.d(t,"d",function(){return J}),e.d(t,"e",function(){return U}),e.d(t,"b",function(){return W}),e.d(t,"j",function(){return I});var r=e(4),i=e(3);function a(){var n=Object(r.a)(["\n    position: relative;\n\tbackground: ",";\n\twidth: auto !important;\n    min-width: 140px;\n    text-align: center;\n    border-radius: 20px !important;\n    padding: ","  "," !important;\n    margin: ","  "," !important;\n    color: ",";\n    font-size: 14px;\n    line-height: 1.25;\n    border: ",";\n    cursor: pointer;\n    opacity: .9;\n   \n\t@media screen and (max-width: 1367px) {\n\t\tmin-width: 100px;\n\t\tline-height: 1;\n\t\tpadding: ","  ",";\n\t\tfont-size: 1rem;\n\t}\n\t&: hover{\n\t\tbackground: ",";\n\t\topacity: 1;\n}\n"]);return a=function(){return n},n}function o(){var n=Object(r.a)(["\n    position: relative;\n\tbackground: ",";\n\twidth: auto !important;\n    min-width: 140px;\n    text-align: center;\n    border-radius: 20px !important;\n    padding: ","  "," !important;\n    margin: ","  "," !important;\n    color: ",";\n    font-size: 14px;\n    line-height: 1.25;\n    border: ",";\n    cursor: pointer;\n\topacity: .98;\n\talign-items:center;\n\tjustify-content: center;\n\tdisplay:flex;\n   \n\t\t@media screen and (max-width: 1367px) {\n\t\t\tmin-width: 100px;\n\t\t\tline-height: 1;\n\t\t\tpadding: ","  ",";\n\t\t\tfont-size: small;\n\t\t}\n\t\t&:hover{\n\t\t\tbackground: ",";\n\t\t\topacity: 1;\n\t\t}&>i{\n\t\t\tfont-size:20px;\n\t\t\tmargin-right:5px;\n\n\t\t\t\t@media screen and (max-width: 1367px) {\n\t\t\t\t\tfont-size:15px\n\t\t\t\t}\n\t}\n"]);return o=function(){return n},n}function u(){var n=Object(r.a)(["\n\tdisplay: flex;\n\twidth: 50%;\n\tpadding: 15px;\n\tflex-wrap: wrap;\n\tflex-direction: ",";\n"]);return u=function(){return n},n}function c(){var n=Object(r.a)(["\n\tdisplay: flex;\n\twidth: 50%;\n\tpadding: 15px;\n\tflex-wrap: wrap;\n\tflex-direction: ",";\n"]);return c=function(){return n},n}function d(){var n=Object(r.a)(["\n\tdisplay: flex;\n\tflex-wrap: wrap;\n"]);return d=function(){return n},n}function f(){var n=Object(r.a)(["\n\tposition: relative;\n\tbackground: ",";\n\tmin-width: 100px;\n\ttext-align: center;\n\tborder-radius: 20px;\n\tpadding: .375rem .75rem;\n\tmargin: auto .75rem;\n\tcolor: #ffffff;\n\tfont-size: 14px;\n\tline-height: 1.5;\n\tborder: unset !important;\n\tcursor: pointer;\n\topacity: .9;\n\t&:hover {\n\t\tbackground: #55555520;\n\t\topacity: 1;\n\t\t&:after {\n\t\t\tcontent: '';\n\t\t\tbackground: ",";\n\t\t\tposition: absolute;\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t\ttop: 0px;\n\t\t\tleft: 0px;\n\t\t\tborder-radius: 20px;\n\t\t\tz-index: -1;\n\t\t}\n\t}\n"]);return f=function(){return n},n}function l(){var n=Object(r.a)(["\n\tbackground-color: #00000098;\n\tposition: fixed;\n\ttop: 0;\n\tleft: 0;\n\tz-index: 1000;\n\twidth: 100%;\n\theight: 100%;\n\toverflow: hidden;\n\toutline: 0;\n"]);return l=function(){return n},n}function p(){var n=Object(r.a)(["\n\tposition: absolute;\n\ttop: 0px;\n\tright: 5px;\n\tborder: 0;\n\tfont-size: 18px;\n\tbackground-color: transparent;\n\tz-index: 9999;\n"]);return p=function(){return n},n}function s(){var n=Object(r.a)(["\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tpadding: 1rem 1rem 3rem 1rem;\n\tborder-bottom-right-radius: .3rem;\n\tborder-bottom-left-radius: .3rem;\n\n\t@media screen and (max-width: 1367px){\n\t\tpadding: 1rem;\n\t}\n"]);return s=function(){return n},n}function m(){var n=Object(r.a)(["\n\tposition: relative;\n\tpadding: 1rem;\n\tdisplay: grid;\n"]);return m=function(){return n},n}function x(){var n=Object(r.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: ",";\n    border-top-left-radius: .3rem;\n    border-top-right-radius: .3rem;\n    text-align: center;\n    font-size: 16px;\n    font-weight: 500;\n"]);return x=function(){return n},n}function b(){var n=Object(r.a)(["\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    width: ",";\n    pointer-events: auto;\n    background-color: #fff;\n"]);return b=function(){return n},n}function g(){var n=Object(r.a)(["\n\tdisplay: ",";\n\tbackground-color: #00000098;\n\tposition: fixed;\n\ttop: 0;\n\tleft: 0;\n\tz-index: 999;\n\twidth: 100%;\n\theight: 100%;\n\toverflow: hidden;\n\toutline: 0;\n\talign-items: center;\n\tjustify-content: center;\n"]);return g=function(){return n},n}function h(){var n=Object(r.a)(["\n\tposition: relative;\n\tbackground: ",";\n\theight: 35px;\n\tpadding: 10px 15px;\n\tborder-radius: 40px;\n\tmargin-right: 5px;\n\tborder-radius: 20px;\n\tcolor: #29a4db;\n\tfont-size: 12px;\n\tline-height: 35px;\n\tcursor: pointer;\n\ttext-decoration: none;\n\t&:hover {\n\t\ttext-decoration: none;\n\t\topacity: 1;\n\t\tbackground: #ffffff;\n\t}\n\t@media screen and (max-width: 1367px){\n\t\tpadding: 5px 15px;\n\t}\n"]);return h=function(){return n},n}function v(){var n=Object(r.a)(["\n\tbackground: #29a4db;\n\theight: 120px;\n\tbox-shadow: inset 0 5px 8px #3333;\n"]);return v=function(){return n},n}function w(){var n=Object(r.a)(["\n\tbackground: ",";\n\theight: 35px;\n\tpadding: 0 15px;\n\tmargin-right: 5px;\n\tborder-radius: 20px;\n\tcolor: #fff;\n\tfont-size: 12px;\n\tline-height: 35px;\n\tcursor: pointer;\n\t&:hover {\n\t\tbackground: #33333317;\n\t}\n"]);return w=function(){return n},n}function y(){var n=Object(r.a)([""]);return y=function(){return n},n}function j(){var n=Object(r.a)(["display: inline-flex;"]);return j=function(){return n},n}var E=i.a.div(j()),O=i.a.div(y()),k=i.a.div(w(),function(n){return n.bgAct}),z=i.a.div(v()),N=i.a.a(h(),function(n){return n.bg?n.bg:"#f5f5f5"}),C=i.a.div(g(),function(n){return n.isOpen?"flex":"none"}),H=i.a.div(b(),function(n){return n.w?n.w:"500px"}),D=i.a.div(x(),function(n){return n.p?n.p:"2rem 15px 10px 15px"}),A=i.a.div(m()),P=i.a.div(s()),B=i.a.button(p()),T=i.a.div(l()),_=i.a.div(f(),function(n){return n.bg},function(n){return n.bg}),q=i.a.div(d()),J=i.a.div(c(),function(n){return n.flexDirection}),U=i.a.div(u(),function(n){return n.flexDirection}),W=i.a.div(o(),function(n){return n.bg?n.bg:"#29A4DB"},function(n){return n.py?n.py:".889rem"},function(n){return n.px?n.px:"2rem"},function(n){return n.my?n.my:"auto"},function(n){return n.mx?n.mx:".75rem"},function(n){return n.c?n.c:"#ffffff"},function(n){return n.bord?n.bord:"unset!important"},function(n){return n.py?n.py:".889rem"},function(n){return n.px?n.px:".5rem"},function(n){return n.bgH?n.bgH:"#0e79a9"}),I=i.a.label(a(),function(n){return n.bg?n.bg:"#29A4DB"},function(n){return n.py?n.py:".889rem"},function(n){return n.px?n.px:"2rem"},function(n){return n.my?n.my:"auto"},function(n){return n.mx?n.mx:".75rem"},function(n){return n.c?n.c:"#ffffff"},function(n){return n.bord?n.bord:"unset!important"},function(n){return n.py?n.py:".889rem"},function(n){return n.px?n.px:".5rem"},function(n){return n.bgH?n.bgH:"#0e79a9"})},171:function(n,t,e){"use strict";e.d(t,"c",function(){return a}),e.d(t,"a",function(){return o}),e.d(t,"b",function(){return u}),e.d(t,"d",function(){return c}),e.d(t,"e",function(){return d});var r=e(0),i=e.n(r);function a(n){var t=n.children;return i.a.createElement("div",{className:"admin-PanelRight"},t)}function o(n){var t=n.children;return i.a.createElement("div",{className:"admin-PanelContent"},t)}function u(n){var t=n.children;return i.a.createElement("div",{className:"admin-PanelHead"},t)}function c(n){var t=n.children;return i.a.createElement("div",{className:"admin-PanelWhi"},t)}function d(n){var t=n.children,e=n.cn;return i.a.createElement("div",{className:"admin-PanelWhi marg ".concat(e)},t)}},175:function(n,t,e){"use strict";var r=e(0),i=e.n(r);t.a=function(n){var t=n.children;return i.a.createElement("div",{className:"LabelInput-panel"},t)}},237:function(n,t,e){"use strict";var r=e(0),i=e.n(r);t.a=function(n){var t=n.children;return i.a.createElement("div",{className:"block-panel"},t)}}}]);
//# sourceMappingURL=38.392b8d62.chunk.js.map