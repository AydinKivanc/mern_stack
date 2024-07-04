const express = require("express")
const cors = require("cors")
const dotEnv = require("dotenv")
const connectDB = require("./config/db")
const authRoutes = require("./routes/v1/auth.routes")
const postRoutes = require("./routes/v1/post.routes")

dotEnv.config()
connectDB()
const app = express()

app.use(cors()) // tüm HTTP istekleri için CORS’u etkinleştirir.
app.options("*", cors()) // tüm kaynaklar için gelen OPTIONS isteklerinde CORS’u etkinleştirir. * burada joker karakterdir ve tüm yollar (endpoints) için geçerli olduğunu belirtir.
app.use(express.json({ limit: "30mb" })) //JSON verilerini ayrıştırır, limit seçeneği ile gelen istek gövdesinin boyutunu 30MB ile sınırlar. Express 4.16.0’dan itibaren, express.json() fonksiyonu, body-parser kütüphanesinin json işlevini içermektedir. Yani, express.json() fonksiyonu bodyParser.json() fonksiyonunun yerine geçebilir. Bu nedenle, sadece birini kullanmanız yeterlidir.
app.use(express.urlencoded({ extended: true })) //gelen POST isteklerin gövdesindeki Form verilerini otomatik olarak ayrıştırılmasını sağlar.

app.use("/auth", authRoutes) //Autantication routers

app.use("/posts", postRoutes)

module.exports = app // `app` nesnesini dışa aktar
