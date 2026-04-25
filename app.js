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
const productRouter = express.Router();
import products from './data/products.json' with {type: "json"}

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(morgan('combind'));
app.use(express.static(path.join(__dirname,"/public/")));
app.set("views","./src/views");
app.set("view engine", "ejs")

productRouter.route("/").get((req,res) =>{
    res.render("products",
        products,
    );
});

productRouter.route("/1").get((req,res) =>{
    res.send("Hello World !! I'm Product1");
});

app.use("/products", productRouter)

app.get("/", (req, res) => {

    res.render('index',{username: 'Sugar mommy', customers: ["Witchayut","Witchayada","Weerapon","Nicchanan"]});

})

app.listen(PORT, () => {
    debugapp("Listening on port" + ":" + chalk.green(PORT));
})
