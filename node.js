angular.module('app')
  .directive('node', function(){
    return {
      restrict: 'EA',
      replace: true,
      scope: {
        values: '@'
      },
      template: [
        '<div class="node" ng-model="node">',
        '{{ node }}',
        '</div>'
      ].join(''),
      link: function (scope, element, attrs) {
        console.log('scope', scope);
        console.log('element', element);
        console.log('atts', attrs);
        // var ratio = (attrs.height / attrs.width) * 100;
        // element[0].style.paddingTop = ratio + '%';
      }
    };
  })
