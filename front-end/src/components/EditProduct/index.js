import React, { useState } from 'react';
import clsx from 'clsx';
import useStyles from './style.js'
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import { useHistory } from 'react-router-dom'
import { put } from "../../Api";
import useAuth from "../../hook/useAuth";




export default function NovoProduto() {
  const classes = useStyles();
  const history = useHistory();
  const { token, user } = useAuth()
  const product = history.location.state.product;
  const [editProduct, setEditProduct] = useState({
    descricao: '',
    estoque: 0,
    imagem: '',
    nome: '',
    preco: 0,
  })

  const onChange = (event) => {
    setEditProduct({ ...editProduct, [event.target.name]: event.target.value })
  }

  const redirecionar = () => {
    history.push('/produtos')
  }

  const salvarProdutoAtualizado = async () => {
    const apenasDadosProdutoAtualizados = Object.fromEntries(
      Object.entries(editProduct).filter(([, value]) => value)
    )
    try {
      const resposta = await put(`/produtos/${product.id}`, apenasDadosProdutoAtualizados, token)
      history.push('/produtos');
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
          Editar produto
                 </Typography>
      </div>

      <div className={classes.containerFormsImage}>

        <div className={classes.containerForms}>

          <FormControl fullWidth className={clsx(classes.margin, classes.withoutLabel)}>
            <TextField
              label="Nome do produto"
              id="nome-do-produto"
              onChange={onChange}
              name='nome'
              value={editProduct.nome || product.nome}
              className={clsx(classes.margin)}
              InputProps={{
                startAdornment: <InputAdornment position="start"></InputAdornment>,
              }} />
          </FormControl>
          <div className={classes.formControlBox}>
            <FormControl fullWidth className={classes.margin, classes.withoutLabel}>
              <TextField
                label="Preço"
                id="preco"
                onChange={onChange}
                name='preco'
                value={editProduct.preco || product.preco}
                className={clsx(classes.margin)}
                InputProps={{
                  startAdornment: <InputAdornment position="start">R$</InputAdornment>,
                }} />

            </FormControl>
            <FormControl fullWidth className={classes.margin, classes.withoutLabel}>
              <TextField
                label="Estoque"
                id="estoque"
                onChange={onChange}
                name='estoque'
                value={editProduct.estoque || product.estoque}
                className={clsx(classes.margin)}
                InputProps={{
                  startAdornment: <InputAdornment position="start">Un</InputAdornment>
                }} />
            </FormControl>
          </div>

          <FormControl fullWidth className={clsx(classes.margin, classes.withoutLabel)}>
            <TextField
              label="Descrição do produto"
              id="descricao-do-produto"
              onChange={onChange}
              name='descricao'
              value={editProduct.descricao || product.descricao}
              className={clsx(classes.margin)}
              InputProps={{
                startAdornment: <InputAdornment position="start"></InputAdornment>,
              }} />
          </FormControl>

          <FormControl fullWidth className={clsx(classes.margin, classes.withoutLabel)}>
            <TextField
              label="Imagem"
              id="imagem-do-produto"
              onChange={onChange}
              name='imagem'
              value={editProduct.imagem || product.imagem}
              className={clsx(classes.margin)}
              InputProps={{
                startAdornment: <InputAdornment position="start"></InputAdornment>,
              }} />
          </FormControl>

        </div>

        <div>
          <img className={classes.productImage} src={editProduct.imagem || product.imagem} alt="imagem-do-produto" />
        </div>

      </div>

      <div className={classes.buttonLink}>
        <Link className={classes.fontStyleLogin} component="button" variant="body2" onClick={redirecionar} underline='always'>
          CANCELAR
                </Link>
        <Button variant="contained" color="primary" onClick={salvarProdutoAtualizado}> SALVAR EDIÇÃO </Button>
      </div>





    </div>

  )
}