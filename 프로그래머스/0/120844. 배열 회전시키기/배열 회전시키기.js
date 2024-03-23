function solution(numbers, direction) {
    var answer = [];
    
    answer = direction === 'right' ? 
        [...numbers.splice(numbers.length - 1), ...numbers] :
        [...numbers.splice(1), ...numbers];
    return answer;
}