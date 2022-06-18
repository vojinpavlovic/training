/*
  Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
  
  An input string is valid if:
    - Open brackets must be closed by the same type of brackets.
    - Open brackets must be closed in the correct order.
    
 Examples: 
    Input: s = "()"
    Output: true
    
    Input: s = "()[]{}"
    Output: true
    
    Input: s = "(]"
    Output: false
    
 Constraints
    - 1 <= s.length <= 10^4
    - s consits of parantheses only '()[]{}'
*/

/**
 * @param {string} s
 * @return {boolean}
 */

const openings = ['(', '{', '[']
const closes = [')', '}', ']']

var isValid = function(s) {
    if (0 > s.length && s.length > 10000) {
        return false
    }
    
    if (s.length % 2 != 0) {
        return false
    }
    
    var i = 0
    
    while (i < s.length) {
        const open = s[i]
        const closed = s[i+1]
        
        if (!openings.includes(open)) {
            return false
        }
        
        const index = openings.indexOf(open)
        
        if (closes[index] !== closed) {
            return false
        }
        
        i = i + 2 
    }
    
    return true
};
