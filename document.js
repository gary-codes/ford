function myfunction() {
    location.href = "doc.html";
}

var b = document.querySelector(".hindi");
b.addEventListener("click", change);

function change(){
    var i=Math.floor(Math.random()*150)+1 ;
    var j=Math.floor(Math.random()*150)+1 ;

    b.style.left=i+"px"
    b.style.top=j+"px"
    b.style.position="absolute";
}
