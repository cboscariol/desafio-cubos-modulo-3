import { makeStyles } from '@material-ui/core/styles';


export default makeStyles({
  root: {
    width: 232,
    minHeight: 433.34,
    position: 'relative',
    borderRadius: 16,
  },
  bottonContent: {
    display: 'flex',
    gap: 20,
    marginTop: 20,
  },
  descricao: {
    fontSize: 12,
  },
  deleteButton: {
    borderRadius: '50%',
    width: 48,
    minWidth: 48,
    height: 48,
    position: 'absolute',
    left: '3.53%',
    right: '92.79%',
    top: '9.63%',
    bottom: '80.4%',
  },
  cardImage: {
    objectFit: 'cover',
  },
  cardContent: {
    height: 200,
  }
});