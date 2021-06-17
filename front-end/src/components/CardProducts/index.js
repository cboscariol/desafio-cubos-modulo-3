import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Delete from './delete.svg';
import useStyles from './style';
import { del } from "../../Api";
import useAuth from "../../hook/useAuth";





export default function CardProducts(props) {
  const classes = useStyles();
  const { token } = useAuth();



  async function handleDelete(event) {
    event.stopPropagation();
    try {
      await del(`/produtos/${props.id}`, token);
      props.onDelete(props.id)
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <Card className={classes.root} onClick={() => props.onClick(props.id)}>
      <CardActionArea>
        <CardMedia
          className={classes.cardImage}
          component="img"
          alt="foto-do-produto"
          height="240"
          image={props.image}
        />

        <Button className={classes.deleteButton} variant="contained" color="secondary" onClick={handleDelete}>
          <img src={Delete} alt="delete-button" />
        </Button>

        <CardContent>

          <Typography gutterBottom variant="h5" component="h2">
            {props.nome}
          </Typography>

          <Typography variant="body2" color="textSecondary" component="p" className={classes.descricao}>
            {props.descricao}
          </Typography>

          <div className={classes.bottonContent}>
            <Typography variant="body2" color="textSecondary" component="p" >
              Estoque: {props.estoque} un
            </Typography>

            <Typography variant="body2" color="textSecondary" component="p" >
              Preço: R$ {props.preco}
            </Typography>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}