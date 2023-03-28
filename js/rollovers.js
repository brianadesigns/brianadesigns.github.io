onload=init;

	function init(){

    // ahr
    document.getElementById("ahr").onmouseover=function(){changeimg('ahr','img/ahr-ro.png');};
		document.getElementById("ahr").onmouseout=function(){changeimg('ahr','img/ahr.png');};

		// billboard musician's friend
    document.getElementById("billboardmf").onmouseover=function(){changeimg('billboardmf','img/billboard-ro.png');};
		document.getElementById("billboardmf").onmouseout=function(){changeimg('billboardmf','img/billboard.png');};

		// don's pizza
    // document.getElementById("donspizza").onmouseover=function(){changeimg('donspizza','img/donspizza-ro.png');};
		// document.getElementById("donspizza").onmouseout=function(){changeimg('donspizza','img/donspizza.png');};

		// bcm
		// document.getElementById("bcm").onmouseover=function(){changeimg('bcm','img/bcm-ro.png');};
		// document.getElementById("bcm").onmouseout=function(){changeimg('bcm','img/bcm.png');};

		// sharp
		// document.getElementById("sharp").onmouseover=function(){changeimg('sharp','img/sharp-ro.png');};
		// document.getElementById("sharp").onmouseout=function(){changeimg('sharp','img/sharp.png');};

	}

	function changeimg(id,path){
			document.getElementById(id).src=path;
	}
