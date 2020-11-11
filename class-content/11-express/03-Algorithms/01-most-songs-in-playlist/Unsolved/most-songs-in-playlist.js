// Write code to create a function that accepts an array of numbers
// Each number represents the duration of a song in minutes
// Return the maximum number of songs from the list that can fit in a 60 minute playlist

var mostSongsInPlaylist = function(arr) {
  // add your code here...
  for(let song = 0; song < arr.length -1; song ++){
    for(let i =song+1; i < arr.length; i++){
      if(arr[song] > arr[i]){
        tempSongHolder = arr[song];
        arr[song] = arr[i];
        arr[i] = tempSongHolder;
        
      };
    };
  };

  let sum;
  for(let k = 0; k < arr.length; k++){
    if(sum >= 60){return k};
    sum+= arr[k];
  }
};
const test =[
  3,
  5,
  7,
  2,
  1,
  4,
  8,
  5,
  3,
  2,
  2,
  1,
  5,
  7,
  4,
  2,
  3,
  1,
  3,
  4,
  7,
  8,
  8,
  2
];

mostSongsInPlaylist(test);
