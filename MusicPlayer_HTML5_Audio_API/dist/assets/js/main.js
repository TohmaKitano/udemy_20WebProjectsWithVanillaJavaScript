!function(){"use strict";var e=document.getElementById("music-container"),t=document.getElementById("play"),n=document.getElementById("prev"),s=document.getElementById("next"),c=document.getElementById("audio"),a=document.getElementById("progress"),i=document.getElementById("progress-container"),d=document.getElementById("title"),r=document.getElementById("cover"),l=["hey","summer","ukulele"],o=2;function u(e){d.innerHTML=e,c.src="./assets/music/".concat(e,".mp3"),r.src="./assets/img/".concat(e,".jpg")}function m(){e.classList.add("play"),t.querySelector("i.fas").classList.remove("fa-play"),t.querySelector("i.fas").classList.add("fa-pause"),c.play()}function y(){++o>l.length-1&&(o=0),u(l[o]),m()}u(l[o]),t.addEventListener("click",(function(){e.classList.contains("play")?(e.classList.remove("play"),t.querySelector("i.fas").classList.add("fa-play"),t.querySelector("i.fas").classList.remove("fa-pause"),c.pause()):m()})),n.addEventListener("click",(function(){--o<0&&(o=l.length-1),u(l[o]),m()})),s.addEventListener("click",y),c.addEventListener("timeupdate",(function(e){var t=e.srcElement,n=t.duration,s=t.currentTime/n*100;a.style.width="".concat(s,"%")})),i.addEventListener("click",(function(e){var t=this.clientWidth,n=e.offsetX,s=c.duration;c.currentTime=n/t*s})),c.addEventListener("ended",y)}();
//# sourceMappingURL=main.js.map