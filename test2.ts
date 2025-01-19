var longestCommonPrefix = function(strs) {
    const firstStr = strs[0];
    let result = '';

    for (let i = 0; i < firstStr.length; i += 1) {
        const currentChar = firstStr.charAt(i);
        for (let j = 1; j < strs.length; j += 1) {
            const str = strs[j];
            if (str.charAt(i) !== currentChar.charAt(i)) {
                return result;
            }
        }
        result += currentChar;
    }
    return result;
};
