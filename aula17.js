function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    function receberEventoForm(evento) {
        evento.preventDefault();
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        if (!nome.value || !sobrenome.value || !peso.value || !altura.value) {
            alert('Preencha todos os campos');
            return;
        }

        if (!peso.value || !altura.value || isNaN(Number(peso.value)) || isNaN(Number(altura.value))) {
            alert('Digite um peso e altura válidos (números)');
            return;
        }

        const nomeLimpo = nome.value.trim();
        const sobrenomeLimpo = sobrenome.value.trim();

        const nomeValido = /^[A-Za-zÀ-ÿ\s]+$/;

        if (
            !nomeLimpo ||
            !sobrenomeLimpo ||
            !nomeValido.test(nomeLimpo) ||
            !nomeValido.test(sobrenomeLimpo)
        ) {
            alert('Digite um nome e sobrenome válidos (apenas letras)');
            return;
        }
        

        const receberPessoa = {
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        };


        const pessoaExiste = pessoas.some((pessoa) => {
            return (
                pessoa.nome === nomeLimpo &&
                pessoa.sobrenome === sobrenomeLimpo &&
                pessoa.peso === peso.value &&
                pessoa.altura === altura.value
            );
        });

        if (pessoaExiste) {
            alert('Essa pessoa já foi cadastrada');
            return;
        }

        pessoas.push(receberPessoa);
        console.log(pessoas);

        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} - Peso: ${peso.value}kg, Altura: ${altura.value}m</p>`;

        mostrarResultado(resultado);

    }


    form.addEventListener('submit', receberEventoForm);
}

meuEscopo();