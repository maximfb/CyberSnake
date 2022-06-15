(()=>{"use strict";var e={864:(e,t,o)=>{e.exports=o.p+"0b063497f84220b51fea.mp3"},853:(e,t,o)=>{e.exports=o.p+"fd5c38597b30d8e0d981.ogg"},177:(e,t,o)=>{e.exports=o.p+"10cf8e6bf43f1fb36ce4.wav"},4:(e,t,o)=>{e.exports=o.p+"ce7884bb8149d2235ddf.mp3"},124:(e,t,o)=>{e.exports=o.p+"4445be853ff1ab82f5f9.ogg"},774:(e,t,o)=>{e.exports=o.p+"18c087e695c4b839b273.wav"}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,o),i.exports}o.m=e,o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var t=o.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e})(),o.b=document.baseURI||self.location.href,(()=>{function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function t(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}var n="END",r=function(e){return n=e},i=t((function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.canvasWidth=480,this.canvasHeight=480,this.sleepKey=50,this.step=0,this.maxStep=6,this.sizeCell=16,this.sizeEat=this.sizeCell/4,this.storage=null,this.storageTheme="game_theme",this.storageColor="game_color",this.appName="Cyber Snake"}));function s(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var a=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.element=document.createElement("canvas"),this.ctx=this.element.getContext("2d"),this.config=new i,this.element.width=this.config.canvasWidth,this.element.height=this.config.canvasHeight,t.append(this.element)}var t,o;return t=e,(o=[{key:"clear",value:function(){this.ctx.clearRect(0,0,this.element.width,this.element.height)}}])&&s(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),e}();function c(e,t){return Math.floor(Math.random()*(t-e)+e)}function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Object.assign(e.style,t)}var h=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.documentElement,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"string",n=getComputedStyle(t).getPropertyValue(e);switch(n.length&&(n=n.replace(/"/g,"").trim()),o){case"number":case"int":return parseInt(n,10);case"float":return parseFloat(n,10);case"boolean":case"bool":return"true"===n||"1"===n}return n};function u(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var f=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.colorArr=["red","pink","purple","green","yellow","white"],this.scoreSoundArr=[new URL(o(4),o.b).pathname,new URL(o(774),o.b).pathname,new URL(o(124),o.b).pathname],this.loosSoundArr=[new URL(o(864),o.b).pathname,new URL(o(177),o.b).pathname,new URL(o(853),o.b).pathname],this.updateTheme()}var t,n;return t=e,(n=[{key:"updateTheme",value:function(){this.controlThemeColor=h("--control-theme-color"),this.recordColor=h("--record-color"),this.snakeHeadColor=h("--snake-head-color"),this.snakeBodyColor=h("--snake-body-color"),this.eatColor=h("--eat-color"),this.loosColor=h("--loos-color")}}])&&u(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function p(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var m=function(){function e(t,o,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.config=new i,this.theme=new f,this.update=t,this.render=o,this.canvas=n,this.rAF,this.animate=this.animate.bind(this),this.lastLoop=new Date,this.loop,this.fps}var t,o;return t=e,(o=[{key:"animate",value:function(){"START"===n?this.rAF=requestAnimationFrame(this.animate):"PAUSE"===n?this.pause():"END"===n&&this.end(),++this.config.step<this.config.maxStep||(this.config.step=0,this.update(),this.render())}},{key:"pause",value:function(){r("PAUSE"),cancelAnimationFrame(this.rAF)}},{key:"end",value:function(){this.theme.updateTheme(),r("END"),cancelAnimationFrame(this.rAF),document.querySelector(".game-start").textContent="START",this.canvas.clear(this.canvas.ctx);for(var e=0;e<this.config.canvasWidth;e+=this.config.sizeCell)for(var t=0;t<this.config.canvasHeight;t+=this.config.sizeCell)this.canvas.ctx.beginPath(),this.canvas.ctx.fillStyle=this.theme.loosColor,this.canvas.ctx.arc(e+this.config.sizeCell/2,t+this.config.sizeCell/2,this.config.sizeEat,0,2*Math.PI),this.canvas.ctx.fill()}},{key:"fpsCounter",value:function(){return this.loop=new Date,this.fps=Math.round(1e3/(this.loop-this.lastLoop)),this.lastLoop=this.loop,this.fps}}])&&p(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),e}();function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var b=function(){function e(t,o){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.5;y(this,e),this.audio=document.createElement("audio"),this.urls=t,this.loop=o,this.volume=n,this.state="stop",this.fillAudio(),this.audio.volume=this.volume,this.audio.loop=this.loop}var t,o;return t=e,(o=[{key:"fillAudio",value:function(){for(var e=0;e<this.urls.length;e++){var t=document.createElement("source");t.src=this.urls[e],this.audio.append(t)}}},{key:"play",value:function(){this.audio.currentTime=0,this.audio.play(),this.state="play"}},{key:"pause",value:function(){this.audio.pause(),this.state="pause"}},{key:"stop",value:function(){this.audio.pause(),this.audio.currentTime=0,this.state="stop"}}])&&d(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),e}();function g(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var v=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.config=new i,this.theme=new f,this.tails=[],this.maxTails=3,this.direction="RIGHT",this.sleepTime=this.config.sleepKey,this.randomSpawn(),this.dx=0,this.dy=0,this.scoreSound=new b(this.theme.scoreSoundArr,!1,.1),this.loosSound=new b(this.theme.loosSoundArr,!1,.1),this.control()}var t,o;return t=e,(o=[{key:"move",value:function(e,t,o){var n=this;switch(this.direction){case"UP":this.dy=-this.config.sizeCell,this.dx=0;break;case"DOWN":this.dy=this.config.sizeCell,this.dx=0;break;case"RIGHT":this.dx=this.config.sizeCell,this.dy=0;break;case"LEFT":this.dx=-this.config.sizeCell,this.dy=0}this.x+=this.dx,this.y+=this.dy,this.tails.unshift({x:this.x,y:this.y}),this.tails.length>this.maxTails&&this.tails.pop(),this.collisions(this.config.canvasWidth,this.config.canvasHeight),this.tails.forEach((function(r,i){r.x==e.x&&r.y==e.y&&(n.maxTails++,n.scoreSound.play(),t.incScore(t),t.score>o.score&&o.incScore(),t.score>=o.score&&l(o.scoreTable,{color:n.theme.controlThemeColor}),e.random());for(var s=i+1;s<n.tails.length;s++)r.x==n.tails[s].x&&r.y==n.tails[s].y&&(n.loss(),n.loosSound.play(),t.reset(),l(o.scoreTable,{color:n.theme.recordColor}),o.setLocalScore(),e.random())}))}},{key:"draw",value:function(e){var t=this;this.theme.updateTheme(),this.tails.forEach((function(o,n){e.fillStyle=0===n?t.theme.snakeHeadColor:t.theme.snakeBodyColor,e.beginPath(),e.arc(o.x+t.config.sizeCell/2,o.y+t.config.sizeCell/2,t.config.sizeCell/2,0,2*Math.PI),e.fill()}))}},{key:"collisions",value:function(e,t){this.x<0?this.x=e:this.x>=e&&(this.x=-this.config.sizeCell),this.y<0?this.y=t:this.y>=t&&(this.y=-this.config.sizeCell/2)}},{key:"loss",value:function(){r("END"),this.randomSpawn(),this.dx=0,this.dy=0,this.tails=[],this.maxTails=3}},{key:"control",value:function(){var e,t=this;document.addEventListener("keydown",(function(o){switch(o.code){case"KeyW":case"ArrowUp":"DOWN"==t.direction||"START"!==n||e?t.direction:t.direction="UP",e=setTimeout((function(){return e=clearTimeout(e)}),t.sleepTime);break;case"KeyS":case"ArrowDown":"UP"==t.direction||"START"!==n||e?t.direction:t.direction="DOWN",e=setTimeout((function(){return e=clearTimeout(e)}),t.sleepTime);break;case"KeyA":case"ArrowLeft":"RIGHT"==t.direction||"START"!==n||e?t.direction:t.direction="LEFT",e=setTimeout((function(){return e=clearTimeout(e)}),t.sleepTime);break;case"KeyD":case"ArrowRight":"LEFT"==t.direction||"START"!==n||e?t.direction:t.direction="RIGHT",e=setTimeout((function(){return e=clearTimeout(e)}),t.sleepTime)}}))}},{key:"randomSpawn",value:function(){this.x=c(this.maxTails,this.config.canvasWidth/this.config.sizeCell-this.maxTails)*this.config.sizeCell,this.y=c(this.maxTails,this.config.canvasHeight/this.config.sizeCell-this.maxTails)*this.config.sizeCell}}])&&g(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),e}();function w(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var T=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.config=new i,this.theme=new f,this.x=0,this.y=0,this.random()}var t,o;return t=e,(o=[{key:"draw",value:function(e){this.theme.updateTheme(),e.beginPath(),e.fillStyle=this.theme.eatColor,e.arc(this.x+this.config.sizeCell/2,this.y+this.config.sizeCell/2,this.config.sizeEat,0,2*Math.PI),e.fill()}},{key:"random",value:function(){this.x=c(0,this.config.canvasWidth/this.config.sizeCell)*this.config.sizeCell,this.y=c(0,this.config.canvasHeight/this.config.sizeCell)*this.config.sizeCell}}])&&w(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),e}();function S(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function C(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var O=function(){function e(t){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;S(this,e),this.scoreTable=document.querySelector(t),this.score=o,this.config=new i,this.theme=new f,this.draw()}var t,o;return t=e,(o=[{key:"incScore",value:function(){this.score++}},{key:"reset",value:function(){this.score=0,this.draw()}},{key:"draw",value:function(){this.theme.updateTheme(),l(this.scoreTable,{color:this.theme.controlThemeColor}),this.scoreTable.textContent=this.score}}])&&C(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),e}();function k(e){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},k(e)}function x(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function P(){return P="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,o){var n=j(e,t);if(n){var r=Object.getOwnPropertyDescriptor(n,t);return r.get?r.get.call(arguments.length<3?e:o):r.value}},P.apply(this,arguments)}function j(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=A(e)););return e}function E(e,t){return E=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},E(e,t)}function R(e,t){if(t&&("object"===k(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function A(e){return A=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},A(e)}var L=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&E(e,t)}(s,e);var t,o,n,r,i=(n=s,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=A(n);if(r){var o=A(this).constructor;e=Reflect.construct(t,arguments,o)}else e=t.apply(this,arguments);return R(this,e)});function s(e,t){var o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(o=i.call(this,e,t)).theme=new f,o.config.storage="record_score",o.score=o.getLocalScore(),o.draw(),o}return t=s,(o=[{key:"incScore",value:function(){P(A(s.prototype),"incScore",this).call(this)}},{key:"setLocalScore",value:function(){localStorage.setItem(this.config.storage,JSON.stringify(this.score))}},{key:"getLocalScore",value:function(){return localStorage.getItem(this.config.storage)?JSON.parse(localStorage.getItem(this.config.storage)):0}},{key:"draw",value:function(){this.theme.updateTheme(),this.scoreTable.textContent=this.score}}])&&x(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),s}(O);function _(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function z(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var I=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.querySelector("body"),o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"div";_(this,e),this.container=t,this.element=o,this.showTime}var t,o;return t=e,(o=[{key:"appendComponent",value:function(){return this.container.append(this.element)}},{key:"deleteComponent",value:function(){return this.container.lastChild.remove()}},{key:"hideComponent",value:function(){return this.element.style.opacity=0}}])&&z(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),e}();function D(e){return D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},D(e)}function N(e,t){return N=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},N(e,t)}function U(e,t){if(t&&("object"===D(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function $(e){return $=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},$(e)}var F=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&N(e,t)}(s,e);var t,o,n,r=(o=s,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=$(o);if(n){var r=$(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return U(this,e)});function s(e,t){var o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(o=r.call(this,e,t)).config=new i,o.container=e,o.element=document.createElement(t),o.showTime=1500,o.element.className="preloader",o.element.innerHTML=o.config.appName,l(o.element,{width:"100vw",height:"100vh"}),o.appendComponent(),setTimeout((function(){return o.hideComponent()}),o.showTime),setTimeout((function(){return o.deleteComponent()}),o.showTime+500),o}return t=s,Object.defineProperty(t,"prototype",{writable:!1}),t}(I);function H(e){return H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},H(e)}function q(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function G(e,t){return G=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},G(e,t)}function W(e,t){if(t&&("object"===H(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return B(e)}function B(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function M(e){return M=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},M(e)}var K=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&G(e,t)}(a,e);var t,o,n,r,s=(n=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=M(n);if(r){var o=M(this).constructor;e=Reflect.construct(t,arguments,o)}else e=t.apply(this,arguments);return W(this,e)});function a(e,t){var o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(o=s.call(this,e,t)).config=new i,o.theme=new f,o.container=e,o.element=document.createElement(t),o.element.className="fps",o.element.textContent=o.fps,o.fpsCounter=o.fpsCounter.bind(B(o)),o.lastLoop=new Date,o.loop,o.fps,o.fpsCounter(),o}return t=a,(o=[{key:"fpsCounter",value:function(){this.loop=new Date,this.fps=Math.round(1e3/(this.loop-this.lastLoop)),this.lastLoop=this.loop,this.element.textContent=this.fps,requestAnimationFrame(this.fpsCounter)}}])&&q(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),a}(I);function J(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var V=function(){function e(t,o,n,r,s,a){var c=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.config=new i,this.theme=new f,this.$=document.documentElement,this.element=document.querySelector(t),this.gameLoop=o,this.render=n,this.score=r,this.recordScore=s,this.fps=a,localStorage.getItem(this.config.storageColor)?this.colorCount=this.theme.colorArr.indexOf(localStorage.getItem(this.config.storageColor)):this.colorCount=0,this.element.onclick=function(e){switch(e.target.name){case"start":c.startGame();break;case"settings":c.toggleClass([e.target,c.element.querySelector(".settings")],"_isOpen");break;case"fps":c.toggleClass([e.target],"_isActive"),e.target.classList.contains("_isActive")?c.fps.appendComponent():c.fps.deleteComponent();break;case"color":c.colorGame();break;case"theme":c.themeGame()}}}var t,o;return t=e,(o=[{key:"startGame",value:function(){"END"===n||"PAUSE"===n?(r("START"),this.element.textContent="PAUSE",this.gameLoop.animate()):(this.gameLoop.pause(),this.element.textContent="START")}},{key:"colorGame",value:function(){this.colorCount++,this.colorCount>=this.theme.colorArr.length&&(this.colorCount=0),this.$.dataset.color=this.theme.colorArr[this.colorCount],localStorage.setItem(this.config.storageColor,this.theme.colorArr[this.colorCount]),this.theme.updateTheme(),this.render(),"END"===n&&this.gameLoop.end(),this.score.score>=this.recordScore.score&&0!=this.recordScore.score?l(this.recordScore.scoreTable,{color:this.theme.controlThemeColor}):l(this.recordScore.scoreTable,{color:this.theme.recordColor})}},{key:"themeGame",value:function(){"dark"===this.$.dataset.theme?this.$.dataset.theme="light":this.$.dataset.theme="dark",localStorage.setItem(this.config.storageTheme,this.$.dataset.theme),this.theme.updateTheme(),this.render(),"END"===n&&this.gameLoop.end(),this.score.score>=this.recordScore.score&&0!=this.recordScore.score?l(this.recordScore.scoreTable,{color:this.theme.controlThemeColor}):l(this.recordScore.scoreTable,{color:this.theme.recordColor})}},{key:"toggleClass",value:function(e,t){e.forEach((function(e){return e.classList.toggle(t)}))}}])&&J(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),e}();function Q(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}new(function(){function e(t){var o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.$=document.documentElement,this.canvas=new a(t.querySelector(".canvas-wrapper")),this.config=new i,this.theme=new f,localStorage.getItem(this.config.storageColor)?this.$.dataset.color=localStorage.getItem(this.config.storageColor):this.$.dataset.color="red",localStorage.getItem(this.config.storageTheme)?this.$.dataset.theme=localStorage.getItem(this.config.storageTheme):this.$.dataset.theme="dark",this.gameLoop=new m(this.update.bind(this),this.render.bind(this),this.canvas),this.theme.updateTheme(),setTimeout((function(){return o.gameLoop.end()}),100),this.snake=new v,this.eat=new T,this.score=new O(".game-score > .score-count",0),this.recordScore=new L(".game-record > .record-count",JSON.parse(localStorage.getItem("record_score"))),this.fps=new K(document.querySelector("body"),"div"),new V(".game-start",this.gameLoop),new V(".game-settings",this.gameLoop,this.render.bind(this),this.score,this.recordScore,this.fps)}var t,o;return t=e,(o=[{key:"update",value:function(){this.snake.move(this.eat,this.score,this.recordScore)}},{key:"render",value:function(){this.canvas.clear(this.canvas.ctx),this.snake.draw(this.canvas.ctx),this.eat.draw(this.canvas.ctx),this.score.draw(),this.recordScore.draw()}}])&&Q(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),e}())(document.querySelector("#game")),new F(document.querySelector("body"),"div")})()})();