//additional d3.js helper libraries

//jetpack https://github.com/gka/d3-jetpack
!function(a,b){"undefined"!=typeof module&&module.exports?module.exports=b(require("d3")):"function"==typeof define&&define.amd?define(["d3"],b):a.d3=b(a.d3)}(this,function(a){function c(a){if("string"==typeof a){var e,c={},d=a.split(b);for(a=d.shift();e=d.shift();)"."==e?c.class=c.class?c.class+" "+d.shift():d.shift():"#"==e&&(c.id=d.shift());return c.id||c.class?{tag:a,attr:c}:a}return a}function d(b){var c=a.namespace||a.ns.qualify;return"function"==typeof b?b:(b=c(b)).local?function(){return this.ownerDocument.createElementNS(b.space,b.local)}:function(){return this.ownerDocument.createElementNS(this.namespaceURI,b)}}function e(a){return"function"==typeof a?a:function(){return this.querySelector(a)}}a.selection.prototype.translate=function(a){return this.attr("transform",function(b,c){return"translate("+["function"==typeof a?a.call(this,b,c):a]+")"})},a.transition.prototype.translate=function(a){return this.attr("transform",function(b,c){return"translate("+["function"==typeof a?a.call(this,b,c):a]+")"})},a.selection.prototype.tspans=function(a,b){return this.selectAll("tspan").data(a).enter().append("tspan").text(function(a){return a}).attr("x",0).attr("dy",function(a,c){return c?b||15:0})},a.selection.prototype.append=function(a){var e,b=c(a);a=b.attr?b.tag:a,a=d(a),e=this.select(function(){return this.appendChild(a.apply(this,arguments))});for(var a in b.attr)e.attr(a,b.attr[a]);return e},a.selection.prototype.insert=function(a,b){var g,f=c(a);a=f.attr?f.tag:a,a=d(a),b=e(b),g=this.select(function(){return this.insertBefore(a.apply(this,arguments),b.apply(this,arguments)||null)});for(var a in f.attr)g.attr(a,f.attr[a]);return g},a.selection.enter&&(a.selection.enter.prototype.append=a.selection.prototype.append,a.selection.enter.prototype.insert=a.selection.prototype.insert);var b=/([\.#])/g;a.wordwrap=function(a,b){var c=a.split(" "),d=[],e=[],f=b||40,g=0;return c.forEach(function(a){g+a.length>f&&(d.push(e.join(" ")),e.length=0,g=0),g+=a.length,e.push(a)}),e.length&&d.push(e.join(" ")),d},a.ascendingKey=function(a){return"function"==typeof a?function(b,c){return a(b)<a(c)?-1:a(b)>a(c)?1:a(b)>=a(c)?0:NaN}:function(b,c){return b[a]<c[a]?-1:b[a]>c[a]?1:b[a]>=c[a]?0:NaN}},a.descendingKey=function(a){return"function"==typeof a?function(b,c){return a(c)<a(b)?-1:a(c)>a(b)?1:a(c)>=a(b)?0:NaN}:function(b,c){return c[a]<b[a]?-1:c[a]>b[a]?1:c[a]>=b[a]?0:NaN}},a.f=function(){for(var a=arguments,b=0,c=a.length;b<c;)"string"!=typeof a[b]&&"number"!=typeof a[b]||(a[b]=function(a){return function(b){return b[a]}}(a[b])),b++;return function(b){for(var c=0,d=a.length;c++<d;)b=a[c-1].call(this,b);return b}},"undefined"==typeof window||window.hasOwnProperty("ƒ")||(window.ƒ=a.f);var f=a.selection.prototype.on;return a.selection.prototype.on=function(a,b,c){if("string"==typeof a&&a.indexOf(" ")>-1){a=a.split(" ");for(var d=0;d<a.length;d++)f.apply(this,[a[d],b,c])}else f.apply(this,[a,b,c]);return this},a.selection.prototype.prop=a.selection.prototype.property,a});

//starter kit https://github.com/1wheel/d3-starterkit
!function(){function a(a){a.conventions=function(b){return b=b||{},b.margin=b.margin||{top:20,right:20,bottom:20,left:80},b.width=b.width||b.totalWidth-b.margin.left-b.margin.right||auto,b.height=b.height||b.totalHeight-b.margin.top-b.margin.bottom||460,b.totalWidth=b.width+b.margin.left+b.margin.right,b.totalHeight=b.height+b.margin.top+b.margin.bottom,b.parentSel=b.parentSel||a.select("body"),b.svg=b.svg||b.parentSel.append("svg").attr("width",b.width+b.margin.left+b.margin.right).attr("height",b.height+b.margin.top+b.margin.bottom).append("g").attr("transform","translate("+b.margin.left+","+b.margin.top+")"),b.color=b.color||a.scaleOrdinal().range(a.schemeCategory10),b.x=b.x||a.scaleLinear().range([0,b.width]),b.y=b.y||a.scaleLinear().range([b.height,0]),b.rScale=b.rScale||a.scaleSqrt().range([5,20]),b.line=b.line||a.line(),b.xAxis=b.xAxis||a.axisBottom().scale(b.x),b.yAxis=b.yAxis||a.axisLeft().scale(b.y),b.drawAxis=function(){b.svg.append("g").attr("class","x axis").attr("transform","translate(0,"+b.height+")").call(b.xAxis),b.svg.append("g").attr("class","y axis").call(b.yAxis)},b},a.attachTooltip=function(b,c){function e(b){a.select(".tooltip").classed("tooltip-hidden",!1).html("").dataAppend(c,"div").html(function(a){return a(b)}),a.select(this).classed("tooltipped",!0)}function f(b){var c=a.select(".tooltip");if(c.size()){var d=a.event,e=d.clientX,f=d.clientY,g=window.scrollY?window.scrollY:document.documentElement&&document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop;n=c.node(),nBB=n.getBoundingClientRect(),c.style("top",f+g-nBB.height-18+"px"),c.style("left",Math.min(Math.max(20,e-nBB.width/2),window.innerWidth-nBB.width-20)+"px")}}function g(b){a.select(".tooltip").classed("tooltip-hidden",!0),a.selectAll(".tooltipped").classed("tooltipped",!1)}if(b.size()){b.on("mouseover.attachTooltip",e).on("mousemove.attachTooltip",f).on("mouseout.attachTooltip",g).on("click.attachTooltip",function(a){console.log(a)});var d=b.datum();c=c||a.keys(d).filter(function(a){return"object"!=typeof d[a]&&"array"!=d[a]}).map(function(a){return function(b){return a+": <b>"+b[a]+"</b>"}})}},a.selection.prototype.dataAppend=function(a,b){return this.selectAll(b).data(a).enter().append(b)}}"object"==typeof d3&&d3.version?a(d3):"function"==typeof define&&define.amd&&define(["lib/d3"],a)}();
