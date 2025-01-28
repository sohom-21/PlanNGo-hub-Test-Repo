// const fs = require('fs');

// function extractEmployeeData() {
//   // Read the existing db.json file
//   const db = JSON.parse(fs.readFileSync('db.json', 'utf-8'));

//   // Extract FullName and dob from CabCardDetailsList
//   const cabEmployeeData = db.CabCardDetailsList.map((cab, index) => ({
//     employeeId: `employee ${index + 1}`, // Generate employeeId
//     FullName: cab.FullName,
//     dob: cab.dob
//   }));

//   // Update cabEmployee in db.json
//   db.cabEmployee = cabEmployeeData;

//   // Write the updated db.json file
//   fs.writeFileSync('db.json', JSON.stringify(db, null, 2));

//   console.log('Successfully extracted FullName and dob and updated cabEmployee in db.json');
// }

// // Call the function to execute
// extractEmployeeData();
