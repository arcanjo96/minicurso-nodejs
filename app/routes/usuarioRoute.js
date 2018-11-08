module.exports = function(app) {
    var usuarioController = app.controllers.usuarioController;

    app.post('/usuario', usuarioController.cadastraUsuario);

    app.get('/usuario', usuarioController.listarUsuarios);

    app.put('/usuario/:id', usuarioController.alterarUsuarios);

    app.delete('/usuario/:id', usuarioController.deletarUsuarios);
}