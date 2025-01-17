const display = document.querySelector("#display");
const container = document.querySelector(".container");
const reset = document.querySelector("#reset");
const random = document.querySelector("#random");

const selectedDivs = new Set();

let selectedCount = 0;

function createRandomNumber() {
    selectedDivs.clear();

    const divs =  document.querySelectorAll(".number");

    while(selectedDivs.size < 6) {
        const random = Math.floor(Math.random() * 45) + 1;

        selectedDivs.add(random);
    }

    for(let selectedNum of selectedDivs) {
        divs[selectedNum - 1].classList.add("selected");
    }
}

for(let i=1; i<=45; i++){
    const numberDiv = document.createElement("div");
    numberDiv.className = "number";
    numberDiv.textContent = i;

    
    numberDiv.addEventListener("click", (e) => {
        const selected = document.querySelectorAll(".selected").length;
        if (selected <= 5 || e.target.classList.contains("selected")) {
            e.target.classList.toggle("selected")
            
        } else {
            alert("6개까지 가능합니다")
        }
    });
    container.appendChild(numberDiv);
}


reset.addEventListener("click", () => {
    const numberDiv = document.querySelectorAll(".number")
    numberDiv.forEach( num => {
        num.classList.remove("selected")
    })
});


random.addEventListener("click", () => {
    const numberDiv = document.querySelectorAll(".number")
    numberDiv.forEach( num => {
        num.classList.remove("selected")
    });

    //createRandomNumber();
});

random.addEventListener("click", ()=>{

    // 3초 후에 수행
    setTimeout(()=>{
        createRandomNumber();
    }, 3000);

});
