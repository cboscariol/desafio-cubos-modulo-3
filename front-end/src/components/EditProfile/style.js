import { makeStyles } from '@material-ui/core/styles';



export default makeStyles((theme) => ({
    root: {
      width: '100%',
      marginLeft: 30,
    },
    margin: {
      margin: theme.spacing(1),
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    textField: {
      width: '25ch',
    },
    formControlBox: {
      display: 'flex', 
    },
    buttonLink: {
      display: 'flex',
      gap: 24,
      marginTop: 120,
      marginBottom: 50,
    },
    containerForms: {
      maxWidth: 392,
      width: '100%',
      marginTop: 57,
    },
    h1NewProduct: {
      fontSize: 48,
    },
    newProducttitle: {
      display: 'flex',
      flexDirection: 'column',
      gap: 86,
    }
  }));