const main = document.querySelector(".main");
const cancel = document.querySelector(".cancel");
const msg = document.querySelector("#msg");

while (true) {
    let name = prompt("Enter your name");

    if (name == null) {
        main.style.display = "none";
        cancel.style.display = "flex";
        msg.innerHTML = "Thank you for visiting the link";
    }

    if (name.length > 0) {
        alert("Hi there " + name + "!");
        alert("Happy 18th Birthday!")
        alert("You're officially an adult");
        alert("Ang masasabi ko lang is mag-aral ka ng mabuti");
        alert("Fulfill your dreams")
        alert("But don't forget to have some time to relax")
        alert("Once again, happy happy birthday!")
        main.style.display = "block";
        break;
    }
}
