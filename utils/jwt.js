const jwt = require ('jsonwebtoken')
function createJWT(datatoencode) {
    const token = jwt.sign(datatoencode, 'secret');
    return token;
}

async function validateJWT(token) {    
    return jwt.decode(token, 'secret');    
       
}

module.exports = {
    createJWT,
    validateJWT
}