import express from "express";
import http from "http";
import router from "./routes/index.js";
import cors from "cors";
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './swaggerConfig.js';

const app = express();
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
const httpsServer = http.createServer(app);
const HOST = '0.0.0.0';

app.use(cors({ credentials:true, origin:true }));
app.use(express.json());
app.use(router);

httpsServer.listen(5000,HOST, ()=> console.log('Server https running at port 5000'));
