
				var navText=[
					{"text":"首页","href":"https://mrlianglong.github.io"},
					{"text":"个人网站","href":"https://mrlianglong.github.io/PersonWeb/"},
					{"text":"100du商城","href":"https://mrlianglong.github.io/100duShoppingStore/"},
					{"text":"理财宝","href":"https://mrlianglong.github.io/ResponsiveWebLCB/"}
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
				
