/**
 * Created by asus on 2016/12/31.
 */
var H5ComponentPie =function(name,cfg){
    var component=new H5ComponentBase(name,cfg);

    //绘制网格线-背景层
    var w=cfg.width;
    var h=cfg.height;
    //加入一个画布
    var cns=document.createElement('canvas');
    var ctx=cns.getContext('2d');
    cns.width=ctx.width=w;
    cns.height=ctx.height=h;
    $(cns).css('zIndex',1);
    component.append(cns);
    //添加背景层
    var r=w/2;
    ctx.beginPath();
    ctx.fillStyle='#eee';
    ctx.strokeStyle="#eee";
    ctx.lineWidth=1;
    ctx.arc(r,r,r,0,2*Math.PI);
    ctx.fill();
    ctx.stroke();

    //添加数据层
    var cns=document.createElement('canvas');
    var ctx=cns.getContext('2d');
    cns.width=ctx.width=w;
    cns.height=ctx.height=h;
    $(cns).css('zIndex',2);
    component.append(cns);

    var colors=['red','green','blue','orange','gray',];
    var sAngle=1.5*Math.PI;
    var eAngle=0;
    var aAngle=2*Math.PI;
    //eAngle=sAngle+aAngle*it%


    var step=cfg.data.length
    for(var i=0;i<step;i++){
        var item=cfg.data[i];
        var color=item[2] || (item[2]=colors.pop());
        eAngle=sAngle+aAngle*item[1];

        ctx.beginPath();
        ctx.moveTo(r,r);
        ctx.fillStyle=color;
        ctx.strokeStyle=color;
        ctx.arc(r,r,r,sAngle,eAngle);
        ctx.fill();
        ctx.stroke();
        sAngle=eAngle;

        var text=$('<div class="text">');
        text.text(item[0]);
        var per=$('<div class="per">');
        per.text(item[1]*100+'%');
        text.append(per);

        var x=r+r*Math.sin(.5*Math.PI-sAngle);
        var y=r+r*Math.cos(.5*Math.PI-sAngle);

        if(x>w/2){
            text.css('left',x/2);
        }else{
            text.css('right',(w-x)/2);
        }
        if(y>h/2){
            text.css('top',y/2);
        }else{
            text.css('bottom',(h-y)/2);
        }
        if(item[2]){
            text.css('color',item[2]);
        }
        component.append(text);

        //加入一个蒙板层
        var cns=document.createElement('canvas');
        var ctx=cns.getContext('2d');
        cns.width=ctx.width=w;
        cns.height=ctx.height=h;
        $(cns).css('zIndex',3);
        component.append(cns);

        ctx.fillStyle='#eee';
        ctx.strokeStyle='#eee';
        ctx.lineWidth=1;
    };
    //生长动画
    var draw=function(per){
        ctx.clearRect(0,0,w,h);

        ctx.beginPath();
        ctx.moveTo(r,r);

        if(per<=0){
            ctx.arc(r,r,r,0,2*Math.PI);
            component.find('.text').css('opacity',0);
        }else{
            ctx.arc(r,r,r,sAngle,sAngle+2*Math.PI*per,true);
        }
        ctx.fill();
        ctx.stroke();

        if( per >= 1){
            component.find('.text').css('transition','all 0s');
            /*H5ComponentPie.reSort( component.find('.text') );*/
            component.find('.text').css('transition','all 1s');
            component.find('.text').css('opacity',1);
            ctx.clearRect(0,0,w,h);
        }
    }
    draw(0);

    component.on('onLoad',function(){
        var s=0;
        for(var i=0;i<100;i++){
            setTimeout(function(){
                s+=.01;
                draw(s);
            },i*10+500)
        }
    });
    component.on('onLeave',function(){
        var s=1;
        for(var i=0;i<100;i++){
            setTimeout(function(){
                s-=.01;
                draw(s);
            },i*10)
        }
    });

    return component;
}