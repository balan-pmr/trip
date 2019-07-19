(function () {
    function checkTime(i) {
        return (i < 10) ? "0" + i : i;
    }
    function startTime() {
        var today = new Date(),
            h = checkTime(today.getHours()),
            m = checkTime(today.getMinutes()),
            s = checkTime(today.getSeconds());
        document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
        t = setTimeout(function () {
            startTime()
        }, 500);
    }
    startTime();
})();

var meses = [
  "Enero", "Febrero", "Marzo",
  "Abril", "Mayo", "Junio", "Julio",
  "Agosto", "Septiembre", "Octubre",
  "Noviembre", "Diciembre"
]

var date = new Date();
var dia = date.getDate();
var mes = date.getMonth();
var yyy = date.getFullYear();
var fecha_formateada = dia + ' de ' + meses[mes] + ' de ' + yyy;
//console.log("fecha_formateada:",fecha_formateada)
document.getElementById('spnFecha').innerHTML = fecha_formateada;







let data = [];
/**
 *                 ..........   SABADO 20 DE JULIO
 * 
 */
data.push({
    "day_tilte":"SABADO --- 20 JULIO", "num_day": "20", "num_month":"07", "num_anio":"2019", "idDay":"sab20",
    "events": [
        {
            "title": "Salida de Veracruz a CD. del Carmen Campeche",
            "time": "05:00 AM",
            "day": "Sabado",
            "person": "Ale Anaya",
            "duration": "-- 7 hrs de viaje",
            "todolist": ["Revisar noche antes equipaje", "Revisar Gasolina"], "map":"https://www.google.com/maps/dir/C%C3%B3rdoba,+Ver./Cd+del+Carmen,+Campeche/@18.3887076,-96.615571,7z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x85c48d0a7f1257b3:0xbb08406c12837e32!2m2!1d-96.9237751!2d18.8838909!1m5!1m1!1s0x85f107095727efc5:0x9d5f9130697691c5!2m2!1d-91.8074586!2d18.6504879!3e0"
        },
        {
            "title": "Llegada al Malecón de CD. del Carmen Campeche",
            "time": "12:00 PM",
            "day": "Sabado",
            "person": "Ale Anaya",
            "duration": "",
            "todolist": [], "map":"https://www.google.com/maps/place/Malec%C3%B3n+de+Campeche/@19.8501092,-90.538958,17z/data=!4m5!3m4!1s0x85f833f707856b1b:0x11c25e383e36622a!8m2!3d19.8505986!4d-90.5371234",
        },
        {
            "title": "Llegada a Isla Aguada CD. del Carmen Campeche",
            "time": "01:00 PM",
            "day": "Sabado",
            "person": "Ale Anaya",
            "duration": "-- 1 hora de viaje",
            "todolist": ["Tour a la Laguna de terminos (Delfines) ", "Visitar el Faro", "Playa", "Comida aquí"], "map":"https://www.google.com/maps/place/Isla+Aguada,+Camp./@18.778341,-91.5009453,13.67z/data=!4m5!3m4!1s0x85f11e390b6373e1:0x8b121fe58c3b1bb0!8m2!3d18.7842824!4d-91.4918344"
        },
        {
            "title": "Salida de Campeche a Alojamiento Airbnb",
            "time": "06:00 PM",
            "day": "Sabado",
            "person": "Ale Anaya",
            "duration": "-- 2 hrs de viaje",
            "todolist": [], "map":"https://maps.app.goo.gl/E5UHS6FNqEy6gs8M7"
        },
        {
            "title": "Llegada a Campeche",
            "time": "08:00 PM",
            "day": "Sabado",
            "person": "Ale Anaya",
            "duration": "",
            "todolist": [], "map":"https://maps.app.goo.gl/E5UHS6FNqEy6gs8M7"
        }          

    ],
    "maps": ""
});


/**
 *                 ..........   DOMINGO 21 DE JULIO
 * 
 */
data.push({
    "day_tilte":"DOMINGO --- 21 JULIO", "num_day": "21", "num_month":"07", "num_anio":"2019","idDay":"dom21",
    "events": [
        {
            "title": "Salida a Chiquila",
            "time": "08:00 AM",
            "day": "Domingo",
            "person": "Ale Anaya",
            "duration": "-- 5.20 hrs de viaje",
            "todolist": [], "map":"https://www.google.com/maps/place/Chiquil%C3%A1,+Q.R./@21.4287917,-87.3439157,16z/data=!3m1!4b1!4m5!3m4!1s0x8f4dece042daafbf:0xa9f153ca5fb373f1!8m2!3d21.4259544!4d-87.3401183"
        },
        {
            "title": "Llegada a Chiquila y por lancha a Holbox",
            "time": "01:30 PM",
            "day": "Domingo",
            "person": "Ale Anaya",
            "duration": "",
            "todolist": ["Ir a la Isla Holbox", "Comer aquí", "Playa"], "map":"https://www.google.com/maps/place/Holbox/@21.5507623,-87.3943841,11z/data=!3m1!4b1!4m5!3m4!1s0x8f4d9677b0abe2f1:0xa56edc4fcc77e54e!8m2!3d21.5308421!4d-87.2866995"
        },
        {
            "title": "Salida a Cancún Airbnb",
            "time": "06:30 PM",
            "day": "Domingo",
            "person": "Ale Anaya",
            "duration": "-- 2 hrs de viaje",
            "todolist": [], "map":"https://goo.gl/maps/H1Y6r7hboxkDnM5u9"
        },
        {
            "title": "Llegada a Cancún ",
            "time": "08:30 PM",
            "day": "Domingo",
            "person": "Ale Anaya",
            "duration": "",
            "todolist": [], "map":""
        }
    ],
    "maps": "https://www.google.com/maps/dir/C%C3%B3rdoba,+Ver./Cd+del+Carmen,+Campeche/@18.3887076,-96.615571,7z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x85c48d0a7f1257b3:0xbb08406c12837e32!2m2!1d-96.9237751!2d18.8838909!1m5!1m1!1s0x85f107095727efc5:0x9d5f9130697691c5!2m2!1d-91.8074586!2d18.6504879!3e0"
});







/**
 *                 ..........   LUNES 22 DE JULIO
 * 
 */
data.push({
    "day_tilte":"LUNES --- 22 JULIO", "num_day": "22", "num_month":"07", "num_anio":"2019","idDay":"lun22",
    "events": [
        {
            "title": "Ir a Isla Mujeres",
            "time": "0X:00 AM",
            "day": "Lunes",
            "person": "Ale Anaya",
            "duration": "-- X hrs de viaje",
            "todolist": ["Playa", "Snorkel", "Comer aquí"], "map":"https://www.google.com/maps/place/Isla+Mujeres,+Q.R./@21.2425866,-86.755116,14z/data=!3m1!4b1!4m5!3m4!1s0x8f4c25570eceb2d3:0x5870eb25a25e8c7b!8m2!3d21.2366946!4d-86.7357679"
        }
    ],
    "maps": "https://www.google.com/maps/dir/C%C3%B3rdoba,+Ver./Cd+del+Carmen,+Campeche/@18.3887076,-96.615571,7z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x85c48d0a7f1257b3:0xbb08406c12837e32!2m2!1d-96.9237751!2d18.8838909!1m5!1m1!1s0x85f107095727efc5:0x9d5f9130697691c5!2m2!1d-91.8074586!2d18.6504879!3e0"
});






/**
 *                 ..........   MARTES 23 DE JULIO
 * 
 */
data.push({
    "day_tilte":"MARTES --- 23 JULIO", "num_day": "23", "num_month":"07", "num_anio":"2019","idDay":"mar23",
    "events": [
        {
            "title": "Estancia en el AirBnB",
            "time": "0X:00 AM",
            "day": "Martes",
            "person": "Ale Anaya",
            "duration": "-- X hrs de viaje",
            "todolist": ["Playa", "Descansar", "Alberca"], "map":"https://goo.gl/maps/H1Y6r7hboxkDnM5u9"
        }
    ], 
    "maps": "https://www.google.com/maps/dir/C%C3%B3rdoba,+Ver./Cd+del+Carmen,+Campeche/@18.3887076,-96.615571,7z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x85c48d0a7f1257b3:0xbb08406c12837e32!2m2!1d-96.9237751!2d18.8838909!1m5!1m1!1s0x85f107095727efc5:0x9d5f9130697691c5!2m2!1d-91.8074586!2d18.6504879!3e0"
});





/**
 *                 ..........   MIERCOLES 24 DE JULIO
 * 
 */
data.push({
    "day_tilte":"MIERCOLES --- 24 JULIO", "num_day": "24", "num_month":"07", "num_anio":"2019","idDay":"mier24",
    "events": [
        {
            "title": "Salir de Cancun a Xelha",
            "time": "07:00 AM",
            "day": "Miercoles",
            "person": "Ale Anaya",
            "duration": "-- 1.30 hrs de viaje",
            "todolist": [], "map":"https://www.google.com/maps/place/Parque+Xel-H%C3%A1/@20.3193637,-87.3600011,17z/data=!3m1!4b1!4m5!3m4!1s0x8f4e32c93fffffc1:0xfe3263656477196!8m2!3d20.3193587!4d-87.3578124"
        },
        {
            "title": "Llegada a Xelha",
            "time": "08:30 AM",
            "day": "Miercoles",
            "person": "Ale Anaya",
            "duration": "",
            "todolist": ["Desayunar", "Comer", "Actividades en el parque"], "map":""
        },
        {
            "title": "Salida del parque a Playa del Carmen -> Airbnb",
            "time": "06:30 PM",
            "day": "Miercoles",
            "person": "Ale Anaya",
            "duration": "",
            "todolist": ["Ir a dar la vuelta al centro"], "map":"https://maps.app.goo.gl/Y9PQVE3XZUa77Wd38"
        }
    ],
    "maps": "https://www.google.com/maps/dir/C%C3%B3rdoba,+Ver./Cd+del+Carmen,+Campeche/@18.3887076,-96.615571,7z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x85c48d0a7f1257b3:0xbb08406c12837e32!2m2!1d-96.9237751!2d18.8838909!1m5!1m1!1s0x85f107095727efc5:0x9d5f9130697691c5!2m2!1d-91.8074586!2d18.6504879!3e0"
});




/**
 *                 ..........   JUEVES 25 DE JULIO
 * 
 */
data.push({
    "day_tilte":"JUEVES --- 25 JULIO", "num_day": "25", "num_month":"07", "num_anio":"2019","idDay":"jue25",
    "events": [
        {
            "title": "Salir de Cancun a XCARTE",
            "time": "07:30 AM",
            "day": "Jueves",
            "person": "Ale Anaya",
            "duration": "-- 15 minutos de viaje",
            "todolist": [], "map":"https://www.google.com/maps/place/Xcaret/@20.5809184,-87.1218867,17z/data=!3m1!4b1!4m5!3m4!1s0x8f4e446dadd87053:0x8042e81e921809a5!8m2!3d20.5809134!4d-87.119698"
        },
        {
            "title": "Llegada a XCARETE",
            "time": "08:00 AM",
            "day": "Jueves",
            "person": "Ale Anaya",
            "duration": "",
            "todolist": ["Desayunar", "Comer", "Actividades en el parque"], "map":""
        },
        {
            "title": "Salida del XCARETE al Airbnb ",
            "time": "11:30 PM",
            "day": "Jueves",
            "person": "Ale Anaya",
            "duration": "-- 15 minutos de viaje",
            "todolist": [], "map":"https://maps.app.goo.gl/Y9PQVE3XZUa77Wd38"
        }
    ],
    "maps": "https://www.google.com/maps/dir/C%C3%B3rdoba,+Ver./Cd+del+Carmen,+Campeche/@18.3887076,-96.615571,7z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x85c48d0a7f1257b3:0xbb08406c12837e32!2m2!1d-96.9237751!2d18.8838909!1m5!1m1!1s0x85f107095727efc5:0x9d5f9130697691c5!2m2!1d-91.8074586!2d18.6504879!3e0"
});






/**
 *                 ..........   VIERNES 26 DE JULIO
 * 
 */
data.push({
    "day_tilte":"VIERNES --- 26 JULIO", "num_day": "26", "num_month":"07", "num_anio":"2019","idDay":"vie26",
    "events": [
        {
            "title": "Salir al Xenote Azul",
            "time": "08:00 AM",
            "day": "Viernes",
            "person": "Ale Anaya",
            "duration": "-- 25 minutos de viaje",
            "todolist": [], "map":"https://www.google.com/maps/place/Cenote+Azul/@20.4885793,-87.2607675,15z/data=!3m1!4b1!4m5!3m4!1s0x8f4e378556536c03:0x6d64afe52c71e00e!8m2!3d20.4885598!4d-87.2520127"
        },
        {
            "title": "Salir a Tulum",
            "time": "12:00 PM",
            "day": "Viernes",
            "person": "Ale Anaya",
            "duration": "-- 34 minutos de viaje",
            "todolist": [], "map":"https://www.google.com/maps/place/Tulum,+Q.R./@20.2096594,-87.4893856,14z/data=!3m1!4b1!4m5!3m4!1s0x8f4fd40310e42a4b:0xeedc0db93ff9ab7!8m2!3d20.2114185!4d-87.4653502"
        },
        {
            "title": "Salida a Chetumal -> AirBnb  ",
            "time": "06:00 PM",
            "day": "Viernes",
            "person": "Ale Anaya",
            "duration": "-- 2.53 hrs de viaje",
            "todolist": [], "map":"https://maps.app.goo.gl/G2tNMXqYdSkiXo6K6"
        }
    ], 
    "maps": "https://www.google.com/maps/dir/C%C3%B3rdoba,+Ver./Cd+del+Carmen,+Campeche/@18.3887076,-96.615571,7z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x85c48d0a7f1257b3:0xbb08406c12837e32!2m2!1d-96.9237751!2d18.8838909!1m5!1m1!1s0x85f107095727efc5:0x9d5f9130697691c5!2m2!1d-91.8074586!2d18.6504879!3e0"
});





/**
 *                 ..........   SABADO 27 DE JULIO
 * 
 */
data.push({
    "day_tilte":"SABADO --- 27 JULIO", "num_day": "27", "num_month":"07", "num_anio":"2019","idDay":"sab27",
    "events": [
        {
            "title": "Salir a Bacalar",
            "time": "08:00 AM",
            "day": "Sabado",
            "person": "Ale Anaya",
            "duration": "-- 38 minutos de viaje",
            "todolist": [], "map":"https://www.google.com/maps/place/Bacalar,+Q.R./@18.669693,-88.41682,14z/data=!3m1!4b1!4m5!3m4!1s0x8f5bb13e302c19f9:0x11cedc7f2bd0e608!8m2!3d18.6782919!4d-88.3923946"
        },
        {
            "title": "Dormir en Chetumal -> Airbnb",
            "time": "0X:00 PM",
            "day": "Sabado",
            "person": "Ale Anaya",
            "duration": "-- 38 minutos de viaje",
            "todolist": [], "map":"https://maps.app.goo.gl/G2tNMXqYdSkiXo6K6"
        }
    ], 
    "maps": "https://www.google.com/maps/dir/C%C3%B3rdoba,+Ver./Cd+del+Carmen,+Campeche/@18.3887076,-96.615571,7z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x85c48d0a7f1257b3:0xbb08406c12837e32!2m2!1d-96.9237751!2d18.8838909!1m5!1m1!1s0x85f107095727efc5:0x9d5f9130697691c5!2m2!1d-91.8074586!2d18.6504879!3e0"
});





/**
 *                 ..........   DOMINGO 28 DE JULIO
 * 
 */
data.push({
    "day_tilte":"DOMINGO --- 28 JULIO", "num_day": "28", "num_month":"07", "num_anio":"2019","idDay":"dom28",
    "events": [
        {
            "title": "Salir a Zona arqueologica Palenque",
            "time": "07:00 AM",
            "day": "Domingo",
            "person": "Ale Anaya",
            "duration": "-- 6.15 hrs de viaje",
            "todolist": [], "map":"https://www.google.com/maps/place/Zona+Arqueol%C3%B3gica+Palenque/@17.4847748,-92.0480836,17z/data=!3m1!4b1!4m5!3m4!1s0x85f244c777bddbdd:0x6ebbea71995ddcf1!8m2!3d17.4847697!4d-92.0458949"
        },
        {
            "title": "Llegar a Palenque -> Airbnb",
            "time": "02:00 PM",
            "day": "Domingo",
            "person": "Ale Anaya",
            "duration": "",
            "todolist": ["Ir a las ruinas", "Comer en el Pueblito", "Descansar", "Preparar regreso"], "map":"https://maps.app.goo.gl/5VZkDBVbFgChpDA4A"
        }
    ], 
    "maps": "https://www.google.com/maps/dir/C%C3%B3rdoba,+Ver./Cd+del+Carmen,+Campeche/@18.3887076,-96.615571,7z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x85c48d0a7f1257b3:0xbb08406c12837e32!2m2!1d-96.9237751!2d18.8838909!1m5!1m1!1s0x85f107095727efc5:0x9d5f9130697691c5!2m2!1d-91.8074586!2d18.6504879!3e0"
});



/**
 *                 ..........   LUNES 29 DE JULIO
 * 
 */
data.push({
    "day_tilte":"LUNES --- 29 JULIO", "num_day": "29", "num_month":"07", "num_anio":"2019","idDay":"lun29",
    "events": [
        {
            "title": "Salir a Peñuela Veracruz",
            "time": "05:00 AM",
            "day": "Lunes",
            "person": "Ale Anaya",
            "duration": "-- 7 hrs de viaje",
            "todolist": [], "map":"https://www.google.com/maps/place/Pe%C3%B1uela,+Ver./@18.864993,-96.8986571,15z/data=!3m1!4b1!4m5!3m4!1s0x85c4f02f3acb76c1:0x77f1d5d079e53f01!8m2!3d18.8646409!4d-96.8928831"
        }
    ], 
    "maps": "https://www.google.com/maps/dir/C%C3%B3rdoba,+Ver./Cd+del+Carmen,+Campeche/@18.3887076,-96.615571,7z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x85c48d0a7f1257b3:0xbb08406c12837e32!2m2!1d-96.9237751!2d18.8838909!1m5!1m1!1s0x85f107095727efc5:0x9d5f9130697691c5!2m2!1d-91.8074586!2d18.6504879!3e0"
});











function getHTMLDayTitle (dayEvent){
    return ` 
        <div class="column-content"> 
            <a href="javascript:hideSection('${dayEvent.idDay}')" id="href_${dayEvent.idDay}"  >
            <img src="./assets/img/up.png" width="30px" style="border-radius: 50%;" id="img_${dayEvent.idDay}" />
            <font size="5">${dayEvent.day_tilte}</font>  
            </a>
        </div>  
        <br>
    `
}


function getHTMLEvent (event){
    let eventHTML=  ` 
    <article class="timeline-entry">
    <div class="timeline-entry-inner">
        <time class="timeline-time" datetime="2014-01-10T03:45">
            <span>${event.time}</span> 
            <span>${event.day}</span>
        </time>
        
        <div class="timeline-icon bg-success">
            <i class="entypo-feather"></i>
        </div>
        
        <div class="timeline-label">
            <div class="row">
                    <div class="column">
                            <div class="row">
                                    <div class="column">
                                            <font color="black"><b>${event.person}&nbsp;&nbsp;&nbsp;&nbsp;</b></font>
                                    </div>
                                    <div class="column">
                                            <font size="3" color="red"><b>${event.duration}</b></font>
                                    </div>
                            </div> <br>
                            <font size="3" color="black"><span>${event.title}</span></font>      
                            <ul> `
                            for(let todo of event.todolist){
                                eventHTML+=`
                                    <li><font size="2"><span>${todo}</span></font> </li>
                                    `     
                            }
                            eventHTML+=`</ul> `
    if(event.map != "")
    eventHTML+=`              
                            <a href="${event.map}" target="_blank">
                            <img src="./assets/img/maps.png" width="30px" style="border-radius: 50%;" />
                            </a>
                            `
    eventHTML+=`                                   
                    </div>
            </div>                 
        </div>
    </div>
    </article>    
    `
    return eventHTML;
}






function printData () {
    let htmlTimeLines = '';
    for (const dayEvent of data ) {
        htmlTimeLines +=  getHTMLDayTitle(dayEvent);
        htmlTimeLines += `<div class="timeline-centered" id="${dayEvent.idDay}" >`
        for (const event of dayEvent.events ) {
            htmlTimeLines +=  getHTMLEvent(event);
        }
        htmlTimeLines += '</div>'
    }
    document.getElementById('doTimelines').innerHTML = htmlTimeLines;

    // Hide according the actual day
    let trip_started = false;
    for (const dayEvent of data ) {
        if(dia < dayEvent.num_day){
            hideSection(dayEvent.idDay)
        }else
        if(dia === dayEvent.num_day){
            showSection(dayEvent.idDay)
            trip_started = true;
        }
    }
    if(!trip_started){
        console.log('no ha comenzado el viaje...')
        showSection(data[0].idDay)
    }
}


printData();

function hideSection( idDay ){
    console.log('Escondiendo seccion ->'+idDay)
    document.getElementById(idDay).setAttribute("style", "display:none;")
    document.getElementById('img_'+idDay).src='./assets/img/down.png';
    document.getElementById('href_'+idDay).href=`javascript:showSection('${idDay}')`;
}

function showSection( idDay ){
    console.log('Mostrando seccion ->'+idDay)
    document.getElementById(idDay).setAttribute("style", "display: block;")
    document.getElementById('img_'+idDay).src='./assets/img/up.png';
    document.getElementById('href_'+idDay).href=`javascript:hideSection('${idDay}')`;
}
