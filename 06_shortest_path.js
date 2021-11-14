const shortestPath = (edges, nodeA, nodeB) => {
    const graph = buildGraph(edges);
    const visited = new Set([nodeA]);
    const queue = [[nodeA, 0]];

    while (queue.length > 0) {
        const [node, distance] = queue.shift();
        if (node === nodeB) return distance;
        for (const neighbor of graph[node]) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push([neighbor, distance + 1]);
            }
        }
    }
    return -1;
}

// converts edges to adjancy
const buildGraph = (edges) => {
    const graph = {};

    for (const edge of edges) {
        const [a, b] = edge;
        if (!(a in graph)) graph[a] = [];
        if (!(b in graph)) graph[b] = [];
        graph[a].push(b);
        graph[b].push(a);
    }
    return graph;
}


const edges1 = [
    ['w', 'x'],
    ['x', 'y'],
    ['z', 'y'],
    ['z', 'v'],
    ['w', 'v']
]

console.log(shortestPath(edges1, 'w', 'z')) // 2
console.log(shortestPath(edges1, 'y', 'x')) // 1

const edges2 = [
    ['a', 'c'],
    ['a', 'b'],
    ['c', 'b'],
    ['c', 'd'],
    ['b', 'd'],
    ['e', 'd'],
    ['g', 'f']
]

console.log(shortestPath(edges2, 'a', 'e')) // 3
console.log(shortestPath(edges2, 'e', 'c')) // 2
console.log(shortestPath(edges2, 'b', 'g')) // -1

const edges3 = [
    ['c', 'n'],
    ['c', 'e'],
    ['c', 's'],
    ['c', 'w'],
    ['w', 'e'],
]

console.log(shortestPath(edges3, 'w', 'e')) // 1
console.log(shortestPath(edges3, 'n', 'e')) // 2

const edges4 = [
    ['m', 'n'],
    ['n', 'o'],
    ['o', 'p'],
    ['p', 'q'],
    ['t', 'o'],
    ['r', 'q'],
    ['r', 's']
]

console.log(shortestPath(edges4, 'm', 's')) // 6