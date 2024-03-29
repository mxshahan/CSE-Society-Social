const express = require('express');
const constants = require('../config/constants');
const  middlewaresConfig = require('../config/middlewares');
require('../config/db');
const apiRoutes = require ('../server/routes');
const path = require('path');
const fallback = require('express-history-api-fallback');
const app = express()

const publicDir = path.join(__dirname, `../../../public`);

middlewaresConfig(app);
require('../services/auth.services');
apiRoutes(app);

app.use(express.static(publicDir));
app.use(fallback('index.html', { root: publicDir }));

// app.use((req, res, next) => {
//     const err = new Error('Not Found');
//     err.status = 404;
//     next(err);
// });

// //Error handler funciton
// app.use((err, req, res, next) => {
//     const error = app.get('env') === 'development' ? err : {};
//     const status = err.status || 500;
//     //Respond to  client 
//     res.status(status).json({
//         error: {
//             message: error.message
//         }
//     });
// });


app.listen(constants.PORT, err => {
    if (err) {
        throw err;
    } else {
        console.log(`
        Server is running on port: ${constants.PORT}
        ---
        Running on ${process.env.NODE_ENV} || development
        ---
        Make Something Great`)
    }
})