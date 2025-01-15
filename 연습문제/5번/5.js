const numbers = document.querySelectorAll(".number");
const result = document.querySelector("#result"); 
const reset = document.querySelector("#reset");
const phoneBook = document.querySelector("#phoneBook"); 
const recordBtn = document.querySelector("#record");

for(let num of numbers){
    num.addEventListener("click", (e) => {
        result.textContent += e.target.textContent;
    });
}

reset.addEventListener("click", () => {
    result.textContent = ""; 
});

recordBtn.addEventListener("click", () => {
    
    // 목록 한 줄
    const li = document.createElement("li");
    // <li></li>

    // 번호
    const numSpan = document.createElement("span");
    numSpan.innerText = result.textContent;
    // <span>01012341234</span>

    // 별
    const star = document.createElement("span");
    star.className = "star";
    star.innerHTML = "&star;";
    // <span>☆</span>

    star.addEventListener("click", () => {
        if (star.style.color === "orange") {
            star.style.color = "black";
            star.innerHTML = "&star;"; // ☆
            numSpan.style.color = "black";
            return;
        }
        star.style.color = "orange";
        star.innerHTML = "&#9733;"; // ★
        numSpan.style.color = "red";

    });

    // X
    const span = document.createElement("span");
    span.className = "remove-row";
    span.innerHTML = "&times;";
    // <span>x</span>
    
    span.addEventListener("click", e => {
        e.target.parentElement.remove();
    });
    
    li.append(numSpan, star, span);
    // <li>
    //  <span>01012341234</span>
    //  <span>☆</span>
    //  <span>x</span>
    // </li>

    phoneBook.appendChild(li);  
    result.textContent = "";

});
