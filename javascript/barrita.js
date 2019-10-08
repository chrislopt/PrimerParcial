    window.onload=() =>{
    let ham = document.querySelectorAll(".options i")[0];
    let equis = document.querySelectorAll(".options i")[1];
    let captura = document.querySelector(".options")

let bandera = false
let menu = document.querySelector("#menu")
captura.addEventListener("click",()=>{

if(bandera){
    menu.classList.add("hide-mobile")
    equis.classList.add("hide-mobile")
    ham.classList.remove("hide-mobile")
}

else{
    menu.classList.remove("hide-mobile")
    equis.classList.remove("hide-mobile")
    ham.classList.add("hide-mobile")

}
bandera=!bandera;


})
}

  