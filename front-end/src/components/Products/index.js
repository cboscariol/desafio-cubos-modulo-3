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
  const { token, user } = useAuth();


  async function carregarProdutos() {
    try {
      const produtosCadastrados = await get('/produtos', token);

      setProducts(produtosCadastrados);
    } catch (error) {
      console.log(error.message);
    }
  }

  const redirecionarNewProduct = () => {
    history.push('/produtos/novo')
  }

  const redirectEditProduct = (id) => {
    const product = products.find((p) => p.id === id)
    history.push({
      pathname: '/produtos/editar',
      state: { product }
    })
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
          {user.nome_loja}
        </Typography>

        <Typography variant="h1" component="h2" className={classes.h2StoresName}>
          Seus produtos
        </Typography>
      </div>

      <div className={classes.containerProducts} >
        {products.map((product) => (
          <Card onClick={redirectEditProduct} id={product.id} image={product.imagem} nome={product.nome}
            descricao={product.descricao} estoque={product.estoque}
            preco={product.preco} onDelete={deleteProduct} />
        ))}
      </div>

      <div className={classes.buttonLink}>
        <Button variant="contained" color="primary" onClick={redirecionarNewProduct}> ADICIONAR PRODUTO </Button>
      </div>
    </div>

  )
}