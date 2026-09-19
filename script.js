function validateSignup(event) {
    event.preventDefault();

    let first = document.getElementById("firstName").value.trim();
    let last = document.getElementById("lastName").value.trim();
    let email = document.getElementById("email").value.trim();
    let pass = document.getElementById("password").value.trim();

    if (first === "" || last === "" || email === "" || pass === ""){
        alert("All fields are required.");
        return false;
    }

    if (!email.includes("@") || !email.includes(".")){
        alert("Please enter a valid email address.");
        return false;
    }

    if (pass.length < 6){
        alert("password must be at least 6 characters.");
        return false;
    }
    alert("Sign up successful!");
    return true;
}

function validateLogin(event){
    event.preventDefault();
    let email = document.getElementById("loginEmail").value.trim();
    let pass = document.getElementById("loginPassword").value.trim();

    if (email === "" || pass === ""){
        alert("Email and password are required.");
        return false;
    }
    alert("Login successful!");
    return true;
}