var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"],
                    }
             }
}





// adds an existing track to an existing playlist


var addTrackToPlaylist = function (trackId, playlistId) {
  library.playlists[playlistId].tracks.push(trackId);
  return library.playlists;
}

//console.log(addTrackToPlaylist('t03', 'p02'));




library.tracks['testKey'] = 'testValue';

console.log(library);

/*
var addTrackToPlaylist = function (trackId) {
  library.playlists.p02.tracks.push(trackId);
  console.log(library.playlists);
}

console.log(addTrackToPlaylist('t03'));
*/
/*
var addTrackToPlaylist = function (trackId, playlistId) {
  //var newPlaylist = Object.assign({}, library.playlists);
  //console.log("newPlayList.playlistId: ", newPlaylist[playlistId]);
  //newPlaylist[playlistId].tracks.push(trackId);
}

console.log(addTrackToPlaylist('t03', 'p01'));
*/
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