/*  入口文件 main*/

require.config({
    baseUrl: "script/",
    paths: {
        "jquery": "libs/jquery-2.1.1.min",
        //"zepto": "libs/zepto.min",
        //"touch": "libs/touch",
        "angular": "libs/angular.min",
        "angular-route": "libs/angular-route.min",
        "swiper": "libs/swiper-3.3.1.jquery.min",
        
        //"popbtn": "directives/popbtn",

        "route": "routes/route",

        "lmapp": "controllers/lanmeiapp",
        "llCtrl": "controllers/llCtrl",
    },
    shim: {
        'jquery':{
            exports: 'jquery'
        },
        'angular':{
            exports: 'angular'
        },
        'angular-route':{
            deps: ["angular"],
            exports: 'angular-route'
        },
        'swiper':{
            deps:['jquery'],
            exports: 'swiper'
        }
    }
});

require(['zepto','angular','jquery','touch','angular-route','swiper','lmapp','llCtrl','popbtn','route'],function ($,angular){

    $(function(){
        angular.bootstrap(document,["lanmeiapp"]);
    })
})