function solution(numbers) {
    var answer = 0;
    let total = 0;
    
    for (number of numbers) {
        total += number;
        
        if (numbers.lastIndexOf(number) === numbers.length - 1) {
            let average = total / numbers.length;
            answer = average;
        }
    }
    return answer;
}