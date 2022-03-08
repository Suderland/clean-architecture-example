import pgPromise from "pg-promise";
const pgp = pgPromise({});

const db = pgp ({
  user: "postgres",
  password: "admin",
  host: "127.0.0.1",
  port: 5432,
  database: "app",
  idleTimeoutMillis: 100
});

export default db;