function solution(score) {
    let ave = score.map((e, i) => [(e[0] + e[1]) / 2, i]);
    ave.sort((a, b) => b[0] - a[0]);
    let aveOnly = ave.map((e) => e[0]);
    
    let place = 1;
    ave = ave.reduce((acc, e, i) => {
        if (aveOnly.includes(e[0])) e.push(aveOnly.indexOf(e[0]) + 1)
        else e.push(i + 1);
        acc.push(e);
        return acc;
    }, []);
    
    // [average, index, place]
    ave.sort((a, b) => a[1] - b[1]);
    return ave.map((e) => e[2]);
}