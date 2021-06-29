const problems = [
  {
    title:
      "Put \\(x^2 - x - 3\\) in the vertex form and find its minimum point",
    solution: [
      {
        statement: "\\((x^2 - x) - 3\\)",
        explanation: "",
      },
      {
        statement:
          "\\((x^2 - x +\\)<span class='highlight'>\\((\\frac{1}{2})^2 - (\\frac{1}{2})^2\\)</span>)\\( - 3\\)",
        explanation:
          "Complete the square by taking b from <span class='highlight'>\\(x^2 - x\\)</span> which is 1 and divide it by 2 then squaring it giving you \\((\\frac{1}{2})^2\\). To unchange the expression, add \\((\\frac{1}{2})^2\\) and also subtract it &rarr; \\((\\frac{1}{2})^2 - (\\frac{1}{2})^2\\)",
      },
      {
        statement: "\\((x - [\\frac{1}{2}]^2) - \\frac{1}{4} - 3\\)",
        explanation:
          "remember <span class='highlight'>\\((a + b)^2 = a^2 + 2ab + b^2\\)</span>, therefore \\((x - [\\frac{1}{2}]^2\\)) = \\(x^2 - x + (\\frac{1}{2})^2\\). This was the whole point of the previous step.. to simplify the long expression with \\(x^2\\) to just a simple expression with just \\(x\\)",
      },
      {
        statement: "\\((x - [\\frac{1}{2}]^2) - \\frac{13}{4}\\)",
        explanation: "This is a simplifying step - collecting like terms",
      },
      {
        statement: "mimimum point &rarr; \\((\\frac{1}{2}, \\frac{-13}{4})\\)",
        explanation:
          "remember <span class='highlight'>\\(a(x^2 - h)^2 + k\\), where (h, k) is either the max [if \\(a < 0\\)] or min [if \\(a > 0\\)]</span>",
      },
    ],
  },
  {
    title: "",
    solution: [
      {
        statement: "",
        explanation: "",
      },
    ],
  },
  {
    title: "",
    solution: [
      {
        statement: "",
        explanation: "",
      },
    ],
  },
  {
    title: "",
    solution: [
      {
        statement: "",
        explanation: "",
      },
    ],
  },
];
