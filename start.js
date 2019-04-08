var calculation = require('./calculation.js');

class Calculator {
    constructor() {
        this.operators = {};
    }
    calculate(operator, numberA, numberB) {
		return this.operators[operator].operate(numberA, numberB);
	}

	registerOpertator(operatorName, operator) {
        this.operators[operatorName] = operator;
    }
}

const calculator = new Calculator();

calculator.registerOpertator('+', new calculation.add);
calculator.registerOpertator('-', new calculation.sub);
calculator.registerOpertator('x', new calculation.mul);
calculator.registerOpertator('/', new calculation.div);

console.log(calculator.calculate(process.argv[2],process.argv[3],process.argv[4]));
