const path = require('path');
const fs = require('fs');


// Export a single async function
module.exports = async () => {

// Path to save the authentication state (user session)
const authFile = path.join(__dirname, '../playwright/.auth/user.json');

    try {
      if(fs.existsSync(authFile))
      {
        await fs.unlinkSync(authFile);
        console.log('File deleted!',authFile);
      }
      else 
      {
        console.log("File Not exits", authFile)
      }
      } catch (err) {
        // Handle specific error if any
        console.error(err);
      }

};
