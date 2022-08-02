// Carne - 300g por pessoa + de 6horas - 550
// Linguiça - 100g por pessoa + 6 horas - 200
// Cerveja - 1200ml por Pessoa + 6 horas - 2000ml
// Refrigerante/água - 1000ml por pessoa + 6 horas 1500ml

// Crianças valem por 0,5



let inputAdulto = document.getElementById('adultos');
let inputCrianca = document.getElementById('criancas');
let inputDuracao = document.getElementById('duracao');
let resultado = document.querySelector('.resultado');

function calcular(){
    let linguicaPorPessoa = 100;
    let carnePorPessoa = 300;
    let cervejaPorPessoa = 1200;   
    let bebibaPorPessoa = 1000;
    let adultos = inputAdulto.value;
    let criancas = inputCrianca.value;
    let quantidadeDeCerveja = cervejaPorPessoa * adultos;
    let quantidadeDeCarne = carnePorPessoa * adultos + (carnePorPessoa * criancas / 2);
    let quantidadeDeBebibas = bebibaPorPessoa * adultos + (bebibaPorPessoa * criancas / 2); 
    let quantidaDeLinguica = linguicaPorPessoa * adultos + (linguicaPorPessoa * criancas / 2);
    
    
    if(inputDuracao.value >= 6){
        cervejaPorPessoa = 2000;
        carnePorPessoa = 550;
        linguicaPorPessoa = 200;
        bebibaPorPessoa = 1500;
        quantidadeDeCarne = carnePorPessoa * adultos + (carnePorPessoa * criancas / 2);
        quantidadeDeCerveja = cervejaPorPessoa * adultos;
        quantidadeDeBebibas = bebibaPorPessoa * adultos + (bebibaPorPessoa * criancas / 2);
        quantidaDeLinguica = linguicaPorPessoa * adultos + (linguicaPorPessoa * criancas / 2)
    }
  resultado.innerHTML = `
    <h3> Terá de comprar: </h3>
    <div class="resultadoBx">
      <p>${quantidadeDeCarne / 1000} kg de carne e ${Math.ceil(quantidaDeLinguica / 1000)} kg de linguiça.</p>
    </div>
     <div class="resultadoBx">
      <p>${Math.ceil(quantidadeDeCerveja / 350)} latas(<span>350 ml</span>) de cerveja.
    </div>
     <div class="resultadoBx">
      <p>${ Math.ceil(quantidadeDeBebibas / 2000)} garrafas(<span>2 litros</span>) de bebidas.</p>
    </div>
  `
}


