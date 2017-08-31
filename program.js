var program = require('commander');
 
program
  .version('0.1.0')
  .option('-a, --getApplicants', 'Getting all Applicants')
  .option('-g, --getApplicant', 'Getting one Applicant')
  .option('-c, --postApplicants', 'Creating Applicants')
  .option('-d, --delApplicant', 'deleting Applicant')
  .parse(process.argv);
 
function getApplicants(){
	console.log("Getting all Applicants Master!!");
}

function getApplicant(){
	console.log("Getting the Applicant!!");
}
console.log('You have applicants:');

if (program.getApplicants) 
	console.log('  - getApplicants');
	getApplicants();

if (program.getApplicant) 
	console.log('  - getApplicant');
	getApplicant();

if (program.postApplicants) 
	console.log('  - postApplicants');

if (program.delApplicant) 
	console.log('  - delApplicant');