var app = angular.module("treeDemo", ['angularBootstrapNavTree', 'angular-datepicker']);
app.controller("tree", function ($scope, $http){
	console.log("controller ok");
	$scope.treedata_avm = [
      {
        label: 'Animal',
        children: [
          {
            label: 'Dog',
            data: {
              description: "man's best friend"
            }
          }, {
            label: 'Cat',
            data: {
              description: "Felis catus"
            }
          }, {
            label: 'Hippopotamus',
            data: {
              description: "hungry, hungry"
            }
          }, {
            label: 'Chicken',
            children: ['White Leghorn', 'Rhode Island Red', 'Jersey Giant']
          }
        ]
      }
    ]
});
app.controller("editForm", function ($scope, $http){

})