import mysql, { ConnectionOptions } from 'mysql2';

export function queryTestDB(config: ConnectionOptions, query: string) {
    const connection = mysql.createConnection(config);
    connection.connect();

    return new Promise((resolve, reject) => {
        connection.execute(query, (error, results) => {
            if (error) return reject(error);
            connection.end();
            return resolve(results);
        });
    });
}
