class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const counts = []
        const countIdxMap = {}
        nums.forEach(num => {
            if ( num in countIdxMap) {
                counts[countIdxMap[num]][1]++
            } else {
                counts.push([num, 1])
                countIdxMap[num] = counts.length-1
            }
        })
    
        return counts.sort((a,b) => b[1] - a[1]).slice(0,k).map(datum => datum[0])
    }
}
