let animais= []

animais.push("Elefante", "Vaca", "Cachorro");

animais[animais.length]= 'rato';
 
let removido= animais.shift();
console.log("Nome removido: ", removido)

novaLista= animais
console.log("Lista de alunos atualizada: ", novaLista);