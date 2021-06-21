import React from 'react';
import clsx from 'clsx';
import useStyles from './style.js'
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import { useHistory } from 'react-router-dom'
import { post } from "../../Api";
import useAuth from "../../hook/useAuth";


export default function NovoProduto() {
	const classes = useStyles();
	const history = useHistory();
	const { token, user } = useAuth();

	const [values, setValues] = React.useState({
		nome: '',
		descricao: '',
		estoque: '',
		preco: '',
		imagem: ''
	});

	const redirecionar = () => {
		history.push('/produtos')
	}

	const onChange = (event) => {
		setValues({ ...values, [event.target.name]: event.target.value })
	}


	const newproduct = async () => {
		try {
			await post('/produtos',
				{
					nome: values.nome, descricao: values.descricao, estoque: values.estoque,
					preco: values.preco, imagem: values.imagem
				}, token)
			history.push('/produtos')
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<div className={classes.root}>
			<div className={classes.newProducttitle}>
				<Typography variant="h1" component="h2" className={classes.h1NewProduct}>
					{user.nome_loja}
				</Typography>

				<Typography variant="h1" component="h2" className={classes.h2NewProduct}>
					Adicionar produto
				</Typography>
			</div>

			<div className={classes.containerForms}>
				<FormControl fullWidth className={clsx(classes.margin, classes.withoutLabel)}>
					<TextField
						onChange={onChange}
						label="Nome do produto"
						id="nome-do-produto"
						name='nome'
						values={values.nome}
						className={clsx(classes.margin)}
						InputProps={{
							startAdornment: <InputAdornment position="start"></InputAdornment>,
						}} />
				</FormControl>

				<div className={classes.formControlBox}>
					<FormControl fullWidth className={clsx(classes.margin, classes.withoutLabel)}>
						<TextField
							onChange={onChange}
							label="Preço"
							id="preco"
							name='preco'
							values={values.preco}
							className={clsx(classes.margin)}
							InputProps={{
								startAdornment: <InputAdornment position="start">R$</InputAdornment>,
							}} />
					</FormControl>
					<FormControl fullWidth className={clsx(classes.margin, classes.withoutLabel)}>
						<TextField
							onChange={onChange}
							label="Estoque"
							id="estoque"
							name='estoque'
							values={values.estoque}
							className={clsx(classes.margin)}
							InputProps={{
								startAdornment: <InputAdornment position="start">Un</InputAdornment>,
							}} />
					</FormControl>
				</div>

				<FormControl fullWidth className={clsx(classes.margin, classes.withoutLabel)}>
					<TextField
						onChange={onChange}
						label="Descrição do produto"
						id="descricao-do-produto"
						name='descricao'
						values={values.descricao}
						className={clsx(classes.margin)}
						InputProps={{
							startAdornment: <InputAdornment position="start"></InputAdornment>,
						}} />
				</FormControl>
				<FormControl fullWidth className={clsx(classes.margin, classes.withoutLabel)}>
					<TextField
						onChange={onChange}
						label="Imagem"
						id="imagem-do-produto"
						name='imagem'
						values={values.imagem}
						className={clsx(classes.margin)}
						InputProps={{
							startAdornment: <InputAdornment position="start"></InputAdornment>,
						}} />
				</FormControl>
			</div>

			<div className={classes.buttonLink}>
				<Link className={classes.fontStyleLogin} component="button" variant="body2" underline='always' onClick={redirecionar}>
					CANCELAR
				</Link>
				<Button variant="contained" color="primary" onClick={newproduct}> ADICIONAR PRODUTO </Button>
			</div>
		</div>

	)
}