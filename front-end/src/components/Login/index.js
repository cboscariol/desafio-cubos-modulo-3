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
import { useForm, Controller } from "react-hook-form";


export default function Login() {
  const classes = useStyles();
  const history = useHistory();
  const { control, handleSubmit } = useForm();
  const { logar, saveUser } = useAuth()
  const [values, setValues] = React.useState({
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const redirecionar = () => {
    history.push('/cadastro')
  }

  const login = async (data) => {
    console.log(data)
    try {
      const resposta = await post('/login', { email: data.email, senha: data.password })
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
        <form onSubmit={handleSubmit(login)}>
          <div className={classes.container}>
            <Typography variant="h1" component="h2" className={classes.h1Login}>
              Login
          </Typography>
            <Controller
              name="email"
              control={control}
              rules={{ required: true }}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  label="E-mail"
                  className={clsx(classes.margin, classes.textField)}
                  InputProps={{
                    startAdornment: <InputAdornment position="start"></InputAdornment>,
                  }}
                />
              )}
            />

            <Controller
              name="password"
              control={control}
              rules={{ required: true }}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Senha"
                  type={values.showPassword ? 'text' : 'password'}
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
              )}
            />
            <Button variant="contained" color="primary" type='submit'> Entrar </Button>

            <div className={classes.crieUmaContaLink}>
              <Typography className={classes.fontStyleLogin} variant="body1" component="p" > Primeira vez aqui?  </Typography>
              <Link className={classes.fontStyleLogin} component="button" variant="body2" onClick={redirecionar} underline='always'>
                CRIE UMA CONTA
             </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}