const express = require('express');
const app = express();
const cors = require('cors')

app.use(cors())

require('dotenv').config()

const { dbConnection } = require('./database/config')

const PORT = process.env.PORT

app.use(express.json())

dbConnection()

app.use('/users', require('./routes/users'));

app.listen(PORT, () => console.log(`Servidor levantado en el puerto ${PORT}`))