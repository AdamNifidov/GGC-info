function setTheme(theme){
document.body.className = theme
localStorage.setItem("theme",theme)
}

function loadTheme(){
let theme = localStorage.getItem("theme")
if(theme){
document.body.className = theme
}
}

function setLang(lang){
localStorage.setItem("lang",lang)
location.reload()
}

function loadLang(){
let lang = localStorage.getItem("lang") || "ru"

document.querySelectorAll("[data-ru]").forEach(el=>{
el.textContent = el.dataset[lang]
})
}

window.onload = ()=>{
loadTheme()
loadLang()
}