class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) return false
        let start = 0,
            end = s1.length,
            str = s1.split('').sort().join('')
        
        while (end <= s2.length) {
            const sub = s2.substring(start, end).split('').sort().join('')
            if (sub === str) return true
            start++
            end++
       }

       return false
    }
}
