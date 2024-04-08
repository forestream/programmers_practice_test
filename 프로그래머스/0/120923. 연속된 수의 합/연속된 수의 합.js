function solution(num, total) {
    let answer = [];
    
    let middle = total / num;
    
    if (middle % 1 === 0) {
        let 넣을수 = middle - (num - 1) / 2
        for (let i = 0; i < num; i++) {   
            answer.push(넣을수++);
        }
    } else {
        let 넣을수 = Math.ceil(middle) - num / 2;
        for (let i = 0; i < num; i++) {   
            answer.push(넣을수++);
        }
    }
    return answer;
    
}