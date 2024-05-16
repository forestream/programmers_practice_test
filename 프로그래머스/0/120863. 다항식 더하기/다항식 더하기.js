function solution(polynomial) {
    let xSum = polynomial.split(' ').filter((e) => e.includes('x')).reduce((acc, e) => {
        if (e === 'x') e = e.replace('x', '1');
        e = e.replace('x', '');
        return acc + Number(e);
    }, 0);
    
    let numSum = polynomial.split(' ').filter((e) => !Number.isNaN(+e)).reduce((acc, e) => {
        return acc + Number(e);
    }, 0);
    
    if (!xSum) return numSum + '';
    if (!numSum) return xSum === 1 ? 'x' : xSum + 'x';
    return `${xSum === 1 ? '' : xSum}x + ${numSum}`;
}