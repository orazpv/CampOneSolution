"Use Strict";
var test = "Mine";

for (var i = 0; i < 10; i++) {
    test += i;
}
alert(test);
function FirstFactorial(num) {
    "Use Strict";
    // code goes here
    var mysum = 1;
    for (var i = 1; i < num + 1; i++) {
        mysum = mysum * i;
    }
    return mysum;

}

function LongestWord(sen) {

    // Use RegExp to make sure its a valid word A-Z
    var epathern = /^[a-zA-Z]+$/;
    var maxWord = "";
    //split the string into array
    sen = sen.split(" ");
    for (var i = 0; i < sen.length; i++) {
        if (epathern.test(sen[i])) {
            //check if its the highest
            if (maxWord.length < sen[i].length) {
                maxWord = sen[i];
            }
        }
    }
    if (maxWord === "") {
        maxWord = "No valid Word";
    }
    return maxWord;
}