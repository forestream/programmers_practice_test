function solution(hp) {
    const GENERAL = 5, 
          SOLDIER = 3,
          WORKER = 1;
    
    let count = 0;
    
    count += Math.trunc(hp / GENERAL);
    count += Math.trunc(hp % GENERAL / SOLDIER);
    count += Math.trunc(hp % GENERAL % SOLDIER / WORKER);
    
    return count;
}