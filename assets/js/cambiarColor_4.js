//4.
//variable global color
let color = '';

//capturando valor key para almacenarlo en la variable color además de entregar un mensaje al uruario
document.addEventListener("keydown", function (event) {
    let seleccionado = document.getElementById("colorSeleccionado");
    if (event.key.toLowerCase() === 'a') {
        // Cambiar a color 1
        color = 'green';
        seleccionado.innerHTML = 'A(green)';
    } else if (event.key.toLowerCase() === 's') {
        // Cambiar a color 2
        color = 'black';
        seleccionado.innerHTML = 'S(black)';
    } else if (event.key.toLowerCase() === 'd'){
        // Cambiar a color 3
        color = 'darkcyan';
        seleccionado.innerHTML = 'D(darkcyan)';
    } else if (event.key.toLowerCase() === 'f'){
        // Cambiar a color 4
        color = 'mediumseagreen';
        seleccionado.innerHTML = 'F(mediumseagreen)';
    }
     else{
        color = '';
    } 
    })
//pintando los cuadros mediante el evento click
    cuadro1 = document.getElementById('cuadro_1');
    cuadro2 = document.getElementById('cuadro_2');
    cuadro3 = document.getElementById('cuadro_3');
    cuadro4 = document.getElementById('cuadro_4');

    cuadro1.addEventListener("click", function(){cuadro1.style.backgroundColor = color })
    cuadro2.addEventListener("click", function(){cuadro2.style.backgroundColor = color })
    cuadro3.addEventListener("click", function(){cuadro3.style.backgroundColor = color })
    cuadro4.addEventListener("click", function(){cuadro4.style.backgroundColor = color })
    