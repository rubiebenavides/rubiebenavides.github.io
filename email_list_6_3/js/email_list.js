const $ = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
    
    $("#join_list").addEventListener("click", () => {
        // get values user entered in textboxes
        const email1 = $("#email_1");
        const email2 = $("#email_2");
        const firstName = $("#first_name");
    
        // create an error message and set it to an empty string
        let errorMessage = true;

        // check user entries - add text to error message if invalid
        if (email1.value == "") { 
            email1.nextElementSibling.textContent = "This field is required.";
            errorMessage = false;
        }
        else {
            email1.nextElementSibling.textContent = "";
        }
    
        if (email2.value == "") { 
            email2.nextElementSibling.textContent = "This field is required.";
            errorMessage = false;
        }
        else{
            email2.nextElementSibling.textContent = "";
        }
    
        if (email1.value != email2.value) { 
            email2.nextElementSibling.textContent = "Email addressses must match";
            errorMessage = "false";
        }
    
        if (firstName.value == "") {
            firstName.nextElementSibling.textContent = "First name is required.";
            errorMessage = false;
        }
        else{
            firstName.nextElementSibling.textContent = "";
        }
    
        // submit the form if error message is an empty string
        if (errorMessage) {
            $("#email_form").submit();
        }
    });

    $("#clear_form").addEventListener("click", () => {
        $("#email_1").value = "";
        $("#email_2").value = "";
        $("#first_name").value = "";

        $("#email_1").focus();
    });
    
    $("#email_1").focus();
});