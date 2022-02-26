const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const mongoose = require('mongoose')
const {MONGO_URI} = require('./config/keys')
const swaggerUI = require('swagger-ui-express')
const docs = require('./docs/index')

app.use(express.json())

mongoose
  .connect(MONGO_URI, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log("conectado a mongoDB con éxito"))
  .catch((err) => console.error(err));

app.use('/tasks',require('./routes/tasks'))
app.use('/tasksDeleted',require('./routes/tasksDeleted'))

app.use('/api-docs', swaggerUI.serve,swaggerUI.setup(docs))

app.listen(PORT, ()=> console.log('Servidor levantado en el puerto ' + PORT))
