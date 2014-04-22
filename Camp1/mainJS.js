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
    //Return 
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

function LetterChanges(str) {

    var newstr = "";
    var word = "";
    var validletter = /^[a-zA-Z]+$/;


    for (var i = 0; i < str.length; i++) { //Get all the letters
        if (!validletter.test(str[i])) { //check for valid letters
            newstr = str[i];             //takes care of numbers and spaces and special char
        } else if (str[i] === 'z' || str[i] === 'Z') { //converts z to a (both cases)
            newstr = String.fromCharCode(str[i].charCodeAt(0));
        } else {
            newstr = String.fromCharCode(str[i].charCodeAt(0) + 1); //do other letters
        }
        //Do vowels
        if (newstr === 'a' || newstr === 'e' || newstr === 'o' || newstr === 'u') {
            newstr = newstr.toUpperCase();
        }
        word = word + newstr; //all to the entire string
    }

    return word;

}