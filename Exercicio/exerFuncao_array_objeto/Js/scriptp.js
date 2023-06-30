function meuFormulario() {
    const form = document.querySelector('.form');
    const result = document.querySelector('.resultado')

    const pessoa = [];


    function recebeEvento(evento) {
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoa.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value,
        });

        console.log(pessoa)
       
        result.innerHTML += `<p>${nome.value }, ${sobrenome.value }, ${peso.value}, ${altura.value}</p>`
    }

    form.addEventListener('submit', recebeEvento);
}
meuFormulario();