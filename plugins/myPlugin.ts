import mysql from 'mysql2/promise';

interface Options {
    query: string;
    values?: any[]
};

const pool = mysql.createPool({
      host: 'localhost',
      user: 'root',
      password: 'root',
      database: 'nust_ojt',
  })

export const sql = async ({query, values}: Options) => {
    const [rows] = await pool.query(query, values);

    return rows;
}
