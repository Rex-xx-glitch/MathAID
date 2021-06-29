class mathProblem{
    constructor(title, solution, solutionContainer){
        this.solution = solution;
        this.currentSolutionIndex = -1;
        this.solutionContainer = solutionContainer;   
        
        
        document.querySelector(".problem-title").innerHTML = title;
        MathJax.typeset();
        this.nextSolutionStep();
    }

   

    nextSolutionStep(){
        if(this.currentSolutionIndex + 1 < this.solution.length){
            this.currentSolutionIndex++;
            addStep(this.__stepNum(this.currentSolutionIndex), this.solution[this.currentSolutionIndex], this.solutionContainer);
            MathJax.typeset();
            return true;
        }
        return false;
    }

    prevSolutionStep(){
        if(this.currentSolutionIndex - 1 >= 0){
            this.currentSolutionIndex--;

            addStep(this.__stepNum(this.currentSolutionIndex), this.solution[this.currentSolutionIndex], this.solutionContainer);
            MathJax.typeset();
            return true;
        }
        return false;
    }

    __stepNum(num){
        const arr = ["first", "second", "third", "forth", "firth", "sixth", "seventh", "eigth"];
        return arr[num];
    }

}