import React from 'react';
import useStyles from './style.js'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '../CardProducts';
import { useHistory } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { get } from "../../Api";
import useAuth from "../../hook/useAuth";

export default function Produtos() {
  const classes = useStyles();
  const history = useHistory();
  const [products, setProducts] = useState([]);
  const { token } = useAuth();


  async function carregarProdutos() {
    try {
      const produtosCadastrados = await get('/produtos', token);

      setProducts(produtosCadastrados);
      console.log(produtosCadastrados)
    } catch (error) {
      console.log(error.message);
    }
  }

  const redirecionar = () => {
    history.push('/produtos/novo')
  }

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => {
      return product.id !== id
    }))
  }

  useEffect(() => {
    carregarProdutos();
  }, []);


  return (
    <div className={classes.root}>
      <div className={classes.productstitle}>
        <Typography variant="h1" component="h2" className={classes.h1StoresName}>
          Nome da Loja
        </Typography>

        <Typography variant="h1" component="h2" className={classes.h2StoresName}>
          Seus produtos
        </Typography>
      </div>

      <div className={classes.containerProducts}>
        {products.map((product) => (
          <Card id={product.id} image={product.imagem} nome={product.nome}
            descricao={product.descricao} estoque={product.estoque}
            preco={product.preco} onDelete={deleteProduct} />
        ))}
      </div>

      <div className={classes.buttonLink}>
        <Button variant="contained" color="primary" onClick={redirecionar}> ADICIONAR PRODUTO </Button>
      </div>
    </div>

  )
}