class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
   maxAreaOfIsland(grid: number[][]): number {
    const rows = grid.length, cols = grid[0].length;
    const dirs = [[0,-1], [0,1], [-1,0], [1,0]];
    let maxCount =0;

    for (let i =0; i < rows; i++) {
        for (let j=0;j < cols; j++) {
            if (grid[i][j] !== 1) {
                continue;
            }
            grid[i][j] = 0

            const stack = [[j,i]]

            let count = 0;
            while (stack.length > 0) {     
                const [x,y] = stack.pop()
                count++;
                for (let [dx, dy] of dirs) {
                    const nx = x + dx, ny = y + dy;
                    if (nx < 0 || nx >= cols || ny < 0 || ny >= rows) continue
                    if (grid[ny][nx] !== 1) continue
                    grid[ny][nx] = 0

                    stack.push([nx,ny]); 
                }   
            } 
            maxCount = Math.max(count, maxCount)
        }
    }

    return maxCount;
   }
}
