// alert('hello');

// var userData={
// 	firstName:"",
// 	lastName:"",
// 	email:"",
// 	phoneNumber:"",
// 	gender:"",
// 	city:"",
// 	summary:"",
// 	college:""
// }
// var setPersonalFilled=false;
// if(document.getElementsByName("firstName")[0]){
// 	if(document.getElementsByName("firstName")[0].value=="") {

// 	return false;	
// 	}
// }

function setPersonal()
{
			
	localStorage.setItem("fname",document.getElementsByName("firstName")[0].value);
	localStorage.setItem("lname",document.getElementsByName("lastName")[0].value);
	localStorage.setItem("email",document.getElementsByName("email")[0].value);
	localStorage.setItem("phone",document.getElementsByName("phone")[0].value);
	localStorage.setItem("address",document.getElementsByName("address")[0].value);
	window.location.href = "third.html";	
}		

function setSummary()
{
	localStorage.setItem("summary",document.getElementsByName("summary")[0].value);	
	window.location = "FIFTH.HTML";

}

function setEducation()
{
	localStorage.setItem("collegeName",document.getElementsByName("collegeName")[0].value);
	localStorage.setItem("degree",document.getElementsByName("degree")[0].value);
	localStorage.setItem("passingYearCollege",document.getElementsByName("passingYearCollege")[0].value);
	localStorage.setItem("marksCollege",document.getElementsByName("marksCollege")[0].value);
	localStorage.setItem("juniorCollegeName",document.getElementsByName("juniorCollegeName")[0].value);
	localStorage.setItem("field",document.getElementsByName("field")[0].value);
	localStorage.setItem("passingYearJrCollege",document.getElementsByName("passingYearJrCollege")[0].value);
	localStorage.setItem("marksJrCollege",document.getElementsByName("marksJrCollege")[0].value);
	localStorage.setItem("schoolName",document.getElementsByName("schoolName")[0].value);
	localStorage.setItem("board",document.getElementsByName("board")[0].value);
	localStorage.setItem("passingYearSchool",document.getElementsByName("passingYearSchool")[0].value);
	localStorage.setItem("marksSchool",document.getElementsByName("marksSchool")[0].value);
}

function setSkillsAndInternship()
{
	localStorage.setItem("skill1",document.getElementsByName("skill1")[0].value);
	localStorage.setItem("skill2",document.getElementsByName("skill2")[0].value);
	localStorage.setItem("skill3",document.getElementsByName("skill3")[0].value);
	localStorage.setItem("skill4",document.getElementsByName("skill4")[0].value);
	localStorage.setItem("skill5",document.getElementsByName("skill5")[0].value);
	localStorage.setItem("skill6",document.getElementsByName("skill6")[0].value);
	localStorage.setItem("internProject1",document.getElementsByName("internProject1")[0].value);
	localStorage.setItem("internProject2",document.getElementsByName("internProject2")[0].value);
}

function setHobby()
{
	localStorage.setItem("hobby1",document.getElementsByName("hobby1")[0].value);
	localStorage.setItem("hobby2",document.getElementsByName("hobby2")[0].value);
	printCv();

}

function printCv()
{
	var docDefinition={
	content: [		
		{
			text: `${localStorage.getItem("fname")} ${localStorage.getItem("lname")}`,
			style: 'header',
			alignment:'center'		
		},			
		{
			text: `${localStorage.getItem("email")} | ${localStorage.getItem("phone")} || ${localStorage.getItem("address")}`,
			style: 'subheader',
			alignment:'center'
		},		
		{   
			fillColor: '#F1C40F',
	    	table: {
				body: [
					['.Professional Summary                                                                                                                              /']
					
				]
		}	},
		{
		    text:`\n ${localStorage.getItem("summary")}`,
			style: 'small'
		},
		'\n',
		{   fillColor: '#F1C40F',
		
	    table: {
				body: [
					['.Education                                                                                                                                                     /']
					
				],
				
	}	},
	'\n',
		{
			table: {
			   	widths: [218,120, 70,70],
				body: [
				    [`${localStorage.getItem("collegeName")}`,`${localStorage.getItem("degree")}`,`${localStorage.getItem("passingYearCollege")}`,`${localStorage.getItem("marksCollege")}`],
					[`${localStorage.getItem("juniorCollegeName")}`,`${localStorage.getItem("field")}`,`${localStorage.getItem("passingYearJrCollege")}`,`${localStorage.getItem("marksJrCollege")}`],
					[`${localStorage.getItem("schoolName")}`,`${localStorage.getItem("board")}`,`${localStorage.getItem("passingYearSchool")}`,`${localStorage.getItem("marksSchool")}`]									
			]
			}
		},
	'\n',
		{   fillColor: '#F1C40F',
	    table: {
				body: [
					['.Skills and Certifications                                                                                                                             /']
					
				]
	}	},
    '\n',
    	{
			columns: [
				{
					ul: [
						`${localStorage.getItem("skill1")}`,
						`${localStorage.getItem("skill2")}`,
						`${localStorage.getItem("skill3")}`
						
					]
				},
				{
					ul: [
						`${localStorage.getItem("skill4")}`,
						`${localStorage.getItem("skill5")}`,
						`${localStorage.getItem("skill6")}`
					
				
					]
				}
			]
		},
		'\n',
		
			{   fillColor: '#F1C40F',
	    table: {
				body: [
					['.Internship/Experience/Projects                                                                                                               /']
					
				]
	}	},
	
	'\n',
		{
			ul: [
				`${localStorage.getItem("internProject1")}`,
				`${localStorage.getItem("internProject2")}`
				
			]
		},
	'\n',
			{   fillColor: '#F1C40F',
		
	    table: {
				body: [
					['.Hobbies and Interests                                                                                                                               /']
					
				],
				
				
	},
		ul: [
				`${localStorage.getItem("hobby1")}`,
				`${localStorage.getItem("hobby2")}`
				
			]
	},
	

	
	
	],

	styles: {
		header: {
		    decoration: 'underline',
			fontSize: 30,
			bold: true
		},
		subheader: {
			fontSize: 18,
			italics: true,
			color:"gray"

		},
		quote: {
			italics: true
		},
		small: {
			fontSize: 13
		}
	},
	

};
	pdfMake.createPdf(docDefinition).download();
}

// var docDefinition = 
// 	{
// 	 content:
// 	[
// 		{text:`name:${localStorage.getItem("name")}`}
// 	]
// 	}
//  	pdfMake.createPdf(docDefinition).download();
//  	localStorage.clear();
	
// function print()
// {
// 	var docDefinition = {
// 		content: [
// 		{
		
// 		`Last Name${userData.lastName}`
// 		`Summary:${userData.summary}`
// 		}
// 		]
// 	}
// 	pdfMake.createPdf(docDefinition).download();
// }


/*

// playground requires you to assign document definition to a variable called dd

var dd = {
	content: [
		
		
		{
			text: 'Name',
			style: 'header',
			alignment:'center'
		},
		
		
		
		{
			text: 'Post',
			style: 'subheader',
			alignment:'center'
		},
		{
			text: 'email | phoneNumber',
			style: 'subheader',
			alignment:'center'
		},
		
	{   fillColor: '#F1C40F',
	    table: {
				body: [
					['.Professional Summary                                                                                                                              /']
					
				]
	}	},
		{
			text: '\n Summary',
			style: 'small'
		},
		{   fillColor: '#F1C40F',
		
	    table: {
				body: [
					['.Education                                                                                                                                                     /']
					
				],
				
	}	},
	'\n',
		{
			table: {
			   	widths: [218,120, 70,70],
				body: [
				    ['name','degree','year','marks'],
					['collegeName', 'degreeName', 'year of passing','9.0 CGPA'],
					['junoir college', 'field', 'year of passing','marks'],
					['school','board','year of passing','marks']
				]
			}
		},
	'\n',
		{   fillColor: '#F1C40F',
	    table: {
				body: [
					['.Skills and Certifications                                                                                                                             /']
					
				]
	}	},
    '\n',
    	{
			columns: [
				{
					ul: [
						'skill1',
						'skill2',
						'skill3'
					]
				},
				{
					ul: [
						'skill4',
						'skill5',
						'skill6'
					]
				}
			]
		},
		'\n',
		
			{   fillColor: '#F1C40F',
	    table: {
				body: [
					['.Internship/Experience/Projects                                                                                                               /']
					
				]
	}	},
	
	'\n',
		{
			ul: [
				'item 1',
				'item 2'
				
			]
		},
	
	],
	
	
	
	styles: {
		header: {
			fontSize: 30,
			bold: true
		},
		subheader: {
			fontSize: 18,
			bold: true
		},
		quote: {
			italics: true
		},
		small: {
			fontSize: 13
		}
	}
	
}

*/
