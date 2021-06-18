const conexao = require('../conexao');
const bcrypt = require('bcrypt');


const verPerfil = async (req, res) => {
    return res.status(200).json(req.usuario);
}

const editarPerfil = async (req, res) => {
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
            return res.status(400).json('O e-mail informado já está sendo usado.');
        }

        const senhaCriptografada = await bcrypt.hash(senha, 10);

        const query = 'update usuarios set nome = $1, email =$2, senha = $3, nome_loja = $4 where id = $5';
        const dadosEditados = await conexao.query(query, [nome, email, senhaCriptografada, nome_loja, req.usuario.id]);

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