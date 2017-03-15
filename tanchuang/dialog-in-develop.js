function showDialog(){
	var oDiv=document.createElement('div');
				
	var html=
		'<div id="inDevelop" style="display:none;padding-right:14px;border-radius:4px;z-index:1000;width: 300px;height: 200px;border: 1px solid rgba(0,0,0,.9);background: rgba(0,0,0,.9);position: fixed;left: 50%;top: 50%;margin-left: -100px;margin-top: -120px;">'+
		'<span id="inDevelop-close" style="position: relative;left:274px;width: 36px;text-align:right;height: 32px;margin-top: 5px;font-size:36px;color:#999;cursor:pointer;">X</span>'+
		'<span style="display: block;text-align: center;padding-top: 20px;font-size:30px;color:white;">该模块尚未开通...</span>'+
		'</div>';
		
		oDiv.innerHTML=html;
		window.document.body.appendChild(oDiv);				
}
showDialog();
window.onload=function(){
	var oInDevelop=document.getElementById('inDevelop');
	var aDialogInDevelep=document.getElementsByClassName('dialog-in-develep');
	var oDialogInDevelepClose=document.getElementById("inDevelop-close");
	for(var i=0;i<aDialogInDevelep.length;i++){
		aDialogInDevelep[i].onclick=function(){
			oInDevelop.style.display='block';
			var timer;
			timer=setTimeout(function(){
	 			oInDevelop.style.display='none';
	 		},1000)
		}
	}
     oDialogInDevelepClose.onmousemove=function(){
     	this.style.color="red";
     	
     	document.onmouseout=function(){
     		oDialogInDevelepClose.style.color="#999";
     	}
     }
	 oDialogInDevelepClose.onclick=function(){
	 	oInDevelop.style.display='none';
	 }
	 
/*	document.onclick=function(){
		var oInDevelop=document.getElementById('inDevelop');
		console.log(oInDevelop);
		oInDevelop.style.display='none';
	}*/



}
