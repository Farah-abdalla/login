var signUp = document.getElementById("signUp")
var alert = document.getElementById("alert")
// var login = document.getElementById("login")
// var h1 = document.getElementById('welcome')
var emailInputValue=document.getElementById("emailInputValue")
var passwordInputValue =document.getElementById("passwordInputValue") 
var loginList = []
if(JSON.parse(localStorage.getItem('loginKey')) !==null){
    loginList= JSON.parse(localStorage.getItem('loginKey'))
}
signUp.addEventListener('mouseenter',function(){
    signUp.classList.remove("text-decoration-none")
})
signUp.addEventListener('mouseleave',function(){
    signUp.classList.add("text-decoration-none")
})
//  login.addEventListener('click',login)

   
function login(){
    if(validationaEmail()&&validationaPass()&& valid()){
        loginpoject ={
            email:emailInputValue.value,
            password: passwordInputValue.value,
         }
         loginList.push( loginpoject)
        //  console.log(loginList) 
         localStorage.setItem('loginKey',JSON.stringify(loginList))
        //  console.log(JSON.parse(localStorage.getItem('loginKey')))
        
         alert.classList.add('d-none')
          window.location.href="./home.html"
          
         document.getElementById('welcome').innerHTML =`Welcome${signUpList[i].nameValue}`
         
        }
         else{
            alert.classList.remove('d-none')
            
         }
    }
 
 
// function valid(){
//     for(var i=0;i<localStorage.length;i++){
        
//         if(JSON.parse(localStorage.getItem('signUpList'))==emailInputValue.value&&JSON.parse(localStorage.getItem('signUpList'))== passwordInputValue.value){
//        return true
//         }
//       else {
//         return false
//       }
//     }
//     console.log(JSON.parse(localStorage.getItem('signUpList')))
// }
function valid() {
    var signUpList = JSON.parse(localStorage.getItem('signUpList')) || [];
    var userName = "";
    for (var i = 0; i < signUpList.length; i++) {
        if (signUpList[i].emailValue === emailInputValue.value && 
            signUpList[i].passwordValue === passwordInputValue.value) {
                userName =signUpList[i].nameValue;
                localStorage.setItem('userName', userName);
            return true;
        }
    }
    return false; 
}

function validationaPass(){
   
    var regex=/^(?=.*[A-Za-z])(?=.*\d).{8,}$/
    var text= passwordInputValue.value
    if(regex.test(text)){
     console.log('match')
     return true
    }
    else{
     console.log('no match')
     return false
    }
 }
 
 function validationaEmail(){
    var regex=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    var text=emailInputValue.value
    if(regex.test(text)){
     console.log('match')
     return true
    }
    else{
     console.log('no match')
     return false
    }
 }