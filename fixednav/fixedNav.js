       	window.onload=function(){       		
      		var arry;
        		arry=[
        			{"name":"首页","href":"https://mrlianglong.github.io/","url":"/mrlianglong.github.com/fixednav/icon/index.png"},
        			{"name":"个人网站","href":"https://mrlianglong.github.io/PersonWeb/","url":"/mrlianglong.github.com/fixednav/icon/person.png"},
        			{"name":"webapp-H5","href":"https://mrlianglong.github.io/SmallWebApp/","url":"/mrlianglong.github.com/fixednav/icon/webapp.png"},
        			{"name":"MyToDo小应用","href":"https://mrlianglong.github.io/MyTodoApp/","url":"/mrlianglong.github.com/fixednav/icon/mytodo.png"},
        			{"name":"100du商城","href":"https://mrlianglong.github.io/100duShoppingStore/","url":"/mrlianglong.github.com/fixednav/icon/100du.png"},
        			{"name":"响应式-理财宝","href":"https://mrlianglong.github.io/ResponsiveWebLCB/","url":"/mrlianglong.github.com/fixednav/icon/licaibao.png"},
        			{"name":"理财通","href":"https://mrlianglong.github.io/LiCaiTong/","url":"/mrlianglong.github.com/fixednav/icon/licaitong.png"},
        			{"name":"换脸小游戏","href":"https://mrlianglong.github.io/jQueryDemo/TheGameOfChangeFace","url":"/mrlianglong.github.com/fixednav/icon/huanlian.png"},
        			{"name":"21点扑克","href":"https://mrlianglong.github.io/jQueryDemo/TheGameOf21PointPoker","url":"/mrlianglong.github.com/fixednav/icon/puke.png"}
        		];
        		       		
        		mkSideBar(arry);
        		function mkSideBar(arry){
	        		var fixedBar=document.createElement('div');
        			fixedBar.id="rFixedBar";
        			var html_1='';
        			var html_2='';
        			
        			for(var i=0;i<arry.length;i++){
        				
        				if(i==0){
        					html_1+='<div class="rFixedBar-item">'+
									'<a href="'+arry[i].href+'">'+
										'<i class="rFixedBar-icon" style="background-image: url('+arry[i].url+');background-position: 6px 5px;background-size: 24px 24px;background-repeat: no-repeat;background-color:#999;"></i>'+
									'</a>'+	
								'</div>';
        				}
        				else{
        					html_2+=	'<div class="rFixedBar-item">'+
									'<a href="'+arry[i].href+'">'+
										'<span class="rFixedBar-name">'+arry[i].name+'</span>'+
										'<i class="rFixedBar-icon" style="background-image: url('+arry[i].url+');background-position: 6px 5px;background-size: 24px 24px;background-repeat: no-repeat;"></i>'+
									'</a>'+	
								'</div>';
        				}
  					
  					
        			}
        			
        			fixedBar.innerHTML=html_1+html_2;
        			
        			window.document.body.appendChild(fixedBar);
        		}
        		
        	}
				
