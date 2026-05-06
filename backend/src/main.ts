import express from 'express';
import dotenv from 'dotenv';
import routes from './routes';
import { AppDataSource } from './data-source';

dotenv.config();
const { PORT } = process.env;

const main = async () => {
  AppDataSource.initialize()
    .then(async () => {
      const app = express();
      app.use(express.json());
      app.use(routes);
      app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
      });
    })
    .catch((error) => console.log(error));
};

main();
