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
            .when('/converters/:name*',{
                templateUrl:function(url){
                    return '/converters/'+url.name + '.html';
                }
            })
            .when('/converters/:name*',{
                templateUrl:function(url){
                    return '/converters/'+url.name + '.html';
                }
            })
            .when('/converters/:name*',{
                templateUrl:function(url){
                    return '/converters/'+url.name + '.html';
                }
            })
            .otherwise({ redirectTo: '/' });
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