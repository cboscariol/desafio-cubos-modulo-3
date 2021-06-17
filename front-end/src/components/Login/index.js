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
import { post } from "../../Api";
import useAuth from '../../hook/useAuth'
import { useHistory } from 'react-router-dom'

export default function Login() {
  const classes = useStyles();
  const history = useHistory();
  const { logar, saveUser } = useAuth()
  const [values, setValues] = React.useState({
    email: '',
    password: '',
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const onChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value })
  }

  const redirecionar = () => {
    history.push('/cadastro')

  }

  const login = async () => {
    try {
      const resposta = await post('/login', { email: values.email, senha: values.password })
      logar(resposta.token);
      saveUser(resposta.usuario)
      history.push('/produtos');
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div className={classes.principal}>
      <div className={classes.root}>
        <div className={classes.container}>
          <Typography variant="h1" component="h2" className={classes.h1Login}>
            Login
          </Typography>

          <TextField
            onChange={onChange}
            label="E-mail"
            id="email-login"
            name='email'
            value={values.email}
            className={clsx(classes.margin, classes.textField)}
            InputProps={{
              startAdornment: <InputAdornment position="start"></InputAdornment>,
            }}
          />
          <TextField
            onChange={onChange}
            label="Senha"
            id="senha-login"
            name='password'
            value={values.password}
            type={values.showPassword ? 'text' : 'password'}
            className={clsx(classes.margin, classes.textField)}
            InputProps={{
              startAdornment: <InputAdornment position="start">
              </InputAdornment>,
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

          <Button variant="contained" color="primary" onClick={login}> Entrar </Button>

          <div className={classes.crieUmaContaLink}>
            <Typography className={classes.fontStyleLogin} variant="body1" component="p" > Primeira vez aqui?  </Typography>
            <Link className={classes.fontStyleLogin} component="button" variant="body2" onClick={redirecionar} underline='always'>
              CRIE UMA CONTA
             </Link>
          </div>
        </div>
      </div>
    </div>
  );
}