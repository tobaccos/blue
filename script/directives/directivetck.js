angular.module("mytags",[])
    .directive('tck',[function(){
        return{
            restrict:"ECMA",
            replace:'true',
            templateUrl:'views/tck.html',
            scope:{},
            controller:function($scope){
                $scope.listflag = false;
            }
        }   
    }]);
/* 弹出框的封装指令 */
/*define(['zepto','lmapp'],function($,app){
    app.directive('popbtn',[function(){
        return {
            restrict: 'AE',
            replace:true,
            templateUrl:"views/popbtn.html",
            scope: false,
            link: function(scope,ele,attr){
                $('.tanchu').tap(function(){
                    $(".poplist").toggleClass('on');
                });
            }
        }
    }]);
})*/