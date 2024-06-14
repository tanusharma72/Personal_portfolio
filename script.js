// import emailjs from '@emailjs/browser';

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link")
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}



document.addEventListener('DOMContentLoaded', function() {
    emailjs.init('bbzj00M_7Y4x6icvZ'); // Replace 'YOUR_USER_ID' with your actual user ID

    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Retrieve form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        // Prepare email parameters
        const templateParams = {
            name: name,
            email: email,
            subject:subject,
            message: message
        };

        // Send the email using EmailJS
        emailjs.send('service_19jq5jn', 'template_uuouakh', templateParams)
            .then(function(response) {
                alert('SUCCESS! Your message has been sent.', response.status, response.text);
                document.getElementById('contact-form').reset(); // Reset form fields
            }, function(error) {
                alert('FAILED. Please try again later.', error);
            });
    });
});



var sidemenu=document.getElementById('sidemenu');
function openmenu(){
    sidemenu.style.right="0";
}
function closemenu(){
    sidemenu.style.right="-200px";
}