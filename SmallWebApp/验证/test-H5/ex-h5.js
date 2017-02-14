/**
 * Created by asus on 2017/1/3.
 */
var h5=function(){
    //h5位一个对象，h5 id >page>component   loader
    var id=('h5_'+Math.random()).replace('.','_');
    var el=$('<div class="h5" id="'+this.id+'">');
    $('body').append(el);
    var page=[];

    this.addPage=function(name,text){
        var page=$('<div class="h5_page section">');
        el.append(page);

        if(name !=undefined){
            page.addClass("h5_page"+name);
        }

        if(text !=undefined){
            page.text(text);
        }
        this.el.append(page);
        this.page.push(page);

        return page;
    }
    this.addComponent=function(name,cfg){
        var cfg= cfg || { };
        cfg= $.extend({
            type:'base'
        },cfg);

        var component;
        var page=this.page.slice(-1)[0];
        switch(cfg.type){
            case 'base':
                component=new H5ComponentBase(name,cfg);
                break;
            default :
        }
        page.append(component);
        return this;
    }

    this.loader=function(){
        this.el.fullpage({
            onLeave:function(index,nextIndex,direction){
                $(this).find('.h5_component').trigger('onLeave');
            },
            onLoad:function(anchorLink,index){
                $(this).find('.h5_component').trigger('onLoad');
            }
        });
        this.page[0].find('.h5_component').trigger('onLoad');
        this.el.show();
    };
    return this;
}