class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */




    isPalindrome(s) {
        const scrubbed = s.toLowerCase().replaceAll(/[^a-z0-9]/g, '')
        for (let i = 0; i < scrubbed.length; i++) {
            if (scrubbed.at(i) !== scrubbed.at(scrubbed.length-i-1)) {
                return false
            }
        }
        return true

    }
}
