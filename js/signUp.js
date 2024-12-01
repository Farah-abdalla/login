
var signinIndex = document.getElementById("signinIndex")
var nameInput = document.getElementById("nameInput")
var emailInput = document.getElementById("emailInput")
var passwordInput = document.getElementById("passwordInput")
var alert = document.getElementById("alert")
var Success =  document.getElementById("Success")
var exists = document.getElementById("exists")
var signUpValue = JSON.parse(localStorage.getItem('signUpList')) || [];
var signUpList =[]
    if(signUpValue !==null){
        signUpList= signUpValue
    }
    function signUpFun(){
        if (arrexisits() === false) {
            exists.classList.remove('d-none'); 
            alert.classList.add('d-none'); 
            Success.classList.add('d-none'); 
            return; 
        }
        if(validationaName()&&validationaPass()&&validationaEmail()){
           
        var signUpObject ={
            nameValue:nameInput.value,
            emailValue:emailInput.value,
            passwordValue:passwordInput.value,
        }
        signUpList.push( signUpObject)
        localStorage.setItem('signUpList',JSON.stringify( signUpList))
        Success.classList.remove('d-none')
        alert.classList.add('d-none')
        exists.classList.add('d-none')
      
       
    }
    
// else if(validationaName()&&validationaPass()&&validationaEmail()) {
//     exists.classList.remove('d-none')
//     alert.classList.add('d-none')
//     Success.classList.add('d-none')
// }

else{
    alert.classList.remove('d-none')
    exists.classList.add('d-none')
    Success.classList.add('d-none')
    
}

    }



     
  
    function arrexisits(){
       
        if(signUpValue !==null){
            for(var i =0; i<signUpValue.length;i++){
                if(signUpValue[i].emailValue.toLowerCase()===emailInput.value.toLowerCase()){
                    return false
                } else {
                    return true
                }
                }
        }
        }
     
    

function validationaName(){
   var regex=/^[a-zA-Z\s]+$/
   var text= nameInput.value
   if(regex.test(text)){
    console.log('match')
    return true
   }
   else{
    console.log('no match')
    return false
   }
}
function validationaPass(){
   
    var regex=/^(?=.*[A-Za-z])(?=.*\d).{8,}$/
    var text= passwordInput.value
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
    var text= emailInput.value
    if(regex.test(text)){
     console.log('match')
     return true
    }
    else{
     console.log('no match')
     return false
    }
 }
signinIndex.addEventListener('mouseenter',function(){
    signinIndex.classList.remove("text-decoration-none")
})
signinIndex.addEventListener('mouseleave',function(){
    signinIndex.classList.add("text-decoration-none")
})