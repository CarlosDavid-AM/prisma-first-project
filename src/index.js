import dotenv from 'dotenv';
dotenv.config();


import express from 'express'

import categories from './routes/categories.routes.js'
import products from './routes/products.routes.js'

const app = express()

app.use(express.json())

app.use('/api', categories)
app.use('/api', products)

app.listen(3000)
console.log('Server en el puerto 3000');