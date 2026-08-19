class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let vals = new Set()
        let hasDupes = false
        for (let i = 0; i < nums.length; i++) {
            if(vals.has(nums[i])) {
                hasDupes = true
                break
            }
            vals.add(nums[i])
        }
        return hasDupes
    }
}
