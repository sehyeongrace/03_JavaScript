const btnBtn = document.querySelector("#btn");
const container = document.querySelector("#container");
const count = document.querySelector("#count");
const result = document.querySelector("#result");


btnBtn.addEventListener("click", () => {

    const val = Number(count.value);

    container.innerHTML = "";

    for(let i=0; i<val; i++ ){
    
        /* input을 생성해서 container의 자식으로 추가하는 코드 */
        const input = document.createElement("input");
        input.className = "input-number";
        input.type = "number";
        // <input class="input-number" type="number">
        container.append(input);
    }

});

const sumBtn = document.querySelector("#sumBtn");

sumBtn.addEventListener("click", () => {

    const inputs = document.querySelectorAll(".input-number");

    let sum = 0;
    
    for(let input of inputs){
        sum += Number(input.value);
    }
    result.innerText = sum;

});