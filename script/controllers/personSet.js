/**
 * Created by zbacao on 2016/8/16.
 */
lmapp.controller("personSet",["$scope",function($scope){
        $scope.return=function(){
            window.history.back()
        };
        $scope.num=false;
        $scope.sexSet=function(){
            $scope.num=true;
            console.log($scope.num);
         }
        $scope.down=function(){
            $scope.num=false;
            console.log($scope.num);
        }

    $(function () {
        $(".p_select ").each(function () {
            var s = $(this);
            var z = parseInt(s.css("z-index"));
            var dt = $(this).children("dt");
            var dd = $(this).children("dd");
            var _show = function () {
                dd.slideDown(200);
                dt.addClass("cur");
                s.css("z-index", 900 + 1);
            };
            var _hide = function () {
                dd.slideUp(200);
                dt.removeClass("cur");
                s.css("z-index", 900);
            };
            dt.click(function () {
                dd.is(":hidden") ? _show() : _hide();
            });
            dd.find("a").click(function () {
                dt.html($(this).html());
                _hide();
            });
            $("body").click(function (i) {
                !$(i.target).parents(".p_select ").first().is(s) ? _hide() : "";
            });
        })
        $(".p_rsex ").each(function () {
            var s = $(this);
            var z = parseInt(s.css("z-index"));
            var dt = $(this).children("dt");
            var dd = $(this).children("dd");
            var _show = function () {
                dd.slideDown(200);
                dt.addClass("cur");
                s.css("z-index", 999 + 1);
            };
            var _hide = function () {
                dd.slideUp(200);
                dt.removeClass("cur");
                s.css("z-index", 999);
            };
            dt.click(function () {
                dd.is(":hidden") ? _show() : _hide();
            });
            dd.find("a").click(function () {
                dt.html($(this).html());
                _hide();
            });
            $("body").click(function (i) {
                !$(i.target).parents(".p_rsex ").first().is(s) ? _hide() : "";
            });
        })

    });

}]);
