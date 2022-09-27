import express from 'express';
import cors from 'cors';
import mainRouter from './routes';
import connecToDB from './persistence/connection';

const app = express();
const PORT = process.env.PORT || 3000;
const jsonParser = express.json();
connecToDB();

app.use(cors());
app.use(jsonParser);

app.use('/api', mainRouter);

app.get('/', (_, res) => res.send('Ping!'));

app.listen(PORT, () => console.log(`Server Running on PORT: ${PORT}`));
