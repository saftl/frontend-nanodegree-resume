
var bio = {
	"name" : "Manfred Zingl",
	"role" : "Full Stack Developer",
	"contacts" : {
		"mobile" : "1234", 
		"email" : "zingl.manfred@gmail.com",
		"github" : "saftl",
		"location" : "Dorfen"
	},
	"biopic" : "images/fry.jpg",
	"welcomeMessage" : "Servus!",
	"skills" :["HTML", "CSS", "JS", "Java", "Photography"]
}

bio.display = function() {
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);

	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	$("#header").prepend(formattedName); 

	if(bio.skills.length > 0) {
		var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
		$("#header").append(formattedPic);
		var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
		$("#header").append(formattedMessage);
		$("#header").append(HTMLskillsStart);
		for(skill in bio.skills) {
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
			$("#skills").append(formattedSkill);
		};
	};
}

bio.display();


bio.contacts.display = function() {
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#topContacts").append(formattedMobile);
	$("#footerContacts").append(formattedMobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#topContacts").append(formattedEmail);
	$("#footerContacts").append(formattedEmail);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#topContacts").append(formattedGithub);
	$("#footerContacts").append(formattedGithub);
}
bio.contacts.display();

var work = {
	"jobs" : [
	{
		"employer": "Ich",
		"title" : "Selbst&auml;ndig",
		"location": "Dorfen, St. Wolfgang",
		"startDate": "2010",
		"endDate": "2011",
		"description": "so Sachen halt..."
	},
	{
		"employer": "Ich",
		"title" : "Selbst&auml;ndig",
		"location": "Dorfen, St. Wolfgang",
		"startDate": "2011",
		"endDate": "2012",
		"description": "und anderes..."
	}]
};

work.display = function() {
	for(job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].startDate+"-"+work.jobs[job].endDate);
		$(".work-entry:last").append(formattedDates);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
}

work.display();

var projects = {
	"projectList" : [
	{
		"title" : "Projekt 1",
		"dates" : "April 2015",
		"description": "Lorem Ipsum1"
	},
	{
		"title" : "Projekt 2",
		"dates" : "Juni 2016",
		"description" : "Lorem Ipsum2"
	}]
};

projects.display = function() {
	for(project in projects.projectList) {
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projectList[project].title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projectList[project].dates);
		$(".project-entry:last").append(formattedDates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projectList[project].description);
		$(".project-entry:last").append(formattedDescription);
	}
}

projects.display();

var education = {
	"schools" : [
	{
		"name": "FH M&uuml;nchen",
		"location": "M&uuml;nchen, Germany",
		"degree": "Diplom",
		"dates":"August 2005 - Juni 2009",
		"major" : "hm?",
		"url": "https://hm.edu"
	}
	],
	"onlineCourses" : [
	{
		"title" : "JS Intro",
		"school" : "Online Udacity",
		"dates" : "November 2016",
		"location" : "Dorfen",
		"url" : "https://classroom.udacity.com/courses/ud804"
	},
	{
		"title" : "JS Intro",
		"school" : "Online Udacity",
		"dates" : "November 2016",
		"location" : "Dorfen",
		"url" : "https://classroom.udacity.com/courses/ud804"
	}]
};


education.display = function() {
	for(school in education.schools) {
		$("#education").append(HTMLschoolStart);
		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		$(".education-entry:last").append(formattedName + formattedDegree);
		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedDates);
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedLocation);
		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		$(".education-entry:last").append(formattedMajor);
	}
};

// education.onlineCourses.display = function() {
	// $("#education").append(HTMLonlineClasses);
	// for(course in education.onlineCourses) {
		// var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
		// var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
		// var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
		// $("#education").append(formattedURL + formattedTitle + formattedSchool);
		// var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
		// $("#education").append(formattedDates);
		// var formattedLocation = HTMLschoolLocation.replace("%data%", education.onlineCourses[course].location);
		// $("#education").append(formattedLocation);
	// }
// };


// education.onlineCourses.display();

  
$("#mapDiv").append(googleMap);
