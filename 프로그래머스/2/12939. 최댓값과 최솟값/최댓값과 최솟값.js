function solution(string) {
    const numbers = string.split(' ');
    
    return numbers.reduce((acc, e) => {
        acc[0] = acc[0] > Number(e) ? Number(e) : acc[0]; 
        acc[1] = acc[1] < Number(e) ? Number(e) : acc[1]; 
        return acc;
    }, [Infinity, -Infinity]).join(' ');
}