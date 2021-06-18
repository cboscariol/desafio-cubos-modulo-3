const conexao = require('../conexao');

const verificacaoProdutos = async (req, res, next) => {
    const { usuario } = req;

    try {
        const produto = await conexao.query('select * from produtos where usuario_id = $1', [usuario.id]);

        if (produto.rowCount === 0) {
            return res.status(404).json('Nenhum produto cadastrado nesse usuario.');
        }

        next();
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

module.exports = verificacaoProdutos