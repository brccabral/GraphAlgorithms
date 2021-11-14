const connectedComponentsCount = (graph) => {
    const visited = new Set();
    let count = 0;
    for (let node in graph) { // in for objects
        // do a depth first reversal as far as possible
        if(explore(graph, node, visited) === true){
            count += 1;
        }
    }

    return count;
}

const explore = (graph, current, visited) => {
    // do a depth first reversal as far as possible
    if (visited.has(String(current))) return false;
    visited.add(String(current));

    for (let neighbor of graph[current]) { // of for arrays
        explore(graph, neighbor, visited);
    }
    // all neighbors have been marked as visited
    return true;
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
console.log(connectedComponentsCount(graph1)) // 2

const graph2 = {
    1: [2],
    2: [1, 8],
    6: [7],
    9: [8],
    7: [6, 8],
    8: [9, 7, 2]
}
console.log(connectedComponentsCount(graph2)) // 1