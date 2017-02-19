
				var navText=[
					{"text":"变脸小游戏","href":"https://www.baidu.com"},
					{"text":"响应式网站","href":"https://www.baidu.com"},
					{"text":"100du电商网站","href":"https://www.baidu.com"},
					{"text":"WebApp","href":"https://www.baidu.com"}
				]
				var html='';
				for(var i=0;i<navText.length;i++){
					html+='<li class="fixed-nav-list"><a href="'+navText[i].href+'">'+navText[i].text+'</a></li>'
				}
				
				var oUl=document.createElement('ul');
				oUl.innerHTML=html;
				oUl.id='fixed-nav-bar';
				
				var oDivFixedNav=document.createElement('div');
				oDivFixedNav.id='fixed-nav';
				oDivFixedNav.appendChild(oUl);
		        document.body.appendChild(oDivFixedNav);
				
