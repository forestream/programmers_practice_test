function solution(rny_string) {
    return [...rny_string].map((letter) => letter === 'm' ? 'rn' : letter).join('');
}