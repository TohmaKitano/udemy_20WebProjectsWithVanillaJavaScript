!function(){"use strict";var e=document.getElementById("currency-one"),t=document.getElementById("amount-one"),n=document.getElementById("currency-two"),a=document.getElementById("amount-two"),c=document.getElementById("rate"),u=document.getElementById("swap");function o(){var u=e.value,o=n.value;fetch("https://api.exchangerate-api.com/v4/latest/".concat(u)).then((function(e){return e.json()})).then((function(e){var n=e.rates[o];c.innerText="1 ".concat(u," = ").concat(n," ").concat(o),a.value=(t.value*n).toFixed(2)}))}e.addEventListener("change",o),t.addEventListener("input",o),n.addEventListener("change",o),a.addEventListener("input",o),u.addEventListener("click",(function(){var t=e.value;e.value=n.value,n.value=t,o()})),o()}();
//# sourceMappingURL=main.js.map