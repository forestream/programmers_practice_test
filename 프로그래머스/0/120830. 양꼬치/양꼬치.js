function solution(n, k) {
    var answer = 0;
    
    if (n >= 10) {
        let service = (n - (n % 10 )) / 10;
        k -= service;
    }
    
    answer = n * 12000 + k * 2000;
    
    return answer;
}