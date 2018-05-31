function calc (x1, x2, oper) {
    return eval(`${x1} ${oper} ${x2}`);
}
console.log(calc(2, 6, "^"));
