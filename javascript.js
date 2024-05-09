let listaCarros = [
    {
        "nome": "carro2",
        "img": "img/carro2.jpg",
        "descricao": "Lorem Ipsum é simplesmente um texto fictício da indústria de impressão e composição tipográfica.",
    },

    {
        "nome": "compass",
        "img": "img/compass.png",
        "descricao": "Lorem Ipsum é simplesmente um texto fictício da indústria de impressão e composição tipográfica.",
    },

    {
        "nome": "haval",
        "img": "img/haval.webp",
        "descricao": "Lorem Ipsum é simplesmente um texto fictício da indústria de impressão e composição tipográfica.",
    },

    {
        "nome": "Lamborghini",
        "img": "img/Lamborghini.webp",
        "descricao": "Lorem Ipsum é simplesmente um texto fictício da indústria de impressão e composição tipográfica.",
    },

    {
        "nome": "Mustang",
        "img": "img/Mustang.png",
        "descricao": "Lorem Ipsum é simplesmente um texto fictício da indústria de impressão e composição tipográfica.",
    },

    {
        "nome": "tiggo8",
        "img": "img/tiggo8.jpg",
        "descricao": "Lorem Ipsum é simplesmente um texto fictício da indústria de impressão e composição tipográfica.",
    }
  
    
]

listaCarros.map((carro, posicao) => {
    let cardCarro = document.getElementById("cards");
    cardCarro.innerHTML += `
    <div class="col-md-4"
        <div class="card m-2">
            <img src="${carro.img}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${carro.nome}</h5>
            <a href="#" class="btn btn-secondary" onclick="zoomImg ('${posicao}')"><i class="bi bi-zoom-in"></i></a>
            </div>
        </div>
    </div>
    `
})

function zoomImg(posicao){
    let carroSelecionado = listaCarros[posicao];
    document.getElementById("nomeCarro").innerHTML = carroSelecionado.nome;
    document.getElementById("descricaoCarro").innerHTML = carroSelecionado.descricao;
    document.getElementById("imgModal").src = carroSelecionado.img;

    new bootstrap.Modal('#zoomImg').show();
}

function alterarTemaSite(){
    let tema = document.querySelector("html").getAttribute("data-bs-theme");
    if(tema ==="dark"){
        document.querySelector("html").setAttribute("data-bs-theme", "light");
        document.querySelector("#alterarTemaSite").innerHTML=`<i class="bi bi-moon-fill"></i>`
    }else{
        document.querySelector("html").setAttribute("data-bs-theme", "dark");
        document.querySelector("#alterarTemaSite").innerHTML=`<i class="bi bi-brightness-high-fill"></i>`
    }
}

