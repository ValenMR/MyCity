const barriosSectores = {
    "noroccidental": [
        {
            nombre: "Santa Cruz",
            foto: "./images/noroccidental/santa-cruz.jpg" 
        },
        {
            nombre: "Popular",
            foto: "./images/noroccidental/popular.jpg" 
        },
        {
            nombre: "Aranjuez",
            foto: "./images/noroccidental/aranjuez.jpg" 
        },
        {
            nombre: "Manrique",
            foto: "./images/noroccidental/manrique.jpg" 
        }
    ]
}

    // "noroccidental": {
    //     images: ["./images/noroccidental/santa-cruz.jpg", "./images/noroccidental/popular.jpg", "./images/noroccidental/aranjuez.jpg", "./images/noroccidental/manrique.jpg"],
    //     barrios: ["Santa Cruz", "Popular", "Aranjuez", "Manrique"],
    // },
    // "centroriental": {
    //     images: [],
    //     barrios: ["La Candelaría", "Villa Hermosa", "Buenos Aires"],
    // },
    // "sororiental": {
    //     images: [],
    //     barrios: ["El Poblado"],
    // },
    // "centroccidental": {
    //     images: [],
    //     barrios: ["Laureles Estadio", "La América", "San Javier"],
    // },
    // "suroccidental": {
    //     images: [],
    //     barrios: ["Belén", "Guayabal"]
    // },
    // "nororiental": {
    //     images: [],
    //     barrios: ["Doce de Octubre", "Robledo", "Castilla"],
    // }, 


const detalleSector = document.querySelector('.detalle__sector')
const mapa = document.querySelector('.contenedor__mapa')
const infoSector = document.querySelector('.info__sector')

const generarArticle = function(comuna, img) {
    let articuloComuna = document.createElement('article')
    let tituloComuna = document.createElement('h2')
    let fotoComuna = document.createElement('img')
    fotoComuna.className = "fotos__comunas"
    detalleSector.insertAdjacentElement('beforeend', articuloComuna)
    tituloComuna.textContent = comuna
    fotoComuna.setAttribute('src', img)
    fotoComuna.style.width = 300
    fotoComuna.style.height = 300
    articuloComuna.insertAdjacentElement('beforeend', tituloComuna)
    articuloComuna.insertAdjacentElement('beforeend', fotoComuna)
}

mapa.addEventListener('click', (e) => {
    let sector = e.path[1].id
    let tituloSector = document.createElement('p')
    tituloSector.textContent = `Comunas del sector ${sector}`
    tituloSector.style.fontWeight = 'bold'
    detalleSector.insertAdjacentElement('beforeend', tituloSector)

    // let articuloComuna = document.createElement('article')
    // let tituloComuna = document.createElement('h2')
    // let fotoComuna = document.createElement('img')
    // fotoComuna.className = "fotos__comunas"
    // detalleSector.insertAdjacentElement('beforeend', articuloComuna)
    // tituloComuna.textContent = "Comuna 1"
    // fotoComuna.setAttribute('src', "./images/noroccidental/santa-cruz.jpg")
    // fotoComuna.style.width = 300
    // fotoComuna.style.height = 300
    // articuloComuna.insertAdjacentElement('beforeend', tituloComuna)
    // articuloComuna.insertAdjacentElement('beforeend', fotoComuna)
    
    //let articulo = generarArticle("Santa Cruz", "./images/noroccidental/santa-cruz.jpg")
    //console.log(articulo)
    //detalleSector.insertAdjacentElement('beforeend', articulo)

    barriosSectores[sector].forEach(comuna => {
        generarArticle(comuna[nombre], comuna[foto])
    });
})

mapa.addEventListener('mouseover', (e) => {
    let sector = e.path[1].id
    let nombreSec = document.querySelector('#nombre__sector')
    nombreSec.innerHTML = sector
    
})


