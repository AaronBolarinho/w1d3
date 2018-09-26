function uniqueLetters(string) {
  var letterList = [];
  for (var i = 0; i < string.length; i++) {
    var exists = false;
    for (var j = 0; j < letterList.length; j++ ) {
      if (string[i] === letterList[j]) {
        exists = true;
      }
    }
    if (string[i] !== ' ' && !exists) {
        letterList.push(string[i]);
    }
  }
  return letterList;
}

function letterCount(listUniqueLetters, string) {
  var lettersPos = [];
  for (var i = 0; i < listUniqueLetters.length; i++) {
    var listPos = [];
    for (var j = 0; j < string.length; j++) {
      if (listUniqueLetters[i] === string[j]) {
          listPos.push(j);
      }
    }
    lettersPos.push(listPos);
  }
  return lettersPos;
}

function zip(keys, values) {
  var output = {};
  for(var i = 0; i < keys.length; i++) {
    output[keys[i]] = values [i];
  }
  return output;
}

function countPosition(string) {
  var listUniqueLetters = uniqueLetters(string);
  var countLettersList = letterCount(listUniqueLetters, string);
  var stringObj = zip (listUniqueLetters, countLettersList);
  return stringObj;
}

console.log(countPosition('lighthouse in the house'));

/*
function createListLetters(string) {
  var string1 = string.split(' ').join("");
  var letterList = [];
  letterList.push(string1[0]);
  for (var i = 1; i < string1.length; i++) {
    var exists = false;
    for (var j = 0; j < letterList.length; j++ ) {
      if (string1[i] === letterList[j]) {
        exists = true;
      }
    }
    if (!exists) {
      letterList.push(string1[i]);
    }
  }
  return letterList;
}

function letterCount(listUniqueLetters, string) {
  var lettersPos = [];
  for (var i = 0; i < listUniqueLetters.length; i++) {
    var listPos = [];
    for (var j = 0; j < string.length; j++) {
      if (listUniqueLetters[i] === string[j]) {
          listPos.push(j);
      }
    }
    lettersPos.push(listPos);
  }
  return lettersPos;
}

function zip(keys, values) {
  var output = {};
  for(var i = 0; i < keys.length; i++) {
    output[keys[i]] = values [i];
  }
  return output;
}

function countLetters(string) {
  var listUniqueLetters = createListLetters(string);
  var countLettersList = letterCount(listUniqueLetters, string);
  var stringObj = zip (listUniqueLetters, countLettersList);
  return stringObj;
}

console.log(countLetters('lighthouse in the house'));
*/