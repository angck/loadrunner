(function(a,b){function y(a){var b,c;for(var d=0,e;e=w.matchers[d];d++){var f=e[0],g=e[1];if(b=a.match(f))return g(a)}}function x(a){var b=[];for(var c=0,d;d=a[c];c++)typeof d=="string"&&(d=y(d)),k(d)&&(d=new r(x(d))),b.push(d);return b}function w(){var a=j(arguments),b;typeof a[a.length-1]=="function"&&(b=a.pop());var c=new q(x(a));b&&c.then(b);return c}function v(){var a=j(arguments),b=[],c,d;typeof a[0]=="string"&&(c=a.shift()),k(a[0])&&(b=a.shift()),d=a.shift();return p.current=new p(c,function(a){function f(){var e=u(j(b),c),f;typeof d=="function"?f=d.apply(c,e):f=d,typeof f=="undefined"&&(f=c.exports),a(f)}var c=this,e=[];for(var g=0,h=b.length;g<h;g++){var i=b[g];l(["require","exports"],i)==-1&&e.push(t(i,c))}e.length>0?w.apply(this,e.concat(f)):f()})}function u(a,b){function d(a){return p.exports[t(a,b)]}var c=[];for(var e=0,f=a.length;e<f;e++){if(a[e]=="require"){c.push(d);continue}if(a[e]=="exports"){b.exports=b.exports||{},c.push(b.exports);continue}c.push(d(a[e]))}return c}function t(a,b){var c=b.id||"",d=c.split("/");d.pop();var e=d.join("/");return a.replace(/^\./,e)}function s(){var a=j(arguments),b,c;typeof a[0]=="string"&&(b=a.shift()),c=a.shift();return p.current=new p(b,c)}function r(a){this.deps=a}function q(a){this.deps=a}function p(a,b){this.id=a,this.body=b,typeof b=="undefined"&&(this.path=this.resolvePath(a))}function o(a,b){this.path=a,this.force=!!b}function n(){}function m(){var a=j(arguments),b=[];for(var c=0,d=a.length;c<d;c++)a[c].length>0&&b.push(a[c].replace(/\/$/,""));return b.join("/")}function l(a,b){for(var c=0,d;d=a[c];c++)if(b==d)return c;return-1}function j(a){return Array.prototype.slice.call(a)}var c=b.getElementsByTagName("script"),d,e=b.createElement("script"),f={},g={};for(var h=0,i;i=c[h];h++)if(i.src.match(/loadrunner\.js(\?|#|$)/)){d=i;break}var k=Array.isArray||function(a){return a.constructor==Array};n.prototype.then=function(a){this.started||(this.started=!0,this.start()),this.completed?a.apply(this,this.results):(this.callbacks=this.callbacks||[],this.callbacks.push(a));return this},n.prototype.start=function(){},n.prototype.complete=function(){if(!this.completed){this.results=j(arguments),this.completed=!0;if(this.callbacks)for(var a=0,b;b=this.callbacks[a];a++)b.apply(this,this.results)}},o.loaded=[],o.prototype=new n,o.prototype.start=function(){var a=this,b;(b=f[this.path])?b.then(function(){a.loaded()}):!this.force&&l(o.loaded,this.path)>-1?this.loaded():this.load();return this},o.prototype.load=function(){var a=this;f[this.path]=a;var b=function(){a.loaded()},d=e.cloneNode(!1);d.type="text/javascript",d.async=!0,d.onload=b,d.onerror=function(){throw new Error(a.path+" not loaded")},d.onreadystatechange=function(){l(["loaded","complete"],this.readyState)>-1&&(this.onreadystatechange=null,b())},d.src=this.path,c[0].parentNode.insertBefore(d,c[0])},o.prototype.loaded=function(){this.mark(),this.complete()},o.prototype.mark=function(){delete f[this.path],l(o.loaded,this.path)==-1&&o.loaded.push(this.path)},p.exports={},p.prototype=new o,p.prototype.resolvePath=function(a){return m(w.path,a+".js")},p.prototype.start=function(){var a,b,c=this;this.body?this.execute():(a=p.exports[this.id])?this.exp(a):(b=g[this.id])?b.then(function(a){c.exp(a)}):(g[this.id]=this,o.prototype.start.call(this))},p.prototype.loaded=function(){var a=this;this.mark();if(p.current)p.current.id=this.id,p.current.then(function(b){delete g[a.id],a.exp(b)}),p.current=null;else throw new Error("Module "+this.id+" was not defined in "+this.path)},p.prototype.execute=function(){var a=this;typeof this.body=="object"?this.exp(this.body):typeof this.body=="function"&&this.body(function(b){a.exp(b)})},p.prototype.exp=function(a){this.complete(this.exports=p.exports[this.id]=a)},q.prototype=new n,q.prototype.start=function(){function b(){var b=[];for(var c=0,d;d=a.deps[c];c++){if(!d.completed)return;d.results.length>0&&(b=b.concat(d.results))}a.complete.apply(a,b)}var a=this;for(var c=0,d;d=this.deps[c];c++)d.then(b);return this},r.prototype=new n,r.prototype.start=function(){var a=this,b=0,c=[];(function d(){var e=a.deps[b++];e?e.then(function(a){e.results.length>0&&c.concat(e.results),d()}):a.complete(c)})();return this},v.amd={},w.path="",w.matchers=[],w.matchers.add=function(a,b){this.push([a,b])},w.matchers.add(/\.js$/,function(a){return new o(a.replace(/^\$/,w.path.replace(/\/$/,"")+"/"))}),w.matchers.add(/^[a-zA-Z0-9_\-\/]+$/,function(a){return new p(a)}),a.loadrunner={Script:o,Module:p,Collection:q,Sequence:r,Dependency:n},a.using=w,a.provide=s,a.define=v,d&&(w.path=d.getAttribute("data-path")||d.src.split(/loadrunner\.js/)[0]||"",(main=d.getAttribute("data-main"))&&w.apply(a,main.split(/\s*,\s*/)).then(function(){}))})(this,document)