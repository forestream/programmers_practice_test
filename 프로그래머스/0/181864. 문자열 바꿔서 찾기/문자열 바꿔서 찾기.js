function solution(myString, pat) {
    const converted = myString.split('').map((letter) => letter === 'A' ? 'B' : 'A').join('');
    return converted.includes(pat) ? 1 : 0;
}