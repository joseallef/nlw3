import express from 'express';
import path from 'path';
import 'express-async-errors';
import cors from 'cors';

import './database/connection';
import routes from  './routes';

import errorHendler from './errors/heandler';

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

app.use('/uploads/', express.static(path.join(__dirname, '..', 'uploads')))
app.use(errorHendler);

// Rotas = CONJUNTO
// Recursos = USÚARIO
// Metodos HTTP, GET, POST, PUT, DELETE
// Parametos

// Quiry Params: http://localhost:8080/users?search=allef
// Route Params: http://localhost:8080/users/1 {imndentificar um recurso!}
// Body:  http://localhost:8080/users/1 {recebe varios recurso}



app.listen(3313);