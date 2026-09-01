class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let left =0, right = s.length-1

        while (left < right) {
            while(!this.isAlphaNum(s[left]) && left < right) {
                left++;
            }

            while(!this.isAlphaNum(s[right]) && left < right) {
                right--;
            }
 
            if (this.toLower((s[left])) !== this.toLower(s[right])) {
               return false
            }

            left++;
            right--;  
        }

        return true; 
    }

    isAlphaNum(c:string) {
      const code = c.charCodeAt(0);
      return (code >= 48 && code <= 57) ||   // 0-9
             (code >= 65 && code <= 90) ||   // A-Z
             (code >= 97 && code <= 122);    // a-z
    }

    toLower(c:string) {
      const code = c.charCodeAt(0);
      return code >= 65 && code <= 90 ? code + 32 : code;
    }
}
