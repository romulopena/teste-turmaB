//criando a função tocaSomAplausos e buscando a id da tecla para tocar.
function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}
//referencia constante listaDeTeclas que busca todos botões com a .tecla
const listaDeTeclas = document.querySelectorAll(".tecla");
//laço de repetição "While" trocado pelo "for" tecla, efeito, idAudio e tocaSom
for(let contador = 0;contador < listaDeTeclas.length;contador++){
    const tecla = listaDeTeclas[contador];
    const efeito = tecla.classList[1]; //busca do item 1 dos botões
    const idAudio = `#som_${efeito}`; //uso do template string
    tecla.onclick = function(){ //função anônima auxiliar ao tocaSom
        tocaSom(idAudio);
    }
    //linhas 15 a 24 = criação de evento de teclas de execução para efeito pressionar tecla
    tecla.onkeydown = function(evento){
        
        if(evento.code === 'Space' || evento.code === 'Enter'){
        tecla.classList.add('ativa');
    }
}
    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }
}

