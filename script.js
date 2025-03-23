function insert (num) { // aqui estoi inserindo o numero na caixa  //
    var numero = document.getElementById('resultado').value  // esse resultado de laranja  é o id que passei em html para pode inserir essa funçao 
      document.getElementById('resultado').value=numero+num; // estou coloquando os numeros em sequecia quando eu aperto ex 12345//
     
 }
 
 function clean () {
 document. getElementById('resultado').value =""; // aqui criei uma funçao para o botão c que apaga a caixa de saida
 }
 
 
 function back() { // aqui criei uma funçao para apagar  numero por numero caso eu erre a digiitação
     
     var resultado =document.getElementById('resultado').value;   // uma variavel resultados para guardar  esse document....
     document.getElementById('resultado').value = resultado.substring(0,resultado .length -1)
 // aqui chamei o html no js com esse documen.... e fiz essa operaçao  para usar o botao de apagar um numero de cada vez
 // usei a sintaxes length para averiguar todos os numeros inseridos na caixa 
     
 }
 function calcular(){
     var resultado = document.getElementById('resultado').value;
     
             if(resultado){document.getElementById('resultado').value= eval(resultado);}
 
     
           else { document.getElementById('resultado').value= "nada..."
           }
 
 
 
     }
 // aqui criei uma variavel resultado novamente nessa funçao  para guardar os resultados das operações
 //  usei if e else  para averiguar  e eval para fazer todas as operaçoes funcionarem essa sitaxes ja é para isso .
 // e usei o else para averiguar se tem algum numero na caixa se nao tiver me envie a palavra nada ...
 
 
 