function encriptar(){

	var texto = document.getElementById("escriba").value.toLowerCase();
	var codificado = texto.replace(/e/igm,"enter");
	var codificado = codificado.replace(/i/igm,"imes");
	var codificado = codificado.replace(/a/igm,"ai");
	var codificado = codificado.replace(/o/igm,"ober");
	var codificado = codificado.replace(/u/igm,"ufat");

	document.getElementById("mensaje").style.display="none";
	document.getElementById("descripcion").innerHTML=codificado;
	document.getElementById("boton-copiar").style.display="show";
	document.getElementById("boton-copiar").style.display="inherit";

}
function desencriptar() {
	var texto = document.getElementById("escriba").value.toLowerCase();
	var decodificado = texto.replace(/enter/igm,"e");
	var decodificado = decodificado.replace(/imes/igm,"i");
	var decodificado = decodificado.replace(/ai/igm,"a");
	var decodificado = decodificado.replace(/ober/igm,"o");
	var decodificado = decodificado.replace(/ufat/igm,"u");

	document.getElementById("mensaje").style.display="none";
	document.getElementById("descripcion").innerHTML=decodificado;
	document.getElementById("boton-copiar").style.display="show";
	document.getElementById("boton-copiar").style.display="inherit";
	
}
function copiar(){
    var contenido=document.getElementById("descripcion");
    contenido.select();
    document.execCommand("copy");
    alert("¡El texto ha sido copiado!");
}