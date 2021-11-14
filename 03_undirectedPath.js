const undirectedPath = (edges, nodeA, nodeB) => {
    // converting edges to adjancy
    const graph = buildGraph(edges);
    return hasPath_depth_preventCyclic(graph, nodeA, nodeB, new Set());
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

const hasPath_depth_preventCyclic = (graph, src, dst, visited) => {
    if (src === dst) return true;
    if (visited.has(src)) return false;
    visited.add(src);
    for(let neighbor of graph[src]){
        if(hasPath_depth_preventCyclic(graph, neighbor, dst, visited)===true){
            return true
        }
    }
    return false;
}

const edges1 = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n'],
]

console.log(undirectedPath(edges1, 'j', 'm')); // true
console.log(undirectedPath(edges1, 'm', 'j')); // true
console.log(undirectedPath(edges1, 'l', 'j')); // true
console.log(undirectedPath(edges1, 'k', 'o')); // false
console.log(undirectedPath(edges1, 'i', 'o')); // false

const edges2 = [
    ['b', 'a'],
    ['c', 'a'],
    ['b', 'c'],
    ['q', 'r'],
    ['q', 's'],
    ['q', 'u'],
    ['q', 't'],
  ];

console.log('')
console.log('')
console.log(undirectedPath(edges2, 'a', 'b')); // true
console.log(undirectedPath(edges2, 'a', 'c')); // true
console.log(undirectedPath(edges2, 'r', 't')); // true
console.log(undirectedPath(edges2, 'r', 'b')); // false
  