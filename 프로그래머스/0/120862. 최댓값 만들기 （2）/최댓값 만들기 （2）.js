function solution(numbers) {
    numbers.sort((a,b)=>a-b).filter((num) => num !== 0);
    return numbers[0] * numbers[1] > numbers[numbers.length - 1] * numbers[numbers.length - 2] ? numbers[0] * numbers[1] : numbers[numbers.length - 1] * numbers[numbers.length - 2];
}