angular.module('app', [])
  .controller('main', main);

  main.$inject = ['$scope','graph'];

  function main($scope, graph) {
    $scope.g = graph;
  }

