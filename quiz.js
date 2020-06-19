console.log("quiz.js");

var questions = [
    {
        question: "How can you get the total number of arguments passed to a function ?", 
        answer: "using arguments.length porperty" 

        options: ["using arg.lengths, using arguments.lenght property,none of the above"],  
]
var counter = 0


$("#Start").on("click",function(event){
    console.log("start button");


$("#question").empty()

var list= $("<li>")
console.log(list)
var question= $("<p>").text(questions[counter].question)
list.append(question);
for(j=0;j < questions[counter].options.length;j++){
    var option = $(`<radio name="option">${questions [counter].options[j]}</radio>`)
    list.append(option);
}
console.log(list)
$("#question").append(list)






})

