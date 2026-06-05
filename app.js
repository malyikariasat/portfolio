const text = [

"Web Developer",
"Graphic Designer"

];

let count = 0;

setInterval(()=>{

document.querySelector(
".typing"
).innerHTML = text[count];

count++;

if(count === text.length){

count = 0;

}

},2000);

const form =
document.getElementById(
"contactForm"
);

form.addEventListener(
"submit",
async(e)=>{

e.preventDefault();

const name =
document.getElementById(
"name"
).value;

const email =
document.getElementById(
"email"
).value;

const message =
document.getElementById(
"message"
).value;

try{

const response =
await fetch(
"http://localhost:5000/api/contact",
{

method:"POST",

headers:{
"Content-Type":
"application/json"
},

body:JSON.stringify({
name,
email,
message
})

});

const data =
await response.json();

if(data.success){

alert("Message Sent");

form.reset();

}else{

alert("Failed");

}

}catch(error){

console.log(error);

}

});