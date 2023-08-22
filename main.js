const selectEl = document.getElementById("select");
const lists = document.querySelectorAll(".list-container .food-list");


// 종류 선택시 해당 리스트 보이기
selectEl.addEventListener("change", e => {
  lists.forEach(el => {
    if (el.classList[0] === e.target.value) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    };
  });
});


// 등록 버튼 클릭시 해당 장소를 리스트 마지막 요소로 추가

//const save_btn = document.querySelector(".input-btn");
// const addDiv = document.createElement("div");
// const formEl = document.querySelector("form");
// save_btn.addEventListener("click", () =>{
//   lists.forEach(el =>{
//      if(el.classList[0] === selectEl.value){
//       // console.log(formEl.firstElementChild.nextElementSibling.value);
//       //  addInput.setAttribute()
//         // el.addInput.label = formEl.firstElementChild.nextElementSibling.value;
//         // el.addInput.type = "checkbox";
//         el.firstElementChild.appendChild(addDiv);
//         console.log(el)
//       console.log(el.firstElementChild);
//       //  lists.firstElementChild.insertAdjacentElement('beforeend',addInput);
//       //   alert(selectEl.value +', '+ submit.firstElementChild.nextElementSibling.value + ', ' + submit.lastElementChild.previousElementSibling.value)
//      }
//   })
// })


const placeEl = document.querySelector(".input.place");
const addBtn = document.querySelector(".input-btn");


addBtn.addEventListener("click", () => {
  lists.forEach(el => {
    if (el.classList[0] === selectEl.value) {
      const createDiv = document.createElement("div");
      createDiv.innerHTML += `<div>
      <label><input type="checkbox"><a>${placeEl.value}</a></label>
        </div>`;
      el.firstElementChild.append(createDiv);
    }
  })

})