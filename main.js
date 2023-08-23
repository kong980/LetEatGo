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

const placeEl = document.querySelector(".input.place");
const addBtn = document.querySelector(".input-btn");


addBtn.addEventListener("click", () => {
  lists.forEach(el => {
    if (el.classList[0] === selectEl.value) {
      const createLi = document.createElement("li");
      createLi.innerHTML += `${placeEl.value}`;
      el.firstElementChild.firstElementChild.nextElementSibling.firstElementChild.append(createLi);
    }
  })

})