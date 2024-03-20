function solution(myString) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    
    return myString.split('').reduce((edited, char) => {
        return alphabet.indexOf(char) <= alphabet.indexOf('l') ? edited + 'l' : edited + char;
    }, '')
}