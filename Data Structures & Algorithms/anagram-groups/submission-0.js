class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const grams = {}
        const out = []
        for (let i = 0; i < strs.length; i++) {
            const str = strs[i].split('').sort().join()
            if (str in grams) {
                out[grams[str]].push(strs[i])
            } else {
                out.push([strs[i]])
                grams[str] = out.length-1
            }
        }
        return out
    }
}
