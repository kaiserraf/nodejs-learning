import { Pool } from 'pg';

const pool = new Pool({
    host: process.env.DB_HOST || 'localhost',  // endereço do servidor
    port: parseInt(process.env.DB_PORT || '30267'), // porta do postgre
    database: process.env.DB_NAME || 'databaseTestes', // nome do BD
    user: process.env.DB_USER || 'postgres', // usuario do BD
    password: process.env.DB_PASSWORD || '', // senha do BD
    max: 10, // máximo de conexões simultaneas no pool
    idleTimeoutMillis: 30000, // fecha conexão ociósa após 30s
    connectionTimeoutMillis: 2000 // erro caso não conecte em 2s
});

pool.on('connect', () => {
    console.log('conexão no pool');
});

pool.on('error', (err) => {
    console.log(err);
    process.exit(-1);
});

export default pool;