function solution(array) {
    var answer = 0;
    
    array.sort((a, b) => a - b)
    
    answer = array[Math.trunc(array.length / 2)];
    
    return answer;
}