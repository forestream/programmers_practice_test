function solution(a, b) {
    let less = a < b ? a : b;
    let cd = [];
    for (let i = 1; i <= less; i++) {
        if (a % i === 0 && b % i === 0) cd.push(i);
    }
    
    if (cd.length > 1) {
        a /= cd[cd.length - 1];
        b /= cd[cd.length - 1];
    }
    
    while (b % 2 === 0) b = b / 2;
    while (b % 5 === 0) b = b / 5;
    
    return b !== 1 ? 2 : 1;
}