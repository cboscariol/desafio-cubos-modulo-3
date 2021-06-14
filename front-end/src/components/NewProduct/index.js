import React from 'react';
import clsx from 'clsx';
import useStyles from './style.js'
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';




export default function NovoProduto() {
  const classes = useStyles();
  

  return (
    <div className={classes.root}>
      <div className={classes.newProducttitle}>
        <Typography variant="h1" component="h2" className={classes.h1NewProduct}>
            Nome da Loja
        </Typography>

        <Typography variant="h1" component="h2" className={classes.h2NewProduct}>
            Adicionar produto
        </Typography>
      </div>
      
      <div className={classes.containerForms}>

            <FormControl fullWidth className={clsx(classes.margin, classes.withoutLabel)}>
                 <TextField
                    label="Nome do produto"
                    id="nome-do-produto"
                    className={clsx(classes.margin)}
                    InputProps={{
                        startAdornment: <InputAdornment position="start"></InputAdornment>,
                }}/>    
            </FormControl>
        <div className={classes.formControlBox}>
            <FormControl fullWidth className={classes.margin, classes.withoutLabel}>
                <TextField
                    label="Preço"
                    id="preco"
                    className={clsx(classes.margin)}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">R$</InputAdornment>,
                }}/> 

            </FormControl>  
            <FormControl fullWidth className={classes.margin, classes.withoutLabel}>
                <TextField
                    label="Estoque"
                    id="estoque"
                    className={clsx(classes.margin)}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">Un</InputAdornment>,
                }}/>   
            </FormControl>    
        </div>

            <FormControl fullWidth className={clsx(classes.margin, classes.withoutLabel)}>
                <TextField
                    label="Descrição do produto"
                    id="descricao-do-produto"
                    className={clsx(classes.margin)}
                    InputProps={{
                        startAdornment: <InputAdornment position="start"></InputAdornment>,
                }}/>    
            </FormControl>

            <FormControl fullWidth className={clsx(classes.margin, classes.withoutLabel)}>
                 <TextField
                    label="Imagem"
                    id="imagem-do-produto"
                    className={clsx(classes.margin)}
                    InputProps={{
                        startAdornment: <InputAdornment position="start"></InputAdornment>,
                }}/>    
            </FormControl>

    </div>
            
            <div className={classes.buttonLink}> 
                <Link className={classes.fontStyleLogin} component="button" variant="body2" onClick={() => {console.info("I'm a button."); }} underline='always'>
                    CANCELAR
                </Link>
                <Button variant="contained" color="primary"> ADICIONAR PRODUTO </Button>
            </div>
               

            
      
       
    </div>

  )}