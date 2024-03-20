function solution(myString) {
    let arr = myString.split('x');
    return arr.map((str) => str.length);
}