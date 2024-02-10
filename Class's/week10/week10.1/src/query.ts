import { Client } from "pg";

const client = new Client({
    connectionString: "postgresql://kiranbusari2208:kjxt6nCfpXQ7@ep-super-firefly-82552384.us-east-2.aws.neon.tech/Test?sslmode=require"
});

async function queryUser(email: string) {
    try {
        await client.connect(); // Ensure client connection is established
        const query = 'SELECT * FROM users WHERE email = $1';
        const values = [email];
        const result = await client.query(query, values);
        console.log(result.rows);

        if (result.rows.length > 0) {
            console.log('User found:', result.rows[0]); // Output user data
            return result.rows[0]; // Return the user data
        } else {
            console.log('No user found with the given email.');
            return null; // Return null if no user was found
        }
    } catch (error) {
        console.error(error);
    } finally {
        await client.end();
    }
}

queryUser("kiran@k.com");