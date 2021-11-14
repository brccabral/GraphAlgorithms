// W = water
// L = Land
// count the groups of Lands (islands)

const islandCount = (grid) => {
    const visited = new Set();
    let count = 0;

    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[r].length; c++) {
            // returns true if it is Land
            if (explore(grid, r, c, visited) === true) {
                count++;
            }
        }
    }

    return count;
}
/**
 * 
 * @param {Array<Array<string>>} grid 
 * @param {number} r 
 * @param {number} c 
 * @param {Set<string>} visited 
 * @returns {boolean}
 */
const explore = (grid, r, c, visited) => {
    // check if inside grid
    const rowInbounds = 0 <= r && r < grid.length;
    if (!rowInbounds) return false;
    const colInbounds = 0 <= c && c < grid[r].length;
    if (!colInbounds) return false;

    // check if hit Water
    if (grid[r][c] === 'W') return false;

    // check and set visited
    const pos = r + ',' + c; // Set() needs primitive types
    if (visited.has(pos)) return false;
    visited.add(pos)

    // recursive
    explore(grid, r - 1, c, visited); // up
    explore(grid, r + 1, c, visited); // down
    explore(grid, r, c + 1, visited); // right
    explore(grid, r, c - 1, visited); // left

    return true; // it is not an Water, it must be Land
}

const grid1 = [
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'L', 'W'],
    ['W', 'W', 'L', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['L', 'L', 'W', 'W', 'W'],
];

console.log(islandCount(grid1)); // 3

const grid2 = [
    ['L', 'W', 'W', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['W', 'L', 'W', 'L', 'W'],
    ['W', 'W', 'W', 'W', 'W'],
    ['W', 'W', 'L', 'L', 'L'],
];

console.log(islandCount(grid2)); // 4


const grid3 = [
    ['L', 'L', 'L'],
    ['L', 'L', 'L'],
    ['L', 'L', 'L'],
];

console.log(islandCount(grid3)); // 1

const grid4 = [
    ['W', 'W'],
    ['W', 'W'],
    ['W', 'W'],
];

console.log(islandCount(grid4)); // 0