const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

function encriptarTexto(frase){
    var textoFinal = "";

    for(let i = 0; i<frase.length; i++){
        if(frase[i]==="a"){
            textoFinal = textoFinal + "ai";
        }else if(frase[i]==="e"){
            textoFinal = textoFinal + "enter";
        }else if(frase[i]==="i"){
            textoFinal = textoFinal + "imes";
        }else if(frase[i]==="o"){
            textoFinal = textoFinal + "ober";
        }else if(frase[i]==="u"){
            textoFinal = textoFinal + "ufat";
        }else{
            textoFinal = textoFinal + frase[i];
        }

    }
    return textoFinal;
}

function desencriptarTexto(frase){
    var textoFinal = "";

    for(let i = 0; i<frase.length; i++){

        if (frase.slice(i, i+2)=== "ai"){
            textoFinal += (frase[i]);
            i++;
        }else if(frase.slice(i, i+5)=== "enter"){
            textoFinal += (frase[i]);
            i+=4;
        }else if(frase.slice(i, i+4)=== "imes"){
            textoFinal += (frase[i]);
            i+=3;
        }else if(frase.slice(i, i+4)=== "ober"){
            textoFinal += (frase[i]);
            i+=3;
        }else if(frase.slice(i, i+4)=== "ufat"){
            textoFinal += (frase[i]);
            i+=3;
        }else{
            textoFinal = textoFinal + frase[i];
        }
    
    }   
    return textoFinal;
}     
            
function encriptar(){
    const textoencriptado = encriptarTexto(textArea.value);
    mensaje.value = textoencriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function desencriptar(){
    const textodesencriptado = desencriptarTexto(textArea.value);
    mensaje.value = textodesencriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

///////FUNCIÓN COPIAR//////////////

function copiar(cadena_copiar){
    let contenido = document.querySelector(".mensaje");
    contenido.select();
    console.log(contenido.value);
    navigator.clipboard.writeText(contenido.value);
    // contenido.blur();
    alert("¡Copiado!");
}


document.querySelector(".btn-encriptar").addEventListener('click', encriptar);
document.querySelector(".btn-desencriptar").addEventListener('click', desencriptar);
document.querySelector(".btn-copiar").addEventListener('click', copiar);