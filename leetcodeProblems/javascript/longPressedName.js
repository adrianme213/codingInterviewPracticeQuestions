/*
Your friend is typing his name into a keyboard.  Sometimes, when typing a character c, the key might get long pressed, and the character will be typed 1 or more times.
You examine the typed characters of the keyboard.  Return True if it is possible that it was your friends name, with some characters (possibly none) being long pressed.

Example 1:

Input: name = "alex", typed = "aaleex"
Output: true
Explanation: 'a' and 'e' in 'alex' were long pressed.

Example 2:

Input: name = "saeed", typed = "ssaaedd"
Output: false
Explanation: 'e' must have been pressed twice, but it wasn't in the typed output.

Example 3:

Input: name = "leelee", typed = "lleeelee"
Output: true

Example 4:

Input: name = "laiden", typed = "laiden"
Output: true
Explanation: It's not necessary to long press any character.

Constraints:

    1 <= name.length <= 1000
    1 <= typed.length <= 1000
    The characters of name and typed are lowercase letters.

*/
/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
    let p1 = 0;
    let p2 = 0;
    while(p1 < name.length && p2 < typed.length) {
        if(name[p1] === typed[p2]) {
            p1++;
            p2++;
        } else if(p1 > 0 && typed[p2] === name[p1-1]) {
            p2++;
        } else {
            return false;
        }
    }
    
    if(p1 === name.length && p2 === typed.length) {
        return true;
    } else if (p1 < name.length) return false;
    else {
        while(p2 < typed.length) {
            if(typed[p2] !== name[name.length-1]) return false;
            p2++;
        }
    }
    
    return true;
};