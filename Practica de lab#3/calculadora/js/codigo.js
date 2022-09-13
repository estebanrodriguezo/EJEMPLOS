//select elements

const input_element = document.querySelector(".input");

const output_operation_element = document.querySelector(".operation .value");

const output_result_element = document.querySelector(".result .value");

//some variables

const OPERATORS = ["+", "-", "*", "/"];
const POWER = "POWER(",
  FACTORIAL = "FACTORIAL";

let data = {
  operation: [],
  formula: [],
};

let ans = 0;

// Botones de la calculadora
let calculator_buttons = [
  {
    name: "rad",
    symbol: "Rad",
    formula: false,
    type: "key",
  },
  {
    name: "deg",
    symbol: "Deg",
    formula: false,
    type: "key",
  },
  {
    name: "factorial",
    symbol: "x!",
    formula: FACTORIAL,
    type: "math_function",
  },
  {
    name: "parentesisIzq",
    symbol: "(",
    formula: "(",
    type: "number",
  },
  {
    name: "parentesisDer",
    symbol: ")",
    formula: ")",
    type: "number",
  },
  {
    name: "porcentaje",
    symbol: "%",
    formula: "/100",
    type: "number",
  },
  {
    name: "clear",
    symbol: "AC",
    formula: false,
    type: "key",
  },
  {
    name: "delete",
    symbol: "Del",
    formula: false,
    type: "key",
  },

  {
    name: "pi",
    symbol: "π",
    formula: "Math.PI",
    type: "number",
  },
  {
    name: "cos",
    symbol: "cos",
    formula: "trigo(Math.cos,",
    type: "trigo_function",
  },
  {
    name: "sin",
    symbol: "sin",
    formula: "trigo(Math.sin,",
    type: "trigo_function",
  },
  {
    name: "tan",
    symbol: "tan",
    formula: "trigo(Math.tan,",
    type: "trigo_function",
  },
  {
    name: "siete",
    symbol: 7,
    formula: 7,
    type: "number",
  },
  {
    name: "ocho",
    symbol: 8,
    formula: 8,
    type: "number",
  },
  {
    name: "nueve",
    symbol: 9,
    formula: 9,
    type: "number",
  },
  {
    name: "division",
    symbol: "/",
    formula: "/",
    type: "operator",
  },
  {
    name: "e",
    symbol: "e",
    formula: "Math.E",
    type: "number",
  },
  {
    name: "acos",
    symbol: "cos<sup>-1</sup>",
    formula: "inv_trigo(Math.acos,",
    type: "trigo_function",
  },
  {
    name: "asin",
    symbol: "sin<sup>-1</sup>",
    formula: "inv_trigo(Math.asin,",
    type: "trigo_function",
  },
  {
    name: "atan",
    symbol: "tan<sup>-1</sup>",
    formula: "inv_trigo(Math.atan,",
    type: "trigo_function",
  },

  {
    name: "cuatro",
    symbol: 4,
    formula: 4,
    type: "number",
  },
  {
    name: "cinco",
    symbol: 5,
    formula: 5,
    type: "number",
  },
  {
    name: "seis",
    symbol: 6,
    formula: 6,
    type: "number",
  },
  {
    name: "multiplicacion",
    symbol: "x",
    formula: "*",
    type: "operator",
  },
  {
    name: "exp",
    symbol: "EXP",
    formula: "Math.exp",
    type: "math_function",
  },
  {
    name: "raizCuadrada",
    symbol: "√",
    formula: "Math.sqrt",
    type: "math_function",
  },
  {
    name: "ln",
    symbol: "ln",
    formula: "Math.log",
    type: "math_function",
  },
  {
    name: "log",
    symbol: "log",
    formula: "Math.log10",
    type: "math_function",
  },
  {
    name: "uno",
    symbol: 1,
    formula: 1,
    type: "number",
  },
  {
    name: "dos",
    symbol: 2,
    formula: 2,
    type: "number",
  },
  {
    name: "tres",
    symbol: 3,
    formula: 3,
    type: "number",
  },
  {
    name: "resta",
    symbol: "-",
    formula: "-",
    type: "operator",
  },

  {
    name: "ANS",
    symbol: "ANS",
    formula: "ans",
    type: "number",
  },
  {
    name: "power",
    symbol: "x<sup>y</sup>",
    formula: POWER,
    type: "math_function",
  },
  {
    name: "cuadrado",
    symbol: "x<sup>2</sup>",
    formula: POWER,
    type: "math_function",
  },

  {
    name: "coma",
    symbol: ".",
    formula: ".",
    type: "number",
  },
  {
    name: "cero",
    symbol: 0,
    formula: 0,
    type: "number",
  },
  {
    name: "igual",
    symbol: "=",
    formula: "=",
    type: "calculate",
  },
  {
    name: "suma",
    symbol: "+",
    formula: "+",
    type: "operator",
  },
];

//creacion de los botones de la calculadora

function createCalculatorButtons() {
  const btns_per_row = 8;
  let added_btns = 0;

  calculator_buttons.forEach((button) => {
    if (added_btns % btns_per_row == 0) {
      input_element.innerHTML += `<div class = "row"></div>`;
    }
    const row = document.querySelector(".row:last-child");
    row.innerHTML += `<button id = "${button.name}"> ${button.symbol}</button>`;
    added_btns++;
  });
}

createCalculatorButtons();

//radianes y grados (Rad|Deg)

let RADIAN = true;

const rad_btn = document.getElementById("rad");
const deg_btn = document.getElementById("deg");

rad_btn.classList.add("active-angle");

function angleToggler() {
  rad_btn.classList.toggle("active-angle");
  deg_btn.classList.toggle("active-angle");
}

//listener (lectura del boton)

input_element.addEventListener("click", (event) => {
  const target_btn = event.target;

  calculator_buttons.forEach((button) => {
    if (button.name == target_btn.id) calculator(button);
  });
});

//funciones

function calculator(button) {
  if (button.type == "operator") {
    data.operation.push(button.symbol);
    data.formula.push(button.formula);
  } else if (button.type == "number") {
    data.operation.push(button.symbol);
    data.formula.push(button.formula);
  } else if (button.type == "trigo_function") {
    data.operation.push(button.symbol + "(");
    data.formula.push(button.formula);
  } else if (button.type == "math_function") {
    let symbol, formula;

    if (button.name == "factorial") {
      symbol = "!";
      formula = button.formula;

      data.operation.push(symbol);
      data.formula.push(formula);
    } else if (button.name == "power") {
      symbol = "^(";
      formula = button.formula;

      data.operation.push(symbol);
      data.formula.push(formula);
    } else if (button.name == "square") {
      symbol = "^(";
      formula = button.formula;

      data.operation.push(symbol);
      data.formula.push(formula);

      data.operation.push("2)");
      data.formula.push("2)");
    } else {
      symbol = button.symbol + "(";
      formula = button.formula + "(";

      data.operation.push(symbol);
      data.formula.push(formula);
    }
  } else if (button.type == "key") {
    if (button.name == "clear") {
      data.operation = [];
      data.formula = [];
      updateOutputResult(0);
    } else if (button.name == "delete") {
      data.operation.pop();
      data.formula.pop();
    } else if (button.name == "rad") {
      RADIAN = true;
      angleToggler();
    } else if (button.name == "deg") {
      RADIAN = false;
      angleToggler();
    }
  } else if (button.type == "calculate") {
    formula_str = data.formula.join("");

    //solucion de problemas

    let POWER_SEARCH_RESULT = search(data.formula, POWER);
    let FACTORIAL_SEARCH_RESULT = search(data.formula, FACTORIAL);

    ////elevado y factorial
    const BASES = powerBaseGetter(data.formula, POWER_SEARCH_RESULT);

    BASES.forEach((base) => {
      let toReplace = base + POWER;
      let replacement = "Math.pow(" + base + ",";

      formula_str = formula_str.replace(toReplace, replacement);
    });

    //factorial

    const NUMBERS = factorialNumberGetter(
      data.formula,
      FACTORIAL_SEARCH_RESULT
    );

    NUMBERS.forEach((factorial) => {
      formula_str = formula_str.replace(
        factorial.toReplace,
        factorial.replacement
      );
    });

    let result;

    try {
      result = eval(formula_str);
    } catch (error) {
      if (error instanceof SyntaxError) {
        result = "Syntax Error!";
        updateOutputResult(result);
        return;
      }
    }

    //Creacion del ans para guardar los resultados anteriores
    ans = result;
    data.operation = [result];
    data.formula = [result];

    updateOutputResult(result);
    return;
  }

  updateOutputOperation(data.operation.join(""));
}

function factorialNumberGetter(formula, FACTORIAL_SEARCH_RESULT) {
  let numbers = [];
  let secuenciaFactorial = 0;

  FACTORIAL_SEARCH_RESULT.forEach((factorialIngresado) => {
    let number = [];

    let next_index = factorialIngresado + 1;
    let next_input = formula[next_index];

    if (next_input == FACTORIAL) {
      secuenciaFactorial += 1;
      return;
    }
    let primerFactorialIngresado = factorialIngresado - secuenciaFactorial;
    let ingresadoAnte = primerFactorialIngresado - 1;

    let contadorParentesis = 0;

    while (ingresadoAnte >= 0) {
      if (formula[ingresadoAnte] == "(") contadorParentesis--;
      if (formula[ingresadoAnte] == ")") contadorParentesis++;

      let esOperador = false;
      OPERATORS.forEach((OPERATOR) => {
        if (formula[ingresadoAnte] == OPERATOR) esOperador = true;
      });

      if (esOperador && contadorParentesis == 0) break;
      number.unshift(formula[ingresadoAnte]);
      ingresadoAnte--;
    }

    let number_str = number.join("");

    const factorial = "factorial(",
      close_parentheses = ")";
    let times = secuenciaFactorial + 1;

    let toReplace = number_str + FACTORIAL.repeat(times);
    let replacement =
      factorial.repeat(times) + number_str + close_parentheses.repeat(times);

    numbers.push({
      toReplace: toReplace,
      replacement: replacement,
    });
    secuenciaFactorial = 0;
  });
  return numbers;
}

function powerBaseGetter(formula, POWER_SEARCH_RESULT) {
  let powers_bases = [];

  POWER_SEARCH_RESULT.forEach((power_index) => {
    let base = [];

    let contadorParentesis = 0;

    let ingresadoAnte = power_index - 1;

    while (ingresadoAnte >= 0) {
      if (formula[ingresadoAnte] == "(") contadorParentesis--;
      if (formula[ingresadoAnte] == ")") contadorParentesis++;

      let esOperador = false;
      OPERATORS.forEach((OPERATOR) => {
        if (formula[ingresadoAnte] == OPERATOR) esOperador = true;
      });
      let is_power = formula[ingresadoAnte] == POWER;

      if ((esOperador && contadorParentesis == 0) || is_power) break;
      base.unshift(formula[ingresadoAnte]);
      ingresadoAnte--;
    }
    powers_bases.push(base.join(""));
  });
  return powers_bases;
}

//resultado

function search(array, keyword) {
  let search_result = [];

  array.forEach((element, index) => {
    if (element == keyword) search_result.push(index);
  });
  return search_result;
}

//acrualizar salida

function updateOutputOperation(operation) {
  output_operation_element.innerHTML = operation;
}

function updateOutputResult(result) {
  output_result_element.innerHTML = result;
}

//funcion factorial

function factorial(number) {
  if (number % 1 != 0) return gamma(number + 1);
  if (number === 0 || number === 1) return 1;

  let result = 1;
  for (let i = 1; i <= number; i++) {
    result *= i;
    if (result === Infinity) return Infinity;
  }
  return result;
}

// FUNCIÓN GAMMA
function gamma(n) {
  // uso de mas o menos 15 decimales
  //constantes necesarias
  var g = 7, // g se usa para hallar de forma mas precisa los resultados
    p = [
      0.99999999999980993, 676.5203681218851, -1259.1392167224028,
      771.32342877765313, -176.61502916214059, 12.507343278686905,
      -0.13857109526572012, 9.9843695780195716e-6, 1.5056327351493116e-7,
    ]; // p es el valor de p[i] para poner en la formula de Lanczos
  if (n < 0.5) {
    return Math.PI / Math.sin(n * Math.PI) / gamma(1 - n);
  } else {
    n--;
    var x = p[0];
    for (var i = 1; i < g + 2; i++) {
      x += p[i] / (n + i);
    }
    var t = n + g + 0.5;
    return Math.sqrt(2 * Math.PI) * Math.pow(t, n + 0.5) * Math.exp(-t) * x;
  }
}

//funciones trigonometricas

function trigo(callback, angle) {
  if (!RADIAN) {
    angle = (angle * Math.PI) / 180;
  }
  return callback(angle);
}

function inv_trigo(callback, value) {
  let angle = callback(value);

  if (!RADIAN) {
    angle = (angle * 180) / Math.PI;
  }
  return angle;
}

