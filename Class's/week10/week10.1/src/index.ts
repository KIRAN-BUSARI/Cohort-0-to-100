import { Client } from "pg";

const client = new Client({
    connectionString: "postgresql://kiranbusari2208:kjxt6nCfpXQ7@ep-super-firefly-82552384.us-east-2.aws.neon.tech/Test?sslmode=require"
    // database: "test",
    // user: "kiranbusari2208",
    // password: "kjxt6nCfpXQ7",
    // host: "ep-super-firefly-82552384.us-east-2.aws.neon.tech",
    // port: 5432
});


async function createUserTable() {
    await client.connect();
    // CREATE TABLE users (
    //     id SERIAL PRIMARY KEY,
    //     username VARCHAR(50) UNIQUE NOT NULL,
    //     email VARCHAR(255) UNIQUE NOT NULL,
    //     password VARCHAR(255) NOT NULL,
    //     created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    // );
    // INSERT INTO users (
    //     username, email, password
    // ) VALUES (
    //     'kiran1', 'kiran1@k.com', 'kiran123'
    // );
    const result = await client.query(`
    SELECT * FROM users;
    `)
    console.log(result.rows);
}

createUserTable();