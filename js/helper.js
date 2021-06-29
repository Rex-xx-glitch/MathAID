function addStep(step, solutionStep, root){
    root.innerHTML = `<h3>${step} step</h3>`;
    const stepDiv = document.createElement("div");
    stepDiv.innerHTML = solutionStep.statement;
    stepDiv.setAttribute("class", "math-problem_step");
    
    

    const explanationDiv = document.createElement("div");
    explanationDiv.innerHTML = solutionStep.explanation;
    explanationDiv.setAttribute("class", "math-problem_step--explanation");

    const toggleExplanation = ()=> explanationDiv.classList.toggle("show-explanation");
    stepDiv.addEventListener("click", toggleExplanation)

    stepDiv.appendChild(explanationDiv);
    root.appendChild(stepDiv);
}
