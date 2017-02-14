var oNav = document.getElementById("nav");//导航  
var aLink = oNav.getElementsByTagName("a");
var aSpan = oNav.getElementsByTagName("span");
var num = 0;
var Wrap = document.getElementById("wrap");
var Main = document.getElementById("main");
var Banner = document.getElementById("banner");
var Works = document.getElementById("works");
var About = document.getElementById("about");
var Contact = document.getElementById("contact");
var loadDiv = document.getElementById("loadDiv");
var line = document.getElementById("line");

var child = Main.children;

window.onresize = function(){

    var hr = document.documentElement.clientHeight;
    var h = hr - 76;
    var w = document.documentElement.clientWidth;
    Wrap.style.height = h + "px";

    for(var i=0; i<child.length; i++){
        child[i].style.height = h + "px";
    }

}

var hr = document.documentElement.clientHeight;
var h = hr - 76;
var w = document.documentElement.clientWidth;

Wrap.style.height = h + "px"; 
loadDiv.style.height = hr + "px"; 

for(var i=0; i<child.length; i++){
    child[i].style.height = h + "px";
}

var onOff = true;

//导航

aLink[0].getElementsByTagName('span')[0].style.top = "-30px";
aLink[0].style.color = "yellow";

for(var i=0; i<aLink.length; i++){
    aLink[i].index = i;
    aLink[i].onmouseover = function(){

        for(var i=0; i<aSpan.length; i++){
            doMove(aSpan[i],"top",3,0);
            aLink[i].style.color = "white";
        }
        
        doMove(aSpan[this.index],"top",3,-30);
        aLink[this.index].style.color = "yellow";

    }

    aLink[i].onmouseout = function(){
  
        doMove(aSpan[this.index],"top",3,0);
        doMove(aSpan[num],"top",3,-30);
        aLink[this.index].style.color = "white";
        aLink[num].style.color = "yellow";

    }

    aLink[i].onclick = function(){
        
        num = this.index;
        doMove(aSpan[num],"top",3,-30);
        aLink[this.index].style.color = "yellow";

        doMove(Main,"top",30,-num*h,function(){

            if(num==1){

                setTimeout(function(){
                    worksfn(aList,"span");
                    worksfn(aList1,"p");
                },100)  
            }

            else{
                setTimeout(function(){  
                    worksfn1(aList);
                    worksfn1(aList1);
                },100)
            }

            num == 2 ? setTimeout(about,100) : about_no();

            num == 3 ? setTimeout(conFn,100) : conFn_no(); 
        });

    
    }

}


//导航

//键盘事件
document.onkeydown = function(ev){
    var ev = ev || event, key = ev.keyCode;

    if(!onOff) return;
    onOff = false;

    if(key==40){
        num++;
        if(num>aLink.length-1)num=aLink.length-1;
    }
    if(key==38){
        num--;
        if(num<0)num=0;
    }

    move();

}


//鼠标滚轮事件
document.onmousewheel = fnScroll;
document.addEventListener("DOMMouseScroll",fnScroll,false);
var b = true;

function fnScroll(ev){

    var ev = ev || event;

    if(ev.wheelDelta){
        b = ev.wheelDelta > 0 ? true : false ;
    }
    else{
        b = ev.detail > 0 ? false : true ;
    }

    if(!onOff) return;
    onOff = false;

    if(b){
        num--;
        if(num<0)num=0;
    }
    else{
        num++;
        if(num>aLink.length-1)num=aLink.length-1;
        
    }

    move();
}


function move(){

    for(var i=0; i<aSpan.length; i++){
        doMove(aSpan[i],"top",3,0);
        aLink[i].style.color = "white";
    }

    doMove(Main,"top",20,-num*h,function(){

        onOff = true;

        if(num==1){
            setTimeout(function(){
                worksfn(aList,"span");
                worksfn(aList1,"p");
            },100)  
        }
        else{
            setTimeout(function(){
                worksfn1(aList);
                worksfn1(aList1);
            },100)
        }

        num == 2 ? setTimeout(about,100) : about_no();
        num == 3 ? setTimeout(conFn,100) : conFn_no(); 

    });

    doMove(aSpan[num],"top",3,-30);
    aLink[num].style.color = "yellow";


}

//banner
var scroll = document.getElementById("scroll");
var aDiv = scroll.getElementsByTagName("div");
var aImg1 = aDiv[0].getElementsByTagName("img")
var btns = document.getElementById("btns");
var aBtns = btns.getElementsByTagName("a");
var aNav = sideNav.getElementsByTagName("a");
var imgSrc1 = ["images/arrow_l.png","images/arrow_r.png"];
var imgSrc2 = ["images/arrow_l1.png","images/arrow_r1.png"];
var next = 0;
var oYes = true;

for(var i=0; i<aBtns.length; i++){
    aBtns[i].index = i;
    aBtns[i].onmouseover = function(){
        this.getElementsByTagName("img")[0].src = imgSrc2[this.index]
    }

    aBtns[i].onmouseout = function(){
        this.getElementsByTagName("img")[0].src = imgSrc1[this.index]
    }
}

function auto(){
    clearInterval(banner.timer)
    banner.timer = setInterval(toNext,2500);
}

auto();

banner.onmouseover = function(){
    clearInterval(banner.timer)
}

banner.onmouseout = function(){
    auto();
}


aBtns[1].onclick = toNext;
aBtns[0].onclick = toNext;

function toNext(){

    //aImg1[2].className = "down"

    for(var i=0; i<aNav.length;i++){
        aNav[i].className = "";
    }

    if(oYes){

        oYes = false;

        aDiv[1].className = "deep";
        fadeInOut(aDiv[0],-5,100,0,function(){
            aDiv[1].className = "";
            aDiv[0].className = "deep";
            fadeInOut(aDiv[0],4,0,100); 
        })

        aNav[1].className = "active";

    }
    else{

        oYes = true;
        aDiv[0].className = "deep";
        fadeInOut(aDiv[1],-5,100,0,function(){
            aDiv[1].className = "deep";
            aDiv[0].className = "";
            fadeInOut(aDiv[1],4,0,100) 
        })
        
        aNav[0].className = "active";

    }

}


//works
var works = document.getElementById("works");
var oWorks = works.getElementsByTagName("div")[0];

var work_list = document.getElementById("work_list");
var aDiv_work = work_list.getElementsByTagName("div");
var aList = aDiv_work[0].getElementsByTagName("a");
var aList1 = aDiv_work[1].getElementsByTagName("a");

var work_nav = document.getElementById("work_nav");
var aWorkNav = work_nav.getElementsByTagName("a");

var arr_text1 = [

    { href: "http://nb.vanke.com",src:"images/work/1.png",title:"响应式-理财通"},
    { href: "http://www.gzbzygs.com",src:"images/work/2.png",title:"组件化-H5"},
    { href: "http://wh.vanke.com/HankouLegend/index.shtml",src:"images/work/3.png",title:"BootStrap-浏览器首页"},
    { href: "http://www.fxyhkj.com.cn",src:"images/work/4.png",title:"DivCss-100du"},
    { href: "http://www.1juke.cn/jukebaoweb/index.shtml",src:"images/work/5.png",title:"jQuery-变脸小游戏"}

]

var arr_text2 = [

    { href: "http://wx.juzhen.net/2014/super2014/index.shtml",src1:"images/work/w1.png",src2:"images/work/e1.png",title:"安徽卫视超级笑星"},
    { href: "http://wxc.juzhen.net/html/index.shtml",src1:"images/work/w2.png",src2:"images/work/e2.png",title:"青岛万象城"},
    { href: "http://wx.juzhen.net/2014/love2014/index.shtml",src1:"images/work/w3.png",src2:"images/work/e3.png",title:"深圳万科-相信爱"},
    { href: "http://wxc.juzhen.net/2014/green2014/index.shtml",src1:"images/work/w4.png",src2:"images/work/e4.png",title:"万象城-骑行"},
    { href: "http://wx.juzhen.net/2014/thanks2014/index.shtml",src1:"images/work/w5.png",src2:"images/work/e5.png",title:"万达感恩节"},
    { href: "http://shimaoyun.juzhen.com/2014/zhuanpan/index.shtml",src1:"images/work/w6.png",src2:"images/work/e6.png",title:"世茂外滩大转盘"},
    { href: "http://wx.juzhen.net/2014/zhfc/index.shtml",src1:"images/work/w7.png",src2:"images/work/e7.png",title:"中航紫金云熙"},
    { href: "http://wx.juzhen.net/2015/bella2015/index.shtml",src1:"images/work/w8.png",src2:"images/work/e8.png",title:"姚贝娜，一路走好"}
]

var html_1 = '';
var html_2 = '';

for(var i=0; i<arr_text1.length; i++){
    html_1 += '<a href='+ arr_text1[i].href +' target="_blank"><img src="'+ arr_text1[i].src +'"><span>'+ arr_text1[i].title +'</span></a>'
}

for(var i=0; i<arr_text2.length; i++){
    html_2 += '<a href='+ arr_text2[i].href +' target="_blank"><img src="'+ arr_text2[i].src1 +'"><p><font>'+ arr_text2[i].title +'</font><img src="'+ arr_text2[i].src2 +'"></p></a>'
}

aDiv_work[0].innerHTML = html_1
aDiv_work[1].innerHTML = html_2


work_list.parentNode.style.paddingTop = (h-500)/2 + "px"

for(var i=0; i<4; i++){
    aList[i].style.left = i*(210+76) + "px";
}

for(var i=4; i<aList.length; i++){
    aList[i].style.left = (i-4)*(210+76) + "px";
     aList[i].style.top = "255px";
}

for(var i=0; i<4; i++){
    aList1[i].style.left = i*(210+76) + "px";
}

for(var i=4; i<aList1.length; i++){
    aList1[i].style.left = (i-4)*(210+76) + "px";
    aList1[i].style.top = "255px";
}


for(var i=0; i<aWorkNav.length; i++){
    aWorkNav[i].index = i;
    aWorkNav[i].onclick = function(){
        for(var i=0; i<aWorkNav.length; i++){
            aWorkNav[i].className="";
        }
        this.className = "active";
        doMove(work_list,"left",50,-this.index*1068,function(){

            worksfn(aList1,"p");

        })
    }
    
}


//about
var about_map = document.getElementById("about_map");
var css  = document.getElementById("css");
var aboutArr = [

{ data:80, left:51, c1:"#fffd38",c2:"#cbc800",c3:"#ffff00"},
{ data:120, left:110,c1:"#31c1f5",c2:"#0091cd",c3:"#01b0f1"},
{ data:75, left:165, c1:"#8a5cb6",c2:"#612b81",c3:"#7131a1"},
{ data:130, left:225, c1:"#fa302c",c2:"#ca0300",c3:"#fe0000"},
{ data:110, left:280, c1:"#719ad0",c2:"#416b9d",c3:"#4f81bc"}

];
var aDiv_about = about_map.getElementsByTagName("div");

var shtml2 = '';
var oStyle = document.createElement('style');

for(var i=0; i<aboutArr.length; i++){

    shtml2 += ".about"+(i+1)+"{ width: 30px; height: 200px; -webkit-perspective: 500px; -webkit-perspective-origin:100px -100px; -moz-perspective: 500px; -moz-perspective-origin:100px -100px; -ms-perspective: 500px; -ms-perspective-origin:100px -100px; position: absolute; left: "+aboutArr[i].left+"px"+"; bottom: 40px;}.about"+(i+1)+" p{ width: 30px; height: 0; position: absolute; font-size: 30px; text-align: center;}.about"+(i+1)+" p:nth-of-type(1){ height: 30px; background: "+aboutArr[i].c1+"; bottom: 0; -webkit-transform-origin:bottom; -webkit-transform: rotateX(90deg); -moz-transform-origin:bottom; -moz-transform: rotateX(90deg); -ms-transform-origin:bottom; -ms-transform: rotateX(90deg); }.about"+(i+1)+" p:nth-of-type(2){ background: "+aboutArr[i].c2+"; left: 30px; bottom: 0; -webkit-transform-origin:left; -webkit-transform: rotateY(90deg); -moz-transform-origin:left; -moz-transform: rotateY(90deg); -ms-transform-origin:left; -ms-transform: rotateY(90deg) }.about"+(i+1)+" p:nth-of-type(3){ background: "+aboutArr[i].c3+"; bottom: 0; left: 0; z-index: 10}.about"+(i+1)+" span{ width: 30px; font-size: 14px; display: block; text-align: center; position: absolute; bottom: 0;}";

}
oStyle.innerHTML = shtml2;
document.getElementsByTagName('head')[0].appendChild( oStyle );

/*for(var i=0; i<aboutArr.length; i++){
    var aboutDiv = document.createElement("div");
    aboutDiv.className  = "about" + (i+1) ;
    aboutDiv.innerHTML = "<span></span><p></p><p></p><p></p>";
    about_map.appendChild(aboutDiv);
}*/


function about(){

    for(var i=0; i<aDiv_about.length; i++){
        upFn(aDiv_about[i],aboutArr[i].data,150);
    }

}

function about_no(){

    for(var i=0; i<aDiv_about.length; i++){
        upFn(aDiv_about[i],0,500);
    }
    
}


function worksfn(obj,attr){

    for(var i=0; i<obj.length; i++){
        obj[i].className = "down";
        obj[i].style.display = "block";
        obj[i].onmouseover = function(){
            this.getElementsByTagName(attr)[0].style.display = "block";
            this.getElementsByTagName(attr)[0].className="toBig";
        }
        obj[i].onmouseout = function(){
            this.getElementsByTagName(attr)[0].style.display = "none";
            this.getElementsByTagName(attr)[0].className="";
        }
    }
}

function worksfn1(obj){
    for(var i=0; i<obj.length; i++){
        obj[i].className = "";
        obj[i].style.display = "none";
    }
}


//contact
var contact = document.getElementById("contact");
var conDiv = contact.getElementsByTagName("div")[0];
var conImg = contact.getElementsByTagName("img")[0];

function conFn(){

    conDiv.style.display = "block";
    conDiv.className = "c_main";

    setTimeout(function(){
        conImg.style.display = "block";
        conImg.className = "formRight";
    },1300)
}

function conFn_no(){
    conDiv.style.display = "none";
    conImg.style.display = "none";
    conImg.className = "";
    conDiv.className = "";
}

