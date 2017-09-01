angular.module("mynav",[])
    .directive('navs',[function(){
        return{
            restrict:"AE",
            replace:'true',
            templateUrl:'views/nav.html',
            scope:false,
            controller:function($scope){
                $scope.flag = false;
                $(".login-btns-in").height($("body").width()*0.24);
            }
        }   
    }])