function solution(num_list) {
    let multiplied = num_list.reduce((acc, number) => {
        return acc * number;
    }, 1)
    
    let summed = num_list.reduce((acc, number) => {
        return acc + number;
    }, 0)
    
    
    return multiplied < (summed ** 2) ? 1 : 0;
    
}