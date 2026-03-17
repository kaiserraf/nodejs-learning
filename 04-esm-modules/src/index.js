import funcaoTeste from "./utils/controllerCaronas.js"; // importa só uma função
import * as database from "./utils/database.js"; // importa varias funções
import { destructuring, databaseType } from "./utils/controllerPay.js"; // destructuring 
import * as api from "./utils/api.js";

destructuring();
database.connectToDatabase("PostgreSQL");
database.disconnectDatabase("PostgreSQL");
funcaoTeste("parametros");