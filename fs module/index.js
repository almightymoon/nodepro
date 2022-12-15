const path = require('path');

//basefile name 
console.log(__filename);

//Directory name 
console.log(path.basename(__filename));

//file extentions
console.log(path.extname(__filename));

//create path object
console.log(path.parse(__filename)); //we can point out specfic values by adding dot+value after filename 
//like __filename).name);

//concatenate paths
console.log(path.join(__dirname,'newFolder','testpage.txt'));
