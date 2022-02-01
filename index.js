const add = (a,b) =>{
    return a + b;
}
const sub = (a,b) =>{
    if(a<b)
        return b-a;
    return a - b;
}
const mul = (a,b) =>{
    return a * b;
}
const div = (a,b) =>{
    return a / b;
}
const mod = (a,b) =>{
    return a % b;
}
const power = (a,b) =>{
    return a ** b;
}
console.log(add(2,3));
console.log(sub(10,20));
console.log(mul(5,4));
console.log(div(10,5));
console.log(mod(13,5));
console.log(power(2,3));
