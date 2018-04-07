import express from 'express';
import path from 'path';
import fallback from 'express-history-api-fallback';
const app = express();
const publicDir = path.join(__dirname, `../../../public`);

app.use(express.static(publicDir))

//SHOULD AFTER ROUTING
app.use(fallback('index.html', { root: publicDir }));

const port = process.env.PORT || 3000;
app.listen(port, (err) => {
    if(err) throw err;
    console.log(`Hey, I'm your server running at port : ${port}`);
})