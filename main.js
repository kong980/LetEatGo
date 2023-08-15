const options = document.querySelectorAll("option");
const lists = document.querySelectorAll(".list-container .food-list");

options.forEach((lists,cnt)  => {
  options[cnt].addEventListener("click", () =>{
    console.log(lists);
  });
});