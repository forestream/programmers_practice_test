function solution(arr) {
    const answer = arr.reduce((acc, el) => {
        console.log(acc);
        acc.push(...Array(el).fill(el));
        return acc;
    }, []);
    
    return answer;
}