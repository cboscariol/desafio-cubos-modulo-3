import React from 'react'
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import useStyles from './style.js'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';




  
  export default function NewUser() {
    const classes = useStyles();
    const [values, setValues] = React.useState({
      amount: '',
      password: '',
      weight: '',
      weightRange: '',
      showPassword: false,
    });
  
    const handleClickShowPassword = () => {
      setValues({ ...values, showPassword: !values.showPassword });
    };
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };





return (
    <div className={classes.root}>
      <div className={classes.container}> 
      <Typography variant="h1" component="h2" className={classes.h1Login}>
            Criar uma conta
      </Typography>
        <TextField
          label="Seu nome"
          id="userName"
          className={clsx(classes.margin, classes.textField)}
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
        />
        <TextField
          label="Nome da loja"
          id="storeName"
          className={clsx(classes.margin, classes.textField)}
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
        />
        <TextField
          label="E-mail"
          id="email-login"
          className={clsx(classes.margin, classes.textField)}
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
        />
      <TextField
            label="Senha"
            id="senha-login"
            className={clsx(classes.margin, classes.textField)}
            InputProps={{
                startAdornment: <InputAdornment position="start"></InputAdornment>,
                endAdornment: <InputAdornment position="start">
                <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
                </InputAdornment>,
            }}   
        />
        <TextField
            label="Repita a senha"
            id="senha-login"
            className={clsx(classes.margin, classes.textField)}
            InputProps={{
                startAdornment: <InputAdornment position="start"></InputAdornment>,
                endAdornment: <InputAdornment position="start">
                <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
                </InputAdornment>,
            }}   
        />
        <Button variant="contained" color="primary"> CRIAR CONTA </Button>
        <div className={classes.jaPossuiContaLink}> 
        <Typography className={classes.fontStyleUser} variant="body1" component="p" > Já possui conta?  </Typography>  
        <Link className={classes.fontStyleUser} component="button" variant="body2" onClick={() => {console.info("I'm a button."); }} underline='always'>
            ACESSE
        </Link>
        </div>
       
        

      </div>
    </div>
  );
}