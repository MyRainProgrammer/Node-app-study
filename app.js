import express from 'express';
import chalk from 'chalk';
import morgan from 'morgan';
import debug from 'debug';
const debugapp = debug('app');
const app = express();
const port = 5000;

app.use(morgan('combind'));

app.get("/", (req,res) =>{

    res.send('Hello World!!!!!');

})

app.listen(port, ()=>{
    debugapp("Listening on port" + chalk.green(port));
})
