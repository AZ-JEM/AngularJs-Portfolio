// ----------------------------------------------------------------------/
// Portfolio application module
// ----------------------------------------------------------------------/
var app = angular.module(
  // app name :
  'ngPortfolio',
  // dependecies :
  ['ngRoute', 'ngAnimate', 'ngSanitize', 'ui.bootstrap']
);

// ----------------------------------------------------------------------/
// Define client side routing
// ----------------------------------------------------------------------/
app.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl : "views/home.html",
    controller : "navController"
  })
  .when("/home", {
    templateUrl : "views/home.html",
    controller : "navController"
  })
  .when("/about", {
    templateUrl : "views/about.html",
    controller : "navController"
  })
  .when("/contact", {
    templateUrl : "views/contact.html",
    controller : "navController"
  })
  .when("/FAQ", {
    templateUrl : "views/faq.html",
    controller : "navController"
  })
  .when("/gallery", {
    templateUrl : "views/gallery.html",
    controller : "navController"
  })
  .when("/video", {
    templateUrl : "views/video.html",
    controller : "navController"
  })
  .otherwise({
    template : "<h3>Invalid route...</h3>"
  });
}); // end config

// ----------------------------------------------------------------------/
// Navigation controller
// ----------------------------------------------------------------------/
app.controller('navController', function($scope, $location, navService) {

  // obtain anchor
  var path = $location.path();

  // format anchor
  path = (path == "/") ? "home" : path.slice(1);
  $scope.where = path[0].toUpperCase() + path.slice(1);

  // update navigation...
  navService.updateNav(path);

}); // end navController

// ----------------------------------------------------------------------/
// Service to manage UI navigation anchors
// ----------------------------------------------------------------------/
app.service('navService', function() {

  this.updateNav = function(path) {

    // toggle active anchor
    var selected = "#a-" + path;
    $('.active').toggleClass("active");
    $(selected).toggleClass("active");

    // track hamburger
    var burgerStatus = false;
    $('button.navbar-toggle').click(function() {
      burgerStatus = !burgerStatus;
    });

    // listen for navbar anchor clicks...
    $('.navbar-nav a').on('click', function() {
      // close drop down menu if active...
      if (burgerStatus) {
        $('button.navbar-toggle').click();
      }
    });

  };  // end updateNav()

}); // end navService
