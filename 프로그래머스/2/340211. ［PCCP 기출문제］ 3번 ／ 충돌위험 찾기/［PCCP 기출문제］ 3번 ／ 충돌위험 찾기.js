class Robot {
    constructor(r, c) {
        this.r = r;
        this.c = c;
        this.destination = {index: null, coordinate: null};
    }
    
    down() {
        this.r++;
    }
    
    up() {
        this.r--;
    }
    
    left() {
        this.c--;
    }
    
    right() {
        this.c++;
    }
    
    setDestination(index, coordinate) {
        this.destination.index = index;
        this.destination.coordinate = coordinate;
    } 
}

class Routes {
    constructor() {
        this.points = [null];
        this.routes = [null];
        this.robots = [null];
        this.dangerCount = 0;
    }
    
    addPoint(pointCoordinate) {
        this.points.push(pointCoordinate);
    }
    
    addRoute(routePoints) {
        const routePointCoordinates = routePoints.map((point) => this.points[point]);
        this.routes.push(routePointCoordinates);
    }
    
    addRobot(r, c) {
        const newRobot = new Robot(r, c);
        this.robots.push(newRobot);
    }
    
    deployRobots() {
        for (let i = 1; i < this.routes.length; i++) {
            const [r, c] = this.routes[i][0];
            this.addRobot(r, c);
            this.robots[i].setDestination(1, this.routes[i][1]);
        }
    }
    
    getCollisionCount() {
        const positions = {};
        
        this.robots.forEach((robot) => {
            if (!robot) return;
            
            const coordinate = robot.r + ' ' + robot.c;
            positions[coordinate] = (positions[coordinate] ?? 0) + 1;
        });
        
        return Object.values(positions).filter((robot) => robot >= 2).length;
    }
    
    next() {
        this.dangerCount += this.getCollisionCount();
        
        for (let i = 1; i < this.robots.length; i++) {
            const robot = this.robots[i];
            
            if (!robot) continue;
            
            // 목적지 포인트에 도달했을 때
            if (robot.r === robot.destination.coordinate[0] && robot.c === robot.destination.coordinate[1]) {
                const currentDestIndex = robot.destination.index;
                const nextDest = this.routes[i][currentDestIndex + 1];
                
                // 루트상 다음 목적지가 있다면 로봇의 목적지 변경 후 진행
                if (nextDest) {
                    robot.setDestination(currentDestIndex + 1, nextDest);
                // 최종 목적지라면 로봇 제거
                } else {
                    this.robots[i] = null;
                    continue;
                }
            }
            
            // r 좌표 이동이 필요할 때
            if (robot.r !== robot.destination.coordinate[0]) {
                if (robot.r < robot.destination.coordinate[0]) robot.down();
                else robot.up();
                continue;
            }
            
            // c 좌표 이동이 필요할 때
            if (robot.c !== robot.destination.coordinate[1]) {
                if (robot.c < robot.destination.coordinate[1]) robot.right();
                else robot.left();
                continue;
            }
        }
    }
}

function solution(points, routes) {
    const map = new Routes();
    
    // 포인트 추가
    points.forEach((point) => {
        map.addPoint(point);
    })
    
    // 루트 추가
    routes.forEach((route) => {
        map.addRoute(route);
    })
    
    // 로봇 배치
    map.deployRobots();
    
    // 작동
    let time = 0;
    while (true) {
        map.next();
        time++;
        if (map.robots.every((robot) => robot === null)) break;
    }
    
    return map.dangerCount;
}