const depthFirstPrint = (graph, source) => {
    // follow the graph in one direction until it reaches
    // a dead end, then, go back and do the same for each
    // neighbor. It works as a stack.
    const stack = [ source ];
    while (stack.length > 0){
        const current = stack.pop();
        console.log(current);

        for (let neighbor of graph[current]){
            stack.push(neighbor);
        }
    }
}

const depthFirstPrintRecursive = (graph, source) => {
    // same as above, but recursive
    console.log(source);
    for (let neighbor of graph[source]){
        depthFirstPrintRecursive(graph, neighbor);
    }
}

const breathFirstPrint = (graph, source) => {
    // prints the source and the neighbors first, 
    // and then continues to the next iteration of 
    // each neighbor. It works as a queue
    const stack = [ source ];
    while (stack.length > 0){
        const current = stack.shift();
        console.log(current);

        for (let neighbor of graph[current]){
            stack.push(neighbor);
        }
    }
}

const graph = {
    a: ['c', 'b'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
}

depthFirstPrint(graph, 'a');
console.log('')
console.log('')

depthFirstPrintRecursive(graph, 'a');
console.log('')
console.log('')

breathFirstPrint(graph, 'a');