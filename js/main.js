// 时钟
	var oClock = document.querySelector('.clock');
	var oHou = document.querySelector('.hou');
	var oMin = document.querySelector('.min');
	var oSec = document.querySelector('.sec');

	var N = 60;
	for(var i=0;i<N;i++){ 
		var oS = document.createElement('span');
		oS.style.WebkitTransform = 'rotate('+i*6+'deg)';
		if(i%5 == 0){ 
			oS.className = 'big_scale';
			oS.innerHTML = '<em>'+(i/5||12)+'<\/em>';
			var oEm = oS.children[0];
			oEm.style.WebkitTransform = 'rotate('+-i*6+'deg)';
		}
		oClock.appendChild(oS);
	}
	function tick(){ 
		var oDate = new Date();
		var h = oDate.getHours();
		var m = oDate.getMinutes();
		var s = oDate.getSeconds();
		
		oHou.style.WebkitTransform = 'rotate('+(h*30+m/60*30)+'deg)';
		oMin.style.WebkitTransform = 'rotate('+(m*6+s/60*6)+'deg)';
		oSec.style.WebkitTransform = 'rotate('+s*6+'deg)';
	}
	tick();
	setInterval(tick,1000);
	
//打字效果
(function(){ 
	var str = '有一种生物，叫程序猿，是近几十年来出现的新物种，拥有无与伦比的耐力、超越时代的智商、和横穿社会的苦逼。.';
var oWriter = document.getElementById('writer');
		for(var i = 0;i<str.length;i++){
			var oSpan = document.createElement('span');
			oSpan.innerHTML = str.charAt(i);
			oWriter.appendChild(oSpan);
		}
		var aSpan1 = oWriter.children;
		var i = 0;
		var timer = null;
		var count = 0;
		function writeW(){
			clearInterval(timer);
			timer = setInterval(function(){
				
				move(aSpan1[i],{opacity:1},{complete:function(){
					count++;
					if(count==aSpan1.length){
						clearInterval(timer);
						i=0;
						count = 0;
						for(var j=0;j<aSpan1.length;j++){
							aSpan1[j].style.opacity = 0;
							writeW();
						}
					}

				}});
				i++;
				if(i == aSpan1.length){
					clearInterval(timer);
				}
								
			},200);
		}
		writeW();
})();
