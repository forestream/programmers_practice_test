function solution(arr) {
    let count = 0;
    let current = [...arr];
    let prev = [];
    
    do {
        count++;
        prev = [...current];

        current = prev.map((e) => {
            if (e >= 50 && e % 2 === 0) return e / 2;
            if (e < 50 && e % 2 === 1) return e * 2 + 1;
            return e;
        });        
    } while (!(current.every((e, i) => e === prev[i])))
    
    return count - 1;
}