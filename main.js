function tocaSomRisada(){
    document.querySelector("#som_tecla_risada").play();
}
document.querySelector(".tecla_risada").onclick = tocaSomRisada;

const listaDeTeclas = querySelectorAll(".teclas");
listaDeTeclas[2].onclick = tocaSomRisada;

