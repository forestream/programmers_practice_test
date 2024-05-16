function push(a) {
    return [...a.slice(a.length - 1), ...a.slice(0, a.length - 1)].join('');
}

function solution(A, B) {
    if (A.length === 1) {
        return A === B ? 0 : -1;
    }
    
    let pushed = A;
    
    let i = 0;
    while (pushed !== B) {
        if (i >= A.length) break;
        pushed = push(pushed);
        i++;
        
        if (pushed === B) break;
    }
    
    return pushed !== B ? -1 : i;
}