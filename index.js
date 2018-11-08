var app = require('./config/custom-express')();

var porta = 3001;

app.listen(porta, () => {
    console.log("Servidor rodando na portas " + porta);
});