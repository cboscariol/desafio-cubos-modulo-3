import React from 'react';
import clsx from 'clsx';
import useStyles from './style.js'
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';





export default function Profile() {
  const classes = useStyles();
  

  return (
    <div className={classes.root}>
      <div className={classes.profile}>
        <Typography variant="h1" component="h2" className={classes.h1Profile}>
            Perfil
        </Typography>

      </div>
      
      <div className={classes.containerForms}>

            <FormControl fullWidth className={clsx(classes.margin, classes.withoutLabel)}>
                 <TextField
                    label="Seu nome"
                    id="seu-nome"
                    className={clsx(classes.margin)}
                    InputProps={{
                        startAdornment: <InputAdornment position="start"></InputAdornment>,
                }}/>    
            </FormControl>

            <FormControl fullWidth className={clsx(classes.margin, classes.withoutLabel)}>
                 <TextField
                    label="Nome da loja"
                    id="nome-da-loja"
                    className={clsx(classes.margin)}
                    InputProps={{
                        startAdornment: <InputAdornment position="start"></InputAdornment>,
                }}/>    
            </FormControl>

            <FormControl fullWidth className={clsx(classes.margin, classes.withoutLabel)}>
                 <TextField
                    label="E-mail"
                    id="email"
                    className={clsx(classes.margin)}
                    InputProps={{
                        startAdornment: <InputAdornment position="start"></InputAdornment>,
                }}/>    
            </FormControl>
       

    </div>
            
            <div className={classes.buttonLink}> 
                <Button variant="contained" color="primary"> EDITAR PERFIL </Button>
            </div>
       
    </div>

  )}