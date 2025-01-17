class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    
    push(value) {
        const newNode = new Node(value);
        
        if (this.size === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            newNode.next = this.first;
            this.first = newNode;
        }
        
        return ++this.size;
    }
    
    pop() {
        if (this.size === 0) return;
        
        const poppedNode = this.first;
        
        if (this.size === 1) {
            this.first = null;
            this.last = null;
        } else {
            this.first = this.first.next;
        }
        
        this.size--;
        
        return poppedNode.value;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    
    enqueue(value) {
        const newNode = new Node(value);
        
        if (this.size === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = this.last.next
        }
        
        return ++this.size;
    }
    
    enqueuePriority(value) {
        const newNode = new Node(value);
        
        if (this.size === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            newNode.next = this.first;
            this.first = newNode;
        }
        
        return ++this.size;
    }
    
    dequeue() {
        if (this.size === 0) return;
        
        const dequeued = this.first;
        
        if (this.size === 1) {
            this.first = null;
            this.last = null;
        } else {
            this.first = this.first.next;
        }
        
        this.size--;
        
        return dequeued.value;
    }
}

function getTime(string) {
    const [hour, minute] = string.split(':').map((string) => +string);
    return hour * 60 + minute;
}

function solution(plans) {
    plans.sort((a, b) => getTime(a[1]) - getTime(b[1]));
    const stack = new Stack();
    const queue = new Queue();
    const done = [];
    let now = getTime(plans[0][1]);
    
    plans.forEach((plan) => queue.enqueue([plan[0], getTime(plan[1]), Number(plan[2])]));
    
    while (queue.size) {
        const [currentName, currentStart, currentTimeLength] = queue.dequeue();
        
        // 시작 전 과제도 없고 중지한 과제도 없을 때는 바로 완료로 옮기고 반복 종료
        if (queue.size === 0 && stack.size === 0) {
            done.push(currentName);
            break;
        }
        
        // 시작 전인 과제가 남아 있을 때
        if (queue.size) {
            const [nextName, nextStart, nextTimeLength] = queue.first.value;

            // 다음 과제 시작 전에 끝내지 못한다면
            if (nextStart - now < currentTimeLength) {
                stack.push([currentName, currentStart, currentTimeLength - (nextStart - now)]);
                now = nextStart;
                continue;
            }

            // 다 끝냈을 때 
            done.push(currentName);
            now += currentTimeLength;

            // 다음 과제 시작까지 시간이 남아 있을 때
            if (now < nextStart) {
                // 중지한 과제가 있다면 중지한 과제를 다시 시작
                if (stack.size) {
                    queue.enqueuePriority(stack.pop());
                    continue;
                }
                
                // 중지한 과제가 없으면 다음 시작 시각까지 대기 후 시작
                now = nextStart;
                continue;
            }
            
            // 다음 과제 시각과 딱 맞으면 반복문 재실행
            continue;
            
        // 시작 안 한 과제는 없고 중지한 과제가 남아 있을 때
        } else if (stack.size) {
            done.push(currentName);
            now += currentTimeLength;
            queue.enqueue(stack.pop());
            continue;
        }
    }
    
    return done;
}