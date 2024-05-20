function solution(rank, attendance) {
    rank = rank.map((e, i) => [e, i]);
    rank = rank.filter((e, i) => attendance[i]);
    rank.sort((a, b) => a[0] - b[0]);
    console.log(rank);
    
    return 10000 * rank[0][1] + 100 * rank[1][1] + rank[2][1];
}