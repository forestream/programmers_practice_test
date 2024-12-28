class DirectedGraph {
    constructor() {
        this.vertices = {};
        this.edges = {};
    }
    
    addVertex(value) {
        this.vertices[value] = true;
        if (!this.edges[value]) this.edges[value] = [];
        
        return value;
    }
    
    getVertex(value) {
        return this.vertices.find((vertex) => vertex === value);
    }
    
    addEdge(value1, value2) {
        let vertex1 = this.vertices[value1];
        if (!vertex1) vertex1 = this.addVertex(value1);
        
        let vertex2 = this.vertices[value2];
        if (!vertex2) vertex2 = this.addVertex(value2);
        
        this.edges[value1].push(value2);
    }
}

function solution(edges) {
    const answer = [null, 0, 0, 0];
    
    const dg = new DirectedGraph();
    const targets = {};
    
    edges.forEach(([node1, node2]) => {
        dg.addEdge(node1, node2);
        targets[node2] = true;
    })
        
    // 지목된 적 없고, 가리키는 정점이 두 개 이상이면 나머지 그래프와 무관한 정점이다.
    const unrelatedVertex = Object.keys(dg.vertices).find((vertex) => !targets[vertex] && dg.edges[vertex].length > 1);
    
    const totalGraphs = dg.edges[unrelatedVertex].length;
    
    const entries = Object.entries(dg.edges);
    
    const barGraphs = entries.reduce((acc, [_key, value]) => value.length === 0 ? acc + 1 : acc, 0);
    
    const eightGraphs = entries.reduce((acc, [key, value]) => Number(key) !== Number(unrelatedVertex) && value.length === 2 ? acc + 1 : acc, 0);
    
    const donutGraphs = totalGraphs - barGraphs - eightGraphs;
    
    return [Number(unrelatedVertex), donutGraphs, barGraphs, eightGraphs];
    
}