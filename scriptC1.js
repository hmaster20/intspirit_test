//
// Challenge #1
//
var Err = 0;  // Счетчик ошибок
var CheckErr = new Boolean(false); // Указатель наличия ошибок
var CodeErr = "";
var DivErr = "";

var CheckRes = new Boolean(false); // Указатель наличия результатов
var CodeRes = "";
var DivRes = "";

document.getElementById('RequestFieldID').value = ''; // сброс поля ввода

function callRequest() {
    var Name = document.getElementById("RequestFieldID").value; // Считываем запрос
    if (Name == '') {                           //Проверка наличия информации в поле запроса
        generateEventErr('');
    }
    else {
        document.getElementById("ButtonID").value = 'submit'; //Изменяем название кнопки
        var body = 'request=' + Name; // Формирование запроса
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (xhttp.status == 200) {
                //var el = document.getElementById('SumError');
                //el.parentNode.removeChild(el);
                if (Err > 0) {
                    document.getElementById('infError').innerHTML = "";
                    Err = 0;
                    CodeErr = "";
                }
                //var Result = 'Status: ' + xhttp.status + '\n' + 'Body :' + xhttp.responseText + '\n';
                if (CheckRes != true) {
                    CheckRes = true;
                    generateDivRes(xhttp.responseText);
                    document.getElementById("infR").innerHTML = DivRes;
                }
                else {
                    document.getElementById("fullresult").innerHTML = xhttp.responseText;
                }
            }
            if (xhttp.status == 204) {
                generateEventErr('204');
            }
        };
        xhttp.open("POST", "http://careers.intspirit.com/endpoint/post_response", false);
        xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhttp.send(body);
    } 
}


// Создание блока для вывода информации об результатах
function generateDivRes(ResText) {
    //CodeErr = "Error: Not set request!";
    CodeRes = ResText;
    DivRes += "<fieldset>";
    DivRes += "<legend>Result<\/legend>";
    DivRes += "<div class='blockError' id='fullresult' name='textResult'>";
    DivRes += CodeRes;
    DivRes += "<\/div>";
    DivRes += "<\/fieldset>";
    return DivRes;
}


// Создание блока для вывода информации об ошибках
function generateDivErr(ErrText) {
    //CodeErr = "Error: Not set request!";
    CodeErr = ErrText;
    DivErr += "<fieldset>";
    DivErr += "<legend>Error Log<\/legend>";
    DivErr += "<div class='blockError' id='infError'>";
    DivErr += CodeErr;
    DivErr += "<\/div>";
    DivErr += "<\/fieldset>";
    return DivErr;
}


// Обработка ошибок
function generateEventErr(event) {
    if (CheckRes == true) {
        document.getElementById("fullresult").innerHTML = ""; //Очистка результата
    }
    if (event == '') {
        alert("Please type in the query!");             //Уведомление о необходимости ввода строки запроса
        this.Err += 1;                                  //Учитываем ошибку
        if (Err == 1 && CheckErr != true) {
            CheckErr = true;                            //Включен указатель наличия ошибки
            generateDivErr("Error: Not set request!");  //Создаем блок для вывода информации об ошибках
            document.getElementById("infE").innerHTML = DivErr; //Формирование блока вывода ошибок
        }
        else {
            if (Err < 6) {
                if (Err > 1) {
                    CodeErr = CodeErr + "<br>" + "Error: Not set request!";
                }
                else {
                    CodeErr = "Error: Not set request!";
                }
                document.getElementById("infError").innerHTML = CodeErr;
            }
            else {
                Err = 1;
                CodeErr = "Error: Not set request!";
                document.getElementById("infError").innerHTML = CodeErr;
            }
        }
        document.getElementById("ButtonID").value = 'resubmit'; //Изменяем название кнопки
        document.getElementsByName('PostText')[0].focus();      //Устанавливаем фоку в поле ввода
    }
    if (event == '204') {
        Err += 1;                                               //Учитываем ошибку
        if (Err == 1 && CheckErr != true) {
            CheckErr = true;                                    //Включен указатель наличия ошибки
            generateDivErr("No Content,  error: 204. Do not use text error.");  //Создаем блок для вывода информации об ошибках
            document.getElementById("infE").innerHTML = DivErr; //Формирование блока вывода ошибок
        }
        else {
            if (Err < 6) {
                if (Err > 1) {
                    CodeErr = CodeErr + "<br>" + "No Content,  error: 204. Do not use text error.";
                }
                else {
                    CodeErr = "No Content,  error: 204. Do not use text error.";
                }
                document.getElementById("infError").innerHTML = CodeErr;
            }
            else {
                Err = 1;
                CodeErr = "No Content,  error: 204. Do not use text error.";
                document.getElementById("infError").innerHTML = CodeErr;
            }
        }
    }
}