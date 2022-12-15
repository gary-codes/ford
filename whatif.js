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
        alert("What if aminin ko sa'yo na gusto kita?")
        alert("What if ako pala yung para sa'yo?");
        alert("What if naghihintayan lang pala tayong dalawa?");
        alert("What if tayo talaga ang para sa isa't-isa?")
        alert("What if humabol tayo bago magpasko?")
        main.style.display = "block";
        break;
    }
}