const option = document.querySelector(".option");
const optionToggleIco = document.querySelector(".option-toggle");
const Sliders = document.querySelectorAll(".boxs");
let index = 0;
let i = 0;

function next(){
    Sliders[index].classList.remove("active");
    index = (index + 1) % Sliders.length;
    Sliders[index].classList.add("active");
}
function prev(){
    Sliders[index].classList.remove("active");
    index = (index + 1) % Sliders.length;
    Sliders[index].classList.add("active");
}

optionToggleIco.addEventListener("click", () =>{
    option.classList.toggle("active")
})
const optionColor = document.querySelectorAll(".option-color li");

if(localStorage.getItem("color")){
    optionColor.forEach(ele =>{
        ele.classList.remove("active");
    })
    // document.querySelector(`[data-color="${localStorage.getItem("color")}"]`).style.display = "none"
}


optionColor.forEach((el) =>{
    el.addEventListener("click", (e) =>{
        optionColor.forEach(ele =>{
            ele.classList.remove("active");
        })
        el.classList.add("active");
        document.documentElement.style.setProperty("--main-color", e.target.dataset.color);
        localStorage.setItem("color", e.currentTarget.dataset.color);
    });
    
})



const spanDate = document.querySelectorAll(".span-date");
const date = new Date().getFullYear();
spanDate.forEach(el =>{
    el.textContent = date
})


