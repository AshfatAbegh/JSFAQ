function explain_callback(name,age,task){
console.log('Hello',name);
console.log('Age',age);
task();
}

function washHand(){
    console.log('wash hand with soap');
}
function takeShower(){
    console.log('Take Shower');
}
explain_callback('Abir',20,washHand);
explain_callback('Arif',20,takeShower);

