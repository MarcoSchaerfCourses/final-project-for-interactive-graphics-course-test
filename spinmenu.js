//EYEspin_dhtml (c) Petre Stefan
//email: eyecon@eyecon.ro
//website: www.eyecon.ro
//Modified by JavaScriptKit.com for relative positioning of menu
//please leave this copyright notice intact

eye={p:0,x:0,y:0,w:0,h:0,r:0,v:0,s:0,isVertical:0,a1:0,a2:0,a3:0,color:'#ff0000',colorover:'#ff0000',backgroundcolor:'#FFFF00',backgroundcolorover:'#FFFF00',bordercolor:'#000000',fontsize:12,fontfamily:'Arial',pas:0,spinmenu:function(){this.p=this.r/this.s;this.a1=this.a2=this.isVertical?0:Math.PI/2},spinmenuitem:function(a7,a6,a5){a4=" onclick='window.open(\""+a6+"\""+(a5?(",\""+a5+"\""):",\"_self\"")+")'";document.write("<div id='spinmenu"+this.a3+"' style='cursor:pointer;cursor:expression(\"hand\");position:absolute;width:"+this.w+"px;left:"+this.h+"px;"+"background-color:"+this.backgroundcolor+";color:"+this.color+";border:1px solid "+this.bordercolor+";font:normal "+this.fontsize+"px "+this.fontfamily+";text-align:center;cursor:default;z-Index:1000;' onmouseover='this.style.color=\""+this.colorover+"\";this.style.backgroundColor=\""+this.backgroundcolorover+"\"'"+	"onmouseout='this.style.color=\""+this.color+"\";this.style.backgroundColor=\""+this.backgroundcolor+"\"'"+a4+">"+a7+"</div>");this.a3++},muta:function(){a8=document.getElementById("controale");for(i=0;i<this.a3;i++){a9=document.getElementById("spinmenu"+i+"");a9s=a9.style;if(this.isVertical){xi=parseInt(this.r*Math.cos(this.a1+i*this.pas))/this.s;yi=parseInt(this.r*Math.sin(this.a1+i*this.pas));a10=(this.p+xi)/(2*this.p);a11=this.fontsize*(this.p+xi)/(2*this.p)+2;a12=parseInt(100*(this.p+xi)/(2*this.p))}else{xi=parseInt(this.r*Math.cos(this.a1+i*this.pas));yi=parseInt(this.r*Math.sin(this.a1+i*this.pas))/this.s;a10=(this.p+yi)/(2*this.p);a11=this.fontsize*(this.p+yi)/(2*this.p)+2;a12=parseInt(100*(this.p+yi)/(2*this.p))};a13=(this.w-20)*a10+20;a14=(this.h-20)*a10+10;a9s.top=(yi+this.y-a14/2)+"px";a9s.left=(xi+this.x-a13/2)+"px";a9s.width=a13+"px";a9s.fontSize=a11+"px";a9s.zIndex=a12};a8.style.top=this.y+(this.isVertical?this.r:this.p)+this.h/2+6;a8.style.left=this.x-a8.offsetWidth/2;if(this.a1!=this.a2){this.a1=(this.a1>this.a2)?(this.a1-this.pas/this.v):(this.a1+this.pas/this.v);if(Math.abs(this.a1-this.a2)<this.pas/this.v)
this.a1=this.a2;setTimeout("eye.muta()",10)}},spinmenuclose:function(){this.pas=2*Math.PI/this.a3;document.write('<div id="controale" style="position:absolute"><button type="" onclick="eye.a2+=eye.pas;eye.muta()" onfocus="this.blur()">&lt;&lt;</button> <button type="" onclick="eye.a2-=eye.pas;eye.muta()" onfocus="this.blur()">&gt;&gt;</button></div>');eye.muta()}};

function getposOffset(what, offsettype){var totaloffset=(offsettype=="left")? what.offsetLeft : what.offsetTop;var parentEl=what.offsetParent;while (parentEl!=null){totaloffset=(offsettype=="left")? totaloffset+parentEl.offsetLeft :totaloffset+parentEl.offsetTop;parentEl=parentEl.offsetParent;}return totaloffset;
}
