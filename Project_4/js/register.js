"use strict";


/******************************************************
                        Conact Page
******************************************************/
const $ = sector => document.querySelector(selector);


const displayErrorMsgs = msgs => {
    const ul = document.createElement("ul");
    ul.classList.add("messages");

    for (let msg of msgs) {
        const li = document.createElement("li");
        const text = document.createTextNode(msg);
        li.appendChild(text);
        ul.appendChild(li);
    }

    const node = $("ul");
    if (node == null) {
        const form = $("form");

        form.parentNode.insertBefore(ul, form);
    } else {
        node.parentNode.replaceChild(ul, node);
    }  
}
const processEntries = () => {
    const firstName = $("#first_name");
    const lastName = $("#last_name");
    const email = $("#email_address");
    const phone = $("#phone");
    const reason = $("#reason");
    const terms = $("#terms");


const msgs = [];
if (firstName.value == "") {
    msgs[msgs.length] = "Please enter your first name.";
} 
if (lastName.value == "") {
    msgs[msgs.length] = "Please enter your last name."
} 
if (email.value == "") {
    msgs[msgs.length] = "Please enter an email address.";
} 
if (phone.value == "") {
    msgs[msgs.length] = "Please enter a mobile phone number."; 
} 
if (reason.value == "") {
    msgs[msgs.length] = "Please select a reason for contacting us.";
} 
if (terms.checked == false) {
    msgs[msgs.length] = "You must agree to the terms of service."; 
}

// submit the form or notify user of errors
if (msgs.length == 0) {  // no error messages
    $("form").submit(); 
} else {
    displayErrorMsgs(msgs);
}
};

const resetForm = () => {
    $("form").reset();
    
    // remove error messages
    $("ul").remove();
    
    $("#email_address").focus();
};

document.addEventListener("DOMContentLoaded", () => {
    $("#register").addEventListener("click", processEntries);
    $("#reset_form").addEventListener("click", resetForm);  
    $("#email_address").focus();   
});

























