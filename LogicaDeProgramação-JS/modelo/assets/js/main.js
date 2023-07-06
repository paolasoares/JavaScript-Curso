function calculoImc() {
    const form = document.querySelector('.form');
    const result = document.querySelector('.resultado');

    function recebeEvento(evento) {
        const peso = form.querySelector('.peso').value;
        const altura = form.querySelector('.altura').value;
        const imc = (peso / Math.pow((altura / 100), 2)).toFixed(2);

        if (imc < 18.5) {
            result.innerHTML += `Abaixo do peso: ${imc}`
        } else if (imc > 18.5 && imc <= 24.9) {
            result.innerHTML += `Peso normal: ${imc}`
        } else if (imc >= 25 && imc <= 29.9) {
            result.innerHTML += `Sobrepeso: ${imc}`
        } else if (imc >= 30 && imc <= 34.9) {
            result.innerHTML += `Obesidade grau 1: ${imc}`
        } else if (imc >= 35 && imc <= 39.9) {
            result.innerHTML += `Obesidade grau 2: ${imc}`
        } else if (imc >= 40) {
            result.innerHTML += `Obesidade grau 3: ${imc}`
        } else {
            result.innerHTML += `Digite peso e altura!`
        }

        evento.preventDefault();
    }

    form.addEventListener('submit', recebeEvento);
}
calculoImc();


