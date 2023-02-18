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
        alert("What if aminin ko sa'yo na gusto kita " + name + "?")
        alert("Gugustuhin mo rin ba ako pabalik?");
        alert("This is the only way na alam ko para umamin sa'yo");
        alert("I'm too shy to approach you kasi HAHAHA")
        alert("Ikaw na bahala magfirst move ha!")
        alert("Hintayin ko nalang chat mo " + name + ".")
        main.style.display = "block";
        break;
    }
}
