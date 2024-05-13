function solution(code) {
    let ret = '';
    let mode = false;
    
    for (let idx = 0; idx < code.length; idx++) {
        if (code[idx] === '1') {
            mode = !mode;
            continue;
        } 
        
        if (!mode) {
            if (idx % 2 === 0) ret += code[idx];
        }
        
        if (mode) {
            if (idx % 2 === 1) ret += code[idx];
        }

    }
    
    return ret.length === 0 ? 'EMPTY' : ret;
}