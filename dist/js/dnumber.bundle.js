!function(e){var t={};function n(a){if(t[a])return t[a].exports;var o=t[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(a,o,function(t){return e[t]}.bind(null,o));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.julianToGreg=t.toJulian=t.toMaya=t.mayaToGreg=t.toVigesimal=t.toDecimal=void 0;var a=function(e){return e&&e.__esModule?e:{default:e}}(n(1));var o=t.toDecimal=function(e){for(var t=[144e3,7200,360,20,1],n=0,a=0;a<t.length;a++)n+=e[a]*t[a];return n},r=t.toVigesimal=function(e){for(var t=[144e3,7200,360,20,1],n=[],a=e,o=0;o<t.length;o++)n.push(Math.floor(a/t[o])),a%=t[o];return n};t.mayaToGreg=function(e,t){var n=o(e.getLongCount())+t,a=new Date(-4713,10,24);return a.setDate(a.getDate()+n),a},t.toMaya=function(e,t){var n=new Date(-4713,10,24),o=Math.round((e-n)/864e5)-t;return new a.default(r(o))},t.toJulian=function(e){var t=(e-new Date(200,2,1))/864e5,n=Math.floor(t/36524),a=n-Math.floor((n+2)/4),o=new Date(e.getFullYear(),e.getMonth(),e.getDate());return o.setDate(e.getDate()-a),o},t.julianToGreg=function(e){var t=(e-new Date(200,2,1))/864e5,n=Math.floor(t/36524),a=n-Math.floor((n+2)/4),o=new Date(e.getFullYear(),e.getMonth(),e.getDate());return o.setDate(e.getDate()+a),o}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(0));var r=["Imix","Ik","Akbal","Kan","Chicchan","Cimi","Manik","Lamat","Muluc","Oc","Chuen","Eb","Ben","Ix","Men","Cib","Caban","Edznab","Cauac","Ahau"],u=["Pop","Uo","Zip","Zotz","Tzec","Xul","Yaxkin","Mol","Chen","Yax","Zac","Ceh","Mac","Kankin","Muan","Pax","Kayab","Cumku","Uayeb"],l=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.longCount=t}return a(e,[{key:"setLongCount",value:function(e){this.longCount=e}},{key:"getLongCount",value:function(){return this.longCount}},{key:"calculateTzolkin",value:function(){var e=o.toDecimal(this.longCount),t=(e+4)%13;0===t&&(t=13);var n=r[(e+19)%20];this.tzolkin=[t,n]}},{key:"getTzolkin",value:function(){return this.tzolkin}},{key:"calculateHaab",value:function(){var e=(o.toDecimal(this.longCount)+348)%365,t=void 0,n=void 0;e<361?(t=e%20,n=u[Math.floor(e/20)]):(t=e-360,n="Uayeb"),this.haab=[t,n]}},{key:"getHaab",value:function(){return this.haab}},{key:"calculateLordOfNight",value:function(){var e=o.toDecimal(this.longCount);this.lordOfNight=e%9==0?9:e%9}},{key:"getLordOfNight",value:function(){return this.lordOfNight}}]),e}();t.default=l},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.lcElements={glyphPanel:document.querySelector(".glyph-panel"),mayaForm:document.getElementById("maya-form"),correlationForm:document.getElementById("corr-form"),gregorianForm:document.getElementById("greg-form"),julianForm:document.getElementById("jul-form"),longCountInput:document.querySelectorAll(".lc-index"),longCount:{0:document.getElementById("lc-0"),1:document.getElementById("lc-1"),2:document.getElementById("lc-2"),3:document.getElementById("lc-3"),4:document.getElementById("lc-4")},lcGlyphs:{0:document.getElementById("lc-0-coef"),1:document.getElementById("lc-1-coef"),2:document.getElementById("lc-2-coef"),3:document.getElementById("lc-3-coef"),4:document.getElementById("lc-4-coef")},calendarRound:document.getElementById("calendar-round"),tzolkinCoef:document.getElementById("tzolkin-coef"),tzolkinName:document.getElementById("tzolkin-name"),glyphG:document.getElementById("glyph-G"),haabCoef:document.getElementById("haab-coef"),haabName:document.getElementById("haab-name"),constant:document.getElementById("constant"),gregorianDay:document.getElementById("greg-day"),gregorianMonth:document.getElementById("greg-month"),gregorianYear:document.getElementById("greg-year"),gregorianEra:document.getElementById("greg-era"),julianDay:document.getElementById("jul-day"),julianMonth:document.getElementById("jul-month"),julianYear:document.getElementById("jul-year"),julianEra:document.getElementById("jul-era")},t.dnElements={longCountForm:document.getElementById("lc-form"),longCountInput:document.querySelectorAll(".lc-index"),longCount:{0:document.getElementById("lc-0"),1:document.getElementById("lc-1"),2:document.getElementById("lc-2"),3:document.getElementById("lc-3"),4:document.getElementById("lc-4")},distNumberForm:document.getElementById("dn-form"),operator:document.getElementById("operator"),distNumberInput:document.querySelectorAll(".dn-index"),distNumber:{1:document.getElementById("dn-1"),2:document.getElementById("dn-2"),3:document.getElementById("dn-3"),4:document.getElementById("dn-4")},prevCalendarRound:{tzolkinCoef:document.getElementById("prev-tzolkin-coef"),tzolkinName:document.getElementById("prev-tzolkin-name"),haabCoef:document.getElementById("prev-haab-coef"),haabName:document.getElementById("prev-haab-name")},nextCalendarRound:{tzolkinCoef:document.getElementById("next-tzolkin-coef"),tzolkinName:document.getElementById("next-tzolkin-name"),haabCoef:document.getElementById("next-haab-coef"),haabName:document.getElementById("next-haab-name")},dnGlyphs:{1:document.getElementById("katun-coef"),2:document.getElementById("tun-coef"),3:document.getElementById("uinal-coef"),4:document.getElementById("kin-coef")},indicatorGlyph:document.getElementById("indicator"),addButton:document.getElementById("add-btn"),dateList:document.getElementById("date-list")}},,,function(e,t,n){"use strict";var a=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],a=!0,o=!1,r=void 0;try{for(var u,l=e[Symbol.iterator]();!(a=(u=l.next()).done)&&(n.push(u.value),!t||n.length!==t);a=!0);}catch(e){o=!0,r=e}finally{try{!a&&l.return&&l.return()}finally{if(o)throw r}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),o=(i(n(1)),i(n(6))),r=d(n(0)),u=d(n(7)),l=n(2);function d(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function i(e){return e&&e.__esModule?e:{default:e}}var c={};c.prevWesternDate=new Date,c.prevMayaDate=r.toMaya(c.prevWesternDate,584286),c.prevMayaDate.calculateTzolkin(),c.prevMayaDate.calculateHaab(),c.nextMayaDate=c.prevMayaDate,u.updateLCDisplay(c.prevMayaDate),u.updateGlyphDisplay(c.prevMayaDate,"+",[0,0,0,0,0],c.nextMayaDate),l.dnElements.longCountForm.addEventListener("input",function(e){var t=u.getDistNumberInput(),n=a(t,2),o=n[0],r=n[1];m(),g(),u.updateGlyphDisplay(c.prevMayaDate,o,r,c.nextMayaDate)});var m=function(){var e=u.getLongCountInput();c.prevMayaDate.setLongCount(e),c.prevMayaDate.calculateTzolkin(),c.prevMayaDate.calculateHaab()},g=function(){var e=c.prevMayaDate,t=u.getDistNumberInput(),n=a(t,2),r=n[0],l=n[1];c.nextMayaDate=(0,o.default)(e,r,l)};l.dnElements.distNumberForm.addEventListener("input",function(e){var t=u.getDistNumberInput(),n=a(t,2),o=n[0],r=n[1];g(),u.updateGlyphDisplay(c.prevMayaDate,o,r,c.nextMayaDate)}),l.dnElements.addButton.addEventListener("click",function(e){var t=u.getDistNumberInput(),n=a(t,2),o=n[0],r=n[1];u.addToList(c.prevMayaDate,o,r,c.nextMayaDate)})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(e){return e&&e.__esModule?e:{default:e}}(n(1)),o=n(0);t.default=function(e,t,n){var r=void 0;"+"===t?r=(0,o.toDecimal)(e.getLongCount())+(0,o.toDecimal)(n):"-"===t&&(r=(0,o.toDecimal)(e.getLongCount())-(0,o.toDecimal)(n));var u=new a.default((0,o.toVigesimal)(r));return u.calculateTzolkin(),u.calculateHaab(),u}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.addToList=t.updateGlyphDisplay=t.updateLCDisplay=t.getDistNumberInput=t.getLongCountInput=void 0;var a=n(2),o=(t.getLongCountInput=function(){var e=[];return a.dnElements.longCountInput.forEach(function(t){t.value?e.push(parseInt(t.value)):e.push(0)}),e},t.getDistNumberInput=function(){var e=a.dnElements.operator.value,t=[0];return a.dnElements.distNumberInput.forEach(function(e){e.value?t.push(parseInt(e.value)):t.push(0)}),[e,t]},t.updateLCDisplay=function(e){for(var t=e.getLongCount(),n=0;n<5;n++)a.dnElements.longCount[n].value=t[n]},function(e,t){var n=void 0;"prev"===t?n=a.dnElements.prevCalendarRound:"next"===t&&(n=a.dnElements.nextCalendarRound);var o=e.getTzolkin(),r=e.getHaab();n.tzolkinCoef.src="img/number-"+o[0]+".png",n.tzolkinName.src="img/"+o[1]+".png",0===r[0]?n.haabCoef.src="img/chum.png":n.haabCoef.src="img/number-"+r[0]+".png",n.haabName.src="img/"+r[1]+".png"});t.updateGlyphDisplay=function(e,t,n,r){o(e,"prev"),o(r,"next"),a.dnElements.indicatorGlyph.src="+"===t?"img/PDI.png":"img/ADI.png",function(e){for(var t=void 0,n=1;n<5;n++)t=3===n?"uinal-":"number-",a.dnElements.dnGlyphs[n].src="img/"+t+e[n]+".png"}(n)},t.addToList=function(e,t,n,o){var r='\n  <div class="date-item">\n    <div class="table-row">\n      <div class="table-cell longcount-date" id="lc-1">\n        <div class="prev-lc">'+e.getLongCount().join(".")+'</div>\n        <div class="dn">'+t+" "+n.join(".")+'</div>\n        <div class="next-lc">'+o.getLongCount().join(".")+'</div>\n      </div>\n      <div class="table-cell cr-date" id="cr-1">\n        <div class="prev-cr">'+e.getTzolkin().join(" ")+" "+e.getHaab().join(" ")+'</div>\n        <div>&nbsp</div>\n        <div class="next-cr">'+o.getTzolkin().join(" ")+" "+o.getHaab().join(" ")+'</div>\n      </div>\n      <div class="table-cell western-date" id="western-1">\n        <div class="prev-west">14 Aug 3114 BCE</div>\n        <div>&nbsp</div>\n        <div class="next-west">14 Aug 3114 BCE</div>\n      </div>\n    </div>\n  </div>\n  ';a.dnElements.dateList.insertAdjacentHTML("beforeend",r)}}]);