// db.ts
const mysql = require ('mysql')
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Sena1234',
  database: 'ADSO2696224'
});

db.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
    return;
  }
  console.log('Conexión a la base de datos establecida');
});

export { db };
