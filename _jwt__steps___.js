/**
 * install jsowebtoken
 * jwt.sign (payload, secret, {expiresIn:})
 * token cline
 */

/**
 * how to store token in the client side
 * 1. memory --> ok type
 * 2. local storage --> ok type (XSS)
 * 3. cookies: http only
 */


/**
 * set cokies http only for deveopment secure: false
 * 
 * 2. cors
 * app.use(cors({
    origin: ['http://localhost:5173'],
    credentials: true
}));
 * 3. client side axios setting
in axios set withCredintial: true;

 */



/**
 * to generate a secret code: require('crypto').randomBytes(64).toString('hex')
 */