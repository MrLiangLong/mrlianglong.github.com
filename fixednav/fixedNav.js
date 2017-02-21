
				var navText=[
					{"text":"个人网站","href":"https://mrlianglong.github.io/PersonWeb"},
					{"text":"响应式网站","href":"https://mrlianglong.github.io/ResponsiveWebLCB"},
					{"text":"100du电商网站","href":"https://mrlianglong.github.io/100duShoppingStore"},
					{"text":"WebApp","href":"https://mrlianglong.github.io/SmallWebApp/"}
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
				
