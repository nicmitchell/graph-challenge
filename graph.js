angular.module('app')
  .directive('d3', ['GraphValues', function(GraphValues) {
    return {
      restrict: 'EA',
      scope: {
        data: '=',
        onClick: '&'  // parent execution binding
      },
      link: function(scope, element, attrs) {

      }
    };
}
])
