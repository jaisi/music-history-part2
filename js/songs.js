console.log("i am here");

var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";
songs.push("Forever Young > by Rod Stewart on Souls");//add to end of array
songs.unshift("my fav song");//add to beginning of array




for (i=0; i<songs.length; i++){
	songs[i] = songs[i].replace(">","-");
	songs[i] = songs[i].replace(/[^a-zA-Z ]/g, "");
	document.getElementById("song-list").innerHTML += `<div>${songs[i]}</div><br><br>`;
	
	console.log("songs[i]",songs[i]);
}