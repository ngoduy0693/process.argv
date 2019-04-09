const Koa = require('koa');
const app = new Koa();

const Calculator = require('./calculation.js');
const calculator = new  Calculator();

const numberFilterMiddleware = async (context, next) => {
    const numberA = context.query.numberA;
    const numberB = context.query.numberA;
    const operate = context.query.operate;
    if (numberA, numberB, operate) {
        await next();
    } else {
        context.body = {
            Calculator : 'Missing value!'
        }
    }
};

const opFilterMiddleware = async (context) => {
    const numberA  = parseInt(context.query.numberA);
    const numberB  = parseInt(context.query.numberB);
    const operate  = context.query.operate;

    if (!calculator.operators.hasOwnProperty(operate)) {
        context.body = {
            Result : 'Not support!'
        }
    } else {
        let result   = calculator.do(operate, numberA, numberB);
        context.body = {
            Result : numberA + ' ' + operate + ' ' + numberB + ' = ' + result
        }
    }
}

app.use(numberFilterMiddleware);
app.use(opFilterMiddleware);

app.listen(4001);