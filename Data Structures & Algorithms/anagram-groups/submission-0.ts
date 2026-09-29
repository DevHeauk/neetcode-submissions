

class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */ 
    groupAnagrams(strs: string[]): string[][] {

        const sortedStrs = strs.map((str) => [...str].sort().join(""));
        const groupOfStrs = new Map<string, Array<string>>();

        for (let i =0; i < strs.length;i++) {
            const sortedStr = sortedStrs[i];
            const group = groupOfStrs.get(sortedStr);

            const origin = strs[i];
            if (group != null) {
                group.push(origin); 
            }  else {
                groupOfStrs.set(sortedStr, [origin])
            } 
        }

        return [...groupOfStrs.values()];  
    }
}