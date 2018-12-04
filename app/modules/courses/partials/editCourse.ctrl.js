(function(){
  angular.module('myApp')
  .controller('editCourseCtrl', function($rootScope,  $scope,
    courseDataSrvc, handleErrorSrvc, $location, $stateParams){
      
      console.log('In editCourse controller.');
      //console.log(this);
      //console.log($scope);
      //console.log($rootScope);
      //console.log($stateParams);

      $scope.isLoading = true;

      if($stateParams.courseId){
        courseDataSrvc.getCourseById($stateParams.courseId)
        .then(function(data){
          $scope.courseToEdit = data;
          $scope.isLoading = false;
        }, handleErrorSrvc.handleError);
      }

      $scope.updateCourse = function(courseToEdit){
        courseDataSrvc.updateCourse(courseToEdit).then(function(data){
          $location.path('/courses/list');
        }, handleErrorSrvc.handleError);
      };

      $scope.cancelEdit = function(){
          $scope.courseToEdit = null;
          $location.path('/courses');
      };

    });
})();
