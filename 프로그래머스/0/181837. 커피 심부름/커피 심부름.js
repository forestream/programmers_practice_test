function solution(order) {
    let price = 0;
    order.forEach((e) => {
        if (e.includes('americano') || e.includes('anything')) price += 4500;
        if (e.includes('latte')) price += 5000;
    });
    return price;
    
}