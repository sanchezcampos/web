window.onload=(function(){
	//mostrar();
	mostrarclase();
})();
// window.addEventListener('load', mostrar, false);
// window.addEventListener('load', mostrarclase, false);
// function ocultar(){
// document.getElementById('contenido1').style.display = 'none';
// document.getElementById('contenido2').style.display = 'block';
// }
// function mostrar(){
// document.getElementById('contenido1').style.display = 'block';
// document.getElementById('contenido2').style.display = 'none';
// }
function ocultarclase(){
// document.getElementsByClassName("idioma1").style.display = 'none';
// document.getElementsByClassName("idioma2").style.display = 'block';
$(".idioma1").hide();
$(".idioma2").show();
}
function mostrarclase(){
/*document.getElementsByClassName("idioma1").style.display = 'block';
document.getElementsByClassName("idioma2").style.display = 'none';*/
$(".idioma1").show();
$(".idioma2").hide();
}

        $("#l").click(function () {
        	if($('#lll').prop('checked')){
        	//	mostrar();
            mostrarclase();
        	}else{
        		
           // ocultar();
            ocultarclase();
        	}
        });