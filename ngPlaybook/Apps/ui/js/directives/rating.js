(function (module) {

    var odfRating = function () {
        return {
            scope: {
                value: "="
            },
            require: "odfRating",//odfRatingController
            templateUrl: "/apps/ui/templates/rating.html",
            controller: "odfRatingController",
            link: function (scope,element,attributes,controller) { //its real job is link between scope and Dom
                var min = parseInt(element.min || "1");
                var max = parseInt(element.max || "5");

                controller.initialize(min,max);
            }            
        };
    };

    var odfRatingController = function ($scope) { //here $scope is same as link: scope
        this.initialize = function (min, max) {
            $scope.preview = -1; //no star is selected
            $scope.stars = new Array(max-min+1);
        };

        $scope.click = function ($index) {
            $scope.value = $index + 1;
        }
        $scope.mouseover = function ($index) {
            $scope.preview = $index;
        };
        $scope.mouseout = function ($index) {
            $scope.preview = -1;
        };
        $scope.styles = function ($index) {
            //styles directive return object and each property becomes class if it is true
            return {
                "glyphicon": true,
                "glyphicon-star": $index < $scope.value,
                "glyphicon-star-empty": $index >= $scope.value,
                "starpreview": $index <= $scope.preview
            };
        };
    };

    module.controller("odfRatingController", odfRatingController);
    module.directive("odfRating", odfRating);

}(angular.module("ui")));