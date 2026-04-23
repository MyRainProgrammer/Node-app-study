import express from 'express';
import chalk from 'chalk';
import morgan from 'morgan';
import debug from 'debug';
import path from 'path';
const debugapp = debug('app');
const app = express();
const port = 5000;
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(morgan('combind'));
app.use(express.static(path.join(__dirname,"/public/")));

app.get("/", (req, res) => {

    res.send('Hello World!!!!!');

})

app.listen(port, () => {
    debugapp("Listening on port" + chalk.green(port));
})
