// const fs = require('fs');

// // Read the existing db.json file
// const db = JSON.parse(fs.readFileSync('db.json', 'utf-8'));

// // Extract unique pickup and dropoff locations
// const pickupLocations = new Set(db.CabCardDetailsList.map(cab => cab.pickupLocation));
// const dropoffLocations = new Set(db.CabCardDetailsList.map(cab => cab.dropoffLocation));

// // Update pickupLocations and dropoffLocations
// db.pickupLocations = [...pickupLocations];
// db.dropoffLocations = [...dropoffLocations];

// // Write the updated db.json file
// fs.writeFileSync('db.json', JSON.stringify(db, null, 2)); // null, 2 for pretty printing

// console.log('Successfully updated pickupLocations and dropoffLocations in db.json');
