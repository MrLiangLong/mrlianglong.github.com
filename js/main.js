			$(function(){				
				var arr=[
				{title:'1',day:'2015.04',name:'100度商城首页',conclass:'DIV+CSS+jQuery',href:'https://mrlianglong.github.io/100duShoppingStore/'},
				{title:'2',day:'2015.04',name:'WebApp开发-H5',conclass:'组件化开发',href:'https://mrlianglong.github.io/SmallWebApp/'},
				{title:'3',day:'2015.04',name:'MyToDo小应用',conclass:'综合项目',href:'https://mrlianglong.github.io/MyTodoApp/'},
				{title:'4',day:'2015.04',name:'个人网站开发',conclass:'综合项目',href:'https://mrlianglong.github.io/PersonWeb/'},
				{title:'5',day:'2015.04',name:'响应式-理财宝',conclass:'响应式布局',href:'https://mrlianglong.github.io/ResponsiveWebLCB/'},
				{title:'6',day:'2015.04',name:'换脸小游戏',conclass:'jQueryDemo',href:'https://mrlianglong.github.io/jQueryDemo/TheGameOfChangeFace'},
				{title:'7',day:'2015.04',name:'21点扑克',conclass:'jQueryDemo',href:'https://mrlianglong.github.io/jQueryDemo/TheGameOf21PointPoker'},
				{title:'1',day:'2015.04',name:'理财通网站',conclass:'综合项目',href:'https://mrlianglong.github.io/LiCaiTong/'},
				{title:'8',day:'2015.04',name:'Important Explanstion',conclass:'News+',href:'#'},
				{title:'9',day:'2015.04',name:'Important Explanstion',conclass:'News+',href:'#'}
				];
								
				init(arr);
				var state=1;
				/*点击按钮，显示菜单*/
		  		$("#nav_btn").on('click',function(){		  			
					state=='1'?showNavBar():hiddenNavBar();
				}); 				
				/*点击关闭按钮，隐藏菜单*/
				$('.close-menu').on('click',function(){
					hiddenNavBar();
				})
				/*鼠标移出菜单，菜单隐藏*/
				$('.navbar').hover(function(){
					showNavBar();
				},function(){
					hiddenNavBar();
				});
		        /*菜单栏，导航条淡入淡出*/	
			    $('.navbar li a').each(function(idx){
			    	$('.navbar li a').eq(idx).hover(function(){
			    		$('.navbar li a').eq(idx).fadeTo('fast',1);
			    	},function(){
			    		$('.navbar li a').eq(idx).fadeTo('fast',0.5);
			    	});
			    });			    	
				/*页面鼠标移入移出动画*/
				$('.items').each(function(index){
					var $idx=index;
					$('.items').eq($idx).hover(function(){
						$('.list_1').eq($idx).fadeOut(220);					
						$('.list_1').eq($idx).stop().animate({left:'100%'},220);
						$('.list_2').eq($idx).fadeIn(220);
				   		$('.list_2').eq($idx).stop().animate({left:'0%'},220);		   
					},function(){
						$('.list_2').eq($idx).stop().animate({left:'-100%'},220);
						$('.list_1').eq($idx).stop().animate({left:'0%'},220);				
					});
				});				
				/*显示隐藏菜单*/
				function showNavBar(){
            		$(".main").animate({left:-$('.navbar').width()},200); 
					$(".navbar").animate({right:'0px'},180);
					state=0;
            	}
				/*隐藏显示菜单*/
            	function hiddenNavBar(){
            		$(".main").animate({left:'0px'},200); 
					$(".navbar").animate({right:-$('.navbar').width()},180);
					state=1;
           	 	}
				/*页面初始化*/ 
				function init(arr){
					var html='';
					$.each(arr,function(idx){
					html+=
					'<div class="items">'+
						'<div class="list_1">'+
							'<a href="'+arr[idx].href+'">'+
								'<div class="title">'+arr[idx].title+'</div>'+
								'<div class="content">'+
									'<p class="content-day">'+arr[idx].day+'</p>'+
									'<p class="content-name">'+arr[idx].name+'</p>'+
									'<p class="content-class">'+arr[idx].conclass+'</p>'+
								'</div>'+
							'</a>'+
						'</div>'+
						'<div class="list_2">'+
							'<a href="'+arr[idx].href+'">'+
								'<div class="title">'+arr[idx].title+'</div>'+
								'<div class="content">'+
									'<p class="content-day">'+arr[idx].day+'</p>'+
									'<p class="content-name">'+arr[idx].name+'</p>'+
									'<p class="content-class">'+arr[idx].conclass+'</p>'+
								'</div>'+
							'</a>'+
						'</div>'+
				 	'</div>'
					});			
					$('.wrap').append(html);
				}			
			}); 