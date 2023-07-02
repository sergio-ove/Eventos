const arrayFotos = [

    {
        url: "img/viajes-1.jpg",
        alt: "foto viaje 1",
        msg: "Viaje a Cuba",
        clase: "imagen1"
    },
    {
        url: "img/viajes-2.jpg",
        alt: "foto viaje 2",
        msg: "Viaje a México",
        clase: "imagen2"
    },
    {
        url: "img/viajes-3.jpg",
        alt: "foto viaje 3",
        msg: "Viaje a cualquier lugar",
        clase: "imagen3"
    },
    {
        url: "img/viajes-4.jpg",
        alt: "foto viaje 4",
        msg: "Viaje a Sevilla",
        clase: "imagen4"
    }

]


const arrayFotosGrandes = [

    {
        url: "img/viajes-1.jpg",
        alt: "foto viaje 1",
        msg: "Viaje a Cuba",
        clase: "imagen-1"
    },
    {
        url: "img/viajes-2.jpg",
        alt: "foto viaje 2",
        msg: "Viaje a México",
        clase: "imagen-2"
    },
    {
        url: "img/viajes-3.jpg",
        alt: "foto viaje 3",
        msg: "Viaje a cualquier lugar",
        clase: "imagen-3"
    },
    {
        url: "img/viajes-4.jpg",
        alt: "foto viaje 4",
        msg: "Viaje a Sevilla",
        clase: "imagen-4"
    }

]


const fragment = document.createDocumentFragment()

const espacioFotos = document.querySelector('#divPrimerasFotos')

const h2Mostrar = document.querySelector('.tituloMostrar')

const espacioH2ocultar = document.querySelector('#botonOcultar')

const clasesDeLasFotos = arrayFotosGrandes.map(element => element.clase)


document.addEventListener("click", (ev) => {

    //EVENTO PARA MOSTRAR LAS 4 FOTOS PRINCIPALES
    if (ev.target.className == 'tituloMostrar') {

        arrayFotos.forEach((item) => {

            const figurePrincipal = document.createElement('FIGURE')
            figurePrincipal.classList.add('figurePrincipal')

            const divPrincipal = document.createElement('DIV')

            const imgPrincipal = document.createElement('IMG')
            imgPrincipal.classList.add('imagenesPrincipales')
            imgPrincipal.src = item.url
            imgPrincipal.alt = item.alt

            h2Mostrar.textContent = " "

            divPrincipal.append(imgPrincipal)

            figurePrincipal.append(divPrincipal)

            fragment.append(figurePrincipal)


        })

        const h2ParaOcultar = document.createElement('H2')
        h2ParaOcultar.classList.add('claseOcultar')
        h2ParaOcultar.textContent = 'OCULTAR FOTOS'

        fragment.append(h2ParaOcultar)
        espacioFotos.append(fragment)


        //EVENTO PARA OCULTAR LAS 4 FOTOS PRINCIPALES Y MOSTRAR DE NUEVO EL H2 DE MOSTRAR
    } if (ev.target.className == 'claseOcultar') {

        espacioFotos.textContent = ' '
        h2Mostrar.textContent = 'MOSTRAR FOTOS'
        h2Mostrar.append(fragment)

        //EVENTO PARA MOSTRAR EN TAMAÑO GRANDE LA FOTO QUE SELECCIONE EL USUARIO
    } if (ev.target.className == 'imagenesPrincipales') {

        const fotoElegida = ev.target.alt

        const coincindenciaFotos = arrayFotosGrandes.find(element => element.alt == fotoElegida)

        const figureGrande = document.createElement('FIGURE')
        figureGrande.classList.add(coincindenciaFotos.clase)

        const divImagenGrande = document.createElement('DIV')

        const imgGrande = document.createElement('IMG')

        imgGrande.src = coincindenciaFotos.url
        imgGrande.alt = coincindenciaFotos.alt

        const etiquetaTituloFoto = document.createElement('P')
        etiquetaTituloFoto.textContent = coincindenciaFotos.msg

        const botonEliminarFoto = document.createElement('BUTTON')
        botonEliminarFoto.textContent = 'ELIMINAR'
        botonEliminarFoto.classList.add(coincindenciaFotos.clase)

        divImagenGrande.append(etiquetaTituloFoto)
        divImagenGrande.append(imgGrande)
        divImagenGrande.append(botonEliminarFoto)

        figureGrande.append(divImagenGrande)

        espacioH2ocultar.append(figureGrande)


    } if (ev.target.className == clasesDeLasFotos[0] || ev.target.className == clasesDeLasFotos[1] || ev.target.className == clasesDeLasFotos[2] || ev.target.className == clasesDeLasFotos[3]) {

        const objetivo = ev.target.className

        const figureAeliminar = document.querySelector(`.${objetivo}`)

        figureAeliminar.remove()

    }

    espacioFotos.append(fragment)




})
