let card1 = document.querySelector(".card1")
let card2 = document.querySelector(".card2")
let card3 = document.querySelector(".card3")
let card4 = document.querySelector(".card4")
let page1 = document.querySelector(".page1")
let page2 = document.querySelector(".page2")
let page3 = document.querySelector(".page3")
let page4 = document.querySelector(".page4")
let home = document.querySelector(".home");
let cross = document.getElementById("close")
let cross2= document.getElementById("close2")
let cross3 = document.getElementById("close3")
let cross4 = document.getElementById("close4")


card1.addEventListener("click", function () {
    home.classList.add("hide");
    page1.style.display = "block";
})

card2.addEventListener("click", function () {
    home.classList.add("hide");
    page2.style.display = "block";
})

card3.addEventListener("click", function () {
    home.classList.add("hide");
    page3.style.display = "block"; 
})
card4.addEventListener("click", function () {
    home.classList.add("hide");
    page4.style.display = "block"; 
})

cross.addEventListener("click", function () {
    home.classList.remove("hide")
    page1.style.display = "none"
})
cross2.addEventListener("click", function () {
    home.classList.remove("hide")
    page2.style.display = "none"
})
cross3.addEventListener("click", function () {
    home.classList.remove("hide")
    page3.style.display = "none"
})
cross4.addEventListener("click", function () {
    home.classList.remove("hide")
    page4.style.display = "none"
})



// function closetab(Tabid) {
//     const tabs = document.querySelectorAll(".tabs");
//     tabs.forEach((tabsapce) => {
//         tabsapce.classList.add("d-block");
//         tabsapce.classList.remove("d-none");
//     });
//     const opentabs = document.getElementById(Tabid);
//     opentabs.classList.add("d-none");
//     opentabs.classList.remove("d-block");
// }

// var a = 5
// var b = 3
// console.log(a == b);