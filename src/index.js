module.exports = function check(str, bracketsConfig) {

  let bracketsConfigModified = bracketsConfig.map(function(array){
    let stringFromArray = array[0] + array[1];
    return stringFromArray;
});
console.log(bracketsConfigModified);

while (bracketsConfigModified.some(elem => str.indexOf(elem) >= 0)) {
    for (i = 0; i <= bracketsConfigModified.length - 1; i += 1) {
        while (str.indexOf(bracketsConfigModified[i]) >= 0) {
            str = str.replace(bracketsConfigModified[i], '');
        }
    }
}

if (str.length === 0) {
    return true;
} else {
    return false;
}
}

