/*路由的设置*/
    lmapp.config(['$routeProvider',function($routeProvider){
        $routeProvider
            .when('/index',{
                templateUrl: "views/index.html",
                controller:"indexCtrl"
            })
            .when('/tingshuo',{
                templateUrl: "views/tingshuo.html",
                controller:"tsCtrl"
            })
            .when('/liaoliao',{
                templateUrl: "views/liaoliao.html",
                controller: "llCtrl"
            })
            .when('/sheqv',{
                templateUrl: "views/sheqv.html",
                controller: "sqCtrl"
            })
            .when('/lanmeijiang',{
                templateUrl: "views/lanmeijiang.html",
                controller: "lmjCtrl"
            })
            .when('/person',{
                templateUrl:"views/personCenter.html",
                controller:"personCenter"
            })
            .when('/movement', {
                templateUrl: "views/movement.html",
                controller: "movementCtrl"
            })
            .when('/interesting',{
                templateUrl:"views/interesting.html",
                controller:"interestingCtrl"
            })
            .when('/travelNote',{
                templateUrl:"views/travelNote.html",
                controller:"travelNoteCtrl"
            })
            .when('/jamDetails',{
                templateUrl:"views/jamDetails.html",
                controller:"jamDetails"
            })
            .when('/tsdetail/:id',{
                templateUrl: "views/tsdetail.html",
                controller: "tsdCtrl"
            })
            .when('/login',{
                templateUrl:"views/login.html",
                controller:"login"
            })
            .when('/register',{
                templateUrl:"views/register.html",
                controller:"register"
            })
            .when('/personSet',{
                templateUrl:"views/personSet.html",
                controller:"personSet"
            })
            .otherwise({
                redirectTo:"/index"
            })

    }]);


/*define(['lmapp'],function(lmapp){
    return lmapp.config(['$routeProvider',function($routeProvider){
        $routeProvider
            .when('/index',{
                templateUrl: 'views/index.html',
                controller: 'indexCtrl'
            })
            .when('/tingshuo',{
                templateUrl: 'views/tingshuo.html',
                controller: 'tsCtrl'
            })
            .when('/',{
                templateUrl: 'views/liaoliao.html',
                controller: 'llCtrl'
            })
            .when('/jam',{
                templateUrl: 'views/jam.html',
                controller: 'jamCtrl'
            })
            .when('/sheqv',{
                templateUrl: 'views/sheqv.html',
                controller: 'sheqvCtrl'
            })
            .otherwise({ redirectTo: '/'});
    }]);
})*/