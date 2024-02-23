function solution(my_string, is_suffix) {
    return my_string
        .split('')
        .slice(my_string.indexOf(is_suffix))
        .join('') === is_suffix ? 1 : 0;
    
}