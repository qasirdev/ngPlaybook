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

        var setupDom = function (input, form, scope) {
            var inputName = input.attr("name");
            var formName = form.$name;
            var pending = "<div ng-if='" + formName + "." + inputName + ".$pending'>Checking name...</div>";
            input.parent().append($compile(pending)(scope));
        };

        return {
            restrict: "EA",
            require: ["ngModel", "^form"], //this is Angular ng-model and profileFormController
            link: function (scope, element, attributes, controllers) {
                var ngModel=controllers[0];
                var formController=controllers[1];
                //in startsWith.js
                //ngModel.$validators.startsWith = function(modelValue){};
                ngModel.$asyncValidators.username = validateUsername;

                setupDom(element,formController,scope);
            }

        }
    };

    module.directive("username", username);

}(angular.module("forms")));
