// importamos las librerias 
import 'dotenv/config';
import { get} from 'env-var';

// creamos nuestro enum que manejera nuestra envs
export const envs = {

    PORT: get('PORT').required().asPortNumber(),
    MONGO_URL: get("MONGO_URL").required().asString(), //1
    MONGO_DB_NAME: get("MONGO_DB_NAME").required().asString(), //2
}