"use strict";

var app = angular.module("TodoApp", []);

app.controller("NavCtrl", function ($scope){
  $scope.navItems = [{name:"Logout"}, {name:"All Items"}, {name:"New Items"}];
});

app.controller("TodoCtrl", function ($scope){
  $scope.welcome = "hello";
  $scope.showListView = true;
  $scope.items = [
    {
      id: 0,
      task: "mow the lawn",
      isCompleted: true,
      assignedTo: "Zoe"
    },
    {
      id: 1,
      task: "take a nap",
      isCompleted: true,
      assignedTo: "Zoe"
    },
    {
      id: 2,
      task: "Do The Laundry",
      isCompleted: false,
      assignedTo: "William"
    }
  ];

  $scope.allItems = function(){
  $scope.showListView = true;
  }
  $scope.newItem = function(){
  $scope.showListView = false;
  }
});