/*window.setTimeout(saludar, 4000); Sirve para ejecutar una funcion despues de un tiempo
establecido 

function saludar(){
    alert('Hola bebe');
};


let contador = 1;
let tiempo = window.setInterval(contar, 1000); //Muestra la funcion y cada cuanto ms se agrega el nuevo objeto

function contar(){
    document.write(`${contador} <br>`);
    contador++;
    if(contador > 15){
        window.clearInterval(tiempo); //Para detener el tiempo
    }
}

*/

function actualizarDia(){
    let dia = new Date(),
        diaSemana = dia.getDay(),
        numeroDia = dia.getDate(),
        mes = dia.getMonth(),
        anio = dia.getFullYear();

        //Enviar al html las variables
        let pDiaSemana = document.getElementById('data-diaSemana'),
            pDia = document.getElementById('data-dia'),
            pMes = document.getElementById('data-mes'),
            pAnio = document.getElementById('data-anio');

        //Asignar valores a los objetos del html
        let semana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
        let meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
        
        pDiaSemana.innerText = semana[diaSemana];
        pDia.innerText = numeroDia;
        pMes.innerText = meses[mes];
        pAnio.innerText = anio;

    console.log(diaSemana);
    console.log(numeroDia);
    console.log(mes);
    console.log(anio);
}

function actualizarHora(){
    let fecha = new Date(),
        hora = fecha.getHours(),
        minutos = fecha.getMinutes(),
        segundos = fecha.getSeconds();

        //Enviar al html las variables
        let pHora = document.getElementById('data-horas'),
            pMinutos = document.getElementById('data-minutos'),
            pSegundos = document.getElementById('data-segundos'),
            pAmPm = document.getElementById('data-ampm');

        //Asignar valores a los objetos del html    
        if(hora >= 12){
            pAmPm.innerText = 'PM';
            hora = hora - 12;
        } else {
            pAmPm.innerText = 'AM';
        }

        if(segundos < 10){
            pSegundos.innerText = '0' + segundos;
        } else {
            pSegundos.innerText = segundos;
        }

        if(minutos < 10){
            pMinutos.innerText = '0' + minutos;
        } else {
            pMinutos.innerText = minutos;
        }
            
        if(hora < 10){
            pHora.innerText = '0' + hora;
        } else {
            pHora.innerText = hora;
        }
            
    console.log(fecha);
    console.log(hora);
    console.log(minutos);
    console.log(segundos);
}

function cambiarColor(){
    let rosa = document.getElementsById("colores");
    //let verde = document.getElementsById("colores");

    rosa.className = 'w-75 pink';
    //verde.className = 'w-75 green';
};

window.setInterval(actualizarHora, 1000);
actualizarDia();



