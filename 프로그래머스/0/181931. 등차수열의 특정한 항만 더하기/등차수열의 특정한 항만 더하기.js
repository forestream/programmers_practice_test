function solution(a, d, included) {
    let 등차수열 = Array(included.length).fill(0).map((e, i) => a + d * i);

    let answer = 0;
    included.forEach((e, i) => {
        if (e) answer += 등차수열[i];
    })
    return answer;
}