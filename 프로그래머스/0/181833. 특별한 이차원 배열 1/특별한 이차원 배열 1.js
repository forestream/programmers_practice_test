function solution(n) {
    const answer = Array(n).fill(Array(n).fill(0));
    return answer.map((arr, outerIdx) => arr.map((num, innerIdx) => outerIdx === innerIdx ? 1 : 0));
}