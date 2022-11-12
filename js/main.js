const detalleSectores = {
    "nororiental" : {
        barrios: ["Santa Cruz, Popular, Aranjuez, Manrique"],
        mejoresLugares: ["Universidad de antioquia", "Palacio de Aranjuez", "otros"],
    }
}

const mapa = document.querySelector('.contenedor__mapa')
const infoSector = document.querySelector('.info__sector')

mapa.addEventListener('click', (e) => {
    console.log(e.path[1].id)
    console.log(e.target.id)
})

mapa.addEventListener('mouseover', (e) => {
    let sector = e.path[1].id
    let nombreSec = document.querySelector('#nombre__sector')
    nombreSec.innerHTML = sector
})
