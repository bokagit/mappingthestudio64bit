var videoId = [	"KnlnB2Poxr0", 
			   	"4wb6o3QvrxY",
			  	"IQIuVqt4sj8",
			  	"1EiC9bvVGnk",
			   	"0woyfX-Mc3o"
			  ];

for (let x = 0; x < videoId.length; x++) {
    var iframeId = "thumb" + (x+3);
    document.getElementById(iframeId).src = "https://www.youtube.com/embed/" + videoId[x] + "?&autoplay=1";
}

document.getElementById("ls_embed_1573371168").src="https://livestream.com/accounts/4931571/events/5369913/player?";