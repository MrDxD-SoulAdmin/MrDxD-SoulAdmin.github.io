function login() {
    var IU = document.getElementById("INU").value;
    var IP = document.getElementById("INP").value;

    fetch('https://soulcorplogin.herokuapp.com/login', {
            headers: {
                'Password': IP,
                'Username': IU,
            }
        })
        .then(k => {
            if (k.status === 200) {
                window.location.replace("/LogMain/Main.html");
            } else {
                window.alert("Not Registed User. Please contact to the Admin!");
            }
        });
}

function enter(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        login();
    }
}