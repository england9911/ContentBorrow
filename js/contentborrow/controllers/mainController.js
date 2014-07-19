app.controller("mainController", function($scope, $http){

    $scope.apiKey = "c387d9b67d32e57d5cf29815405e39d4";
    $scope.Url = 'https://www.youtube.com/watch?v=Id2e6VX-kAo';

    $scope.init = function() {
        
        // Connect to the RESTful API via JSONP and get result
        $http.jsonp('http://api.pagemunch.com/1/summary.jsonp?url=' + $scope.Url + '&key=' + $scope.apiKey + '&callback=JSON_CALLBACK').success(function(data) {
            console.log(data);
        }).error(function(error) {
 			console.log('ERROR: ' + error);
        });
		



    };

});

