/* document.getElementById('btn').addEventListener('click', function() {
    const rows = document.querySelectorAll('.row');
    let totalPrice = 0;
    let resultText = '';
  
    rows.forEach(row => {
      const checkbox = row.querySelector('input[type="checkbox"]');
      const label = row.querySelector('label').textContent;
      const price = parseInt(row.querySelector('span').textContent.replace('원', ''));
      const quantity = parseInt(row.querySelector('input[type="number"]').value);
  
      if (checkbox.checked && quantity > 0) {
        const fruitTotalPrice = price * quantity;
        totalPrice += fruitTotalPrice;
        resultText += `${label} ${quantity}개 ${fruitTotalPrice}원\n`;
      }
    });
  

    if (resultText) {
      resultText += `총합 ${totalPrice}원`;
      document.getElementById('result').textContent = resultText;
    } else {
      document.getElementById('result').textContent = '선택된 과일이 없습니다.';
    }
  });
   */

const btn = document.querySelector("#btn"); // count 버튼

// count 버튼 클릭 시
btn.addEventListener("click", () => {

  /* // 방법 1)
  const fruits = document.querySelectorAll(".fruit");
  for(let fruit of fruits){
    if(fruit.checked){ // fruit(체크박스)가 체크 되어 있을 경우
      // 체크된 것만 이용하는 코드
    }
  } */

  // 방법 2) count 클릭 시점에 체크된 .fruit만 얻어오기
  const fruits = document.querySelectorAll(".fruit:checked");

  let str = "";
  let sum = 0;

  for(let fruit of fruits){
    // 체크된 체크박스의 부모 요소를 찾은 후
    // 부모 요소의 모든 자식 요소 중 2번(span), 3번(input) 인덱스 요소 접근
    const parent = fruit.parentElement;
    const fruitName = parent.children[1].innerText; // 과일 이름 얻어오기
    const price = parent.children[2].innerText; // 작성된 가격 얻어오기
    const cnt = parent.children[3].value; // 입력된 개수 얻어오기

    str += `${fruitName} ${cnt}개 `;
    sum += Number(price) * Number(cnt); // 선택된 과일의 가격 * 개수
  }

// 결과 출력
  document.querySelector("#result").innerText = `${str} 총합 ${sum}원`;
});