//
// Challenge #3
//

function loadData() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (xhttp.status == 200) {
                document.getElementById("demo").innerHTML = xhttp.responseText;
                document.getElementById("status").innerHTML = xhttp.status;
            }
        };
        xhttp.open("GET", "http://careers.intspirit.com/endpoint/data_set", true);
        xhttp.send();
    }

