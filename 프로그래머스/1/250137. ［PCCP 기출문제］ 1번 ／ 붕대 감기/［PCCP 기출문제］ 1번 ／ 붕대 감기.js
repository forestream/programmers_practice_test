function solution(bandage, health, attacks) {
    const maxHealth = health;
    const lastAttackTime = attacks[attacks.length - 1][0];
    const [totalHealTime, healAmount, bonusHealAmount] = bandage;
    let accHealTime = 0;
    let nextAttack = attacks.shift();
    
    for (let current = 0; current <= lastAttackTime; current++) {
        if (current === nextAttack[0]) {
            health -= nextAttack[1];
            accHealTime = 0;
            
            if (health <= 0) {
                return -1;
            } else {
                nextAttack = attacks.shift();
                continue;
            }
        }
        
        accHealTime++;
        health = health + healAmount > maxHealth ? maxHealth : health + healAmount;        
        
        if (accHealTime === totalHealTime) {
            health = health + bonusHealAmount > maxHealth ? maxHealth : health + bonusHealAmount;
            accHealTime = 0;
        } 
    }
    
    return health;
}