(function(){

    var app = angular.module("myApp", ["ngRoute","ui.router"]);
    app.config(function($routeProvider, $locationProvider, $httpProvider) {
        // $stateProvider
        //     .state('add-review', {
        //         url: '/gym_users:userId?',
        //         templateUrl: 'Views/index.html',
        //         // controller: 'AddReviewController',
        //         authenticate: true
        //     });
        $routeProvider
            .when("/machine/login", {
                templateUrl : "Views/machine/login.html",
            })


            .when("/machine/view_gym_users/machine_id=:id/:access_token", {
                templateUrl : "Views/machine/view_machine_gym_user.html",
                
                controller: 'view_machine_gym_user_controller'
            })


            .when("/machine/gym_user_detail/machine_id=:id/user=:userId/:access_token", {
                templateUrl : "Views/machine/view_machine_gym_user_detail.html",
                
                controller: 'view_machine_gym_user_detail_controller'
            })


            .when("/machine/bottles/machine_id=:id/:access_token", {
                templateUrl : "Views/machine/view_machine_bottle_detail.html",
                
                controller: 'view_machine_bottle_detail_controller'
            })


            .when("/machine/add_gym_user/machine_id=:id/:access_token", {
                templateUrl : "Views/machine/add_gym_user.html",

                controller: 'add_gym_user_controller'
               
            })


            .when("/machine/del_gym_user/machine_id=:id/:access_token", {
                templateUrl : "Views/machine/del_gym_user.html",   
               
            })


            .when("/machine/edit_gym_user/machine_id=:id/:access_token", {
                templateUrl : "Views/machine/edit_gym_user.html",   
               
            })


            .when("/analytics_gym_user/user_found/gymUserId=:id/:access_token", {
                templateUrl : "Views/analytics_chart_user.html",
                
                controller: 'analytics_user_controller'
            });


        $locationProvider.html5Mode(true);

        //initialize get if not there
	    if (!$httpProvider.defaults.headers.get) {
	        $httpProvider.defaults.headers.get = {};    
	    }    

	    // Answer edited to include suggestions from comments
	    // because previous version of code introduced browser-related errors

	    //disable IE ajax request caching
	    $httpProvider.defaults.headers.get['If-Modified-Since'] = 'Mon, 26 Jul 1997 05:00:00 GMT';
	    // extra
	    $httpProvider.defaults.headers.get['Cache-Control'] = 'no-cache';
	    $httpProvider.defaults.headers.get['Pragma'] = 'no-cache';


        
    });

// app.controller('view_machine_gym_user_controller', ['$routeParams', '$scope', '$http', function($routeParams, $scope, $http ) {
        
//         alert("IN MACHINE GYM USER CONTROLLER")
//         var id = $routeParams.id
//         var access_token = $routeParams.access_token
//         var url = '/api/machines/' + id + '/gymUser?' + access_token
//         alert(url)
//         $http.get('/api/machines/' + id + '/gymUser?' + access_token)
//         .then(function(response) {
//         $scope.users_json_data = response.data;
//         // $scope.reg_number = $routeParams.registration_number;
//         // alert("CONTROLLER WORKS")
//         });
//     }]);


     app.controller('view_machine_gym_user_controller', ['$routeParams', '$scope', '$http', function($routeParams, $scope, $http ) {
        
        var id = $routeParams.id
        var access_token = $routeParams.access_token
        var url = '/api/machines/' + id + '/gymUser?' + access_token
        alert(url)
        $http.get(url).then(function(response) {
        $scope.users_json_data = response.data;
            });


        $http.get('/api/machines/' + id + '/gymUser/count?' + access_token).then(
            function(success) {
                alert("SUCC")
                console.log('RESPONSE', success);
                 $scope.count = success.data;
            }, function(error) {
                alert("ERROR in count")
                console.log('ERROR', error);
            });


    }]);




     app.controller('view_machine_gym_user_detail_controller', ['$routeParams', '$scope', '$http', function($routeParams, $scope, $http ) {
        
        var machineId = $routeParams.id
        var access_token = $routeParams.access_token
        var userId = $routeParams.userId
        var url = '/api/gym_users/' + userId + '?' + access_token
        alert('url')
        alert(url)
        $http.get(url).then(function(response) {
        $scope.users_json_data = response.data;
            });


    }]);



     app.controller('view_machine_bottle_detail_controller', ['$routeParams', '$scope', '$http', function($routeParams, $scope, $http ) {
        
        var id = $routeParams.id
        var access_token = $routeParams.access_token
        var url = '/api/machines/' + id + '/bottles?' + access_token
        alert(url)
        $http.get(url).then(function(response) {
        $scope.users_json_data = response.data;
            });

    }]);
    

     app.controller('add_gym_user_controller', ['$routeParams', '$scope', '$http', function($routeParams, $scope, $http ) {
        
        var id = $routeParams.id
        var access_token = $routeParams.access_token
        var url = '/api/machines/' + id + '?' + access_token
        alert(url)
        $http.get(url)
        .then(function(response) {
        $scope.users_json_data = response.data;
        // $scope.reg_number = $routeParams.registration_number;
        // alert("CONTROLLER WORKS")
        });
    }]);


     app.controller('view_users_controller', ['$routeParams', '$scope', '$http', function($routeParams, $scope, $http ) {
        
    
        var access_token = $routeParams.access_token
        $http.get('/api/gym_users?access_token=' + access_token)
        .then(function(response) {
        $scope.users_json_data = response.data;

        // $scope.data=[10,90];    //REMEMBER
        
        // $scope.reg_number = $routeParams.registration_number;
        // alert("CONTROLLER WORKS")
        });

        $http.get('/api/gym_users/count?access_token=' + access_token)
        .then(function(response) {
        $scope.count = response.data;

        // $scope.reg_number = $routeParams.registration_number;
        // alert("CONTROLLER WORKS")
        });  




    }]);


      app.controller('analytics_user_controller', ['$routeParams', '$scope', '$http', function($routeParams, $scope, $http ) {
        
        var id = $routeParams.id
        var access_token = $routeParams.access_token
        alert(id)
        alert(access_token)
        $http.get('/api/health_analytics?filter[where][gymUserId]=' + id + '&' + access_token)
        .then(function(response) {
        // $scope.users_json_data = response.data;
        $scope.users_json_data = [10,20,30]
        // $scope.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales", "Tele Sales", "Corporate Sales"];
        // $scope.data = [300, 500, 100, 40, 120];
        // $scope.reg_number = $routeParams.registration_number;
        });
    }]);



      app.controller('search_user_controller', ['$routeParams', '$scope', '$http', function($routeParams, $scope, $http ) {
        
        var key = $routeParams.search_key
        var access_token = $routeParams.access_token
        // alert(access_token)
        $http.get('/api/gym_users?filter[where][or][0][name][regexp]=/^' + key + '/i&filter[where][or][1][registration_number]=' + key +'&' + access_token)
        .then(function(response) {

        // $scope.users_json_data = response.data;
        $scope.users_json_data = response.data
        
        // $scope.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales", "Tele Sales", "Corporate Sales"];
        // $scope.data = [300, 500, 100, 40, 120];
        // $scope.reg_number = $routeParams.registration_number;
        });



        $http.get('/api/gym_users/count?[where][or][0][name][regexp]=/^' + key + '/i&[where][or][1][registration_number]=' + key + '&' + access_token)
        .then(function(response) {
        $scope.count = response.data;

        // $scope.reg_number = $routeParams.registration_number;
        // alert("CONTROLLER WORKS")
        });  

    }]);



      app.controller('health_analytics_controller', ['$routeParams', '$scope', '$http', function($routeParams, $scope, $http ) {
        
        var id = $routeParams.id
        var access_token = $routeParams.access_token
        
        $http.get('/api/gym_users/' + id + '?' + access_token)
        .then(function(response) {
        $scope.users_json_data = response.data;
        // $scope.reg_number = $routeParams.registration_number;
        // alert("CONTROLLER WORKS")
        });


        $http.get('/api/health_analytics?filter[where][gymUserId]=' + id + '&' + access_token)
        .then(function(response) {
        $scope.users_health_data = response.data;
        
        // $scope.reg_number = $routeParams.registration_number;
        // alert("CONTROLLER WORKS")
        });
    }]);

     

     app.controller('change_auth_password', ['$routeParams', '$scope', '$http', function($routeParams, $scope, $http ) {
        
    
        var access_token = $routeParams.access_token
        $http.get('/api/users?access_token=' + access_token)
        .then(function successCallback(response) {
            // alert("SUCCESS")
          }, function errorCallback(response) {
            alert("Authorization Timed Out !")
                window.location.href = '/';
          });
        




    }]);
// run(['$rootScope', function($rootScope) {
//     $rootScope.$on("$routeChangeSuccess", function(event, next, current) {
//         $rootScope.showHeader = next.$$route.showHeader;
//     });
// }]);

})();