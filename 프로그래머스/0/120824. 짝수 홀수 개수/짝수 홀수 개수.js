function solution(num_list) {
    var answer = [];
    let even = 0;
    let odd = 0;
    
    for (number of num_list) {
        if (number % 2 === 0) {
            even++;
        } else {
            odd++;
        }
    }
    
    answer[0] = even;
    answer[1] = odd;
    
    return answer;
}