var user_name = document.forms['myform'].elements['User'];
var city_name = document.forms['myform'].elements['City'];
var desc_data = document.forms['myform'].elements['Desc'];
var downloadURL;

var firebaseref = firebase.database().ref().child("Users");
var firebaserefcity = firebase.database().ref().child("City");


var uploader = document.getElementById('uploader');
var fileButton = document.getElementById('fileButton');


fileButton.addEventListener('change',function(e){
  var file1 = e.target.files[0];
  var storageRef = firebase.storage().ref('sweet_gif/'+ file1.name);
  var task = storageRef.put(file1);
  task.on('state_changed',
  function progress(snapshot) {
    var percentage = (snapshot.bytesTransferred / snapshot.totalBytes)*100;
    uploader.value  = percentage;
  },
       function error(err){

       },
 function complete(){

     var metadata  = task.snapshot.metadata;
     console.log(metadata);
     var key = metadata.md5Hash.replace(/\//g, ':');
        downloadURL = task.snapshot.downloadURL;
      }

);


});



function submitClick(){

var today = new Date();
var time = new Date(Date.parse(today)).toUTCString();
window.alert(time);

user = user_name.value;
city = city_name.value;
desc = desc_data.value;

//var firebaseref = firebase.database().ref().child("Users");
var firebaseref1 = firebaseref.child(user);
var firebaseref2 = firebaseref1.child(time).set({
    City : city,
    Description : desc,
    downloadURL : downloadURL,
});

var firebaseref1 = firebaserefcity.child(city);
var firebaseref2 = firebaseref1.child(time).set({
    UserName : user,
    Description : desc,
    downloadURL : downloadURL,
});

}
