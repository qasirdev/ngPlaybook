(function (common) {

    var alerting = function () {

        var currentAlerts = [];

        var addAlert = function (type, message) {
            currentAlerts.push({type:type,message:message});
        };

        var addWarning = function (message) {
            addAlert('warning',message);
        };
        var addSuccess = function (message) {
            addAlert('success',message);
        };
        var addInfo = function (message) {
            addAlert('info',message);
        };
        var addDanger = function (message) {
            addAlert('danger',message);
        };

        return {
            addAlert: addAlert,
            addWarning:addWarning,
            addSuccess:addSuccess,
            addInfo:addInfo,
            addDanger:addDanger,
            currentAlerts:currentAlerts
        };
    };

    module.factory('alerting', alerting);

}(angular.module("common")))
