function solution(a, b) {
    let ab = '' + a + b;
    let ba = '' + b + a;
    return +ab > +ba ? +ab : +ba;
}