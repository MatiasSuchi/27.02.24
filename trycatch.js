// declara uma constante chamada variavel1 com o valor "valor somente leitura"
const variavel1 = "valor somente leitura";

//  declara uma variavel chamada variavel2 com o valor "valor editavel"
var variavel2 = "valor editável";

// esta iniciando o codigo try catch. Se a atribuiçao da variavel1 causar uma exceçao, ela sera capturada pelo bloco catch e uma mensagem de erro sera exibida.
try {
    variavel1 = "valor não permitido";
    console.log("A variavel1 foi alterada para: ", variavel1);

// se ocorrer uma exceção dentro do bloco try, o controle será transferido para o bloco catch, e a mensagem de erro será exibida no console.
} catch (e) {
    console.error("Ops! Ocorreu um erro: ", e);
}

// esta iniciando o codigo try catch. Se a atribuiçao da variavel2 causar uma exceçao, ela sera capturada pelo bloco catch e uma mensagem de erro sera exibida.
try {
    variavel2 = "valor não permitido";
    console.log("A variavel2 foi alterada para: ", variavel2);

// se ocorrer uma exceção dentro do bloco try, o controle será transferido para o bloco catch, e a mensagem de erro será exibida no console.
} catch (e) {
    console.error("Ops! Ocorreu um erro: ", e);
}