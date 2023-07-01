const arrayFotos = [
    {
        url: "img/viajes-1.jpg",
        alt: "foto viaje 1",
        msg: "Viaje a Cuba"
    },
    {
        url: "img/viajes-2.jpg",
        alt: "foto viaje 2",
        msg: "Viaje a México"
    },
    {
        url: "img/viajes-3.jpg",
        alt: "foto viaje 3",
        msg: "Direcciones"
    },
    {
        url: "img/viajes-4.jpg",
        alt: "foto viaje 4",
        msg: "Viaje a Sevilla"
    }

]

const fragment = document.createDocumentFragment()

console.log(arrayFotos);


const espacioFotos = document.querySelector('#divPrimerasFotos')

document.addEventListener("click", (ev) => {

    if (ev.target.className = 'tituloMostrar') {
        
        arrayFotos.forEach((item) => {

            const figurePrincipal = document.createElement('FIGURE')
            figurePrincipal.classList.add('figurePrincipal')
            const divPrincipal = document.createElement('DIV')
            const imgPrincipal = document.createElement('IMG')
            imgPrincipal.classList.add('imagenesPrincipales')
            imgPrincipal.src = item.url
            imgPrincipal.alt = item.alt
            divPrincipal.append(imgPrincipal)
            figurePrincipal.append(divPrincipal)

            fragment.append(figurePrincipal)



        })

        espacioFotos.append(fragment)
    }




})
