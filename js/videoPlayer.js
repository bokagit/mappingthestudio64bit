var videoId = [	"KnlnB2Poxr0", 
			   	"4wb6o3QvrxY",
			  	"Zedu0ddRlDU",
			  	"1EiC9bvVGnk",
			   	"AttVS4KM8tY"
			  ];

for (let x = 0; x < videoId.length; x++) {
    var iframeId = "thumb" + (x+3);
    document.getElementById(iframeId).src = "https://www.youtube.com/embed/" + videoId[x] + "?&autoplay=1";
}

document.getElementById("ls_embed_1573371168").src="https://player.vimeo.com/video/1097394386?";