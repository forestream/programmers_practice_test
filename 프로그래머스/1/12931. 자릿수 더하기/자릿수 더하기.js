function solution(n)
{
    let str = n + '';
    return str.split('').reduce((acc, num) => {
        return acc + +num;
    }, 0);
}