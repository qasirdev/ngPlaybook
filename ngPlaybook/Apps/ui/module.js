(function () {

    var module = angular.module("ui", ["common",
                                       "ngAnimate",
                                       "ui.router",
                                       "googlechart",
                                       "ui.bootstrap"]);

    module.config(function ($stateProvider, $urlRouterProvider) {

    });

    module.run(function (googleChartApiConfig) {
        googleChartApiConfig.optionalSettings.packages.push("calendar");
    });

}());



