(function (module) {

    var alerting = function ($timeout) {

        var currentAlerts = [];
        var alertTypes = ['success', 'info', 'danger', 'warning'];

        var addAlert = function (type, message) {

            var alert = { type: type, message: message };

            currentAlerts.push(alert);
            $timeout(function () {
                removeAlert(alert);
            }, 500);
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

        var removeAlert = function (alert) {
            for (var i = 0; i < currentAlerts.length;i++){
                if (currentAlerts[i] === alert) {
                    currentAlerts.splice(i, 1);
                    break;
                }
            }
        };

        return {
            addAlert: addAlert,
            addWarning:addWarning,
            addSuccess:addSuccess,
            addInfo:addInfo,
            addDanger:addDanger,
            currentAlerts: currentAlerts,
            alertTypes: alertTypes,
            removeAlert: removeAlert
        };
    };

    module.factory('alerting', alerting);

}(angular.module("common")))
