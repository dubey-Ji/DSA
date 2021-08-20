/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let ar = [];
    let len = 1;
    let str = [];
    for(let i=0; i<s.length; i++) {
        str.push(s[i]);
    }
    ar.push(str[0]);
    for(let i = 1 ; i < str.length ; i++){
        if(ar[len - 1] === '('){
            if(str[i] === ')'){
                ar.pop();
                len-- ;
            }
            else{
                ar.push(str[i]);
                len++;
            }
        }
        else if(ar[len - 1] === '['){
            if(str[i] === ']'){
                ar.pop();
                len--;   
            }
            else{
                ar.push(str[i]);
                len++;
            }
        }
        else if(ar[len - 1] === '{'){
            if(str[i] === '}'){
                ar.pop();
                len--;  
            }
            else{
                ar.push(str[i]);
                len++;
            }
        }else{
            ar.push(str[i]);
            len++;
        }
    }
    if(len == 0){
       return true; 
    } else 
        return false;
    
}