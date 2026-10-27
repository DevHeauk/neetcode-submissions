class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target: number, position: number[], speed: number[]): number {
        const a : number[][] = [];

        for (let i = 0;i< position.length;i++) {
            a.push([position[i],(target - position[i]) / speed[i]]); 
        }

        const sorted = a.sort((a,b) => b[0] - a[0]);

        const stack = [];
        for (const el of sorted) {
            stack.push(el[1])  
            if (stack.length >= 2 && stack.at(-1) <= stack.at(-2)) {
                stack.pop();
            }  
        }

        return stack.length; 
    }
}
