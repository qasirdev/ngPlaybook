(function (module) {

    var otfRatingController = function ($scope) {

        var ngModel;

        this.init = function (min, max, ngModelController) {
            ngModel = ngModelController;
            ngModel.$render = this.render;

            $scope.stars = new Array(max - min + 1);
        };

        this.render = function () {
            $scope.value = ngModel.$viewValue;
        };

        $scope.mouseover = function ($index) {
            $scope.preview = $index;
        };

        $scope.mouseout = function () {
            $scope.preview = -1;
        };

        $scope.click = function ($index) {
            //$scope.value = $index + 1;
            ngModel.$setViewValue($index+1);
        };

        $scope.styles = function ($index) {
            return {
                "glyphicon": true,
                "glyphicon-star": $index < $scope.value,
                "glyphicon-star-empty": $index >= $scope.value,
                "starpreview": $index <= $scope.preview
            };
        };
    };

    var otfRating = function () {

        return {
            require: ["otfRating","ngModel"], //in home.html we used ng-model for Rating element 
            scope: {
                //value: "="
            },
            templateUrl: "templates/rating.html",
            controller: "otfRatingController",
            link: function (scope, element, attributes, controllers) {
                var ratingController = controllers[0];
                var ngModelController = controllers[1];

                var min = parseInt(attributes.min || "1");
                var max = parseInt(attributes.max || "10");
                ratingController.init(min, max, ngModelController);
            }
        };
    };

    module.controller("otfRatingController", otfRatingController);
    module.directive("otfRating", otfRating);

}(angular.module("forms")));