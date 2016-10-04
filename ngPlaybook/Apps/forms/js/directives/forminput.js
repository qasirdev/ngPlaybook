(function (module) {
   
    var setupDom=function(element){
        var input=element.querySelector("input,textarea,select,otf-rating");
        var type = input.getAttribute("type");
        var name = input.getAttribute("name");
        //class can only add to input=text, other wise 
        if(type!="checkbox" && type!="radio"){
            input.classList.add("form-control");
        }

        var label=element.querySelector("label");
        label.classList.add("control-label");
        input.classList.add("form-group");

        return name;
    };

    var addMessages = function (form, element, name, $compile, scope) {
        var messages = "<div class='help-block' ng-messages='" +
                form.$name + "." + name + ".$error" +
                "' ng-messages-include='templates/messages.html'><div>";
        element.append($compile(messages)(scope));
    };

    //var link=function(scope,element,attributes,formController){
    //    var name=setupDom(element[0]); //get origional element by element[0], origional element is jQuery object
    //    addMessages(formController,element,name);
    //};
    var link = function ($compile) {
        return function (scope, element, attributes, formController) {
            var name = setupDom(element[0]);
            addMessages(formController, element, name, $compile, scope);
        };
    };

    var forminput = function ($compile) {

        return {
            restrict: "EA",
            link: link($compile),
            require:"^form", //formController
        };

    };

    module.directive("forminput", forminput);

}(angular.module("forms")));
