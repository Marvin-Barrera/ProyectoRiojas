const bcrypt = require('bcryptjs'); 

const helpers = {};

helpers.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);  
    const hash = await bcrypt.hash(password, salt);
    return hash;
};

helpers.matchPassword =  async (password, savePasword) => {
    try {
        return await bcrypt.compare(password, savePasword);
    } catch {
        console.log(e);
    }
};

module.exports = helpers;

