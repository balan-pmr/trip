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
console.log("fecha_formateada:",fecha_formateada)
document.getElementById('spnFecha').innerHTML = fecha_formateada;