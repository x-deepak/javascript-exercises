const sumAll = function(start, end) {
    function checknum(num){
        if (typeof num === 'number' && Number.isInteger(num)) return true;
        return false;
    }
    if (!checknum(start) || !checknum(end)) return "ERROR";
    if (start>end){
        let temp = start;
        start = end;
        end = temp;
    }
    if (start<0) return "ERROR";
    let ans = 0;
    for(let i=start; i<=end; i++) ans+=i;
    return ans;
};

// Do not edit below this line
module.exports = sumAll;
