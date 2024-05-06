function solution(str_list) {
    var answer = [];
    let lIndex = str_list.indexOf('l');
    let rIndex = str_list.indexOf('r');
    
    if (!str_list.includes('l') && !str_list.includes('r')) {
        return [];
    }
    
    if ((rIndex >= 0 && lIndex >= 0 && lIndex < rIndex) || rIndex === -1) {
        answer = str_list.slice(0, lIndex);
    } else if ((rIndex >= 0 && lIndex >= 0 && rIndex < lIndex) || lIndex === -1) {
        answer = str_list.slice(rIndex + 1);        
    }
    
    return answer;
}