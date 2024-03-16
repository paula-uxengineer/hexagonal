import express from 'express';
import router from './interfaces/routes/home';

const app = express();
const port = 3000;

const homeRoute = router;
app.use('/home', homeRoute);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
