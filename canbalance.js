
module.exports = function canBalance(array){
    for(var i = 0; i < array.length; i++){
        var sum_left = 0, sum_right = 0;

        for(var j = 0; j < i; j++)
            sum_left+=array[j];
        for(var j = i; j < array.length; j++)
            sum_right+=array[j];

        if (sum_left == sum_right)
            return true;
    }
    return false;
};