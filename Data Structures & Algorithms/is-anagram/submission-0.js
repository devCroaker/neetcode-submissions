class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const s1 = JSON.stringify(s.split('').sort())
        const t1 = JSON.stringify(t.split('').sort())
        return s1 == t1
    }
}
