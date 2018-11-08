module.exports = function(app) {
    var api = {};

    api.cadastraUsuario = function(req, res) {
        console.log(req.body);

        res.status(201)
        .json({ message: 'Cadastrado com sucesso!' });
    }

    api.listarUsuarios = function(req, res) {
        var objeto = [
            {"nome": "A", "idade": "22"},
            {"nome": "B", "idade": "23"},
            {"nome": "C", "idade": "24"},
            {"nome": "D", "idade": "25"},
            {"nome": "E", "idade": "26"},
        ];

        res.status(200).json({ usuarios: objeto });
    }

    api.alterarUsuarios = function(req, res) {
        var idUsuario = req.params.id;
        console.log(idUsuario);
        res.status(200).json({ usuarios: idUsuario });
    }

    api.deletarUsuarios = function(req, res) {
        var idUsuario = req.params.id;
        console.log(idUsuario);
        res.status(200).json({ "mensagem": "Deletado com sucesso!" });
    }

    return api;
}