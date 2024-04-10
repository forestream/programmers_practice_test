function solution(phone_number) {
    const last = phone_number.slice(phone_number.length - 4, phone_number.length);
    return Array(phone_number.length - 4).fill('*').join('') + last;
}