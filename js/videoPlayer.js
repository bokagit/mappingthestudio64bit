var videoId = [	"huEcPtSsdLc", 
			   	"4wb6o3QvrxY",
			  	"IQIuVqt4sj8",
			  	"1EiC9bvVGnk",
			   	"P4tcVYgdgos"
			  ];

for (let x = 0; x < videoId.length; x++) {
    var iframeId = "thumb" + (x+3);
    document.getElementById(iframeId).src = "https://www.youtube.com/embed/" + videoId[x] + "?&autoplay=1";
}

document.getElementById("ls_embed_1573371168").src="https://livestream.com/accounts/4931571/events/5369913/player?";