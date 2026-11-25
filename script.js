const habilidades = ["HTML (Básico)", "CSS (Básico)", "Java (Intermediário)", "JavaScript (Básico)"];

function mostrarHabilidades(lista) {
    let itens = "";

    for (let i = 0; i < lista.length; i++) {
        itens += "<li>" + lista[i] + "</li>";
    }

    document.getElementById("lista-habilidades").innerHTML = itens;
}

mostrarHabilidades(habilidades);