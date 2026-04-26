import express from 'express';
import chalk from 'chalk';
import morgan from 'morgan';
import debug from 'debug';
import path from 'path';
import ejs from 'ejs';
const debugapp = debug('app');
const app = express();
const PORT = process.env.PORT;
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import productsRouter from './src/router/productsRouter.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname,"/public/")));
app.set("views","./src/views");
app.set("view engine", "ejs")

app.use("/products", productsRouter)

app.get("/", (req, res) => {

    res.render('index',{username: 'Sugar mommy', customers: ["Witchayut","Witchayada","Weerapon","Nicchanan"]});

})

app.listen(PORT, () => {
    debugapp("Listening on port" + ":" + chalk.green(PORT));
})
