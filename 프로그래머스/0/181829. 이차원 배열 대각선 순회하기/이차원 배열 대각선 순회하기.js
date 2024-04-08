function solution(board, k) {
    let answer = 0;
    let max = k;
    
    for (let i = 0; i <= k; i++) {
        if (i >= board.length) continue;
        answer += board[i].slice(0, k - i + 1).reduce((a, e) => a + e, 0);
    }
    
    return answer;
}