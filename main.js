const openModalBtn = document.getElementsByClassName("open-modal")
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
var modalMsg = document.getElementsByClassName("modal-msg")[0]
const msgs = ["Awsome 🤩, As Promised You Got the Power of Groot. Now You are as Strong as Groot.",
              "Nice 🤩, Now You Got the Power of Hawkeye. I would like to know how you are planning to use this power?",
              "Congratulation 🤩, You Got the Power of Doctor Strange. I hope you will use this power to save the world",
              "Great 🤩,  Now you are the most powerful Avenger in canon"
            ]


for(let i=0;i<openModalBtn.length;i++){
    openModalBtn[i].addEventListener("click",()=>{
        modal.style.display = "block"
        modalMsg.innerHTML = msgs[i];
    })
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}
  
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

let loader = document.getElementsByClassName("loader")[0];
let content = document.getElementsByClassName("content")[0];
setTimeout(()=>{
    loader.style.display = "none";
    content.style.display = "block";
},1000);
