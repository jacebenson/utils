// Code goes here

(function () {

    var app = angular.module('sampleApp', ['ngRoute']);

    app.config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'home.html'
            })
            .when('/about', {
                templateUrl: 'about.html'
            })
            .when('/converters/:name*',{
                templateUrl:function(url){
                    return '/converters/'+url.name + '.html';
                }
            })
            .when('/editors/:name*',{
                templateUrl:function(url){
                    return '/editors/'+url.name + '.html';
                }
            })
            .when('/string/:name*',{
                templateUrl:function(url){
                    return '/string/'+url.name + '.html';
                }
            })
            .when('/number/:name*',{
                templateUrl:function(url){
                    return '/number/'+url.name + '.html';
                }
            })
            .when('/image/:name*',{
                templateUrl:function(url){
                    return '/image/'+url.name + '.html';
                }
            })
            .when('/other/:name*',{
                templateUrl:function(url){
                    return '/other/'+url.name + '.html';
                }
            })
            .otherwise({ templateUrl: '/404.html' });
    });
})();

jQuery(function ($) {

    $(".sidebar-dropdown > a").click(function () {
        $(".sidebar-submenu").slideUp(200);
        if (
            $(this)
                .parent()
                .hasClass("active")
        ) {
            $(".sidebar-dropdown").removeClass("active");
            $(this)
                .parent()
                .removeClass("active");
        } else {
            $(".sidebar-dropdown").removeClass("active");
            $(this)
                .next(".sidebar-submenu")
                .slideDown(200);
            $(this)
                .parent()
                .addClass("active");
        }
    });

    $("#close-sidebar").click(function () {
        $(".page-wrapper").removeClass("toggled");
    });
    $("#show-sidebar").click(function () {
        $(".page-wrapper").addClass("toggled");
    });




});