document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const nome = document.getElementById("nome");
        const email = document.getElementById("email");
        const telefone = document.getElementById("telefone");
        const mensagem = document.getElementById("mensagem");

        const nomeErro = document.getElementById("nome-erro");
        const emailErro = document.getElementById("email-erro");
        const telefoneErro = document.getElementById("telefone-erro");
        const mensagemErro = document.getElementById("mensagem-erro");

        if (nome.value.trim() === '') {
            nomeErro.style.display = "block";
            nome.classList.add('campo-invalido');
            nome.focus();
        } else {
            nomeErro.style.display = "none";
            nome.classList.remove('campo-invalido');
            nome.classList.add('campo-valido');
        }

        if (email.value.trim() === '') {
            emailErro.style.display = "block";
            email.classList.add('campo-invalido');
            email.focus();
        } else {
            emailErro.style.display = "none";
            email.classList.remove('campo-invalido');
            email.classList.add('campo-valido');
        }

        if (telefone.value.trim() === '') {
            telefoneErro.style.display = "block";
            telefone.classList.add('campo-invalido');
            telefone.focus();
        } else {
            telefoneErro.style.display = "none";
            telefone.classList.remove('campo-invalido');
            telefone.classList.add('campo-valido');
        }

        if (mensagem.value.trim() === '') {
            mensagemErro.style.display = "block";
            mensagem.classList.add('campo-invalido');
            mensagem.focus();
        } else {
            mensagemErro.style.display = "none";
            mensagem.classList.remove('campo-invalido');
            mensagem.classList.add('campo-valido');
        }

        if (document.querySelector('.campo-invalido')) {
            alert("Por favor, preencha todos os campos corretamente.");
            return; 
        }

        alert("Seu formulário foi enviado com sucesso.");
        form.reset();
    });
});