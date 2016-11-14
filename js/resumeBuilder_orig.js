/*
This is empty on purpose! Your code to build the resume will go here.
 */
 
$("#main").append("Mane<br />");

var at = 'I am Mane and I am FUN!';
console.log(at);
 
 
var newAt = at.replace("FUN", "AWESOME");
console.log(newAt);
$("#main").append("<br />" + newAt);

var bio = {
	"name" : "Mane",
	"age" : 34,
	"role" : "FrontendNinja",
	"skills" : ["awesomness", "developer", "TCL", "JS", "Java"]
}
 
bio.city = "Dorfen";
bio["workCity"] = "Munich";

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

$("#header").append(bio.skills.join(", ").toUpperCase());

$("#header").append("<br><br><p>")
$("#header").append(bio.city + " ");
$("#header").append(bio.workCity);
$("#header").append("</p>")

var name = "AlbERt EINstEiN";

function nameChanger(oldName) {
    // var finalName = oldName;
    // Your code goes here!

	var array = oldName.split(" ");
    var firstname = array[0].toLowerCase();
	
	finalName = firstname[0].toUpperCase() + firstname.slice(1) + " " + array[1].toUpperCase()
		
    // Don't delete this line!
    return finalName;
}

// Did your code work? The line below will tell you!
console.log(nameChanger(name));