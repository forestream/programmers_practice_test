function solution(my_strings, parts) {
    return my_strings.reduce((acc, el, idx) => {
        return acc + el.slice(parts[idx][0], parts[idx][1] + 1);
    }, '')
    
}