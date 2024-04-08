function solution(order) {
    let clap = 0;
    String(order).split('').forEach((e) => {
        console.log(e);
        if (e !== '0' && (+e) % 3 === 0) clap += 1;
    });
    
    return clap;
}