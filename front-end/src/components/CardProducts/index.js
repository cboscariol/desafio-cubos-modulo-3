import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Image from './productImage.png';
import Delete from './delete.svg';
import useStyles from './style';



export default function CardProducts() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="foto-do-produto"
          height="240"
          image={Image}
        />

    <Button className={classes.deleteButton} variant="contained" color="secondary">
        <img src={Delete} alt="" />
    </Button>

        <CardContent>
         
          <Typography gutterBottom variant="h5" component="h2">
            Nome do Produto
          </Typography>
          
          <Typography variant="body2" color="textSecondary" component="p" className={classes.descricao}>
            Descrição do produto: Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis
          </Typography>
          
          <div className={classes.bottonContent}>
          <Typography variant="body2" color="textSecondary" component="p" >
            ESTOQUE
          </Typography>  
          
          <Typography variant="body2" color="textSecondary" component="p" >
            PREÇO
          </Typography>
          </div>
          
         
        
        </CardContent>
      </CardActionArea>
    </Card>
  );
}