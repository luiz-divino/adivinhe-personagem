const animeSelecionado = document.getElementById('animeSelect');

animeSelecionado.addEventListener('change', function () {
  escolheAnime();

});

function escolheAnime(){
    if(animeSelecionado.value === "dragonball"){ 
        const nomesEmbaralhados = embaralharNomes(nomes);
       console.log(nomesEmbaralhados);
    }  
   
}



function embaralharNomes(nomes) {
    return nomes.sort(() => Math.random() - 0.5);
}
const nomes = ["goku", "goku black", "gohan", "trunks"];






