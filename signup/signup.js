document.querySelector(".ak_btn").addEventListener("click",myFunction);

  var userData = JSON.parse(localStorage.getItem("userlocal")) || [] 

function myFunction() {

  event.preventDefault();
  
var email1 = document.querySelector("#email").value;
var firstname = document.querySelector("#name1").value;
var lastname = document.querySelector("#name2").value;
var pass1 = document.querySelector("#pass").value;


var userObj ={
    userEmail : email1 ,
    userName1: firstname,
    userName2 : lastname,
    userPass: pass1  
  };
  
  
  userData.push(userObj);
  localStorage.setItem("userlocal",JSON.stringify(userData));
  window.location.href='../signin/signin.html'
}

function homePage()
{
    window.location.href="../index.html"
}
