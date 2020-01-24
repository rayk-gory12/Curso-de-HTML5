

var edad;

function comenzar(){
edad=document.getElementById("miEdad");
edad.addEventListener("change",cambiaRango,false);
document.datosUsuarios.addEventListener("invalid",validar,true);
document.getElementById("enviar").addEventListener("click",enviar,false);
document.datosUsuarios.addEventListener("input",validarTiempoReal,false);
}

function cambiaRango(){
    var salida= document.getElementById("rango");
    var calculo= edad.value-30;
    if(calculo<30){
        calculo=0;
        edad.value=30;
    }
    salida.innerHTML=calculo+ "a" +edad.value;
    
    }
function validar(e){
    var elemento= e.target;
    elemento.style.backgroundColor="red";
}

function enviar(){
    var cuadroUsuario = document.getElementById("usuario");
    var correcto = document.datosUsuarios.checkValidity();
    if(correcto==true){
        document.datosUsuarios.submit();
    } else if(cuadroUsuario.validity.valueMissing==true || cuadroUsuario.validity.patterMismatch==true){
        alert("el usuario no puede estar vacio o debe de tener 3 letras ");
    }
}
fuction validarTiempoReal(e){
    var elemento=e.target;
}
window.addEventListener("load", comenzar, false);

