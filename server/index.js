import express from 'express';
import PostgresClient from './config/db.js';
import userRouter from './routers/userRouter.js'
import productRouter from './routers/productRouter.js'
import categoryRouter from './routers/categoryRouter.js'

const app = express();

app.use(express.json());
app.use('/users', userRouter);
app.use('/products', productRouter);
app.use('/categories', categoryRouter);




const PORT = process.env.PORT || 5000

app.listen(PORT, ()=> {
    console.log(`Bu port üzerinden dinliyor: ${PORT}`)
    PostgresClient.connect(err => {
        if(err) {
            console.log(`Bağlantı hatası`, err.stack)
        }
        else{
            console.log(`Veritabanı bağlantısı başarılı.`)
        }
    })
})