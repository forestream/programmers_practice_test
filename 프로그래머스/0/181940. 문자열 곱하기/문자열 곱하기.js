function solution(my_string, k) {
    let answer = '';
    for (let i = k; i > 0; i--) {
        answer += my_string;
    }
    return answer
}