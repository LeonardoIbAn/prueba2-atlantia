import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import router from './routes'

const app = express();

//TODO Conexión base de datos
const mongoose = require('mongoose');


const uri = 'mongodb+srv://admin:pQo82ujIYNptFBxG@cluster0.dzxo9.mongodb.net/atlantiaDev?retryWrites=true&w=majority';
const options = {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true};


//TODO Or using promises
mongoose.connect(uri, options).then(
  
  () => { console.log('Conectado a DB') },
 
  err => { console.log(err) }
);




//TODO Middleware
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));



//TODO Rutas
app.use('/api',router)



app.set('port', process.env.PORT || 3000)

app.listen(app.get('port'), () => {
    console.log(`Example app listening on port port! ` + app.get('port'));
    console.log(path.join(__dirname, 'public'))
});

/* //TODO VUE middleware para router modo history
const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));

app.set('puerto', process.env.PORT || 3000);
app.listen(app.get('puerto'), () => {
  console.log('Example app listening on port'+ app.get('puerto'));
}); */
