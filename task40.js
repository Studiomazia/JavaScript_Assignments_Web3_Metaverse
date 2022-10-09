// JS Task No 40

// Album: Write a function called make_album() that builds a Object describing a music album. The function should
// take in an artist name and an album title, and it should return a Object containing these two pieces of information.
// Use the function to make three dictionaries representing different albums. Print each return value to show that Objects
// are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the
// number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the
// album’s Object. Make at least one new function call that includes the number of tracks on an album.

// function make_album(text){
//     return {artistName, albumTile}
//     console.log(text);
//     console.log(typeOftext);

// }
// make_album("saddam","Wah bhai wah");
function make_album(text){
var album_details = {
  artisti: "David",
  title: "True Love",
  tracks:07,
  details: function () {
    return this.artisti + " has released the Album " + this.title;
  },
};

console.log(album_details.details());
console.log("which has total "+album_details.tracks+" tracks.");

}
make_album();
