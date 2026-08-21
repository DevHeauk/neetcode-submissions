class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid: string[][]): number {
        const dirs = [[0, -1], [0, 1], [-1, 0], [1,0]];
        const rows = grid.length, cols = grid[0].length; 
        let count = 0;

        for (let i=0; i < rows; i++) {
            for (let j=0; j < cols; j++) {
                if (grid[i][j] !== "1") {
                    continue;
                }  
                grid[i][j] = "0";
                count++;

                const queue = [[i,j]];

                for (let head = 0; head < queue.length; head++) {
                    const [x,y] = queue[head];
                    for (let [dx,dy] of dirs) {
                        const nx = x + dx, ny = y + dy;
                        if (nx < 0 || nx >= rows || ny < 0 || ny > cols) continue;
                        if (grid[nx][ny] !== "1") continue

                        grid[nx][ny] = "0";
                        queue.push([nx,ny]) 
                    } 
                } 
            } 
        } 
        return count;
    }
}
