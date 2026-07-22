class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const open:string[] = []
        const pairs = {'(':')', '{':'}', '[':']'}

        for (let char of s) {
            if (char in pairs) {
                open.push(char)
            } else {
                if (pairs[open.pop()] !== char) {
                    return false
                }
            }
        }
        
        if (open.length === 0) {
            return true
        } 

        return false
    }
}
