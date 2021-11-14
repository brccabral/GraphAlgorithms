const minimumIsland = (grid) => {
    const visited = new Set();
    let minimumSize = Infinity;

    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[r].length; c++) {
            const size = exploreSize(grid, r, c, visited);
            if (size < minimumSize && size > 0) minimumSize = size;
        }
    }

    return minimumSize;
};

/**
 * 
 * @param {Array<Array<string>>} grid 
 * @param {number} r 
 * @param {number} c 
 * @param {Set<string>} visited 
 * @returns {number}
 * 
 */
const exploreSize = (grid, r, c, visited) => {
    const rowInbounds = 0 <= r && r < grid.length;
    if (!rowInbounds) return 0;
    const colInbounds = 0 <= c && c < grid[r].length;
    if (!colInbounds) return 0;

    if (grid[r][c] === 'W') return 0;

    const pos = r + ',' + c;
    if (visited.has(pos)) return 0;
    visited.add(pos)

    let size = 1;
    size += exploreSize(grid, r - 1, c, visited); // up
    size += exploreSize(grid, r + 1, c, visited); // down
    size += exploreSize(grid, r, c + 1, visited); // right
    size += exploreSize(grid, r, c - 1, visited); // left

    return size;
}

const grid1 = [
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'L', 'W'],
    ['W', 'W', 'L', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['L', 'L', 'W', 'W', 'W'],
];

console.log(minimumIsland(grid1)); // 2


const grid2 = [
    ['L', 'W', 'W', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['W', 'L', 'W', 'L', 'W'],
    ['W', 'W', 'W', 'W', 'W'],
    ['W', 'W', 'L', 'L', 'L'],
];

console.log(minimumIsland(grid2)); // 1

const grid3 = [
    ['L', 'L', 'L'],
    ['L', 'L', 'L'],
    ['L', 'L', 'L'],
];

console.log(minimumIsland(grid3)); // 9

const grid4 = [
    ['W', 'W'],
    ['L', 'L'],
    ['W', 'W'],
    ['W', 'L']
];

console.log(minimumIsland(grid4)); // 1
