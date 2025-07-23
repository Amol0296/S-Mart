import express, {Request, Response} from 'express';
import { registerController } from '../controllers';
const routes = express.Router();

routes.post('/', (req: Request, res: Response) => registerController(req, res));

export default  routes;