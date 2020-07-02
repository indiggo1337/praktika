let menu = document.querySelector(".menu__phone");
let imageZ = document.querySelector(".menu__swipe");

imageZ.addEventListener("click", (event) =>{
    menu.classList.add("swipe");
    imageZ.style.display = "none";
})

document.body.addEventListener("click", (event) =>{
    let target = event.target.closest("menu__phone");
    if (event.target == menu){
        menu.classList.remove("swipe");
        imageZ.style.display = "block";
    }
})