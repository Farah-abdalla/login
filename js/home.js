// var h1 = document.getElementById('welcome')
//    document.getElementById('welcome').innerHTML =`Welcome${signUpList[i].nameValue}`

function move(){
    // var home =  JSON.parse(localStorage.getItem('signUpList'))
    window.location.href="./index.html"
//     home.nameInput
 }
 window.onload = function() {
    
    var userName = localStorage.getItem('userName');
    
   
   
        document.getElementById('welcome').innerHTML = `Welcome, ${userName}!`;
    
}

