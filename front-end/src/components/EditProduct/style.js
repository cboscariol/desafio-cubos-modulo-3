import { makeStyles } from '@material-ui/core/styles';



export default makeStyles((theme) => ({
    root: {
      width: '100%',
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
    crieUmaContaLink: {
      width: '100%',
    },
    buttonLink: {
      display: 'flex',
      gap: 24,
      marginTop: 40,
    },
    containerForms: {
      maxWidth: 392,
      width: '100%',
      marginTop: 57,
    },
    h1NewProduct: {
      fontSize: 48,
    },
    h2NewProduct: {
      fontSize: 34,
    },
    newProducttitle: {
      display: 'flex',
      flexDirection: 'column',
      gap: 86,
    },
    containerFormsImage: {
      display: 'flex',
      gap: 150,
    },
    productImage: {
      borderRadius: 16,
      width: 308,
      height: 402,
    }
  }));