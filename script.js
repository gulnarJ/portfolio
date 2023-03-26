import express from 'express';


const express = require('express')
const app = express()

// Add the Permissions-Policy header to all responses
app.use((req, res, next) => {
  res.setHeader('Permissions-Policy', 'interest-cohort=()')
  next()
})

// Your route handlers and other middleware
// ...

// Start the server
app.listen(3000, () => {
  console.log('Server started on http://localhost:3000')
})



let menu = document.querySelector("#menu-bars");
let header = document.querySelector('header');

menu.onclick = () =>{
    header.classList.toggle('active');
}

function sendMail(){
  
    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
        phone: document.getElementById("phone").value
    };
    const serviceID = "service_1r9lehn";
    const templateID = "template_qb5sx2q";

    
    emailjs
        .send(serviceID,templateID,params)
        .then((res) => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            document.getElementById("phone").value = "";
            console.log(res);
            alert("Message sent successfully");
        })
        .catch((error)=>{
            console.log('Oops... ' + error)});
}
