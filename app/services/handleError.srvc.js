(function(){
  angular.module('myApp')
  .factory('handleErrorSrvc', function(){
    return {
      handleError : function(error){
        console.log(error);
      }
    };
  })
})();
