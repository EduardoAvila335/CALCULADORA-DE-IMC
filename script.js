function calcular(){

let altura = document.getElementById("altura");
let peso = document.getElementById("peso");

let valoraltura = altura.value;
let valorpeso = peso.value;

let calcularaltura = valoraltura * valoraltura;
let resultado = valorpeso / calcularaltura;

let resultadoimc = document.getElementById("resultado").textContent = resultado;

  let abaixodonormal = 18.5;
  let normal = 24.9;
  let sobrepeso = 29.9;
  let OBESIDADEGRAUI = 34.9;
  let OBESIDADEGRAUII = 39.9;
  let OBESIDADEGRAUIII = 40.0;

  if(resultado <= abaixodonormal){
    alert('VOCÊ ESTÁ ABAIXO DO NORMAL!');
}else if(resultado < normal){
    alert('VOCÊ ESTÁ NORMAL!');
}else if(resultado < sobrepeso){
    alert('VOCÊ ESTÁ SOBREPESO');
}else if(resultado < OBESIDADEGRAUI){
    alert('VOCÊ ESTÁ COM OBESIDADE GRAU I');
}else if(resultado < OBESIDADEGRAUII){
    alert('VOCÊ ESTÁ COM OBESIDADE GRAU II');
}else if(resultado > OBESIDADEGRAUIII){
    alert('VOCÊ ESTÁ COM OBESIDADE GRAU III');
}

}