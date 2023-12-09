// const x = 5;
// const y = 10;

// console.log(x + y);

// const fs = require('fs');

// // Specify the file path and content
// const filePath = 'my.txt';
// const fileContent = 'My name is hein htet zan';

// // Create the file
// fs.writeFile(filePath, fileContent, (err) => {
//   if (err) {
//     console.error('Error creating file:', err);
//   } else {
//     console.log('File created successfully!');
//   }
// });

// ==============================================


// const fs = require('fs');

// // Specify the file path
// const filePath = 'data.json';

// // Read the file
// fs.readFile(filePath, 'utf8', (err, data) => {
//   if (err) {
//     console.error('Error reading file:', err);
//   } else {
//     console.log('File content:', JSON.parse(data));
//   }
// });


// =============================================


// Global

// console.log(global);


// const apiUrl = 'https://fakestoreapi.com/products/1';

// // Make a GET request
// global.fetch(apiUrl)
//     .then(res => res.json())
//     .then(json => console.log(json))
//     .catch(err => console.log(err))

// console.log(document);