//进度条ID
var numid = "loginnum";
var totaljidu=0;
var time=null;
var tatolnum=0;
function aa(loadingnum2,num) {
	if(totaljidu>=tatolnum)
	{
		clearInterval(time);
		return;
	}
    if (loadingnum2 < num) {
	   clearInterval(time);
       time= setInterval(function () {

            loadingnum2++;
			totaljidu=loadingnum2;

            if (loadingnum2>=tatolnum)
            {
				document.getElementById(numid).innerHTML = "100%";
				
             	setTimeout(function(){
					 document.getElementById(numid).innerHTML = "加载完毕";
					 overload();
				},300)	
            }
            else
            {
                document.getElementById(numid).innerHTML = loadingnum2 + "%";
            }
			
			if(loadingnum2>=num)
		   {
				clearInterval(time);
				return;
			}


        }, 10)
    }
}
//图片预加载
function loadImages(sources, callback) {
	var count = 0,
	images = {},
	imgNum = 0;
	for (src in sources) {
		imgNum++;
	}
    //数组长度
	var listlength=sources.length;
    //完成数量
    var loadingnum=0;
    var nextloadingnum=0;
    //完成一个加载数量
   var unum= parseInt(100/listlength);

   tatolnum=unum*listlength;
   //alert(unum);
   var timer=null;
	for (src in sources) {
		images[src] = new Image();
		
		images[src].onload = function () {
			
		    nextloadingnum += unum;

		    if (nextloadingnum <= tatolnum) {
				
		        aa(loadingnum, nextloadingnum);

                line.style.width = 2.5*loadingnum + "px";
		    }
		    else {
		        aa(loadingnum, tatolnum);
				callback(images);
				return ;
		    }
		
		    if (++count >= imgNum) {
			
				callback(images);
		       
		    }

			loadingnum=nextloadingnum;

		}

		images[src].src = sources[src];
	}
}

loadImages([
		
        "images/h_left.jpg",
        "images/banner/0.png",
        "images/banner/1.png",
        "images/banner/2.png",
        "images/banner/3.png",
        "images/banner/4.png",
        "images/banner/5.png",
        "images/banner/6.png",
        "images/banner/7.png",
        "images/banner/8.png",
        "images/banner/banner01.jpg",
        "images/banner/cell.png",
        "images/banner/id.png",
        "images/banner/mac.png",
        "images/banner/pad.png",
        "images/about/about_img2.jpg",
        "images/about/about_pic.jpg",
        "images/work/1.png",
        "images/work/2.png",
        "images/work/3.png",
        "images/work/4.png",
        "images/work/5.png",
        "images/work/e1.png",
        "images/work/e2.png",
        "images/work/e3.png",
        "images/work/e4.png",
        "images/work/e5.png",
        "images/work/e6.png",
        "images/work/e7.png",
        "images/work/e8.png",
        "images/work/w1.png",
        "images/work/w2.png",
        "images/work/w3.png",
        "images/work/w4.png",
        "images/work/w5.png",
        "images/work/w6.png",
        "images/work/w7.png",
        "images/work/w8.png",
        "images/about/c_bg.jpg",
        "images/contact_img.png"	
		
],
function() {
	//回调方法
 
});

function overload(){
	
	//loadDiv.style.display = "none";
    fadeInOut(loadDiv,-5,100,0,function(){
        loadDiv.style.display = "none";
        document.body.style.paddingTop='0';
    });
}
