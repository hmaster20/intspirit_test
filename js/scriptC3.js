//
// Challenge #3
//
var Vapple = 0;
var Vbanana = 0;
var Vpear = 0;
var Vcucumber = 0;
var Vpotatoes = 0;


function loadData() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            CreateDivFetch();
            genList(xhttp.responseText);
        }
    };
    xhttp.open("GET", "http://careers.intspirit.com/endpoint/data_set", true);
    xhttp.send();
}

function genList(txt) {
    var box = JSON.parse(txt);
    var ul = document.getElementById("list");

    if (ul === null) {
        var elementList = document.createElement("ul");
        elementList.setAttribute("id", "list");
        document.getElementById("arrayID").appendChild(elementList);
    }

    if (box.type === "fruit") {
        var li = document.getElementById("liFruit");
        if (li === null) {
            var elementListFruit = document.createElement("li");
            elementListFruit.setAttribute("id", "liFruit");
            document.getElementById("list").appendChild(elementListFruit);
            document.getElementById("liFruit").innerText = 'Fruit';

            var elementListFruitUl = document.createElement("ul");
            elementListFruitUl.setAttribute("id", "ulFruit");
            document.getElementById("liFruit").appendChild(elementListFruitUl);
        }

        if (box.item === "apple") {
            Vapple += 1;
            var AppleText = Vapple + ' Apple';
            var appleLi = document.getElementById("appleID");
            if (appleLi === null) {
                var elementListFruitapple = document.createElement("li");
                elementListFruitapple.setAttribute("id", "appleID");
                document.getElementById("ulFruit").appendChild(elementListFruitapple);
                document.getElementById("appleID").innerText = AppleText;
            } else {
                document.getElementById("appleID").innerText = AppleText;
            }
        } else if (box.item === "banana") {
            Vbanana += 1;
            var BananaText = Vbanana + ' Banana';
            var bananaLi = document.getElementById("bananaID");
            if (bananaLi === null) {
                var elementListFruitbanana = document.createElement("li");
                elementListFruitbanana.setAttribute("id", "bananaID");
                document.getElementById("ulFruit").appendChild(elementListFruitbanana);
                document.getElementById("bananaID").innerText = BananaText;
            } else {
                document.getElementById("bananaID").innerText = BananaText;
            }
        }
        else if (box.item === "pear") {
            Vpear += 1;
            var PearText = Vpear + ' Pear';
            var pearLi = document.getElementById("pearID");
            if (pearLi === null) {
                var elementListFruitpear = document.createElement("li");
                elementListFruitpear.setAttribute("id", "pearID");
                document.getElementById("ulFruit").appendChild(elementListFruitpear);
                document.getElementById("pearID").innerText = PearText;
            } else {
                document.getElementById("pearID").innerText = PearText;
            }
        }
    }

    if (box.type === "vegetable") {
        var li = document.getElementById("liVegetable");
        if (li === null) {
            var elementListVegetable = document.createElement("li");
            elementListVegetable.setAttribute("id", "liVegetable");
            document.getElementById("list").appendChild(elementListVegetable);
            document.getElementById("liVegetable").innerText = 'Vegetable';

            var elementListVegetableUl = document.createElement("ul");
            elementListVegetableUl.setAttribute("id", "ulVegetable");
            document.getElementById("liVegetable").appendChild(elementListVegetableUl);
        }
        if (box.item === "cucumber") {
            Vcucumber += 1;
            var CucumberText = Vcucumber + ' Cucumber';
            var cucumberLi = document.getElementById("cucumberID");
            if (cucumberLi === null) {
                var elementListVegetableCucumber = document.createElement("li");
                elementListVegetableCucumber.setAttribute("id", "cucumberID");
                document.getElementById("ulVegetable").appendChild(elementListVegetableCucumber);
                document.getElementById("cucumberID").innerText = CucumberText;
            } else {
                document.getElementById("cucumberID").innerText = CucumberText;
            }
        } else if (box.item === "potatoes") {
            Vpotatoes += 1;
            var PotatoesText = Vpotatoes + ' Potatoes';
            var potatoesLi = document.getElementById("potatoesID");
            if (potatoesLi === null) {
                var elementListVegetablePotatoes = document.createElement("li");
                elementListVegetablePotatoes.setAttribute("id", "potatoesID");
                document.getElementById("ulVegetable").appendChild(elementListVegetablePotatoes);
                document.getElementById("potatoesID").innerText = PotatoesText;
            } else {
                document.getElementById("potatoesID").innerText = PotatoesText;
            }
        }
    }
}


function CreateDivFetch() {
    var myElem = document.getElementById('arrayID');
    if (myElem === null) {
        var element = document.createElement("div");
        element.setAttribute("id", "arrayID");
        document.getElementById("FetchID").appendChild(element);
    }
}


function DeleteDivFetch() {
    var elements = document.getElementById("arrayID");
    if (elements != null) {
        elements.parentNode.removeChild(elements);
    }
    Vapple = 0;
    Vbanana = 0;
    Vpear = 0;
    Vcucumber = 0;
    Vpotatoes = 0;
}

