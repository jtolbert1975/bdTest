myApp.controller('testCtrl', function($scope){
    "use strict";

    $scope.model = {
        email: ''
    } ;

    $scope.successful = '';
    $scope.warning = '';

    //Validates email on Save event - param:form - the submitted form
    $scope.submitForm = function(form){
        if(form.$valid){
            $scope.warning = '';
            $scope.successful = 'True';
        } else {
            $scope.successful = '';
            $scope.warning = 'True';
        }
    }
});