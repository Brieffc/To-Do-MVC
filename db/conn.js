//importamos o sequelize
const { Sequelize } = require('sequelize')
//realiza conexao estanciando um novo objeto que configura o host
const sequelize = new Sequelize('nodemvc2', 'root','', {
  host: 'localhost',
  dialect: 'mysql',
})


//se deu algum erro exibo
try {

  sequelize.authenticate()
  console.log('Conectamos ao MySQL!')

} catch (error) {
  console.log(`Não foi possivel conectar: ${error}`)
}

//exporto o sequelize
module.exports = sequelize
