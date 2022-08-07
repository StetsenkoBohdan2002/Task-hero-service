import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import router from './routes/router.js';
import cors from 'cors';
dotenv.config();
const app = express();
app.use(
  morgan(':http-version :method :url - :response-time[5] ms [:date[web]]')
);
app.use(cors());
app.use(express.json());
app.use((err, req, res, next) => {
   const status = err.status || 500;
   const message = err.message || 'Something went wrong!';
   return res.status(status).json({
     status,
     message,
   });
 });
app.use('/api', router);

app.listen(process.env.PORT, () => {
  console.log('Server has been started!');
});
