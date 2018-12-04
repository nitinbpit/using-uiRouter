(function(){
  var appName = 'myApp', requires = ['ui.router'];
  var myApp = angular.module(appName,requires);
  myApp.config(function($stateProvider, $urlRouterProvider, $locationProvider){
    $urlRouterProvider.otherwise('/courses/list');
    $stateProvider
    .state('courses', {
      abstract: true,
      url: '/courses',
      views: {
        'main-view': {
          templateUrl : 'modules/courses/courses.prtl.html',
          controller : 'coursesCtrl'
        }
    }})
    .state('courses.list', {
      url: '/list',
      views: {
        'course-list': {
          templateUrl : 'modules/courses/partials/courseList.prtl.html',
          controller : 'courseListCtrl'
        }
      }
    })
    .state('courses.add', {
      url: '/add',
      views: {
        'add-course': {
          templateUrl : 'modules/courses/partials/addCourse.prtl.html',
          controller : 'addCourseCtrl'
        }
      }
    })
    .state('courses.edit', {
      url: '/edit/:courseId',
      views: {
        'edit-course': {
          templateUrl : 'modules/courses/partials/editCourse.prtl.html',
          controller : 'editCourseCtrl'
        }
      }
    })
    .state('practice', {
      url: '/practice',
      views: {
        'main-view' : {
          templateUrl : 'modules/practice/practice.html',
          controller : 'practiceCtrl'
        }
      }
    });

  });
})();
