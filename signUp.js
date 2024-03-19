function clearErrors() {

    errors = document.getElementsByClassName('formerror');
    for (let item of errors) {
        item.innerHTML = "";
    }
}
function seterror(id, error) {
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;
}

function validateForm() {
    var returnval = true;
    clearErrors();

    // Name Field Validation
    var name = document.forms['signUpForm']["signUpName"].value;
    if (name.length < 5) {
        seterror("name", "*Length of name is too short");
        returnval = false;
    }
    if (name.length == 0) {
        seterror("name", "*Name Field Can not be Empty!");
        returnval = false;
    }

    // Email Field Validation
    var email = document.forms['signUpForm']["signUpEmail"].value;
    if (email.length > 35) {
        seterror("email", "*Email length is too long");
        returnval = false;
    }
    if (email.length == "") {
        seterror("email", "*Email Field Can Not Be Empty!");
        returnval = false;
    }

    // Phone Number Validation
    var phone = document.forms['signUpForm']["signUpPhone"].value;
    if (phone.length != 10) {
        seterror("phone", "*Phone number should be of 10 digits!");
        returnval = false;
    }
    if (phone.length == 0) {
        seterror("phone", "*Phone Number Field Can not Be Empty!");
        returnval = false;
    }

    // Password Validation
    var password = document.forms['signUpForm']["signUpPassword"].value;
    if (password.length < 6) {
        seterror("pass", "*Password should be atleast 6 characters long!");
        returnval = false;
    }
    if (password.length == "") {
        seterror("pass", "*Password Field Can Not Be Empty !");
        returnval = false;
    }

    // Confirm password Validation
    var cpassword = document.forms['signUpForm']["signUpConfirmPassword"].value;
    if (cpassword != password) {
        seterror("cpass", "*Password and Confirm password should match!");
        returnval = false;
    }
    return returnval;

}