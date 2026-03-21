import 'dotenv/config';
import * as database from "./data/data.js";
async function main() {
    await database.connectDatabase("japoneslindo", "limdo");

    // console.log(process.env.USERDATABASE);
}


main();