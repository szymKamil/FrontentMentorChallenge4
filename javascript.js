function hiddisp(param) {
    let pan = document.querySelectorAll(".click");
    let sp = document.querySelectorAll(".hide");
        for (let el of sp) {
        if (param.querySelector(".hide").style.display === "block") {
   param.querySelector(".hide").style.display = "none";
    } else { param.querySelector(".hide").style.display = "block"}
}
    let p = document.querySelectorAll(".question");
    for (let el of p) {
    if (param.querySelector(".question").style.fontWeight === "bold") {
    param.querySelector(".question").style.fontWeight = "normal";
    } else { param.querySelector(".question").style.fontWeight = "bold"}
}

    let img = document.querySelectorAll(".arrow");
    for (let el of img) {
    if (param.querySelector(".arrow").style.transform === "rotate(180deg)") {
    param.querySelector(".arrow").style.transform = "rotate(0deg)";
    } else { param.querySelector(".arrow").style.transform = "rotate(180deg)"}

}
}





    function jump() {     
    let box = document.querySelector("#box"); 
    box.style.transition = "0.5s";
    box.style.top = "240px";  
    setTimeout(() => {
    box.style.transition = "1.8s";    
    box.style.transform ="rotate(360deg)";
    }
    , 1250); 
    setTimeout(() => {
        box.style.transform ="rotate(0deg)" }
    , 2878); 
    setTimeout(() => {
        box.style.top = "380px";       
    }
    , 3500); 
}
