function solution(strArr) {
    let lengths = strArr.map((e) => e.length);
    let obj = lengths.reduce((acc, e) => {
        if (!acc[e]) {
            acc[e] = 1;
            return acc;
        }
        acc[e]++;
        return acc;
    },{});
    console.log(obj);
    return Object.values(obj).sort((a,b) => b - a)[0];
}