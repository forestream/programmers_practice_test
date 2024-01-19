function solution(n) {
    var answer = 0;
    let pizza = 1;
    
    while (pizza * 6 % n !== 0) {
        pizza++;
    }
    
    answer = pizza;
    
    return answer;
}