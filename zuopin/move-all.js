// JavaScript Document
	function getStyle(obj,name){
		if(obj.currentStyle){
			//IE系
			return obj.currentStyle[name];
		}else{
			//FF chrom
			return getComputedStyle(obj,false)[name];
		}	
	};
	//obj 让那个物体动
	//json 让那些属性值改变
	//duration 时间多少
	//complete 函数 做链式运动 不传undefined
	//easing运动方式
	function move(obj,json,options){
		//判断options有没有传，没有undefined，默认设置空json
		options=options || {};
		//判断总时间有没有，没有undefined，默认设置500ms;
		options.duration=options.duration || 500;
		//判断运动形式有没有，没有undefined，默认设置减速
		options.easing=options.easing || 'ease-out';


		//开之前关定时器
		clearInterval(obj.timer);
		//总次数 总时间/每运动一次花费的时候
		var count=Math.floor(options.duration/30);
		//起点位置
		var start={};
		//总距离：终点-起点
		var dis={};
		//循环json设置每个属性，起点位置和总距离
		for(var name in json){
			start[name]=parseFloat(getStyle(obj,name));
			dis[name]=json[name]-start[name];
		}
		var n=0;//当前走了多少次
		obj.timer=setInterval(function(){
			n++;
			//循环改变属性的值
			for(var name in json){
				switch(options.easing){
					case 'lineaar'://匀速
						var a=n/count;
						var cur=start[name]+dis[name]*a;
					break;
					case 'ease-in'://加速
						var a=n/count;
						var cur=start[name]+dis[name]*a*a*a;
					break;
					case 'ease-out'://减速
						var a=1-n/count;
						var cur=start[name]+dis[name]*(1-a*a*a);
						break;
				}
				//opacity没有px判断
				if(name=='opacity'){
					obj.style.opacity=cur;
					obj.style.filter='alpha(opacity:'+cur*100+')';
				}else{
					obj.style[name]=cur+'px';
				}
			}
			//判断当前是否已经走完
			if(n==count){
				clearInterval(obj.timer);
				//链式运动
				options.complete && options.complete();
			}
		},30);
	};function getStyle(obj,name){
		if(obj.currentStyle){
			//IE系
			return obj.currentStyle[name];
		}else{
			//FF chrom
			return getComputedStyle(obj,false)[name];
		}	
	};
	//obj 让那个物体动
	//json 让那些属性值改变
	//duration 时间多少
	//complete 函数 做链式运动 不传undefined
	//easing运动方式
	function move(obj,json,options){
		//判断options有没有传，没有undefined，默认设置空json
		options=options || {};
		//判断总时间有没有，没有undefined，默认设置500ms;
		options.duration=options.duration || 500;
		//判断运动形式有没有，没有undefined，默认设置减速
		options.easing=options.easing || 'ease-out';


		//开之前关定时器
		clearInterval(obj.timer);
		//总次数 总时间/每运动一次花费的时候
		var count=Math.floor(options.duration/30);
		//起点位置
		var start={};
		//总距离：终点-起点
		var dis={};
		//循环json设置每个属性，起点位置和总距离
		for(var name in json){
			start[name]=parseFloat(getStyle(obj,name));
			dis[name]=json[name]-start[name];
		}
		var n=0;//当前走了多少次
		obj.timer=setInterval(function(){
			n++;
			//循环改变属性的值
			for(var name in json){
				switch(options.easing){
					case 'lineaar'://匀速
						var a=n/count;
						var cur=start[name]+dis[name]*a;
					break;
					case 'ease-in'://加速
						var a=n/count;
						var cur=start[name]+dis[name]*a*a*a;
					break;
					case 'ease-out'://减速
						var a=1-n/count;
						var cur=start[name]+dis[name]*(1-a*a*a);
						break;
				}
				//opacity没有px判断
				if(name=='opacity'){
					obj.style.opacity=cur;
					obj.style.filter='alpha(opacity:'+cur*100+')';
				}else{
					obj.style[name]=cur+'px';
				}
			}
			//判断当前是否已经走完
			if(n==count){
				clearInterval(obj.timer);
				//链式运动
				options.complete && options.complete();
			}
		},30);
	};
	