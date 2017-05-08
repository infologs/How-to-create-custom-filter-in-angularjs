var app = angular.module("app01", []);

app.filter('caseFilter', function() {
	//put your own function and return the values as per your requirement
	return function(x) {
        var i, c, txt = "";

        //here we are making each alternate character to upparcase.
        for (i = 0; i < x.length; i++) {
            c = x[i];
            if (i % 2 == 0) {
                c = c.toUpperCase();
            }
            txt += c;
        }
        return txt;
    };
});

app.controller("controller1",function($scope) {
	$scope.names = ["Abhishek", "Ravi", "Tiger", "Scott", "Testing", "David", "Rockstar"];
});