https://kwitter-c8c91-default-rtdb.firebaseio.com

function addUser()
{
user_name = document.getElementById("user name").value;
firebase.database().ref("/").child(user_name).update({
purpose:"adding user"
});
}