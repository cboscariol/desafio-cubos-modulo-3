import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
    principal: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      marginLeft: 'auto',
      width: '100%'
    },  
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'column',
      justifyContent: 'center',
      width: 392,
      height: 851,
      background: '#FFFFFF',
      boxShadow: '0px 8px 9px -5px rgba(0, 0, 0, 0.2), 0px 15px 22px 2px rgba(0, 0, 0, 0.14), 0px 6px 28px 5px rgba(0, 0, 0, 0.12)',
      borderRadius: 16,
    },
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 48

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
    h1Login: {
        fontSize: 34, 
    },
    jaPossuiContaLink: {
        display: 'flex',
        gap: 7,
    },
    fontStyleUser: {
      fontSize: 12
    }
  }));