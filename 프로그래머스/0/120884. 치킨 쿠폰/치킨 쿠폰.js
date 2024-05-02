function solution(chicken) {
    let coupons = chicken;
    let left = 0;
    let service = 0;
    while (coupons >= 10) {
        left = coupons % 10;
        coupons = Math.floor(coupons / 10);
        service += coupons;
        coupons += left;
    }
    return service;
}