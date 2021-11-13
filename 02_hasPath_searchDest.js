// depth search
// not cyclic - doesn't deal with infinity loop
const hasPath_depth_notcyclic = (graph, src, dst) => {
    if (src === dst) return true;
    for(let neighbor of graph[src]){
        if(hasPath_depth_notcyclic(graph, neighbor, dst)===true){
            return true
        }
    }
    return false;
}

const hasPath_breath_notcyclic = (graph, src, dst) => {
    const queue = [src];

    while(queue.length > 0){
        const current = queue.shift();
        if(current === dst) return true;

        for(let neighbor of graph[current]){
            queue.push(neighbor);
        }
    }

    return false;
}

const graph = {
    f: ['g', 'i'],
    g: ['h'],
    h: [],
    i: ['g','k'],
    j: ['i'],
    k: []
}

console.log(hasPath_depth_notcyclic(graph, 'j', 'f'));
console.log(hasPath_depth_notcyclic(graph, 'f', 'k'));
console.log('');
console.log(hasPath_breath_notcyclic(graph, 'j', 'f'));
console.log(hasPath_breath_notcyclic(graph, 'f', 'k'));
