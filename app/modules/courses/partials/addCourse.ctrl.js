(function(){
  angular.module('myApp')
  .controller('addCourseCtrl', function($rootScope,  $scope,
    courseDataSrvc, handleErrorSrvc, $location){

      console.log('In addCourse controller.');

      $scope.addCourse = function(course){
        courseDataSrvc.addCourse(course).then(function(dataCourse){
          $location.path('/courses/list');
        }, handleErrorSrvc.handleError);
        $scope.course = {};
      };

      $scope.cancelAdd = function(){
        $scope.course = null;
        $location.path('/courses');
      };

    });
})();
