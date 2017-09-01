/* Created by Administrator on 2016-08-13.*/
//游记页的控制器
lmapp.controller('travelNoteCtrl',function($scope,imgscroll){
    $.getJSON("json/travelNote.json",function(data){
        $(".user-pre-cont").html(decodeURI(data.artical.artical_cont));
        $scope.pageData=data;
        $scope.$apply();
    });
    //播放器样式控制
    $scope.playflag = false;
    // 回复框的angular控制
    $scope.secshow1 = false;

    $scope.$on('ngRepeatFinished',function(){
        // 这个jquery代码用于生成可动态调整的iscroll尺寸
        imgscroll.iscroll();
    })
});

//乐章页的控制器
lmapp.controller('movementCtrl',function($scope,imgscroll){
    $.getJSON("json/movement.json",function(data){
        $(".user-pre-cont").html(decodeURI(data.artical.artical_cont));
        $scope.pageData=data;
        $scope.$apply();
    });
    //播放器样式控制
    $scope.playflag = false;
    // 回复框的angular控制
    $scope.secshow1 = false;

    $scope.$on('ngRepeatFinished',function(){
        // 这个jquery代码用于生成可动态调整的iscroll尺寸
        imgscroll.iscroll();
    })
});

//乐趣页的控制器
lmapp.controller('interestingCtrl',function($scope,imgscroll){
    $.getJSON("json/interesting.json",function(data){
        $(".user-pre-cont").html(decodeURI(data.artical.artical_cont));
        $scope.pageData=data;
        $scope.$apply();
    });
    //播放器样式控制
    $scope.playflag = false;
    // 回复框的angular控制
    $scope.secshow1 = false;

    $scope.$on('ngRepeatFinished',function(){
        // 这个jquery代码用于生成可动态调整的iscroll尺寸
        imgscroll.iscroll();
    })
});