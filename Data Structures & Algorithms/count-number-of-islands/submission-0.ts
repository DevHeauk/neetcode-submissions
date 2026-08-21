class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid: string[][]): number {
        function visit(x:number, y:number) { 
            grid[x][y] = "0";

            if (x > 0 && grid[x-1][y] === "1") { 
                visit(x-1,y); 
            }

            if (x < grid.length -1 && grid[x+1][y] === "1") {
                visit(x+1,y);  
            }
            
            if (y > 0 && grid[x][y-1] === "1") {
                visit(x,y-1);  
            } 

            if (y < grid[0].length -1 && grid[x][y+1] === "1") {
                visit(x,y+1);  
            } 
        }

        let count = 0;
        for (let i=0;i< grid.length;i++) {
            for (let j=0; j<grid[0].length;j++) {
                // top, bottom, left, right
                if (grid[i][j] !== "1") {
                    continue
                }

                count++;

                visit(i,j);  
            }
        }
        return count;
    }
}
