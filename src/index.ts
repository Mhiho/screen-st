import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';
import { router } from './routes/router';
import { connection } from './db/config';

connection();

interface User {
  username: string;
}

const app: Express = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', router);

app.get('/', (req: Request, res: Response) => {
  res.send('go');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
