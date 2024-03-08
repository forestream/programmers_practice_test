function solution(myString) {
    return myString
        .split('')
        .map((letter) => 
        letter === 'a' ? 'A' 
            : letter !== 'A' ? letter.toLowerCase()
            : 'A')
        .join('');
}