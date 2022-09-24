const Express = require('express');
const cors = require('cors');
const app = Express();

const db = require('./models');

const router = require('./router');

const PORT = 3001;

app.use(cors());
app.use(Express.json());
app.use(router);

//app.listen(PORT, () => console.log(`Listening on port ${PORT} - Solo Project`));

(async () =>{
    await db.sequelize.sync();
    app.listen(PORT);
    console.log(`DB connected - Server listening on port ${PORT} - Solo Project`); // eslint-disable-line no-console
  })();
  