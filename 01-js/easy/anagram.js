/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
    str1 = str1.toLowerCase();  
    str2 = str2.toLowerCase();
    if (str1.length !== str2.length) {
        return false;
    }

    let m = new Map();
    for (let i = 0; i < str1.length; i++) {
        if (m.has(str1[i])) {
            m.set(str1[i], m.get(str1[i]) + 1);
        } else {
            m.set(str1[i], 1);
        }
    }

    for (let i = 0; i < str2.length; i++) {
        if (m.has(str2[i])) {
            m.set(str2[i], m.get(str2[i]) - 1);
        } else {
            m.set(str2[i], -1);
        }
    }

    for (let [key, value] of m) {
        if (value !== 0) {
            return false;
        }
    }
    return true;

}

module.exports = isAnagram;
