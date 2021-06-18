const conexao = require('../conexao');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const senhaToken = require('../senhaToken');


const logar = async (req, res) => {
	const { email, senha } = req.body;

	if (!email || !senha) {
		return res.status(404).json('Os campos e-mail e senha são obrigatórios.');
	}

	try {
		const verificaEmailBD = 'select * from usuarios where email = $1';
		const { rows, rowCount } = await conexao.query(verificaEmailBD, [email]); //text, param

		if (rowCount === 0) {
			return res.status(404).json('Usuário não encontrado.');
		}

		const usuario = rows[0]
		const verificaSenhaBD = await bcrypt.compare(senha, usuario.senha);

		if (!verificaSenhaBD) {
			return res.status(400).json('Dados não conferem');
		}

		const token = jwt.sign({ id: usuario.id }, senhaToken);
		const { senha: senhaUsuario, ...dadosUsuario } = usuario;
		return res.status(200).json({
			usuario: dadosUsuario,
			token
		});
	} catch (error) {
		return res.status(400).json(error.message);
	}
}


module.exports = { logar }