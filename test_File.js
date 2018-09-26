function createListLetters(string) {
 var letterList = [];
 letterList.push(string[0])

 for (var i = 0; i < string.length; i++) {
  //letterList.push(string[0])

  }

 return letterList;
}

console.log(createListLetters('hhhha'));


/*
function createListLetters(string) {
 var letterList = [];
 for (var i = 0; i < string.length; i++) {
   for (var j = 0; j < letterList.length; j++ ) {
     if (string[i] !== letterList[j]) {
       letterList.push(string[i]);
       console.log("letterList: ", letterList);
     }
   }
 }
 return letterList;
}

console.log(createListLetters('hatfjsgfa'));
*/


/*
function createCharList(string) {
  var newArray = []
  for()


  return newArray;
}

console.log(createCharList("lighthouse"));
*/