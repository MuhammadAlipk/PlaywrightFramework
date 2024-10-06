const path = require('path');
const fs = require('fs').promises;


// Path to save the authentication state (user session)
const authFile = path.join(__dirname, '../playwright/.auth/user.json');

// Export a single async function
module.exports = async () => {

    try {
        await fs.unlink(authFile);
        console.log('File deleted!');
      } catch (err) {
        // Handle specific error if any
        console.error(err.message);
      }

};
