import { makeStyles } from '@material-ui/core/styles';



export default makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    gap: 37,
    width: '100%',
    margin: 50,
  },
  buttonLink: {
    display: 'flex',
    gap: 24,
    marginTop: 40,
  },
  h1StoresName: {
    fontSize: 48,
  },
  h2StoresName: {
    fontSize: 34,
  },
  productstitle: {
    display: 'flex',
    flexDirection: 'column',
    gap: 86,
  },
  containerProducts: {
    display: 'flex',
    gap: 24,
  }
}));