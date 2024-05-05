import cors from "cors";
import  express  from "express";
import dbInit from "./posts/infraestructure/db/mongo";
import postRoute from "./posts/infraestructure/route/post.route";
import dotenv from 'dotenv';

dotenv.config();


const app= express();
app.use(express.json())
app.use(cors())
app.use(postRoute)


const PORT = 3000

app.get('/health', (_req,res)=>{
    res.send('healthy')

})

dbInit().then()

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})
