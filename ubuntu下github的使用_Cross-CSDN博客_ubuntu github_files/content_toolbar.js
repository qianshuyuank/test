function is_blog(){var n=window.location.host;return n.indexOf("blog.csdn.net")>-1}function siteId(){var n,e=window.location.host;return n=0===e.indexOf("blog")?"UA-127895514-2":0===e.indexOf("download")?"UA-127895514-8":0===e.indexOf("edu")?"UA-127895514-9":0===e.indexOf("bbs")?"UA-127895514-4":0===e.indexOf("ask")?"UA-127895514-5":0===e.indexOf("gitbook")?"UA-127895514-10":0===e.indexOf("iteye")?"UA-127895514-6":0===e.indexOf("passport")?"UA-127895514-7":0===e.indexOf("so")?"UA-127895514-3":0===e.indexOf("www")?e.indexOf("iteye")>0?"UA-127895514-6":"UA-127895514-1":""}function is_bloger(){try{if(is_blog())return!0}catch(n){return!1}}function loadScript(n,e){var t=document.createElement("script");t.type="text/javascript",t.readyState?t.onreadystatechange=function(){"loaded"!=t.readyState&&"complete"!=t.readyState||(t.onreadystatechange=null,e&&e())}:t.onload=function(){e&&e()},t.src=n,document.getElementsByTagName("head")[0].appendChild(t)}function throttle(n,e){var t,o=null;return function(){var a=this,s=new Date;s-o-e>0?(t&&(clearTimeout(t),t=null),n.apply(a,arguments),o=s):t||(t=setTimeout(function(){n.apply(a,arguments)},e))}}function configuration_tool_parameterv(n){if("[object Object]"==Object.prototype.toString.call(n)){var e=n.need_first_suspend||!1,t=n.need_little_suspend||!1,o=n.little_tool_id||"",a=n.little_need_insert_type||"",s=n.need_change_function||"",i=$("#csdn-toolbar"),c="",r="";if(1!=e||1!=t){t&&""!=o&&(i=$(o)),t&&o&&""!=a&&(c="."+a,r=$(c));var d=throttle(function(){var n=document.documentElement.scrollTop||document.body.scrollTop;n>=50?(i.css({position:"fixed",top:"0",left:"0","z-index":"9999",width:"100%"}),t&&$(".secodn_level_csdn_logo").length&&$(".secodn_level_csdn_logo").css({display:"block"}),t&&""!=a&&("onlySearch"==a?$("#csdn_tool_otherPlace").append(r):"onlyUser"==a?$("#csdn_tool_otherPlace").append(r):"searchUser"==a&&($("#csdn_tool_otherPlace").append($(".onlySearch")),$("#csdn_tool_otherPlace").append($(".onlyUser")))),"function"==typeof s&&s("fixed")):(i.css({position:"static","z-index":""}),t&&$(".secodn_level_csdn_logo").length&&$(".secodn_level_csdn_logo").css({display:"none"}),t&&""!=a&&("onlySearch"==a?$("#nav-left-menu").append(r):"onlyUser"==a?$(".pull-right").append(r):"searchUser"==a&&($("#nav-left-menu").append($(".onlySearch")),$("#csdn_container_tool").append($(".onlyUser")))),"function"==typeof s&&s("noFixed"))},80);return(document.documentElement.scrollTop||document.body.scrollTop)>50&&d(),e?void $(window).on("scroll",d):void(t&&$(window).on("scroll",d))}}}var _gaq=[],userAgent=navigator.userAgent.toLowerCase();window.csdn=window.csdn||{},window.csdn.configuration_tool_parameterv=configuration_tool_parameterv;var _hmt=_hmt||[];!function(){function n(){try{var n=!!t("UN"),e=!!t("UserName"),o=t("p_uid");o=o?o.substr(1,1):0,_hmt.push(["_setUserProperty",{islogin:+n,isonline:+e,isvip:+(1==o)}]),e&&_hmt.push(["_setUserId",t("UserName")])}catch(a){}}function e(){dataLayer.push(arguments)}var t=function(n){for(var e=document.cookie.split("; "),t=0;t<e.length;t++){var o=e[t].split("=");if(o[0]==n&&"UD"==n)return decodeURIComponent(o[1]);if(o[0]==n)return decodeURI(o[1])}};n();var o=document.createElement("script");o.src="https://hm.baidu.com/hm.js?6bcd52f51e9b3dce32bec4a3997715ac";var a=document.getElementsByTagName("script")[0];if(a.parentNode.insertBefore(o,a),document.referrer.indexOf("google.com")>-1){var s=document.createElement("script");s.src="https://www.googletagmanager.com/gtag/js?id="+siteId(),a.parentNode.insertBefore(s,a),window.dataLayer=window.dataLayer||[];var i=t("UserName")||"";e("js",new Date),e("config",siteId()),i&&e("set",{user_id:i})}}(),function(){var n=document.createElement("script");n.type="text/javascript",n.async=!0,n.src="https://g.csdnimg.cn/??asdf/1.1.2/trackad.js,iconfont/nav/iconfont-1.0.0.js";var e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(n,e)}(),function(){var n=window.location.host,e=function(n,e){var t=n.include||["*"],o=n.exclude||[],a=t.filter(function(n){return!!~t.indexOf("*")||!!~e.indexOf(n)}).length>0,s=o.filter(function(n){return!!~o.indexOf("*")||!!~e.indexOf(n)}).length>0;return a&&!s},t=[{url:"//g.csdnimg.cn/??login-box/1.1.4/login-box.js,login-box/1.1.4/login-auto.js",exclude:["passport.csdn","edu.csdn","job.csdn","mall.csdn","mp.csdn",".i.csdn"],include:["www.csdn.net","blog.csdn","feed.csdn","blog-loc.csdn","download.csdn","download-new.csdn","bbs.csdn","ask.csdn","live.csdn","so.csdn","so-pre.csdn","ai.csdn","blockchain.csdn","cloud.csdn"],before:function(){window.csdn.loginBox=window.csdn.loginBox||{},window.csdn.loginBox.loginAutoParams={loginAutoMaxNum:10}},isInit:function(){if(window.csdn.loginBox&&window.csdn.loginBox.scope)return!0}}];t.forEach(function(t){var o=t.isInit&&t.isInit(),a=e(t,n);a&&!o&&(t.before&&t.before(),t.url&&loadScript(t.url,t.after))})}(),!function(n){function e(n){v.userNick=C("UserNick")||v.userNick,v.userName=C("UserName")||v.userName,v.avatar=O(C("AU"))||v.avatar,v.desc=C("UD")||v.desc,C("UD")&&(v.desc=U(v.desc.replace(/\+/g," "))),n(v)}function t(n){return Math.round(new Date(n).getTime()/1e3)}function o(n){var e,o,a=Math.floor(Date.now()/1e3),s=t("2020/01/16 14:00:00"),i=t("2020/02/09 10:30:00"),c=t("2020/01/08 00:00:00"),r=t("2020/02/29 00:00:00"),d=t("2020/03/14 00:00:00"),l=t("2020/03/14 23:59:59"),p=t("2020/06/25 00:00:00"),u=t("2020/06/27 23:59:59");return"ChineseNewYear"===n?(e=s,o=i):"blogStar"===n?(e=c,o=r):"πDay"===n?(e=d,o=l):"dragonBoat"===n&&(e=p,o=u),a>e&&a<o}function a(){var n,e,t="https://csdnimg.cn/cdn/content-toolbar/",a=t+"csdnlogo_ChineseNewYear.gif",s=window.csdn.toolbarIsBlack?t+"314-black.gif":t+"314-white.gif";return csdnlogo_dragonBoat=window.csdn.toolbarIsBlack?t+"dragonBoat-black.gif":t+"dragonBoat-white.gif",o("ChineseNewYear")?(n='<img src="'+a+'">',e="欢度新春",{logo_tpl:n,logo_title:e}):o("πDay")?(n='<img src="'+s+'">',{logo_tpl:n}):o("dragonBoat")?(n='<img src="'+csdnlogo_dragonBoat+'">',{logo_tpl:n}):void 0}function s(){return n("#csdn-toolbar").hasClass("festival")}function i(){o("ChineseNewYear")&&n("#csdn-toolbar").addClass("festival")}function c(){var n=["blog","bbs","download","ask","edu","biwen"],e=document.referrer;if(""!==e)if(e.indexOf(".csdn.net")>-1)for(var t=0;t<n.length;t++)e.indexOf(n[t]+".csdn.net")>-1&&N("c_ref",e,-1);else N("c_ref",e.split("?")[0],-1)}function r(e){var t=["未开始","直播中","已下播"],o=t[e.status],a='<div class="toolbar-notice">                <span class="toolbar-notice-title"></span>                <div class="toolbar-notice-main">                  <a class="notice-main-left">                    <img src="'+e.avatar+'">                  </a>                  <div class="notice-main-right">                    <a class="notice-href" target="_blank" href="'+e.url+'" >'+e.title+'</a>                    <p>                      <span class="notice-main-hot"><i></i>'+e.count+'</span>                      <span class="notice-main-tip"><i></i>'+o+"</span>                    </p>                  </div>                </div>"+(e.cancel?'<span class="toolbar-notice-cancel">x</span>':"")+"</div>",s=n(a),i=e.target?n(e.target):null,c=e.cancel&&s.find(".toolbar-notice-cancel"),r=s.find(".notice-href");c.on("click",function(n){s.remove()}),r.on("click",function(n){d(1*e.messageId)}),i&&i.append(s),setTimeout(function(){s.remove()},15e3)}function d(e){if(e===e){var t="https://msg.csdn.net/v1/web/message/view/live",o={messageId:e};o=JSON.stringify?JSON.stringify(o):'{"messageId":'+e+"}",n.ajax({url:t,type:"post",data:o,contentType:"application/json",xhrFields:{withCredentials:!0},dataType:"json",success:function(n){}})}}function l(e){var t=n("#msg-circle"),o=n("#msgList-notice");parseInt(e)>0&&(t.text(e).fadeIn(),o.find("em").text(e))}function p(e){var t=n("#msg-circle");if(I||C("UN")){var o,a="https://msg.csdn.net/v1/web/message/view/unread",s=99,i=n("#msgList a em"),c=n("#msgToastText"),d=document.head.getElementsByTagName("title"),l={coupon:!0};d=d&&d[0],d&&(o=d.innerHTML),l=JSON.stringify?JSON.stringify(l):'{"coupon":true}',n.ajax({url:a,type:"post",data:l,contentType:"application/json",xhrFields:{withCredentials:!0},dataType:"json",success:function(a){var l;if(a.status){a=a.data;var p=parseInt(a.totalCount);if(parseInt(e)>0){a.totalCount=p+e;var u=n("#msgList-notice");u.find("em").text(e)}if((l=a.totalCount)>0){if(l>=s&&(l="···"),l&&d&&(d.innerHTML="("+l+"条消息)"+o),t.html(l).fadeIn(),!I&&C("UN")&&p>0){n("#csdn-toolbar .onlyUser.unlogin").addClass("anonymous"),n("#csdn-toolbar .onlyUser.unlogin.anonymous").find("img.login_img").attr("src",a.avatarUrl);var m=C("c-toolbar-loginguide");if(!m){var f='<div class="toolbar-notice-bubble">                                  <div class="pos-box">                                    <a href = "https://i.csdn.net/#/msg/index">                                      <span>登录查看未读消息</span>                                    </a>                                    <a class="btn-close">                                      <img src="//csdnimg.cn//cdn/content-toolbar/icon-circle-close.png" >                                    </a>                                  </div>                                </div>';n("#msgBox").append(f),n("#csdn-toolbar .toolbar-notice-bubble").find(".btn-close").click(function(){var e=864e5;N("c-toolbar-loginguide",1,e),n(this).parents(".toolbar-notice-bubble").remove()}),n("#csdn-toolbar .toolbar-notice-bubble").show()}}i.each(function(e,t){var o=n(t).attr("class"),i=Number(a[o],10);i>=s&&(i=s-1+"+"),i&&n(t).html(i)})}if(a.live_info){var h={target:n("#msgBox"),cancel:!0};for(var g in a.live_info)h[g]=a.live_info[g];r(h)}else a.coupon_order>0&&window.location.href.indexOf("assign_skin_id")==-1&&I&&(c.addClass("msg-toast--show"),setTimeout(function(){n("#msgToastText").removeClass("msg-toast--show")},5e3))}},error:function(n){}})}}function u(e){var t=n("#msgList-notice");t.attr("href",e),I?n("#remind").attr("href","https://i.csdn.net/#/msg/index"):n("#remind").attr("href",e)}function m(){var e="https://msg.csdn.net/v1/web/message/view/announcement";n.ajax({url:e,type:"post",contentType:"application/json",xhrFields:{withCredentials:!0},dataType:"json",success:function(n){if(n.status){var e=n.data;N("announcement",encodeURIComponent(JSON.stringify(e)),e.announcementExpire),h(e),l(e.announcementCount),u(e.announcementUrl)}},error:function(n){}})}function f(){var e="https://msg.csdn.net/v1/web/message/read_announcement";n.ajax({url:e,type:"post",contentType:"application/json",xhrFields:{withCredentials:!0},dataType:"json",success:function(n){},error:function(n){}})}function h(e){var t=n("#msgList-notice");t.click(function(){t.find("em").empty(),e.announcementCount=0,N("announcement",encodeURIComponent(JSON.stringify(e)),e.announcementExpire),f()})}function g(n){return'        <div id="'+n+'__drop-down-menu" class="drop-down-menu">          <dl class="hot-search">            <dt class="hot-search-menu">              <span>热门搜索</span>            </dt>          </dl>          <dl class="search-history" class="clearfix">            <dt class="search-history-menu">              <span class="search-history-title">搜索历史</span>              <span class="clear">清空<div  class="clear-img"></div></span>            </dt>          </dl>        </div>'}function b(){return o("blogStar")?'<li><a href="https://bss.csdn.net/m/topic/blog_star2019" title="博客之星">博客之星</a></li>':""}var v={userName:"",userNick:'<a class="set-nick" href="https://passport.csdn.net/account/profile">设置昵称<span class="write-icon"></span></a>',desc:'<a class="fill-dec" href="//my.csdn.net" target="_blank">编辑自我介绍，让更多人了解你<span class="write-icon"></span></a>',avatar:"//csdnimg.cn/public/common/toolbar/images/100x100.jpg"},w="none",_=n("#toolbar-tpl-scriptId"),k=window.csdn&&window.csdn.toolbarIsBlack?" csdn-toolbar-skin-black ":"",x="top"==_.attr("fixed")?" navbar-fixed-top ":"",y=_.attr("domain")?_.attr("domain"):window.location.protocol+"//"+window.location.host;y+="_logo";var C=function(n){for(var e=document.cookie.split("; "),t=0;t<e.length;t++){var o=e[t].split("=");if(o[0]==n&&"UD"==n)return decodeURIComponent(o[1]);if(o[0]==n)return decodeURI(o[1])}},N=function(n,e,t){var o=new Date;if(t==-1)return void(document.cookie=n+"="+escape(e)+";domain=.csdn.net;path=/");if(t)o.setTime(o.getTime()+t);else{var a=30;o.setTime(o.getTime()+24*a*60*60*1e3)}document.cookie=n+"="+escape(e)+";expires="+o.toGMTString()+";domain=.csdn.net;path=/"},U=function(n){var e="";return 0==n.length?"":e=n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\'/g,"&#39;").replace(/\"/g,"&quot;")},O=function(n){if(!n||!v.userName)return!1;var e=n.split("").join("/"),t=v.userName&&v.userName.toLowerCase();return"//profile.csdnimg.cn/"+e+"/2_"+t},I=!1,T="unlogin";e(function(n){n.userName&&(I=!0,_hmt.push(["_setUserTag","5744",n.userName])),T=I?"":"unlogin"});try{_hmt.push(["_setUserTag","6525",C("uuid_tt_dd")])}catch(D){}n(function(){window.location.href.indexOf("so.csdn.net")>-1&&n("input.input_search").focus()});var S={blog:"blog-icon",download:"down-icon",bbs:"bbs-icon",my:"space-icon",code:"code-icon",share:"share-icon",tag:"tag-icon",dashboard:"dashboard-icon",news:"news-icon",tag:"tag-icon",ask:"ask-icon",notify:"notify-icon"};S[_.attr("prod")]&&(w=S[_.attr("prod")]||_.attr("prod"));(function(){var n=window.location.host;return n.split(".")[0]})();window.csdn=window.csdn?window.csdn:{};var j=1571846400,B=1571932800,A=Math.floor(Date.now()/1e3),L=window.csdn.toolbarIsBlack?'<img src="//csdnimg.cn/cdn/content-toolbar/csdnlogo-black.png" class="csdn-logo">':'<img src="//csdnimg.cn/cdn/content-toolbar/csdn-logo.png?v=20200416.1" class="csdn-logo">',M="CSDN首页",E="https://www.csdn.net";A>j&&A<B&&(L=window.csdn.toolbarIsBlack?'<img src="//csdnimg.cn/cdn/content-toolbar/csdn1024-dark.gif">':'<img src="//csdnimg.cn/cdn/content-toolbar/csdn1024-white.gif">',M="1024");var P=a();P&&(L=P.logo_tpl),c();var $="搜CSDN",R="",z="";"1"!==C("c-toolbar-writeguide")&&(z='<img class="close-guide-btn" id="close-guide-btn" src="//csdnimg.cn//cdn/content-toolbar/guide-close-btn.png"/>'),I&&(R='<div id="writeGuideIsLogin" class="write-center-adress">                    <a class="write-center-adress-link" data-report-click=\'{"mod":"1586414474_001","dest":"https://mp.csdn.net/console/editor/html"}\' href="https://mp.csdn.net/console/editor/html" target="_blank">写博客</a>                  </div>');var J="//csdnimg.cn/cdn/content-toolbar/csdn-white-search.png?v=1587006908",H="//csdnimg.cn/cdn/content-toolbar/csdn-sou.png?v=1587021042";searchBtnUrl=window.csdn&&window.csdn.toolbarIsBlack?J:H;var V=C("p_uid");V=V?V.substr(1,1):0;var q=1==V?"https://www.csdn.net/vip":"https://mall.csdn.net/vip",F='<div id="csdn-toolbar" class="csdn-toolbar tb_disnone '+k+x+'">        <div class="container row center-block " id="csdn_container_tool">          <ul class="pull-left left-menu clearfix" id="nav-left-menu">            <li class="app-control app-app">              <a href="'+E+'" title="'+M+'">'+L+'</a>              <div class="appControl">                <span>                  <img src="https://csdnimg.cn/public/common/toolbar/images/csdnqr@2x.png" />                  <em>CSDN</em>                </span>              </div>            </li>            <li class="sub-menu-box" data-sub-menu-type="blog" data-report-click=\'{"mod":"popu_336","dest":"https://blog.csdn.net/","extend1":"博客"}\'>              <a href="//blog.csdn.net/" class="toolbar_to_feed" title="博客">博客</a>            </li>            <li data-report-click=\'{"mod":"popu_336","dest":"https://edu.csdn.net","extend1":"学院"}\' class="app-control app-edu"><a class="link-title" href="//edu.csdn.net" title="学院">学院</a>              <div class="appControl">                <span class="eduwx">                  <img src="https://csdnimg.cn/public/common/toolbar/images/eduwxfix.png" />                  <em>CSDN学院</em>                </span>              </div>            </li>            <li class="sub-menu-box" data-sub-menu-type="download" data-report-click=\'{"mod":"popu_336","dest":"https://download.csdn.net","extend1":"下载"}\' ><a href="//download.csdn.net" title="下载">下载</a></li>            <li class="sub-menu-box" data-sub-menu-type="bbs" data-report-click=\'{"mod":"popu_336","dest":"https://bbs.csdn.net","extend1":"论坛"}\'><a href="//bbs.csdn.net" title="论坛">论坛</a></li>            <li data-report-click=\'{"mod":"popu_336","dest":"https://ask.csdn.net","extend1":"问答"}\'><a href="//ask.csdn.net" title="问答">问答</a></li>            <li data-report-click=\'{"mod":"popu_336","dest":"https://live.csdn.net/","extend1":"直播"}\'><a href="https://live.csdn.net/" title="直播">直播</a></li>            <li data-report-click=\'{"mod":"popu_336","dest":"https://job.csdn.net","extend1":"招聘"}\'><a href="http://job.csdn.net" title="招聘">招聘</a></li>            <li style="display:none;" data-report-click=\'{"mod":"popu_336","dest":"https://www.csdn.net/apps/download?code=pc_1555579859","extend1":"APP"}\' class="app-control app-app"><a class="link-title" href="https://www.csdn.net/apps/download" data-report-query="code=pc_1555579859" title="APP">APP</a>              <div class="appControl">              <span>                <img src="https://csdnimg.cn/public/common/toolbar/images/csdnqr@2x.png" />                <em>CSDN</em>              </span>              </div>            </li>            <li class="sub-menu-box" data-sub-menu-type="vip" data-report-click=\'{"mod":"popu_336","dest":"'+q+'","extend1":"VIP会员"}\' class="vip-caise"><a href="'+q+'" title="VIP会员">VIP会员</a></li>'+b()+'<div class="search_bar onlySearch searchUser">                    <input type="text" class="input_search" name="" autocomplete="off" value="" id="toolber-keyword" placeholder='+$+'>                    <a class="btn-nobg-noborder btn-search">                    <img src="'+searchBtnUrl+'">                    </a>'+g("search_bar")+'</div>          </ul>          <div class="pull-right onlyUser searchUser login-wrap '+T+'">            <ul class="btns">              <li class="write-bolg-btn">                <a class="" href="https://mp.csdn.net" target="_blank" id="blogClick"  data-report-click=\'{"mod":"popu_370","dest":"https://mp.csdn.net"}\'>                    <i class="csdn-write"></i>                    <span>创作中心</span>                </a>'+R+'</li>              <li class="gitChat liCollection">                <a id="collection" href="https://i.csdn.net/#/uc/collection-list" target="_blank" title="我的收藏"><i class="collection"></i></a>              </li>              <li class="gitChat upload msgBox" id="msgBox">                <a class="" id="remind" href="#"><i class="message"></i><div class="toolbar-circle" id="msg-circle"></div></a>                <div class="msgList" id="msgList">                  <dd><a href="#" id="msgList-notice">公告<em class="notice"></em></a></dd>                  <div id="msgList-other">                  <dd><a href="//i.csdn.net/#/msg/index">评论<em class="comment"></em></a></dd>                  <dd><a href="//i.csdn.net/#/msg/attention">关注<em class="follow"></em></a></dd>                  <dd><a href="//i.csdn.net/#/msg/like">点赞<em class="thumb_up"></em></a></dd>                  <dd><a href="//im.csdn.net/im/main.html">私信<em class="im"></em></a></dd>                  <dd><a href="//i.csdn.net/#/msg/answer">回答<em class="invitation"></em></a></dd>                  <dd><a href="//i.csdn.net/#/msg/notice">系统通知<em class="system"></em></a></dd>                  <dd><a href="https://i.csdn.net/#/msg/setting">消息设置</a></dd>                  </div>                </div>                <a href="//i.csdn.net/#/msg/notice" class="msg-toast" id="msgToastText">你有一张VIP限时优惠券哦</a>              </li>              <li class="userinfo"><a href="https://passport.csdn.net/account/login">登录/注册</a><span></span>              </li>              <li class="userLogin userAnonymous">                <div class="loginCenter"><a href="https://i.csdn.net/#/uc/profile" target="_blank"><img class="login_img" src="'+v.avatar+'"></a></div>              </li>              <li class="userLogin">                <div class="loginCenter"><a href="//i.csdn.net" target="_blank"><img class="login_img" src="'+v.avatar+'"></a></div>                <div class="userControl">                <div class="bord">                <div data-report-click=\'{"mod":"popu_789","dest":"https://i.csdn.net/#/uc/follow-list","extend1":"我的关注"}\'><i class="pull_icon pull_icon1"></i><a href="https://i.csdn.net/#/uc/follow-list" target="_blank">我的关注</a></div>                <div data-report-click=\'{"mod":"popu_789","dest":"https://i.csdn.net/#/uc/collection-list","extend1":"我的收藏"}\'><i class="pull_icon pull_icon2"></i><a href="https://i.csdn.net/#/uc/collection-list" target="_blank">我的收藏</a></div>                <div data-report-click=\'{"mod":"popu_789","dest":"https://i.csdn.net/#/uc/profile","extend1":"个人中心"}\'><i class="pull_icon pull_icon4"></i><a href="https://i.csdn.net/#/uc/profile" target="_blank">个人中心</a></div>                <div data-report-click=\'{"mod":"popu_789","dest":"https://i.csdn.net/#/account/index","extend1":"帐号设置"}\'><i class="pull_icon pull_icon7"></i><a href="https://i.csdn.net/#/account/index" target="_blank">帐号设置</a></div>                </div>                  <div class="bord">                  <div data-report-click=\'{"mod":"popu_789","dest":"https://blog.csdn.net/'+v.userName+'","extend1":"我的博客"}\'><i class="pull_icon pull_icon5"></i><a href="https://blog.csdn.net/'+v.userName+'" target="_blank">我的博客</a></div>                  <div data-report-click=\'{"mod":"popu_789","dest":"https://mp.csdn.net/console/article","extend1":"管理博客"}\'><i class="pull_icon pull_icon6"></i><a href="https://mp.csdn.net/console/article" target="_blank">管理博客</a></div>                  <div data-report-click=\'{"mod":"popu_789","dest":"https://edu.csdn.net/mycollege","extend1":"我的学院"}\'><i class="pull_icon pull_icon12"></i><a href="https://edu.csdn.net/mycollege" target="_blank">我的学院</a></div>                  <div data-report-click=\'{"mod":"popu_789","dest":"https://mp.csdn.net/console/upDetailed","extend1":"我的下载"}\'><i class="pull_icon pull_icon13"></i><a href="https://mp.csdn.net/console/upDetailed" target="_blank">我的下载</a></div><div><i class="pull_icon pull_icon14"></i><a href="https://huiyi.csdn.net/activity/myorder" target="_blank">我的活动</a></div>                  </div>                  <div class="bord">                  <div data-report-click=\'{"mod":"popu_789","dest":"https://i.csdn.net/#/wallet/index","extend1":"我的钱包"}\'><i class="pull_icon pull_icon8"></i><a href="https://i.csdn.net/#/wallet/index" target="_blank">我的钱包</a></div>                  <div data-report-click=\'{"mod":"popu_789","dest":"https://order.csdn.net/myorder","extend1":"我的订单"}\'><i class="pull_icon pull_icon9"></i><a href="https://order.csdn.net/myorder" target="_blank">我的订单</a></div>                  </div>                  <div class="bord">                  <div data-report-click=\'{"mod":"popu_789","dest":"https://blog.csdn.net/blogdevteam/article/details/103478461","extend1":"帮助"}\'><i class="pull_icon pull_icon10"></i><a href="https://blog.csdn.net/blogdevteam/article/details/103478461" target="_blank">帮助</a></div>                  <div><i class="pull_icon pull_icon11"></i><a  class="logout">退出</a></div>                  </div>                </div>                <div class="guo_tip_box">关注和收藏在这里</div>              </li>            </ul>          </div>        </div>    </div>';n(document.body).prepend(n(F)),n("#csdn-toolbar .logout").click(function(n){var e={mod:"popu_789"},t="https://passport.csdn.net/account/logout?from="+encodeURIComponent(window.location.href);e.dest=t,e.extend1="退出",window.location.href=t,csdn&&csdn.report?csdn.report.reportClick(e):"",n=window.event||n,n.preventDefault()});(window.location.host.indexOf("bbs.csdn.net")>-1&&window.location.pathname.indexOf("home")>-1||window.location.host.indexOf("bbs.csdn.net")>-1&&window.location.pathname.indexOf("forums")>-1)&&n(".csdn-toolbar").addClass("csdn-toolbarbbshome"),n(document).on("click",".userLogin .bord div a",function(n){n=window.event||n,n.preventDefault()}),n(document).on("click",".userLogin .bord div",function(){var e=n(this).find("a").attr("href");e&&window.open(e)}),i(),n(function(){if(C("announcement")&&"undefined"!==JSON.parse(decodeURIComponent(C("announcement"))).announcementUrl){var n=JSON.parse(decodeURIComponent(C("announcement"))),e=n.announcementUrl,t=n.announcementCount,o=n.isLogin,a=C("UserName");!o&&a?m():(h(n),l(t),u(e))}else m()}),n(function(){if(C("UN")&&C("announcement")){var e=JSON.parse(decodeURIComponent(C("announcement"))),t=e.announcementCount;p(t),n("#remind").attr("href","https://i.csdn.net/#/msg/index")}}),n(function(){function e(){n("#main-home").hasClass("open")&&n("#csdn-toolbar").addClass("tb_bbs"),n(".left_side > span").on("click",function(){n(this).hasClass("btn_toggle_yc")&&n("#csdn-toolbar").removeClass("tb_bbs"),n(this).hasClass("btn_toggle_xs")&&n("#csdn-toolbar").addClass("tb_bbs")})}function t(){function e(n,e,t){var o;return!!n&&(e&&"number"==typeof e&&Number(e,10)>0&&(t=e),!!t&&void setTimeout(function(){o=n(),o&&"function"==typeof e&&e(o)},t))}function t(n,e,t){var o,a=new Date,s=a.getDate()+t;return a.setDate(s),o=e||a.toGMTString(),document.cookie=n+"="+encodeURIComponent(o)+"; max-age="+t+"; domain="+p+";path=/",!0}function o(n){for(var e,t,o=document.cookie,a=o.split("; "),s=0;s<a.length;s++)if(a[s]&&(e=a[s].split("="),e[0]===n)){t=e[1];break}return t}function a(n){n.addClass("hide"),s("toolbarHeightChange")}function s(e){try{e&&n(document).trigger(e)}catch(t){}}function i(){var n,e,t,o,a=!1;return n=new Date,e=n.getTime(),t=new Date(m.start).getTime(),o=new Date(m.end).getTime(),e>=t&&e<o&&(a=!0),a}function c(e,t){var o,a,i,c,r;return!!(o=e?e:null)&&(!!(a=o.posDom?o.posDom instanceof jQuery?o.posDom:n(o.posDom):null)&&(c='<style type="text/css">.advert-bg.hide{display:none;}.advert-bg{background-color:#000;}.advert{width: 100%;margin: 0 auto;position:relative;line-height: 0;font-size: 0;}.advert .advert-log{display:none;width:90px;height:22px;background-image: url("//csdnimg.cn/public/publick_img/gitchat_logo.png");background-repeat: no-repeat;background-size: contain;position:absolute;top:25px;left:27px;z-index: 10;}.advert .advert-a{display:inline-block;width:100%;height:80px;background-repeat: no-repeat;background-size: contain;background-position: 50% 0;opacity:0;-webkit-transition: all 0.2s linear;-o-transition: all 0.2s linear;-ms-transition: all 0.2s linear;-moz-transition: all 0.2s linear;transition: all 0.2s linear;}.advert-cur .advert-a{background-image: url("//csdnimg.cn/public/publick_img/ad_20200703_toolbar80_2.jpg") !important;opacity:1;background-size:auto 80px !important;background-color: #027ef2 !important;}.advert-ex .advert-a{height:325px;opacity:1;}.csdn-bbs .advert .advert-close, .advert .advert-close{position:absolute;z-index:10;right: 2%;top: 15%;color: #fff;font-size: 22px;}</style>',r='<div class="advert-bg"><div class="advert" id="advert"><a href="https://aiprocon.csdn.net/p/live" data-report-query="utm_source=live_703" class="advert-log"></a><a href="https://aiprocon.csdn.net/p/live?utm_source=live_703" style="background-image: url(//csdnimg.cn/public/publick_img/ad_20200703_toolbar325.jpg);background-size: auto 325px; background-color: #027ef2" class="advert-a"></a><a href="" class="advert-close" id="js_advert_close">&times</a></div></div>',!(a.length<=0)&&(a=a[0],i=n(r),document.head.insertBefore(n(c)[0],document.head.getElementsByTagName("title")[0]),document.body.insertBefore(i[0],a),s("toolbarHeightChange"),i.on("transitionend",function(n){s("toolbarHeightChange")}),void(t&&"function"==typeof t&&t({optDom:n(a),tplDom:i})))))}var r=5e3,d=86400,l="is_advert",p=".csdn.net",u=!1,m={start:"2020/07/03 08:50:00",end:"2020/07/04 17:30:00"};return(u=i())?void c({posDom:n("#csdn-toolbar")},function(i){var c,p,u,m;return c=i.optDom,p=i.tplDom,u=n("#js_advert_close"),m=p.find(".advert-a").get(0),u.on("click",function(){return a(p),n(window).resize(),!1}),"https://www.csdn.net/"===window.location.href?(p.addClass("advert-cur"),t(l,"",d),!1):o(l)?(p.addClass("advert-cur"),!1):(p.addClass("advert-ex"),o(l)||t(l,"",d),void e(function(){return p.removeClass("advert-ex"),!0},function(t){e(function(){return p.addClass("advert-cur"),!0},200),t&&setTimeout(function(){n(window).resize(),s("toolbarHeightChange")},500)},r))}):(o(l)&&t(l,"",0),!1)}e();const o=window.location.href.indexOf("/apps/download/")>-1,a="gitchat.csdn.net"===window.location.hostname,s="bss.csdn.net"===window.location.hostname;o||a||s||t()}),n(function(){var e={showMore:function(){var e=n(".show-more .more");e.is(":animated")&&e.stop(!0,!0).fadeIn(200),e.stop(!0,!0).fadeIn(200)},hideMore:function(){var e=n(".show-more .more");e.is(":animated")&&e.stop(!0,!0).fadeIn(200),e.stop(!0,!0).fadeOut(300)}},t={showMore:function(e,t){var o=n(e);o.is(":animated")&&o.stop(!0,!0).fadeIn(200),o.stop(!0,!0).fadeIn(200),t&&n(t).hide()},hideMore:function(e){var t=n(e);t.is(":animated")&&t.stop(!0,!0).fadeIn(200),t.stop(!0,!0).fadeOut(300)}},o={showMore:function(){var e=n(this).find(".appControl");e.is(":animated")&&e.stop(!0,!0).fadeIn(200),s()?n(this).find(".link-title").css("color",""):n(this).find(".link-title").css("color","#222429"),e.stop(!0,!0).fadeIn(200)},hideMore:function(){var e=n(this).find(".appControl");e.is(":animated")&&e.stop(!0,!0).fadeIn(200),n(this).find(".link-title").css("color",""),e.stop(!0,!0).fadeOut(300)}};if(n(".show-more").hover(e.showMore,e.hideMore),n(".userLogin").hover(function(){t.showMore(".userControl",".guo_tip_box")},function(){t.hideMore(".userControl")}),n(".baidu-app-btn").hover(function(){t.showMore(".baiduControl")},function(){t.hideMore(".baiduControl")}),n(".app-app").hover(o.showMore,o.hideMore),n(".app-gitchat").hover(o.showMore,o.hideMore),n(".guo_tip_box").hover(function(){n(this).css("display","none"),n.get("https://statistic.csdn.net/toolbar/followTipsclose")}),n("#msgBox").hover(function(e){var o=n(e.target);o.hasClass("toolbar-notice")||o.parents(".toolbar-notice").length>0||(t.showMore("#msgList"),I&&n("#msgList-other").show())},function(){t.hideMore("#msgList")}),!C("c_adb")){var a=document.createElement("script");a.type="text/javascript",a.src="https://g.csdnimg.cn/check-adb/1.0.5/check-adb.js",document.head.appendChild(a)}n("#toolber-keyword").on("focus",function(){n("#toolber-keyword").attr("placeholder",""),n(".btn-nobg-noborder img").attr("src",J),n("a.btn-nobg-noborder").css("background","#E33E33")}),n("#toolber-keyword").on("blur",function(){n("#toolber-keyword").attr("placeholder","搜CSDN"),n(".btn-nobg-noborder img").attr("src",searchBtnUrl),n("a.btn-nobg-noborder").css("background","#E8E8EE")});var i={blog:[{content:"创作中心",href:"//mp.csdn.net?utm_medium=fe.tool_bar_second.blog.creative_center","data-report-click":'{"mod":"1593505904_001"}'}],edu:[],download:[{content:"我的资源",href:"//mp.csdn.net/console/upDetailed?utm_medium=fe.tool_bar_second.download.my_resources","data-report-click":'{"mod":"1593505904_002"}'}],bbs:[{content:"我的积分",href:"//bbs.csdn.net/user/point?utm_medium=fe.tool_bar_second.bbs.my_points","data-report-click":'{"mod":"1593505904_003"}'}],vip:[{content:"VIP权益",href:"//csdn.net/vip","data-report-click":'{"mod":"1593505904_004"}'}]},c=function(e){if(e&&e.length){var t=n('<div class="sub-menu"></div>');return e.forEach(function(e){var o=n('<a target="_blank">'+e.content+"</a>");for(var a in e)o.attr(a,e[a]);t.append(o)}),t.on("click","a",function(e){e.stopPropagation();var t=n(this).data("report-click");t&&window.csdn&&window.csdn.report&&window.csdn.report.reportClick(t)}),t}return!1};n(".sub-menu-box").each(function(){var e=n(this),t=e.data("sub-menu-type"),o=c(i[t]);o&&n(this).append(o)})}),n(function(){var e=C("c-toolbar-writeguide");if(!I&&!C("UN")&&"passport.csdn.net"!==window.location.host&&"1"!==e){
var t=n("#writeGuide");t.show(),csdn&&csdn.report&&csdn.report.reportView({mod:"1585187295_001"},null,null)}"1"===e&&n("#close-guide-btn").remove(),n("li.write-bolg-btn").hover(function(){csdn&&csdn.report&&csdn.report.reportView({mod:"1585187295_001"},n(this),null)},function(){}),n("#close-guide-btn").on("click",function(){n("#writeGuide").hide(),n("#close-guide-btn").remove(),setTimeout(function(){n("#writeGuide").removeAttr("style")},0);var e=864e5;N("c-toolbar-writeguide",1,e)})}),n(function(){function e(){var n=window.location.host,e=n.split(".")[0],t="";switch(e){case"www":t="";break;case"blog":t="";break;case"blog":t="codes_snippet";break;case"bbs":t="discuss";break;case"download":t="doc";break;case"ask":t="ask";break;case"gitchat":t="gitchat";break;case"geek":t="news";break;case"edu":t="course";break;default:t=""}return n.indexOf(".blog.csdn.net")>-1&&(t="blog"),t}function t(){var n="&u=";return n}function o(n){var o=encodeURIComponent(n),a="//so.csdn.net/so/search/s.do?q="+o+"&t="+e()+t();return""!=o&&void(window.location.href.indexOf("so.csdn.net")>-1?window.location.href=a:window.open(a))}function a(n){var e=encodeURIComponent(n),t="https://so.csdn.net/so/search/s.do?q="+e+"&t=course";return""!=e&&void window.open(t)}function s(){var e=n("#toolber-keyword").val();""===e&&(i(w),w.show(),h({mod:"popu_369"})),k.indexOf("//edu.csdn.net")!=-1&&a(e),r(e,w),o(n("#toolber-keyword").val())}function i(n){d(n),c(n)}function c(e){n.ajax({url:"https://redisdatarecall.csdn.net/recommend/soHotWord",type:"get",data:{},contentType:"application/json",dataType:"json",success:function(n){if(n.status){e.find(".hot-search-menu").nextAll().remove();var t=n.data,o='<div class="hot-search-mess">CSDN热搜</div>';className="";for(var a=0;a<t.length;a++)className=t[a].hot?' class="hot"':"",o+="<dd"+className+">"+t[a].word+"</dd>";e.find(".hot-search").append(o)}},error:function(n){}})}function r(n,e){l(n),d(e)}function d(n){n.find(".search-history-menu").nextAll().remove();var e="",t=f("searchHistoryArray"),o=t.length>10?10:t.length;if(0===o)return void n.find(".search-history").hide();for(var a=0;a<o;a++)e+="<dd>"+t[a]+"</dd>";n.find(".search-history").append(e),n.find(".hot-search").css("width","50%"),n.find(".search-history").show()}function l(e){e=p(e);var t=f("searchHistoryArray"),o=n.inArray(e,t);o>-1&&t.splice(o,1),""!==n.trim(e)&&t.unshift(e),t.length>10&&t.pop(),m("searchHistoryArray",t)}function p(n){return n.replace(/</g,"&lt;").replace(/>/g,"&gt;")}function u(){m("searchHistoryArray",[])}function m(n,e){N(n,encodeURIComponent(JSON.stringify(e)))}function f(n){var e=C(n);return e?JSON.parse(decodeURIComponent(e)):[]}function h(n){try{csdn&&csdn.report&&csdn.report.reportClick(n)}catch(e){}}function g(){n(".btn-search").length>0?(n(".btn-search").detach(),n(".search_bar").append('<a href="javascript:;" class="btn-nobg-noborder btn_clear"><i class="iconfont-toolbar toolbar-guanbi1"></i></a>')):(n(".btn_clear").detach(),n(".search_bar").append('<a href="//so.csdn.net/so/" target="_blank" class="btn-nobg-noborder btn-search"><i class="iconfont-toolbar toolbar-sousuo"></i></a>'))}var b=n(".btn-search"),v=n(".input_search"),w=n("#search_bar__drop-down-menu"),_=n("#nav-left-menu").find("li>a").not(".btn-search"),k=document.location.href;k=k.substr(k.indexOf("/")),k.indexOf("//edu.csdn.net")!=-1&&($="搜索学院课程",n("#toolber-keyword")[0].setAttribute("placeholder",$));for(var x=0;x<_.length;x++){var y=_[x].getAttribute("href");y=y.substr(y.indexOf("/")),k.indexOf("apps/download")>-1&&(_[9].className="active"),k.indexOf(y)!=-1&&"//mall.csdn.net"!=y&&(_[x].className="active",_[0].className=""),k.indexOf("//mall.csdn.net")!=-1&&k.indexOf("vip")==-1&&(k.indexOf("//mall.csdn.net/coupon")!=-1?_[9].className="active":_[7].className="active"),k.indexOf("//www.csdn.net")!=-1&&k.indexOf("app")!==-1&&(_[1].className="")}b.on("click",function(n){return s(),n.preventDefault(),!1}),v.keyup(function(n){var e=n.keyCode;13==e&&s()});var U=n("#toolber-keyword");if(U.focus(function(){i(w),""===v.val()&&(w.show(),h({mod:"popu_369"}))}),v.on("input",function(){""!==n(this).val()?w.hide():(i(w),w.show(),h({mod:"popu_369"}))}),w.find(".clear").on("click",function(){u(),w.find(".search-history").hide(),w.find(".hot-search").css("width","100%"),w.find(".search-history-menu").nextAll().remove()}),n(document).on("click","#search_bar__drop-down-menu dl dd",function(e){var t=n(e.target),o=t.parent().attr("class"),a=t.text();n("#toolber-keyword").val(a),b.click(),w.hide(),"hot-search"===o&&h({mod:"popu_845",extra:JSON.stringify({searchword:a})}),"search-history"===o&&h({mod:"popu_846",extra:JSON.stringify({searchword:a})})}),n(document).on("click",function(e){var t=n(e.target);0===t.closest(".search_bar").length&&w.hide()}),n(document).on("click",".toolbar_delete_bar",function(){n(".input_search").val(" ")}),n(document).on("click",".btn_clear",function(){n(".input_search").val(""),g(),isInputSearch=!1}),I){n("#layerd").find("div.layer_close").click(function(){return confirm("成为CSDN VIP会员,即刻享受全站免广告特权,前往购买?")&&(window.location.href="https://mall.csdn.net/vip"),!1});var O=n("div.box-box-default"),T=n("div.box-box-large"),D=n("div.box-box-aways");O.find("a.btn-remove").click(function(){return confirm("成为CSDN VIP会员,即刻享受全站免广告特权,前往购买?")&&(window.location.href="https://mall.csdn.net/vip"),!1}),T.find("a.btn-remove").click(function(){return confirm("成为CSDN VIP会员,即刻享受全站免广告特权,前往购买?")&&(window.location.href="https://mall.csdn.net/vip"),!1}),D.find("a.btn-remove").click(function(){return confirm("成为CSDN VIP会员,即刻享受全站免广告特权,前往购买?")&&(window.location.href="https://mall.csdn.net/vip"),!1})}n(document).on("click",".prevent_a",function(n){n.preventDefault()}),loadScript("//csdnimg.cn/search/baidu_opensug-1.0.1.js",function(){BaiduSuggestion.bind("toolber-keyword",{XOffset:"0",YOffset:"-5",fontSize:"14px",width:260,"line-height":"35px",padding:"0 10px",color:"#666C7A",borderColor:"#fff",bgcolorHI:"#F0F1F2",sugSubmit:!1},function(){b.click()})})})}(jQuery);