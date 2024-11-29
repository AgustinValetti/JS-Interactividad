   /*Burger Menu*/
const nav = document.querySelector("#nav")
const abrir = document.querySelector("#abrir")
const cerrar = document.querySelector("#cerrar")

    abrir.addEventListener("click", () => {
        nav.classList.add("visible");
    })

    cerrar.addEventListener("click", () => {
        nav.classList.remove("visible");
    })


/*DARK MODE*/

   document.getElementById("input").addEventListener('change',()=>{
        if(document.body.className.indexOf('dark')===-1){
            document.body.classList.add("dark");
        }
        else{
            document.body.classList.remove('dark')
        }
    }
    )



/* Carrousel */

const btnLeft = document.querySelector(".btn-left"),
      btnRigth = document.querySelector(".btn-rigth"),
      slider = document.querySelector("#slider"),
      sliderSection = document.querySelectorAll(".slider-section");


btnLeft.addEventListener("click", e => moveToLeft())
btnRigth.addEventListener("click", e => moveToRigth())

setInterval(() => {
    moveToRigth()
}, 3000)

let operacion = 0,
    counter = 0,
    widthImg = 100 / sliderSection.length;


function moveToRigth() {
    if (counter >= sliderSection.length-1){
        counter = 0;
        operacion = 0;    
        slider.style.transform = `translate(-${operacion}%)`
        slider.style.transition = "none"  
        return
    } 
    counter++;
    operacion = operacion + widthImg
    slider.style.transform = `translate(-${operacion}%)`
    slider.style.transition = "all ease .6s"  

}


function moveToLeft(){
    counter--;
    if(counter < 0){
        counter = sliderSection.length;
        operacion = widthImg * (sliderSection.length);
        slider.style.transform = `translate(=${operacion}%)`
        slider.style.transition = "none"  
        return
    } 
        
        operacion = operacion - widthImg;
        slider.style.transform = `translate(-${operacion}%)`
        slider.style.transition = "all ease .6s"  
}


console.log(`${sliderSection}`)