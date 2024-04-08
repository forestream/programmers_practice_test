function solution(n) {
    if (n <= 3) return 0;
    let count = 0;
    
    count += n % 2 ? (n - 1) / 2 - 1 : n / 2 - 1;
    
    for (let i = 9; i <= n; i += 2) {
        for (let j = 3; j < i; j += 2) {
            if (i % j === 0) {
                count++;
                break;
        }
    }
    }
    return count;
}