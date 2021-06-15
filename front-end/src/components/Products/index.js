import React from 'react';
import useStyles from './style.js'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '../CardProducts';





export default function Produtos() {
  const classes = useStyles();
  

  return (
    <div className={classes.root}>
      <div className={classes.productstitle}>
        <Typography variant="h1" component="h2" className={classes.h1StoresName}>
            Nome da Loja
        </Typography>

        <Typography variant="h1" component="h2" className={classes.h2StoresName}>
            Seus produto
        </Typography>
      </div>
      
    <div className={classes.containerProducts}>     
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
    </div>
            
            <div className={classes.buttonLink}> 
                <Button variant="contained" color="primary"> ADICIONAR PRODUTO </Button>
            </div>
               

            
      
       
    </div>

  )}