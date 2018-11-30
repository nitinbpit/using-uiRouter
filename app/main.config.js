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
          templateUrl : 'app/modules/courses/courses.html'
        }
    }})
    .state('courses.list', {
      url: '/list',
      views: {
        'course-list': {
          templateUrl : 'app/modules/courses/partials/course_list.html',
          controller : 'courseCtrl'
        }
      }
    })
    .state('courses.add', {
      url: '/add',
      views: {
        'add-course': {
          templateUrl : 'app/modules/courses/partials/add_course.html',
          controller : 'courseCtrl'
        }
      }
    })
    .state('courses.edit', {
      url: '/edit/:courseId',
      views: {
        'edit-course': {
          templateUrl : 'app/modules/courses/partials/edit_course.html',
          controller : 'courseCtrl'
        }
      }
    })
    .state('practice', {
      url: '/practice',
      views: {
        '' : {
          templateUrl : 'app/modules/practice/practice.html',
          controller : 'practiceCtrl'
        }
      }
    });

  });
})();
