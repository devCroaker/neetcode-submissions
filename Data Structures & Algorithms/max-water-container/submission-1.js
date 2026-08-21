class Solution {
    /**
     * @param {number[]} h
     * @return {number}
     */
    maxArea(h) {
        let l = 0,
            r = h.length-1,
            max = r * Math.min(h[l], h[r])

        while (l < r) {
            if ( h[l] < h[r] ) l++
            else r--

            const curr = (r-l) * Math.min(h[l], h[r])
            if (curr > max) max = curr
        }

        return max
    }
}
