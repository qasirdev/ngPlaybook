(function (module) {

    var username = function ($http, alerting, $q, $compile) {

        var processResponse = function (response) {
            if (response.data) {
               return $q.when(true);
            }
            else {
               return $q.reject(false);
            }
        };

        var validateUsername = function (modelValue) {
            //return promise, vlue from element
            return $http.get("/api/namevalidation?name=" + encodeURI(modelValue))
                        .then(processResponse);
        };

        return {
            restrict: "EA",
            require: "ngModel", //this is Angular ng-model
            link: function (scope, element, attributes, ngModel) {
                //in startsWith.js
                //ngModel.$validators.startsWith = function(modelValue){};
                ngModel.$asyncValidators.username = validateUsername;
            }

        }
    };

    module.directive("username", username);

}(angular.module("forms")));
