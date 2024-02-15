function solution(numbers, n) {
    const answer = numbers.reduce((acc, number) => {
        if (acc <= n) acc += number;
        return acc;
    }, 0);
    
    return answer;
}