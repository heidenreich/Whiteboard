(function(t){function e(e){for(var n,i,a=e[0],l=e[1],c=e[2],p=0,h=[];p<a.length;p++)i=a[p],r[i]&&h.push(r[i][0]),r[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(h.length)h.shift()();return s.push.apply(s,c||[]),o()}function o(){for(var t,e=0;e<s.length;e++){for(var o=s[e],n=!0,a=1;a<o.length;a++){var l=o[a];0!==r[l]&&(n=!1)}n&&(s.splice(e--,1),t=i(i.s=o[0]))}return t}var n={},r={app:0},s=[];function i(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=n,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(o,n,function(e){return t[e]}.bind(null,n));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=e,a=a.slice();for(var c=0;c<a.length;c++)e(a[c]);var u=l;s.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},1:function(t,e){},"15c1":function(t,e,o){},2:function(t,e){},3585:function(t,e,o){"use strict";var n=o("ad9b"),r=o.n(n);r.a},"37a8":function(t,e,o){"use strict";var n=o("4392"),r=o.n(n);r.a},4392:function(t,e,o){},5515:function(t,e,o){"use strict";var n=o("676d"),r=o.n(n);r.a},"56d7":function(t,e,o){"use strict";o.r(e);o("14c6"),o("08c1"),o("4842"),o("d9fc");var n=o("2b0e"),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("whiteboard")},s=[],i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("canvas",{attrs:{id:"whiteboard",resize:""}}),o("mainPanel"),o("historyPanel")],1)},a=[],l=o("2222"),c=o.n(l),u=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"mainPanel"},[o("div",{staticClass:"actionsPanel"},[o("panelToolIcon",{attrs:{toolColor:t.toolColor,isActive:"pencil"===t.tool||"brush"===t.tool,icon:t.activeTool},nativeOn:{click:function(e){return t.toggleToolSettings(e)}}}),o("panelToolIcon",{attrs:{toolColor:"#133337",isActive:"eraser"===t.tool,icon:"eraser"},nativeOn:{click:function(e){t.toggleEraserSettings(),t.setWhiteboardTool("eraser")}}}),o("panelToolIcon",{attrs:{toolColor:t.shapeColor,isActive:"circle"===t.tool||"square"===t.tool||"triangle"===t.tool||"line"===t.tool,icon:t.activeShape},nativeOn:{click:function(e){return t.toggleShapeSettings(e)}}})],1),o("div",{staticClass:"actionSettingsPanel"},[t.isToolSettingsOpened?o("panelToolSettings",[o("div",{staticClass:"settingsActions",attrs:{slot:"settingsActions"},slot:"settingsActions"},[o("panelToolIcon",{attrs:{toolColor:t.toolColor,isActive:"pencil"===t.tool,icon:"pencil-alt"},nativeOn:{click:function(e){return t.setWhiteboardTool("pencil")}}}),o("panelToolIcon",{attrs:{toolColor:t.toolColor,isActive:"brush"===t.tool,icon:"paint-brush"},nativeOn:{click:function(e){return t.setWhiteboardTool("brush")}}})],1),o("colorPicker",{staticClass:"settingsColorPicker",attrs:{slot:"settingsColorPicker",onSelectColor:t.setToolColor,colors:t.colors},slot:"settingsColorPicker"}),o("rangeSlider",{staticClass:"settingsSlider",attrs:{slot:"slider",onChange:t.setToolSize,min:0,max:6,value:t.toolSize},slot:"slider"})],1):t._e(),t.isEraserSettingsOpened?o("panelToolSettings",[o("rangeSlider",{staticClass:"settingsSlider",attrs:{slot:"slider",onChange:t.setEraserSize,min:0,max:24,value:t.eraserSize},slot:"slider"})],1):t._e(),t.isShapeSettingsOpened?o("panelToolSettings",[o("div",{staticClass:"settingsActions",attrs:{slot:"settingsActions"},slot:"settingsActions"},[o("panelToolIcon",{attrs:{toolColor:t.shapeColor,isActive:"circle"===t.tool,icon:"circle"},nativeOn:{click:function(e){return t.setWhiteboardTool("circle")}}}),o("panelToolIcon",{attrs:{toolColor:t.shapeColor,isActive:"square"===t.tool,icon:"square"},nativeOn:{click:function(e){return t.setWhiteboardTool("square")}}}),o("panelToolIcon",{attrs:{toolColor:t.shapeColor,isActive:"triangle"===t.tool,icon:"exclamation-triangle"},nativeOn:{click:function(e){return t.setWhiteboardTool("triangle")}}}),o("panelToolIcon",{attrs:{toolColor:t.shapeColor,isActive:"line"===t.tool,icon:"slash"},nativeOn:{click:function(e){return t.setWhiteboardTool("line")}}})],1),o("colorPicker",{staticClass:"settingsColorPicker",attrs:{slot:"settingsColorPicker",onSelectColor:t.setShapeColor,colors:t.colors},slot:"settingsColorPicker"}),o("rangeSlider",{staticClass:"settingsSlider",attrs:{slot:"slider",onChange:t.setShapeSize,min:0,max:6,value:t.shapeSize},slot:"slider"})],1):t._e()],1)])},p=[],h=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"tool",class:{active:t.isActive}},[o("font-awesome-icon",{attrs:{color:t.toolColor,icon:t.icon}})],1)},d=[],g={props:["icon","toolColor","isActive"]},f=g,v=(o("5cf0"),o("2877")),S=Object(v["a"])(f,h,d,!1,null,null,null),C=S.exports,m=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"toolSettings"},[t._t("settingsActions"),t._t("slider"),t._t("settingsColorPicker")],2)},y=[],_={},T=_,O=(o("37a8"),Object(v["a"])(T,m,y,!1,null,null,null)),b=O.exports,A=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"colorPicker"},t._l(t.colors,(function(e,n){return o("div",{key:n,staticClass:"color",style:{"background-color":e},on:{click:function(o){return t.selectColor(e)}}})})),0)},E=[],w={props:["colors","onSelectColor"],methods:{selectColor:function(t){this.onSelectColor(t)}}},k=w,x=(o("3585"),Object(v["a"])(k,A,E,!1,null,null,null)),z=x.exports,P=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("vue-slider",{attrs:{lazy:!0,min:t.min,max:t.max,dotSize:12,height:3,interval:2,processStyle:{background:"black"},bgStyle:{backgroundColor:"#e6e9f0"},sliderStyle:{backgroundColor:"black",boxShadow:"unset"},tooltip:"none",width:"168px"},model:{value:t.sliderValue,callback:function(e){t.sliderValue=e},expression:"sliderValue"}})},M=[],j=o("4971"),I=o.n(j),$={components:{VueSlider:I.a},data:function(){return{sliderValue:this.value}},props:["min","max","value","onChange"],watch:{sliderValue:function(t){this.onChange(t)}}},D=$,R=Object(v["a"])(D,P,M,!1,null,null,null),W=R.exports,L=["#7841CC","#FFD54F","#00C6C2","#FF0000","#EC008C","#6DCFF6","#FBAF5D","#39B54A","#448CCB"],q={components:{panelToolIcon:C,panelToolSettings:b,rangeSlider:W,colorPicker:z},data:function(){return{isToolSettingsOpened:!1,isEraserSettingsOpened:!1,isShapeSettingsOpened:!1,colors:L}},methods:{toggleToolSettings:function(){this.isToolSettingsOpened=!this.isToolSettingsOpened,this.isEraserSettingsOpened=!1,this.isShapeSettingsOpened=!1},toggleEraserSettings:function(){this.isEraserSettingsOpened=!this.isEraserSettingsOpened,this.isToolSettingsOpened=!1,this.isShapeSettingsOpened=!1},toggleShapeSettings:function(){this.isShapeSettingsOpened=!this.isShapeSettingsOpened,this.isEraserSettingsOpened=!1,this.isToolSettingsOpened=!1},setToolColor:function(t){this.$store.dispatch("setToolColor",t)},setShapeColor:function(t){this.$store.dispatch("setShapeColor",t)},setToolSize:function(t){this.$store.dispatch("setToolSize",t)},setEraserSize:function(t){this.$store.dispatch("setEraserSize",t)},setShapeSize:function(t){this.$store.dispatch("setShapeSize",t)},setWhiteboardTool:function(t){this.$store.dispatch("setWhiteboardTool",t)}},computed:{activeTool:function(){return"pencil"===this.tool?"pencil-alt":"brush"===this.tool?"paint-brush":"pencil-alt"},activeShape:function(){return"cricle"===this.tool?"circle":"square"===this.tool?"square":"triangle"===this.tool?"exclamation-triangle":"line"===this.tool?"slash":"circle"},tool:function(){return this.$store.getters.tool},toolColor:function(){return this.$store.getters.toolArgs.color},shapeColor:function(){return this.$store.getters.shapeArgs.color},toolSize:function(){return this.$store.getters.toolArgs.size},eraserSize:function(){return this.$store.getters.eraserArgs.size},shapeSize:function(){return this.$store.getters.shapeArgs.size}},mounted:function(){this.$store.dispatch("setWhiteboardTool","pencil")}},F=q,U=(o("f52a"),Object(v["a"])(F,u,p,!1,null,null,null)),B=U.exports,H=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"historyPanel"},[o("panelToolIcon",{attrs:{icon:"undo"},nativeOn:{click:function(e){return t.undo(e)}}}),o("panelToolIcon",{attrs:{icon:"redo"},nativeOn:{click:function(e){return t.redo(e)}}})],1)},V=[],Z=o("d225"),G=o("b0b4"),J=function(){function t(e){Object(Z["a"])(this,t),this.limit=e,this.clear()}return Object(G["a"])(t,[{key:"add",value:function(t){(this.history.length>=this.limit||this.current==this.history.length-1)&&this.history.shift(),this.history.push(t),this.current=this.history.length}},{key:"undo",value:function(){this.current>0&&this.history[--this.current].unexec()}},{key:"redo",value:function(){this.history.length>this.current&&this.history[this.current++].exec()}},{key:"clear",value:function(){this.history=[],this.current=0}}]),t}(),K=new J(20),N={components:{panelToolIcon:C},methods:{undo:function(){K.undo()},redo:function(){K.redo()}}},Q=N,X=(o("9345"),Object(v["a"])(Q,H,V,!1,null,null,null)),Y=X.exports,tt={components:{mainPanel:B,historyPanel:Y},created:function(){c.a.install(window)},mounted:function(){c.a.setup("whiteboard")}},et=tt,ot=(o("5515"),Object(v["a"])(et,i,a,!1,null,null,null)),nt=ot.exports,rt={components:{whiteboard:nt}},st=rt,it=Object(v["a"])(st,r,s,!1,null,null,null),at=it.exports,lt=o("2f62"),ct=(o("7f7f"),o("4c17")),ut=o.n(ct),pt=function(t){t||(t=ut()());var e=new c.a.Layer({name:t});return c.a.project.addLayer(e),e},ht=function(){function t(e){Object(Z["a"])(this,t),this._args=e}return Object(G["a"])(t,[{key:"exec",value:function(){if(c.a.project.layers[this._args.layer]||pt(this._args.layer),this.removed)return c.a.project.layers[this._args.layer].addChildren(this.removed)}},{key:"unexec",value:function(){this.removed=c.a.project.layers[this._args.layer].removeChildren()}}]),t}(),dt={path:null,group:null};function gt(t){var e=pt();dt.path=new c.a.Path,dt.path.strokeColor=te.getters.toolArgs.color,dt.path.strokeWidth=te.getters.toolArgs.size,dt.path.add(t.point),dt.group=new c.a.Group({children:[dt.path],layer:e}),dt.group.addChild(new c.a.Shape.Ellipse({layer:e,center:t.point,strokeColor:te.getters.toolArgs.color,fillColor:te.getters.toolArgs.color,radius:te.getters.toolArgs.size/2})),e.addChild(dt.group)}function ft(t){dt.path&&(dt.path.add(t.point),dt.path.selected=!0)}function vt(t){dt.path.add(t.point),dt.path.simplify();var e=new ht({layer:dt.path.layer.name,tool:te.getters.tool,points:dt.path.segments.map((function(t){return{x:t._point._x,y:t._point._y}}))});K.add(e),dt.path.selected=!1,dt.path=null,dt.group=null}var St=new c.a.Tool;St.onMouseDown=gt,St.onMouseDrag=ft,St.onMouseUp=vt;var Ct={path:null};function mt(){var t=pt();Ct.path=new c.a.Path;var e=Ot(te.getters.toolArgs.color||"#000000");Ct.path.fillColor="rgba(".concat(e.r,",").concat(e.g,",").concat(e.b,",0.4)"),t.addChild(Ct.path)}function yt(t){if(Ct.path){var e=t.delta;e.x*=te.getters.toolArgs.size/2.8,e.y*=te.getters.toolArgs.size/2.8,e.angle+=90;var o=t.middlePoint.add(e),n=t.middlePoint.subtract(e);Ct.path.selected=!0,Ct.path.add(o),Ct.path.insert(0,n)}}function _t(){Ct.path.simplify();var t=new ht({layer:Ct.path.layer.name,tool:te.getters.tool,points:Ct.path.segments.map((function(t){return{x:t._point._x,y:t._point._y}}))});K.add(t),Ct.path.selected=!1,Ct.path=null}var Tt=new c.a.Tool;function Ot(t){var e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return e?{r:parseInt(e[1],16),g:parseInt(e[2],16),b:parseInt(e[3],16)}:null}Tt.minDistance=7,Tt.maxDistance=7,Tt.onMouseDown=mt,Tt.onMouseDrag=yt,Tt.onMouseUp=_t;var bt={path:null,group:null};function At(t){var e=pt();bt.path=new c.a.Path,bt.path.strokeColor=te.getters.eraserArgs.color,bt.path.strokeWidth=te.getters.eraserArgs.size,bt.path.add(t.point),bt.group=new c.a.Group({children:[bt.path],layer:e}),bt.group.addChild(new c.a.Shape.Ellipse({layer:e,center:t.point,fillColor:te.getters.eraserArgs.color,radius:te.getters.eraserArgs.size/2})),e.addChild(bt.group)}function Et(t){bt.path&&bt.path.add(t.point)}function wt(t){bt.path.add(t.point),bt.path.simplify();var e=new ht({layer:bt.path.layer.name,tool:{color:te.getters.tool.color,size:te.getters.tool.size},points:bt.path.segments.map((function(t){return{x:t._point._x,y:t._point._y}}))});bt.path=null,bt.group=null,K.add(e)}var kt=new c.a.Tool;kt.onMouseDown=At,kt.onMouseDrag=Et,kt.onMouseUp=wt;var xt={path:null,center:null};function zt(t){var e=pt();xt.path=new c.a.Shape.Circle({center:t.point,strokeColor:te.getters.shapeArgs.color,strokeWidth:te.getters.shapeArgs.size}),e.addChild(xt.path),xt.center=t.point}function Pt(t){xt.path&&(xt.path.radius=Math.sqrt((t.point.x-xt.center.x)*(t.point.x-xt.center.x)+(t.point.y-xt.center.y)*(t.point.y-xt.center.y)))}function Mt(){var t=new ht({layer:xt.path.layer.name,tool:te.getters.tool,center:xt.center,radius:xt.path.radius});xt.path=null,K.add(t)}var jt=new c.a.Tool;jt.onMouseDown=zt,jt.onMouseDrag=Pt,jt.onMouseUp=Mt;var It={path:null,center:null,layer:null};function $t(t){It.layer=pt(),It.center=t.point}function Dt(t){It.path&&It.path.remove(),It.path=new c.a.Shape.Rectangle(It.center,t.point),It.path.strokeColor=te.getters.shapeArgs.color,It.path.strokeWidth=te.getters.shapeArgs.size}function Rt(t){It.layer.addChild(It.path);var e=new ht({layer:It.path.layer.name,tool:te.getters.tool,from:{x:It.center.x,y:It.center.y},to:{x:t.point.x,y:t.point.y}});It.path=null,K.add(e)}var Wt=new c.a.Tool;Wt.onMouseDown=$t,Wt.onMouseDrag=Dt,Wt.onMouseUp=Rt;var Lt={path:null,center:null,layer:null};function qt(t){Lt.layer=pt(),Lt.center=t.point}function Ft(t){Lt.path&&Lt.path.remove(),Lt.path=new c.a.Path.RegularPolygon(Lt.center,3,Math.sqrt((t.point.x-Lt.center.x)*(t.point.x-Lt.center.x)+(t.point.y-Lt.center.y)*(t.point.y-Lt.center.y))),Lt.path.strokeColor=te.getters.shapeArgs.color,Lt.path.strokeWidth=te.getters.shapeArgs.size}function Ut(){Lt.layer.addChild(Lt.path);var t=new ht({layer:Lt.path.layer.name,tool:te.getters.tool,points:Lt.path.segments.map((function(t){return{x:t._point._x,y:t._point._y}}))});K.add(t),Lt.path=null}var Bt=new c.a.Tool;Bt.onMouseDown=qt,Bt.onMouseDrag=Ft,Bt.onMouseUp=Ut;var Ht={path:null};function Vt(t){Ht.path&&Ht.path.remove(),Ht.path=new c.a.Path.Line({from:t.downPoint,to:t.point,strokeColor:"black"}),Ht.path.strokeColor=te.getters.shapeArgs.color,Ht.path.strokeWidth=te.getters.shapeArgs.size}function Zt(){var t=pt();t.addChild(Ht.path);var e=new ht({layer:Ht.path.layer.name,tool:te.getters.tool,points:Ht.path.segments.map((function(t){return{x:t._point._x,y:t._point._y}}))});K.add(e),Ht.path=null}var Gt=new c.a.Tool;Gt.onMouseDrag=Vt,Gt.onMouseUp=Zt;var Jt={pencil:St,brush:Tt,eraser:kt,circle:jt,square:Wt,triangle:Bt,line:Gt},Kt={tool:null,toolArgs:{size:2,color:"#000000"},eraserArgs:{size:2,color:"#133337"},shapeArgs:{size:2,color:"#000000"}},Nt={SET_TOOL_COLOR:function(t,e){t.toolArgs.color=e},SET_TOOL_SIZE:function(t,e){t.toolArgs.size=e},SET_ERASER_SIZE:function(t,e){t.eraserArgs.size=e},SET_ERASER_COLOR:function(t,e){t.eraserArgs.color=e},SET_SHAPE_SIZE:function(t,e){t.shapeArgs.size=e},SET_SHAPE_COLOR:function(t,e){t.shapeArgs.color=e},SET_WHITEBOARD_TOOL:function(t,e){t.tool=e,Jt[e]&&Jt[e].activate()}},Qt={setToolColor:function(t,e){var o=t.commit;o("SET_TOOL_COLOR",e)},setToolSize:function(t,e){var o=t.commit;o("SET_TOOL_SIZE",e)},setEraserSize:function(t,e){var o=t.commit;o("SET_ERASER_SIZE",e)},setEraserColor:function(t,e){var o=t.commit;o("SET_ERASER_COLOR",e)},setShapeSize:function(t,e){var o=t.commit;o("SET_SHAPE_SIZE",e)},setShapeColor:function(t,e){var o=t.commit;o("SET_SHAPE_COLOR",e)},setWhiteboardTool:function(t,e){var o=t.commit;o("SET_WHITEBOARD_TOOL",e)}},Xt={tool:function(t){return t.tool},toolArgs:function(t){return t.toolArgs},eraserArgs:function(t){return t.eraserArgs},shapeArgs:function(t){return t.shapeArgs}},Yt={state:Kt,mutations:Nt,actions:Qt,getters:Xt};n["default"].use(lt["a"]);var te=new lt["a"].Store({modules:{whiteboardModule:Yt}}),ee=o("ecee"),oe=o("ad3d"),ne=o("c074");ee["c"].add({faPencilAlt:ne["f"],faUndo:ne["j"],faRedo:ne["g"],faEraser:ne["b"],faCircle:ne["a"],faFont:ne["d"],faUpload:ne["k"],faPaintBrush:ne["e"],faSquare:ne["i"],faExclamationTriangle:ne["c"],faSlash:ne["h"]}),n["default"].component("font-awesome-icon",oe["a"]);o("24df");n["default"].config.productionTip=!1,new n["default"]({render:function(t){return t(at)},store:te}).$mount("#app")},"5cf0":function(t,e,o){"use strict";var n=o("d1b3"),r=o.n(n);r.a},"676d":function(t,e,o){},9345:function(t,e,o){"use strict";var n=o("15c1"),r=o.n(n);r.a},ad9b:function(t,e,o){},d1b3:function(t,e,o){},f020:function(t,e,o){},f52a:function(t,e,o){"use strict";var n=o("f020"),r=o.n(n);r.a}});
//# sourceMappingURL=app.7b8abd02.js.map