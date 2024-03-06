let avaliableKeyWords = [
  "Html",
  "JavaScript",
  "Css",
  "Php",
  "Java",
  "C++",
  "C#",
  "Python",
  "Ruby",
  "Go",
  "Kotlin",
  "Scala",
];

const resultbox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function () {
  let result = [];
  let input = inputBox.value;
  if (input.length) {
    result = avaliableKeyWords.filter((keyword) => {
      return keyword.toLowerCase().includes(input.toLowerCase());
    });
    console.log(result);
    if(!result.length ){
      resultbox.innerHTML = '';
    }
  }
  display(result);
};
function display(result) {
  const content = result.map((list) => {
    return "<li onclick=selectInput(this)>" + list + "</li>";
  });
  resultbox.innerHTML = "<ul>" + content.join("") + "</ul>";
}

function selectInput(list) {
  inputBox.value = list.innerHTML;
  resultbox.innerHTML = "";
}
