const nbCaractere = document.getElementById('nbCaractere');
const textarea = document.querySelector("textarea");

textarea.value =" ";

textarea.addEventListener("Keyup", (e) => {
    if(e.target.value != ""){
        nbCaractere.textContent = countChar(e.target.value);
    }else{
        console.log("mettre a zero");
    }
});

const countChar = (text) => {
    return text.trim().length;
}