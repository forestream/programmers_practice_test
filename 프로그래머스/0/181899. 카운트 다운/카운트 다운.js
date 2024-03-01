function solution(start, end_num) {
    let answer = [];
    for (;start >= end_num; start--) {
        answer.push(start);
    }
    return answer;
}