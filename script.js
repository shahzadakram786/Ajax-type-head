
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

const resultbox = document.querySelector(".result-box")
;
const inputBox = document.getElementById("input-box");


inputBox.onkeyup = function(){
    let result = [];
    let input = inputBox.value;
    if(input.length){
        result = avaliableKeyWords.filter((keyword)=>{
            keyword.toLowerCase().includes(input.toLowerCase)
        });
        console.log(result);

    }
}