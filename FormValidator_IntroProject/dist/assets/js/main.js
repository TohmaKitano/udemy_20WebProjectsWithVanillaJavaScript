!function(){"use strict";var e=document.getElementById("form"),t=document.getElementById("username"),n=document.getElementById("email"),r=document.getElementById("password"),s=document.getElementById("password2"),a=function(e,t){var n=e.parentElement;n.className="form-control error",n.querySelector("small").innerText=t},o=function(e){e.parentElement.className="form-control success"};e.addEventListener("submit",(function(e){e.preventDefault(),""===t.value?a(t,"Username is required"):o(t),""===n.value?a(n,"Email is required"):function(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(n.value)?o(n):a(n,"Email is not valid"),""===r.value?a(r,"Password is required"):o(r),""===s.value?a(s,"Password2 is required"):o(s)}))}();
//# sourceMappingURL=main.js.map