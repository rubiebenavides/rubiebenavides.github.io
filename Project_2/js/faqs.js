"use strict";
//faq Java
const toggle = evt => {
    const linkElement = evt.currentTarget;                 
    const faqElement = linkElement.parentNode;              
    const divElement = faqElement.nextElementSibling;       

    if (faqElement.hasAttribute("class")) {
        faqElement.removeAttribute("class");
    } else {
        faqElement.className="minus";
    }

    if (divElement.hasAttribute("class")) {
        divElement.removeAttribute("class");
    } else {
        divElement.className="open";
    }

    evt.preventDefault(); 
};

document.addEventListener("DOMContentLoaded", () => {
    const linkElements = faqs.querySelectorAll("#faqs a");
    	    
    for (let linkElement of linkElements) {
        linkElement.addEventListener("click", toggle);
    }

    linkElements[0].focus();       
});
//contact Java
const $ = selector => document.querySelector(selector); 

const displayErrorMsgs = msgs => {
    // create a new ul element
    const ul = document.createElement("ul");
    ul.classList.add("messages");

    // create a new li element for each error message, add to ul
    for (let msg of msgs) {
        const li = document.createElement("li");
        const text = document.createTextNode(msg);
        li.appendChild(text);
        ul.appendChild(li);
    }

    // if ul node isn't in document yet, add it
    const node = $("ul");
    if (node == null) {
        // get the form element 
        const form = $("form");

        // add ul to parent of form, before the form
        form.parentNode.insertBefore(ul, form);
    } else {
        // replace existing ul node
        node.parentNode.replaceChild(ul, node);
    }  
}

const processEntries = () => {
    // get form controls to check for validity
    const email = $("#email_address");
    const first_name = $("#first_name");
    const last_name = $("#last_name");
    const phone = $("#phone");
    const country = $("#country");
    const terms = $("#terms");
    const comments = $("#comments");

    // create array for error messages
    const msgs = [];

    // check user entries for validity
    if (email.value == "") {
        msgs[msgs.length] = "Please enter an email address.";
    } 
    if (first_name.value == "") {
        msgs[msgs.length] = "Please enter an first name.";
    } 
    if (last_name.value == "") {
        msgs[msgs.length] = "Please enter last name.";
    } 
    if (phone.value == "") {
        msgs[msgs.length] = "Please enter a mobile phone number."; 
    } 
    if (country.value == "") {
        msgs[msgs.length] = "Please select a country.";
    } 
    if (terms.checked == false) {
        msgs[msgs.length] = "You must agree to the terms of service."; 
    }
    if (comments.value == "") {
        msgs[msgs.length] = "Please enter a comment.";
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