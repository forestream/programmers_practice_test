function solution(r1, r2) {
    let y = 0;
    let integerPairCount = 0;
    
    while (y <= r2) {
        const x2 = Math.sqrt(r2 ** 2 - y ** 2);
        const x1 = Math.sqrt(r1 ** 2 - Math.min(y, r1) ** 2);
        
        integerPairCount += (Math.floor(x2) - Math.ceil(x1) + 1) * 2 - (y >= r1 ? 1 : 0);
        
        y++;
    }
    
    return integerPairCount * 2 - (r2 - r1 + 1) * 2;
}