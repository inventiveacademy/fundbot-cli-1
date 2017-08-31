var program = require('commander');
var request = require('request');
 
program
  .version('0.1.0')
  .option('-a, --getApplicants', 'Getting all Applicants')
  .option('-g, --getApplicant', 'Getting one Applicant')
  .option('-c, --postApplicants', 'Creating Applicants')
  .option('-d, --delApplicant', 'deleting Applicant')
  .parse(process.argv);

console.log('You have applicants:');
if (program.getApplicants)
	getApplicants();

if (program.getApplicant) 
	getApplicant();

if (program.postApplicants) 
	postApplicants();

if (program.delApplicant) 
	delApplicant();

function getApplicants(){
	request('localhost:3001/applicants', function (error, response, body) {
		console.log(body);
	});
	console.log("Getting all Applicants Master!!");
}

function getApplicant(){
	console.log("Getting the Applicant!!");
}

function postApplicants(){
	console.log("Creating a new Applicant!!");
}

function delApplicant(){
	console.log("Deleting an Applicant!!");
}