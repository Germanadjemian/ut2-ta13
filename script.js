function cambiarTexto(){
    texto = document.getElementById("original");
    nuevoTexto = "Texto cambiado"
    texto.textContent = nuevoTexto;
}

document.getElementById("b1").addEventListener("click", cambiarTexto)