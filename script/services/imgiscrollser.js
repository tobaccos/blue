lmapp.service('imgscroll', function(){
    this.iscroll=function(){
        var screenWidth = $(window).width();//获取设备宽度
        $(".zan-list li").width(screenWidth*0.15);//调整li的大小
        var oriHeight = $(".zan-list").width();
        $(".zan-list").width(oriHeight+screenWidth*0.30);//调整ul的横向大小
        $(".playbtn").on('click',function(){
            var player = document.getElementById('audio');
            if(player.paused){
                player.play();
            }else{
                player.pause();
            }
        });
        var myScroll;
        myScroll = new IScroll("#wrapper",{
            mouseWheel: true,
            scrollbars:false,
            scrollX:true,
            scrollY:false,
            click:iScrollClick()
        });
        function iScrollClick(){
            if (/iPhone|iPad|iPod|Macintosh/i.test(navigator.userAgent)) return false;
            if (/Chrome/i.test(navigator.userAgent)) return (/Android/i.test(navigator.userAgent));
            if (/Silk/i.test(navigator.userAgent)) return false;
            if (/Android/i.test(navigator.userAgent)) {
                var s=navigator.userAgent.substr(navigator.userAgent.indexOf('Android')+8,3);
                return parseFloat(s[0]+s[3]) < 44 ? false : true;
            }
        }
    }
});