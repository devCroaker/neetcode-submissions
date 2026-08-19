class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const s1 = s.split('').sort().join()
        const t1 = t.split('').sort().join()
        return s1 == t1
    }
}
