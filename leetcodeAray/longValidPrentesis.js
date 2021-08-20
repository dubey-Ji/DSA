var longestValidParentheses = function(s) {
    let count = 0;
    for(let i = 0; i < s.length; i++) {
        if(s.charCodeAt(i) == 40) {

            if ((s.charCodeAt(i+1) - s.charCodeAt(i)) == 1) {
                count+=2;
            } else if((s.charCodeAt(i+3) - s.charCodeAt(i)) == 1) {
                count+=2;
            }
            continue;
        }
        if (s.charCodeAt(i) == 91) {
            if ((s.charCodeAt(i+1) - s.charCodeAt(i)) == 2) {
                count+=2;
            } else if((s.charCodeAt(i+3) - s.charCodeAt(i)) == 2) {
                count+=2;
            }
            continue;
        }
        if (s.charCodeAt(i) == 121) {
            if ((s.charCodeAt(i+1) - s.charCodeAt(i)) == 2) {
                count+=2;
            } else if((s.charCodeAt(i+3) - s.charCodeAt(i)) == 2) {
                count+=2;
            }
            continue;
        }
    }
    console.log(count);
};

longestValidParentheses("");