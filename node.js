angular.module('app')
  .directive('node', function(){
    return {
      restrict: 'E',
      replace: false,
      scope: {
        node: '@',
        clicked: "&"
      },
      template: [
        '<button class="node" ng-click="clicked({node:node})">',
          '{{node.name}} - {{node}}',
        '</button>'
      ].join(''),
      link: function (scope, element, attrs) {
        console.log('scope', scope.node)
        
      }
    };
  })
