/**
 * Created by Administrator on 2016-08-18.
 */
lmapp.service("contWH",function(){
    this.contWidthHeight=function(pic,cont,hasPic){
        $(function(){
            var img = new Image();
            img.src = $(pic).eq(0).find('img').attr('src');
            ContWidth = $(pic).width();

            img.onload = function(){
                var bili = ContWidth/this.width;
                var ContHeight = this.height*bili;
                $(cont).height(ContHeight+2);
                // var picWidth=$(pic).width();
                var picWidth = ContWidth;
                var totalWidth=$(hasPic).width();
                var remainWidth=(1-(picWidth/totalWidth));
                $(hasPic).width(remainWidth*100-3+"%");
            };

        });
    }
});
