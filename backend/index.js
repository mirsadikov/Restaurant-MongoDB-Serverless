import app from "./server.js";
import mongodb from "mongodb";
import dotenv from "dotenv";

dotenv.config()

const MongoClient = mongodb.MongoClient;
const PORT = process.env.PORT || 5000;

MongoClient.connect(process.env.MONGODB_URI, {
    poolSize: 50,
    writeConcern: {
        wtimeout: 2500
    },
    useUnifiedTopology: true,
    useNewUrlParser: true
}).catch(err => {
    console.log(err.stack)
    process.exit(1)
}).then(async () => {
    app.listen(PORT, (err) => {
        if (err) console.log(err)
        console.log(`Server is running at http://localhost:${PORT}`)
    })
})