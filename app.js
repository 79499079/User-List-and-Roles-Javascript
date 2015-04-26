var call = function(){
  // handlebars templating and compiling
  var source = $("#my-template").html();
  var template = Handlebars.compile(source);
  var html = template({userdata: usersArray});
  $('#users').html(html);

  // binding click events
  $( ".edit-user" ).click(editUser);
  $(".delete-user").click(deleteUser)
  $(".edit-role").click(editRole)
  $(".delete-role").click(deleteRole)
  $("#add-user").click(addUser)
};

// initial user array
var usersArray = [{ name: 'Alex', roles:['admin','user','custom']}];

var addUserInput = document.getElementById("new-user");
var addUserRole = document.getElementById("user-roles");

// new user creation
var createNewUser = function(userName, roles, event){
  console.log([roles])
  var listItem = usersArray.push({name: userName, roles: [roles]});
  var user = usersArray[listItem - 1];
  call();
  return user;
}

// create new user 
var addUser = function(event){
  console.log("I've been HIT!");
  var user = createNewUser(addUserInput.value, addUserRole.value);
  addUserInput.value = "";
  addUserRole.value = "";
}

// edit user function
var editUser = function(){
  console.log("edit")
  var listItem = this.parentNode
  console.log(listItem)
  var userName = listItem.querySelector("label[type=text]")
  var editInput = listItem.querySelector("input");
  for(var i=0; i<usersArray.length; i++) {
    for(key in usersArray[i]) {
      if(usersArray[i][key].indexOf(userName.innerHTML)!=-1) {
        usersArray[i].name = editInput.value;
        userName.innerHTML = editInput.value
        }
      }
    }
  };
// delete user function
var deleteUser = function(){
  console.log("delete")
  var listItem = this.parentNode
  var userName = listItem.querySelector("label[type=text]")
  for(var i=0; i<usersArray.length; i++) {
    for(key in usersArray[i]) {
      if(usersArray[i][key].indexOf(userName.innerHTML)!=-1) {
        usersArray.splice(i, 1);
        call();
        }
      }
    }
}

// edit Role
var editRole = function(){
  console.log("edit role")
  var listItem = this.parentNode
  var role = listItem.querySelector("label[type=text]")
  var inputRole = listItem.querySelector("input")

  for(var i=0; i<usersArray.length; i++) {
    for(key in usersArray[i]) {
      if(usersArray[i][key].indexOf(role.innerHTML)!=-1) {
        var roleArray = usersArray[i].roles
        var roleIndex = usersArray[i].roles.indexOf(role.innerHTML)
        console.log(roleArray[roleIndex])
        roleArray[roleIndex] = inputRole.value;
        role.innerHTML = inputRole.value
        }
      }
    }
  }

  // delete role
var deleteRole = function(){
  console.log("delete role")
  var listItem = this.parentNode
  var role = listItem.querySelector("label[type=text]")
  for(var i=0; i<usersArray.length; i++) {
    for(key in usersArray[i]) {
      if(usersArray[i][key].indexOf(role.innerHTML)!=-1) {
        var roleArray = usersArray[i].roles
        var roleIndex = usersArray[i].roles.indexOf(role.innerHTML)
        roleArray.splice(roleIndex, 1)
        call();
        }
      }
    }
}

call();



