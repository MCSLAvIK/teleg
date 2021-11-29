document.getElementById("okButton").hidden = true;
function validate() {
    var login = document.getElementById('login').value;
    var password = document.getElementById('password').value;
 
    var fale = document.getElementById('fale');
    var succ = document.getElementById('succ');


    if (login == 'stepa' && password == 'stepa2005') {
       succ.innerHTML = 'Успех';
       fale.innerHTML = ' ';
       document.getElementById("okButton").hidden = false;
        return false;
    }
    else {
        fale.innerHTML = 'Неверный логин и/или пароль!';
        return false;
    }
}