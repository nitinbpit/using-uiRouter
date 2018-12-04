(function(){
  angular.module('myApp')
  .controller('courseListCtrl', function($rootScope,  $scope,
    courseDataSrvc, handleErrorSrvc){
    console.log('In courseList controller.');
      //console.log(this);
      //console.log($scope);
      //console.log($rootScope);
      //console.log($stateParams);

      $scope.isLoading = true;

      $scope.loadCourses = function(){
        $scope.courses = [];
        courseDataSrvc.getCourses().then(function(dataCourses){
          $scope.courses = dataCourses;
          $scope.isLoading = false;
        }, handleErrorSrvc.handleError);
      };
      $scope.loadCourses();

      $scope.deleteCourse = function(course){
        courseDataSrvc.deleteCourse(course).then(function(data){
          $scope.loadCourses();
        }, handleErrorSrvc.handleError);
      };

    });

})();
