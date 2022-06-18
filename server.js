const app = require('./src/app');
const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));

//A nossa API está rodando em um servidor, que é o server

//e está conectado ao um banco de dados

//O cluster é o lugar onde os meus banco de dados ficam ativos