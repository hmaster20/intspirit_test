//
// Challenge #2
//
var numberSuccess = 0;
var numberFailure = 0;
var Percent = 0;
var LastError = 0;

var RSPresult;
var RSPtext;

function loadDoc() {
    //document.getElementById("DivButton").style.border = "thick solid #0000FF";
    ////////document.getElementById("DivButton").style.borderColor = "red purple";

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        // if (xhttp.status == 200) {

        if (xhttp.readyState == 4 && xhttp.status == 200) {

            RSPresult = JSON.parse(xhttp.responseText);
            RSPtext = JSON.parse(xhttp.responseText);
            ////RSPresult = JSON.parse(JSON.stringify(RSPresult));
            //document.getElementById("demoСhallenge_2").innerHTML = xhttp.responseText;
            //document.getElementById("statusСhallenge_2").innerHTML = xhttp.status;
            // Вывод значений параметров result и text
            //document.getElementById("statusRSP").innerHTML = RSPresult.result + RSPtext.text;


            //Изменение цвета рамки в зависимости от состояния
            if (RSPresult.result == true) {
                numberSuccess += 1;
                LastError = 0;
                document.getElementById("DivButton").style.borderColor = "green";
                document.getElementById("DivButton").style.color = "green";

            }
            if (RSPresult.result == false) {
                numberFailure += 1;
                LastError += 1;
                document.getElementById("DivButton").style.borderColor = "red";
            }

            //Проверка возможности расчет процента ошибок и вывод %
            if (numberFailure != 0 && numberSuccess != 0) {
                Percent = numberFailure / numberSuccess;
                document.getElementById("PercentID").innerHTML = (Percent.toFixed(2) + "%");
            }
            else {
                document.getElementById("PercentID").innerHTML = "0.00%";
            }
            document.getElementById("CountSuccessID").innerHTML = numberSuccess;
            document.getElementById("CountFailureID").innerHTML = numberFailure;
            document.getElementById("LastErrorID").innerHTML = LastError;


            //schedule = JSON.parse(schedule, function(key, value) {
            //if (key == 'date') return new Date(value);
            //	return value;
            //});
            //alert( schedule.events[1].date.getDate() ); // сработает!


        }
    };
    xhttp.open("GET", "http://careers.intspirit.com/endpoint/response_codes", true);
    xhttp.send();
}

