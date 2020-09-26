console.log("nono");
const users = [{
        name: "Soul",
        Pass: "NetAdmin"
    }
    /*, {
                name: "Selti",
                Pass: "NetUser001"
            }, {
                name: "N0rris",
                Pass: "wizynwstc"
            }, {
                name: "Degubi",
                Pass: "NetUser003"
            }, {
                name: "Adam",
                Pass: "NetUser004"
            }, {
                name: "Ati",
                Pass: "NetUser005"
            }, {
                name: "Marci",
                Pass: "NetUser006"
            }, {
                name: "Don_Nyuff",
                Pass: "Szben1997"
            }, {
                name: "Roli",
                Pass: "Kamujelszo02"
            },*/
];

function login() {
    var IU = document.getElementById("INU").value;
    var IP = document.getElementById("INP").value;

    let live = false;

    for (let i = 0; i < users.length; i++) {
        if (IU === users[i].name && IP === users[i].Pass) {
            live = true;
            break;
        }

    }

    if (live === true) {
        window.location.replace("/LogMain/Main.html");
    } else {
        window.alert("Not Registed User. Please contact to the Admin!");
    }
}

function enter(event) {
    console.log("asd");
    if (event.keyCode === 13) {
        event.preventDefault();
        login();
    }
}