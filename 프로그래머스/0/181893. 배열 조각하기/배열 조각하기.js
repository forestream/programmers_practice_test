function solution(arr, query) {
    var answer = [...arr];
    query.forEach((e, i) => {
        if (i % 2 === 0) answer.splice(e + 1);
        else answer.splice(0, e);
    })
    return answer;
}