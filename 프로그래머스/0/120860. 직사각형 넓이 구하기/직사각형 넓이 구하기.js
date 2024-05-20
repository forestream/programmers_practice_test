function solution(dots) {
    let axes = dots.reduce((acc, e) => {
        if (!acc[0].includes(e[0])) acc[0].push(e[0]);
        if (!acc[1].includes(e[1])) acc[1].push(e[1]);
        return acc;
    }, [[], []]);
    console.log(axes);
    
    return Math.abs(axes[0][0] - axes[0][1]) * Math.abs(axes[1][0] - axes[1][1]);
}