function isPalindrome(word) {
    for (var i = 0; i < word.length; i++){
            if(word[i] !== word[word.length - 1 - i]){
                return false
        }
    }
    return true
}

// Do not edit this line;
module.exports = isPalindrome;