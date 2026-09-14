class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        // sort, ===
        // nlogn

        // map count

        const map = new Map<string, number>;
        for (let _s of s) {
            map.set(_s, (map.get(_s)|| 0) + 1); 
        }

        for (let _t of t) {
            map.set(_t, (map.get(_t)|| 0) - 1);  
        }

        for (const [_key, val] of map) {
            if (val !== 0) {
                return false;
            } 
        }

        return true;
    }
}
