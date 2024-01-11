let name=document.getElementById("name");
let email=document.getElementById("email");
let number=document.getElementById("number");
let button=document.getElementById("button");
let subject=document.getElementById("subject");
let message=document.getElementById("mess");

button.addEventListener("click", () => {
    let link = `https://api.whatsapp.com/send/?phone=${number.value}&text=name+%3A${name.value}%0Aemail+${email.value}%0Asubject+${subject.value}%0Amessage+${message.value}.%0A&type=phone_number&app_absent=0`;
    console.log(link);
    window.open(link);
});
