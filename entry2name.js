<html>
<head>
<center>
<title>attendence record</title>
<code class="heading" >Log In</code>
</center>
</head>
<body>
<center>
      
      <input type="text" id="entry number" placeholder="entry number"></br>
   
  <input type ="button" value="Log on" onclick="clicked()">
  </center>

  
<style >
<!--
.heading{
  color: Red;
  font-family: bold;
  font-size: 56px;
  allignement: center;
 display: block;
  //background: yellow;
  margin-bottom: 15px;
  }	
  

-->
</style>



<script>
function clicked(){
  var user = document.getElementById('entry number'); 
 

if(user.value in name_database){
window.alert("You are logged in");
}
else{
window.alert("invalid entry number");
}
}
/*function clicked(){
	var user = document.getElementById('entry number'); 
	var name_database = JSON.parse(name_database.json);
	var stduent_detail = JSON.parse(https://raw.githubusercontent.com/aman71197/CampusBot/master/messages/database/data_base.json);
	if(user.value in student_detail){
	window.alert("You are logged in");
	var student_courses = student_detail[courses];
	var numberofcourses =  student_courses.lenght;
	var courses_taken = [];
	for(var i=0;i<numberofcourses;i++){
		courses_taken.push(student_courses(i));
	
	}
		
	}
	else{
window.alert("invalid entry number");
}
	if(user.value in student_detail){
		var student_name = student_detail[name];
		return student_name;
		
	}
	}
*/
</script>




</body>
</html>
