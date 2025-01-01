function solution(targets) {
    let interceptors = 0;
    let current = 0;
    
    targets.sort((a, b) => a[1] - b[1]);
    
    targets.forEach((target) => {
        if (current > target[0]) return;
        
        current = target[1];
        interceptors++;
    })
    
    return interceptors;
}