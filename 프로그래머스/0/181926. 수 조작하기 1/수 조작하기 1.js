function solution(n, control) {
    control.split('').forEach((letter) => {
        if (letter === 'w') n += 1;
        if (letter === 's') n -= 1;
        if (letter === 'd') n += 10;
        if (letter === 'a') n -= 10;
    });
    return n;
}