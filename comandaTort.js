var url = "http://localhost:3000/comanda";
var comanda = [];

var num = "";
var com = "";


function myLoad(){
    return new Promise(function(resolve, reject){
        var xhr  = new XMLHttpRequest()
        xhr.open('GET', url, true)
        xhr.onload = function () {
            if (xhr.readyState == 4 && xhr.status == "200") {
                comanda = JSON.parse(xhr.responseText);
                console.table(comanda);
                return resolve(comanda);
            } else {
                reject({
                    statusText: xhr.statusText
                });
            }
        }
        
    xhr.send(null);
    })

}

myLoad();

function login(){

    num = document.getElementById("nume1").value;
    com = document.getElementById("com1").value;
    var ok = 0;
    console.log(num + " " + com);
    //console.log(comanda[0].nume);
    for(var i = 0; i < comanda.length; i++){
        if(comanda[i].nume == num && comanda[i].id == com){
            console.log("Autentificare cu success!");
            window.location.href="http://localhost/loggedUser.html";


        }
            
         else{
            ok = ok + 1;
            console.log("A aparut o eroare! Incercati din nou!");
         }
            
    }

    if (ok === comanda.length)
        alert("Date inavlide!")
}

function del(){
    var comToDelete = document.getElementById("com2").value;

    return new Promise(function(resolve, reject){
        var xhr = new XMLHttpRequest();
        xhr.open("DELETE", url+"/"+comToDelete, true);
        xhr.onload = function () {
            alert("Succes!!!");
            var us = JSON.parse(xhr.responseText);
            if (xhr.readyState == 4 && xhr.status == "200") {
                console.table(us);
                window.location.href="http://localhost/index.html";
            } else {
                console.error(us);
            }
        }

        xhr.onerror = function () {
            alert('Nu s-a sters!');
        }
        xhr.send();

    })
}

function update(){

    let nume = document.getElementById("num3").value;
    let com = document.getElementById("com3").value;
    let nrTel = document.getElementById("nrtel3").value;
    let tort = document.getElementById("tort3").value;

    
    let data = {};
    data.id = com;
    data.nume = nume;
    data.numarTelefon = nrTel;
    data.tort = tort;


    let json = JSON.stringify(data);

    return new Promise(function(resolve, reject){
        var xhr = new XMLHttpRequest();
        xhr.open("PUT", url+"/"+com, true);
        xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
        xhr.onload = function () {
            alert("Succes!!!");
            var us = JSON.parse(xhr.responseText);
            if (xhr.readyState == 4 && xhr.status == "200") {
                console.table(us);
            } else {
                console.error(us);
            }
        }

        xhr.onerror = function () {
            alert('Nu s-a realizat Update!');
        }
        xhr.send(json);

        //window.location.href = "index.html";
    })
      
}


function adaugaComanda(){
    let numeNou = document.getElementById("nume4").value;
    let nrTelefonNou = document.getElementById("nrtel4").value;
    let tort = document.getElementById("tort4").value;
        
        let data = {};
        data.id = comanda[comanda.length - 1].id + 1;
        data.nume = numeNou;
        data.numarTelefon = nrTelefonNou;
        data.tort = tort;

        let json = JSON.stringify(data);
        return new Promise(function(resolve, reject){
            var xhr = new XMLHttpRequest();
            xhr.open("POST", url, true);
            xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
            xhr.onload = function () {
                alert("Comanda adaugata cu success!!!");
                var us = JSON.parse(xhr.responseText);
                if (xhr.readyState == 4 && xhr.status == "200") {
                    console.table(us);
                } else {
                    console.error(us);
                }
            }
            xhr.onerror = function () {
                alert('Nu s-a adaugat comanda!');
            }
            xhr.send(json);            
        })   

}

function getProgram() {
    let program = document.getElementById("program");

  let h1 = document.createElement("h3");
  let t1 = document.createTextNode("Program");
  h1.appendChild(t1);
  let h2 = document.createElement("h4");
  let t2 = document.createTextNode("Luni: 10:00 - 20:30");
  h2.appendChild(t2);
  let h3 = document.createElement("h4");
  let t3 = document.createTextNode("Marți: 10:00 - 20:30");
  h3.appendChild(t3);
  let h4 = document.createElement("h4");
  let t4 = document.createTextNode("Miercuri: 10:00 - 20:30");
  h4.appendChild(t4);
  let h5 = document.createElement("h4");
  let t5 = document.createTextNode("Joi: 10:00 - 20:30");
  h5.appendChild(t5);
  let h6 = document.createElement("h4");
  let t6 = document.createTextNode("Vineri: 10:00 - 20:30");
  h6.appendChild(t6);
  let h7 = document.createElement("h4");
  let t7 = document.createTextNode("Sâmbătă: 10:00 - 21:00");
  h7.appendChild(t7);
  let h8 = document.createElement("h4");
  let t8 = document.createTextNode("Duminică: 10:00 - 21:00");
  h8.appendChild(t8);

  //program.appendChild(h1);
  program.appendChild(h2);
  program.appendChild(h3);
  program.appendChild(h4);
  program.appendChild(h5);
  program.appendChild(h6);
  program.appendChild(h7);
  program.appendChild(h8);

}

getProgram();

function putLaura() {
  let program = document.getElementById("listaDorinte");
  var t = document.createElement("P");
  var tort = document.createTextNode("Tortul  Laura");
  t.appendChild(tort);
  program.appendChild(t);
}

function putCecil() {
    let program = document.getElementById("listaDorinte");
    var t = document.createElement("P");
    var tort = document.createTextNode("Tortul  Cecil");
    t.appendChild(tort);
    program.appendChild(t);
  }

  function putAmber() {
    let program = document.getElementById("listaDorinte");
    var t = document.createElement("P");
    var tort = document.createTextNode("Tortul  Amber");
    t.appendChild(tort);
    program.appendChild(t);
  }

  function putEleonora() {
    let program = document.getElementById("listaDorinte");
    var t = document.createElement("P");
    var tort = document.createTextNode("Tortul  Eleonora");
    t.appendChild(tort);
    program.appendChild(t);
  }

  function putMichaela() {
    let program = document.getElementById("listaDorinte");
    var t = document.createElement("P");
    var tort = document.createTextNode("Tortul  Michaela");
    t.appendChild(tort);
    program.appendChild(t);
  }

  function putIris() {
    let program = document.getElementById("listaDorinte");
    var t = document.createElement("P");
    var tort = document.createTextNode("Tortul  Iris");
    t.appendChild(tort);
    program.appendChild(t);
  }

  function putMargret() {
    let program = document.getElementById("listaDorinte");
    var t = document.createElement("P");
    var tort = document.createTextNode("Tortul  Margret");
    t.appendChild(tort);
    program.appendChild(t);
  }

  function putJasmine() {
    let program = document.getElementById("listaDorinte");
    var t = document.createElement("P");
    var tort = document.createTextNode("Tortul  Jasmine");
    t.appendChild(tort);
    program.appendChild(t);
  }

  function putAndreea() {
    let program = document.getElementById("listaDorinte");
    var t = document.createElement("P");
    var tort = document.createTextNode("Tortul  Andreea");
    t.appendChild(tort);
    program.appendChild(t);
  }

  function deleteTort()  {
    var list = document.getElementById("listaDorinte");
    list.removeChild(list.childNodes[0]);
  }

 
  function changeColor() {
        
         document.getElementsByTagName("P")[0].setAttribute("class", "changedColor"); 
        
    
  }