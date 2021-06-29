

const prevController = document.querySelector(".prev");
const nextController = document.querySelector(".next");
const solutionContainer = document.querySelector(".problem-solution_step");



let currentProblem = 0;
document.querySelector(".problem-number").innerHTML = currentProblem + 1 + ".";
const problem = new mathProblem(problems[currentProblem].title, problems[currentProblem].solution, solutionContainer);



prevController.addEventListener("click", ()=> {
    if(problem.prevSolutionStep() === false){
        if(currentProblem - 1 >= 0){
            currentProblem--;
        }
    }
})

nextController.addEventListener("click", ()=> {
    if(problem.nextSolutionStep() === false){
        if(currentProblem + 1 < problems.length){
            currentProblem++;
        }
    }
})

