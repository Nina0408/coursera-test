(function() {
  angular.module('public')
  .controller('SignUpController', SignUpController);

  SignUpController.$inject = ['UserService']

  function SignUpController(UserService) {
    var signUpCtrl = this;
    signUpCtrl.menuItemNotValid = false;
    signUpCtrl.success = false

  //   signUpCtrl.submit = function() {
  //   return $http({
  //     method: "GET",
  //     url: ApiPath + '/menu_items/'+signUpCtrl.user.menuNumber+'.json'
  //   }).then(function(result) {
  //     signUpCtrl.success = true;
  //   }).catch(function(error) {
  //     signUpCtrl.menuItemNotValid = true;
  //   });
  // }

    signUpCtrl.submit = function() {
      UserService.submit(signUpCtrl.user)
      .then(function(result){
        console.log("~~~~~~~~~~~~~~~result",result);
        if (result.status != 200) {
          signUpCtrl.menuItemNotValid = true;
        } else {
          signUpCtrl.success = true;
        }
      })
    }
  }
})()
