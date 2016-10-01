(function (module) {

    var oauth = function ($http, formEncode, currentUser) {

        function login(username, password) {
            var config = {
                headers: {
                    "content-type": "application/x-www-form-urlencoded"
                }
            };

            var data = formEncode({
                username: username,
                password: password,
                grant_type: "password"
            });

            return $http.post('/login', data, config)
                 .then(function (response) {
                     currentUser.setProfile(username, response.data.access_token);
                     return username;
                 });
        };

        return {
            login: login
        };
    };

    module.factory("oauth", oauth);

}(angular.module("common")));
