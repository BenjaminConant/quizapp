'use strict';

/**
 * @ngdoc function
 * @name quizApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the quizApp
 */
angular.module('quizApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.quiz = [
    {
      "q": "Who is the best ping pong player at FSA?",
      'options': [{ 'value': "Mike"} , { 'value': "Eddie"} , {'value' : "Nimit"} , { 'value': "Patrick"}],
      'answer': "Nimit",
      'difficulty': 2
    },
    { "q": "Which robot name was chanted during Lego Mindstorms?",
    'options':[{ 'value': 'infiniteLoop'} , { 'value': 'noHope.js'} , {'value' : 'johnny5'} , { 'value': 'none of the above'}],
    'answer':'noHope.js',
    'difficulty': 9
  },
  {
    'q': "Out of the following frontend frameworks, which framework is most rails-like",
    'options':[{ 'value': 'Ember.js'} ,{ 'value': 'Angular.js'} , {'value' : 'Backbone.js'} , { 'value': 'Meteor.js'}],
    'answer':'Ember.js',
    'difficulty': 4
  },
  {
    'q': "Which project used a local data store?",
    'options':[{ 'value': 'TripPlanner'} ,{ 'value': 'Twitter.js'} , {'value' : 'WikiWalker'} , { 'value': 'WikiStack'}],
    'answer':'Twitter.js',
    'difficulty': 3
  }
  ];

  $scope.userPoints = 0;
  $scope.message = "welcome to the game@"

  $scope.checkAnswer = function(questionAnswer, userAnswer) {


    if (questionAnswer === userAnswer) {
      $scope.message = "your the best you ++ 7000pts";
      $scope.userPoints += 7000;
    } else {
      $scope.message =  "your wrong you fool!!! = 10,000";
      $scope.userPoints -= 10000;
    }

  };



  });
