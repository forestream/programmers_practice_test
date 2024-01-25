function solution(array, n) {
    var answer = 0;
    
    for (let number of array) {
        number === n ? answer++ : '';
    }
    return answer;
}