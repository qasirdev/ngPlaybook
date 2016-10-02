(function(module) {


    module.config(function ($provide) {
        //$provide.decorator("$exceptionHandler", function ($delegate, alerting) { //it cause circular dependency so use injector
        $provide.decorator("$exceptionHandler", function ($delegate, $injector) {
                //$delegate represents origional service like $log, alerting service
            return function (exception,cause) {
                $delegate(exception, cause);

                var alerting = $injector.get('alerting');
                alerting.addDanger(exception.message);
            };
        });
    });

}(angular.module("common")));