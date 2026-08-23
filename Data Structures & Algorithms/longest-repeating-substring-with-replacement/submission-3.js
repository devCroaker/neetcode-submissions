class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const seenCounts = new Map()
        let left = 0,
            maxCount = 0,
            len = 0

        for (let right = 0; right < s.length; right++) {
            const char = s[right]
            seenCounts.set(char, (seenCounts.get(char) || 0) + 1)

            maxCount = Math.max(maxCount, seenCounts.get(char))

            while ((right - left + 1) - maxCount > k) {
                const leftChar = s[left];
                seenCounts.set(leftChar, seenCounts.get(leftChar) - 1);
                left++;
            }

            len = Math.max(len, right - left + 1)

        }

        return len
    }
}
