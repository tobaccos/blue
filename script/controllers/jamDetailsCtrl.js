/* Created by Administrator on 2016-08-13.*/
lmapp.controller('jamDetails',function($scope,imgscroll,contWH,picPreview){
    //获取数据
    $.getJSON("json/jamDetails.json",function(data){
        $(".group-summary-cont").html(decodeURI(data.group.group_intro));
        $scope.pageData=data;
        $scope.$apply();
    });
    //调用自动计算文字块宽高服务
    contWH.contWidthHeight($(".topic-summary-pic"),$(".topic-cont-words"),$(".hasPic"));
    //调用iscroll滚动服务
    $scope.$on('ngRepeatFinished',function(){
        imgscroll.iscroll();
    });

    //调用预览上传图片服务
    $("#onloadPic").on("change",function(){
        picPreview.picPreview("onloadPic","preview");
    });
});