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
        '': {
          templateUrl : 'modules/courses/courses.html'
        }
    }})
    .state('courses.list', {
      url: '/list',
      views: {
        'course-list': {
          templateUrl : 'modules/courses/partials/course_list.html',
          controller : 'courseCtrl'
        }
      }
    })
    .state('courses.add', {
      url: '/add',
      views: {
        'add-course': {
          templateUrl : 'modules/courses/partials/add_course.html',
          controller : 'courseCtrl'
        }
      }
    })
    .state('courses.edit', {
      url: '/edit/:courseId',
      views: {
        'edit-course': {
          templateUrl : 'modules/courses/partials/edit_course.html',
          controller : 'courseCtrl'
        }
      }
    })
    .state('practice', {
      url: '/practice',
      views: {
        '' : {
          templateUrl : 'modules/practice/practice.html',
          controller : 'practiceCtrl'
        }
      }
    });

  });
})();
