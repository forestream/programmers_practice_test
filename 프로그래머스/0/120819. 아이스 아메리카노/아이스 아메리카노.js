function solution(money) {
    var answer = [];
    
    let maxAmericano = (money - (money % 5500)) / 5500;
    let change = money % 5500;
    
    answer.splice(0, 0, maxAmericano, change);
    
    return answer;
}