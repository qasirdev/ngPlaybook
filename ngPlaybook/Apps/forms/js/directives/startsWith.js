(function (module) {

    var startsWith = function () {

        return {
            restrict: "EA",
            require: "ngModel",  //ng-model controller : as we need validation against a model,so required ngModel
            link: function(scope, element, attributes, ngModel){
                var value=attributes.startsWith;

                //on ng-model controller,go to validators property and add new fucntion startswith
                //because this is register as a validator angular automatically pass modelValue on which validation needs to apply
                ngModel.$validators.startsWith=function(modelValue){
                    if(value && modelValue[0] != value){
                        return false;
                    }
                    return true;
                }
            }

        };

    };

    module.directive("startsWith", startsWith);

}(angular.module("forms")));
