lmapp.service('scroll', function(){
    this.iscroll=function(){
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
                return parseFloat(s[0]+s[3]) < 44 ? false : true
            }
        }
        FastClick.attach(document.body);
        $('#wrapper a').css({
            'line-height': $("#wrapper li").height()-2+'px'
        });
        $(".wrapper li").on("click",function(){
            $(this).addClass('on').siblings().removeClass('on');
        });

    }
});