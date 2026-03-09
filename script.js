
function setTheme(t){
document.body.className=t
localStorage.setItem("theme",t)
}

function loadTheme(){
let t=localStorage.getItem("theme")
if(t){document.body.className=t}
}

window.onload=loadTheme
