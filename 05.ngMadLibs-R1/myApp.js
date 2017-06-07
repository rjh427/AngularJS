var app = angular.module('myApp', []);

/*
  I'm leaving lines 24 through 43 in here so that you can see what I
  was attempting to accomplish, along with at least one of the issues
  I was experiencing with it. it isn't causing errors so why not.

  because running back-to-back ng-if directives to handle an if-else
  condition in the view strikes me as a DRY violation. I was attempting 
  to handle that logic more intelligently in the controller, instead of 
  with all the ng-if directives. my idea of a more intelligent way
  doesn't seem to be the AngularJS way though - the multiple ng-if
  directives in the view was what I was shown in earlier lessons. 

  maybe I was not doing everything necessary to make this work from
  the controller, the course hasn't covered this more advanced logic 
  and variable manipulation in the controller yet. 

  the way I envisioned it: in the view, elements from the 'user' object
  would be called with {{user.he}}, ~.him, and ~.his as appropriate and 
  then the gender-correct pronouns would be inserted based on whether
  the user object was instantiated on line 32 or line 38.
*/
let gender = document.getElementsByName('gender'); // node object
// let gender = document.getElementsByName('gender').selected; // undefined
// let gender = document.getElementsByName('gender').checked; // undefined
// let gender = document.getElementsByName('gender').defaultChecked; // undefined

console.log(gender);

if (gender == 'male' || gender == undefined) {
  app.value('user', {
    he: 'he',
    him: 'him',
    his: 'his'
  });
} else {
  app.value('user', {
    he: 'she',
    him: 'her',
    his: 'her'
  });
}

app.controller('MyCtrl', ['$scope', 'user', function MyCtrl($scope, user) {
  $scope.user = user;
}]);
