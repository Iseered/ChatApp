
import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js"
import connectToMongoDB from "./db/connectToMongoDB.js";
import messageRoutes from "./routes/message.routes.js"

import userRoutes from "./routes/user.routes.js";
import cookieParser from "cookie-parser";
const app=express();

const PORT=process.env.PORT || 5000;


dotenv.config();
app.use(express.json());// to parse the incoming request with json  payloads (from req.body)
app.use(cookieParser());
app.use("/api/auth",authRoutes); 
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

// app.get("/",(req,res)=>{
//  res.send("Hello World!")
// });ctrl+k+c



/*app.use("/api/auth",authRoutes); Aqui traemos de otra clase la rutas para la ruta "/api/auth" donde podemos poner difrentes
rutas pero tomando como base el "/api/auth" Es decir en el componente authRoutes tenemos todas las rutas derivadas de  /api/auth
  
// esta es una forma comun para las rutas pero como queremos como  base "/api/auth"tenemos que hacerlo
una manera mas sencilla pero escribiremos muchas con base /api/auth por ejemplo "/api/auth/logout",entonces para que sea mas legible ponemos como la anterior
 app.get("/api/auth/login",(req,res)=>{
    res.send("signup route")
   });
   
*/



app.listen(PORT,()=>{
   connectToMongoDB();
   console.log(`Server running on port  ${PORT}`)
});
   