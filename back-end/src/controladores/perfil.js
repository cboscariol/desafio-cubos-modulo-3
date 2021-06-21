const conexao = require('../conexao');
const bcrypt = require('bcrypt');


const verPerfil = async (req, res) => {
    return res.status(200).json(req.usuario);
}

const editarPerfil = async (req, res) => {
    const { nome, email, senha, nome_loja } = req.body;

    if (!nome && !email && !senha && !nome_loja) {
        return res.status(404).json('É necessario preencher um dos campos para edição');
    }

    try {
        const queryConsultaUsuario = 'select * from usuarios where id = $1';
        const usuarioExiste = await conexao.query(queryConsultaUsuario, [req.usuario.id]);

        if (usuarioExiste.rowCount > 0) {
            return res.status(400).json('O e-mail informado já está sendo usado.');
        }

        const senhaCriptografada = await bcrypt.hash(senha, 10);

        const usuario = usuarioExiste.rows[0];
        const query = 'update usuarios set nome = $1, nome_loja =$2, email = $3,  senha = $4 where id = $5';
        const dadosEditados = await conexao.query(query, [
            nome || usuario.nome,
            nome_loja || usuario.nome_loja,
            email || usuario.email,
            senhaCriptografada || usuario.senhaCriptografada,
            req.usuario.id
        ]);

        if (dadosEditados.rowCount === 0) {
            return res.status(400).json('Não foi possível atualizar o usuário.');
        }

        return res.status(200).json('Usuario editado com sucesso!');

    } catch (error) {
        return res.status(error.message);
    }
}




module.exports = {
    verPerfil,
    editarPerfil
}