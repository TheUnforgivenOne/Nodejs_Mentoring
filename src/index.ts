import express from 'express';
import { router as indexRouter } from './routes';
import { router as usersRouter } from './routes/users';

const app = express();
const port = 3000;

app.listen(port, () => console.log(`Running on port ${port}`));

app.use('/', indexRouter);
app.use('/users', usersRouter);
