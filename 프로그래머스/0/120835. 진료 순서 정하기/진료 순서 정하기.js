function solution(emergency) {
    let original = [...emergency];
    emergency.sort((a, b) => b - a);
    return original.map((severity) => emergency.indexOf(severity) + 1);
}