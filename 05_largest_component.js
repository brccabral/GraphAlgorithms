const largestComponent = (graph) => {
    const visited = new Set();
    let longest = 0;
    for (let node in graph) {
        const size = exploreSize(graph, node, visited);
        if(size > longest) longest = size;
    }
    return longest;
}

const exploreSize = (graph, current, visited) => {
    if (visited.has(String(current))) return 0;
    visited.add(String(current));

    let size = 1;
    for (let neighbor of graph[current]) {
        size += exploreSize(graph, neighbor, visited);
    }
    return size;
}

const graph1 = {
    0: [8,1,5],
    1: [0],
    5: [0, 8],
    8: [0, 5],
    2: [3, 4],
    3: [2, 4],
    4: [3, 2]
}
console.log(largestComponent(graph1)) // 4

const graph2 = {
    1: [2],
    2: [1, 8],
    6: [7],
    9: [8],
    7: [6, 8],
    8: [9, 7, 2]
}
console.log(largestComponent(graph2)) // 6