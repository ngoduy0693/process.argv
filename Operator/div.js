class Div {
    operate(numberA,numberB) {
        if(numberB === 0){
            console.log("Divide by zero !")
        } else {
            return numberA / numberB;
        }
    }
}
module.exports = Div;