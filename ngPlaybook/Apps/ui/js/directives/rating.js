(function (module) {

    var odfRating = function () {
        return {
            scope: {
                value: "="
            },
            link: function (scope,element,attributes) {
                var min = parseInt(element.min || "1");
                var max = parseInt(element.max || "5");

                scope.$watch("value", function (newValue) {
                    element.empty();
                    for (var i = 0; i < newValue; i++) {
                        element.append('<button class="btn btn-default btn-xs"><span class="glyphicon glyphicon-star" aria-hidden="true"></span></button>');
                    }
                });

                element.on("click", function () {
                    scope.$apply(function () {
                        if (scope.value < max) {
                            scope.value += 1;
                        }
                        else {
                            scope.value = min;
                        }
                    });
                });

            }            
        };
    };

    module.directive("odfRating", odfRating);

}(angular.module("ui")));