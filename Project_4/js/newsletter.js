const $ = selector => document.querySelector(selector);

const joinList = evt => {
    // get user entries from text boxes
    const preferredName = $("#preferred_name").value;
    const firstName = $("#first_name").value;
    const lastName = $("#last_name").value;
    const email = $("#email_address").value;
    
    // check user entries
    let isValid = true;
    if (email == "") { 
        $("#email_error").textContent = "Email is required.";
        isValid = false;
    } 
    else { 
        $("#email_error").textContent = ""; 
    }

    if (preferredName == "") {
        $("#preferred_name_error").textContent = "First name is required.";
        isValid = false;
    } 
    else { 
        $("#preferred_name_error").textContent = ""; 
    }

    if (lastName == "") {
        $("#last_name_error").textContent = "First name is required.";
        isValid = false;
    } 
    else 
    { 
        $("#last_name_error").textContent = ""; 
    }

    if (firstName == "") {
        $("#first_name_error").textContent = "First name is required.";
        isValid = false;
    } 
    else { 
        $("#first_name_error").textContent = ""; 
    }



    // cancel form submit if any user entries are invalid
    if ( !isValid ) {
        evt.preventDefault(); 
    }
};

const clearForm = () => {
    // clear text boxes
    $("#preferred_name").value = "";
    $("#first_name").value = "";
    $("#last_name").value = "";
    $("#email_address").value = "";

    // clear span elements
    $("#email_error").textContent = "*";
    $("#preferred_name_error").textContent = "*";
    $("#first_name_error").textContent = "*";
    $("#last_name_error").textContent = "*"; 

    // set focus on first text box after resetting the form
    $("#email_address").focus();
};

document.addEventListener("DOMContentLoaded", () => {
    // hook up click events for both buttons
    $("#join_list").addEventListener("click", joinList);
    $("#clear_form").addEventListener("click", clearForm);

    // set focus on first text box after the form loads
    $("#email_address").focus();
});
