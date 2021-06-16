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
import {post} from "../../Api";
import {useHistory} from 'react-router-dom'



  
  export default function NewUser() {
    const classes = useStyles();
    const history = useHistory();

    const [values, setValues] = React.useState({
      userName: '',
      storesName: '',
      email: '',
      password: '',
      repeatPassword: '',
      showPassword: false,
    });
  
    const handleClickShowPassword = () => {
      setValues({ ...values, showPassword: !values.showPassword });
    };
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };

    const onChange = (event) => {
      setValues({...values, [event.target.name]: event.target.value})
  }

    const newUser = async () => {
      console.log({nome: values.userName, nome_loja: values.storesName, email: values.email, 
        senha: values.password})
      try {
        const resposta = await post('/usuarios', 
          {nome: values.userName, nome_loja: values.storesName, email: values.email, 
          senha: values.password, senhaConfirmacao: values.repeatPassword})
          console.log(resposta);
          history.push('/')



      } catch(error) {
        console.log(error)
      }
    }




return (

  <div className={classes.principal}>
    <div className={classes.root}>
      <div className={classes.container}> 
      <Typography variant="h1" component="h2" className={classes.h1Login}>
            Criar uma conta
      </Typography>
        <TextField
          onChange={onChange}
          label="Seu nome"
          id="userName"
          name='userName'
          className={clsx(classes.margin, classes.textField)}
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
        />
        <TextField
          onChange={onChange}
          label="Nome da loja"
          id="storesName"
          name='storesName'
          className={clsx(classes.margin, classes.textField)}
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
        />
        <TextField
          onChange={onChange}
          label="E-mail"
          id="email-login"
          name='email'
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
          type={values.showPassword ? 'text' : 'password' }
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
          onChange={onChange}
          label="Repita a senha"
          id="senha-login"
          name='repeatPassword'
          type={values.showPassword ? 'text' : 'password' }
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
        <Button variant="contained" color="primary" onClick={newUser}> CRIAR CONTA </Button>
        <div className={classes.jaPossuiContaLink}> 
        <Typography className={classes.fontStyleUser} variant="body1" component="p" > Já possui conta?  </Typography>  
        <Link className={classes.fontStyleUser} component="button" variant="body2" onClick={() => {console.info("I'm a button."); }} underline='always'>
            ACESSE
        </Link>
        </div>
       
        

      </div>
    </div>
  </div>
  );
}