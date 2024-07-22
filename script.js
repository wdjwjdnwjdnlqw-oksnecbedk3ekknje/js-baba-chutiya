function sendMail(){
    let parms ={
        name : document.getElementById("name").value ,
        email : document.getElementById("email").value,
        phone : document.getElementById("phone").value,
        message: document.getElementById("message").value,
    }

    emailjs.send("service_ub05xn4" , "template_525y5dq", parms).then(alert("Sucessfully send"))
}