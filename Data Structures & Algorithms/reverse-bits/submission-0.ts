class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number} - a positive integer
     */
    reverseBits(n: number): number {
        let result = 0; 
        for (let i =0; i<=31;i++) {
            const copy = n;
            const bit = (copy >> i) & 1;
            result = result | (bit << (31-i)) 
        }

        return result >>> 0;
    }
}