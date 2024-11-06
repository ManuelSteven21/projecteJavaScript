<template>
  <div class="calculator-container">
    <div class="calculator">
      <h1 class="title">Calculadora</h1> <!-- El título dentro del contenedor de la calculadora -->
      <div class="display">{{ display }}</div>
      <div class="buttons">
        <button @click="clearDisplay" class="clear">C</button>
        <button @click="clearEntry" class="clear-entry">CE</button>
        <button @click="appendParenthesis('(')"> ( </button>
        <button @click="appendParenthesis(')')"> ) </button>
        <button @click="square()" class="operator">x²</button>
        <button @click="choosePower()" class="operator">^</button>
        <button @click="squareRoot()" class="operator">√</button>
        <button @click="operate('x')" class="operator">x</button>
        <button @click="appendNumber(7)" class="number">7</button>
        <button @click="appendNumber(8)" class="number">8</button>
        <button @click="appendNumber(9)" class="number">9</button>
        <button @click="operate('÷')" class="operator">÷</button>
        <button @click="appendNumber(4)" class="number">4</button>
        <button @click="appendNumber(5)" class="number">5</button>
        <button @click="appendNumber(6)" class="number">6</button>
        <button @click="operate('+')" class="operator">+</button>
        <button @click="appendNumber(1)" class="number">1</button>
        <button @click="appendNumber(2)" class="number">2</button>
        <button @click="appendNumber(3)" class="number">3</button>
        <button @click="operate('-')" class="operator">-</button>
        <button @click="operate('%')" class="operator">%</button>
        <button @click="appendNumber(0)" class="number zero">0</button>
        <button @click="appendDecimal()" class="number">,</button>
        <button @click="calculate()" class="equal">=</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      display: '',        // Mostrar en pantalla
      operatorSet: false, // Controla si ya se ingresó un operador
    };
  },
  methods: {
    clearDisplay() {
      this.display = '';
      this.operatorSet = false;
    },
    clearEntry() {
      // Elimina el último valor ingresado
      this.display = this.display.slice(0, -1);
    },
    appendNumber(number) {
      this.display += number.toString();
      this.operatorSet = false;
    },
    appendDecimal() {
      if (this.display) {
        // Comprovem si ja existeix un punt decimal
        const lastNumber = this.display.split(/[\+\-\*\/\(\)]/).pop();
        if (!lastNumber.includes('.')) {
          this.display += '.';
        }
      } else {
        this.display += '0.';  // Si no hi ha res a la pantalla, afegim "0."
      }
    },
    operate(operator) {
      if (!this.operatorSet && this.display !== '') {
        this.display += operator;
        this.operatorSet = true;
      }
    },
    square() {
      if (this.display) {
        const result = Math.pow(parseFloat(this.display), 2);
        this.display = result.toString();
      }
    },
    choosePower() {
      this.display += '^';
      this.operatorSet = true;
    },
    squareRoot() {
      if (this.display) {
        const result = Math.sqrt(parseFloat(this.display));
        this.display = result.toString();
      }
    },
    appendParenthesis(parenthesis) {
      this.display += parenthesis;
    },
    calculate() {
        try {
        // Substituir els símbols per operadors JavaScript
        let expression = this.display.replace(/\^/g, '**')
                                      .replace(/x/g, '*')
                                      .replace(/÷/g, '/');
        // Avalua l'expressió
        let result = eval(expression);
        
        // Convertim el resultat en número i tornem a convertir a cadena
        // Això elimina qualsevol zero innecessari després del punt decimal
        if (result % 1 !== 0) {
          this.display = result.toFixed(10).replace(/\.?0+$/, ''); // Eliminem els zeros finals
        } else {
          this.display = result.toString();
        }
      } catch (e) {
        this.display = 'Error';
      }
    },
  },
};
</script>


<style scoped>
.calculator-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 80px); /* Ajusta la altura para no sobrepasar el header */
  padding: 20px; /* Espacio alrededor del contenedor */
}

.calculator {
  background-color: rgba(27, 27, 27, 0.863); /* Fondo semitransparente */
  border-radius: 10px; /* Bordes redondeados */
  padding: 40px; /* Aumenta el padding para más espacio */
  width: 100%; /* Asegura que ocupe todo el ancho disponible */
  max-width: 500px; /* Máximo ancho para el diseño */
}

.title {
  font-size: 2.5rem; /* Tamaño de fuente del título, reduce en pantallas más pequeñas */
  color: white;
  margin-bottom: 20px; /* Espacio debajo del título */
  text-align: center; /* Centra el texto del título */
}

.display {
  width: 100%; /* Ocupa el ancho completo del contenedor */
  height: 80px; /* Aumenta la altura para que sea más grande */
  background-color: rgba(255, 255, 255, 0.1); /* Fondo blanco semitransparente */
  color: white; /* Color del texto en el display */
  font-size: 2.5rem; /* Tamaño de fuente ajustado para ser responsive */
  border-radius: 5px; /* Bordes redondeados */
  margin-bottom: 20px; /* Espacio debajo del display */
  padding: 10px; /* Espacio interior */
  text-align: right; /* Texto alineado a la derecha */
}

.buttons {
  display: grid; /* Usa grid para distribución */
  grid-template-columns: repeat(4, 1fr); /* 4 botones por fila */
  gap: 15px; /* Espacio entre botones */
}

button {
  background-color: white; /* Fondo blanco para botones */
  color: black; /* Color del texto de los botones */
  border: none; /* Sin borde */
  border-radius: 5px; /* Bordes redondeados */
  font-size: 1.5rem; /* Ajusta el tamaño de fuente de los botones para ser responsive */
  padding: 15px; /* Espacio interior de los botones */
  cursor: pointer; /* Cambia el cursor al pasar por encima */
  transition: background-color 0.3s; /* Transición para el color de fondo */
}

button:hover {
  background-color: rgba(200, 200, 200, 0.7); /* Color de fondo al pasar el ratón */
}

.operator {
  background-color: lightgray; /* Color para botones de operaciones */
}

.equal {
  background-color: #4caf50; /* Color para el botón igual */
  color: white; /* Texto blanco para el botón igual */
}

.clear {
  background-color: #ff5722; /* Color para el botón de limpiar */
  color: white; /* Texto blanco para el botón de limpiar */
}

/* Media queries para hacer la calculadora responsive */
@media (max-width: 768px) {
  .title {
    font-size: 2rem; /* Tamaño de fuente del título */
  }
  .display {
    font-size: 2rem; /* Ajusta el tamaño de fuente del display */
    height: 60px; /* Reduce la altura del display */
  }
  button {
    font-size: 1.2rem; /* Ajusta el tamaño de los botones */
    padding: 10px; /* Reduce el padding de los botones */
  }
}

@media (max-width: 480px) {
  .calculator {
    padding: 20px; /* Reduce el padding del contenedor */
  }
  .title {
    font-size: 1.5rem; /* Reduce el tamaño de fuente del título */
  }
  .display {
    font-size: 1.5rem; /* Ajusta el tamaño de fuente del display */
  }
  button {
    font-size: 1rem; /* Ajusta el tamaño de los botones */
    padding: 8px; /* Reduce el padding de los botones */
  }
}
</style>