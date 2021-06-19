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
import { useHistory } from 'react-router-dom'
import { useForm, Controller } from "react-hook-form";


export default function NewUser() {
  const classes = useStyles();
  const history = useHistory();
  const { control, handleSubmit } = useForm();

  const [values, setValues] = React.useState({
    showPassword: false,
    showRepeatPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleClickShowRepeatPassword = () => {
    setValues({ ...values, showRepeatPassword: !values.showRepeatPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const newUser = async (data) => {
    console.log(data)
    try {
      await post('/usuarios',
        {
          nome: data.userName, nome_loja: data.storesName, email: data.email,
          senha: data.password, senhaConfirmacao: data.repeatPassword
        })
      history.push('/')
    } catch (error) {
      console.log(error)
    }
  }

  const redirecionar = () => {
    history.push('/')
  }

  return (
    <form onSubmit={handleSubmit(newUser)}>
      <div className={classes.principal}>
        <div className={classes.root}>
          <div className={classes.container}>
            <Typography variant="h1" component="h2" className={classes.h1Login}>
              Criar uma conta
            </Typography>
            <Controller
              name="userName"
              control={control}
              rules={{ required: true }}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Seu nome"
                  className={clsx(classes.margin, classes.textField)}
                  InputProps={{
                    startAdornment: <InputAdornment position="start"></InputAdornment>,
                  }}
                />
              )}
            />
            <Controller
              name="storesName"
              control={control}
              rules={{ required: true }}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Nome da Loja"
                  className={clsx(classes.margin, classes.textField)}
                  InputProps={{
                    startAdornment: <InputAdornment position="start"></InputAdornment>,
                  }}
                />
              )}
            />
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
            <Controller
              name="repeatPassword"
              control={control}
              rules={{ required: true }}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Repita a senha"
                  type={values.showRepeatPassword ? 'text' : 'password'}
                  className={clsx(classes.margin, classes.textField)}
                  InputProps={{
                    startAdornment: <InputAdornment position="start"></InputAdornment>,
                    endAdornment: <InputAdornment position="start">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowRepeatPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {values.showRepeatPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>,
                  }}

                />
              )}
            />

            <Button variant="contained" color="primary" type='submit'> CRIAR CONTA </Button>

            <div className={classes.jaPossuiContaLink}>
              <Typography className={classes.fontStyleUser} variant="body1" component="p" > Já possui conta?  </Typography>
              <Link className={classes.fontStyleUser} component="button" variant="body2" onClick={redirecionar} underline='always'>
                ACESSE
            </Link>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}