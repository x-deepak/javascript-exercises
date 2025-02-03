const removeFromArray = function(array, ...argsArray) {
    for(const element of argsArray){
        let elementIndex = array.indexOf(element);
        while(elementIndex>=0){
            array.splice(elementIndex, 1);
            elementIndex = array.indexOf(element);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
