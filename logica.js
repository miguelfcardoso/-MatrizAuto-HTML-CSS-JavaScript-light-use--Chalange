
function calcular () {
    
    
    var ano=document.getElementById("anovenda").value;
    var idade=2023-ano;

if (0<=idade<=10){
    var c1=0.05;
}
    

if (idade>10){
    var c1=0.04;
}


var km=document.getElementById("kmvenda").value ;


if(0<=km<=30000){
    var c2=1;
}
    

if(30000<=km>70000){
    var c2=0.95;
}
   
if(km<70000) {
    var c2=0.9;
}


var precoaquisicao=document.getElementById("precoaquisicao").value



var precofinal = Math.round( precoaquisicao * (1 - idade * c1) * c2 )


var mauestado=precofinal*0.6
var bomestado=precofinal*1
var muitobomestado=precofinal*1.1




document.getElementById("mauestado").innerHTML= mauestado + '€';
document.getElementById("bomestado").innerHTML= bomestado + '€';
document.getElementById("muitobomestado").innerHTML= muitobomestado + '€';
}

function financiamento () {


document.getElementById("escondebutton").style.display = 'block';


}

function mostrarInfo(displayMode, num) {
    info[num-1].style.display = displayMode;
    // document.getElementById('teste').style.display = displayMode;
}   
var slidervalor = document.getElementById("autovalor");
var sliderEntrada = document.getElementById("entrada");
var sliderMeses = document.getElementById("meses");

var valorautomovel= document.getElementById("valorautomovel");
var valorEntrada = document.getElementById("valorentrada");
var valorMeses = document.getElementById("valormeses");

valorautomovel.innerHTML = slidervalor.value;
valorEntrada.innerHTML = sliderEntrada.value;
valorMeses.innerHTML = sliderMeses.value;

slidervalor.oninput = function() {
    var value = (this.value-this.min)/(this.max-this.min)*100
    this.style.background = 'linear-gradient(to right, #E41819 0%, #E41819 ' + value + '%, #fff ' + value + '%, white 100%)'
    valorautomovel.innerHTML = this.value;
};


sliderEntrada.oninput = function() {
    var value = (this.value-this.min)/(this.max-this.min)*100
    this.style.background = 'linear-gradient(to right, #E41819 0%, #E41819 ' + value + '%, #fff ' + value + '%, white 100%)'
    valorEntrada.innerHTML = this.value;
};

sliderMeses.oninput = function() {
    var value = (this.value-this.min)/(this.max-this.min)*100
    this.style.background = 'linear-gradient(to right, #E41819 0%, #E41819 ' + value + '%, #fff ' + value + '%, white 100%)'
    valorMeses.innerHTML = this.value;
};

function calcularFinanciamento(i) {

var slidervalor = document.getElementById("autovalor");
var sliderEntrada = document.getElementById("entrada");
var sliderMeses = document.getElementById("meses");

var valorautomovel= document.getElementById("valorautomovel");
var valorEntrada = document.getElementById("valorentrada");
var valorMeses = document.getElementById("valormeses");

valorautomovel.innerHTML = slidervalor.value;
valorEntrada.innerHTML = sliderEntrada.value;
valorMeses.innerHTML = sliderMeses.value;

    

    var precoFinal=valorautomovel;

    var spread = Math.round((Math.random() * 4 + 1) * 100) / 100;
    var juro = Math.round((5 + spread) * 100) / 100;
    var valorEmprestimo = precoFinal - sliderEntrada.value;

    

    let valorJuro = valorEmprestimo * (juro / 100);
    let valorMensal =  Math.round(((valorEmprestimo + valorJuro) / sliderMeses.value) * 100) / 100;

    let texto = document.getElementById('info-fin'+i)


    texto.innerHTML = 'Valor do empréstimo: ' + valorEmprestimo + '€<br>Duração (meses): ' + sliderMeses.value + '<br>Taxa de juro: ' + juro + '%<br>Spread: ' + spread + '%<br>Valor da entrada inicial: ' + sliderEntrada.value + '€<br>Valor mensal da prestação: ' + valorMensal +'€';                      
}

function obterSimulacao() {
    for (let i = 1; i < 4; i++) {
        calcularFinanciamento(i)
    }

    document.getElementById("esconder3").style.display = 'block';
}






function imagegone1 () {

    document.getElementById("imgcarro1").style.display = 'none';


}


function imagegone2 () {

    document.getElementById("imgcarro2").style.display = 'none';


}

function imagegone3 () {

    document.getElementById("imgcarro3").style.display = 'none';


}


function imagegone4 () {

    document.getElementById("imgcarro4").style.display = 'none';


}