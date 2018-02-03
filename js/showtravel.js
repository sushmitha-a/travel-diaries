



var showdiaries = document.getElementById('showdiaries');
var firebaseHeadingref= firebase.database().ref();
var firebaseHeadingref1= firebase.database().ref().child("Users");
/*
firebaseHeadingref.on("child_added", snap => {
var city = snap.child("City").value();
var desc = snap.child("Description").value();
window.alert(city);
}
//function(datasnapshot){
  //showdiaries.innerHTML = datasnapshot.val();
*/
var UserId = new Array();
var Desc = new Array();

var i = 0;
var k=0;
const preObject = document.getElementById('object');







firebase.database().ref('/Users/').once('value').then(function(snapshot) {
//console.log(JSON.stringify(snapshot.val()));
//var b =snapshot.val().Users;
//console.log(JSON.stringify(b.val().));

for(record in snapshot.val()) { //ordered records, see comment
    UserId[i]= record;
    i++;
};

for(j=0;j<i;j++)
{
  firebase.database().ref('/Users/'+UserId[j]).once('value').then(function(snapshot) {

  var Keys = new Array();
  var City = new Array();
  var imge;

  k=0;
  for(record in snapshot.val()) { //ordered records, see comment
      Keys[k]= record;
      City[k] = snapshot.child(Keys[k]+"/"+"City").val();
      Desc[k] = snapshot.child(Keys[k]+"/"+"Description").val();
      imge = snapshot.child(Keys[k]+"/"+"downloadURL").val();

   var t = '<div class="card mb-4"><h2 class="card-title"><u>'+City[k]+'</u></h2><img class="card-img-top" src="'+imge+'alt="Card image cap"><div class="card-body"><div class="content hideContent"><p class="card-text"><div id ='+k+'>'+Desc[k]+'</div></p></div><div class="show-more"><a href="#" class="btn btn-primary" style="color:white">Show More</a></div></div><div class="card  -footer text-muted">Posted on January 1, 2017 by<a href="#">Start Bootstrap</a></div></div>';

      var x   = document.createElement("span");
   myDiv = document.getElementById("ui");
   x.innerHTML = t;

     myDiv.appendChild(x);

    k++;
};


});
}



});



/*
for(var j=0;j<i;j++)
{
City[j] = snapshot.child(UserId[j]+"/"+"City").val();
}

for(var j=0;j<i;j++)
{
Desc[j] = snapshot.child(UserId[j]+"/"+"Description").val();
}

src = "https:www.google.com";
var t = "sjd";
var t = '<div class="card mb-4"><b></b><div class="card-body"><h2 class="card-title">'+City[0]+'</h2><div class="content hideContent"><p class="card-text"><div id ="+j+">'+Desc[0]+'</div></p></div><div class="show-more"><a href="#" class="btn btn-primary" style="color:white">Show More</a></div></div><div class="card  -footer text-muted">Posted on January 1, 2017 by<a href="#">Start Bootstrap</a></div></div>';
document.getElementById("ui").innerHTML = t;


});
*/
