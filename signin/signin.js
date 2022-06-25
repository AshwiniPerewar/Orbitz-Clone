

var signData = JSON.parse(localStorage.getItem("userlocal")); 

console.log(signData)

document.querySelector(".ak_btn").addEventListener("click",myfunction);

function myfunction()
{
    var em1 = document.querySelector("#email8").value
     var pas1 = document.querySelector("#pass8").value
     console.log(em1,pas1)

    for(var i = 0;i<signData.length;i++)
    {
        if(signData[i].userEmail==em1 && signData[i].userPass==pas1)
        { 
            return window.location.href="../index.html"  
        }
    }
     swal({
            title: "Warning",
            text: "wrong email or passward",
            icon: "error",
            button: "ok",
              });
}

function homePage()
{
    window.location.href="../index.html"
}