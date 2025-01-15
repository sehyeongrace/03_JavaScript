const btn1 = document.querySelector("#btn1");
const btnContainer = document.querySelector(".btn-container");
const closeBtn = document.querySelector("#closeBtn");

btn1.addEventListener("click", ()=>{
    btnContainer.style.display = "block";
    btn1.style.display = "none";
})

closeBtn.addEventListener("click",()=>{
    btnContainer.style.display = "none";
    btn1.style.display = "block";
});