const geradorBtn = document.querySelector("#gerador"); //botao para disparar evento
const coresDiv = document.querySelector(".colors"); // selecionar as cores


function geradorCor(){
    coresDiv.innerHTML = "";

    for(let i = 0 ; i < 5; i++){
        const cor = corAleatoria();
        console.log(cor);
        const corDiv = document.createElement("div");
        corDiv.style.backgroundColor = cor;
        const corNome = document.createElement("p");
        corNome.textContent = cor;
        corNome.style.cor = cor;
        corDiv.appendChild(corNome);
        coresDiv.appendChild(corDiv);
    }


}


function corAleatoria(){
    // gerar cor em hexadecimal
    const letras = "0123456789ABCDEF";
    let cor = "#";

    for(let i =0; i < 6; i++)
    {
        cor += letras[Math.floor(Math.random() * 16)];

    }

    return cor;
}


geradorBtn.addEventListener("click", geradorCor);

