

var i, text;
i=0;
text= "Desarrollo Front End";

function typing(){
    if(i<text.length){
        document.getElementById("abrir").innerHTML += text.charAt(i);
        i++;
        setTimeout(tipeo,70); 
    }
}

typing();




function mostrar() {
    document.getElementById("sidebar").style.width = "300px";
    document.getElementById("contenido").style.marginLeft = "300px";
    document.getElementById("abrir").style.display = "none";
    document.getElementById("cerrar").style.display = "inline";
}

function ocultar() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("contenido").style.marginLeft = "0";
    document.getElementById("abrir").style.display = "inline";
    document.getElementById("cerrar").style.display = "none";
}
window.onload = function (){
	$('#onload').fadeOut();
	$('body').removeClass('hidden');
 }


$(document).ready(function(){
    $("#about").click(function(){
        $(".text-about").slideToggle();
    });
});

function enviar(){
    
    function DatosPersona (nombre,correo){
        this.nombre = nombre;
        this.correo = correo;
    }
    function DatosMsj (asunto, mensaje){
        this.asunto = asunto;
        this.mensaje = mensaje; 
    }

var nombreP1 = document.getElementById("nombre").value
var correoP1 = document.getElementById("correo").value
var asuntoP1 = document.getElementById("asunto").value
var mensajeP1 = document.getElementById("mensaje").value
//if(nombreP1=="" || correoP1=="" || asuntoP1=="" || mensajeP1==""){
//    alert("Debe completar todos los datos del formulario")
//}
if(nombreP1!=="" && correoP1!=="" && asuntoP1!=="" && mensajeP1!==""){

    var DatosPersona = new DatosPersona(nombreP1, correoP1)
    var DatosMsj = new DatosMsj(asuntoP1, mensajeP1)
    var DatosCompletos = [DatosPersona,DatosMsj]
    localStorage.setItem("Datos de "+nombreP1+":", JSON.stringify(DatosCompletos))
    console.log(DatosCompletos)

}
}
document.getElementById("btn1").addEventListener("click", enviar)
