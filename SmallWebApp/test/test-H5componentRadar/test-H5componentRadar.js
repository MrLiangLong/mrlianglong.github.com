/**
 * Created by asus on 2016/12/31.
 */
var H5ComponentRadar =function(name,cfg){
    var component=new H5ComponentBase(name,cfg);

    //绘制网格线-背景层
    var w=cfg.width;
    var h=cfg.height;
    //加入一个画布，网格线背景
    var cns=document.createElement('canvas');
    var ctx=cns.getContext('2d');
    cns.width=ctx.width=w;
    cns.height=ctx.height=h;
    component.append(cns);

    var r=w/2;
    var step=cfg.data.length;

/*    ctx.beginPath();
    ctx.arc(r,r,5,0,2*Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(r,r,r,0,2*Math.PI);
    ctx.stroke();*/

   /*
    计算一个圆周上的坐标（多边形的圆角坐标）
    已知：圆心坐标（a,b)，半径r，角度deg。
    rad=(2*Math*PI/360 )*(360/step)*i
    x=a+Math.sin(rad)*r;
    y=b+Math.cos(rad)*r;
    */

    //绘制网格背景（分面绘制）
    var isBlue=false;
    for(var s=10;s>0;s--){
        ctx.beginPath();
        for(var i=0;i<step;i++){
            var rad=(2*Math.PI/360 )*(360/step)*i;
            var x=r+Math.sin(rad)*r*(s/10);
            var y=r+Math.cos(rad)*r*(s/10);

            ctx.lineTo(x,y);
        }
        ctx.closePath();
        ctx.fillStyle=(isBlue=!isBlue)?"#99c0ff":"#f1f9ff";
        ctx.fill();
    }
    //绘制伞骨

    for(var i=0;i<step;i++){
        var rad=(2*Math.PI/360 )*(360/step)*i;
        var x=r+Math.sin(rad)*r;
        var y=r+Math.cos(rad)*r;
        ctx.moveTo(r,r);
        ctx.lineTo(x,y);
        //输出项目文字
        var text=$('<div class="text">');
        text.text(cfg.data[i][0]);
        text.css('transition','all 1s '+i*.5+'s');
        if(x>w/2){
            text.css('left',x/2+5);
        }
        else{
            text.css('right',(w-x)/2+5);
        }
        if(y>h/2){
            text.css('top',y/2+5);
        }
        else{
            text.css('bottom',(h-y)/2+5);
        }
        if(cfg.data[i][2]){
            text.css('color',cfg.data[i][2]);
        }
        text.css('opacity',0);

        component.append(text);
    }
   ctx.fillStyle='#e0e0e0';
    ctx.stroke();

    //加入一个画布，网格线背景-数据层的开发
    var cnsData=document.createElement('canvas');
    var ctxData=cnsData.getContext('2d');
    cnsData.width= ctxData.width=w;
    cnsData.height= ctxData.height=h;
    component.append(cnsData);

    cns.strokeStyle="#f00";
    var draw=function(per){
        ctxData.clearRect(0,0,w,h);

        /**
         * @param  {float} per 百分比
         */
            //出场文字加载
            if (per >= 1) {
                component.find('.text').css('opacity', 1);
            }
            //退场文字消失
            if (per <= 0) {
                component.find('.text').css('opacity', 0);
            }
            //输出数据的折线
            for (var i = 0; i < step; i++) {
                var rad = (2 * Math.PI / 360) * (360 / step) * i;
                var rate = cfg.data[i][1] * per;
                x = r + Math.sin(rad) * r * rate;
                y = r + Math.cos(rad) * r * rate;
                ctxData.lineTo(x, y);
            }
            ctxData.closePath();
            ctxData.stroke();
            //输出数据的点
            ctxData.fillStyle = "#ff7676";
            for (var i = 0; i < step; i++) {
                var rad = (2 * Math.PI / 360 ) * (360 / step) * i;
                var rate = cfg.data[i][1] * per;
                var x = r + Math.sin(rad) * r * rate;
                var y = r + Math.cos(rad) * r * rate;
                ctxData.beginPath();
                ctxData.arc(x, y, 5, 0, 2 * Math.PI)
                ctxData.fill();
                ctxData.closePath();
            }
        }
    /*draw(1);*/
    component.on('onLoad',function(){
        //折线图生长状态
        var s=0;
        for(var i=0;i<100;i++){
            setTimeout(function(){
                s=s+.01;
                draw(s);
            },i*10+500)
        }
    });

    component.on('onLeave',function(){
        //折线图退场动画
        var s=1;
        for(var i=0;i<100;i++){
            setTimeout(function(){
                s=s-.01;
                draw(s);
            },i*10)
        }
    });
    return component;
}