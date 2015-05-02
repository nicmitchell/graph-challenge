angular.module('app', [])
  .controller('main', ['$scope', 'dijkstra', function($scope, dijkstra) {
      $scope.g = dijkstra;
      $scope.start;
      $scope.end;
      $scope.showPath = function(node){
        console.log('node', node);
        // Select start point if not set
        if(!$scope.start){
          $scope.start = node;
        // Select end if start is set
        } else if(!$scope.end){
          $scope.end = node;
        // Start becomes last end, end becomes clicked node, 
        } else {
          $scope.start = $scope.end;
          $scope.end = node;
        }

      };
  }])

