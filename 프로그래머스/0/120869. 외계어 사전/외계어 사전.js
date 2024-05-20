function solution(spell, dic) {
    let included = [...dic];
    spell.forEach((e) => {
        included = included.filter((word) => word.includes(e));
    })
    return included.length ? 1 : 2;
}