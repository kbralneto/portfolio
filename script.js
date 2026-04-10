const formulario = document.querySelector('#meu-formulario');

function validarFormulario(event) {
    event.preventDefault(); 

    const nome = document.querySelector('#nome').value;
    const email = document.querySelector('#email').value;
    const msg = document.querySelector('#msg').value;

    if (nome === "" || email === "" || msg === "") {
        alert("Por favor, preencha todos os campos antes de enviar.");
    } else {
        alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`);
        formulario.reset(); 
    }
}

formulario.addEventListener('submit', validarFormulario);

// 🌙 Tema claro/escuro
const btnTema = document.querySelector('#btn-tema');
const body = document.body;

function alternarTema() {
    body.classList.toggle('dark-theme');
    
    if (body.classList.contains('dark-theme')) {
        btnTema.innerText = "Claro";
    } else {
        btnTema.innerText = "Escuro";
    }
}

btnTema.addEventListener('click', alternarTema);

// 📁 ARRAY DE PROJETOS (REQUISITO DA ATIVIDADE)
const meusProjetos = [
    {
        titulo: "Portfólio Web",
        descricao: "Site pessoal desenvolvido com HTML, CSS e JavaScript.",
        link: "https://kbralneto.github.io/portfolio"
    },
    {
        titulo: "Projeto React (em desenvolvimento)",
        descricao: "Aplicação web utilizando React para construção de interfaces modernas.",
        link: "https://github.com/kbralneto"
    },
    {
        titulo: "Sistema de Cadastro",
        descricao: "Sistema simples para cadastro de usuários com validação de formulário.",
        link: "https://github.com/kbralneto"
    }
];

// ⚙️ RENDERIZAÇÃO DINÂMICA (PARTE MAIS IMPORTANTE)
function renderizarProjetos() {
    const container = document.querySelector('.projetos-container');
    
    container.innerHTML = "";

    meusProjetos.forEach(projeto => {
        const cardHTML = `
            <article class="card-projeto">
                <h3>${projeto.titulo}</h3>
                <p>${projeto.descricao}</p>
                <a href="${projeto.link}" target="_blank">Ver Projeto</a>
            </article>
        `;
        container.innerHTML += cardHTML;
    });
}

renderizarProjetos();