function col(){
    dame=document.getElementById("name").value;
    num1=document.getElementById("num1").value;
    num2=document.getElementById("num2").value;
    console.log(dame);
    console.log(num1+num2);
    console.log(num1-num2)
    if (document.getElementById("dude").value == 1){
        console.log(Math.random);
    }
    if (document.getElementById("dude").value == 2){
        console.log("idk maybe infinite");
    }
    if (document.getElementById("dude").value == 3){
        console.log("never gonna give you up");
        setTimeout(rr, 2000)
    }
}
function rr(){
    console.log("lol u got rickrolled")
}