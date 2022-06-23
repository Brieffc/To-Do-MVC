//importo os tipos de dados
const { DataTypes } = require("sequelize");

//importo a conexao
const db = require("../db/conn");

//crio variavel com o schema
const Task = db.define("Task", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
  },
  done: {
    type: DataTypes.BOOLEAN,
  },
});
//exporto
module.exports = Task;
