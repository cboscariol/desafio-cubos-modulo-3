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
import { useHistory } from 'react-router-dom'
import { put } from "../../Api";
import useAuth from "../../hook/useAuth";




export default function Profile() {
  const classes = useStyles();
  const history = useHistory();
  const { user, token, saveUser } = useAuth()
  const [values, setValues] = React.useState({
    nome: '',
    nome_loja: '',
    email: '',
    senha: '',
    repeatPassword: '',
    showPassword: false,
    showRepeatPassword: false,
  });

  const onChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value })
  }

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleClickShowRepeatPassword = () => {
    setValues({ ...values, showRepeatPassword: !values.showRepeatPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const redirecionar = () => {
    history.push('/perfil')
  }

  const salvarDadosAtualizados = async () => {
    const apenasDadosAtualizados = Object.fromEntries(
      Object.entries(values).filter(([, value]) => value)
    )
    try {
      await put('/perfil', apenasDadosAtualizados, token)
      saveUser(apenasDadosAtualizados)
      history.push('/perfil');
    } catch (error) {
      console.log(error)
    }
  }


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
            name='nome'
            value={values.nome || user.nome}
            onChange={onChange}
            className={clsx(classes.margin)}
            InputProps={{
              startAdornment: <InputAdornment position="start"></InputAdornment>,
            }} />
        </FormControl>

        <FormControl fullWidth className={clsx(classes.margin, classes.withoutLabel)}>
          <TextField
            label="Nome da loja"
            id="nome-da-loja"
            name='nome_loja'
            value={values.nome_loja || user.nome_loja}
            onChange={onChange}
            className={clsx(classes.margin)}
            InputProps={{
              startAdornment: <InputAdornment position="start"></InputAdornment>,
            }} />
        </FormControl>

        <FormControl fullWidth className={clsx(classes.margin, classes.withoutLabel)}>
          <TextField
            label="E-mail"
            id="email"
            name='email'
            value={values.email || user.email}
            onChange={onChange}
            className={clsx(classes.margin)}
            InputProps={{
              startAdornment: <InputAdornment position="start"></InputAdornment>,
            }} />
        </FormControl>

        <FormControl fullWidth className={clsx(classes.margin, classes.withoutLabel)}>
          <TextField
            label="Nova senha"
            id="password"
            name='senha'
            type={values.showPassword ? 'text' : 'password'}
            value={user.senha}
            onChange={onChange}
            className={clsx(classes.margin)}
            InputProps={{
              startAdornment: <InputAdornment position="start"></InputAdornment>,
              endAdornment: <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>,
            }} />
        </FormControl>

        <FormControl fullWidth className={clsx(classes.margin, classes.withoutLabel)}>
          <TextField
            label="Repita a nova senha"
            id="repeatPassword"
            name='repeatPassword'
            type={values.showRepeatPassword ? 'text' : 'password'}
            value={user.repeatPassword}
            onChange={onChange}
            className={clsx(classes.margin)}
            InputProps={{
              startAdornment: <InputAdornment position="start"></InputAdornment>,
              endAdornment: <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowRepeatPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showRepeatPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>,
            }} />
        </FormControl>
      </div>

      <div className={classes.buttonLink}>
        <Link className={classes.fontStyleLogin} component="button" variant="body2" onClick={redirecionar} underline='always'>
          CANCELAR
        </Link>
        <Button variant="contained" color="primary" onClick={salvarDadosAtualizados}> SALVAR </Button>
      </div>
    </div>

  )
}