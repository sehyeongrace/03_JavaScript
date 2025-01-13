const container = document.querySelector("#container");
const numBtn = document.querySelectorAll(".number");
const result = document.querySelector("#result");

for(let btn of numBtn) {
    btn.addEventListener("click", () => {
        
        if(result.innerHTML.length >= 10) {
            alert("10자 까지만 입력할 수 있습니다");
            return;
        }
    
        result.innerHTML += btn.innerHTML;
    });
}

const res = document.querySelector("#reset");

res.addEventListener("click", () => {
    result.innerText = "";
});