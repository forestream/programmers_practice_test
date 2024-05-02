function solution(common) {
    var answer = 0;
    
    if (common[2] - common[1] === common[1] - common[0]) {
        common.push(common[common.length - 1] + (common[1] - common[0]));
    }
    
    if (common[2] / common[1] === common[1] / common[0]) {
        common.push(common[common.length - 1] * (common[1] / common[0]));
    }
    
    return common.slice(-1)[0];
}