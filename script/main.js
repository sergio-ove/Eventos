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


const arrayFotosGrandes = [

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

const espacioFotos = document.querySelector('#divPrimerasFotos')

const espacioH2ocultar = document.querySelector('#botonOcultar')



document.addEventListener("click", (ev) => {

    if (ev.target.className == 'tituloMostrar') {

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

        const h2ParaOcultar = document.createElement('H2')
        h2ParaOcultar.classList.add('claseOcultar')
        h2ParaOcultar.textContent = 'OCULTAR FOTOS'

        fragment.append(h2ParaOcultar)
        espacioFotos.append(fragment)



    } if (ev.target.className == 'claseOcultar') {
        espacioFotos.textContent = ' '

    } if (ev.target.className == 'imagenesPrincipales') {

        console.log(ev.target.alt);

        const figureGrande = document.createElement('FIGURE')
        figureGrande.classList.add('claseFigureGrande')

        const divImagenGrande = document.createElement('DIV')
        divImagenGrande.classList.add('divImagenGrande')

        const imgGrande = document.createElement('IMG')

        const fotoElegida = ev.target.alt

        const coincindenciaFotos = arrayFotos.find(element => element.alt == fotoElegida)

        imgGrande.src = coincindenciaFotos.url
        imgGrande.alt = coincindenciaFotos.alt

        const etiquetaTituloFoto = document.createElement('P')
        etiquetaTituloFoto.textContent = coincindenciaFotos.msg

        divImagenGrande.append(etiquetaTituloFoto)
        divImagenGrande.append(imgGrande)

        figureGrande.append(divImagenGrande)

        espacioH2ocultar.append(figureGrande)


    }

    espacioFotos.append(fragment)




})
