function solution(myString) {
    return myString.split('x').sort().filter((e) => e!=='');
}