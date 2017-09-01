lmapp.controller('sqCtrl',function($scope,scroll){
    scroll.iscroll();
    // 实际应该是$http服务注入后请求数据放入这个对象数组中。
    $scope.cardCont={
        card:[
                {
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
        }
    });

    

