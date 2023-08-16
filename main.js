const selectEl = document.getElementById("select");
const lists = document.querySelectorAll(".list-container .food-list");
const submit = document.querySelector("form");
const addInput = document.createElement("input");

// 종류 선택시 해당 리스트 보이기
selectEl.addEventListener("change", e => {
  lists.forEach(el => {
    if(el.classList[0] === e.target.value){
      el.classList.add("active");
    }else{
      el.classList.remove("active");
    };
  });
});

submit.addEventListener("submit", () =>{
  lists.forEach(el =>{
    if(el.classList[0] === selectEl.value){
      addInput.labels = submit.firstElementChild.nextElementSibling.value;
      addInput.type = "checkbox";
      alert(lists.firstElementChild)
      // lists.firstElementChild.insertAdjacentElement('beforeend',addInput);
      //  alert(selectEl.value +', '+ submit.firstElementChild.nextElementSibling.value + ', ' + submit.lastElementChild.previousElementSibling.value)
    }
  })
})