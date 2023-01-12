let Nombre = 'Brian Lawrence'
let Profesion = 'Arquitecto'
let FechaNac = 'Nacido el ' + '8/5/1964'
let Direccion = 'Actualmente reside en ' + '8922 Nowlin Rd'


let infoProfText1 = 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...'
let infoProfText2 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
let infoProfText3 = 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris '
let infoProfText4 = 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore'


let infoAntText1 = 'Ferrars all spirits his imagine effects amongst neither. '
let infoAntText2 = 'It bachelor cheerful of mistaken.'
let infoAntText3 = 'On am nearer missed lovers.'
let infoAntText4 = 'To it mother extent temper figure better.'

let Email = 'brian.lawrence@example.com'
let TelCel = '(221) 709-6338'


function cargarInfoPersonal(){
    console.log('Cargando informacion personal')
    document.getElementById("Campo1").innerHTML = "Información Personal"
    document.getElementById("Campo2").innerHTML = Nombre
    document.getElementById("Campo3").innerHTML = Profesion
    document.getElementById("Campo4").innerHTML = FechaNac
    document.getElementById("Campo5").innerHTML = Direccion
}

function cargarInfoProfesional(){
    console.log('Cargando informacion profesional')
    document.getElementById("Campo1").innerHTML = "Información Profesional"
    document.getElementById("Campo2").innerHTML = infoProfText1
    document.getElementById("Campo3").innerHTML = infoProfText2
    document.getElementById("Campo4").innerHTML = infoProfText3
    document.getElementById("Campo5").innerHTML = infoProfText4
}

function cargarAntecedentes(){
    console.log('Cargando antecedentes')
    document.getElementById("Campo1").innerHTML = "Antecedentes Laborales"
    document.getElementById("Campo2").innerHTML = infoAntText1
    document.getElementById("Campo3").innerHTML = infoAntText2
    document.getElementById("Campo4").innerHTML = infoAntText3
    document.getElementById("Campo5").innerHTML = infoAntText4
}

function cargarInfoContacto(){
    console.log('Cargando información de contacto')
    document.getElementById("Campo1").innerHTML = "Info de Contacto"
    document.getElementById("Campo2").innerHTML = 'Escribime!'
    document.getElementById("Campo3").innerHTML = Email
    document.getElementById("Campo4").innerHTML = 'Llamame!'
    document.getElementById("Campo5").innerHTML = TelCel
}

document.getElementById("InfoPersonal").addEventListener("click",function(){
    cargarInfoPersonal();
})

document.getElementById("InfoProfesional").addEventListener("click",function(){
    cargarInfoProfesional();
})

document.getElementById("Antecedentes").addEventListener("click",function(){
    cargarAntecedentes();
})

document.getElementById("Contacto").addEventListener("click",function(){
    cargarInfoContacto();
})


