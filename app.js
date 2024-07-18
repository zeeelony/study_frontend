function HideLastNum(phoneNum){
    let parts = phoneNum.split(' ');
    let number1= parts.slice(0, 3).join(' ')
    let number = parts.slice(3).join(' ');
    let lastTwoDigits = number.slice(-2);

    let ltw= number.slice(0, -2) + 'xx';
    
    let HiddenNumber= number1+" "+ltw;
    return HiddenNumber
}
console.log(HideLastNum("+996 555 123 123"));
