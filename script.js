var convidados = ["Ana Clara ", "Davi ", "Orlando ", "Paloma ", "Luiz ", "Fernanda "];

alert(convidados);

convidados.push("Macaco");

alert(convidados);

convidados.pop();
convidados.pop();
convidados.pop();

alert(convidados);

var desconvidados= [];

desconvidados [0] = convidados.pop();

alert(desconvidados);

alert(convidados);

var i = 0;

while (i=convidados.length){
    desconvidados[i] = convidados.pop();
    alert(desconvidados[i]);
    i++;
}