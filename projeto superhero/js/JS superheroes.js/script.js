document.addEventListener("DOMContentLoaded", function () {

    var dadosSuperHeroi = {
        "nomeEsquadrao": "Esquadrao de herois",
        "cidade": "Brasilia City",
        "formado": 2019,
        "baseSecreta": "taverna do marcos",
        "ativa": true,
        "membros": [

            {
                "nome": "Marcos",
                "idade": 28,
                "identidadeSecreta": "comedr de codigo man",
                "poderes": ["escrever boas linhas de codigo", "boleiro", "criador de conteudo"]

            },

            {
                "nome": "Breno",
                "idade": 85,
                "identidadeSecreta": "Bernardo",
                "poderes": ["Jornalismo", "investigador", "injusticado"]
            },

            {
                "nome": "suzana perigosa",
                "idade": 21,
                "identidadeSecreta": "CoringaGirl",
                "poderes": ["Jiu_Jitsu", "turismo", "Capoerista"]
            }

        ]


    }

    //selecionar a lista de super-herois onde a gente deseja inserir os membros
    var listasuperHerois = document.getElementById("superheroes-list")

    //interacao sobre os membros
    dadosSuperHeroi.membros.forEach(function (membro) {
        var li = document.createElement("li")
        li.className = "list-group-item"
        li.innerHTML = `<strong>${membro.nome}<\strng> (idade: ${membro.idade}, Identidade Secreta: ${membro.identidadeSecreta})<br>
        Poderes: ${membro.poderes.join(",")}`
        listasuperHerois.appendChild(li)
    })


})