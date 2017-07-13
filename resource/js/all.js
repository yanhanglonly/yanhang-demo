function getDays(date){/*获取某月天数*/

	var nStart = date.getTime();/*先获取起始日期的毫秒数*/

	date.setMonth(date.getMonth()+1);/*设置为下个月*/

	var nEnd = date.getTime();/*获取下个月今天的毫秒数*/

	return (nEnd - nStart)/1000/60/60/24;/*根据相差毫秒数计算天数*/
}

function getDays(date){/*获取某月天数*/
	return -(date.getTime()-date.setMonth(date.getMonth()+1))/1000/60/60/24;
}

function timeOut(date){/*倒计时*/
	var dDate = new Date();
	var nMs = dEnd.getTime()-dDate.getTime();
	var nSeconds = Math.ceil(nMs/1000);
	var nMinutes = Math.floor(nSeconds/60);
	var nHours = Math.floor(nMinutes/60);
	var nDays = Math.floor(nHours/24);

	return [nDays,nHours%24,nMinutes%60,nSeconds%60,nMs%10]
}

function parseDay(num){/*格式化星期*/
	switch(num){
		case 0:
			return "星期日";
			break;
		case 1:
			return "星期一";
			break;
		case 2:
			return "星期二";
			break;
		case 3:
			return "星期三";
			break;
		case 4:
			return "星期四";
			break;
		case 5:
			return "星期五";
			break;
		case 6:
			return "星期六";
			break;
		default:
			return null;
	}
}
function randNum(start, end){/*生成从start到end的数字，包括end*/
	return Math.floor(Math.random()*(end-start+1))+start;
};
/*获取样式表*/
function getStyle(ele){
	return window.getComputedStyle ? window.getComputedStyle(ele, false) : ele.currentStyle;
}
/*通过类名获取元素,兼容IE*/
function getEleByClass( ele, classname ){
	var eles = ele.getElementsByTagName("*");
	var aEle = [];
	for(var i=0; i<eles.length; i++){
		if(eles[i].className == classname){
			aEle.push(eles[i]);
		}
	}
	return aEle;
}
function setCookie(key, value, days){/*cookie名, cookie值, 过期天数*/
	var date = new Date();/* 创建当前日期 */
	date.setDate(date.getDate()+days);/* 设置过期日期 */
	document.cookie = key+"="+value+"; expires="+date;/* 设置cookie内容 */
}
function getCookie(key){/* cookie名 */
	var aCook = document.cookie.split("; ");/* 将cookie字符串拆分成数组 */
	for(var i=0; i<aCook.length; i++){
		var aData = aCook[i].split("=");/* 将cookie数组中的某条拆分成名值数组 */
		if(aData[0] == key){
			return aData[1];
		}
	}
	return null;
}

function removeCookie(key){/* cookie名 */
	var date = new Date();
	date.setDate(date.getDate()-1);
	document.cookie = key+"="+""+"; expires="+date;
}

//运动框架
function move(json){
	clearInterval(json.ele.timer);
	var date = new Date();
	var info = {};//储存每个属性的起始位置

	json.duration?null:json.duration = 500;//总耗时默认值

	for(var attr in json.props){
		info[attr] = parseInt(getStyle(json.ele)[attr]);//储存每个属性的起始位置
	}
	json.ele.timer = setInterval(function(){//开启定时器，进行周期性属性赋值操作，从而形成动画

		var timeScale = (new Date()-date)/json.duration;//求耗时比，即（当前时间-起始时间）/总时

		timeScale = Math.min(1, timeScale);//当耗时比大于1时，说明动画已超时，这种情况下取 1；其他情况取正常耗时比

		if(json.timing == "slow"){//定义减速时间曲线
			timeScale = Math.sqrt(timeScale);
		}else if(json.timing == "speed"){//定义加速时间曲线
			timeScale = timeScale*(2-timeScale);
		}

		for(var attr in json.props){//通过 for in 语句，进行多属性操作

			json.ele.style[attr] = info[attr]+(json.props[attr] - info[attr])*timeScale + "px";
			//设置属性值：起始值 + (目标值-起始值)*耗时比

		}

		if(timeScale === 1){//当耗时比为1时，说明动画结束，此时停止定时器，终止动画
			clearInterval(json.ele.timer);
			if(json.callback){
				json.callback();
			}
		}

	},json.delay || 10);

}function getDays(date){/*获取某月天数*/

	var nStart = date.getTime();/*先获取起始日期的毫秒数*/

	date.setMonth(date.getMonth()+1);/*设置为下个月*/

	var nEnd = date.getTime();/*获取下个月今天的毫秒数*/

	return (nEnd - nStart)/1000/60/60/24;/*根据相差毫秒数计算天数*/
}

function getDayss(date){/*获取某月天数*/
	return -(date.getTime()-date.setMonth(date.getMonth()+1))/1000/60/60/24;
}

function timeOut(date){/*倒计时*/
	var dDate = new Date();
	var nMs = dEnd.getTime()-dDate.getTime();
	var nSeconds = Math.ceil(nMs/1000);
	var nMinutes = Math.floor(nSeconds/60);
	var nHours = Math.floor(nMinutes/60);
	var nDays = Math.floor(nHours/24);

	return [nDays,nHours%24,nMinutes%60,nSeconds%60,nMs%10]
}

function parseDay(num){/*格式化星期*/
	switch(num){
		case 0:
			return "星期日";
			break;
		case 1:
			return "星期一";
			break;
		case 2:
			return "星期二";
			break;
		case 3:
			return "星期三";
			break;
		case 4:
			return "星期四";
			break;
		case 5:
			return "星期五";
			break;
		case 6:
			return "星期六";
			break;
		default:
			return null;
	}
}
function randNum(start, end){/*生成从start到end的数字，包括end*/
	return Math.floor(Math.random()*(end-start+1))+start;
};
/*获取样式表*/
function getStyle(ele){
	return window.getComputedStyle ? window.getComputedStyle(ele, false) : ele.currentStyle;
}
/*通过类名获取元素,兼容IE*/
function getEleByClass( ele, classname ){
	var eles = ele.getElementsByTagName("*");
	var aEle = [];
	for(var i=0; i<eles.length; i++){
		if(eles[i].className == classname){
			aEle.push(eles[i]);
		}
	}
	return aEle;
}
function setCookie(key, value, days){/*cookie名, cookie值, 过期天数*/
	var date = new Date();/* 创建当前日期 */
	date.setDate(date.getDate()+days);/* 设置过期日期 */
	document.cookie = key+"="+value+"; expires="+date;/* 设置cookie内容 */
}
function getCookie(key){/* cookie名 */
	var aCook = document.cookie.split("; ");/* 将cookie字符串拆分成数组 */
	for(var i=0; i<aCook.length; i++){
		var aData = aCook[i].split("=");/* 将cookie数组中的某条拆分成名值数组 */
		if(aData[0] == key){
			return aData[1];
		}
	}
	return null;
}

function removeCookie(key){/* cookie名 */
	var date = new Date();
	date.setDate(date.getDate()-1);
	document.cookie = key+"="+""+"; expires="+date;
}

//运动框架
function move(json){//json后面都是参数
	//json.ele:运动元素  字符串
	//json.props:运动属性 需要运动的属性 json
	//json.timing:运动时间曲线
	//json.duration:运动总耗时  毫秒ms
	//json.delay:运动刷新频率   1次/10ms
	//json.callback:链式运动
	clearInterval(json.ele.timer);
	var date = new Date();
	var info = {};//储存每个属性的起始位置

	json.duration?null:json.duration = 500;//总耗时默认值

	for(var attr in json.props){//json。props多个值一块运动
		info[attr] = parseInt(getStyle(json.ele)[attr]);//储存每个属性的起始位置
	}
	json.ele.timer = setInterval(function(){//开启定时器，进行周期性属性赋值操作，从而形成动画

		var timeScale = (new Date()-date)/json.duration;//求耗时比，即（当前时间-起始时间）/总时

		timeScale = Math.min(1, timeScale);//当耗时比大于1时，说明动画已超时，这种情况下取 1；其他情况取正常耗时比

		if(json.timing == "slow"){//定义减速时间曲线
			timeScale = Math.sqrt(timeScale);
		}else if(json.timing == "speed"){//定义加速时间曲线
			timeScale = timeScale*(2-timeScale);
		}

		for(var attr in json.props){//通过 for in 语句，进行多属性操作

			json.ele.style[attr] = info[attr]+(json.props[attr] - info[attr])*timeScale + "px";
			//设置属性值：起始值 + (目标值-起始值)*耗时比

		}

		if(timeScale === 1){//当耗时比为1时，说明动画结束，此时停止定时器，终止动画
			clearInterval(json.ele.timer);
			if(json.callback){
				json.callback();
			}
		}

	},json.delay || 10);

}