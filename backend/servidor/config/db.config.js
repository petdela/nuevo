module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "Snakemayor0+",
  DB: "base_pag",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};