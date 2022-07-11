//3.1 
/* Modifica la función para que reciba el elemento clickeado de forma de no
tener que seleccionarlo nuevamente dentro de la función  */

/* function pintar(){
    ele = document.getElementById("ele1")
    ele.style.backgroundColor = 'yellow'
    }
    ele = document.getElementById("ele1")
    ele.addEventListener("click", pintar); */
    

    ele = document.getElementById("ele1")
    //Transformandolo a addEventListener con función anónima
    ele.addEventListener("click", function(){ele.style.backgroundColor = 'yellow';})


    //3.2
    function pintar(color = 'green'){
        ele = document.getElementById("ele1")
        ele.style.backgroundColor = color
        }
        ele.addEventListener("click", function(){pintar('yellow')});

        