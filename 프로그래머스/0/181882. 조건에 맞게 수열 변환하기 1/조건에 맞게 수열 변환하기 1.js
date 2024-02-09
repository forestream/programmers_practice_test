function solution(arr) {
    let result = arr.map((number) => {
        return (number >= 50 && number % 2 === 0) 
            ? number / 2 
        : (number < 50 && number % 2 === 1) 
            ? number * 2 
        : number;
    });
    
    return result;
}