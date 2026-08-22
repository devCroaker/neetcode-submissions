class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const chars = new Map()
        let start = 0,
            max = 0

        for (let i = 0; i < s.length; i++) {
            const char = s.at(i)
            if (chars.has(char) && chars.get(char) >= start) {
                start = chars.get(char) +1
            }
            chars.set(char, i)
            max = Math.max(max, i-start+1)
        }

        return max
    }
}
