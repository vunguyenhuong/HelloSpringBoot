var app = angular.module('myApp',['ngRoute'])

app.config(function($routeProvider, $locationProvider){
    // $locationProvider.hashPrefix('');
    // $locationProvider.html5Mode({
    //     enabled: true,
    //     requireBase: false
    //   });

    $routeProvider
    .when('/employee', {
        title: 'Trang chủ',
        templateUrl: '/pages/home.html?' + Math.random(),
        controller: 'employeeCtrl'
    })
    .when('/employee/add', {
        title: 'Thêm nhân viên',
        templateUrl: '/pages/add.html?' + Math.random(),
        controller: 'employeeCtrl'
    })
    .when('/employee/:id', {
        title: 'Detail',
        templateUrl: '/pages/update.html?' + Math.random(),
        controller: 'employeeCtrl'
    })
    .otherwise({
        redirectTo: '/employee'
    })
})




// thay đổi tiêu đề
app.run(['$location', '$rootScope', function($location, $rootScope) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
      $rootScope.title = current.$$route.title;
    });
}]);