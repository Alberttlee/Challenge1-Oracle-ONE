/* Configure un elemento <div> para que no se muestre:

document.getElementById("oculto").style.display = "none";

*/

let btnEncrypter = document.getElementById("btnEncrypter");
let btnDesencrypter = document.getElementById("btnDesencrypter");
let munieco = document.querySelector(".munieco");
let h2 = document.getElementById("h2Out")
let parrafo = document.getElementById("parrafoOut");


btnEncrypter.onclick = replaceText;
btnDesencrypter.onclick = revertText;

function replaceText() {
    hiddenElements();
    let msjOut = document.getElementById("mesageOut");
    msjOut.textContent = encrypterText(saveText()); 
    
}

function revertText() {
    hiddenElements();
    let msjOut = document.getElementById("mesageOut");
    msjOut.textContent = desencrypterText(saveText()); 
}

function saveText() {
    let msgInp = document.getElementById("message").value;
    return msgInp;
}

function hiddenElements() {
    munieco.classList.add("ocultar");
    h2.classList.add("ocultar");
    parrafo.classList.add("ocultar");
}

function encrypterText(mensaje){
    let text = mensaje;
    let finalText = "";

    for(let i = 0; i < text.length; i++) {
        if(text[i] == "a"){
            finalText = finalText + "ai";
        }
        else if(text[i] == "e"){
            finalText = finalText + "enter";
        }
        else if(text[i] == "i"){
            finalText = finalText + "imes";
        }
        else if(text[i] == "o"){
            finalText = finalText + "ober";
        }
        else if(text[i] == "u"){
            finalText = finalText + "ufat";
        }
        else {
            finalText = finalText + text[i];
        }
    }
    return finalText;
}

function desencrypterText(mensaje){
    let text = mensaje;
    let finalText = "";

    for(let i = 0; i < text.length; i++) {
        if(text[i] == "a"){
            finalText = finalText + "a";
            i = i + 1; 
        }
        else if(text[i] == "e"){
            finalText = finalText + "e";
            i = i + 4;
        }
        else if(text[i] == "i"){
            finalText = finalText + "i";
            i = i + 3;
        }
        else if(text[i] == "o"){
            finalText = finalText + "o";
            i = i + 3;
        }
        else if(text[i] == "u"){
            finalText = finalText + "u";
            i = i + 3;
        }
        else {
            finalText = finalText + text[i];
        }
    }
    return finalText;
}






// let msjOut = document.getElementById("messageOut");
// let matrizCodigo = [
//     ["e", "enter"],
//     ["i", "imes"],
//     ["a", "ai"],
//     ["o", "ober"],
//     ["u", "ufat"],
//   ];
// function encrypter() {
//     let textInp = msjInp.value;
//     let textEncrypter = "";
//     if (textInp != "")
        
// }