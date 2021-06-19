const conexao = require('../conexao');
const bcrypt = require('bcrypt');

const cadastrarUsuario = async (req, res) => {

    const { nome, email, senha, nome_loja } = req.body;

    if (!nome) {
        return res.status(404).json('O campo nome é obrigatório.');
    }

    if (!email) {
        return res.status(404).json('O campo email é obrigatório.');
    }

    if (!senha) {
        return res.status(404).json('O campo senha é obrigatório.');
    }
    if (!nome_loja) {
        return res.status(404).json("O campo 'Nome da Loja' é obrigatório.");
    }

    try {
        const queryConsultaEmail = 'select * from usuarios where email = $1';
        const { rowCount: quantidadeUsuarios } = await conexao.query(queryConsultaEmail, [email]);

        if (quantidadeUsuarios > 0) {
            return res.status(400).json('O e-mail informado já foi usado anteriormente.');
        }

        const senhaCriptografada = await bcrypt.hash(senha, 10);

        const query = 'insert into usuarios (nome, email, senha, nome_loja) values ($1, $2, $3, $4)';
        const usuarioCadastrado = await conexao.query(query, [nome, email, senhaCriptografada, nome_loja]);

        if (usuarioCadastrado.rowCount === 0) {
            return res.status(400).json('Não foi possível cadastrar o usuário.');
        }

        return res.status(200).json('Usuario cadastrado com sucesso!');
    } catch (error) {
        return res.status(error.message);
    }
}

module.exports = { cadastrarUsuario }