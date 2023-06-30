const pessoa = {
    nome: 'Paola',
    sobrenome: 'Soares',
    idade: 22,

    fala(){
        console.log(`${this.nome} ${this.sobrenome} está falando, Hi... `),
        console.log(`${this.idade} está e minha idade`)
    },
    incrementaIdade(){
        this.idade++;
    }

};
pessoa.fala()
pessoa.incrementaIdade()
pessoa.fala()
pessoa.incrementaIdade()
pessoa.fala()
pessoa.incrementaIdade()



// function criaPessoa (nome, sobrenome, idade){
//     return{
//         nome,
//         sobrenome,
//         idade
//     };
// }
// const pessoa1 = criaPessoa('Paola', 'Soares', 42)
// const pessoa2 = criaPessoa('Anna', 'Alves', 27)
// const pessoa3 = criaPessoa('Julia', 'souza', 12)
// console.log(pessoa1.nome, pessoa2.nome)



console.clear;

