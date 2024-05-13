function solution(arr, queries) {
    var answer = [];
    queries.forEach((query) => {
        let candidates = arr.slice(query[0], query[1] + 1).filter((e) => e > query[2]);
        let min = candidates.length ? Math.min(...candidates) : -1;
        answer.push(min);
    })
    return answer;
}