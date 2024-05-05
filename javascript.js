// document.addEventListener("DOMContentLoaded", function(){
//     const form = document.getElementById('form');

//     form.addEventListener('submit', function(event){
//         event.preventDefault();
    
//     const nome = document.getElementById("nome");
//     const email = document.getElementById("email");
//     const telefone = document.getElementById("telefone");
//     const mensagem = document.getElementById("mensagem");
//     const erro = document.getElementById('erro-campo')


//     if(nome.value.trim() === ''){
//         alert("por favor, insira seu nome");
//         erro.style.display = "block"
//         nome.classList.add('campo-invalido')
//         nome.focus();
//         return false;
//     }
//     else{
//         erro.style.display = "none";
//         nome.classList.remove('campo-invalido');
//     }

//     if(email.value.trim() === ''){
//         alert("por favor, insira seu email");
//         erro.style.display = "block"
//         email.classList.add('campo-invalido')
//         email.focus();
//         return false;
//     }
//     else{
//         erro.style.display = "none";
//         nome.classList.remove('campo-invalido');
//     }

//     if(telefone.value.trim() === ''){
//         alert("por favor, insira seu telefone");
//         erro.style.display = "block"
//         telefone.classList.add('campo-invalido')
//         telefone.focus();
//         return false;
//     }
//     else{
//         erro.style.display = "none";
//         nome.classList.remove('campo-invalido');
//     }

//     if(mensagem.value.trim() === ''){
//         alert("por favor, insira seu mensagem");
//         erro.style.display = "block"
//         mensagem.classList.add('campo-invalido')
//         mensagem.focus();
//         return false;
//     }
//     else{
//         erro.style.display = "none";
//         nome.classList.remove('campo-invalido');
//     }

//     alert("seu formulario foi enviado com sucerro");
//     form.reset();
//     })
// })

// document.addEventListener("DOMContentLoaded", function() {
//     const form = document.getElementById('form');
//     const erro = document.getElementById('erro-campo');

//     form.addEventListener('submit', function(event) {
//         event.preventDefault();
    
//         const nome = document.getElementById("nome");
//         const email = document.getElementById("email");
//         const telefone = document.getElementById("telefone");
//         const mensagem = document.getElementById("mensagem");

//         if (nome.value.trim() === '') {
//             alert("Por favor, insira seu nome.");
//             erro.style.display = "block";
//             nome.classList.add('campo-invalido');
//             nome.focus();
//             return false;
//         } else {
//             erro.style.display = "none";
//             nome.classList.remove('campo-invalido');
//         }

//         if (email.value.trim() === '') {
//             alert("Por favor, insira seu email.");
//             erro.style.display = "block";
//             email.classList.add('campo-invalido');
//             email.focus();
//             return false;
//         } else {
//             erro.style.display = "none";
//             email.classList.remove('campo-invalido');
//         }

//         if (telefone.value.trim() === '') {
//             alert("Por favor, insira seu telefone.");
//             erro.style.display = "block";
//             telefone.classList.add('campo-invalido');
//             telefone.focus();
//             return false;
//         } else {
//             erro.style.display = "none";
//             telefone.classList.remove('campo-invalido');
//         }

//         if (mensagem.value.trim() === '') {
//             alert("Por favor, insira sua mensagem.");
//             erro.style.display = "block";
//             mensagem.classList.add('campo-invalido');
//             mensagem.focus();
//             return false;
//         } else {
//             erro.style.display = "none";
//             mensagem.classList.remove('campo-invalido');
//         }
        
//         alert("Seu formulário foi enviado com sucesso.");
//         form.reset();
//     });
// });
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