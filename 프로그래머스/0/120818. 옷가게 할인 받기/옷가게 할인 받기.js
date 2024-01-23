function solution(price) {
    var answer = 0;
    
    answer = price >= 100000 ? (price >= 300000 ? (price >= 500000 ? Math.trunc(price * 0.8) : Math.trunc(price * 0.9)) : Math.trunc(price * 0.95)) : price;
    
    return answer;
}