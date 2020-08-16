function submitbtn(){

    let uname = document.querySelector("#user").value;
    let pass = document.querySelector("#pass").value;
    let email = document.querySelector("#email").value;

    if( uname != "" && pass != "" && email != ""){

    document.querySelector("#uout").innerHTML= "Username : " + " " + uname;
    document.querySelector("#pout").innerHTML= "Password : " + " " + pass;
    document.querySelector("#eout").innerHTML= "Email : " + " " + email;

    document.querySelector("#user").value= "";
    document.querySelector("#pass").value= "";
    document.querySelector("#email").value= "";

    }
    else{
        alert("please Fill All Detail..!!!")
    }

    


}

