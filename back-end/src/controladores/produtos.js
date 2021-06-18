const conexao = require('../conexao');

const cadastrarProduto = async (req, res) => {
    const { nome, estoque, categoria, preco, descricao } = req.body;

    if (!nome) {
        return res.status(404).json('O campo nome é obrigatório');
    }

    if (!estoque) {
        return res.status(404).json('O campo estoque é obrigatório');
    }

    if (!preco) {
        return res.status(404).json('O campo preço é obrigatório');
    }

    if (!descricao) {
        return res.status(404).json('O campo descrição é obrigatório');
    }

    try {
        const queryProduto = 'insert into produtos (usuario_id, nome, estoque, categoria, preco, descricao) values ($1, $2, $3, $4, $5, $6)';
        const produto = await conexao.query(queryProduto, [req.usuario.id, nome, estoque, categoria, preco, descricao]);

        if (produto.rowCount === 0) {
            return res.status(400).json('Não foi possível cadastrar o produto');
        }

        return res.status(200).json('Produto cadastrado com sucesso.');
    } catch (error) {
        return res.status(400).json(error.message);
    }
}


const listarProdutos = async (req, res) => {
    try {
        const produtos = await conexao.query('select * from produtos where usuario_id = $1', [req.usuario.id]);
        return res.status(200).json(produtos.rows);
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

const listarProduto = async (req, res) => {
    const { id: idproduto } = req.params;

    try {
        const produtos = await conexao.query('select * from produtos where id = $1', [idproduto])
        return res.status(200).json(produtos.rows);
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

const editarProduto = async (req, res) => {
    const { nome, estoque, categoria, preco, descricao } = req.body;
    const { id: idproduto } = req.params;


    if (!nome) {
        return res.status(404).json('O campo nome é obrigatório');
    }

    if (!estoque) {
        return res.status(404).json('O campo estoque é obrigatório');
    }

    if (!preco) {
        return res.status(404).json('O campo preço é obrigatório');
    }

    if (!descricao) {
        return res.status(404).json('O campo descrição é obrigatório');
    }

    try {
        const queryConsultaProduto = 'select * from produtos where id = $1 and usuario_id = $2';
        const produtoExiste = await conexao.query(queryConsultaProduto, [idproduto, req.usuario.id]);

        if (produtoExiste.rowCount === 0) {
            return res.status(404).json('O produto não foi encontrado');
        }

        const queryAtualizaProduto = 'update produtos set nome = $1, estoque =$2, categoria = $3, preco = $4, descricao = $5 where usuario_id = $6';
        const produtoAtualizado = await conexao.query(queryAtualizaProduto, [nome, estoque, categoria, preco, descricao, req.usuario.id]);

        if (produtoAtualizado.rowCount === 0) {
            return res.status(400).json('Não foi possível atualizar o produto');
        }

        return res.status(200).json('Produto atualizado com sucesso.');
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

const deletarProduto = async (req, res) => {
    const { id: idproduto } = req.params;

    try {
        const queryConsultaProduto = 'select * from produtos where id = $1 and usuario_id = $2';
        const produtoExiste = await conexao.query(queryConsultaProduto, [idproduto, req.usuario.id]);

        if (produtoExiste.rowCount === 0) {
            return res.status(404).json('O produto não foi encontrado');
        }

        const { rowCount } = await conexao.query('delete from produtos where id = $1', [idproduto]);

        if (rowCount === 0) {
            return res.status(400).json('Não foi possível excluir a postagem');
        }

        return res.status(200).json('Produto excluido com sucesso.');


    } catch (error) {
        return res.status(400).json(error.message);
    }

}



module.exports = {
    listarProdutos,
    cadastrarProduto,
    editarProduto,
    deletarProduto,
    listarProduto
}
