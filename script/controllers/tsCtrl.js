lmapp.controller('tsCtrl',function($scope,scroll){
    scroll.iscroll();
    $scope.cardCont={
        card:[
                {
                    id:1,
                    headsrc:"image/cardimg/userhead.png",
                    username:"碧池大大",
                    tags:"小时光",
                    cardsrc:"image/cardimg/cardimg.png",
                    cont:"欢乐童年系列之一",
                    num: 12,
                    zannum:22,
                    wechatnum:22
                },
                {
                    id:2,
                    headsrc:"image/cardimg/userhead.png",
                    username:"碧池大大",
                    tags:"小时光",
                    cardsrc:"image/cardimg/cardimg.png",
                    cont:"欢乐童年系列之一",
                    num: 12,
                    zannum:22,
                    wechatnum:22
                },
                {
                    id:1,
                    headsrc:"image/cardimg/userhead.png",
                    username:"碧池大大",
                    tags:"小时光",
                    cardsrc:"image/cardimg/cardimg.png",
                    cont:"欢乐童年系列之一",
                    num: 12,
                    zannum:22,
                    wechatnum:22
                }
            ]
        };

    $(function(){

        $.ajax({
            type:"get",
            url:"http://iwen.wiki/zhichenshop/shopping/bannerView/bannerview.php",
            dataType:"json",
            success:function(data){
                bannerAdapter(data);
            }
        });

        function bannerAdapter(data){
            $(data.shoplistimg).each(function(index){
                $(".shop").append("<li><a><img src='"+data.shoplistimg[index]+"'><span class='desc'><span class='title'>"+data.shoplisttitle[index]+"</span><i class='money'>￥"+data.shoplistmoney[index]+"</i><span class='buy'>立即购买</span></a><>");
            })
        }

    });


});

    

