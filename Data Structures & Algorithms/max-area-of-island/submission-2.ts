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
                const [c,r] = stack.pop()
                count++;
                for (let [dc, dr] of dirs) {
                    const nc = c + dc, nr = r + dr;
                    if (nc < 0 || nc >= cols || nr < 0 || nr >= rows) continue
                    if (grid[nr][nc] !== 1) continue
                    grid[nr][nc] = 0

                    stack.push([nc,nr]); 
                }   
            } 
            maxCount = Math.max(count, maxCount)
        }
    }

    return maxCount;
   }
}
