(function(){

    var app = angular.module("myApp", ["ngRoute","ui.router"]);
    app.config(function($routeProvider, $locationProvider, $httpProvider) {
       
        $routeProvider
            //------------------------------------------ADMIN----------------------------------------------
            .when("/admin", {
                templateUrl : "Views/admin/login.html",
            })

             .when("/admin/add_machine:access_token?", {
                templateUrl : "Views/admin/add_machine.html",

            })

             .when("/admin/add_bottles/motor_A/machine_id=:machineId/:access_token", {
                templateUrl : "Views/admin/add_machine_bottle_A.html",

            })

             .when("/admin/add_bottles/motor_B/machine_id=:machineId/:access_token", {
                templateUrl : "Views/admin/add_machine_bottle_B.html",

            })

             .when("/admin/add_bottles/motor_C/machine_id=:machineId/:access_token", {
                templateUrl : "Views/admin/add_machine_bottle_C.html",

            })

             .when("/admin/add_bottles/motor_D/machine_id=:machineId/:access_token", {
                templateUrl : "Views/admin/add_machine_bottle_D.html",

            })

             .when("/admin/add_bottles/motor_E/machine_id=:machineId/:access_token", {
                templateUrl : "Views/admin/add_machine_bottle_E.html",

            })

             .when("/admin/add_bottles/motor_F/machine_id=:machineId/:access_token", {
                templateUrl : "Views/admin/add_machine_bottle_F.html",

            })

             .when("/admin/add_bottles/motor_G/machine_id=:machineId/:access_token", {
                templateUrl : "Views/admin/add_machine_bottle_G.html",

            })

             .when("/admin/add_bottles/motor_H/machine_id=:machineId/:access_token", {
                templateUrl : "Views/admin/add_machine_bottle_H.html",

            })            

            .when("/admin/view_machines:access_token?", {
                templateUrl : "Views/admin/view_admin_machines.html",

                controller : 'view_admin_machines_controller'
            })

             .when("/admin/edit_machine/:access_token?", {
                templateUrl : "Views/admin/edit_machine_by_username.html",

            })

            .when("/admin/edit_machine/machine_id=:machineId/:access_token", {
                templateUrl : "Views/admin/edit_admin_machine.html",

                controller : 'edit_admin_machine_controller'
            })

            .when("/admin/delete_machine/:access_token?", {
                templateUrl : "Views/admin/delete_machine_by_username.html",

            })


            .when("/admin/delete_machine/machine_id=:machineId/:access_token", {
                templateUrl : "Views/admin/delete_admin_machine.html",

                controller : 'delete_admin_machine_controller'
            })

            .when("/admin/bottles/machine_id=:id/:access_token", {
                templateUrl : "Views/admin/view_machine_bottle_detail.html",
                
                controller: 'view_machine_bottle_detail_controller'
            })

            .when("/admin/bottles/machine_id=:id/bottle_id=:bottleId/:access_token", {
                templateUrl : "Views/admin/view_machine_selected_bottle.html",
                
                controller: 'view_machine_selected_bottle_detail_controller'
            })

            .when("/admin/configure_machine:access_token?", {
                templateUrl : "Views/admin/configure_bottles_by_username.html",

                
            })

             .when("/admin/prefed_recipes:access_token?", {
                templateUrl : "Views/admin/prefed_recipe_by_username.html",

            })

             .when("/admin/prefed_recipes/machine_id=:id/:access_token?", {
                templateUrl : "Views/admin/prefed_recipe.html",
                controller: 'view_machine_bottle_detail_controller'
            })

             .when("/admin/view_prefed_recipes:access_token?", {
                templateUrl : "Views/admin/view_prefed_recipe_by_username.html",

            })

             .when("/admin/view_prefed_recipes/machine_id=:id/:access_token?", {
                templateUrl : "Views/admin/view_prefed_recipe.html",
                controller: 'view_prefed_recipes_controller'
            })

             //========================================================================================
           











            //-------------------------------------MACHINE USER--------------------------------------------
            .when("/", {
                templateUrl : "Views/machine/login.html",
            })

            .when("/login", {
                templateUrl : "Views/machine/login.html",
            })


            .when("/view_gym_users/machine_id=:id/:access_token", {
                templateUrl : "Views/machine/view_machine_gym_user.html",
                
                controller: 'view_machine_gym_user_controller'
            })


            .when("/gym_user_detail/machine_id=:id/user=:userId/:access_token", {
                templateUrl : "Views/machine/view_machine_gym_user_detail.html",
                
                controller: 'view_machine_gym_user_detail_controller'
            })


            .when("/bottles/machine_id=:id/:access_token", {
                templateUrl : "Views/machine/view_machine_bottle_detail.html",
                
                controller: 'view_machine_bottle_detail_controller'
            })

            .when("/bottles/machine_id=:id/bottle_id=:bottleId/:access_token", {
                templateUrl : "Views/machine/view_machine_selected_bottle.html",
                
                controller: 'view_machine_selected_bottle_detail_controller'
            })

            .when("/add_gym_user/machine_id=:id/:access_token", {
                templateUrl : "Views/machine/add_gym_user.html",

                controller: 'add_gym_user_controller'
               
            })


            .when("/del_gym_user/machine_id=:id/:access_token", {
                templateUrl : "Views/machine/del_gym_user.html",   
               
            })


            .when("/del_gym_user_detail/machine_id=:id/user=:userId/:access_token", {
                templateUrl : "Views/machine/deactivate_user.html",   
                
                controller: 'del_machine_gym_user_detail_controller'
            })


            .when("/edit_gym_user/machine_id=:id/:access_token", {
                templateUrl : "Views/machine/edit_gym_user.html",   
               
            })

            .when("/edit_gym_user_detail/machine_id=:id/user=:userId/:access_token", {
                templateUrl : "Views/machine/edit_machine_gym_user_detail.html",
                
                controller: 'edit_machine_gym_user_detail_controller'
            })

            .when("/search/search_key=:search_key/machine_id=:id/:access_token", {
                templateUrl : "Views/machine/view_user_search.html",
                
                controller: 'search_user_controller'
            })

           //========================================================================================

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



    
     app.controller('view_admin_machines_controller', ['$routeParams', '$scope', '$http', function($routeParams, $scope, $http ) {

        // alert("YES")
        var access_token = $routeParams.access_token
        var url = '/api/machines/?access_token=' + access_token
        // alert(url)
        $http.get(url).then(function(response) {
        $scope.users_json_data = response.data;
            });


        $http.get('/api/machines/count?access_token=' + access_token).then(
            function(success) {
                // alert("SUCC")
                // console.log('RESPONSE', success);
                 $scope.count = success.data;
            }, function(error) {
                // alert("ERROR in count")
                // console.log('ERROR', error);
            });


    }]);


     app.controller('edit_admin_machine_controller', ['$routeParams', '$scope', '$http', function($routeParams, $scope, $http ) {
        
        var machineId = $routeParams.machineId
        var access_token = $routeParams.access_token
        // var userId = $routeParams.userId
        var url = '/api/machines/' + machineId + '?' + access_token
        // alert('url')
        // alert(url)
        $http.get(url).then(function(response) {
        $scope.users_json_data = response.data;
            });


    }]);



      app.controller('delete_admin_machine_controller', ['$routeParams', '$scope', '$http', function($routeParams, $scope, $http ) {
        
        var machineId = $routeParams.machineId
        var access_token = $routeParams.access_token
        // var userId = $routeParams.userId
        var url = '/api/machines/' + machineId + '?' + access_token
        // alert('url')
        // alert(url)
        $http.get(url).then(function(response) {
        $scope.users_json_data = response.data;
            });


    }]);


       app.controller('view_prefed_recipes_controller', ['$routeParams', '$scope', '$http', function($routeParams, $scope, $http ) {
        
        var id = $routeParams.id
        var access_token = $routeParams.access_token
        var url = '/api/machines/' + id + '/prefedRecipes?' + access_token
        // alert(url)
        $http.get(url).then(function(response) {
        $scope.users_json_data = response.data;
            });

    }]);











     app.controller('view_machine_gym_user_controller', ['$routeParams', '$scope', '$http', function($routeParams, $scope, $http ) {
        
        var id = $routeParams.id
        var access_token = $routeParams.access_token
        var url = '/api/machines/' + id + '/gymUser?' + access_token
        
        $http.get(url).then(function(response) {
        $scope.users_json_data = response.data;
            });


        $http.get('/api/machines/' + id + '/gymUser/count?' + access_token).then(
            function(success) {
                
                 $scope.count = success.data;
            }, function(error) {
                
            });


    }]);




     app.controller('view_machine_gym_user_detail_controller', ['$routeParams', '$scope', '$http', function($routeParams, $scope, $http ) {
        
        var machineId = $routeParams.id
        var access_token = $routeParams.access_token
        var userId = $routeParams.userId
        var url = '/api/gym_users/' + userId + '?' + access_token
        
        $http.get(url).then(function(response) {
        $scope.users_json_data = response.data;
            });


    }]);


     app.controller('view_machine_selected_bottle_detail_controller', ['$routeParams', '$scope', '$http', function($routeParams, $scope, $http ) {
        
        var machineId = $routeParams.id
        var access_token = $routeParams.access_token
        var bottleId = $routeParams.bottleId
        var url = '/api/machines/' + machineId + '/bottles/' + bottleId + '?' + access_token
        
        $http.get(url).then(function(response) {
        $scope.users_json_data = response.data;
            });


    }]);

     app.controller('edit_machine_gym_user_detail_controller', ['$routeParams', '$scope', '$http', function($routeParams, $scope, $http ) {
        
        var machineId = $routeParams.id
        var access_token = $routeParams.access_token
        var userId = $routeParams.userId
        var url = '/api/gym_users/' + userId + '?' + access_token
        
        $http.get(url).then(function(response) {
        $scope.users_json_data = response.data;
            });


    }]);



     app.controller('del_machine_gym_user_detail_controller', ['$routeParams', '$scope', '$http', function($routeParams, $scope, $http ) {
        
        var machineId = $routeParams.id
        var access_token = $routeParams.access_token
        var userId = $routeParams.userId
        var url = '/api/gym_users/' + userId + '?' + access_token
        
        $http.get(url).then(function(response) {
        $scope.users_json_data = response.data;
            });


    }]);


     app.controller('view_machine_bottle_detail_controller', ['$routeParams', '$scope', '$http', function($routeParams, $scope, $http ) {
        
        var id = $routeParams.id
        var access_token = $routeParams.access_token
        var url = '/api/machines/' + id + '/bottles?' + access_token
        // alert(url)
        $http.get(url).then(function(response) {
        $scope.users_json_data = response.data;
            });

    }]);
    

     app.controller('add_gym_user_controller', ['$routeParams', '$scope', '$http', function($routeParams, $scope, $http ) {
        
        var id = $routeParams.id
        var access_token = $routeParams.access_token
        var url = '/api/machines/' + id + '?' + access_token
        
        $http.get(url)
        .then(function(response) {
        $scope.users_json_data = response.data;
        
        });
    }]);


     app.controller('view_users_controller', ['$routeParams', '$scope', '$http', function($routeParams, $scope, $http ) {
        
    
        var access_token = $routeParams.access_token
        $http.get('/api/gym_users?access_token=' + access_token)
        .then(function(response) {
        $scope.users_json_data = response.data;

        
        });

        $http.get('/api/gym_users/count?access_token=' + access_token)
        .then(function(response) {
        $scope.count = response.data;

        });  




    }]);


     


      app.controller('search_user_controller', ['$routeParams', '$scope', '$http', function($routeParams, $scope, $http ) {
        
        var key = $routeParams.search_key
        var access_token = $routeParams.access_token
        
        $http.get('/api/gym_users?filter[where][or][0][name][regexp]=/^' + key + '/i&filter[where][or][1][registration_number]=' + key +'&' + access_token)
        .then(function(response) {

        
        $scope.users_json_data = response.data
        
 
        });



        $http.get('/api/gym_users/count?[where][or][0][name][regexp]=/^' + key + '/i&[where][or][1][registration_number]=' + key + '&' + access_token)
        .then(function(response) {
        $scope.count = response.data;

        });  

    }]);



      

     

     app.controller('change_auth_password', ['$routeParams', '$scope', '$http', function($routeParams, $scope, $http ) {
        
    
        var access_token = $routeParams.access_token
        $http.get('/api/users?access_token=' + access_token)
        .then(function successCallback(response) {
            
          }, function errorCallback(response) {
            alert("Authorization Timed Out !")
                window.location.href = '/';
          });
        




    }]);


})();