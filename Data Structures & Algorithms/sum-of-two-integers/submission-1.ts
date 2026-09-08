class Solution {
    /**
     * @param {number} a
     * @param {number} b
     * @return {number}
     */
    getSum(a: number, b: number): number {  
        let x  = a ^ b;
        let y = (a & b) << 1;
        while (y !== 0) {
            const _x = x ^ y
            const _y = (x & y) << 1;
            x = _x;
            y = _y; 
        }  

        return x; 
    }
}
