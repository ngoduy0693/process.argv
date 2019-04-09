const operators = require('./Operator/operators');


class Calculator {
    constructor() {
        this.operators = {
            'add' : new operators.Add,
            'mul' : new operators.Mul,
            'div' : new operators.Div,
            'sub' : new operators.Sub
        };
    }
    do(operator, numberA, numberB) {
        return this.operators[operator].operate(numberA, numberB);
    }
}

module.exports = Calculator;