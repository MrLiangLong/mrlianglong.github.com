/**
 * Created by asus on 2017/1/3.
 */
var h5=function(){
    var id=('h5_'+Math.random()).replace('.','_');
    var el=$('<div class="h5" id="'+this.id+'">');
    var page=[];
    $('body').append(this.el);

    this.addPage=function(name,text){
        var page=$('<div class="h5_page section">');

        if(name!=undefined){
            this.page.addClass("h5_page"+name);
        }
        if(text !=text){
            this.page.text(text);
        }

        this.page.push(page);
        this.el.append(page);

        return this;
    }
    this.addComponent=function(name,cfg){
        var cfg=cfg || {};
        cfg= $.extend({
            type:'base'
        },cfg);

        var component;
        var page=this.page.slice(-1)[0];
        switch (typeof cfg.type){
            case 'base':
                component=new H5ComponentBase();
                break;
            default :
        }
        page.append(component);
    };
    this.loader=function(){
        this.el.fullpage({
            onLeave:function(index,nextIndex,decotation){
                $(this).find('.h5_component').trigger('onLeave');
            },
            onLoad:function(anchorLink,index){
                $(this).find('.h5_component').trigger('onLoad');
            }
        });
        this.page[0].find('.h5_component').trigger('onLoad');
        this.el.show();
    }

    return this;
}