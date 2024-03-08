function solution(num_list) {
    let even = num_list.reduce((acc, el, idx) => (idx + 1) % 2 === 0 ? acc + el : acc, 0);
    let odd = num_list.reduce((acc, el, idx) => (idx + 1) % 2 === 1 ? acc + el : acc, 0);
    
    return even > odd ? even : odd;
}