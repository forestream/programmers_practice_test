function solution(cipher, code) {
    return [...cipher].map((letter, idx) => {
        return (idx + 1) % code === 0 ? letter : '';
    })
        .join('');
}