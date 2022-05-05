import express from 'express';
import cors from 'cors';
import { healtCheck } from './app.controller.js';
import { robotsController } from './robots/interface/robots.controller.js';

const app = express();

app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'],
  }),
);

const router = express.Router();
const port = 3001;

app.use(express.json());

healtCheck(router);
robotsController(router);

app.use(router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})