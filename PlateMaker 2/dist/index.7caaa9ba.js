const e=document.getElementById("color--bg").value,t=(document.getElementById("color--accent").value,document.getElementById("midFontSize").value,document.getElementById("sideFontSize").value,document.getElementById("topFontSize").value,document.getElementById("bottomFontSize").value,document.getElementById("controls-check-btn")),n=document.getElementById("font-size-check-btn"),o=(document.getElementById("fontBtnLabel"),document.getElementById("artBackground")),d=document.getElementById("middle__text"),c=document.getElementById("left__text"),l=document.getElementById("top__text"),s=document.getElementById("bottom__text");let m=[d,c,s,l],i=document.getElementById("middle__text__box"),r=document.getElementById("top__text__box"),a=document.getElementById("left__text__box"),u=document.getElementById("bottom__text__box"),g=[i,r,a,u];const E=document.getElementById("DragBtnX"),v=document.getElementById("DragBtnY"),y=[E,v,t];let f=!1,p=!1,_=!1;E.addEventListener("change",(()=>{f=1!=f})),v.addEventListener("change",(()=>{p=1!=p})),t.addEventListener("change",(()=>{_=1!=_})),o.style.backgroundColor=e;document.getElementById("color--bg").addEventListener("change",(function(){const e=document.getElementById("color--bg").value;console.log("change"),o.style.backgroundColor=e})),document.getElementById("color--accent").addEventListener("change",(function(){const e=document.getElementById("color--accent").value;document.documentElement.style.setProperty("--art-accent-clr",e)})),document.getElementById("middle__text--input").addEventListener("input",(function(){const e=document.getElementById("middle__text--input").value;d.innerText=e})),document.getElementById("top__text--input").addEventListener("input",(function(){const e=document.getElementById("top__text--input").value;l.innerText=e})),document.getElementById("side__text--input").addEventListener("input",(function(){const e=document.getElementById("side__text--input").value;c.innerText=e})),document.getElementById("bottom__text--input").addEventListener("input",(function(){const e=document.getElementById("bottom__text--input").value;s.innerText=e}));document.querySelector("#midFontSize").addEventListener("input",(function(e){let t=e.currentTarget.value;console.log(t),d.style.fontSize=`${t}rem`})),document.querySelector("#topFontSize").addEventListener("input",(function(e){let t=e.currentTarget.value;console.log(t),l.style.fontSize=`${t}rem`})),document.querySelector("#sideFontSize").addEventListener("input",(function(e){let t=e.currentTarget.value;console.log(t),c.style.fontSize=`${t}rem`})),document.querySelector("#bottomFontSize").addEventListener("input",(function(e){let t=e.currentTarget.value;console.log(t),s.style.fontSize=`${t}rem`})),g.forEach((e=>{!function(e){let t=0,n=0,o=0,d=0;document.getElementById(e.id.replace("__box","")+"--movespan")?document.getElementById(e.id.replace("__box","")+"--movespan").onpointerdown=c:e.onpointerdown=c;function c(e){(e=e||window.event).preventDefault(),o=e.clientX,d=e.clientY,document.onpointerup=s,document.onpointermove=l}function l(c){if((c=c||window.event).preventDefault(),t=o-c.clientX,n=d-c.clientY,o=c.clientX,d=c.clientY,!0===p&&!0===f)e.style.left=e.offsetLeft-t+"px",e.style.top=e.offsetTop-n+"px";else if(!0===p)e.style.top=e.offsetTop-n+"px";else{if(!0!==f)return;e.style.left=e.offsetLeft-t+"px"}}function s(){document.onpointerup=null,document.onpointermove=null}}(e)}));const L=document.querySelectorAll(".span--x"),B=document.querySelectorAll(".span--y");document.getElementById("artboardid");E.addEventListener("change",(()=>{B.forEach((e=>{e.classList.toggle("remove-it")}))})),v.addEventListener("change",(()=>{L.forEach((e=>{e.classList.toggle("remove-it")}))})),t.addEventListener("change",(()=>{_?_&&(L.forEach((e=>{e.classList.add("remove-it")})),B.forEach((e=>{e.classList.add("remove-it")})),f&&p?(L.forEach((e=>{e.classList.remove("remove-it")})),B.forEach((e=>{e.classList.remove("remove-it")}))):f?B.forEach((e=>{e.classList.remove("remove-it")})):p&&L.forEach((e=>{e.classList.remove("remove-it")}))):(L.forEach((e=>{e.classList.add("remove-it")})),B.forEach((e=>{e.classList.add("remove-it")})))})),m.forEach((e=>{y.forEach((t=>{t.addEventListener("change",(function(){!0===_?f||p?(document.getElementById(e.id+"--movespan").classList.remove("hidden--instant"),document.getElementById(e.id+"--movespan").classList.remove("hidden"),document.getElementById(e.id+"--movespan").classList.add("show")):(document.getElementById(e.id+"--movespan").classList.remove("show"),document.getElementById(e.id+"--movespan").classList.add("hidden")):_||(document.getElementById(e.id+"--movespan").classList.remove("show"),document.getElementById(e.id+"--movespan").classList.add("hidden"))}))}))}));let I=0;n.addEventListener("click",(e=>{3===I?I=0:I++;document.documentElement.style.setProperty("--art-font",`${["regofont","morrissans","serioucity","herticalserif"][I]}`)}));const h=document.getElementById("on-off__sw--md"),x=document.getElementById("on-off__sw--sd"),b=document.getElementById("on-off__sw--top"),S=document.getElementById("on-off__sw--btm");h.addEventListener("change",(()=>{i.classList.toggle("remove-text")})),x.addEventListener("change",(()=>{a.classList.toggle("remove-text")})),b.addEventListener("change",(()=>{r.classList.toggle("remove-text")})),S.addEventListener("change",(()=>{u.classList.toggle("remove-text")})),t.addEventListener("change",(()=>{[document.querySelector(".pos__controls--x"),document.querySelector(".pos__controls--y")].forEach((e=>{e.classList.contains("slide-out--right")?e.classList.toggle("slide-out--left"):e.classList.toggle("slide-out--right")}))}));document.querySelectorAll(".click_clr").forEach((e=>{e.addEventListener("click",(function(e){let t=document.createElement("span");t.classList.add("ripples"),this.appendChild(t),setTimeout((()=>{t.remove()}),500)}))})),t.addEventListener("click",(e=>{const t=document.getElementById("menuSpan");e.currentTarget.checked?t.classList.add("menu-closed"):t.classList.remove("menu-closed")}));
//# sourceMappingURL=index.7caaa9ba.js.map