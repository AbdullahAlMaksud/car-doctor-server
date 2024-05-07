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
 * 1. to send cookies from the client make sure you added withCreadential: true for the apo call using axios
 * 2. use cookie parser to read token
 */


/**
 * to generate a secret code: require('crypto').randomBytes(64).toString('hex')
 */