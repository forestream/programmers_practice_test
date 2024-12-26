class Vertex {
    constructor(name) {
        this.name = name;
        this.adjacencyList = [];
    }
}

class WeightedDirectedGraph {
    constructor() {
        this.vertices = [];
        this.edges = {};
    }
    
    addVertex(vertex) {
        this.vertices.push(vertex);
        this.edges[vertex.name] = {};
    }
    
    addEdge(vertex1, vertex2) {
        let weight1 = this.edges[vertex1.name][vertex2.name] ?? 0;
        let weight2 = this.edges[vertex2.name][vertex1.name] ?? 0;

        this.edges[vertex1.name][vertex2.name] = ++weight1;
        this.edges[vertex2.name][vertex1.name] = weight2;
        
        if (!vertex1.adjacencyList.includes(vertex2.name)) vertex1.adjacencyList.push(vertex2.name);
        if (!vertex2.adjacencyList.includes(vertex1.name)) vertex2.adjacencyList.push(vertex1.name);
    }
    
    getVertex(name) {
        return this.vertices.find((vertex) => vertex.name === name);
    }
    
    getScore(name) {
        const vertex = this.getVertex(name);
        
        if (!vertex) return 'No matching vertex.';
        
        return vertex.adjacencyList.reduce((acc, adjacent) => {
            acc += this.edges[vertex.name][adjacent] ?? 0;
            acc -= this.edges[adjacent][vertex.name] ?? 0;
            return acc;
        }, 0);
    }
    
}

function solution(friends, gifts) {
    const wdg = new WeightedDirectedGraph();
    
    friends.forEach((friend) => wdg.addVertex(new Vertex(friend)));
    
    gifts.forEach((direction) => {
        const [giver, receiver] = direction.split(' ');
        const giverVertex = wdg.getVertex(giver);
        const receiverVertex = wdg.getVertex(receiver);
        
        wdg.addEdge(giverVertex, receiverVertex);
    });
       
    const mostReceivedCount = wdg.vertices.reduce((acc, vertex) => {
        const friend1 = vertex.name;
        
        let count = 0;
        
        friends.forEach((friend2) => {
            if (friend1 === friend2) return;
            
            const score1 = wdg.getScore(friend1);
            const score2 = wdg.getScore(friend2);
            console.log(score1,score2);
            
            if (vertex.adjacencyList.includes(friend2)) {
                const givenQuantity = wdg.edges[friend1][friend2] ?? 0;
                const receivedQuantity = wdg.edges[friend2][friend1] ?? 0;

                if (givenQuantity > receivedQuantity) {
                    count++;         
                    return;
                }  
                
                if (givenQuantity < receivedQuantity) return;
            }

            if (score1 > score2) count++;
        })
        
        return acc < count ? count : acc;
    }, -Infinity)
    
    return mostReceivedCount;
}