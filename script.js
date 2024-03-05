
let avaliableKeyWords = [
    'Html',
    'JavaScript',
    'Css',
    'Php',
    'Java',
    'C++',
    'C#',
    'Python',
    'Ruby',
    'Go',
    'Kotlin',
    'Scala',
];

const resultbox = document.querySelectorAll(".result-box")
const inputBox = document.getElementById("input-box");


inputBox.onkeyup = function(){
    let result = [];
    let input = inputBox.value;
    if(input.length){
        result = avaliableKeyWords.filter((keyword)=>{
          return  keyword.toLowerCase().includes(input.toLowerCase())
        });
        console.log(result);

    }
    display(result)
  }
    function display(result){
        const content = result.map((list)=>{
            return "<li>"+  list+ "</li>";
        })
        resultbox.innerHTML = "<ul>" + content  +"</ul>";
  
}