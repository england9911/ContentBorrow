app.controller("mainController", function($scope, $http) {

    $scope.apiKey = "c387d9b67d32e57d5cf29815405e39d4";
    //$scope.initUrl = 'http://www.google.com';

    // Latest news stories from: BBC, Daily Mail, Guardian etc
    // Latest article from: ViceUK, something else
    // Custom URL input

    $scope.init = function() {
        
        /*
        // Connect to the RESTful API via JSONP and get result
        $http.jsonp('http://api.pagemunch.com/1/summary.jsonp?url=' + $scope.initUrl + '&key=' + $scope.apiKey + '&callback=JSON_CALLBACK').success(function(data) {
            console.log(data);
        }).error(function(error) {
 			console.log('ERROR: ' + error);
        });
		*/
		
        // Two-way binding makes messages appear in alert box
        $scope.messages = 'Enter a custom URL below to scrape content';

        $scope.dataPresent = false;
    };


    // Form submit handler.
    $scope.submit = function(form) {
		// Trigger validation flag.
		$scope.submitted = true;
		$scope.dataPresent = false;

		// If form is invalid, return and let AngularJS show validation errors.
		if (form.$invalid) {
			return;
		}

		if($scope.url) {

			var config = {
			  params : {
			    'callback' : 'JSON_CALLBACK',
			    'url' : $scope.url,
			    'key' : $scope.apiKey
			  },
			};

			// Perform JSONP request.
	      	$http.jsonp('http://api.pagemunch.com/1/summary.jsonp', config)
		        .success(function(data, config) {
		          	console.log('success!');
		          	console.log(data);
		            $scope.pageData = data;
		            $scope.keywords = data.keywords;
		            $scope.messages = 'Success';
		            $scope.submitted = false;
		          	$scope.dataPresent = true;
		        })
		        .error(function(data, config) {
		          $scope.messages = 'There was a network error. Try again later.';
		        });
	    }
    };

    $scope.viewAsHtml = function() {
    	console.log('VIEW AS HTML..');
    };

    $scope.closeAlert = function(alert) {
    	$scope.messages = '';
  	};

});

