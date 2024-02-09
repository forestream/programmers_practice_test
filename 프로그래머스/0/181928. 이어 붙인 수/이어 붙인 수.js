function solution(num_list) {
    let odd = num_list.filter((num) => num % 2 === 1).join('');
    let even = num_list.filter((num) => num % 2 === 0).join('');
    return +odd + +even;
}