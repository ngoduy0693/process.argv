class Add {
	operate(numberA, numberB) {
		return Number(numberA) + Number(numberB);
	}
}

class Sub {
	operate(numberA, numberB) {
		return Number(numberA) - Number(numberB);
	}
}

class Mul {
	operate(numberA, numberB) {
		return Number(numberA) * Number(numberB);
	}
}

class Div {
	operate(numberA, numberB) {
        if(numberB == 0){
            console.log("Divide by zero !!!");
        } else {
			return Number(numberA) / Number(numberB);
		}
		
	}
}

var calculation = {
    add : Add,
    sub : Sub,
    mul : Mul,
    div : Div
}

module.exports = calculation;
