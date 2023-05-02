app.controller("employeeCtrl", function($scope, $http, $location, $routeParams){
    const api = 'http://localhost:8181/api/employee'
    $scope.listEmployee = []
    $scope.getAll = function(){
        $http.get(api).then(function(response){
            $scope.listEmployee = response.data;
        })
    }
    $scope.getAll()

    if($routeParams.hasOwnProperty('id')){
        $http.get(`${api}/${$routeParams.id}`).then(function(response){
            if(response.data === ''){
                swal('Oops!','Lỗi!', 'error');
                $location.path('/employee')
            }
            $scope.employee = response.data;
        }).catch(function(error){
            if(error.status === 400){
                swal('Oops!','Lỗi!', 'error');
                $location.path('/employee')
            }
        })
    }

    $scope.add = function(){
        $http.post(api, $scope.employee).then(function(response){
            console.log(response)
            if(response.status === 200){
                swal('Woah!','Thêm thành công!', 'success');
                $location.path('/employee')
                $scope.getAll()
            }
        }).catch(function(error){
            if(error.status === 400){
                swal('Oops!','Thêm thất bại!', 'error');
            }
        })
        
    }
    
    $scope.update = function(){
        $http.put(`${api}/${$scope.employee.id}`, $scope.employee).then(function(response){
            swal('Woah!','Cập nhật thành công!', 'success');
            $location.path('/employee')
            $scope.getAll()
        }).catch(function(error){
            if(error.status === 400){
                swal('Oops!','Cập nhật thất bại!', 'error');
            }
        })
    }
    
    $scope.delete = function(id){
        swal("","Xác nhận xóa?", "error", {
            buttons: ["Oh noez!", "Aww yiss!"],
          })
          .then((willDelete) => {
            if (willDelete) {
                $http.delete(`${api}/${id}`).then(function(response){
                    if(response.status === 200){
                        $scope.getAll();
                        swal('Woah!','Xóa thành công!', 'success');
                    }
                })
            }
          });
    }
})