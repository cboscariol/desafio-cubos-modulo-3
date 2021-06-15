import React from 'react';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import useStyles from './style'



export default function Profile() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    password: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  

  return (
    <div className={classes.root}>
      <div className={classes.newProducttitle}>
        <Typography variant="h1" component="h2" className={classes.h1NewProduct}>
            Editar Perfil
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

            <FormControl fullWidth className={clsx(classes.margin, classes.withoutLabel)}>
                 <TextField
                    label="Nova senha"
                    id="password"
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.password}
                    onChange={handleChange('password')}
                    className={clsx(classes.margin)}
                    InputProps={{
                        endAdornment: <InputAdornment position="end">
                          <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                            >
                              {values.showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>,
                }}/>    
            </FormControl>

            <FormControl fullWidth className={clsx(classes.margin, classes.withoutLabel)}>
                 <TextField
                    label="Repita a nova senha"
                    id="password"
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.password}
                    onChange={handleChange('password')}
                    className={clsx(classes.margin)}
                    InputProps={{
                        endAdornment: <InputAdornment position="end">
                          <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                            >
                              {values.showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>,
                }}/>    
            </FormControl>

            
       

    </div>
            
          <div className={classes.buttonLink}> 
            <Link className={classes.fontStyleLogin} component="button" variant="body2" onClick={() => {console.info("I'm a button."); }} underline='always'>
                CANCELAR
            </Link>
            <Button variant="contained" color="primary"> SALVAR </Button>
          </div>


             
    </div>

  )}