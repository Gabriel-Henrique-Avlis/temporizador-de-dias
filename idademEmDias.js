var idade = prompt("Digite sua idade em dias");

idade = parseInt(idade)

var ano = 0, mes = 0, dia = 0

if(idade % 365 == 0 ){
 ano = ano + 1;
}
 mes = idade / 30

 dia = idade - 365

 document.write(ano + "anos(s) <br>")

 document.write(mes + "mes(es) <br>")

 document.write(dias + "dia(s) <br>")