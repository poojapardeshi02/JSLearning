const professor = {
    firstName : "Pooja", 
    lastName : "Pardeshi",
    age : 30, 
    city : "Phaltan",
    address : "Gajanan Chowk,Jadhavwadi",
}
console.log('==== Step 1 ====');
console.log(`Information about Professor`,professor);

professor.degree = {
     engineering : 'CSC',
     PHD : 'Adv Computing'
}
console.log('==== Step 2 ====');
console.log(`Including degree:`,professor.degree);

console.log('==== Step 3 ====');
professor.certificates = ['Hacker Rank Participation','Certificate in IFE course','Certificate in Adv Programming'];
console.log(`Adding one array:`,professor.certificates);

professor.concatDegree = function(){
    return `Teacher total degrees are:degree1-${professor.degree.engineering},degree2-${professor.degree.PHD} `;
}
let result = professor.concatDegree();
console.log(`==== Step 4 ====`);
console.log(`By concat all  degrees:`,result);

console.log(`==== Step 5 ====`);
professor.totalExperience="14 years";
console.log(`By adding total experience:`,professor);

console.log(`==== Step 6 ====`);
professor.city="Pune";
console.log(`By Modifying city:`,professor);

console.log(`==== Step 7 ====`);
professor.certificates.push('Oracle Certified');
console.log(`By adding certificates:`,professor);

console.log(`==== Step 8 ====`);
let lastElementOfCertificate=professor.certificates[professor.certificates.length-1];
console.log(`The last element of certificate array is:`,lastElementOfCertificate);

